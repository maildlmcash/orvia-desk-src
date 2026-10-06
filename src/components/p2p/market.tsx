import { BadgeCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { FIATS, RAILS, sortCoins } from "@/lib/p2p/catalog";
import { fiatAmt, numFlex } from "@/lib/p2p/format";
import { personName, useI18n } from "@/lib/p2p/i18n";
import { adPrice, merchantLive } from "@/lib/p2p/logic";
import { useDesk } from "@/lib/p2p/store";
import type { Ad, Fiat, Rail } from "@/lib/p2p/types";
import { KycSheet, TradeSheet } from "./trade";
import { Button, fieldClass } from "./ui";

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
        if (rail !== "all" && !ad.rails.includes(rail)) return false;
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
      .sort((a, b) => (want === "buy" ? priceOf(a) - priceOf(b) : priceOf(b) - priceOf(a)));
  }, [ads, amount, coin, coins, fiat, followOnly, lang, me, meId, onlineOnly, query, quotes, rail, users, want]);

  const kycMerchant = users.find((user) => user.id === kycFor);

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-3 px-3 py-3 sm:px-4">
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
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        <input
          className={fieldClass}
          inputMode="decimal"
          placeholder={t("market.amountPh")}
          aria-label={t("market.amountPh")}
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <select className={fieldClass} value={fiat} onChange={(event) => setFiat(event.target.value as Fiat)} aria-label={t("common.fiat")}>
          {FIATS.map((code) => (
            <option key={code} value={code}>
              {t(`fiatName.${code}`)}
            </option>
          ))}
        </select>
        <select className={fieldClass} value={rail} onChange={(event) => setRail(event.target.value as Rail | "all")} aria-label={t("common.payment")}>
          <option value="all">{t("common.all")}</option>
          {RAILS.map((code) => (
            <option key={code} value={code}>
              {t(`rail.${code}`)}
            </option>
          ))}
        </select>
        <input
          className={fieldClass}
          placeholder={t("common.search")}
          aria-label={t("common.search")}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="flex gap-2">
          <button
            type="button"
            className={cn("min-h-11 flex-1 rounded-md px-3 text-sm font-semibold", onlineOnly ? "bg-primary text-primary-fg" : "bg-surface-2")}
            onClick={() => setOnlineOnly((value) => !value)}
          >
            {t("market.onlineOnly")}
          </button>
          <button
            type="button"
            className={cn("min-h-11 flex-1 rounded-md px-3 text-sm font-semibold", followOnly ? "bg-primary text-primary-fg" : "bg-surface-2")}
            onClick={() => setFollowOnly((value) => !value)}
          >
            {t("market.followingOnly")}
          </button>
        </div>
      </div>
      {rows.length === 0 ? (
        <p className="rounded-md border border-dashed border-line px-4 py-10 text-center text-sm text-muted">{t("market.empty")}</p>
      ) : (
        <div className="grid">
          <div className="hidden grid-cols-[1.4fr_0.9fr_1fr_1fr_auto] gap-3 border-b border-line px-1 pb-2 text-xs font-medium text-muted lg:grid">
            <span>{t("common.merchant")}</span>
            <span>{t("common.price")}</span>
            <span>{t("common.limits")}</span>
            <span>{t("common.payment")}</span>
            <span />
          </div>
          {rows.map((ad) => {
            const merchant = users.find((user) => user.id === ad.userId);
            if (!merchant) return null;
            const meRow = users.find((user) => user.id === meId);
            const verified = !!meRow?.docLast4 || kycs.some((item) => item.userId === meId && item.status === "approved");
            const pass = passes.find((item) => item.buyerId === meId && item.sellerId === merchant.id && item.status === "active");
            const pending = kycs.some(
              (item) => item.userId === meId && item.sellerId === merchant.id && item.purpose === "buyer" && item.status === "pending",
            );
            const mine = ad.userId === meId;
            const live = priceOf(ad);
            let label = want === "buy" ? t("side.buy") : t("side.sell");
            let action: (() => void) | null = () => setTrade(ad);
            let identity = false;
            if (mine) {
              label = t("market.yourAd");
              action = null;
            } else if (ad.side === "sell" && !pass) {
              label = pending ? t("market.waiting") : t("market.verify");
              action = pending ? null : () => setKycFor(merchant.id);
            } else if (ad.needKyc && !verified) {
              label = t("market.extraId");
              action = null;
              identity = true;
            } else if (ad.side === "buy" && (!meRow || !merchantLive(meRow))) {
              label = t("nav.identity");
              action = null;
              identity = true;
            }
            return (
              <article key={ad.id} className="grid gap-3 border-b border-line px-1 py-3 lg:grid-cols-[1.4fr_0.9fr_1fr_1fr_auto] lg:items-center">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-surface-2 text-sm font-semibold">
                    {personName(merchant.name, lang).slice(0, 1)}
                  </span>
                  <div>
                    <p className="flex items-center gap-1 font-semibold">
                      {personName(merchant.name, lang)}
                      <BadgeCheck className="size-4 text-buy" aria-label={t("market.verified")} />
                    </p>
                    <p className="text-xs text-muted">
                      {merchant.online ? t("common.online") : ""} · {merchant.trades} {t("common.trades")} · {merchant.completion}% {t("common.completion")}
                    </p>
                    <p className="text-xs text-muted">
                      {ad.priceMode === "float" ? `${t("market.float")} · ` : ""}
                      {t("common.minutes", { n: ad.payMin ?? 15 })}
                      {(ad.minComp ?? 0) > 0 ? ` · ${t("market.minComp", { n: ad.minComp ?? 0 })}` : ""}
                      {ad.needKyc ? ` · ${t("market.extraId")}` : ""}
                    </p>
                  </div>
                </div>
                <p className={cn("font-mono text-xl font-semibold tabular-nums", want === "buy" ? "text-buy" : "text-sell")}>{fiatAmt(live, ad.fiat, lang)}</p>
                <p className="text-sm">
                  <span className="font-mono tabular-nums">{numFlex(ad.available, lang)} {ad.coin}</span>
                  <span className="mt-1 block text-muted">
                    {fiatAmt(ad.min * live, ad.fiat, lang)} – {fiatAmt(ad.max * live, ad.fiat, lang)}
                  </span>
                </p>
                <div className="flex flex-wrap gap-1">
                  {ad.rails.map((item) => (
                    <span key={item} className="rounded-md bg-surface-2 px-2 py-1 text-xs font-medium">
                      {t(`rail.${item}`)}
                    </span>
                  ))}
                </div>
                {identity ? (
                  <Link to="/identity" className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-fg lg:w-auto">
                    {label}
                  </Link>
                ) : (
                  <Button variant={want === "buy" ? "buy" : "sell"} disabled={!action} onClick={action ?? undefined} className="w-full lg:w-auto">
                    {label}
                  </Button>
                )}
              </article>
            );
          })}
        </div>
      )}
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
