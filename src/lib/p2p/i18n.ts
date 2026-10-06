import { tr } from "./copy";
import { useDesk } from "./store";
import type { L10n, Lang } from "./types";

export function useI18n() {
  const lang = useDesk((state) => state.lang);
  const t = (path: string, vars?: Record<string, string | number>) => tr(lang, path, vars);
  return { lang, t };
}

export function personName(name: L10n, lang: Lang) {
  return name[lang];
}

export function coinLabel(symbol: string, lang: Lang) {
  const coin = useDesk.getState().coins.find((item) => item.symbol === symbol);
  if (coin?.label) return coin.label;
  const key = `coinName.${symbol}`;
  const label = tr(lang, key);
  return label === key ? "" : label;
}
