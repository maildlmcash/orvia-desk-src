import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { numFlex } from "@/lib/p2p/format";
import { personName, useI18n } from "@/lib/p2p/i18n";
import { useDesk } from "@/lib/p2p/store";
import type { OrderStatus } from "@/lib/p2p/types";
import { Button, fieldClass } from "./ui";
import { DeskFilters, Pager, PAGE_SIZE } from "./admin-chrome";

export function Orders() {
  const { lang, t } = useI18n();
  const orders = useDesk((state) => state.orders);
  const users = useDesk((state) => state.users);
  const release = useDesk((state) => state.release);
  const cancelOrder = useDesk((state) => state.cancelOrder);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | OrderStatus>("all");
  const [page, setPage] = useState(0);
  const open = ["created", "paid", "disputed"];
  const filtered = useMemo(() => {
    return orders.filter((order) => {
      if (status !== "all" && order.status !== status) return false;
      const buyer = users.find((u) => u.id === order.buyerId);
      const seller = users.find((u) => u.id === order.sellerId);
      const hay = `${buyer ? personName(buyer.name, lang) : ""} ${seller ? personName(seller.name, lang) : ""} ${order.coin}`.toLowerCase();
      if (query.trim() && !hay.includes(query.trim().toLowerCase())) return false;
      return true;
    });
  }, [lang, orders, query, status, users]);
  const slice = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  return (
    <div className="grid gap-3">
      <DeskFilters query={query} setQuery={(v) => { setQuery(v); setPage(0); }}>
        <select className={fieldClass} value={status} onChange={(e) => { setStatus(e.target.value as typeof status); setPage(0); }}>
          <option value="all">{t("common.all")}</option>
          {(["created", "paid", "released", "cancelled", "disputed"] as const).map((s) => (
            <option key={s} value={s}>
              {t(`status.${s}`)}
            </option>
          ))}
        </select>
      </DeskFilters>
      <div className="overflow-hidden rounded-md border border-line bg-surface">
        <div className="hidden grid-cols-[1.2fr_1fr_0.8fr_auto] gap-3 border-b border-line bg-surface-2 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted lg:grid">
          <span>{t("orders.counterparty")}</span>
          <span>{t("common.amount")}</span>
          <span>{t("common.status")}</span>
          <span>{t("common.actions")}</span>
        </div>
        {slice.map((order) => {
          const buyer = users.find((user) => user.id === order.buyerId);
          const seller = users.find((user) => user.id === order.sellerId);
          return (
            <div key={order.id} className="grid gap-2 border-b border-line px-3 py-3 text-sm last:border-b-0 lg:grid-cols-[1.2fr_1fr_0.8fr_auto] lg:items-center">
              <Link to="/order/$orderId" params={{ orderId: order.id }} className="font-semibold">
                {buyer ? personName(buyer.name, lang) : ""} → {seller ? personName(seller.name, lang) : ""}
              </Link>
              <p className="font-mono">
                {numFlex(order.gross, lang)} {order.coin}
              </p>
              <p>{t(`status.${order.status}`)}</p>
              {open.includes(order.status) ? (
                <div className="flex flex-wrap gap-2">
                  <Button className="min-h-9 text-xs" onClick={() => release(order.id, true)}>
                    {t("trade.adminRelease")}
                  </Button>
                  <Button variant="line" className="min-h-9 text-xs" onClick={() => cancelOrder(order.id, true)}>
                    {t("trade.adminCancel")}
                  </Button>
                </div>
              ) : (
                <span className="text-xs text-muted">—</span>
              )}
            </div>
          );
        })}
      </div>
      <Pager page={page} setPage={setPage} total={filtered.length} />
    </div>
  );
}
