import { useState } from "react";
import { useI18n } from "@/lib/p2p/i18n";
import { useDesk } from "@/lib/p2p/store";
import { Button, Empty, fieldClass, Field, Panel } from "./ui";

export function Identity() {
  const { t } = useI18n();
  const users = useDesk((state) => state.users);
  const kycs = useDesk((state) => state.kycs);
  const reviewSellerKyc = useDesk((state) => state.reviewSellerKyc);
  const [reason, setReason] = useState("incomplete");
  const sellers = kycs.filter((item) => item.purpose === "seller");
  const buyers = kycs.filter((item) => item.purpose === "buyer");
  const reasons = ["incomplete", "blur", "mismatch", "expired"] as const;
  return (
    <div className="grid gap-4">
      <h2 className="font-semibold">{t("admin.sellerQueue")}</h2>
      <Field label={t("kyc.why")}>
        <select className={fieldClass} value={reason} onChange={(event) => setReason(event.target.value)}>
          {reasons.map((item) => (
            <option key={item} value={item}>
              {t(`kyc.reasons.${item}`)}
            </option>
          ))}
        </select>
      </Field>
      {sellers.length === 0 ? <Empty>{t("admin.queueEmpty")}</Empty> : null}
      {sellers.map((item) => {
        const user = users.find((person) => person.id === item.userId);
        return (
          <Panel key={item.id} className="grid gap-2 p-3">
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-muted">
              {user ? t(`country.${item.country}`) : ""} · {t(`doc.${item.docType}`)}
              {item.taxKind ? ` · ${t(`tax.${item.taxKind}`)}` : ""} · {item.last4} · {t(`kyc.${item.status === "pending" ? "pendingAdmin" : item.status}`)}
            </p>
            <p className="text-sm text-muted">
              {t("kyc.front")}: {item.front ? t("kyc.attached") : t("kyc.missing")} · {t("kyc.back")}: {item.back ? t("kyc.attached") : t("kyc.missing")} · {t("kyc.selfie")}:{" "}
              {item.selfie ? t("kyc.attached") : t("kyc.missing")}
            </p>
            {item.reason ? <p className="text-sm">{t(`kyc.reasons.${item.reason}`)}</p> : null}
            {item.status === "pending" ? (
              <div className="flex flex-wrap gap-2">
                <Button onClick={() => reviewSellerKyc(item.id, true)}>{t("common.approve")}</Button>
                <Button variant="line" onClick={() => reviewSellerKyc(item.id, false, reason)}>
                  {t("common.reject")}
                </Button>
              </div>
            ) : null}
          </Panel>
        );
      })}
      <h2 className="font-semibold">{t("pass.title")}</h2>
      <p className="text-sm text-muted">{t("admin.merchantDecides")}</p>
      {buyers.length === 0 ? <Empty>{t("admin.queueEmpty")}</Empty> : null}
      {buyers.map((item) => (
        <Panel key={item.id} className="p-3 text-sm">
          {item.name} · {item.last4} · {item.status === "pending" ? t("common.pending") : t(`status.${item.status}`)}
        </Panel>
      ))}
    </div>
  );
}
