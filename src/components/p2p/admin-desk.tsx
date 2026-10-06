import { useState } from "react";
import { cn } from "@/lib/cn";
import { numFlex } from "@/lib/p2p/format";
import { useI18n } from "@/lib/p2p/i18n";
import { useDesk } from "@/lib/p2p/store";
import { Button, Panel } from "./ui";
import { Fees, Transfers, Identity, Coins, Controls } from "./admin-ops";
import { Orders, People, PaymentsAdmin, WalletAdmin, PassesAdmin } from "./admin-lists";
import { MissingStubs } from "./admin-stubs";
import { FeeChart, PaperBanner, Stat } from "./admin-chrome";
import { AdsModeration } from "./admin-ads";
import { AppealsAdmin } from "./admin-appeals";
import { MakerCheckerAdmin } from "./admin-maker-checker";

const tabs = [
  "overview",
  "ads",
  "users",
  "orders",
  "appeals",
  "makerChecker",
  "payments",
  "wallet",
  "identity",
  "passes",
  "fees",
  "withdrawals",
  "coins",
  "controls",
  "stubs",
] as const;

type Tab = (typeof tabs)[number];

export function AdminScreen() {
  const { lang, t } = useI18n();
  const meId = useDesk((state) => state.meId);
  const users = useDesk((state) => state.users);
  const setMe = useDesk((state) => state.setMe);
  const me = users.find((user) => user.id === meId);
  const [tab, setTab] = useState<Tab>("overview");
  if (!me) return null;
  if (!me.isAdmin) {
    return (
      <div className="mx-auto grid w-full max-w-7xl gap-3 px-3 py-4 sm:px-4">
        <PaperBanner />
        <h1 className="text-2xl font-semibold">{t("admin.title")}</h1>
        <p className="text-sm text-muted">{t("admin.gate")}</p>
        <Button onClick={() => setMe("u-admin")}>{t("admin.switch")}</Button>
      </div>
    );
  }
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-3 px-3 py-3 sm:px-4">
      <PaperBanner />
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{t("admin.title")}</h1>
          <p className="text-xs text-muted">{t("admin.modelNote")}</p>
        </div>
        <p className="rounded-md border border-line bg-surface-2 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-muted">
          {t("admin.singleApprover")}
        </p>
      </div>
      <div className="flex gap-1 overflow-x-auto border-b border-line pb-px">
        {tabs.map((item) => (
          <button
            key={item}
            type="button"
            className={cn(
              "min-h-11 shrink-0 border-b-2 px-3 text-sm font-semibold",
              tab === item ? "border-primary text-primary" : "border-transparent text-muted",
            )}
            onClick={() => setTab(item)}
          >
            {t(`admin.tab.${item}`)}
          </button>
        ))}
      </div>
      {tab === "overview" ? <Overview /> : null}
      {tab === "ads" ? <AdsModeration /> : null}
      {tab === "users" ? <People /> : null}
      {tab === "orders" ? <Orders /> : null}
      {tab === "appeals" ? <AppealsAdmin /> : null}
      {tab === "makerChecker" ? <MakerCheckerAdmin /> : null}
      {tab === "payments" ? <PaymentsAdmin /> : null}
      {tab === "wallet" ? <WalletAdmin /> : null}
      {tab === "identity" ? <Identity /> : null}
      {tab === "passes" ? <PassesAdmin /> : null}
      {tab === "fees" ? <Fees /> : null}
      {tab === "withdrawals" ? <Transfers /> : null}
      {tab === "coins" ? <Coins /> : null}
      {tab === "controls" ? <Controls /> : null}
      {tab === "stubs" ? <MissingStubs /> : null}
      <p className="sr-only">{lang}</p>
    </div>
  );
}

function Overview() {
  const { lang, t } = useI18n();
  const orders = useDesk((state) => state.orders);
  const kycs = useDesk((state) => state.kycs);
  const withdrawals = useDesk((state) => state.withdrawals);
  const fees = useDesk((state) => state.fees);
  const treasury = useDesk((state) => state.treasury);
  const ads = useDesk((state) => state.ads);
  const users = useDesk((state) => state.users);
  const open = orders.filter((order) => order.status === "created" || order.status === "paid" || order.status === "disputed").length;
  const pendingKyc = kycs.filter((item) => item.purpose === "seller" && item.status === "pending").length;
  const pendingWd = withdrawals.filter((item) => item.status === "pending_admin").length;
  const data = Object.entries(
    fees.reduce<Record<string, number>>((bag, fee) => {
      bag[fee.coin] = (bag[fee.coin] ?? 0) + fee.buyerFee + fee.sellerFee;
      return bag;
    }, {}),
  ).map(([coin, fee]) => ({ coin, fee: Number(fee.toFixed(4)) }));
  return (
    <div className="grid gap-3">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label={t("admin.openOrders")} value={String(open)} />
        <Stat label={t("admin.pendingKyc")} value={String(pendingKyc)} />
        <Stat label={t("admin.pendingWd")} value={String(pendingWd)} />
        <Stat label={t("admin.liveAds")} value={String(ads.filter((a) => !a.paused).length)} />
      </div>
      <div className="grid gap-2 sm:grid-cols-3">
        <Stat label={t("admin.seats")} value={String(users.length)} />
        <Stat label={t("admin.merchants")} value={String(users.filter((u) => u.sellerLicense?.status === "active").length)} />
        <Stat label={t("admin.frozenSeats")} value={String(users.filter((u) => u.suspended).length)} />
      </div>
      <Panel className="p-4">
        <h2 className="mb-3 font-semibold">{t("admin.treasury")}</h2>
        {Object.keys(treasury).length === 0 ? (
          <p className="text-sm text-muted">{t("admin.noTreasury")}</p>
        ) : (
          <ul className="grid gap-1 text-sm">
            {Object.entries(treasury).map(([coin, amount]) => (
              <li key={coin} className="flex justify-between font-mono">
                <span>{coin}</span>
                <span>{numFlex(amount, lang)}</span>
              </li>
            ))}
          </ul>
        )}
        {data.length > 0 ? (
          <div className="mt-4 h-48 text-primary">
            <FeeChart data={data} />
          </div>
        ) : null}
      </Panel>
    </div>
  );
}
