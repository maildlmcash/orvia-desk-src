# Binance P2P Market inventory (read-only deep-check)

Locked reference for SIMILAR + MORE ADVANCED Market shell. Do **not** scrape Binance APIs. Paper/demo only (`LIVE_MONEY=false`).

## Sub-nav / chrome
- Tabs: **Express** | **P2P** | **Block**
- Links: Help / Orders / User Center (`/userCenter`, not `/myInfo`)

## Assets
- P2P market: ~13 assets shown on Binance reference
- Block tab: 6 assets only

## Filters (P2P)
- Transaction amount + fiat (INR default)
- All payment methods
- Funnel / advanced filters panel (reference panel not fully opened — stub UI labeled)
- Sort By: Price (default)

## Buy vs Sell strips
- **Buy only (Binance):** Beginner Friendly chip + New P2P User Trading Zone
- **Sell:** Featured Ad
- **Our ADVANCE:** Beginner mode toggle on **both** buy and sell

## Row chrome
- Avatar + online
- Name + badges
- N orders | X% completion
- Thumbs% + clock (pay minutes)
- ₹ price
- Available (coin) + fiat limit
- Color payment chips (UPI / Lightning UPI / IMPS / Paytm / PhonePe / GPay / eRupee — map to our rails as paper labels)
- Buy / Sell CTA

## Pagination
- Multi-page (~10 rows)

## Adjacent surfaces (stubs / links)
- Express: pay/receive + fee rate — **MISSING** store (honest stub)
- Orders: Processing / All / PnL + Unpaid / Paid / Appeal
- User Center: 30d stats + payment methods / feedback / blocked / follows

## ADVANCE vs Binance (implement where store allows)
1. Search by advertiser + online-only + followed + merchants-only
2. Multi-sort: price, completion%, release time (payMin), order count
3. Amount → row "you receive / you pay" preview
4. Sticky filter + header
5. Beginner mode toggle on both sides
6. Admin full control per `docs/ADMIN_MODEL.md`

## Paper locks
- No real bank/UPI collection, no real ID docs, no fake completion-rate inflation, no LIVE_MONEY.
