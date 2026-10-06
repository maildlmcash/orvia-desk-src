import { o as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as BadgeCheck } from "../_libs/lucide-react.mjs";
import { A as adPrice, B as useI18n, F as merchantLive, I as personName, O as RAILS, P as fieldClass, R as sortCoins, S as FIATS, i as fiatAmt, j as cn, s as numFlex, y as Button, z as useDesk } from "./router-DKF0ET_M.mjs";
import { i as TradeSheet, n as KycSheet } from "./trade-DVp5vyKx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desk-CiDzlv-q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Market() {
	const { lang, t } = useI18n();
	const meId = useDesk((state) => state.meId);
	const users = useDesk((state) => state.users);
	const ads = useDesk((state) => state.ads);
	const coins = useDesk((state) => state.coins);
	const quotes = useDesk((state) => state.quotes);
	const passes = useDesk((state) => state.passes);
	const kycs = useDesk((state) => state.kycs);
	const [want, setWant] = (0, import_react.useState)("buy");
	const [coin, setCoin] = (0, import_react.useState)("USDT");
	const [fiat, setFiat] = (0, import_react.useState)("INR");
	const [rail, setRail] = (0, import_react.useState)("all");
	const [amount, setAmount] = (0, import_react.useState)("");
	const [query, setQuery] = (0, import_react.useState)("");
	const [onlineOnly, setOnlineOnly] = (0, import_react.useState)(false);
	const [followOnly, setFollowOnly] = (0, import_react.useState)(false);
	const [trade, setTrade] = (0, import_react.useState)(null);
	const [kycFor, setKycFor] = (0, import_react.useState)(null);
	const listed = sortCoins(coins.filter((item) => item.listed));
	const me = users.find((user) => user.id === meId);
	const priceOf = (ad) => adPrice(ad, quotes, coins.find((item) => item.symbol === ad.coin)?.price);
	const rows = (0, import_react.useMemo)(() => {
		const fiatAmount = Number(amount);
		const side = want === "buy" ? "sell" : "buy";
		return ads.filter((ad) => {
			if (ad.paused || ad.side !== side || ad.coin !== coin || ad.fiat !== fiat || ad.available <= 0) return false;
			const merchant = users.find((user) => user.id === ad.userId);
			if (!merchant || !merchantLive(merchant)) return false;
			if ((me?.blocked ?? []).includes(merchant.id) || (merchant.blocked ?? []).includes(meId)) return false;
			if (onlineOnly && !merchant.online) return false;
			if (followOnly && !(me?.following ?? []).includes(merchant.id)) return false;
			if (rail !== "all" && !ad.rails.includes(rail)) return false;
			if (query.trim()) {
				if (!personName(merchant.name, lang).toLowerCase().includes(query.trim().toLowerCase())) return false;
			}
			if (amount && Number.isFinite(fiatAmount) && fiatAmount > 0) {
				const live = priceOf(ad);
				const gross = live > 0 ? fiatAmount / live : 0;
				if (gross < ad.min || gross > ad.max || gross > ad.available) return false;
			}
			return true;
		}).sort((a, b) => want === "buy" ? priceOf(a) - priceOf(b) : priceOf(b) - priceOf(a));
	}, [
		ads,
		amount,
		coin,
		coins,
		fiat,
		followOnly,
		lang,
		me,
		meId,
		onlineOnly,
		query,
		quotes,
		rail,
		users,
		want
	]);
	const kycMerchant = users.find((user) => user.id === kycFor);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid w-full max-w-7xl gap-3 px-3 py-3 sm:px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1",
					children: ["buy", "sell"].map((side) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("min-h-11 border-b-2 px-4 text-sm font-semibold", want === side ? side === "buy" ? "border-buy text-buy" : "border-sell text-sell" : "border-transparent text-muted"),
						onClick: () => setWant(side),
						children: t(`side.${side}`)
					}, side))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: t("common.count", { n: rows.length })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 overflow-x-auto border-b border-line",
				children: listed.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("min-h-11 shrink-0 border-b-2 px-3 text-sm font-semibold", coin === item.symbol ? "border-primary text-fg" : "border-transparent text-muted"),
					onClick: () => setCoin(item.symbol),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono",
						children: item.symbol
					})
				}, item.symbol))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						inputMode: "decimal",
						placeholder: t("market.amountPh"),
						"aria-label": t("market.amountPh"),
						value: amount,
						onChange: (event) => setAmount(event.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: fieldClass,
						value: fiat,
						onChange: (event) => setFiat(event.target.value),
						"aria-label": t("common.fiat"),
						children: FIATS.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: code,
							children: t(`fiatName.${code}`)
						}, code))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: fieldClass,
						value: rail,
						onChange: (event) => setRail(event.target.value),
						"aria-label": t("common.payment"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "all",
							children: t("common.all")
						}), RAILS.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: code,
							children: t(`rail.${code}`)
						}, code))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						placeholder: t("common.search"),
						"aria-label": t("common.search"),
						value: query,
						onChange: (event) => setQuery(event.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("min-h-11 flex-1 rounded-md px-3 text-sm font-semibold", onlineOnly ? "bg-primary text-primary-fg" : "bg-surface-2"),
							onClick: () => setOnlineOnly((value) => !value),
							children: t("market.onlineOnly")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("min-h-11 flex-1 rounded-md px-3 text-sm font-semibold", followOnly ? "bg-primary text-primary-fg" : "bg-surface-2"),
							onClick: () => setFollowOnly((value) => !value),
							children: t("market.followingOnly")
						})]
					})
				]
			}),
			rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-md border border-dashed border-line px-4 py-10 text-center text-sm text-muted",
				children: t("market.empty")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden grid-cols-[1.4fr_0.9fr_1fr_1fr_auto] gap-3 border-b border-line px-1 pb-2 text-xs font-medium text-muted lg:grid",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("common.merchant") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("common.price") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("common.limits") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("common.payment") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
					]
				}), rows.map((ad) => {
					const merchant = users.find((user) => user.id === ad.userId);
					if (!merchant) return null;
					const meRow = users.find((user) => user.id === meId);
					const verified = !!meRow?.docLast4 || kycs.some((item) => item.userId === meId && item.status === "approved");
					const pass = passes.find((item) => item.buyerId === meId && item.sellerId === merchant.id && item.status === "active");
					const pending = kycs.some((item) => item.userId === meId && item.sellerId === merchant.id && item.purpose === "buyer" && item.status === "pending");
					const mine = ad.userId === meId;
					const live = priceOf(ad);
					let label = want === "buy" ? t("side.buy") : t("side.sell");
					let action = () => setTrade(ad);
					let identity = false;
					if (mine) {
						label = t("market.yourAd");
						action = null;
					} else if (ad.side === "sell" && !pass) {
						label = pending ? t("market.waiting") : t("market.verify");
						action = pending ? null : () => setKycFor(merchant.id);
					} else if (ad.needKyc && !verified) {
						label = t("market.extraId");
						action = null;
						identity = true;
					} else if (ad.side === "buy" && (!meRow || !merchantLive(meRow))) {
						label = t("nav.identity");
						action = null;
						identity = true;
					}
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid gap-3 border-b border-line px-1 py-3 lg:grid-cols-[1.4fr_0.9fr_1fr_1fr_auto] lg:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-11 shrink-0 place-items-center rounded-full bg-surface-2 text-sm font-semibold",
									children: personName(merchant.name, lang).slice(0, 1)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-center gap-1 font-semibold",
										children: [personName(merchant.name, lang), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
											className: "size-4 text-buy",
											"aria-label": t("market.verified")
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted",
										children: [
											merchant.online ? t("common.online") : "",
											" · ",
											merchant.trades,
											" ",
											t("common.trades"),
											" · ",
											merchant.completion,
											"% ",
											t("common.completion")
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted",
										children: [
											ad.priceMode === "float" ? `${t("market.float")} · ` : "",
											t("common.minutes", { n: ad.payMin ?? 15 }),
											(ad.minComp ?? 0) > 0 ? ` · ${t("market.minComp", { n: ad.minComp ?? 0 })}` : "",
											ad.needKyc ? ` · ${t("market.extraId")}` : ""
										]
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("font-mono text-xl font-semibold tabular-nums", want === "buy" ? "text-buy" : "text-sell"),
								children: fiatAmt(live, ad.fiat, lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono tabular-nums",
									children: [
										numFlex(ad.available, lang),
										" ",
										ad.coin
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-1 block text-muted",
									children: [
										fiatAmt(ad.min * live, ad.fiat, lang),
										" – ",
										fiatAmt(ad.max * live, ad.fiat, lang)
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1",
								children: ad.rails.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md bg-surface-2 px-2 py-1 text-xs font-medium",
									children: t(`rail.${item}`)
								}, item))
							}),
							identity ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/identity",
								className: "inline-flex min-h-11 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-fg lg:w-auto",
								children: label
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: want === "buy" ? "buy" : "sell",
								disabled: !action,
								onClick: action ?? void 0,
								className: "w-full lg:w-auto",
								children: label
							})
						]
					}, ad.id);
				})]
			}),
			trade ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TradeSheet, {
				ad: trade,
				onClose: () => setTrade(null)
			}) : null,
			kycMerchant ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KycSheet, {
				sellerId: kycMerchant.id,
				title: t("trade.kycTitle"),
				note: t("trade.needPass", { name: personName(kycMerchant.name, lang) }),
				onClose: () => setKycFor(null)
			}) : null
		]
	});
}
var SplitComponent = Market;
//#endregion
export { SplitComponent as component };
