import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LIVE_SYMBOLS, PAY_MINUTES } from "./catalog";
import { adPrice, computeFees, merchantLive, rand4, rid, round4 } from "./logic";
import type {
  Ad,
  AdSide,
  AppealReason,
  Audit,
  ChatMessage,
  Coin,
  DocType,
  Fiat,
  Kyc,
  Lang,
  Network,
  Notice,
  Order,
  OrderStatus,
  Pass,
  PayMethod,
  Rail,
  Settings,
  Theme,
  User,
  Withdrawal,
} from "./types";

const OPEN: OrderStatus[] = ["created", "paid", "disputed"];

const SYMBOLS = [
  "USDT", "BTC", "ETH", "BNB", "XRP", "USDC", "SOL", "TRX", "ZEC", "HYPE",
  "ORB", "KYN", "VLT", "AUR", "PXN", "LUM", "NRX", "HAL",
] as const;

function bag(partial: Partial<Record<string, number>>) {
  const out: Record<string, number> = {};
  for (const symbol of SYMBOLS) out[symbol] = partial[symbol] ?? 0;
  return out;
}

function nm(en: string, hi: string, ur: string) {
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

function fresh(): DeskData {
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

function pushAudit(audits: Audit[] | undefined, actorId: string, key: string, detail: string): Audit[] {
  return [{ id: rid("a"), actorId, key, detail, at: Date.now() }, ...(audits ?? [])].slice(0, 30);
}

function patchUser(users: User[], id: string, fn: (user: User) => User) {
  return users.map((user) => (user.id === id ? fn(user) : user));
}

function addBal(user: User, coin: string, delta: number): User {
  return { ...user, balances: { ...user.balances, [coin]: round4((user.balances[coin] ?? 0) + delta) } };
}

function unwind(state: Pick<DeskState, "users" | "ads">, order: Order) {
  const ad = state.ads.find((item) => item.id === order.adId);
  const give = ad?.side === "buy" ? order.gross + order.sellerFee : order.sellerFee;
  return {
    users: patchUser(state.users, order.sellerId, (user) => addBal(user, order.coin, give)),
    ads: state.ads.map((item) => (item.id === order.adId ? { ...item, available: round4(item.available + order.gross) } : item)),
  };
}

interface DeskActions {
  markHydrated: () => void;
  setTheme: (theme: Theme) => void;
  setLang: (lang: Lang) => void;
  setMe: (id: string) => void;
  flash: (key: string, vars?: Record<string, string | number>) => void;
  tickQuotes: () => void;
  applyLive: (rows: { symbol: string; price: number; move: number }[]) => void;
  placeOrder: (adId: string, gross: number, rail: Rail) => string | null;
  markPaid: (orderId: string) => void;
  release: (orderId: string, asAdmin?: boolean) => void;
  cancelOrder: (orderId: string, asAdmin?: boolean) => void;
  dispute: (orderId: string, reason?: AppealReason) => void;
  rateOrder: (orderId: string, score: number) => void;
  toggleBlock: (userId: string) => void;
  toggleFollow: (userId: string) => void;
  takeBreak: () => void;
  editAd: (adId: string, patch: Partial<Pick<Ad, "price" | "min" | "max" | "terms" | "payMin" | "autoReply" | "needKyc" | "minComp" | "margin" | "priceMode" | "rails">>) => boolean;
  sendChat: (orderId: string, text: string) => void;
  postAd: (input: {
    side: AdSide;
    coin: string;
    fiat: Fiat;
    price: number;
    min: number;
    max: number;
    inventory: number;
    rails: Rail[];
    terms: string;
    priceMode?: "fixed" | "float";
    margin?: number;
    payMin?: number;
    autoReply?: string;
    needKyc?: boolean;
    minComp?: number;
  }) => boolean;
  toggleAd: (adId: string) => void;
  closeAd: (adId: string) => void;
  submitKyc: (input: {
    purpose: "seller" | "buyer";
    sellerId?: string;
    name: string;
    country: string;
    docType: DocType;
    taxKind: string | null;
    last4: string;
    declared: boolean;
    front: boolean;
    back: boolean;
    selfie: boolean;
  }) => boolean;
  reviewSellerKyc: (kycId: string, approve: boolean, reason?: string) => void;
  reviewBuyerKyc: (kycId: string, approve: boolean) => void;
  revokePass: (passId: string) => void;
  saveSettings: (settings: Settings) => void;
  requestWithdraw: (coin: string, amount: number, address: string, network: Network) => boolean;
  reviewWithdraw: (id: string, send: boolean) => void;
  addCoin: (input: { symbol: string; label: string; price: number; minWithdraw: number; deposits: boolean; withdrawals: boolean }) => boolean;
  updateCoin: (symbol: string, patch: Partial<Pick<Coin, "price" | "listed" | "label" | "minWithdraw" | "deposits" | "withdrawals">>) => void;
  addPayment: (rail: Rail, label: string, details: string) => boolean;
  removePayment: (id: string) => void;
  practiceCredit: (coin: string) => void;
  setLicense: (userId: string, active: boolean) => void;
  setSeat: (userId: string, patch: { suspended?: boolean; withdrawHold?: boolean }) => void;
  setDeskOpen: (open: boolean) => void;
  reset: () => void;
}

export type DeskState = DeskData & DeskActions;

function fail(set: (partial: Partial<DeskState>) => void, error: string) {
  set({ notice: { key: `err.${error}` } });
  return false as const;
}

export const useDesk = create<DeskState>()(
  persist(
    (set, get) => ({
      ...fresh(),
      markHydrated: () =>
        set((state) => {
          const seed = fresh();
          const coins = [...state.coins];
          const quotes = { ...state.quotes };
          for (const coin of seed.coins) {
            if (!coins.some((item) => item.symbol === coin.symbol)) coins.push(coin);
            if (quotes[coin.symbol] == null) quotes[coin.symbol] = coin.price;
          }
          const ads = [...state.ads];
          for (const ad of seed.ads) if (!ads.some((item) => item.id === ad.id)) ads.push(ad);
          const users = state.users.map((user) => {
            const seeded = seed.users.find((item) => item.id === user.id);
            const balances = { ...user.balances };
            for (const coin of seed.coins) {
              if (balances[coin.symbol] == null) balances[coin.symbol] = seeded?.balances[coin.symbol] ?? 0;
            }
            return { ...user, balances };
          });
          return {
            hydrated: true,
            coins,
            quotes,
            moves: state.moves ?? {},
            users,
            audits: state.audits ?? [],
            settings: { ...state.settings, deskOpen: state.settings.deskOpen !== false },
            ads: ads.map((ad) => {
              if (ad.id === "ad-m-vlt-inr" && !ad.priceMode) {
                return { ...ad, priceMode: "float" as const, margin: ad.margin ?? 101, payMin: ad.payMin ?? 30, minComp: ad.minComp ?? 80 };
              }
              if (ad.id === "ad-h-lum-usd" && ad.needKyc == null) return { ...ad, needKyc: true, payMin: ad.payMin ?? 15 };
              return ad;
            }),
          };
        }),
      setTheme: (theme) => set({ theme }),
      setLang: (lang) => set({ lang }),
      setMe: (id) => set({ meId: id }),
      flash: (key, vars) => {
        set({ notice: { key, vars } });
        window.setTimeout(() => {
          if (get().notice?.key === key) set({ notice: null });
        }, 3400);
      },
      tickQuotes: () =>
        set((state) => {
          const quotes = { ...state.quotes };
          for (const coin of state.coins) {
            if (LIVE_SYMBOLS.has(coin.symbol)) continue;
            const base = quotes[coin.symbol] ?? coin.price;
            quotes[coin.symbol] = round4(Math.max(0.01, base * (1 + (Math.random() - 0.5) * 0.008)));
          }
          const now = Date.now();
          let users = state.users;
          let ads = state.ads;
          const orders = state.orders.map((order) => {
            if (order.status !== "created" || order.payBy >= now) return order;
            const back = unwind({ users, ads }, order);
            users = back.users;
            ads = back.ads;
            return {
              ...order,
              status: "cancelled" as const,
              escrow: 0,
              messages: [...order.messages, { id: rid("m"), fromId: null, system: "cancelled" as const, at: now }],
            };
          });
          return { quotes, users, ads, orders };
        }),
      applyLive: (rows) =>
        set((state) => {
          if (!rows.length) return state;
          const quotes = { ...state.quotes };
          const moves = { ...(state.moves ?? {}) };
          let changed = false;
          for (const row of rows) {
            if (!LIVE_SYMBOLS.has(row.symbol) || !(row.price > 0)) continue;
            quotes[row.symbol] = row.price;
            moves[row.symbol] = row.move;
            changed = true;
          }
          return changed ? { quotes, moves } : state;
        }),
      placeOrder: (adId, gross, rail) => {
        const state = get();
        const me = state.users.find((user) => user.id === state.meId);
        const ad = state.ads.find((item) => item.id === adId);
        if (!me || !ad || ad.paused) return null;
        if (me.suspended) {
          fail(set, "frozen");
          return null;
        }
        if (state.settings.deskOpen === false) {
          fail(set, "desk");
          return null;
        }
        const listed = state.coins.find((item) => item.symbol === ad.coin);
        if (!listed || listed.listed === false) {
          fail(set, "coinOff");
          return null;
        }
        const amount = round4(gross);
        if (!(amount > 0)) {
          fail(set, "amount");
          return null;
        }
        if (ad.userId === me.id) {
          fail(set, "own");
          return null;
        }
        const maker = state.users.find((user) => user.id === ad.userId);
        if ((me.blocked ?? []).includes(ad.userId) || (maker?.blocked ?? []).includes(me.id)) {
          fail(set, "blocked");
          return null;
        }
        if (ad.needKyc && !me.docLast4 && !state.kycs.some((item) => item.userId === me.id && item.status === "approved")) {
          fail(set, "kyc");
          return null;
        }
        if ((ad.minComp ?? 0) > 0 && me.completion < (ad.minComp ?? 0)) {
          fail(set, "completion");
          return null;
        }
        if (!ad.rails.includes(rail)) {
          fail(set, "payment");
          return null;
        }
        if (amount < ad.min || amount > ad.max) {
          fail(set, "limits");
          return null;
        }
        if (amount > ad.available + 1e-8) {
          fail(set, "available");
          return null;
        }
        const merchant = state.users.find((user) => user.id === ad.userId);
        if (!merchant || !merchantLive(merchant)) {
          fail(set, "merchant");
          return null;
        }
        const buyerId = ad.side === "sell" ? me.id : ad.userId;
        const sellerId = ad.side === "sell" ? ad.userId : me.id;
        const seller = state.users.find((user) => user.id === sellerId);
        if (!seller || !merchantLive(seller)) {
          fail(set, "merchant");
          return null;
        }
        if (ad.side === "sell") {
          const pass = state.passes.find(
            (item) => item.buyerId === me.id && item.sellerId === sellerId && item.status === "active",
          );
          if (!pass) {
            fail(set, "license");
            return null;
          }
        }
        const { buyerFee, sellerFee } = computeFees(amount, state.settings);
        if (round4(amount - buyerFee) <= 0) {
          fail(set, "fee");
          return null;
        }
        if ((seller.balances[ad.coin] ?? 0) + 1e-8 < sellerFee) {
          fail(set, "balance");
          return null;
        }
        if (ad.side === "buy" && (seller.balances[ad.coin] ?? 0) + 1e-8 < amount + sellerFee) {
          fail(set, "balance");
          return null;
        }
        const coin = state.coins.find((item) => item.symbol === ad.coin);
        const price = adPrice(ad, state.quotes, coin?.price);
        const now = Date.now();
        const chat: ChatMessage[] = [{ id: rid("m"), fromId: null, system: "created", at: now }];
        if (ad.autoReply?.trim()) chat.push({ id: rid("m"), fromId: ad.userId, text: ad.autoReply.trim(), at: now });
        const order: Order = {
          id: rid("o"),
          adId: ad.id,
          buyerId,
          sellerId,
          coin: ad.coin,
          fiat: ad.fiat,
          price,
          gross: amount,
          fiatTotal: round4(amount * price),
          buyerFee,
          sellerFee,
          rail,
          status: "created",
          escrow: round4(amount + sellerFee),
          createdAt: now,
          payBy: now + (ad.payMin || PAY_MINUTES) * 60000,
          messages: chat,
        };
        set({
          ads: state.ads.map((item) =>
            item.id === ad.id ? { ...item, available: round4(item.available - amount) } : item,
          ),
          users: patchUser(state.users, sellerId, (user) => addBal(user, ad.coin, -(ad.side === "buy" ? amount + sellerFee : sellerFee))),
          orders: [order, ...state.orders],
          notice: { key: "system.created" },
        });
        return order.id;
      },
      markPaid: (orderId) => {
        const state = get();
        const order = state.orders.find((item) => item.id === orderId);
        if (!order || order.status !== "created" || order.buyerId !== state.meId) {
          fail(set, "forbidden");
          return;
        }
        const now = Date.now();
        set({
          orders: state.orders.map((item) =>
            item.id === orderId
              ? {
                  ...item,
                  status: "paid",
                  messages: [...item.messages, { id: rid("m"), fromId: null, system: "paid", at: now }],
                }
              : item,
          ),
        });
      },
      release: (orderId, asAdmin) => {
        const state = get();
        const me = state.users.find((user) => user.id === state.meId);
        const order = state.orders.find((item) => item.id === orderId);
        if (!me || !order) return;
        if (!OPEN.includes(order.status)) {
          fail(set, "closed");
          return;
        }
        const sellerOk =
          order.sellerId === me.id && merchantLive(me) && (order.status === "paid" || order.status === "disputed");
        if (!(asAdmin && me.isAdmin) && !sellerOk) {
          fail(set, "forbidden");
          return;
        }
        const now = Date.now();
        const net = round4(order.gross - order.buyerFee);
        set({
          users: patchUser(
            patchUser(state.users, order.buyerId, (user) => ({
              ...addBal(user, order.coin, net),
              trades: user.trades + 1,
            })),
            order.sellerId,
            (user) => ({ ...user, trades: user.trades + 1 }),
          ),
          treasury: {
            ...state.treasury,
            [order.coin]: round4((state.treasury[order.coin] ?? 0) + order.buyerFee + order.sellerFee),
          },
          fees: [
            {
              id: rid("f"),
              orderId: order.id,
              coin: order.coin,
              buyerFee: order.buyerFee,
              sellerFee: order.sellerFee,
              at: now,
            },
            ...state.fees,
          ],
          orders: state.orders.map((item) =>
            item.id === orderId
              ? {
                  ...item,
                  status: "released",
                  escrow: 0,
                  messages: [...item.messages, { id: rid("m"), fromId: null, system: "released", at: now }],
                }
              : item,
          ),
          audits: asAdmin ? pushAudit(state.audits, me.id, "admin.auditRelease", order.id) : (state.audits ?? []),
        });
      },
      cancelOrder: (orderId, asAdmin) => {
        const state = get();
        const me = state.users.find((user) => user.id === state.meId);
        const order = state.orders.find((item) => item.id === orderId);
        if (!me || !order) return;
        const party = order.buyerId === me.id || order.sellerId === me.id;
        if (!(asAdmin ? me.isAdmin : party) || !OPEN.includes(order.status)) {
          fail(set, order && !OPEN.includes(order.status) ? "closed" : "forbidden");
          return;
        }
        if (!asAdmin && order.status !== "created") {
          fail(set, "forbidden");
          return;
        }
        const now = Date.now();
        const back = unwind(state, order);
        let users = back.users;
        if (!asAdmin && order.buyerId === me.id) {
          users = patchUser(users, me.id, (user) => ({ ...user, completion: Math.max(80, user.completion - 1) }));
        }
        set({
          users,
          ads: back.ads,
          orders: state.orders.map((item) =>
            item.id === orderId
              ? {
                  ...item,
                  status: "cancelled",
                  escrow: 0,
                  messages: [...item.messages, { id: rid("m"), fromId: null, system: "cancelled", at: now }],
                }
              : item,
          ),
          audits: asAdmin ? pushAudit(state.audits, me.id, "admin.auditCancel", order.id) : (state.audits ?? []),
        });
      },
      dispute: (orderId, reason) => {
        const state = get();
        const order = state.orders.find((item) => item.id === orderId);
        if (!order || (order.buyerId !== state.meId && order.sellerId !== state.meId)) {
          fail(set, "forbidden");
          return;
        }
        if (order.status !== "paid" && order.status !== "created") {
          fail(set, "closed");
          return;
        }
        const now = Date.now();
        set({
          orders: state.orders.map((item) =>
            item.id === orderId
              ? {
                  ...item,
                  status: "disputed",
                  appealReason: reason ?? "not_released",
                  messages: [...item.messages, { id: rid("m"), fromId: null, system: "disputed", at: now }],
                }
              : item,
          ),
        });
      },
      rateOrder: (orderId, score) => {
        const state = get();
        const order = state.orders.find((item) => item.id === orderId);
        if (!order || order.status !== "released") return;
        if (order.buyerId !== state.meId && order.sellerId !== state.meId) return;
        const rating = Math.max(1, Math.min(5, Math.round(score)));
        set({ orders: state.orders.map((item) => (item.id === orderId ? { ...item, rating } : item)) });
      },
      toggleBlock: (userId) => {
        const state = get();
        if (userId === state.meId) return;
        set({
          users: patchUser(state.users, state.meId, (user) => {
            const list = user.blocked ?? [];
            const blocked = list.includes(userId) ? list.filter((id) => id !== userId) : [...list, userId];
            return { ...user, blocked };
          }),
        });
      },
      toggleFollow: (userId) => {
        const state = get();
        if (userId === state.meId) return;
        set({
          users: patchUser(state.users, state.meId, (user) => {
            const list = user.following ?? [];
            const following = list.includes(userId) ? list.filter((id) => id !== userId) : [...list, userId];
            return { ...user, following };
          }),
        });
      },
      takeBreak: () => {
        const state = get();
        set({ ads: state.ads.map((ad) => (ad.userId === state.meId ? { ...ad, paused: true } : ad)) });
      },
      editAd: (adId, patch) => {
        const state = get();
        const ad = state.ads.find((item) => item.id === adId);
        if (!ad || ad.userId !== state.meId) return fail(set, "forbidden");
        if (patch.price != null && !(patch.price > 0)) return fail(set, "price");
        if (patch.min != null && patch.max != null && patch.min > patch.max) return fail(set, "range");
        if (patch.rails && (patch.rails.length === 0 || patch.rails.length > 5)) return fail(set, "rails");
        if (patch.payMin != null && ![15, 30, 60].includes(patch.payMin)) return fail(set, "amount");
        const next = { ...patch };
        if (patch.minComp != null) next.minComp = Math.max(0, Math.min(100, patch.minComp));
        if (patch.margin != null) next.margin = Math.max(1, Math.min(200, patch.margin));
        set({
          ads: state.ads.map((item) => (item.id === adId ? { ...item, ...next } : item)),
          notice: { key: "ads.saved" },
        });
        return true;
      },
      sendChat: (orderId, text) => {
        const clean = text.trim().slice(0, 500);
        if (!clean) return;
        const state = get();
        const order = state.orders.find((item) => item.id === orderId);
        if (!order) return;
        if (order.buyerId !== state.meId && order.sellerId !== state.meId && !state.users.find((user) => user.id === state.meId)?.isAdmin) {
          return;
        }
        set({
          orders: state.orders.map((item) =>
            item.id === orderId
              ? { ...item, messages: [...item.messages, { id: rid("m"), fromId: state.meId, text: clean, at: Date.now() }] }
              : item,
          ),
        });
      },
      postAd: (input) => {
        const state = get();
        const me = state.users.find((user) => user.id === state.meId);
        if (!me || !merchantLive(me)) return fail(set, "merchant");
        if (me.suspended) return fail(set, "frozen");
        if (state.settings.deskOpen === false) return fail(set, "desk");
        const coin = state.coins.find((item) => item.symbol === input.coin);
        if (!coin || coin.listed === false) return fail(set, "coinOff");
        if (!(input.price > 0)) return fail(set, "price");
        if (!(input.min > 0) || !(input.max > 0) || !(input.inventory > 0)) return fail(set, "inventory");
        if (input.min > input.max) return fail(set, "range");
        if (input.inventory + 1e-8 < input.max) return fail(set, "inventory");
        if (input.rails.length === 0 || input.rails.length > 5) return fail(set, "rails");
        const have = new Set(state.payments.filter((item) => item.userId === me.id).map((item) => item.rail));
        if (input.rails.some((rail) => !have.has(rail))) return fail(set, "payment");
        if (input.side === "sell" && (me.balances[input.coin] ?? 0) + 1e-8 < input.inventory) return fail(set, "balance");
        const ad: Ad = {
          id: rid("ad"),
          userId: me.id,
          side: input.side,
          coin: input.coin,
          fiat: input.fiat,
          price: round4(input.price),
          min: round4(input.min),
          max: round4(input.max),
          available: round4(input.inventory),
          rails: input.rails,
          terms: input.terms.trim() || "__default__",
          paused: false,
          priceMode: input.priceMode ?? "fixed",
          margin: input.margin ?? 100,
          payMin: input.payMin && [15, 30, 60].includes(input.payMin) ? input.payMin : 15,
          autoReply: input.autoReply?.trim().slice(0, 240) || "",
          needKyc: !!input.needKyc,
          minComp: Math.max(0, Math.min(100, input.minComp ?? 0)),
        };
        set({
          ads: [ad, ...state.ads],
          users: input.side === "sell" ? patchUser(state.users, me.id, (user) => addBal(user, input.coin, -ad.available)) : state.users,
          notice: { key: "ads.posted" },
        });
        return true;
      },
      toggleAd: (adId) => {
        const state = get();
        const ad = state.ads.find((item) => item.id === adId);
        if (!ad || ad.userId !== state.meId) return;
        set({ ads: state.ads.map((item) => (item.id === adId ? { ...item, paused: !item.paused } : item)) });
      },
      closeAd: (adId) => {
        const state = get();
        const ad = state.ads.find((item) => item.id === adId);
        if (!ad || ad.userId !== state.meId) return;
        if (state.orders.some((order) => order.adId === adId && OPEN.includes(order.status))) {
          fail(set, "busy");
          return;
        }
        set({
          ads: state.ads.filter((item) => item.id !== adId),
          users: ad.side === "sell" ? patchUser(state.users, ad.userId, (user) => addBal(user, ad.coin, ad.available)) : state.users,
        });
      },
      submitKyc: (input) => {
        const state = get();
        const me = state.users.find((user) => user.id === state.meId);
        if (!me) return false;
        if (!input.declared) return fail(set, "declare");
        if (input.name.trim().length < 3) return fail(set, "name");
        if (!input.country) return fail(set, "country");
        if (!/^\d{4}$/.test(input.last4)) return fail(set, "last4");
        if (input.docType === "tax_id" && !input.taxKind) return fail(set, "tax");
        const needBack = input.docType !== "passport";
        if (!input.front || !input.selfie || (needBack && !input.back)) return fail(set, "docs");
        if (input.purpose === "seller") {
          if (me.sellerLicense?.status === "active") return fail(set, "pass");
          if (state.kycs.some((item) => item.userId === me.id && item.purpose === "seller" && item.status === "pending")) {
            return fail(set, "pending");
          }
        } else {
          if (!input.sellerId || input.sellerId === me.id) return fail(set, "forbidden");
          if (state.passes.some((item) => item.buyerId === me.id && item.sellerId === input.sellerId && item.status === "active")) {
            return fail(set, "pass");
          }
          if (
            state.kycs.some(
              (item) =>
                item.userId === me.id &&
                item.sellerId === input.sellerId &&
                item.purpose === "buyer" &&
                item.status === "pending",
            )
          ) {
            return fail(set, "pending");
          }
        }
        const kyc: Kyc = {
          id: rid("k"),
          userId: me.id,
          purpose: input.purpose,
          sellerId: input.purpose === "buyer" ? input.sellerId ?? null : null,
          name: input.name.trim(),
          country: input.country,
          docType: input.docType,
          taxKind: input.docType === "tax_id" ? input.taxKind : null,
          last4: input.last4,
          status: "pending",
          at: Date.now(),
          reason: null,
          front: input.front,
          back: input.docType === "passport" ? false : input.back,
          selfie: input.selfie,
        };
        set({ kycs: [kyc, ...state.kycs], notice: { key: input.purpose === "seller" ? "kyc.pendingAdmin" : "kyc.pendingSeller" } });
        return true;
      },
      reviewSellerKyc: (kycId, approve, reason) => {
        const state = get();
        const me = state.users.find((user) => user.id === state.meId);
        const kyc = state.kycs.find((item) => item.id === kycId);
        if (!me?.isAdmin || !kyc || kyc.purpose !== "seller" || kyc.status !== "pending") {
          fail(set, "forbidden");
          return;
        }
        if (!approve && !reason) {
          fail(set, "why");
          return;
        }
        set({
          kycs: state.kycs.map((item) =>
            item.id === kycId ? { ...item, status: approve ? "approved" : "rejected", reason: approve ? null : reason } : item,
          ),
          users: approve
            ? patchUser(state.users, kyc.userId, (user) => ({
                ...user,
                docLast4: kyc.last4,
                sellerLicense: { code: `${kyc.last4}${rand4()}`, status: "active", at: Date.now() },
              }))
            : state.users,
          audits: pushAudit(state.audits, me.id, approve ? "admin.auditKycYes" : "admin.auditKycNo", `${kyc.name} · ${kyc.last4}`),
          notice: { key: approve ? "kyc.approved" : "kyc.rejected" },
        });
      },
      reviewBuyerKyc: (kycId, approve) => {
        const state = get();
        const me = state.users.find((user) => user.id === state.meId);
        const kyc = state.kycs.find((item) => item.id === kycId);
        if (!me || !kyc || kyc.purpose !== "buyer" || kyc.sellerId !== me.id || kyc.status !== "pending") {
          fail(set, "forbidden");
          return;
        }
        if (!merchantLive(me) || me.docLast4.length !== 4) {
          fail(set, "merchant");
          return;
        }
        if (approve && state.passes.some((item) => item.buyerId === kyc.userId && item.sellerId === me.id && item.status === "active")) {
          fail(set, "pass");
          return;
        }
        const pass: Pass | null = approve
          ? {
              id: rid("p"),
              buyerId: kyc.userId,
              sellerId: me.id,
              code: `${me.docLast4}-${rand4()}`,
              status: "active",
              at: Date.now(),
            }
          : null;
        set({
          kycs: state.kycs.map((item) => (item.id === kycId ? { ...item, status: approve ? "approved" : "rejected" } : item)),
          passes: pass ? [pass, ...state.passes] : state.passes,
        });
      },
      revokePass: (passId) => {
        const state = get();
        const pass = state.passes.find((item) => item.id === passId);
        if (!pass || pass.sellerId !== state.meId || pass.status !== "active") {
          fail(set, "forbidden");
          return;
        }
        set({ passes: state.passes.map((item) => (item.id === passId ? { ...item, status: "revoked" } : item)) });
      },
      saveSettings: (settings) => {
        const me = get().users.find((user) => user.id === get().meId);
        if (!me?.isAdmin) return fail(set, "forbidden");
        if (settings.threshold <= 0 || settings.buyerPercent < 0 || settings.sellerPercent < 0 || settings.buyerFixed < 0 || settings.sellerFixed < 0) {
          return fail(set, "amount");
        }
        set({
          settings: {
            ...settings,
            buyerPercent: round4(settings.buyerPercent),
            sellerPercent: round4(settings.sellerPercent),
            buyerFixed: round4(settings.buyerFixed),
            sellerFixed: round4(settings.sellerFixed),
            threshold: round4(settings.threshold),
            deskOpen: get().settings.deskOpen !== false,
          },
          notice: { key: "admin.saved" },
        });
        return true;
      },
      requestWithdraw: (coin, amount, address, network) => {
        const state = get();
        const qty = round4(amount);
        const me = state.users.find((user) => user.id === state.meId);
        if (!me) return false;
        if (me.suspended || me.withdrawHold) return fail(set, "frozen");
        if (!(qty > 0)) return fail(set, "amount");
        const coinRow = state.coins.find((item) => item.symbol === coin);
        if (coinRow?.withdrawals === false) return fail(set, "coinOff");
        if ((coinRow?.minWithdraw ?? 0) > 0 && qty + 1e-8 < (coinRow?.minWithdraw ?? 0)) return fail(set, "minOut");
        if ((me.balances[coin] ?? 0) + 1e-8 < qty) return fail(set, "balance");
        if (address.trim().length < 8) return fail(set, "address");
        const under = qty < state.settings.threshold;
        const mode = under ? state.settings.underMode : state.settings.overMode;
        const status = mode === "automatic" ? "auto_sent" : "pending_admin";
        const row: Withdrawal = {
          id: rid("w"),
          userId: me.id,
          coin,
          amount: qty,
          address: address.trim(),
          network,
          status,
          at: Date.now(),
        };
        set({
          users: patchUser(state.users, me.id, (user) => addBal(user, coin, -qty)),
          withdrawals: [row, ...state.withdrawals],
          notice: { key: status === "auto_sent" ? "wallet.previewAuto" : "wallet.previewManual" },
        });
        return true;
      },
      reviewWithdraw: (id, send) => {
        const state = get();
        const me = state.users.find((user) => user.id === state.meId);
        const row = state.withdrawals.find((item) => item.id === id);
        if (!me?.isAdmin || !row || row.status !== "pending_admin") {
          fail(set, "forbidden");
          return;
        }
        set({
          withdrawals: state.withdrawals.map((item) =>
            item.id === id ? { ...item, status: send ? "sent" : "rejected" } : item,
          ),
          users: send ? state.users : patchUser(state.users, row.userId, (user) => addBal(user, row.coin, row.amount)),
          audits: pushAudit(state.audits, me.id, send ? "admin.auditSend" : "admin.auditReturn", `${row.amount} ${row.coin}`),
        });
      },
      addCoin: (input) => {
        const state = get();
        const me = state.users.find((user) => user.id === state.meId);
        if (!me?.isAdmin) return fail(set, "forbidden");
        const symbol = input.symbol.trim().toUpperCase();
        if (!/^[A-Z]{3,5}$/.test(symbol)) return fail(set, "symbol");
        if (state.coins.some((coin) => coin.symbol === symbol)) return fail(set, "duplicate");
        if (input.label.trim().length < 2) return fail(set, "name");
        if (!(input.price > 0) || input.minWithdraw < 0) return fail(set, "amount");
        const row: Coin = {
          symbol,
          price: round4(input.price),
          listed: true,
          label: input.label.trim(),
          minWithdraw: round4(input.minWithdraw),
          deposits: input.deposits,
          withdrawals: input.withdrawals,
        };
        set({
          coins: [...state.coins, row],
          quotes: { ...state.quotes, [symbol]: row.price },
          audits: pushAudit(state.audits, me.id, "admin.auditCoin", `${symbol} · ${row.label}`),
          notice: { key: "admin.added", vars: { coin: symbol } },
        });
        return true;
      },
      updateCoin: (symbol, patch) => {
        const state = get();
        const me = state.users.find((user) => user.id === state.meId);
        if (!me?.isAdmin) {
          fail(set, "forbidden");
          return;
        }
        const current = state.coins.find((coin) => coin.symbol === symbol);
        if (!current) return;
        const next: Coin = {
          ...current,
          ...patch,
          price: patch.price != null ? round4(patch.price) : current.price,
          minWithdraw: patch.minWithdraw != null ? round4(Math.max(0, patch.minWithdraw)) : current.minWithdraw,
        };
        if (!(next.price > 0)) {
          fail(set, "price");
          return;
        }
        set({
          coins: state.coins.map((coin) => (coin.symbol === symbol ? next : coin)),
          quotes: patch.price != null ? { ...state.quotes, [symbol]: next.price } : state.quotes,
          audits: pushAudit(state.audits, me.id, "admin.auditCoin", symbol),
          notice: { key: "admin.coinSaved", vars: { coin: symbol } },
        });
      },
      addPayment: (rail, label, details) => {
        const state = get();
        if (details.trim().length < 4) return fail(set, "address");
        const row: PayMethod = { id: rid("pm"), userId: state.meId, rail, label: label.trim(), details: details.trim() };
        set({ payments: [...state.payments, row], notice: { key: "common.save" } });
        return true;
      },
      removePayment: (id) => {
        const state = get();
        set({ payments: state.payments.filter((item) => !(item.id === id && item.userId === state.meId)) });
      },
      practiceCredit: (coin) => {
        const state = get();
        const row = state.coins.find((item) => item.symbol === coin);
        if (row?.deposits === false) {
          fail(set, "coinOff");
          return;
        }
        set({ users: patchUser(state.users, state.meId, (user) => addBal(user, coin, 100)), notice: { key: "wallet.topup" } });
      },
      setLicense: (userId, active) => {
        const state = get();
        const me = state.users.find((user) => user.id === state.meId);
        const target = state.users.find((user) => user.id === userId);
        if (!me?.isAdmin || !target?.sellerLicense) return fail(set, "forbidden");
        set({
          users: patchUser(state.users, userId, (user) => ({
            ...user,
            sellerLicense: user.sellerLicense ? { ...user.sellerLicense, status: active ? "active" : "suspended" } : null,
          })),
        });
      },
      setSeat: (userId, patch) => {
        const state = get();
        const me = state.users.find((user) => user.id === state.meId);
        const target = state.users.find((user) => user.id === userId);
        if (!me?.isAdmin || !target || target.isAdmin) return fail(set, "self");
        set({
          users: patchUser(state.users, userId, (user) => ({ ...user, ...patch })),
          audits: pushAudit(state.audits, me.id, "admin.auditSeat", target.id),
          notice: { key: patch.suspended ? "admin.frozen" : "admin.saved" },
        });
      },
      setDeskOpen: (open) => {
        const state = get();
        const me = state.users.find((user) => user.id === state.meId);
        if (!me?.isAdmin) return fail(set, "forbidden");
        set({
          settings: { ...state.settings, deskOpen: open },
          audits: pushAudit(state.audits, me.id, "admin.auditDesk", open ? "open" : "closed"),
          notice: { key: open ? "admin.deskOpen" : "admin.deskClosed" },
        });
      },
      reset: () => set({ ...fresh(), hydrated: true, notice: { key: "profile.done" } }),
    }),
    {
      name: "orvia-desk-v2",
      skipHydration: true,
      partialize: (state) => ({
        theme: state.theme,
        lang: state.lang,
        meId: state.meId,
        users: state.users,
        ads: state.ads,
        orders: state.orders,
        kycs: state.kycs,
        passes: state.passes,
        payments: state.payments,
        withdrawals: state.withdrawals,
        fees: state.fees,
        coins: state.coins,
        settings: state.settings,
        treasury: state.treasury,
        audits: state.audits,
      }),
    },
  ),
);
