import { tr as baseTr } from "./copy";
import { copyExtras } from "./copy-extras";
import { copySlice2 } from "./copy-slice2";
import { useDesk } from "./store";
import type { L10n, Lang } from "./types";

function pick(root: unknown, parts: string[]) {
  let node: unknown = root;
  for (const part of parts) {
    if (node && typeof node === "object" && part in node) node = (node as Record<string, unknown>)[part];
    else return null;
  }
  return typeof node === "string" ? node : null;
}

function tr(lang: Lang, path: string, vars?: Record<string, string | number>) {
  const parts = path.split(".");
  const node = pick(copySlice2[lang], parts) ?? pick(copyExtras[lang], parts);
  if (node !== null) {
    if (!vars) return node;
    return node.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ""));
  }
  return baseTr(lang, path, vars);
}

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
