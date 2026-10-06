import { useState } from "react";
import { cn } from "@/lib/cn";
import { personName, useI18n } from "@/lib/p2p/i18n";
import { MC_KINDS, MC_MAKER_ROLE, SUB_ROLES, sameApprover, useOps, useOpsHydrate, type McKind, type SubRole } from "@/lib/p2p/ops-store";
import { useDesk } from "@/lib/p2p/store";
import { Button, Empty, Field, fieldClass, Panel } from "./ui";

/**
 * Slice #2 — maker-checker stub for wallet credit / ban / unban / license revoke / pass revoke.
 * Paper only: sub-roles are labels on the single admin seat; real dual-principal auth is MISSING.
 */
export function MakerCheckerAdmin() {
  useOpsHydrate();
  const { lang, t } = useI18n();
  const meId = useDesk((state) => state.meId);
  const users = useDesk((state) => state.users);
  const passes = useDesk((state) => state.passes);
  const coins = useDesk((state) => state.coins);
  const subRole = useOps((state) => state.subRole);
  const setSubRole = useOps((state) => state.setSubRole);
  const requests = useOps((state) => state.requests);
  const banned = useOps((state) => state.banned);
  const fileRequest = useOps((state) => state.fileRequest);
  const decide = useOps((state) => state.decide);
  const [kind, setKind] = useState<McKind>("wallet_credit");
  const [targetId, setTargetId] = useState("");
  const [coin, setCoin] = useState("USDT");
  const [reason, setReason] = useState("");
  const [filter, setFilter] = useState<"pending" | "all">("pending");

  const seats = users.filter((u) => !u.isAdmin);
  const targets =
    kind === "pass_revoke"
      ? passes.filter((p) => p.status === "active").map((p) => ({ id: p.id, label: p.code }))
      : kind === "license_revoke"
        ? seats.filter((u) => u.sellerLicense?.status === "active").map((u) => ({ id: u.id, label: personName(u.name, lang) }))
        : kind === "unban"
          ? seats.filter((u) => u.suspended || banned.includes(u.id)).map((u) => ({ id: u.id, label: personName(u.name, lang) }))
          : seats.map((u) => ({ id: u.id, label: personName(u.name, lang) }));
  const effectiveTarget = targets.some((x) => x.id === targetId) ? targetId : (targets[0]?.id ?? "");
  const canFile = MC_MAKER_ROLE[kind].includes(subRole);
  const shown = requests.filter((r) => filter === "all" || r.status === "pending");

  const targetLabel = (k: McKind, id: string) => {
    if (k === "pass_revoke") return passes.find((p) => p.id === id)?.code ?? id;
    const u = users.find((x) => x.id === id);
    return u ? personName(u.name, lang) : id;
  };

  return (
    <div className="grid gap-3">
      <Panel className="grid gap-2 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-semibold">{t("admin.mc.title")}</h2>
          <span className="rounded-md bg-amber-500/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-200">PAPER · STUB</span>
        </div>
        <p className="text-sm text-muted">{t("admin.mc.intro")}</p>
        <Field label={t("admin.mc.subRole")}>
          <div className="flex flex-wrap gap-1">
            {SUB_ROLES.map((role) => (
              <button
                key={role}
                type="button"
                className={cn(
                  "min-h-10 rounded-md px-3 text-sm font-semibold",
                  subRole === role ? "bg-primary text-primary-fg" : "bg-surface-2 text-muted",
                )}
                onClick={() => setSubRole(role as SubRole)}
              >
                {t(`admin.mc.role.${role}`)}
              </button>
            ))}
          </div>
        </Field>
        <p className="text-[11px] text-muted">{t("admin.mc.roleNote")}</p>
      </Panel>

      <Panel className="grid gap-3 p-4">
        <h3 className="font-semibold">{t("admin.mc.file")}</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label={t("admin.mc.kind")}>
            <select className={fieldClass} value={kind} onChange={(e) => setKind(e.target.value as McKind)}>
              {MC_KINDS.map((k) => (
                <option key={k} value={k}>
                  {t(`admin.mc.k.${k}`)}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t("admin.mc.target")}>
            <select className={fieldClass} value={effectiveTarget} onChange={(e) => setTargetId(e.target.value)}>
              {targets.length === 0 ? <option value="">—</option> : null}
              {targets.map((x) => (
                <option key={x.id} value={x.id}>
                  {x.label}
                </option>
              ))}
            </select>
          </Field>
          {kind === "wallet_credit" ? (
            <Field label={t("common.coin")}>
              <select className={fieldClass} value={coin} onChange={(e) => setCoin(e.target.value)}>
                {coins.map((c) => (
                  <option key={c.symbol} value={c.symbol}>
                    {c.symbol}
                  </option>
                ))}
              </select>
            </Field>
          ) : null}
          <Field label={t("admin.mc.reason")}>
            <input className={fieldClass} value={reason} onChange={(e) => setReason(e.target.value)} placeholder={t("admin.mc.reasonPh")} />
          </Field>
        </div>
        <p className="text-xs text-muted">{t(`admin.mc.effect.${kind}`)}</p>
        {!canFile ? <p className="text-xs text-sell">{t("err.mcRole")}</p> : null}
        <Button
          disabled={!canFile || !effectiveTarget || !reason.trim()}
          onClick={() => {
            if (fileRequest({ kind, targetId: effectiveTarget, coin, reason })) setReason("");
          }}
        >
          {t("admin.mc.submit")}
        </Button>
      </Panel>

      <div className="flex gap-1">
        {(["pending", "all"] as const).map((f) => (
          <button
            key={f}
            type="button"
            className={cn("min-h-10 rounded-md px-3 text-sm font-semibold", filter === f ? "bg-primary text-primary-fg" : "bg-surface-2 text-muted")}
            onClick={() => setFilter(f)}
          >
            {t(`admin.mc.filter.${f}`)}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-md border border-line bg-surface">
        {shown.length === 0 ? <Empty>{t("admin.mc.empty")}</Empty> : null}
        {shown.map((req) => {
          const maker = users.find((u) => u.id === req.makerId);
          const checker = users.find((u) => u.id === req.checkerId);
          const blocked = sameApprover(req, meId, subRole);
          return (
            <div key={req.id} className="grid gap-2 border-b border-line px-3 py-3 last:border-b-0">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold">
                    {t(`admin.mc.k.${req.kind}`)} · {targetLabel(req.kind, req.targetId)}
                    {req.coin ? ` · +100 ${req.coin}` : ""}
                  </p>
                  <p className="text-xs text-muted">
                    {t("admin.mc.maker")}: {maker ? personName(maker.name, lang) : req.makerId} ({t(`admin.mc.role.${req.makerRole}`)}) ·{" "}
                    {new Date(req.createdAt).toLocaleString()}
                  </p>
                  <p className="text-xs">“{req.reason}”</p>
                  {req.checkerId ? (
                    <p className="text-xs text-muted">
                      {t("admin.mc.checker")}: {checker ? personName(checker.name, lang) : req.checkerId}
                      {req.checkerRole ? ` (${t(`admin.mc.role.${req.checkerRole}`)})` : ""}
                      {req.checkerId === req.makerId ? ` · ${t("admin.mc.sameSeat")}` : ""}
                    </p>
                  ) : null}
                </div>
                <span
                  className={cn(
                    "rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide",
                    req.status === "pending" ? "bg-amber-500/20 text-amber-200" : req.status === "approved" ? "bg-buy/20 text-buy" : "bg-sell/20 text-sell",
                  )}
                >
                  {t(`admin.mc.status.${req.status}`)}
                </span>
              </div>
              {req.status === "pending" ? (
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="buy" className="min-h-9 text-xs" disabled={blocked} onClick={() => decide(req.id, true)}>
                    {t("admin.mc.approve")}
                  </Button>
                  <Button variant="line" className="min-h-9 text-xs" disabled={blocked} onClick={() => decide(req.id, false)}>
                    {t("admin.mc.reject")}
                  </Button>
                  {blocked ? <span className="text-xs text-sell">{t("err.makerChecker")}</span> : null}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <p className="text-[11px] text-muted">{t("admin.mc.missing")}</p>
    </div>
  );
}
