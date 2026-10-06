import { BadgeCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";
import { fiatAmt, numFlex } from "@/lib/p2p/format";
import { personName, useI18n } from "@/lib/p2p/i18n";
import { merchantLive } from "@/lib/p2p/logic";
import type { Ad, User, Kyc, Pass } from "@/lib/p2p/types";
import { Button } from "./ui";

type Props = {
  pageRows: Ad[];
  users: User[];
  meId: string;
  kycs: Kyc[];
  passes: Pass[];
  want: "buy" | "sell";
  amount: string;
  priceOf: (ad: Ad) => number;
  setTrade: (ad: Ad) => void;
  setKycFor: (id: string) => void;
};

export function MarketRows({ pageRows, users, meId, kycs, passes, want, amount, priceOf, setTrade, setKycFor }: Props) {
  const { lang, t } = useI18n();
  return (
    <>
      {pageRows.map((ad) => {
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
          <article
            key={ad.id}
            className="grid gap-3 border-b border-line px-3 py-3 last:border-b-0 lg:grid-cols-[1.5fr_0.9fr_1.1fr_1fr_auto] lg:items-center"
          >
            <div className="flex items-center gap-3">
              <span className="relative grid size-11 shrink-0 place-items-center rounded-full bg-surface-2 text-sm font-semibold">
                {personName(merchant.name, lang).slice(0, 1)}
                <span
                  className={cn(
                    "absolute bottom-0 end-0 size-2.5 rounded-full ring-2 ring-surface",
                    merchant.online ? "bg-buy" : "bg-muted",
                  )}
                  aria-label={merchant.online ? t("common.online") : t("market.offline")}
                />
              </span>
              <div className="min-w-0">
                <p className="flex flex-wrap items-center gap-1 font-semibold">
                  <span className="truncate">{personName(merchant.name, lang)}</span>
                  {merchant.sellerLicense?.status === "active" ? (
                    <BadgeCheck className="size-4 shrink-0 text-buy" aria-label={t("market.verified")} />
                  ) : null}
                  {ad.beginner ? (
                    <span className="rounded bg-buy/15 px-1.5 py-0.5 text-[10px] font-bold uppercase text-buy">{t("market.beginnerTag")}</span>
                  ) : null}
                  {ad.featured ? (
                    <span className="rounded bg-primary/15 px-1.5 py-0.5 text-[10px] font-bold uppercase text-primary">{t("market.featuredTag")}</span>
                  ) : null}
                </p>
                <p className="text-xs text-muted">
                  {merchant.trades} {t("common.trades")} · {merchant.completion}% {t("common.completion")}
                </p>
                <p className="text-xs text-muted">
                  {ad.priceMode === "float" ? `${t("market.float")} · ` : ""}
                  {t("common.minutes", { n: ad.payMin ?? 15 })}
                  {(ad.minComp ?? 0) > 0 ? ` · ${t("market.minComp", { n: ad.minComp ?? 0 })}` : ""}
                  {ad.needKyc ? ` · ${t("market.extraId")}` : ""}
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs text-muted lg:hidden">{t("market.colPrice")}</p>
              <p className={cn("font-mono text-xl font-semibold tabular-nums", want === "buy" ? "text-buy" : "text-sell")}>
                {fiatAmt(live, ad.fiat, lang)}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted lg:hidden">{t("market.colAvailLimit")}</p>
              <p className="text-sm">
                <span className="font-mono tabular-nums">
                  {numFlex(ad.available, lang)} {ad.coin}
                </span>
                <span className="mt-1 block text-xs text-muted">
                  {fiatAmt(ad.min * live, ad.fiat, lang)} – {fiatAmt(ad.max * live, ad.fiat, lang)}
                </span>
                {amount && Number(amount) > 0 && live > 0 ? (
                  <span className="mt-1 block text-[11px] font-semibold text-primary">
                    {want === "buy"
                      ? t("market.youReceive", { n: numFlex(Number(amount) / live, lang), coin: ad.coin })
                      : t("market.youPay", { n: numFlex(Number(amount) / live, lang), coin: ad.coin })}
                  </span>
                ) : null}
              </p>
            </div>
            <div className="flex flex-wrap gap-1">
              {ad.rails.map((item) => (
                <span key={item} className="rounded-md border border-line bg-surface-2 px-2 py-1 text-xs font-medium">
                  {t(`rail.${item}`)}
                </span>
              ))}
            </div>
            {identity ? (
              <Link
                to="/identity"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-fg lg:w-auto"
              >
                {label}
              </Link>
            ) : (
              <Button variant={want === "buy" ? "buy" : "sell"} disabled={!action} onClick={action ?? undefined} className="w-full min-w-24 lg:w-auto">
                {label}
              </Button>
            )}
          </article>
        );
      })}
    </>
  );
}
