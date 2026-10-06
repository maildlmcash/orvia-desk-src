export type Lang = "en" | "hi" | "ur";
export type Theme = "day" | "night" | "dark";
export type Fiat = "INR" | "USD" | "PKR" | "AED" | "EUR";
export type Rail = "upi" | "imps" | "bank" | "paytm" | "jazz" | "easy" | "card";
export type DocType = "national_id" | "passport" | "tax_id";
export type Network = "mesh" | "north" | "south";
export type OrderStatus = "created" | "paid" | "released" | "cancelled" | "disputed";
export type WdStatus = "pending_admin" | "auto_sent" | "sent" | "rejected";
export type PassStatus = "active" | "revoked";
export type KycStatus = "pending" | "approved" | "rejected";
export type FeeMode = "percent" | "fixed" | "both";
export type SendMode = "automatic" | "manual";
export type PriceMode = "fixed" | "float";
export type AppealReason = "not_released" | "wrong_name" | "no_reply" | "amount";
export type AdSide = "sell" | "buy";
export type Role = "buyer" | "seller" | "admin" | "suspended";

export interface L10n {
  en: string;
  hi: string;
  ur: string;
}

export interface Coin {
  symbol: string;
  price: number;
  listed: boolean;
  label?: string;
  minWithdraw?: number;
  deposits?: boolean;
  withdrawals?: boolean;
}

export interface User {
  id: string;
  name: L10n;
  country: string;
  isAdmin: boolean;
  docLast4: string;
  sellerLicense: { code: string; status: "active" | "suspended"; at: number } | null;
  trades: number;
  completion: number;
  balances: Record<string, number>;
  online: boolean;
  suspended?: boolean;
  withdrawHold?: boolean;
  blocked?: string[];
  following?: string[];
}

export interface Ad {
  id: string;
  userId: string;
  side: AdSide;
  coin: string;
  fiat: Fiat;
  price: number;
  min: number;
  max: number;
  available: number;
  rails: Rail[];
  terms: string;
  paused: boolean;
  priceMode?: PriceMode;
  margin?: number;
  payMin?: number;
  autoReply?: string;
  needKyc?: boolean;
  minComp?: number;
}

export interface ChatMessage {
  id: string;
  fromId: string | null;
  text?: string;
  system?: "created" | "paid" | "released" | "cancelled" | "disputed";
  at: number;
}

export interface Order {
  id: string;
  adId: string;
  buyerId: string;
  sellerId: string;
  coin: string;
  fiat: Fiat;
  price: number;
  gross: number;
  fiatTotal: number;
  buyerFee: number;
  sellerFee: number;
  rail: Rail;
  status: OrderStatus;
  escrow: number;
  createdAt: number;
  payBy: number;
  messages: ChatMessage[];
  appealReason?: AppealReason;
  rating?: number;
}

export interface Kyc {
  id: string;
  userId: string;
  purpose: "seller" | "buyer";
  sellerId: string | null;
  name: string;
  country: string;
  docType: DocType;
  taxKind: string | null;
  last4: string;
  status: KycStatus;
  at: number;
  reason?: string | null;
  front?: boolean;
  back?: boolean;
  selfie?: boolean;
}

export interface Pass {
  id: string;
  buyerId: string;
  sellerId: string;
  code: string;
  status: PassStatus;
  at: number;
}

export interface PayMethod {
  id: string;
  userId: string;
  rail: Rail;
  label: string;
  details: string;
}

export interface Withdrawal {
  id: string;
  userId: string;
  coin: string;
  amount: number;
  address: string;
  network: Network;
  status: WdStatus;
  at: number;
}

export interface FeeEntry {
  id: string;
  orderId: string;
  coin: string;
  buyerFee: number;
  sellerFee: number;
  at: number;
}

export interface Settings {
  feeMode: FeeMode;
  buyerPercent: number;
  sellerPercent: number;
  buyerFixed: number;
  sellerFixed: number;
  threshold: number;
  underMode: SendMode;
  overMode: SendMode;
  deskOpen?: boolean;
}

export interface Notice {
  key: string;
  vars?: Record<string, string | number>;
}

export interface Audit {
  id: string;
  actorId: string;
  key: string;
  detail: string;
  at: number;
}
