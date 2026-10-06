import { Link, useRouterState } from "@tanstack/react-router";
import { Eclipse, Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { AccountSlot } from "@/components/site/frame";
import { cn } from "@/lib/cn";
import { personName, useI18n } from "@/lib/p2p/i18n";
import { startLiveQuotes } from "@/lib/p2p/live";
import { roleOf } from "@/lib/p2p/logic";
import { useDesk } from "@/lib/p2p/store";
import { useSite } from "@/lib/site/copy";
import type { Lang, Theme } from "@/lib/p2p/types";
import { Mark } from "./ui";
import { Tape } from "./tape";

const themes: Theme[] = ["day", "night", "dark"];
const langs: Lang[] = ["en", "hi", "ur"];

const mainNav = [
  { to: "/desk", key: "nav.market" },
  { to: "/express", key: "nav.express" },
  { to: "/orders", key: "nav.orders" },
  { to: "/wallet", key: "nav.wallet" },
] as const;

const moreNav = [
  { to: "/post", key: "nav.post" },
  { to: "/passes", key: "nav.passes" },
  { to: "/payments", key: "nav.payments" },
  { to: "/identity", key: "nav.identity" },
  { to: "/admin", key: "nav.admin" },
  { to: "/guide", key: "nav.guide" },
  { to: "/profile", key: "nav.profile" },
] as const;

function active(path: string, to: string) {
  if (to === "/") return path === "/";
  return path === to || path.startsWith(`${to}/`) || (to === "/orders" && path.startsWith("/order"));
}

export function Shell({ children }: { children: ReactNode }) {
  const hydrated = useDesk((state) => state.hydrated);
  const theme = useDesk((state) => state.theme);
  const lang = useDesk((state) => state.lang);
  const setTheme = useDesk((state) => state.setTheme);
  const setLang = useDesk((state) => state.setLang);
  const setMe = useDesk((state) => state.setMe);
  const meId = useDesk((state) => state.meId);
  const users = useDesk((state) => state.users);
  const notice = useDesk((state) => state.notice);
  const deskOpen = useDesk((state) => state.settings.deskOpen);
  const quotes = useDesk((state) => state.quotes);
  const moves = useDesk((state) => state.moves);
  const coins = useDesk((state) => state.coins);
  const { t } = useI18n();
  const { s } = useSite();
  const path = useRouterState({ select: (state) => state.location.pathname });
  const [more, setMore] = useState(false);
  const [seats, setSeats] = useState(false);
  const me = users.find((user) => user.id === meId) ?? users[0];

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
    document.title = `${t("brand")} · ${t("product")}`;
  }, [theme, lang, t]);

  if (!me) return null;

  const themeIcon = { day: Sun, night: Moon, dark: Eclipse };
  const ThemeIcon = themeIcon[theme];

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="orvia-head sticky top-0 z-30 bg-surface">
        <div className="h-px bg-primary" />
        <div className="mx-auto flex h-16 max-w-7xl items-stretch gap-3 px-3 sm:px-4">
          <Link to="/" className="inline-flex shrink-0 items-center gap-2.5">
            <Mark className="size-8" />
            <span className="text-sm font-semibold tracking-widest">{t("brand")}</span>
          </Link>
          <span className="my-4 hidden w-px bg-line md:block" aria-hidden="true" />
          <nav className="hidden items-stretch md:flex" aria-label={t("nav.market")}>
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "inline-flex items-center border-b-2 px-3 text-sm font-medium",
                  active(path, item.to) ? "border-primary text-primary" : "border-transparent text-muted",
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
          <div className="ms-auto flex shrink-0 items-center gap-1.5">
            <div className="flex items-center rounded-full border border-line bg-bg p-0.5" role="group" aria-label={t("lang.label")}>
              {langs.map((code) => (
                <button
                  key={code}
                  type="button"
                  className={cn(
                    "min-h-11 min-w-11 rounded-full px-2 text-xs font-semibold tracking-wide",
                    lang === code ? "bg-surface text-primary" : "text-muted",
                  )}
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  aria-label={t(`lang.${code}`)}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-line text-muted"
              aria-label={t(`theme.${theme}`)}
              onClick={() => setTheme(themes[(themes.indexOf(theme) + 1) % themes.length])}
            >
              <ThemeIcon className="size-4" />
            </button>
            <div className="hidden md:block">
              <AccountSlot compact />
            </div>
            <button type="button" className="inline-flex min-h-11 items-center gap-2 ps-1" onClick={() => setSeats(true)}>
              <span className="grid size-8 place-items-center rounded-full bg-bg text-xs font-semibold text-primary ring-2 ring-primary">
                {personName(me.name, lang).slice(0, 1)}
              </span>
              <span className="hidden max-w-36 truncate text-sm font-medium sm:inline">{personName(me.name, lang)}</span>
            </button>
          </div>
        </div>
        <Tape coins={coins} quotes={quotes} moves={moves} lang={lang} label={t("tape.live")} />
        {deskOpen === false ? (
          <p className="border-t border-line bg-surface-2 px-4 py-2 text-center text-xs font-semibold">{t("admin.deskClosed")}</p>
        ) : null}
      </header>
      <main className="pb-24 md:pb-10">{children}</main>
      {notice ? (
        <div className="pointer-events-none fixed inset-x-4 bottom-24 z-40 mx-auto max-w-md rounded-md border border-line bg-surface px-4 py-3 text-sm shadow-lg md:bottom-6">
          {t(notice.key, notice.vars)}
        </div>
      ) : null}
      <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-line bg-surface md:hidden" aria-label={t("nav.more")}>
        {mainNav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "grid min-h-16 place-items-center px-1 text-center text-xs font-semibold",
              active(path, item.to) ? "text-primary" : "text-muted",
            )}
          >
            {t(item.key)}
          </Link>
        ))}
        <button type="button" className="grid min-h-16 place-items-center text-xs font-semibold text-muted" onClick={() => setMore(true)}>
          <Menu className="mb-0.5 size-4" />
          {t("nav.more")}
        </button>
      </nav>
      <footer className="hidden border-t border-line px-4 py-6 text-center text-xs text-muted md:block">
        <p>{t("footer.sim")}</p>
        <p className="mt-1">{t("footer.rights")}</p>
        <div className="mt-3 flex flex-wrap justify-center gap-3">
          {moreNav.map((item) => (
            <Link key={item.to} to={item.to} className="font-semibold text-fg">
              {t(item.key)}
            </Link>
          ))}
          <Link to="/" className="font-semibold text-fg">
            {s.nav.home}
          </Link>
          <Link to="/services" className="font-semibold text-fg">
            {s.nav.services}
          </Link>
          <Link to="/about" className="font-semibold text-fg">
            {s.nav.about}
          </Link>
          <Link to="/journal" className="font-semibold text-fg">
            {s.nav.journal}
          </Link>
          <Link to="/contact" className="font-semibold text-fg">
            {s.nav.contact}
          </Link>
        </div>
      </footer>
      {more ? (
        <Sheet title={t("nav.more")} onClose={() => setMore(false)}>
          <div className="grid gap-1">
            {moreNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex min-h-11 items-center rounded-md px-3 text-sm font-semibold"
                onClick={() => setMore(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <Link to="/" className="flex min-h-11 items-center rounded-md px-3 text-sm font-semibold" onClick={() => setMore(false)}>
              {s.nav.home}
            </Link>
            <Link to="/services" className="flex min-h-11 items-center rounded-md px-3 text-sm font-semibold" onClick={() => setMore(false)}>
              {s.nav.services}
            </Link>
            <Link to="/login" className="flex min-h-11 items-center rounded-md px-3 text-sm font-semibold" onClick={() => setMore(false)}>
              {s.nav.enter}
            </Link>
            <div className="px-3 py-2 md:hidden">
              <AccountSlot />
            </div>
          </div>
        </Sheet>
      ) : null}
      {seats ? (
        <Sheet title={t("profile.switch")} onClose={() => setSeats(false)}>
          <p className="mb-3 text-sm text-muted">{t("profile.seat")}</p>
          <div className="grid gap-2">
            {users.map((user) => (
              <button
                key={user.id}
                type="button"
                className={cn(
                  "flex min-h-11 items-center justify-between gap-3 rounded-md border px-3 py-2 text-start",
                  user.id === me.id ? "border-primary bg-surface-2" : "border-line",
                )}
                onClick={() => {
                  setMe(user.id);
                  setSeats(false);
                }}
              >
                <span className="font-semibold">{personName(user.name, lang)}</span>
                <span className="text-sm text-muted">{t(`role.${roleOf(user)}`)}</span>
              </button>
            ))}
          </div>
        </Sheet>
      ) : null}
    </div>
  );
}

function Sheet({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  const { t } = useI18n();
  return (
    <div className="fixed inset-0 z-50 flex items-end bg-fg/40 sm:items-center sm:justify-center sm:p-4" role="presentation">
      <div role="dialog" aria-modal="true" aria-label={title} className="max-h-[85vh] w-full overflow-y-auto rounded-t-md border border-line bg-surface p-4 sm:max-w-md sm:rounded-md">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button type="button" className="min-h-11 px-3 text-sm font-semibold" onClick={onClose}>
            {t("common.close")}
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
