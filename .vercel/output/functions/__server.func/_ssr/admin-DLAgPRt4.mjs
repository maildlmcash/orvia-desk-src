import { o as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as useI18n, C as Field, D as Panel, E as Page, I as personName, L as roleOf, M as coinLabel, P as fieldClass, s as numFlex, x as Empty, y as Button, z as useDesk } from "./router-DKF0ET_M.mjs";
import { a as ResponsiveContainer, i as Bar, n as YAxis, o as Tooltip, r as XAxis, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DLAgPRt4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tabs = [
	"overview",
	"fees",
	"withdrawals",
	"identity",
	"coins",
	"controls",
	"orders",
	"users"
];
function AdminScreen() {
	const { lang, t } = useI18n();
	const meId = useDesk((state) => state.meId);
	const users = useDesk((state) => state.users);
	const setMe = useDesk((state) => state.setMe);
	const me = users.find((user) => user.id === meId);
	const [tab, setTab] = (0, import_react.useState)("overview");
	if (!me) return null;
	if (!me.isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		title: t("admin.title"),
		sub: t("admin.gate"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			onClick: () => {
				setMe("u-admin");
			},
			children: t("admin.switch")
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: t("admin.title"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto",
				children: tabs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `min-h-11 shrink-0 rounded-md px-3 text-sm font-semibold ${tab === item ? "bg-primary text-primary-fg" : "bg-surface text-fg"}`,
					onClick: () => setTab(item),
					children: t(`admin.${item}`)
				}, item))
			}),
			tab === "overview" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {}) : null,
			tab === "fees" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fees, {}) : null,
			tab === "withdrawals" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transfers, {}) : null,
			tab === "identity" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Identity, {}) : null,
			tab === "coins" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, {}) : null,
			tab === "controls" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controls, {}) : null,
			tab === "orders" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Orders, {}) : null,
			tab === "users" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(People, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "sr-only",
				children: lang
			})
		]
	});
}
function Overview() {
	const { lang, t } = useI18n();
	const orders = useDesk((state) => state.orders);
	const kycs = useDesk((state) => state.kycs);
	const withdrawals = useDesk((state) => state.withdrawals);
	const fees = useDesk((state) => state.fees);
	const treasury = useDesk((state) => state.treasury);
	const open = orders.filter((order) => order.status === "created" || order.status === "paid" || order.status === "disputed").length;
	const pendingKyc = kycs.filter((item) => item.purpose === "seller" && item.status === "pending").length;
	const pendingWd = withdrawals.filter((item) => item.status === "pending_admin").length;
	const data = Object.entries(fees.reduce((bag, fee) => {
		bag[fee.coin] = (bag[fee.coin] ?? 0) + fee.buyerFee + fee.sellerFee;
		return bag;
	}, {})).map(([coin, fee]) => ({
		coin,
		fee: Number(fee.toFixed(4))
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-2 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: t("admin.openOrders"),
					value: String(open)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: t("admin.pendingKyc"),
					value: String(pendingKyc)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: t("admin.pendingWd"),
					value: String(pendingWd)
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			className: "p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-semibold",
					children: t("admin.treasury")
				}),
				Object.keys(treasury).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: t("admin.noTreasury")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-1 text-sm",
					children: Object.entries(treasury).map(([coin, amount]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between font-mono",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: coin }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: numFlex(amount, lang) })]
					}, coin))
				}),
				data.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 h-48 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeeChart, { data })
				}) : null
			]
		})]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		className: "p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-3xl font-semibold",
			children: value
		})]
	});
}
function FeeChart({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
			data,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "coin",
					stroke: "currentColor",
					fontSize: 12
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					stroke: "currentColor",
					fontSize: 12
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
					background: "var(--c-surface)",
					border: "1px solid var(--c-line)",
					color: "var(--c-fg)"
				} }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "fee",
					fill: "currentColor",
					radius: [
						4,
						4,
						0,
						0
					]
				})
			]
		})
	});
}
function Fees() {
	const { t } = useI18n();
	const settings = useDesk((state) => state.settings);
	const saveSettings = useDesk((state) => state.saveSettings);
	const [draft, setDraft] = (0, import_react.useState)(settings);
	const set = (key, value) => setDraft((current) => ({
		...current,
		[key]: value
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-3 rounded-md border border-line bg-surface p-4",
		onSubmit: (event) => {
			event.preventDefault();
			saveSettings(draft);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: t("admin.policy")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("mode.both"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: fieldClass,
					value: draft.feeMode,
					onChange: (event) => set("feeMode", event.target.value),
					children: [
						"percent",
						"fixed",
						"both"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item,
						children: t(`mode.${item}`)
					}, item))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("admin.buyerPercent"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "decimal",
							value: draft.buyerPercent,
							onChange: (event) => set("buyerPercent", Number(event.target.value))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("admin.sellerPercent"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "decimal",
							value: draft.sellerPercent,
							onChange: (event) => set("sellerPercent", Number(event.target.value))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("admin.buyerFixed"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "decimal",
							value: draft.buyerFixed,
							onChange: (event) => set("buyerFixed", Number(event.target.value))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("admin.sellerFixed"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "decimal",
							value: draft.sellerFixed,
							onChange: (event) => set("sellerFixed", Number(event.target.value))
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("admin.threshold"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: fieldClass,
					inputMode: "decimal",
					value: draft.threshold,
					onChange: (event) => set("threshold", Number(event.target.value))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("admin.under"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: fieldClass,
					value: draft.underMode,
					onChange: (event) => set("underMode", event.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "automatic",
						children: t("mode.automatic")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "manual",
						children: t("mode.manual")
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("admin.over"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: fieldClass,
					value: draft.overMode,
					onChange: (event) => set("overMode", event.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "automatic",
						children: t("mode.automatic")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "manual",
						children: t("mode.manual")
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: t("admin.sendBody")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				children: t("admin.save")
			})
		]
	});
}
function Transfers() {
	const { lang, t } = useI18n();
	const users = useDesk((state) => state.users);
	const withdrawals = useDesk((state) => state.withdrawals);
	const reviewWithdraw = useDesk((state) => state.reviewWithdraw);
	const queue = withdrawals.filter((item) => item.status === "pending_admin");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: t("admin.sendBody")
			}),
			queue.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { children: t("admin.queueEmpty") }) : null,
			withdrawals.map((row) => {
				const user = users.find((item) => item.id === row.userId);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "grid gap-2 p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-semibold",
							children: [
								user ? personName(user.name, lang) : "",
								" · ",
								numFlex(row.amount, lang),
								" ",
								row.coin
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								t(`status.${row.status}`),
								" · ",
								t(`net.${row.network}`),
								" · ",
								row.address
							]
						}),
						row.status === "pending_admin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => reviewWithdraw(row.id, true),
								children: t("admin.send")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "line",
								onClick: () => reviewWithdraw(row.id, false),
								children: t("admin.reject")
							})]
						}) : null
					]
				}, row.id);
			})
		]
	});
}
function Identity() {
	const { t } = useI18n();
	const users = useDesk((state) => state.users);
	const kycs = useDesk((state) => state.kycs);
	const reviewSellerKyc = useDesk((state) => state.reviewSellerKyc);
	const [reason, setReason] = (0, import_react.useState)("incomplete");
	const sellers = kycs.filter((item) => item.purpose === "seller");
	const buyers = kycs.filter((item) => item.purpose === "buyer");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold",
				children: t("admin.sellerQueue")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("kyc.why"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: fieldClass,
					value: reason,
					onChange: (event) => setReason(event.target.value),
					children: [
						"incomplete",
						"blur",
						"mismatch",
						"expired"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: item,
						children: t(`kyc.reasons.${item}`)
					}, item))
				})
			}),
			sellers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { children: t("admin.queueEmpty") }) : null,
			sellers.map((item) => {
				const user = users.find((person) => person.id === item.userId);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "grid gap-2 p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: item.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								user ? t(`country.${item.country}`) : "",
								" · ",
								t(`doc.${item.docType}`),
								item.taxKind ? ` · ${t(`tax.${item.taxKind}`)}` : "",
								" · ",
								item.last4,
								" · ",
								t(`kyc.${item.status === "pending" ? "pendingAdmin" : item.status}`)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								t("kyc.front"),
								": ",
								item.front ? t("kyc.attached") : t("kyc.missing"),
								" · ",
								t("kyc.back"),
								": ",
								item.back ? t("kyc.attached") : t("kyc.missing"),
								" · ",
								t("kyc.selfie"),
								":",
								" ",
								item.selfie ? t("kyc.attached") : t("kyc.missing")
							]
						}),
						item.reason ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: t(`kyc.reasons.${item.reason}`)
						}) : null,
						item.status === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => reviewSellerKyc(item.id, true),
								children: t("common.approve")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "line",
								onClick: () => reviewSellerKyc(item.id, false, reason),
								children: t("common.reject")
							})]
						}) : null
					]
				}, item.id);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold",
				children: t("pass.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: t("admin.merchantDecides")
			}),
			buyers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { children: t("admin.queueEmpty") }) : null,
			buyers.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "p-3 text-sm",
				children: [
					item.name,
					" · ",
					item.last4,
					" · ",
					item.status === "pending" ? t("common.pending") : t(`status.${item.status}`)
				]
			}, item.id))
		]
	});
}
function Coins() {
	const { t } = useI18n();
	const coins = useDesk((state) => state.coins);
	const addCoin = useDesk((state) => state.addCoin);
	const [symbol, setSymbol] = (0, import_react.useState)("");
	const [label, setLabel] = (0, import_react.useState)("");
	const [price, setPrice] = (0, import_react.useState)("1");
	const [minWithdraw, setMinWithdraw] = (0, import_react.useState)("1");
	const [deposits, setDeposits] = (0, import_react.useState)(true);
	const [withdrawals, setWithdrawals] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid gap-3 rounded-md border border-line bg-surface p-4",
			onSubmit: (event) => {
				event.preventDefault();
				if (addCoin({
					symbol,
					label,
					price: Number(price),
					minWithdraw: Number(minWithdraw),
					deposits,
					withdrawals
				})) {
					setSymbol("");
					setLabel("");
				}
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-semibold",
					children: t("admin.coinForm")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("admin.symbol"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: fieldClass,
								maxLength: 5,
								value: symbol,
								onChange: (event) => setSymbol(event.target.value.toUpperCase())
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("admin.coinName"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: fieldClass,
								value: label,
								onChange: (event) => setLabel(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("admin.refPrice"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: fieldClass,
								inputMode: "decimal",
								value: price,
								onChange: (event) => setPrice(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("admin.minOut"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: fieldClass,
								inputMode: "decimal",
								value: minWithdraw,
								onChange: (event) => setMinWithdraw(event.target.value)
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: deposits ? "primary" : "line",
						onClick: () => setDeposits((value) => !value),
						children: [
							t("admin.deposits"),
							": ",
							deposits ? t("admin.on") : t("admin.off")
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: withdrawals ? "primary" : "line",
						onClick: () => setWithdrawals((value) => !value),
						children: [
							t("admin.withdrawalsOn"),
							": ",
							withdrawals ? t("admin.on") : t("admin.off")
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					children: t("admin.saveCoin")
				})
			]
		}), coins.map((coin) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoinRow, { symbol: coin.symbol }, coin.symbol))]
	});
}
function CoinRow({ symbol }) {
	const { lang, t } = useI18n();
	const coin = useDesk((state) => state.coins.find((item) => item.symbol === symbol));
	const quotes = useDesk((state) => state.quotes);
	const updateCoin = useDesk((state) => state.updateCoin);
	const [price, setPrice] = (0, import_react.useState)(coin ? String(coin.price) : "");
	const [minWithdraw, setMinWithdraw] = (0, import_react.useState)(coin?.minWithdraw != null ? String(coin.minWithdraw) : "0");
	if (!coin) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		className: "grid gap-3 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono font-semibold",
					children: coin.symbol
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						coin.label || coinLabel(coin.symbol, lang) || t("admin.newCoin"),
						" · ",
						numFlex(quotes[coin.symbol] ?? coin.price, lang)
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "line",
					onClick: () => updateCoin(coin.symbol, { listed: !coin.listed }),
					children: coin.listed ? t("admin.unlist") : t("admin.list")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t("admin.refPrice"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						inputMode: "decimal",
						value: price,
						onChange: (event) => setPrice(event.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t("admin.minOut"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						inputMode: "decimal",
						value: minWithdraw,
						onChange: (event) => setMinWithdraw(event.target.value)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "line",
						onClick: () => updateCoin(coin.symbol, { deposits: coin.deposits === false }),
						children: [
							t("admin.deposits"),
							": ",
							coin.deposits === false ? t("admin.off") : t("admin.on")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "line",
						onClick: () => updateCoin(coin.symbol, { withdrawals: coin.withdrawals === false }),
						children: [
							t("admin.withdrawalsOn"),
							": ",
							coin.withdrawals === false ? t("admin.off") : t("admin.on")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => updateCoin(coin.symbol, {
							price: Number(price),
							minWithdraw: Number(minWithdraw)
						}),
						children: t("admin.saveCoin")
					})
				]
			})
		]
	});
}
function Controls() {
	const { lang, t } = useI18n();
	const users = useDesk((state) => state.users);
	const audits = useDesk((state) => state.audits);
	const deskOpen = useDesk((state) => state.settings.deskOpen);
	const setDeskOpen = useDesk((state) => state.setDeskOpen);
	const setSeat = useDesk((state) => state.setSeat);
	const open = deskOpen !== false;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid gap-3 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: t("admin.desk")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted",
						children: open ? t("admin.deskOpen") : t("admin.deskClosed")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: open ? "line" : "primary",
						onClick: () => setDeskOpen(!open),
						children: open ? t("admin.closeDesk") : t("admin.openDesk")
					}) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold",
				children: t("admin.seats")
			}),
			users.filter((user) => !user.isAdmin).map((user) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "flex flex-wrap items-center justify-between gap-2 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: personName(user.name, lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [t(`role.${roleOf(user)}`), user.withdrawHold ? ` · ${t("admin.holdOut")}` : ""]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "line",
						onClick: () => setSeat(user.id, { suspended: !user.suspended }),
						children: user.suspended ? t("admin.unfreeze") : t("admin.freeze")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "line",
						onClick: () => setSeat(user.id, { withdrawHold: !user.withdrawHold }),
						children: user.withdrawHold ? t("admin.releaseOut") : t("admin.holdOut")
					})]
				})]
			}, user.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold",
				children: t("admin.auditTitle")
			}),
			(audits ?? []).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { children: t("admin.auditEmpty") }) : null,
			(audits ?? []).map((row) => {
				const actor = users.find((user) => user.id === row.actorId);
				const seat = users.find((user) => user.id === row.detail);
				const detail = row.key === "admin.auditSeat" ? seat ? personName(seat.name, lang) : row.detail : row.key === "admin.auditDesk" ? row.detail === "open" ? t("admin.openDesk") : t("admin.closeDesk") : row.detail;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "p-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(row.key, { detail }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: actor ? personName(actor.name, lang) : ""
					})]
				}, row.id);
			})
		]
	});
}
function Orders() {
	const { lang, t } = useI18n();
	const orders = useDesk((state) => state.orders);
	const users = useDesk((state) => state.users);
	const release = useDesk((state) => state.release);
	const cancelOrder = useDesk((state) => state.cancelOrder);
	const open = [
		"created",
		"paid",
		"disputed"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-2",
		children: orders.map((order) => {
			const buyer = users.find((user) => user.id === order.buyerId);
			const seller = users.find((user) => user.id === order.sellerId);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid gap-2 p-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/order/$orderId",
					params: { orderId: order.id },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-semibold",
						children: [
							order.coin,
							" · ",
							numFlex(order.gross, lang)
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-1 block text-muted",
						children: [
							buyer ? personName(buyer.name, lang) : "",
							" → ",
							seller ? personName(seller.name, lang) : "",
							" · ",
							t(`status.${order.status}`)
						]
					})]
				}), open.includes(order.status) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => release(order.id, true),
						children: t("trade.adminRelease")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "line",
						onClick: () => cancelOrder(order.id, true),
						children: t("trade.adminCancel")
					})]
				}) : null]
			}, order.id);
		})
	});
}
function People() {
	const { lang, t } = useI18n();
	const users = useDesk((state) => state.users);
	const setLicense = useDesk((state) => state.setLicense);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-semibold",
			children: t("admin.people")
		}), users.map((user) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			className: "flex flex-wrap items-center justify-between gap-2 p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold",
				children: personName(user.name, lang)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: user.sellerLicense ? `${user.sellerLicense.code} · ${t(`status.${user.sellerLicense.status === "active" ? "active" : "suspended"}`)}` : t("admin.noLicense")
			})] }), user.sellerLicense ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "line",
				onClick: () => setLicense(user.id, user.sellerLicense?.status !== "active"),
				children: user.sellerLicense.status === "active" ? t("admin.suspend") : t("admin.resume")
			}) : null]
		}, user.id))]
	});
}
var SplitComponent = AdminScreen;
//#endregion
export { SplitComponent as component };
