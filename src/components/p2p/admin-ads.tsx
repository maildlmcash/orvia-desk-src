import { useMemo, useState } from "react";
import { fiatAmt, numFlex } from "@/lib/p2p/format";
import { personName, useI18n } from "@/lib/p2p/i18n";
import { adPrice } from "@/lib/p2p/logic";
import { getAdminApi } from "@/lib/p2p/admin-api";
import { useDesk } from "@/lib/p2p/store";
import type { Ad, Fiat } from "@/lib/p2p/types";
import { Button, Empty, fieldClass } from "./ui";
import { DeskFilters, Pager, PAGE_SIZE } from "./admin-chrome";

export function AdsModeration() {
  const { lang, t } = useI18n();
  const ads = useDesk((state) => state.ads);
  const users = useDesk((state) => state.users);
  const coins = useDesk((state) => state.coins);
  const quotes = useDesk((state) => state.quotes);
  const adminApi = getAdminApi();
  const adminToggleAd = adminApi.adminToggleAd;
  const adminCloseAd = adminApi.adminCloseAd;
  const adminPatchAd = adminApi.adminPatchAd;
  const [query, setQuery] = useState("");
  const [side, setSide] = useState<"all" | "buy" | "sell">("all");
  const [page, setPage] = useState(0);
  const priceOf = (ad: Ad) => adPrice(ad, quotes, coins.find((item) => item.symbol === ad.coin)?.price);
  const filtered = useMemo(() => {
    return ads.filter((ad) => {
      if (side !== "all" && ad.side !== side) return false;
      const merchant = users.find((u) => u.id === ad.userId);
      const name = merchant ? personName(merchant.name, lang).toLowerCase() : "";
      if (query.trim() && !name.includes(query.trim().toLowerCase()) && !ad.coin.toLowerCase().includes(query.trim().toLowerCase())) return false;
      return true;
    });
  }, [ads, lang, query, side, users]);
  const slice = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  return (
    <div className="grid gap-3">
      <DeskFilters query={query} setQuery={(v) => { setQuery(v); setPage(0); }}>
        <select className={fieldClass} value={side} onChange={(e) => { setSide(e.target.value as typeof side); setPage(0); }}>
          <option value="all">{t("common.all")}</option>
          <option value="sell">{t("side.sell")}</option>
          <option value="buy">{t("side.buy")}</option>
        </select>
      </DeskFilters>
      <div className="overflow-hidden rounded-md border border-line bg-surface">
        <div className="hidden grid-cols-[1.2fr_0.7fr_0.8fr_1fr_auto] gap-3 border-b border-line bg-surface-2 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted lg:grid">
          <span>{t("market.colAdvertisers")}</span>
          <span>{t("common.price")}</span>
          <span>{t("common.status")}</span>
          <span>{t("common.payment")}</span>
          <span>{t("common.actions")}</span>
        </div>
        {slice.length === 0 ? <Empty>{t("admin.queueEmpty")}</Empty> : null}
        {slice.map((ad) => {
          const merchant = users.find((u) => u.id === ad.userId);
          const live = priceOf(ad);
          return (
            <div key={ad.id} className="grid gap-2 border-b border-line px-3 py-3 last:border-b-0 lg:grid-cols-[1.2fr_0.7fr_0.8fr_1fr_auto] lg:items-center">
              <div>
                <p className="font-semibold">{merchant ? personName(merchant.name, lang) : ad.userId}</p>
                <p className="text-xs text-muted">
                  {t(`side.${ad.side === "sell" ? "buy" : "sell"}`)} · {ad.coin}/{ad.fiat} · {numFlex(ad.available, lang)} avail
                </p>
              </div>
              <p className="font-mono font-semibold">{fiatAmt(live, ad.fiat as Fiat, lang)}</p>
              <p className="text-sm">
                {ad.paused ? t("ads.pause") : t("common.active")}
                {ad.featured ? ` · ${t("market.featuredTag")}` : ""}
                {ad.beginner ? ` · ${t("market.beginnerTag")}` : ""}
              </p>
              <div className="flex flex-wrap gap-1">
                {ad.rails.map((r) => (
                  <span key={r} className="rounded bg-surface-2 px-2 py-0.5 text-xs">{t(`rail.${r}`)}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                <Button variant="line" className="min-h-9 px-2 text-xs" onClick={() => adminToggleAd(ad.id)}>
                  {ad.paused ? t("ads.resume") : t("ads.pause")}
                </Button>
                <Button
                  variant="line"
                  className="min-h-9 px-2 text-xs"
                  onClick={() => adminPatchAd(ad.id, { featured: !ad.featured })}
                >
                  {t("market.featuredTag")}
                </Button>
                <Button
                  variant="line"
                  className="min-h-9 px-2 text-xs"
                  onClick={() => adminPatchAd(ad.id, { beginner: !ad.beginner })}
                >
                  {t("market.beginnerTag")}
                </Button>
                <Button variant="line" className="min-h-9 px-2 text-xs" onClick={() => adminCloseAd(ad.id)}>
                  {t("ads.close")}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <Pager page={page} setPage={setPage} total={filtered.length} />
    </div>
  );
}
