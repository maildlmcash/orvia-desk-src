import type { Fiat, Network, Rail } from "./types";

export const FIATS: Fiat[] = ["INR", "USD", "PKR", "AED", "EUR"];
export const RAILS: Rail[] = ["upi", "imps", "bank", "paytm", "jazz", "easy", "card"];
export const NETWORKS: Network[] = ["mesh", "north", "south"];
export const COIN_RANK = [
  "USDT", "BTC", "ETH", "BNB", "XRP", "USDC", "SOL", "TRX", "ZEC", "HYPE",
  "ORB", "KYN", "VLT", "AUR", "PXN", "LUM", "NRX", "HAL",
];

export const LIVE_PAIRS: { symbol: string; pair: string }[] = [
  { symbol: "BTC", pair: "BTCUSDT" },
  { symbol: "ETH", pair: "ETHUSDT" },
  { symbol: "BNB", pair: "BNBUSDT" },
  { symbol: "XRP", pair: "XRPUSDT" },
  { symbol: "USDC", pair: "USDCUSDT" },
  { symbol: "SOL", pair: "SOLUSDT" },
  { symbol: "TRX", pair: "TRXUSDT" },
  { symbol: "ZEC", pair: "ZECUSDT" },
  { symbol: "HYPE", pair: "HYPEUSDT" },
  { symbol: "USDT", pair: "USDTUSD" },
];

export const LIVE_SYMBOLS = new Set(LIVE_PAIRS.map((item) => item.symbol));

export function sortCoins<T extends { symbol: string }>(rows: T[]) {
  return [...rows].sort((a, b) => {
    const ia = COIN_RANK.indexOf(a.symbol);
    const ib = COIN_RANK.indexOf(b.symbol);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });
}
export const COUNTRIES = [
  "IN", "US", "GB", "PK", "AE", "CA", "AU", "DE", "FR", "BR", "NG", "ZA", "SG", "BD", "NP", "LK",
  "CN", "JP", "ID", "PH", "KE", "SA", "TR", "MX", "ES", "IT", "NL", "QA",
] as const;

export const TAX_KINDS: { id: string; country: string }[] = [
  { id: "PAN", country: "IN" },
  { id: "SSN", country: "US" },
  { id: "ITIN", country: "US" },
  { id: "UTR", country: "GB" },
  { id: "NINO", country: "GB" },
  { id: "NTN", country: "PK" },
  { id: "TRN", country: "AE" },
  { id: "SIN", country: "CA" },
  { id: "TFN", country: "AU" },
  { id: "STEUER", country: "DE" },
  { id: "SPI", country: "FR" },
  { id: "CF", country: "IT" },
  { id: "NIF", country: "ES" },
  { id: "BSN", country: "NL" },
  { id: "CPF", country: "BR" },
  { id: "RFC", country: "MX" },
  { id: "TIN_NG", country: "NG" },
  { id: "SARS", country: "ZA" },
  { id: "NRIC", country: "SG" },
  { id: "TIN_BD", country: "BD" },
  { id: "PAN_NP", country: "NP" },
  { id: "TIN_LK", country: "LK" },
  { id: "TIN_CN", country: "CN" },
  { id: "MYNO", country: "JP" },
  { id: "NPWP", country: "ID" },
  { id: "TIN_PH", country: "PH" },
  { id: "KRA", country: "KE" },
  { id: "TIN_SA", country: "SA" },
  { id: "VKN", country: "TR" },
  { id: "TIN_QA", country: "QA" },
];

export const PAY_MINUTES = 15;
