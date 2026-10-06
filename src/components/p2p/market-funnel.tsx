import { cn } from "@/lib/cn";
import { useI18n } from "@/lib/p2p/i18n";
import type { Ad, User } from "@/lib/p2p/types";
import { fieldClass } from "./ui";

/**
 * Slice #2 — Advanced funnel filters (Binance-style), driven only by real paper fields on Ad / User.
 * No invented metrics: completion/trades/online come from User; payMin/needKyc/minComp/priceMode/available from Ad.
 */
export interface Funnel {
  minCompletion: number;
  minTrades: number;
  maxPayMin: number;
  minAvailable: number;
  priceMode: "all" | "fixed" | "float";
  noExtraId: boolean;
  eligibleOnly: boolean;
}

export const EMPTY_FUNNEL: Funnel = {
  minCompletion: 0,
  minTrades: 0,
  maxPayMin: 0,
  minAvailable: 0,
  priceMode: "all",
  noExtraId: false,
  eligibleOnly: false,
};

export function funnelCount(f: Funnel) {
  let n = 0;
  if (f.minCompletion > 0) n++;
  if (f.minTrades > 0) n++;
  if (f.maxPayMin > 0) n++;
  if (f.minAvailable > 0) n++;
  if (f.priceMode !== "all") n++;
  if (f.noExtraId) n++;
  if (f.eligibleOnly) n++;
  return n;
}

export function funnelPass(f: Funnel, ad: Ad, merchant: User, me: User | undefined) {
  if (f.minCompletion > 0 && merchant.completion < f.minCompletion) return false;
  if (f.minTrades > 0 && merchant.trades < f.minTrades) return false;
  if (f.maxPayMin > 0 && (ad.payMin ?? 15) > f.maxPayMin) return false;
  if (f.minAvailable > 0 && ad.available < f.minAvailable) return false;
  if (f.priceMode !== "all" && (ad.priceMode ?? "fixed") !== f.priceMode) return false;
  if (f.noExtraId && ad.needKyc) return false;
  if (f.eligibleOnly && (ad.minComp ?? 0) > (me?.completion ?? 0)) return false;
  return true;
}

const COMPLETION_STEPS = [0, 80, 90, 95, 98];
const TRADE_STEPS = [0, 10, 50, 100, 500];
const PAY_STEPS = [0, 15, 30, 45];

export function AdvancedFunnel({ value, onChange }: { value: Funnel; onChange: (next: Funnel) => void }) {
  const { t } = useI18n();
  const patch = (p: Partial<Funnel>) => onChange({ ...value, ...p });
  const active = funnelCount(value);
  return (
    <div className="grid gap-3 rounded-md border border-line bg-surface-2 p-3 text-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          {t("market.funnel.title")} {active > 0 ? `· ${t("market.funnel.active", { n: active })}` : ""}
        </p>
        <button
          type="button"
          className="min-h-9 rounded-md border border-line px-3 text-xs font-semibold disabled:opacity-50"
          disabled={active === 0}
          onClick={() => onChange(EMPTY_FUNNEL)}
        >
          {t("market.funnel.reset")}
        </button>
      </div>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <label className="grid gap-1">
          <span className="text-xs text-muted">{t("market.funnel.minCompletion")}</span>
          <select className={fieldClass} value={value.minCompletion} onChange={(e) => patch({ minCompletion: Number(e.target.value) })}>
            {COMPLETION_STEPS.map((n) => (
              <option key={n} value={n}>
                {n === 0 ? t("common.all") : `≥ ${n}%`}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1">
          <span className="text-xs text-muted">{t("market.funnel.minTrades")}</span>
          <select className={fieldClass} value={value.minTrades} onChange={(e) => patch({ minTrades: Number(e.target.value) })}>
            {TRADE_STEPS.map((n) => (
              <option key={n} value={n}>
                {n === 0 ? t("common.all") : `≥ ${n}`}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1">
          <span className="text-xs text-muted">{t("market.funnel.maxPayMin")}</span>
          <select className={fieldClass} value={value.maxPayMin} onChange={(e) => patch({ maxPayMin: Number(e.target.value) })}>
            {PAY_STEPS.map((n) => (
              <option key={n} value={n}>
                {n === 0 ? t("common.all") : `≤ ${n} min`}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1">
          <span className="text-xs text-muted">{t("market.funnel.priceMode")}</span>
          <select className={fieldClass} value={value.priceMode} onChange={(e) => patch({ priceMode: e.target.value as Funnel["priceMode"] })}>
            <option value="all">{t("common.all")}</option>
            <option value="fixed">{t("market.funnel.fixed")}</option>
            <option value="float">{t("market.funnel.float")}</option>
          </select>
        </label>
        <label className="grid gap-1">
          <span className="text-xs text-muted">{t("market.funnel.minAvailable")}</span>
          <input
            className={fieldClass}
            inputMode="decimal"
            value={value.minAvailable > 0 ? String(value.minAvailable) : ""}
            placeholder="0"
            onChange={(e) => {
              const n = Number(e.target.value);
              patch({ minAvailable: Number.isFinite(n) && n > 0 ? n : 0 });
            }}
          />
        </label>
        <div className="flex flex-wrap items-end gap-2 lg:col-span-3">
          <button
            type="button"
            className={cn("min-h-11 rounded-md px-3 text-sm font-semibold", value.noExtraId ? "bg-primary text-primary-fg" : "bg-surface")}
            onClick={() => patch({ noExtraId: !value.noExtraId })}
          >
            {t("market.funnel.noExtraId")}
          </button>
          <button
            type="button"
            className={cn("min-h-11 rounded-md px-3 text-sm font-semibold", value.eligibleOnly ? "bg-primary text-primary-fg" : "bg-surface")}
            onClick={() => patch({ eligibleOnly: !value.eligibleOnly })}
          >
            {t("market.funnel.eligibleOnly")}
          </button>
        </div>
      </div>
      <p className="text-[11px] text-muted">{t("market.funnel.note")}</p>
    </div>
  );
}
