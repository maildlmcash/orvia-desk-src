import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { numFlex } from "@/lib/p2p/format";
import { coinLabel, personName, useI18n } from "@/lib/p2p/i18n";
import { roleOf } from "@/lib/p2p/logic";
import { useDesk } from "@/lib/p2p/store";
import type { FeeMode, SendMode, Settings } from "@/lib/p2p/types";
import { Button, Empty, fieldClass, Field, Page, Panel } from "./ui";

const tabs = ["overview", "fees", "withdrawals", "identity", "coins", "controls", "orders", "users"] as const;

export function AdminScreen() {
  const { lang, t } = useI18n();
  const meId = useDesk((state) => state.meId);
  const users = useDesk((state) => state.users);
  const setMe = useDesk((state) => state.setMe);
  const me = users.find((user) => user.id === meId);
  const [tab, setTab] = useState<(typeof tabs)[number]>("overview");
  if (!me) return null;
  if (!me.isAdmin) {
    return (
      <Page title={t("admin.title")} sub={t("admin.gate")}>
        <Button
          onClick={() => {
            setMe("u-admin");
          }}
        >
          {t("admin.switch")}
        </Button>
      </Page>
    );
  }
  return (
    <Page title={t("admin.title")}>
      <div className="flex gap-2 overflow-x-auto">
        {tabs.map((item) => (
          <button
            key={item}
            type="button"
            className={`min-h-11 shrink-0 rounded-md px-3 text-sm font-semibold ${tab === item ? "bg-primary text-primary-fg" : "bg-surface text-fg"}`}
            onClick={() => setTab(item)}
          >
            {t(`admin.${item}`)}
          </button>
        ))}
      </div>
      {tab === "overview" ? <Overview /> : null}
      {tab === "fees" ? <Fees /> : null}
      {tab === "withdrawals" ? <Transfers /> : null}
      {tab === "identity" ? <Identity /> : null}
      {tab === "coins" ? <Coins /> : null}
      {tab === "controls" ? <Controls /> : null}
      {tab === "orders" ? <Orders /> : null}
      {tab === "users" ? <People /> : null}
      <p className="sr-only">{lang}</p>
    </Page>
  );
}

function Overview() {
  const { lang, t } = useI18n();
  const orders = useDesk((state) => state.orders);
  const kycs = useDesk((state) => state.kycs);
  const withdrawals = useDesk((state) => state.withdrawals);
  const fees = useDesk((state) => state.fees);
  const treasury = useDesk((state) => state.treasury);
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
      <div className="grid gap-2 sm:grid-cols-3">
        <Stat label={t("admin.openOrders")} value={String(open)} />
        <Stat label={t("admin.pendingKyc")} value={String(pendingKyc)} />
        <Stat label={t("admin.pendingWd")} value={String(pendingWd)} />
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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <Panel className="p-4">
      <p className="text-sm text-muted">{label}</p>
      <p className="font-mono text-3xl font-semibold">{value}</p>
    </Panel>
  );
}

function FeeChart({ data }: { data: { coin: string; fee: number }[] }) {
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

function Fees() {
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

function Transfers() {
  const { lang, t } = useI18n();
  const users = useDesk((state) => state.users);
  const withdrawals = useDesk((state) => state.withdrawals);
  const reviewWithdraw = useDesk((state) => state.reviewWithdraw);
  const queue = withdrawals.filter((item) => item.status === "pending_admin");
  return (
    <div className="grid gap-2">
      <p className="text-sm text-muted">{t("admin.sendBody")}</p>
      {queue.length === 0 ? <Empty>{t("admin.queueEmpty")}</Empty> : null}
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

function Identity() {
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

function Coins() {
  const { t } = useI18n();
  const coins = useDesk((state) => state.coins);
  const addCoin = useDesk((state) => state.addCoin);
  const [symbol, setSymbol] = useState("");
  const [label, setLabel] = useState("");
  const [price, setPrice] = useState("1");
  const [minWithdraw, setMinWithdraw] = useState("1");
  const [deposits, setDeposits] = useState(true);
  const [withdrawals, setWithdrawals] = useState(true);
  return (
    <div className="grid gap-3">
      <form
        className="grid gap-3 rounded-md border border-line bg-surface p-4"
        onSubmit={(event) => {
          event.preventDefault();
          const ok = addCoin({
            symbol,
            label,
            price: Number(price),
            minWithdraw: Number(minWithdraw),
            deposits,
            withdrawals,
          });
          if (ok) {
            setSymbol("");
            setLabel("");
          }
        }}
      >
        <h2 className="font-semibold">{t("admin.coinForm")}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label={t("admin.symbol")}>
            <input className={fieldClass} maxLength={5} value={symbol} onChange={(event) => setSymbol(event.target.value.toUpperCase())} />
          </Field>
          <Field label={t("admin.coinName")}>
            <input className={fieldClass} value={label} onChange={(event) => setLabel(event.target.value)} />
          </Field>
          <Field label={t("admin.refPrice")}>
            <input className={fieldClass} inputMode="decimal" value={price} onChange={(event) => setPrice(event.target.value)} />
          </Field>
          <Field label={t("admin.minOut")}>
            <input className={fieldClass} inputMode="decimal" value={minWithdraw} onChange={(event) => setMinWithdraw(event.target.value)} />
          </Field>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant={deposits ? "primary" : "line"} onClick={() => setDeposits((value) => !value)}>
            {t("admin.deposits")}: {deposits ? t("admin.on") : t("admin.off")}
          </Button>
          <Button variant={withdrawals ? "primary" : "line"} onClick={() => setWithdrawals((value) => !value)}>
            {t("admin.withdrawalsOn")}: {withdrawals ? t("admin.on") : t("admin.off")}
          </Button>
        </div>
        <Button type="submit">{t("admin.saveCoin")}</Button>
      </form>
      {coins.map((coin) => (
        <CoinRow key={coin.symbol} symbol={coin.symbol} />
      ))}
    </div>
  );
}

function CoinRow({ symbol }: { symbol: string }) {
  const { lang, t } = useI18n();
  const coin = useDesk((state) => state.coins.find((item) => item.symbol === symbol));
  const quotes = useDesk((state) => state.quotes);
  const updateCoin = useDesk((state) => state.updateCoin);
  const [price, setPrice] = useState(coin ? String(coin.price) : "");
  const [minWithdraw, setMinWithdraw] = useState(coin?.minWithdraw != null ? String(coin.minWithdraw) : "0");
  if (!coin) return null;
  return (
    <Panel className="grid gap-3 p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="font-mono font-semibold">{coin.symbol}</p>
          <p className="text-sm text-muted">
            {coin.label || coinLabel(coin.symbol, lang) || t("admin.newCoin")} · {numFlex(quotes[coin.symbol] ?? coin.price, lang)}
          </p>
        </div>
        <Button variant="line" onClick={() => updateCoin(coin.symbol, { listed: !coin.listed })}>
          {coin.listed ? t("admin.unlist") : t("admin.list")}
        </Button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label={t("admin.refPrice")}>
          <input className={fieldClass} inputMode="decimal" value={price} onChange={(event) => setPrice(event.target.value)} />
        </Field>
        <Field label={t("admin.minOut")}>
          <input className={fieldClass} inputMode="decimal" value={minWithdraw} onChange={(event) => setMinWithdraw(event.target.value)} />
        </Field>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button variant="line" onClick={() => updateCoin(coin.symbol, { deposits: coin.deposits === false })}>
          {t("admin.deposits")}: {coin.deposits === false ? t("admin.off") : t("admin.on")}
        </Button>
        <Button variant="line" onClick={() => updateCoin(coin.symbol, { withdrawals: coin.withdrawals === false })}>
          {t("admin.withdrawalsOn")}: {coin.withdrawals === false ? t("admin.off") : t("admin.on")}
        </Button>
        <Button
          onClick={() =>
            updateCoin(coin.symbol, {
              price: Number(price),
              minWithdraw: Number(minWithdraw),
            })
          }
        >
          {t("admin.saveCoin")}
        </Button>
      </div>
    </Panel>
  );
}

function Controls() {
  const { lang, t } = useI18n();
  const users = useDesk((state) => state.users);
  const audits = useDesk((state) => state.audits);
  const deskOpen = useDesk((state) => state.settings.deskOpen);
  const setDeskOpen = useDesk((state) => state.setDeskOpen);
  const setSeat = useDesk((state) => state.setSeat);
  const open = deskOpen !== false;
  return (
    <div className="grid gap-4">
      <Panel className="grid gap-3 p-4">
        <h2 className="font-semibold">{t("admin.desk")}</h2>
        <p className="text-sm leading-relaxed text-muted">{open ? t("admin.deskOpen") : t("admin.deskClosed")}</p>
        <div>
          <Button variant={open ? "line" : "primary"} onClick={() => setDeskOpen(!open)}>
            {open ? t("admin.closeDesk") : t("admin.openDesk")}
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

function Orders() {
  const { lang, t } = useI18n();
  const orders = useDesk((state) => state.orders);
  const users = useDesk((state) => state.users);
  const release = useDesk((state) => state.release);
  const cancelOrder = useDesk((state) => state.cancelOrder);
  const open = ["created", "paid", "disputed"];
  return (
    <div className="grid gap-2">
      {orders.map((order) => {
        const buyer = users.find((user) => user.id === order.buyerId);
        const seller = users.find((user) => user.id === order.sellerId);
        return (
          <Panel key={order.id} className="grid gap-2 p-3 text-sm">
            <Link to="/order/$orderId" params={{ orderId: order.id }}>
              <span className="font-semibold">
                {order.coin} · {numFlex(order.gross, lang)}
              </span>
              <span className="mt-1 block text-muted">
                {buyer ? personName(buyer.name, lang) : ""} → {seller ? personName(seller.name, lang) : ""} · {t(`status.${order.status}`)}
              </span>
            </Link>
            {open.includes(order.status) ? (
              <div className="flex flex-wrap gap-2">
                <Button onClick={() => release(order.id, true)}>{t("trade.adminRelease")}</Button>
                <Button variant="line" onClick={() => cancelOrder(order.id, true)}>
                  {t("trade.adminCancel")}
                </Button>
              </div>
            ) : null}
          </Panel>
        );
      })}
    </div>
  );
}

function People() {
  const { lang, t } = useI18n();
  const users = useDesk((state) => state.users);
  const setLicense = useDesk((state) => state.setLicense);
  return (
    <div className="grid gap-2">
      <h2 className="font-semibold">{t("admin.people")}</h2>
      {users.map((user) => (
        <Panel key={user.id} className="flex flex-wrap items-center justify-between gap-2 p-3">
          <div>
            <p className="font-semibold">{personName(user.name, lang)}</p>
            <p className="text-sm text-muted">
              {user.sellerLicense ? `${user.sellerLicense.code} · ${t(`status.${user.sellerLicense.status === "active" ? "active" : "suspended"}`)}` : t("admin.noLicense")}
            </p>
          </div>
          {user.sellerLicense ? (
            <Button variant="line" onClick={() => setLicense(user.id, user.sellerLicense?.status !== "active")}>
              {user.sellerLicense.status === "active" ? t("admin.suspend") : t("admin.resume")}
            </Button>
          ) : null}
        </Panel>
      ))}
    </div>
  );
}
