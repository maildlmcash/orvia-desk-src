import { o as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, Y as require_react, b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as adPrice, B as useI18n, C as Field, D as Panel, E as Page, I as personName, L as roleOf, M as coinLabel, N as computeFees, P as fieldClass, b as COUNTRIES, i as fiatAmt, k as TAX_KINDS, o as num, s as numFlex, w as Modal, x as Empty, y as Button, z as useDesk } from "./router-DKF0ET_M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trade-DVp5vyKx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TradeSheet({ ad, onClose, preset }) {
	const { lang, t } = useI18n();
	const settings = useDesk((state) => state.settings);
	const users = useDesk((state) => state.users);
	const quotes = useDesk((state) => state.quotes);
	const coins = useDesk((state) => state.coins);
	const placeOrder = useDesk((state) => state.placeOrder);
	const navigate = useNavigate();
	const merchant = users.find((user) => user.id === ad.userId);
	const price = adPrice(ad, quotes, coins.find((item) => item.symbol === ad.coin)?.price);
	const [grossText, setGrossText] = (0, import_react.useState)(preset ? String(preset) : String(ad.min));
	const [rail, setRail] = (0, import_react.useState)(ad.rails[0]);
	const gross = Number(grossText);
	const fees = Number.isFinite(gross) ? computeFees(gross, settings) : {
		buyerFee: 0,
		sellerFee: 0
	};
	const net = Number.isFinite(gross) ? gross - fees.buyerFee : 0;
	const buying = ad.side === "sell";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		title: buying ? t("trade.titleBuy") : t("trade.titleSell"),
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: merchant ? personName(merchant.name, lang) : ""
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-2xl font-semibold tabular-nums",
					children: fiatAmt(price, ad.fiat, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t("common.coin"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						inputMode: "decimal",
						value: grossText,
						onChange: (event) => setGrossText(event.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "line",
						onClick: () => setGrossText(String(ad.min)),
						children: t("trade.min")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "line",
						onClick: () => setGrossText(String(Math.min(ad.max, ad.available))),
						children: t("trade.max")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t("common.payment"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: fieldClass,
						value: rail,
						onChange: (event) => setRail(event.target.value),
						children: ad.rails.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item,
							children: t(`rail.${item}`)
						}, item))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid gap-1 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: buying ? t("trade.youPay") : t("trade.youReceive"),
							v: fiatAmt(Number.isFinite(gross) ? gross * price : 0, ad.fiat, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: t("trade.buyerFee"),
							v: `${numFlex(fees.buyerFee, lang)} ${ad.coin}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: t("trade.sellerFee"),
							v: `${numFlex(fees.sellerFee, lang)} ${ad.coin}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: t("trade.net"),
							v: `${numFlex(Math.max(0, net), lang)} ${ad.coin}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: t("ads.window"),
							v: t("common.minutes", { n: ad.payMin ?? 15 })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-relaxed text-muted",
					children: t("trade.escrowNote")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: t("trade.offDesk")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: buying ? "buy" : "sell",
					onClick: () => {
						const id = placeOrder(ad.id, gross, rail);
						if (id) {
							onClose();
							navigate({
								to: "/order/$orderId",
								params: { orderId: id }
							});
						}
					},
					children: t("trade.confirm")
				})
			]
		})
	});
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "font-mono font-medium tabular-nums",
			children: v
		})]
	});
}
function KycSheet({ sellerId, title, note, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		title,
		onClose,
		children: [note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 text-sm leading-relaxed text-muted",
			children: note
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KycForm, {
			purpose: sellerId ? "buyer" : "seller",
			sellerId,
			onDone: onClose
		})]
	});
}
function KycForm({ purpose, sellerId, onDone }) {
	const { t } = useI18n();
	const submitKyc = useDesk((state) => state.submitKyc);
	const [name, setName] = (0, import_react.useState)("");
	const [country, setCountry] = (0, import_react.useState)("IN");
	const [docType, setDocType] = (0, import_react.useState)("national_id");
	const [taxKind, setTaxKind] = (0, import_react.useState)("PAN");
	const [last4, setLast4] = (0, import_react.useState)("");
	const [declared, setDeclared] = (0, import_react.useState)(false);
	const [front, setFront] = (0, import_react.useState)(false);
	const [back, setBack] = (0, import_react.useState)(false);
	const [selfie, setSelfie] = (0, import_react.useState)(false);
	const taxes = (0, import_react.useMemo)(() => TAX_KINDS.filter((item) => item.country === country), [country]);
	const needBack = docType !== "passport";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-3",
		onSubmit: (event) => {
			event.preventDefault();
			if (submitKyc({
				purpose,
				sellerId,
				name,
				country,
				docType,
				taxKind: docType === "tax_id" ? taxKind : null,
				last4,
				declared,
				front,
				back,
				selfie
			})) onDone?.();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("common.name"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: fieldClass,
					value: name,
					onChange: (event) => setName(event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("common.country"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: fieldClass,
					value: country,
					onChange: (event) => {
						const next = event.target.value;
						setCountry(next);
						const first = TAX_KINDS.find((item) => item.country === next);
						if (first) setTaxKind(first.id);
					},
					children: COUNTRIES.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: code,
						children: t(`country.${code}`)
					}, code))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("kyc.doc"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: fieldClass,
					value: docType,
					onChange: (event) => setDocType(event.target.value),
					children: [
						"national_id",
						"passport",
						"tax_id"
					].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: code,
						children: t(`doc.${code}`)
					}, code))
				})
			}),
			docType === "tax_id" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("kyc.tax"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: fieldClass,
					value: taxKind,
					onChange: (event) => setTaxKind(event.target.value),
					children: (taxes.length ? taxes : TAX_KINDS).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
						value: item.id,
						children: [
							t(`country.${item.country}`),
							" · ",
							t(`tax.${item.id}`)
						]
					}, item.id))
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("kyc.last4"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: fieldClass,
					inputMode: "numeric",
					maxLength: 4,
					value: last4,
					onChange: (event) => setLast4(event.target.value.replace(/\D/g, "").slice(0, 4))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: t("kyc.last4Hint")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: t("kyc.evidence")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs leading-relaxed text-muted",
						children: t("kyc.docsNote")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocToggle, {
						label: t("kyc.front"),
						on: front,
						onClick: () => setFront((value) => !value),
						attach: t("kyc.attach"),
						attached: t("kyc.attached")
					}),
					needBack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocToggle, {
						label: t("kyc.back"),
						on: back,
						onClick: () => setBack((value) => !value),
						attach: t("kyc.attach"),
						attached: t("kyc.attached")
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocToggle, {
						label: t("kyc.selfie"),
						on: selfie,
						onClick: () => setSelfie((value) => !value),
						attach: t("kyc.attach"),
						attached: t("kyc.attached")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-start gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					className: "mt-1 size-4",
					checked: declared,
					onChange: (event) => setDeclared(event.target.checked)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("kyc.declare") })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				children: purpose === "seller" ? t("kyc.submitSeller") : t("kyc.submitBuyer")
			})
		]
	});
}
function DocToggle({ label, on, onClick, attach, attached }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3 rounded-md border border-line bg-bg px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-medium",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: on ? "primary" : "line",
			onClick,
			children: on ? attached : attach
		})]
	});
}
function OrderRoom({ orderId }) {
	const { lang, t } = useI18n();
	const meId = useDesk((state) => state.meId);
	const users = useDesk((state) => state.users);
	const orders = useDesk((state) => state.orders);
	const payments = useDesk((state) => state.payments);
	const markPaid = useDesk((state) => state.markPaid);
	const release = useDesk((state) => state.release);
	const cancelOrder = useDesk((state) => state.cancelOrder);
	const dispute = useDesk((state) => state.dispute);
	const rateOrder = useDesk((state) => state.rateOrder);
	const toggleBlock = useDesk((state) => state.toggleBlock);
	const toggleFollow = useDesk((state) => state.toggleFollow);
	const sendChat = useDesk((state) => state.sendChat);
	const flash = useDesk((state) => state.flash);
	const [text, setText] = (0, import_react.useState)("");
	const [reason, setReason] = (0, import_react.useState)("not_released");
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setNow(Date.now()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	const order = orders.find((item) => item.id === orderId);
	const me = users.find((user) => user.id === meId);
	if (!order || !me) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		title: t("trade.room"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { children: t("trade.missing") })
	});
	if (!(order.buyerId === me.id || order.sellerId === me.id || me.isAdmin)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
		title: t("trade.room"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Empty, { children: t("trade.private") })
	});
	const buyer = users.find((user) => user.id === order.buyerId);
	const seller = users.find((user) => user.id === order.sellerId);
	const method = payments.find((item) => item.userId === order.sellerId && item.rail === order.rail);
	const left = Math.max(0, order.payBy - now);
	const nameOf = (id) => {
		const user = users.find((item) => item.id === id);
		return user ? personName(user.name, lang) : "";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
		title: t("trade.room"),
		sub: `${order.coin} · ${t(`status.${order.status}`)}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid gap-3 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							t("orders.counterparty"),
							": ",
							me.id === order.buyerId ? nameOf(order.sellerId) : nameOf(order.buyerId)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-3xl font-semibold tabular-nums",
						children: fiatAmt(order.fiatTotal, order.fiat, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid gap-1 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: t("common.coin"),
								v: `${numFlex(order.gross, lang)} ${order.coin} ${coinLabel(order.coin, lang)}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: t("common.price"),
								v: fiatAmt(order.price, order.fiat, lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: t("trade.buyerFee"),
								v: numFlex(order.buyerFee, lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: t("trade.sellerFee"),
								v: numFlex(order.sellerFee, lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: t("trade.net"),
								v: numFlex(Math.max(0, order.gross - order.buyerFee), lang)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: t("common.payment"),
								v: t(`rail.${order.rail}`)
							}),
							order.appealReason ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: t("trade.appealWhy"),
								v: t(`trade.appeal.${order.appealReason}`)
							}) : null
						]
					}),
					order.status === "created" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: left > 0 ? `${t("trade.windowLeft")} ${num(Math.floor(left / 6e4), lang, 0)}:${String(Math.floor(left % 6e4 / 1e3)).padStart(2, "0")}` : t("trade.windowOver")
					}) : null,
					method && (me.id === order.buyerId || me.id === order.sellerId) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md bg-surface-2 p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: t("pay.details")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-lg",
								children: method.details
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "line",
								className: "mt-2",
								onClick: () => {
									navigator.clipboard?.writeText(method.details);
									flash("common.copied");
								},
								children: t("common.copy")
							})
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: buyer ? `${t("role.buyer")}: ${personName(buyer.name, lang)}` : ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: seller ? `${t("role.seller")}: ${personName(seller.name, lang)}` : ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							me.id === order.buyerId && order.status === "created" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "buy",
								onClick: () => markPaid(order.id),
								children: t("trade.markPaid")
							}) : null,
							me.id === order.sellerId && (order.status === "paid" || order.status === "disputed") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "buy",
								onClick: () => release(order.id),
								children: t("trade.release")
							}) : null,
							(me.id === order.buyerId || me.id === order.sellerId) && order.status === "created" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "line",
								onClick: () => cancelOrder(order.id),
								children: t("trade.cancel")
							}) : null,
							(me.id === order.buyerId || me.id === order.sellerId) && (order.status === "paid" || order.status === "created") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid w-full gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium text-muted",
										children: t("trade.appealWhy")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: [
											"not_released",
											"wrong_name",
											"no_reply",
											"amount"
										].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: `min-h-11 rounded-md px-3 text-sm font-semibold ${reason === item ? "bg-primary text-primary-fg" : "bg-surface-2"}`,
											onClick: () => setReason(item),
											children: t(`trade.appeal.${item}`)
										}, item))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "soft",
										onClick: () => dispute(order.id, reason),
										children: t("trade.dispute")
									})
								]
							}) : null,
							me.isAdmin && (order.status === "created" || order.status === "paid" || order.status === "disputed") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => release(order.id, true),
								children: t("trade.adminRelease")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "line",
								onClick: () => cancelOrder(order.id, true),
								children: t("trade.adminCancel")
							})] }) : null
						]
					}),
					order.status === "released" && (me.id === order.buyerId || me.id === order.sellerId) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: order.rating ? t("trade.rated") : t("trade.rate")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2",
							children: [
								1,
								2,
								3,
								4,
								5
							].map((score) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `grid size-11 place-items-center rounded-md text-sm font-semibold ${order.rating === score ? "bg-primary text-primary-fg" : "bg-surface-2"}`,
								onClick: () => rateOrder(order.id, score),
								children: score
							}, score))
						})]
					}) : null,
					me.id === order.buyerId || me.id === order.sellerId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "line",
							onClick: () => toggleFollow(me.id === order.buyerId ? order.sellerId : order.buyerId),
							children: (me.following ?? []).includes(me.id === order.buyerId ? order.sellerId : order.buyerId) ? t("trade.unfollow") : t("trade.follow")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "soft",
							onClick: () => toggleBlock(me.id === order.buyerId ? order.sellerId : order.buyerId),
							children: (me.blocked ?? []).includes(me.id === order.buyerId ? order.sellerId : order.buyerId) ? t("trade.unblock") : t("trade.block")
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/orders",
						className: "text-sm font-semibold text-primary",
						children: t("common.back")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid grid-rows-[1fr_auto] gap-3 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid max-h-[28rem] content-start gap-2 overflow-y-auto",
					children: [order.messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: t("trade.chatEmpty")
					}) : null, order.messages.map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: message.fromId === me.id ? "justify-self-end rounded-md bg-primary px-3 py-2 text-sm text-primary-fg" : "rounded-md bg-surface-2 px-3 py-2 text-sm",
						children: [message.system ? t(`system.${message.system}`) : message.text, message.fromId && message.fromId !== me.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: nameOf(message.fromId)
						}) : null]
					}, message.id))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex gap-2",
					onSubmit: (event) => {
						event.preventDefault();
						sendChat(order.id, text);
						setText("");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: text,
						placeholder: t("trade.chatPh"),
						"aria-label": t("trade.chatPh"),
						onChange: (event) => setText(event.target.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: t("trade.send")
					})]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: t(`role.${roleOf(me)}`)
		})]
	});
}
//#endregion
export { TradeSheet as i, KycSheet as n, OrderRoom as r, KycForm as t };
