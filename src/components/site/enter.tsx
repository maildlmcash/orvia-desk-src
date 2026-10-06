import { Link, useRouter } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { GROK_PROVIDERS, authClient, authEnabled, signIn } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { COUNTRIES, countryName, lengthLabel } from "@/lib/site/countries";
import { useSite } from "@/lib/site/copy";
import { useEnter } from "@/lib/site/enter-store";
import { mailHint, mailIssues, passwordIssues, passwordReady, phoneIssues, isGoogleMail } from "@/lib/site/secret";
import { fieldClass } from "@/components/p2p/ui";
import { vaultEmailPassword } from "@/lib/site/vault";

function Check({ ok, dirty, label }: { ok: boolean; dirty: boolean; label: string }) {
  return (
    <li className={`flex items-center gap-2 ${ok ? "text-buy" : dirty ? "text-sell" : "text-muted"}`}>
      <span className={ok ? "orvia-pip orvia-pip-live" : "orvia-pip"} />
      <span>{label}</span>
    </li>
  );
}

export function EnterScreen() {
  const { s, lang } = useSite();
  const router = useRouter();
  const { user, isPending } = useCurrentUserState();
  const issue = useEnter((state) => state.issue);
  const verify = useEnter((state) => state.verify);
  const signWithPassword = useEnter((state) => state.signWithPassword);
  const issueMail = useEnter((state) => state.issueMail);
  const verifyMail = useEnter((state) => state.verifyMail);
  const signWithMailPassword = useEnter((state) => state.signWithMailPassword);
  const savePassword = useEnter((state) => state.setPassword);
  const [tab, setTab] = useState<"email" | "mobile">("email");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [again, setAgain] = useState("");
  const [iso, setIso] = useState("IN");
  const [national, setNational] = useState("");
  const [code, setCode] = useState("");
  const [shown, setShown] = useState<string | null>(null);
  const [askPass, setAskPass] = useState(false);
  const [passOpen, setPassOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState("");
  const country = COUNTRIES.find((item) => item.iso === iso) ?? COUNTRIES[0];
  const mail = mailIssues(email);
  const hint = mailHint(email);
  const phone = phoneIssues(national, country.min, country.max);
  const pass = passwordIssues(password);
  const dirtyMail = email.trim().length > 0;
  const dirtyPhone = national.length > 0;
  const dirtyPass = password.length > 0;

  const goDesk = () => void router.navigate({ to: "/desk" });

  function startSocial(providerId: string) {
    setNote("");
    void signIn(providerId, { callbackURL: "/desk" }).catch((error: unknown) => {
      setNote(error instanceof Error ? error.message : s.enter.fail);
    });
  }

  async function onShowMail() {
    if (mail.length) return;
    setBusy(true);
    setNote("");
    const result = await issueMail(email);
    setBusy(false);
    if (!result.ok) {
      setNote(s.enter.locked);
      return;
    }
    setShown(result.code);
    setCode("");
    setAskPass(false);
  }

  async function onVerifyMail(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setNote("");
    const result = await verifyMail(email, code);
    setBusy(false);
    if (!result.ok) {
      setNote(s.enter[result.reason]);
      return;
    }
    setShown(null);
    if (!result.hasPassword) setAskPass(true);
    else goDesk();
  }

  async function onMailPass(event: FormEvent) {
    event.preventDefault();
    if (mail.length) return;
    setBusy(true);
    setNote("");
    const local = await signWithMailPassword(email, password);
    if (local) {
      setBusy(false);
      goDesk();
      return;
    }
    const vault = await authClient.signIn.email({ email: email.trim(), password });
    setBusy(false);
    if (vault.error) {
      setNote(s.enter.noMailPass);
      return;
    }
    goDesk();
  }

  async function onShowCode() {
    if (phone.length) return;
    setBusy(true);
    setNote("");
    const result = await issue(country.iso, country.dial, national);
    setBusy(false);
    if (!result.ok) {
      setNote(s.enter.locked);
      return;
    }
    setShown(result.code);
    setCode("");
  }

  async function onVerify(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setNote("");
    const result = await verify(country.iso, country.dial, national, code);
    setBusy(false);
    if (!result.ok) {
      setNote(s.enter[result.reason]);
      return;
    }
    setShown(null);
    if (!result.hasPassword) setAskPass(true);
    else goDesk();
  }

  async function onSavePass(event: FormEvent) {
    event.preventDefault();
    if (!passwordReady(password) || password !== again) {
      setNote(password !== again ? s.enter.mismatch : "");
      return;
    }
    setBusy(true);
    const ok = await savePassword(password);
    if (ok) {
      const current = useEnter.getState();
      const mine = current.accounts.find((item) => item.id === current.sessionId);
      if (mine?.email) await vaultEmailPassword(mine.email, password);
    }
    setBusy(false);
    if (!ok) {
      setNote(s.enter.fail);
      return;
    }
    setNote(s.enter.made);
    goDesk();
  }

  async function onPassLogin(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setNote("");
    const ok = await signWithPassword(country.iso, country.dial, national, password);
    setBusy(false);
    if (!ok) {
      setNote(s.enter.noPass);
      return;
    }
    goDesk();
  }

  if (isPending) return <div className="mx-auto max-w-md px-4 py-16" aria-hidden="true" />;
  if (user) {
    return (
      <section className="mx-auto max-w-md px-4 py-16">
        <h1 className="text-3xl font-semibold">{s.enter.inside}</h1>
        <p className="mt-2 text-muted">{user.primaryEmail ?? user.displayName}</p>
        <Link to="/desk" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-fg">
          {s.enter.toDesk}
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto grid max-w-lg gap-6 px-4 py-12">
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-primary">ORVIA</p>
        <h1 className="mt-2 text-3xl font-semibold">{s.enter.title}</h1>
        <p className="mt-2 text-sm leading-6 text-muted">{s.enter.lede}</p>
      </div>
      {authEnabled ? (
        <div className="grid gap-2">
          {GROK_PROVIDERS.map((provider) => (
            <button
              key={provider.providerId}
              type="button"
              className="min-h-11 rounded-md border border-line bg-surface px-4 text-sm font-semibold"
              onClick={() => startSocial(provider.providerId)}
            >
              {provider.providerId === "grok-x" ? s.enter.x : s.enter.google}
            </button>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted">{s.enter.fail}</p>
      )}
      <div className="grid grid-cols-2 rounded-full border border-line p-1" role="tablist">
        {(["email", "mobile"] as const).map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={tab === item}
            className={`min-h-11 rounded-full text-sm font-semibold ${tab === item ? "bg-surface-2 text-primary" : "text-muted"}`}
            onClick={() => {
              setTab(item);
              setNote("");
              setShown(null);
              setAskPass(false);
              setPassOpen(false);
            }}
          >
            {item === "email" ? s.enter.email : s.enter.mobile}
          </button>
        ))}
      </div>
      {tab === "email" ? (
        <div className="grid gap-4">
          <label className="grid gap-1 text-sm">
            <span className="font-medium text-muted">{s.enter.emailLabel}</span>
            <input className={fieldClass} autoComplete="email" inputMode="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <ul className="grid gap-1 text-xs">
            <Check ok={dirtyMail && !mail.includes("at") && !mail.includes("empty")} dirty={dirtyMail} label={s.enter.checks.at} />
            <Check ok={dirtyMail && !mail.includes("space")} dirty={dirtyMail && mail.includes("space")} label={s.enter.checks.space} />
            <Check ok={dirtyMail && !mail.includes("dots")} dirty={dirtyMail && mail.includes("dots")} label={s.enter.checks.dots} />
            <Check ok={dirtyMail && !mail.includes("domain") && !mail.includes("tld")} dirty={dirtyMail && (mail.includes("domain") || mail.includes("tld"))} label={s.enter.checks.domain} />
            {hint === "known" ? <Check ok dirty={false} label={s.enter.checks.known} /> : null}
            {hint === "custom" ? <Check ok dirty={false} label={s.enter.checks.custom} /> : null}
          </ul>
          {mail.length === 0 ? (
            <div className="grid gap-2">
              <button type="button" className="min-h-11 rounded-md bg-primary px-4 text-sm font-semibold text-primary-fg" onClick={() => startSocial("grok-google")}>
                {email.trim()} · {isGoogleMail(email) ? s.enter.googleUse : s.enter.google}
              </button>
              <button type="button" className="min-h-11 rounded-md border border-line bg-surface px-4 text-sm font-semibold" onClick={() => startSocial("grok-x")}>
                {email.trim()} · {s.enter.xUse}
              </button>
            </div>
          ) : null}
          <button type="button" className="min-h-11 rounded-md border border-line text-sm font-semibold" disabled={busy || mail.length > 0} onClick={() => void onShowMail()}>
            {busy ? s.enter.working : s.enter.direct}
          </button>
          {shown ? (
            <form className="grid gap-3 rounded-md border border-line bg-surface p-4" onSubmit={onVerifyMail}>
              <p className="text-sm text-muted">{s.enter.mailHint}</p>
              <p className="font-mono text-3xl tracking-[0.4em] text-primary" translate="no">
                {shown}
              </p>
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-muted">{s.enter.codeLabel}</span>
                <input className={fieldClass} inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={code} onChange={(event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 6))} />
              </label>
              <button type="submit" className="min-h-11 rounded-md border border-line text-sm font-semibold" disabled={busy || code.length !== 6}>
                {s.enter.confirm}
              </button>
            </form>
          ) : null}
          {askPass ? (
            <form className="grid gap-3" onSubmit={onSavePass}>
              <p className="text-sm text-muted">{s.enter.passAsk}</p>
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-muted">{s.enter.password}</span>
                <input className={fieldClass} type="password" autoComplete="new-password" value={password} onChange={(event) => setPass(event.target.value)} />
              </label>
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-muted">{s.enter.again}</span>
                <input className={fieldClass} type="password" autoComplete="new-password" value={again} onChange={(event) => setAgain(event.target.value)} />
              </label>
              <ul className="grid gap-1 text-xs">
                <Check ok={pass.len} dirty={dirtyPass} label={s.enter.checks.plen} />
                <Check ok={pass.letter} dirty={dirtyPass} label={s.enter.checks.letter} />
                <Check ok={pass.digit} dirty={dirtyPass} label={s.enter.checks.pdigit} />
              </ul>
              <button type="submit" className="min-h-11 rounded-md bg-primary text-sm font-semibold text-primary-fg" disabled={busy}>
                {s.enter.makeNow}
              </button>
              <button type="button" className="min-h-11 text-sm font-semibold text-muted" onClick={goDesk}>
                {s.enter.skip}
              </button>
            </form>
          ) : null}
          <button type="button" className="text-start text-sm font-semibold text-primary" onClick={() => setPassOpen((value) => !value)}>
            {s.enter.passWay}
          </button>
          {passOpen ? (
            <form className="grid gap-3" onSubmit={onMailPass}>
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-muted">{s.enter.password}</span>
                <input className={fieldClass} type="password" autoComplete="current-password" value={password} onChange={(event) => setPass(event.target.value)} />
              </label>
              <button type="submit" className="min-h-11 rounded-md border border-line text-sm font-semibold" disabled={busy || mail.length > 0}>
                {s.enter.passIn}
              </button>
            </form>
          ) : null}
        </div>
      ) : (
        <div className="grid gap-4">
          <label className="grid gap-1 text-sm">
            <span className="font-medium text-muted">{s.enter.country}</span>
            <select className={fieldClass} value={iso} onChange={(event) => setIso(event.target.value)}>
              {COUNTRIES.map((item) => (
                <option key={item.iso} value={item.iso}>
                  {countryName(item, lang)} +{item.dial}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium text-muted">
              {s.enter.national} · {lengthLabel(country)}
            </span>
            <input
              className={fieldClass}
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={country.max}
              value={national}
              onChange={(event) => setNational(event.target.value.replace(/\D/g, "").slice(0, country.max))}
            />
          </label>
          <ul className="grid gap-1 text-xs">
            <Check ok={dirtyPhone && !phone.includes("chars")} dirty={dirtyPhone && phone.includes("chars")} label={s.enter.checks.digits} />
            <Check ok={dirtyPhone && !phone.includes("trunk")} dirty={dirtyPhone && phone.includes("trunk")} label={s.enter.checks.trunk} />
            <Check ok={dirtyPhone && !phone.includes("short") && !phone.includes("long") && !phone.includes("empty")} dirty={dirtyPhone && (phone.includes("short") || phone.includes("long"))} label={`${s.enter.checks.len} (${lengthLabel(country)})`} />
          </ul>
          <button type="button" className="min-h-11 rounded-md bg-primary text-sm font-semibold text-primary-fg" disabled={busy || phone.length > 0} onClick={() => void onShowCode()}>
            {busy ? s.enter.working : s.enter.codeShow}
          </button>
          {shown ? (
            <form className="grid gap-3 rounded-md border border-line bg-surface p-4" onSubmit={onVerify}>
              <p className="text-sm text-muted">{s.enter.codeHint}</p>
              <p className="font-mono text-3xl tracking-[0.4em] text-primary" translate="no">
                {shown}
              </p>
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-muted">{s.enter.codeLabel}</span>
                <input className={fieldClass} inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={code} onChange={(event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 6))} />
              </label>
              <button type="submit" className="min-h-11 rounded-md border border-line text-sm font-semibold" disabled={busy || code.length !== 6}>
                {s.enter.confirm}
              </button>
            </form>
          ) : null}
          {askPass ? (
            <form className="grid gap-3" onSubmit={onSavePass}>
              <p className="text-sm text-muted">{s.enter.passAsk}</p>
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-muted">{s.enter.password}</span>
                <input className={fieldClass} type="password" autoComplete="new-password" value={password} onChange={(event) => setPass(event.target.value)} />
              </label>
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-muted">{s.enter.again}</span>
                <input className={fieldClass} type="password" autoComplete="new-password" value={again} onChange={(event) => setAgain(event.target.value)} />
              </label>
              <button type="submit" className="min-h-11 rounded-md bg-primary text-sm font-semibold text-primary-fg" disabled={busy}>
                {s.enter.makeNow}
              </button>
              <button type="button" className="min-h-11 text-sm font-semibold text-muted" onClick={goDesk}>
                {s.enter.skip}
              </button>
            </form>
          ) : null}
          <button type="button" className="text-start text-sm font-semibold text-primary" onClick={() => setPassOpen((value) => !value)}>
            {s.enter.passWay}
          </button>
          {passOpen ? (
            <form className="grid gap-3" onSubmit={onPassLogin}>
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-muted">{s.enter.password}</span>
                <input className={fieldClass} type="password" autoComplete="current-password" value={password} onChange={(event) => setPass(event.target.value)} />
              </label>
              <button type="submit" className="min-h-11 rounded-md border border-line text-sm font-semibold" disabled={busy}>
                {s.enter.passIn}
              </button>
            </form>
          ) : null}
        </div>
      )}
      {note ? <p className="text-sm text-sell">{note}</p> : null}
    </section>
  );
}

