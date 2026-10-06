import { Link, useRouterState } from "@tanstack/react-router";
import { Eclipse, Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { UserButton } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { cn } from "@/lib/cn";
import { useSite } from "@/lib/site/copy";
import { useEnter } from "@/lib/site/enter-store";
import { useI18n } from "@/lib/p2p/i18n";
import { startLiveQuotes } from "@/lib/p2p/live";
import { useDesk } from "@/lib/p2p/store";
import type { Lang, Theme } from "@/lib/p2p/types";
import { Tape } from "@/components/p2p/tape";
import { Mark } from "@/components/p2p/ui";

const themes: Theme[] = ["day", "night", "dark"];
const langs: Lang[] = ["en", "hi", "ur"];

const DESK = ["/desk", "/express", "/orders", "/order", "/wallet", "/post", "/passes", "/payments", "/identity", "/admin", "/guide", "/profile"];

export function isDeskPath(path: string) {
  return DESK.some((item) => path === item || path.startsWith(`${item}/`));
}

export function AccountSlot({ compact = false }: { compact?: boolean }) {
  const { user, isPending } = useCurrentUserState();
  const { s } = useSite();
  const sessionId = useEnter((state) => state.sessionId);
  const leave = useEnter((state) => state.leave);
  if (isPending) return <span className="inline-block h-8 w-20 animate-pulse rounded-full bg-line" aria-hidden="true" />;
  if (user) return <UserButton />;
  if (sessionId) {
    return (
      <button type="button" className="inline-flex min-h-11 items-center px-2 text-sm font-semibold" onClick={leave}>
        {s.nav.phoneOut}
      </button>
    );
  }
  return (
    <Link
      to="/login"
      className={cn(
        "inline-flex min-h-11 items-center rounded-full border border-line px-3 text-sm font-semibold",
        compact && "px-2",
      )}
    >
      {s.nav.enter}
    </Link>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  const { s } = useSite();
  const { t } = useI18n();
  const theme = useDesk((state) => state.theme);
  const lang = useDesk((state) => state.lang);
  const setTheme = useDesk((state) => state.setTheme);
  const setLang = useDesk((state) => state.setLang);
  const hydrated = useDesk((state) => state.hydrated);
  const quotes = useDesk((state) => state.quotes);
  const moves = useDesk((state) => state.moves);
  const coins = useDesk((state) => state.coins);
  const path = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const ThemeIcon = { day: Sun, night: Moon, dark: Eclipse }[theme];

  useEffect(() => {
    const finish = () => useDesk.getState().markHydrated();
    const unsub = useDesk.persist.onFinishHydration(finish);
    void useDesk.persist.rehydrate();
    return unsub;
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const id = window.setInterval(() => useDesk.getState().tickQuotes(), 4000);
    return () => window.clearInterval(id);
  }, [hydrated]);

  useEffect(() => startLiveQuotes(), []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dataset.lang = lang;
    root.lang = lang;
    root.dir = lang === "ur" ? "rtl" : "ltr";
    document.title = `ORVIA · ${s.company}`;
  }, [theme, lang, s.company]);

  const links = [
    { to: "/buy", label: s.nav.buy },
    { to: "/sell", label: s.nav.sell },
    { to: "/desk", label: s.nav.desk },
    { to: "/merchant", label: s.nav.merchant },
    { to: "/help", label: s.nav.help },
    { to: "/journal", label: s.nav.journal },
    { to: "/contact", label: s.nav.contact },
  ] as const;

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="orvia-head sticky top-0 z-30 bg-surface">
        <div className="h-px bg-primary" />
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
          <Link to="/" className="inline-flex shrink-0 items-center gap-2">
            <Mark className="size-8" />
            <span className="text-sm font-semibold tracking-widest">ORVIA</span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label={s.nav.home}>
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn("px-2.5 py-2 text-sm font-medium", path === item.to ? "text-primary" : "text-muted")}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ms-auto flex items-center gap-1.5">
            <div className="hidden items-center rounded-full border border-line bg-bg p-0.5 sm:flex" role="group" aria-label={lang}>
              {langs.map((code) => (
                <button
                  key={code}
                  type="button"
                  className={cn("min-h-11 min-w-11 rounded-full px-2 text-xs font-semibold", lang === code ? "bg-surface text-primary" : "text-muted")}
                  aria-pressed={lang === code}
                  onClick={() => setLang(code)}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-line text-muted"
              aria-label={theme}
              onClick={() => setTheme(themes[(themes.indexOf(theme) + 1) % themes.length])}
            >
              <ThemeIcon className="size-4" />
            </button>
            <div className="hidden sm:block">
              <AccountSlot />
            </div>
            <Link to="/desk" className="hidden min-h-11 items-center rounded-full bg-primary px-3 text-sm font-semibold text-primary-fg sm:inline-flex">
              {s.nav.desk}
            </Link>
            <button type="button" className="grid size-11 place-items-center lg:hidden" aria-label={s.nav.more} onClick={() => setOpen(true)}>
              <Menu className="size-5" />
            </button>
          </div>
        </div>
        <Tape coins={coins} quotes={quotes} moves={moves} lang={lang} label={s.liveNote} />
      </header>
      <main>{children}</main>
      <footer className="border-t border-line px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm">
          <p className="font-semibold tracking-wide">{s.company}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-muted">
            {[
              ...links,
              { to: "/fees", label: s.nav.fees },
              { to: "/product", label: s.nav.product },
              { to: "/services", label: s.nav.services },
              { to: "/security", label: s.nav.security },
              { to: "/about", label: s.nav.about },
              { to: "/faq", label: s.nav.faq },
              { to: "/legal", label: s.nav.legal },
              { to: "/login", label: s.nav.enter },
            ].map((item) => (
              <Link key={item.to} to={item.to} className="font-medium text-fg">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-end bg-fg/40 lg:hidden" role="presentation">
          <div role="dialog" aria-modal="true" aria-label={s.nav.more} className="max-h-[85vh] w-full overflow-y-auto rounded-t-md border border-line bg-surface p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-semibold">{s.company}</p>
              <button type="button" className="min-h-11 px-3 text-sm font-semibold" onClick={() => setOpen(false)}>
                {t("common.close")}
              </button>
            </div>
            <div className="mb-3 flex gap-1">
              {langs.map((code) => (
                <button key={code} type="button" className="min-h-11 min-w-11 rounded-full border border-line text-xs font-semibold" onClick={() => setLang(code)}>
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="grid gap-1">
              {links.map((item) => (
                <Link key={item.to} to={item.to} className="flex min-h-11 items-center font-semibold" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link to="/desk" className="flex min-h-11 items-center font-semibold text-primary" onClick={() => setOpen(false)}>
                {s.nav.desk}
              </Link>
              <div className="py-2">
                <AccountSlot />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
