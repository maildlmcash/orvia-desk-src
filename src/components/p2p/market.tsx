import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { FIATS, RAILS, sortCoins } from "@/lib/p2p/catalog";
import { personName, useI18n } from "@/lib/p2p/i18n";
import { adPrice, merchantLive } from "@/lib/p2p/logic";
import { useDesk } from "@/lib/p2p/store";
import type { Ad, Fiat, Rail } from "@/lib/p2p/types";
import { KycSheet, TradeSheet } from "./trade";
import { Button, fieldClass } from "./ui";
import { MarketRows } from "./market-rows";
import { ExpressShell } from "./market-express";
import { AdvancedFunnel, EMPTY_FUNNEL, funnelCount, funnelPass, type Funnel } from "./market-funnel";

const PAGE_SIZE = 10;

export function Market() {
  const { lang, t } = useI18n();
  const meId = useDesk((state) => state.meId);
  const users = useDesk((state) => state.users);
  const ads = useDesk((state) => state.ads);
  const coins = useDesk((state) => state.coins);
  const quotes = useDesk((state) => state.quotes);
  const passes = useDesk((state) => state.passes);
  const kycs = useDesk((state) => state.kycs);
  const [want, setWant] = useState<"buy" | "sell">("buy");
  const [coin, setCoin] = useState("USDT");
  const [fiat, setFiat] = useState<Fiat>("INR");
  const [rail, setRail] = useState<Rail | "all">("all");
  const [amount, setAmount] = useState("");
  const [query, setQuery] = useState("");
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [followOnly, setFollowOnly] = useState(false);
  const [merchantsOnly, setMerchantsOnly] = useState(false);
  const [beginnerMode, setBeginnerMode] = useState(false);
  const [sortKey, setSortKey] = useState<"price" | "completion" | "payMin" | "orders">("price");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [funnel, setFunnel] = useState<Funnel>(EMPTY_FUNNEL);
  const [deskTab, setDeskTab] = useState<"express" | "p2p" | "block">("p2p");
  const [page, setPage] = useState(0);
  const [trade, setTrade] = useState<Ad | null>(null);
  const [kycFor, setKycFor] = useState<string | null>(null);

  const listed = sortCoins(coins.filter((item) => item.listed));
  const me = users.find((user) => user.id === meId);
  const priceOf = (ad: Ad) => adPrice(ad, quotes, coins.find((item) => item.symbol === ad.coin)?.price);

  const rows = useMemo(() => {
    const fiatAmount = Number(amount);
    const side = want === "buy" ? "sell" : "buy";
    return ads
      .filter((ad) => {
        if (ad.paused || ad.side !== side || ad.coin !== coin || ad.fiat !== fiat || ad.available <= 0) return false;
        const merchant = users.find((user) => user.id === ad.userId);
        if (!merchant || !merchantLive(merchant)) return false;
        if ((me?.blocked ?? []).includes(merchant.id) || (merchant.blocked ?? []).includes(meId)) return false;
        if (onlineOnly && !merchant.online) return false;
        if (followOnly && !(me?.following ?? []).includes(merchant.id)) return false;
        if (merchantsOnly && merchant.sellerLicense?.status !== "active") return false;
        if (beginnerMode && !ad.beginner) return false;
        if (rail !== "all" && !ad.rails.includes(rail)) return false;
        if (!funnelPass(funnel, ad, merchant, me)) return false;
        if (query.trim()) {
          const name = personName(merchant.name, lang).toLowerCase();
          if (!name.includes(query.trim().toLowerCase())) return false;
        }
        if (amount && Number.isFinite(fiatAmount) && fiatAmount > 0) {
          const live = priceOf(ad);
          const gross = live > 0 ? fiatAmount / live : 0;
          if (gross < ad.min || gross > ad.max || gross > ad.available) return false;
        }
        return true;
      })
      .sort((a, b) => {
        const ma = users.find((u) => u.id === a.userId);
        const mb = users.find((u) => u.id === b.userId);
        let delta = 0;
        if (sortKey === "price") delta = priceOf(a) - priceOf(b);
        else if (sortKey === "completion") delta = (ma?.completion ?? 0) - (mb?.completion ?? 0);
        else if (sortKey === "payMin") delta = (a.payMin ?? 15) - (b.payMin ?? 15);
        else delta = (ma?.trades ?? 0) - (mb?.trades ?? 0);
        if (sortKey === "price") {
          const buyPrefer = want === "buy" ? delta : -delta;
          return sortDir === "asc" ? buyPrefer : -buyPrefer;
        }
        return sortDir === "asc" ? delta : -delta;
      });
  }, [ads, amount, beginnerMode, coin, coins, fiat, followOnly, funnel, lang, me, meId, merchantsOnly, onlineOnly, query, quotes, rail, sortDir, sortKey, users, want]);

  useEffect(() => {
    setPage(0);
  }, [want, coin, fiat, rail, amount, query, onlineOnly, followOnly, merchantsOnly, beginnerMode, sortDir, sortKey, deskTab, funnel]);

  const pageCount = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const pageRows = rows.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);
  const kycMerchant = users.find((user) => user.id === kycFor);
  const stripAds = pageRows.filter((ad) => (beginnerMode || want === "buy" ? ad.beginner : ad.featured));

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-3 px-3 py-3 sm:px-4">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-200">
        <span>{t("market.paperBanner")}</span>
        <span className="font-mono text-[10px] uppercase tracking-wide opacity-80">LIVE_MONEY=false</span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
        <div className="flex gap-1 rounded-md border border-line bg-surface p-1">
          {(["express", "p2p", "block"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              className={cn(
                "min-h-9 rounded px-3 text-xs font-bold uppercase tracking-wide",
                deskTab === tab ? "bg-primary text-primary-fg" : "text-muted",
              )}
              onClick={() => setDeskTab(tab)}
            >
              {t(`market.tab.${tab}`)}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 text-xs font-semibold">
          <Link to="/orders" className="text-muted hover:text-fg">{t("nav.orders")}</Link>
          <Link to="/wallet" className="text-muted hover:text-fg">{t("market.userCenter")}</Link>
          <span className="text-muted" title={t("market.helpStub")}>{t("market.help")}</span>
        </div>
      </div>

      {deskTab === "express" ? <ExpressShell priceOf={priceOf} setTrade={setTrade} setKycFor={setKycFor} /> : null}
      {deskTab === "block" ? (
        <p className="rounded-md border border-dashed border-line px-4 py-8 text-center text-sm text-muted">
          {t("market.blockStub")}
        </p>
      ) : null}

      {deskTab === "p2p" ? (
      <>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="flex gap-1">
          {(["buy", "sell"] as const).map((side) => (
            <button
              key={side}
              type="button"
              className={cn(
                "min-h-11 border-b-2 px-4 text-sm font-semibold",
                want === side
                  ? side === "buy"
                    ? "border-buy text-buy"
                    : "border-sell text-sell"
                  : "border-transparent text-muted",
              )}
              onClick={() => setWant(side)}
            >
              {t(`side.${side}`)}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted">{t("common.count", { n: rows.length })}</p>
      </div>

      <div className="flex gap-1 overflow-x-auto border-b border-line">
        {listed.map((item) => (
          <button
            key={item.symbol}
            type="button"
            className={cn(
              "min-h-11 shrink-0 border-b-2 px-3 text-sm font-semibold",
              coin === item.symbol ? "border-primary text-fg" : "border-transparent text-muted",
            )}
            onClick={() => setCoin(item.symbol)}
          >
            <span className="font-mono">{item.symbol}</span>
          </button>
        ))}
      </div>

      <div className="sticky top-0 z-20 grid gap-2 rounded-md border border-line bg-surface/95 p-3 backdrop-blur lg:grid-cols-[1.4fr_1fr_1fr_auto]">
        <div className="flex min-h-11 overflow-hidden rounded-md border border-line bg-bg">
          <input
            className="h-11 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none"
            inputMode="decimal"
            placeholder={t("market.amountPh")}
            aria-label={t("market.amountPh")}
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          <select
            className="h-11 border-s border-line bg-surface-2 px-2 text-sm font-semibold outline-none"
            value={fiat}
            onChange={(event) => setFiat(event.target.value as Fiat)}
            aria-label={t("common.fiat")}
          >
            {FIATS.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>
        <select
          className={fieldClass}
          value={rail}
          onChange={(event) => setRail(event.target.value as Rail | "all")}
          aria-label={t("common.payment")}
        >
          <option value="all">{t("common.all")}</option>
          {RAILS.map((code) => (
            <option key={code} value={code}>
              {t(`rail.${code}`)}
            </option>
          ))}
        </select>
        <div className="flex gap-2">
          <select
            className={fieldClass}
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as typeof sortKey)}
            aria-label={t("market.sortBy")}
          >
            <option value="price">{t("market.sortPrice")}</option>
            <option value="completion">{t("market.sortCompletion")}</option>
            <option value="payMin">{t("market.sortPayMin")}</option>
            <option value="orders">{t("market.sortOrders")}</option>
          </select>
          <button
            type="button"
            className={cn(
              "min-h-11 rounded-md border border-line px-3 text-sm font-semibold",
              sortDir === "asc" ? "bg-primary text-primary-fg" : "bg-surface-2",
            )}
            onClick={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
          >
            {sortDir === "asc" ? t("market.sortAsc") : t("market.sortDesc")}
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          <input
            className={cn(fieldClass, "min-w-[10rem] flex-1")}
            placeholder={t("common.search")}
            aria-label={t("common.search")}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button
            type="button"
            className={cn("min-h-11 rounded-md px-3 text-sm font-semibold", onlineOnly ? "bg-primary text-primary-fg" : "bg-surface-2")}
            onClick={() => setOnlineOnly((value) => !value)}
          >
            {t("market.onlineOnly")}
          </button>
          <button
            type="button"
            className={cn("min-h-11 rounded-md px-3 text-sm font-semibold", followOnly ? "bg-primary text-primary-fg" : "bg-surface-2")}
            onClick={() => setFollowOnly((value) => !value)}
          >
            {t("market.followingOnly")}
          </button>
          <button
            type="button"
            className={cn("min-h-11 rounded-md px-3 text-sm font-semibold", merchantsOnly ? "bg-primary text-primary-fg" : "bg-surface-2")}
            onClick={() => setMerchantsOnly((value) => !value)}
          >
            {t("market.merchantsOnly")}
          </button>
          <button
            type="button"
            className={cn("min-h-11 rounded-md px-3 text-sm font-semibold", beginnerMode ? "bg-buy text-white" : "bg-surface-2")}
            onClick={() => setBeginnerMode((value) => !value)}
          >
            {t("market.beginnerMode")}
          </button>
          <button
            type="button"
            className={cn("min-h-11 rounded-md px-3 text-sm font-semibold", showAdvanced ? "bg-primary text-primary-fg" : "bg-surface-2")}
            onClick={() => setShowAdvanced((value) => !value)}
          >
            {t("market.advancedFilters")}
            {funnelCount(funnel) > 0 ? ` (${funnelCount(funnel)})` : ""}
          </button>
        </div>
      </div>
      {showAdvanced ? <AdvancedFunnel value={funnel} onChange={setFunnel} /> : null}

      {beginnerMode || want === "buy" ? (
        <div className="rounded-md border border-buy/30 bg-buy/10 px-3 py-2 text-xs font-medium text-buy">
          {t("market.beginnerZone")}
          {stripAds.length === 0 ? <span className="ms-2 text-muted">· {t("market.stripEmpty")}</span> : null}
        </div>
      ) : null}
      {want === "sell" && !beginnerMode ? (
        <div className="rounded-md border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-medium text-primary">
          {t("market.featuredAd")}
          {stripAds.length === 0 ? <span className="ms-2 text-muted">· {t("market.stripEmpty")}</span> : null}
        </div>
      ) : null}

      {rows.length === 0 ? (
        <p className="rounded-md border border-dashed border-line px-4 py-10 text-center text-sm text-muted">{t("market.empty")}</p>
      ) : (
        <div className="grid overflow-hidden rounded-md border border-line bg-surface">
          <div className="hidden grid-cols-[1.5fr_0.9fr_1.1fr_1fr_auto] gap-3 border-b border-line bg-surface-2 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted lg:grid">
            <span>{t("market.colAdvertisers")}</span>
            <span>{t("market.colPrice")}</span>
            <span>{t("market.colAvailLimit")}</span>
            <span>{t("market.colPayment")}</span>
            <span className="text-end">{t("market.colTrade")}</span>
          </div>
          <MarketRows
            pageRows={pageRows}
            users={users}
            meId={meId}
            kycs={kycs}
            passes={passes}
            want={want}
            amount={amount}
            priceOf={priceOf}
            setTrade={setTrade}
            setKycFor={setKycFor}
          />
        </div>
      )}

      {rows.length > 0 ? (
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <p className="text-muted">
            {t("market.pageOf", { page: safePage + 1, pages: pageCount, n: rows.length })}
          </p>
          <div className="flex gap-2">
            <Button variant="line" disabled={safePage <= 0} onClick={() => setPage((p) => Math.max(0, p - 1))} className="min-w-11 px-2">
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="line"
              disabled={safePage >= pageCount - 1}
              onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
              className="min-w-11 px-2"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      ) : null}

      <p className="text-center text-[11px] text-muted">{t("market.findAdMissing")}</p>
      </>
      ) : null}

      {trade ? <TradeSheet ad={trade} onClose={() => setTrade(null)} /> : null}
      {kycMerchant ? (
        <KycSheet
          sellerId={kycMerchant.id}
          title={t("trade.kycTitle")}
          note={t("trade.needPass", { name: personName(kycMerchant.name, lang) })}
          onClose={() => setKycFor(null)}
        />
      ) : null}
    </div>
  );
}
