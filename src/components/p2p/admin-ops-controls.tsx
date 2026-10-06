import { personName, useI18n } from "@/lib/p2p/i18n";
import { roleOf } from "@/lib/p2p/logic";
import { useDesk } from "@/lib/p2p/store";
import { Button, Empty, Panel } from "./ui";

export function Controls() {
  const { lang, t } = useI18n();
  const users = useDesk((state) => state.users);
  const audits = useDesk((state) => state.audits);
  const deskOpen = useDesk((state) => state.settings.deskOpen);
  const setDeskOpen = useDesk((state) => state.setDeskOpen);
  const setSeat = useDesk((state) => state.setSeat);
  const reset = useDesk((state) => state.reset);
  const open = deskOpen !== false;
  return (
    <div className="grid gap-4">
      <Panel className="grid gap-3 p-4">
        <h2 className="font-semibold">{t("admin.desk")}</h2>
        <p className="text-sm leading-relaxed text-muted">{open ? t("admin.deskOpen") : t("admin.deskClosed")}</p>
        <div className="flex flex-wrap gap-2">
          <Button variant={open ? "line" : "primary"} onClick={() => setDeskOpen(!open)}>
            {open ? t("admin.closeDesk") : t("admin.openDesk")}
          </Button>
          <Button variant="line" onClick={() => reset()}>
            {t("profile.resetDo")}
          </Button>
        </div>
      </Panel>
      <h2 className="font-semibold">{t("admin.seats")}</h2>
      {users
        .filter((user) => !user.isAdmin)
        .map((user) => (
          <Panel key={user.id} className="flex flex-wrap items-center justify-between gap-2 p-3">
            <div>
              <p className="font-semibold">{personName(user.name, lang)}</p>
              <p className="text-sm text-muted">
                {t(`role.${roleOf(user)}`)}
                {user.withdrawHold ? ` · ${t("admin.holdOut")}` : ""}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="line" onClick={() => setSeat(user.id, { suspended: !user.suspended })}>
                {user.suspended ? t("admin.unfreeze") : t("admin.freeze")}
              </Button>
              <Button variant="line" onClick={() => setSeat(user.id, { withdrawHold: !user.withdrawHold })}>
                {user.withdrawHold ? t("admin.releaseOut") : t("admin.holdOut")}
              </Button>
            </div>
          </Panel>
        ))}
      <h2 className="font-semibold">{t("admin.auditTitle")}</h2>
      <p className="text-xs text-muted">{t("admin.auditPartial")}</p>
      {(audits ?? []).length === 0 ? <Empty>{t("admin.auditEmpty")}</Empty> : null}
      {(audits ?? []).map((row) => {
        const actor = users.find((user) => user.id === row.actorId);
        const seat = users.find((user) => user.id === row.detail);
        const detail =
          row.key === "admin.auditSeat"
            ? seat
              ? personName(seat.name, lang)
              : row.detail
            : row.key === "admin.auditDesk"
              ? row.detail === "open"
                ? t("admin.openDesk")
                : t("admin.closeDesk")
              : row.detail;
        return (
          <Panel key={row.id} className="p-3 text-sm">
            <p>{t(row.key, { detail })}</p>
            <p className="text-muted">{actor ? personName(actor.name, lang) : ""}</p>
          </Panel>
        );
      })}
    </div>
  );
}
