import { o as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, S as useRouter, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { P as fieldClass, _ as signIn, c as useEnter, d as passwordIssues, f as passwordReady, g as authClient, h as useCurrentUserState, l as mailHint, m as useSite, p as phoneIssues, u as mailIssues, v as GROK_PROVIDERS } from "./router-DKF0ET_M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CGVSIQL0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COUNTRIES = [
	{
		iso: "IN",
		dial: "91",
		min: 10,
		max: 10,
		hi: "भारत",
		en: "India",
		ur: "بھارت"
	},
	{
		iso: "PK",
		dial: "92",
		min: 10,
		max: 10,
		hi: "पाकिस्तान",
		en: "Pakistan",
		ur: "پاکستان"
	},
	{
		iso: "BD",
		dial: "880",
		min: 10,
		max: 10,
		hi: "बांग्लादेश",
		en: "Bangladesh",
		ur: "بنگلہ دیش"
	},
	{
		iso: "NP",
		dial: "977",
		min: 10,
		max: 10,
		hi: "नेपाल",
		en: "Nepal",
		ur: "نیپال"
	},
	{
		iso: "LK",
		dial: "94",
		min: 9,
		max: 9,
		hi: "श्रीलंका",
		en: "Sri Lanka",
		ur: "سری لنکا"
	},
	{
		iso: "AE",
		dial: "971",
		min: 9,
		max: 9,
		hi: "संयुक्त अरब अमीरात",
		en: "United Arab Emirates",
		ur: "متحدہ عرب امارات"
	},
	{
		iso: "SA",
		dial: "966",
		min: 9,
		max: 9,
		hi: "सऊदी अरब",
		en: "Saudi Arabia",
		ur: "سعودی عرب"
	},
	{
		iso: "QA",
		dial: "974",
		min: 8,
		max: 8,
		hi: "क़तर",
		en: "Qatar",
		ur: "قطر"
	},
	{
		iso: "KW",
		dial: "965",
		min: 8,
		max: 8,
		hi: "कुवैत",
		en: "Kuwait",
		ur: "کویت"
	},
	{
		iso: "OM",
		dial: "968",
		min: 8,
		max: 8,
		hi: "ओमान",
		en: "Oman",
		ur: "عمان"
	},
	{
		iso: "BH",
		dial: "973",
		min: 8,
		max: 8,
		hi: "बहरीन",
		en: "Bahrain",
		ur: "بحرین"
	},
	{
		iso: "US",
		dial: "1",
		min: 10,
		max: 10,
		hi: "संयुक्त राज्य",
		en: "United States",
		ur: "ریاستہائے متحدہ"
	},
	{
		iso: "CA",
		dial: "1",
		min: 10,
		max: 10,
		hi: "कनाडा",
		en: "Canada",
		ur: "کینیڈا"
	},
	{
		iso: "GB",
		dial: "44",
		min: 10,
		max: 10,
		hi: "ब्रिटेन",
		en: "United Kingdom",
		ur: "برطانیہ"
	},
	{
		iso: "DE",
		dial: "49",
		min: 10,
		max: 11,
		hi: "जर्मनी",
		en: "Germany",
		ur: "جرمنی"
	},
	{
		iso: "FR",
		dial: "33",
		min: 9,
		max: 9,
		hi: "फ़्रांस",
		en: "France",
		ur: "فرانس"
	},
	{
		iso: "NG",
		dial: "234",
		min: 10,
		max: 10,
		hi: "नाइजीरिया",
		en: "Nigeria",
		ur: "نائجیریا"
	},
	{
		iso: "KE",
		dial: "254",
		min: 9,
		max: 9,
		hi: "केन्या",
		en: "Kenya",
		ur: "کینیا"
	},
	{
		iso: "ZA",
		dial: "27",
		min: 9,
		max: 9,
		hi: "दक्षिण अफ़्रीका",
		en: "South Africa",
		ur: "جنوبی افریقہ"
	},
	{
		iso: "AU",
		dial: "61",
		min: 9,
		max: 9,
		hi: "ऑस्ट्रेलिया",
		en: "Australia",
		ur: "آسٹریلیا"
	},
	{
		iso: "SG",
		dial: "65",
		min: 8,
		max: 8,
		hi: "सिंगापुर",
		en: "Singapore",
		ur: "سنگاپور"
	},
	{
		iso: "MY",
		dial: "60",
		min: 9,
		max: 10,
		hi: "मलेशिया",
		en: "Malaysia",
		ur: "ملائیشیا"
	},
	{
		iso: "ID",
		dial: "62",
		min: 10,
		max: 12,
		hi: "इंडोनेशिया",
		en: "Indonesia",
		ur: "انڈونیشیا"
	},
	{
		iso: "PH",
		dial: "63",
		min: 10,
		max: 10,
		hi: "फ़िलीपींस",
		en: "Philippines",
		ur: "فلپائن"
	},
	{
		iso: "TH",
		dial: "66",
		min: 9,
		max: 9,
		hi: "थाईलैंड",
		en: "Thailand",
		ur: "تھائی لینڈ"
	},
	{
		iso: "VN",
		dial: "84",
		min: 9,
		max: 9,
		hi: "वियतनाम",
		en: "Vietnam",
		ur: "ویتنام"
	},
	{
		iso: "JP",
		dial: "81",
		min: 10,
		max: 10,
		hi: "जापान",
		en: "Japan",
		ur: "جاپان"
	},
	{
		iso: "KR",
		dial: "82",
		min: 9,
		max: 10,
		hi: "दक्षिण कोरिया",
		en: "South Korea",
		ur: "جنوبی کوریا"
	},
	{
		iso: "CN",
		dial: "86",
		min: 11,
		max: 11,
		hi: "चीन",
		en: "China",
		ur: "چین"
	},
	{
		iso: "BR",
		dial: "55",
		min: 11,
		max: 11,
		hi: "ब्राज़ील",
		en: "Brazil",
		ur: "برازیل"
	},
	{
		iso: "MX",
		dial: "52",
		min: 10,
		max: 10,
		hi: "मेक्सिको",
		en: "Mexico",
		ur: "میکسیکو"
	},
	{
		iso: "TR",
		dial: "90",
		min: 10,
		max: 10,
		hi: "तुर्की",
		en: "Turkey",
		ur: "ترکی"
	},
	{
		iso: "RU",
		dial: "7",
		min: 10,
		max: 10,
		hi: "रूस",
		en: "Russia",
		ur: "روس"
	},
	{
		iso: "UA",
		dial: "380",
		min: 9,
		max: 9,
		hi: "यूक्रेन",
		en: "Ukraine",
		ur: "یوکرین"
	},
	{
		iso: "EG",
		dial: "20",
		min: 10,
		max: 10,
		hi: "मिस्र",
		en: "Egypt",
		ur: "مصر"
	},
	{
		iso: "HK",
		dial: "852",
		min: 8,
		max: 8,
		hi: "हांगकांग",
		en: "Hong Kong",
		ur: "ہانگ کانگ"
	},
	{
		iso: "TW",
		dial: "886",
		min: 9,
		max: 9,
		hi: "ताइवान",
		en: "Taiwan",
		ur: "تائیوان"
	},
	{
		iso: "NZ",
		dial: "64",
		min: 8,
		max: 10,
		hi: "न्यूज़ीलैंड",
		en: "New Zealand",
		ur: "نیوزی لینڈ"
	},
	{
		iso: "IE",
		dial: "353",
		min: 9,
		max: 9,
		hi: "आयरलैंड",
		en: "Ireland",
		ur: "آئرلینڈ"
	},
	{
		iso: "ES",
		dial: "34",
		min: 9,
		max: 9,
		hi: "स्पेन",
		en: "Spain",
		ur: "سپین"
	},
	{
		iso: "IT",
		dial: "39",
		min: 9,
		max: 10,
		hi: "इटली",
		en: "Italy",
		ur: "اٹلی"
	}
];
function countryName(country, lang) {
	return country[lang];
}
function lengthLabel(country) {
	return country.min === country.max ? String(country.min) : `${country.min}–${country.max}`;
}
function Check({ ok, dirty, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: `flex items-center gap-2 ${ok ? "text-buy" : dirty ? "text-sell" : "text-muted"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: ok ? "orvia-pip orvia-pip-live" : "orvia-pip" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
function EnterScreen() {
	const { s, lang } = useSite();
	const router = useRouter();
	const { user, isPending } = useCurrentUserState();
	const issue = useEnter((state) => state.issue);
	const verify = useEnter((state) => state.verify);
	const signWithPassword = useEnter((state) => state.signWithPassword);
	const savePassword = useEnter((state) => state.setPassword);
	const [tab, setTab] = (0, import_react.useState)("email");
	const [mode, setMode] = (0, import_react.useState)("in");
	const [later, setLater] = (0, import_react.useState)(false);
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPass] = (0, import_react.useState)("");
	const [again, setAgain] = (0, import_react.useState)("");
	const [iso, setIso] = (0, import_react.useState)("IN");
	const [national, setNational] = (0, import_react.useState)("");
	const [code, setCode] = (0, import_react.useState)("");
	const [shown, setShown] = (0, import_react.useState)(null);
	const [askPass, setAskPass] = (0, import_react.useState)(false);
	const [passOpen, setPassOpen] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [note, setNote] = (0, import_react.useState)("");
	const country = COUNTRIES.find((item) => item.iso === iso) ?? COUNTRIES[0];
	const mail = mailIssues(email);
	const hint = mailHint(email);
	const phone = phoneIssues(national, country.min, country.max);
	const pass = passwordIssues(password);
	const dirtyMail = email.trim().length > 0;
	const dirtyPhone = national.length > 0;
	const dirtyPass = password.length > 0;
	const goDesk = () => void router.navigate({ to: "/desk" });
	async function onEmail(event) {
		event.preventDefault();
		if (mail.length || !passwordReady(password)) return;
		if (mode === "up" && password !== again) {
			setNote(s.enter.mismatch);
			return;
		}
		setBusy(true);
		setNote("");
		const result = mode === "up" ? await authClient.signUp.email({
			email: email.trim(),
			password,
			name: email.trim().split("@")[0] || "ORVIA"
		}) : await authClient.signIn.email({
			email: email.trim(),
			password
		});
		setBusy(false);
		if (result.error) {
			setNote(result.error.message || s.enter.fail);
			return;
		}
		goDesk();
	}
	async function onShowCode() {
		if (phone.length) return;
		setBusy(true);
		setNote("");
		const result = await issue(country.iso, country.dial, national);
		setBusy(false);
		if (!result.ok) {
			setNote(s.enter.locked);
			return;
		}
		setShown(result.code);
		setCode("");
	}
	async function onVerify(event) {
		event.preventDefault();
		setBusy(true);
		setNote("");
		const result = await verify(country.iso, country.dial, national, code);
		setBusy(false);
		if (!result.ok) {
			setNote(s.enter[result.reason]);
			return;
		}
		setShown(null);
		if (!result.hasPassword) setAskPass(true);
		else goDesk();
	}
	async function onSavePass(event) {
		event.preventDefault();
		if (!passwordReady(password) || password !== again) {
			setNote(password !== again ? s.enter.mismatch : "");
			return;
		}
		setBusy(true);
		const ok = await savePassword(password);
		setBusy(false);
		if (!ok) {
			setNote(s.enter.fail);
			return;
		}
		setNote(s.enter.made);
		goDesk();
	}
	async function onPassLogin(event) {
		event.preventDefault();
		setBusy(true);
		setNote("");
		const ok = await signWithPassword(country.iso, country.dial, national, password);
		setBusy(false);
		if (!ok) {
			setNote(s.enter.noPass);
			return;
		}
		goDesk();
	}
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-md px-4 py-16",
		"aria-hidden": "true"
	});
	if (user) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-md px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-semibold",
				children: s.enter.inside
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: user.primaryEmail ?? user.displayName
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/desk",
				className: "mt-6 inline-flex min-h-11 items-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-fg",
				children: s.enter.toDesk
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-lg gap-6 px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.2em] text-primary",
					children: "ORVIA"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-3xl font-semibold",
					children: s.enter.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-6 text-muted",
					children: s.enter.lede
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2",
				children: GROK_PROVIDERS.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 rounded-md border border-line bg-surface px-4 text-sm font-semibold",
					onClick: () => {
						setNote("");
						signIn(provider.providerId, { callbackURL: "/desk" }).catch((error) => {
							setNote(error instanceof Error ? error.message : s.enter.fail);
						});
					},
					children: provider.providerId === "grok-x" ? s.enter.x : s.enter.google
				}, provider.providerId))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 rounded-full border border-line p-1",
				role: "tablist",
				children: ["email", "mobile"].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					"aria-selected": tab === item,
					className: `min-h-11 rounded-full text-sm font-semibold ${tab === item ? "bg-surface-2 text-primary" : "text-muted"}`,
					onClick: () => {
						setTab(item);
						setNote("");
					},
					children: item === "email" ? s.enter.email : s.enter.mobile
				}, item))
			}),
			tab === "email" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-3",
				onSubmit: onEmail,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 text-sm font-semibold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: mode === "in" ? "text-primary" : "text-muted",
								onClick: () => setMode("in"),
								children: s.enter.signIn
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: mode === "up" ? "text-primary" : "text-muted",
								onClick: () => setMode("up"),
								children: s.enter.signUp
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "ms-auto text-muted",
								onClick: () => setLater((value) => !value),
								children: s.enter.later
							})
						]
					}),
					later ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-6 text-muted",
						children: s.enter.laterBody
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-muted",
							children: s.enter.emailLabel
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							autoComplete: "email",
							inputMode: "email",
							value: email,
							onChange: (event) => setEmail(event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "grid gap-1 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								ok: dirtyMail && !mail.includes("at") && !mail.includes("empty"),
								dirty: dirtyMail,
								label: s.enter.checks.at
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								ok: dirtyMail && !mail.includes("space"),
								dirty: dirtyMail && mail.includes("space"),
								label: s.enter.checks.space
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								ok: dirtyMail && !mail.includes("dots"),
								dirty: dirtyMail && mail.includes("dots"),
								label: s.enter.checks.dots
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								ok: dirtyMail && !mail.includes("domain") && !mail.includes("tld"),
								dirty: dirtyMail && (mail.includes("domain") || mail.includes("tld")),
								label: s.enter.checks.domain
							}),
							hint === "known" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								ok: true,
								dirty: false,
								label: s.enter.checks.known
							}) : null,
							hint === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								ok: true,
								dirty: false,
								label: s.enter.checks.custom
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-muted",
							children: s.enter.password
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							type: "password",
							autoComplete: mode === "up" ? "new-password" : "current-password",
							value: password,
							onChange: (event) => setPass(event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "grid gap-1 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								ok: pass.len,
								dirty: dirtyPass,
								label: s.enter.checks.plen
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								ok: pass.letter,
								dirty: dirtyPass,
								label: s.enter.checks.letter
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								ok: pass.digit,
								dirty: dirtyPass,
								label: s.enter.checks.pdigit
							})
						]
					}),
					mode === "up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-muted",
							children: s.enter.again
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							type: "password",
							autoComplete: "new-password",
							value: again,
							onChange: (event) => setAgain(event.target.value)
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "min-h-11 rounded-md bg-primary text-sm font-semibold text-primary-fg",
						disabled: busy,
						children: busy ? s.enter.working : mode === "up" ? s.enter.submitUp : s.enter.submitIn
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-muted",
							children: s.enter.country
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: fieldClass,
							value: iso,
							onChange: (event) => setIso(event.target.value),
							children: COUNTRIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: item.iso,
								children: [
									countryName(item, lang),
									" +",
									item.dial
								]
							}, item.iso))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium text-muted",
							children: [
								s.enter.national,
								" · ",
								lengthLabel(country)
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							inputMode: "numeric",
							autoComplete: "tel-national",
							maxLength: country.max,
							value: national,
							onChange: (event) => setNational(event.target.value.replace(/\D/g, "").slice(0, country.max))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "grid gap-1 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								ok: dirtyPhone && !phone.includes("chars"),
								dirty: dirtyPhone && phone.includes("chars"),
								label: s.enter.checks.digits
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								ok: dirtyPhone && !phone.includes("trunk"),
								dirty: dirtyPhone && phone.includes("trunk"),
								label: s.enter.checks.trunk
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								ok: dirtyPhone && !phone.includes("short") && !phone.includes("long") && !phone.includes("empty"),
								dirty: dirtyPhone && (phone.includes("short") || phone.includes("long")),
								label: `${s.enter.checks.len} (${lengthLabel(country)})`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-md bg-primary text-sm font-semibold text-primary-fg",
						disabled: busy || phone.length > 0,
						onClick: () => void onShowCode(),
						children: busy ? s.enter.working : s.enter.codeShow
					}),
					shown ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "grid gap-3 rounded-md border border-line bg-surface p-4",
						onSubmit: onVerify,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: s.enter.codeHint
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-3xl tracking-[0.4em] text-primary",
								translate: "no",
								children: shown
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-1 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-muted",
									children: s.enter.codeLabel
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: fieldClass,
									inputMode: "numeric",
									autoComplete: "one-time-code",
									maxLength: 6,
									value: code,
									onChange: (event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 6))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "min-h-11 rounded-md border border-line text-sm font-semibold",
								disabled: busy || code.length !== 6,
								children: s.enter.confirm
							})
						]
					}) : null,
					askPass ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "grid gap-3",
						onSubmit: onSavePass,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: s.enter.laterBody
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-1 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-muted",
									children: s.enter.password
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: fieldClass,
									type: "password",
									autoComplete: "new-password",
									value: password,
									onChange: (event) => setPass(event.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-1 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-muted",
									children: s.enter.again
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: fieldClass,
									type: "password",
									autoComplete: "new-password",
									value: again,
									onChange: (event) => setAgain(event.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "min-h-11 rounded-md bg-primary text-sm font-semibold text-primary-fg",
								disabled: busy,
								children: s.enter.makeNow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 text-sm font-semibold text-muted",
								onClick: goDesk,
								children: s.enter.skip
							})
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-start text-sm font-semibold text-primary",
						onClick: () => setPassOpen((value) => !value),
						children: s.enter.passWay
					}),
					passOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "grid gap-3",
						onSubmit: onPassLogin,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-muted",
								children: s.enter.password
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: fieldClass,
								type: "password",
								autoComplete: "current-password",
								value: password,
								onChange: (event) => setPass(event.target.value)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "min-h-11 rounded-md border border-line text-sm font-semibold",
							disabled: busy,
							children: s.enter.passIn
						})]
					}) : null
				]
			}),
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-sell",
				children: note
			}) : null
		]
	});
}
var SplitComponent = EnterScreen;
//#endregion
export { SplitComponent as component };
