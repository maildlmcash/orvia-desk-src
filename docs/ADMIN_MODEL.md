# Admin Model (SoT) — ORVIA P2P Desk

Paper/demo product. This document is the source of truth for admin control in `maildlmcash/P2P-6-oct`.
Companion: `docs/ADMIN_CONTROL_PLAN.md` (slice implementation notes).
Market parity inventory (ADVANCE): `docs/BINANCE_MARKET_INVENTORY.md`.

**Do not follow iBot / meridian-desk memory.** This repo is the P2P desk only.

## Paper locks (always on)

| Lock | Intent |
|------|--------|
| `LIVE_MONEY` | Must remain false. No live money paths in UI or store for this slice. |
| Banner | Persistent **PAPER / DEMO** label on Market + Admin. |
| Fiat | No real bank / UPI collection accounts. Payment methods are practice labels only. |
| Identity | No real ID document storage — last-4 + attached flags only. |
| Metrics | No invented thumbs, Acc, win-rate, or fake completion. Use `User.trades` / `User.completion` / `User.online` only. |
| Orders | Paper escrow only; admin override uses existing `release(..., true)` / `cancelOrder(..., true)`. |

## RBAC roles (target model)

| Role | Who | Capability summary |
|------|-----|--------------------|
| Guest | Signed-out / browse | Read public market shell only (if gate allows). No admin. |
| User | Buyer seat | Trade as buyer, own payments, own KYC-as-buyer, own wallet practice top-up. |
| Merchant | Licensed seller | Post/edit own ads, grant/revoke buyer passes, release/cancel as seller. |
| Admin · Support | `isAdmin` seat (slice collapses all admin sub-roles) | Orders overview, force release/cancel, user freeze/hold, ad pause/close/feature. |
| Admin · Compliance | same seat (slice) | KYC review, pass revoke, merchant license suspend/restore. |
| Admin · Finance | same seat (slice) | Fees/settings, withdrawals queue, practice credit adjust, treasury view. |
| Admin · SuperAdmin | same seat (slice) | Desk open/close, coins list/unlist, reset desk, full audit read. |

**Slice reality:** store exposes a single `User.isAdmin` flag. Sub-roles above are **policy labels** for UI sections and the slice #2 maker-checker stub (`useOps.subRole`) — not separate auth principals yet. Real dual-principal admin auth stays **MISSING**.

## Actions matrix

| Domain | Guest | User | Merchant | Admin (all) | Store today |
|--------|-------|------|----------|-------------|-------------|
| Browse ads | R | R | R | R | ads filter + advanced funnel (slice #2) |
| Place paper order | — | C | C | C* | `placeOrder` |
| Own ad post/edit/pause/close | — | — | CUD | — | `postAd`/`editAd`/`toggleAd`/`closeAd` |
| Any ad pause/close/feature/beginner | — | — | — | UD | `adminToggleAd`/`adminCloseAd`/`adminPatchAd` via `admin-api` |
| Order force release/cancel | — | — | — | U | `release`/`cancelOrder` asAdmin |
| User freeze / send-hold | — | — | — | U | `setSeat` |
| Merchant license suspend/restore | — | — | — | U | `setLicense` |
| Seller KYC approve/reject | — | — | — | U | `reviewSellerKyc` |
| Buyer pass grant | — | — | U | — | `reviewBuyerKyc` (merchant) |
| Pass revoke | — | — | own | U | `revokePass` + `adminRevokePass` via `admin-api`; maker-checker path in `useOps` |
| Payment methods list | — | own | own | all | payments[] |
| Payment remove | — | own | own | any | `removePayment` + `adminRemovePayment` via `admin-api` |
| Practice credit +100 | — | self | self | any seat | `practiceCredit` + `adminPracticeCredit` via `admin-api`; maker-checker path in `useOps` |
| Fees / desk open / coins | — | — | — | U | `saveSettings`/`setDeskOpen`/`updateCoin` |
| Open appeal (dispute) | — | party | party | — | `dispute(orderId, reason)` |
| Appeal desk: notes + resolve | — | — | — | U | **STUB** `useOps.addNote` / `useOps.resolveAppeal` → `release`/`cancelOrder` asAdmin |
| Order timer view / extend +15m | — | — | — | U | **STUB** `useOps.extendTimer` (patches `Order.payBy`, audited) |
| Maker-checker (2nd approver) | — | — | — | C (maker) / U (checker) | **STUB** `useOps.fileRequest` / `useOps.decide` — checker ≠ maker by seat **or** sub-role label |
| Permanent ban (beyond freeze) | — | — | — | U via maker-checker | **STUB** `ban`/`unban` request → `setSeat` + `useOps.banned` marker |
| Express | R | R | R | — | **STUB** Market → Express shell (best live paper ad); no Express engine / admin hooks |
| Dual-principal admin auth | — | — | — | — | **MISSING** |

C=create R=read U=update D=delete · *admin may act via seat switch

## State machines (paper)

### Order
`created → paid → released` · `created|paid → cancelled` · `created|paid → disputed → (admin) released|cancelled`
Timer: `created` past `payBy` → auto `cancelled` (store tick). Admin may extend `payBy` +15 min while `created` (slice #2 stub, max 60 per call).

### Appeal (slice #2, derived)
`order.status = disputed` (+ `appealReason`) → admin notes (`useOps.notes`) → resolve `release` | `cancel` (note required).

### Maker-checker request (slice #2)
`pending → approved (executes) | rejected`. Maker sub-role allow-list per kind (`MC_MAKER_ROLE`). Checker blocked when same seat **and** same sub-role label.

### Ad
`live ↔ paused` · `live|paused → closed` (removed) · flags: `featured`, `beginner`, `needKyc` (paper chrome)

### Account
`active ↔ suspended(frozen)` · `withdrawHold` on/off · license `none|active|suspended` · paper `banned` marker (slice #2)

### Merchant application (seller KYC)
`pending → approved|rejected` (admin)

### Payment method
`saved → removed` (owner or admin)

## Audit log + maker-checker

**Required intent:** every admin mutation writes an `Audit` row (`actorId`, `key`, `detail`, `at`) and preferably a human **reason** string.

**Slice #1:**
- PASS: existing + new admin actions push `audits` via `pushAudit` where wired.
- PARTIAL: reason field not yet a first-class `Audit.reason` — detail string only.

**Slice #2:**
- STUB: maker-checker queue for wallet credit / ban / unban / merchant license revoke / pass revoke (`src/lib/p2p/ops-store.ts`). Each file/approve/reject writes an audit row (`admin.auditMcFile|Approve|Reject`). Request carries a required reason.
- STUB: appeal notes + resolution write audits (`admin.auditAppealNote`, plus existing release/cancel audits). Timer extend writes `admin.auditTimer`.
- MISSING: real second principal. On the single admin seat the checker is distinguished by sub-role label only — UI labels this **paper · not real dual control**.
- Direct single-approver actions from slice #1 remain and stay labelled **paper · single-approver**.

## Market shell (Binance parity + ADVANCE)

See `docs/BINANCE_MARKET_INVENTORY.md` for the locked deep-check inventory.

1. Sub-nav Express | P2P | Block; Help / Orders / User Center links.
2. Filters: amount + fiat, payment methods, multi-sort, advertiser search, online/followed/merchants, beginner mode, advanced funnel (slice #2: min completion, min orders, max pay window, price type, min available, no extra ID, eligibility vs `minComp`).
3. Sticky filters; amount → you receive / you pay preview.
4. Headers: Advertisers | Price | Available/Order Limit | Payment | Trade.
5. Rows: avatar/online, orders + completion %, pay time, price, limits, rail chips, Buy/Sell.
6. Pagination ~10.
7. Beginner zone on both sides (toggle); Featured strip on sell.
8. Express tab (slice #2): pay/receive form → best live paper ad, desk fee from `settings`, opens the normal paper trade sheet.
9. PAPER/DEMO banner. No fake thumbs. No LIVE_MONEY.

## Admin UI priority surfaces

1. Users & merchants (freeze, hold, license).
2. Ads (list, pause/resume, close, feature/beginner).
3. Orders overview + admin release/cancel.
4. Appeals (disputed orders, notes, resolve) + order timers — slice #2.
5. Maker-checker queue (wallet / ban / revoke) — slice #2.
6. Paper wallet practice credit (any seat).
7. KYC / passes / payments / fees / withdrawals / coins / controls.

Stubs: visible STUB/MISSING labels, not silent omit (Admin → Stubs tab lists status).
