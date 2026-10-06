import { cn } from "@/lib/cn";
import { useI18n } from "@/lib/p2p/i18n";
import { Panel } from "./ui";

/** Slice #2 status board — honest STUB / PARTIAL / MISSING labels (paper only, LIVE_MONEY=false). */
export function MissingStubs() {
  const { t } = useI18n();
  const items = [
    { key: "appeal", status: "STUB" },
    { key: "timer", status: "STUB" },
    { key: "makerChecker", status: "STUB" },
    { key: "express", status: "STUB" },
    { key: "funnel", status: "STUB" },
    { key: "dualAuth", status: "MISSING" },
    { key: "subRoles", status: "PARTIAL" },
    { key: "auditReason", status: "PARTIAL" },
  ] as const;
  return (
    <div className="grid gap-3">
      <p className="text-sm text-muted">{t("admin.stubsIntro")}</p>
      {items.map((item) => (
        <Panel key={item.key} className="flex flex-wrap items-center justify-between gap-2 p-4">
          <div>
            <p className="font-semibold">{t(`admin.stub.${item.key}`)}</p>
            <p className="text-xs text-muted">{t(`admin.stub.${item.key}Body`)}</p>
          </div>
          <span
            className={cn(
              "rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide",
              item.status === "MISSING" ? "bg-sell/20 text-sell" : "bg-amber-500/20 text-amber-200",
            )}
          >
            {item.status}
          </span>
        </Panel>
      ))}
    </div>
  );
}
