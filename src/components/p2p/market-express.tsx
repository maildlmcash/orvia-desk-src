import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { FIATS, sortCoins } from "@/lib/p2p/catalog";
import { numFlex } from "@/lib/p2p/format";
import { personName, useI18n } from "@/lib/p2p/i18n";
import { computeFees, merchantLive, round4 } from "@/lib/p2p/logic";
import { useDesk } from "@/lib/p2p/store";
import type { Ad, Fiat } from "@/lib/p2p/types";
import { MarketRows } from "./market-rows";
import { fieldClass } from "./ui";

/**
 * Slice #2 — Express page shell (paper). Routes the user to the best live paper ad for the amount.
 * No separate Express liquidity engine / guaranteed price (MISSING) — quote = best ad price in the paper book.
 */
export function ExpressShell({
  priceOf,
  setTrade,
  setKycFor,
}: {
  priceOf: (ad: Ad) => number;
  setTrade: (ad: Ad) => void;
  setKycFor: (id: string) => void;
}) {
  const { lang, t } = useI18n();
  const meId = useDesk((state) => state.meId);
  const users = useDesk((state) => state.users);
  const ads = useDesk((state) => state.ads);
  const coins = useDesk((state) => state.coins);
  const passes = useDesk((state) => state.passes);
  const kycs = useDesk((state) => state.kycs);
  const settings = useDesk((state) => state.settings);
  const [want, setWant] = useState<"buy" | "sell">("buy");
  const [coin, setCoin] = useState("USDT");
  const [fiat, setFiat] = useState<Fiat>("INR");
  const [amount, setAmount] = useState("");
  const listed = sortCoins(coins.filter((item) => item.listed));
  const me = users.find((user) => user.id === meId);
  const fiatAmount = Number(amount);
  const hasAmount = amount.trim() !== "" && Number.isFinite(fiatAmount) && fiatAmount > 0;

  const candidates = useMemo(() => {
    const side = want === "buy" ? "sell" : "buy";
    return ads
      .filter((ad) => {
        if (ad.paused || ad.side !== side || ad.coin !== coin || ad.fiat !== fiat || ad.available <= 0) return false;
        if (ad.userId === meId) return false;
        const merchant = users.find((user) => user.id === ad.userId);
        if (!merchant || !merchantLive(merchant)) return false;
        if ((me?.blocked ?? []).includes(merchant.id) || (merchant.blocked ?? []).includes(meId)) return false;
        if (hasAmount) {
          const live = priceOf(ad);
          const gross = live > 0 ? fiatAmount / live : 0;
          if (gross < ad.min || gross > ad.max || gross > ad.available) return false;
        }
        return true;
      })
      .sort((a, b) => (want === "buy" ? priceOf(a) - priceOf(b) : priceOf(b) - priceOf(a)));
  }, [ads, coin, fiat, fiatAmount, hasAmount, me, meId, priceOf, users, want]);

  const best = candidates[0];
  const bestPrice = best ? priceOf(best) : 0;
  const gross = best && hasAmount && bestPrice > 0 ? round4(fiatAmount / bestPrice) : 0;
  const fees = gross > 0 ? computeFees(gross, settings) : null;
  const myFee = fees ? (want === "buy" ? fees.buyerFee : fees.sellerFee) : 0;
  const merchant = best ? users.find((u) => u.id === best.userId) : undefined;

  return (
    <div className="grid gap-3">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-dashed border-line bg-surface-2 px-3 py-2 text-xs text-muted">
        <span>{t("market.express.intro")}</span>
        <span className="rounded-md bg-amber-500/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-200">PAPER · SHELL</span>
      </div>
      <div className="mx-auto grid w-full max-w-xl gap-3 rounded-md border border-line bg-surface p-4">
        <div className="flex gap-1">
          {(["buy", "sell"] as const).map((side) => (
            <button
              key={side}
              type="button"
              className={cn(
                "min-h-11 flex-1 rounded-md text-sm font-semibold",
                want === side ? (side === "buy" ? "bg-buy text-buy-fg" : "bg-sell text-sell-fg") : "bg-surface-2 text-muted",
              )}
              onClick={() => setWant(side)}
            >
              {t(`side.${side}`)}
            </button>
          ))}
        </div>
        <label className="grid gap-1 text-sm">
          <span className="text-xs font-medium text-muted">{want === "buy" ? t("market.express.iPay") : t("market.express.iReceive")}</span>
          <div className="flex min-h-11 overflow-hidden rounded-md border border-line bg-bg">
            <input
              className="h-11 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none"
              inputMode="decimal"
              placeholder={t("market.amountPh")}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <select
              className="h-11 border-s border-line bg-surface-2 px-2 text-sm font-semibold outline-none"
              value={fiat}
              onChange={(e) => setFiat(e.target.value as Fiat)}
              aria-label={t("common.fiat")}
            >
              {FIATS.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-xs font-medium text-muted">{want === "buy" ? t("market.express.iReceive") : t("market.express.iSell")}</span>
          <select className={fieldClass} value={coin} onChange={(e) => setCoin(e.target.value)}>
            {listed.map((item) => (
              <option key={item.symbol} value={item.symbol}>
                {item.symbol}
              </option>
            ))}
          </select>
        </label>
        <div className="grid gap-1 rounded-md border border-line bg-bg p-3 font-mono text-xs">
          <p className="flex justify-between">
            <span className="text-muted">{t("market.express.bestPrice")}</span>
            <span>{best ? `${numFlex(bestPrice, lang)} ${fiat}` : "—"}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-muted">{want === "buy" ? t("market.express.estReceive") : t("market.express.estSell")}</span>
            <span>{gross > 0 ? `${numFlex(gross, lang)} ${coin}` : "—"}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-muted">{t("market.express.fee")}</span>
            <span>{fees ? `${numFlex(myFee, lang)} ${coin}` : "—"}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-muted">{t("market.express.matches")}</span>
            <span>{candidates.length}</span>
          </p>
          {merchant ? (
            <p className="flex justify-between">
              <span className="text-muted">{t("market.colAdvertisers")}</span>
              <span>
                {personName(merchant.name, lang)} · {merchant.trades} · {merchant.completion}%
              </span>
            </p>
          ) : null}
        </div>
      </div>
      {best ? (
        <div className="mx-auto grid w-full max-w-4xl overflow-hidden rounded-md border border-line bg-surface">
          <MarketRows
            pageRows={[best]}
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
      ) : (
        <p className="rounded-md border border-dashed border-line px-4 py-8 text-center text-sm text-muted">{t("market.express.none")}</p>
      )}
      <p className="text-center text-[11px] text-muted">{t("market.express.missing")}</p>
    </div>
  );
}
