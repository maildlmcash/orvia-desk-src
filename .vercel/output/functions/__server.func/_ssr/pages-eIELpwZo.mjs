import { o as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { P as fieldClass, m as useSite, u as mailIssues, z as useDesk } from "./router-DKF0ET_M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pages-eIELpwZo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Wrap({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children
	});
}
function HomePage() {
	const { s } = useSite();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold tracking-[0.22em] text-primary",
			children: s.company
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl",
			children: s.home.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-xl text-base leading-7 text-muted",
			children: s.home.lede
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/desk",
				className: "inline-flex min-h-11 items-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-fg",
				children: s.home.open
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				className: "inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-semibold",
				children: s.home.enter
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm text-muted",
			children: s.liveNote
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-14 text-xl font-semibold",
			children: s.home.pillarsTitle
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-4 divide-y divide-line border-y border-line",
			children: s.home.pillars.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid gap-1 py-4 sm:grid-cols-[4rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-sm text-primary",
					children: ["0", index + 1]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: item.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-6 text-muted",
					children: item.d
				})] })]
			}, item.t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-14 text-xl font-semibold",
			children: s.home.rolesTitle
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "mt-4 grid gap-4 sm:grid-cols-2",
			children: s.home.roles.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-s-2 border-primary ps-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "font-semibold",
					children: item.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 text-sm leading-6 text-muted",
					children: item.d
				})]
			}, item.t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-14 flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold",
				children: s.home.journalTitle
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/journal",
				className: "text-sm font-semibold text-primary",
				children: s.journal.title
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 grid gap-4",
			children: s.posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/journal/$slug",
				params: { slug: post.slug },
				className: "group block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold group-hover:text-primary",
					children: post.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: post.dek
				})]
			}) }, post.slug))
		})
	] });
}
function ProductPage() {
	const { s } = useSite();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl font-semibold",
			children: s.product.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-base leading-7 text-muted",
			children: s.product.lede
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-8 divide-y divide-line border-y border-line",
			children: s.product.points.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid gap-1 py-4 sm:grid-cols-[4rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-sm text-primary",
					children: ["0", index + 1]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: item.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-6 text-muted",
					children: item.d
				})] })]
			}, item.t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/desk",
			className: "mt-8 inline-flex min-h-11 items-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-fg",
			children: s.nav.desk
		})
	] });
}
function ServicesPage() {
	const { s } = useSite();
	const coins = useDesk((state) => state.coins);
	const [plans, setPlans] = (0, import_react.useState)([]);
	const [name, setName] = (0, import_react.useState)("");
	const [symbol, setSymbol] = (0, import_react.useState)("USDT");
	const [side, setSide] = (0, import_react.useState)("buy");
	const [max, setMax] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem("orvia-rules-v1");
			if (raw) setPlans(JSON.parse(raw));
		} catch {}
	}, []);
	function save(event) {
		event.preventDefault();
		if (!name.trim() || !max.trim() || Number(max) <= 0) return;
		const next = [{
			id: crypto.randomUUID(),
			name: name.trim(),
			symbol,
			side,
			max: max.trim(),
			note: note.trim()
		}, ...plans].slice(0, 20);
		setPlans(next);
		localStorage.setItem("orvia-rules-v1", JSON.stringify(next));
		setName("");
		setMax("");
		setNote("");
	}
	function remove(id) {
		const next = plans.filter((plan) => plan.id !== id);
		setPlans(next);
		localStorage.setItem("orvia-rules-v1", JSON.stringify(next));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl font-semibold",
			children: s.services.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-base leading-7 text-muted",
			children: s.services.lede
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-8 divide-y divide-line border-y border-line",
			children: s.services.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid gap-1 py-4 sm:grid-cols-[4rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-sm text-primary",
					children: ["0", index + 1]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: item.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-6 text-muted",
					children: item.d
				})] })]
			}, item.t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-10 grid gap-3 border-t border-line pt-8",
			onSubmit: save,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold",
					children: s.services.padTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: s.services.padNote
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: s.services.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: name,
						onChange: (event) => setName(event.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: s.services.coin
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: fieldClass,
							value: symbol,
							onChange: (event) => setSymbol(event.target.value),
							children: coins.filter((coin) => coin.listed).map((coin) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: coin.symbol,
								children: coin.symbol
							}, coin.symbol))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: s.services.side
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: fieldClass,
							value: side,
							onChange: (event) => setSide(event.target.value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "buy",
								children: s.services.buy
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "sell",
								children: s.services.sell
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: s.services.max
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						inputMode: "decimal",
						value: max,
						onChange: (event) => setMax(event.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: s.services.note
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: `${fieldClass} h-24 py-2`,
						value: note,
						onChange: (event) => setNote(event.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "min-h-11 rounded-md bg-primary text-sm font-semibold text-primary-fg",
					children: s.services.save
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-8 font-semibold",
			children: s.services.saved
		}),
		plans.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: s.services.empty
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 grid gap-2",
			children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start justify-between gap-3 border-b border-line py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: plan.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							plan.symbol,
							" · ",
							plan.side === "buy" ? s.services.buy : s.services.sell,
							" · ",
							plan.max
						]
					}),
					plan.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm",
						children: plan.note
					}) : null
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 shrink-0 text-sm font-semibold text-sell",
					onClick: () => remove(plan.id),
					children: s.services.remove
				})]
			}, plan.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/post",
			className: "mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-primary",
			children: s.services.toPost
		})
	] });
}
function PricingPage() {
	const { s } = useSite();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl font-semibold",
			children: s.pricing.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-base leading-7 text-muted",
			children: s.pricing.lede
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[32rem] border-collapse text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					className: "border-b border-line text-start",
					children: s.pricing.heads.map((head) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-2 py-3 font-semibold",
						children: head
					}, head))
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: s.pricing.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-2 py-3 text-start font-medium",
						children: row.name
					}), row.cells.map((cell, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-2 py-3 text-muted",
						children: cell
					}, `${row.name}-${index}`))]
				}, row.name)) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm text-muted",
			children: s.pricing.note
		})
	] });
}
function SecurityPage() {
	const { s } = useSite();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl font-semibold",
			children: s.security.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-base leading-7 text-muted",
			children: s.security.lede
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8 grid gap-5",
			children: s.security.points.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold",
				children: item.t
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-6 text-muted",
				children: item.d
			})] }, item.t))
		})
	] });
}
function AboutPage() {
	const { s } = useSite();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold tracking-[0.22em] text-primary",
			children: s.company
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 text-4xl font-semibold",
			children: s.about.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-base leading-7 text-muted",
			children: s.about.lede
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8 grid gap-4",
			children: s.about.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "border-s-2 border-primary ps-3 text-sm leading-6",
				children: point
			}, point))
		})
	] });
}
function JournalPage() {
	const { s } = useSite();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl font-semibold",
			children: s.journal.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-muted",
			children: s.journal.lede
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8 divide-y divide-line border-y border-line",
			children: s.posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/journal/$slug",
					params: { slug: post.slug },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-semibold",
						children: post.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: post.dek
					})]
				})
			}, post.slug))
		})
	] });
}
function JournalPost({ slug }) {
	const { s } = useSite();
	const post = s.posts.find((item) => item.slug === slug);
	if (!post) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s.journal.missing }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/journal",
		className: "mt-4 inline-flex min-h-11 items-center font-semibold text-primary",
		children: s.journal.back
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/journal",
			className: "text-sm font-semibold text-primary",
			children: s.journal.back
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 text-4xl font-semibold",
			children: post.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-muted",
			children: post.dek
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-4",
			children: post.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "leading-7",
				children: paragraph
			}, paragraph))
		})
	] });
}
function FaqPage() {
	const { s } = useSite();
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "text-4xl font-semibold",
		children: s.faq.title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-6 divide-y divide-line border-y border-line",
		children: s.faq.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "flex min-h-11 w-full items-center justify-between gap-3 py-3 text-start font-semibold",
			"aria-expanded": open === index,
			onClick: () => setOpen(open === index ? -1 : index),
			children: item.q
		}), open === index ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "pb-4 text-sm leading-6 text-muted",
			children: item.a
		}) : null] }, item.q))
	})] });
}
function ContactPage() {
	const { s } = useSite();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [topic, setTopic] = (0, import_react.useState)(s.contact.topics[0] ?? "");
	const [message, setMessage] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	const [bad, setBad] = (0, import_react.useState)(false);
	function submit(event) {
		event.preventDefault();
		if (!name.trim() || mailIssues(email).length || !message.trim()) {
			setBad(true);
			setSent(false);
			return;
		}
		setBad(false);
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl font-semibold",
			children: s.contact.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm leading-6 text-muted",
			children: s.contact.lede
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-6 grid gap-3",
			onSubmit: submit,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: s.contact.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						value: name,
						onChange: (event) => setName(event.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: s.contact.email
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						inputMode: "email",
						autoComplete: "email",
						value: email,
						onChange: (event) => setEmail(event.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: s.contact.topic
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: fieldClass,
						value: topic,
						onChange: (event) => setTopic(event.target.value),
						children: s.contact.topics.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: s.contact.message
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: `${fieldClass} h-28 py-2`,
						value: message,
						onChange: (event) => setMessage(event.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "min-h-11 rounded-md bg-primary text-sm font-semibold text-primary-fg",
					children: s.contact.send
				}),
				bad ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-sell",
					children: s.contact.invalid
				}) : null,
				sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-buy",
					children: s.contact.sent
				}) : null
			]
		})
	] });
}
function LegalPage() {
	const { s } = useSite();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "text-4xl font-semibold",
		children: s.legal.title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-6 grid gap-4",
		children: s.legal.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm leading-7 text-muted",
			children: paragraph
		}, paragraph))
	})] });
}
//#endregion
export { JournalPage as a, PricingPage as c, ServicesPage as d, HomePage as i, ProductPage as l, ContactPage as n, JournalPost as o, FaqPage as r, LegalPage as s, AboutPage as t, SecurityPage as u };
