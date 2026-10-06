import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getAdminApi } from "./admin-api";
import { rid } from "./logic";
import { useDesk } from "./store";
import { pushAudit } from "./store-seed";

/**
 * Slice #2 ops store — appeal/dispute notes, order-timer stub log, maker-checker queue.
 * PAPER ONLY. LIVE_MONEY stays false. No metrics are generated here; every row is a real admin action.
 * Sub-roles are policy labels on the single `isAdmin` seat (see docs/ADMIN_MODEL.md) — not auth principals.
 */
export const LIVE_MONEY = false as const;

export type SubRole = "support" | "compliance" | "finance" | "super";
export const SUB_ROLES: SubRole[] = ["support", "compliance", "finance", "super"];

export type McKind = "wallet_credit" | "ban" | "unban" | "license_revoke" | "pass_revoke";
export const MC_KINDS: McKind[] = ["wallet_credit", "ban", "unban", "license_revoke", "pass_revoke"];

/** Which sub-role label may file (maker) each request kind. Checker must be a different seat or label. */
export const MC_MAKER_ROLE: Record<McKind, SubRole[]> = {
  wallet_credit: ["finance", "super"],
  ban: ["support", "compliance", "super"],
  unban: ["compliance", "super"],
  license_revoke: ["compliance", "super"],
  pass_revoke: ["compliance", "super"],
};

export type McStatus = "pending" | "approved" | "rejected";

export interface McRequest {
  id: string;
  kind: McKind;
  /** userId for wallet/ban/unban/license; passId for pass_revoke */
  targetId: string;
  coin?: string;
  reason: string;
  makerId: string;
  makerRole: SubRole;
  status: McStatus;
  checkerId?: string;
  checkerRole?: SubRole;
  createdAt: number;
  decidedAt?: number;
}

export interface AppealNote {
  id: string;
  orderId: string;
  actorId: string;
  text: string;
  at: number;
}

export interface TimerLog {
  id: string;
  orderId: string;
  actorId: string;
  minutes: number;
  at: number;
}

interface OpsData {
  subRole: SubRole;
  requests: McRequest[];
  notes: AppealNote[];
  timerLog: TimerLog[];
  /** Paper "permanent ban" marker (on top of store `suspended`). */
  banned: string[];
}

interface OpsActions {
  setSubRole: (role: SubRole) => void;
  fileRequest: (input: { kind: McKind; targetId: string; coin?: string; reason: string }) => boolean;
  decide: (id: string, approve: boolean) => boolean;
  addNote: (orderId: string, text: string) => boolean;
  extendTimer: (orderId: string, minutes: number) => boolean;
  resolveAppeal: (orderId: string, outcome: "release" | "cancel", text: string) => boolean;
  clearOps: () => void;
}

export type OpsState = OpsData & OpsActions;

const blank = (): OpsData => ({ subRole: "support", requests: [], notes: [], timerLog: [], banned: [] });

function deskAdmin() {
  const desk = useDesk.getState();
  const me = desk.users.find((user) => user.id === desk.meId);
  return me?.isAdmin ? me : null;
}

function notice(key: string) {
  useDesk.setState({ notice: { key } } as never);
}

function audit(actorId: string, key: string, detail: string) {
  const desk = useDesk.getState();
  useDesk.setState({ audits: pushAudit(desk.audits, actorId, key, detail) } as never);
}

/** True when the checker is the same seat AND same sub-role label as the maker (blocked). */
export function sameApprover(req: Pick<McRequest, "makerId" | "makerRole">, checkerId: string, checkerRole: SubRole) {
  return req.makerId === checkerId && req.makerRole === checkerRole;
}

function execute(req: McRequest) {
  const desk = useDesk.getState();
  const api = getAdminApi();
  if (req.kind === "wallet_credit") {
    api.adminPracticeCredit(req.targetId, req.coin ?? "USDT");
  } else if (req.kind === "ban") {
    desk.setSeat(req.targetId, { suspended: true, withdrawHold: true });
  } else if (req.kind === "unban") {
    desk.setSeat(req.targetId, { suspended: false, withdrawHold: false });
  } else if (req.kind === "license_revoke") {
    desk.setLicense(req.targetId, false);
  } else if (req.kind === "pass_revoke") {
    api.adminRevokePass(req.targetId);
  }
}

export const useOps = create<OpsState>()(
  persist(
    (set, get) => ({
      ...blank(),
      setSubRole: (role) => set({ subRole: role }),
      fileRequest: ({ kind, targetId, coin, reason }) => {
        const me = deskAdmin();
        const role = get().subRole;
        if (!me || !targetId) {
          notice("err.forbidden");
          return false;
        }
        if (!MC_MAKER_ROLE[kind].includes(role)) {
          notice("err.mcRole");
          return false;
        }
        if (!reason.trim()) {
          notice("err.mcReason");
          return false;
        }
        const req: McRequest = {
          id: rid("mc"),
          kind,
          targetId,
          coin: kind === "wallet_credit" ? coin ?? "USDT" : undefined,
          reason: reason.trim().slice(0, 240),
          makerId: me.id,
          makerRole: role,
          status: "pending",
          createdAt: Date.now(),
        };
        set({ requests: [req, ...get().requests] });
        audit(me.id, "admin.auditMcFile", `${kind}:${targetId}`);
        notice("admin.saved");
        return true;
      },
      decide: (id, approve) => {
        const me = deskAdmin();
        const role = get().subRole;
        const req = get().requests.find((item) => item.id === id);
        if (!me || !req || req.status !== "pending") {
          notice("err.forbidden");
          return false;
        }
        if (sameApprover(req, me.id, role)) {
          notice("err.makerChecker");
          return false;
        }
        if (approve) execute(req);
        let banned = get().banned;
        if (approve && req.kind === "ban" && !banned.includes(req.targetId)) banned = [...banned, req.targetId];
        if (approve && req.kind === "unban") banned = banned.filter((item) => item !== req.targetId);
        set({
          banned,
          requests: get().requests.map((item) =>
            item.id === id
              ? { ...item, status: approve ? "approved" : "rejected", checkerId: me.id, checkerRole: role, decidedAt: Date.now() }
              : item,
          ),
        });
        audit(me.id, approve ? "admin.auditMcApprove" : "admin.auditMcReject", `${req.kind}:${req.targetId}`);
        if (!approve) notice("admin.saved");
        return true;
      },
      addNote: (orderId, text) => {
        const me = deskAdmin();
        if (!me || !text.trim()) {
          notice("err.forbidden");
          return false;
        }
        const note: AppealNote = { id: rid("an"), orderId, actorId: me.id, text: text.trim().slice(0, 400), at: Date.now() };
        set({ notes: [note, ...get().notes] });
        audit(me.id, "admin.auditAppealNote", orderId);
        notice("admin.saved");
        return true;
      },
      extendTimer: (orderId, minutes) => {
        const me = deskAdmin();
        const desk = useDesk.getState();
        const order = desk.orders.find((item) => item.id === orderId);
        if (!me || !order || order.status !== "created" || minutes <= 0 || minutes > 60) {
          notice(order && order.status !== "created" ? "err.closed" : "err.forbidden");
          return false;
        }
        useDesk.setState({
          orders: desk.orders.map((item) => (item.id === orderId ? { ...item, payBy: item.payBy + minutes * 60000 } : item)),
        } as never);
        set({ timerLog: [{ id: rid("tl"), orderId, actorId: me.id, minutes, at: Date.now() }, ...get().timerLog] });
        audit(me.id, "admin.auditTimer", `${orderId}:+${minutes}m`);
        notice("admin.saved");
        return true;
      },
      resolveAppeal: (orderId, outcome, text) => {
        const me = deskAdmin();
        const desk = useDesk.getState();
        const order = desk.orders.find((item) => item.id === orderId);
        if (!me || !order || order.status !== "disputed") {
          notice(order && order.status !== "disputed" ? "err.closed" : "err.forbidden");
          return false;
        }
        if (outcome === "release") desk.release(orderId, true);
        else desk.cancelOrder(orderId, true);
        const note: AppealNote = {
          id: rid("an"),
          orderId,
          actorId: me.id,
          text: `[${outcome}] ${text.trim()}`.slice(0, 400),
          at: Date.now(),
        };
        set({ notes: [note, ...get().notes] });
        notice("admin.saved");
        return true;
      },
      clearOps: () => set(blank()),
    }),
    {
      name: "orvia-ops-paper-v1",
      skipHydration: true,
      partialize: (state) => ({
        subRole: state.subRole,
        requests: state.requests,
        notes: state.notes,
        timerLog: state.timerLog,
        banned: state.banned,
      }),
    },
  ),
);

/** Rehydrate the ops store on the client only (SSR-safe). */
export function useOpsHydrate() {
  useEffect(() => {
    void useOps.persist.rehydrate();
  }, []);
}

/** Remaining ms on an order pay window (negative = expired). Pure; no invented values. */
export function payLeft(payBy: number, now: number) {
  return payBy - now;
}

export function fmtLeft(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}
