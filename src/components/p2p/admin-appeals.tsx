import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { numFlex } from "@/lib/p2p/format";
import { personName, useI18n } from "@/lib/p2p/i18n";
import { fmtLeft, payLeft, useOps, useOpsHydrate } from "@/lib/p2p/ops-store";
import { useDesk } from "@/lib/p2p/store";
import type { Order } from "@/lib/p2p/types";
import { Button, Empty, fieldClass, Panel } from "./ui";

function useNow(ms = 1000) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), ms);
    return () => window.clearInterval(id);
  }, [ms]);
  return now;
}

function StubTag({ label }: { label: string }) {
  return (
    <span className="rounded-md bg-amber-500/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-200">{label}</span>
  );
}

/** Slice #2 — Appeal / dispute desk (paper). Resolution uses existing release/cancel asAdmin. */
export function AppealsAdmin() {
  useOpsHydrate();
  const { t } = useI18n();
  const orders = useDesk((state) => state.orders);
  const [view, setView] = useState<"disputed" | "timers">("disputed");
  const disputed = orders.filter((order) => order.status === "disputed");
  const running = orders.filter((order) => order.status === "created");
  return (
    <div className="grid gap-3">
      <Panel className="flex flex-wrap items-center justify-between gap-2 p-3">
        <p className="text-sm text-muted">{t("admin.appeal.intro")}</p>
        <StubTag label="PAPER · STUB" />
      </Panel>
      <div className="flex gap-1">
        {(["disputed", "timers"] as const).map((item) => (
          <button
            key={item}
            type="button"
            className={cn(
              "min-h-10 rounded-md px-3 text-sm font-semibold",
              view === item ? "bg-primary text-primary-fg" : "bg-surface-2 text-muted",
            )}
            onClick={() => setView(item)}
          >
            {t(`admin.appeal.view.${item}`)} ({item === "disputed" ? disputed.length : running.length})
          </button>
        ))}
      </div>
      {view === "disputed" ? (
        disputed.length === 0 ? (
          <Empty>{t("admin.appeal.empty")}</Empty>
        ) : (
          disputed.map((order) => <AppealCase key={order.id} order={order} />)
        )
      ) : (
        <TimerDesk orders={running} />
      )}
    </div>
  );
}

function AppealCase({ order }: { order: Order }) {
  const { lang, t } = useI18n();
  const users = useDesk((state) => state.users);
  const notes = useOps((state) => state.notes);
  const addNote = useOps((state) => state.addNote);
  const resolveAppeal = useOps((state) => state.resolveAppeal);
  const [text, setText] = useState("");
  const buyer = users.find((u) => u.id === order.buyerId);
  const seller = users.find((u) => u.id === order.sellerId);
  const mine = notes.filter((note) => note.orderId === order.id);
  const opened = [...order.messages].reverse().find((m) => m.system === "disputed")?.at;
  return (
    <Panel className="grid gap-3 p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="font-mono text-sm font-semibold">{order.id}</p>
          <p className="text-sm text-muted">
            {buyer ? personName(buyer.name, lang) : order.buyerId} → {seller ? personName(seller.name, lang) : order.sellerId}
          </p>
          <p className="font-mono text-xs text-muted">
            {numFlex(order.gross, lang)} {order.coin} · {numFlex(order.fiatTotal, lang)} {order.fiat} · {t(`rail.${order.rail}`)} · escrow{" "}
            {numFlex(order.escrow, lang)}
          </p>
        </div>
        <div className="grid justify-items-end gap-1 text-xs">
          <span className="rounded-md bg-sell/20 px-2 py-1 font-bold uppercase tracking-wide text-sell">
            {t(`admin.appeal.reason.${order.appealReason ?? "not_released"}`)}
          </span>
          {opened ? <span className="text-muted">{new Date(opened).toLocaleString()}</span> : null}
        </div>
      </div>
      <div className="grid gap-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">{t("admin.appeal.chat")}</p>
        <div className="max-h-40 overflow-y-auto rounded-md border border-line bg-bg p-2 text-xs">
          {order.messages.length === 0 ? <p className="text-muted">—</p> : null}
          {order.messages.map((m) => {
            const who = users.find((u) => u.id === m.fromId);
            return (
              <p key={m.id} className="py-0.5">
                <span className="text-muted">{new Date(m.at).toLocaleTimeString()} · </span>
                <span className="font-semibold">{m.system ? t("admin.appeal.system") : who ? personName(who.name, lang) : m.fromId}</span>
                {": "}
                {m.system ? m.system : m.text}
              </p>
            );
          })}
        </div>
      </div>
      <div className="grid gap-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">{t("admin.appeal.notes")}</p>
        {mine.length === 0 ? <p className="text-xs text-muted">{t("admin.appeal.noNotes")}</p> : null}
        {mine.map((note) => (
          <p key={note.id} className="text-xs">
            <span className="text-muted">{new Date(note.at).toLocaleString()} · </span>
            {note.text}
          </p>
        ))}
      </div>
      <textarea
        className={cn(fieldClass, "h-20 py-2")}
        value={text}
        placeholder={t("admin.appeal.notePh")}
        aria-label={t("admin.appeal.notePh")}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex flex-wrap gap-2">
        <Button variant="line" className="min-h-9 text-xs" disabled={!text.trim()} onClick={() => addNote(order.id, text) && setText("")}>
          {t("admin.appeal.addNote")}
        </Button>
        <Button variant="buy" className="min-h-9 text-xs" disabled={!text.trim()} onClick={() => resolveAppeal(order.id, "release", text) && setText("")}>
          {t("admin.appeal.release")}
        </Button>
        <Button variant="sell" className="min-h-9 text-xs" disabled={!text.trim()} onClick={() => resolveAppeal(order.id, "cancel", text) && setText("")}>
          {t("admin.appeal.cancel")}
        </Button>
      </div>
      <p className="text-[11px] text-muted">{t("admin.appeal.reasonRequired")} · {t("admin.singleApprover")}</p>
    </Panel>
  );
}

/** Order timer stub: live countdown from real `payBy`; admin may extend a created order (paper). */
function TimerDesk({ orders }: { orders: Order[] }) {
  const { lang, t } = useI18n();
  const users = useDesk((state) => state.users);
  const extendTimer = useOps((state) => state.extendTimer);
  const timerLog = useOps((state) => state.timerLog);
  const now = useNow();
  return (
    <div className="grid gap-2">
      <p className="text-xs text-muted">{t("admin.timer.intro")}</p>
      {orders.length === 0 ? <Empty>{t("admin.timer.empty")}</Empty> : null}
      {orders.map((order) => {
        const left = payLeft(order.payBy, now);
        const buyer = users.find((u) => u.id === order.buyerId);
        const extended = timerLog.filter((row) => row.orderId === order.id).reduce((sum, row) => sum + row.minutes, 0);
        return (
          <Panel key={order.id} className="flex flex-wrap items-center justify-between gap-2 p-3">
            <div>
              <p className="font-mono text-sm font-semibold">{order.id}</p>
              <p className="text-xs text-muted">
                {buyer ? personName(buyer.name, lang) : order.buyerId} · {numFlex(order.gross, lang)} {order.coin}
                {extended > 0 ? ` · ${t("admin.timer.extended", { n: extended })}` : ""}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className={cn("font-mono text-lg font-semibold", left <= 60000 ? "text-sell" : "text-fg")}>{fmtLeft(left)}</span>
              <Button variant="line" className="min-h-9 text-xs" onClick={() => extendTimer(order.id, 15)}>
                {t("admin.timer.extend")}
              </Button>
            </div>
          </Panel>
        );
      })}
      <p className="text-[11px] text-muted">{t("admin.timer.missing")}</p>
    </div>
  );
}
