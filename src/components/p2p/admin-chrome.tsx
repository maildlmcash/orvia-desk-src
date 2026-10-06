import { type ReactNode } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { cn } from "@/lib/cn";
import { useI18n } from "@/lib/p2p/i18n";
import { Button, fieldClass, Panel } from "./ui";

export const PAGE_SIZE = 10;

export function PaperBanner() {
  const { t } = useI18n();
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-200">
      <span>{t("admin.paperBanner")}</span>
      <span className="font-mono text-[10px] uppercase tracking-wide opacity-80">LIVE_MONEY=false · PAPER/DEMO</span>
    </div>
  );
}

export function DeskFilters({
  query,
  setQuery,
  children,
}: {
  query: string;
  setQuery: (v: string) => void;
  children?: ReactNode;
}) {
  const { t } = useI18n();
  return (
    <div className="flex flex-wrap gap-2 rounded-md border border-line bg-surface p-3">
      <input
        className={cn(fieldClass, "max-w-xs")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t("common.search")}
        aria-label={t("common.search")}
      />
      {children}
    </div>
  );
}

export function Pager({ page, setPage, total }: { page: number; setPage: (n: number) => void; total: number }) {
  const { t } = useI18n();
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const safe = Math.min(page, pages - 1);
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
      <p className="text-muted">{t("market.pageOf", { page: safe + 1, pages, n: total })}</p>
      <div className="flex gap-2">
        <Button variant="line" disabled={safe <= 0} onClick={() => setPage(Math.max(0, safe - 1))}>
          {t("common.back")}
        </Button>
        <Button variant="line" disabled={safe >= pages - 1} onClick={() => setPage(Math.min(pages - 1, safe + 1))}>
          {t("common.view")}
        </Button>
      </div>
    </div>
  );
}

export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <Panel className="p-4">
      <p className="text-sm text-muted">{label}</p>
      <p className="font-mono text-3xl font-semibold">{value}</p>
    </Panel>
  );
}

export function FeeChart({ data }: { data: { coin: string; fee: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="coin" stroke="currentColor" fontSize={12} />
        <YAxis stroke="currentColor" fontSize={12} />
        <Tooltip
          contentStyle={{
            background: "var(--c-surface)",
            border: "1px solid var(--c-line)",
            color: "var(--c-fg)",
          }}
        />
        <Bar dataKey="fee" fill="currentColor" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
