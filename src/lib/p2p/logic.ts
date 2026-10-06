import type { Settings, User } from "./types";

export function round4(n: number) {
  return Math.round(n * 10000) / 10000;
}

export function adPrice(
  ad: { price: number; coin: string; priceMode?: "fixed" | "float"; margin?: number },
  quotes: Record<string, number>,
  base?: number,
) {
  if (ad.priceMode !== "float") return ad.price;
  const live = quotes[ad.coin];
  const anchor = base && base > 0 ? base : live || ad.price;
  const drift = live && anchor ? live / anchor : 1;
  return round4(ad.price * ((ad.margin ?? 100) / 100) * drift);
}

export function computeFees(gross: number, settings: Settings) {
  const usePercent = settings.feeMode !== "fixed";
  const useFixed = settings.feeMode !== "percent";
  const buyerFee = round4(
    (usePercent ? (gross * settings.buyerPercent) / 100 : 0) + (useFixed ? settings.buyerFixed : 0),
  );
  const sellerFee = round4(
    (usePercent ? (gross * settings.sellerPercent) / 100 : 0) + (useFixed ? settings.sellerFixed : 0),
  );
  return { buyerFee, sellerFee };
}

export function roleOf(user: User) {
  if (user.isAdmin) return "admin" as const;
  if (user.suspended) return "suspended" as const;
  if (user.sellerLicense?.status === "suspended") return "suspended" as const;
  if (user.sellerLicense?.status === "active") return "seller" as const;
  return "buyer" as const;
}

export function merchantLive(user: User) {
  return user.sellerLicense?.status === "active" && !user.suspended;
}

export function rid(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}${Date.now().toString(36).slice(-3)}`;
}

export function rand4() {
  return String(1000 + Math.floor(Math.random() * 9000));
}
