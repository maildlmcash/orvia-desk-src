import type { Ad, Audit, User } from "./types";

type SetFn = (partial: Record<string, unknown>) => void;
type GetFn = () => {
  meId: string;
  users: User[];
  ads: Ad[];
  payments: { id: string; userId: string }[];
  passes: { id: string; status: string }[];
  coins: { symbol: string; deposits?: boolean }[];
  audits: Audit[];
};

type FailFn = (set: SetFn, key: string) => void;
type PushAuditFn = (audits: Audit[] | undefined, actorId: string, key: string, detail: string) => Audit[];
type PatchUserFn = (users: User[], id: string, fn: (user: User) => User) => User[];
type AddBalFn = (user: User, coin: string, delta: number) => User;

/** Admin desk actions — paper/demo only; LIVE_MONEY stays false. */
export function deskAdminActions(
  get: GetFn,
  set: SetFn,
  fail: FailFn,
  pushAudit: PushAuditFn,
  patchUser: PatchUserFn,
  addBal: AddBalFn,
) {
  return {
    adminToggleAd: (adId: string) => {
      const state = get();
      const me = state.users.find((user) => user.id === state.meId);
      const ad = state.ads.find((item) => item.id === adId);
      if (!me?.isAdmin || !ad) return fail(set, "forbidden");
      set({
        ads: state.ads.map((item) => (item.id === adId ? { ...item, paused: !item.paused } : item)),
        audits: pushAudit(state.audits, me.id, "admin.auditAd", `${adId}:${ad.paused ? "resume" : "pause"}`),
        notice: { key: "admin.saved" },
      });
    },
    adminCloseAd: (adId: string) => {
      const state = get();
      const me = state.users.find((user) => user.id === state.meId);
      const ad = state.ads.find((item) => item.id === adId);
      if (!me?.isAdmin || !ad) return fail(set, "forbidden");
      set({
        ads: state.ads.filter((item) => item.id !== adId),
        audits: pushAudit(state.audits, me.id, "admin.auditAd", `${adId}:close`),
        notice: { key: "admin.saved" },
      });
    },
    adminPatchAd: (adId: string, patch: Partial<Pick<Ad, "paused" | "featured" | "beginner" | "needKyc" | "terms">>) => {
      const state = get();
      const me = state.users.find((user) => user.id === state.meId);
      const ad = state.ads.find((item) => item.id === adId);
      if (!me?.isAdmin || !ad) return fail(set, "forbidden");
      set({
        ads: state.ads.map((item) => (item.id === adId ? { ...item, ...patch } : item)),
        audits: pushAudit(state.audits, me.id, "admin.auditAd", `${adId}:patch`),
        notice: { key: "admin.saved" },
      });
    },
    adminRemovePayment: (id: string) => {
      const state = get();
      const me = state.users.find((user) => user.id === state.meId);
      if (!me?.isAdmin) return fail(set, "forbidden");
      set({
        payments: state.payments.filter((item) => item.id !== id),
        audits: pushAudit(state.audits, me.id, "admin.auditPay", id),
        notice: { key: "admin.saved" },
      });
    },
    adminPracticeCredit: (userId: string, coin: string) => {
      const state = get();
      const me = state.users.find((user) => user.id === state.meId);
      const target = state.users.find((user) => user.id === userId);
      const row = state.coins.find((item) => item.symbol === coin);
      if (!me?.isAdmin || !target) return fail(set, "forbidden");
      if (row?.deposits === false) return fail(set, "coinOff");
      set({
        users: patchUser(state.users, userId, (user) => addBal(user, coin, 100)),
        audits: pushAudit(state.audits, me.id, "admin.auditCredit", `${userId}:${coin}`),
        notice: { key: "wallet.topup" },
      });
    },
    adminRevokePass: (passId: string) => {
      const state = get();
      const me = state.users.find((user) => user.id === state.meId);
      const pass = state.passes.find((item) => item.id === passId);
      if (!me?.isAdmin || !pass || pass.status !== "active") return fail(set, "forbidden");
      set({
        passes: state.passes.map((item) => (item.id === passId ? { ...item, status: "revoked" } : item)),
        audits: pushAudit(state.audits, me.id, "admin.auditPass", passId),
        notice: { key: "admin.saved" },
      });
    },
  };
}
