import { useState } from "react";
import { personName, useI18n } from "@/lib/p2p/i18n";
import { roleOf } from "@/lib/p2p/logic";
import { useDesk } from "@/lib/p2p/store";
import { Button } from "./ui";
import { DeskFilters, Pager, PAGE_SIZE } from "./admin-chrome";

export function People() {
  const { lang, t } = useI18n();
  const users = useDesk((state) => state.users);
  const setLicense = useDesk((state) => state.setLicense);
  const setSeat = useDesk((state) => state.setSeat);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const filtered = users.filter((user) => {
    const name = personName(user.name, lang).toLowerCase();
    return !query.trim() || name.includes(query.trim().toLowerCase()) || user.id.includes(query.trim());
  });
  const slice = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  return (
    <div className="grid gap-3">
      <DeskFilters query={query} setQuery={(v) => { setQuery(v); setPage(0); }} />
      <div className="overflow-hidden rounded-md border border-line bg-surface">
        <div className="hidden grid-cols-[1.4fr_1fr_1fr_auto] gap-3 border-b border-line bg-surface-2 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted lg:grid">
          <span>{t("common.user")}</span>
          <span>{t("common.status")}</span>
          <span>{t("pass.merchantLicense")}</span>
          <span>{t("common.actions")}</span>
        </div>
        {slice.map((user) => (
          <div key={user.id} className="grid gap-2 border-b border-line px-3 py-3 last:border-b-0 lg:grid-cols-[1.4fr_1fr_1fr_auto] lg:items-center">
            <div>
              <p className="font-semibold">{personName(user.name, lang)}</p>
              <p className="text-xs text-muted">
                {t(`role.${roleOf(user)}`)} · {user.trades} {t("common.trades")} · {user.completion}% · {user.online ? t("common.online") : t("market.offline")}
              </p>
            </div>
            <p className="text-sm">
              {user.suspended ? t("admin.frozen") : t("common.active")}
              {user.withdrawHold ? ` · ${t("admin.holdOut")}` : ""}
            </p>
            <p className="text-sm">
              {user.sellerLicense
                ? `${user.sellerLicense.code} · ${t(`status.${user.sellerLicense.status === "active" ? "active" : "suspended"}`)}`
                : t("admin.noLicense")}
            </p>
            <div className="flex flex-wrap gap-1">
              {!user.isAdmin ? (
                <>
                  <Button variant="line" className="min-h-9 px-2 text-xs" onClick={() => setSeat(user.id, { suspended: !user.suspended })}>
                    {user.suspended ? t("admin.unfreeze") : t("admin.freeze")}
                  </Button>
                  <Button variant="line" className="min-h-9 px-2 text-xs" onClick={() => setSeat(user.id, { withdrawHold: !user.withdrawHold })}>
                    {user.withdrawHold ? t("admin.releaseOut") : t("admin.holdOut")}
                  </Button>
                </>
              ) : null}
              {user.sellerLicense ? (
                <Button variant="line" className="min-h-9 px-2 text-xs" onClick={() => setLicense(user.id, user.sellerLicense?.status !== "active")}>
                  {user.sellerLicense.status === "active" ? t("admin.suspend") : t("admin.resume")}
                </Button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <Pager page={page} setPage={setPage} total={filtered.length} />
      <p className="text-xs text-muted">{t("admin.banPartial")}</p>
    </div>
  );
}
