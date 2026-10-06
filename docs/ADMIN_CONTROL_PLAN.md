# Admin Control Plan — ORVIA Desk (paper/demo)

Slice: Market Binance-parity shell + full Admin control panel
Repo: `maildlmcash/P2P-6-oct` · Paper only · No LIVE_MONEY · No real order placement · No invented live metrics

## Product locks (non-negotiable)

| Lock | Rule |
|------|------|
| Money | Practice balances / paper escrow only. No LIVE_MONEY flags, no CEX private trade APIs, no real fiat rails. |
| Orders | Admin may force-release / force-cancel via existing paper `release(..., true)` / `cancelOrder(..., true)`. |
| Metrics | Show only fields on `User` / `Ad` / `Order` (trades, completion %, online, pay window). No fake thumbs / Acc / win-rate. |
| Quotes | Public ticker quotes already in repo are OK for display. |
| Scope | Do not touch meridian-desk / iBot. |

## Roles

| Actor | Can |
|-------|-----|
| Buyer / merchant seat | Own ads, own payments, own KYC submit, own orders as party |
| Admin seat (`isAdmin`) | Full desk control listed below; seat switch already in shell |

## Market shell (slice #1 UI) — Binance P2P USDT/INR parity

1. Filters: amount + fiat selector, payment method, explicit **Sort by Price**, online/following toggles kept.
2. Headers: **Advertisers | Price | Available/Order Limit | Payment | Trade**.
3. Row chrome: avatar + online dot, orders + completion %, payment time, price, limits, rail chips, Buy/Sell CTA. Thumbs only if typed fields exist (they do not → omit).
4. Client pagination (~10/page).
5. Buy → Beginner-zone placeholder strip; Sell → Featured-ad placeholder strip (uses store flags when set).
6. Persistent **Paper / demo** banner.

## Admin modules (SoT)

| Module | UI | Store backing | Target status |
|--------|----|---------------|---------------|
| Overview | Stats + treasury chart | existing reads | PASS |
| Ads | List all; pause/resume; close; feature / beginner flags | `adminToggleAd`, `adminCloseAd`, `adminPatchAd` | PASS |
| Users / merchants | List; freeze/unfreeze; hold sends; suspend/restore license | `setSeat`, `setLicense` | PASS |
| Orders | Filter + paginate; admin release/cancel | `release(id,true)`, `cancelOrder(id,true)` | PASS |
| Appeals (slice #2) | Disputed list, chat, notes, resolve release/cancel (note required) | `useOps.addNote`, `useOps.resolveAppeal` | STUB |
| Order timers (slice #2) | Live countdown from `payBy`; extend +15 min | `useOps.extendTimer` | STUB |
| Maker-checker (slice #2) | File → approve/reject for wallet credit, ban, unban, license revoke, pass revoke | `useOps.fileRequest`, `useOps.decide` | STUB |
| Payments / rails | List all; admin remove any | `adminRemovePayment` | PASS |
| Wallet / practice | Credit any seat +100 practice coin | `adminPracticeCredit` | PASS |
| Identity / KYC | Seller queue approve/reject; buyer oversight | `reviewSellerKyc` | PASS / PARTIAL |
| Passes | List; admin revoke | `adminRevokePass` | PASS |
| Fees / send policy | Existing form | `saveSettings` | PASS |
| Withdrawals | Queue send/return | `reviewWithdraw` | PASS |
| Coins | List/unlist, deposits, withdraws, add coin | `addCoin`, `updateCoin` | PASS |
| Controls | Desk open/close, seat freeze/hold, audit log, reset | `setDeskOpen`, `setSeat`, `reset` | PASS |
| Express | Market → Express shell (best live paper ad) | reads `ads`/`settings` | STUB |
| Dual-principal admin auth | — | — | MISSING |

## Slice #2 — appeal/dispute, timer, maker-checker, Express shell, advanced funnel

Files:
- `src/lib/p2p/ops-store.ts` — persisted paper ops store (`orvia-ops-paper-v1`): sub-role label, maker-checker requests, appeal notes, timer log, banned marker. `LIVE_MONEY = false`.
- `src/components/p2p/admin-appeals.tsx` — Admin → Appeals (disputed + order timers).
- `src/components/p2p/admin-maker-checker.tsx` — Admin → Maker-checker.
- `src/components/p2p/market-express.tsx` — Market → Express shell.
- `src/components/p2p/market-funnel.tsx` — Market → Filters advanced funnel.
- `src/lib/p2p/copy-slice2.ts` (+ `i18n.ts` lookup order: slice2 → extras → base) — en/hi/ur strings.

Rules:
- Maker allow-list: wallet credit = Finance/SuperAdmin; ban = Support/Compliance/SuperAdmin; unban, license revoke, pass revoke = Compliance/SuperAdmin.
- Checker blocked if same seat **and** same sub-role label. Single seed admin ⇒ paper dual control only (labelled).
- Approve executes existing paper actions (`adminPracticeCredit`, `setSeat`, `setLicense`, `adminRevokePass`); every step audited.
- Funnel/Express use only real `Ad`/`User`/`settings` fields; no invented metrics.

## Explicitly out of slice

- Find-an-Ad modal, Binance private/trade scrape, LIVE_MONEY, Acc/win-rate invention, real Express liquidity engine, separate admin auth principals.
