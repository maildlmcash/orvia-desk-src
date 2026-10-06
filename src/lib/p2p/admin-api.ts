import { deskAdminActions } from "./desk-admin";
import { useDesk } from "./store";
import { addBal, patchUser, pushAudit } from "./store-seed";

function fail(set: (partial: Record<string, unknown>) => void, error: string) {
  set({ notice: { key: `err.${error}` } });
  return false as const;
}

/** Paper-desk admin actions (LIVE_MONEY=false). Uses store-seed helpers + desk-admin mixin. */
export function getAdminApi() {
  return deskAdminActions(
    () => useDesk.getState() as never,
    (partial) => useDesk.setState(partial as never),
    fail as never,
    pushAudit,
    patchUser,
    addBal,
  );
}
