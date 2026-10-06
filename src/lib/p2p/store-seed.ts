import { rid, round4 } from "./logic";
import type {
  Ad,
  Audit,
  Coin,
  Kyc,
  Lang,
  Notice,
  Order,
  OrderStatus,
  Pass,
  PayMethod,
  Settings,
  Theme,
  User,
  Withdrawal,
} from "./types";

export const OPEN: OrderStatus[] = ["created", "paid", "disputed"];

const SYMBOLS = [
  "USDT", "BTC", "ETH", "BNB", "XRP", "USDC", "SOL", "TRX", "ZEC", "HYPE",
  "ORB", "KYN", "VLT", "AUR", "PXN", "LUM", "NRX", "HAL",
] as const;

export function bag(partial: Partial<Record<string, number>>) {
  const out: Record<string, number> = {};
  for (const symbol of SYMBOLS) out[symbol] = partial[symbol] ?? 0;
  return out;
}

export function nm(en: string, hi: string, ur: string) {
  return { en, hi, ur };
}

export interface DeskData {
  theme: Theme;
  lang: Lang;
  meId: string;
  users: User[];
  ads: Ad[];
  orders: Order[];
  kycs: Kyc[];
  passes: Pass[];
  payments: PayMethod[];
  withdrawals: Withdrawal[];
  fees: { id: string; orderId: string; coin: string; buyerFee: number; sellerFee: number; at: number }[];
  coins: Coin[];
  settings: Settings;
  treasury: Record<string, number>;
  quotes: Record<string, number>;
  moves: Record<string, number>;
  notice: Notice | null;
  hydrated: boolean;
  audits: Audit[];
}

export function fresh(): DeskData {
  const now = Date.now();
  const coins: Coin[] = [
    { symbol: "USDT", price: 1, listed: true },
    { symbol: "BTC", price: 83853, listed: true },
    { symbol: "ETH", price: 2680, listed: true },
    { symbol: "BNB", price: 767, listed: true },
    { symbol: "XRP", price: 1.5, listed: true },
    { symbol: "USDC", price: 1, listed: true },
    { symbol: "SOL", price: 119, listed: true },
    { symbol: "TRX", price: 0.339, listed: true },
    { symbol: "ZEC", price: 1430, listed: true },
    { symbol: "HYPE", price: 86, listed: true },
    { symbol: "ORB", price: 1.08, listed: true },
    { symbol: "KYN", price: 0.42, listed: true },
    { symbol: "VLT", price: 3.4, listed: true },
    { symbol: "AUR", price: 12.6, listed: true },
    { symbol: "PXN", price: 0.18, listed: true },
    { symbol: "LUM", price: 2.15, listed: true },
    { symbol: "NRX", price: 8.9, listed: true },
    { symbol: "HAL", price: 0.07, listed: true },
  ];
  const quotes: Record<string, number> = {};
  const moves: Record<string, number> = {};
  for (const coin of coins) quotes[coin.symbol] = coin.price;

  const users: User[] = [
    {
      id: "u-admin",
      name: nm("Asha Dutt", "आशा दत्त", "آشا دت"),
      country: "IN",
      isAdmin: true,
      docLast4: "",
      sellerLicense: null,
      trades: 0,
      completion: 100,
      balances: bag({}),
      online: true,
    },
    {
      id: "u-meera",
      name: nm("Meera Shah", "मीरा शाह", "میرا شاہ"),
      country: "IN",
      isAdmin: false,
      docLast4: "4821",
      sellerLicense: { code: "48217390", status: "active", at: now - 86400000 * 40 },
      trades: 128,
      completion: 99,
      balances: bag({
        ORB: 4200, VLT: 800, KYN: 1500, AUR: 80, PXN: 9000, LUM: 600, NRX: 120, HAL: 20000,
        USDT: 48000, BTC: 1.4, ETH: 22, BNB: 30, XRP: 4000, USDC: 12000, SOL: 120, TRX: 30000, ZEC: 8, HYPE: 70,
      }),
      online: true,
    },
    {
      id: "u-hassan",
      name: nm("Hassan Raza", "हसन रज़ा", "حسن رضا"),
      country: "PK",
      isAdmin: false,
      docLast4: "9055",
      sellerLicense: { code: "90551234", status: "active", at: now - 86400000 * 22 },
      trades: 86,
      completion: 97,
      balances: bag({
        ORB: 1800, VLT: 240, KYN: 3000, AUR: 20, PXN: 4000, LUM: 500, NRX: 40, HAL: 8000,
        USDT: 16000, BTC: 0.35, ETH: 8, BNB: 12, XRP: 1800, USDC: 4000, SOL: 40, TRX: 12000, ZEC: 2, HYPE: 25,
      }),
      online: true,
    },
    {
      id: "u-kabir",
      name: nm("Kabir Singh", "कबीर सिंह", "کبیر سنگھ"),
      country: "IN",
      isAdmin: false,
      docLast4: "6630",
      sellerLicense: null,
      trades: 6,
      completion: 100,
      balances: bag({ ORB: 15, VLT: 4, USDT: 320, BTC: 0.002 }),
      online: true,
    },
    {
      id: "u-aman",
      name: nm("Aman Gill", "अमन गिल", "امن گل"),
      country: "IN",
      isAdmin: false,
      docLast4: "",
      sellerLicense: null,
      trades: 1,
      completion: 100,
      balances: bag({ ORB: 25 }),
      online: true,
    },
    {
      id: "u-farah",
      name: nm("Farah Noor", "फ़राह नूर", "فراح نور"),
      country: "IN",
      isAdmin: false,
      docLast4: "",
      sellerLicense: null,
      trades: 0,
      completion: 0,
      balances: bag({}),
      online: false,
    },
  ];

  const terms = "__default__";
  const ads: Ad[] = [
    { id: "ad-m-orb-inr", userId: "u-meera", side: "sell", coin: "ORB", fiat: "INR", price: 96.5, min: 10, max: 400, available: 760, rails: ["upi", "imps", "bank"], terms, paused: false },
    { id: "ad-m-orb-usd", userId: "u-meera", side: "sell", coin: "ORB", fiat: "USD", price: 1.12, min: 5, max: 150, available: 300, rails: ["bank", "card"], terms, paused: false },
    { id: "ad-m-vlt-inr", userId: "u-meera", side: "sell", coin: "VLT", fiat: "INR", price: 318, min: 1, max: 30, available: 120, rails: ["upi", "paytm"], terms, paused: false, priceMode: "float", margin: 101, payMin: 30, minComp: 80 },
    { id: "ad-m-aur-aed", userId: "u-meera", side: "sell", coin: "AUR", fiat: "AED", price: 48.5, min: 0.2, max: 8, available: 22, rails: ["bank"], terms, paused: false },
    { id: "ad-m-buy-orb", userId: "u-meera", side: "buy", coin: "ORB", fiat: "INR", price: 93.2, min: 10, max: 150, available: 150, rails: ["upi", "imps"], terms, paused: false },
    { id: "ad-h-orb-inr", userId: "u-hassan", side: "sell", coin: "ORB", fiat: "INR", price: 97.8, min: 5, max: 200, available: 220, rails: ["bank", "easy"], terms, paused: false },
    { id: "ad-h-orb-pkr", userId: "u-hassan", side: "sell", coin: "ORB", fiat: "PKR", price: 312, min: 5, max: 250, available: 400, rails: ["jazz", "easy"], terms, paused: false },
    { id: "ad-h-kyn-pkr", userId: "u-hassan", side: "sell", coin: "KYN", fiat: "PKR", price: 118, min: 20, max: 800, available: 2000, rails: ["jazz", "bank"], terms, paused: false },
    { id: "ad-h-lum-usd", userId: "u-hassan", side: "sell", coin: "LUM", fiat: "USD", price: 2.28, min: 2, max: 60, available: 140, rails: ["bank", "card"], terms, paused: false, needKyc: true, payMin: 15 },
    { id: "ad-h-buy-vlt", userId: "u-hassan", side: "buy", coin: "VLT", fiat: "PKR", price: 960, min: 1, max: 12, available: 20, rails: ["easy"], terms, paused: false },
    { id: "ad-m-usdt-inr", userId: "u-meera", side: "sell", coin: "USDT", fiat: "INR", price: 86.4, min: 20, max: 8000, available: 25000, rails: ["upi", "imps", "bank"], terms, paused: false, payMin: 15 },
    { id: "ad-h-usdt-inr", userId: "u-hassan", side: "sell", coin: "USDT", fiat: "INR", price: 86.85, min: 10, max: 4000, available: 9000, rails: ["bank", "easy"], terms, paused: false, payMin: 15 },
    { id: "ad-m-usdt-buy", userId: "u-meera", side: "buy", coin: "USDT", fiat: "INR", price: 85.7, min: 50, max: 5000, available: 5000, rails: ["upi", "imps"], terms, paused: false, payMin: 15 },
    { id: "ad-m-btc-inr", userId: "u-meera", side: "sell", coin: "BTC", fiat: "INR", price: 7215000, min: 0.001, max: 0.08, available: 0.4, rails: ["upi", "bank"], terms, paused: false, payMin: 30 },
    { id: "ad-h-btc-inr", userId: "u-hassan", side: "sell", coin: "BTC", fiat: "INR", price: 7248000, min: 0.001, max: 0.04, available: 0.12, rails: ["bank"], terms, paused: false, payMin: 30 },
    { id: "ad-m-eth-inr", userId: "u-meera", side: "sell", coin: "ETH", fiat: "INR", price: 230400, min: 0.01, max: 2, available: 8, rails: ["upi", "imps"], terms, paused: false, payMin: 15 },
    { id: "ad-m-bnb-inr", userId: "u-meera", side: "sell", coin: "BNB", fiat: "INR", price: 65900, min: 0.02, max: 3, available: 12, rails: ["upi", "bank"], terms, paused: false },
    { id: "ad-h-xrp-inr", userId: "u-hassan", side: "sell", coin: "XRP", fiat: "INR", price: 129, min: 10, max: 2000, available: 1500, rails: ["bank", "easy"], terms, paused: false },
    { id: "ad-m-usdc-inr", userId: "u-meera", side: "sell", coin: "USDC", fiat: "INR", price: 86.2, min: 20, max: 5000, available: 8000, rails: ["upi", "imps"], terms, paused: false },
    { id: "ad-m-sol-inr", userId: "u-meera", side: "sell", coin: "SOL", fiat: "INR", price: 10230, min: 0.1, max: 20, available: 50, rails: ["upi", "paytm"], terms, paused: false },
    { id: "ad-h-trx-inr", userId: "u-hassan", side: "sell", coin: "TRX", fiat: "INR", price: 29.2, min: 20, max: 4000, available: 8000, rails: ["bank"], terms, paused: false },
    { id: "ad-m-zec-usd", userId: "u-meera", side: "sell", coin: "ZEC", fiat: "USD", price: 1432, min: 0.01, max: 1, available: 3, rails: ["bank", "card"], terms, paused: false },
    { id: "ad-m-zec-inr", userId: "u-meera", side: "sell", coin: "ZEC", fiat: "INR", price: 123000, min: 0.01, max: 0.4, available: 2, rails: ["bank", "upi"], terms, paused: false },
    { id: "ad-h-hype-usd", userId: "u-hassan", side: "sell", coin: "HYPE", fiat: "USD", price: 86.4, min: 0.2, max: 15, available: 18, rails: ["bank", "card"], terms, paused: false },
    { id: "ad-h-hype-inr", userId: "u-hassan", side: "sell", coin: "HYPE", fiat: "INR", price: 7400, min: 0.2, max: 10, available: 12, rails: ["bank"], terms, paused: false },
    { id: "ad-m-kyn-inr", userId: "u-meera", side: "sell", coin: "KYN", fiat: "INR", price: 36.2, min: 5, max: 400, available: 900, rails: ["upi", "imps"], terms, paused: false },
  ];

  const orders: Order[] = [
    {
      id: "o-paid",
      adId: "ad-m-orb-inr",
      buyerId: "u-kabir",
      sellerId: "u-meera",
      coin: "ORB",
      fiat: "INR",
      price: 96.5,
      gross: 40,
      fiatTotal: 3860,
      buyerFee: 0.13,
      sellerFee: 0.11,
      rail: "upi",
      status: "paid",
      escrow: 40.11,
      createdAt: now - 8 * 60000,
      payBy: now + 7 * 60000,
      messages: [
        { id: "m1", fromId: null, system: "created", at: now - 8 * 60000 },
        { id: "m2", fromId: null, system: "paid", at: now - 3 * 60000 },
      ],
    },
    {
      id: "o-old",
      adId: "ad-m-orb-inr",
      buyerId: "u-kabir",
      sellerId: "u-meera",
      coin: "ORB",
      fiat: "INR",
      price: 95,
      gross: 10,
      fiatTotal: 950,
      buyerFee: 0.07,
      sellerFee: 0.065,
      rail: "bank",
      status: "released",
      escrow: 0,
      createdAt: now - 2 * 86400000,
      payBy: now - 2 * 86400000,
      messages: [
        { id: "m3", fromId: null, system: "created", at: now - 2 * 86400000 },
        { id: "m4", fromId: null, system: "released", at: now - 2 * 86400000 + 600000 },
      ],
    },
  ];

  return {
    theme: "day",
    lang: "hi",
    meId: "u-kabir",
    users,
    ads,
    orders,
    kycs: [
      {
        id: "k-farah",
        userId: "u-farah",
        purpose: "seller",
        sellerId: null,
        name: "फ़राह नूर",
        country: "IN",
        docType: "national_id",
        taxKind: null,
        last4: "2210",
        status: "pending",
        at: now - 3600000,
        reason: null,
        front: true,
        back: true,
        selfie: true,
      },
    ],
    passes: [
      { id: "p-kabir", buyerId: "u-kabir", sellerId: "u-meera", code: "4821-7390", status: "active", at: now - 86400000 * 5 },
      { id: "p-aman", buyerId: "u-aman", sellerId: "u-hassan", code: "9055-1102", status: "revoked", at: now - 86400000 * 3 },
    ],
    payments: [
      { id: "pm1", userId: "u-meera", rail: "upi", label: "", details: "9891002211" },
      { id: "pm2", userId: "u-meera", rail: "imps", label: "", details: "001234 · 004455667788" },
      { id: "pm3", userId: "u-meera", rail: "bank", label: "", details: "441200889911" },
      { id: "pm4", userId: "u-meera", rail: "paytm", label: "", details: "9891002211" },
      { id: "pm5", userId: "u-meera", rail: "card", label: "", details: "4412" },
      { id: "pm6", userId: "u-hassan", rail: "jazz", label: "", details: "03001234567" },
      { id: "pm7", userId: "u-hassan", rail: "easy", label: "", details: "03007654321" },
      { id: "pm8", userId: "u-hassan", rail: "bank", label: "", details: "220011445566" },
      { id: "pm9", userId: "u-hassan", rail: "card", label: "", details: "7781" },
      { id: "pm10", userId: "u-kabir", rail: "bank", label: "", details: "110022334455" },
      { id: "pm11", userId: "u-aman", rail: "upi", label: "", details: "9811122233" },
    ],
    withdrawals: [
      {
        id: "w-hassan",
        userId: "u-hassan",
        coin: "VLT",
        amount: 12,
        address: "9055221800417781",
        network: "north",
        status: "pending_admin",
        at: now - 50 * 60000,
      },
    ],
    fees: [{ id: "f-old", orderId: "o-old", coin: "ORB", buyerFee: 0.07, sellerFee: 0.065, at: now - 2 * 86400000 }],
    coins,
    settings: {
      feeMode: "both",
      buyerPercent: 0.2,
      sellerPercent: 0.15,
      buyerFixed: 0.05,
      sellerFixed: 0.05,
      threshold: 5,
      underMode: "automatic",
      overMode: "manual",
      deskOpen: true,
    },
    treasury: { ORB: 0.135 },
    quotes,
    moves,
    notice: null,
    hydrated: false,
    audits: [],
  };
}

export function pushAudit(audits: Audit[] | undefined, actorId: string, key: string, detail: string): Audit[] {
  return [{ id: rid("a"), actorId, key, detail, at: Date.now() }, ...(audits ?? [])].slice(0, 30);
}

export function patchUser(users: User[], id: string, fn: (user: User) => User) {
  return users.map((user) => (user.id === id ? fn(user) : user));
}

export function addBal(user: User, coin: string, delta: number): User {
  return { ...user, balances: { ...user.balances, [coin]: round4((user.balances[coin] ?? 0) + delta) } };
}

export function unwind(state: { users: User[]; ads: Ad[] }, order: Order) {
  const ad = state.ads.find((item) => item.id === order.adId);
  const give = ad?.side === "buy" ? order.gross + order.sellerFee : order.sellerFee;
  return {
    users: patchUser(state.users, order.sellerId, (user) => addBal(user, order.coin, give)),
    ads: state.ads.map((item) => (item.id === order.adId ? { ...item, available: round4(item.available + order.gross) } : item)),
  };
}
