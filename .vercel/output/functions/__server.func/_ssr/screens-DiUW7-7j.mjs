import { o as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as adPrice, B as useI18n, C as Field, D as Panel, E as Page, F as merchantLive, I as personName, L as roleOf, M as coinLabel, N as computeFees, O as RAILS, P as fieldClass, R as sortCoins, S as FIATS, T as NETWORKS, a as fiatSign, c as useEnter, f as passwordReady, g as authClient, h as useCurrentUserState, i as fiatAmt, m as useSite, o as num, s as numFlex, x as Empty, y as Button, z as useDesk } from "./router-DKF0ET_M.mjs";
import { i as TradeSheet, n as KycSheet, t as KycForm } from "./trade-DVp5vyKx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/screens-DiUW7-7j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AccountPanel() {
	const { s } = useSite();
	const { user, isPending } = useCurrentUserState();
	const sessionId = useEnter((state) => state.sessionId);
	const account = useEnter((state) => state.accounts.find((item) => item.id === state.sessionId) ?? null);
	const setPassword = useEnter((state) => state.setPassword);
	const leave = useEnter((state) => state.leave);
	const [phoneNext, setPhoneNext] = (0, import_react.useState)("");
	const [emailNext, setEmailNext] = (0, import_react.useState)("");
	const [current, setCurrent] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	async function savePhone(event) {
		event.preventDefault();
		if (!passwordReady(phoneNext)) return;
		const ok = await setPassword(phoneNext);
		setNote(ok ? s.account.saved : s.account.bad);
		if (ok) setPhoneNext("");
	}
	async function saveEmail(event) {
		event.preventDefault();
		if (!passwordReady(emailNext) || !current) return;
		if ((await authClient.changePassword({
			currentPassword: current,
			newPassword: emailNext,
			revokeOtherSessions: true
		})).error) {
			setNote(s.account.bad);
			return;
		}
		setNote(s.account.saved);
		setEmailNext("");
		setCurrent("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		className: "grid gap-3 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold",
				children: s.account.title
			}),
			isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "…"
			}) : null,
			!isPending && !user && !account ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					s.account.guest,
					" · ",
					s.account.none,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "font-semibold text-primary",
						children: s.nav.enter
					})
				]
			}) : null,
			user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					s.account.member,
					" · ",
					s.account.email,
					" · ",
					user.primaryEmail ?? user.displayName
				]
			}) : null,
			account ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					s.account.member,
					" · ",
					s.account.phone,
					" · +",
					account.dial,
					" ",
					account.national,
					account.password ? "" : ` · ${s.account.set}`
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: s.account.deskRole
			}),
			account && !account.password ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-2",
				onSubmit: savePhone,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: s.account.set
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						type: "password",
						autoComplete: "new-password",
						value: phoneNext,
						onChange: (event) => setPhoneNext(event.target.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "min-h-11 rounded-md bg-primary text-sm font-semibold text-primary-fg",
					children: s.account.save
				})]
			}) : null,
			user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-2",
				onSubmit: saveEmail,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: s.account.change
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						type: "password",
						autoComplete: "current-password",
						placeholder: s.account.current,
						value: current,
						onChange: (event) => setCurrent(event.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						type: "password",
						autoComplete: "new-password",
						placeholder: s.account.next,
						value: emailNext,
						onChange: (event) => setEmailNext(event.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "min-h-11 rounded-md border border-line text-sm font-semibold",
						children: s.account.save
					})
				]
			}) : null,
			sessionId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-11 text-start text-sm font-semibold",
				onClick: leave,
				children: s.account.leave
			}) : null,
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: note
			}) : null
		]
	});
}
var OPEN = [
	"created",
	"paid",
	"disputed"
];
function OrdersScreen() {
	const { lang, t } = useI18n();
	const meId = useDesk((state) => state.meId);
	const users = useDesk((state) => state.users);
	const orders = useDesk((state) => state.orders);
	const me = users.find((user) => user.id === meId);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const mine = orders.filter((order) => me?.isAdmin || order.buyerId === meId || order.sellerId === meId);
	const rows = filter === "all" ? mine : mine.filter((order) => order.status === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: t("orders.title"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-2 overflow-x-auto",
			children: [
				"all",
				"created",
				"paid",
				"released",
				"disputed",
				"cancelled"
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `min-h-11 shrink-0 rounded-md px-3 text-sm font-semibold ${filter === item ? "bg-primary text-primary-fg" : "bg-surface text-fg"}`,
				onClick: () => setFilter(item),
				children: item === "all" ? t("common.all") : t(`status.${item}`)
			}, item))
		}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { children: t("orders.empty") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-2",
			children: rows.map((order) => {
				const otherId = order.buyerId === meId ? order.sellerId : order.buyerId;
				const other = users.find((user) => user.id === otherId);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/order/$orderId",
					params: { orderId: order.id },
					className: "grid gap-1 rounded-md border border-line bg-surface p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold",
							children: [
								order.coin,
								" · ",
								fiatAmt(order.fiatTotal, order.fiat, lang)
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: t(`status.${order.status}`)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							order.buyerId === meId ? t("orders.youBuy") : order.sellerId === meId ? t("orders.youSell") : t("common.view"),
							" · ",
							other ? personName(other.name, lang) : "",
							" · ",
							numFlex(order.gross, lang),
							" ",
							order.coin
						]
					})]
				}, order.id);
			})
		})]
	});
}
function WalletScreen() {
	const { lang, t } = useI18n();
	const meId = useDesk((state) => state.meId);
	const users = useDesk((state) => state.users);
	const coins = useDesk((state) => state.coins);
	const quotes = useDesk((state) => state.quotes);
	const ads = useDesk((state) => state.ads);
	const orders = useDesk((state) => state.orders);
	const withdrawals = useDesk((state) => state.withdrawals);
	const settings = useDesk((state) => state.settings);
	const requestWithdraw = useDesk((state) => state.requestWithdraw);
	const practiceCredit = useDesk((state) => state.practiceCredit);
	const me = users.find((user) => user.id === meId);
	const [coin, setCoin] = (0, import_react.useState)("ORB");
	const [amount, setAmount] = (0, import_react.useState)("");
	const [address, setAddress] = (0, import_react.useState)("");
	const [network, setNetwork] = (0, import_react.useState)("mesh");
	if (!me) return null;
	const qty = Number(amount);
	const picked = coins.find((item) => item.symbol === coin);
	const sendsOff = picked?.withdrawals === false;
	const under = Number.isFinite(qty) && qty > 0 && qty < settings.threshold;
	const mode = !Number.isFinite(qty) || qty <= 0 ? null : under || qty < settings.threshold ? settings.underMode : settings.overMode;
	const ref = coins.reduce((sum, item) => sum + (me.balances[item.symbol] ?? 0) * (quotes[item.symbol] ?? item.price), 0);
	const mine = withdrawals.filter((item) => item.userId === me.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: t("wallet.title"),
		sub: t("wallet.sub"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t("wallet.ref")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-3xl font-semibold tabular-nums",
						children: fiatAmt(ref, "USD", lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: t("wallet.limitIs", { n: numFlex(settings.threshold, lang) })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: sortCoins(coins).map((item) => {
					const free = me.balances[item.symbol] ?? 0;
					const inAds = ads.filter((ad) => ad.userId === me.id && ad.side === "sell" && ad.coin === item.symbol).reduce((sum, ad) => sum + ad.available, 0);
					const inOrders = orders.filter((order) => order.sellerId === me.id && order.coin === item.symbol && OPEN.includes(order.status)).reduce((sum, order) => sum + order.escrow, 0);
					const pendingOut = mine.filter((row) => row.coin === item.symbol && row.status === "pending_admin").reduce((sum, row) => sum + row.amount, 0);
					const label = coinLabel(item.symbol, lang);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						className: "grid gap-2 p-3 sm:grid-cols-[1fr_auto] sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: item.symbol
							}), label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ms-2 text-sm text-muted",
								children: label
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ms-2 text-sm text-muted",
								children: t("admin.newCoin")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								t("wallet.free"),
								" ",
								numFlex(free, lang),
								" · ",
								t("wallet.inAds"),
								" ",
								numFlex(inAds, lang),
								" · ",
								t("wallet.inOrders"),
								" ",
								numFlex(inOrders, lang),
								" · ",
								t("wallet.pendingOut"),
								" ",
								numFlex(pendingOut, lang)
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "line",
							disabled: item.deposits === false,
							onClick: () => practiceCredit(item.symbol),
							children: item.deposits === false ? t("admin.off") : t("wallet.topupGo")
						})]
					}, item.symbol);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: t("wallet.topupNote")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid gap-3 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: t("wallet.withdraw")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t("wallet.policy")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("common.coin"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: fieldClass,
							value: coin,
							onChange: (event) => setCoin(event.target.value),
							children: coins.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item.symbol,
								children: item.symbol
							}, item.symbol))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("wallet.amount"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "decimal",
							value: amount,
							onChange: (event) => setAmount(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("wallet.address"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							placeholder: t("wallet.addressPh"),
							value: address,
							onChange: (event) => setAddress(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("wallet.network"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: fieldClass,
							value: network,
							onChange: (event) => setNetwork(event.target.value),
							children: NETWORKS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item,
								children: t(`net.${item}`)
							}, item))
						})
					}),
					mode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: mode === "automatic" ? t("wallet.previewAuto") : t("wallet.previewManual")
					}) : null,
					sendsOff ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t("err.coinOff")
					}) : null,
					picked?.minWithdraw ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							t("admin.minOut"),
							": ",
							numFlex(picked.minWithdraw, lang),
							" ",
							picked.symbol
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						disabled: sendsOff,
						onClick: () => {
							if (requestWithdraw(coin, qty, address, network)) {
								setAmount("");
								setAddress("");
							}
						},
						children: t("wallet.withdraw")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold",
				children: t("wallet.history")
			}),
			mine.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { children: t("wallet.empty") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: mine.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "p-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-semibold",
						children: [
							numFlex(row.amount, lang),
							" ",
							row.coin,
							" · ",
							t(`status.${row.status}`)
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted",
						children: [
							t(`net.${row.network}`),
							" · ",
							row.address
						]
					})]
				}, row.id))
			})
		]
	});
}
function ExpressScreen() {
	const { lang, t } = useI18n();
	const users = useDesk((state) => state.users);
	const ads = useDesk((state) => state.ads);
	const coins = useDesk((state) => state.coins);
	const quotes = useDesk((state) => state.quotes);
	const passes = useDesk((state) => state.passes);
	const kycs = useDesk((state) => state.kycs);
	const settings = useDesk((state) => state.settings);
	const meId = useDesk((state) => state.meId);
	const [side, setSide] = (0, import_react.useState)("buy");
	const [unit, setUnit] = (0, import_react.useState)("fiat");
	const [coin, setCoin] = (0, import_react.useState)("USDT");
	const [fiat, setFiat] = (0, import_react.useState)("INR");
	const [amount, setAmount] = (0, import_react.useState)("1000");
	const [skipKyc, setSkipKyc] = (0, import_react.useState)(true);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [kyc, setKyc] = (0, import_react.useState)(false);
	const listed = sortCoins(coins.filter((item) => item.listed));
	const me = users.find((user) => user.id === meId);
	const typed = Number(amount);
	const best = (0, import_react.useMemo)(() => {
		const wantSide = side === "buy" ? "sell" : "buy";
		return ads.filter((ad) => {
			if (ad.paused || ad.side !== wantSide || ad.coin !== coin || ad.fiat !== fiat || ad.userId === meId) return false;
			const merchant = users.find((user) => user.id === ad.userId);
			if (!merchant || !merchantLive(merchant)) return false;
			if ((me?.blocked ?? []).includes(merchant.id) || (merchant.blocked ?? []).includes(meId)) return false;
			if (skipKyc && ad.needKyc) return false;
			const live = adPrice(ad, quotes, coins.find((item) => item.symbol === ad.coin)?.price);
			if (!(live > 0) || !Number.isFinite(typed) || !(typed > 0)) return true;
			const gross = unit === "fiat" ? typed / live : typed;
			return gross >= ad.min && gross <= Math.min(ad.max, ad.available);
		}).sort((a, b) => {
			const ao = users.find((user) => user.id === a.userId)?.online ? 0 : 1;
			const bo = users.find((user) => user.id === b.userId)?.online ? 0 : 1;
			if (ao !== bo) return ao - bo;
			const pa = adPrice(a, quotes, coins.find((item) => item.symbol === a.coin)?.price);
			const pb = adPrice(b, quotes, coins.find((item) => item.symbol === b.coin)?.price);
			return side === "buy" ? pa - pb : pb - pa;
		})[0];
	}, [
		ads,
		coin,
		coins,
		fiat,
		me,
		meId,
		quotes,
		side,
		skipKyc,
		typed,
		unit,
		users
	]);
	const live = best ? adPrice(best, quotes, coins.find((item) => item.symbol === best.coin)?.price) : 0;
	const gross = best && Number.isFinite(typed) && typed > 0 ? unit === "fiat" ? typed / (live || 1) : typed : best?.min ?? 0;
	const fiatPay = roundPay(gross * live);
	const fees = computeFees(Number.isFinite(gross) ? gross : 0, settings);
	const merchant = users.find((user) => user.id === best?.userId);
	const pass = merchant ? passes.some((item) => item.buyerId === meId && item.sellerId === merchant.id && item.status === "active") : false;
	const pending = merchant ? kycs.some((item) => item.userId === meId && item.sellerId === merchant.id && item.purpose === "buyer" && item.status === "pending") : false;
	const canSell = !!me && merchantLive(me);
	const press = (digit) => {
		setAmount((current) => {
			if (digit === "back") return current.slice(0, -1);
			if (digit === "." && current.includes(".")) return current;
			if (current.length > 10) return current;
			return `${current}${digit}`;
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: t("express.title"),
		sub: t("express.sub"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid gap-3 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-1 rounded-md bg-surface-2 p-1",
						children: ["buy", "sell"].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `min-h-11 rounded-md text-sm font-semibold ${side === item ? item === "buy" ? "bg-buy text-buy-fg" : "bg-sell text-sell-fg" : "text-muted"}`,
							onClick: () => setSide(item),
							children: item === "buy" ? t("express.buySide") : t("express.sellSide")
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto",
						children: listed.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `min-h-11 shrink-0 rounded-md px-3 text-sm font-semibold ${coin === item.symbol ? "bg-primary text-primary-fg" : "bg-surface-2"}`,
							onClick: () => setCoin(item.symbol),
							children: item.symbol
						}, item.symbol))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("common.fiat"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: fieldClass,
								value: fiat,
								onChange: (event) => setFiat(event.target.value),
								children: FIATS.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: code,
									children: t(`fiatName.${code}`)
								}, code))
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("express.unitFiat"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: fieldClass,
								value: unit,
								onChange: (event) => setUnit(event.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "fiat",
									children: t("express.unitFiat")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "coin",
									children: t("express.unitCoin")
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: unit === "fiat" ? t("express.pay") : t("express.unitCoin"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "decimal",
							value: amount,
							onChange: (event) => setAmount(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2",
						children: [
							"1",
							"2",
							"3",
							"4",
							"5",
							"6",
							"7",
							"8",
							"9",
							".",
							"0",
							"back"
						].map((digit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 rounded-md bg-surface-2 text-sm font-semibold",
							onClick: () => press(digit),
							children: digit === "back" ? t("common.back") : digit
						}, digit))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "size-4",
							checked: skipKyc,
							onChange: (event) => setSkipKyc(event.target.checked)
						}), t("express.skipId")]
					}),
					best && merchant ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: t("express.best")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: personName(merchant.name, lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-2xl font-semibold tabular-nums",
								children: fiatAmt(live, best.fiat, lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								side === "buy" ? t("express.pay") : t("express.unitCoin"),
								": ",
								side === "buy" ? fiatAmt(fiatPay, best.fiat, lang) : `${numFlex(gross, lang)} ${coin}`
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								side === "buy" ? t("express.youGet") : t("express.pay"),
								": ",
								side === "buy" ? `${numFlex(Math.max(0, gross - fees.buyerFee), lang)} ${coin}` : fiatAmt(fiatPay, best.fiat, lang)
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								t("express.fee"),
								": ",
								numFlex(side === "buy" ? fees.buyerFee : fees.sellerFee, lang),
								" ",
								coin
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								t("express.window"),
								": ",
								t("common.minutes", { n: best.payMin ?? 15 })
							] }),
							side === "sell" && !canSell ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/identity",
								className: "inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-fg",
								children: t("nav.identity")
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: side === "buy" ? "buy" : "sell",
								disabled: side === "buy" && pending,
								onClick: () => {
									if (side === "sell" || pass) setOpen(true);
									else setKyc(true);
								},
								children: side === "sell" || pass ? t("express.go") : pending ? t("market.waiting") : t("market.verify")
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { children: t("express.none") })
				]
			}),
			open && best ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TradeSheet, {
				ad: best,
				preset: Number(gross.toFixed(4)),
				onClose: () => setOpen(false)
			}) : null,
			kyc && merchant ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KycSheet, {
				sellerId: merchant.id,
				title: t("trade.kycTitle"),
				note: t("trade.needPass", { name: personName(merchant.name, lang) }),
				onClose: () => setKyc(false)
			}) : null
		]
	});
}
function roundPay(n) {
	return Math.round(n * 100) / 100;
}
function PostScreen() {
	const { lang, t } = useI18n();
	const meId = useDesk((state) => state.meId);
	const users = useDesk((state) => state.users);
	const coins = useDesk((state) => state.coins);
	const ads = useDesk((state) => state.ads);
	const payments = useDesk((state) => state.payments);
	const postAd = useDesk((state) => state.postAd);
	const toggleAd = useDesk((state) => state.toggleAd);
	const closeAd = useDesk((state) => state.closeAd);
	const takeBreak = useDesk((state) => state.takeBreak);
	const quotes = useDesk((state) => state.quotes);
	const me = users.find((user) => user.id === meId);
	const mineRails = payments.filter((item) => item.userId === meId);
	const [side, setSide] = (0, import_react.useState)("sell");
	const [coin, setCoin] = (0, import_react.useState)("USDT");
	const [fiat, setFiat] = (0, import_react.useState)("INR");
	const [price, setPrice] = (0, import_react.useState)("100");
	const [min, setMin] = (0, import_react.useState)("1");
	const [max, setMax] = (0, import_react.useState)("20");
	const [inventory, setInventory] = (0, import_react.useState)("50");
	const [rails, setRails] = (0, import_react.useState)(mineRails[0] ? [mineRails[0].rail] : []);
	const [terms, setTerms] = (0, import_react.useState)("");
	const [priceMode, setPriceMode] = (0, import_react.useState)("fixed");
	const [margin, setMargin] = (0, import_react.useState)("100");
	const [payMin, setPayMin] = (0, import_react.useState)(15);
	const [autoReply, setAutoReply] = (0, import_react.useState)("");
	const [needKyc, setNeedKyc] = (0, import_react.useState)(false);
	const [minComp, setMinComp] = (0, import_react.useState)("0");
	const mine = ads.filter((ad) => ad.userId === meId);
	if (!me) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: t("ads.title"),
		sub: t("ads.sub"),
		children: [
			!merchantLive(me) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid gap-3 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("ads.needLicense") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/identity",
					className: "text-sm font-semibold text-primary",
					children: t("nav.identity")
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-3 rounded-md border border-line bg-surface p-4",
				onSubmit: (event) => {
					event.preventDefault();
					if (postAd({
						side,
						coin,
						fiat,
						price: Number(price),
						min: Number(min),
						max: Number(max),
						inventory: Number(inventory),
						rails,
						terms,
						priceMode,
						margin: Number(margin),
						payMin,
						autoReply,
						needKyc,
						minComp: Number(minComp)
					})) setTerms("");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: ["sell", "buy"].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `min-h-11 rounded-md text-sm font-semibold ${side === item ? "bg-primary text-primary-fg" : "bg-surface-2"}`,
							onClick: () => setSide(item),
							children: t(`side.${item}`)
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("common.coin"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: fieldClass,
							value: coin,
							onChange: (event) => setCoin(event.target.value),
							children: sortCoins(coins.filter((item) => item.listed)).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: item.symbol,
								children: [
									item.symbol,
									" ",
									coinLabel(item.symbol, lang)
								]
							}, item.symbol))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("common.fiat"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: fieldClass,
							value: fiat,
							onChange: (event) => setFiat(event.target.value),
							children: FIATS.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: code,
								children: t(`fiatName.${code}`)
							}, code))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("ads.mode"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: fieldClass,
							value: priceMode,
							onChange: (event) => setPriceMode(event.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "fixed",
								children: t("ads.fixed")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "float",
								children: t("ads.float")
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("ads.price"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "decimal",
							value: price,
							onChange: (event) => setPrice(event.target.value)
						})
					}),
					priceMode === "float" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("ads.margin"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "decimal",
							value: margin,
							onChange: (event) => setMargin(event.target.value)
						})
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("ads.window"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: fieldClass,
							value: payMin,
							onChange: (event) => setPayMin(Number(event.target.value)),
							children: [
								15,
								30,
								60
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item,
								children: t("common.minutes", { n: item })
							}, item))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: t("ads.min"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: fieldClass,
									inputMode: "decimal",
									value: min,
									onChange: (event) => setMin(event.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: t("ads.max"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: fieldClass,
									inputMode: "decimal",
									value: max,
									onChange: (event) => setMax(event.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: t("ads.inventory"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: fieldClass,
									inputMode: "decimal",
									value: inventory,
									onChange: (event) => setInventory(event.target.value)
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "grid gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "text-sm font-medium text-muted",
								children: t("ads.rails")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: t("ads.railsCap")
							}),
							mineRails.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/payments",
								className: "text-sm font-semibold text-primary",
								children: t("pay.need")
							}) : RAILS.filter((rail) => mineRails.some((item) => item.rail === rail)).map((rail) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex min-h-11 items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: rails.includes(rail),
									onChange: (event) => setRails((current) => {
										if (!event.target.checked) return current.filter((item) => item !== rail);
										if (current.includes(rail) || current.length >= 5) return current;
										return [...current, rail];
									})
								}), t(`rail.${rail}`)]
							}, rail))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("ads.auto"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "w-full rounded-md border border-line bg-bg px-3 py-2 text-sm text-fg",
							rows: 2,
							placeholder: t("ads.autoPh"),
							value: autoReply,
							onChange: (event) => setAutoReply(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("ads.minComp"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "numeric",
							value: minComp,
							onChange: (event) => setMinComp(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "size-4",
							checked: needKyc,
							onChange: (event) => setNeedKyc(event.target.checked)
						}), t("ads.needId")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("common.terms"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "w-full rounded-md border border-line bg-bg px-3 py-2 text-sm text-fg",
							rows: 4,
							placeholder: t("ads.termsPh"),
							value: terms,
							onChange: (event) => setTerms(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: t("ads.title")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-semibold",
					children: t("ads.my")
				}), mine.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "line",
					onClick: () => takeBreak(),
					children: t("ads.break")
				}) : null]
			}),
			mine.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { children: t("ads.empty") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: mine.map((ad) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "grid gap-3 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold",
							children: [
								t(`side.${ad.side}`),
								" ",
								ad.coin,
								" · ",
								fiatSign(ad.fiat),
								num(adPrice(ad, quotes, coins.find((item) => item.symbol === ad.coin)?.price), lang),
								ad.priceMode === "float" ? ` · ${t("ads.float")}` : ""
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								numFlex(ad.available, lang),
								" · ",
								ad.paused ? t("status.suspended") : t("status.active"),
								" · ",
								t("common.minutes", { n: ad.payMin ?? 15 })
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "line",
								onClick: () => toggleAd(ad.id),
								children: ad.paused ? t("ads.resume") : t("ads.pause")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "soft",
								onClick: () => closeAd(ad.id),
								children: t("ads.close")
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdEditor, { ad })]
				}, ad.id))
			})
		]
	});
}
function AdEditor({ ad }) {
	const { t } = useI18n();
	const payments = useDesk((state) => state.payments);
	const editAd = useDesk((state) => state.editAd);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [price, setPrice] = (0, import_react.useState)(String(ad.price));
	const [min, setMin] = (0, import_react.useState)(String(ad.min));
	const [max, setMax] = (0, import_react.useState)(String(ad.max));
	const [terms, setTerms] = (0, import_react.useState)(ad.terms === "__default__" ? "" : ad.terms);
	const [priceMode, setPriceMode] = (0, import_react.useState)(ad.priceMode ?? "fixed");
	const [margin, setMargin] = (0, import_react.useState)(String(ad.margin ?? 100));
	const [payMin, setPayMin] = (0, import_react.useState)(ad.payMin ?? 15);
	const [autoReply, setAutoReply] = (0, import_react.useState)(ad.autoReply ?? "");
	const [needKyc, setNeedKyc] = (0, import_react.useState)(!!ad.needKyc);
	const [minComp, setMinComp] = (0, import_react.useState)(String(ad.minComp ?? 0));
	const [rails, setRails] = (0, import_react.useState)(ad.rails);
	const mineRails = payments.filter((item) => item.userId === ad.userId);
	if (!open) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "line",
		onClick: () => setOpen(true),
		children: t("ads.edit")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-3 border-t border-line pt-3",
		onSubmit: (event) => {
			event.preventDefault();
			if (editAd(ad.id, {
				price: Number(price),
				min: Number(min),
				max: Number(max),
				terms,
				priceMode,
				margin: Number(margin),
				payMin,
				autoReply,
				needKyc,
				minComp: Number(minComp),
				rails
			})) setOpen(false);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("ads.mode"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: fieldClass,
					value: priceMode,
					onChange: (event) => setPriceMode(event.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "fixed",
						children: t("ads.fixed")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "float",
						children: t("ads.float")
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("ads.price"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "decimal",
							value: price,
							onChange: (event) => setPrice(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("ads.min"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "decimal",
							value: min,
							onChange: (event) => setMin(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("ads.max"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "decimal",
							value: max,
							onChange: (event) => setMax(event.target.value)
						})
					})
				]
			}),
			priceMode === "float" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("ads.margin"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: fieldClass,
					inputMode: "decimal",
					value: margin,
					onChange: (event) => setMargin(event.target.value)
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("ads.window"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: fieldClass,
					value: payMin,
					onChange: (event) => setPayMin(Number(event.target.value)),
					children: [
						15,
						30,
						60
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item,
						children: t("common.minutes", { n: item })
					}, item))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "text-sm font-medium text-muted",
					children: t("ads.rails")
				}), RAILS.filter((rail) => mineRails.some((item) => item.rail === rail) || ad.rails.includes(rail)).map((rail) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-11 items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: rails.includes(rail),
						onChange: (event) => setRails((current) => {
							if (!event.target.checked) return current.filter((item) => item !== rail);
							if (current.includes(rail) || current.length >= 5) return current;
							return [...current, rail];
						})
					}), t(`rail.${rail}`)]
				}, rail))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("ads.auto"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: fieldClass,
					value: autoReply,
					onChange: (event) => setAutoReply(event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("ads.minComp"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: fieldClass,
					inputMode: "numeric",
					value: minComp,
					onChange: (event) => setMinComp(event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex min-h-11 items-center gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					className: "size-4",
					checked: needKyc,
					onChange: (event) => setNeedKyc(event.target.checked)
				}), t("ads.needId")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("common.terms"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "w-full rounded-md border border-line bg-bg px-3 py-2 text-sm text-fg",
					rows: 3,
					value: terms,
					onChange: (event) => setTerms(event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: t("common.save")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "line",
					onClick: () => setOpen(false),
					children: t("common.cancel")
				})]
			})
		]
	});
}
function PassesScreen() {
	const { lang, t } = useI18n();
	const meId = useDesk((state) => state.meId);
	const users = useDesk((state) => state.users);
	const passes = useDesk((state) => state.passes);
	const kycs = useDesk((state) => state.kycs);
	const reviewBuyerKyc = useDesk((state) => state.reviewBuyerKyc);
	const revokePass = useDesk((state) => state.revokePass);
	const flash = useDesk((state) => state.flash);
	const me = users.find((user) => user.id === meId);
	if (!me) return null;
	const held = passes.filter((item) => item.buyerId === me.id);
	const pending = kycs.filter((item) => item.sellerId === me.id && item.purpose === "buyer" && item.status === "pending");
	const issued = passes.filter((item) => item.sellerId === me.id && item.status === "active");
	const nameOf = (id) => {
		const user = users.find((item) => item.id === id);
		return user ? personName(user.name, lang) : "";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: t("pass.title"),
		sub: t("pass.sub"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid gap-2 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-semibold",
					children: t("pass.merchantLicense")
				}), me.sellerLicense ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-2xl",
						children: me.sellerLicense.code
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t(`status.${me.sellerLicense.status === "active" ? "active" : "suspended"}`)
					}),
					me.sellerLicense.status === "suspended" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: t("pass.suspended")
					}) : null
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: t("pass.noneLicense")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold",
				children: t("pass.yourPasses")
			}),
			held.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { children: t("pass.emptyHeld") }) : held.map((pass) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid gap-1 p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xl",
						children: pass.code
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [
							t("pass.by"),
							": ",
							nameOf(pass.sellerId)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: pass.status === "active" ? t("pass.permanent") : t("pass.revokedNote")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "line",
						onClick: () => {
							navigator.clipboard?.writeText(pass.code);
							flash("common.copied");
						},
						children: t("common.copy")
					})
				]
			}, pass.id)),
			merchantLive(me) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-semibold",
					children: t("pass.issued")
				}),
				pending.length === 0 && issued.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { children: t("pass.emptyIssued") }) : null,
				pending.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "grid gap-2 p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: item.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								t(`doc.${item.docType}`),
								item.taxKind ? ` · ${t(`tax.${item.taxKind}`)}` : "",
								" · ",
								item.last4
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: t(`country.${item.country}`)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => reviewBuyerKyc(item.id, true),
								children: t("pass.grant")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "line",
								onClick: () => reviewBuyerKyc(item.id, false),
								children: t("pass.deny")
							})]
						})
					]
				}, item.id)),
				issued.map((pass) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "flex flex-wrap items-center justify-between gap-2 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-lg",
						children: pass.code
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							t("pass.holder"),
							": ",
							nameOf(pass.buyerId)
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "soft",
						onClick: () => revokePass(pass.id),
						children: t("common.revoke")
					})]
				}, pass.id))
			] }) : null
		]
	});
}
function PaymentsScreen() {
	const { t } = useI18n();
	const meId = useDesk((state) => state.meId);
	const payments = useDesk((state) => state.payments);
	const addPayment = useDesk((state) => state.addPayment);
	const removePayment = useDesk((state) => state.removePayment);
	const [rail, setRail] = (0, import_react.useState)("upi");
	const [label, setLabel] = (0, import_react.useState)("");
	const [details, setDetails] = (0, import_react.useState)("");
	const mine = payments.filter((item) => item.userId === meId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: t("pay.title"),
		sub: t("pay.sub"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-3 rounded-md border border-line bg-surface p-4",
				onSubmit: (event) => {
					event.preventDefault();
					if (addPayment(rail, label, details)) {
						setLabel("");
						setDetails("");
					}
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("pay.rail"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: fieldClass,
							value: rail,
							onChange: (event) => setRail(event.target.value),
							children: RAILS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: item,
								children: t(`rail.${item}`)
							}, item))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("pay.label"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							value: label,
							onChange: (event) => setLabel(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("pay.details"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							placeholder: t("pay.detailsPh"),
							value: details,
							onChange: (event) => setDetails(event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: t("pay.add")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold",
				children: t("pay.saved")
			}),
			mine.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { children: t("pay.empty") }) : mine.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "flex flex-wrap items-center justify-between gap-2 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: item.label || t(`rail.${item.rail}`)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-sm",
					children: item.details
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "line",
					onClick: () => removePayment(item.id),
					children: t("pay.remove")
				})]
			}, item.id))
		]
	});
}
function IdentityScreen() {
	const { t } = useI18n();
	const meId = useDesk((state) => state.meId);
	const users = useDesk((state) => state.users);
	const kycs = useDesk((state) => state.kycs);
	const me = users.find((user) => user.id === meId);
	if (!me) return null;
	const latest = kycs.find((item) => item.userId === me.id && item.purpose === "seller");
	const live = me.sellerLicense?.status === "active";
	const level = live ? "levelMerchant" : latest?.status === "pending" ? "levelPending" : latest?.status === "rejected" ? "levelRejected" : "levelNone";
	const showForm = !live && latest?.status !== "pending";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: t("kyc.title"),
		sub: t("kyc.sellerSub"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid gap-2 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t("kyc.held")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl font-semibold",
						children: t(`kyc.${level}`)
					}),
					me.sellerLicense ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-2xl",
						children: me.sellerLicense.code
					}) : null,
					me.sellerLicense ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: me.sellerLicense.status === "active" ? t("common.active") : t("status.suspended")
					}) : null,
					!me.sellerLicense && !latest ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t("kyc.none")
					}) : null
				]
			}),
			latest ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid gap-2 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: latest.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							t(`country.${latest.country}`),
							" · ",
							t(`doc.${latest.docType}`),
							" · ",
							latest.last4,
							" · ",
							t(`kyc.${latest.status === "pending" ? "pendingAdmin" : latest.status}`)
						]
					}),
					latest.reason ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [
							t("kyc.why"),
							": ",
							t(`kyc.reasons.${latest.reason}`)
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "grid gap-1 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								t("kyc.front"),
								": ",
								latest.front ? t("kyc.attached") : t("kyc.missing")
							] }),
							latest.docType !== "passport" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								t("kyc.back"),
								": ",
								latest.back ? t("kyc.attached") : t("kyc.missing")
							] }) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								t("kyc.selfie"),
								": ",
								latest.selfie ? t("kyc.attached") : t("kyc.missing")
							] })
						]
					})
				]
			}) : null,
			showForm ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KycForm, { purpose: "seller" }) : null
		]
	});
}
function GuideScreen() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		title: t("help.title"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: [
				"a",
				"b",
				"c",
				"d",
				"e",
				"f"
			].map((key, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid gap-1 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-primary",
						children: index + 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold",
						children: t(`help.${key}T`)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted",
						children: t(`help.${key}B`)
					})
				]
			}, key))
		})
	});
}
function PeopleList({ title, ids, users, lang, empty, onToggle, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		className: "grid gap-2 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-semibold",
			children: title
		}), ids.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: empty
		}) : ids.map((id) => {
			const user = users.find((item) => item.id === id);
			if (!user) return null;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: personName(user.name, lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "line",
					onClick: () => onToggle(id),
					children: action
				})]
			}, id);
		})]
	});
}
function ProfileScreen() {
	const { lang, t } = useI18n();
	const meId = useDesk((state) => state.meId);
	const users = useDesk((state) => state.users);
	const setMe = useDesk((state) => state.setMe);
	const reset = useDesk((state) => state.reset);
	const [arm, setArm] = (0, import_react.useState)(false);
	const me = users.find((user) => user.id === meId);
	if (!me) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: t("profile.title"),
		sub: t("profile.seat"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountPanel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid gap-1 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t("profile.acting")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl font-semibold",
						children: personName(me.name, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t(`role.${roleOf(me)}`)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeopleList, {
				title: t("profile.following"),
				ids: me.following ?? [],
				users,
				lang,
				empty: t("profile.noneList"),
				onToggle: (id) => useDesk.getState().toggleFollow(id),
				action: t("trade.unfollow")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeopleList, {
				title: t("profile.blocked"),
				ids: me.blocked ?? [],
				users,
				lang,
				empty: t("profile.noneList"),
				onToggle: (id) => useDesk.getState().toggleBlock(id),
				action: t("trade.unblock")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold",
				children: t("profile.switch")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: users.map((user) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: `flex min-h-11 items-center justify-between rounded-md border px-3 py-2 text-start ${user.id === me.id ? "border-primary bg-surface" : "border-line bg-surface"}`,
					onClick: () => setMe(user.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: personName(user.name, lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: t(`role.${roleOf(user)}`)
					})]
				}, user.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid gap-3 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: t("profile.reset")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t("profile.resetWarn")
					}),
					arm ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "sell",
							onClick: () => {
								reset();
								setArm(false);
							},
							children: t("profile.resetDo")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "line",
							onClick: () => setArm(false),
							children: t("common.cancel")
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "line",
						onClick: () => setArm(true),
						children: t("profile.reset")
					})
				]
			})
		]
	});
}
//#endregion
export { PassesScreen as a, ProfileScreen as c, OrdersScreen as i, WalletScreen as l, GuideScreen as n, PaymentsScreen as o, IdentityScreen as r, PostScreen as s, ExpressScreen as t };
