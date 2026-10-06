import { useState } from "react";
import { cn } from "@/lib/cn";
import { RAILS } from "@/lib/p2p/catalog";
import { numFlex } from "@/lib/p2p/format";
import { personName, useI18n } from "@/lib/p2p/i18n";
import { getAdminApi } from "@/lib/p2p/admin-api";
import { useDesk } from "@/lib/p2p/store";
import type { Rail } from "@/lib/p2p/types";
import { Button, Empty, fieldClass, Field, Panel } from "./ui";
import { DeskFilters, Pager, PAGE_SIZE } from "./admin-chrome";

export function PaymentsAdmin() {
  const { lang, t } = useI18n();
  const payments = useDesk((state) => state.payments);
  const users = useDesk((state) => state.users);
  const adminRemovePayment = getAdminApi().adminRemovePayment;
  const [query, setQuery] = useState("");
  const [rail, setRail] = useState<Rail | "all">("all");
  const [page, setPage] = useState(0);
  const filtered = payments.filter((pm) => {
    if (rail !== "all" && pm.rail !== rail) return false;
    const user = users.find((u) => u.id === pm.userId);
    const name = user ? personName(user.name, lang).toLowerCase() : "";
    return !query.trim() || name.includes(query.trim().toLowerCase()) || pm.details.includes(query.trim());
  });
  const slice = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  return (
    <div className="grid gap-3">
      <p className="text-sm text-muted">{t("pay.sub")}</p>
      <DeskFilters query={query} setQuery={(v) => { setQuery(v); setPage(0); }}>
        <select className={fieldClass} value={rail} onChange={(e) => { setRail(e.target.value as typeof rail); setPage(0); }}>
          <option value="all">{t("common.all")}</option>
          {RAILS.map((r) => (
            <option key={r} value={r}>
              {t(`rail.${r}`)}
            </option>
          ))}
        </select>
      </DeskFilters>
      <div className="overflow-hidden rounded-md border border-line bg-surface">
        {slice.map((pm) => {
          const user = users.find((u) => u.id === pm.userId);
          return (
            <div key={pm.id} className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-3 py-3 last:border-b-0">
              <div>
                <p className="font-semibold">{user ? personName(user.name, lang) : pm.userId}</p>
                <p className="text-sm text-muted">
                  {t(`rail.${pm.rail}`)} · {pm.label || "—"} · {pm.details}
                </p>
              </div>
              <Button variant="line" className="min-h-9 text-xs" onClick={() => adminRemovePayment(pm.id)}>
                {t("pay.remove")}
              </Button>
            </div>
          );
        })}
        {slice.length === 0 ? <Empty>{t("pay.empty")}</Empty> : null}
      </div>
      <Pager page={page} setPage={setPage} total={filtered.length} />
    </div>
  );
}

export function WalletAdmin() {
  const { lang, t } = useI18n();
  const users = useDesk((state) => state.users);
  const coins = useDesk((state) => state.coins);
  const adminPracticeCredit = getAdminApi().adminPracticeCredit;
  const [userId, setUserId] = useState(users.find((u) => !u.isAdmin)?.id ?? users[0]?.id ?? "");
  const [coin, setCoin] = useState("USDT");
  const target = users.find((u) => u.id === userId);
  return (
    <div className="grid gap-3">
      <Panel className="grid gap-3 p-4">
        <h2 className="font-semibold">{t("admin.walletCredit")}</h2>
        <p className="text-sm text-muted">{t("wallet.topupNote")}</p>
        <p className="rounded-md border border-line bg-surface-2 px-3 py-2 text-xs text-muted">{t("admin.singleApprover")}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label={t("common.user")}>
            <select className={fieldClass} value={userId} onChange={(e) => setUserId(e.target.value)}>
              {users.map((u) => (
                <option key={u.id} value={u.id}>
                  {personName(u.name, lang)}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t("common.coin")}>
            <select className={fieldClass} value={coin} onChange={(e) => setCoin(e.target.value)}>
              {coins.map((c) => (
                <option key={c.symbol} value={c.symbol}>
                  {c.symbol}
                </option>
              ))}
            </select>
          </Field>
        </div>
        {target ? (
          <p className="font-mono text-sm">
            {t("common.balance")}: {numFlex(target.balances[coin] ?? 0, lang)} {coin}
          </p>
        ) : null}
        <Button onClick={() => adminPracticeCredit(userId, coin)}>{t("wallet.topupGo")}</Button>
      </Panel>
      <div className="overflow-hidden rounded-md border border-line bg-surface">
        <div className="border-b border-line bg-surface-2 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted">{t("admin.balances")}</div>
        {users.map((u) => (
          <div key={u.id} className="border-b border-line px-3 py-3 text-sm last:border-b-0">
            <p className="font-semibold">{personName(u.name, lang)}</p>
            <p className="mt-1 font-mono text-xs text-muted">
              {Object.entries(u.balances)
                .filter(([, n]) => n > 0)
                .map(([c, n]) => `${c} ${numFlex(n, lang)}`)
                .join(" · ") || "—"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PassesAdmin() {
  const { lang, t } = useI18n();
  const passes = useDesk((state) => state.passes);
  const users = useDesk((state) => state.users);
  const adminRevokePass = getAdminApi().adminRevokePass;
  return (
    <div className="grid gap-3">
      <p className="text-sm text-muted">{t("pass.sub")}</p>
      <div className="overflow-hidden rounded-md border border-line bg-surface">
        {passes.length === 0 ? <Empty>{t("admin.queueEmpty")}</Empty> : null}
        {passes.map((pass) => {
          const buyer = users.find((u) => u.id === pass.buyerId);
          const seller = users.find((u) => u.id === pass.sellerId);
          return (
            <div key={pass.id} className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-3 py-3 last:border-b-0">
              <div>
                <p className="font-semibold font-mono">{pass.code}</p>
                <p className="text-sm text-muted">
                  {buyer ? personName(buyer.name, lang) : pass.buyerId} ← {seller ? personName(seller.name, lang) : pass.sellerId} · {t(`status.${pass.status === "active" ? "active" : "revoked"}`)}
                </p>
              </div>
              {pass.status === "active" ? (
                <Button variant="line" className="min-h-9 text-xs" onClick={() => adminRevokePass(pass.id)}>
                  {t("common.revoke")}
                </Button>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function MissingStubs() {
  const { t } = useI18n();
  const items = [
    { key: "appeal", status: "MISSING" },
    { key: "timer", status: "MISSING" },
    { key: "makerChecker", status: "MISSING" },
    { key: "express", status: "MISSING" },
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
