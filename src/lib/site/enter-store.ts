import { create } from "zustand";
import { persist } from "zustand/middleware";
import { hashSecret, randomCode, verifySecret } from "./secret";

export type DeskAccount = {
  id: string;
  iso: string;
  dial: string;
  national: string;
  email?: string;
  password: { salt: string; hash: string; iterations?: number } | null;
  createdAt: number;
};

type Pending = {
  key: string;
  salt: string;
  hash: string;
  iterations: number;
  exp: number;
  tries: number;
};

type OkCode = { ok: true; code: string };
type Locked = { ok: false; reason: "locked" };
type Verified = { ok: true; isNew: boolean; hasPassword: boolean };
type VerifyFail = { ok: false; reason: "missing" | "expired" | "locked" | "wrong" };

type EnterState = {
  accounts: DeskAccount[];
  sessionId: string | null;
  pending: Pending | null;
  issue: (iso: string, dial: string, national: string) => Promise<OkCode | Locked>;
  verify: (iso: string, dial: string, national: string, code: string) => Promise<Verified | VerifyFail>;
  signWithPassword: (iso: string, dial: string, national: string, password: string) => Promise<boolean>;
  issueMail: (email: string) => Promise<OkCode | Locked>;
  verifyMail: (email: string, code: string) => Promise<Verified | VerifyFail>;
  signWithMailPassword: (email: string, password: string) => Promise<boolean>;
  setPassword: (password: string) => Promise<boolean>;
  leave: () => void;
};

function phoneKey(dial: string, national: string) {
  return `${dial}:${national}`;
}

function mailKey(email: string) {
  return `mail:${email.trim().toLowerCase()}`;
}

function accountKey(account: DeskAccount) {
  return account.email ? mailKey(account.email) : phoneKey(account.dial, account.national);
}

export const useEnter = create<EnterState>()(
  persist(
    (set, get) => {
      const begin = async (key: string): Promise<OkCode | Locked> => {
        const pending = get().pending;
        if (pending && pending.key === key && pending.tries >= 5 && pending.exp > Date.now()) return { ok: false, reason: "locked" };
        const code = randomCode();
        const hashed = await hashSecret(code);
        set({
          pending: {
            key,
            salt: hashed.salt,
            hash: hashed.hash,
            iterations: hashed.iterations,
            exp: Date.now() + 5 * 60 * 1000,
            tries: 0,
          },
        });
        return { ok: true, code };
      };

      const finish = async (key: string, code: string, make: () => DeskAccount): Promise<Verified | VerifyFail> => {
        const pending = get().pending;
        if (!pending || pending.key !== key) return { ok: false, reason: "missing" };
        if (pending.exp < Date.now()) return { ok: false, reason: "expired" };
        if (pending.tries >= 5) return { ok: false, reason: "locked" };
        const match = await verifySecret(code.trim(), pending.salt, pending.hash, pending.iterations || 210_000);
        if (!match) {
          const tries = pending.tries + 1;
          set({ pending: { ...pending, tries } });
          return { ok: false, reason: tries >= 5 ? "locked" : "wrong" };
        }
        const existing = get().accounts.find((account) => accountKey(account) === key);
        if (existing) {
          set({ sessionId: existing.id, pending: null });
          return { ok: true, isNew: false, hasPassword: Boolean(existing.password) };
        }
        const account = make();
        set({ accounts: [...get().accounts, account], sessionId: account.id, pending: null });
        return { ok: true, isNew: true, hasPassword: false };
      };

      return {
        accounts: [],
        sessionId: null,
        pending: null,
        issue: (iso, dial, national) => begin(phoneKey(dial, national)).then((result) => result),
        verify: (iso, dial, national, code) =>
          finish(phoneKey(dial, national), code, () => ({
            id: crypto.randomUUID(),
            iso,
            dial,
            national,
            password: null,
            createdAt: Date.now(),
          })),
        signWithPassword: async (iso, dial, national, password) => {
          const account = get().accounts.find((item) => item.dial === dial && item.national === national && !item.email);
          if (!account?.password) return false;
          const match = await verifySecret(password, account.password.salt, account.password.hash, account.password.iterations ?? 210_000);
          if (!match) return false;
          set({ sessionId: account.id, pending: null });
          return true;
        },
        issueMail: (email) => begin(mailKey(email)),
        verifyMail: (email, code) =>
          finish(mailKey(email), code, () => ({
            id: crypto.randomUUID(),
            iso: "",
            dial: "",
            national: "",
            email: email.trim().toLowerCase(),
            password: null,
            createdAt: Date.now(),
          })),
        signWithMailPassword: async (email, password) => {
          const account = get().accounts.find((item) => item.email === email.trim().toLowerCase());
          if (!account?.password) return false;
          const match = await verifySecret(password, account.password.salt, account.password.hash, account.password.iterations ?? 210_000);
          if (!match) return false;
          set({ sessionId: account.id, pending: null });
          return true;
        },
        setPassword: async (password) => {
          const id = get().sessionId;
          if (!id) return false;
          const hashed = await hashSecret(password);
          set({
            accounts: get().accounts.map((account) => (account.id === id ? { ...account, password: hashed } : account)),
          });
          return true;
        },
        leave: () => set({ sessionId: null, pending: null }),
      };
    },
    {
      name: "orvia-enter-v1",
      partialize: (state) => ({ accounts: state.accounts, sessionId: state.sessionId, pending: state.pending }),
    },
  ),
);
