import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FIATS, NETWORKS, RAILS, sortCoins } from "@/lib/p2p/catalog";
import { fiatAmt, fiatSign, num, numFlex } from "@/lib/p2p/format";
import { coinLabel, personName, useI18n } from "@/lib/p2p/i18n";
import { adPrice, computeFees, merchantLive, roleOf } from "@/lib/p2p/logic";
import { useDesk } from "@/lib/p2p/store";
import type { Ad, AdSide, Fiat, PriceMode, Rail } from "@/lib/p2p/types";
import { AccountPanel } from "@/components/site/account";
import { KycForm, KycSheet, TradeSheet } from "./trade";
import { Button, Empty, fieldClass, Field, Page, Panel } from "./ui";

const OPEN = ["created", "paid", "disputed"];

export function OrdersScreen() {
  const { lang, t } = useI18n();
  const meId = useDesk((state) => state.meId);
  const users = useDesk((state) => state.users);
  const orders = useDesk((state) => state.orders);
  const me = users.find((user) => user.id === meId);
  const [filter, setFilter] = useState("all");
  const mine = orders.filter((order) => me?.isAdmin || order.buyerId === meId || order.sellerId === meId);
  const rows = filter === "all" ? mine : mine.filter((order) => order.status === filter);
  const filters = ["all", "created", "paid", "released", "disputed", "cancelled"];
  return (
    <Page title={t("orders.title")}>
      <div className="flex gap-2 overflow-x-auto">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className={`min-h-11 shrink-0 rounded-md px-3 text-sm font-semibold ${filter === item ? "bg-primary text-primary-fg" : "bg-surface text-fg"}`}
            onClick={() => setFilter(item)}
          >
            {item === "all" ? t("common.all") : t(`status.${item}`)}
          </button>
        ))}
      </div>
      {rows.length === 0 ? (
        <Empty>{t("orders.empty")}</Empty>
      ) : (
        <div className="grid gap-2">
          {rows.map((order) => {
            const otherId = order.buyerId === meId ? order.sellerId : order.buyerId;
            const other = users.find((user) => user.id === otherId);
            return (
              <Link key={order.id} to="/order/$orderId" params={{ orderId: order.id }} className="grid gap-1 rounded-md border border-line bg-surface p-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-semibold">
                    {order.coin} · {fiatAmt(order.fiatTotal, order.fiat, lang)}
                  </span>
                  <span className="text-sm text-muted">{t(`status.${order.status}`)}</span>
                </div>
                <p className="text-sm text-muted">
                  {order.buyerId === meId ? t("orders.youBuy") : order.sellerId === meId ? t("orders.youSell") : t("common.view")}
                  {" · "}
                  {other ? personName(other.name, lang) : ""} · {numFlex(order.gross, lang)} {order.coin}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </Page>
  );
}

export function WalletScreen() {
  const { lang, t } = useI18n();
  const meId = useDesk((state) => state.meId);
  const users = useDesk((state) => state.users);
  const coins = useDesk((state) => state.coins);
  const quotes = useDesk((state) => state.quotes);
  const ads = useDesk((state) => state.ads);
  const orders = useDesk((state) => state.orders);
  const withdrawals = useDesk((state) => state.withdrawals);
  const settings = useDesk((state) => state.settings);
  const requestWithdraw = useDesk((state) => state.requestWithdraw);
  const practiceCredit = useDesk((state) => state.practiceCredit);
  const me = users.find((user) => user.id === meId);
  const [coin, setCoin] = useState("ORB");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [network, setNetwork] = useState<(typeof NETWORKS)[number]>("mesh");
  if (!me) return null;
  const qty = Number(amount);
  const picked = coins.find((item) => item.symbol === coin);
  const sendsOff = picked?.withdrawals === false;
  const under = Number.isFinite(qty) && qty > 0 && qty < settings.threshold;
  const mode = !Number.isFinite(qty) || qty <= 0 ? null : under || qty < settings.threshold ? settings.underMode : settings.overMode;
  const ref = coins.reduce((sum, item) => sum + (me.balances[item.symbol] ?? 0) * (quotes[item.symbol] ?? item.price), 0);
  const mine = withdrawals.filter((item) => item.userId === me.id);
  return (
    <Page title={t("wallet.title")} sub={t("wallet.sub")}>
      <Panel className="p-4">
        <p className="text-sm text-muted">{t("wallet.ref")}</p>
        <p className="font-mono text-3xl font-semibold tabular-nums">{fiatAmt(ref, "USD", lang)}</p>
        <p className="mt-1 text-sm text-muted">{t("wallet.limitIs", { n: numFlex(settings.threshold, lang) })}</p>
      </Panel>
      <div className="grid gap-2">
        {sortCoins(coins).map((item) => {
          const free = me.balances[item.symbol] ?? 0;
          const inAds = ads
            .filter((ad) => ad.userId === me.id && ad.side === "sell" && ad.coin === item.symbol)
            .reduce((sum, ad) => sum + ad.available, 0);
          const inOrders = orders
            .filter((order) => order.sellerId === me.id && order.coin === item.symbol && OPEN.includes(order.status))
            .reduce((sum, order) => sum + order.escrow, 0);
          const pendingOut = mine
            .filter((row) => row.coin === item.symbol && row.status === "pending_admin")
            .reduce((sum, row) => sum + row.amount, 0);
          const label = coinLabel(item.symbol, lang);
          return (
            <Panel key={item.symbol} className="grid gap-2 p-3 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="font-semibold">
                  <span className="font-mono">{item.symbol}</span>
                  {label ? <span className="ms-2 text-sm text-muted">{label}</span> : <span className="ms-2 text-sm text-muted">{t("admin.newCoin")}</span>}
                </p>
                <p className="text-xs text-muted">
                  {t("wallet.free")} {numFlex(free, lang)} · {t("wallet.inAds")} {numFlex(inAds, lang)} · {t("wallet.inOrders")} {numFlex(inOrders, lang)} · {t("wallet.pendingOut")} {numFlex(pendingOut, lang)}
                </p>
              </div>
              <Button variant="line" disabled={item.deposits === false} onClick={() => practiceCredit(item.symbol)}>
                {item.deposits === false ? t("admin.off") : t("wallet.topupGo")}
              </Button>
            </Panel>
          );
        })}
      </div>
      <p className="text-xs text-muted">{t("wallet.topupNote")}</p>
      <Panel className="grid gap-3 p-4">
        <h2 className="font-semibold">{t("wallet.withdraw")}</h2>
        <p className="text-sm text-muted">{t("wallet.policy")}</p>
        <Field label={t("common.coin")}>
          <select className={fieldClass} value={coin} onChange={(event) => setCoin(event.target.value)}>
            {coins.map((item) => (
              <option key={item.symbol} value={item.symbol}>
                {item.symbol}
              </option>
            ))}
          </select>
        </Field>
        <Field label={t("wallet.amount")}>
          <input className={fieldClass} inputMode="decimal" value={amount} onChange={(event) => setAmount(event.target.value)} />
        </Field>
        <Field label={t("wallet.address")}>
          <input className={fieldClass} placeholder={t("wallet.addressPh")} value={address} onChange={(event) => setAddress(event.target.value)} />
        </Field>
        <Field label={t("wallet.network")}>
          <select className={fieldClass} value={network} onChange={(event) => setNetwork(event.target.value as typeof network)}>
            {NETWORKS.map((item) => (
              <option key={item} value={item}>
                {t(`net.${item}`)}
              </option>
            ))}
          </select>
        </Field>
        {mode ? <p className="text-sm">{mode === "automatic" ? t("wallet.previewAuto") : t("wallet.previewManual")}</p> : null}
        {sendsOff ? <p className="text-sm text-muted">{t("err.coinOff")}</p> : null}
        {picked?.minWithdraw ? (
          <p className="text-sm text-muted">
            {t("admin.minOut")}: {numFlex(picked.minWithdraw, lang)} {picked.symbol}
          </p>
        ) : null}
        <Button
          disabled={sendsOff}
          onClick={() => {
            if (requestWithdraw(coin, qty, address, network)) {
              setAmount("");
              setAddress("");
            }
          }}
        >
          {t("wallet.withdraw")}
        </Button>
      </Panel>
      <h2 className="font-semibold">{t("wallet.history")}</h2>
      {mine.length === 0 ? (
        <Empty>{t("wallet.empty")}</Empty>
      ) : (
        <div className="grid gap-2">
          {mine.map((row) => (
            <Panel key={row.id} className="p-3 text-sm">
              <p className="font-semibold">
                {numFlex(row.amount, lang)} {row.coin} · {t(`status.${row.status}`)}
              </p>
              <p className="text-muted">
                {t(`net.${row.network}`)} · {row.address}
              </p>
            </Panel>
          ))}
        </div>
      )}
    </Page>
  );
}

export function ExpressScreen() {
  const { lang, t } = useI18n();
  const users = useDesk((state) => state.users);
  const ads = useDesk((state) => state.ads);
  const coins = useDesk((state) => state.coins);
  const quotes = useDesk((state) => state.quotes);
  const passes = useDesk((state) => state.passes);
  const kycs = useDesk((state) => state.kycs);
  const settings = useDesk((state) => state.settings);
  const meId = useDesk((state) => state.meId);
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [unit, setUnit] = useState<"fiat" | "coin">("fiat");
  const [coin, setCoin] = useState("USDT");
  const [fiat, setFiat] = useState<Fiat>("INR");
  const [amount, setAmount] = useState("1000");
  const [skipKyc, setSkipKyc] = useState(true);
  const [open, setOpen] = useState(false);
  const [kyc, setKyc] = useState(false);
  const listed = sortCoins(coins.filter((item) => item.listed));
  const me = users.find((user) => user.id === meId);
  const typed = Number(amount);
  const best = useMemo(() => {
    const wantSide = side === "buy" ? "sell" : "buy";
    return ads
      .filter((ad) => {
        if (ad.paused || ad.side !== wantSide || ad.coin !== coin || ad.fiat !== fiat || ad.userId === meId) return false;
        const merchant = users.find((user) => user.id === ad.userId);
        if (!merchant || !merchantLive(merchant)) return false;
        if ((me?.blocked ?? []).includes(merchant.id) || (merchant.blocked ?? []).includes(meId)) return false;
        if (skipKyc && ad.needKyc) return false;
        const live = adPrice(ad, quotes, coins.find((item) => item.symbol === ad.coin)?.price);
        if (!(live > 0) || !Number.isFinite(typed) || !(typed > 0)) return true;
        const gross = unit === "fiat" ? typed / live : typed;
        return gross >= ad.min && gross <= Math.min(ad.max, ad.available);
      })
      .sort((a, b) => {
        const ao = users.find((user) => user.id === a.userId)?.online ? 0 : 1;
        const bo = users.find((user) => user.id === b.userId)?.online ? 0 : 1;
        if (ao !== bo) return ao - bo;
        const pa = adPrice(a, quotes, coins.find((item) => item.symbol === a.coin)?.price);
        const pb = adPrice(b, quotes, coins.find((item) => item.symbol === b.coin)?.price);
        return side === "buy" ? pa - pb : pb - pa;
      })[0];
  }, [ads, coin, coins, fiat, me, meId, quotes, side, skipKyc, typed, unit, users]);
  const live = best ? adPrice(best, quotes, coins.find((item) => item.symbol === best.coin)?.price) : 0;
  const gross = best && Number.isFinite(typed) && typed > 0 ? (unit === "fiat" ? typed / (live || 1) : typed) : (best?.min ?? 0);
  const fiatPay = roundPay(gross * live);
  const fees = computeFees(Number.isFinite(gross) ? gross : 0, settings);
  const merchant = users.find((user) => user.id === best?.userId);
  const pass = merchant ? passes.some((item) => item.buyerId === meId && item.sellerId === merchant.id && item.status === "active") : false;
  const pending = merchant
    ? kycs.some((item) => item.userId === meId && item.sellerId === merchant.id && item.purpose === "buyer" && item.status === "pending")
    : false;
  const canSell = !!me && merchantLive(me);
  const press = (digit: string) => {
    setAmount((current) => {
      if (digit === "back") return current.slice(0, -1);
      if (digit === "." && current.includes(".")) return current;
      if (current.length > 10) return current;
      return `${current}${digit}`;
    });
  };
  return (
    <Page title={t("express.title")} sub={t("express.sub")}>
      <Panel className="grid gap-3 p-4">
        <div className="grid grid-cols-2 gap-1 rounded-md bg-surface-2 p-1">
          {(["buy", "sell"] as const).map((item) => (
            <button
              key={item}
              type="button"
              className={`min-h-11 rounded-md text-sm font-semibold ${side === item ? (item === "buy" ? "bg-buy text-buy-fg" : "bg-sell text-sell-fg") : "text-muted"}`}
              onClick={() => setSide(item)}
            >
              {item === "buy" ? t("express.buySide") : t("express.sellSide")}
            </button>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {listed.map((item) => (
            <button key={item.symbol} type="button" className={`min-h-11 shrink-0 rounded-md px-3 text-sm font-semibold ${coin === item.symbol ? "bg-primary text-primary-fg" : "bg-surface-2"}`} onClick={() => setCoin(item.symbol)}>
              {item.symbol}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Field label={t("common.fiat")}>
            <select className={fieldClass} value={fiat} onChange={(event) => setFiat(event.target.value as Fiat)}>
              {FIATS.map((code) => (
                <option key={code} value={code}>
                  {t(`fiatName.${code}`)}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t("express.unitFiat")}>
            <select className={fieldClass} value={unit} onChange={(event) => setUnit(event.target.value as "fiat" | "coin")}>
              <option value="fiat">{t("express.unitFiat")}</option>
              <option value="coin">{t("express.unitCoin")}</option>
            </select>
          </Field>
        </div>
        <Field label={unit === "fiat" ? t("express.pay") : t("express.unitCoin")}>
          <input className={fieldClass} inputMode="decimal" value={amount} onChange={(event) => setAmount(event.target.value)} />
        </Field>
        <div className="grid grid-cols-3 gap-2">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "back"].map((digit) => (
            <button key={digit} type="button" className="min-h-11 rounded-md bg-surface-2 text-sm font-semibold" onClick={() => press(digit)}>
              {digit === "back" ? t("common.back") : digit}
            </button>
          ))}
        </div>
        <label className="flex min-h-11 items-center gap-2 text-sm">
          <input type="checkbox" className="size-4" checked={skipKyc} onChange={(event) => setSkipKyc(event.target.checked)} />
          {t("express.skipId")}
        </label>
        {best && merchant ? (
          <div className="grid gap-1 text-sm">
            <p className="text-muted">{t("express.best")}</p>
            <p className="font-semibold">{personName(merchant.name, lang)}</p>
            <p className="font-mono text-2xl font-semibold tabular-nums">{fiatAmt(live, best.fiat, lang)}</p>
            <p>
              {side === "buy" ? t("express.pay") : t("express.unitCoin")}: {side === "buy" ? fiatAmt(fiatPay, best.fiat, lang) : `${numFlex(gross, lang)} ${coin}`}
            </p>
            <p>
              {side === "buy" ? t("express.youGet") : t("express.pay")}: {side === "buy" ? `${numFlex(Math.max(0, gross - fees.buyerFee), lang)} ${coin}` : fiatAmt(fiatPay, best.fiat, lang)}
            </p>
            <p>
              {t("express.fee")}: {numFlex(side === "buy" ? fees.buyerFee : fees.sellerFee, lang)} {coin}
            </p>
            <p>
              {t("express.window")}: {t("common.minutes", { n: best.payMin ?? 15 })}
            </p>
            {side === "sell" && !canSell ? (
              <Link to="/identity" className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-fg">
                {t("nav.identity")}
              </Link>
            ) : (
              <Button
                variant={side === "buy" ? "buy" : "sell"}
                disabled={side === "buy" && pending}
                onClick={() => {
                  if (side === "sell" || pass) setOpen(true);
                  else setKyc(true);
                }}
              >
                {side === "sell" || pass ? t("express.go") : pending ? t("market.waiting") : t("market.verify")}
              </Button>
            )}
          </div>
        ) : (
          <Empty>{t("express.none")}</Empty>
        )}
      </Panel>
      {open && best ? <TradeSheet ad={best} preset={Number(gross.toFixed(4))} onClose={() => setOpen(false)} /> : null}
      {kyc && merchant ? (
        <KycSheet sellerId={merchant.id} title={t("trade.kycTitle")} note={t("trade.needPass", { name: personName(merchant.name, lang) })} onClose={() => setKyc(false)} />
      ) : null}
    </Page>
  );
}

function roundPay(n: number) {
  return Math.round(n * 100) / 100;
}

export function PostScreen() {
  const { lang, t } = useI18n();
  const meId = useDesk((state) => state.meId);
  const users = useDesk((state) => state.users);
  const coins = useDesk((state) => state.coins);
  const ads = useDesk((state) => state.ads);
  const payments = useDesk((state) => state.payments);
  const postAd = useDesk((state) => state.postAd);
  const toggleAd = useDesk((state) => state.toggleAd);
  const closeAd = useDesk((state) => state.closeAd);
  const takeBreak = useDesk((state) => state.takeBreak);
  const quotes = useDesk((state) => state.quotes);
  const me = users.find((user) => user.id === meId);
  const mineRails = payments.filter((item) => item.userId === meId);
  const [side, setSide] = useState<AdSide>("sell");
  const [coin, setCoin] = useState("USDT");
  const [fiat, setFiat] = useState<Fiat>("INR");
  const [price, setPrice] = useState("100");
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("20");
  const [inventory, setInventory] = useState("50");
  const [rails, setRails] = useState<Rail[]>(mineRails[0] ? [mineRails[0].rail] : []);
  const [terms, setTerms] = useState("");
  const [priceMode, setPriceMode] = useState<PriceMode>("fixed");
  const [margin, setMargin] = useState("100");
  const [payMin, setPayMin] = useState(15);
  const [autoReply, setAutoReply] = useState("");
  const [needKyc, setNeedKyc] = useState(false);
  const [minComp, setMinComp] = useState("0");
  const mine = ads.filter((ad) => ad.userId === meId);
  if (!me) return null;
  return (
    <Page title={t("ads.title")} sub={t("ads.sub")}>
      {!merchantLive(me) ? (
        <Panel className="grid gap-3 p-4">
          <p>{t("ads.needLicense")}</p>
          <Link to="/identity" className="text-sm font-semibold text-primary">
            {t("nav.identity")}
          </Link>
        </Panel>
      ) : (
        <form
          className="grid gap-3 rounded-md border border-line bg-surface p-4"
          onSubmit={(event) => {
            event.preventDefault();
            const ok = postAd({
              side,
              coin,
              fiat,
              price: Number(price),
              min: Number(min),
              max: Number(max),
              inventory: Number(inventory),
              rails,
              terms,
              priceMode,
              margin: Number(margin),
              payMin,
              autoReply,
              needKyc,
              minComp: Number(minComp),
            });
            if (ok) setTerms("");
          }}
        >
          <div className="grid grid-cols-2 gap-2">
            {(["sell", "buy"] as const).map((item) => (
              <button key={item} type="button" className={`min-h-11 rounded-md text-sm font-semibold ${side === item ? "bg-primary text-primary-fg" : "bg-surface-2"}`} onClick={() => setSide(item)}>
                {t(`side.${item}`)}
              </button>
            ))}
          </div>
          <Field label={t("common.coin")}>
            <select className={fieldClass} value={coin} onChange={(event) => setCoin(event.target.value)}>
              {sortCoins(coins.filter((item) => item.listed)).map((item) => (
                <option key={item.symbol} value={item.symbol}>
                  {item.symbol} {coinLabel(item.symbol, lang)}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t("common.fiat")}>
            <select className={fieldClass} value={fiat} onChange={(event) => setFiat(event.target.value as Fiat)}>
              {FIATS.map((code) => (
                <option key={code} value={code}>
                  {t(`fiatName.${code}`)}
                </option>
              ))}
            </select>
          </Field>
          <Field label={t("ads.mode")}>
            <select className={fieldClass} value={priceMode} onChange={(event) => setPriceMode(event.target.value as PriceMode)}>
              <option value="fixed">{t("ads.fixed")}</option>
              <option value="float">{t("ads.float")}</option>
            </select>
          </Field>
          <Field label={t("ads.price")}>
            <input className={fieldClass} inputMode="decimal" value={price} onChange={(event) => setPrice(event.target.value)} />
          </Field>
          {priceMode === "float" ? (
            <Field label={t("ads.margin")}>
              <input className={fieldClass} inputMode="decimal" value={margin} onChange={(event) => setMargin(event.target.value)} />
            </Field>
          ) : null}
          <Field label={t("ads.window")}>
            <select className={fieldClass} value={payMin} onChange={(event) => setPayMin(Number(event.target.value))}>
              {[15, 30, 60].map((item) => (
                <option key={item} value={item}>
                  {t("common.minutes", { n: item })}
                </option>
              ))}
            </select>
          </Field>
          <div className="grid gap-3 sm:grid-cols-3">
            <Field label={t("ads.min")}>
              <input className={fieldClass} inputMode="decimal" value={min} onChange={(event) => setMin(event.target.value)} />
            </Field>
            <Field label={t("ads.max")}>
              <input className={fieldClass} inputMode="decimal" value={max} onChange={(event) => setMax(event.target.value)} />
            </Field>
            <Field label={t("ads.inventory")}>
              <input className={fieldClass} inputMode="decimal" value={inventory} onChange={(event) => setInventory(event.target.value)} />
            </Field>
          </div>
          <fieldset className="grid gap-2">
            <legend className="text-sm font-medium text-muted">{t("ads.rails")}</legend>
            <p className="text-xs text-muted">{t("ads.railsCap")}</p>
            {mineRails.length === 0 ? (
              <Link to="/payments" className="text-sm font-semibold text-primary">
                {t("pay.need")}
              </Link>
            ) : (
              RAILS.filter((rail) => mineRails.some((item) => item.rail === rail)).map((rail) => (
                <label key={rail} className="flex min-h-11 items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={rails.includes(rail)}
                    onChange={(event) =>
                      setRails((current) => {
                        if (!event.target.checked) return current.filter((item) => item !== rail);
                        if (current.includes(rail) || current.length >= 5) return current;
                        return [...current, rail];
                      })
                    }
                  />
                  {t(`rail.${rail}`)}
                </label>
              ))
            )}
          </fieldset>
          <Field label={t("ads.auto")}>
            <textarea className="w-full rounded-md border border-line bg-bg px-3 py-2 text-sm text-fg" rows={2} placeholder={t("ads.autoPh")} value={autoReply} onChange={(event) => setAutoReply(event.target.value)} />
          </Field>
          <Field label={t("ads.minComp")}>
            <input className={fieldClass} inputMode="numeric" value={minComp} onChange={(event) => setMinComp(event.target.value)} />
          </Field>
          <label className="flex min-h-11 items-center gap-2 text-sm">
            <input type="checkbox" className="size-4" checked={needKyc} onChange={(event) => setNeedKyc(event.target.checked)} />
            {t("ads.needId")}
          </label>
          <Field label={t("common.terms")}>
            <textarea className="w-full rounded-md border border-line bg-bg px-3 py-2 text-sm text-fg" rows={4} placeholder={t("ads.termsPh")} value={terms} onChange={(event) => setTerms(event.target.value)} />
          </Field>
          <Button type="submit">{t("ads.title")}</Button>
        </form>
      )}
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-semibold">{t("ads.my")}</h2>
        {mine.length > 0 ? (
          <Button variant="line" onClick={() => takeBreak()}>
            {t("ads.break")}
          </Button>
        ) : null}
      </div>
      {mine.length === 0 ? (
        <Empty>{t("ads.empty")}</Empty>
      ) : (
        <div className="grid gap-2">
          {mine.map((ad) => (
            <Panel key={ad.id} className="grid gap-3 p-3">
              <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="font-semibold">
                    {t(`side.${ad.side}`)} {ad.coin} · {fiatSign(ad.fiat)}
                    {num(adPrice(ad, quotes, coins.find((item) => item.symbol === ad.coin)?.price), lang)}
                    {ad.priceMode === "float" ? ` · ${t("ads.float")}` : ""}
                  </p>
                  <p className="text-sm text-muted">
                    {numFlex(ad.available, lang)} · {ad.paused ? t("status.suspended") : t("status.active")} · {t("common.minutes", { n: ad.payMin ?? 15 })}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="line" onClick={() => toggleAd(ad.id)}>
                    {ad.paused ? t("ads.resume") : t("ads.pause")}
                  </Button>
                  <Button variant="soft" onClick={() => closeAd(ad.id)}>
                    {t("ads.close")}
                  </Button>
                </div>
              </div>
              <AdEditor ad={ad} />
            </Panel>
          ))}
        </div>
      )}
    </Page>
  );
}

function AdEditor({ ad }: { ad: Ad }) {
  const { t } = useI18n();
  const payments = useDesk((state) => state.payments);
  const editAd = useDesk((state) => state.editAd);
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(String(ad.price));
  const [min, setMin] = useState(String(ad.min));
  const [max, setMax] = useState(String(ad.max));
  const [terms, setTerms] = useState(ad.terms === "__default__" ? "" : ad.terms);
  const [priceMode, setPriceMode] = useState<PriceMode>(ad.priceMode ?? "fixed");
  const [margin, setMargin] = useState(String(ad.margin ?? 100));
  const [payMin, setPayMin] = useState(ad.payMin ?? 15);
  const [autoReply, setAutoReply] = useState(ad.autoReply ?? "");
  const [needKyc, setNeedKyc] = useState(!!ad.needKyc);
  const [minComp, setMinComp] = useState(String(ad.minComp ?? 0));
  const [rails, setRails] = useState<Rail[]>(ad.rails);
  const mineRails = payments.filter((item) => item.userId === ad.userId);
  if (!open) {
    return (
      <Button variant="line" onClick={() => setOpen(true)}>
        {t("ads.edit")}
      </Button>
    );
  }
  return (
    <form
      className="grid gap-3 border-t border-line pt-3"
      onSubmit={(event) => {
        event.preventDefault();
        const ok = editAd(ad.id, {
          price: Number(price),
          min: Number(min),
          max: Number(max),
          terms,
          priceMode,
          margin: Number(margin),
          payMin,
          autoReply,
          needKyc,
          minComp: Number(minComp),
          rails,
        });
        if (ok) setOpen(false);
      }}
    >
      <Field label={t("ads.mode")}>
        <select className={fieldClass} value={priceMode} onChange={(event) => setPriceMode(event.target.value as PriceMode)}>
          <option value="fixed">{t("ads.fixed")}</option>
          <option value="float">{t("ads.float")}</option>
        </select>
      </Field>
      <div className="grid gap-3 sm:grid-cols-3">
        <Field label={t("ads.price")}>
          <input className={fieldClass} inputMode="decimal" value={price} onChange={(event) => setPrice(event.target.value)} />
        </Field>
        <Field label={t("ads.min")}>
          <input className={fieldClass} inputMode="decimal" value={min} onChange={(event) => setMin(event.target.value)} />
        </Field>
        <Field label={t("ads.max")}>
          <input className={fieldClass} inputMode="decimal" value={max} onChange={(event) => setMax(event.target.value)} />
        </Field>
      </div>
      {priceMode === "float" ? (
        <Field label={t("ads.margin")}>
          <input className={fieldClass} inputMode="decimal" value={margin} onChange={(event) => setMargin(event.target.value)} />
        </Field>
      ) : null}
      <Field label={t("ads.window")}>
        <select className={fieldClass} value={payMin} onChange={(event) => setPayMin(Number(event.target.value))}>
          {[15, 30, 60].map((item) => (
            <option key={item} value={item}>
              {t("common.minutes", { n: item })}
            </option>
          ))}
        </select>
      </Field>
      <fieldset className="grid gap-2">
        <legend className="text-sm font-medium text-muted">{t("ads.rails")}</legend>
        {RAILS.filter((rail) => mineRails.some((item) => item.rail === rail) || ad.rails.includes(rail)).map((rail) => (
          <label key={rail} className="flex min-h-11 items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={rails.includes(rail)}
              onChange={(event) =>
                setRails((current) => {
                  if (!event.target.checked) return current.filter((item) => item !== rail);
                  if (current.includes(rail) || current.length >= 5) return current;
                  return [...current, rail];
                })
              }
            />
            {t(`rail.${rail}`)}
          </label>
        ))}
      </fieldset>
      <Field label={t("ads.auto")}>
        <input className={fieldClass} value={autoReply} onChange={(event) => setAutoReply(event.target.value)} />
      </Field>
      <Field label={t("ads.minComp")}>
        <input className={fieldClass} inputMode="numeric" value={minComp} onChange={(event) => setMinComp(event.target.value)} />
      </Field>
      <label className="flex min-h-11 items-center gap-2 text-sm">
        <input type="checkbox" className="size-4" checked={needKyc} onChange={(event) => setNeedKyc(event.target.checked)} />
        {t("ads.needId")}
      </label>
      <Field label={t("common.terms")}>
        <textarea className="w-full rounded-md border border-line bg-bg px-3 py-2 text-sm text-fg" rows={3} value={terms} onChange={(event) => setTerms(event.target.value)} />
      </Field>
      <div className="flex gap-2">
        <Button type="submit">{t("common.save")}</Button>
        <Button variant="line" onClick={() => setOpen(false)}>
          {t("common.cancel")}
        </Button>
      </div>
    </form>
  );
}

export function PassesScreen() {
  const { lang, t } = useI18n();
  const meId = useDesk((state) => state.meId);
  const users = useDesk((state) => state.users);
  const passes = useDesk((state) => state.passes);
  const kycs = useDesk((state) => state.kycs);
  const reviewBuyerKyc = useDesk((state) => state.reviewBuyerKyc);
  const revokePass = useDesk((state) => state.revokePass);
  const flash = useDesk((state) => state.flash);
  const me = users.find((user) => user.id === meId);
  if (!me) return null;
  const held = passes.filter((item) => item.buyerId === me.id);
  const pending = kycs.filter((item) => item.sellerId === me.id && item.purpose === "buyer" && item.status === "pending");
  const issued = passes.filter((item) => item.sellerId === me.id && item.status === "active");
  const nameOf = (id: string) => {
    const user = users.find((item) => item.id === id);
    return user ? personName(user.name, lang) : "";
  };
  return (
    <Page title={t("pass.title")} sub={t("pass.sub")}>
      <Panel className="grid gap-2 p-4">
        <h2 className="font-semibold">{t("pass.merchantLicense")}</h2>
        {me.sellerLicense ? (
          <>
            <p className="font-mono text-2xl">{me.sellerLicense.code}</p>
            <p className="text-sm text-muted">{t(`status.${me.sellerLicense.status === "active" ? "active" : "suspended"}`)}</p>
            {me.sellerLicense.status === "suspended" ? <p className="text-sm">{t("pass.suspended")}</p> : null}
          </>
        ) : (
          <p className="text-sm text-muted">{t("pass.noneLicense")}</p>
        )}
      </Panel>
      <h2 className="font-semibold">{t("pass.yourPasses")}</h2>
      {held.length === 0 ? (
        <Empty>{t("pass.emptyHeld")}</Empty>
      ) : (
        held.map((pass) => (
          <Panel key={pass.id} className="grid gap-1 p-3">
            <p className="font-mono text-xl">{pass.code}</p>
            <p className="text-sm">
              {t("pass.by")}: {nameOf(pass.sellerId)}
            </p>
            <p className="text-sm text-muted">{pass.status === "active" ? t("pass.permanent") : t("pass.revokedNote")}</p>
            <Button
              variant="line"
              onClick={() => {
                void navigator.clipboard?.writeText(pass.code);
                flash("common.copied");
              }}
            >
              {t("common.copy")}
            </Button>
          </Panel>
        ))
      )}
      {merchantLive(me) ? (
        <>
          <h2 className="font-semibold">{t("pass.issued")}</h2>
          {pending.length === 0 && issued.length === 0 ? <Empty>{t("pass.emptyIssued")}</Empty> : null}
          {pending.map((item) => (
            <Panel key={item.id} className="grid gap-2 p-3">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-muted">
                {t(`doc.${item.docType}`)}
                {item.taxKind ? ` · ${t(`tax.${item.taxKind}`)}` : ""} · {item.last4}
              </p>
              <p className="text-sm">{t(`country.${item.country}`)}</p>
              <div className="flex gap-2">
                <Button onClick={() => reviewBuyerKyc(item.id, true)}>{t("pass.grant")}</Button>
                <Button variant="line" onClick={() => reviewBuyerKyc(item.id, false)}>
                  {t("pass.deny")}
                </Button>
              </div>
            </Panel>
          ))}
          {issued.map((pass) => (
            <Panel key={pass.id} className="flex flex-wrap items-center justify-between gap-2 p-3">
              <div>
                <p className="font-mono text-lg">{pass.code}</p>
                <p className="text-sm text-muted">
                  {t("pass.holder")}: {nameOf(pass.buyerId)}
                </p>
              </div>
              <Button variant="soft" onClick={() => revokePass(pass.id)}>
                {t("common.revoke")}
              </Button>
            </Panel>
          ))}
        </>
      ) : null}
    </Page>
  );
}

export function PaymentsScreen() {
  const { t } = useI18n();
  const meId = useDesk((state) => state.meId);
  const payments = useDesk((state) => state.payments);
  const addPayment = useDesk((state) => state.addPayment);
  const removePayment = useDesk((state) => state.removePayment);
  const [rail, setRail] = useState<Rail>("upi");
  const [label, setLabel] = useState("");
  const [details, setDetails] = useState("");
  const mine = payments.filter((item) => item.userId === meId);
  return (
    <Page title={t("pay.title")} sub={t("pay.sub")}>
      <form
        className="grid gap-3 rounded-md border border-line bg-surface p-4"
        onSubmit={(event) => {
          event.preventDefault();
          if (addPayment(rail, label, details)) {
            setLabel("");
            setDetails("");
          }
        }}
      >
        <Field label={t("pay.rail")}>
          <select className={fieldClass} value={rail} onChange={(event) => setRail(event.target.value as Rail)}>
            {RAILS.map((item) => (
              <option key={item} value={item}>
                {t(`rail.${item}`)}
              </option>
            ))}
          </select>
        </Field>
        <Field label={t("pay.label")}>
          <input className={fieldClass} value={label} onChange={(event) => setLabel(event.target.value)} />
        </Field>
        <Field label={t("pay.details")}>
          <input className={fieldClass} placeholder={t("pay.detailsPh")} value={details} onChange={(event) => setDetails(event.target.value)} />
        </Field>
        <Button type="submit">{t("pay.add")}</Button>
      </form>
      <h2 className="font-semibold">{t("pay.saved")}</h2>
      {mine.length === 0 ? (
        <Empty>{t("pay.empty")}</Empty>
      ) : (
        mine.map((item) => (
          <Panel key={item.id} className="flex flex-wrap items-center justify-between gap-2 p-3">
            <div>
              <p className="font-semibold">{item.label || t(`rail.${item.rail}`)}</p>
              <p className="font-mono text-sm">{item.details}</p>
            </div>
            <Button variant="line" onClick={() => removePayment(item.id)}>
              {t("pay.remove")}
            </Button>
          </Panel>
        ))
      )}
    </Page>
  );
}

export function IdentityScreen() {
  const { t } = useI18n();
  const meId = useDesk((state) => state.meId);
  const users = useDesk((state) => state.users);
  const kycs = useDesk((state) => state.kycs);
  const me = users.find((user) => user.id === meId);
  if (!me) return null;
  const latest = kycs.find((item) => item.userId === me.id && item.purpose === "seller");
  const live = me.sellerLicense?.status === "active";
  const level = live ? "levelMerchant" : latest?.status === "pending" ? "levelPending" : latest?.status === "rejected" ? "levelRejected" : "levelNone";
  const showForm = !live && latest?.status !== "pending";
  return (
    <Page title={t("kyc.title")} sub={t("kyc.sellerSub")}>
      <Panel className="grid gap-2 p-4">
        <p className="text-sm text-muted">{t("kyc.held")}</p>
        <p className="text-xl font-semibold">{t(`kyc.${level}`)}</p>
        {me.sellerLicense ? <p className="font-mono text-2xl">{me.sellerLicense.code}</p> : null}
        {me.sellerLicense ? (
          <p className="text-sm text-muted">{me.sellerLicense.status === "active" ? t("common.active") : t("status.suspended")}</p>
        ) : null}
        {!me.sellerLicense && !latest ? <p className="text-sm text-muted">{t("kyc.none")}</p> : null}
      </Panel>
      {latest ? (
        <Panel className="grid gap-2 p-4">
          <p className="font-semibold">{latest.name}</p>
          <p className="text-sm text-muted">
            {t(`country.${latest.country}`)} · {t(`doc.${latest.docType}`)} · {latest.last4} · {t(`kyc.${latest.status === "pending" ? "pendingAdmin" : latest.status}`)}
          </p>
          {latest.reason ? (
            <p className="text-sm">
              {t("kyc.why")}: {t(`kyc.reasons.${latest.reason}`)}
            </p>
          ) : null}
          <ul className="grid gap-1 text-sm">
            <li>
              {t("kyc.front")}: {latest.front ? t("kyc.attached") : t("kyc.missing")}
            </li>
            {latest.docType !== "passport" ? (
              <li>
                {t("kyc.back")}: {latest.back ? t("kyc.attached") : t("kyc.missing")}
              </li>
            ) : null}
            <li>
              {t("kyc.selfie")}: {latest.selfie ? t("kyc.attached") : t("kyc.missing")}
            </li>
          </ul>
        </Panel>
      ) : null}
      {showForm ? <KycForm purpose="seller" /> : null}
    </Page>
  );
}

export function GuideScreen() {
  const { t } = useI18n();
  const blocks = ["a", "b", "c", "d", "e", "f"] as const;
  return (
    <Page title={t("help.title")}>
      <div className="grid gap-3">
        {blocks.map((key, index) => (
          <Panel key={key} className="grid gap-1 p-4">
            <p className="text-xs font-semibold text-primary">{index + 1}</p>
            <h2 className="text-lg font-semibold">{t(`help.${key}T`)}</h2>
            <p className="text-sm leading-relaxed text-muted">{t(`help.${key}B`)}</p>
          </Panel>
        ))}
      </div>
    </Page>
  );
}

function PeopleList({
  title,
  ids,
  users,
  lang,
  empty,
  onToggle,
  action,
}: {
  title: string;
  ids: string[];
  users: { id: string; name: { en: string; hi: string; ur: string } }[];
  lang: "en" | "hi" | "ur";
  empty: string;
  onToggle: (id: string) => void;
  action: string;
}) {
  return (
    <Panel className="grid gap-2 p-4">
      <h2 className="font-semibold">{title}</h2>
      {ids.length === 0 ? (
        <p className="text-sm text-muted">{empty}</p>
      ) : (
        ids.map((id) => {
          const user = users.find((item) => item.id === id);
          if (!user) return null;
          return (
            <div key={id} className="flex items-center justify-between gap-3">
              <span className="font-medium">{personName(user.name, lang)}</span>
              <Button variant="line" onClick={() => onToggle(id)}>
                {action}
              </Button>
            </div>
          );
        })
      )}
    </Panel>
  );
}

export function ProfileScreen() {
  const { lang, t } = useI18n();
  const meId = useDesk((state) => state.meId);
  const users = useDesk((state) => state.users);
  const setMe = useDesk((state) => state.setMe);
  const reset = useDesk((state) => state.reset);
  const [arm, setArm] = useState(false);
  const me = users.find((user) => user.id === meId);
  if (!me) return null;
  return (
    <Page title={t("profile.title")} sub={t("profile.seat")}>
      <AccountPanel />
      <Panel className="grid gap-1 p-4">
        <p className="text-sm text-muted">{t("profile.acting")}</p>
        <p className="text-xl font-semibold">{personName(me.name, lang)}</p>
        <p className="text-sm text-muted">{t(`role.${roleOf(me)}`)}</p>
      </Panel>
      <PeopleList title={t("profile.following")} ids={me.following ?? []} users={users} lang={lang} empty={t("profile.noneList")} onToggle={(id) => useDesk.getState().toggleFollow(id)} action={t("trade.unfollow")} />
      <PeopleList title={t("profile.blocked")} ids={me.blocked ?? []} users={users} lang={lang} empty={t("profile.noneList")} onToggle={(id) => useDesk.getState().toggleBlock(id)} action={t("trade.unblock")} />
      <h2 className="font-semibold">{t("profile.switch")}</h2>
      <div className="grid gap-2">
        {users.map((user) => (
          <button
            key={user.id}
            type="button"
            className={`flex min-h-11 items-center justify-between rounded-md border px-3 py-2 text-start ${user.id === me.id ? "border-primary bg-surface" : "border-line bg-surface"}`}
            onClick={() => setMe(user.id)}
          >
            <span className="font-semibold">{personName(user.name, lang)}</span>
            <span className="text-sm text-muted">{t(`role.${roleOf(user)}`)}</span>
          </button>
        ))}
      </div>
      <Panel className="grid gap-3 p-4">
        <h2 className="font-semibold">{t("profile.reset")}</h2>
        <p className="text-sm text-muted">{t("profile.resetWarn")}</p>
        {arm ? (
          <div className="flex gap-2">
            <Button
              variant="sell"
              onClick={() => {
                reset();
                setArm(false);
              }}
            >
              {t("profile.resetDo")}
            </Button>
            <Button variant="line" onClick={() => setArm(false)}>
              {t("common.cancel")}
            </Button>
          </div>
        ) : (
          <Button variant="line" onClick={() => setArm(true)}>
            {t("profile.reset")}
          </Button>
        )}
      </Panel>
    </Page>
  );
}
