import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { COUNTRIES, TAX_KINDS } from "@/lib/p2p/catalog";
import { fiatAmt, num, numFlex } from "@/lib/p2p/format";
import { coinLabel, personName, useI18n } from "@/lib/p2p/i18n";
import { adPrice, computeFees, roleOf } from "@/lib/p2p/logic";
import { useDesk } from "@/lib/p2p/store";
import type { Ad, AppealReason, DocType } from "@/lib/p2p/types";
import { Button, Empty, fieldClass, Field, Modal, Page, Panel } from "./ui";

export function TradeSheet({ ad, onClose, preset }: { ad: Ad; onClose: () => void; preset?: number }) {
  const { lang, t } = useI18n();
  const settings = useDesk((state) => state.settings);
  const users = useDesk((state) => state.users);
  const quotes = useDesk((state) => state.quotes);
  const coins = useDesk((state) => state.coins);
  const placeOrder = useDesk((state) => state.placeOrder);
  const navigate = useNavigate();
  const merchant = users.find((user) => user.id === ad.userId);
  const price = adPrice(ad, quotes, coins.find((item) => item.symbol === ad.coin)?.price);
  const [grossText, setGrossText] = useState(preset ? String(preset) : String(ad.min));
  const [rail, setRail] = useState(ad.rails[0]);
  const gross = Number(grossText);
  const fees = Number.isFinite(gross) ? computeFees(gross, settings) : { buyerFee: 0, sellerFee: 0 };
  const net = Number.isFinite(gross) ? gross - fees.buyerFee : 0;
  const buying = ad.side === "sell";

  return (
    <Modal title={buying ? t("trade.titleBuy") : t("trade.titleSell")} onClose={onClose}>
      <div className="grid gap-3">
        <p className="text-sm text-muted">{merchant ? personName(merchant.name, lang) : ""}</p>
        <p className="font-mono text-2xl font-semibold tabular-nums">{fiatAmt(price, ad.fiat, lang)}</p>
        <Field label={t("common.coin")}>
          <input className={fieldClass} inputMode="decimal" value={grossText} onChange={(event) => setGrossText(event.target.value)} />
        </Field>
        <div className="flex gap-2">
          <Button variant="line" onClick={() => setGrossText(String(ad.min))}>
            {t("trade.min")}
          </Button>
          <Button variant="line" onClick={() => setGrossText(String(Math.min(ad.max, ad.available)))}>
            {t("trade.max")}
          </Button>
        </div>
        <Field label={t("common.payment")}>
          <select className={fieldClass} value={rail} onChange={(event) => setRail(event.target.value as typeof rail)}>
            {ad.rails.map((item) => (
              <option key={item} value={item}>
                {t(`rail.${item}`)}
              </option>
            ))}
          </select>
        </Field>
        <dl className="grid gap-1 text-sm">
          <Row k={buying ? t("trade.youPay") : t("trade.youReceive")} v={fiatAmt(Number.isFinite(gross) ? gross * price : 0, ad.fiat, lang)} />
          <Row k={t("trade.buyerFee")} v={`${numFlex(fees.buyerFee, lang)} ${ad.coin}`} />
          <Row k={t("trade.sellerFee")} v={`${numFlex(fees.sellerFee, lang)} ${ad.coin}`} />
          <Row k={t("trade.net")} v={`${numFlex(Math.max(0, net), lang)} ${ad.coin}`} />
          <Row k={t("ads.window")} v={t("common.minutes", { n: ad.payMin ?? 15 })} />
        </dl>
        <p className="text-xs leading-relaxed text-muted">{t("trade.escrowNote")}</p>
        <p className="text-xs text-muted">{t("trade.offDesk")}</p>
        <Button
          variant={buying ? "buy" : "sell"}
          onClick={() => {
            const id = placeOrder(ad.id, gross, rail);
            if (id) {
              onClose();
              void navigate({ to: "/order/$orderId", params: { orderId: id } });
            }
          }}
        >
          {t("trade.confirm")}
        </Button>
      </div>
    </Modal>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-muted">{k}</dt>
      <dd className="font-mono font-medium tabular-nums">{v}</dd>
    </div>
  );
}

export function KycSheet({
  sellerId,
  title,
  note,
  onClose,
}: {
  sellerId?: string;
  title: string;
  note?: string;
  onClose: () => void;
}) {
  return (
    <Modal title={title} onClose={onClose}>
      {note ? <p className="mb-3 text-sm leading-relaxed text-muted">{note}</p> : null}
      <KycForm purpose={sellerId ? "buyer" : "seller"} sellerId={sellerId} onDone={onClose} />
    </Modal>
  );
}

export function KycForm({
  purpose,
  sellerId,
  onDone,
}: {
  purpose: "seller" | "buyer";
  sellerId?: string;
  onDone?: () => void;
}) {
  const { t } = useI18n();
  const submitKyc = useDesk((state) => state.submitKyc);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("IN");
  const [docType, setDocType] = useState<DocType>("national_id");
  const [taxKind, setTaxKind] = useState("PAN");
  const [last4, setLast4] = useState("");
  const [declared, setDeclared] = useState(false);
  const [front, setFront] = useState(false);
  const [back, setBack] = useState(false);
  const [selfie, setSelfie] = useState(false);
  const taxes = useMemo(() => TAX_KINDS.filter((item) => item.country === country), [country]);
  const needBack = docType !== "passport";

  return (
    <form
      className="grid gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        const ok = submitKyc({
          purpose,
          sellerId,
          name,
          country,
          docType,
          taxKind: docType === "tax_id" ? taxKind : null,
          last4,
          declared,
          front,
          back,
          selfie,
        });
        if (ok) onDone?.();
      }}
    >
      <Field label={t("common.name")}>
        <input className={fieldClass} value={name} onChange={(event) => setName(event.target.value)} />
      </Field>
      <Field label={t("common.country")}>
        <select
          className={fieldClass}
          value={country}
          onChange={(event) => {
            const next = event.target.value;
            setCountry(next);
            const first = TAX_KINDS.find((item) => item.country === next);
            if (first) setTaxKind(first.id);
          }}
        >
          {COUNTRIES.map((code) => (
            <option key={code} value={code}>
              {t(`country.${code}`)}
            </option>
          ))}
        </select>
      </Field>
      <Field label={t("kyc.doc")}>
        <select className={fieldClass} value={docType} onChange={(event) => setDocType(event.target.value as DocType)}>
          {(["national_id", "passport", "tax_id"] as const).map((code) => (
            <option key={code} value={code}>
              {t(`doc.${code}`)}
            </option>
          ))}
        </select>
      </Field>
      {docType === "tax_id" ? (
        <Field label={t("kyc.tax")}>
          <select className={fieldClass} value={taxKind} onChange={(event) => setTaxKind(event.target.value)}>
            {(taxes.length ? taxes : TAX_KINDS).map((item) => (
              <option key={item.id} value={item.id}>
                {t(`country.${item.country}`)} · {t(`tax.${item.id}`)}
              </option>
            ))}
          </select>
        </Field>
      ) : null}
      <Field label={t("kyc.last4")}>
        <input
          className={fieldClass}
          inputMode="numeric"
          maxLength={4}
          value={last4}
          onChange={(event) => setLast4(event.target.value.replace(/\D/g, "").slice(0, 4))}
        />
      </Field>
      <p className="text-xs text-muted">{t("kyc.last4Hint")}</p>
      <div className="grid gap-2">
        <p className="text-sm font-semibold">{t("kyc.evidence")}</p>
        <p className="text-xs leading-relaxed text-muted">{t("kyc.docsNote")}</p>
        <DocToggle label={t("kyc.front")} on={front} onClick={() => setFront((value) => !value)} attach={t("kyc.attach")} attached={t("kyc.attached")} />
        {needBack ? (
          <DocToggle label={t("kyc.back")} on={back} onClick={() => setBack((value) => !value)} attach={t("kyc.attach")} attached={t("kyc.attached")} />
        ) : null}
        <DocToggle label={t("kyc.selfie")} on={selfie} onClick={() => setSelfie((value) => !value)} attach={t("kyc.attach")} attached={t("kyc.attached")} />
      </div>
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" className="mt-1 size-4" checked={declared} onChange={(event) => setDeclared(event.target.checked)} />
        <span>{t("kyc.declare")}</span>
      </label>
      <Button type="submit">{purpose === "seller" ? t("kyc.submitSeller") : t("kyc.submitBuyer")}</Button>
    </form>
  );
}

function DocToggle({
  label,
  on,
  onClick,
  attach,
  attached,
}: {
  label: string;
  on: boolean;
  onClick: () => void;
  attach: string;
  attached: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-line bg-bg px-3 py-2">
      <span className="text-sm font-medium">{label}</span>
      <Button variant={on ? "primary" : "line"} onClick={onClick}>
        {on ? attached : attach}
      </Button>
    </div>
  );
}

export function OrderRoom({ orderId }: { orderId: string }) {
  const { lang, t } = useI18n();
  const meId = useDesk((state) => state.meId);
  const users = useDesk((state) => state.users);
  const orders = useDesk((state) => state.orders);
  const payments = useDesk((state) => state.payments);
  const markPaid = useDesk((state) => state.markPaid);
  const release = useDesk((state) => state.release);
  const cancelOrder = useDesk((state) => state.cancelOrder);
  const dispute = useDesk((state) => state.dispute);
  const rateOrder = useDesk((state) => state.rateOrder);
  const toggleBlock = useDesk((state) => state.toggleBlock);
  const toggleFollow = useDesk((state) => state.toggleFollow);
  const sendChat = useDesk((state) => state.sendChat);
  const flash = useDesk((state) => state.flash);
  const [text, setText] = useState("");
  const [reason, setReason] = useState<AppealReason>("not_released");
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const order = orders.find((item) => item.id === orderId);
  const me = users.find((user) => user.id === meId);
  if (!order || !me) {
    return (
      <Page title={t("trade.room")}>
        <Empty>{t("trade.missing")}</Empty>
      </Page>
    );
  }
  const party = order.buyerId === me.id || order.sellerId === me.id || me.isAdmin;
  if (!party) {
    return (
      <Page title={t("trade.room")}>
        <Empty>{t("trade.private")}</Empty>
      </Page>
    );
  }
  const buyer = users.find((user) => user.id === order.buyerId);
  const seller = users.find((user) => user.id === order.sellerId);
  const method = payments.find((item) => item.userId === order.sellerId && item.rail === order.rail);
  const left = Math.max(0, order.payBy - now);
  const nameOf = (id: string) => {
    const user = users.find((item) => item.id === id);
    return user ? personName(user.name, lang) : "";
  };

  return (
    <Page title={t("trade.room")} sub={`${order.coin} · ${t(`status.${order.status}`)}`}>
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Panel className="grid gap-3 p-4">
          <p className="text-sm text-muted">
            {t("orders.counterparty")}: {me.id === order.buyerId ? nameOf(order.sellerId) : nameOf(order.buyerId)}
          </p>
          <p className="font-mono text-3xl font-semibold tabular-nums">{fiatAmt(order.fiatTotal, order.fiat, lang)}</p>
          <dl className="grid gap-1 text-sm">
            <Row k={t("common.coin")} v={`${numFlex(order.gross, lang)} ${order.coin} ${coinLabel(order.coin, lang)}`} />
            <Row k={t("common.price")} v={fiatAmt(order.price, order.fiat, lang)} />
            <Row k={t("trade.buyerFee")} v={numFlex(order.buyerFee, lang)} />
            <Row k={t("trade.sellerFee")} v={numFlex(order.sellerFee, lang)} />
            <Row k={t("trade.net")} v={numFlex(Math.max(0, order.gross - order.buyerFee), lang)} />
            <Row k={t("common.payment")} v={t(`rail.${order.rail}`)} />
            {order.appealReason ? <Row k={t("trade.appealWhy")} v={t(`trade.appeal.${order.appealReason}`)} /> : null}
          </dl>
          {order.status === "created" ? (
            <p className="text-sm">
              {left > 0
                ? `${t("trade.windowLeft")} ${num(Math.floor(left / 60000), lang, 0)}:${String(Math.floor((left % 60000) / 1000)).padStart(2, "0")}`
                : t("trade.windowOver")}
            </p>
          ) : null}
          {method && (me.id === order.buyerId || me.id === order.sellerId) ? (
            <div className="rounded-md bg-surface-2 p-3">
              <p className="text-xs text-muted">{t("pay.details")}</p>
              <p className="font-mono text-lg">{method.details}</p>
              <Button
                variant="line"
                className="mt-2"
                onClick={() => {
                  void navigator.clipboard?.writeText(method.details);
                  flash("common.copied");
                }}
              >
                {t("common.copy")}
              </Button>
            </div>
          ) : null}
          <p className="text-xs text-muted">{buyer ? `${t("role.buyer")}: ${personName(buyer.name, lang)}` : ""}</p>
          <p className="text-xs text-muted">{seller ? `${t("role.seller")}: ${personName(seller.name, lang)}` : ""}</p>
          <div className="flex flex-wrap gap-2">
            {me.id === order.buyerId && order.status === "created" ? (
              <Button variant="buy" onClick={() => markPaid(order.id)}>
                {t("trade.markPaid")}
              </Button>
            ) : null}
            {me.id === order.sellerId && (order.status === "paid" || order.status === "disputed") ? (
              <Button variant="buy" onClick={() => release(order.id)}>
                {t("trade.release")}
              </Button>
            ) : null}
            {(me.id === order.buyerId || me.id === order.sellerId) && order.status === "created" ? (
              <Button variant="line" onClick={() => cancelOrder(order.id)}>
                {t("trade.cancel")}
              </Button>
            ) : null}
            {(me.id === order.buyerId || me.id === order.sellerId) && (order.status === "paid" || order.status === "created") ? (
              <div className="grid w-full gap-2">
                <p className="text-sm font-medium text-muted">{t("trade.appealWhy")}</p>
                <div className="flex flex-wrap gap-2">
                  {(["not_released", "wrong_name", "no_reply", "amount"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`min-h-11 rounded-md px-3 text-sm font-semibold ${reason === item ? "bg-primary text-primary-fg" : "bg-surface-2"}`}
                      onClick={() => setReason(item)}
                    >
                      {t(`trade.appeal.${item}`)}
                    </button>
                  ))}
                </div>
                <Button variant="soft" onClick={() => dispute(order.id, reason)}>
                  {t("trade.dispute")}
                </Button>
              </div>
            ) : null}
            {me.isAdmin && (order.status === "created" || order.status === "paid" || order.status === "disputed") ? (
              <>
                <Button onClick={() => release(order.id, true)}>{t("trade.adminRelease")}</Button>
                <Button variant="line" onClick={() => cancelOrder(order.id, true)}>
                  {t("trade.adminCancel")}
                </Button>
              </>
            ) : null}
          </div>
          {order.status === "released" && (me.id === order.buyerId || me.id === order.sellerId) ? (
            <div className="grid gap-2">
              <p className="text-sm font-medium">{order.rating ? t("trade.rated") : t("trade.rate")}</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((score) => (
                  <button
                    key={score}
                    type="button"
                    className={`grid size-11 place-items-center rounded-md text-sm font-semibold ${order.rating === score ? "bg-primary text-primary-fg" : "bg-surface-2"}`}
                    onClick={() => rateOrder(order.id, score)}
                  >
                    {score}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
          {me.id === order.buyerId || me.id === order.sellerId ? (
            <div className="flex flex-wrap gap-2">
              <Button
                variant="line"
                onClick={() => toggleFollow(me.id === order.buyerId ? order.sellerId : order.buyerId)}
              >
                {(me.following ?? []).includes(me.id === order.buyerId ? order.sellerId : order.buyerId) ? t("trade.unfollow") : t("trade.follow")}
              </Button>
              <Button
                variant="soft"
                onClick={() => toggleBlock(me.id === order.buyerId ? order.sellerId : order.buyerId)}
              >
                {(me.blocked ?? []).includes(me.id === order.buyerId ? order.sellerId : order.buyerId) ? t("trade.unblock") : t("trade.block")}
              </Button>
            </div>
          ) : null}
          <Link to="/orders" className="text-sm font-semibold text-primary">
            {t("common.back")}
          </Link>
        </Panel>
        <Panel className="grid grid-rows-[1fr_auto] gap-3 p-4">
          <div className="grid max-h-[28rem] content-start gap-2 overflow-y-auto">
            {order.messages.length === 0 ? <p className="text-sm text-muted">{t("trade.chatEmpty")}</p> : null}
            {order.messages.map((message) => (
              <div
                key={message.id}
                className={message.fromId === me.id ? "justify-self-end rounded-md bg-primary px-3 py-2 text-sm text-primary-fg" : "rounded-md bg-surface-2 px-3 py-2 text-sm"}
              >
                {message.system ? t(`system.${message.system}`) : message.text}
                {message.fromId && message.fromId !== me.id ? (
                  <p className="text-xs text-muted">{nameOf(message.fromId)}</p>
                ) : null}
              </div>
            ))}
          </div>
          <form
            className="flex gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              sendChat(order.id, text);
              setText("");
            }}
          >
            <input
              className={fieldClass}
              value={text}
              placeholder={t("trade.chatPh")}
              aria-label={t("trade.chatPh")}
              onChange={(event) => setText(event.target.value)}
            />
            <Button type="submit">{t("trade.send")}</Button>
          </form>
        </Panel>
      </div>
      <p className="text-xs text-muted">{t(`role.${roleOf(me)}`)}</p>
    </Page>
  );
}
