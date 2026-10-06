import type { Fiat, Lang } from "./types";

const locale: Record<Lang, string> = { en: "en-IN", hi: "hi-IN", ur: "ur-PK" };

const sign: Record<Fiat, string> = {
  INR: "₹",
  USD: "$",
  PKR: "₨",
  AED: "د.إ",
  EUR: "€",
};

export function num(n: number, lang: Lang, digits = 2) {
  return new Intl.NumberFormat(locale[lang], {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(Number.isFinite(n) ? n : 0);
}

export function numFlex(n: number, lang: Lang, digits = 4) {
  return new Intl.NumberFormat(locale[lang], {
    maximumFractionDigits: digits,
  }).format(Number.isFinite(n) ? n : 0);
}

export function fiatAmt(n: number, code: Fiat, lang: Lang) {
  return `${sign[code]}${num(n, lang, 2)}`;
}

export function fiatSign(code: Fiat) {
  return sign[code];
}
