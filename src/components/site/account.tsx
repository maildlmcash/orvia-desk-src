import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { authClient } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { useSite } from "@/lib/site/copy";
import { useEnter } from "@/lib/site/enter-store";
import { passwordReady } from "@/lib/site/secret";
import { vaultEmailPassword } from "@/lib/site/vault";
import { fieldClass, Panel } from "@/components/p2p/ui";

export function AccountPanel() {
  const { s } = useSite();
  const { user, isPending } = useCurrentUserState();
  const sessionId = useEnter((state) => state.sessionId);
  const account = useEnter((state) => state.accounts.find((item) => item.id === state.sessionId) ?? null);
  const setPassword = useEnter((state) => state.setPassword);
  const leave = useEnter((state) => state.leave);
  const [phoneNext, setPhoneNext] = useState("");
  const [emailNext, setEmailNext] = useState("");
  const [current, setCurrent] = useState("");
  const [note, setNote] = useState("");

  async function savePhone(event: FormEvent) {
    event.preventDefault();
    if (!passwordReady(phoneNext)) return;
    const ok = await setPassword(phoneNext);
    if (ok && account?.email) await vaultEmailPassword(account.email, phoneNext);
    setNote(ok ? s.account.saved : s.account.bad);
    if (ok) setPhoneNext("");
  }

  async function saveEmail(event: FormEvent) {
    event.preventDefault();
    if (!passwordReady(emailNext) || !current) return;
    const result = await authClient.changePassword({ currentPassword: current, newPassword: emailNext, revokeOtherSessions: true });
    if (result.error) {
      setNote(s.account.bad);
      return;
    }
    setNote(s.account.saved);
    setEmailNext("");
    setCurrent("");
  }

  return (
    <Panel className="grid gap-3 p-4">
      <h2 className="font-semibold">{s.account.title}</h2>
      {isPending ? <p className="text-sm text-muted">…</p> : null}
      {!isPending && !user && !account ? (
        <p className="text-sm text-muted">
          {s.account.guest} · {s.account.none}{" "}
          <Link to="/login" className="font-semibold text-primary">
            {s.nav.enter}
          </Link>
        </p>
      ) : null}
      {user ? (
        <p className="text-sm">
          {s.account.member} · {s.account.email} · {user.primaryEmail ?? user.displayName}
        </p>
      ) : null}
      {account ? (
        <p className="text-sm">
          {s.account.member} · {account.email ? s.account.email : s.account.phone} · {account.email || `+${account.dial} ${account.national}`}
          {account.password ? "" : ` · ${s.account.set}`}
        </p>
      ) : null}
      <p className="text-sm text-muted">{s.account.deskRole}</p>
      {account && !account.password ? (
        <form className="grid gap-2" onSubmit={savePhone}>
          <label className="grid gap-1 text-sm">
            <span className="text-muted">{s.account.set}</span>
            <input className={fieldClass} type="password" autoComplete="new-password" value={phoneNext} onChange={(event) => setPhoneNext(event.target.value)} />
          </label>
          <button type="submit" className="min-h-11 rounded-md bg-primary text-sm font-semibold text-primary-fg">
            {s.account.save}
          </button>
        </form>
      ) : null}
      {user ? (
        <form className="grid gap-2" onSubmit={saveEmail}>
          <p className="text-sm font-semibold">{s.account.change}</p>
          <input className={fieldClass} type="password" autoComplete="current-password" placeholder={s.account.current} value={current} onChange={(event) => setCurrent(event.target.value)} />
          <input className={fieldClass} type="password" autoComplete="new-password" placeholder={s.account.next} value={emailNext} onChange={(event) => setEmailNext(event.target.value)} />
          <button type="submit" className="min-h-11 rounded-md border border-line text-sm font-semibold">
            {s.account.save}
          </button>
        </form>
      ) : null}
      {sessionId ? (
        <button type="button" className="min-h-11 text-start text-sm font-semibold" onClick={leave}>
          {s.account.leave}
        </button>
      ) : null}
      {note ? <p className="text-sm">{note}</p> : null}
    </Panel>
  );
}
