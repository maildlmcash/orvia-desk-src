import { useState } from "react";
import { numFlex } from "@/lib/p2p/format";
import { personName, useI18n } from "@/lib/p2p/i18n";
import { useDesk } from "@/lib/p2p/store";
import type { FeeMode, SendMode, Settings } from "@/lib/p2p/types";
import { Button, Empty, fieldClass, Field, Panel } from "./ui";

export function Fees() {
  const { t } = useI18n();
  const settings = useDesk((state) => state.settings);
  const saveSettings = useDesk((state) => state.saveSettings);
  const [draft, setDraft] = useState<Settings>(settings);
  const set = <K extends keyof Settings>(key: K, value: Settings[K]) => setDraft((current) => ({ ...current, [key]: value }));
  return (
    <form
      className="grid gap-3 rounded-md border border-line bg-surface p-4"
      onSubmit={(event) => {
        event.preventDefault();
        saveSettings(draft);
      }}
    >
      <p className="text-sm leading-relaxed text-muted">{t("admin.policy")}</p>
      <Field label={t("mode.both")}>
        <select className={fieldClass} value={draft.feeMode} onChange={(event) => set("feeMode", event.target.value as FeeMode)}>
          {(["percent", "fixed", "both"] as const).map((item) => (
            <option key={item} value={item}>
              {t(`mode.${item}`)}
            </option>
          ))}
        </select>
      </Field>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label={t("admin.buyerPercent")}>
          <input className={fieldClass} inputMode="decimal" value={draft.buyerPercent} onChange={(event) => set("buyerPercent", Number(event.target.value))} />
        </Field>
        <Field label={t("admin.sellerPercent")}>
          <input className={fieldClass} inputMode="decimal" value={draft.sellerPercent} onChange={(event) => set("sellerPercent", Number(event.target.value))} />
        </Field>
        <Field label={t("admin.buyerFixed")}>
          <input className={fieldClass} inputMode="decimal" value={draft.buyerFixed} onChange={(event) => set("buyerFixed", Number(event.target.value))} />
        </Field>
        <Field label={t("admin.sellerFixed")}>
          <input className={fieldClass} inputMode="decimal" value={draft.sellerFixed} onChange={(event) => set("sellerFixed", Number(event.target.value))} />
        </Field>
      </div>
      <Field label={t("admin.threshold")}>
        <input className={fieldClass} inputMode="decimal" value={draft.threshold} onChange={(event) => set("threshold", Number(event.target.value))} />
      </Field>
      <Field label={t("admin.under")}>
        <select className={fieldClass} value={draft.underMode} onChange={(event) => set("underMode", event.target.value as SendMode)}>
          <option value="automatic">{t("mode.automatic")}</option>
          <option value="manual">{t("mode.manual")}</option>
        </select>
      </Field>
      <Field label={t("admin.over")}>
        <select className={fieldClass} value={draft.overMode} onChange={(event) => set("overMode", event.target.value as SendMode)}>
          <option value="automatic">{t("mode.automatic")}</option>
          <option value="manual">{t("mode.manual")}</option>
        </select>
      </Field>
      <p className="text-sm text-muted">{t("admin.sendBody")}</p>
      <Button type="submit">{t("admin.save")}</Button>
    </form>
  );
}

export function Transfers() {
  const { lang, t } = useI18n();
  const users = useDesk((state) => state.users);
  const withdrawals = useDesk((state) => state.withdrawals);
  const reviewWithdraw = useDesk((state) => state.reviewWithdraw);
  return (
    <div className="grid gap-2">
      <p className="text-sm text-muted">{t("admin.sendBody")}</p>
      {withdrawals.length === 0 ? <Empty>{t("admin.queueEmpty")}</Empty> : null}
      {withdrawals.map((row) => {
        const user = users.find((item) => item.id === row.userId);
        return (
          <Panel key={row.id} className="grid gap-2 p-3">
            <p className="font-semibold">
              {user ? personName(user.name, lang) : ""} · {numFlex(row.amount, lang)} {row.coin}
            </p>
            <p className="text-sm text-muted">
              {t(`status.${row.status}`)} · {t(`net.${row.network}`)} · {row.address}
            </p>
            {row.status === "pending_admin" ? (
              <div className="flex gap-2">
                <Button onClick={() => reviewWithdraw(row.id, true)}>{t("admin.send")}</Button>
                <Button variant="line" onClick={() => reviewWithdraw(row.id, false)}>
                  {t("admin.reject")}
                </Button>
              </div>
            ) : null}
          </Panel>
        );
      })}
    </div>
  );
}
