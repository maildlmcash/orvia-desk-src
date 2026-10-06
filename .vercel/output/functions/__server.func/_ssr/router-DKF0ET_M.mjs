import { o as __toESM } from "../_runtime.mjs";
import { J as require_jsx_runtime, S as useRouter, Y as require_react, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as Moon, n as TriangleAlert, o as Eclipse, r as Sun, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as __exportAll } from "./ssr.mjs";
import { a as PostgresIntrospector, c as sql, i as PostgresAdapter, n as getKyselyDatabaseType, o as PostgresQueryCompiler, s as CompiledQuery, t as createKyselyAdapter } from "../_libs/@better-auth/kysely-adapter+[...].mjs";
import { $ as encode, $t as queueAfterTransactionHook, A as jwtVerify, At as boolean, C as serializeSignedCookie, Ct as createFetch, D as decodeJwt, E as base64Url, Ft as object, Gt as createWithSpan, Ht as capitalizeFirstLetter, It as optional, Jt as ATTR_OPERATION_ID, Kt as ATTR_CONTEXT, Lt as record, Mt as literal, Nt as looseObject, O as decodeProtectedHeader, Ot as any, Pt as number, Qt as getCurrentAdapter, Rt as string, S as serializeCookie, St as betterFetch, Tt as normalizePathname, Ut as toKebabCase, Xt as safeJSONParse, Yt as import_src, Zt as getAuthTables, _ as runWithRequestState, _n as APIError, a as createAuthorizationURL, an as generateId, b as createRouter$1, bn as BASE_ERROR_CODES, c as createRateLimitKey, cn as logger, d as deprecate, dn as env, dt as JWTExpired, en as runWithAdapter, f as createAuthEndpoint, g as hasRequestState, gn as isTest, h as defineRequestState, hn as isProduction, i as refreshAccessToken, in as initGetFieldName, jt as email, k as importJWK, kt as array, l as findInvalidTrustedProxies, ln as shouldPublishLog, m as isAPIError, mn as isDevelopment, n as socialProviders, nn as getBetterAuthVersion, o as applyDefaultAccessTokenExpiry, on as createRandomStringGenerator, p as createAuthMiddleware, qt as ATTR_HOOK_TYPE, r as validateAuthorizationCode, rn as initGetModelName, s as isLoopbackHost, sn as createLogger, t as SocialProviderListEnum, tn as runWithTransaction, u as getIp, v as getCurrentAuthContext, vn as BetterAuthError, w as filterOutputFields, wt as isSafeUrlScheme, x as toResponse, xn as defineErrorCodes, y as runWithEndpointContext, yn as kAPIErrorHeaderSymbol, zt as union } from "../_libs/@better-auth/core+[...].mjs";
import { n as string$1, t as boolean$1 } from "../_libs/zod.mjs";
import { a as atom, i as onSet, n as STORE_UNMOUNT_DELAY, r as onMount, t as listenKeys } from "../_libs/nanostores.mjs";
import { n as defu, t as createDefu } from "../_libs/defu.mjs";
import { n as hkdf, t as sha256 } from "../_libs/noble__hashes.mjs";
import { i as jwtDecrypt, n as EncryptJWT, r as SignJWT, t as calculateJwkThumbprint } from "../_libs/jose.mjs";
import { i as verifyPassword, n as binary, r as hashPassword, t as createHMAC } from "../_libs/better-auth__utils.mjs";
import { n as createHash, t as createTelemetry } from "../_libs/@better-auth/telemetry+[...].mjs";
import { a as utf8ToBytes, i as managedNonce, n as bytesToHex, r as hexToBytes, t as xchacha20poly1305 } from "../_libs/noble__ciphers.mjs";
import { t as Pool } from "../_libs/pg.mjs";
import { randomBytes } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-6n_Khhjm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var FIATS = [
	"INR",
	"USD",
	"PKR",
	"AED",
	"EUR"
];
var RAILS = [
	"upi",
	"imps",
	"bank",
	"paytm",
	"jazz",
	"easy",
	"card"
];
var NETWORKS = [
	"mesh",
	"north",
	"south"
];
var COIN_RANK = [
	"USDT",
	"BTC",
	"ETH",
	"BNB",
	"XRP",
	"USDC",
	"SOL",
	"TRX",
	"ZEC",
	"HYPE",
	"ORB",
	"KYN",
	"VLT",
	"AUR",
	"PXN",
	"LUM",
	"NRX",
	"HAL"
];
var LIVE_PAIRS = [
	{
		symbol: "BTC",
		pair: "BTCUSDT"
	},
	{
		symbol: "ETH",
		pair: "ETHUSDT"
	},
	{
		symbol: "BNB",
		pair: "BNBUSDT"
	},
	{
		symbol: "XRP",
		pair: "XRPUSDT"
	},
	{
		symbol: "USDC",
		pair: "USDCUSDT"
	},
	{
		symbol: "SOL",
		pair: "SOLUSDT"
	},
	{
		symbol: "TRX",
		pair: "TRXUSDT"
	},
	{
		symbol: "ZEC",
		pair: "ZECUSDT"
	},
	{
		symbol: "HYPE",
		pair: "HYPEUSDT"
	},
	{
		symbol: "USDT",
		pair: "USDTUSD"
	}
];
var LIVE_SYMBOLS = new Set(LIVE_PAIRS.map((item) => item.symbol));
function sortCoins(rows) {
	return [...rows].sort((a, b) => {
		const ia = COIN_RANK.indexOf(a.symbol);
		const ib = COIN_RANK.indexOf(b.symbol);
		return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
	});
}
var COUNTRIES = [
	"IN",
	"US",
	"GB",
	"PK",
	"AE",
	"CA",
	"AU",
	"DE",
	"FR",
	"BR",
	"NG",
	"ZA",
	"SG",
	"BD",
	"NP",
	"LK",
	"CN",
	"JP",
	"ID",
	"PH",
	"KE",
	"SA",
	"TR",
	"MX",
	"ES",
	"IT",
	"NL",
	"QA"
];
var TAX_KINDS = [
	{
		id: "PAN",
		country: "IN"
	},
	{
		id: "SSN",
		country: "US"
	},
	{
		id: "ITIN",
		country: "US"
	},
	{
		id: "UTR",
		country: "GB"
	},
	{
		id: "NINO",
		country: "GB"
	},
	{
		id: "NTN",
		country: "PK"
	},
	{
		id: "TRN",
		country: "AE"
	},
	{
		id: "SIN",
		country: "CA"
	},
	{
		id: "TFN",
		country: "AU"
	},
	{
		id: "STEUER",
		country: "DE"
	},
	{
		id: "SPI",
		country: "FR"
	},
	{
		id: "CF",
		country: "IT"
	},
	{
		id: "NIF",
		country: "ES"
	},
	{
		id: "BSN",
		country: "NL"
	},
	{
		id: "CPF",
		country: "BR"
	},
	{
		id: "RFC",
		country: "MX"
	},
	{
		id: "TIN_NG",
		country: "NG"
	},
	{
		id: "SARS",
		country: "ZA"
	},
	{
		id: "NRIC",
		country: "SG"
	},
	{
		id: "TIN_BD",
		country: "BD"
	},
	{
		id: "PAN_NP",
		country: "NP"
	},
	{
		id: "TIN_LK",
		country: "LK"
	},
	{
		id: "TIN_CN",
		country: "CN"
	},
	{
		id: "MYNO",
		country: "JP"
	},
	{
		id: "NPWP",
		country: "ID"
	},
	{
		id: "TIN_PH",
		country: "PH"
	},
	{
		id: "KRA",
		country: "KE"
	},
	{
		id: "TIN_SA",
		country: "SA"
	},
	{
		id: "VKN",
		country: "TR"
	},
	{
		id: "TIN_QA",
		country: "QA"
	}
];
function round4(n) {
	return Math.round(n * 1e4) / 1e4;
}
function adPrice(ad, quotes, base) {
	if (ad.priceMode !== "float") return ad.price;
	const live = quotes[ad.coin];
	const anchor = base && base > 0 ? base : live || ad.price;
	const drift = live && anchor ? live / anchor : 1;
	return round4(ad.price * ((ad.margin ?? 100) / 100) * drift);
}
function computeFees(gross, settings) {
	const usePercent = settings.feeMode !== "fixed";
	const useFixed = settings.feeMode !== "percent";
	return {
		buyerFee: round4((usePercent ? gross * settings.buyerPercent / 100 : 0) + (useFixed ? settings.buyerFixed : 0)),
		sellerFee: round4((usePercent ? gross * settings.sellerPercent / 100 : 0) + (useFixed ? settings.sellerFixed : 0))
	};
}
function roleOf(user) {
	if (user.isAdmin) return "admin";
	if (user.suspended) return "suspended";
	if (user.sellerLicense?.status === "suspended") return "suspended";
	if (user.sellerLicense?.status === "active") return "seller";
	return "buyer";
}
function merchantLive(user) {
	return user.sellerLicense?.status === "active" && !user.suspended;
}
function rid(prefix) {
	return `${prefix}-${Math.random().toString(36).slice(2, 8)}${Date.now().toString(36).slice(-3)}`;
}
function rand4() {
	return String(1e3 + Math.floor(Math.random() * 9e3));
}
var OPEN = [
	"created",
	"paid",
	"disputed"
];
var SYMBOLS = [
	"USDT",
	"BTC",
	"ETH",
	"BNB",
	"XRP",
	"USDC",
	"SOL",
	"TRX",
	"ZEC",
	"HYPE",
	"ORB",
	"KYN",
	"VLT",
	"AUR",
	"PXN",
	"LUM",
	"NRX",
	"HAL"
];
function bag(partial) {
	const out = {};
	for (const symbol of SYMBOLS) out[symbol] = partial[symbol] ?? 0;
	return out;
}
function nm(en, hi, ur) {
	return {
		en,
		hi,
		ur
	};
}
function fresh() {
	const now = Date.now();
	const coins = [
		{
			symbol: "USDT",
			price: 1,
			listed: true
		},
		{
			symbol: "BTC",
			price: 83853,
			listed: true
		},
		{
			symbol: "ETH",
			price: 2680,
			listed: true
		},
		{
			symbol: "BNB",
			price: 767,
			listed: true
		},
		{
			symbol: "XRP",
			price: 1.5,
			listed: true
		},
		{
			symbol: "USDC",
			price: 1,
			listed: true
		},
		{
			symbol: "SOL",
			price: 119,
			listed: true
		},
		{
			symbol: "TRX",
			price: .339,
			listed: true
		},
		{
			symbol: "ZEC",
			price: 1430,
			listed: true
		},
		{
			symbol: "HYPE",
			price: 86,
			listed: true
		},
		{
			symbol: "ORB",
			price: 1.08,
			listed: true
		},
		{
			symbol: "KYN",
			price: .42,
			listed: true
		},
		{
			symbol: "VLT",
			price: 3.4,
			listed: true
		},
		{
			symbol: "AUR",
			price: 12.6,
			listed: true
		},
		{
			symbol: "PXN",
			price: .18,
			listed: true
		},
		{
			symbol: "LUM",
			price: 2.15,
			listed: true
		},
		{
			symbol: "NRX",
			price: 8.9,
			listed: true
		},
		{
			symbol: "HAL",
			price: .07,
			listed: true
		}
	];
	const quotes = {};
	const moves = {};
	for (const coin of coins) quotes[coin.symbol] = coin.price;
	const users = [
		{
			id: "u-admin",
			name: nm("Asha Dutt", "आशा दत्त", "آشا دت"),
			country: "IN",
			isAdmin: true,
			docLast4: "",
			sellerLicense: null,
			trades: 0,
			completion: 100,
			balances: bag({}),
			online: true
		},
		{
			id: "u-meera",
			name: nm("Meera Shah", "मीरा शाह", "میرا شاہ"),
			country: "IN",
			isAdmin: false,
			docLast4: "4821",
			sellerLicense: {
				code: "48217390",
				status: "active",
				at: now - 3456e6
			},
			trades: 128,
			completion: 99,
			balances: bag({
				ORB: 4200,
				VLT: 800,
				KYN: 1500,
				AUR: 80,
				PXN: 9e3,
				LUM: 600,
				NRX: 120,
				HAL: 2e4,
				USDT: 48e3,
				BTC: 1.4,
				ETH: 22,
				BNB: 30,
				XRP: 4e3,
				USDC: 12e3,
				SOL: 120,
				TRX: 3e4,
				ZEC: 8,
				HYPE: 70
			}),
			online: true
		},
		{
			id: "u-hassan",
			name: nm("Hassan Raza", "हसन रज़ा", "حسن رضا"),
			country: "PK",
			isAdmin: false,
			docLast4: "9055",
			sellerLicense: {
				code: "90551234",
				status: "active",
				at: now - 19008e5
			},
			trades: 86,
			completion: 97,
			balances: bag({
				ORB: 1800,
				VLT: 240,
				KYN: 3e3,
				AUR: 20,
				PXN: 4e3,
				LUM: 500,
				NRX: 40,
				HAL: 8e3,
				USDT: 16e3,
				BTC: .35,
				ETH: 8,
				BNB: 12,
				XRP: 1800,
				USDC: 4e3,
				SOL: 40,
				TRX: 12e3,
				ZEC: 2,
				HYPE: 25
			}),
			online: true
		},
		{
			id: "u-kabir",
			name: nm("Kabir Singh", "कबीर सिंह", "کبیر سنگھ"),
			country: "IN",
			isAdmin: false,
			docLast4: "6630",
			sellerLicense: null,
			trades: 6,
			completion: 100,
			balances: bag({
				ORB: 15,
				VLT: 4,
				USDT: 320,
				BTC: .002
			}),
			online: true
		},
		{
			id: "u-aman",
			name: nm("Aman Gill", "अमन गिल", "امن گل"),
			country: "IN",
			isAdmin: false,
			docLast4: "",
			sellerLicense: null,
			trades: 1,
			completion: 100,
			balances: bag({ ORB: 25 }),
			online: true
		},
		{
			id: "u-farah",
			name: nm("Farah Noor", "फ़राह नूर", "فراح نور"),
			country: "IN",
			isAdmin: false,
			docLast4: "",
			sellerLicense: null,
			trades: 0,
			completion: 0,
			balances: bag({}),
			online: false
		}
	];
	const terms = "__default__";
	return {
		theme: "day",
		lang: "hi",
		meId: "u-kabir",
		users,
		ads: [
			{
				id: "ad-m-orb-inr",
				userId: "u-meera",
				side: "sell",
				coin: "ORB",
				fiat: "INR",
				price: 96.5,
				min: 10,
				max: 400,
				available: 760,
				rails: [
					"upi",
					"imps",
					"bank"
				],
				terms,
				paused: false
			},
			{
				id: "ad-m-orb-usd",
				userId: "u-meera",
				side: "sell",
				coin: "ORB",
				fiat: "USD",
				price: 1.12,
				min: 5,
				max: 150,
				available: 300,
				rails: ["bank", "card"],
				terms,
				paused: false
			},
			{
				id: "ad-m-vlt-inr",
				userId: "u-meera",
				side: "sell",
				coin: "VLT",
				fiat: "INR",
				price: 318,
				min: 1,
				max: 30,
				available: 120,
				rails: ["upi", "paytm"],
				terms,
				paused: false,
				priceMode: "float",
				margin: 101,
				payMin: 30,
				minComp: 80
			},
			{
				id: "ad-m-aur-aed",
				userId: "u-meera",
				side: "sell",
				coin: "AUR",
				fiat: "AED",
				price: 48.5,
				min: .2,
				max: 8,
				available: 22,
				rails: ["bank"],
				terms,
				paused: false
			},
			{
				id: "ad-m-buy-orb",
				userId: "u-meera",
				side: "buy",
				coin: "ORB",
				fiat: "INR",
				price: 93.2,
				min: 10,
				max: 150,
				available: 150,
				rails: ["upi", "imps"],
				terms,
				paused: false
			},
			{
				id: "ad-h-orb-inr",
				userId: "u-hassan",
				side: "sell",
				coin: "ORB",
				fiat: "INR",
				price: 97.8,
				min: 5,
				max: 200,
				available: 220,
				rails: ["bank", "easy"],
				terms,
				paused: false
			},
			{
				id: "ad-h-orb-pkr",
				userId: "u-hassan",
				side: "sell",
				coin: "ORB",
				fiat: "PKR",
				price: 312,
				min: 5,
				max: 250,
				available: 400,
				rails: ["jazz", "easy"],
				terms,
				paused: false
			},
			{
				id: "ad-h-kyn-pkr",
				userId: "u-hassan",
				side: "sell",
				coin: "KYN",
				fiat: "PKR",
				price: 118,
				min: 20,
				max: 800,
				available: 2e3,
				rails: ["jazz", "bank"],
				terms,
				paused: false
			},
			{
				id: "ad-h-lum-usd",
				userId: "u-hassan",
				side: "sell",
				coin: "LUM",
				fiat: "USD",
				price: 2.28,
				min: 2,
				max: 60,
				available: 140,
				rails: ["bank", "card"],
				terms,
				paused: false,
				needKyc: true,
				payMin: 15
			},
			{
				id: "ad-h-buy-vlt",
				userId: "u-hassan",
				side: "buy",
				coin: "VLT",
				fiat: "PKR",
				price: 960,
				min: 1,
				max: 12,
				available: 20,
				rails: ["easy"],
				terms,
				paused: false
			},
			{
				id: "ad-m-usdt-inr",
				userId: "u-meera",
				side: "sell",
				coin: "USDT",
				fiat: "INR",
				price: 86.4,
				min: 20,
				max: 8e3,
				available: 25e3,
				rails: [
					"upi",
					"imps",
					"bank"
				],
				terms,
				paused: false,
				payMin: 15
			},
			{
				id: "ad-h-usdt-inr",
				userId: "u-hassan",
				side: "sell",
				coin: "USDT",
				fiat: "INR",
				price: 86.85,
				min: 10,
				max: 4e3,
				available: 9e3,
				rails: ["bank", "easy"],
				terms,
				paused: false,
				payMin: 15
			},
			{
				id: "ad-m-usdt-buy",
				userId: "u-meera",
				side: "buy",
				coin: "USDT",
				fiat: "INR",
				price: 85.7,
				min: 50,
				max: 5e3,
				available: 5e3,
				rails: ["upi", "imps"],
				terms,
				paused: false,
				payMin: 15
			},
			{
				id: "ad-m-btc-inr",
				userId: "u-meera",
				side: "sell",
				coin: "BTC",
				fiat: "INR",
				price: 7215e3,
				min: .001,
				max: .08,
				available: .4,
				rails: ["upi", "bank"],
				terms,
				paused: false,
				payMin: 30
			},
			{
				id: "ad-h-btc-inr",
				userId: "u-hassan",
				side: "sell",
				coin: "BTC",
				fiat: "INR",
				price: 7248e3,
				min: .001,
				max: .04,
				available: .12,
				rails: ["bank"],
				terms,
				paused: false,
				payMin: 30
			},
			{
				id: "ad-m-eth-inr",
				userId: "u-meera",
				side: "sell",
				coin: "ETH",
				fiat: "INR",
				price: 230400,
				min: .01,
				max: 2,
				available: 8,
				rails: ["upi", "imps"],
				terms,
				paused: false,
				payMin: 15
			},
			{
				id: "ad-m-bnb-inr",
				userId: "u-meera",
				side: "sell",
				coin: "BNB",
				fiat: "INR",
				price: 65900,
				min: .02,
				max: 3,
				available: 12,
				rails: ["upi", "bank"],
				terms,
				paused: false
			},
			{
				id: "ad-h-xrp-inr",
				userId: "u-hassan",
				side: "sell",
				coin: "XRP",
				fiat: "INR",
				price: 129,
				min: 10,
				max: 2e3,
				available: 1500,
				rails: ["bank", "easy"],
				terms,
				paused: false
			},
			{
				id: "ad-m-usdc-inr",
				userId: "u-meera",
				side: "sell",
				coin: "USDC",
				fiat: "INR",
				price: 86.2,
				min: 20,
				max: 5e3,
				available: 8e3,
				rails: ["upi", "imps"],
				terms,
				paused: false
			},
			{
				id: "ad-m-sol-inr",
				userId: "u-meera",
				side: "sell",
				coin: "SOL",
				fiat: "INR",
				price: 10230,
				min: .1,
				max: 20,
				available: 50,
				rails: ["upi", "paytm"],
				terms,
				paused: false
			},
			{
				id: "ad-h-trx-inr",
				userId: "u-hassan",
				side: "sell",
				coin: "TRX",
				fiat: "INR",
				price: 29.2,
				min: 20,
				max: 4e3,
				available: 8e3,
				rails: ["bank"],
				terms,
				paused: false
			},
			{
				id: "ad-m-zec-usd",
				userId: "u-meera",
				side: "sell",
				coin: "ZEC",
				fiat: "USD",
				price: 1432,
				min: .01,
				max: 1,
				available: 3,
				rails: ["bank", "card"],
				terms,
				paused: false
			},
			{
				id: "ad-m-zec-inr",
				userId: "u-meera",
				side: "sell",
				coin: "ZEC",
				fiat: "INR",
				price: 123e3,
				min: .01,
				max: .4,
				available: 2,
				rails: ["bank", "upi"],
				terms,
				paused: false
			},
			{
				id: "ad-h-hype-usd",
				userId: "u-hassan",
				side: "sell",
				coin: "HYPE",
				fiat: "USD",
				price: 86.4,
				min: .2,
				max: 15,
				available: 18,
				rails: ["bank", "card"],
				terms,
				paused: false
			},
			{
				id: "ad-h-hype-inr",
				userId: "u-hassan",
				side: "sell",
				coin: "HYPE",
				fiat: "INR",
				price: 7400,
				min: .2,
				max: 10,
				available: 12,
				rails: ["bank"],
				terms,
				paused: false
			},
			{
				id: "ad-m-kyn-inr",
				userId: "u-meera",
				side: "sell",
				coin: "KYN",
				fiat: "INR",
				price: 36.2,
				min: 5,
				max: 400,
				available: 900,
				rails: ["upi", "imps"],
				terms,
				paused: false
			}
		],
		orders: [{
			id: "o-paid",
			adId: "ad-m-orb-inr",
			buyerId: "u-kabir",
			sellerId: "u-meera",
			coin: "ORB",
			fiat: "INR",
			price: 96.5,
			gross: 40,
			fiatTotal: 3860,
			buyerFee: .13,
			sellerFee: .11,
			rail: "upi",
			status: "paid",
			escrow: 40.11,
			createdAt: now - 48e4,
			payBy: now + 42e4,
			messages: [{
				id: "m1",
				fromId: null,
				system: "created",
				at: now - 48e4
			}, {
				id: "m2",
				fromId: null,
				system: "paid",
				at: now - 18e4
			}]
		}, {
			id: "o-old",
			adId: "ad-m-orb-inr",
			buyerId: "u-kabir",
			sellerId: "u-meera",
			coin: "ORB",
			fiat: "INR",
			price: 95,
			gross: 10,
			fiatTotal: 950,
			buyerFee: .07,
			sellerFee: .065,
			rail: "bank",
			status: "released",
			escrow: 0,
			createdAt: now - 1728e5,
			payBy: now - 1728e5,
			messages: [{
				id: "m3",
				fromId: null,
				system: "created",
				at: now - 1728e5
			}, {
				id: "m4",
				fromId: null,
				system: "released",
				at: now - 1728e5 + 6e5
			}]
		}],
		kycs: [{
			id: "k-farah",
			userId: "u-farah",
			purpose: "seller",
			sellerId: null,
			name: "फ़राह नूर",
			country: "IN",
			docType: "national_id",
			taxKind: null,
			last4: "2210",
			status: "pending",
			at: now - 36e5,
			reason: null,
			front: true,
			back: true,
			selfie: true
		}],
		passes: [{
			id: "p-kabir",
			buyerId: "u-kabir",
			sellerId: "u-meera",
			code: "4821-7390",
			status: "active",
			at: now - 432e6
		}, {
			id: "p-aman",
			buyerId: "u-aman",
			sellerId: "u-hassan",
			code: "9055-1102",
			status: "revoked",
			at: now - 2592e5
		}],
		payments: [
			{
				id: "pm1",
				userId: "u-meera",
				rail: "upi",
				label: "",
				details: "9891002211"
			},
			{
				id: "pm2",
				userId: "u-meera",
				rail: "imps",
				label: "",
				details: "001234 · 004455667788"
			},
			{
				id: "pm3",
				userId: "u-meera",
				rail: "bank",
				label: "",
				details: "441200889911"
			},
			{
				id: "pm4",
				userId: "u-meera",
				rail: "paytm",
				label: "",
				details: "9891002211"
			},
			{
				id: "pm5",
				userId: "u-meera",
				rail: "card",
				label: "",
				details: "4412"
			},
			{
				id: "pm6",
				userId: "u-hassan",
				rail: "jazz",
				label: "",
				details: "03001234567"
			},
			{
				id: "pm7",
				userId: "u-hassan",
				rail: "easy",
				label: "",
				details: "03007654321"
			},
			{
				id: "pm8",
				userId: "u-hassan",
				rail: "bank",
				label: "",
				details: "220011445566"
			},
			{
				id: "pm9",
				userId: "u-hassan",
				rail: "card",
				label: "",
				details: "7781"
			},
			{
				id: "pm10",
				userId: "u-kabir",
				rail: "bank",
				label: "",
				details: "110022334455"
			},
			{
				id: "pm11",
				userId: "u-aman",
				rail: "upi",
				label: "",
				details: "9811122233"
			}
		],
		withdrawals: [{
			id: "w-hassan",
			userId: "u-hassan",
			coin: "VLT",
			amount: 12,
			address: "9055221800417781",
			network: "north",
			status: "pending_admin",
			at: now - 3e6
		}],
		fees: [{
			id: "f-old",
			orderId: "o-old",
			coin: "ORB",
			buyerFee: .07,
			sellerFee: .065,
			at: now - 1728e5
		}],
		coins,
		settings: {
			feeMode: "both",
			buyerPercent: .2,
			sellerPercent: .15,
			buyerFixed: .05,
			sellerFixed: .05,
			threshold: 5,
			underMode: "automatic",
			overMode: "manual",
			deskOpen: true
		},
		treasury: { ORB: .135 },
		quotes,
		moves,
		notice: null,
		hydrated: false,
		audits: []
	};
}
function pushAudit(audits, actorId, key, detail) {
	return [{
		id: rid("a"),
		actorId,
		key,
		detail,
		at: Date.now()
	}, ...audits ?? []].slice(0, 30);
}
function patchUser(users, id, fn) {
	return users.map((user) => user.id === id ? fn(user) : user);
}
function addBal(user, coin, delta) {
	return {
		...user,
		balances: {
			...user.balances,
			[coin]: round4((user.balances[coin] ?? 0) + delta)
		}
	};
}
function unwind(state, order) {
	const give = state.ads.find((item) => item.id === order.adId)?.side === "buy" ? order.gross + order.sellerFee : order.sellerFee;
	return {
		users: patchUser(state.users, order.sellerId, (user) => addBal(user, order.coin, give)),
		ads: state.ads.map((item) => item.id === order.adId ? {
			...item,
			available: round4(item.available + order.gross)
		} : item)
	};
}
function fail(set, error) {
	set({ notice: { key: `err.${error}` } });
	return false;
}
var useDesk = create()(persist((set, get) => ({
	...fresh(),
	markHydrated: () => set((state) => {
		const seed = fresh();
		const coins = [...state.coins];
		const quotes = { ...state.quotes };
		for (const coin of seed.coins) {
			if (!coins.some((item) => item.symbol === coin.symbol)) coins.push(coin);
			if (quotes[coin.symbol] == null) quotes[coin.symbol] = coin.price;
		}
		const ads = [...state.ads];
		for (const ad of seed.ads) if (!ads.some((item) => item.id === ad.id)) ads.push(ad);
		const users = state.users.map((user) => {
			const seeded = seed.users.find((item) => item.id === user.id);
			const balances = { ...user.balances };
			for (const coin of seed.coins) if (balances[coin.symbol] == null) balances[coin.symbol] = seeded?.balances[coin.symbol] ?? 0;
			return {
				...user,
				balances
			};
		});
		return {
			hydrated: true,
			coins,
			quotes,
			moves: state.moves ?? {},
			users,
			audits: state.audits ?? [],
			settings: {
				...state.settings,
				deskOpen: state.settings.deskOpen !== false
			},
			ads: ads.map((ad) => {
				if (ad.id === "ad-m-vlt-inr" && !ad.priceMode) return {
					...ad,
					priceMode: "float",
					margin: ad.margin ?? 101,
					payMin: ad.payMin ?? 30,
					minComp: ad.minComp ?? 80
				};
				if (ad.id === "ad-h-lum-usd" && ad.needKyc == null) return {
					...ad,
					needKyc: true,
					payMin: ad.payMin ?? 15
				};
				return ad;
			})
		};
	}),
	setTheme: (theme) => set({ theme }),
	setLang: (lang) => set({ lang }),
	setMe: (id) => set({ meId: id }),
	flash: (key, vars) => {
		set({ notice: {
			key,
			vars
		} });
		window.setTimeout(() => {
			if (get().notice?.key === key) set({ notice: null });
		}, 3400);
	},
	tickQuotes: () => set((state) => {
		const quotes = { ...state.quotes };
		for (const coin of state.coins) {
			if (LIVE_SYMBOLS.has(coin.symbol)) continue;
			const base = quotes[coin.symbol] ?? coin.price;
			quotes[coin.symbol] = round4(Math.max(.01, base * (1 + (Math.random() - .5) * .008)));
		}
		const now = Date.now();
		let users = state.users;
		let ads = state.ads;
		const orders = state.orders.map((order) => {
			if (order.status !== "created" || order.payBy >= now) return order;
			const back = unwind({
				users,
				ads
			}, order);
			users = back.users;
			ads = back.ads;
			return {
				...order,
				status: "cancelled",
				escrow: 0,
				messages: [...order.messages, {
					id: rid("m"),
					fromId: null,
					system: "cancelled",
					at: now
				}]
			};
		});
		return {
			quotes,
			users,
			ads,
			orders
		};
	}),
	applyLive: (rows) => set((state) => {
		if (!rows.length) return state;
		const quotes = { ...state.quotes };
		const moves = { ...state.moves ?? {} };
		let changed = false;
		for (const row of rows) {
			if (!LIVE_SYMBOLS.has(row.symbol) || !(row.price > 0)) continue;
			quotes[row.symbol] = row.price;
			moves[row.symbol] = row.move;
			changed = true;
		}
		return changed ? {
			quotes,
			moves
		} : state;
	}),
	placeOrder: (adId, gross, rail) => {
		const state = get();
		const me = state.users.find((user) => user.id === state.meId);
		const ad = state.ads.find((item) => item.id === adId);
		if (!me || !ad || ad.paused) return null;
		if (me.suspended) {
			fail(set, "frozen");
			return null;
		}
		if (state.settings.deskOpen === false) {
			fail(set, "desk");
			return null;
		}
		const listed = state.coins.find((item) => item.symbol === ad.coin);
		if (!listed || listed.listed === false) {
			fail(set, "coinOff");
			return null;
		}
		const amount = round4(gross);
		if (!(amount > 0)) {
			fail(set, "amount");
			return null;
		}
		if (ad.userId === me.id) {
			fail(set, "own");
			return null;
		}
		const maker = state.users.find((user) => user.id === ad.userId);
		if ((me.blocked ?? []).includes(ad.userId) || (maker?.blocked ?? []).includes(me.id)) {
			fail(set, "blocked");
			return null;
		}
		if (ad.needKyc && !me.docLast4 && !state.kycs.some((item) => item.userId === me.id && item.status === "approved")) {
			fail(set, "kyc");
			return null;
		}
		if ((ad.minComp ?? 0) > 0 && me.completion < (ad.minComp ?? 0)) {
			fail(set, "completion");
			return null;
		}
		if (!ad.rails.includes(rail)) {
			fail(set, "payment");
			return null;
		}
		if (amount < ad.min || amount > ad.max) {
			fail(set, "limits");
			return null;
		}
		if (amount > ad.available + 1e-8) {
			fail(set, "available");
			return null;
		}
		const merchant = state.users.find((user) => user.id === ad.userId);
		if (!merchant || !merchantLive(merchant)) {
			fail(set, "merchant");
			return null;
		}
		const buyerId = ad.side === "sell" ? me.id : ad.userId;
		const sellerId = ad.side === "sell" ? ad.userId : me.id;
		const seller = state.users.find((user) => user.id === sellerId);
		if (!seller || !merchantLive(seller)) {
			fail(set, "merchant");
			return null;
		}
		if (ad.side === "sell") {
			if (!state.passes.find((item) => item.buyerId === me.id && item.sellerId === sellerId && item.status === "active")) {
				fail(set, "license");
				return null;
			}
		}
		const { buyerFee, sellerFee } = computeFees(amount, state.settings);
		if (round4(amount - buyerFee) <= 0) {
			fail(set, "fee");
			return null;
		}
		if ((seller.balances[ad.coin] ?? 0) + 1e-8 < sellerFee) {
			fail(set, "balance");
			return null;
		}
		if (ad.side === "buy" && (seller.balances[ad.coin] ?? 0) + 1e-8 < amount + sellerFee) {
			fail(set, "balance");
			return null;
		}
		const coin = state.coins.find((item) => item.symbol === ad.coin);
		const price = adPrice(ad, state.quotes, coin?.price);
		const now = Date.now();
		const chat = [{
			id: rid("m"),
			fromId: null,
			system: "created",
			at: now
		}];
		if (ad.autoReply?.trim()) chat.push({
			id: rid("m"),
			fromId: ad.userId,
			text: ad.autoReply.trim(),
			at: now
		});
		const order = {
			id: rid("o"),
			adId: ad.id,
			buyerId,
			sellerId,
			coin: ad.coin,
			fiat: ad.fiat,
			price,
			gross: amount,
			fiatTotal: round4(amount * price),
			buyerFee,
			sellerFee,
			rail,
			status: "created",
			escrow: round4(amount + sellerFee),
			createdAt: now,
			payBy: now + (ad.payMin || 15) * 6e4,
			messages: chat
		};
		set({
			ads: state.ads.map((item) => item.id === ad.id ? {
				...item,
				available: round4(item.available - amount)
			} : item),
			users: patchUser(state.users, sellerId, (user) => addBal(user, ad.coin, -(ad.side === "buy" ? amount + sellerFee : sellerFee))),
			orders: [order, ...state.orders],
			notice: { key: "system.created" }
		});
		return order.id;
	},
	markPaid: (orderId) => {
		const state = get();
		const order = state.orders.find((item) => item.id === orderId);
		if (!order || order.status !== "created" || order.buyerId !== state.meId) {
			fail(set, "forbidden");
			return;
		}
		const now = Date.now();
		set({ orders: state.orders.map((item) => item.id === orderId ? {
			...item,
			status: "paid",
			messages: [...item.messages, {
				id: rid("m"),
				fromId: null,
				system: "paid",
				at: now
			}]
		} : item) });
	},
	release: (orderId, asAdmin) => {
		const state = get();
		const me = state.users.find((user) => user.id === state.meId);
		const order = state.orders.find((item) => item.id === orderId);
		if (!me || !order) return;
		if (!OPEN.includes(order.status)) {
			fail(set, "closed");
			return;
		}
		const sellerOk = order.sellerId === me.id && merchantLive(me) && (order.status === "paid" || order.status === "disputed");
		if (!(asAdmin && me.isAdmin) && !sellerOk) {
			fail(set, "forbidden");
			return;
		}
		const now = Date.now();
		const net = round4(order.gross - order.buyerFee);
		set({
			users: patchUser(patchUser(state.users, order.buyerId, (user) => ({
				...addBal(user, order.coin, net),
				trades: user.trades + 1
			})), order.sellerId, (user) => ({
				...user,
				trades: user.trades + 1
			})),
			treasury: {
				...state.treasury,
				[order.coin]: round4((state.treasury[order.coin] ?? 0) + order.buyerFee + order.sellerFee)
			},
			fees: [{
				id: rid("f"),
				orderId: order.id,
				coin: order.coin,
				buyerFee: order.buyerFee,
				sellerFee: order.sellerFee,
				at: now
			}, ...state.fees],
			orders: state.orders.map((item) => item.id === orderId ? {
				...item,
				status: "released",
				escrow: 0,
				messages: [...item.messages, {
					id: rid("m"),
					fromId: null,
					system: "released",
					at: now
				}]
			} : item),
			audits: asAdmin ? pushAudit(state.audits, me.id, "admin.auditRelease", order.id) : state.audits ?? []
		});
	},
	cancelOrder: (orderId, asAdmin) => {
		const state = get();
		const me = state.users.find((user) => user.id === state.meId);
		const order = state.orders.find((item) => item.id === orderId);
		if (!me || !order) return;
		const party = order.buyerId === me.id || order.sellerId === me.id;
		if (!(asAdmin ? me.isAdmin : party) || !OPEN.includes(order.status)) {
			fail(set, order && !OPEN.includes(order.status) ? "closed" : "forbidden");
			return;
		}
		if (!asAdmin && order.status !== "created") {
			fail(set, "forbidden");
			return;
		}
		const now = Date.now();
		const back = unwind(state, order);
		let users = back.users;
		if (!asAdmin && order.buyerId === me.id) users = patchUser(users, me.id, (user) => ({
			...user,
			completion: Math.max(80, user.completion - 1)
		}));
		set({
			users,
			ads: back.ads,
			orders: state.orders.map((item) => item.id === orderId ? {
				...item,
				status: "cancelled",
				escrow: 0,
				messages: [...item.messages, {
					id: rid("m"),
					fromId: null,
					system: "cancelled",
					at: now
				}]
			} : item),
			audits: asAdmin ? pushAudit(state.audits, me.id, "admin.auditCancel", order.id) : state.audits ?? []
		});
	},
	dispute: (orderId, reason) => {
		const state = get();
		const order = state.orders.find((item) => item.id === orderId);
		if (!order || order.buyerId !== state.meId && order.sellerId !== state.meId) {
			fail(set, "forbidden");
			return;
		}
		if (order.status !== "paid" && order.status !== "created") {
			fail(set, "closed");
			return;
		}
		const now = Date.now();
		set({ orders: state.orders.map((item) => item.id === orderId ? {
			...item,
			status: "disputed",
			appealReason: reason ?? "not_released",
			messages: [...item.messages, {
				id: rid("m"),
				fromId: null,
				system: "disputed",
				at: now
			}]
		} : item) });
	},
	rateOrder: (orderId, score) => {
		const state = get();
		const order = state.orders.find((item) => item.id === orderId);
		if (!order || order.status !== "released") return;
		if (order.buyerId !== state.meId && order.sellerId !== state.meId) return;
		const rating = Math.max(1, Math.min(5, Math.round(score)));
		set({ orders: state.orders.map((item) => item.id === orderId ? {
			...item,
			rating
		} : item) });
	},
	toggleBlock: (userId) => {
		const state = get();
		if (userId === state.meId) return;
		set({ users: patchUser(state.users, state.meId, (user) => {
			const list = user.blocked ?? [];
			const blocked = list.includes(userId) ? list.filter((id) => id !== userId) : [...list, userId];
			return {
				...user,
				blocked
			};
		}) });
	},
	toggleFollow: (userId) => {
		const state = get();
		if (userId === state.meId) return;
		set({ users: patchUser(state.users, state.meId, (user) => {
			const list = user.following ?? [];
			const following = list.includes(userId) ? list.filter((id) => id !== userId) : [...list, userId];
			return {
				...user,
				following
			};
		}) });
	},
	takeBreak: () => {
		const state = get();
		set({ ads: state.ads.map((ad) => ad.userId === state.meId ? {
			...ad,
			paused: true
		} : ad) });
	},
	editAd: (adId, patch) => {
		const state = get();
		const ad = state.ads.find((item) => item.id === adId);
		if (!ad || ad.userId !== state.meId) return fail(set, "forbidden");
		if (patch.price != null && !(patch.price > 0)) return fail(set, "price");
		if (patch.min != null && patch.max != null && patch.min > patch.max) return fail(set, "range");
		if (patch.rails && (patch.rails.length === 0 || patch.rails.length > 5)) return fail(set, "rails");
		if (patch.payMin != null && ![
			15,
			30,
			60
		].includes(patch.payMin)) return fail(set, "amount");
		const next = { ...patch };
		if (patch.minComp != null) next.minComp = Math.max(0, Math.min(100, patch.minComp));
		if (patch.margin != null) next.margin = Math.max(1, Math.min(200, patch.margin));
		set({
			ads: state.ads.map((item) => item.id === adId ? {
				...item,
				...next
			} : item),
			notice: { key: "ads.saved" }
		});
		return true;
	},
	sendChat: (orderId, text) => {
		const clean = text.trim().slice(0, 500);
		if (!clean) return;
		const state = get();
		const order = state.orders.find((item) => item.id === orderId);
		if (!order) return;
		if (order.buyerId !== state.meId && order.sellerId !== state.meId && !state.users.find((user) => user.id === state.meId)?.isAdmin) return;
		set({ orders: state.orders.map((item) => item.id === orderId ? {
			...item,
			messages: [...item.messages, {
				id: rid("m"),
				fromId: state.meId,
				text: clean,
				at: Date.now()
			}]
		} : item) });
	},
	postAd: (input) => {
		const state = get();
		const me = state.users.find((user) => user.id === state.meId);
		if (!me || !merchantLive(me)) return fail(set, "merchant");
		if (me.suspended) return fail(set, "frozen");
		if (state.settings.deskOpen === false) return fail(set, "desk");
		const coin = state.coins.find((item) => item.symbol === input.coin);
		if (!coin || coin.listed === false) return fail(set, "coinOff");
		if (!(input.price > 0)) return fail(set, "price");
		if (!(input.min > 0) || !(input.max > 0) || !(input.inventory > 0)) return fail(set, "inventory");
		if (input.min > input.max) return fail(set, "range");
		if (input.inventory + 1e-8 < input.max) return fail(set, "inventory");
		if (input.rails.length === 0 || input.rails.length > 5) return fail(set, "rails");
		const have = new Set(state.payments.filter((item) => item.userId === me.id).map((item) => item.rail));
		if (input.rails.some((rail) => !have.has(rail))) return fail(set, "payment");
		if (input.side === "sell" && (me.balances[input.coin] ?? 0) + 1e-8 < input.inventory) return fail(set, "balance");
		const ad = {
			id: rid("ad"),
			userId: me.id,
			side: input.side,
			coin: input.coin,
			fiat: input.fiat,
			price: round4(input.price),
			min: round4(input.min),
			max: round4(input.max),
			available: round4(input.inventory),
			rails: input.rails,
			terms: input.terms.trim() || "__default__",
			paused: false,
			priceMode: input.priceMode ?? "fixed",
			margin: input.margin ?? 100,
			payMin: input.payMin && [
				15,
				30,
				60
			].includes(input.payMin) ? input.payMin : 15,
			autoReply: input.autoReply?.trim().slice(0, 240) || "",
			needKyc: !!input.needKyc,
			minComp: Math.max(0, Math.min(100, input.minComp ?? 0))
		};
		set({
			ads: [ad, ...state.ads],
			users: input.side === "sell" ? patchUser(state.users, me.id, (user) => addBal(user, input.coin, -ad.available)) : state.users,
			notice: { key: "ads.posted" }
		});
		return true;
	},
	toggleAd: (adId) => {
		const state = get();
		const ad = state.ads.find((item) => item.id === adId);
		if (!ad || ad.userId !== state.meId) return;
		set({ ads: state.ads.map((item) => item.id === adId ? {
			...item,
			paused: !item.paused
		} : item) });
	},
	closeAd: (adId) => {
		const state = get();
		const ad = state.ads.find((item) => item.id === adId);
		if (!ad || ad.userId !== state.meId) return;
		if (state.orders.some((order) => order.adId === adId && OPEN.includes(order.status))) {
			fail(set, "busy");
			return;
		}
		set({
			ads: state.ads.filter((item) => item.id !== adId),
			users: ad.side === "sell" ? patchUser(state.users, ad.userId, (user) => addBal(user, ad.coin, ad.available)) : state.users
		});
	},
	submitKyc: (input) => {
		const state = get();
		const me = state.users.find((user) => user.id === state.meId);
		if (!me) return false;
		if (!input.declared) return fail(set, "declare");
		if (input.name.trim().length < 3) return fail(set, "name");
		if (!input.country) return fail(set, "country");
		if (!/^\d{4}$/.test(input.last4)) return fail(set, "last4");
		if (input.docType === "tax_id" && !input.taxKind) return fail(set, "tax");
		const needBack = input.docType !== "passport";
		if (!input.front || !input.selfie || needBack && !input.back) return fail(set, "docs");
		if (input.purpose === "seller") {
			if (me.sellerLicense?.status === "active") return fail(set, "pass");
			if (state.kycs.some((item) => item.userId === me.id && item.purpose === "seller" && item.status === "pending")) return fail(set, "pending");
		} else {
			if (!input.sellerId || input.sellerId === me.id) return fail(set, "forbidden");
			if (state.passes.some((item) => item.buyerId === me.id && item.sellerId === input.sellerId && item.status === "active")) return fail(set, "pass");
			if (state.kycs.some((item) => item.userId === me.id && item.sellerId === input.sellerId && item.purpose === "buyer" && item.status === "pending")) return fail(set, "pending");
		}
		set({
			kycs: [{
				id: rid("k"),
				userId: me.id,
				purpose: input.purpose,
				sellerId: input.purpose === "buyer" ? input.sellerId ?? null : null,
				name: input.name.trim(),
				country: input.country,
				docType: input.docType,
				taxKind: input.docType === "tax_id" ? input.taxKind : null,
				last4: input.last4,
				status: "pending",
				at: Date.now(),
				reason: null,
				front: input.front,
				back: input.docType === "passport" ? false : input.back,
				selfie: input.selfie
			}, ...state.kycs],
			notice: { key: input.purpose === "seller" ? "kyc.pendingAdmin" : "kyc.pendingSeller" }
		});
		return true;
	},
	reviewSellerKyc: (kycId, approve, reason) => {
		const state = get();
		const me = state.users.find((user) => user.id === state.meId);
		const kyc = state.kycs.find((item) => item.id === kycId);
		if (!me?.isAdmin || !kyc || kyc.purpose !== "seller" || kyc.status !== "pending") {
			fail(set, "forbidden");
			return;
		}
		if (!approve && !reason) {
			fail(set, "why");
			return;
		}
		set({
			kycs: state.kycs.map((item) => item.id === kycId ? {
				...item,
				status: approve ? "approved" : "rejected",
				reason: approve ? null : reason
			} : item),
			users: approve ? patchUser(state.users, kyc.userId, (user) => ({
				...user,
				docLast4: kyc.last4,
				sellerLicense: {
					code: `${kyc.last4}${rand4()}`,
					status: "active",
					at: Date.now()
				}
			})) : state.users,
			audits: pushAudit(state.audits, me.id, approve ? "admin.auditKycYes" : "admin.auditKycNo", `${kyc.name} · ${kyc.last4}`),
			notice: { key: approve ? "kyc.approved" : "kyc.rejected" }
		});
	},
	reviewBuyerKyc: (kycId, approve) => {
		const state = get();
		const me = state.users.find((user) => user.id === state.meId);
		const kyc = state.kycs.find((item) => item.id === kycId);
		if (!me || !kyc || kyc.purpose !== "buyer" || kyc.sellerId !== me.id || kyc.status !== "pending") {
			fail(set, "forbidden");
			return;
		}
		if (!merchantLive(me) || me.docLast4.length !== 4) {
			fail(set, "merchant");
			return;
		}
		if (approve && state.passes.some((item) => item.buyerId === kyc.userId && item.sellerId === me.id && item.status === "active")) {
			fail(set, "pass");
			return;
		}
		const pass = approve ? {
			id: rid("p"),
			buyerId: kyc.userId,
			sellerId: me.id,
			code: `${me.docLast4}-${rand4()}`,
			status: "active",
			at: Date.now()
		} : null;
		set({
			kycs: state.kycs.map((item) => item.id === kycId ? {
				...item,
				status: approve ? "approved" : "rejected"
			} : item),
			passes: pass ? [pass, ...state.passes] : state.passes
		});
	},
	revokePass: (passId) => {
		const state = get();
		const pass = state.passes.find((item) => item.id === passId);
		if (!pass || pass.sellerId !== state.meId || pass.status !== "active") {
			fail(set, "forbidden");
			return;
		}
		set({ passes: state.passes.map((item) => item.id === passId ? {
			...item,
			status: "revoked"
		} : item) });
	},
	saveSettings: (settings) => {
		if (!get().users.find((user) => user.id === get().meId)?.isAdmin) return fail(set, "forbidden");
		if (settings.threshold <= 0 || settings.buyerPercent < 0 || settings.sellerPercent < 0 || settings.buyerFixed < 0 || settings.sellerFixed < 0) return fail(set, "amount");
		set({
			settings: {
				...settings,
				buyerPercent: round4(settings.buyerPercent),
				sellerPercent: round4(settings.sellerPercent),
				buyerFixed: round4(settings.buyerFixed),
				sellerFixed: round4(settings.sellerFixed),
				threshold: round4(settings.threshold),
				deskOpen: get().settings.deskOpen !== false
			},
			notice: { key: "admin.saved" }
		});
		return true;
	},
	requestWithdraw: (coin, amount, address, network) => {
		const state = get();
		const qty = round4(amount);
		const me = state.users.find((user) => user.id === state.meId);
		if (!me) return false;
		if (me.suspended || me.withdrawHold) return fail(set, "frozen");
		if (!(qty > 0)) return fail(set, "amount");
		const coinRow = state.coins.find((item) => item.symbol === coin);
		if (coinRow?.withdrawals === false) return fail(set, "coinOff");
		if ((coinRow?.minWithdraw ?? 0) > 0 && qty + 1e-8 < (coinRow?.minWithdraw ?? 0)) return fail(set, "minOut");
		if ((me.balances[coin] ?? 0) + 1e-8 < qty) return fail(set, "balance");
		if (address.trim().length < 8) return fail(set, "address");
		const status = (qty < state.settings.threshold ? state.settings.underMode : state.settings.overMode) === "automatic" ? "auto_sent" : "pending_admin";
		const row = {
			id: rid("w"),
			userId: me.id,
			coin,
			amount: qty,
			address: address.trim(),
			network,
			status,
			at: Date.now()
		};
		set({
			users: patchUser(state.users, me.id, (user) => addBal(user, coin, -qty)),
			withdrawals: [row, ...state.withdrawals],
			notice: { key: status === "auto_sent" ? "wallet.previewAuto" : "wallet.previewManual" }
		});
		return true;
	},
	reviewWithdraw: (id, send) => {
		const state = get();
		const me = state.users.find((user) => user.id === state.meId);
		const row = state.withdrawals.find((item) => item.id === id);
		if (!me?.isAdmin || !row || row.status !== "pending_admin") {
			fail(set, "forbidden");
			return;
		}
		set({
			withdrawals: state.withdrawals.map((item) => item.id === id ? {
				...item,
				status: send ? "sent" : "rejected"
			} : item),
			users: send ? state.users : patchUser(state.users, row.userId, (user) => addBal(user, row.coin, row.amount)),
			audits: pushAudit(state.audits, me.id, send ? "admin.auditSend" : "admin.auditReturn", `${row.amount} ${row.coin}`)
		});
	},
	addCoin: (input) => {
		const state = get();
		const me = state.users.find((user) => user.id === state.meId);
		if (!me?.isAdmin) return fail(set, "forbidden");
		const symbol = input.symbol.trim().toUpperCase();
		if (!/^[A-Z]{3,5}$/.test(symbol)) return fail(set, "symbol");
		if (state.coins.some((coin) => coin.symbol === symbol)) return fail(set, "duplicate");
		if (input.label.trim().length < 2) return fail(set, "name");
		if (!(input.price > 0) || input.minWithdraw < 0) return fail(set, "amount");
		const row = {
			symbol,
			price: round4(input.price),
			listed: true,
			label: input.label.trim(),
			minWithdraw: round4(input.minWithdraw),
			deposits: input.deposits,
			withdrawals: input.withdrawals
		};
		set({
			coins: [...state.coins, row],
			quotes: {
				...state.quotes,
				[symbol]: row.price
			},
			audits: pushAudit(state.audits, me.id, "admin.auditCoin", `${symbol} · ${row.label}`),
			notice: {
				key: "admin.added",
				vars: { coin: symbol }
			}
		});
		return true;
	},
	updateCoin: (symbol, patch) => {
		const state = get();
		const me = state.users.find((user) => user.id === state.meId);
		if (!me?.isAdmin) {
			fail(set, "forbidden");
			return;
		}
		const current = state.coins.find((coin) => coin.symbol === symbol);
		if (!current) return;
		const next = {
			...current,
			...patch,
			price: patch.price != null ? round4(patch.price) : current.price,
			minWithdraw: patch.minWithdraw != null ? round4(Math.max(0, patch.minWithdraw)) : current.minWithdraw
		};
		if (!(next.price > 0)) {
			fail(set, "price");
			return;
		}
		set({
			coins: state.coins.map((coin) => coin.symbol === symbol ? next : coin),
			quotes: patch.price != null ? {
				...state.quotes,
				[symbol]: next.price
			} : state.quotes,
			audits: pushAudit(state.audits, me.id, "admin.auditCoin", symbol),
			notice: {
				key: "admin.coinSaved",
				vars: { coin: symbol }
			}
		});
	},
	addPayment: (rail, label, details) => {
		const state = get();
		if (details.trim().length < 4) return fail(set, "address");
		const row = {
			id: rid("pm"),
			userId: state.meId,
			rail,
			label: label.trim(),
			details: details.trim()
		};
		set({
			payments: [...state.payments, row],
			notice: { key: "common.save" }
		});
		return true;
	},
	removePayment: (id) => {
		const state = get();
		set({ payments: state.payments.filter((item) => !(item.id === id && item.userId === state.meId)) });
	},
	practiceCredit: (coin) => {
		const state = get();
		if (state.coins.find((item) => item.symbol === coin)?.deposits === false) {
			fail(set, "coinOff");
			return;
		}
		set({
			users: patchUser(state.users, state.meId, (user) => addBal(user, coin, 100)),
			notice: { key: "wallet.topup" }
		});
	},
	setLicense: (userId, active) => {
		const state = get();
		const me = state.users.find((user) => user.id === state.meId);
		const target = state.users.find((user) => user.id === userId);
		if (!me?.isAdmin || !target?.sellerLicense) return fail(set, "forbidden");
		set({ users: patchUser(state.users, userId, (user) => ({
			...user,
			sellerLicense: user.sellerLicense ? {
				...user.sellerLicense,
				status: active ? "active" : "suspended"
			} : null
		})) });
	},
	setSeat: (userId, patch) => {
		const state = get();
		const me = state.users.find((user) => user.id === state.meId);
		const target = state.users.find((user) => user.id === userId);
		if (!me?.isAdmin || !target || target.isAdmin) return fail(set, "self");
		set({
			users: patchUser(state.users, userId, (user) => ({
				...user,
				...patch
			})),
			audits: pushAudit(state.audits, me.id, "admin.auditSeat", target.id),
			notice: { key: patch.suspended ? "admin.frozen" : "admin.saved" }
		});
	},
	setDeskOpen: (open) => {
		const state = get();
		const me = state.users.find((user) => user.id === state.meId);
		if (!me?.isAdmin) return fail(set, "forbidden");
		set({
			settings: {
				...state.settings,
				deskOpen: open
			},
			audits: pushAudit(state.audits, me.id, "admin.auditDesk", open ? "open" : "closed"),
			notice: { key: open ? "admin.deskOpen" : "admin.deskClosed" }
		});
	},
	reset: () => set({
		...fresh(),
		hydrated: true,
		notice: { key: "profile.done" }
	})
}), {
	name: "orvia-desk-v2",
	skipHydration: true,
	partialize: (state) => ({
		theme: state.theme,
		lang: state.lang,
		meId: state.meId,
		users: state.users,
		ads: state.ads,
		orders: state.orders,
		kycs: state.kycs,
		passes: state.passes,
		payments: state.payments,
		withdrawals: state.withdrawals,
		fees: state.fees,
		coins: state.coins,
		settings: state.settings,
		treasury: state.treasury,
		audits: state.audits
	})
}));
var books = {
	en: {
		brand: "ORVIA",
		product: "Desk",
		demo: "DLM CASH LABS PRIVATE LIMITED",
		tape: { live: "Live" },
		nav: {
			market: "P2P",
			express: "Express",
			orders: "Orders",
			wallet: "Wallet",
			post: "Post ad",
			passes: "Passes",
			payments: "Payments",
			identity: "Identity",
			admin: "Admin",
			guide: "Guide",
			profile: "Profile",
			more: "More"
		},
		theme: {
			day: "Day",
			night: "Night",
			dark: "Dark",
			label: "Appearance"
		},
		lang: {
			label: "Language",
			en: "English",
			hi: "Hindi",
			ur: "Urdu"
		},
		role: {
			buyer: "Buyer",
			seller: "Merchant",
			admin: "Admin",
			suspended: "Suspended"
		},
		side: {
			buy: "Buy",
			sell: "Sell"
		},
		mode: {
			percent: "Percent",
			fixed: "Fixed",
			both: "Both",
			automatic: "Automatic",
			manual: "Manual"
		},
		common: {
			all: "All",
			online: "Online",
			amount: "Amount",
			price: "Price",
			available: "Available",
			limits: "Limits",
			payment: "Payment",
			status: "Status",
			cancel: "Cancel",
			confirm: "Confirm",
			save: "Save",
			close: "Close",
			back: "Back",
			submit: "Submit",
			approve: "Approve",
			reject: "Reject",
			revoke: "Revoke",
			pending: "Pending",
			active: "Active",
			copy: "Copy",
			copied: "Copied",
			none: "Nothing here yet",
			you: "You",
			fee: "Fee",
			total: "Total",
			receive: "You receive",
			pay: "You pay",
			details: "Details",
			user: "Person",
			note: "Note",
			balance: "Balance",
			actions: "Actions",
			view: "Open",
			trades: "trades",
			completion: "completion",
			justNow: "Just now",
			minutes: "{n} min",
			hours: "{n} h",
			days: "{n} d",
			coin: "Coin",
			fiat: "Fiat",
			country: "Country",
			name: "Full name",
			merchant: "Merchant",
			terms: "Terms",
			search: "Search merchant",
			window: "Pay window",
			locked: "Locked",
			free: "Free",
			count: "{n} ads"
		},
		status: {
			created: "Awaiting payment",
			paid: "Paid, release coin",
			released: "Completed",
			cancelled: "Cancelled",
			disputed: "In dispute",
			pending_admin: "Waiting for admin",
			auto_sent: "Sent automatically",
			sent: "Sent by admin",
			rejected: "Rejected",
			suspended: "Suspended",
			revoked: "Revoked",
			approved: "Approved"
		},
		system: {
			created: "Order opened. Pay off the desk, then mark paid.",
			paid: "Buyer marked the fiat as paid.",
			released: "Coin released.",
			cancelled: "Order cancelled. Coin returned.",
			disputed: "Dispute opened. Admin can decide."
		},
		market: {
			sub: "Buy and sell practice coins with merchants. Fiat moves off this desk. Coin moves here only after release.",
			amountPh: "Fiat amount",
			empty: "No ad matches these filters.",
			yourAd: "Your ad",
			verify: "Verify",
			waiting: "In review",
			verified: "Licensed",
			onlineOnly: "Online only",
			followingOnly: "Following",
			float: "Floating price",
			minComp: "Needs {n}% completion",
			extraId: "Identity required"
		},
		trade: {
			titleBuy: "Buy coin",
			titleSell: "Sell coin",
			youPay: "You pay off the desk",
			youReceive: "You receive",
			buyerFee: "Buyer fee",
			sellerFee: "Seller fee",
			escrowNote: "Both fees settle in coin. The buyer fee is taken from the coin you receive. The seller fee is taken from the seller.",
			needPass: "A pass from {name} is required before the first buy. After approval you do not verify again, unless they revoke it.",
			kycTitle: "Identity for this merchant",
			confirm: "Open order",
			offDesk: "Fiat never sits on this desk.",
			chatEmpty: "No messages yet.",
			chatPh: "Write a message",
			send: "Send",
			markPaid: "I have paid",
			release: "Release coin",
			cancel: "Cancel order",
			dispute: "Open dispute",
			windowLeft: "Pay window",
			windowOver: "Pay window has passed. You can still mark paid.",
			private: "This order is not yours.",
			missing: "Order not found.",
			adminRelease: "Admin release",
			adminCancel: "Admin cancel",
			min: "Minimum",
			max: "Maximum",
			net: "After buyer fee",
			room: "Order room",
			rate: "Rate the counterparty",
			rated: "Your rating",
			block: "Block",
			unblock: "Unblock",
			follow: "Follow",
			unfollow: "Unfollow",
			appealWhy: "Reason",
			appeal: {
				not_released: "Coin was not released",
				wrong_name: "Name does not match",
				no_reply: "No reply",
				amount: "Amount is wrong"
			}
		},
		ads: {
			title: "Post an ad",
			sub: "Only a merchant with an active license can post. Selling locks coin from the wallet into the ad.",
			side: "Your side",
			price: "Price per coin",
			min: "Minimum coin",
			max: "Maximum coin",
			inventory: "Coin to offer or seek",
			rails: "Payment rails",
			termsPh: "Optional terms",
			defaultTerms: "Pay only the account shown in the order room. Mark paid only after the fiat leaves your account. Coin is released after that.",
			needLicense: "An active merchant license is required. Finish identity and wait for admin.",
			my: "Your ads",
			pause: "Pause",
			resume: "Resume",
			close: "Close ad",
			empty: "You have no ads.",
			posted: "Ad is live.",
			saved: "Ad updated.",
			busy: "Close the open orders on this ad first.",
			mode: "Price type",
			fixed: "Fixed",
			float: "Floating",
			margin: "Margin percent",
			window: "Payment window",
			auto: "Auto reply",
			autoPh: "Sent when an order opens",
			needId: "Require identity",
			minComp: "Minimum completion",
			break: "Take a break",
			edit: "Edit",
			railsCap: "Up to five rails"
		},
		orders: {
			title: "Orders",
			empty: "No orders for this seat yet.",
			missing: "Order not found.",
			private: "This order belongs to another seat.",
			counterparty: "Counterparty",
			room: "Order room",
			youBuy: "You buy",
			youSell: "You sell"
		},
		wallet: {
			title: "Wallet",
			sub: "Practice balances only. A transfer to another desk is completed by admin, unless the amount is under the limit and admin set it to automatic.",
			free: "Free",
			inAds: "In ads",
			inOrders: "In orders",
			pendingOut: "Waiting to send",
			ref: "Reference value",
			topup: "Practice top-up",
			topupNote: "Adds 100 practice coins. Nothing arrives from outside.",
			topupGo: "Add 100",
			withdraw: "Send out",
			address: "Destination address",
			addressPh: "Address on the other desk",
			network: "Path",
			amount: "Coin amount",
			limitIs: "Admin limit: {n} coins",
			previewAuto: "This request will be marked sent at once.",
			previewManual: "This request will wait until admin sends it.",
			history: "Transfers",
			empty: "No transfers yet.",
			policy: "How sending works"
		},
		kyc: {
			title: "Identity",
			sellerSub: "A merchant license comes from admin. Choose a national identity, a passport, or the tax number used in your country. Only the last four digits are kept.",
			buyerSub: "The merchant reviews this once. If they approve, you receive a pass: their four digits, then four random digits. You will not verify with them again unless they revoke the pass.",
			doc: "Document",
			last4: "Last four digits",
			last4Hint: "Exactly four digits. The rest of the number is never stored.",
			declare: "I confirm these four digits match my document, and I understand the full number is not stored.",
			tax: "Tax number type",
			submitSeller: "Ask admin for a merchant license",
			submitBuyer: "Send to merchant",
			pendingAdmin: "Waiting for admin.",
			pendingSeller: "Waiting for the merchant.",
			approved: "Approved.",
			rejected: "Rejected. You can send it again.",
			none: "No request yet.",
			forMerchant: "For {name}",
			held: "Current merchant license",
			front: "Front of the document",
			back: "Back of the document",
			selfie: "Face check",
			attach: "Mark attached",
			attached: "Attached",
			missing: "Not attached",
			docsNote: "This practice desk records only that a file was marked. No image is stored.",
			levelNone: "Not verified",
			levelPending: "In review",
			levelMerchant: "Merchant verified",
			levelRejected: "Needs a new check",
			why: "Reason",
			evidence: "Evidence",
			reasons: {
				incomplete: "Documents incomplete",
				blur: "Document unreadable",
				mismatch: "Name does not match the digits",
				expired: "Document is out of date"
			}
		},
		pass: {
			title: "Passes",
			sub: "A buyer pass is permanent with that merchant until they revoke it. Revoke means a new identity check. The merchant can approve a new request at any time.",
			merchantLicense: "Merchant license",
			noneLicense: "No merchant license on this seat.",
			code: "Code",
			yourPasses: "Passes you hold",
			issued: "Requests and passes you decide",
			emptyHeld: "You hold no pass yet. Verify from a merchant ad.",
			emptyIssued: "No buyer has asked you yet.",
			permanent: "Permanent with this merchant while active.",
			revokedNote: "Revoked. A new identity check is required before you can buy from them again.",
			by: "Merchant",
			grant: "Grant pass",
			deny: "Deny",
			holder: "Buyer",
			suspended: "License suspended by admin."
		},
		admin: {
			title: "Admin desk",
			gate: "Switch to the admin seat to manage fees, identity, and outgoing transfers.",
			switch: "Sit as admin",
			overview: "Overview",
			fees: "Fees",
			withdrawals: "Transfers",
			identity: "Identity",
			coins: "Coins",
			orders: "Orders",
			users: "People",
			policy: "Buyer and seller fees are separate. Use a percent, a fixed coin amount on each trade, or both together.",
			buyerPercent: "Buyer percent",
			sellerPercent: "Seller percent",
			buyerFixed: "Buyer fixed coin",
			sellerFixed: "Seller fixed coin",
			under: "Under the limit",
			over: "At the limit and above",
			threshold: "Limit in coin",
			save: "Save rules",
			saved: "Rules saved.",
			queueEmpty: "Queue is clear.",
			send: "Mark sent",
			reject: "Return coin",
			listed: "Listed",
			unlist: "Hide",
			list: "List",
			addCoin: "Issue a random coin",
			added: "Coin {coin} is listed.",
			newCoin: "New coin",
			suspend: "Suspend license",
			resume: "Restore license",
			openOrders: "Open orders",
			pendingKyc: "Identity waiting",
			pendingWd: "Transfers waiting",
			treasury: "Fees collected",
			noTreasury: "No fees yet.",
			merchantDecides: "The merchant decides buyer passes. This list is only for oversight.",
			sellerQueue: "Merchant license requests",
			people: "Seats",
			sendBody: "Outgoing coin to another desk is sent from this queue, except amounts under the limit when automatic is on.",
			noLicense: "No license",
			controls: "Controls",
			coinForm: "List a coin",
			symbol: "Symbol",
			coinName: "Name",
			refPrice: "Reference price",
			minOut: "Minimum send",
			deposits: "Practice deposits",
			withdrawalsOn: "Outgoing sends",
			on: "On",
			off: "Off",
			saveCoin: "Save coin",
			coinSaved: "Coin {coin} updated.",
			desk: "Desk",
			deskOpen: "Desk is open. New ads and orders are allowed.",
			deskClosed: "Desk is closed. No new ads or orders.",
			openDesk: "Open desk",
			closeDesk: "Close desk",
			holdOut: "Hold sends",
			releaseOut: "Allow sends",
			freeze: "Freeze seat",
			unfreeze: "Unfreeze seat",
			frozen: "Seat frozen. They cannot trade or send.",
			auditTitle: "Control log",
			auditEmpty: "No control has been used yet.",
			auditKycYes: "Approved merchant check · {detail}",
			auditKycNo: "Rejected merchant check · {detail}",
			auditCoin: "Coin change · {detail}",
			auditSeat: "Seat control · {detail}",
			auditDesk: "Desk · {detail}",
			auditRelease: "Forced release · {detail}",
			auditCancel: "Forced cancel · {detail}",
			auditSend: "Marked transfer sent · {detail}",
			auditReturn: "Returned transfer · {detail}",
			seats: "Seat controls"
		},
		pay: {
			title: "Payment methods",
			sub: "Shown inside an order so the buyer knows where fiat should go. Never a real collection account in this practice desk.",
			add: "Save method",
			rail: "Rail",
			label: "Name",
			details: "Destination",
			detailsPh: "Number or handle",
			saved: "Saved methods",
			remove: "Remove",
			empty: "No method saved.",
			need: "Save a payment method before you post."
		},
		express: {
			title: "Express",
			sub: "Type a fiat amount or a coin amount. The desk picks the best price, can skip ads that ask for extra identity, and opens the same order.",
			youGet: "Coin you get",
			best: "Best merchant",
			none: "No licensed ad matches.",
			go: "Continue",
			pay: "Fiat you pay",
			unitFiat: "Fiat amount",
			unitCoin: "Coin amount",
			skipId: "Skip ads that require extra identity",
			fee: "Fee",
			window: "Pay window",
			buySide: "Buy",
			sellSide: "Sell"
		},
		help: {
			title: "How this desk works",
			aT: "Two seats, one coin",
			aB: "A merchant posts an ad. A buyer takes it. Fiat is paid outside ORVIA. Coin stays locked until the merchant releases it.",
			bT: "Merchant license",
			bB: "Admin issues a merchant license after identity. Documents are a national identity, a passport, or the tax number of the country, such as PAN in India. Only the last four digits are stored.",
			cT: "Buyer pass",
			cB: "The first buy from a merchant needs identity with that merchant. They may grant a pass made of their four digits plus four random digits. Later buys skip identity. If they revoke the pass, identity is required again. They may approve a new request whenever they want.",
			dT: "Fees",
			dB: "Admin sets a buyer fee and a seller fee. Each can be a percent, a fixed amount of coin per trade, or both at once.",
			eT: "Sending coin out",
			eB: "A transfer to an address on another desk is completed by admin. If the amount is under the limit, admin can choose automatic or manual. The limit starts at five coins and can be changed.",
			fT: "What stays on the desk",
			fB: "Balances, orders, and licenses stay with this desk. Nothing is broadcast from here, and identity keeps only the last four digits."
		},
		profile: {
			title: "Profile",
			acting: "You are acting as",
			switch: "Switch seat",
			seat: "Roles on this desk stay in this browser. Merchants grant passes and release coin. Admin sets fees and transfers. Admin is not self-serve.",
			reset: "Restore desk data",
			resetWarn: "This restores the original ads, orders, and licenses.",
			resetDo: "Reset now",
			done: "Desk restored.",
			blocked: "Blocked",
			following: "Following",
			noneList: "None yet."
		},
		footer: {
			sim: "DLM CASH LABS PRIVATE LIMITED",
			rights: "ORVIA"
		},
		rail: {
			upi: "UPI",
			imps: "IMPS",
			bank: "Bank transfer",
			paytm: "Paytm",
			jazz: "JazzCash",
			easy: "Easypaisa",
			card: "Card"
		},
		fiatName: {
			INR: "Indian rupee",
			USD: "US dollar",
			PKR: "Pakistani rupee",
			AED: "UAE dirham",
			EUR: "Euro"
		},
		coinName: {
			ORB: "Orbit",
			VLT: "Vault",
			KYN: "Kyne",
			AUR: "Aura",
			PXN: "Pexon",
			LUM: "Lumen",
			NRX: "Nerix",
			HAL: "Halo",
			BTC: "Bitcoin",
			ETH: "Ethereum",
			USDT: "Tether",
			BNB: "BNB",
			XRP: "XRP",
			USDC: "USD Coin",
			SOL: "Solana",
			TRX: "Tron",
			ZEC: "Zcash",
			HYPE: "Hyperliquid"
		},
		country: {
			IN: "India",
			US: "United States",
			GB: "United Kingdom",
			PK: "Pakistan",
			AE: "United Arab Emirates",
			CA: "Canada",
			AU: "Australia",
			DE: "Germany",
			FR: "France",
			BR: "Brazil",
			NG: "Nigeria",
			ZA: "South Africa",
			SG: "Singapore",
			BD: "Bangladesh",
			NP: "Nepal",
			LK: "Sri Lanka",
			CN: "China",
			JP: "Japan",
			ID: "Indonesia",
			PH: "Philippines",
			KE: "Kenya",
			SA: "Saudi Arabia",
			TR: "Turkey",
			MX: "Mexico",
			ES: "Spain",
			IT: "Italy",
			NL: "Netherlands",
			QA: "Qatar"
		},
		tax: {
			PAN: "Permanent account number",
			SSN: "Social security number",
			ITIN: "Individual taxpayer number",
			UTR: "Unique taxpayer reference",
			NINO: "National insurance number",
			NTN: "National tax number",
			TRN: "Tax registration number",
			SIN: "Social insurance number",
			TFN: "Tax file number",
			STEUER: "Tax identification number",
			SPI: "Tax number",
			CF: "Fiscal code",
			NIF: "Tax identification number",
			BSN: "Citizen service number",
			CPF: "Natural persons register",
			RFC: "Federal taxpayer registry",
			TIN_NG: "Taxpayer identification number",
			SARS: "Revenue service number",
			NRIC: "National registration identity",
			TIN_BD: "Taxpayer identification number",
			PAN_NP: "Permanent account number",
			TIN_LK: "Taxpayer identification number",
			TIN_CN: "Taxpayer identification number",
			MYNO: "Individual number",
			NPWP: "Taxpayer registration number",
			TIN_PH: "Taxpayer identification number",
			KRA: "Revenue authority number",
			TIN_SA: "Taxpayer identification number",
			VKN: "Tax identity number",
			TIN_QA: "Tax card number"
		},
		doc: {
			national_id: "National identity",
			passport: "Passport",
			tax_id: "Tax number"
		},
		net: {
			mesh: "Orvia mesh",
			north: "North path",
			south: "South path"
		},
		err: {
			own: "You cannot take your own ad.",
			license: "You need an active pass from this merchant.",
			merchant: "Selling needs an active merchant license.",
			limits: "Amount is outside the ad limits.",
			available: "Not enough coin left on this ad.",
			balance: "Not enough free coin.",
			fee: "Fees would consume the whole trade. Raise the amount or lower the fees.",
			address: "Enter a destination of at least 8 characters.",
			amount: "Enter a valid amount.",
			rails: "Choose at least one payment rail.",
			price: "Enter a valid price.",
			inventory: "Enter how much coin the ad should hold.",
			range: "Minimum cannot exceed maximum.",
			name: "Enter the full name.",
			last4: "Enter exactly four digits.",
			pending: "A review is already open.",
			pass: "A pass is already active.",
			forbidden: "This seat cannot do that.",
			busy: "Open orders still use this ad.",
			declare: "Confirm the four digits first.",
			country: "Choose a country.",
			tax: "Choose the tax number type.",
			closed: "This order is already finished.",
			payment: "Choose a payment rail.",
			docs: "Attach the front, the back when required, and the face check.",
			symbol: "Use 3 to 5 letters for the symbol.",
			duplicate: "That symbol already exists.",
			frozen: "This seat is frozen.",
			desk: "The desk is closed for new trades.",
			coinOff: "This coin cannot move that way right now.",
			minOut: "Amount is under this coin's minimum send.",
			self: "The admin seat cannot be frozen.",
			why: "Choose a reason before you reject.",
			blocked: "One of you has blocked the other.",
			kyc: "This ad requires identity first.",
			completion: "Your completion is below this ad."
		}
	},
	hi: {
		brand: "ORVIA",
		product: "पटल",
		demo: "डीएलएम कैश लैब्स प्राइवेट लिमिटेड",
		tape: { live: "लाइव" },
		nav: {
			market: "बाज़ार",
			express: "त्वरित",
			orders: "सौदे",
			wallet: "बटुआ",
			post: "विज्ञापन",
			passes: "अनुज्ञप्ति",
			payments: "भुगतान",
			identity: "पहचान",
			admin: "प्रशासन",
			guide: "मार्गदर्शिका",
			profile: "खाता",
			more: "और"
		},
		theme: {
			day: "दिन",
			night: "रात",
			dark: "गहरा",
			label: "रूप"
		},
		lang: {
			label: "भाषा",
			en: "अंग्रेज़ी",
			hi: "हिन्दी",
			ur: "उर्दू"
		},
		role: {
			buyer: "खरीदार",
			seller: "व्यापारी",
			admin: "प्रशासन",
			suspended: "रोकी गई"
		},
		side: {
			buy: "खरीदें",
			sell: "बेचें"
		},
		mode: {
			percent: "प्रतिशत",
			fixed: "निश्चित",
			both: "दोनों",
			automatic: "स्वचालित",
			manual: "मानवी"
		},
		common: {
			all: "सभी",
			online: "उपस्थित",
			amount: "राशि",
			price: "मूल्य",
			available: "उपलब्ध",
			limits: "सीमा",
			payment: "भुगतान",
			status: "स्थिति",
			cancel: "रद्द करें",
			confirm: "पुष्टि करें",
			save: "सहेजें",
			close: "बंद करें",
			back: "वापस",
			submit: "जमा करें",
			approve: "स्वीकार करें",
			reject: "अस्वीकार करें",
			revoke: "वापस लें",
			pending: "प्रतीक्षा",
			active: "सक्रिय",
			copy: "प्रतिलिपि",
			copied: "प्रतिलिपि बन गई",
			none: "अभी यहाँ कुछ नहीं",
			you: "आप",
			fee: "शुल्क",
			total: "योग",
			receive: "आपको मिलेगा",
			pay: "आप देंगे",
			details: "विवरण",
			user: "व्यक्ति",
			note: "टिप्पणी",
			balance: "शेष",
			actions: "कार्य",
			view: "खोलें",
			trades: "सौदे",
			completion: "पूर्णता",
			justNow: "अभी",
			minutes: "{n} मिनट",
			hours: "{n} घंटे",
			days: "{n} दिन",
			coin: "सिक्का",
			fiat: "मुद्रा",
			country: "देश",
			name: "पूरा नाम",
			merchant: "व्यापारी",
			terms: "शर्तें",
			search: "व्यापारी खोजें",
			window: "भुगतान अवधि",
			locked: "अवरुद्ध",
			free: "मुक्त",
			count: "{n} विज्ञापन"
		},
		status: {
			created: "भुगतान की प्रतीक्षा",
			paid: "भुगतान हुआ, सिक्का छोड़ें",
			released: "पूर्ण",
			cancelled: "रद्द",
			disputed: "विवाद में",
			pending_admin: "प्रशासन की प्रतीक्षा",
			auto_sent: "स्वतः भेज दिया गया",
			sent: "प्रशासन ने भेजा",
			rejected: "अस्वीकृत",
			suspended: "रोकी गई",
			revoked: "वापस ली गई",
			approved: "स्वीकृत"
		},
		system: {
			created: "सौदा खुला। पटल के बाहर भुगतान करें, फिर भुगतान चिह्नित करें।",
			paid: "खरीदार ने मुद्रा भुगतान चिह्नित किया।",
			released: "सिक्का छोड़ दिया गया।",
			cancelled: "सौदा रद्द। सिक्का लौटा।",
			disputed: "विवाद खुला। प्रशासन निर्णय कर सकता है।"
		},
		market: {
			sub: "व्यापारियों के साथ अभ्यास सिक्के खरीदें और बेचें। मुद्रा इस पटल के बाहर जाती है। सिक्का यहीं तभी हिलता है जब व्यापारी उसे छोड़े।",
			amountPh: "मुद्रा राशि",
			empty: "इन छन्नी से कोई विज्ञापन नहीं मिला।",
			yourAd: "आपका विज्ञापन",
			verify: "पहचान करें",
			waiting: "समीक्षा में",
			verified: "अनुज्ञप्त",
			onlineOnly: "केवल उपस्थित",
			followingOnly: "अनुसरण",
			float: "चल मूल्य",
			minComp: "{n}% पूर्णता चाहिए",
			extraId: "पहचान आवश्यक"
		},
		trade: {
			titleBuy: "सिक्का खरीदें",
			titleSell: "सिक्का बेचें",
			youPay: "पटल के बाहर आप देंगे",
			youReceive: "आपको मिलेगा",
			buyerFee: "खरीदार शुल्क",
			sellerFee: "विक्रेता शुल्क",
			escrowNote: "दोनों शुल्क सिक्के में कटते हैं। खरीदार शुल्क मिलने वाले सिक्के से कटता है। विक्रेता शुल्क विक्रेता से कटता है।",
			needPass: "{name} से पहली खरीद से पहले अनुज्ञप्ति चाहिए। स्वीकृति के बाद फिर पहचान नहीं, जब तक वे उसे वापस न लें।",
			kycTitle: "इस व्यापारी के लिए पहचान",
			confirm: "सौदा खोलें",
			offDesk: "मुद्रा इस पटल पर नहीं ठहरती।",
			chatEmpty: "अभी कोई संदेश नहीं।",
			chatPh: "संदेश लिखें",
			send: "भेजें",
			markPaid: "मैंने भुगतान किया",
			release: "सिक्का छोड़ें",
			cancel: "सौदा रद्द करें",
			dispute: "विवाद खोलें",
			windowLeft: "भुगतान अवधि",
			windowOver: "भुगतान अवधि बीत गई। फिर भी भुगतान चिह्नित कर सकते हैं।",
			private: "यह सौदा आपका नहीं है।",
			missing: "सौदा नहीं मिला।",
			adminRelease: "प्रशासन छोड़े",
			adminCancel: "प्रशासन रद्द करे",
			min: "न्यूनतम",
			max: "अधिकतम",
			net: "खरीदार शुल्क के बाद",
			room: "सौदा कक्ष",
			rate: "दूसरे पक्ष को आँकें",
			rated: "आपका आँक",
			block: "रोकें",
			unblock: "रोक हटाएँ",
			follow: "अनुसरण करें",
			unfollow: "अनुसरण हटाएँ",
			appealWhy: "कारण",
			appeal: {
				not_released: "सिक्का नहीं छोड़ा गया",
				wrong_name: "नाम मेल नहीं खाता",
				no_reply: "कोई उत्तर नहीं",
				amount: "राशि गलत है"
			}
		},
		ads: {
			title: "विज्ञापन दें",
			sub: "केवल सक्रिय अनुज्ञप्ति वाला व्यापारी विज्ञापन दे सकता है। बेचने पर बटुए का सिक्का विज्ञापन में अवरुद्ध होता है।",
			side: "आपका पक्ष",
			price: "प्रति सिक्का मूल्य",
			min: "न्यूनतम सिक्का",
			max: "अधिकतम सिक्का",
			inventory: "जितना सिक्का देना या माँगना है",
			rails: "भुगतान मार्ग",
			termsPh: "वैकल्पिक शर्तें",
			defaultTerms: "केवल सौदा कक्ष में दिखाया खाता भरें। मुद्रा निकलने के बाद ही भुगतान चिह्नित करें। उसके बाद सिक्का छोड़ा जाता है।",
			needLicense: "सक्रिय व्यापारी अनुज्ञप्ति चाहिए। पहचान पूरी करें और प्रशासन की प्रतीक्षा करें।",
			my: "आपके विज्ञापन",
			pause: "रोकें",
			resume: "जारी करें",
			close: "विज्ञापन बंद करें",
			empty: "आपका कोई विज्ञापन नहीं।",
			posted: "विज्ञापन चल रहा है।",
			saved: "विज्ञापन अद्यतन।",
			busy: "पहले इस विज्ञापन के खुले सौदे बंद करें।",
			mode: "मूल्य का प्रकार",
			fixed: "निश्चित",
			float: "चल",
			margin: "हाशिया प्रतिशत",
			window: "भुगतान अवधि",
			auto: "स्वतः उत्तर",
			autoPh: "सौदा खुलते ही भेजा जाता है",
			needId: "पहचान आवश्यक",
			minComp: "न्यूनतम पूर्णता",
			break: "विराम लें",
			edit: "संपादित करें",
			railsCap: "अधिकतम पाँच मार्ग"
		},
		orders: {
			title: "सौदे",
			empty: "इस भूमिका में अभी कोई सौदा नहीं।",
			missing: "सौदा नहीं मिला।",
			private: "यह सौदा दूसरी सीट का है।",
			counterparty: "दूसरा पक्ष",
			room: "सौदा कक्ष",
			youBuy: "आप खरीद रहे हैं",
			youSell: "आप बेच रहे हैं"
		},
		wallet: {
			title: "बटुआ",
			sub: "केवल अभ्यास शेष। दूसरे पटल के पते पर सिक्का प्रशासन भेजता है, सिवाय जब राशि सीमा से कम हो और प्रशासन ने उसे स्वचालित रखा हो।",
			free: "मुक्त",
			inAds: "विज्ञापन में",
			inOrders: "सौदों में",
			pendingOut: "भेजने की प्रतीक्षा",
			ref: "संदर्भ मूल्य",
			topup: "अभ्यास वृद्धि",
			topupNote: "१०० अभ्यास सिक्के जुड़ते हैं। बाहर से कुछ नहीं आता।",
			topupGo: "१०० जोड़ें",
			withdraw: "बाहर भेजें",
			address: "गंतव्य पता",
			addressPh: "दूसरे पटल का पता",
			network: "मार्ग",
			amount: "सिक्का राशि",
			limitIs: "प्रशासन सीमा: {n} सिक्के",
			previewAuto: "यह अनुरोध तुरंत भेजा हुआ चिह्नित होगा।",
			previewManual: "यह अनुरोध तब तक रुकेगा जब तक प्रशासन न भेजे।",
			history: "अंतरण",
			empty: "अभी कोई अंतरण नहीं।",
			policy: "भेजने का ढंग"
		},
		kyc: {
			title: "पहचान",
			sellerSub: "व्यापारी अनुज्ञप्ति प्रशासन देता है। राष्ट्रीय पहचान, पारपत्र, या अपने देश का कर क्रमांक चुनें। भारत में यह पैन होता है। केवल अंतिम चार अंक रखे जाते हैं।",
			buyerSub: "व्यापारी इसे एक बार देखता है। स्वीकार करने पर अनुज्ञप्ति मिलती है: उनके चार अंक, फिर चार यादृच्छिक अंक। वे वापस न लें तो उनसे फिर पहचान नहीं करनी।",
			doc: "दस्तावेज़",
			last4: "अंतिम चार अंक",
			last4Hint: "ठीक चार अंक। शेष क्रमांक कभी संचित नहीं होता।",
			declare: "मैं पुष्टि करता हूँ कि ये चार अंक मेरे दस्तावेज़ से मेल खाते हैं, और पूरा क्रमांक संचित नहीं होता।",
			tax: "कर क्रमांक का प्रकार",
			submitSeller: "प्रशासन से व्यापारी अनुज्ञप्ति माँगें",
			submitBuyer: "व्यापारी को भेजें",
			pendingAdmin: "प्रशासन की प्रतीक्षा।",
			pendingSeller: "व्यापारी की प्रतीक्षा।",
			approved: "स्वीकृत।",
			rejected: "अस्वीकृत। फिर भेज सकते हैं।",
			none: "अभी कोई अनुरोध नहीं।",
			forMerchant: "{name} के लिए",
			held: "वर्तमान व्यापारी अनुज्ञप्ति",
			front: "दस्तावेज़ का अग्र भाग",
			back: "दस्तावेज़ का पृष्ठ भाग",
			selfie: "चेहरे की जाँच",
			attach: "संलग्न चिह्नित करें",
			attached: "संलग्न",
			missing: "संलग्न नहीं",
			docsNote: "यह अभ्यास पटल केवल यह दर्ज करता है कि फ़ाइल चिह्नित हुई। कोई चित्र संचित नहीं होता।",
			levelNone: "सत्यापित नहीं",
			levelPending: "समीक्षा में",
			levelMerchant: "व्यापारी सत्यापित",
			levelRejected: "नई जाँच चाहिए",
			why: "कारण",
			evidence: "साक्ष्य",
			reasons: {
				incomplete: "दस्तावेज़ अधूरे",
				blur: "दस्तावेज़ पढ़ा नहीं जा सका",
				mismatch: "नाम अंकों से नहीं मिलता",
				expired: "दस्तावेज़ पुराना है"
			}
		},
		pass: {
			title: "अनुज्ञप्ति",
			sub: "खरीदार अनुज्ञप्ति उस व्यापारी के साथ तब तक स्थायी है जब तक वे उसे वापस न लें। वापसी का अर्थ नई पहचान है। नया अनुरोध वे कभी भी स्वीकार कर सकते हैं।",
			merchantLicense: "व्यापारी अनुज्ञप्ति",
			noneLicense: "इस भूमिका में व्यापारी अनुज्ञप्ति नहीं।",
			code: "संकेत",
			yourPasses: "आपके पास अनुज्ञप्तियाँ",
			issued: "आप जिन अनुरोधों पर निर्णय करते हैं",
			emptyHeld: "अभी कोई अनुज्ञप्ति नहीं। व्यापारी के विज्ञापन से पहचान करें।",
			emptyIssued: "अभी किसी खरीदार ने नहीं पूछा।",
			permanent: "सक्रिय रहते इस व्यापारी के साथ स्थायी।",
			revokedNote: "वापस ली गई। उनसे फिर खरीदने से पहले नई पहचान चाहिए।",
			by: "व्यापारी",
			grant: "अनुज्ञप्ति दें",
			deny: "अस्वीकार करें",
			holder: "खरीदार",
			suspended: "प्रशासन ने अनुज्ञप्ति रोक दी।"
		},
		admin: {
			title: "प्रशासन पटल",
			gate: "शुल्क, पहचान और बाहर जाने वाले अंतरण के लिए प्रशासन की भूमिका चुनें।",
			switch: "प्रशासन बनें",
			overview: "सार",
			fees: "शुल्क",
			withdrawals: "अंतरण",
			identity: "पहचान",
			coins: "सिक्के",
			orders: "सौदे",
			users: "लोग",
			policy: "खरीदार और विक्रेता का शुल्क अलग है। प्रतिशत, हर सौदे पर निश्चित सिक्का, या दोनों एक साथ रख सकते हैं।",
			buyerPercent: "खरीदार प्रतिशत",
			sellerPercent: "विक्रेता प्रतिशत",
			buyerFixed: "खरीदार निश्चित सिक्का",
			sellerFixed: "विक्रेता निश्चित सिक्का",
			under: "सीमा से कम",
			over: "सीमा पर और उससे अधिक",
			threshold: "सिक्के में सीमा",
			save: "नियम सहेजें",
			saved: "नियम सहेजे गए।",
			queueEmpty: "कतार खाली है।",
			send: "भेजा चिह्नित करें",
			reject: "सिक्का लौटाएँ",
			listed: "सूची में",
			unlist: "छिपाएँ",
			list: "दिखाएँ",
			addCoin: "यादृच्छिक सिक्का जारी करें",
			added: "सिक्का {coin} सूची में है।",
			newCoin: "नया सिक्का",
			suspend: "अनुज्ञप्ति रोकें",
			resume: "अनुज्ञप्ति लौटाएँ",
			openOrders: "खुले सौदे",
			pendingKyc: "पहचान प्रतीक्षा",
			pendingWd: "अंतरण प्रतीक्षा",
			treasury: "एकत्र शुल्क",
			noTreasury: "अभी शुल्क नहीं।",
			merchantDecides: "खरीदार अनुज्ञप्ति व्यापारी तय करता है। यह सूची केवल देखरेख के लिए है।",
			sellerQueue: "व्यापारी अनुज्ञप्ति के अनुरोध",
			people: "भूमिकाएँ",
			sendBody: "दूसरे पटल पर जाने वाला सिक्का इसी कतार से भेजा जाता है, सिवाय सीमा से कम राशि के जब स्वचालित चुना हो।",
			noLicense: "अनुज्ञप्ति नहीं",
			controls: "नियंत्रण",
			coinForm: "सिक्का सूची में रखें",
			symbol: "संकेत",
			coinName: "नाम",
			refPrice: "संदर्भ मूल्य",
			minOut: "न्यूनतम प्रेषण",
			deposits: "अभ्यास जमा",
			withdrawalsOn: "बाहर भेजना",
			on: "चालू",
			off: "बंद",
			saveCoin: "सिक्का सहेजें",
			coinSaved: "सिक्का {coin} अद्यतन हुआ।",
			desk: "पटल",
			deskOpen: "पटल खुला है। नए विज्ञापन और सौदे चलेंगे।",
			deskClosed: "पटल बंद है। नए विज्ञापन या सौदे नहीं।",
			openDesk: "पटल खोलें",
			closeDesk: "पटल बंद करें",
			holdOut: "प्रेषण रोकें",
			releaseOut: "प्रेषण चालू करें",
			freeze: "भूमिका रोकें",
			unfreeze: "भूमिका खोलें",
			frozen: "भूमिका रुकी। वे सौदा या प्रेषण नहीं कर सकते।",
			auditTitle: "नियंत्रण पत्र",
			auditEmpty: "अभी कोई नियंत्रण नहीं हुआ।",
			auditKycYes: "व्यापारी जाँच स्वीकृत · {detail}",
			auditKycNo: "व्यापारी जाँच अस्वीकृत · {detail}",
			auditCoin: "सिक्का परिवर्तन · {detail}",
			auditSeat: "भूमिका नियंत्रण · {detail}",
			auditDesk: "पटल · {detail}",
			auditRelease: "बलपूर्वक मुक्त · {detail}",
			auditCancel: "बलपूर्वक रद्द · {detail}",
			auditSend: "अंतरण भेजा चिह्नित · {detail}",
			auditReturn: "अंतरण लौटाया · {detail}",
			seats: "भूमिका नियंत्रण"
		},
		pay: {
			title: "भुगतान साधन",
			sub: "सौदा कक्ष में दिखाया जाता है ताकि खरीदार जाने मुद्रा कहाँ जानी है। इस अभ्यास पटल पर कोई वास्तविक संग्रह खाता नहीं।",
			add: "साधन सहेजें",
			rail: "मार्ग",
			label: "नाम",
			details: "गंतव्य",
			detailsPh: "क्रमांक या पता",
			saved: "सहेजे साधन",
			remove: "हटाएँ",
			empty: "कोई साधन नहीं।",
			need: "विज्ञापन से पहले एक भुगतान साधन सहेजें।"
		},
		express: {
			title: "त्वरित",
			sub: "मुद्रा की राशि या सिक्के की राशि लिखें। पटल सबसे अच्छा मूल्य चुनता है। अतिरिक्त पहचान वाले विज्ञापन छोड़े जा सकते हैं। सौदा वही खुलता है।",
			youGet: "जितना सिक्का मिलेगा",
			best: "सर्वोत्तम व्यापारी",
			none: "कोई अनुज्ञप्त विज्ञापन नहीं मिला।",
			go: "आगे बढ़ें",
			pay: "जितनी मुद्रा देंगे",
			unitFiat: "मुद्रा की राशि",
			unitCoin: "सिक्के की राशि",
			skipId: "अतिरिक्त पहचान वाले विज्ञापन छोड़ें",
			fee: "शुल्क",
			window: "भुगतान अवधि",
			buySide: "खरीदें",
			sellSide: "बेचें"
		},
		help: {
			title: "यह पटल कैसे चलता है",
			aT: "दो सीटें, एक सिक्का",
			aB: "व्यापारी विज्ञापन देता है। खरीदार उसे लेता है। मुद्रा ओर्विया के बाहर दी जाती है। सिक्का तब तक अवरुद्ध रहता है जब तक व्यापारी उसे न छोड़े।",
			bT: "व्यापारी अनुज्ञप्ति",
			bB: "पहचान के बाद प्रशासन व्यापारी अनुज्ञप्ति देता है। दस्तावेज़ राष्ट्रीय पहचान, पारपत्र, या देश का कर क्रमांक होता है, जैसे भारत में पैन। केवल अंतिम चार अंक रखे जाते हैं।",
			cT: "खरीदार अनुज्ञप्ति",
			cB: "किसी व्यापारी से पहली खरीद पर उसी से पहचान होती है। वे अपनी चार अंकों और चार यादृच्छिक अंकों की अनुज्ञप्ति दे सकते हैं। बाद की खरीद में पहचान नहीं। वापस लेने पर पहचान फिर चाहिए। नया अनुरोध वे जब चाहें स्वीकार कर सकते हैं।",
			dT: "शुल्क",
			dB: "प्रशासन खरीदार शुल्क और विक्रेता शुल्क अलग रखता है। हर एक प्रतिशत हो सकता है, हर सौदे पर निश्चित सिक्का हो सकता है, या दोनों एक साथ।",
			eT: "सिक्का बाहर भेजना",
			eB: "दूसरे पटल के पते पर अंतरण प्रशासन पूरा करता है। राशि सीमा से कम हो तो प्रशासन स्वचालित या मानवी चुन सकता है। सीमा पाँच सिक्कों से शुरू होती है और बदली जा सकती है।",
			fT: "पटल पर क्या रहता है",
			fB: "शेष, सौदे और अनुज्ञप्ति इसी पटल के साथ रहते हैं। यहाँ से कुछ प्रसारित नहीं होता, और पहचान में केवल अंतिम चार अंक रहते हैं।"
		},
		profile: {
			title: "खाता",
			acting: "आप इस रूप में हैं",
			switch: "भूमिका बदलें",
			seat: "इस पटल की भूमिकाएँ इसी ब्राउज़र में रहती हैं। व्यापारी अनुज्ञप्ति देता है और सिक्का छोड़ता है। प्रशासन शुल्क और अंतरण रखता है। प्रशासन स्वयं नहीं खुलता।",
			reset: "पटल आँकड़े पुनःस्थापित करें",
			resetWarn: "इससे मूल विज्ञापन, सौदे और अनुज्ञप्ति लौट आती हैं।",
			resetDo: "अभी पुनःस्थापित करें",
			done: "पटल लौट आया।",
			blocked: "रोके हुए",
			following: "अनुसरण",
			noneList: "अभी कोई नहीं।"
		},
		footer: {
			sim: "डीएलएम कैश लैब्स प्राइवेट लिमिटेड",
			rights: "ओर्विया"
		},
		rail: {
			upi: "यूपीआई",
			imps: "आईएमपीएस",
			bank: "बैंक हस्तांतरण",
			paytm: "पेटीएम",
			jazz: "जैज़कैश",
			easy: "ईज़ीपैसा",
			card: "भुगतान पत्र"
		},
		fiatName: {
			INR: "भारतीय रुपया",
			USD: "अमेरिकी डॉलर",
			PKR: "पाकिस्तानी रुपया",
			AED: "अमीरात दिरहम",
			EUR: "यूरो"
		},
		coinName: {
			ORB: "ऑर्बिट",
			VLT: "वॉल्ट",
			KYN: "काइन",
			AUR: "ऑरा",
			PXN: "पेक्सन",
			LUM: "ल्यूमेन",
			NRX: "नेरिक्स",
			HAL: "हेलो",
			BTC: "बिटकॉइन",
			ETH: "एथेरियम",
			USDT: "टेथर",
			BNB: "बीएनबी",
			XRP: "एक्सआरपी",
			USDC: "अमेरिकी सिक्का",
			SOL: "सोलाना",
			TRX: "ट्रॉन",
			ZEC: "ज़कैश",
			HYPE: "हाइपरलिक्विड"
		},
		country: {
			IN: "भारत",
			US: "संयुक्त राज्य",
			GB: "ब्रिटेन",
			PK: "पाकिस्तान",
			AE: "संयुक्त अरब अमीरात",
			CA: "कनाडा",
			AU: "ऑस्ट्रेलिया",
			DE: "जर्मनी",
			FR: "फ़्रांस",
			BR: "ब्राज़ील",
			NG: "नाइजीरिया",
			ZA: "दक्षिण अफ़्रीका",
			SG: "सिंगापुर",
			BD: "बांग्लादेश",
			NP: "नेपाल",
			LK: "श्रीलंका",
			CN: "चीन",
			JP: "जापान",
			ID: "इंडोनेशिया",
			PH: "फ़िलिपींस",
			KE: "केन्या",
			SA: "सऊदी अरब",
			TR: "तुर्की",
			MX: "मेक्सिको",
			ES: "स्पेन",
			IT: "इटली",
			NL: "नीदरलैंड",
			QA: "क़तर"
		},
		tax: {
			PAN: "स्थायी खाता संख्या",
			SSN: "सामाजिक सुरक्षा संख्या",
			ITIN: "व्यक्तिगत करदाता संख्या",
			UTR: "अद्वितीय करदाता संदर्भ",
			NINO: "राष्ट्रीय बीमा संख्या",
			NTN: "राष्ट्रीय कर संख्या",
			TRN: "कर पंजीकरण संख्या",
			SIN: "सामाजिक बीमा संख्या",
			TFN: "कर संचिका संख्या",
			STEUER: "कर पहचान संख्या",
			SPI: "कर संख्या",
			CF: "राजकोषीय संकेत",
			NIF: "कर पहचान संख्या",
			BSN: "नागरिक सेवा संख्या",
			CPF: "प्राकृतिक व्यक्ति पंजी",
			RFC: "संघीय करदाता पंजी",
			TIN_NG: "करदाता पहचान संख्या",
			SARS: "राजस्व सेवा संख्या",
			NRIC: "राष्ट्रीय पंजी पहचान",
			TIN_BD: "करदाता पहचान संख्या",
			PAN_NP: "स्थायी खाता संख्या",
			TIN_LK: "करदाता पहचान संख्या",
			TIN_CN: "करदाता पहचान संख्या",
			MYNO: "व्यक्तिगत संख्या",
			NPWP: "करदाता पंजी संख्या",
			TIN_PH: "करदाता पहचान संख्या",
			KRA: "राजस्व प्राधिकरण संख्या",
			TIN_SA: "करदाता पहचान संख्या",
			VKN: "कर पहचान संख्या",
			TIN_QA: "कर पत्र संख्या"
		},
		doc: {
			national_id: "राष्ट्रीय पहचान",
			passport: "पारपत्र",
			tax_id: "कर क्रमांक"
		},
		net: {
			mesh: "ओर्विया जाल",
			north: "उत्तरी मार्ग",
			south: "दक्षिणी मार्ग"
		},
		err: {
			own: "अपना विज्ञापन नहीं ले सकते।",
			license: "इस व्यापारी की सक्रिय अनुज्ञप्ति चाहिए।",
			merchant: "बेचने के लिए सक्रिय व्यापारी अनुज्ञप्ति चाहिए।",
			limits: "राशि विज्ञापन की सीमा से बाहर है।",
			available: "इस विज्ञापन में पर्याप्त सिक्का नहीं।",
			balance: "मुक्त सिक्का पर्याप्त नहीं।",
			fee: "शुल्क पूरे सौदे को खा जाएगा। राशि बढ़ाएँ या शुल्क घटाएँ।",
			address: "कम से कम ८ अक्षरों का गंतव्य लिखें।",
			amount: "मान्य राशि लिखें।",
			rails: "कम से कम एक भुगतान मार्ग चुनें।",
			price: "मान्य मूल्य लिखें।",
			inventory: "विज्ञापन में कितना सिक्का हो, लिखें।",
			range: "न्यूनतम, अधिकतम से बड़ा नहीं हो सकता।",
			name: "पूरा नाम लिखें।",
			last4: "ठीक चार अंक लिखें।",
			pending: "एक समीक्षा पहले से खुली है।",
			pass: "अनुज्ञप्ति पहले से सक्रिय है।",
			forbidden: "यह भूमिका यह नहीं कर सकती।",
			busy: "खुले सौदे अभी इस विज्ञापन पर हैं।",
			declare: "पहले चार अंकों की पुष्टि करें।",
			country: "देश चुनें।",
			tax: "कर क्रमांक का प्रकार चुनें।",
			closed: "यह सौदा पहले ही समाप्त है।",
			payment: "भुगतान मार्ग चुनें।",
			docs: "अग्र भाग, आवश्यक होने पर पृष्ठ भाग, और चेहरे की जाँच संलग्न करें।",
			symbol: "संकेत में ३ से ५ अक्षर लिखें।",
			duplicate: "यह संकेत पहले से है।",
			frozen: "यह भूमिका रुकी हुई है।",
			desk: "नए सौदों के लिए पटल बंद है।",
			coinOff: "यह सिक्का अभी इस दिशा में नहीं चल सकता।",
			minOut: "राशि इस सिक्के की न्यूनतम प्रेषण से कम है।",
			self: "प्रशासन की भूमिका नहीं रोकी जा सकती।",
			why: "अस्वीकार करने से पहले कारण चुनें।",
			blocked: "आपमें से किसी ने दूसरे को रोका है।",
			kyc: "इस विज्ञापन के लिए पहले पहचान चाहिए।",
			completion: "आपकी पूर्णता इस विज्ञापन से कम है।"
		}
	},
	ur: {
		brand: "ORVIA",
		product: "پٹل",
		demo: "ڈی ایل ایم کیش لیبز پرائیویٹ لمیٹڈ",
		tape: { live: "لائیو" },
		nav: {
			market: "منڈی",
			express: "فوری",
			orders: "سودے",
			wallet: "بٹوا",
			post: "اشتہار",
			passes: "اجازت نامے",
			payments: "ادائیگی",
			identity: "شناخت",
			admin: "انتظام",
			guide: "رہنما",
			profile: "کھاتہ",
			more: "مزید"
		},
		theme: {
			day: "دن",
			night: "رات",
			dark: "گہرا",
			label: "روپ"
		},
		lang: {
			label: "زبان",
			en: "انگریزی",
			hi: "ہندی",
			ur: "اردو"
		},
		role: {
			buyer: "خریدار",
			seller: "تاجر",
			admin: "انتظام",
			suspended: "روکی ہوئی"
		},
		side: {
			buy: "خریدیں",
			sell: "بیچیں"
		},
		mode: {
			percent: "فیصد",
			fixed: "مقرر",
			both: "دونوں",
			automatic: "خودکار",
			manual: "دستی"
		},
		common: {
			all: "سب",
			online: "موجود",
			amount: "رقم",
			price: "قیمت",
			available: "دستیاب",
			limits: "حد",
			payment: "ادائیگی",
			status: "حالت",
			cancel: "منسوخ",
			confirm: "تصدیق",
			save: "محفوظ کریں",
			close: "بند کریں",
			back: "واپس",
			submit: "جمع کریں",
			approve: "منظور",
			reject: "رد",
			revoke: "واپس لیں",
			pending: "انتظار",
			active: "فعال",
			copy: "نقل",
			copied: "نقل ہو گئی",
			none: "ابھی یہاں کچھ نہیں",
			you: "آپ",
			fee: "محصول",
			total: "کل",
			receive: "آپ پائیں گے",
			pay: "آپ دیں گے",
			details: "تفصیل",
			user: "شخص",
			note: "نوٹ",
			balance: "باقی",
			actions: "اعمال",
			view: "کھولیں",
			trades: "سودے",
			completion: "تکمیل",
			justNow: "ابھی",
			minutes: "{n} منٹ",
			hours: "{n} گھنٹے",
			days: "{n} دن",
			coin: "سکہ",
			fiat: "کرنسی",
			country: "ملک",
			name: "پورا نام",
			merchant: "تاجر",
			terms: "شرائط",
			search: "تاجر تلاش کریں",
			window: "ادائیگی کی مدت",
			locked: "روکا ہوا",
			free: "آزاد",
			count: "{n} اشتہار"
		},
		status: {
			created: "ادائیگی کا انتظار",
			paid: "ادائیگی ہوئی، سکہ چھوڑیں",
			released: "مکمل",
			cancelled: "منسوخ",
			disputed: "تنازع میں",
			pending_admin: "انتظام کا انتظار",
			auto_sent: "خود بخود بھیج دیا گیا",
			sent: "انتظام نے بھیجا",
			rejected: "رد شدہ",
			suspended: "روکی ہوئی",
			revoked: "واپس لی گئی",
			approved: "منظور شدہ"
		},
		system: {
			created: "سودا کھلا۔ پٹل کے باہر ادائیگی کریں، پھر ادائیگی نشان زد کریں۔",
			paid: "خریدار نے کرنسی کی ادائیگی نشان زد کی۔",
			released: "سکہ چھوڑ دیا گیا۔",
			cancelled: "سودا منسوخ۔ سکہ واپس۔",
			disputed: "تنازع کھلا۔ انتظام فیصلہ کر سکتا ہے۔"
		},
		market: {
			sub: "تاجروں کے ساتھ مشق کے سکے خریدیں اور بیچیں۔ کرنسی اس پٹل کے باہر جاتی ہے۔ سکہ یہیں تب ہلتا ہے جب تاجر اسے چھوڑے۔",
			amountPh: "کرنسی کی رقم",
			empty: "ان چھلنیوں سے کوئی اشتہار نہیں ملا۔",
			yourAd: "آپ کا اشتہار",
			verify: "شناخت کریں",
			waiting: "جائزے میں",
			verified: "مجاز",
			onlineOnly: "صرف موجود",
			followingOnly: "پیروی",
			float: "چلتی قیمت",
			minComp: "{n}% تکمیل چاہیے",
			extraId: "شناخت ضروری"
		},
		trade: {
			titleBuy: "سکہ خریدیں",
			titleSell: "سکہ بیچیں",
			youPay: "پٹل کے باہر آپ دیں گے",
			youReceive: "آپ پائیں گے",
			buyerFee: "خریدار کا محصول",
			sellerFee: "بیچنے والے کا محصول",
			escrowNote: "دونوں محصول سکے میں کٹتے ہیں۔ خریدار کا محصول ملنے والے سکے سے کٹتا ہے۔ بیچنے والے کا محصول بیچنے والے سے کٹتا ہے۔",
			needPass: "{name} سے پہلی خرید سے پہلے اجازت نامہ چاہیے۔ منظوری کے بعد پھر شناخت نہیں، جب تک وہ اسے واپس نہ لیں۔",
			kycTitle: "اس تاجر کے لیے شناخت",
			confirm: "سودا کھولیں",
			offDesk: "کرنسی اس پٹل پر نہیں ٹھہرتی۔",
			chatEmpty: "ابھی کوئی پیغام نہیں۔",
			chatPh: "پیغام لکھیں",
			send: "بھیجیں",
			markPaid: "میں نے ادائیگی کر دی",
			release: "سکہ چھوڑیں",
			cancel: "سودا منسوخ کریں",
			dispute: "تنازع کھولیں",
			windowLeft: "ادائیگی کی مدت",
			windowOver: "ادائیگی کی مدت گزر گئی۔ پھر بھی ادائیگی نشان زد کر سکتے ہیں۔",
			private: "یہ سودا آپ کا نہیں۔",
			missing: "سودا نہیں ملا۔",
			adminRelease: "انتظام چھوڑے",
			adminCancel: "انتظام منسوخ کرے",
			min: "کم از کم",
			max: "زیادہ سے زیادہ",
			net: "خریدار کے محصول کے بعد",
			room: "سودے کا کمرہ",
			rate: "دوسرے فریق کو ناپیں",
			rated: "آپ کا ناپ",
			block: "روکیں",
			unblock: "روک ہٹائیں",
			follow: "پیروی کریں",
			unfollow: "پیروی ہٹائیں",
			appealWhy: "وجہ",
			appeal: {
				not_released: "سکہ نہیں چھوڑا گیا",
				wrong_name: "نام میل نہیں کھاتا",
				no_reply: "کوئی جواب نہیں",
				amount: "رقم غلط ہے"
			}
		},
		ads: {
			title: "اشتہار دیں",
			sub: "صرف فعال اجازت نامے والا تاجر اشتہار دے سکتا ہے۔ بیچنے پر بٹوے کا سکہ اشتہار میں رک جاتا ہے۔",
			side: "آپ کا رخ",
			price: "فی سکہ قیمت",
			min: "کم از کم سکہ",
			max: "زیادہ سے زیادہ سکہ",
			inventory: "جتنا سکہ دینا یا مانگنا ہے",
			rails: "ادائیگی کے راستے",
			termsPh: "اختیاری شرائط",
			defaultTerms: "صرف سودے کے کمرے میں دکھایا کھاتہ بھریں۔ کرنسی نکلنے کے بعد ہی ادائیگی نشان زد کریں۔ اس کے بعد سکہ چھوڑا جاتا ہے۔",
			needLicense: "فعال تاجر اجازت نامہ چاہیے۔ شناخت مکمل کریں اور انتظام کا انتظار کریں۔",
			my: "آپ کے اشتہار",
			pause: "روکیں",
			resume: "جاری کریں",
			close: "اشتہار بند کریں",
			empty: "آپ کا کوئی اشتہار نہیں۔",
			posted: "اشتہار چل رہا ہے۔",
			saved: "اشتہار تازہ ہو گیا۔",
			busy: "پہلے اس اشتہار کے کھلے سودے بند کریں۔",
			mode: "قیمت کی قسم",
			fixed: "مقرر",
			float: "چلتی",
			margin: "حاشیہ فیصد",
			window: "ادائیگی کی مدت",
			auto: "خودکار جواب",
			autoPh: "سودا کھلتے ہی بھیجا جاتا ہے",
			needId: "شناخت ضروری",
			minComp: "کم از کم تکمیل",
			break: "وقفہ لیں",
			edit: "ترمیم",
			railsCap: "زیادہ سے زیادہ پانچ راستے"
		},
		orders: {
			title: "سودے",
			empty: "اس نشست پر ابھی کوئی سودا نہیں۔",
			missing: "سودا نہیں ملا۔",
			private: "یہ سودا دوسری نشست کا ہے۔",
			counterparty: "دوسرا فریق",
			room: "سودے کا کمرہ",
			youBuy: "آپ خرید رہے ہیں",
			youSell: "آپ بیچ رہے ہیں"
		},
		wallet: {
			title: "بٹوا",
			sub: "صرف مشق کا باقی۔ دوسرے پٹل کے پتے پر سکہ انتظام بھیجتا ہے، سوائے جب رقم حد سے کم ہو اور انتظام نے اسے خودکار رکھا ہو۔",
			free: "آزاد",
			inAds: "اشتہار میں",
			inOrders: "سودوں میں",
			pendingOut: "بھیجنے کا انتظار",
			ref: "حوالہ قیمت",
			topup: "مشق کا اضافہ",
			topupNote: "۱۰۰ مشق کے سکے جڑتے ہیں۔ باہر سے کچھ نہیں آتا۔",
			topupGo: "۱۰۰ جوڑیں",
			withdraw: "باہر بھیجیں",
			address: "منزل کا پتہ",
			addressPh: "دوسرے پٹل کا پتہ",
			network: "راستہ",
			amount: "سکے کی رقم",
			limitIs: "انتظام کی حد: {n} سکے",
			previewAuto: "یہ درخواست فوراً بھیجی ہوئی نشان زد ہو گی۔",
			previewManual: "یہ درخواست تب تک رکے گی جب تک انتظام نہ بھیجے۔",
			history: "منتقلیاں",
			empty: "ابھی کوئی منتقلی نہیں۔",
			policy: "بھیجنے کا طریقہ"
		},
		kyc: {
			title: "شناخت",
			sellerSub: "تاجر کا اجازت نامہ انتظام دیتا ہے۔ قومی شناخت، پاسپورٹ، یا اپنے ملک کا ٹیکس نمبر چنیں۔ بھارت میں یہ پین ہوتا ہے۔ صرف آخری چار ہندسے رکھے جاتے ہیں۔",
			buyerSub: "تاجر اسے ایک بار دیکھتا ہے۔ منظور ہونے پر اجازت نامہ ملتا ہے: ان کے چار ہندسے، پھر چار بے ترتیب ہندسے۔ جب تک وہ واپس نہ لیں، ان سے پھر شناخت نہیں۔",
			doc: "دستاویز",
			last4: "آخری چار ہندسے",
			last4Hint: "ٹھیک چار ہندسے۔ باقی نمبر کبھی محفوظ نہیں ہوتا۔",
			declare: "میں تصدیق کرتا ہوں کہ یہ چار ہندسے میری دستاویز سے ملتے ہیں، اور پورا نمبر محفوظ نہیں ہوتا۔",
			tax: "ٹیکس نمبر کی قسم",
			submitSeller: "انتظام سے تاجر اجازت نامہ مانگیں",
			submitBuyer: "تاجر کو بھیجیں",
			pendingAdmin: "انتظام کا انتظار۔",
			pendingSeller: "تاجر کا انتظار۔",
			approved: "منظور شدہ۔",
			rejected: "رد شدہ۔ دوبارہ بھیج سکتے ہیں۔",
			none: "ابھی کوئی درخواست نہیں۔",
			forMerchant: "{name} کے لیے",
			held: "موجودہ تاجر اجازت نامہ",
			front: "دستاویز کا اگلا رخ",
			back: "دستاویز کا پچھلا رخ",
			selfie: "چہرے کی جانچ",
			attach: "منسلک نشان زد کریں",
			attached: "منسلک",
			missing: "منسلک نہیں",
			docsNote: "یہ مشق کا پٹل صرف یہ درج کرتا ہے کہ فائل نشان زد ہوئی۔ کوئی تصویر محفوظ نہیں ہوتی۔",
			levelNone: "تصدیق شدہ نہیں",
			levelPending: "جائزے میں",
			levelMerchant: "تاجر تصدیق شدہ",
			levelRejected: "نئی جانچ چاہیے",
			why: "وجہ",
			evidence: "ثبوت",
			reasons: {
				incomplete: "دستاویزات نامکمل",
				blur: "دستاویز پڑھی نہیں گئی",
				mismatch: "نام ہندسوں سے نہیں ملتا",
				expired: "دستاویز پرانی ہے"
			}
		},
		pass: {
			title: "اجازت نامے",
			sub: "خریدار کا اجازت نامہ اس تاجر کے ساتھ تب تک مستقل ہے جب تک وہ اسے واپس نہ لے۔ واپسی کا مطلب نئی شناخت ہے۔ نئی درخواست وہ کبھی بھی منظور کر سکتے ہیں۔",
			merchantLicense: "تاجر کا اجازت نامہ",
			noneLicense: "اس نشست پر تاجر کا اجازت نامہ نہیں۔",
			code: "رمز",
			yourPasses: "آپ کے پاس اجازت نامے",
			issued: "درخواستیں جن پر آپ فیصلہ کرتے ہیں",
			emptyHeld: "ابھی کوئی اجازت نامہ نہیں۔ تاجر کے اشتہار سے شناخت کریں۔",
			emptyIssued: "ابھی کسی خریدار نے نہیں پوچھا۔",
			permanent: "فعال رہتے اس تاجر کے ساتھ مستقل۔",
			revokedNote: "واپس لے لیا گیا۔ ان سے پھر خریدنے سے پہلے نئی شناخت چاہیے۔",
			by: "تاجر",
			grant: "اجازت نامہ دیں",
			deny: "رد کریں",
			holder: "خریدار",
			suspended: "انتظام نے اجازت نامہ روک دیا۔"
		},
		admin: {
			title: "انتظامی پٹل",
			gate: "محصول، شناخت اور باہر جانے والی منتقلی کے لیے انتظامی نشست چنیں۔",
			switch: "انتظام بنیں",
			overview: "خلاصہ",
			fees: "محصول",
			withdrawals: "منتقلیاں",
			identity: "شناخت",
			coins: "سکے",
			orders: "سودے",
			users: "لوگ",
			policy: "خریدار اور بیچنے والے کا محصول الگ ہے۔ فیصد، ہر سودے پر مقرر سکہ، یا دونوں ایک ساتھ رکھ سکتے ہیں۔",
			buyerPercent: "خریدار کا فیصد",
			sellerPercent: "بیچنے والے کا فیصد",
			buyerFixed: "خریدار کا مقرر سکہ",
			sellerFixed: "بیچنے والے کا مقرر سکہ",
			under: "حد سے کم",
			over: "حد پر اور اس سے زیادہ",
			threshold: "سکے میں حد",
			save: "قاعدے محفوظ کریں",
			saved: "قاعدے محفوظ ہو گئے۔",
			queueEmpty: "قطار خالی ہے۔",
			send: "بھیجا نشان زد کریں",
			reject: "سکہ واپس کریں",
			listed: "فہرست میں",
			unlist: "چھپائیں",
			list: "دکھائیں",
			addCoin: "بے ترتیب سکہ جاری کریں",
			added: "سکہ {coin} فہرست میں ہے۔",
			newCoin: "نیا سکہ",
			suspend: "اجازت نامہ روکیں",
			resume: "اجازت نامہ بحال کریں",
			openOrders: "کھلے سودے",
			pendingKyc: "شناخت کا انتظار",
			pendingWd: "منتقلی کا انتظار",
			treasury: "جمع شدہ محصول",
			noTreasury: "ابھی محصول نہیں۔",
			merchantDecides: "خریدار کا اجازت نامہ تاجر طے کرتا ہے۔ یہ فہرست صرف نگرانی کے لیے ہے۔",
			sellerQueue: "تاجر اجازت نامے کی درخواستیں",
			people: "نشستیں",
			sendBody: "دوسرے پٹل پر جانے والا سکہ اسی قطار سے بھیجا جاتا ہے، سوائے حد سے کم رقم کے جب خودکار چنا ہو۔",
			noLicense: "اجازت نامہ نہیں",
			controls: "کنٹرول",
			coinForm: "سکہ فہرست میں رکھیں",
			symbol: "علامت",
			coinName: "نام",
			refPrice: "حوالہ قیمت",
			minOut: "کم از کم بھیجنا",
			deposits: "مشق کی جمع",
			withdrawalsOn: "باہر بھیجنا",
			on: "چالو",
			off: "بند",
			saveCoin: "سکہ محفوظ کریں",
			coinSaved: "سکہ {coin} بدل گیا۔",
			desk: "پٹل",
			deskOpen: "پٹل کھلا ہے۔ نئے اشتہار اور سودے چلیں گے۔",
			deskClosed: "پٹل بند ہے۔ نئے اشتہار یا سودے نہیں۔",
			openDesk: "پٹل کھولیں",
			closeDesk: "پٹل بند کریں",
			holdOut: "منتقلی روکیں",
			releaseOut: "منتقلی چالو کریں",
			freeze: "نشست روکیں",
			unfreeze: "نشست کھولیں",
			frozen: "نشست رک گئی۔ وہ سودا یا منتقلی نہیں کر سکتے۔",
			auditTitle: "کنٹرول کا ریکارڈ",
			auditEmpty: "ابھی کوئی کنٹرول نہیں ہوا۔",
			auditKycYes: "تاجر کی جانچ منظور · {detail}",
			auditKycNo: "تاجر کی جانچ رد · {detail}",
			auditCoin: "سکے کی تبدیلی · {detail}",
			auditSeat: "نشست کا کنٹرول · {detail}",
			auditDesk: "پٹل · {detail}",
			auditRelease: "زبردستی رہائی · {detail}",
			auditCancel: "زبردستی منسوخ · {detail}",
			auditSend: "منتقلی بھیجی نشان زد · {detail}",
			auditReturn: "منتقلی واپس · {detail}",
			seats: "نشست کے کنٹرول"
		},
		pay: {
			title: "ادائیگی کے طریقے",
			sub: "سودے کے کمرے میں دکھایا جاتا ہے تاکہ خریدار جانے کرنسی کہاں جانی ہے۔ اس مشق کے پٹل پر کوئی حقیقی وصولی کھاتہ نہیں۔",
			add: "طریقہ محفوظ کریں",
			rail: "راستہ",
			label: "نام",
			details: "منزل",
			detailsPh: "نمبر یا پتہ",
			saved: "محفوظ طریقے",
			remove: "ہٹائیں",
			empty: "کوئی طریقہ نہیں۔",
			need: "اشتہار سے پہلے ایک ادائیگی کا طریقہ محفوظ کریں۔"
		},
		express: {
			title: "فوری",
			sub: "کرنسی کی رقم یا سکے کی رقم لکھیں۔ پٹل بہترین قیمت چنتا ہے۔ اضافی شناخت والے اشتہار چھوڑے جا سکتے ہیں۔ سودا وہی کھلتا ہے۔",
			youGet: "جتنا سکہ ملے گا",
			best: "بہترین تاجر",
			none: "کوئی مجاز اشتہار نہیں ملا۔",
			go: "آگے بڑھیں",
			pay: "جتنی کرنسی دیں گے",
			unitFiat: "کرنسی کی رقم",
			unitCoin: "سکے کی رقم",
			skipId: "اضافی شناخت والے اشتہار چھوڑیں",
			fee: "محصول",
			window: "ادائیگی کی مدت",
			buySide: "خریدیں",
			sellSide: "بیچیں"
		},
		help: {
			title: "یہ پٹل کیسے چلتا ہے",
			aT: "دو نشستیں، ایک سکہ",
			aB: "تاجر اشتہار دیتا ہے۔ خریدار اسے لیتا ہے۔ کرنسی اورویا کے باہر دی جاتی ہے۔ سکہ تب تک رکا رہتا ہے جب تک تاجر اسے نہ چھوڑے۔",
			bT: "تاجر کا اجازت نامہ",
			bB: "شناخت کے بعد انتظام تاجر کا اجازت نامہ دیتا ہے۔ دستاویز قومی شناخت، پاسپورٹ، یا ملک کا ٹیکس نمبر ہوتا ہے، جیسے بھارت میں پین۔ صرف آخری چار ہندسے رکھے جاتے ہیں۔",
			cT: "خریدار کا اجازت نامہ",
			cB: "کسی تاجر سے پہلی خرید پر اسی سے شناخت ہوتی ہے۔ وہ اپنے چار ہندسوں اور چار بے ترتیب ہندسوں کا اجازت نامہ دے سکتے ہیں۔ بعد کی خرید میں شناخت نہیں۔ واپس لینے پر شناخت پھر چاہیے۔ نئی درخواست وہ جب چاہیں منظور کر سکتے ہیں۔",
			dT: "محصول",
			dB: "انتظام خریدار کا محصول اور بیچنے والے کا محصول الگ رکھتا ہے۔ ہر ایک فیصد ہو سکتا ہے، ہر سودے پر مقرر سکہ ہو سکتا ہے، یا دونوں ایک ساتھ۔",
			eT: "سکہ باہر بھیجنا",
			eB: "دوسرے پٹل کے پتے پر منتقلی انتظام پوری کرتا ہے۔ رقم حد سے کم ہو تو انتظام خودکار یا دستی چن سکتا ہے۔ حد پانچ سکوں سے شروع ہوتی ہے اور بدلی جا سکتی ہے۔",
			fT: "پٹل پر کیا رہتا ہے",
			fB: "بقایا، سودے اور اجازت نامے اسی پٹل کے ساتھ رہتے ہیں۔ یہاں سے کچھ نشر نہیں ہوتا، اور شناخت میں صرف آخری چار ہندسے رہتے ہیں۔"
		},
		profile: {
			title: "کھاتہ",
			acting: "آپ اس روپ میں ہیں",
			switch: "نشست بدلیں",
			seat: "اس پٹل کے کردار اسی براؤزر میں رہتے ہیں۔ تاجر اجازت نامہ دیتا ہے اور سکہ چھوڑتا ہے۔ انتظام محصول اور منتقلی رکھتا ہے۔ انتظام خود نہیں کھلتا۔",
			reset: "پٹل کے اعداد بحال کریں",
			resetWarn: "اس سے اصل اشتہار، سودے اور اجازت نامے واپس آ جاتے ہیں۔",
			resetDo: "ابھی بحال کریں",
			done: "پٹل واپس آ گیا۔",
			blocked: "روکے ہوئے",
			following: "پیروی",
			noneList: "ابھی کوئی نہیں۔"
		},
		footer: {
			sim: "ڈی ایل ایم کیش لیبز پرائیویٹ لمیٹڈ",
			rights: "اورویا"
		},
		rail: {
			upi: "یو پی آئی",
			imps: "آئی ایم پی ایس",
			bank: "بینک منتقلی",
			paytm: "پے ٹی ایم",
			jazz: "جاز کیش",
			easy: "ایزی پیسہ",
			card: "بطاقہ"
		},
		fiatName: {
			INR: "بھارتی روپیہ",
			USD: "امریکی ڈالر",
			PKR: "پاکستانی روپیہ",
			AED: "اماراتی درہم",
			EUR: "یورو"
		},
		coinName: {
			ORB: "آربٹ",
			VLT: "والٹ",
			KYN: "کائن",
			AUR: "آورا",
			PXN: "پیکسن",
			LUM: "لیومن",
			NRX: "نیرکس",
			HAL: "ہیلو",
			BTC: "بٹ کوائن",
			ETH: "ایتھیریم",
			USDT: "ٹیتھر",
			BNB: "بی این بی",
			XRP: "ایکس آر پی",
			USDC: "امریکی سکہ",
			SOL: "سولانا",
			TRX: "ٹرون",
			ZEC: "زی کیش",
			HYPE: "ہائپر لیکویڈ"
		},
		country: {
			IN: "بھارت",
			US: "ریاست ہائے متحدہ",
			GB: "برطانیہ",
			PK: "پاکستان",
			AE: "متحدہ عرب امارات",
			CA: "کینیڈا",
			AU: "آسٹریلیا",
			DE: "جرمنی",
			FR: "فرانس",
			BR: "برازیل",
			NG: "نائجیریا",
			ZA: "جنوبی افریقہ",
			SG: "سنگاپور",
			BD: "بنگلہ دیش",
			NP: "نیپال",
			LK: "سری لنکا",
			CN: "چین",
			JP: "جاپان",
			ID: "انڈونیشیا",
			PH: "فلپائن",
			KE: "کینیا",
			SA: "سعودی عرب",
			TR: "ترکی",
			MX: "میکسیکو",
			ES: "ہسپانیہ",
			IT: "اٹلی",
			NL: "نیدرلینڈز",
			QA: "قطر"
		},
		tax: {
			PAN: "مستقل کھاتہ نمبر",
			SSN: "سماجی تحفظ نمبر",
			ITIN: "انفرادی ٹیکس دہندہ نمبر",
			UTR: "منفرد ٹیکس دہندہ حوالہ",
			NINO: "قومی بیمہ نمبر",
			NTN: "قومی ٹیکس نمبر",
			TRN: "ٹیکس رجسٹریشن نمبر",
			SIN: "سماجی بیمہ نمبر",
			TFN: "ٹیکس فائل نمبر",
			STEUER: "ٹیکس شناخت نمبر",
			SPI: "ٹیکس نمبر",
			CF: "مالیاتی کوڈ",
			NIF: "ٹیکس شناخت نمبر",
			BSN: "شہری خدمت نمبر",
			CPF: "قدرتی شخص کا رجسٹر",
			RFC: "وفاقی ٹیکس دہندہ رجسٹری",
			TIN_NG: "ٹیکس دہندہ شناخت نمبر",
			SARS: "محصول خدمت نمبر",
			NRIC: "قومی رجسٹریشن شناخت",
			TIN_BD: "ٹیکس دہندہ شناخت نمبر",
			PAN_NP: "مستقل کھاتہ نمبر",
			TIN_LK: "ٹیکس دہندہ شناخت نمبر",
			TIN_CN: "ٹیکس دہندہ شناخت نمبر",
			MYNO: "انفرادی نمبر",
			NPWP: "ٹیکس دہندہ رجسٹریشن نمبر",
			TIN_PH: "ٹیکس دہندہ شناخت نمبر",
			KRA: "محصول اتھارٹی نمبر",
			TIN_SA: "ٹیکس دہندہ شناخت نمبر",
			VKN: "ٹیکس شناخت نمبر",
			TIN_QA: "ٹیکس کارت نمبر"
		},
		doc: {
			national_id: "قومی شناخت",
			passport: "گذرنامہ",
			tax_id: "ٹیکس نمبر"
		},
		net: {
			mesh: "اورویا جال",
			north: "شمالی راستہ",
			south: "جنوبی راستہ"
		},
		err: {
			own: "اپنا اشتہار نہیں لے سکتے۔",
			license: "اس تاجر کا فعال اجازت نامہ چاہیے۔",
			merchant: "بیچنے کے لیے فعال تاجر اجازت نامہ چاہیے۔",
			limits: "رقم اشتہار کی حد سے باہر ہے۔",
			available: "اس اشتہار میں کافی سکہ نہیں۔",
			balance: "آزاد سکہ کافی نہیں۔",
			fee: "محصول پورے سودے کو کھا جائے گا۔ رقم بڑھائیں یا محصول گھٹائیں۔",
			address: "کم از کم ۸ حروف کی منزل لکھیں۔",
			amount: "درست رقم لکھیں۔",
			rails: "کم از کم ایک ادائیگی کا راستہ چنیں۔",
			price: "درست قیمت لکھیں۔",
			inventory: "اشتہار میں کتنا سکہ ہو، لکھیں۔",
			range: "کم از کم، زیادہ سے زیادہ سے بڑا نہیں ہو سکتا۔",
			name: "پورا نام لکھیں۔",
			last4: "ٹھیک چار ہندسے لکھیں۔",
			pending: "ایک جائزہ پہلے سے کھلا ہے۔",
			pass: "اجازت نامہ پہلے سے فعال ہے۔",
			forbidden: "یہ نشست یہ نہیں کر سکتی۔",
			busy: "کھلے سودے ابھی اس اشتہار پر ہیں۔",
			declare: "پہلے چار ہندسوں کی تصدیق کریں۔",
			country: "ملک چنیں۔",
			tax: "ٹیکس نمبر کی قسم چنیں۔",
			closed: "یہ سودا پہلے ہی ختم ہو چکا۔",
			payment: "ادائیگی کا راستہ چنیں۔",
			docs: "اگلا رخ، ضرورت ہو تو پچھلا رخ، اور چہرے کی جانچ منسلک کریں۔",
			symbol: "علامت میں ۳ سے ۵ حروف لکھیں۔",
			duplicate: "یہ علامت پہلے سے موجود ہے۔",
			frozen: "یہ نشست رک گئی ہے۔",
			desk: "نئے سودوں کے لیے پٹل بند ہے۔",
			coinOff: "یہ سکہ اس سمت ابھی نہیں چل سکتا۔",
			minOut: "رقم اس سکے کی کم از کم منتقلی سے کم ہے۔",
			self: "انتظامی نشست نہیں روکی جا سکتی۔",
			why: "رد کرنے سے پہلے وجہ چنیں۔",
			blocked: "آپ میں سے کسی نے دوسرے کو روکا ہے۔",
			kyc: "اس اشتہار کے لیے پہلے شناخت چاہیے۔",
			completion: "آپ کی تکمیل اس اشتہار سے کم ہے۔"
		}
	}
};
function tr(lang, path, vars) {
	const parts = path.split(".");
	let node = books[lang];
	for (const part of parts) if (node && typeof node === "object" && part in node) node = node[part];
	else return path;
	if (typeof node !== "string") return path;
	if (!vars) return node;
	return node.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ""));
}
function useI18n() {
	const lang = useDesk((state) => state.lang);
	const t = (path, vars) => tr(lang, path, vars);
	return {
		lang,
		t
	};
}
function personName(name, lang) {
	return name[lang];
}
function coinLabel(symbol, lang) {
	const coin = useDesk.getState().coins.find((item) => item.symbol === symbol);
	if (coin?.label) return coin.label;
	const key = `coinName.${symbol}`;
	const label = tr(lang, key);
	return label === key ? "" : label;
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "32",
			height: "32",
			rx: "8",
			className: "fill-primary"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M7 22.5h18M9 18.5l4.2-7 3.3 5.2 2.2-3.2L22 18.5",
			fill: "none",
			className: "stroke-primary-fg",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
var buttonStyles = {
	primary: "bg-primary text-primary-fg",
	buy: "bg-buy text-buy-fg",
	sell: "bg-sell text-sell-fg",
	line: "border border-line bg-surface text-fg",
	ghost: "bg-transparent text-fg",
	soft: "bg-surface-2 text-fg"
};
function Button({ variant = "primary", className, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold transition-opacity disabled:opacity-50", buttonStyles[variant], className),
		...props
	});
}
var fieldClass = "h-11 w-full rounded-md border border-line bg-bg px-3 text-sm text-fg outline-none";
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-1 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium text-muted",
			children: label
		}), children]
	});
}
function Panel({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("rounded-md border border-line bg-surface", className),
		children
	});
}
function Page({ title, sub, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid w-full max-w-7xl gap-4 px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "grid gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: title
			}), sub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-3xl text-sm leading-relaxed text-muted",
				children: sub
			}) : null]
		}), children]
	});
}
function Modal({ title, onClose, children }) {
	const { t } = useI18n();
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "Escape") onClose();
		};
		document.addEventListener("keydown", onKey);
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = previous;
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center bg-fg/40 sm:items-center sm:p-4",
		role: "presentation",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": title,
			className: "max-h-[92vh] w-full overflow-y-auto rounded-t-md border border-line bg-surface p-4 sm:max-w-lg sm:rounded-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-11 place-items-center rounded-md",
					"aria-label": t("common.close"),
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), children]
		})
	});
}
function Empty({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-md border border-dashed border-line px-4 py-8 text-center text-sm text-muted",
		children
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DKF0ET_M.js
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var PACKAGE_VERSION = "1.6.33";
var GENERIC_OAUTH_ERROR_CODES = defineErrorCodes({
	INVALID_OAUTH_CONFIGURATION: "Invalid OAuth configuration",
	TOKEN_URL_NOT_FOUND: "Invalid OAuth configuration. Token URL not found.",
	PROVIDER_CONFIG_NOT_FOUND: "No config found for provider",
	PROVIDER_ID_REQUIRED: "Provider ID is required",
	INVALID_OAUTH_CONFIG: "Invalid OAuth configuration.",
	SESSION_REQUIRED: "Session is required",
	ISSUER_MISMATCH: "OAuth issuer mismatch. The authorization server issuer does not match the expected value (RFC 9207).",
	ISSUER_MISSING: "OAuth issuer parameter missing. The authorization server did not include the required iss parameter (RFC 9207)."
});
var genericOAuthClient = () => {
	return {
		id: "generic-oauth-client",
		version: PACKAGE_VERSION,
		$InferServerPlugin: {},
		$ERROR_CODES: GENERIC_OAUTH_ERROR_CODES
	};
};
function tryDecode$1(str) {
	if (str.indexOf("%") === -1) return str;
	try {
		return decodeURIComponent(str);
	} catch {
		return str;
	}
}
var SECURE_COOKIE_PREFIX = "__Secure-";
/**
* Split a comma-joined `Set-Cookie` header string into individual cookies.
*/
function splitSetCookieHeader(setCookie) {
	if (!setCookie) return [];
	const result = [];
	let start = 0;
	let i = 0;
	while (i < setCookie.length) {
		if (setCookie[i] === ",") {
			let j = i + 1;
			while (j < setCookie.length && setCookie[j] === " ") j++;
			while (j < setCookie.length && setCookie[j] !== "=" && setCookie[j] !== ";" && setCookie[j] !== ",") j++;
			if (j < setCookie.length && setCookie[j] === "=") {
				const part = setCookie.slice(start, i).trim();
				if (part) result.push(part);
				start = i + 1;
				while (start < setCookie.length && setCookie[start] === " ") start++;
				i = start;
				continue;
			}
		}
		i++;
	}
	const last = setCookie.slice(start).trim();
	if (last) result.push(last);
	return result;
}
function parseSetCookieHeader(setCookie) {
	const cookies = /* @__PURE__ */ new Map();
	splitSetCookieHeader(setCookie).forEach((cookieString) => {
		const [nameValue, ...attributes] = cookieString.split(";").map((part) => part.trim());
		const [name, ...valueParts] = (nameValue || "").split("=");
		const value = unquoteCookieValue(valueParts.join("="));
		if (!name) return;
		const attrObj = { value: tryDecode$1(value) };
		attributes.forEach((attribute) => {
			const [attrName, ...attrValueParts] = attribute.split("=");
			const attrValue = attrValueParts.join("=");
			const normalizedAttrName = attrName.trim().toLowerCase();
			switch (normalizedAttrName) {
				case "max-age":
					attrObj["max-age"] = attrValue ? parseInt(attrValue.trim(), 10) : void 0;
					break;
				case "expires":
					attrObj.expires = attrValue ? new Date(attrValue.trim()) : void 0;
					break;
				case "domain":
					attrObj.domain = attrValue ? attrValue.trim() : void 0;
					break;
				case "path":
					attrObj.path = attrValue ? attrValue.trim() : void 0;
					break;
				case "secure":
					attrObj.secure = true;
					break;
				case "httponly":
					attrObj.httponly = true;
					break;
				case "samesite":
					attrObj.samesite = attrValue ? attrValue.trim().toLowerCase() : void 0;
					break;
				case "partitioned":
					attrObj.partitioned = true;
					break;
				default: attrObj[normalizedAttrName] = attrValue ? attrValue.trim() : true;
			}
		});
		cookies.set(name, attrObj);
	});
	return cookies;
}
function toCookieOptions(attributes) {
	return {
		maxAge: attributes["max-age"],
		expires: attributes.expires,
		domain: attributes.domain,
		path: attributes.path,
		secure: attributes.secure,
		httpOnly: attributes.httponly,
		sameSite: attributes.samesite,
		partitioned: attributes.partitioned
	};
}
/**
* Cookie-name token char set per RFC 7230 §3.2.6.
*
* @see https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6
*/
var cookieNameRegex = /^[\x21\x23-\x27\x2A\x2B\x2D\x2E\x30-\x39\x41-\x5A\x5E\x5F\x60\x61-\x7A\x7C\x7E]+$/;
/**
* Cookie-value char set per RFC 6265 §4.1.1, plus space and comma.
*
* @see https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1
* @see https://github.com/golang/go/issues/7243
*/
var cookieValueRegex = /^[\x20\x21\x23-\x3A\x3C-\x5B\x5D-\x7E]*$/;
/**
* Strip surrounding double-quotes per RFC 6265 §4.1.1 quoted-string form.
*
* @see https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1
*/
function unquoteCookieValue(value) {
	if (value.length < 2 || !value.startsWith("\"") || !value.endsWith("\"")) return value;
	return value.slice(1, -1);
}
/**
* Trim leading/trailing OWS (space / horizontal tab) per RFC 7230 §3.2.3.
* Narrower than `String.prototype.trim()`, which strips CR/LF and other
* whitespace and would let CTLs escape `cookieValueRegex`.
*
* @see https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.3
*/
function trimOWS(s) {
	let start = 0;
	let end = s.length;
	while (start < end) {
		const c = s.charCodeAt(start);
		if (c !== 32 && c !== 9) break;
		start++;
	}
	while (end > start) {
		const c = s.charCodeAt(end - 1);
		if (c !== 32 && c !== 9) break;
		end--;
	}
	return start === 0 && end === s.length ? s : s.slice(start, end);
}
/**
* Tolerates `;` separators without the SP that RFC 6265 §4.2.1 mandates,
* since proxies and runtimes commonly strip it. Silently drops entries
* whose name violates RFC 7230 token or whose value violates RFC 6265
* cookie-octet (plus space and comma). Strips optional surrounding
* double-quotes per RFC 6265 §4.1.1.
*/
function parseCookies(cookie) {
	const cookieMap = /* @__PURE__ */ new Map();
	if (cookie.length < 2) return cookieMap;
	for (const chunk of cookie.split(";")) {
		const eq = chunk.indexOf("=");
		if (eq === -1) continue;
		const key = trimOWS(chunk.slice(0, eq));
		const val = unquoteCookieValue(trimOWS(chunk.slice(eq + 1)));
		if (cookieNameRegex.test(key) && cookieValueRegex.test(val)) cookieMap.set(key, tryDecode$1(val));
	}
	return cookieMap;
}
/**
* Add or replace a cookie in the request `Cookie` header.
*
* Cookie pairs are joined with `; `, but `headers.append("cookie", ...)`
* joins with `, ` in some runtimes (e.g. Deno, Cloudflare Workers) and
* breaks downstream cookie parsing. This builds the header value via
* parse-mutate-serialize.
*/
function setRequestCookie(headers, name, value) {
	const cookieMap = parseCookies(headers.get("cookie") || "");
	if (cookieNameRegex.test(name)) cookieMap.set(name, value);
	headers.set("cookie", Array.from(cookieMap, ([k, v]) => `${k}=${encodeURIComponent(v)}`).join("; "));
}
/**
* Escapes a character if it has a special meaning in regular expressions
* and returns the character as is if it doesn't
*/
function escapeRegExpChar(char) {
	if (char === "-" || char === "^" || char === "$" || char === "+" || char === "." || char === "(" || char === ")" || char === "|" || char === "[" || char === "]" || char === "{" || char === "}" || char === "*" || char === "?" || char === "\\") return `\\${char}`;
	else return char;
}
/**
* Escapes all characters in a given string that have a special meaning in regular expressions
*/
function escapeRegExpString(str) {
	let result = "";
	for (let i = 0; i < str.length; i++) result += escapeRegExpChar(str[i]);
	return result;
}
/**
* Transforms one or more glob patterns into a RegExp pattern
*/
function transform(pattern, separator = true) {
	if (Array.isArray(pattern)) return `(?:${pattern.map((p) => `^${transform(p, separator)}$`).join("|")})`;
	let separatorSplitter = "";
	let separatorMatcher = "";
	let wildcard = ".";
	if (separator === true) {
		separatorSplitter = "/";
		separatorMatcher = "[/\\\\]";
		wildcard = "[^/\\\\]";
	} else if (separator) {
		separatorSplitter = separator;
		separatorMatcher = escapeRegExpString(separatorSplitter);
		if (separatorMatcher.length > 1) {
			separatorMatcher = `(?:${separatorMatcher})`;
			wildcard = `((?!${separatorMatcher}).)`;
		} else wildcard = `[^${separatorMatcher}]`;
	}
	const requiredSeparator = separator ? `${separatorMatcher}+?` : "";
	const optionalSeparator = separator ? `${separatorMatcher}*?` : "";
	const segments = separator ? pattern.split(separatorSplitter) : [pattern];
	let result = "";
	for (let s = 0; s < segments.length; s++) {
		const segment = segments[s];
		const nextSegment = segments[s + 1];
		let currentSeparator = "";
		if (!segment && s > 0) continue;
		if (separator) if (s === segments.length - 1) currentSeparator = optionalSeparator;
		else if (nextSegment !== "**") currentSeparator = requiredSeparator;
		else currentSeparator = "";
		if (separator && segment === "**") {
			if (currentSeparator) {
				result += s === 0 ? "" : currentSeparator;
				result += `(?:${wildcard}*?${currentSeparator})*?`;
			}
			continue;
		}
		for (let c = 0; c < segment.length; c++) {
			const char = segment[c];
			if (char === "\\") {
				if (c < segment.length - 1) {
					result += escapeRegExpChar(segment[c + 1]);
					c++;
				}
			} else if (char === "?") result += wildcard;
			else if (char === "*") result += `${wildcard}*?`;
			else result += escapeRegExpChar(char);
		}
		result += currentSeparator;
	}
	return result;
}
function isMatch(regexp, sample) {
	if (typeof sample !== "string") throw new TypeError(`Sample must be a string, but ${typeof sample} given`);
	return regexp.test(sample);
}
/**
* Compiles one or more glob patterns into a RegExp and returns an isMatch function.
* The isMatch function takes a sample string as its only argument and returns `true`
* if the string matches the pattern(s).
*
* ```js
* wildcardMatch('src/*.js')('src/index.js') //=> true
* ```
*
* ```js
* const isMatch = wildcardMatch('*.example.com', '.')
* isMatch('foo.example.com') //=> true
* isMatch('foo.bar.com') //=> false
* ```
*/
function wildcardMatch(pattern, options) {
	if (typeof pattern !== "string" && !Array.isArray(pattern)) throw new TypeError(`The first argument must be a single pattern string or an array of patterns, but ${typeof pattern} given`);
	if (typeof options === "string" || typeof options === "boolean") options = { separator: options };
	if (arguments.length === 2 && !(typeof options === "undefined" || typeof options === "object" && options !== null && !Array.isArray(options))) throw new TypeError(`The second argument must be an options object or a string/boolean separator, but ${typeof options} given`);
	options = options || {};
	if (options.separator === "\\") throw new Error("\\ is not a valid separator because it is used for escaping. Try setting the separator to `true` instead");
	const regexpPattern = transform(pattern, options.separator);
	const regexp = new RegExp(`^${regexpPattern}$`, options.flags);
	const fn = isMatch.bind(null, regexp);
	fn.options = options;
	fn.pattern = pattern;
	fn.regexp = regexp;
	return fn;
}
var SLASH_CHAR_CODE = "/".charCodeAt(0);
/**
* Minimal loopback check for dev scheme inference only. Reachable from
* `client/config.ts` via `getBaseURL`, so we MUST NOT import the full
* `@better-auth/core/utils/host` classifier here: its `utils/ip` dependency
* on zod would leak into the client bundle (see `e2e/smoke/test/vite.spec.ts`).
*
* Server-side SSRF/loopback checks (oauth redirect matching, trusted-origin
* resolution, electron fetch gate) continue to use the authoritative
* `isLoopbackHost` from `@better-auth/core/utils/host`. This helper's only
* job is picking `http` vs `https` for dev ergonomics.
*/
function isLoopbackForDevScheme(host) {
	const hostname = host.replace(/:\d+$/, "").replace(/^\[|\]$/g, "").toLowerCase();
	return hostname === "localhost" || hostname.endsWith(".localhost") || hostname === "::1" || hostname.startsWith("127.");
}
function trimTrailingSlashes(value) {
	let end = value.length;
	while (end > 0 && value.charCodeAt(end - 1) === SLASH_CHAR_CODE) end--;
	return end === value.length ? value : value.slice(0, end);
}
function checkHasPath(url) {
	try {
		return (trimTrailingSlashes(new URL(url).pathname) || "/") !== "/";
	} catch {
		throw new BetterAuthError(`Invalid base URL: ${url}. Please provide a valid base URL.`);
	}
}
function assertHasProtocol(url) {
	try {
		const parsedUrl = new URL(url);
		if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") throw new BetterAuthError(`Invalid base URL: ${url}. URL must include 'http://' or 'https://'`);
	} catch (error) {
		if (error instanceof BetterAuthError) throw error;
		throw new BetterAuthError(`Invalid base URL: ${url}. Please provide a valid base URL.`, { cause: error });
	}
}
function withPath(url, path = "/api/auth") {
	assertHasProtocol(url);
	if (checkHasPath(url)) return url;
	const trimmedUrl = trimTrailingSlashes(url);
	if (!path || path === "/") return trimmedUrl;
	path = path.startsWith("/") ? path : `/${path}`;
	return `${trimmedUrl}${path}`;
}
function validateProxyHeader(header, type) {
	if (!header || header.trim() === "") return false;
	if (type === "proto") return header === "http" || header === "https";
	if (type === "host") {
		if ([
			/\.\./,
			/\0/,
			/[\s]/,
			/^[.]/,
			/[<>'"]/,
			/javascript:/i,
			/file:/i,
			/data:/i
		].some((pattern) => pattern.test(header))) return false;
		return /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*(:[0-9]{1,5})?$/.test(header) || /^(\d{1,3}\.){3}\d{1,3}(:[0-9]{1,5})?$/.test(header) || /^\[[0-9a-fA-F:]+\](:[0-9]{1,5})?$/.test(header) || /^localhost(:[0-9]{1,5})?$/i.test(header);
	}
	return false;
}
function getBaseURL(url, path, request, loadEnv, trustedProxyHeaders) {
	if (url) return withPath(url, path);
	if (loadEnv !== false) {
		const fromEnv = env.BETTER_AUTH_URL || env.NEXT_PUBLIC_BETTER_AUTH_URL || env.PUBLIC_BETTER_AUTH_URL || env.NUXT_PUBLIC_BETTER_AUTH_URL || env.NUXT_PUBLIC_AUTH_URL || (env.BASE_URL !== "/" ? env.BASE_URL : void 0);
		if (fromEnv) return withPath(fromEnv, path);
	}
	const fromRequest = request?.headers.get("x-forwarded-host");
	const fromRequestProto = request?.headers.get("x-forwarded-proto");
	if (fromRequest && fromRequestProto && trustedProxyHeaders) {
		if (validateProxyHeader(fromRequestProto, "proto") && validateProxyHeader(fromRequest, "host")) try {
			return withPath(`${fromRequestProto}://${fromRequest}`, path);
		} catch (_error) {}
	}
	if (request) {
		const url = getOrigin(request.url);
		if (!url) throw new BetterAuthError("Could not get origin from request. Please provide a valid base URL.");
		return withPath(url, path);
	}
	if (typeof window !== "undefined" && window.location) return withPath(window.location.origin, path);
}
function getOrigin(url) {
	try {
		const parsedUrl = new URL(url);
		return parsedUrl.origin === "null" ? null : parsedUrl.origin;
	} catch {
		return null;
	}
}
function getProtocol(url) {
	try {
		return new URL(url).protocol;
	} catch {
		return null;
	}
}
function getHost(url) {
	try {
		return new URL(url).host;
	} catch {
		return null;
	}
}
/**
* Checks if the baseURL config is a dynamic config object
*/
function isDynamicBaseURLConfig(config) {
	return typeof config === "object" && config !== null && "allowedHosts" in config && Array.isArray(config.allowedHosts);
}
/**
* Check if a value is a `Request`
* - `instanceof`: works for native Request instances
* - `toString`: handles where instanceof check fails but the object is still a
*   valid Request (e.g. cross-realm, polyfills). Paired with a shape check so
*   an object that only spoofs `Symbol.toStringTag` without the real shape is
*   rejected before downstream code tries to read `.headers` / `.url`.
*
* @param value The value to check
* @returns `true` if the value is a Request instance
*/
function isRequestLike(value) {
	if (value instanceof Request) return true;
	if (typeof value !== "object" || value === null || Object.prototype.toString.call(value) !== "[object Request]") return false;
	const v = value;
	return typeof v.url === "string" && typeof v.headers === "object" && v.headers !== null && typeof v.headers.get === "function";
}
/**
* Extracts the host from a `Request` or `Headers`.
* Honors `x-forwarded-host` only when `trustedProxyHeaders` is enabled,
* then falls back to the `host` header and finally the request URL.
*/
function getHostFromSource(source, trustedProxyHeaders) {
	const headers = isRequestLike(source) ? source.headers : source;
	if (trustedProxyHeaders) {
		const forwardedHost = headers.get("x-forwarded-host");
		if (forwardedHost && validateProxyHeader(forwardedHost, "host")) return forwardedHost;
	}
	const host = headers.get("host");
	if (host && validateProxyHeader(host, "host")) return host;
	if (isRequestLike(source)) try {
		return new URL(source.url).host;
	} catch {
		return null;
	}
	return null;
}
/**
* Extracts the protocol from a `Request` or `Headers`.
* Honors `x-forwarded-proto` only when `trustedProxyHeaders` is enabled,
* then falls back to the request URL, then to "https".
*/
function getProtocolFromSource(source, configProtocol, trustedProxyHeaders) {
	if (configProtocol === "http" || configProtocol === "https") return configProtocol;
	const headers = isRequestLike(source) ? source.headers : source;
	if (trustedProxyHeaders) {
		const forwardedProto = headers.get("x-forwarded-proto");
		if (forwardedProto && validateProxyHeader(forwardedProto, "proto")) return forwardedProto;
	}
	if (isRequestLike(source)) try {
		const url = new URL(source.url);
		if (url.protocol === "http:" || url.protocol === "https:") return url.protocol.slice(0, -1);
	} catch {}
	const host = getHostFromSource(source, trustedProxyHeaders);
	if (host && isLoopbackForDevScheme(host)) return "http";
	return "https";
}
/**
* Matches a hostname against a host pattern.
* Supports wildcard patterns like `*.vercel.app` or `preview-*.myapp.com`.
*
* @param host The hostname to test (e.g., "myapp.com", "preview-123.vercel.app")
* @param pattern The host pattern (e.g., "myapp.com", "*.vercel.app")
* @returns {boolean} true if the host matches the pattern, false otherwise.
*
* @example
* ```ts
* matchesHostPattern("myapp.com", "myapp.com") // true
* matchesHostPattern("preview-123.vercel.app", "*.vercel.app") // true
* matchesHostPattern("preview-123.myapp.com", "preview-*.myapp.com") // true
* matchesHostPattern("evil.com", "myapp.com") // false
* ```
*/
var matchesHostPattern = (host, pattern) => {
	if (!host || !pattern) return false;
	const normalizedHost = host.replace(/^https?:\/\//, "").split("/")[0].toLowerCase();
	const normalizedPattern = pattern.replace(/^https?:\/\//, "").split("/")[0].toLowerCase();
	if (normalizedPattern.includes("*") || normalizedPattern.includes("?")) return wildcardMatch(normalizedPattern)(normalizedHost);
	return normalizedHost.toLowerCase() === normalizedPattern.toLowerCase();
};
/**
* Resolves the base URL from a dynamic config based on the incoming request.
* Validates the derived host against the allowedHosts allowlist.
*
* @param config The dynamic base URL config
* @param request The incoming request
* @param basePath The base path to append
* @returns The resolved base URL with path
* @throws BetterAuthError if host is not in allowedHosts and no fallback is set
*/
function resolveDynamicBaseURL(config, source, basePath, trustedProxyHeaders) {
	const host = getHostFromSource(source, trustedProxyHeaders);
	if (!host) {
		if (config.fallback) return withPath(config.fallback, basePath);
		throw new BetterAuthError("Could not determine host from request headers. Please provide a fallback URL in your baseURL config.");
	}
	if (config.allowedHosts.some((pattern) => matchesHostPattern(host, pattern))) return withPath(`${getProtocolFromSource(source, config.protocol, trustedProxyHeaders)}://${host}`, basePath);
	if (config.fallback) return withPath(config.fallback, basePath);
	throw new BetterAuthError(`Host "${host}" is not in the allowed hosts list. Allowed hosts: ${config.allowedHosts.join(", ")}. Add this host to your allowedHosts config or provide a fallback URL.`);
}
/**
* Resolves the base URL from any config type (static string or dynamic object).
* This is the main entry point for base URL resolution.
*
* @param config The base URL config (string or object)
* @param basePath The base path to append
* @param request Optional request for dynamic resolution
* @param loadEnv Whether to load from environment variables
* @param trustedProxyHeaders Whether to trust proxy headers (for legacy behavior)
* @returns The resolved base URL with path
*/
function resolveBaseURL(config, basePath, source, loadEnv, trustedProxyHeaders) {
	if (isDynamicBaseURLConfig(config)) {
		if (source) return resolveDynamicBaseURL(config, source, basePath, trustedProxyHeaders);
		if (config.fallback) return withPath(config.fallback, basePath);
		return getBaseURL(void 0, basePath, void 0, loadEnv, trustedProxyHeaders);
	}
	const request = isRequestLike(source) ? source : void 0;
	if (typeof config === "string") return getBaseURL(config, basePath, request, loadEnv, trustedProxyHeaders);
	return getBaseURL(void 0, basePath, request, loadEnv, trustedProxyHeaders);
}
function isPlainObject(value) {
	if (typeof value !== "object" || value === null) return false;
	const prototype = Object.getPrototypeOf(value);
	return prototype === Object.prototype || prototype === null;
}
/**
* Deep structural equality for JSON-serializable values.
* Handles: primitives, null, arrays, and plain objects.
* Short-circuits on referential equality at every recursion level.
*/
function isJsonEqual(a, b) {
	if (a === b) return true;
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false;
		for (let i = 0; i < a.length; i++) if (!isJsonEqual(a[i], b[i])) return false;
		return true;
	}
	if (isPlainObject(a) && isPlainObject(b)) {
		const keysA = Object.keys(a);
		const keysB = Object.keys(b);
		if (keysA.length !== keysB.length) return false;
		for (const key of keysA) if (!(key in b) || !isJsonEqual(a[key], b[key])) return false;
		return true;
	}
	return false;
}
/**
* Attach an equality gate to a nanostores atom via `onSet`.
* When `isEqual(currentValue, newValue)` returns true, the `set()` call
* is aborted: no listeners fire, no framework re-renders occur.
*
* Returns the unsubscribe function from `onSet`.
*/
function withEquality(store, isEqual) {
	return onSet(store, ({ newValue, abort }) => {
		if (isEqual(store.value, newValue)) abort();
	});
}
var PROTO_POLLUTION_PATTERNS = {
	proto: /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
	constructor: /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
	protoShort: /"__proto__"\s*:/,
	constructorShort: /"constructor"\s*:/
};
var JSON_SIGNATURE = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
var SPECIAL_VALUES = {
	true: true,
	false: false,
	null: null,
	undefined: void 0,
	nan: NaN,
	infinity: Number.POSITIVE_INFINITY,
	"-infinity": Number.NEGATIVE_INFINITY
};
var ISO_DATE_REGEX = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;
function isValidDate(date) {
	return date instanceof Date && !isNaN(date.getTime());
}
function parseISODate(value) {
	const match = ISO_DATE_REGEX.exec(value);
	if (!match) return null;
	const [, year, month, day, hour, minute, second, ms, offsetSign, offsetHour, offsetMinute] = match;
	const date = new Date(Date.UTC(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10), parseInt(hour, 10), parseInt(minute, 10), parseInt(second, 10), ms ? parseInt(ms.padEnd(3, "0"), 10) : 0));
	if (offsetSign) {
		const offset = (parseInt(offsetHour, 10) * 60 + parseInt(offsetMinute, 10)) * (offsetSign === "+" ? -1 : 1);
		date.setUTCMinutes(date.getUTCMinutes() + offset);
	}
	return isValidDate(date) ? date : null;
}
function betterJSONParse(value, options = {}) {
	const { strict = false, warnings = false, reviver, parseDates = true } = options;
	if (typeof value !== "string") return value;
	const trimmed = value.trim();
	const lowerValue = trimmed.toLowerCase();
	if (lowerValue.length <= 9 && lowerValue in SPECIAL_VALUES) return SPECIAL_VALUES[lowerValue];
	if (!JSON_SIGNATURE.test(trimmed)) {
		if (strict) throw new SyntaxError("[better-json] Invalid JSON");
		return value;
	}
	if (Object.entries(PROTO_POLLUTION_PATTERNS).some(([key, pattern]) => {
		const matches = pattern.test(trimmed);
		if (matches && warnings) console.warn(`[better-json] Detected potential prototype pollution attempt using ${key} pattern`);
		return matches;
	}) && strict) throw new Error("[better-json] Potential prototype pollution attempt detected");
	try {
		const secureReviver = (key, value) => {
			if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
				if (warnings) console.warn(`[better-json] Dropping "${key}" key to prevent prototype pollution`);
				return;
			}
			if (parseDates && typeof value === "string") {
				const date = parseISODate(value);
				if (date) return date;
			}
			return reviver ? reviver(key, value) : value;
		};
		return JSON.parse(trimmed, secureReviver);
	} catch (error) {
		if (strict) throw error;
		return value;
	}
}
function parseJSON(value, options = { strict: true }) {
	return betterJSONParse(value, options);
}
var redirectPlugin = {
	id: "redirect",
	name: "Redirect",
	hooks: { onSuccess(context) {
		if (context.data?.url && context.data?.redirect && isSafeUrlScheme(context.data.url)) {
			if (typeof window !== "undefined" && window.location) {
				if (window.location) try {
					window.location.href = context.data.url;
				} catch {}
			}
		}
	} }
};
var kBroadcastChannel = Symbol.for("better-auth:broadcast-channel");
var now$2 = () => Math.floor(Date.now() / 1e3);
var WindowBroadcastChannel = class {
	listeners = /* @__PURE__ */ new Set();
	name;
	constructor(name = "better-auth.message") {
		this.name = name;
	}
	subscribe(listener) {
		this.listeners.add(listener);
		return () => {
			this.listeners.delete(listener);
		};
	}
	post(message) {
		if (typeof window === "undefined") return;
		try {
			localStorage.setItem(this.name, JSON.stringify({
				...message,
				timestamp: now$2()
			}));
		} catch {}
	}
	setup() {
		if (typeof window === "undefined" || typeof window.addEventListener === "undefined") return () => {};
		const handler = (event) => {
			if (event.key !== this.name) return;
			const message = JSON.parse(event.newValue ?? "{}");
			if (message?.event !== "session" || !message?.data) return;
			this.listeners.forEach((listener) => listener(message));
		};
		window.addEventListener("storage", handler);
		return () => {
			window.removeEventListener("storage", handler);
		};
	}
};
function getGlobalBroadcastChannel(name = "better-auth.message") {
	if (!globalThis[kBroadcastChannel]) globalThis[kBroadcastChannel] = new WindowBroadcastChannel(name);
	return globalThis[kBroadcastChannel];
}
var kFocusManager = Symbol.for("better-auth:focus-manager");
var WindowFocusManager = class {
	listeners = /* @__PURE__ */ new Set();
	subscribe(listener) {
		this.listeners.add(listener);
		return () => {
			this.listeners.delete(listener);
		};
	}
	setFocused(focused) {
		this.listeners.forEach((listener) => listener(focused));
	}
	setup() {
		if (typeof window === "undefined" || typeof document === "undefined" || typeof window.addEventListener === "undefined") return () => {};
		const visibilityHandler = () => {
			if (document.visibilityState === "visible") this.setFocused(true);
		};
		document.addEventListener("visibilitychange", visibilityHandler, false);
		return () => {
			document.removeEventListener("visibilitychange", visibilityHandler, false);
		};
	}
};
function getGlobalFocusManager() {
	if (!globalThis[kFocusManager]) globalThis[kFocusManager] = new WindowFocusManager();
	return globalThis[kFocusManager];
}
var kOnlineManager = Symbol.for("better-auth:online-manager");
var WindowOnlineManager = class {
	listeners = /* @__PURE__ */ new Set();
	isOnline = typeof navigator !== "undefined" ? navigator.onLine : true;
	subscribe(listener) {
		this.listeners.add(listener);
		return () => {
			this.listeners.delete(listener);
		};
	}
	setOnline(online) {
		this.isOnline = online;
		this.listeners.forEach((listener) => listener(online));
	}
	setup() {
		if (typeof window === "undefined" || typeof window.addEventListener === "undefined") return () => {};
		const onOnline = () => this.setOnline(true);
		const onOffline = () => this.setOnline(false);
		window.addEventListener("online", onOnline, false);
		window.addEventListener("offline", onOffline, false);
		return () => {
			window.removeEventListener("online", onOnline, false);
			window.removeEventListener("offline", onOffline, false);
		};
	}
};
function getGlobalOnlineManager() {
	if (!globalThis[kOnlineManager]) globalThis[kOnlineManager] = new WindowOnlineManager();
	return globalThis[kOnlineManager];
}
var now$1 = () => Math.floor(Date.now() / 1e3);
/**
* Rate limit: don't refetch on focus if a session request was made within this many seconds
*/
var FOCUS_REFETCH_RATE_LIMIT_SECONDS = 5;
function createSessionRefreshManager(opts) {
	const { fetchSession, shouldPollSession = () => true, sessionSignal, options = {} } = opts;
	const refetchInterval = options.sessionOptions?.refetchInterval ?? 0;
	const refetchOnWindowFocus = options.sessionOptions?.refetchOnWindowFocus ?? true;
	const refetchWhenOffline = options.sessionOptions?.refetchWhenOffline ?? false;
	const state = {
		isInitialized: false,
		lastSessionRequest: 0
	};
	const shouldRefetch = () => {
		return refetchWhenOffline || getGlobalOnlineManager().isOnline;
	};
	const triggerRefetch = (event) => {
		if (!shouldRefetch()) return;
		if (event?.event === "storage") {
			fetchSession();
			return;
		}
		if (event?.event === "poll") {
			state.lastSessionRequest = now$1();
			fetchSession();
			return;
		}
		if (event?.event === "visibilitychange") {
			if (now$1() - state.lastSessionRequest < FOCUS_REFETCH_RATE_LIMIT_SECONDS) return;
			state.lastSessionRequest = now$1();
			fetchSession();
			return;
		}
		fetchSession();
	};
	const broadcastSessionUpdate = (trigger) => {
		getGlobalBroadcastChannel().post({
			event: "session",
			data: { trigger },
			clientId: Math.random().toString(36).substring(7)
		});
	};
	const setupPolling = () => {
		if (refetchInterval && refetchInterval > 0) state.pollInterval = setInterval(() => {
			if (shouldPollSession()) triggerRefetch({ event: "poll" });
		}, refetchInterval * 1e3);
	};
	const setupBroadcast = () => {
		state.unsubscribeBroadcast = getGlobalBroadcastChannel().subscribe(() => {
			triggerRefetch({ event: "storage" });
		});
	};
	const setupFocusRefetch = () => {
		if (!refetchOnWindowFocus) return;
		state.unsubscribeFocus = getGlobalFocusManager().subscribe(() => {
			triggerRefetch({ event: "visibilitychange" });
		});
	};
	const setupOnlineRefetch = () => {
		state.unsubscribeOnline = getGlobalOnlineManager().subscribe((online) => {
			if (online) triggerRefetch({ event: "visibilitychange" });
		});
	};
	const setupSignalSubscription = () => {
		state.unsubscribeSignal = sessionSignal.listen(() => {
			fetchSession();
		});
	};
	const init = () => {
		if (state.isInitialized) return;
		state.isInitialized = true;
		setupPolling();
		setupBroadcast();
		setupFocusRefetch();
		setupOnlineRefetch();
		setupSignalSubscription();
		state.cleanupBroadcastSetup = getGlobalBroadcastChannel().setup();
		state.cleanupFocusSetup = getGlobalFocusManager().setup();
		state.cleanupOnlineSetup = getGlobalOnlineManager().setup();
	};
	const cleanup = () => {
		if (!state.isInitialized) return;
		if (state.pollInterval) {
			clearInterval(state.pollInterval);
			state.pollInterval = void 0;
		}
		if (state.unsubscribeBroadcast) {
			state.unsubscribeBroadcast();
			state.unsubscribeBroadcast = void 0;
		}
		if (state.unsubscribeFocus) {
			state.unsubscribeFocus();
			state.unsubscribeFocus = void 0;
		}
		if (state.unsubscribeOnline) {
			state.unsubscribeOnline();
			state.unsubscribeOnline = void 0;
		}
		if (state.unsubscribeSignal) {
			state.unsubscribeSignal();
			state.unsubscribeSignal = void 0;
		}
		if (state.cleanupBroadcastSetup) {
			state.cleanupBroadcastSetup();
			state.cleanupBroadcastSetup = void 0;
		}
		if (state.cleanupFocusSetup) {
			state.cleanupFocusSetup();
			state.cleanupFocusSetup = void 0;
		}
		if (state.cleanupOnlineSetup) {
			state.cleanupOnlineSetup();
			state.cleanupOnlineSetup = void 0;
		}
		state.isInitialized = false;
		state.lastSessionRequest = 0;
	};
	return {
		init,
		cleanup,
		triggerRefetch,
		broadcastSessionUpdate
	};
}
var isServer = () => typeof window === "undefined";
var SESSION_MOUNT_DEDUPE_INTERVAL = STORE_UNMOUNT_DELAY;
/**
* Normalize $fetch response: `throw: true` returns data directly,
* otherwise `{ data, error }`.
*/
function normalizeSessionResponse(res) {
	if (typeof res === "object" && res !== null && "data" in res && "error" in res) return res;
	return {
		data: res,
		error: null
	};
}
function normalizeSessionData(data) {
	if (!data) return null;
	if (data.session === null && data.user === null) return null;
	return data;
}
function isSessionAtomEqual(a, b) {
	return isJsonEqual(a.data, b.data) && a.error === b.error && a.isPending === b.isPending && a.isRefetching === b.isRefetching && a.refetch === b.refetch;
}
function getSessionAtom($fetch, options) {
	const $signal = /* @__PURE__ */ atom(false);
	let flight;
	let freshUntil = 0;
	let sessionRevision = 0;
	$signal.listen(() => {
		sessionRevision++;
		freshUntil = 0;
	});
	const refetch = (queryParams) => fetchSession(queryParams);
	const session = /* @__PURE__ */ atom({
		data: null,
		error: null,
		isPending: true,
		isRefetching: false,
		refetch
	});
	withEquality(session, isSessionAtomEqual);
	const executeSessionFetch = async (signal, queryParams) => {
		const current = session.value;
		session.set({
			...current,
			isPending: current.data === null,
			isRefetching: true,
			error: null,
			refetch
		});
		if (signal.aborted) return "aborted";
		try {
			const res = await $fetch("/get-session", {
				method: "GET",
				query: queryParams?.query,
				signal
			});
			if (signal.aborted) return "aborted";
			let { data, error } = normalizeSessionResponse(res);
			let outcome = "fresh";
			if (data?.needsRefresh) try {
				const refreshRes = await $fetch("/get-session", {
					method: "POST",
					signal
				});
				if (signal.aborted) return "aborted";
				({data, error} = normalizeSessionResponse(refreshRes));
			} catch {
				if (signal.aborted) return "aborted";
				outcome = "stale";
			}
			if (error) {
				const latest = session.value;
				const isUnauthorized = error?.status === 401;
				session.set({
					data: isUnauthorized ? null : latest.data,
					error,
					isPending: false,
					isRefetching: false,
					refetch
				});
				return "failed";
			}
			const sessionData = normalizeSessionData(data);
			const current = session.value;
			const stableData = current.data != null && sessionData != null && isJsonEqual(current.data, sessionData) ? current.data : sessionData;
			session.set({
				data: stableData,
				error: null,
				isPending: false,
				isRefetching: false,
				refetch
			});
			return outcome;
		} catch (fetchError) {
			if (signal.aborted) return "aborted";
			const latest = session.value;
			session.set({
				data: latest.data,
				error: fetchError,
				isPending: false,
				isRefetching: false,
				refetch
			});
			return "failed";
		}
	};
	const getFreshUntil = () => {
		const expiresAt = session.value.data?.session?.expiresAt;
		const sessionExpiresAt = expiresAt instanceof Date ? expiresAt.getTime() : Number.POSITIVE_INFINITY;
		return Math.min(Date.now() + SESSION_MOUNT_DEDUPE_INTERVAL, sessionExpiresAt);
	};
	const fetchSession = (queryParams) => {
		freshUntil = 0;
		flight?.cancel();
		const controller = new AbortController();
		const request = {
			cancel: () => controller.abort(),
			promise: Promise.resolve().then(() => {
				if (controller.signal.aborted) return "aborted";
				return executeSessionFetch(controller.signal, queryParams);
			}),
			revision: sessionRevision
		};
		flight = request;
		const settleFlight = (outcome) => {
			if (flight !== request) return;
			flight = void 0;
			if (outcome === "fresh" && request.revision === sessionRevision) freshUntil = getFreshUntil();
		};
		request.promise.then(settleFlight, () => settleFlight("failed"));
		return request.promise.then(() => void 0);
	};
	const fetchSessionOnMount = () => {
		if (flight?.revision === sessionRevision) return flight.promise.then(() => void 0);
		if (Date.now() < freshUntil) return Promise.resolve();
		return fetchSession();
	};
	let broadcastSessionUpdate = () => {};
	onMount(session, () => {
		let timeoutId;
		if (!isServer()) timeoutId = setTimeout(() => {
			fetchSessionOnMount();
		}, 0);
		const refreshManager = createSessionRefreshManager({
			fetchSession,
			shouldPollSession: () => session.value.data != null,
			sessionSignal: $signal,
			options
		});
		refreshManager.init();
		broadcastSessionUpdate = refreshManager.broadcastSessionUpdate;
		return () => {
			if (timeoutId) clearTimeout(timeoutId);
			refreshManager.cleanup();
		};
	});
	return {
		session,
		$sessionSignal: $signal,
		broadcastSessionUpdate: (trigger) => broadcastSessionUpdate(trigger)
	};
}
var resolvePublicAuthUrl = (basePath) => {
	if (typeof process === "undefined") return void 0;
	const path = basePath ?? "/api/auth";
	if (process.env.NEXT_PUBLIC_AUTH_URL) return process.env.NEXT_PUBLIC_AUTH_URL;
	if (typeof window === "undefined") {
		if (process.env.NEXTAUTH_URL) try {
			return process.env.NEXTAUTH_URL;
		} catch {}
		if (process.env.VERCEL_URL) try {
			const protocol = process.env.VERCEL_URL.startsWith("http") ? "" : "https://";
			return `${new URL(`${protocol}${process.env.VERCEL_URL}`).origin}${path}`;
		} catch {}
	}
};
var getClientConfig = (options, loadEnv) => {
	const isCredentialsSupported = "credentials" in Request.prototype;
	const baseURL = getBaseURL(options?.baseURL, options?.basePath, void 0, loadEnv) ?? resolvePublicAuthUrl(options?.basePath) ?? "/api/auth";
	const pluginsFetchPlugins = options?.plugins?.flatMap((plugin) => plugin.fetchPlugins).filter((pl) => pl !== void 0) || [];
	const lifeCyclePlugin = {
		id: "lifecycle-hooks",
		name: "lifecycle-hooks",
		hooks: {
			onSuccess: options?.fetchOptions?.onSuccess,
			onError: options?.fetchOptions?.onError,
			onRequest: options?.fetchOptions?.onRequest,
			onResponse: options?.fetchOptions?.onResponse
		}
	};
	const { onSuccess: _onSuccess, onError: _onError, onRequest: _onRequest, onResponse: _onResponse, ...restOfFetchOptions } = options?.fetchOptions || {};
	const $fetch = createFetch({
		baseURL,
		...isCredentialsSupported ? { credentials: "include" } : {},
		method: "GET",
		jsonParser(text) {
			if (!text) return null;
			return parseJSON(text, { strict: false });
		},
		customFetchImpl: fetch,
		...restOfFetchOptions,
		plugins: [
			lifeCyclePlugin,
			...restOfFetchOptions.plugins || [],
			...options?.disableDefaultFetchPlugins ? [] : [redirectPlugin],
			...pluginsFetchPlugins
		]
	});
	const { $sessionSignal, session, broadcastSessionUpdate } = getSessionAtom($fetch, options);
	const plugins = options?.plugins || [];
	let pluginsActions = {};
	const pluginsAtoms = {
		$sessionSignal,
		session
	};
	const pluginPathMethods = {
		"/sign-out": "POST",
		"/revoke-sessions": "POST",
		"/revoke-other-sessions": "POST",
		"/delete-user": "POST"
	};
	const atomListeners = [{
		signal: "$sessionSignal",
		matcher(path) {
			return path === "/sign-out" || path === "/update-user" || path === "/update-session" || path === "/sign-up/email" || path === "/sign-in/email" || path === "/delete-user" || path === "/verify-email" || path === "/revoke-sessions" || path === "/revoke-session" || path === "/revoke-other-sessions" || path === "/change-email" || path === "/change-password";
		},
		callback(path) {
			if (path === "/sign-out") broadcastSessionUpdate("signout");
			else if (path === "/update-user" || path === "/update-session") broadcastSessionUpdate("updateUser");
		}
	}];
	for (const plugin of plugins) {
		if (plugin.getAtoms) Object.assign(pluginsAtoms, plugin.getAtoms?.($fetch));
		if (plugin.pathMethods) Object.assign(pluginPathMethods, plugin.pathMethods);
		if (plugin.atomListeners) atomListeners.push(...plugin.atomListeners);
	}
	const $store = {
		notify: (signal) => {
			pluginsAtoms[signal].set(!pluginsAtoms[signal].get());
		},
		listen: (signal, listener) => {
			pluginsAtoms[signal].subscribe(listener);
		},
		atoms: pluginsAtoms
	};
	for (const plugin of plugins) if (plugin.getActions) pluginsActions = defu(plugin.getActions?.($fetch, $store, options) ?? {}, pluginsActions);
	return {
		get baseURL() {
			return baseURL;
		},
		pluginsActions,
		pluginsAtoms,
		pluginPathMethods,
		atomListeners,
		$fetch,
		$store
	};
};
function isAtom(value) {
	return typeof value === "object" && value !== null && "get" in value && typeof value.get === "function" && "lc" in value && typeof value.lc === "number";
}
function getMethod(path, knownPathMethods, args) {
	const method = knownPathMethods[path];
	const { fetchOptions, query: _query, ...body } = args || {};
	if (method) return method;
	if (fetchOptions?.method) return fetchOptions.method;
	if (body && Object.keys(body).length > 0) return "POST";
	return "GET";
}
function createDynamicPathProxy(routes, client, knownPathMethods, atoms, atomListeners) {
	function createProxy(path = []) {
		return new Proxy(function() {}, {
			get(_, prop) {
				if (typeof prop !== "string") return;
				if (prop === "then" || prop === "catch" || prop === "finally") return;
				const fullPath = [...path, prop];
				let current = routes;
				for (const segment of fullPath) if (current && typeof current === "object" && segment in current) current = current[segment];
				else {
					current = void 0;
					break;
				}
				if (typeof current === "function") return current;
				if (isAtom(current)) return current;
				return createProxy(fullPath);
			},
			apply: async (_, __, args) => {
				const routePath = "/" + path.map(toKebabCase).join("/");
				const arg = args[0] || {};
				const fetchOptions = args[1] || {};
				const { query, fetchOptions: argFetchOptions, ...body } = arg;
				const options = {
					...fetchOptions,
					...argFetchOptions
				};
				const method = getMethod(routePath, knownPathMethods, arg);
				return await client(routePath, {
					...options,
					body: method === "GET" ? void 0 : {
						...body,
						...options?.body || {}
					},
					query: query || options?.query,
					method,
					async onSuccess(context) {
						await options?.onSuccess?.(context);
						if (!atomListeners || options.disableSignal) return;
						/**
						* We trigger listeners
						*/
						const matches = atomListeners.filter((s) => s.matcher(routePath));
						if (!matches.length) return;
						const visited = /* @__PURE__ */ new Set();
						for (const match of matches) {
							const signal = atoms[match.signal];
							if (!signal) return;
							if (visited.has(match.signal)) continue;
							visited.add(match.signal);
							/**
							* To avoid race conditions we set the signal in a setTimeout
							*/
							const val = signal.get();
							setTimeout(() => {
								signal.set(!val);
							}, 10);
							match.callback?.(routePath);
						}
					}
				});
			}
		});
	}
	return createProxy();
}
/**
* Subscribe to store changes and get store's value.
*
* Can be used with store builder too.
*
* ```js
* import { useStore } from 'nanostores/react'
*
* import { router } from '../store/router'
*
* export const Layout = () => {
*   let page = useStore(router)
*   if (page.route === 'home') {
*     return <HomePage />
*   } else {
*     return <Error404 />
*   }
* }
* ```
*
* @param store Store instance.
* @returns Store value.
*/
function useStore(store, options = {}) {
	const snapshotRef = (0, import_react.useRef)(store.get());
	const { keys, deps = [store, keys] } = options;
	const subscribe = (0, import_react.useCallback)((onChange) => {
		const emitChange = (value) => {
			if (snapshotRef.current === value) return;
			snapshotRef.current = value;
			onChange();
		};
		emitChange(store.value);
		if (keys?.length) return listenKeys(store, keys, emitChange);
		return store.listen(emitChange);
	}, deps);
	const get = () => snapshotRef.current;
	return (0, import_react.useSyncExternalStore)(subscribe, get, get);
}
function getAtomKey(str) {
	return `use${capitalizeFirstLetter(str)}`;
}
function createAuthClient(options) {
	const { pluginPathMethods, pluginsActions, pluginsAtoms, $fetch, $store, atomListeners } = getClientConfig(options);
	const resolvedHooks = {};
	for (const [key, value] of Object.entries(pluginsAtoms)) resolvedHooks[getAtomKey(key)] = () => useStore(value);
	return createDynamicPathProxy({
		...pluginsActions,
		...resolvedHooks,
		$fetch,
		$store
	}, $fetch, pluginPathMethods, pluginsAtoms, atomListeners);
}
/**
* The sign-out sequence used by `src/lib/auth/client.ts`, kept here as a pure
* module so its effects can be unit-tested (`node --test` only covers
* `scripts/`), the same split `migration-plan.mjs` uses for the two appliers.
*
* The two environments authenticate differently, so they need different
* answers to "the server did not reply":
*
* - **Live preview** — a partitioned iframe with no readable session cookie;
*   the session rides the bearer token in `sessionStorage`. Dropping that token
*   IS being signed out, so the server call is best effort and a wedged request
*   must never strand the button. This is where the hang actually happens.
* - **Deployed** — the session rides an HttpOnly `__Host-` cookie that JS
*   cannot delete. ONLY a completed sign-out response clears it, and
*   `server.ts` enables `session.cookieCache` (maxAge 300), so `/get-session`
*   would keep answering from the cached cookie for minutes afterwards.
*   Redirecting on a timeout would show the visitor "signed out" while their
*   session is still live — so here we fail loudly instead of pretending.
*/
/**
* Live preview: aggressive, because the local clear is what signs the user out.
* The same-origin POST normally answers in tens of ms; lower would start
* abandoning slow-but-working sign-outs for no gain.
*/
var PREVIEW_SIGN_OUT_TIMEOUT_MS = 1500;
/**
* Deployed: generous, because only the server can end this session — but still
* bounded, so a wedged request reports failure the visitor can retry instead of
* spinning forever. A sign-out still unanswered at 10s is not going to land.
*/
var DEPLOYED_SIGN_OUT_TIMEOUT_MS = 1e4;
/**
* How long to wait for a sign-out in this environment. Every sign-out network
* call picks its bound here, so the preview/deployed split cannot drift apart
* between callers.
* @param {boolean} livePreview
* @returns {number}
*/
function signOutTimeoutMs(livePreview) {
	return livePreview ? PREVIEW_SIGN_OUT_TIMEOUT_MS : DEPLOYED_SIGN_OUT_TIMEOUT_MS;
}
/**
* Run `start()` but give up after `timeoutMs`, reporting which happened. Never
* rejects — callers decide what a failure means, and a `try/catch` around an
* `await` does nothing for a promise that never settles.
* @param {() => unknown} start
* @param {number} timeoutMs
* @returns {Promise<"ok" | "failed" | "timeout">}
*/
function settleWithin(start, timeoutMs) {
	return new Promise((resolve) => {
		const timer = setTimeout(() => resolve("timeout"), timeoutMs);
		/** @param {"ok" | "failed"} outcome */
		const done = (outcome) => {
			clearTimeout(timer);
			resolve(outcome);
		};
		try {
			Promise.resolve(start()).then(() => done("ok"), () => done("failed"));
		} catch {
			done("failed");
		}
	});
}
/**
* @typedef {object} SignOutSteps
* @property {boolean} livePreview Whether the app is the sandbox preview iframe.
* @property {boolean} hasBearer Whether a preview bearer token is stored.
* @property {() => unknown} requestSignOut Ask the server to end the session; must reject on a failed response.
* @property {() => void} clearToken Drop the stored bearer token.
* @property {() => void} redirect Leave the page.
* @property {number} [timeoutMs]
*/
/**
* End the session, then clear the local token and redirect.
*
* In the live preview those last two always run. When deployed they run only if
* the server confirmed, because nothing else can clear the cookie — a failed or
* timed-out sign-out throws rather than reporting a sign-out that did not
* happen.
* @param {SignOutSteps} steps
* @returns {Promise<void>}
*/
async function runSignOut({ livePreview, hasBearer, requestSignOut, clearToken, redirect, timeoutMs }) {
	if (livePreview) {
		if (hasBearer) await settleWithin(requestSignOut, timeoutMs ?? signOutTimeoutMs(livePreview));
		clearToken();
		redirect();
		return;
	}
	const outcome = await settleWithin(requestSignOut, timeoutMs ?? signOutTimeoutMs(livePreview));
	if (outcome !== "ok") throw new Error(outcome === "timeout" ? "Sign-out timed out — you are still signed in. Please try again." : "Sign-out failed — you are still signed in. Please try again.");
	clearToken();
	redirect();
}
/**
* @typedef {object} PreSignInSteps
* @property {boolean} livePreview Whether the app is the sandbox preview iframe.
* @property {boolean} hasBearer Whether a preview bearer token is stored.
* @property {() => unknown} requestSignOut Ask the server to end any prior session.
* @property {() => void} clearToken Drop the stored bearer token.
* @property {number} [timeoutMs]
*/
/**
* Drop any prior session before a new sign-in starts, so switching providers
* actually switches identity.
*
* Deliberately BEST EFFORT — unlike `runSignOut` this never throws. It also
* runs when there is no prior session at all, so treating a failure as fatal
* would block first-time sign-in on a transport hiccup, for a visitor with no
* session to protect. The subsequent OAuth flow issues a fresh session either
* way. Only the wait is bounded, and by the same per-environment rule as
* `runSignOut`: a deployed session dies server-side, so it gets the full
* window rather than the preview's aggressive one.
* @param {PreSignInSteps} steps
* @returns {Promise<void>}
*/
async function runPreSignInSignOut({ livePreview, hasBearer, requestSignOut, clearToken, timeoutMs }) {
	if (hasBearer || !livePreview) await settleWithin(requestSignOut, timeoutMs ?? signOutTimeoutMs(livePreview));
	clearToken();
}
var GROK_PROVIDERS = [{
	providerId: "grok-google",
	idp: "google",
	label: "Google"
}, {
	providerId: "grok-x",
	idp: "twitter",
	label: "X"
}];
/**
* Better Auth client for this React SPA (browser-side).
*
* Talks to this app's OWN Better Auth at same-origin `/api/auth/*`. In the live
* preview the app is an embedded iframe with PARTITIONED cookies, so after a
* popup sign-in it can't read the session cookie — it authenticates with a
* bearer token instead (captured from the popup, see `signIn`). The `onRequest`
* hook attaches that token when present; when deployed (cookie auth) no token
* is stored, so nothing changes.
*
* To sign out call `signOut()` below, NOT `authClient.signOut()`: the raw call
* leaves the bearer token in place, and `onRequest` keeps re-attaching it, so
* the visitor stays signed in.
*/
var authClient = createAuthClient({
	plugins: [genericOAuthClient()],
	fetchOptions: { onRequest(ctx) {
		const token = getBearerToken();
		if (token) ctx.headers.set("Authorization", `Bearer ${token}`);
		return ctx;
	} }
});
var BEARER_KEY = "grok-auth.bearer-token";
/** The stored preview bearer token, or null. */
function getBearerToken() {
	if (typeof window === "undefined") return null;
	try {
		return window.sessionStorage.getItem(BEARER_KEY);
	} catch {
		return null;
	}
}
function setBearerToken(token) {
	if (typeof window === "undefined") return;
	try {
		if (token) window.sessionStorage.setItem(BEARER_KEY, token);
		else window.sessionStorage.removeItem(BEARER_KEY);
	} catch {}
}
/**
* The sandbox live preview runs this app inside an iframe on a `*.grok-sandbox.com`
* host, where a full-page redirect to the broker can't work — so sign-in uses a
* popup there and a normal redirect everywhere else.
*/
function inLivePreview() {
	return typeof window !== "undefined" && window.location.hostname.endsWith(".grok-sandbox.com");
}
/**
* Start sign-in with one upstream provider (`providerId` from `GROK_PROVIDERS`),
* federating through the Grok auth broker.
*
* - **Live preview** (`*.grok-sandbox.com` iframe): opens a POPUP to
*   `/auth/popup`, served by the template Vite plugin (see `vite.config.ts` +
*   `popup.server.ts`) — 302s to the broker/upstream login (no app chrome) and,
*   on return, posts the session bearer token back. We store it and refresh the
*   session; no top-level navigation of the iframe to the broker.
* - **Deployed** (and local non-iframe): a normal full-page redirect into the broker.
*
* Either way it clears any existing local session FIRST so switching providers
* actually switches identity.
*/
async function signIn(providerId, opts = {}) {
	const callbackURL = opts.callbackURL ?? "/";
	const errorCallbackURL = opts.errorCallbackURL ?? "/";
	const popup = inLivePreview() ? openSignInPopup(providerId) : null;
	await runPreSignInSignOut({
		livePreview: inLivePreview(),
		hasBearer: Boolean(getBearerToken()),
		requestSignOut: () => authClient.signOut(),
		clearToken: () => setBearerToken(null)
	});
	if (inLivePreview()) {
		if (!popup) throw new Error("Pop-up blocked — allow pop-ups for sign-in");
		const token = await waitForPopupToken(popup);
		if (!token) throw new Error("Sign-in was cancelled or failed");
		setBearerToken(token);
		try {
			await authClient.getSession();
		} catch {}
		if (typeof window !== "undefined") {
			const dest = new URL(callbackURL, window.location.origin);
			const here = window.location;
			if (dest.origin !== here.origin || dest.pathname !== here.pathname || dest.search !== here.search) window.location.href = callbackURL;
		}
		return;
	}
	const { data, error } = await authClient.signIn.oauth2({
		providerId,
		callbackURL,
		errorCallbackURL
	});
	if (error) throw new Error(error.message ?? "Sign-in failed");
	if (data?.url) window.location.href = data.url;
}
/**
* Open `/auth/popup` in a new window. Must run synchronously inside the click
* handler (no await before this). The path is served by the template Vite
* plugin (`authPopupPlugin` in vite.config.ts) — NOT by a React route.
*
* Opens the real URL directly (not about:blank → assign). From a cross-origin
* iframe the about:blank dance often fails on the first click and the window
* ends up showing the app shell.
*/
function openSignInPopup(providerId) {
	const url = `${window.location.origin}/auth/popup?providerId=${encodeURIComponent(providerId)}`;
	const name = `grok-signin-${Date.now()}`;
	return window.open(url, name, "popup,width=500,height=650");
}
/**
* Wait for the popup's completion page to postMessage the session bearer (or
* for the user to dismiss the popup).
*/
function waitForPopupToken(popup) {
	return new Promise((resolve) => {
		const origin = window.location.origin;
		let settled = false;
		let closeTimer;
		const settle = (token) => {
			if (settled) return;
			settled = true;
			cleanup();
			resolve(token);
		};
		const onMessage = (event) => {
			if (event.origin !== origin) return;
			const data = event.data;
			if (!data || data.source !== "grok-auth-popup") return;
			settle(data.token ?? null);
		};
		const pollTimer = window.setInterval(() => {
			if (!popup.closed) return;
			window.clearInterval(pollTimer);
			closeTimer = window.setTimeout(() => settle(null), 400);
		}, 300);
		function cleanup() {
			window.clearInterval(pollTimer);
			if (closeTimer !== void 0) window.clearTimeout(closeTimer);
			window.removeEventListener("message", onMessage);
		}
		window.addEventListener("message", onMessage);
	});
}
/**
* Sign out of THIS app's local session, clear the preview token, then redirect.
*
* Use this, never `authClient.signOut()` — see the note on `authClient`.
* Sequencing lives in `scripts/sign-out-plan.mjs` so it can be unit-tested.
*
* **Rejects when deployed if the server never confirms.** There the session is
* an HttpOnly cookie only the server can clear, so redirecting anyway would
* report a sign-out that did not happen. `<UserButton />` handles that for you;
* a hand-rolled control must catch it and let the visitor retry. In the live
* preview the local clear is sufficient, so it always resolves.
*/
async function signOut$1(redirectTo = "/") {
	await runSignOut({
		livePreview: inLivePreview(),
		hasBearer: Boolean(getBearerToken()),
		requestSignOut: async () => {
			const { error } = await authClient.signOut();
			if (error) throw new Error(error.message ?? "Sign-out failed");
		},
		clearToken: () => setBearerToken(null),
		redirect: () => {
			window.location.href = redirectTo;
		}
	});
}
/**
* Client-readable marker for gate-materialized sessions ("Sign in with Grok"
* zero-click sessions minted by `gate-session.server.ts`). Signing out of a
* gate session is a no-op — the next request re-materializes it from
* `x-grok-identity` — so `UserButton` uses this to hide its sign-out control.
* `__Host-` prefixed like the other auth cookies: browsers reject a `__Host-`
* cookie carrying a `Domain`, so an untrusted sibling `*.grok.me` app cannot
* plant a parent-domain copy that the host-only clear could never expire.
* Client-safe: no server imports.
*/
var GATE_SESSION_MARKER_COOKIE = "__Host-grok_gate_session";
function hasGateSessionMarker() {
	if (typeof document === "undefined") return false;
	return document.cookie.split(";").some((pair) => pair.trim().startsWith(`${GATE_SESSION_MARKER_COOKIE}=`));
}
/**
* Current user + loading state. Same behavior in live preview and when deployed:
*   - Auth enabled -> the real signed-in user; `user` is `null` while
*                            the session resolves (`isPending: true`) and when
*                            signed out (`isPending: false`). Session comes from
*                            Better Auth `useSession()` → `/api/auth/get-session`
*                            (cookie when deployed; bearer in live preview).
*   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> `DEV_USER`, never pending.
*
* Protect a route by waiting out `isPending` before acting on `user` —
* redirecting on `user: null` alone bounces signed-in visitors to sign-in on
* every hard reload:
*
*   import { RedirectToSignIn } from "@/lib/auth/gates";
*   const { user, isPending } = useCurrentUserState();
*   if (isPending) return null;              // still resolving — don't redirect yet
*   if (!user) return <RedirectToSignIn />;  // definitely signed out
*
* `authEnabled` is a module-level constant fixed at load, so the guarded hook
* call keeps a stable hook order across every render of a given component.
*/
function useCurrentUserState() {
	const { data, isPending } = authClient.useSession();
	const user = data?.user;
	return {
		user: user ? {
			id: user.id,
			displayName: user.name ?? null,
			primaryEmail: user.email ?? null,
			profileImageUrl: user.image ?? null,
			isDevFallback: false
		} : null,
		isPending
	};
}
/**
* Convenience view of `useCurrentUserState().user` for display (e.g.
* `user?.displayName ?? "Guest"`). NOTE: `null` means *loading OR signed out* —
* for redirects/guards use `useCurrentUserState()` and check `isPending`.
*/
function useCurrentUser() {
	return useCurrentUserState().user;
}
var subscribeToNothing = () => () => {};
var noGateSessionOnServer = () => false;
/**
* Minimal signed-in identity chip + sign-out. Restyle freely (see the
* `design-ui` skill). Sign-out is only shown when auth is enabled (the
* disabled-auth dev user has nothing to sign out of) and the session is not
* gate-materialized — behind the gate the next request signs the viewer
* straight back in, so a sign-out control there is a broken loop.
*/
function UserButton() {
	const user = useCurrentUser();
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	const gateSession = (0, import_react.useSyncExternalStore)(subscribeToNothing, hasGateSessionMarker, noGateSessionOnServer);
	if (!user) return null;
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: user.profileImageUrl,
				alt: "",
				className: "h-8 w-8 rounded-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 place-items-center rounded-full bg-black/10 text-sm font-medium dark:bg-white/20",
				children: label.charAt(0).toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			!gateSession && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: signingOut,
				onClick: () => {
					setSigningOut(true);
					signOut$1().catch(() => setSigningOut(false));
				},
				className: "cursor-pointer text-sm underline-offset-4 opacity-70 hover:underline disabled:cursor-wait disabled:no-underline",
				children: signingOut ? "Signing out…" : "Sign out"
			})
		]
	});
}
var packs = {
	hi: {
		company: "DLM CASH LABS PRIVATE LIMITED",
		nav: {
			home: "मुख",
			product: "उत्पाद",
			services: "सेवाएँ",
			pricing: "योजना",
			security: "सुरक्षा",
			about: "परिचय",
			journal: "लेख",
			faq: "प्रश्न",
			contact: "संपर्क",
			legal: "शर्तें",
			enter: "प्रवेश",
			desk: "डेस्क खोलें",
			phoneOut: "मोबाइल निकास",
			more: "और"
		},
		liveNote: "हरी बिंदी वाले सिक्के की दर अभी चल रही है। कर्सर या उंगली रोकती है।",
		home: {
			kicker: "ओर्विया",
			title: "पाँच औज़ार, एक डेस्क।",
			lede: "नियम, जाल-औसत, स्मार्ट खिड़की, जीवित डॉलर पट्टी और जोखिम विराम — व्यापारी बॉट कंपनियों के काम को एक मूल मेज़ पर समेट कर। सहकर्मी सौदा, अनुज्ञप्ति और बटुआ इसी डेस्क पर हैं।",
			open: "डेस्क खोलें",
			enter: "प्रवेश",
			pillarsTitle: "एक में पाँच",
			pillars: [
				{
					t: "नियम मेज़",
					d: "शर्त लिखिए — सिक्का, दिशा, सीमा। योजना इस ब्राउज़र में रहती है। सौदा आप डेस्क पर देते हैं।"
				},
				{
					t: "जाल और औसत",
					d: "सीमा के अंदर कई क़दम और औसत प्रवेश की रूपरेखा। निष्पादन डेस्क के विज्ञापन और त्वरित खिड़की से होता है।"
				},
				{
					t: "स्मार्ट खिड़की",
					d: "त्वरित सौदा, भुगतान की घड़ी, और व्यापारी का छोड़ना। खिड़की कटते ही सौदा रुकता है।"
				},
				{
					t: "जीवित पट्टी",
					d: "डॉलर दर सार्वजनिक बाज़ार से आती है। हरी बिंदी लाइव है। पट्टी बक्सों में नहीं, कतार में चलती है।"
				},
				{
					t: "जोखिम विराम",
					d: "पूर्णता, सीमा, अनुज्ञप्ति और प्रशासन का विराम। सीमा टूटे तो डेस्क आगे नहीं बढ़ता।"
				}
			],
			rolesTitle: "भूमिका",
			roles: [
				{
					t: "अतिथि",
					d: "मुख, लेख और पुस्तक पढ़ सकते हैं।"
				},
				{
					t: "सदस्य",
					d: "ईमेल, Google, X, या मोबाइल कोड के बाद खाता। पासवर्ड मोबाइल पर वैकल्पिक है।"
				},
				{
					t: "व्यापारी",
					d: "पहचान के बाद अनुज्ञप्ति। खरीदने वाले को पास व्यापारी देता है।"
				},
				{
					t: "प्रशासन",
					d: "स्वयं नहीं खुलता। शुल्क और अंतरण डेस्क की प्रशासन भूमिका से।"
				}
			],
			journalTitle: "लेख",
			read: "पढ़ें"
		},
		product: {
			title: "उत्पाद",
			lede: "ओर्विया डीएलएम कैश लैब्स का डेस्क है। बाज़ार की पाँच बॉट परंपराएँ — नियम, जाल, औसत, स्मार्ट आदेश, और जोखिम — यहाँ अलग-अलग लोगो नहीं, एक क्रम हैं।",
			points: [
				{
					t: "सहकर्मी पुस्तक",
					d: "खरीद और बिक्री के विज्ञापन, भुगतान रेल, और सौदे की अवस्था।"
				},
				{
					t: "त्वरित",
					d: "राशि से विज्ञापन चुनना, बिना लंबी सूची खोले।"
				},
				{
					t: "अनुज्ञप्ति",
					d: "व्यापारी पहचान के बाद लाइसेंस। पहला खरीद पास माँगता है।"
				},
				{
					t: "बटुआ",
					d: "डेस्क पर शेष, आरक्षण, और प्रशासन से अंतरण।"
				},
				{
					t: "पट्टी",
					d: "जीवित डॉलर भाव। रुपया विज्ञापन अपना भाव रखता है — पट्टी उसे नहीं मिटाती।"
				}
			]
		},
		services: {
			title: "सेवाएँ",
			lede: "जो काम अलग-अलग बॉट साइटें बाँट कर बेचती हैं, वह यहाँ पाँच सेवाओं में है। कोई नक़ल किया हुआ वाक्य नहीं। जो बटन है, वह डेस्क पर खुलता है।",
			items: [
				{
					t: "नियम मेज़",
					d: "यदि-तो की जगह एक नामित योजना: सिक्का, खरीद या बिक्री, अधिकतम राशि, टिप्पणी।"
				},
				{
					t: "जाल और औसत",
					d: "एक ही दिशा में कई स्तर और औसत दाम की रूपरेखा लेख में है। ऑर्डर डेस्क पर स्वयं जाता है।"
				},
				{
					t: "स्मार्ट खिड़की",
					d: "त्वरित मार्ग और भुगतान की मिनट-घड़ी। व्यापारी छोड़ता है, खरीदार भुगतान चिह्नित करता है।"
				},
				{
					t: "बहु-बाज़ार पट्टी",
					d: "दस जीवित डॉलर जोड़े सार्वजनिक धारा से। बाकी सिक्के डेस्क के अपने हैं, बिना हरी बिंदी।"
				},
				{
					t: "जोखिम विराम",
					d: "न्यूनतम पूर्णता, पहचान, पास रद्द, और प्रशासन द्वारा डेस्क बंद।"
				}
			],
			padTitle: "नियम लिखें",
			padNote: "यह योजना इसी ब्राउज़र में रहती है। यह अपने आप सौदा नहीं करती।",
			name: "नाम",
			coin: "सिक्का",
			side: "दिशा",
			buy: "खरीद",
			sell: "बिक्री",
			max: "अधिकतम राशि",
			note: "टिप्पणी",
			save: "योजना सहेजें",
			saved: "सहेजी गई योजनाएँ",
			empty: "अभी कोई योजना नहीं।",
			remove: "हटाएँ",
			toPost: "डेस्क पर विज्ञापन दें"
		},
		pricing: {
			title: "योजना",
			lede: "यहाँ चेकआउट नहीं है। शुल्क प्रशासन डेस्क पर तय करता है। भूमिकाएँ क्षमता बाँटती हैं, दाम की तालिका नहीं।",
			heads: [
				"क्षमता",
				"अतिथि",
				"सदस्य",
				"व्यापारी"
			],
			rows: [
				{
					name: "लेख और मुख",
					cells: [
						"हाँ",
						"हाँ",
						"हाँ"
					]
				},
				{
					name: "पुस्तक देखना",
					cells: [
						"हाँ",
						"हाँ",
						"हाँ"
					]
				},
				{
					name: "विज्ञापन और बटुआ",
					cells: [
						"डेस्क भूमिका",
						"डेस्क भूमिका",
						"हाँ"
					]
				},
				{
					name: "अनुज्ञप्ति और पास",
					cells: [
						"नहीं",
						"नहीं",
						"हाँ"
					]
				},
				{
					name: "प्रशासन शुल्क",
					cells: [
						"नहीं",
						"नहीं",
						"नहीं"
					]
				}
			],
			note: "प्रशासन कोई खरीद योजना नहीं। सदस्यता Google, X, ईमेल या मोबाइल कोड से बनती है।"
		},
		security: {
			title: "सुरक्षा",
			lede: "पासवर्ड सादा नहीं रखा जाता। मोबाइल कोड संदेश नहीं है। पहचान के पूरे कागज़ यहाँ नहीं माँगे जाते।",
			points: [
				{
					t: "ईमेल खाता",
					d: "ईमेल और पासवर्ड इसी डेस्क के खाता-कोष में हैंश होकर रहते हैं। Google और X अलग प्रवेश हैं — उनके लिए पासवर्ड नहीं चाहिए।"
				},
				{
					t: "मोबाइल",
					d: "देश का कोड और उतने अंक जितने उस देश में होते हैं। छह अंकों का कोड केवल इसी स्क्रीन पर दिखता है, पाँच मिनट, पाँच कोशिश। पासवर्ड अभी या बाद में खाते में।"
				},
				{
					t: "वैकल्पिक पासवर्ड",
					d: "मोबाइल प्रवेश कोड से पूरा होता है। पासवर्ड बनाना आपकी इच्छा है। बाद में खाता पृष्ठ पर भी बन सकता है। वह भी एक-तरफ़ा हैश है।"
				},
				{
					t: "पहचान",
					d: "व्यापारी लाइसेंस के लिए अंतिम चार अंक और संलग्न चिह्न। पूरा दस्तावेज़ यहाँ संग्रह नहीं होता।"
				},
				{
					t: "प्रशासन",
					d: "साइन-अप से प्रशासन नहीं बनता।"
				}
			]
		},
		about: {
			title: "परिचय",
			lede: "ओर्विया डीएलएम कैश लैब्स प्राइवेट लिमिटेड का डेस्क है। कंपनी का काम सहकर्मी सौदा, व्यापारी अनुज्ञप्ति, और बाज़ार की जीवित पट्टी को एक जगह रखना है।",
			points: [
				"पाँच बॉट परंपराओं के मेनू — नियम, जाल, औसत, स्मार्ट आदेश, जोखिम — एक मूल क्रम में लिखे गए हैं।",
				"जीवित दर सार्वजनिक डॉलर धारा से आती है। रुपया विज्ञापन अपना दाम अलग रखता है।",
				"कोई नकली लाइसेंस संख्या यहाँ नहीं लिखी गई। कंपनी का नाम ही पहचान है।"
			]
		},
		journal: {
			title: "लेख",
			lede: "डेस्क के पाँच काम, छोटे लेखों में।",
			missing: "यह लेख नहीं मिला।",
			back: "सभी लेख"
		},
		posts: [
			{
				slug: "niyam-mez",
				title: "नियम मेज़ क्या करती है",
				dek: "शर्त लिखना और सौदा करना एक ही बटन नहीं है।",
				body: ["बॉट साइटें अक्सर ‘यदि यह हो तो वह करो’ बेचती हैं। ओर्विया पर नियम मेज़ एक नाम, सिक्का, दिशा और अधिकतम राशि सहेजती है।", "योजना अपने आप ऑर्डर नहीं भेजती। जब आप तैयार हों, विज्ञापन या त्वरित खिड़की से सौदा स्वयं दीजिए। सीमा पार हो तो योजना याद दिलाती है, छुप कर व्यापार नहीं करती।"]
			},
			{
				slug: "jaal-ausat",
				title: "जाल और औसत",
				dek: "कई स्तर और औसत दाम की रूपरेखा, बिना नक़ली बॉट चालू किए।",
				body: ["जाल एक सीमा को टुकड़ों में बाँटता है। औसत प्रवेश गिरते दाम पर मात्रा जोड़ने का विचार है। दोनों रूपरेखाएँ हैं, जादू की ट्रेड नहीं।", "डेस्क पर दाम विज्ञापन का है। डॉलर पट्टी उस विज्ञापन की कीमत को बदल नहीं देती। जाल की गणित आप लेख और नियम मेज़ पर रखते हैं, निष्पादन पुस्तक पर।"]
			},
			{
				slug: "jeevit-patti",
				title: "जीवित पट्टी और रुपया पुस्तक",
				dek: "हरी बिंदी का मतलब live डॉलर दर है।",
				body: ["पट्टी कतार में चलती है। उस पर रुकने के लिए कर्सर या उंगली काफी है। बॉक्स की दीवार नहीं है।", "हरी बिंदी उन्हीं सिक्कों पर है जिनकी दर सार्वजनिक धारा से आ रही है। बाकी सिक्के धूसर बिंदी रखते हैं। रुपया विज्ञापन अपना भाव अलग रखता है।"]
			},
			{
				slug: "vyapari-anugyapti",
				title: "व्यापारी अनुज्ञप्ति और पास",
				dek: "पहचान, लाइसेंस, और खरीदने वाले का पास।",
				body: ["बिक्री का विज्ञापन व्यापारी लाइसेंस माँगता है। लाइसेंस पहचान के बाद आता है। रखे जाते हैं अंतिम चार अंक।", "किसी व्यापारी से पहली खरीद पर उसी के पास का अनुरोध होता है। पास उसके चार अंक और चार यादृच्छिक अंक से बनता है। वह रद्द कर सकता है। दोबारा देने का अधिकार भी उसी का है।"]
			},
			{
				slug: "jokhim-viram",
				title: "जोखिम और विराम",
				dek: "सीमा, पूर्णता, और बंद डेस्क।",
				body: ["विज्ञापन न्यूनतम पूर्णता और पहचान माँग सकता है। भुगतान की घड़ी कटते ही खुला सौदा रुकता है।", "प्रशासन डेस्क बंद कर सकता है। बंद होने पर नई किताब नहीं चलती। यह विराम खरीदा नहीं जाता — वह भूमिका डेस्क पर पहले से नियुक्त है।"]
			}
		],
		faq: {
			title: "प्रश्न",
			items: [
				{
					q: "पासवर्ड क्या साइन-अप पर ज़रूरी है?",
					a: "नहीं, अगर आप Google, X, या मोबाइल कोड से आते हैं। ईमेल खाते में पासवर्ड उसी समय चाहिए, क्योंकि वह कोष में हैश होकर रहता है। मोबाइल पर पासवर्ड अभी, या कभी भी खाते में।"
				},
				{
					q: "कोड संदेश में आएगा?",
					a: "नहीं। छह अंक इसी स्क्रीन पर एक बार दिखते हैं। कोई वाहक संदेश नहीं भेजा जाता।"
				},
				{
					q: "किसी भी देश का नंबर?",
					a: "सूची में देश और उसका कोड है। अंक उतने ही जितने उस देश के राष्ट्रीय नंबर में होते हैं। शुरुआत का 0 नहीं।"
				},
				{
					q: "केवल जीमेल?",
					a: "नहीं। एक @, साफ डोमेन, और दो अक्षर का अंत। जीमेल केवल एक ज्ञात उदाहरण है, शर्त नहीं।"
				},
				{
					q: "मैं प्रशासन कैसे बनूँ?",
					a: "साइन-अप से नहीं। प्रशासन डेस्क की अलग भूमिका है।"
				},
				{
					q: "पट्टी रुकती क्यों है?",
					a: "कर्सर या उंगली पट्टी पर हो तो कतार रुकती है। हटते ही फिर चलती है।"
				},
				{
					q: "योजना अपने आप व्यापार करेगी?",
					a: "नहीं। नियम मेज़ याद रखती है। सौदा आप डेस्क पर देते हैं।"
				},
				{
					q: "शुल्क कहाँ है?",
					a: "इस पृष्ठ पर चेकआउट नहीं। खरीदार और विक्रेता शुल्क प्रशासन डेस्क पर रखता है।"
				}
			]
		},
		contact: {
			title: "संपर्क",
			lede: "डीएलएम कैश लैब्स प्राइवेट लिमिटेड। यह फ़ॉर्म संदेश को मेलबॉक्स में नहीं भेजता — भेजने पर वह यहीं दर्ज दिखता है।",
			name: "नाम",
			email: "ईमेल",
			topic: "विषय",
			topics: [
				"डेस्क",
				"व्यापारी अनुज्ञप्ति",
				"लेख",
				"अन्य"
			],
			message: "संदेश",
			send: "दर्ज करें",
			sent: "दर्ज हो गया। कोई मेल नहीं गया।",
			invalid: "नाम, सही ईमेल, और संदेश चाहिए।"
		},
		legal: {
			title: "शर्तें",
			body: [
				"ओर्विया डीएलएम कैश लैब्स प्राइवेट लिमिटेड का डेस्क है। इस पृष्ठ पर कोई लाइसेंस संख्या नहीं लिखी गई है।",
				"ईमेल खाता पासवर्ड के साथ हैश होता है। Google और X उसी प्रवेश द्वार से आते हैं जो इस ऐप में जुड़ा है। मोबाइल कोड केवल स्क्रीन पर है।",
				"पहचान पर अंतिम चार अंक। पूरा कागज़ संग्रह नहीं होता। श्रृंखला पर प्रसारण इस डेस्क से नहीं होता।",
				"नियम मेज़ की योजना आपके ब्राउज़र में रहती है और अपने आप आदेश नहीं भेजती।"
			]
		},
		enter: {
			title: "प्रवेश",
			lede: "Google या X बिना पासवर्ड। ईमेल सीधे। मोबाइल किसी भी सूचीबद्ध देश से — पहले कोड, पासवर्ड वैकल्पिक।",
			google: "Google से जारी रखें",
			x: "X से जारी रखें",
			email: "ईमेल",
			mobile: "मोबाइल",
			signIn: "प्रवेश",
			signUp: "नया खाता",
			emailLabel: "ईमेल",
			password: "पासवर्ड",
			again: "पासवर्ड फिर",
			submitIn: "ईमेल से प्रवेश",
			submitUp: "खाता बनाएँ",
			working: "रुकिए…",
			fail: "प्रवेश पूरा नहीं हुआ।",
			mismatch: "दोनों पासवर्ड एक जैसे नहीं।",
			later: "पासवर्ड बाद में?",
			laterBody: "बिना पासवर्ड के Google, X, या मोबाइल चुनिए। ईमेल कोष पासवर्ड माँगता है। मोबाइल पर पासवर्ड छोड़ सकते हैं और खाते में कभी भी बना सकते हैं।",
			codeShow: "कोड दिखाएँ",
			codeHint: "यह कोड केवल इसी स्क्रीन पर है। कोई संदेश नहीं भेजा गया। पाँच मिनट।",
			codeLabel: "छह अंक",
			confirm: "कोड मिलाएँ",
			skip: "अभी नहीं — डेस्क खोलें",
			makeNow: "पासवर्ड अभी सहेजें",
			made: "पासवर्ड सहेज लिया गया।",
			passWay: "पासवर्ड से प्रवेश",
			passIn: "पासवर्ड जाँचें",
			noPass: "इस नंबर पर पासवर्ड नहीं है। कोड से प्रवेश कीजिए।",
			locked: "पाँच बार गलत। समय समाप्त होने पर फिर माँगिए।",
			expired: "कोड समाप्त। नया माँगिए।",
			wrong: "कोड नहीं मिला।",
			missing: "पहले कोड दिखाइए।",
			country: "देश",
			national: "राष्ट्रीय नंबर",
			inside: "आप अंदर हैं।",
			toDesk: "डेस्क पर जाएँ",
			checks: {
				at: "एक @ और दोनों ओर पाठ",
				space: "खाली स्थान नहीं",
				dots: "लगातार या किनारे पर बिंदु नहीं",
				domain: "डोमेन और कम से कम दो अक्षर का अंत",
				known: "ज्ञात प्रदाता — शर्त नहीं, केवल पहचान",
				custom: "डोमेन मान्य है। जीमेल ज़रूरी नहीं।",
				digits: "केवल अंक",
				trunk: "शुरुआती 0 हटाएँ",
				len: "अंक इस देश की लंबाई के बराबर",
				plen: "कम से कम दस अक्षर",
				letter: "एक अक्षर",
				pdigit: "एक अंक"
			}
		},
		account: {
			title: "आपका खाता",
			guest: "अतिथि",
			member: "सदस्य",
			phone: "मोबाइल",
			email: "ईमेल",
			none: "अभी कोई प्रवेश नहीं।",
			set: "पासवर्ड बनाएँ",
			change: "ईमेल पासवर्ड बदलें",
			current: "वर्तमान पासवर्ड",
			next: "नया पासवर्ड",
			save: "सहेजें",
			saved: "सहेज लिया।",
			bad: "पासवर्ड नहीं बदला। वर्तमान जाँचिए।",
			leave: "मोबाइल निकास",
			deskRole: "डेस्क भूमिका अलग है — ऊपर वाली सीट। प्रशासन साइन-अप से नहीं बनता।"
		}
	},
	en: {
		company: "DLM CASH LABS PRIVATE LIMITED",
		nav: {
			home: "Home",
			product: "Product",
			services: "Services",
			pricing: "Plans",
			security: "Security",
			about: "About",
			journal: "Journal",
			faq: "FAQ",
			contact: "Contact",
			legal: "Terms",
			enter: "Enter",
			desk: "Open desk",
			phoneOut: "Leave mobile",
			more: "More"
		},
		liveNote: "A green mark means the dollar rate is live. The cursor or a finger pauses the queue.",
		home: {
			kicker: "ORVIA",
			title: "Five tools, one desk.",
			lede: "Rules, grid and average, a smart window, a live dollar tape, and a risk halt — the work of bot companies, written as one original desk. The peer book, licenses, and wallet sit here.",
			open: "Open desk",
			enter: "Enter",
			pillarsTitle: "Five in one",
			pillars: [
				{
					t: "Rule table",
					d: "Name a condition: coin, side, limit. The plan stays in this browser. You place the trade on the desk."
				},
				{
					t: "Grid and average",
					d: "A sketch of steps inside a band, and of adding as price falls. Execution is the ad and the express window."
				},
				{
					t: "Smart window",
					d: "Express, a pay clock, and the merchant release. When the clock ends, the deal stops."
				},
				{
					t: "Live tape",
					d: "Dollar rates from the public market. Green means live. The queue runs without boxes."
				},
				{
					t: "Risk halt",
					d: "Completion, limits, passes, and an admin halt. Past a limit, the desk does not continue."
				}
			],
			rolesTitle: "Roles",
			roles: [
				{
					t: "Guest",
					d: "Read the home, the journal, and the book."
				},
				{
					t: "Member",
					d: "An account after email, Google, X, or a mobile code. A mobile password is optional."
				},
				{
					t: "Merchant",
					d: "A license after identity. The merchant grants the buyer pass."
				},
				{
					t: "Admin",
					d: "Not self-serve. Fees and transfers use the desk admin role."
				}
			],
			journalTitle: "Journal",
			read: "Read"
		},
		product: {
			title: "Product",
			lede: "ORVIA is the desk of DLM CASH LABS. Five bot traditions — rules, grid, average, smart orders, and risk — are one sequence, not five logos.",
			points: [
				{
					t: "Peer book",
					d: "Buy and sell ads, payment rails, and the state of a deal."
				},
				{
					t: "Express",
					d: "Pick an ad from an amount without walking the whole list."
				},
				{
					t: "License",
					d: "A merchant license follows identity. The first buy asks for a pass."
				},
				{
					t: "Wallet",
					d: "Balances, reserves, and transfers released by admin."
				},
				{
					t: "Tape",
					d: "Live dollar quotes. An INR ad keeps its own price — the tape does not overwrite it."
				}
			]
		},
		services: {
			title: "Services",
			lede: "What other bot sites split into products is five services here. No copied sentences. A button opens the desk.",
			items: [
				{
					t: "Rule table",
					d: "Instead of a hidden if-then bot: a named plan with coin, side, maximum, and a note."
				},
				{
					t: "Grid and average",
					d: "Several levels in one direction, and an average price, described in the journal. The order is yours on the desk."
				},
				{
					t: "Smart window",
					d: "Express, and a pay clock in minutes. The merchant releases. The buyer marks paid."
				},
				{
					t: "Multi-market tape",
					d: "Ten live dollar pairs from a public stream. Other coins are the desk’s own, without the green mark."
				},
				{
					t: "Risk halt",
					d: "Minimum completion, identity, a revoked pass, and an admin close."
				}
			],
			padTitle: "Write a rule",
			padNote: "The plan stays in this browser. It does not trade by itself.",
			name: "Name",
			coin: "Coin",
			side: "Side",
			buy: "Buy",
			sell: "Sell",
			max: "Maximum amount",
			note: "Note",
			save: "Save plan",
			saved: "Saved plans",
			empty: "No plan yet.",
			remove: "Remove",
			toPost: "Post an ad on the desk"
		},
		pricing: {
			title: "Plans",
			lede: "There is no checkout on this page. Admin sets fees on the desk. Roles split capability, not a price list.",
			heads: [
				"Capability",
				"Guest",
				"Member",
				"Merchant"
			],
			rows: [
				{
					name: "Home and journal",
					cells: [
						"Yes",
						"Yes",
						"Yes"
					]
				},
				{
					name: "Read the book",
					cells: [
						"Yes",
						"Yes",
						"Yes"
					]
				},
				{
					name: "Ads and wallet",
					cells: [
						"Desk role",
						"Desk role",
						"Yes"
					]
				},
				{
					name: "License and passes",
					cells: [
						"No",
						"No",
						"Yes"
					]
				},
				{
					name: "Admin fees",
					cells: [
						"No",
						"No",
						"No"
					]
				}
			],
			note: "Admin is not a plan you buy. A member joins with Google, X, email, or a mobile code."
		},
		security: {
			title: "Security",
			lede: "Passwords are not stored in the clear. The mobile code is not a message. Full identity papers are not collected here.",
			points: [
				{
					t: "Email account",
					d: "Email and password are hashed in this desk’s account store. Google and X are separate doors — they need no password."
				},
				{
					t: "Mobile",
					d: "A country code, and as many digits as that country uses. The six digits appear once on this screen, for five minutes, five tries. Set a password now or later in the account."
				},
				{
					t: "Optional password",
					d: "Mobile entry is the code. A password is your choice, including later on the account page. That too is a one-way hash."
				},
				{
					t: "Identity",
					d: "A merchant license keeps the last four digits and an attached mark. The full document is not stored."
				},
				{
					t: "Admin",
					d: "Sign-up does not create an admin."
				}
			]
		},
		about: {
			title: "About",
			lede: "ORVIA is the desk of DLM CASH LABS PRIVATE LIMITED. The company keeps the peer book, merchant licenses, and the live tape in one place.",
			points: [
				"The menus of five bot traditions — rules, grid, average, smart orders, risk — are written as one original sequence.",
				"Live rates come from a public dollar stream. An INR ad keeps its own price.",
				"No license number is invented on this site. The company name is the mark."
			]
		},
		journal: {
			title: "Journal",
			lede: "Five jobs of the desk, in short essays.",
			missing: "That essay is not here.",
			back: "All essays"
		},
		posts: [
			{
				slug: "niyam-mez",
				title: "What the rule table does",
				dek: "Writing a condition and placing a trade are not the same button.",
				body: ["Bot sites often sell “if this, then that.” On ORVIA the rule table saves a name, a coin, a side, and a maximum.", "The plan does not send an order by itself. When you are ready, you trade from an ad or the express window. It can remind you of a limit. It does not trade in secret."]
			},
			{
				slug: "jaal-ausat",
				title: "Grid and average",
				dek: "A sketch of levels and of an average price, without a pretend bot running.",
				body: ["A grid cuts one band into steps. Averaging is the idea of adding as price falls. Both are sketches, not a magic trade.", "On the desk the price is the ad’s price. The dollar tape does not replace it. Keep the arithmetic on the rule table. Execute on the book."]
			},
			{
				slug: "jeevit-patti",
				title: "The live tape and the rupee book",
				dek: "A green mark means a live dollar rate.",
				body: ["The tape runs as a queue. A cursor or a finger pauses it. There is no box wall.", "Green is only on coins whose rate comes from the public stream. The others keep a gray mark. A rupee ad keeps its own price."]
			},
			{
				slug: "vyapari-anugyapti",
				title: "Merchant license and passes",
				dek: "Identity, a license, and the buyer’s pass.",
				body: ["A sell ad needs a merchant license. The license follows identity. What is kept is the last four digits.", "The first buy from a merchant asks for a pass with that merchant. The pass is their four digits plus four random digits. They can revoke it, and they can grant it again."]
			},
			{
				slug: "jokhim-viram",
				title: "Risk and the halt",
				dek: "Limits, completion, and a closed desk.",
				body: ["An ad can require a minimum completion and identity. When the pay clock ends, an open deal stops.", "Admin can close the desk. While it is closed, the book does not take a new deal. That halt is not for sale — the role is already appointed on the desk."]
			}
		],
		faq: {
			title: "Questions",
			items: [
				{
					q: "Is a password required at sign-up?",
					a: "Not if you use Google, X, or a mobile code. An email account needs a password then, because the store hashes it. On mobile, set one now or anytime in the account."
				},
				{
					q: "Does the code arrive as a message?",
					a: "No. The six digits appear once on this screen. No carrier message is sent."
				},
				{
					q: "A number from any country?",
					a: "The list shows the country and its code. The count matches that country’s national number. Drop the leading 0."
				},
				{
					q: "Gmail only?",
					a: "No. One @, a clean domain, and an ending of at least two letters. Gmail is a known example, not a rule."
				},
				{
					q: "How do I become admin?",
					a: "Not from sign-up. Admin is a separate desk role."
				},
				{
					q: "Why does the tape stop?",
					a: "A cursor or finger on the tape pauses the queue. It runs again when you leave."
				},
				{
					q: "Will a plan trade by itself?",
					a: "No. The rule table remembers. You place the deal on the desk."
				},
				{
					q: "Where are the fees?",
					a: "No checkout on this page. Admin sets buyer and seller fees on the desk."
				}
			]
		},
		contact: {
			title: "Contact",
			lede: "DLM CASH LABS PRIVATE LIMITED. This form does not send mail. After you submit, the note stays on this page.",
			name: "Name",
			email: "Email",
			topic: "Topic",
			topics: [
				"Desk",
				"Merchant license",
				"Journal",
				"Other"
			],
			message: "Message",
			send: "Record",
			sent: "Recorded. No mail was sent.",
			invalid: "A name, a valid email, and a message are required."
		},
		legal: {
			title: "Terms",
			body: [
				"ORVIA is the desk of DLM CASH LABS PRIVATE LIMITED. This page does not print a license number.",
				"An email account is stored as a hash with its password. Google and X use the sign-in already wired into this app. The mobile code exists only on the screen.",
				"Identity keeps the last four digits. Full papers are not collected. This desk does not broadcast to a chain.",
				"A rule-table plan stays in your browser and does not send orders by itself."
			]
		},
		enter: {
			title: "Enter",
			lede: "Google or X with no password. Email directly. Mobile from any listed country — code first, password optional.",
			google: "Continue with Google",
			x: "Continue with X",
			email: "Email",
			mobile: "Mobile",
			signIn: "Enter",
			signUp: "New account",
			emailLabel: "Email",
			password: "Password",
			again: "Password again",
			submitIn: "Enter with email",
			submitUp: "Create account",
			working: "Please wait…",
			fail: "Sign-in did not finish.",
			mismatch: "The two passwords do not match.",
			later: "Password later?",
			laterBody: "Without a password, choose Google, X, or mobile. The email store requires a password. On mobile you can skip it and create one anytime in the account.",
			codeShow: "Show code",
			codeHint: "This code is only on this screen. No message was sent. Five minutes.",
			codeLabel: "Six digits",
			confirm: "Match code",
			skip: "Not now — open the desk",
			makeNow: "Save password now",
			made: "Password saved.",
			passWay: "Enter with password",
			passIn: "Check password",
			noPass: "This number has no password. Use the code.",
			locked: "Five misses. Ask again after the clock ends.",
			expired: "The code ended. Ask for a new one.",
			wrong: "The code did not match.",
			missing: "Show a code first.",
			country: "Country",
			national: "National number",
			inside: "You are in.",
			toDesk: "Go to the desk",
			checks: {
				at: "One @ with text on both sides",
				space: "No spaces",
				dots: "No doubled or edge dots",
				domain: "A domain and an ending of at least two letters",
				known: "A known provider — a hint, not a rule",
				custom: "The domain is valid. Gmail is not required.",
				digits: "Digits only",
				trunk: "Drop the leading 0",
				len: "Length matches this country",
				plen: "At least ten characters",
				letter: "One letter",
				pdigit: "One digit"
			}
		},
		account: {
			title: "Your account",
			guest: "Guest",
			member: "Member",
			phone: "Mobile",
			email: "Email",
			none: "No sign-in yet.",
			set: "Create a password",
			change: "Change email password",
			current: "Current password",
			next: "New password",
			save: "Save",
			saved: "Saved.",
			bad: "The password did not change. Check the current one.",
			leave: "Leave mobile",
			deskRole: "The desk role is separate — the seat above. Sign-up does not make you admin."
		}
	},
	ur: {
		company: "DLM CASH LABS PRIVATE LIMITED",
		nav: {
			home: "گھر",
			product: "مصنوع",
			services: "خدمات",
			pricing: "منصوبے",
			security: "حفاظت",
			about: "تعارف",
			journal: "مضامین",
			faq: "سوال",
			contact: "رابطہ",
			legal: "شرائط",
			enter: "داخلہ",
			desk: "ڈیسک کھولیں",
			phoneOut: "موبائل خروج",
			more: "مزید"
		},
		liveNote: "ہری نقطہ کا مطلب زندہ ڈالر ریٹ ہے۔ کرسر یا انگلی قطار روکتی ہے۔",
		home: {
			kicker: "اورویا",
			title: "پانچ اوزار، ایک ڈیسک۔",
			lede: "اصول، جال اور اوسط، سمارٹ کھڑکی، زندہ ڈالر پٹی، اور خطرے کا وقفہ — بوٹ کمپنیوں کا کام ایک اصل میز پر۔ ہمسر سودا، اجازت نامہ اور بٹوا یہیں ہیں۔",
			open: "ڈیسک کھولیں",
			enter: "داخلہ",
			pillarsTitle: "پانچ ایک میں",
			pillars: [
				{
					t: "اصول میز",
					d: "شرط لکھیں — سکہ، سمت، حد۔ منصوبہ اسی براؤزر میں رہتا ہے۔ سودا آپ ڈیسک پر دیتے ہیں۔"
				},
				{
					t: "جال اور اوسط",
					d: "ایک حد کے اندر کئی قدم اور اوسط داخلے کا خاکہ۔ عمل اشتہار اور فوری کھڑکی سے ہوتا ہے۔"
				},
				{
					t: "سمارٹ کھڑکی",
					d: "فوری سودا، ادائیگی کی گھڑی، اور تاجر کا چھوڑنا۔ گھڑی کٹتے ہی سودا رک جاتا ہے۔"
				},
				{
					t: "زندہ پٹی",
					d: "ڈالر ریٹ عوامی بازار سے۔ ہری نقطہ زندہ ہے۔ پٹی ڈبوں میں نہیں، قطار میں چلتی ہے۔"
				},
				{
					t: "خطرے کا وقفہ",
					d: "تکمیل، حد، اجازت نامہ، اور انتظام کا وقفہ۔ حد ٹوٹے تو ڈیسک آگے نہیں بڑھتا۔"
				}
			],
			rolesTitle: "کردار",
			roles: [
				{
					t: "مہمان",
					d: "گھر، مضامین اور کتاب پڑھ سکتے ہیں۔"
				},
				{
					t: "رکن",
					d: "ای میل، Google، X، یا موبائل کوڈ کے بعد کھاتہ۔ موبائل پر پاس ورڈ اختیاری ہے۔"
				},
				{
					t: "تاجر",
					d: "شناخت کے بعد اجازت نامہ۔ خریدار کا پاس تاجر دیتا ہے۔"
				},
				{
					t: "انتظام",
					d: "خود نہیں کھلتا۔ محصول اور منتقلی ڈیسک کے انتظامی کردار سے۔"
				}
			],
			journalTitle: "مضامین",
			read: "پڑھیں"
		},
		product: {
			title: "مصنوع",
			lede: "اورویا ڈی ایل ایم کیش لیبز کا ڈیسک ہے۔ پانچ بوٹ روایتیں — اصول، جال، اوسط، سمارٹ حکم، خطرہ — ایک ترتیب ہیں، پانچ نشانات نہیں۔",
			points: [
				{
					t: "ہمسر کتاب",
					d: "خرید و فروخت کے اشتہار، ادائیگی، اور سودے کی حالت۔"
				},
				{
					t: "فوری",
					d: "رقم سے اشتہار چننا، پوری فہرست کے بغیر۔"
				},
				{
					t: "اجازت نامہ",
					d: "تاجر کی شناخت کے بعد لائسنس۔ پہلی خرید پاس مانگتی ہے۔"
				},
				{
					t: "بٹوا",
					d: "بقایا، محفوظ رقم، اور انتظام سے منتقلی۔"
				},
				{
					t: "پٹی",
					d: "زندہ ڈالر بھاؤ۔ روپیہ اشتہار اپنا دام رکھتا ہے — پٹی اسے نہیں مٹاتی۔"
				}
			]
		},
		services: {
			title: "خدمات",
			lede: "جو کام الگ بوٹ سائٹیں بانٹ کر بیچتی ہیں، وہ یہاں پانچ خدمات میں ہے۔ کوئی نقل شدہ جملہ نہیں۔ بٹن ڈیسک کھولتا ہے۔",
			items: [
				{
					t: "اصول میز",
					d: "اگر-تو کی جگہ ایک نام والا منصوبہ: سکہ، خرید یا فروخت، زیادہ سے زیادہ رقم، نوٹ۔"
				},
				{
					t: "جال اور اوسط",
					d: "ایک سمت میں کئی درجے اور اوسط دام کا خاکہ مضمون میں ہے۔ حکم ڈیسک پر آپ خود دیتے ہیں۔"
				},
				{
					t: "سمارٹ کھڑکی",
					d: "فوری راستہ اور ادائیگی کی منٹ گھڑی۔ تاجر چھوڑتا ہے، خریدار ادائیگی نشان زد کرتا ہے۔"
				},
				{
					t: "کئی بازار کی پٹی",
					d: "دس زندہ ڈالر جوڑے عوامی دھار سے۔ باقی سکے ڈیسک کے اپنے ہیں، بغیر ہری نقطہ۔"
				},
				{
					t: "خطرے کا وقفہ",
					d: "کم سے کم تکمیل، شناخت، پاس منسوخ، اور انتظام سے ڈیسک بند۔"
				}
			],
			padTitle: "اصول لکھیں",
			padNote: "یہ منصوبہ اسی براؤزر میں رہتا ہے۔ یہ خود سودا نہیں کرتا۔",
			name: "نام",
			coin: "سکہ",
			side: "سمت",
			buy: "خرید",
			sell: "فروخت",
			max: "زیادہ سے زیادہ رقم",
			note: "نوٹ",
			save: "منصوبہ محفوظ کریں",
			saved: "محفوظ منصوبے",
			empty: "ابھی کوئی منصوبہ نہیں۔",
			remove: "ہٹائیں",
			toPost: "ڈیسک پر اشتہار دیں"
		},
		pricing: {
			title: "منصوبے",
			lede: "اس صفحے پر چیک آؤٹ نہیں۔ محصول انتظام ڈیسک پر طے کرتا ہے۔ کردار صلاحیت بانٹتے ہیں، دام کی فہرست نہیں۔",
			heads: [
				"صلاحیت",
				"مہمان",
				"رکن",
				"تاجر"
			],
			rows: [
				{
					name: "گھر اور مضامین",
					cells: [
						"ہاں",
						"ہاں",
						"ہاں"
					]
				},
				{
					name: "کتاب دیکھنا",
					cells: [
						"ہاں",
						"ہاں",
						"ہاں"
					]
				},
				{
					name: "اشتہار اور بٹوا",
					cells: [
						"ڈیسک کردار",
						"ڈیسک کردار",
						"ہاں"
					]
				},
				{
					name: "اجازت اور پاس",
					cells: [
						"نہیں",
						"نہیں",
						"ہاں"
					]
				},
				{
					name: "انتظامی محصول",
					cells: [
						"نہیں",
						"نہیں",
						"نہیں"
					]
				}
			],
			note: "انتظام کوئی خریدی جانے والی اسکیم نہیں۔ رکنیت Google، X، ای میل یا موبائل کوڈ سے بنتی ہے۔"
		},
		security: {
			title: "حفاظت",
			lede: "پاس ورڈ کھلا نہیں رکھا جاتا۔ موبائل کوڈ پیغام نہیں۔ شناخت کے پورے کاغذات یہاں نہیں مانگے جاتے۔",
			points: [
				{
					t: "ای میل کھاتہ",
					d: "ای میل اور پاس ورڈ اسی ڈیسک کے خزانے میں ہیش ہو کر رہتے ہیں۔ Google اور X الگ داخلے ہیں — ان کے لیے پاس ورڈ نہیں۔"
				},
				{
					t: "موبائل",
					d: "ملک کا کوڈ اور اتنے ہندسے جتنے اس ملک میں ہوتے ہیں۔ چھ ہندسے صرف اسی سکرین پر، پانچ منٹ، پانچ کوشش۔ پاس ورڈ اب یا بعد میں کھاتے میں۔"
				},
				{
					t: "اختیاری پاس ورڈ",
					d: "موبائل داخلہ کوڈ سے پورا ہوتا ہے۔ پاس ورڈ آپ کی مرضی ہے۔ بعد میں کھاتے کے صفحے پر بھی بن سکتا ہے۔ وہ بھی یک طرفہ ہیش ہے۔"
				},
				{
					t: "شناخت",
					d: "تاجر لائسنس کے لیے آخری چار ہندسے اور منسلک نشان۔ پورا دستاویز یہاں جمع نہیں ہوتا۔"
				},
				{
					t: "انتظام",
					d: "سائن اپ سے انتظام نہیں بنتا۔"
				}
			]
		},
		about: {
			title: "تعارف",
			lede: "اورویا ڈی ایل ایم کیش لیبز پرائیویٹ لمیٹڈ کا ڈیسک ہے۔ کمپنی ہمسر سودا، تاجر اجازت نامہ، اور بازار کی زندہ پٹی ایک جگہ رکھتی ہے۔",
			points: [
				"پانچ بوٹ روایتوں کے مینو — اصول، جال، اوسط، سمارٹ حکم، خطرہ — ایک اصل ترتیب میں لکھے گئے ہیں۔",
				"زندہ ریٹ عوامی ڈالر دھار سے آتا ہے۔ روپیہ اشتہار اپنا دام الگ رکھتا ہے۔",
				"کوئی بناوٹی لائسنس نمبر یہاں نہیں لکھا گیا۔ کمپنی کا نام ہی شناخت ہے۔"
			]
		},
		journal: {
			title: "مضامین",
			lede: "ڈیسک کے پانچ کام، مختصر مضامین میں۔",
			missing: "یہ مضمون نہیں ملا۔",
			back: "تمام مضامین"
		},
		posts: [
			{
				slug: "niyam-mez",
				title: "اصول میز کیا کرتی ہے",
				dek: "شرط لکھنا اور سودا کرنا ایک بٹن نہیں۔",
				body: ["بوٹ سائٹیں اکثر ‘اگر یہ ہو تو وہ کرو’ بیچتی ہیں۔ اورویا پر اصول میز ایک نام، سکہ، سمت اور زیادہ سے زیادہ رقم محفوظ کرتی ہے۔", "منصوبہ خود آرڈر نہیں بھیجتا۔ جب آپ تیار ہوں، اشتہار یا فوری کھڑکی سے سودا خود دیجیے۔ حد پار ہو تو منصوبہ یاد دلاتا ہے، چھپ کر تجارت نہیں کرتا۔"]
			},
			{
				slug: "jaal-ausat",
				title: "جال اور اوسط",
				dek: "کئی درجے اور اوسط دام کا خاکہ، بغیر بناوٹی بوٹ چلائے۔",
				body: ["جال ایک حد کو ٹکڑوں میں بانٹتا ہے۔ اوسط داخلہ گرتے دام پر مقدار بڑھانے کا خیال ہے۔ دونوں خاکے ہیں، جادو کی ٹریڈ نہیں۔", "ڈیسک پر دام اشتہار کا ہے۔ ڈالر پٹی اس دام کو نہیں بدلتی۔ حساب اصول میز پر رکھیں، عمل کتاب پر۔"]
			},
			{
				slug: "jeevit-patti",
				title: "زندہ پٹی اور روپیہ کتاب",
				dek: "ہری نقطہ کا مطلب زندہ ڈالر ریٹ ہے۔",
				body: ["پٹی قطار میں چلتی ہے۔ رکنے کے لیے کرسر یا انگلی کافی ہے۔ ڈبے کی دیوار نہیں۔", "ہری نقطہ صرف ان سکوں پر ہے جن کی ریٹ عوامی دھار سے آ رہی ہے۔ باقی سکے سرمئی نقطہ رکھتے ہیں۔ روپیہ اشتہار اپنا دام الگ رکھتا ہے۔"]
			},
			{
				slug: "vyapari-anugyapti",
				title: "تاجر اجازت نامہ اور پاس",
				dek: "شناخت، لائسنس، اور خریدار کا پاس۔",
				body: ["فروخت کا اشتہار تاجر لائسنس مانگتا ہے۔ لائسنس شناخت کے بعد آتا ہے۔ رکھے جاتے ہیں آخری چار ہندسے۔", "کسی تاجر سے پہلی خرید پر اسی کا پاس مانگا جاتا ہے۔ پاس اس کے چار ہندسوں اور چار بے ترتیب ہندسوں سے بنتا ہے۔ وہ منسوخ کر سکتا ہے، اور دوبارہ دے بھی سکتا ہے۔"]
			},
			{
				slug: "jokhim-viram",
				title: "خطرہ اور وقفہ",
				dek: "حد، تکمیل، اور بند ڈیسک۔",
				body: ["اشتہار کم سے کم تکمیل اور شناخت مانگ سکتا ہے۔ ادائیگی کی گھڑی کٹتے ہی کھلا سودا رک جاتا ہے۔", "انتظام ڈیسک بند کر سکتا ہے۔ بند ہونے پر نئی کتاب نہیں چلتی۔ یہ وقفہ خریدا نہیں جاتا — وہ کردار ڈیسک پر پہلے سے مقرر ہے۔"]
			}
		],
		faq: {
			title: "سوال",
			items: [
				{
					q: "کیا پاس ورڈ سائن اپ پر لازمی ہے؟",
					a: "نہیں، اگر آپ Google، X، یا موبائل کوڈ سے آئیں۔ ای میل کھاتے میں پاس ورڈ اسی وقت چاہیے، کیونکہ وہ خزانے میں ہیش ہوتا ہے۔ موبائل پر اب، یا کبھی بھی کھاتے میں۔"
				},
				{
					q: "کیا کوڈ پیغام میں آئے گا؟",
					a: "نہیں۔ چھ ہندسے اسی سکرین پر ایک بار دکھتے ہیں۔ کوئی کیریئر پیغام نہیں بھیجا جاتا۔"
				},
				{
					q: "کسی بھی ملک کا نمبر؟",
					a: "فہرست میں ملک اور اس کا کوڈ ہے۔ ہندسے اتنے ہی جتنے اس ملک کے قومی نمبر میں ہوتے ہیں۔ شروع کا 0 نہیں۔"
				},
				{
					q: "صرف جی میل؟",
					a: "نہیں۔ ایک @، صاف ڈومین، اور دو حروف کا اختتام۔ جی میل صرف ایک جانی پہچانی مثال ہے، شرط نہیں۔"
				},
				{
					q: "میں انتظام کیسے بنوں؟",
					a: "سائن اپ سے نہیں۔ انتظام ڈیسک کا الگ کردار ہے۔"
				},
				{
					q: "پٹی رکتی کیوں ہے؟",
					a: "کرسر یا انگلی پٹی پر ہو تو قطار رکتی ہے۔ ہٹتے ہی پھر چلتی ہے۔"
				},
				{
					q: "کیا منصوبہ خود تجارت کرے گا؟",
					a: "نہیں۔ اصول میز یاد رکھتی ہے۔ سودا آپ ڈیسک پر دیتے ہیں۔"
				},
				{
					q: "محصول کہاں ہے؟",
					a: "اس صفحے پر چیک آؤٹ نہیں۔ خریدار اور فروخت کنندہ کا محصول انتظام ڈیسک پر رکھتا ہے۔"
				}
			]
		},
		contact: {
			title: "رابطہ",
			lede: "ڈی ایل ایم کیش لیبز پرائیویٹ لمیٹڈ۔ یہ فارم پیغام میل باکس میں نہیں بھیجتا — بھیجنے پر وہ یہیں درج دکھتا ہے۔",
			name: "نام",
			email: "ای میل",
			topic: "موضوع",
			topics: [
				"ڈیسک",
				"تاجر اجازت",
				"مضمون",
				"دیگر"
			],
			message: "پیغام",
			send: "درج کریں",
			sent: "درج ہو گیا۔ کوئی میل نہیں گئی۔",
			invalid: "نام، درست ای میل، اور پیغام چاہیے۔"
		},
		legal: {
			title: "شرائط",
			body: [
				"اورویا ڈی ایل ایم کیش لیبز پرائیویٹ لمیٹڈ کا ڈیسک ہے۔ اس صفحے پر کوئی لائسنس نمبر نہیں لکھا گیا۔",
				"ای میل کھاتہ پاس ورڈ کے ساتھ ہیش ہوتا ہے۔ Google اور X اسی داخلے سے آتے ہیں جو اس ایپ میں جڑا ہے۔ موبائل کوڈ صرف سکرین پر ہے۔",
				"شناخت پر آخری چار ہندسے۔ پورا کاغذ جمع نہیں ہوتا۔ زنجیر پر نشر اس ڈیسک سے نہیں ہوتا۔",
				"اصول میز کا منصوبہ آپ کے براؤزر میں رہتا ہے اور خود حکم نہیں بھیجتا۔"
			]
		},
		enter: {
			title: "داخلہ",
			lede: "Google یا X بغیر پاس ورڈ۔ ای میل براہ راست۔ موبائل کسی بھی درج ملک سے — پہلے کوڈ، پاس ورڈ اختیاری۔",
			google: "Google سے جاری رکھیں",
			x: "X سے جاری رکھیں",
			email: "ای میل",
			mobile: "موبائل",
			signIn: "داخلہ",
			signUp: "نیا کھاتہ",
			emailLabel: "ای میل",
			password: "پاس ورڈ",
			again: "پاس ورڈ پھر",
			submitIn: "ای میل سے داخلہ",
			submitUp: "کھاتہ بنائیں",
			working: "رکیے…",
			fail: "داخلہ مکمل نہیں ہوا۔",
			mismatch: "دونوں پاس ورڈ ایک جیسے نہیں۔",
			later: "پاس ورڈ بعد میں؟",
			laterBody: "بغیر پاس ورڈ Google، X، یا موبائل چنیں۔ ای میل خزانہ پاس ورڈ مانگتا ہے۔ موبائل پر پاس ورڈ چھوڑ سکتے ہیں اور کھاتے میں کبھی بھی بنا سکتے ہیں۔",
			codeShow: "کوڈ دکھائیں",
			codeHint: "یہ کوڈ صرف اسی سکرین پر ہے۔ کوئی پیغام نہیں بھیجا گیا۔ پانچ منٹ۔",
			codeLabel: "چھ ہندسے",
			confirm: "کوڈ ملائیں",
			skip: "ابھی نہیں — ڈیسک کھولیں",
			makeNow: "پاس ورڈ اب محفوظ کریں",
			made: "پاس ورڈ محفوظ ہو گیا۔",
			passWay: "پاس ورڈ سے داخلہ",
			passIn: "پاس ورڈ جانچیں",
			noPass: "اس نمبر پر پاس ورڈ نہیں۔ کوڈ سے داخل ہوں۔",
			locked: "پانچ بار غلط۔ وقت ختم ہونے پر پھر مانگیں۔",
			expired: "کوڈ ختم۔ نیا مانگیں۔",
			wrong: "کوڈ نہیں ملا۔",
			missing: "پہلے کوڈ دکھائیں۔",
			country: "ملک",
			national: "قومی نمبر",
			inside: "آپ اندر ہیں۔",
			toDesk: "ڈیسک پر جائیں",
			checks: {
				at: "ایک @ اور دونوں طرف متن",
				space: "خالی جگہ نہیں",
				dots: "لگاتار یا کنارے پر نقطہ نہیں",
				domain: "ڈومین اور کم از کم دو حروف کا اختتام",
				known: "جانا پہچانا فراہم کنندہ — شرط نہیں، صرف پہچان",
				custom: "ڈومین درست ہے۔ جی میل ضروری نہیں۔",
				digits: "صرف ہندسے",
				trunk: "شروعاتی 0 ہٹائیں",
				len: "ہندسے اس ملک کی لمبائی کے برابر",
				plen: "کم از کم دس حروف",
				letter: "ایک حرف",
				pdigit: "ایک ہندسہ"
			}
		},
		account: {
			title: "آپ کا کھاتہ",
			guest: "مہمان",
			member: "رکن",
			phone: "موبائل",
			email: "ای میل",
			none: "ابھی کوئی داخلہ نہیں۔",
			set: "پاس ورڈ بنائیں",
			change: "ای میل پاس ورڈ بدلیں",
			current: "موجودہ پاس ورڈ",
			next: "نیا پاس ورڈ",
			save: "محفوظ کریں",
			saved: "محفوظ ہو گیا۔",
			bad: "پاس ورڈ نہیں بدلا۔ موجودہ جانچیں۔",
			leave: "موبائل خروج",
			deskRole: "ڈیسک کا کردار الگ ہے — اوپر والی نشست۔ سائن اپ سے انتظام نہیں بنتا۔"
		}
	}
};
function useSite() {
	const lang = useDesk((state) => state.lang);
	return {
		lang,
		s: packs[lang]
	};
}
var ITERATIONS = 21e4;
function toHex(bytes) {
	return [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
function fromHex(hex) {
	const bytes = new Uint8Array(hex.length / 2);
	for (let i = 0; i < bytes.length; i += 1) bytes[i] = Number.parseInt(hex.slice(i * 2, i * 2 + 2), 16);
	return bytes;
}
async function hashSecret(secret, saltHex) {
	const salt = saltHex ? fromHex(saltHex) : crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(16));
	const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), "PBKDF2", false, ["deriveBits"]);
	const bits = await crypto.subtle.deriveBits({
		name: "PBKDF2",
		salt,
		iterations: ITERATIONS,
		hash: "SHA-256"
	}, key, 256);
	return {
		salt: toHex(salt),
		hash: toHex(new Uint8Array(bits))
	};
}
async function verifySecret(secret, salt, hash) {
	const next = await hashSecret(secret, salt);
	if (next.hash.length !== hash.length) return false;
	let diff = 0;
	for (let i = 0; i < hash.length; i += 1) diff |= next.hash.charCodeAt(i) ^ hash.charCodeAt(i);
	return diff === 0;
}
function randomCode() {
	const n = crypto.getRandomValues(/* @__PURE__ */ new Uint32Array(1))[0] % 1e6;
	return String(n).padStart(6, "0");
}
var KNOWN = /* @__PURE__ */ new Set([
	"gmail.com",
	"outlook.com",
	"hotmail.com",
	"yahoo.com",
	"icloud.com",
	"proton.me",
	"protonmail.com",
	"live.com"
]);
function mailIssues(raw) {
	const value = raw.trim();
	const issues = [];
	if (!value) issues.push("empty");
	if (/\s/.test(raw)) issues.push("space");
	const parts = value.split("@");
	if (parts.length !== 2 || !parts[0] || !parts[1]) {
		issues.push("at");
		return issues;
	}
	const [local, domain] = parts;
	if (local.startsWith(".") || local.endsWith(".") || local.includes("..") || domain.includes("..")) issues.push("dots");
	const labels = domain.split(".");
	if (labels.length < 2 || labels.some((label) => !label || !/^[a-z0-9-]+$/i.test(label) || label.startsWith("-") || label.endsWith("-"))) issues.push("domain");
	if ((labels[labels.length - 1] ?? "").length < 2) issues.push("tld");
	return issues;
}
function mailHint(raw) {
	const domain = raw.trim().split("@")[1]?.toLowerCase();
	if (!domain || mailIssues(raw).length) return null;
	return KNOWN.has(domain) ? "known" : "custom";
}
function passwordIssues(raw) {
	return {
		len: raw.length >= 10,
		letter: /[A-Za-z\u0900-\u097F\u0600-\u06FF]/.test(raw),
		digit: /\d/.test(raw)
	};
}
function passwordReady(raw) {
	const issues = passwordIssues(raw);
	return issues.len && issues.letter && issues.digit;
}
function phoneIssues(national, min, max) {
	if (!national) return ["empty"];
	const issues = [];
	if (!/^\d+$/.test(national)) issues.push("chars");
	if (national.startsWith("0")) issues.push("trunk");
	if (national.length < min) issues.push("short");
	if (national.length > max) issues.push("long");
	return issues;
}
function keyOf(dial, national) {
	return `${dial}:${national}`;
}
var useEnter = create()(persist((set, get) => ({
	accounts: [],
	sessionId: null,
	pending: null,
	issue: async (iso, dial, national) => {
		const key = keyOf(dial, national);
		const pending = get().pending;
		if (pending && pending.key === key && pending.tries >= 5 && pending.exp > Date.now()) return {
			ok: false,
			reason: "locked"
		};
		const code = randomCode();
		const hashed = await hashSecret(code);
		set({ pending: {
			key,
			salt: hashed.salt,
			hash: hashed.hash,
			exp: Date.now() + 3e5,
			tries: 0
		} });
		return {
			ok: true,
			code
		};
	},
	verify: async (iso, dial, national, code) => {
		const key = keyOf(dial, national);
		const pending = get().pending;
		if (!pending || pending.key !== key) return {
			ok: false,
			reason: "missing"
		};
		if (pending.exp < Date.now()) return {
			ok: false,
			reason: "expired"
		};
		if (pending.tries >= 5) return {
			ok: false,
			reason: "locked"
		};
		if (!await verifySecret(code.trim(), pending.salt, pending.hash)) {
			set({ pending: {
				...pending,
				tries: pending.tries + 1
			} });
			return {
				ok: false,
				reason: pending.tries + 1 >= 5 ? "locked" : "wrong"
			};
		}
		const existing = get().accounts.find((account) => account.dial === dial && account.national === national);
		if (existing) {
			set({
				sessionId: existing.id,
				pending: null
			});
			return {
				ok: true,
				isNew: false,
				hasPassword: Boolean(existing.password)
			};
		}
		const account = {
			id: crypto.randomUUID(),
			iso,
			dial,
			national,
			password: null,
			createdAt: Date.now()
		};
		set({
			accounts: [...get().accounts, account],
			sessionId: account.id,
			pending: null
		});
		return {
			ok: true,
			isNew: true,
			hasPassword: false
		};
	},
	signWithPassword: async (iso, dial, national, password) => {
		const account = get().accounts.find((item) => item.dial === dial && item.national === national && item.iso === iso);
		if (!account?.password) return false;
		if (!await verifySecret(password, account.password.salt, account.password.hash)) return false;
		set({
			sessionId: account.id,
			pending: null
		});
		return true;
	},
	setPassword: async (password) => {
		const id = get().sessionId;
		if (!id) return false;
		const hashed = await hashSecret(password);
		set({ accounts: get().accounts.map((account) => account.id === id ? {
			...account,
			password: hashed
		} : account) });
		return true;
	},
	leave: () => set({
		sessionId: null,
		pending: null
	})
}), {
	name: "orvia-enter-v1",
	partialize: (state) => ({
		accounts: state.accounts,
		sessionId: state.sessionId,
		pending: state.pending
	})
}));
var STREAM = `wss://data-stream.binance.vision/stream?streams=${LIVE_PAIRS.map((item) => `${item.pair.toLowerCase()}@miniTicker`).join("/")}`;
var REST = `https://data-api.binance.vision/api/v3/ticker/24hr?symbols=${encodeURIComponent(JSON.stringify(LIVE_PAIRS.map((item) => item.pair)))}`;
var pairSymbol = new Map(LIVE_PAIRS.map((item) => [item.pair, item.symbol]));
function readTicker(symbol, last, open) {
	if (!symbol) return null;
	const price = Number(last);
	const opened = Number(open);
	if (!(price > 0)) return null;
	return {
		symbol,
		price,
		move: opened > 0 ? (price - opened) / opened * 100 : 0
	};
}
function startLiveQuotes() {
	let alive = true;
	let socket = null;
	let retry = 800;
	let retryTimer = 0;
	let flushTimer = 0;
	const buffer = [];
	const flush = () => {
		flushTimer = 0;
		if (!buffer.length) return;
		const rows = buffer.splice(0, buffer.length);
		useDesk.getState().applyLive(rows);
	};
	const push = (row) => {
		if (!row) return;
		buffer.push(row);
		if (!flushTimer) flushTimer = window.setTimeout(flush, 50);
	};
	const snapshot = () => {
		fetch(REST).then((response) => response.ok ? response.json() : null).then((rows) => {
			if (!alive || !Array.isArray(rows)) return;
			for (const row of rows) {
				const symbol = row.symbol ? pairSymbol.get(row.symbol) : void 0;
				if (!symbol || !row.lastPrice) continue;
				const price = Number(row.lastPrice);
				const move = Number(row.priceChangePercent);
				if (price > 0) buffer.push({
					symbol,
					price,
					move: Number.isFinite(move) ? move : 0
				});
			}
			flush();
		}).catch(() => void 0);
	};
	const open = () => {
		if (!alive) return;
		socket = new WebSocket(STREAM);
		socket.onopen = () => {
			retry = 800;
		};
		socket.onmessage = (event) => {
			try {
				const data = JSON.parse(String(event.data)).data;
				if (!data?.s || !data.c) return;
				push(readTicker(pairSymbol.get(data.s) ?? "", data.c, data.o ?? ""));
			} catch {}
		};
		socket.onclose = () => {
			if (!alive) return;
			retryTimer = window.setTimeout(open, retry);
			retry = Math.min(retry * 2, 8e3);
		};
	};
	snapshot();
	open();
	const poll = window.setInterval(() => {
		if (socket?.readyState !== WebSocket.OPEN) snapshot();
	}, 3e3);
	return () => {
		alive = false;
		window.clearTimeout(flushTimer);
		window.clearTimeout(retryTimer);
		window.clearInterval(poll);
		socket?.close();
	};
}
var locale = {
	en: "en-IN",
	hi: "hi-IN",
	ur: "ur-PK"
};
var sign = {
	INR: "₹",
	USD: "$",
	PKR: "₨",
	AED: "د.إ",
	EUR: "€"
};
function num(n, lang, digits = 2) {
	return new Intl.NumberFormat(locale[lang], {
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	}).format(Number.isFinite(n) ? n : 0);
}
function numFlex(n, lang, digits = 4) {
	return new Intl.NumberFormat(locale[lang], { maximumFractionDigits: digits }).format(Number.isFinite(n) ? n : 0);
}
function fiatAmt(n, code, lang) {
	return `${sign[code]}${num(n, lang, 2)}`;
}
function fiatSign(code) {
	return sign[code];
}
function spot(n, lang) {
	return `$${num(n, lang, n >= 100 ? 2 : 4)}`;
}
function Tape({ coins, quotes, moves, lang, label }) {
	const rows = sortCoins(coins.filter((coin) => coin.listed));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "orvia-tape-row",
		dir: "ltr",
		role: "region",
		"aria-label": label,
		onPointerEnter: (event) => event.currentTarget.classList.add("is-held"),
		onPointerLeave: (event) => event.currentTarget.classList.remove("is-held"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "orvia-tape",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orvia-tape-track",
				children: [rows, rows].map((group, groupIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex",
					"aria-hidden": groupIndex === 1,
					children: group.map((coin) => {
						const quote = quotes[coin.symbol] ?? coin.price;
						const live = LIVE_SYMBOLS.has(coin.symbol);
						const move = moves?.[coin.symbol];
						const pct = live && move != null ? move : coin.price > 0 ? (quote - coin.price) / coin.price * 100 : 0;
						const up = pct >= 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "orvia-quote",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: live ? "orvia-pip orvia-pip-live" : "orvia-pip" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-sans text-xs font-semibold tracking-wide",
									children: coin.symbol
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: spot(quote, lang) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: up ? "text-buy" : "text-sell",
									children: [
										up ? "+" : "",
										num(pct, lang, Math.abs(pct) > 0 && Math.abs(pct) < .1 ? 3 : 2),
										"%"
									]
								})
							]
						}, coin.symbol);
					})
				}, groupIndex))
			})
		})
	});
}
var themes$1 = [
	"day",
	"night",
	"dark"
];
var langs$1 = [
	"en",
	"hi",
	"ur"
];
var DESK = [
	"/desk",
	"/express",
	"/orders",
	"/order",
	"/wallet",
	"/post",
	"/passes",
	"/payments",
	"/identity",
	"/admin",
	"/guide",
	"/profile"
];
function isDeskPath(path) {
	return DESK.some((item) => path === item || path.startsWith(`${item}/`));
}
function AccountSlot({ compact = false }) {
	const { user, isPending } = useCurrentUserState();
	const { s } = useSite();
	const sessionId = useEnter((state) => state.sessionId);
	const leave = useEnter((state) => state.leave);
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-block h-8 w-20 animate-pulse rounded-full bg-line",
		"aria-hidden": "true"
	});
	if (user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {});
	if (sessionId) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "inline-flex min-h-11 items-center px-2 text-sm font-semibold",
		onClick: leave,
		children: s.nav.phoneOut
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/login",
		className: cn("inline-flex min-h-11 items-center rounded-full border border-line px-3 text-sm font-semibold", compact && "px-2"),
		children: s.nav.enter
	});
}
function SiteFrame({ children }) {
	const { s } = useSite();
	const { t } = useI18n();
	const theme = useDesk((state) => state.theme);
	const lang = useDesk((state) => state.lang);
	const setTheme = useDesk((state) => state.setTheme);
	const setLang = useDesk((state) => state.setLang);
	const hydrated = useDesk((state) => state.hydrated);
	const quotes = useDesk((state) => state.quotes);
	const moves = useDesk((state) => state.moves);
	const coins = useDesk((state) => state.coins);
	const path = useRouterState({ select: (state) => state.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const ThemeIcon = {
		day: Sun,
		night: Moon,
		dark: Eclipse
	}[theme];
	(0, import_react.useEffect)(() => {
		const finish = () => useDesk.getState().markHydrated();
		const unsub = useDesk.persist.onFinishHydration(finish);
		useDesk.persist.rehydrate();
		return unsub;
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		const id = window.setInterval(() => useDesk.getState().tickQuotes(), 4e3);
		return () => window.clearInterval(id);
	}, [hydrated]);
	(0, import_react.useEffect)(() => startLiveQuotes(), []);
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		root.dataset.theme = theme;
		root.dataset.lang = lang;
		root.lang = lang;
		root.dir = lang === "ur" ? "rtl" : "ltr";
		document.title = `ORVIA · ${s.company}`;
	}, [
		theme,
		lang,
		s.company
	]);
	const links = [
		{
			to: "/",
			label: s.nav.home
		},
		{
			to: "/product",
			label: s.nav.product
		},
		{
			to: "/services",
			label: s.nav.services
		},
		{
			to: "/pricing",
			label: s.nav.pricing
		},
		{
			to: "/about",
			label: s.nav.about
		},
		{
			to: "/journal",
			label: s.nav.journal
		},
		{
			to: "/contact",
			label: s.nav.contact
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "orvia-head sticky top-0 z-30 bg-surface",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex h-16 max-w-6xl items-center gap-3 px-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "inline-flex shrink-0 items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold tracking-widest",
									children: "ORVIA"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "hidden items-center gap-1 lg:flex",
								"aria-label": s.nav.home,
								children: links.slice(1).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: cn("px-2.5 py-2 text-sm font-medium", path === item.to ? "text-primary" : "text-muted"),
									children: item.label
								}, item.to))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ms-auto flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden items-center rounded-full border border-line bg-bg p-0.5 sm:flex",
										role: "group",
										"aria-label": lang,
										children: langs$1.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: cn("min-h-11 min-w-11 rounded-full px-2 text-xs font-semibold", lang === code ? "bg-surface text-primary" : "text-muted"),
											"aria-pressed": lang === code,
											onClick: () => setLang(code),
											children: code.toUpperCase()
										}, code))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "grid size-11 place-items-center rounded-full border border-line text-muted",
										"aria-label": theme,
										onClick: () => setTheme(themes$1[(themes$1.indexOf(theme) + 1) % themes$1.length]),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeIcon, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden sm:block",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountSlot, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/desk",
										className: "hidden min-h-11 items-center rounded-full bg-primary px-3 text-sm font-semibold text-primary-fg sm:inline-flex",
										children: s.nav.desk
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "grid size-11 place-items-center lg:hidden",
										"aria-label": s.nav.more,
										onClick: () => setOpen(true),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tape, {
						coins,
						quotes,
						moves,
						lang,
						label: s.liveNote
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line px-4 py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold tracking-wide",
						children: s.company
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-x-4 gap-y-2 text-muted",
						children: [
							...links,
							{
								to: "/security",
								label: s.nav.security
							},
							{
								to: "/faq",
								label: s.nav.faq
							},
							{
								to: "/legal",
								label: s.nav.legal
							},
							{
								to: "/login",
								label: s.nav.enter
							},
							{
								to: "/desk",
								label: s.nav.desk
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "font-medium text-fg",
							children: item.label
						}, item.to))
					})]
				})
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-end bg-fg/40 lg:hidden",
				role: "presentation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "dialog",
					"aria-modal": "true",
					"aria-label": s.nav.more,
					className: "max-h-[85vh] w-full overflow-y-auto rounded-t-md border border-line bg-surface p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: s.company
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 px-3 text-sm font-semibold",
								onClick: () => setOpen(false),
								children: t("common.close")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 flex gap-1",
							children: langs$1.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 min-w-11 rounded-full border border-line text-xs font-semibold",
								onClick: () => setLang(code),
								children: code.toUpperCase()
							}, code))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1",
							children: [
								links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: "flex min-h-11 items-center font-semibold",
									onClick: () => setOpen(false),
									children: item.label
								}, item.to)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/desk",
									className: "flex min-h-11 items-center font-semibold text-primary",
									onClick: () => setOpen(false),
									children: s.nav.desk
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "py-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountSlot, {})
								})
							]
						})
					]
				})
			}) : null
		]
	});
}
var themes = [
	"day",
	"night",
	"dark"
];
var langs = [
	"en",
	"hi",
	"ur"
];
var mainNav = [
	{
		to: "/desk",
		key: "nav.market"
	},
	{
		to: "/express",
		key: "nav.express"
	},
	{
		to: "/orders",
		key: "nav.orders"
	},
	{
		to: "/wallet",
		key: "nav.wallet"
	}
];
var moreNav = [
	{
		to: "/post",
		key: "nav.post"
	},
	{
		to: "/passes",
		key: "nav.passes"
	},
	{
		to: "/payments",
		key: "nav.payments"
	},
	{
		to: "/identity",
		key: "nav.identity"
	},
	{
		to: "/admin",
		key: "nav.admin"
	},
	{
		to: "/guide",
		key: "nav.guide"
	},
	{
		to: "/profile",
		key: "nav.profile"
	}
];
function active(path, to) {
	if (to === "/") return path === "/";
	return path === to || path.startsWith(`${to}/`) || to === "/orders" && path.startsWith("/order");
}
function Shell({ children }) {
	const hydrated = useDesk((state) => state.hydrated);
	const theme = useDesk((state) => state.theme);
	const lang = useDesk((state) => state.lang);
	const setTheme = useDesk((state) => state.setTheme);
	const setLang = useDesk((state) => state.setLang);
	const setMe = useDesk((state) => state.setMe);
	const meId = useDesk((state) => state.meId);
	const users = useDesk((state) => state.users);
	const notice = useDesk((state) => state.notice);
	const deskOpen = useDesk((state) => state.settings.deskOpen);
	const quotes = useDesk((state) => state.quotes);
	const moves = useDesk((state) => state.moves);
	const coins = useDesk((state) => state.coins);
	const { t } = useI18n();
	const { s } = useSite();
	const path = useRouterState({ select: (state) => state.location.pathname });
	const [more, setMore] = (0, import_react.useState)(false);
	const [seats, setSeats] = (0, import_react.useState)(false);
	const me = users.find((user) => user.id === meId) ?? users[0];
	(0, import_react.useEffect)(() => {
		const finish = () => useDesk.getState().markHydrated();
		const unsub = useDesk.persist.onFinishHydration(finish);
		useDesk.persist.rehydrate();
		return unsub;
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		const id = window.setInterval(() => useDesk.getState().tickQuotes(), 4e3);
		return () => window.clearInterval(id);
	}, [hydrated]);
	(0, import_react.useEffect)(() => startLiveQuotes(), []);
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		root.dataset.theme = theme;
		root.dataset.lang = lang;
		root.lang = lang;
		root.dir = lang === "ur" ? "rtl" : "ltr";
		document.title = `${t("brand")} · ${t("product")}`;
	}, [
		theme,
		lang,
		t
	]);
	if (!me) return null;
	const ThemeIcon = {
		day: Sun,
		night: Moon,
		dark: Eclipse
	}[theme];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "orvia-head sticky top-0 z-30 bg-surface",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex h-16 max-w-7xl items-stretch gap-3 px-3 sm:px-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "inline-flex shrink-0 items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold tracking-widest",
									children: t("brand")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "my-4 hidden w-px bg-line md:block",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "hidden items-stretch md:flex",
								"aria-label": t("nav.market"),
								children: mainNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: cn("inline-flex items-center border-b-2 px-3 text-sm font-medium", active(path, item.to) ? "border-primary text-primary" : "border-transparent text-muted"),
									children: t(item.key)
								}, item.to))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ms-auto flex shrink-0 items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center rounded-full border border-line bg-bg p-0.5",
										role: "group",
										"aria-label": t("lang.label"),
										children: langs.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: cn("min-h-11 min-w-11 rounded-full px-2 text-xs font-semibold tracking-wide", lang === code ? "bg-surface text-primary" : "text-muted"),
											onClick: () => setLang(code),
											"aria-pressed": lang === code,
											"aria-label": t(`lang.${code}`),
											children: code.toUpperCase()
										}, code))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "grid size-11 place-items-center rounded-full border border-line text-muted",
										"aria-label": t(`theme.${theme}`),
										onClick: () => setTheme(themes[(themes.indexOf(theme) + 1) % themes.length]),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeIcon, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden md:block",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountSlot, { compact: true })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "inline-flex min-h-11 items-center gap-2 ps-1",
										onClick: () => setSeats(true),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-8 place-items-center rounded-full bg-bg text-xs font-semibold text-primary ring-2 ring-primary",
											children: personName(me.name, lang).slice(0, 1)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hidden max-w-36 truncate text-sm font-medium sm:inline",
											children: personName(me.name, lang)
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tape, {
						coins,
						quotes,
						moves,
						lang,
						label: t("tape.live")
					}),
					deskOpen === false ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "border-t border-line bg-surface-2 px-4 py-2 text-center text-xs font-semibold",
						children: t("admin.deskClosed")
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pb-24 md:pb-10",
				children
			}),
			notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-x-4 bottom-24 z-40 mx-auto max-w-md rounded-md border border-line bg-surface px-4 py-3 text-sm shadow-lg md:bottom-6",
				children: t(notice.key, notice.vars)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-line bg-surface md:hidden",
				"aria-label": t("nav.more"),
				children: [mainNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: cn("grid min-h-16 place-items-center px-1 text-center text-xs font-semibold", active(path, item.to) ? "text-primary" : "text-muted"),
					children: t(item.key)
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "grid min-h-16 place-items-center text-xs font-semibold text-muted",
					onClick: () => setMore(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "mb-0.5 size-4" }), t("nav.more")]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "hidden border-t border-line px-4 py-6 text-center text-xs text-muted md:block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("footer.sim") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: t("footer.rights")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap justify-center gap-3",
						children: [
							moreNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "font-semibold text-fg",
								children: t(item.key)
							}, item.to)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "font-semibold text-fg",
								children: s.nav.home
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								className: "font-semibold text-fg",
								children: s.nav.services
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "font-semibold text-fg",
								children: s.nav.about
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/journal",
								className: "font-semibold text-fg",
								children: s.nav.journal
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "font-semibold text-fg",
								children: s.nav.contact
							})
						]
					})
				]
			}),
			more ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				title: t("nav.more"),
				onClose: () => setMore(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1",
					children: [
						moreNav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "flex min-h-11 items-center rounded-md px-3 text-sm font-semibold",
							onClick: () => setMore(false),
							children: t(item.key)
						}, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "flex min-h-11 items-center rounded-md px-3 text-sm font-semibold",
							onClick: () => setMore(false),
							children: s.nav.home
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "flex min-h-11 items-center rounded-md px-3 text-sm font-semibold",
							onClick: () => setMore(false),
							children: s.nav.services
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "flex min-h-11 items-center rounded-md px-3 text-sm font-semibold",
							onClick: () => setMore(false),
							children: s.nav.enter
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-3 py-2 md:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountSlot, {})
						})
					]
				})
			}) : null,
			seats ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
				title: t("profile.switch"),
				onClose: () => setSeats(false),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-sm text-muted",
					children: t("profile.seat")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2",
					children: users.map((user) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: cn("flex min-h-11 items-center justify-between gap-3 rounded-md border px-3 py-2 text-start", user.id === me.id ? "border-primary bg-surface-2" : "border-line"),
						onClick: () => {
							setMe(user.id);
							setSeats(false);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: personName(user.name, lang)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: t(`role.${roleOf(user)}`)
						})]
					}, user.id))
				})]
			}) : null
		]
	});
}
function Sheet({ title, onClose, children }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end bg-fg/40 sm:items-center sm:justify-center sm:p-4",
		role: "presentation",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": title,
			className: "max-h-[85vh] w-full overflow-y-auto rounded-t-md border border-line bg-surface p-4 sm:max-w-md sm:rounded-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 px-3 text-sm font-semibold",
					onClick: onClose,
					children: t("common.close")
				})]
			}), children]
		})
	});
}
var styles_default = "/assets/styles-BZ4MBLEN.css";
var Route$25 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ORVIA" },
			{
				name: "description",
				content: "ORVIA desk of DLM CASH LABS PRIVATE LIMITED."
			},
			{
				name: "theme-color",
				content: "#9a6420"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: Root
});
function Root() {
	const desk = isDeskPath(useRouterState({ select: (state) => state.location.pathname }));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "hi",
		dir: "ltr",
		"data-theme": "day",
		"data-lang": "hi",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: desk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$23 = () => import("./routes-CPAs8T1P.mjs");
var Route$24 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$23, "component") });
var $$splitComponentImporter$22 = () => import("./about-pu3s6L8x.mjs");
var Route$23 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
var $$splitComponentImporter$21 = () => import("./admin-DLAgPRt4.mjs");
var Route$22 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("./contact-DAv4Msz-.mjs");
var Route$21 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./desk-CiDzlv-q.mjs");
var Route$20 = createFileRoute("/desk")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./express-DOGAJaoJ.mjs");
var Route$19 = createFileRoute("/express")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./faq-Rt1JXzmW.mjs");
var Route$18 = createFileRoute("/faq")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./guide-_sggzRAd.mjs");
var Route$17 = createFileRoute("/guide")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./identity-BMOwqrlb.mjs");
var Route$16 = createFileRoute("/identity")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./journal-DWMh8dyv.mjs");
var Route$15 = createFileRoute("/journal")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./legal-BUCPonTb.mjs");
var Route$14 = createFileRoute("/legal")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./login-CGVSIQL0.mjs");
var Route$13 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./orders-C-5Xzb0D.mjs");
var Route$12 = createFileRoute("/orders")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./passes-DiE3PMV0.mjs");
var Route$11 = createFileRoute("/passes")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./payments-C1xb6wqN.mjs");
var Route$10 = createFileRoute("/payments")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./post-DfkTaOGa.mjs");
var Route$9 = createFileRoute("/post")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./pricing-DJnH85HC.mjs");
var Route$8 = createFileRoute("/pricing")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./product-DvGk227Z.mjs");
var Route$7 = createFileRoute("/product")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./profile-Cz0a30i5.mjs");
var Route$6 = createFileRoute("/profile")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./security-CbIFekdU.mjs");
var Route$5 = createFileRoute("/security")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./services-wDn5CkVn.mjs");
var Route$4 = createFileRoute("/services")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./wallet-DzIkt7IO.mjs");
var Route$3 = createFileRoute("/wallet")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./journal._slug-CH9th8Nl.mjs");
var Route$2 = createFileRoute("/journal/$slug")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./order._orderId-cEUPNRgk.mjs");
var Route$1 = createFileRoute("/order/$orderId")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var generateRandomString = createRandomStringGenerator("a-z", "0-9", "A-Z", "-_");
async function signJWT(payload, secret, expiresIn = 3600) {
	return await new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime(Math.floor(Date.now() / 1e3) + expiresIn).sign(new TextEncoder().encode(secret));
}
async function verifyJWT(token, secret) {
	try {
		return (await jwtVerify(token, new TextEncoder().encode(secret))).payload;
	} catch {
		return null;
	}
}
var info = new Uint8Array([
	66,
	101,
	116,
	116,
	101,
	114,
	65,
	117,
	116,
	104,
	46,
	106,
	115,
	32,
	71,
	101,
	110,
	101,
	114,
	97,
	116,
	101,
	100,
	32,
	69,
	110,
	99,
	114,
	121,
	112,
	116,
	105,
	111,
	110,
	32,
	75,
	101,
	121
]);
var now = () => Date.now() / 1e3 | 0;
var alg = "dir";
var enc = "A256CBC-HS512";
function deriveEncryptionSecret(secret, salt) {
	return hkdf(sha256, new TextEncoder().encode(secret), new TextEncoder().encode(salt), info, 64);
}
function getCurrentSecret(secret) {
	if (typeof secret === "string") return secret;
	const value = secret.keys.get(secret.currentVersion);
	if (!value) throw new Error(`Secret version ${secret.currentVersion} not found in keys`);
	return value;
}
function getAllSecrets(secret) {
	if (typeof secret === "string") return [{
		version: 0,
		value: secret
	}];
	const result = [];
	for (const [version, value] of secret.keys) result.push({
		version,
		value
	});
	if (secret.legacySecret && !result.some((s) => s.value === secret.legacySecret)) result.push({
		version: -1,
		value: secret.legacySecret
	});
	return result;
}
async function symmetricEncodeJWT(payload, secret, salt, expiresIn = 3600) {
	const encryptionSecret = deriveEncryptionSecret(getCurrentSecret(secret), salt);
	const thumbprint = await calculateJwkThumbprint({
		kty: "oct",
		k: encode(encryptionSecret)
	}, "sha256");
	return await new EncryptJWT(payload).setProtectedHeader({
		alg,
		enc,
		kid: thumbprint
	}).setIssuedAt().setExpirationTime(now() + expiresIn).setJti(crypto.randomUUID()).encrypt(encryptionSecret);
}
var jwtDecryptOpts = {
	clockTolerance: 15,
	keyManagementAlgorithms: [alg],
	contentEncryptionAlgorithms: [enc, "A256GCM"]
};
async function symmetricDecodeJWT(token, secret, salt) {
	if (!token) return null;
	let hasKid = false;
	try {
		hasKid = decodeProtectedHeader(token).kid !== void 0;
	} catch {
		return null;
	}
	try {
		const secrets = getAllSecrets(secret);
		const { payload } = await jwtDecrypt(token, async (protectedHeader) => {
			const kid = protectedHeader.kid;
			if (kid !== void 0) {
				for (const s of secrets) {
					const encryptionSecret = deriveEncryptionSecret(s.value, salt);
					if (kid === await calculateJwkThumbprint({
						kty: "oct",
						k: encode(encryptionSecret)
					}, "sha256")) return encryptionSecret;
				}
				throw new Error("no matching decryption secret");
			}
			if (secrets.length === 1) return deriveEncryptionSecret(secrets[0].value, salt);
			return deriveEncryptionSecret(secrets[0].value, salt);
		}, jwtDecryptOpts);
		return payload;
	} catch {
		if (hasKid) return null;
		const secrets = getAllSecrets(secret);
		if (secrets.length <= 1) return null;
		for (let i = 1; i < secrets.length; i++) try {
			const s = secrets[i];
			const { payload } = await jwtDecrypt(token, deriveEncryptionSecret(s.value, salt), jwtDecryptOpts);
			return payload;
		} catch {
			continue;
		}
		return null;
	}
}
/**
* `@better-auth/utils/password` uses the "node" export condition in package.json
* to automatically pick the right implementation:
*   - Node.js / Bun / Deno → `node:crypto scrypt` (libuv thread pool, non-blocking)
*   - Unsupported runtimes → `@noble/hashes scrypt` (pure JS fallback)
*/
var hashPassword$1 = hashPassword;
var verifyPassword$1$1 = async ({ hash, password }) => {
	return verifyPassword(hash, password);
};
var ENVELOPE_PREFIX = "$ba$";
function parseEnvelope(data) {
	if (!data.startsWith(ENVELOPE_PREFIX)) return null;
	const firstSep = 4;
	const secondSep = data.indexOf("$", firstSep);
	if (secondSep === -1) return null;
	const version = parseInt(data.slice(firstSep, secondSep), 10);
	if (!Number.isInteger(version) || version < 0) return null;
	return {
		version,
		ciphertext: data.slice(secondSep + 1)
	};
}
function formatEnvelope(version, ciphertext) {
	return `${ENVELOPE_PREFIX}${version}$${ciphertext}`;
}
async function rawEncrypt(secret, data) {
	const keyAsBytes = await createHash("SHA-256").digest(secret);
	const dataAsBytes = utf8ToBytes(data);
	return bytesToHex(managedNonce(xchacha20poly1305)(new Uint8Array(keyAsBytes)).encrypt(dataAsBytes));
}
async function rawDecrypt(secret, hex) {
	const keyAsBytes = await createHash("SHA-256").digest(secret);
	const dataAsBytes = hexToBytes(hex);
	const chacha = managedNonce(xchacha20poly1305)(new Uint8Array(keyAsBytes));
	return new TextDecoder().decode(chacha.decrypt(dataAsBytes));
}
var symmetricEncrypt = async ({ key, data }) => {
	if (typeof key === "string") return rawEncrypt(key, data);
	const secret = key.keys.get(key.currentVersion);
	if (!secret) throw new Error(`Secret version ${key.currentVersion} not found in keys`);
	const ciphertext = await rawEncrypt(secret, data);
	return formatEnvelope(key.currentVersion, ciphertext);
};
var symmetricDecrypt = async ({ key, data }) => {
	if (typeof key === "string") return rawDecrypt(key, data);
	const envelope = parseEnvelope(data);
	if (envelope) {
		const secret = key.keys.get(envelope.version);
		if (!secret) throw new Error(`Secret version ${envelope.version} not found in keys (key may have been retired)`);
		return rawDecrypt(secret, envelope.ciphertext);
	}
	if (key.legacySecret) return rawDecrypt(key.legacySecret, data);
	throw new Error("Cannot decrypt legacy bare-hex payload: no legacy secret available. Set BETTER_AUTH_SECRET for backwards compatibility.");
};
function hasServerSessionStore(options) {
	return !!options.database || !!options.secondaryStorage;
}
function hasServerAccountStore(options) {
	return !!options.database;
}
function shouldBindAccountCookieToSessionUser(options) {
	return hasServerAccountStore(options);
}
var cache = /* @__PURE__ */ new WeakMap();
function getFields(options, modelName, mode) {
	const cacheKey = `${modelName}:${mode}`;
	if (!cache.has(options)) cache.set(options, /* @__PURE__ */ new Map());
	const tableCache = cache.get(options);
	if (tableCache.has(cacheKey)) return tableCache.get(cacheKey);
	const coreSchema = mode === "output" ? getAuthTables(options)[modelName]?.fields ?? {} : {};
	const additionalFields = modelName === "user" || modelName === "session" || modelName === "account" ? options[modelName]?.additionalFields : void 0;
	let schema = {
		...coreSchema,
		...additionalFields ?? {}
	};
	for (const plugin of options.plugins || []) if (plugin.schema && plugin.schema[modelName]) schema = {
		...schema,
		...plugin.schema[modelName].fields
	};
	tableCache.set(cacheKey, schema);
	return schema;
}
function parseUserOutput(options, user) {
	return filterOutputFields(user, getFields(options, "user", "output"));
}
/**
* Builds a synthetic user object that matches the shape of a real user
* returned from the database. This ensures enumeration protection works
* correctly by making synthetic and real user responses indistinguishable.
*
* The function iterates over the user output schema and:
* - Includes all fields that should be returned (returned !== false)
* - Uses provided values when available
* - Sets optional fields to null when no value is provided
* - Applies default values where defined
* - Always includes the 'id' field (not part of schema but always present)
*/
function buildSyntheticUserOutput(options, data) {
	const schema = getFields(options, "user", "output");
	const result = {};
	for (const key in schema) {
		const fieldAttr = schema[key];
		if (fieldAttr.returned === false) continue;
		if (key in data && data[key] !== void 0) result[key] = data[key];
		else if (fieldAttr.defaultValue !== void 0) result[key] = typeof fieldAttr.defaultValue === "function" ? fieldAttr.defaultValue() : fieldAttr.defaultValue;
		else if (!fieldAttr.required) result[key] = null;
	}
	if ("id" in data) result.id = data.id;
	return result;
}
function parseSessionOutput(options, session) {
	return filterOutputFields(session, getFields(options, "session", "output"));
}
function parseAccountOutput(options, account) {
	const { accessToken: _accessToken, refreshToken: _refreshToken, idToken: _idToken, accessTokenExpiresAt: _accessTokenExpiresAt, refreshTokenExpiresAt: _refreshTokenExpiresAt, password: _password, ...rest } = filterOutputFields(account, getFields(options, "account", "output"));
	return rest;
}
function parseInputData(data, schema) {
	const action = schema.action || "create";
	const fields = schema.fields;
	const parsedData = Object.create(null);
	for (const key in fields) {
		if (key in data) {
			if (fields[key].input === false) {
				if (fields[key].defaultValue !== void 0) {
					if (action !== "update") {
						parsedData[key] = fields[key].defaultValue;
						continue;
					}
				}
				if (data[key]) throw APIError.from("BAD_REQUEST", {
					...BASE_ERROR_CODES.FIELD_NOT_ALLOWED,
					message: `${key} is not allowed to be set`
				});
				continue;
			}
			if (fields[key].validator?.input && data[key] !== void 0) {
				const result = fields[key].validator.input["~standard"].validate(data[key]);
				if (result instanceof Promise) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.ASYNC_VALIDATION_NOT_SUPPORTED);
				if ("issues" in result && result.issues) throw APIError.from("BAD_REQUEST", {
					...BASE_ERROR_CODES.VALIDATION_ERROR,
					message: result.issues[0]?.message || "Validation Error"
				});
				parsedData[key] = result.value;
				continue;
			}
			if (fields[key].transform?.input && data[key] !== void 0) {
				parsedData[key] = fields[key].transform?.input(data[key]);
				continue;
			}
			parsedData[key] = data[key];
			continue;
		}
		if (fields[key].defaultValue !== void 0 && action === "create") {
			if (typeof fields[key].defaultValue === "function") {
				parsedData[key] = fields[key].defaultValue();
				continue;
			}
			parsedData[key] = fields[key].defaultValue;
			continue;
		}
		if (fields[key].required && action === "create") throw APIError.from("BAD_REQUEST", {
			...BASE_ERROR_CODES.MISSING_FIELD,
			message: `${key} is required`
		});
	}
	return parsedData;
}
function parseUserInput(options, user = {}, action) {
	return parseInputData(user, {
		fields: getFields(options, "user", "input"),
		action
	});
}
function parseAdditionalUserInputFromProviderProfile(options, profile = {}, action) {
	const schema = getFields(options, "user", "input");
	const allowedProfileFields = Object.create(null);
	for (const key of Object.keys(profile)) {
		if (schema[key]?.input === false) continue;
		allowedProfileFields[key] = profile[key];
	}
	return parseInputData(allowedProfileFields, {
		fields: schema,
		action
	});
}
function parseSessionInput(options, session, action) {
	return parseInputData(session, {
		fields: getFields(options, "session", "input"),
		action
	});
}
function getSessionDefaultFields(options) {
	const fields = getFields(options, "session", "input");
	const defaults = {};
	for (const key in fields) if (fields[key].defaultValue !== void 0) defaults[key] = typeof fields[key].defaultValue === "function" ? fields[key].defaultValue() : fields[key].defaultValue;
	return defaults;
}
var getDate = (span, unit = "ms") => {
	return new Date(Date.now() + (unit === "sec" ? span * 1e3 : span));
};
function isPromise(obj) {
	return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
}
var SEC = 1e3;
var MIN = SEC * 60;
var HOUR = MIN * 60;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var MONTH = DAY * 30;
var YEAR = DAY * 365.25;
var REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mo|years?|yrs?|y)(?: (ago|from now))?$/i;
function parse(value) {
	const match = REGEX.exec(value);
	if (!match || match[4] && match[1]) throw new TypeError(`Invalid time string format: "${value}". Use formats like "7d", "30m", "1 hour", etc.`);
	const n = parseFloat(match[2]);
	const unit = match[3].toLowerCase();
	let result;
	switch (unit) {
		case "years":
		case "year":
		case "yrs":
		case "yr":
		case "y":
			result = n * YEAR;
			break;
		case "months":
		case "month":
		case "mo":
			result = n * MONTH;
			break;
		case "weeks":
		case "week":
		case "w":
			result = n * WEEK;
			break;
		case "days":
		case "day":
		case "d":
			result = n * DAY;
			break;
		case "hours":
		case "hour":
		case "hrs":
		case "hr":
		case "h":
			result = n * HOUR;
			break;
		case "minutes":
		case "minute":
		case "mins":
		case "min":
		case "m":
			result = n * MIN;
			break;
		case "seconds":
		case "second":
		case "secs":
		case "sec":
		case "s":
			result = n * SEC;
			break;
		default: throw new TypeError(`Unknown time unit: "${unit}"`);
	}
	if (match[1] === "-" || match[4] === "ago") return -result;
	return result;
}
/**
* Parse a time string and return the value in seconds.
*
* @param value - A time string like "7d", "30m", "1 hour", "2 hours ago"
* @returns The parsed value in seconds (rounded)
* @throws TypeError if the string format is invalid
*
* @example
* sec("1d")          // 86400
* sec("2 hours")     // 7200
* sec("-30s")        // -30
* sec("2 hours ago") // -7200
*/
function sec(value) {
	return Math.round(parse(value) / 1e3);
}
/**
* Per-cookie byte ceiling.
* Safari's ~4093 floor is the lowest among browsers.
* Kept a little under it for attributes added after sizing.
*
* @see https://datatracker.ietf.org/doc/html/rfc6265#section-6.1
* @see https://github.com/dotnet/aspnetcore/blob/aa5493528640932601bb82ef3295e4d8ca7e11c5/src/Shared/ChunkingCookieManager/ChunkingCookieManager.cs#L40
*/
var MAX_COOKIE_SIZE = 4050;
/**
* Max chunks per cookie.
* A larger value does not belong in a cookie.
*/
var MAX_COOKIE_CHUNKS = 100;
/**
* Largest value that keeps the serialized cookie within {@link MAX_COOKIE_SIZE},
* measured with the real `serializeCookie` writer so it stays in sync with the
* wire. Non-positive when the name and attributes alone overflow.
*/
function getMaxCookieValueSize(name, options) {
	return MAX_COOKIE_SIZE - serializeCookie(name, "", { ...options }).length;
}
/**
* Read all existing chunks from cookies
*/
function readExistingChunks(cookieName, ctx) {
	const chunks = {};
	const cookies = parseCookies(ctx.headers?.get("cookie") || "");
	for (const [name, value] of cookies) if (name.startsWith(cookieName)) chunks[name] = value;
	return chunks;
}
/**
* Split a cookie value into chunks if needed
*/
function chunkCookie(storeName, cookie, chunks, logger) {
	const chunkSize = getMaxCookieValueSize(`${cookie.name}.99`, cookie.attributes);
	const chunkCount = chunkSize > 0 ? Math.ceil(cookie.value.length / chunkSize) : Infinity;
	if (chunkCount <= 1) {
		chunks[cookie.name] = cookie.value;
		return [cookie];
	}
	if (chunkCount > MAX_COOKIE_CHUNKS) {
		logger.warn(`${storeName} cookie is too large to store even after chunking, so the cache was skipped. Reduce the cached data or use a database session.`);
		return [];
	}
	const cookies = [];
	for (let i = 0; i < chunkCount; i++) {
		const name = `${cookie.name}.${i}`;
		const start = i * chunkSize;
		const value = cookie.value.substring(start, start + chunkSize);
		cookies.push({
			...cookie,
			name,
			value
		});
		chunks[name] = value;
	}
	logger.debug(`CHUNKING_${storeName.toUpperCase()}_COOKIE`, {
		message: `${storeName} cookie exceeds the ${MAX_COOKIE_SIZE} byte limit and was split into ${chunkCount} chunks.`,
		valueSize: cookie.value.length,
		chunkCount,
		chunkSizes: cookies.map((c) => c.value.length)
	});
	return cookies;
}
/**
* Get all cookies that should be cleaned (removed)
*/
function getCleanCookies(chunks, cookieOptions) {
	const cleanedChunks = {};
	for (const name in chunks) cleanedChunks[name] = {
		name,
		value: "",
		attributes: {
			...cookieOptions,
			maxAge: 0
		}
	};
	return cleanedChunks;
}
/**
* Store that splits a cookie into numbered chunks when its serialized form
* would exceed the per-cookie byte limit, expiring stale chunks as needed.
*
* @see https://github.com/nextauthjs/next-auth/blob/27b2519b84b8eb9cf053775dea29d577d2aa0098/packages/next-auth/src/core/lib/cookie.ts
*/
var storeFactory = (storeName) => (cookieName, cookieOptions, ctx) => {
	const chunks = readExistingChunks(cookieName, ctx);
	const logger = ctx.context.logger;
	const expireExistingChunks = () => {
		const expired = getCleanCookies(chunks, cookieOptions);
		for (const name in chunks) delete chunks[name];
		return expired;
	};
	return {
		chunk(value, options) {
			const cookies = expireExistingChunks();
			const chunked = chunkCookie(storeName, {
				name: cookieName,
				value,
				attributes: {
					...cookieOptions,
					...options
				}
			}, chunks, logger);
			for (const chunk of chunked) cookies[chunk.name] = chunk;
			return Object.values(cookies);
		},
		clean() {
			return Object.values(expireExistingChunks());
		},
		setCookies(cookies) {
			for (const cookie of cookies) ctx.setCookie(cookie.name, cookie.value, cookie.attributes);
		}
	};
};
var createSessionStore = storeFactory("Session");
var createAccountStore = storeFactory("Account");
function getChunkedCookie(ctx, cookieName) {
	const value = ctx.getCookie(cookieName);
	if (value) return value;
	const chunks = [];
	const cookieHeader = ctx.headers?.get("cookie");
	if (!cookieHeader) return null;
	for (const [name, val] of parseCookies(cookieHeader)) if (name.startsWith(cookieName + ".")) {
		const indexStr = name.split(".").at(-1);
		const index = parseInt(indexStr || "0", 10);
		if (!isNaN(index)) chunks.push({
			index,
			value: val
		});
	}
	if (chunks.length > 0) {
		chunks.sort((a, b) => a.index - b.index);
		return chunks.map((c) => c.value).join("");
	}
	return null;
}
async function setAccountCookie(c, accountData) {
	const accountDataCookie = c.context.authCookies.accountData;
	const options = {
		maxAge: 300,
		...accountDataCookie.attributes
	};
	const data = await symmetricEncodeJWT(accountData, c.context.secretConfig, "better-auth-account", options.maxAge);
	const accountStore = createAccountStore(accountDataCookie.name, options, c);
	accountStore.setCookies(accountStore.chunk(data, options));
}
async function getAccountCookie(c) {
	const accountCookie = getChunkedCookie(c, c.context.authCookies.accountData.name);
	if (accountCookie) {
		const accountData = safeJSONParse(await symmetricDecodeJWT(accountCookie, c.context.secretConfig, "better-auth-account"));
		if (accountData) return accountData;
	}
	return null;
}
var getSessionQuerySchema = optional(object({
	/**
	* If cookie cache is enabled, it will disable the cache
	* and fetch the session from the database
	*/
	disableCookieCache: boolean$1().meta({ description: "Disable cookie cache and fetch session from database" }).optional(),
	disableRefresh: boolean$1().meta({ description: "Disable session refresh. Useful for checking session status, without updating the session" }).optional()
}));
function createCookieGetter(options) {
	const baseURLString = typeof options.baseURL === "string" ? options.baseURL : void 0;
	const dynamicProtocol = typeof options.baseURL === "object" && options.baseURL !== null ? options.baseURL.protocol : void 0;
	const secureCookiePrefix = (options.advanced?.useSecureCookies !== void 0 ? options.advanced?.useSecureCookies : dynamicProtocol === "https" ? true : dynamicProtocol === "http" ? false : baseURLString ? baseURLString.startsWith("https://") : isProduction) ? SECURE_COOKIE_PREFIX : "";
	const crossSubdomainEnabled = !!options.advanced?.crossSubDomainCookies?.enabled;
	const domain = crossSubdomainEnabled ? options.advanced?.crossSubDomainCookies?.domain || (baseURLString ? new URL(baseURLString).hostname : void 0) : void 0;
	if (crossSubdomainEnabled && !domain && !isDynamicBaseURLConfig(options.baseURL)) throw new BetterAuthError("baseURL is required when crossSubdomainCookies are enabled.");
	function createCookie(cookieName, overrideAttributes = {}) {
		const prefix = options.advanced?.cookiePrefix || "better-auth";
		const name = options.advanced?.cookies?.[cookieName]?.name || `${prefix}.${cookieName}`;
		const attributes = options.advanced?.cookies?.[cookieName]?.attributes ?? {};
		return {
			name: `${secureCookiePrefix}${name}`,
			attributes: {
				secure: !!secureCookiePrefix,
				sameSite: "lax",
				path: "/",
				httpOnly: true,
				...crossSubdomainEnabled ? { domain } : {},
				...options.advanced?.defaultCookieAttributes,
				...overrideAttributes,
				...attributes
			}
		};
	}
	return createCookie;
}
function getCookies(options) {
	const createCookie = createCookieGetter(options);
	const sessionToken = createCookie("session_token", { maxAge: options.session?.expiresIn || sec("7d") });
	const sessionData = createCookie("session_data", { maxAge: options.session?.cookieCache?.maxAge || 300 });
	const accountData = createCookie("account_data", { maxAge: options.session?.cookieCache?.maxAge || 300 });
	const dontRememberToken = createCookie("dont_remember");
	return {
		sessionToken: {
			name: sessionToken.name,
			attributes: sessionToken.attributes
		},
		/**
		* This cookie is used to store the session data in the cookie
		* This is useful for when you want to cache the session in the cookie
		*/
		sessionData: {
			name: sessionData.name,
			attributes: sessionData.attributes
		},
		dontRememberToken: {
			name: dontRememberToken.name,
			attributes: dontRememberToken.attributes
		},
		accountData: {
			name: accountData.name,
			attributes: accountData.attributes
		}
	};
}
async function setCookieCache(ctx, session, dontRememberMe) {
	if (!ctx.context.options.session?.cookieCache?.enabled) return;
	const filteredSession = filterOutputFields(session.session, ctx.context.options.session?.additionalFields);
	const filteredUser = parseUserOutput(ctx.context.options, session.user);
	const versionConfig = ctx.context.options.session?.cookieCache?.version;
	let version = "1";
	if (versionConfig) {
		if (typeof versionConfig === "string") version = versionConfig;
		else if (typeof versionConfig === "function") {
			const result = versionConfig(session.session, session.user);
			version = isPromise(result) ? await result : result;
		}
	}
	const sessionData = {
		session: filteredSession,
		user: filteredUser,
		updatedAt: Date.now(),
		version
	};
	const options = {
		...ctx.context.authCookies.sessionData.attributes,
		maxAge: dontRememberMe ? void 0 : ctx.context.authCookies.sessionData.attributes.maxAge
	};
	const expiresAtDate = getDate(options.maxAge || 60, "sec").getTime();
	const strategy = ctx.context.options.session?.cookieCache?.strategy || "compact";
	let data;
	if (strategy === "jwe") data = await symmetricEncodeJWT(sessionData, ctx.context.secretConfig, "better-auth-session", options.maxAge || 300);
	else if (strategy === "jwt") data = await signJWT(sessionData, ctx.context.secret, options.maxAge || 300);
	else data = base64Url.encode(JSON.stringify({
		session: sessionData,
		expiresAt: expiresAtDate,
		signature: await createHMAC("SHA-256", "base64urlnopad").sign(ctx.context.secret, JSON.stringify({
			...sessionData,
			expiresAt: expiresAtDate
		}))
	}), { padding: false });
	const sessionStore = createSessionStore(ctx.context.authCookies.sessionData.name, options, ctx);
	sessionStore.setCookies(sessionStore.chunk(data, options));
	if (ctx.context.options.account?.storeAccountCookie && !hasPendingSetCookie(ctx, ctx.context.authCookies.accountData.name)) {
		const accountData = await getAccountCookie(ctx);
		if (accountData) if (!shouldBindAccountCookieToSessionUser(ctx.context.options) || accountData.userId === session.user.id) await setAccountCookie(ctx, accountData);
		else {
			expireCookie(ctx, ctx.context.authCookies.accountData);
			const accountStore = createAccountStore(ctx.context.authCookies.accountData.name, ctx.context.authCookies.accountData.attributes, ctx);
			accountStore.setCookies(accountStore.clean());
		}
	}
}
async function setSessionCookie(ctx, session, dontRememberMe, overrides) {
	const dontRememberMeCookie = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
	dontRememberMe = dontRememberMe !== void 0 ? dontRememberMe : !!dontRememberMeCookie;
	const options = ctx.context.authCookies.sessionToken.attributes;
	const maxAge = dontRememberMe ? void 0 : ctx.context.sessionConfig.expiresIn;
	await ctx.setSignedCookie(ctx.context.authCookies.sessionToken.name, session.session.token, ctx.context.secret, {
		...options,
		maxAge,
		...overrides
	});
	if (dontRememberMe) await ctx.setSignedCookie(ctx.context.authCookies.dontRememberToken.name, "true", ctx.context.secret, ctx.context.authCookies.dontRememberToken.attributes);
	await setCookieCache(ctx, session, dontRememberMe);
	ctx.context.setNewSession(session);
}
/**
* Remove any prior `Set-Cookie` entries on the current response whose cookie
* name matches `cookieName` or any chunked variant (`${cookieName}.0`, etc.).
*
* Prevents a valid cookie value from leaking on the wire when the same cookie
* is set and then expired within a single request (e.g. `/sign-in/email`
* writes credential session cookies and the 2FA after-hook expires them).
* Browsers honor the expiring entry, but anything reading the raw response
* headers — proxy/LB logs, server-side SDK consumers, observability tools —
* sees the earlier valid value and could replay it (bypassing the 2FA gate
* when the cookie cache is enabled).
*
* Scrubs both the local middleware scope's `responseHeaders` and the outer
* endpoint scope's `ctx.context.responseHeaders`, because plugin after-hooks
* run in a fresh local scope while accumulated response headers live on the
* outer one. `scoped.context` is required by {@link GenericEndpointContext}
* but unit-test mocks pass a minimal object via `as any`, so we use optional
* chaining defensively. The `Set` collapses the case where both scopes
* reference the same `Headers`.
*/
function removeSetCookieEntries(ctx, cookieName) {
	const scoped = ctx;
	const targets = /* @__PURE__ */ new Set();
	if (scoped.responseHeaders) targets.add(scoped.responseHeaders);
	if (scoped.context?.responseHeaders) targets.add(scoped.context.responseHeaders);
	const exact = `${cookieName}=`;
	const chunk = `${cookieName}.`;
	for (const headers of targets) {
		const existing = typeof headers.getSetCookie === "function" ? headers.getSetCookie() : splitSetCookieHeader(headers.get("set-cookie") || "");
		if (!existing.length) continue;
		const survivors = existing.filter((entry) => !entry.startsWith(exact) && !entry.startsWith(chunk));
		if (survivors.length === existing.length) continue;
		headers.delete("set-cookie");
		for (const entry of survivors) headers.append("set-cookie", entry);
	}
}
/**
* Whether the response already has a pending `Set-Cookie` for `cookieName`
* or a chunked variant.
*/
function hasPendingSetCookie(ctx, cookieName) {
	const scoped = ctx;
	const targets = /* @__PURE__ */ new Set();
	if (scoped.responseHeaders) targets.add(scoped.responseHeaders);
	if (scoped.context?.responseHeaders) targets.add(scoped.context.responseHeaders);
	const exact = `${cookieName}=`;
	const chunk = `${cookieName}.`;
	for (const headers of targets) if ((typeof headers.getSetCookie === "function" ? headers.getSetCookie() : splitSetCookieHeader(headers.get("set-cookie") || "")).some((entry) => entry.startsWith(exact) || entry.startsWith(chunk))) return true;
	return false;
}
/**
* Expires a cookie by setting `maxAge: 0` while preserving its attributes
*/
function expireCookie(ctx, cookie) {
	removeSetCookieEntries(ctx, cookie.name);
	ctx.setCookie(cookie.name, "", {
		...cookie.attributes,
		maxAge: 0
	});
}
function deleteSessionCookie(ctx, skipDontRememberMe) {
	expireCookie(ctx, ctx.context.authCookies.sessionToken);
	expireCookie(ctx, ctx.context.authCookies.sessionData);
	if (ctx.context.options.account?.storeAccountCookie) {
		expireCookie(ctx, ctx.context.authCookies.accountData);
		const accountStore = createAccountStore(ctx.context.authCookies.accountData.name, ctx.context.authCookies.accountData.attributes, ctx);
		const cleanCookies = accountStore.clean();
		accountStore.setCookies(cleanCookies);
	}
	if (ctx.context.oauthConfig.storeStateStrategy === "cookie") expireCookie(ctx, ctx.context.createAuthCookie("oauth_state"));
	const sessionStore = createSessionStore(ctx.context.authCookies.sessionData.name, ctx.context.authCookies.sessionData.attributes, ctx);
	const cleanCookies = sessionStore.clean();
	sessionStore.setCookies(cleanCookies);
	if (!skipDontRememberMe) expireCookie(ctx, ctx.context.authCookies.dontRememberToken);
}
var stateDataSchema = looseObject({
	callbackURL: string(),
	codeVerifier: string(),
	errorURL: string().optional(),
	newUserURL: string().optional(),
	expiresAt: number(),
	/**
	* CSRF nonce returned to the OAuth provider. When using cookie state storage,
	* this must match the callback `state` query parameter.
	*/
	oauthState: string().optional(),
	link: object({
		email: string(),
		userId: string$1()
	}).optional(),
	requestSignUp: boolean().optional()
});
new Set(Object.keys(stateDataSchema.shape));
var StateError = class extends BetterAuthError {
	code;
	details;
	/**
	* The per-flow `errorCallbackURL` recovered from the parsed state, when the
	* failure happened after the state was successfully parsed (for example a
	* nonce or state-cookie mismatch). It was origin-validated at sign-in, so
	* the callback can safely redirect there instead of the default error page.
	* Absent when the state could not be parsed at all.
	*/
	errorURL;
	constructor(message, options) {
		super(message, options);
		this.code = options.code;
		this.details = options.details;
		this.errorURL = options.errorURL;
	}
};
async function generateGenericState(c, stateData, settings) {
	const state = generateRandomString(32);
	if (c.context.oauthConfig.storeStateStrategy === "cookie") {
		const payload = {
			...stateData,
			oauthState: state
		};
		const encryptedData = await symmetricEncrypt({
			key: c.context.secretConfig,
			data: JSON.stringify(payload)
		});
		const stateCookie = c.context.createAuthCookie(settings?.cookieName ?? "oauth_state", { maxAge: 600 });
		c.setCookie(stateCookie.name, encryptedData, stateCookie.attributes);
		return {
			state,
			codeVerifier: stateData.codeVerifier
		};
	}
	const stateCookie = c.context.createAuthCookie(settings?.cookieName ?? "state", { maxAge: 300 });
	await c.setSignedCookie(stateCookie.name, state, c.context.secret, stateCookie.attributes);
	const expiresAt = /* @__PURE__ */ new Date();
	expiresAt.setMinutes(expiresAt.getMinutes() + 10);
	if (!await c.context.internalAdapter.createVerificationValue({
		value: JSON.stringify({
			...stateData,
			oauthState: state
		}),
		identifier: state,
		expiresAt
	})) throw new StateError("Unable to create verification. Make sure the database adapter is properly working and there is a verification table in the database", { code: "state_generation_error" });
	return {
		state,
		codeVerifier: stateData.codeVerifier
	};
}
async function parseGenericState(c, state, settings) {
	if (!state) throw new StateError("State not found in OAuth callback", { code: "state_not_found" });
	const storeStateStrategy = c.context.oauthConfig.storeStateStrategy;
	let parsedData;
	if (storeStateStrategy === "cookie") {
		const stateCookie = c.context.createAuthCookie(settings?.cookieName ?? "oauth_state");
		const encryptedData = c.getCookie(stateCookie.name);
		if (!encryptedData) throw new StateError("State mismatch: auth state cookie not found", {
			code: "state_mismatch",
			details: { state }
		});
		try {
			const decryptedData = await symmetricDecrypt({
				key: c.context.secretConfig,
				data: encryptedData
			});
			parsedData = stateDataSchema.parse(JSON.parse(decryptedData));
		} catch (error) {
			throw new StateError("State invalid: Failed to decrypt or parse auth state", {
				code: "state_invalid",
				details: { state },
				cause: error
			});
		}
		if (!parsedData.oauthState || parsedData.oauthState !== state) throw new StateError("State mismatch: OAuth state parameter does not match stored state", {
			code: "state_security_mismatch",
			details: { state },
			errorURL: parsedData.errorURL
		});
		expireCookie(c, stateCookie);
	} else {
		const data = await c.context.internalAdapter.findVerificationValue(state);
		if (!data) throw new StateError("State mismatch: verification not found", {
			code: "state_mismatch",
			details: { state }
		});
		parsedData = stateDataSchema.parse(JSON.parse(data.value));
		if (parsedData.oauthState !== void 0 && parsedData.oauthState !== state) throw new StateError("State mismatch: OAuth state parameter does not match stored state", {
			code: "state_security_mismatch",
			details: { state },
			errorURL: parsedData.errorURL
		});
		const stateCookie = c.context.createAuthCookie(settings?.cookieName ?? "state");
		const stateCookieValue = await c.getSignedCookie(stateCookie.name, c.context.secret);
		if (!(settings?.skipStateCookieCheck ?? c.context.oauthConfig.skipStateCookieCheck) && (!stateCookieValue || stateCookieValue !== state)) throw new StateError("State mismatch: State not persisted correctly", {
			code: "state_security_mismatch",
			details: { state },
			errorURL: parsedData.errorURL
		});
		expireCookie(c, stateCookie);
		await c.context.internalAdapter.deleteVerificationByIdentifier(state);
	}
	if (parsedData.expiresAt < Date.now()) throw new StateError("Invalid state: request expired", {
		code: "state_mismatch",
		details: { expiresAt: parsedData.expiresAt },
		errorURL: parsedData.errorURL
	});
	return parsedData;
}
var HANDLING_DOCS_URL = "https://www.better-auth.com/docs/concepts/oauth#handling-providers-without-email";
/**
* Redirect the user to the OAuth error page with a machine-readable `error`
* code (and optional `error_description`).
*
* Every OAuth callback path routes its failures through this helper so the
* query parameter name, the `?`/`&` separator, and URL encoding are decided in
* one place. The error page reads the `error` query parameter, so callers must
* never hand-build the redirect with a different parameter name.
*/
function redirectOnError(ctx, errorURL, error, description) {
	const params = new URLSearchParams({ error });
	if (description) params.set("error_description", description);
	const sep = errorURL.includes("?") ? "&" : "?";
	throw ctx.redirect(`${errorURL}${sep}${params.toString()}`);
}
/**
* Build the logger message shown when an OAuth provider does not return an
* email address. Kept in one place so every rejection site points users at
* the same workaround docs.
*/
function missingEmailLogMessage(providerId, options) {
	return `${options?.source === "generic" ? `Generic OAuth provider "${providerId}"` : `Provider "${providerId}"`} did not return an email${options?.source === "id_token" ? " in the id token" : ""}. Either request the provider's email scope, or synthesize one via \`mapProfileToUser\`. See ${HANDLING_DOCS_URL}`;
}
var { get: getOAuthState, set: setOAuthState } = defineRequestState(() => null);
async function generateState(c, link, additionalData) {
	const callbackURL = c.body?.callbackURL || c.context.options.baseURL;
	if (!callbackURL) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.CALLBACK_URL_REQUIRED);
	const codeVerifier = generateRandomString(128);
	const stateData = {
		...additionalData ? additionalData : {},
		callbackURL,
		codeVerifier,
		errorURL: c.body?.errorCallbackURL,
		newUserURL: c.body?.newUserCallbackURL,
		link,
		expiresAt: Date.now() + 6e5,
		requestSignUp: c.body?.requestSignUp
	};
	await setOAuthState(stateData);
	try {
		return generateGenericState(c, stateData);
	} catch (error) {
		c.context.logger.error("Failed to create verification", error);
		throw new APIError("INTERNAL_SERVER_ERROR", {
			message: "Unable to create verification",
			cause: error
		});
	}
}
async function parseState(c) {
	const state = c.query.state || c.body?.state;
	const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
	let parsedData;
	try {
		parsedData = await parseGenericState(c, state);
	} catch (error) {
		c.context.logger.error("Failed to parse state", error);
		let code = "internal_server_error";
		let redirectErrorURL = errorURL;
		if (error instanceof StateError) {
			code = error.code === "state_security_mismatch" ? "state_mismatch" : error.code;
			redirectErrorURL = error.errorURL ?? errorURL;
		}
		redirectOnError(c, redirectErrorURL, code);
	}
	if (!parsedData.errorURL) parsedData.errorURL = errorURL;
	if (parsedData) await setOAuthState(parsedData);
	return parsedData;
}
var HIDE_METADATA = { scope: "server" };
/**
* Matches the given url against an origin or origin pattern
* See "options.trustedOrigins" for details of supported patterns
*
* @param url The url to test
* @param pattern The origin pattern
* @param [settings] Specify supported pattern matching settings
* @returns {boolean} true if the URL matches the origin pattern, false otherwise.
*/
var matchesOriginPattern = (url, pattern, settings) => {
	if (url.startsWith("/")) {
		if (settings?.allowRelativePaths) return url.startsWith("/") && /^\/(?!\/|\\|%2f|%5c)[\w\-.\+/@]*(?:\?[\w\-.\+/=&%@]*)?$/.test(url);
		return false;
	}
	if (pattern.includes("*") || pattern.includes("?")) {
		if (pattern.includes("://")) return wildcardMatch(pattern)(getOrigin(url) || url);
		const host = getHost(url);
		if (!host) return false;
		return wildcardMatch(pattern)(host);
	}
	const protocol = getProtocol(url);
	return protocol === "http:" || protocol === "https:" || !protocol ? pattern === getOrigin(url) : url.startsWith(pattern);
};
/**
* Checks if CSRF should be skipped for backward compatibility.
* Previously, disableOriginCheck also disabled CSRF checks.
* This maintains that behavior when disableCSRFCheck isn't explicitly set.
* Only triggers for skipOriginCheck === true, not for path arrays.
*/
function shouldSkipCSRFForBackwardCompat(ctx) {
	return ctx.context.skipOriginCheck === true && ctx.context.options.advanced?.disableCSRFCheck === void 0;
}
/**
* Checks if the origin check should be skipped for the current request.
* Handles both boolean (skip all) and array (skip specific paths) configurations.
*/
function shouldSkipOriginCheck(ctx) {
	const skipOriginCheck = ctx.context.skipOriginCheck;
	if (skipOriginCheck === true) return true;
	if (Array.isArray(skipOriginCheck) && ctx.request) try {
		const basePath = new URL(ctx.context.baseURL).pathname;
		const currentPath = normalizePathname(ctx.request.url, basePath);
		return skipOriginCheck.some((skipPath) => {
			const normalizedSkipPath = skipPath.replace(/\/+$/, "");
			return currentPath === normalizedSkipPath || currentPath.startsWith(`${normalizedSkipPath}/`);
		});
	} catch {}
	return false;
}
/**
* Logs deprecation warning for users relying on coupled behavior.
* Only logs if user explicitly set disableOriginCheck (not test environment default).
*/
var logBackwardCompatWarning = deprecate(function logBackwardCompatWarning() {}, "disableOriginCheck: true currently also disables CSRF checks. In a future version, disableOriginCheck will ONLY disable URL validation. To keep CSRF disabled, add disableCSRFCheck: true to your config.");
/**
* A middleware to validate callbackURL and origin against trustedOrigins.
* Also handles CSRF protection using Fetch Metadata for first-login scenarios.
*/
var originCheckMiddleware = createAuthMiddleware(async (ctx) => {
	if (ctx.request?.method === "GET" || ctx.request?.method === "OPTIONS" || ctx.request?.method === "HEAD" || !ctx.request) return;
	await validateOrigin(ctx);
	if (shouldSkipOriginCheck(ctx)) return;
	const { body, query } = ctx;
	const callbackURL = body?.callbackURL || query?.callbackURL;
	const redirectURL = body?.redirectTo;
	const errorCallbackURL = body?.errorCallbackURL;
	const newUserCallbackURL = body?.newUserCallbackURL;
	const validateURL = (url, label) => {
		if (!url) return;
		if (typeof url !== "string") throw APIError.fromStatus("BAD_REQUEST", { message: `Invalid ${label}: expected a string` });
		if (!ctx.context.isTrustedOrigin(url, { allowRelativePaths: label !== "origin" })) {
			ctx.context.logger.error(`Invalid ${label}: ${url}`);
			ctx.context.logger.info(`If it's a valid URL, please add ${url} to trustedOrigins in your auth config\n`, `Current list of trustedOrigins: ${ctx.context.trustedOrigins}`);
			if (label === "origin") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ORIGIN);
			if (label === "callbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_CALLBACK_URL);
			if (label === "redirectURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_REDIRECT_URL);
			if (label === "errorCallbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ERROR_CALLBACK_URL);
			if (label === "newUserCallbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_NEW_USER_CALLBACK_URL);
			throw APIError.fromStatus("FORBIDDEN", { message: `Invalid ${label}` });
		}
	};
	callbackURL && validateURL(callbackURL, "callbackURL");
	redirectURL && validateURL(redirectURL, "redirectURL");
	errorCallbackURL && validateURL(errorCallbackURL, "errorCallbackURL");
	newUserCallbackURL && validateURL(newUserCallbackURL, "newUserCallbackURL");
});
var originCheck = (getValue) => createAuthMiddleware(async (ctx) => {
	if (!ctx.request) return;
	if (shouldSkipOriginCheck(ctx)) return;
	const callbackURL = getValue(ctx);
	const validateURL = (url, label) => {
		if (!url) return;
		if (!ctx.context.isTrustedOrigin(url, { allowRelativePaths: label !== "origin" })) {
			ctx.context.logger.error(`Invalid ${label}: ${url}`);
			ctx.context.logger.info(`If it's a valid URL, please add ${url} to trustedOrigins in your auth config\n`, `Current list of trustedOrigins: ${ctx.context.trustedOrigins}`);
			if (label === "origin") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ORIGIN);
			if (label === "callbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_CALLBACK_URL);
			if (label === "redirectURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_REDIRECT_URL);
			if (label === "errorCallbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ERROR_CALLBACK_URL);
			if (label === "newUserCallbackURL") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_NEW_USER_CALLBACK_URL);
			throw APIError.fromStatus("FORBIDDEN", { message: `Invalid ${label}` });
		}
	};
	const callbacks = Array.isArray(callbackURL) ? callbackURL : [callbackURL];
	for (const url of callbacks) validateURL(url, "callbackURL");
});
/**
* Validates origin header against trusted origins.
* @param ctx - The endpoint context
* @param forceValidate - If true, always validate origin regardless of cookies/skip flags
*/
async function validateOrigin(ctx, forceValidate = false) {
	const headers = ctx.request?.headers;
	if (!headers || !ctx.request) return;
	const originHeader = headers.get("origin") || headers.get("referer") || "";
	const useCookies = headers.has("cookie");
	if (ctx.context.skipCSRFCheck) return;
	if (shouldSkipCSRFForBackwardCompat(ctx)) {
		ctx.context.options.advanced?.disableOriginCheck === true && logBackwardCompatWarning();
		return;
	}
	if (shouldSkipOriginCheck(ctx)) return;
	if (!(forceValidate || useCookies)) return;
	if (!originHeader || originHeader === "null") throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.MISSING_OR_NULL_ORIGIN);
	const trustedOrigins = Array.isArray(ctx.context.options.trustedOrigins) ? ctx.context.trustedOrigins : [...ctx.context.trustedOrigins, ...(await ctx.context.options.trustedOrigins?.(ctx.request))?.filter((v) => Boolean(v)) || []];
	if (!trustedOrigins.some((origin) => matchesOriginPattern(originHeader, origin))) {
		ctx.context.logger.error(`Invalid origin: ${originHeader}`);
		ctx.context.logger.info(`If it's a valid URL, please add ${originHeader} to trustedOrigins in your auth config\n`, `Current list of trustedOrigins: ${trustedOrigins}`);
		throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.INVALID_ORIGIN);
	}
}
/**
* Middleware for CSRF protection using Fetch Metadata headers.
* This prevents cross-site navigation login attacks while supporting progressive enhancement.
*/
var formCsrfMiddleware = createAuthMiddleware(async (ctx) => {
	if (!ctx.request) return;
	await validateFormCsrf(ctx);
});
/**
* Validates CSRF protection for first-login scenarios using Fetch Metadata headers.
* This prevents cross-site form submission attacks while supporting progressive enhancement.
*/
async function validateFormCsrf(ctx) {
	const req = ctx.request;
	if (!req) return;
	if (ctx.context.skipCSRFCheck) return;
	if (shouldSkipCSRFForBackwardCompat(ctx)) return;
	const headers = req.headers;
	if (headers.has("cookie")) return await validateOrigin(ctx);
	const site = headers.get("Sec-Fetch-Site");
	const mode = headers.get("Sec-Fetch-Mode");
	const dest = headers.get("Sec-Fetch-Dest");
	if (Boolean(site && site.trim() || mode && mode.trim() || dest && dest.trim())) {
		if (site === "cross-site" && mode === "navigate") {
			ctx.context.logger.error("Blocked cross-site navigation login attempt (CSRF protection)", {
				secFetchSite: site,
				secFetchMode: mode,
				secFetchDest: dest
			});
			throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.CROSS_SITE_NAVIGATION_LOGIN_BLOCKED);
		}
		return await validateOrigin(ctx, true);
	}
	if (headers.get("origin") || headers.get("referer")) return await validateOrigin(ctx, true);
}
var memory = /* @__PURE__ */ new Map();
var MEMORY_STORE_MAX_ENTRIES = 1e5;
function pruneMemoryStore() {
	const now = Date.now();
	for (const [key, entry] of memory) if (now >= entry.expiresAt) memory.delete(key);
	if (memory.size <= MEMORY_STORE_MAX_ENTRIES) return;
	const overflow = memory.size - MEMORY_STORE_MAX_ENTRIES;
	let removed = 0;
	for (const key of memory.keys()) {
		memory.delete(key);
		if (++removed >= overflow) break;
	}
}
/**
* Decide an atomic rate-limit step against an in-memory `RateLimit` snapshot
* for the rolling `window` (seconds) and `max`. Shared by the memory backend
* (read-decide-write is atomic under single-threaded JS) and as the fallback
* for storages lacking an atomic primitive.
*/
function decideConsume(data, rule, now) {
	const windowInMs = rule.window * 1e3;
	if (!data) return {
		next: {
			key: "",
			count: 1,
			lastRequest: now
		},
		update: false,
		allowed: true,
		retryAfter: null
	};
	if (now - data.lastRequest > windowInMs) return {
		next: {
			...data,
			count: 1,
			lastRequest: now
		},
		update: true,
		allowed: true,
		retryAfter: null
	};
	if (data.count >= rule.max) return {
		next: data,
		update: true,
		allowed: false,
		retryAfter: getRetryAfter(data.lastRequest, rule.window)
	};
	return {
		next: {
			...data,
			count: data.count + 1,
			lastRequest: now
		},
		update: true,
		allowed: true,
		retryAfter: null
	};
}
function rateLimitResponse(retryAfter) {
	return new Response(JSON.stringify({ message: "Too many requests. Please try again later." }), {
		status: 429,
		statusText: "Too Many Requests",
		headers: { "X-Retry-After": retryAfter.toString() }
	});
}
function getRetryAfter(lastRequest, window) {
	const now = Date.now();
	const windowInMs = window * 1e3;
	return Math.ceil((lastRequest + windowInMs - now) / 1e3);
}
function createDatabaseStorageWrapper(ctx) {
	const model = "rateLimit";
	const db = ctx.adapter;
	const readRow = async (key) => {
		const data = (await db.findMany({
			model,
			where: [{
				field: "key",
				value: key
			}]
		}))[0];
		if (typeof data?.lastRequest === "bigint") data.lastRequest = Number(data.lastRequest);
		return data;
	};
	const consume = async (key, rule) => {
		const windowInMs = rule.window * 1e3;
		const data = await readRow(key);
		const now = Date.now();
		if (!data) try {
			await db.create({
				model,
				data: {
					key,
					count: 1,
					lastRequest: now
				}
			});
			return {
				allowed: true,
				retryAfter: null
			};
		} catch (error) {
			if (!await readRow(key)) throw error;
			return consume(key, rule);
		}
		if (now - data.lastRequest > windowInMs) {
			if (await db.incrementOne({
				model,
				where: [{
					field: "key",
					value: key
				}, {
					field: "lastRequest",
					operator: "lte",
					value: data.lastRequest
				}],
				increment: {},
				set: {
					count: 1,
					lastRequest: now
				}
			})) {
				await deleteExpiredRows(now);
				return {
					allowed: true,
					retryAfter: null
				};
			}
			return consume(key, rule);
		}
		const windowStart = now - windowInMs;
		if (await db.incrementOne({
			model,
			where: [
				{
					field: "key",
					value: key
				},
				{
					field: "lastRequest",
					operator: "gt",
					value: windowStart
				},
				{
					field: "count",
					operator: "lt",
					value: rule.max
				}
			],
			increment: { count: 1 },
			set: { lastRequest: now }
		})) return {
			allowed: true,
			retryAfter: null
		};
		const fresh = await readRow(key);
		if (!fresh) return consume(key, rule);
		if (now - fresh.lastRequest > windowInMs) return consume(key, rule);
		return {
			allowed: false,
			retryAfter: getRetryAfter(fresh.lastRequest, rule.window)
		};
	};
	const deleteExpiredRows = async (now) => {
		const cutoff = now - Math.max(ctx.rateLimit.window, ...getDefaultSpecialRules().map((r) => r.window)) * 1e3;
		await ctx.runInBackgroundOrAwait(db.deleteMany({
			model,
			where: [{
				field: "lastRequest",
				operator: "lt",
				value: cutoff
			}]
		}).then(() => void 0).catch((e) => ctx.logger.error("Error pruning rate limit rows", e)));
	};
	return {
		get: readRow,
		set: async (key, value, _update) => {
			try {
				if (_update) await db.updateMany({
					model,
					where: [{
						field: "key",
						value: key
					}],
					update: {
						count: value.count,
						lastRequest: value.lastRequest
					}
				});
				else await db.create({
					model,
					data: {
						key,
						count: value.count,
						lastRequest: value.lastRequest
					}
				});
			} catch (e) {
				ctx.logger.error("Error setting rate limit", e);
			}
		},
		consume
	};
}
function getRateLimitStorage(ctx, rateLimitSettings) {
	if (ctx.options.rateLimit?.customStorage) return ctx.options.rateLimit.customStorage;
	const storage = ctx.rateLimit.storage;
	if (storage === "secondary-storage") {
		const ttlFor = (window) => window ?? ctx.options.rateLimit?.window ?? 10;
		return {
			get: async (key) => {
				const data = await ctx.options.secondaryStorage?.get(key);
				return data ? safeJSONParse(data) : null;
			},
			set: async (key, value, _update) => {
				await ctx.options.secondaryStorage?.set?.(key, JSON.stringify(value), ttlFor(rateLimitSettings.window));
			},
			consume: ctx.options.secondaryStorage?.increment ? async (key, rule) => {
				if (await ctx.options.secondaryStorage.increment(key, ttlFor(rule.window)) <= rule.max) return {
					allowed: true,
					retryAfter: null
				};
				return {
					allowed: false,
					retryAfter: rule.window
				};
			} : void 0
		};
	} else if (storage === "memory") {
		const ttlFor = (window) => window ?? ctx.options.rateLimit?.window ?? 10;
		return {
			async get(key) {
				const entry = memory.get(key);
				if (!entry) return null;
				if (Date.now() >= entry.expiresAt) {
					memory.delete(key);
					return null;
				}
				return entry.data;
			},
			async set(key, value, _update) {
				const expiresAt = Date.now() + ttlFor(rateLimitSettings.window) * 1e3;
				memory.set(key, {
					data: value,
					expiresAt
				});
			},
			async consume(key, rule) {
				pruneMemoryStore();
				const now = Date.now();
				const entry = memory.get(key);
				const decision = decideConsume(entry && now < entry.expiresAt ? entry.data : void 0, rule, now);
				if (decision.allowed) memory.set(key, {
					data: {
						...decision.next,
						key
					},
					expiresAt: now + ttlFor(rule.window) * 1e3
				});
				return {
					allowed: decision.allowed,
					retryAfter: decision.retryAfter
				};
			}
		};
	}
	return createDatabaseStorageWrapper(ctx);
}
var ipWarningLogged = false;
var NO_TRUSTED_IP_KEY = "no-trusted-ip";
async function resolveRateLimitConfig(req, ctx) {
	const basePath = new URL(ctx.baseURL).pathname;
	const path = normalizePathname(req.url, basePath);
	let currentWindow = ctx.rateLimit.window;
	let currentMax = ctx.rateLimit.max;
	const ip = getIp(req, ctx.options);
	if (!ip && ctx.options.advanced?.ipAddress?.disableIpTracking) return null;
	if (!ip && !ipWarningLogged) {
		ctx.logger.warn("Rate limiting could not determine a client IP and is falling back to a single shared per-path bucket. Ensure your runtime forwards a trusted client IP header, then set `advanced.ipAddress.ipAddressHeaders` or `advanced.ipAddress.trustedProxies` so the address can be resolved.");
		ipWarningLogged = true;
	}
	const key = createRateLimitKey(ip ?? NO_TRUSTED_IP_KEY, path);
	const specialRule = getDefaultSpecialRules().find((rule) => rule.pathMatcher(path));
	if (specialRule) {
		currentWindow = specialRule.window;
		currentMax = specialRule.max;
	}
	for (const plugin of ctx.options.plugins || []) if (plugin.rateLimit) {
		const matchedRule = plugin.rateLimit.find((rule) => rule.pathMatcher(path));
		if (matchedRule) {
			currentWindow = matchedRule.window;
			currentMax = matchedRule.max;
			break;
		}
	}
	if (ctx.rateLimit.customRules) {
		const _path = Object.keys(ctx.rateLimit.customRules).find((p) => {
			if (p.includes("*")) return wildcardMatch(p)(path);
			return p === path;
		});
		if (_path) {
			const customRule = ctx.rateLimit.customRules[_path];
			const resolved = typeof customRule === "function" ? await customRule(req, {
				window: currentWindow,
				max: currentMax
			}) : customRule;
			if (resolved) {
				currentWindow = resolved.window;
				currentMax = resolved.max;
			}
			if (resolved === false) return null;
		}
	}
	return {
		key,
		currentWindow,
		currentMax
	};
}
var legacyFallbackWarningLogged = false;
/**
* Decides the rate limit for the request in a single atomic step. The whole
* check-and-increment happens here in the request phase; there is no separate
* response-phase write-back, so concurrent requests cannot all pass a stale
* read before any increment lands.
*/
async function onRequestRateLimit(req, ctx) {
	if (!ctx.rateLimit.enabled) return;
	const config = await resolveRateLimitConfig(req, ctx);
	if (!config) return;
	const { key, currentWindow, currentMax } = config;
	const storage = getRateLimitStorage(ctx, { window: currentWindow });
	const rule = {
		window: currentWindow,
		max: currentMax
	};
	if (storage.consume) {
		const { allowed, retryAfter } = await storage.consume(key, rule);
		if (!allowed) return rateLimitResponse(retryAfter ?? currentWindow);
		return;
	}
	return legacyConsume(ctx, storage, key, rule);
}
/**
* Non-atomic check-then-increment for storages that do not implement `consume`
* (custom storages, or secondary storages without `increment`). Under
* concurrency this is best-effort: simultaneous requests can each pass the
* check before either write lands.
*
* FIXME(rate-limit-consume-required): remove on `next` once `consume` is the
* sole required member of the storage contract.
*/
async function legacyConsume(ctx, storage, key, rule) {
	if (!legacyFallbackWarningLogged) {
		ctx.logger.warn("Rate limiting is best-effort: the configured storage has no atomic `consume`, so concurrent requests may bypass the limit. Provide a storage that implements `consume` for strict enforcement.");
		legacyFallbackWarningLogged = true;
	}
	const decision = decideConsume(await storage.get(key), rule, Date.now());
	if (!decision.allowed) return rateLimitResponse(decision.retryAfter ?? rule.window);
	await storage.set(key, {
		...decision.next,
		key
	}, decision.update);
}
function getDefaultSpecialRules() {
	return [{
		pathMatcher(path) {
			return path.startsWith("/sign-in") || path.startsWith("/sign-up") || path.startsWith("/change-password") || path.startsWith("/change-email");
		},
		window: 10,
		max: 3
	}, {
		pathMatcher(path) {
			return path === "/request-password-reset" || path === "/send-verification-email" || path.startsWith("/forget-password") || path === "/email-otp/send-verification-otp" || path === "/email-otp/request-password-reset";
		},
		window: 60,
		max: 3
	}];
}
/**
* State for skipping session refresh
*
* In some cases, such as when using server-side rendering (SSR) or when dealing with
* certain types of requests, it may be necessary to skip session refresh to prevent
* potential inconsistencies between the session data in the database and the session
* data stored in cookies.
*/
var { get: getShouldSkipSessionRefresh, set: setShouldSkipSessionRefresh } = defineRequestState(() => false);
var getSession = () => createAuthEndpoint("/get-session", {
	method: ["GET", "POST"],
	operationId: "getSession",
	query: getSessionQuerySchema,
	requireHeaders: true,
	metadata: { openapi: {
		operationId: "getSession",
		description: "Get the current session",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: ["object", "null"],
				properties: {
					session: { $ref: "#/components/schemas/Session" },
					user: { $ref: "#/components/schemas/User" }
				},
				required: ["session", "user"]
			} } }
		} }
	} }
}, async (ctx) => {
	ctx.setHeader("cache-control", "no-store");
	ctx.setHeader("pragma", "no-cache");
	const deferSessionRefresh = ctx.context.options.session?.deferSessionRefresh;
	const isPostRequest = ctx.method === "POST";
	if (isPostRequest && !deferSessionRefresh) throw APIError.from("METHOD_NOT_ALLOWED", BASE_ERROR_CODES.METHOD_NOT_ALLOWED_DEFER_SESSION_REQUIRED);
	try {
		const sessionCookieToken = await ctx.getSignedCookie(ctx.context.authCookies.sessionToken.name, ctx.context.secret);
		if (!sessionCookieToken) return null;
		const sessionDataCookie = getChunkedCookie(ctx, ctx.context.authCookies.sessionData.name);
		let sessionDataPayload = null;
		if (sessionDataCookie) {
			const strategy = ctx.context.options.session?.cookieCache?.strategy || "compact";
			if (strategy === "jwe") {
				const payload = await symmetricDecodeJWT(sessionDataCookie, ctx.context.secretConfig, "better-auth-session");
				if (payload && payload.session && payload.user) sessionDataPayload = {
					session: {
						session: payload.session,
						user: payload.user,
						updatedAt: payload.updatedAt,
						version: payload.version
					},
					expiresAt: payload.exp ? payload.exp * 1e3 : Date.now()
				};
				else expireCookie(ctx, ctx.context.authCookies.sessionData);
			} else if (strategy === "jwt") {
				const payload = await verifyJWT(sessionDataCookie, ctx.context.secret);
				if (payload && payload.session && payload.user) sessionDataPayload = {
					session: {
						session: payload.session,
						user: payload.user,
						updatedAt: payload.updatedAt,
						version: payload.version
					},
					expiresAt: payload.exp ? payload.exp * 1e3 : Date.now()
				};
				else expireCookie(ctx, ctx.context.authCookies.sessionData);
			} else {
				const parsed = safeJSONParse(binary.decode(base64Url.decode(sessionDataCookie)));
				if (parsed) if (await createHMAC("SHA-256", "base64urlnopad").verify(ctx.context.secret, JSON.stringify({
					...parsed.session,
					expiresAt: parsed.expiresAt
				}), parsed.signature)) sessionDataPayload = parsed;
				else expireCookie(ctx, ctx.context.authCookies.sessionData);
			}
		}
		const dontRememberMe = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
		/**
		* If session data is present in the cookie, check if it should be used or refreshed
		*/
		if (sessionDataPayload?.session && ctx.context.options.session?.cookieCache?.enabled && !ctx.query?.disableCookieCache) {
			const session = sessionDataPayload.session;
			const versionConfig = ctx.context.options.session?.cookieCache?.version;
			let expectedVersion = "1";
			if (versionConfig) {
				if (typeof versionConfig === "string") expectedVersion = versionConfig;
				else if (typeof versionConfig === "function") {
					const result = versionConfig(session.session, session.user);
					expectedVersion = result instanceof Promise ? await result : result;
				}
			}
			if ((session.version || "1") !== expectedVersion) expireCookie(ctx, ctx.context.authCookies.sessionData);
			else {
				const cachedSessionExpiresAt = new Date(session.session.expiresAt);
				if (sessionDataPayload.expiresAt < Date.now() || cachedSessionExpiresAt < /* @__PURE__ */ new Date()) expireCookie(ctx, ctx.context.authCookies.sessionData);
				else {
					const cookieRefreshCache = ctx.context.sessionConfig.cookieRefreshCache;
					if (cookieRefreshCache === false) {
						ctx.context.session = session;
						const parsedSession = parseSessionOutput(ctx.context.options, {
							...session.session,
							expiresAt: new Date(session.session.expiresAt),
							createdAt: new Date(session.session.createdAt),
							updatedAt: new Date(session.session.updatedAt)
						});
						const parsedUser = parseUserOutput(ctx.context.options, {
							...session.user,
							createdAt: new Date(session.user.createdAt),
							updatedAt: new Date(session.user.updatedAt)
						});
						return ctx.json({
							session: parsedSession,
							user: parsedUser
						});
					}
					const timeUntilExpiry = sessionDataPayload.expiresAt - Date.now();
					const updateAge = cookieRefreshCache.updateAge * 1e3;
					const shouldSkipSessionRefresh = await getShouldSkipSessionRefresh();
					if (timeUntilExpiry < updateAge && !shouldSkipSessionRefresh) {
						const refreshedSession = {
							session: { ...session.session },
							user: session.user,
							updatedAt: Date.now()
						};
						await setCookieCache(ctx, refreshedSession, false);
						const sessionTokenOptions = ctx.context.authCookies.sessionToken.attributes;
						const sessionTokenMaxAge = dontRememberMe ? void 0 : ctx.context.sessionConfig.expiresIn;
						await ctx.setSignedCookie(ctx.context.authCookies.sessionToken.name, session.session.token, ctx.context.secret, {
							...sessionTokenOptions,
							maxAge: sessionTokenMaxAge
						});
						const parsedRefreshedSession = parseSessionOutput(ctx.context.options, {
							...refreshedSession.session,
							expiresAt: new Date(refreshedSession.session.expiresAt),
							createdAt: new Date(refreshedSession.session.createdAt),
							updatedAt: new Date(refreshedSession.session.updatedAt)
						});
						const parsedRefreshedUser = parseUserOutput(ctx.context.options, {
							...refreshedSession.user,
							createdAt: new Date(refreshedSession.user.createdAt),
							updatedAt: new Date(refreshedSession.user.updatedAt)
						});
						ctx.context.session = {
							session: parsedRefreshedSession,
							user: parsedRefreshedUser
						};
						return ctx.json({
							session: parsedRefreshedSession,
							user: parsedRefreshedUser
						});
					}
					const parsedSession = parseSessionOutput(ctx.context.options, {
						...session.session,
						expiresAt: new Date(session.session.expiresAt),
						createdAt: new Date(session.session.createdAt),
						updatedAt: new Date(session.session.updatedAt)
					});
					const parsedUser = parseUserOutput(ctx.context.options, {
						...session.user,
						createdAt: new Date(session.user.createdAt),
						updatedAt: new Date(session.user.updatedAt)
					});
					ctx.context.session = {
						session: parsedSession,
						user: parsedUser
					};
					return ctx.json({
						session: parsedSession,
						user: parsedUser
					});
				}
			}
		}
		const session = await ctx.context.internalAdapter.findSession(sessionCookieToken);
		ctx.context.session = session;
		if (!session || session.session.expiresAt < /* @__PURE__ */ new Date()) {
			deleteSessionCookie(ctx);
			if (session) {
				/**
				* if session expired clean up the session
				* Only delete on POST when deferSessionRefresh is enabled
				*/
				if (!deferSessionRefresh || isPostRequest) await ctx.context.internalAdapter.deleteSession(session.session.token);
			}
			return ctx.json(null);
		}
		/**
		* We don't need to update the session if the user doesn't want to be remembered
		* or if the session refresh is disabled
		*/
		if (dontRememberMe || ctx.query?.disableRefresh) {
			const parsedSession = parseSessionOutput(ctx.context.options, session.session);
			const parsedUser = parseUserOutput(ctx.context.options, session.user);
			return ctx.json({
				session: parsedSession,
				user: parsedUser
			});
		}
		const expiresIn = ctx.context.sessionConfig.expiresIn;
		const updateAge = ctx.context.sessionConfig.updateAge;
		const shouldBeUpdated = session.session.expiresAt.valueOf() - expiresIn * 1e3 + updateAge * 1e3 <= Date.now();
		const disableRefresh = ctx.query?.disableRefresh || ctx.context.options.session?.disableSessionRefresh;
		const shouldSkipSessionRefresh = await getShouldSkipSessionRefresh();
		const needsRefresh = shouldBeUpdated && !disableRefresh && !shouldSkipSessionRefresh;
		/**
		* When deferSessionRefresh is enabled and this is a GET request,
		* return the session without performing writes, but include needsRefresh flag
		*/
		if (deferSessionRefresh && !isPostRequest) {
			await setCookieCache(ctx, session, !!dontRememberMe);
			const parsedSession = parseSessionOutput(ctx.context.options, session.session);
			const parsedUser = parseUserOutput(ctx.context.options, session.user);
			return ctx.json({
				session: parsedSession,
				user: parsedUser,
				needsRefresh
			});
		}
		if (needsRefresh) {
			const updatedSession = await ctx.context.internalAdapter.updateSession(session.session.token, {
				expiresAt: getDate(ctx.context.sessionConfig.expiresIn, "sec"),
				updatedAt: /* @__PURE__ */ new Date()
			});
			if (!updatedSession) {
				/**
				* Handle case where session update fails (e.g., concurrent deletion)
				*/
				deleteSessionCookie(ctx);
				throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_SESSION);
			}
			const maxAge = ctx.context.sessionConfig.expiresIn;
			await setSessionCookie(ctx, {
				session: updatedSession,
				user: session.user
			}, false, { maxAge });
			const parsedUpdatedSession = parseSessionOutput(ctx.context.options, updatedSession);
			const parsedUser = parseUserOutput(ctx.context.options, session.user);
			return ctx.json({
				session: parsedUpdatedSession,
				user: parsedUser
			});
		}
		await setCookieCache(ctx, session, !!dontRememberMe);
		const parsedSession = parseSessionOutput(ctx.context.options, session.session);
		const parsedUser = parseUserOutput(ctx.context.options, session.user);
		return ctx.json({
			session: parsedSession,
			user: parsedUser
		});
	} catch (error) {
		if (isAPIError(error)) throw error;
		ctx.context.logger.error("INTERNAL_SERVER_ERROR", error);
		throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_GET_SESSION);
	}
});
/**
* Whether the deployment keeps sessions in a durable server-side store
* (a database or secondary storage) rather than only in the signed cookie.
*
* Sensitive operations use this to decide whether the cookie cache is merely an
* optimization that must be bypassed for an authoritative read (`true`), or the
* only place the session lives and therefore the authority itself (`false`, for
* stateless / DB-less deployments). Pass the result as `disableCookieCache` so a
* revoked-but-cached session cannot authorize a sensitive action.
*/
var isStateful = (ctx) => hasServerSessionStore(ctx.context.options);
var getSessionFromCtx = async (ctx, config) => {
	if (ctx.context.session) return ctx.context.session;
	const session = await getSession()({
		...ctx,
		method: "GET",
		asResponse: false,
		headers: ctx.headers,
		returnHeaders: true,
		returnStatus: false,
		query: {
			...config,
			...ctx.query,
			disableCookieCache: config?.disableCookieCache || ctx.query?.disableCookieCache,
			disableRefresh: config?.disableRefresh || ctx.query?.disableRefresh
		}
	}).catch(() => {
		return null;
	});
	if (!session) {
		ctx.context.session = null;
		return null;
	}
	if (session.headers) session.headers.forEach((value, key) => {
		const lowerKey = key.toLowerCase();
		if (lowerKey === "cache-control" || lowerKey === "pragma") return;
		if (lowerKey === "set-cookie") ctx.responseHeaders.append(key, value);
		else ctx.responseHeaders.set(key, value);
	});
	ctx.context.session = session.response;
	return session.response;
};
/**
* Reads the session from the source that can authorize sensitive work.
*
* Stateful deployments must re-read the server-side session store because an
* earlier hook may have populated `ctx.context.session` from cookie cache.
* Stateless deployments keep the signed cookie as the session record.
*/
var getAuthoritativeSessionFromCtx = async (ctx) => {
	if (!isStateful(ctx)) return getSessionFromCtx(ctx);
	ctx.context.session = null;
	return getSessionFromCtx(ctx, { disableCookieCache: true });
};
/**
* The middleware forces the endpoint to require a valid session.
*/
var sessionMiddleware = createAuthMiddleware(async (ctx) => {
	const session = await getSessionFromCtx(ctx);
	if (!session?.session) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	return { session };
});
/**
* This middleware forces the endpoint to require a valid authoritative session.
* This should be used for sensitive operations like password changes, account deletion, etc.
*/
var sensitiveSessionMiddleware = createAuthMiddleware(async (ctx) => {
	const session = await getAuthoritativeSessionFromCtx(ctx);
	if (!session?.session) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	return { session };
});
createAuthMiddleware(async (ctx) => {
	const session = await getSessionFromCtx(ctx);
	if (!session?.session && (ctx.request || ctx.headers)) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	return { session };
});
/**
* This middleware forces the endpoint to require a valid session,
* as well as making sure the session is fresh before proceeding.
*
* Session freshness check will be skipped if the session config's freshAge
* is set to 0
*/
var freshSessionMiddleware = createAuthMiddleware(async (ctx) => {
	const session = await getSessionFromCtx(ctx);
	if (!session?.session) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	if (ctx.context.sessionConfig.freshAge !== 0) {
		const createdAt = new Date(session.session.createdAt).getTime();
		const freshAge = ctx.context.sessionConfig.freshAge * 1e3;
		if (Date.now() - createdAt >= freshAge) throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.SESSION_NOT_FRESH);
	}
	return { session };
});
/**
* user active sessions list
*/
var listSessions = () => createAuthEndpoint("/list-sessions", {
	method: "GET",
	operationId: "listUserSessions",
	use: [freshSessionMiddleware],
	requireHeaders: true,
	metadata: { openapi: {
		operationId: "listUserSessions",
		description: "List all active sessions for the user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "array",
				items: { $ref: "#/components/schemas/Session" }
			} } }
		} }
	} }
}, async (ctx) => {
	try {
		const activeSessions = (await ctx.context.internalAdapter.listSessions(ctx.context.session.user.id, { onlyActiveSessions: true })).filter((session) => {
			return session.expiresAt > /* @__PURE__ */ new Date();
		});
		return ctx.json(activeSessions.map((session) => parseSessionOutput(ctx.context.options, session)));
	} catch (e) {
		ctx.context.logger.error(e);
		throw ctx.error("INTERNAL_SERVER_ERROR");
	}
});
/**
* revoke a single session
*/
var revokeSession = createAuthEndpoint("/revoke-session", {
	method: "POST",
	body: object({ token: string().meta({ description: "The token to revoke" }) }),
	use: [sensitiveSessionMiddleware],
	requireHeaders: true,
	metadata: { openapi: {
		description: "Revoke a single session",
		requestBody: { content: { "application/json": { schema: {
			type: "object",
			properties: { token: {
				type: "string",
				description: "The token to revoke"
			} },
			required: ["token"]
		} } } },
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: {
					type: "boolean",
					description: "Indicates if the session was revoked successfully"
				} },
				required: ["status"]
			} } }
		} }
	} }
}, async (ctx) => {
	const token = ctx.body.token;
	if ((await ctx.context.internalAdapter.findSession(token))?.session.userId === ctx.context.session.user.id) try {
		await ctx.context.internalAdapter.deleteSession(token);
	} catch (error) {
		ctx.context.logger.error(error && typeof error === "object" && "name" in error ? error.name : "", error);
		throw APIError.from("INTERNAL_SERVER_ERROR", {
			message: "Internal Server Error",
			code: "INTERNAL_SERVER_ERROR"
		});
	}
	return ctx.json({ status: true });
});
/**
* revoke all user sessions
*/
var revokeSessions = createAuthEndpoint("/revoke-sessions", {
	method: "POST",
	use: [sensitiveSessionMiddleware],
	requireHeaders: true,
	metadata: { openapi: {
		description: "Revoke all sessions for the user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: {
					type: "boolean",
					description: "Indicates if all sessions were revoked successfully"
				} },
				required: ["status"]
			} } }
		} }
	} }
}, async (ctx) => {
	try {
		await ctx.context.internalAdapter.deleteUserSessions(ctx.context.session.user.id);
	} catch (error) {
		ctx.context.logger.error(error && typeof error === "object" && "name" in error ? error.name : "", error);
		throw APIError.from("INTERNAL_SERVER_ERROR", {
			message: "Internal Server Error",
			code: "INTERNAL_SERVER_ERROR"
		});
	}
	return ctx.json({ status: true });
});
var revokeOtherSessions = createAuthEndpoint("/revoke-other-sessions", {
	method: "POST",
	requireHeaders: true,
	use: [sensitiveSessionMiddleware],
	metadata: { openapi: {
		description: "Revoke all other sessions for the user except the current one",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: {
					type: "boolean",
					description: "Indicates if all other sessions were revoked successfully"
				} },
				required: ["status"]
			} } }
		} }
	} }
}, async (ctx) => {
	const session = ctx.context.session;
	if (!session.user) throw APIError.from("UNAUTHORIZED", {
		message: "Unauthorized",
		code: "UNAUTHORIZED"
	});
	const otherSessions = (await ctx.context.internalAdapter.listSessions(session.user.id)).filter((session) => {
		return session.expiresAt > /* @__PURE__ */ new Date();
	}).filter((session) => session.token !== ctx.context.session.session.token);
	await Promise.all(otherSessions.map((session) => ctx.context.internalAdapter.deleteSession(session.token)));
	return ctx.json({ status: true });
});
var defaultKeyHasher = async (identifier) => {
	const hash = await createHash("SHA-256").digest(new TextEncoder().encode(identifier));
	return base64Url.encode(new Uint8Array(hash), { padding: false });
};
async function processIdentifier(identifier, option) {
	if (!option || option === "plain") return identifier;
	if (option === "hashed") return defaultKeyHasher(identifier);
	if (typeof option === "object" && "hash" in option) return option.hash(identifier);
	return identifier;
}
function getStorageOption(identifier, config) {
	if (!config) return;
	if (typeof config === "object" && "default" in config) {
		if (config.overrides) {
			for (const [prefix, option] of Object.entries(config.overrides)) if (identifier.startsWith(prefix)) return option;
		}
		return config.default;
	}
	return config;
}
function getWithHooks(adapter, ctx) {
	const withSpan = createWithSpan(ctx.options);
	const hooksEntries = ctx.hooks;
	async function createWithHooks(data, model, customCreateFn) {
		const context = await getCurrentAuthContext().catch(() => null);
		let actualData = data;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.create?.before;
			if (toRun) {
				const result = await withSpan(`db create.before ${model}`, {
					[ATTR_HOOK_TYPE]: "create.before",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(actualData, context));
				if (result === false) return null;
				if (typeof result === "object" && "data" in result) actualData = {
					...actualData,
					...result.data
				};
			}
		}
		let created = null;
		if (!customCreateFn || customCreateFn.executeMainFn) created = await (await getCurrentAdapter(adapter)).create({
			model,
			data: actualData,
			forceAllowId: true
		});
		if (customCreateFn?.fn) created = await customCreateFn.fn(created ?? actualData);
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.create?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db create.after ${model}`, {
					[ATTR_HOOK_TYPE]: "create.after",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(created, context));
			});
		}
		return created;
	}
	async function updateWithHooks(data, where, model, customUpdateFn) {
		const context = await getCurrentAuthContext().catch(() => null);
		let actualData = data;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.update?.before;
			if (toRun) {
				const result = await withSpan(`db update.before ${model}`, {
					[ATTR_HOOK_TYPE]: "update.before",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(data, context));
				if (result === false) return null;
				if (typeof result === "object" && "data" in result) actualData = {
					...actualData,
					...result.data
				};
			}
		}
		const customUpdated = customUpdateFn ? await customUpdateFn.fn(actualData) : null;
		const updated = !customUpdateFn || customUpdateFn.executeMainFn ? await (await getCurrentAdapter(adapter)).update({
			model,
			update: actualData,
			where
		}) : customUpdated;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.update?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db update.after ${model}`, {
					[ATTR_HOOK_TYPE]: "update.after",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(updated, context));
			});
		}
		return updated;
	}
	async function updateManyWithHooks(data, where, model, customUpdateFn) {
		const context = await getCurrentAuthContext().catch(() => null);
		let actualData = data;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.update?.before;
			if (toRun) {
				const result = await withSpan(`db updateMany.before ${model}`, {
					[ATTR_HOOK_TYPE]: "updateMany.before",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(data, context));
				if (result === false) return null;
				if (typeof result === "object" && "data" in result) actualData = {
					...actualData,
					...result.data
				};
			}
		}
		const customUpdated = customUpdateFn ? await customUpdateFn.fn(actualData) : null;
		const updated = !customUpdateFn || customUpdateFn.executeMainFn ? await (await getCurrentAdapter(adapter)).updateMany({
			model,
			update: actualData,
			where
		}) : customUpdated;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.update?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db updateMany.after ${model}`, {
					[ATTR_HOOK_TYPE]: "updateMany.after",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(updated, context));
			});
		}
		return updated;
	}
	async function deleteWithHooks(where, model, customDeleteFn) {
		const context = await getCurrentAuthContext().catch(() => null);
		let entityToDelete = null;
		try {
			entityToDelete = (await (await getCurrentAdapter(adapter)).findMany({
				model,
				where,
				limit: 1
			}))[0] || null;
		} catch {}
		if (entityToDelete) for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.delete?.before;
			if (toRun) {
				if (await withSpan(`db delete.before ${model}`, {
					["better_auth.hook.type"]: "delete.before",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					["better_auth.context"]: source
				}, () => toRun(entityToDelete, context)) === false) return null;
			}
		}
		const customDeleted = customDeleteFn ? await customDeleteFn.fn(where) : null;
		const deleted = (!customDeleteFn || customDeleteFn.executeMainFn) && entityToDelete ? await (await getCurrentAdapter(adapter)).delete({
			model,
			where
		}) : customDeleted;
		if (entityToDelete) for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.delete?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db delete.after ${model}`, {
					[ATTR_HOOK_TYPE]: "delete.after",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(entityToDelete, context));
			});
		}
		return deleted;
	}
	async function deleteManyWithHooks(where, model, customDeleteFn) {
		const context = await getCurrentAuthContext().catch(() => null);
		let entitiesToDelete = [];
		try {
			entitiesToDelete = await (await getCurrentAdapter(adapter)).findMany({
				model,
				where
			});
		} catch {}
		for (const entity of entitiesToDelete) for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.delete?.before;
			if (toRun) {
				if (await withSpan(`db delete.before ${model}`, {
					["better_auth.hook.type"]: "delete.before",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					["better_auth.context"]: source
				}, () => toRun(entity, context)) === false) return null;
			}
		}
		const customDeleted = customDeleteFn ? await customDeleteFn.fn(where) : null;
		const deleted = !customDeleteFn || customDeleteFn.executeMainFn ? await (await getCurrentAdapter(adapter)).deleteMany({
			model,
			where
		}) : customDeleted;
		for (const entity of entitiesToDelete) for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.delete?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db delete.after ${model}`, {
					[ATTR_HOOK_TYPE]: "delete.after",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(entity, context));
			});
		}
		return deleted;
	}
	/**
	* Wraps an atomic consume operation in the plugin `delete.before` and
	* `delete.after` hook lifecycle. The caller supplies a `consumeFn` that
	* performs the actual single-row delete-and-return (typically the
	* adapter's `consumeOne`). The first concurrent caller wins, subsequent
	* racers resolve to `null` without firing `delete.after` hooks.
	*
	* `preSnapshot` lets the caller hand in a row it already fetched so
	* `delete.before` hooks don't trigger a second read. Without it, the
	* helper falls back to a best-effort `findMany` against `hookWhere`.
	* The snapshot only feeds `delete.before`; the `consumeFn` return value
	* is the race gate.
	*
	* Returning `false` from a `delete.before` hook aborts the consume and
	* the helper resolves to `null` (no `consumeFn` call, no after hooks).
	*/
	async function consumeOneWithHooks(model, hookWhere, consumeFn, preSnapshot) {
		const context = await getCurrentAuthContext().catch(() => null);
		const beforeHooks = hooksEntries.flatMap(({ source, hooks }) => {
			const fn = hooks[model]?.delete?.before;
			return fn ? [{
				source,
				fn
			}] : [];
		});
		let snapshot = preSnapshot ?? null;
		if (beforeHooks.length) {
			if (!snapshot) try {
				snapshot = (await (await getCurrentAdapter(adapter)).findMany({
					model,
					where: hookWhere,
					limit: 1
				}))[0] || null;
			} catch {}
			if (snapshot) {
				for (const { source, fn } of beforeHooks) if (await withSpan(`db delete.before ${model}`, {
					["better_auth.hook.type"]: "delete.before",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					["better_auth.context"]: source
				}, () => fn(snapshot, context)) === false) return null;
			}
		}
		const consumed = await consumeFn();
		if (!consumed) return null;
		for (const { source, hooks } of hooksEntries) {
			const toRun = hooks[model]?.delete?.after;
			if (toRun) await queueAfterTransactionHook(async () => {
				await withSpan(`db delete.after ${model}`, {
					[ATTR_HOOK_TYPE]: "delete.after",
					[import_src.ATTR_DB_COLLECTION_NAME]: model,
					[ATTR_CONTEXT]: source
				}, () => toRun(consumed, context));
			});
		}
		return consumed;
	}
	return {
		createWithHooks,
		updateWithHooks,
		updateManyWithHooks,
		deleteWithHooks,
		deleteManyWithHooks,
		consumeOneWithHooks
	};
}
function getTTLSeconds(expiresAt, now = Date.now()) {
	const expiresMs = typeof expiresAt === "number" ? expiresAt : expiresAt.getTime();
	return Math.max(Math.floor((expiresMs - now) / 1e3), 0);
}
var createInternalAdapter = (adapter, ctx) => {
	const logger = ctx.logger;
	const options = ctx.options;
	const secondaryStorage = options.secondaryStorage;
	const databaseStoresSessions = !secondaryStorage || options.session?.storeSessionInDatabase === true;
	const preservesDatabaseSessions = secondaryStorage !== void 0 && options.session?.preserveSessionInDatabase === true;
	const verificationConsumeLocks = /* @__PURE__ */ new Map();
	let warnedNonAtomicConsume = false;
	const sessionExpiration = options.session?.expiresIn || 604800;
	const { createWithHooks, updateWithHooks, updateManyWithHooks, deleteWithHooks, deleteManyWithHooks, consumeOneWithHooks } = getWithHooks(adapter, ctx);
	async function refreshUserSessions(user) {
		if (!secondaryStorage) return;
		const listRaw = await secondaryStorage.get(`active-sessions-${user.id}`);
		if (!listRaw) return;
		const now = Date.now();
		const validSessions = (safeJSONParse(listRaw) || []).filter((s) => s.expiresAt > now);
		await Promise.all(validSessions.map(async ({ token }) => {
			const cached = await secondaryStorage.get(token);
			if (!cached) return;
			const parsed = safeJSONParse(cached);
			if (!parsed) return;
			const sessionTTL = getTTLSeconds(parsed.session.expiresAt, now);
			await secondaryStorage.set(token, JSON.stringify({
				session: parsed.session,
				user
			}), Math.floor(sessionTTL));
		}));
	}
	async function withVerificationConsumeLock(key, fn) {
		const previous = verificationConsumeLocks.get(key) ?? Promise.resolve();
		let release;
		const current = new Promise((resolve) => {
			release = resolve;
		});
		const next = previous.catch(() => {}).then(() => current);
		verificationConsumeLocks.set(key, next);
		await previous.catch(() => {});
		try {
			return await fn();
		} finally {
			release();
			if (verificationConsumeLocks.get(key) === next) verificationConsumeLocks.delete(key);
		}
	}
	const deleteSecondaryStorageSessions = async (userId) => {
		if (!secondaryStorage) return;
		const activeSession = await secondaryStorage.get(`active-sessions-${userId}`);
		const sessions = activeSession ? safeJSONParse(activeSession) : [];
		if (!sessions) return;
		for (const session of sessions) await secondaryStorage.delete(session.token);
		await secondaryStorage.delete(`active-sessions-${userId}`);
	};
	const deleteDatabaseSessions = async (userId) => {
		await deleteManyWithHooks([{
			field: "userId",
			value: userId
		}], "session", void 0);
	};
	return {
		createOAuthUser: async (user, account) => {
			return runWithTransaction(adapter, async () => {
				const createdUser = await createWithHooks({
					createdAt: /* @__PURE__ */ new Date(),
					updatedAt: /* @__PURE__ */ new Date(),
					...user,
					email: user.email?.toLowerCase()
				}, "user", void 0);
				return {
					user: createdUser,
					account: await createWithHooks({
						...account,
						userId: createdUser.id,
						createdAt: /* @__PURE__ */ new Date(),
						updatedAt: /* @__PURE__ */ new Date()
					}, "account", void 0)
				};
			});
		},
		createUser: async (user) => {
			return await createWithHooks({
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...user,
				email: user.email?.toLowerCase()
			}, "user", void 0);
		},
		createAccount: async (account) => {
			return await createWithHooks({
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...account
			}, "account", void 0);
		},
		listSessions: async (userId, options) => {
			if (secondaryStorage) {
				const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
				if (!currentList) return [];
				const list = safeJSONParse(currentList) || [];
				const now = Date.now();
				const seenTokens = /* @__PURE__ */ new Set();
				const sessions = [];
				for (const { token, expiresAt } of list) {
					if (expiresAt <= now || seenTokens.has(token)) continue;
					seenTokens.add(token);
					const data = await secondaryStorage.get(token);
					if (!data) continue;
					try {
						const parsed = typeof data === "string" ? JSON.parse(data) : data;
						if (!parsed?.session) continue;
						sessions.push(parseSessionOutput(ctx.options, {
							...parsed.session,
							expiresAt: new Date(parsed.session.expiresAt)
						}));
					} catch {
						continue;
					}
				}
				return sessions;
			}
			return await (await getCurrentAdapter(adapter)).findMany({
				model: "session",
				where: [{
					field: "userId",
					value: userId
				}, ...options?.onlyActiveSessions ? [{
					field: "expiresAt",
					value: /* @__PURE__ */ new Date(),
					operator: "gt"
				}] : []]
			});
		},
		listUsers: async (limit, offset, sortBy, where) => {
			return await (await getCurrentAdapter(adapter)).findMany({
				model: "user",
				limit,
				offset,
				sortBy,
				where
			});
		},
		countTotalUsers: async (where) => {
			const total = await (await getCurrentAdapter(adapter)).count({
				model: "user",
				where
			});
			if (typeof total === "string") return parseInt(total);
			return total;
		},
		deleteUser: async (userId) => {
			await deleteSecondaryStorageSessions(userId);
			if (databaseStoresSessions) await deleteDatabaseSessions(userId);
			await deleteManyWithHooks([{
				field: "userId",
				value: userId
			}], "account", void 0);
			await deleteWithHooks([{
				field: "id",
				value: userId
			}], "user", void 0);
		},
		createSession: async (userId, dontRememberMe, override, overrideAll) => {
			const headers = await (async () => {
				const ctx = await getCurrentAuthContext().catch(() => null);
				return ctx?.headers || ctx?.request?.headers;
			})();
			const storeInDb = options.session?.storeSessionInDatabase;
			const { id: _, ...rest } = override || {};
			let sessionId;
			if (secondaryStorage && !storeInDb) {
				const generatedId = ctx.generateId({ model: "session" });
				sessionId = generatedId !== false ? generatedId : generateId();
			}
			const defaultAdditionalFields = getSessionDefaultFields(options);
			const data = {
				...sessionId ? { id: sessionId } : {},
				ipAddress: headers ? getIp(headers, options) || "" : "",
				userAgent: headers?.get("user-agent") || "",
				...rest,
				/**
				* If the user doesn't want to be remembered
				* set the session to expire in 1 day.
				* The cookie will be set to expire at the end of the session
				*/
				expiresAt: dontRememberMe ? getDate(86400, "sec") : getDate(sessionExpiration, "sec"),
				userId,
				token: generateId(32),
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...defaultAdditionalFields,
				...overrideAll ? rest : {}
			};
			return await createWithHooks(data, "session", secondaryStorage ? {
				fn: async (sessionData) => {
					/**
					* store the session token for the user
					* so we can retrieve it later for listing sessions
					*/
					const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
					let list = [];
					const now = Date.now();
					if (currentList) {
						list = safeJSONParse(currentList) || [];
						list = list.filter((session) => session.expiresAt > now && session.token !== data.token);
					}
					const sorted = [...list, {
						token: data.token,
						expiresAt: data.expiresAt.getTime()
					}].sort((a, b) => a.expiresAt - b.expiresAt);
					const furthestSessionTTL = getTTLSeconds(sorted.at(-1)?.expiresAt ?? data.expiresAt.getTime(), now);
					if (furthestSessionTTL > 0) await secondaryStorage.set(`active-sessions-${userId}`, JSON.stringify(sorted), furthestSessionTTL);
					const user = await (await getCurrentAdapter(adapter)).findOne({
						model: "user",
						where: [{
							field: "id",
							value: userId
						}]
					});
					const sessionTTL = getTTLSeconds(data.expiresAt, now);
					if (sessionTTL > 0) await secondaryStorage.set(data.token, JSON.stringify({
						session: sessionData,
						user
					}), sessionTTL);
					return sessionData;
				},
				executeMainFn: storeInDb
			} : void 0);
		},
		findSession: async (token) => {
			if (secondaryStorage) {
				const sessionStringified = await secondaryStorage.get(token);
				if (!sessionStringified && (!options.session?.storeSessionInDatabase || ctx.options.session?.preserveSessionInDatabase)) return null;
				if (sessionStringified) {
					const s = safeJSONParse(sessionStringified);
					if (!s) return null;
					return {
						session: parseSessionOutput(ctx.options, {
							...s.session,
							expiresAt: new Date(s.session.expiresAt),
							createdAt: new Date(s.session.createdAt),
							updatedAt: new Date(s.session.updatedAt)
						}),
						user: parseUserOutput(ctx.options, {
							...s.user,
							createdAt: new Date(s.user.createdAt),
							updatedAt: new Date(s.user.updatedAt)
						})
					};
				}
			}
			const result = await (await getCurrentAdapter(adapter)).findOne({
				model: "session",
				where: [{
					value: token,
					field: "token"
				}],
				join: { user: true }
			});
			if (!result) return null;
			const { user, ...session } = result;
			if (!user) return null;
			return {
				session: parseSessionOutput(ctx.options, session),
				user: parseUserOutput(ctx.options, user)
			};
		},
		findSessions: async (sessionTokens, options) => {
			if (secondaryStorage) {
				const sessions = [];
				for (const sessionToken of sessionTokens) {
					const sessionStringified = await secondaryStorage.get(sessionToken);
					if (sessionStringified) try {
						const s = typeof sessionStringified === "string" ? JSON.parse(sessionStringified) : sessionStringified;
						if (!s) continue;
						const expiresAt = new Date(s.session.expiresAt);
						if (options?.onlyActiveSessions && expiresAt <= /* @__PURE__ */ new Date()) continue;
						const session = {
							session: {
								...s.session,
								expiresAt: new Date(s.session.expiresAt)
							},
							user: {
								...s.user,
								createdAt: new Date(s.user.createdAt),
								updatedAt: new Date(s.user.updatedAt)
							}
						};
						sessions.push(session);
					} catch {
						continue;
					}
				}
				return sessions;
			}
			const sessions = await (await getCurrentAdapter(adapter)).findMany({
				model: "session",
				where: [{
					field: "token",
					value: sessionTokens,
					operator: "in"
				}, ...options?.onlyActiveSessions ? [{
					field: "expiresAt",
					value: /* @__PURE__ */ new Date(),
					operator: "gt"
				}] : []],
				join: { user: true }
			});
			if (!sessions.length) return [];
			if (sessions.some((session) => !session.user)) return [];
			return sessions.map((_session) => {
				const { user, ...session } = _session;
				return {
					session,
					user
				};
			});
		},
		updateSession: async (sessionToken, session) => {
			return await updateWithHooks(session, [{
				field: "token",
				value: sessionToken
			}], "session", secondaryStorage ? {
				async fn(data) {
					const currentSession = await secondaryStorage.get(sessionToken);
					if (!currentSession) return null;
					const parsedSession = safeJSONParse(currentSession);
					if (!parsedSession) return null;
					const mergedSession = {
						...parsedSession.session,
						...data,
						expiresAt: new Date(data.expiresAt ?? parsedSession.session.expiresAt),
						createdAt: new Date(parsedSession.session.createdAt),
						updatedAt: new Date(data.updatedAt ?? parsedSession.session.updatedAt)
					};
					const updatedSession = parseSessionOutput(ctx.options, mergedSession);
					const now = Date.now();
					const expiresMs = new Date(updatedSession.expiresAt).getTime();
					const sessionTTL = getTTLSeconds(expiresMs, now);
					if (sessionTTL > 0) {
						await secondaryStorage.set(sessionToken, JSON.stringify({
							session: updatedSession,
							user: parsedSession.user
						}), sessionTTL);
						const listKey = `active-sessions-${updatedSession.userId}`;
						const listRaw = await secondaryStorage.get(listKey);
						const sorted = (listRaw ? safeJSONParse(listRaw) || [] : []).filter((s) => s.token !== sessionToken && s.expiresAt > now).concat([{
							token: sessionToken,
							expiresAt: expiresMs
						}]).sort((a, b) => a.expiresAt - b.expiresAt);
						const furthestSessionExp = sorted.at(-1)?.expiresAt;
						if (furthestSessionExp && furthestSessionExp > now) await secondaryStorage.set(listKey, JSON.stringify(sorted), getTTLSeconds(furthestSessionExp, now));
						else await secondaryStorage.delete(listKey);
					}
					return updatedSession;
				},
				executeMainFn: options.session?.storeSessionInDatabase
			} : void 0);
		},
		deleteSession: async (token) => {
			if (secondaryStorage) {
				const data = await secondaryStorage.get(token);
				if (data) {
					const { session } = safeJSONParse(data) ?? {};
					if (!session) {
						logger.error("Session not found in secondary storage");
						return;
					}
					const userId = session.userId;
					const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
					if (currentList) {
						const list = safeJSONParse(currentList) || [];
						const now = Date.now();
						const filtered = list.filter((session) => session.expiresAt > now && session.token !== token);
						const furthestSessionExp = filtered.sort((a, b) => a.expiresAt - b.expiresAt).at(-1)?.expiresAt;
						if (filtered.length > 0 && furthestSessionExp && furthestSessionExp > Date.now()) await secondaryStorage.set(`active-sessions-${userId}`, JSON.stringify(filtered), getTTLSeconds(furthestSessionExp, now));
						else await secondaryStorage.delete(`active-sessions-${userId}`);
					} else logger.error("Active sessions list not found in secondary storage");
				}
				await secondaryStorage.delete(token);
			}
			if (databaseStoresSessions && !preservesDatabaseSessions) await deleteWithHooks([{
				field: "token",
				value: token
			}], "session", void 0);
		},
		deleteAccounts: async (userId) => {
			await deleteManyWithHooks([{
				field: "userId",
				value: userId
			}], "account", void 0);
		},
		/**
		* Delete an account by its primary key.
		*
		* @param id - The account row's primary key (the `id` column, not the `accountId` column).
		*/
		deleteAccount: async (id) => {
			await deleteWithHooks([{
				field: "id",
				value: id
			}], "account", void 0);
		},
		deleteUserSessions: async (userId) => {
			await deleteSecondaryStorageSessions(userId);
			if (databaseStoresSessions && !preservesDatabaseSessions) await deleteDatabaseSessions(userId);
		},
		deleteSessions: async (sessionTokens) => {
			if (secondaryStorage) await Promise.all(sessionTokens.map((token) => secondaryStorage.delete(token)));
			if (databaseStoresSessions && !preservesDatabaseSessions) await deleteManyWithHooks([{
				field: "token",
				value: sessionTokens,
				operator: "in"
			}], "session", void 0);
		},
		findOAuthUser: async (email, accountId, providerId) => {
			const account = await (await getCurrentAdapter(adapter)).findOne({
				model: "account",
				where: [{
					value: accountId,
					field: "accountId"
				}, {
					value: providerId,
					field: "providerId"
				}],
				join: { user: true }
			});
			if (account) if (account.user) return {
				user: account.user,
				linkedAccount: account,
				accounts: [account]
			};
			else {
				const user = await (await getCurrentAdapter(adapter)).findOne({
					model: "user",
					where: [{
						value: email.toLowerCase(),
						field: "email"
					}]
				});
				if (user) return {
					user,
					linkedAccount: account,
					accounts: [account]
				};
				return null;
			}
			else {
				const user = await (await getCurrentAdapter(adapter)).findOne({
					model: "user",
					where: [{
						value: email.toLowerCase(),
						field: "email"
					}]
				});
				if (user) return {
					user,
					linkedAccount: null,
					accounts: await (await getCurrentAdapter(adapter)).findMany({
						model: "account",
						where: [{
							value: user.id,
							field: "userId"
						}]
					}) || []
				};
				else return null;
			}
		},
		findUserByEmail: async (email, options) => {
			const result = await (await getCurrentAdapter(adapter)).findOne({
				model: "user",
				where: [{
					value: email.toLowerCase(),
					field: "email"
				}],
				join: { ...options?.includeAccounts ? { account: true } : {} }
			});
			if (!result) return null;
			const { account: accounts, ...user } = result;
			return {
				user,
				accounts: accounts ?? []
			};
		},
		findUserById: async (userId) => {
			if (!userId) return null;
			return await (await getCurrentAdapter(adapter)).findOne({
				model: "user",
				where: [{
					field: "id",
					value: userId
				}]
			});
		},
		linkAccount: async (account) => {
			return await createWithHooks({
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...account
			}, "account", void 0);
		},
		updateUser: async (userId, data) => {
			const user = await updateWithHooks({
				...data,
				...data.email ? { email: data.email.toLowerCase() } : {}
			}, [{
				field: "id",
				value: userId
			}], "user", void 0);
			await refreshUserSessions(user);
			return user;
		},
		updateUserByEmail: async (email, data) => {
			const user = await updateWithHooks({
				...data,
				...data.email ? { email: data.email.toLowerCase() } : {}
			}, [{
				field: "email",
				value: email.toLowerCase()
			}], "user", void 0);
			await refreshUserSessions(user);
			return user;
		},
		updatePassword: async (userId, password) => {
			await updateManyWithHooks({ password }, [{
				field: "userId",
				value: userId
			}, {
				field: "providerId",
				value: "credential"
			}], "account", void 0);
		},
		findAccounts: async (userId) => {
			return await (await getCurrentAdapter(adapter)).findMany({
				model: "account",
				where: [{
					field: "userId",
					value: userId
				}]
			});
		},
		findAccountByProviderId: async (accountId, providerId) => {
			return await (await getCurrentAdapter(adapter)).findOne({
				model: "account",
				where: [{
					field: "accountId",
					value: accountId
				}, {
					field: "providerId",
					value: providerId
				}]
			});
		},
		findAccountByUserId: async (userId) => {
			return await (await getCurrentAdapter(adapter)).findMany({
				model: "account",
				where: [{
					field: "userId",
					value: userId
				}]
			});
		},
		updateAccount: async (id, data) => {
			return await updateWithHooks(data, [{
				field: "id",
				value: id
			}], "account", void 0);
		},
		createVerificationValue: async (data) => {
			const storageOption = getStorageOption(data.identifier, options.verification?.storeIdentifier);
			const storedIdentifier = await processIdentifier(data.identifier, storageOption);
			return await createWithHooks({
				createdAt: /* @__PURE__ */ new Date(),
				updatedAt: /* @__PURE__ */ new Date(),
				...data,
				identifier: storedIdentifier
			}, "verification", secondaryStorage ? {
				async fn(verificationData) {
					const ttl = getTTLSeconds(verificationData.expiresAt);
					if (ttl > 0) await secondaryStorage.set(`verification:${storedIdentifier}`, JSON.stringify(verificationData), ttl);
					return verificationData;
				},
				executeMainFn: options.verification?.storeInDatabase
			} : void 0);
		},
		findVerificationValue: async (identifier) => {
			const storageOption = getStorageOption(identifier, options.verification?.storeIdentifier);
			const storedIdentifier = await processIdentifier(identifier, storageOption);
			if (secondaryStorage) {
				const cached = await secondaryStorage.get(`verification:${storedIdentifier}`);
				if (cached) {
					const parsed = safeJSONParse(cached);
					if (parsed) return parsed;
				}
				if (storageOption && storageOption !== "plain") {
					const plainCached = await secondaryStorage.get(`verification:${identifier}`);
					if (plainCached) {
						const parsed = safeJSONParse(plainCached);
						if (parsed) return parsed;
					}
				}
				if (!options.verification?.storeInDatabase) return null;
			}
			const currentAdapter = await getCurrentAdapter(adapter);
			async function findByIdentifier(id) {
				return currentAdapter.findMany({
					model: "verification",
					where: [{
						field: "identifier",
						value: id
					}],
					sortBy: {
						field: "createdAt",
						direction: "desc"
					},
					limit: 1
				});
			}
			let verification = await findByIdentifier(storedIdentifier);
			if (!verification.length && storageOption && storageOption !== "plain") verification = await findByIdentifier(identifier);
			if (!options.verification?.disableCleanup) await deleteManyWithHooks([{
				field: "expiresAt",
				value: /* @__PURE__ */ new Date(),
				operator: "lt"
			}], "verification", void 0);
			return verification[0] || null;
		},
		deleteVerificationByIdentifier: async (identifier) => {
			const storedIdentifier = await processIdentifier(identifier, getStorageOption(identifier, options.verification?.storeIdentifier));
			if (secondaryStorage) await secondaryStorage.delete(`verification:${storedIdentifier}`);
			if (!secondaryStorage || options.verification?.storeInDatabase) await deleteWithHooks([{
				field: "identifier",
				value: storedIdentifier
			}], "verification", void 0);
		},
		/**
		* Atomically consume a single-use verification row by `identifier` and
		* return it. The first concurrent caller receives the latest row for the
		* identifier; every other caller racing against it receives `null`.
		*
		* Race-safe replacement for the `findVerificationValue` then
		* `deleteVerificationByIdentifier` pair. Callers MUST gate any state
		* change (issue session, mint token, change password) on a non-null
		* return value, because consuming one row invalidates the whole
		* identifier and stale rows cannot be replayed.
		*
		* Rows past their `expiresAt` are treated as already invalid: the row
		* is still deleted (so it cannot be replayed later) but `null` is
		* returned. Callers do not need their own `expiresAt` gate.
		*
		* The secondary-storage-only path (`storeInDatabase: false`) is atomic
		* only when the configured storage implements `getAndDelete`; otherwise
		* it falls back to an in-process lock around `get` then `delete` and
		* warns once, since that fallback cannot coordinate across processes.
		*
		* FIXME(consume-atomic): make `SecondaryStorage.getAndDelete` required
		* in the next breaking release, or require database-backed verification
		* storage for security-sensitive consume paths, so the non-atomic
		* fallback can be removed entirely.
		*/
		consumeVerificationValue: async (identifier) => {
			const storageOption = getStorageOption(identifier, options.verification?.storeIdentifier);
			const storedIdentifier = await processIdentifier(identifier, storageOption);
			const identifiersToTry = storageOption && storageOption !== "plain" ? [storedIdentifier, identifier] : [storedIdentifier];
			const hydrateCachedVerification = (raw) => {
				if (!raw) return null;
				const candidate = typeof raw === "string" ? safeJSONParse(raw) : typeof raw === "object" ? raw : null;
				if (!candidate) return null;
				const expiresAt = new Date(candidate.expiresAt);
				if (!Number.isFinite(expiresAt.getTime())) return null;
				return {
					...candidate,
					expiresAt
				};
			};
			let consumed = null;
			if (secondaryStorage && !options.verification?.storeInDatabase) {
				const consumeCacheKey = async (key) => {
					if (secondaryStorage.getAndDelete) return hydrateCachedVerification(await secondaryStorage.getAndDelete(key));
					if (!warnedNonAtomicConsume) {
						warnedNonAtomicConsume = true;
						logger.warn("Secondary storage does not implement `getAndDelete`, so single-use verification values cannot be consumed atomically across processes. Implement `getAndDelete` or use database-backed verification storage to guarantee single use.");
					}
					return withVerificationConsumeLock(key, async () => {
						const parsed = hydrateCachedVerification(await secondaryStorage.get(key));
						if (!parsed) return null;
						await secondaryStorage.delete(key);
						return parsed;
					});
				};
				for (const stored of identifiersToTry) {
					const cached = await consumeCacheKey(`verification:${stored}`);
					if (!cached) continue;
					await Promise.all(identifiersToTry.filter((candidate) => candidate !== stored).map((candidate) => secondaryStorage.delete(`verification:${candidate}`)));
					consumed = cached;
					break;
				}
			} else {
				const consumeByIdentifier = async (id) => withVerificationConsumeLock(`verification:${id}`, () => runWithTransaction(adapter, async () => {
					const txAdapter = await getCurrentAdapter(adapter);
					const where = [{
						field: "identifier",
						value: id
					}];
					const latest = (await txAdapter.findMany({
						model: "verification",
						where,
						sortBy: {
							field: "createdAt",
							direction: "desc"
						},
						limit: 1
					}))[0] ?? null;
					if (!latest) return null;
					return consumeOneWithHooks("verification", [{
						field: "id",
						value: latest.id
					}], async () => {
						const row = await txAdapter.consumeOne({
							model: "verification",
							where: [{
								field: "id",
								value: latest.id
							}]
						});
						if (!row) return null;
						await txAdapter.deleteMany({
							model: "verification",
							where
						});
						return row;
					}, latest);
				}));
				for (const stored of identifiersToTry) {
					consumed = await consumeByIdentifier(stored);
					if (consumed) break;
				}
				if (consumed && secondaryStorage) await Promise.all(identifiersToTry.map((stored) => secondaryStorage.delete(`verification:${stored}`)));
			}
			if (!consumed || consumed.expiresAt < /* @__PURE__ */ new Date()) return null;
			return consumed;
		},
		/**
		* First-writer-wins create keyed by a deterministic primary key derived
		* from `identifier`. Returns `true` when this caller created the row and
		* `false` when a row for the same identifier already existed.
		*
		* The dual of `consumeVerificationValue`: where consume races to delete a
		* marker exactly once, reserve races to create a marker exactly once. Use
		* it for replay tombstones (a SAML assertion id, a JWT `jti`) where the
		* first caller wins and every later caller must observe that the marker is
		* already taken.
		*
		* The `verification.identifier` column is non-unique, so uniqueness comes
		* from a deterministic primary key (`SHA-256` of `reserve:<identifier>`).
		* The database path is atomic: the primary key turns the INSERT into the
		* first-writer-wins gate, and a duplicate is detected portably by
		* re-reading the row rather than matching adapter-specific errors. The
		* secondary-storage-only path has no primary key to enforce uniqueness, so
		* it is best-effort under concurrency.
		*
		* The atomic guarantee requires the configured adapter to reject a
		* duplicate primary key on insert, which every real database enforces. The
		* in-memory adapter does not enforce primary-key uniqueness, so reservation
		* is best-effort there (it is intended for development and tests).
		*/
		reserveVerificationValue: async (data) => {
			const reservationId = base64Url.encode(new Uint8Array(await createHash("SHA-256").digest(new TextEncoder().encode("reserve:" + data.identifier))), { padding: false });
			const storageOption = getStorageOption(data.identifier, options.verification?.storeIdentifier);
			const storedIdentifier = await processIdentifier(data.identifier, storageOption);
			if (secondaryStorage && !options.verification?.storeInDatabase) {
				const cacheKey = `verification:${storedIdentifier}`;
				if (await secondaryStorage.get(cacheKey)) return false;
				await secondaryStorage.set(cacheKey, JSON.stringify({
					id: reservationId,
					identifier: storedIdentifier,
					value: data.value,
					expiresAt: data.expiresAt
				}), getTTLSeconds(data.expiresAt));
				return true;
			}
			try {
				await adapter.create({
					model: "verification",
					data: {
						id: reservationId,
						identifier: storedIdentifier,
						value: data.value,
						expiresAt: data.expiresAt,
						createdAt: /* @__PURE__ */ new Date(),
						updatedAt: /* @__PURE__ */ new Date()
					},
					forceAllowId: true
				});
			} catch (error) {
				if (await adapter.findOne({
					model: "verification",
					where: [{
						field: "id",
						value: reservationId
					}]
				})) return false;
				throw error;
			}
			if (secondaryStorage) {
				const ttl = getTTLSeconds(data.expiresAt);
				if (ttl > 0) await secondaryStorage.set(`verification:${storedIdentifier}`, JSON.stringify({
					id: reservationId,
					identifier: storedIdentifier,
					value: data.value,
					expiresAt: data.expiresAt
				}), ttl);
			}
			return true;
		},
		updateVerificationByIdentifier: async (identifier, data) => {
			const storedIdentifier = await processIdentifier(identifier, getStorageOption(identifier, options.verification?.storeIdentifier));
			if (secondaryStorage) {
				const cached = await secondaryStorage.get(`verification:${storedIdentifier}`);
				if (cached) {
					const parsed = safeJSONParse(cached);
					if (parsed) {
						const updated = {
							...parsed,
							...data
						};
						const expiresAt = updated.expiresAt ?? parsed.expiresAt;
						const ttl = getTTLSeconds(expiresAt instanceof Date ? expiresAt : new Date(expiresAt));
						if (ttl > 0) await secondaryStorage.set(`verification:${storedIdentifier}`, JSON.stringify(updated), ttl);
						if (!options.verification?.storeInDatabase) return updated;
					}
				}
			}
			if (!secondaryStorage || options.verification?.storeInDatabase) return await updateWithHooks(data, [{
				field: "identifier",
				value: storedIdentifier
			}], "verification", void 0);
			return data;
		},
		refreshUserSessions
	};
};
async function runPluginInit(context) {
	let options = context.options;
	const plugins = options.plugins || [];
	const pluginTrustedOrigins = [];
	const dbHooks = [];
	for (const plugin of plugins) if (plugin.init) {
		const initPromise = plugin.init(context);
		let result;
		if (isPromise(initPromise)) result = await initPromise;
		else result = initPromise;
		if (typeof result === "object") {
			if (result.options) {
				const { databaseHooks, trustedOrigins, ...restOpts } = result.options;
				if (databaseHooks) dbHooks.push({
					source: `plugin:${plugin.id}`,
					hooks: databaseHooks
				});
				if (trustedOrigins) pluginTrustedOrigins.push(trustedOrigins);
				options = defu(options, restOpts);
			}
			if (result.context) Object.assign(context, result.context);
		}
	}
	if (pluginTrustedOrigins.length > 0) {
		const allSources = [...options.trustedOrigins ? [options.trustedOrigins] : [], ...pluginTrustedOrigins];
		const staticOrigins = allSources.filter(Array.isArray).flat();
		const dynamicOrigins = allSources.filter((s) => typeof s === "function");
		if (dynamicOrigins.length > 0) options.trustedOrigins = async (request) => {
			const resolved = await Promise.all(dynamicOrigins.map((fn) => fn(request)));
			return [...staticOrigins, ...resolved.flat()].filter((v) => typeof v === "string" && v !== "");
		};
		else options.trustedOrigins = staticOrigins;
	}
	if (options.databaseHooks) dbHooks.push({
		source: "user",
		hooks: options.databaseHooks
	});
	context.internalAdapter = createInternalAdapter(context.adapter, {
		options,
		logger: context.logger,
		hooks: dbHooks,
		generateId: context.generateId
	});
	context.options = options;
}
function getInternalPlugins(options) {
	const plugins = [];
	if (options.advanced?.crossSubDomainCookies?.enabled) {}
	return plugins;
}
async function getTrustedOrigins(options, request) {
	const trustedOrigins = [];
	if (isDynamicBaseURLConfig(options.baseURL)) {
		const allowedHosts = options.baseURL.allowedHosts;
		const proto = options.baseURL.protocol;
		for (const host of allowedHosts) if (!host.includes("://")) {
			if (!proto || proto === "https" || proto === "auto") trustedOrigins.push(`https://${host}`);
			if (proto === "http" || proto === "auto" || isLoopbackHost(host)) trustedOrigins.push(`http://${host}`);
		} else trustedOrigins.push(host);
		if (options.baseURL.fallback) try {
			trustedOrigins.push(new URL(options.baseURL.fallback).origin);
		} catch {}
	} else {
		const baseURL = getBaseURL(typeof options.baseURL === "string" ? options.baseURL : void 0, options.basePath, request);
		if (baseURL) trustedOrigins.push(new URL(baseURL).origin);
	}
	if (options.trustedOrigins) {
		if (Array.isArray(options.trustedOrigins)) trustedOrigins.push(...options.trustedOrigins);
		if (typeof options.trustedOrigins === "function") {
			const validOrigins = await options.trustedOrigins(request);
			trustedOrigins.push(...validOrigins);
		}
	}
	const envTrustedOrigins = env.BETTER_AUTH_TRUSTED_ORIGINS;
	if (envTrustedOrigins) trustedOrigins.push(...envTrustedOrigins.split(","));
	return trustedOrigins.filter((v) => Boolean(v));
}
/**
* Picks a `Request`-like or `Headers` value from a direct `auth.api` call.
* Headers are only accepted when they carry a host: without one, host
* resolution would fall back to `null` and the caller should use `fallback`
* or pass a `Request` instead.
*/
function pickSource(input) {
	if (isRequestLike(input?.request)) return input.request;
	if (!input?.headers) return void 0;
	const headers = input.headers instanceof Headers ? input.headers : new Headers(input.headers);
	if (!headers.has("host") && !headers.has("x-forwarded-host")) return;
	return headers;
}
/**
* Returns the effective `trustedProxyHeaders` value for dynamic `baseURL`
* resolution. When the user hasn't set `advanced.trustedProxyHeaders`,
* proxy headers (`x-forwarded-host` / `x-forwarded-proto`) are trusted by
* default so deployments behind a reverse proxy work without extra config.
*/
function resolveDynamicTrustedProxyHeaders(options) {
	return options.advanced?.trustedProxyHeaders ?? true;
}
/**
* Per-request clone with `baseURL`, `trustedOrigins`, `trustedProviders`
* and cookies rehydrated for the resolved host. Throws `BetterAuthError`
* when the URL cannot be resolved; callers on the direct-API path convert
* this to `APIError`.
*/
async function resolveRequestContext(ctx, source, trustedProxyHeaders) {
	const dynamicBaseURLConfig = ctx.options.baseURL;
	const baseURL = resolveBaseURL(dynamicBaseURLConfig, ctx.options.basePath || "/api/auth", source, void 0, trustedProxyHeaders);
	if (!baseURL) throw new BetterAuthError("Could not resolve base URL from request. Check your allowedHosts config.");
	const resolved = Object.create(Object.getPrototypeOf(ctx), Object.getOwnPropertyDescriptors(ctx));
	resolved.baseURL = baseURL;
	resolved.options = {
		...ctx.options,
		baseURL: getOrigin(baseURL) || void 0
	};
	const trustedOriginOptions = {
		...resolved.options,
		baseURL: dynamicBaseURLConfig
	};
	const needsRequest = typeof ctx.options.trustedOrigins === "function" || typeof ctx.options.account?.accountLinking?.trustedProviders === "function";
	let callbackRequest;
	if (needsRequest) if (isRequestLike(source)) callbackRequest = source;
	else if (source) callbackRequest = new Request(baseURL, { headers: source });
	else callbackRequest = void 0;
	else callbackRequest = void 0;
	resolved.trustedOrigins = await getTrustedOrigins(trustedOriginOptions, callbackRequest);
	resolved.trustedProviders = await getTrustedProviders(resolved.options, callbackRequest);
	if (ctx.options.advanced?.crossSubDomainCookies?.enabled) {
		resolved.authCookies = getCookies(resolved.options);
		resolved.createAuthCookie = createCookieGetter(resolved.options);
	}
	return resolved;
}
async function getAwaitableValue(arr, item) {
	if (!arr) return void 0;
	for (const val of arr) {
		const value = typeof val === "function" ? await val() : val;
		if (value[item.field ?? "id"] === item.value) return value;
	}
}
async function getTrustedProviders(options, request) {
	const trustedProviders = options.account?.accountLinking?.trustedProviders;
	if (!trustedProviders) return [];
	if (Array.isArray(trustedProviders)) return trustedProviders.filter((v) => Boolean(v));
	return (await trustedProviders(request) ?? []).filter((v) => Boolean(v));
}
/**
* Check if a string looks like encrypted data
*/
function isLikelyEncrypted(token) {
	if (token.startsWith("$ba$")) return true;
	return token.length % 2 === 0 && /^[0-9a-f]+$/i.test(token);
}
function decryptOAuthToken(token, ctx) {
	if (!token) return token;
	if (ctx.options.account?.encryptOAuthTokens) {
		if (!isLikelyEncrypted(token)) return token;
		return symmetricDecrypt({
			key: ctx.secretConfig,
			data: token
		});
	}
	return token;
}
function setTokenUtil(token, ctx) {
	if (ctx.options.account?.encryptOAuthTokens && token) return symmetricEncrypt({
		key: ctx.secretConfig,
		data: token
	});
	return token;
}
function safeCloneRequest(request) {
	if (!request) return;
	try {
		return request.clone();
	} catch {
		return new Request(request.url, {
			cache: request.cache,
			credentials: request.credentials,
			headers: request.headers,
			integrity: request.integrity,
			keepalive: request.keepalive,
			method: request.method,
			mode: request.mode,
			redirect: request.redirect,
			referrer: request.referrer,
			referrerPolicy: request.referrerPolicy,
			signal: request.signal
		});
	}
}
async function createEmailVerificationToken(secret, email, updateTo, expiresIn = 3600, extraPayload) {
	return await signJWT({
		email: email.toLowerCase(),
		updateTo: updateTo?.toLowerCase(),
		...extraPayload
	}, secret, expiresIn);
}
/**
* A function to send a verification email to the user
*/
async function sendVerificationEmailFn(ctx, user) {
	if (!ctx.context.options.emailVerification?.sendVerificationEmail) {
		ctx.context.logger.error("Verification email isn't enabled.");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.VERIFICATION_EMAIL_NOT_ENABLED);
	}
	const token = await createEmailVerificationToken(ctx.context.secret, user.email, void 0, ctx.context.options.emailVerification?.expiresIn);
	const callbackURL = ctx.body.callbackURL ? encodeURIComponent(ctx.body.callbackURL) : encodeURIComponent("/");
	const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
	await ctx.context.options.emailVerification.sendVerificationEmail({
		user,
		url,
		token
	}, ctx.request);
}
var sendVerificationEmail = createAuthEndpoint("/send-verification-email", {
	method: "POST",
	operationId: "sendVerificationEmail",
	cloneRequest: true,
	body: object({
		email: email().meta({ description: "The email to send the verification email to" }),
		callbackURL: string().meta({ description: "The URL to use for email verification callback" }).optional()
	}),
	metadata: { openapi: {
		operationId: "sendVerificationEmail",
		description: "Send a verification email to the user",
		requestBody: { content: { "application/json": { schema: {
			type: "object",
			properties: {
				email: {
					type: "string",
					description: "The email to send the verification email to",
					example: "user@example.com"
				},
				callbackURL: {
					type: "string",
					description: "The URL to use for email verification callback",
					example: "https://example.com/callback",
					nullable: true
				}
			},
			required: ["email"]
		} } } },
		responses: {
			"200": {
				description: "Success",
				content: { "application/json": { schema: {
					type: "object",
					properties: { status: {
						type: "boolean",
						description: "Indicates if the email was sent successfully",
						example: true
					} }
				} } }
			},
			"400": {
				description: "Bad Request",
				content: { "application/json": { schema: {
					type: "object",
					properties: { message: {
						type: "string",
						description: "Error message",
						example: "Verification email isn't enabled"
					} }
				} } }
			}
		}
	} }
}, async (ctx) => {
	if (!ctx.context.options.emailVerification?.sendVerificationEmail) {
		ctx.context.logger.error("Verification email isn't enabled.");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.VERIFICATION_EMAIL_NOT_ENABLED);
	}
	const { email } = ctx.body;
	const session = await getSessionFromCtx(ctx);
	if (!session) {
		/**
		* Enforce a constant-time floor so an attacker cannot distinguish
		* "email not found / already verified" (fast local JWT sign) from
		* "email found and unverified" (slow external email-send) by
		* comparing response times.
		*/
		const MINIMUM_MS = 500;
		const start = Date.now();
		const user = await ctx.context.internalAdapter.findUserByEmail(email);
		let error;
		if (!user || user.user.emailVerified) await createEmailVerificationToken(ctx.context.secret, email, void 0, ctx.context.options.emailVerification?.expiresIn);
		else try {
			await sendVerificationEmailFn(ctx, user.user);
		} catch (e) {
			error = e;
		}
		const remaining = MINIMUM_MS - (Date.now() - start);
		if (remaining > 0) await new Promise((resolve) => setTimeout(resolve, remaining));
		if (error) throw error;
		return ctx.json({ status: true });
	}
	if (session?.user.email.toLowerCase() !== email.toLowerCase()) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.EMAIL_MISMATCH);
	if (session?.user.emailVerified) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.EMAIL_ALREADY_VERIFIED);
	await sendVerificationEmailFn(ctx, session.user);
	return ctx.json({ status: true });
});
var verifyEmail = createAuthEndpoint("/verify-email", {
	method: "GET",
	operationId: "verifyEmail",
	query: object({
		token: string().meta({ description: "The token to verify the email" }),
		callbackURL: string().meta({ description: "The URL to redirect to after email verification" }).optional()
	}),
	use: [originCheck((ctx) => ctx.query.callbackURL)],
	metadata: { openapi: {
		description: "Verify the email of the user",
		parameters: [{
			name: "token",
			in: "query",
			description: "The token to verify the email",
			required: true,
			schema: { type: "string" }
		}, {
			name: "callbackURL",
			in: "query",
			description: "The URL to redirect to after email verification",
			required: false,
			schema: { type: "string" }
		}],
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					user: {
						type: "object",
						$ref: "#/components/schemas/User"
					},
					status: {
						type: "boolean",
						description: "Indicates if the email was verified successfully"
					}
				},
				required: ["user", "status"]
			} } }
		} }
	} }
}, async (ctx) => {
	function redirectOnError(error) {
		if (ctx.query.callbackURL) {
			if (ctx.query.callbackURL.includes("?")) throw ctx.redirect(`${ctx.query.callbackURL}&error=${error.code}`);
			throw ctx.redirect(`${ctx.query.callbackURL}?error=${error.code}`);
		}
		throw APIError.from("UNAUTHORIZED", error);
	}
	const { token } = ctx.query;
	let jwt;
	try {
		jwt = await jwtVerify(token, new TextEncoder().encode(ctx.context.secret), { algorithms: ["HS256"] });
	} catch (e) {
		if (e instanceof JWTExpired) return redirectOnError(BASE_ERROR_CODES.TOKEN_EXPIRED);
		return redirectOnError(BASE_ERROR_CODES.INVALID_TOKEN);
	}
	const parsed = object({
		email: email(),
		updateTo: string().optional(),
		requestType: string().optional()
	}).parse(jwt.payload);
	const user = await ctx.context.internalAdapter.findUserByEmail(parsed.email);
	if (!user) return redirectOnError(BASE_ERROR_CODES.USER_NOT_FOUND);
	if (parsed.updateTo) {
		const session = await getSessionFromCtx(ctx);
		if (session && session.user.email !== parsed.email) return redirectOnError(BASE_ERROR_CODES.INVALID_USER);
		switch (parsed.requestType) {
			/**
			* User clicks confirmation -> sends verification to new email
			*/
			case "change-email-confirmation": {
				const newToken = await createEmailVerificationToken(ctx.context.secret, parsed.email, parsed.updateTo, ctx.context.options.emailVerification?.expiresIn, { requestType: "change-email-verification" });
				const updateCallbackURL = ctx.query.callbackURL ? encodeURIComponent(ctx.query.callbackURL) : encodeURIComponent("/");
				const url = `${ctx.context.baseURL}/verify-email?token=${newToken}&callbackURL=${updateCallbackURL}`;
				if (ctx.context.options.emailVerification?.sendVerificationEmail) await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
					user: {
						...user.user,
						email: parsed.updateTo
					},
					url,
					token: newToken
				}, safeCloneRequest(ctx.request)));
				if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
				return ctx.json({ status: true });
			}
			/**
			* User clicks verification -> updates email
			*/
			case "change-email-verification": {
				let activeSession = session;
				if (!activeSession) {
					const newSession = await ctx.context.internalAdapter.createSession(user.user.id);
					if (!newSession) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
					activeSession = {
						session: newSession,
						user: user.user
					};
				}
				const updatedUser = await ctx.context.internalAdapter.updateUserByEmail(parsed.email, {
					email: parsed.updateTo,
					emailVerified: true
				});
				if (ctx.context.options.emailVerification?.afterEmailVerification) await ctx.context.options.emailVerification.afterEmailVerification(updatedUser, ctx.request);
				await setSessionCookie(ctx, {
					session: activeSession.session,
					user: {
						...activeSession.user,
						email: parsed.updateTo,
						emailVerified: true
					}
				});
				if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
				return ctx.json({
					status: true,
					user: parseUserOutput(ctx.context.options, updatedUser)
				});
			}
			/**
			* Legacy flow
			*
			* - skips two-step verification
			* - updates email immediately
			*/
			default: {
				let activeSession = session;
				if (!activeSession) {
					const newSession = await ctx.context.internalAdapter.createSession(user.user.id);
					if (!newSession) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
					activeSession = {
						session: newSession,
						user: user.user
					};
				}
				const updatedUser = await ctx.context.internalAdapter.updateUserByEmail(parsed.email, {
					email: parsed.updateTo,
					emailVerified: false
				});
				const newToken = await createEmailVerificationToken(ctx.context.secret, parsed.updateTo);
				const updateCallbackURL = ctx.query.callbackURL ? encodeURIComponent(ctx.query.callbackURL) : encodeURIComponent("/");
				if (ctx.context.options.emailVerification?.sendVerificationEmail) await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
					user: updatedUser,
					url: `${ctx.context.baseURL}/verify-email?token=${newToken}&callbackURL=${updateCallbackURL}`,
					token: newToken
				}, safeCloneRequest(ctx.request)));
				await setSessionCookie(ctx, {
					session: activeSession.session,
					user: {
						...activeSession.user,
						email: parsed.updateTo,
						emailVerified: false
					}
				});
				if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
				return ctx.json({
					status: true,
					user: parseUserOutput(ctx.context.options, updatedUser)
				});
			}
		}
	}
	if (user.user.emailVerified) {
		if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
		return ctx.json({
			status: true,
			user: null
		});
	}
	if (ctx.context.options.emailVerification?.beforeEmailVerification) await ctx.context.options.emailVerification.beforeEmailVerification(user.user, ctx.request);
	const updatedUser = await ctx.context.internalAdapter.updateUserByEmail(parsed.email, { emailVerified: true });
	if (ctx.context.options.emailVerification?.afterEmailVerification) await ctx.context.options.emailVerification.afterEmailVerification(updatedUser, ctx.request);
	if (ctx.context.options.emailVerification?.autoSignInAfterVerification) {
		const currentSession = await getSessionFromCtx(ctx);
		if (!currentSession || currentSession.user.email !== parsed.email) {
			const session = await ctx.context.internalAdapter.createSession(user.user.id);
			if (!session) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
			await setSessionCookie(ctx, {
				session,
				user: {
					...user.user,
					emailVerified: true
				}
			});
		} else await setSessionCookie(ctx, {
			session: currentSession.session,
			user: {
				...currentSession.user,
				emailVerified: true
			}
		});
	}
	if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
	return ctx.json({
		status: true,
		user: null
	});
});
async function handleOAuthUserInfo(c, opts) {
	const { userInfo, account, callbackURL, disableSignUp, overrideUserInfo } = opts;
	const dbUser = await c.context.internalAdapter.findOAuthUser(userInfo.email.toLowerCase(), account.accountId, account.providerId).catch((e) => {
		c.context.logger.error("Better auth was unable to query your database.\nError: ", e);
		redirectOnError(c, c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`, "internal_server_error");
	});
	let user = dbUser?.user;
	const isRegister = !user;
	if (dbUser) {
		const linkedAccount = dbUser.linkedAccount ?? dbUser.accounts.find((acc) => acc.providerId === account.providerId && acc.accountId === account.accountId);
		if (!linkedAccount) {
			const accountLinking = c.context.options.account?.accountLinking;
			const isTrustedProvider = opts.isTrustedProvider || opts.trustProviderByName !== false && c.context.trustedProviders.includes(account.providerId);
			const requireLocalEmailVerified = accountLinking?.requireLocalEmailVerified ?? true;
			if (!isTrustedProvider && !userInfo.emailVerified || requireLocalEmailVerified && !dbUser.user.emailVerified || accountLinking?.enabled === false || accountLinking?.disableImplicitLinking === true) {
				if (isDevelopment()) c.context.logger.warn(`User already exist but account isn't linked to ${account.providerId}. To read more about how account linking works in Better Auth see https://www.better-auth.com/docs/concepts/users-accounts#account-linking.`);
				return {
					error: "account not linked",
					data: null
				};
			}
			try {
				await c.context.internalAdapter.linkAccount({
					providerId: account.providerId,
					accountId: userInfo.id.toString(),
					userId: dbUser.user.id,
					accessToken: await setTokenUtil(account.accessToken, c.context),
					refreshToken: await setTokenUtil(account.refreshToken, c.context),
					idToken: account.idToken,
					accessTokenExpiresAt: account.accessTokenExpiresAt,
					refreshTokenExpiresAt: account.refreshTokenExpiresAt,
					scope: account.scope
				});
			} catch (e) {
				c.context.logger.error("Unable to link account", e);
				return {
					error: "unable to link account",
					data: null
				};
			}
			if (userInfo.emailVerified && !dbUser.user.emailVerified && userInfo.email.toLowerCase() === dbUser.user.email) await c.context.internalAdapter.updateUser(dbUser.user.id, { emailVerified: true });
			user = await applyUpdateUserInfoOnLink(c, dbUser.user.id, userInfo) ?? user;
		} else {
			const freshTokens = c.context.options.account?.updateAccountOnSignIn !== false ? Object.fromEntries(Object.entries({
				idToken: account.idToken,
				accessToken: await setTokenUtil(account.accessToken, c.context),
				refreshToken: await setTokenUtil(account.refreshToken, c.context),
				accessTokenExpiresAt: account.accessTokenExpiresAt,
				refreshTokenExpiresAt: account.refreshTokenExpiresAt,
				scope: account.scope
			}).filter(([_, value]) => value !== void 0)) : {};
			if (c.context.options.account?.storeAccountCookie) await setAccountCookie(c, {
				...linkedAccount,
				...freshTokens
			});
			if (Object.keys(freshTokens).length > 0) await c.context.internalAdapter.updateAccount(linkedAccount.id, freshTokens);
			if (userInfo.emailVerified && !dbUser.user.emailVerified && userInfo.email.toLowerCase() === dbUser.user.email) await c.context.internalAdapter.updateUser(dbUser.user.id, { emailVerified: true });
		}
		if (overrideUserInfo) {
			const { id: _id, email: _email, emailVerified: _emailVerified, name, image, ...providerProfile } = userInfo;
			const additionalUserFields = parseAdditionalUserInputFromProviderProfile(c.context.options, providerProfile, "update");
			user = await c.context.internalAdapter.updateUser(dbUser.user.id, {
				name,
				image,
				...additionalUserFields,
				email: userInfo.email.toLowerCase(),
				emailVerified: userInfo.email.toLowerCase() === dbUser.user.email ? dbUser.user.emailVerified || userInfo.emailVerified : userInfo.emailVerified
			});
		}
	} else {
		if (disableSignUp) return {
			error: "signup disabled",
			data: null,
			isRegister: false
		};
		try {
			const { id: _id, email: _email, emailVerified: _emailVerified, name, image, ...providerProfile } = userInfo;
			const additionalUserFields = parseAdditionalUserInputFromProviderProfile(c.context.options, providerProfile, "create");
			const accountData = {
				accessToken: await setTokenUtil(account.accessToken, c.context),
				refreshToken: await setTokenUtil(account.refreshToken, c.context),
				idToken: account.idToken,
				accessTokenExpiresAt: account.accessTokenExpiresAt,
				refreshTokenExpiresAt: account.refreshTokenExpiresAt,
				scope: account.scope,
				providerId: account.providerId,
				accountId: userInfo.id.toString()
			};
			const { user: createdUser, account: createdAccount } = await c.context.internalAdapter.createOAuthUser({
				name,
				image,
				...additionalUserFields,
				email: userInfo.email.toLowerCase(),
				emailVerified: userInfo.emailVerified
			}, accountData);
			user = createdUser;
			if (c.context.options.account?.storeAccountCookie) await setAccountCookie(c, createdAccount);
			if (!userInfo.emailVerified && user && c.context.options.emailVerification?.sendOnSignUp && c.context.options.emailVerification?.sendVerificationEmail) {
				const token = await createEmailVerificationToken(c.context.secret, user.email, void 0, c.context.options.emailVerification?.expiresIn);
				const url = `${c.context.baseURL}/verify-email?token=${token}&callbackURL=${encodeURIComponent(callbackURL || "/")}`;
				await c.context.runInBackgroundOrAwait(c.context.options.emailVerification.sendVerificationEmail({
					user,
					url,
					token
				}, c.request));
			}
		} catch (e) {
			c.context.logger.error(e);
			if (isAPIError(e)) return {
				error: e.message,
				data: null,
				isRegister: false
			};
			return {
				error: "unable to create user",
				data: null,
				isRegister: false
			};
		}
	}
	if (!user) return {
		error: "unable to create user",
		data: null,
		isRegister: false
	};
	const session = await c.context.internalAdapter.createSession(user.id);
	if (!session) return {
		error: "unable to create session",
		data: null,
		isRegister: false
	};
	return {
		data: {
			session,
			user
		},
		error: null,
		isRegister
	};
}
/**
* Apply the `account.accountLinking.updateUserInfoOnLink` policy: when enabled,
* copy the freshly linked provider's profile onto the local user, matching the
* field set persisted on sign-up. The local `email` and `emailVerified` are
* never changed, so a link can't rebind the account's identity, and
* `updateUser` drops `undefined` fields, so a provider that omits one leaves
* the existing column intact.
*
* Returns the updated user so a caller that issues a session can seed the
* cookie cache with the fresh row. Returns `undefined` when the policy is
* disabled or the update fails: a failed profile sync must not abort the link.
*/
async function applyUpdateUserInfoOnLink(c, userId, userInfo) {
	if (c.context.options.account?.accountLinking?.updateUserInfoOnLink !== true) return;
	try {
		const { id: _id, email: _email, emailVerified: _emailVerified, name, image, ...providerProfile } = userInfo;
		const additionalUserFields = parseAdditionalUserInputFromProviderProfile(c.context.options, providerProfile, "update");
		return await c.context.internalAdapter.updateUser(userId, {
			name,
			image,
			...additionalUserFields
		});
	} catch (e) {
		c.context.logger.warn("Could not update user info on account link", e);
		return;
	}
}
var listUserAccounts = createAuthEndpoint("/list-accounts", {
	method: "GET",
	use: [sessionMiddleware],
	metadata: { openapi: {
		operationId: "listUserAccounts",
		description: "List all accounts linked to the user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "array",
				items: {
					type: "object",
					properties: {
						id: { type: "string" },
						providerId: { type: "string" },
						createdAt: {
							type: "string",
							format: "date-time"
						},
						updatedAt: {
							type: "string",
							format: "date-time"
						},
						accountId: { type: "string" },
						userId: { type: "string" },
						scopes: {
							type: "array",
							items: { type: "string" }
						}
					},
					required: [
						"id",
						"providerId",
						"createdAt",
						"updatedAt",
						"accountId",
						"userId",
						"scopes"
					]
				}
			} } }
		} }
	} }
}, async (c) => {
	const session = c.context.session;
	const accounts = await c.context.internalAdapter.findAccounts(session.user.id);
	return c.json(accounts.map((a) => {
		const { scope, ...parsed } = parseAccountOutput(c.context.options, a);
		return {
			...parsed,
			scopes: scope?.split(",") || []
		};
	}));
});
var linkSocialAccount = createAuthEndpoint("/link-social", {
	method: "POST",
	requireHeaders: true,
	body: object({
		/**
		* Callback URL to redirect to after the user has signed in.
		*/
		callbackURL: string().meta({ description: "The URL to redirect to after the user has signed in" }).optional(),
		/**
		* OAuth2 provider to use
		*/
		provider: SocialProviderListEnum,
		/**
		* ID Token for direct authentication without redirect
		*/
		idToken: object({
			token: string(),
			nonce: string().optional(),
			accessToken: string().optional(),
			refreshToken: string().optional(),
			scopes: array(string()).optional()
		}).optional(),
		/**
		* Whether to allow sign up for new users
		*/
		requestSignUp: boolean().optional(),
		/**
		* Additional scopes to request when linking the account.
		* This is useful for requesting additional permissions when
		* linking a social account compared to the initial authentication.
		*/
		scopes: array(string()).meta({ description: "Additional scopes to request from the provider" }).optional(),
		/**
		* The URL to redirect to if there is an error during the link process.
		*/
		errorCallbackURL: string().meta({ description: "The URL to redirect to if there is an error during the link process" }).optional(),
		/**
		* Disable automatic redirection to the provider
		*
		* This is useful if you want to handle the redirection
		* yourself like in a popup or a different tab.
		*/
		disableRedirect: boolean().meta({ description: "Disable automatic redirection to the provider. Useful for handling the redirection yourself" }).optional(),
		/**
		* Any additional data to pass through the oauth flow.
		*/
		additionalData: record(string(), any()).optional()
	}),
	use: [sessionMiddleware],
	metadata: { openapi: {
		description: "Link a social account to the user",
		operationId: "linkSocialAccount",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					url: {
						type: "string",
						description: "The authorization URL to redirect the user to"
					},
					redirect: {
						type: "boolean",
						description: "Indicates if the user should be redirected to the authorization URL"
					},
					status: { type: "boolean" }
				},
				required: ["redirect"]
			} } }
		} }
	} }
}, async (c) => {
	const session = c.context.session;
	const provider = await getAwaitableValue(c.context.socialProviders, { value: c.body.provider });
	if (!provider) {
		c.context.logger.error("Provider not found. Make sure to add the provider in your auth config", { provider: c.body.provider });
		throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.PROVIDER_NOT_FOUND);
	}
	if (c.body.idToken) {
		if (!provider.verifyIdToken) {
			c.context.logger.error("Provider does not support id token verification", { provider: c.body.provider });
			throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.ID_TOKEN_NOT_SUPPORTED);
		}
		const { token, nonce } = c.body.idToken;
		if (!await provider.verifyIdToken(token, nonce, c)) {
			c.context.logger.warn("Invalid id token", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_TOKEN);
		}
		const linkingUserInfo = await provider.getUserInfo({
			idToken: token,
			accessToken: c.body.idToken.accessToken,
			refreshToken: c.body.idToken.refreshToken
		});
		if (!linkingUserInfo || !linkingUserInfo?.user) {
			c.context.logger.error("Failed to get user info", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO);
		}
		const linkingUserId = String(linkingUserInfo.user.id);
		if (!linkingUserInfo.user.email) {
			c.context.logger.error(missingEmailLogMessage(c.body.provider, { source: "id_token" }), { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.USER_EMAIL_NOT_FOUND);
		}
		if ((await c.context.internalAdapter.findAccounts(session.user.id)).find((a) => a.providerId === provider.id && a.accountId === linkingUserId)) return c.json({
			url: "",
			status: true,
			redirect: false
		});
		if (!c.context.trustedProviders.includes(provider.id) && !linkingUserInfo.user.emailVerified || c.context.options.account?.accountLinking?.enabled === false) throw APIError.from("UNAUTHORIZED", {
			message: "Account not linked - linking not allowed",
			code: "LINKING_NOT_ALLOWED"
		});
		if (linkingUserInfo.user.email?.toLowerCase() !== session.user.email.toLowerCase() && c.context.options.account?.accountLinking?.allowDifferentEmails !== true) throw APIError.from("UNAUTHORIZED", {
			message: "Account not linked - different emails not allowed",
			code: "LINKING_DIFFERENT_EMAILS_NOT_ALLOWED"
		});
		try {
			await c.context.internalAdapter.createAccount({
				userId: session.user.id,
				providerId: provider.id,
				accountId: linkingUserId,
				accessToken: c.body.idToken.accessToken,
				idToken: token,
				refreshToken: c.body.idToken.refreshToken,
				scope: c.body.idToken.scopes?.join(",")
			});
		} catch (_e) {
			throw APIError.from("EXPECTATION_FAILED", {
				message: "Account not linked - unable to create account",
				code: "LINKING_FAILED"
			});
		}
		await applyUpdateUserInfoOnLink(c, session.user.id, linkingUserInfo.user);
		return c.json({
			url: "",
			status: true,
			redirect: false
		});
	}
	const state = await generateState(c, {
		userId: session.user.id,
		email: session.user.email
	}, c.body.additionalData);
	const url = await provider.createAuthorizationURL({
		state: state.state,
		codeVerifier: state.codeVerifier,
		redirectURI: `${c.context.baseURL}/callback/${provider.id}`,
		scopes: c.body.scopes
	});
	if (!c.body.disableRedirect) c.setHeader("Location", url.toString());
	return c.json({
		url: url.toString(),
		redirect: !c.body.disableRedirect
	});
});
var unlinkAccount = createAuthEndpoint("/unlink-account", {
	method: "POST",
	body: object({
		providerId: string(),
		accountId: string().optional()
	}),
	use: [freshSessionMiddleware],
	metadata: { openapi: {
		description: "Unlink an account",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const { providerId, accountId } = ctx.body;
	const accounts = await ctx.context.internalAdapter.findAccounts(ctx.context.session.user.id);
	if (accounts.length === 1 && !ctx.context.options.account?.accountLinking?.allowUnlinkingAll) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.FAILED_TO_UNLINK_LAST_ACCOUNT);
	const accountExist = accounts.find((account) => accountId ? account.accountId === accountId && account.providerId === providerId : account.providerId === providerId);
	if (!accountExist) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
	await ctx.context.internalAdapter.deleteAccount(accountExist.id);
	return ctx.json({ status: true });
});
/**
* Resolves the user id an account-token operation should act on.
*
* A caller reaching the server over HTTP (a request or session headers are
* present) must have a valid session, and that session's user always wins.
* A trusted server-side `auth.api` caller with no session may instead name a
* `userId` directly. Throws `UNAUTHORIZED` when an HTTP caller is
* unauthenticated, and `USER_ID_OR_SESSION_REQUIRED` when neither a session
* nor a `userId` is available.
*
* When a durable store is authoritative, bypasses the cookie cache: these
* routes mint or refresh provider access tokens, so a server-side session
* revocation must take effect immediately rather than waiting for the cached
* cookie to expire. DB-less deployments keep the session in the cookie itself,
* so the cache is left in place for them.
*/
async function resolveUserId(ctx, userId) {
	const session = await getSessionFromCtx(ctx, { disableCookieCache: isStateful(ctx) });
	if (!session && (ctx.request || ctx.headers)) throw ctx.error("UNAUTHORIZED");
	const resolvedUserId = session?.user?.id || userId;
	if (!resolvedUserId) throw APIError.from("BAD_REQUEST", {
		message: "Either userId or session is required",
		code: "USER_ID_OR_SESSION_REQUIRED"
	});
	return resolvedUserId;
}
function matchesAccountSelection(ctx, account, { resolvedUserId, providerId, accountId }) {
	return (!shouldBindAccountCookieToSessionUser(ctx.context.options) || account.userId === resolvedUserId) && (!providerId || providerId === account.providerId) && (!accountId || account.accountId === accountId);
}
/**
* Fetches a currently-valid access token for a user's provider account,
* refreshing and persisting it when it is within five seconds of expiry.
* Shared by the `/get-access-token` endpoint and `/account-info` so both
* resolve and refresh tokens through one path.
*/
async function getValidAccessToken(ctx, { resolvedUserId, providerId, accountId, account: resolvedAccount }) {
	const provider = await getAwaitableValue(ctx.context.socialProviders, { value: providerId });
	if (!provider) throw APIError.from("BAD_REQUEST", {
		message: `Provider ${providerId} is not supported.`,
		code: "PROVIDER_NOT_SUPPORTED"
	});
	let account = resolvedAccount;
	if (!account) {
		const accountData = await getAccountCookie(ctx);
		if (accountData && matchesAccountSelection(ctx, accountData, {
			resolvedUserId,
			providerId,
			accountId
		})) account = accountData;
		else account = (await ctx.context.internalAdapter.findAccounts(resolvedUserId)).find((acc) => accountId ? acc.accountId === accountId && acc.providerId === providerId : acc.providerId === providerId);
	}
	if (!account) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
	try {
		let newTokens = null;
		const accessTokenExpired = account.accessTokenExpiresAt && new Date(account.accessTokenExpiresAt).getTime() - Date.now() < 5e3;
		if (account.refreshToken && accessTokenExpired && provider.refreshAccessToken) {
			const refreshToken = await decryptOAuthToken(account.refreshToken, ctx.context);
			newTokens = await provider.refreshAccessToken(refreshToken);
			const updatedData = {
				accessToken: await setTokenUtil(newTokens?.accessToken, ctx.context),
				accessTokenExpiresAt: newTokens?.accessTokenExpiresAt,
				refreshToken: newTokens?.refreshToken ? await setTokenUtil(newTokens.refreshToken, ctx.context) : account.refreshToken,
				refreshTokenExpiresAt: newTokens?.refreshTokenExpiresAt ?? account.refreshTokenExpiresAt,
				idToken: newTokens?.idToken || account.idToken
			};
			let updatedAccount = null;
			if (account.id) updatedAccount = await ctx.context.internalAdapter.updateAccount(account.id, updatedData);
			if (ctx.context.options.account?.storeAccountCookie) await setAccountCookie(ctx, {
				...account,
				...updatedAccount ?? updatedData
			});
		}
		const accessTokenExpiresAt = (() => {
			if (newTokens?.accessTokenExpiresAt) {
				if (typeof newTokens.accessTokenExpiresAt === "string") return new Date(newTokens.accessTokenExpiresAt);
				return newTokens.accessTokenExpiresAt;
			}
			if (account.accessTokenExpiresAt) {
				if (typeof account.accessTokenExpiresAt === "string") return new Date(account.accessTokenExpiresAt);
				return account.accessTokenExpiresAt;
			}
		})();
		return {
			accessToken: newTokens?.accessToken ?? await decryptOAuthToken(account.accessToken ?? "", ctx.context),
			accessTokenExpiresAt,
			scopes: account.scope?.split(",") ?? [],
			idToken: newTokens?.idToken ?? account.idToken ?? void 0
		};
	} catch (_error) {
		throw APIError.from("BAD_REQUEST", {
			message: "Failed to get a valid access token",
			code: "FAILED_TO_GET_ACCESS_TOKEN"
		});
	}
}
var getAccessToken = createAuthEndpoint("/get-access-token", {
	method: "POST",
	body: object({
		providerId: string().meta({ description: "The provider ID for the OAuth provider" }),
		accountId: string().meta({ description: "The account ID associated with the refresh token" }).optional(),
		userId: string().meta({ description: "The user ID associated with the account" }).optional()
	}),
	metadata: { openapi: {
		description: "Get a valid access token, doing a refresh if needed",
		responses: {
			200: {
				description: "A Valid access token",
				content: { "application/json": { schema: {
					type: "object",
					properties: {
						tokenType: { type: "string" },
						idToken: { type: "string" },
						accessToken: { type: "string" },
						accessTokenExpiresAt: {
							type: "string",
							format: "date-time"
						}
					}
				} } }
			},
			400: { description: "Invalid refresh token or provider configuration" }
		}
	} }
}, async (ctx) => {
	const { providerId, accountId, userId } = ctx.body || {};
	const tokens = await getValidAccessToken(ctx, {
		resolvedUserId: await resolveUserId(ctx, userId),
		providerId,
		accountId
	});
	return ctx.json(tokens);
});
var refreshToken = createAuthEndpoint("/refresh-token", {
	method: "POST",
	body: object({
		providerId: string().meta({ description: "The provider ID for the OAuth provider" }),
		accountId: string().meta({ description: "The account ID associated with the refresh token" }).optional(),
		userId: string().meta({ description: "The user ID associated with the account" }).optional()
	}),
	metadata: { openapi: {
		description: "Refresh the access token using a refresh token",
		responses: {
			200: {
				description: "Access token refreshed successfully",
				content: { "application/json": { schema: {
					type: "object",
					properties: {
						tokenType: { type: "string" },
						idToken: { type: "string" },
						accessToken: { type: "string" },
						refreshToken: { type: "string" },
						accessTokenExpiresAt: {
							type: "string",
							format: "date-time"
						},
						refreshTokenExpiresAt: {
							type: "string",
							format: "date-time"
						}
					}
				} } }
			},
			400: { description: "Invalid refresh token or provider configuration" }
		}
	} }
}, async (ctx) => {
	const { providerId, accountId, userId } = ctx.body;
	const resolvedUserId = await resolveUserId(ctx, userId);
	const provider = await getAwaitableValue(ctx.context.socialProviders, { value: providerId });
	if (!provider) throw APIError.from("BAD_REQUEST", {
		message: `Provider ${providerId} is not supported.`,
		code: "PROVIDER_NOT_SUPPORTED"
	});
	if (!provider.refreshAccessToken) throw APIError.from("BAD_REQUEST", {
		message: `Provider ${providerId} does not support token refreshing.`,
		code: "TOKEN_REFRESH_NOT_SUPPORTED"
	});
	let account = void 0;
	const accountData = await getAccountCookie(ctx);
	const usedAccountCookie = !!accountData && matchesAccountSelection(ctx, accountData, {
		resolvedUserId,
		providerId,
		accountId
	});
	if (usedAccountCookie) account = accountData;
	else account = (await ctx.context.internalAdapter.findAccounts(resolvedUserId)).find((acc) => accountId ? acc.accountId === accountId && acc.providerId === providerId : acc.providerId === providerId);
	if (!account) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
	const refreshToken = account.refreshToken ?? void 0;
	if (!refreshToken) throw APIError.from("BAD_REQUEST", {
		message: "Refresh token not found",
		code: "REFRESH_TOKEN_NOT_FOUND"
	});
	try {
		const decryptedRefreshToken = await decryptOAuthToken(refreshToken, ctx.context);
		const tokens = await provider.refreshAccessToken(decryptedRefreshToken);
		const resolvedRefreshToken = tokens.refreshToken ? await setTokenUtil(tokens.refreshToken, ctx.context) : refreshToken;
		const resolvedRefreshTokenExpiresAt = tokens.refreshTokenExpiresAt ?? account.refreshTokenExpiresAt;
		if (account.id) {
			const updateData = {
				...account || {},
				accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
				refreshToken: resolvedRefreshToken,
				accessTokenExpiresAt: tokens.accessTokenExpiresAt,
				refreshTokenExpiresAt: resolvedRefreshTokenExpiresAt,
				scope: tokens.scopes?.join(",") || account.scope,
				idToken: tokens.idToken || account.idToken
			};
			await ctx.context.internalAdapter.updateAccount(account.id, updateData);
		}
		if (usedAccountCookie && ctx.context.options.account?.storeAccountCookie) await setAccountCookie(ctx, {
			...accountData,
			accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
			refreshToken: resolvedRefreshToken,
			accessTokenExpiresAt: tokens.accessTokenExpiresAt,
			refreshTokenExpiresAt: resolvedRefreshTokenExpiresAt,
			scope: tokens.scopes?.join(",") || accountData.scope,
			idToken: tokens.idToken || accountData.idToken
		});
		return ctx.json({
			accessToken: tokens.accessToken,
			refreshToken: tokens.refreshToken ?? decryptedRefreshToken,
			accessTokenExpiresAt: tokens.accessTokenExpiresAt,
			refreshTokenExpiresAt: resolvedRefreshTokenExpiresAt,
			scope: tokens.scopes?.join(",") || account.scope,
			idToken: tokens.idToken || account.idToken,
			providerId: account.providerId,
			accountId: account.accountId
		});
	} catch (_error) {
		throw APIError.from("BAD_REQUEST", {
			message: "Failed to refresh access token",
			code: "FAILED_TO_REFRESH_ACCESS_TOKEN"
		});
	}
});
var accountInfo = createAuthEndpoint("/account-info", {
	method: "GET",
	metadata: { openapi: {
		description: "Get the account info provided by the provider",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					user: {
						type: "object",
						properties: {
							id: { type: "string" },
							name: { type: "string" },
							email: { type: "string" },
							image: { type: "string" },
							emailVerified: { type: "boolean" }
						},
						required: ["id", "emailVerified"]
					},
					data: {
						type: "object",
						properties: {},
						additionalProperties: true
					}
				},
				required: ["user", "data"],
				additionalProperties: false
			} } }
		} }
	} },
	query: optional(object({
		accountId: string().meta({ description: "The provider given account id for which to get the account info" }).optional(),
		providerId: string().meta({ description: "The provider ID to disambiguate provider-issued account IDs" }).optional(),
		userId: string().meta({ description: "The user ID associated with the account" }).optional()
	}))
}, async (ctx) => {
	const { accountId: providedAccountId, providerId: providedProviderId, userId } = ctx.query || {};
	const resolvedUserId = await resolveUserId(ctx, userId);
	let account = void 0;
	if (!providedAccountId) {
		if (ctx.context.options.account?.storeAccountCookie) {
			const accountData = await getAccountCookie(ctx);
			if (accountData && matchesAccountSelection(ctx, accountData, {
				resolvedUserId,
				providerId: providedProviderId
			})) account = accountData;
		}
	} else {
		const matchingAccounts = (await ctx.context.internalAdapter.findAccounts(resolvedUserId)).filter((acc) => acc.accountId === providedAccountId && (!providedProviderId || acc.providerId === providedProviderId));
		if (matchingAccounts.length > 1) throw APIError.from("BAD_REQUEST", {
			message: "Multiple accounts share this account ID. Pass a providerId to disambiguate.",
			code: "AMBIGUOUS_ACCOUNT"
		});
		account = matchingAccounts[0];
	}
	if (!account || !matchesAccountSelection(ctx, account, { resolvedUserId })) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.ACCOUNT_NOT_FOUND);
	const provider = await getAwaitableValue(ctx.context.socialProviders, { value: account.providerId });
	if (!provider) throw APIError.from("BAD_REQUEST", {
		message: "Account is not associated with a configured social provider.",
		code: "PROVIDER_NOT_CONFIGURED"
	});
	const tokens = await getValidAccessToken(ctx, {
		resolvedUserId,
		providerId: account.providerId,
		accountId: account.accountId,
		account
	});
	if (!tokens.accessToken) throw APIError.from("BAD_REQUEST", {
		message: "Access token not found",
		code: "ACCESS_TOKEN_NOT_FOUND"
	});
	const info = await provider.getUserInfo({
		...tokens,
		accessToken: tokens.accessToken
	});
	return ctx.json(info);
});
var schema = object({
	code: string().optional(),
	error: string().optional(),
	device_id: string().optional(),
	error_description: string().optional(),
	state: string().optional(),
	user: string().optional()
});
var callbackOAuth = createAuthEndpoint("/callback/:id", {
	method: ["GET", "POST"],
	operationId: "handleOAuthCallback",
	body: schema.optional(),
	query: schema.optional(),
	metadata: {
		...HIDE_METADATA,
		allowedMediaTypes: ["application/x-www-form-urlencoded", "application/json"]
	}
}, async (c) => {
	let queryOrBody;
	const defaultErrorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
	if (c.method === "POST") {
		const postData = c.body ? schema.parse(c.body) : {};
		const queryData = c.query ? schema.parse(c.query) : {};
		const mergedData = schema.parse({
			...postData,
			...queryData
		});
		const params = new URLSearchParams();
		for (const [key, value] of Object.entries(mergedData)) if (value !== void 0 && value !== null) params.set(key, String(value));
		const redirectURL = `${c.context.baseURL}/callback/${c.params.id}?${params.toString()}`;
		throw c.redirect(redirectURL);
	}
	try {
		if (c.method === "GET") queryOrBody = schema.parse(c.query);
		else if (c.method === "POST") queryOrBody = schema.parse(c.body);
		else throw new Error("Unsupported method");
	} catch (e) {
		c.context.logger.error("INVALID_CALLBACK_REQUEST", e);
		redirectOnError(c, defaultErrorURL, "invalid_callback_request");
	}
	const { code, error, error_description, device_id, user: userData } = queryOrBody;
	const { codeVerifier, callbackURL, link, errorURL, newUserURL, requestSignUp } = await parseState(c);
	const resolvedErrorURL = errorURL ?? defaultErrorURL;
	if (error) redirectOnError(c, resolvedErrorURL, error, error_description);
	if (!code) {
		c.context.logger.warn("Code not found");
		redirectOnError(c, resolvedErrorURL, "no_code");
	}
	const provider = await getAwaitableValue(c.context.socialProviders, { value: c.params.id });
	if (!provider) {
		c.context.logger.warn("OAuth provider not found", { providerId: c.params.id });
		redirectOnError(c, resolvedErrorURL, "oauth_provider_not_found");
	}
	let tokens;
	try {
		tokens = await provider.validateAuthorizationCode({
			code,
			codeVerifier,
			deviceId: device_id,
			redirectURI: `${c.context.baseURL}/callback/${provider.id}`
		});
	} catch (e) {
		c.context.logger.error("", e);
		redirectOnError(c, resolvedErrorURL, "invalid_code");
	}
	if (!tokens) redirectOnError(c, resolvedErrorURL, "invalid_code");
	const parsedUserData = userData ? safeJSONParse(userData) : null;
	const userInfo = await provider.getUserInfo({
		...tokens,
		/**
		* The user object from the provider
		* This is only available for some providers like Apple
		*/
		user: parsedUserData ?? void 0
	}).then((res) => res?.user);
	if (!userInfo || userInfo.id === void 0 || userInfo.id === null || userInfo.id === "") {
		c.context.logger.error("Unable to get user info");
		redirectOnError(c, resolvedErrorURL, "unable_to_get_user_info");
	}
	const providerAccountId = String(userInfo.id);
	if (!callbackURL) {
		c.context.logger.error("No callback URL found");
		redirectOnError(c, resolvedErrorURL, "no_callback_url");
	}
	if (link) {
		if (!c.context.trustedProviders.includes(provider.id) && !userInfo.emailVerified || c.context.options.account?.accountLinking?.enabled === false) {
			c.context.logger.error("Unable to link account - untrusted provider");
			redirectOnError(c, resolvedErrorURL, "unable_to_link_account");
		}
		if (userInfo.email?.toLowerCase() !== link.email.toLowerCase() && c.context.options.account?.accountLinking?.allowDifferentEmails !== true) redirectOnError(c, resolvedErrorURL, "email_doesn't_match");
		const existingAccount = await c.context.internalAdapter.findAccountByProviderId(providerAccountId, provider.id);
		if (existingAccount) {
			if (existingAccount.userId.toString() !== link.userId.toString()) redirectOnError(c, resolvedErrorURL, "account_already_linked_to_different_user");
			const updateData = Object.fromEntries(Object.entries({
				accessToken: await setTokenUtil(tokens.accessToken, c.context),
				refreshToken: await setTokenUtil(tokens.refreshToken, c.context),
				idToken: tokens.idToken,
				accessTokenExpiresAt: tokens.accessTokenExpiresAt,
				refreshTokenExpiresAt: tokens.refreshTokenExpiresAt,
				scope: tokens.scopes?.join(",")
			}).filter(([_, value]) => value !== void 0));
			await c.context.internalAdapter.updateAccount(existingAccount.id, updateData);
		} else if (!await c.context.internalAdapter.createAccount({
			userId: link.userId,
			providerId: provider.id,
			accountId: providerAccountId,
			...tokens,
			accessToken: await setTokenUtil(tokens.accessToken, c.context),
			refreshToken: await setTokenUtil(tokens.refreshToken, c.context),
			scope: tokens.scopes?.join(",")
		})) redirectOnError(c, resolvedErrorURL, "unable_to_link_account");
		await applyUpdateUserInfoOnLink(c, link.userId, userInfo);
		let toRedirectTo;
		try {
			toRedirectTo = callbackURL.toString();
		} catch {
			toRedirectTo = callbackURL;
		}
		throw c.redirect(toRedirectTo);
	}
	if (!userInfo.email) {
		c.context.logger.error(missingEmailLogMessage(provider.id));
		redirectOnError(c, resolvedErrorURL, "email_not_found");
	}
	const accountData = {
		providerId: provider.id,
		accountId: providerAccountId,
		...tokens,
		scope: tokens.scopes?.join(",")
	};
	let result;
	try {
		result = await handleOAuthUserInfo(c, {
			userInfo: {
				...userInfo,
				id: providerAccountId,
				email: userInfo.email,
				name: userInfo.name || ""
			},
			account: accountData,
			callbackURL,
			disableSignUp: provider.disableImplicitSignUp && !requestSignUp || provider.options?.disableSignUp,
			overrideUserInfo: provider.options?.overrideUserInfoOnSignIn
		});
	} catch (e) {
		if (isAPIError(e) && e.body?.code) redirectOnError(c, resolvedErrorURL, e.body.code, e.body.message);
		throw e;
	}
	if (result.error) {
		c.context.logger.error(result.error.split(" ").join("_"));
		redirectOnError(c, resolvedErrorURL, result.error.split(" ").join("_"));
	}
	const { session, user } = result.data;
	await setSessionCookie(c, {
		session,
		user
	});
	let toRedirectTo;
	try {
		toRedirectTo = (result.isRegister ? newUserURL || callbackURL : callbackURL).toString();
	} catch {
		toRedirectTo = result.isRegister ? newUserURL || callbackURL : callbackURL;
	}
	throw c.redirect(toRedirectTo);
});
function sanitize(input) {
	return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/&(?!amp;|lt;|gt;|quot;|#39;|#x[0-9a-fA-F]+;|#[0-9]+;)/g, "&amp;");
}
var html = (options, code = "Unknown", description = null) => {
	const custom = options.onAPIError?.customizeDefaultErrorPage;
	return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Error</title>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        font-family: ${custom?.font?.defaultFamily || "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"};
        background: ${custom?.colors?.background || "var(--background)"};
        color: var(--foreground);
        margin: 0;
      }
      :root,
      :host {
        --spacing: 0.25rem;
        --container-md: 28rem;
        --text-sm: ${custom?.size?.textSm || "0.875rem"};
        --text-sm--line-height: calc(1.25 / 0.875);
        --text-2xl: ${custom?.size?.text2xl || "1.5rem"};
        --text-2xl--line-height: calc(2 / 1.5);
        --text-4xl: ${custom?.size?.text4xl || "2.25rem"};
        --text-4xl--line-height: calc(2.5 / 2.25);
        --text-6xl: ${custom?.size?.text6xl || "3rem"};
        --text-6xl--line-height: 1;
        --font-weight-medium: 500;
        --font-weight-semibold: 600;
        --font-weight-bold: 700;
        --default-transition-duration: 150ms;
        --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        --radius: ${custom?.size?.radiusSm || "0.625rem"};
        --default-mono-font-family: ${custom?.font?.monoFamily || "var(--font-geist-mono)"};
        --primary: ${custom?.colors?.primary || "black"};
        --primary-foreground: ${custom?.colors?.primaryForeground || "white"};
        --background: ${custom?.colors?.background || "white"};
        --foreground: ${custom?.colors?.foreground || "oklch(0.271 0 0)"};
        --border: ${custom?.colors?.border || "oklch(0.89 0 0)"};
        --destructive: ${custom?.colors?.destructive || "oklch(0.55 0.15 25.723)"};
        --muted-foreground: ${custom?.colors?.mutedForeground || "oklch(0.545 0 0)"};
        --corner-border: ${custom?.colors?.cornerBorder || "#404040"};
      }

      button, .btn {
        cursor: pointer;
        background: none;
        border: none;
        color: inherit;
        font: inherit;
        transition: all var(--default-transition-duration)
          var(--default-transition-timing-function);
      }
      button:hover, .btn:hover {
        opacity: 0.8;
      }

      @media (prefers-color-scheme: dark) {
        :root,
        :host {
          --primary: ${custom?.colors?.primary || "white"};
          --primary-foreground: ${custom?.colors?.primaryForeground || "black"};
          --background: ${custom?.colors?.background || "oklch(0.15 0 0)"};
          --foreground: ${custom?.colors?.foreground || "oklch(0.98 0 0)"};
          --border: ${custom?.colors?.border || "oklch(0.27 0 0)"};
          --destructive: ${custom?.colors?.destructive || "oklch(0.65 0.15 25.723)"};
          --muted-foreground: ${custom?.colors?.mutedForeground || "oklch(0.65 0 0)"};
          --corner-border: ${custom?.colors?.cornerBorder || "#a0a0a0"};
        }
      }
      @media (max-width: 640px) {
        :root, :host {
          --text-6xl: 2.5rem;
          --text-2xl: 1.25rem;
          --text-sm: 0.8125rem;
        }
      }
      @media (max-width: 480px) {
        :root, :host {
          --text-6xl: 2rem;
          --text-2xl: 1.125rem;
        }
      }
    </style>
  </head>
  <body style="width: 100vw; min-height: 100vh; overflow-x: hidden; overflow-y: auto;">
    <div
        style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            position: relative;
            width: 100%;
            min-height: 100vh;
            padding: 1rem;
        "
        >
${custom?.disableBackgroundGrid ? "" : `
      <div
        style="
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, ${custom?.colors?.gridColor || "var(--border)"} 1px, transparent 1px),
            linear-gradient(to bottom, ${custom?.colors?.gridColor || "var(--border)"} 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.6;
          pointer-events: none;
          width: 100vw;
          height: 100vh;
        "
      ></div>
      <div
        style="
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${custom?.colors?.background || "var(--background)"};
          mask-image: radial-gradient(ellipse at center, transparent 20%, black);
          -webkit-mask-image: radial-gradient(ellipse at center, transparent 20%, black);
          pointer-events: none;
        "
      ></div>
`}

<div
  style="
    position: relative;
    z-index: 10;
    border: 2px solid var(--border);
    background: ${custom?.colors?.cardBackground || "var(--background)"};
    padding: 1.5rem;
    max-width: 42rem;
    width: 100%;
  "
>
    ${custom?.disableCornerDecorations ? "" : `
        <!-- Corner decorations -->
        <div
          style="
            position: absolute;
            top: -2px;
            left: -2px;
            width: 2rem;
            height: 2rem;
            border-top: 4px solid var(--corner-border);
            border-left: 4px solid var(--corner-border);
          "
        ></div>
        <div
          style="
            position: absolute;
            top: -2px;
            right: -2px;
            width: 2rem;
            height: 2rem;
            border-top: 4px solid var(--corner-border);
            border-right: 4px solid var(--corner-border);
          "
        ></div>
  
        <div
          style="
            position: absolute;
            bottom: -2px;
            left: -2px;
            width: 2rem;
            height: 2rem;
            border-bottom: 4px solid var(--corner-border);
            border-left: 4px solid var(--corner-border);
          "
        ></div>
        <div
          style="
            position: absolute;
            bottom: -2px;
            right: -2px;
            width: 2rem;
            height: 2rem;
            border-bottom: 4px solid var(--corner-border);
            border-right: 4px solid var(--corner-border);
          "
        ></div>`}

        <div style="text-align: center; margin-bottom: 1.5rem;">
          <div style="margin-bottom: 1.5rem;">
            <div
              style="
                display: inline-block;
                border: 2px solid ${custom?.disableTitleBorder ? "transparent" : custom?.colors?.titleBorder || "var(--destructive)"};
                padding: 0.375rem 1rem;
              "
            >
              <h1
                style="
                  font-size: var(--text-6xl);
                  font-weight: var(--font-weight-semibold);
                  color: ${custom?.colors?.titleColor || "var(--foreground)"};
                  letter-spacing: -0.02em;
                  margin: 0;
                "
              >
                ERROR
              </h1>
            </div>
            <div
              style="
                height: 2px;
                background-color: var(--border);
                width: calc(100% + 3rem);
                margin-left: -1.5rem;
                margin-top: 1.5rem;
              "
            ></div>
          </div>

          <h2
            style="
              font-size: var(--text-2xl);
              font-weight: var(--font-weight-semibold);
              color: var(--foreground);
              margin: 0 0 1rem;
            "
          >
            Something went wrong
          </h2>

          <div
            style="
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                border: 2px solid var(--border);
                background-color: var(--muted);
                padding: 0.375rem 0.75rem;
                margin: 0 0 1rem;
                flex-wrap: wrap;
                justify-content: center;
            "
            >
            <span
                style="
                font-size: 0.75rem;
                color: var(--muted-foreground);
                font-weight: var(--font-weight-semibold);
                "
            >
                CODE:
            </span>
            <span
                style="
                font-size: var(--text-sm);
                font-family: var(--default-mono-font-family, monospace);
                color: var(--foreground);
                word-break: break-all;
                "
            >
                ${sanitize(code)}
            </span>
            </div>

          <p
            style="
              color: var(--muted-foreground);
              max-width: 28rem;
              margin: 0 auto;
              font-size: var(--text-sm);
              line-height: 1.5;
              text-wrap: pretty;
            "
          >
            ${!description ? `We encountered an unexpected error. Please try again or return to the home page. If you're a developer, you can find <a href='https://better-auth.com/docs/reference/errors/${encodeURIComponent(code)}' target='_blank' rel="noopener noreferrer" style='color: var(--foreground); text-decoration: underline;'>more information about the error</a>.` : description}
          </p>
        </div>

        <div
          style="
            display: flex;
            gap: 0.75rem;
            margin-top: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
          "
        >
          <a
            href="/"
            style="
              text-decoration: none;
            "
          >
            <div
              style="
                border: 2px solid var(--border);
                background: var(--primary);
                color: var(--primary-foreground);
                padding: 0.5rem 1rem;
                border-radius: 0;
                white-space: nowrap;
              "
              class="btn"
            >
              Go Home
            </div>
          </a>
          <a
            href="https://better-auth.com/docs/reference/errors/${encodeURIComponent(code)}?askai=${encodeURIComponent(`What does the error code ${code} mean?`)}"
            target="_blank"
            rel="noopener noreferrer"
            style="
              text-decoration: none;
            "
          >
            <div
              style="
                border: 2px solid var(--border);
                background: transparent;
                color: var(--foreground);
                padding: 0.5rem 1rem;
                border-radius: 0;
                white-space: nowrap;
              "
              class="btn"
            >
              Ask AI
            </div>
          </a>
        </div>
      </div>
    </div>
  </body>
</html>`;
};
var error = createAuthEndpoint("/error", {
	method: "GET",
	metadata: {
		...HIDE_METADATA,
		openapi: {
			description: "Displays an error page",
			responses: { "200": {
				description: "Success",
				content: { "text/html": { schema: {
					type: "string",
					description: "The HTML content of the error page"
				} } }
			} }
		}
	}
}, async (c) => {
	const url = new URL(c.request?.url || "");
	const unsanitizedCode = url.searchParams.get("error") || "UNKNOWN";
	const unsanitizedDescription = url.searchParams.get("error_description") || null;
	const safeCode = /^[\'A-Za-z0-9_-]+$/.test(unsanitizedCode || "") ? unsanitizedCode : "UNKNOWN";
	const safeDescription = unsanitizedDescription ? sanitize(unsanitizedDescription) : null;
	const queryParams = new URLSearchParams();
	queryParams.set("error", safeCode);
	if (unsanitizedDescription) queryParams.set("error_description", unsanitizedDescription);
	const options = c.context.options;
	const errorURL = options.onAPIError?.errorURL;
	if (errorURL) return new Response(null, {
		status: 302,
		headers: { Location: `${errorURL}${errorURL.includes("?") ? "&" : "?"}${queryParams.toString()}` }
	});
	if (isProduction && !options.onAPIError?.customizeDefaultErrorPage) return new Response(null, {
		status: 302,
		headers: { Location: `/?${queryParams.toString()}` }
	});
	return new Response(html(c.context.options, safeCode, safeDescription), { headers: { "Content-Type": "text/html" } });
});
var ok = createAuthEndpoint("/ok", {
	method: "GET",
	metadata: {
		...HIDE_METADATA,
		openapi: {
			description: "Check if the API is working",
			responses: { "200": {
				description: "API is working",
				content: { "application/json": { schema: {
					type: "object",
					properties: { ok: {
						type: "boolean",
						description: "Indicates if the API is working"
					} },
					required: ["ok"]
				} } }
			} }
		}
	}
}, async (ctx) => {
	return ctx.json({ ok: true });
});
async function validatePassword(ctx, data) {
	const credentialAccount = (await ctx.context.internalAdapter.findAccounts(data.userId))?.find((account) => account.providerId === "credential");
	const currentPassword = credentialAccount?.password;
	if (!credentialAccount || !currentPassword) return false;
	return await ctx.context.password.verify({
		hash: currentPassword,
		password: data.password
	});
}
async function checkPassword(userId, c) {
	const credentialAccount = (await c.context.internalAdapter.findAccounts(userId))?.find((account) => account.providerId === "credential");
	const currentPassword = credentialAccount?.password;
	const password = c.body.password;
	if (!credentialAccount || !currentPassword || !password) {
		if (password) await c.context.password.hash(password);
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	}
	if (!await c.context.password.verify({
		hash: currentPassword,
		password
	})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	return true;
}
function redirectError(ctx, callbackURL, query) {
	const url = callbackURL ? new URL(callbackURL, ctx.baseURL) : new URL(`${ctx.baseURL}/error`);
	if (query) Object.entries(query).forEach(([k, v]) => url.searchParams.set(k, v));
	return url.href;
}
function redirectCallback(ctx, callbackURL, query) {
	const url = new URL(callbackURL, ctx.baseURL);
	if (query) Object.entries(query).forEach(([k, v]) => url.searchParams.set(k, v));
	return url.href;
}
var requestPasswordReset = createAuthEndpoint("/request-password-reset", {
	method: "POST",
	body: object({
		/**
		* The email address of the user to send a password reset email to.
		*/
		email: email().meta({ description: "The email address of the user to send a password reset email to" }),
		/**
		* The URL to redirect the user to reset their password.
		* If the token isn't valid or expired, it'll be redirected with a query parameter `?
		* error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?
		* token=VALID_TOKEN
		*/
		redirectTo: string().meta({ description: "The URL to redirect the user to reset their password. If the token isn't valid or expired, it'll be redirected with a query parameter `?error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?token=VALID_TOKEN" }).optional()
	}),
	metadata: { openapi: {
		operationId: "requestPasswordReset",
		description: "Send a password reset email to the user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					status: { type: "boolean" },
					message: { type: "string" }
				}
			} } }
		} }
	} },
	use: [originCheck((ctx) => ctx.body.redirectTo)]
}, async (ctx) => {
	if (!ctx.context.options.emailAndPassword?.sendResetPassword) {
		ctx.context.logger.error("Reset password isn't enabled.Please pass an emailAndPassword.sendResetPassword function in your auth config!");
		throw APIError.from("BAD_REQUEST", {
			message: "Reset password isn't enabled",
			code: "RESET_PASSWORD_DISABLED"
		});
	}
	const { email, redirectTo } = ctx.body;
	const user = await ctx.context.internalAdapter.findUserByEmail(email, { includeAccounts: true });
	if (!user) {
		/**
		* We simulate the verification token generation and the database lookup
		* to mitigate timing attacks.
		*/
		generateId(24);
		await ctx.context.internalAdapter.findVerificationValue("dummy-verification-token");
		ctx.context.logger.warn("Reset Password: User not found");
		return ctx.json({
			status: true,
			message: "If this email exists in our system, check your email for the reset link"
		});
	}
	const expiresAt = getDate(ctx.context.options.emailAndPassword.resetPasswordTokenExpiresIn || 3600, "sec");
	const verificationToken = generateId(24);
	await ctx.context.internalAdapter.createVerificationValue({
		value: user.user.id,
		identifier: `reset-password:${verificationToken}`,
		expiresAt
	});
	const callbackURL = redirectTo ? encodeURIComponent(redirectTo) : "";
	const url = `${ctx.context.baseURL}/reset-password/${verificationToken}?callbackURL=${callbackURL}`;
	await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailAndPassword.sendResetPassword({
		user: user.user,
		url,
		token: verificationToken
	}, ctx.request));
	return ctx.json({
		status: true,
		message: "If this email exists in our system, check your email for the reset link"
	});
});
var requestPasswordResetCallback = createAuthEndpoint("/reset-password/:token", {
	method: "GET",
	operationId: "resetPasswordCallback",
	query: object({ callbackURL: string().meta({ description: "The URL to redirect the user to reset their password" }) }),
	use: [originCheck((ctx) => ctx.query.callbackURL)],
	metadata: { openapi: {
		operationId: "resetPasswordCallback",
		description: "Redirects the user to the callback URL with the token",
		parameters: [{
			name: "token",
			in: "path",
			required: true,
			description: "The token to reset the password",
			schema: { type: "string" }
		}, {
			name: "callbackURL",
			in: "query",
			required: true,
			description: "The URL to redirect the user to reset their password",
			schema: { type: "string" }
		}],
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { token: { type: "string" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const { token } = ctx.params;
	const { callbackURL } = ctx.query;
	if (!token || !callbackURL) throw ctx.redirect(redirectError(ctx.context, callbackURL, { error: "INVALID_TOKEN" }));
	const verification = await ctx.context.internalAdapter.findVerificationValue(`reset-password:${token}`);
	if (!verification || verification.expiresAt < /* @__PURE__ */ new Date()) throw ctx.redirect(redirectError(ctx.context, callbackURL, { error: "INVALID_TOKEN" }));
	throw ctx.redirect(redirectCallback(ctx.context, callbackURL, { token }));
});
var resetPassword = createAuthEndpoint("/reset-password", {
	method: "POST",
	operationId: "resetPassword",
	query: object({ token: string().optional() }).optional(),
	body: object({
		newPassword: string().meta({ description: "The new password to set" }),
		token: string().meta({ description: "The token to reset the password" }).optional()
	}),
	metadata: { openapi: {
		operationId: "resetPassword",
		description: "Reset the password for a user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { status: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const token = ctx.body.token || ctx.query?.token;
	if (!token) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_TOKEN);
	const { newPassword } = ctx.body;
	const minLength = ctx.context.password?.config.minPasswordLength;
	const maxLength = ctx.context.password?.config.maxPasswordLength;
	if (newPassword.length < minLength) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_SHORT);
	if (newPassword.length > maxLength) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_LONG);
	const id = `reset-password:${token}`;
	const verification = await ctx.context.internalAdapter.consumeVerificationValue(id);
	if (!verification) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_TOKEN);
	const userId = verification.value;
	const hashedPassword = await ctx.context.password.hash(newPassword);
	if (!(await ctx.context.internalAdapter.findAccounts(userId)).find((ac) => ac.providerId === "credential")) await ctx.context.internalAdapter.createAccount({
		userId,
		providerId: "credential",
		password: hashedPassword,
		accountId: userId
	});
	else await ctx.context.internalAdapter.updatePassword(userId, hashedPassword);
	if (ctx.context.options.emailAndPassword?.onPasswordReset) {
		const user = await ctx.context.internalAdapter.findUserById(userId);
		if (user) await ctx.context.options.emailAndPassword.onPasswordReset({ user }, ctx.request);
	}
	if (ctx.context.options.emailAndPassword?.revokeSessionsOnPasswordReset) await ctx.context.internalAdapter.deleteUserSessions(userId);
	return ctx.json({ status: true });
});
var verifyPassword$1 = createAuthEndpoint("/verify-password", {
	method: "POST",
	body: object({ 
	/**
	* The password to verify
	*/
password: string().meta({ description: "The password to verify" }) }),
	metadata: {
		scope: "server",
		openapi: {
			operationId: "verifyPassword",
			description: "Verify the current user's password",
			responses: { "200": {
				description: "Success",
				content: { "application/json": { schema: {
					type: "object",
					properties: { status: { type: "boolean" } }
				} } }
			} }
		}
	},
	use: [sensitiveSessionMiddleware]
}, async (ctx) => {
	const { password } = ctx.body;
	const session = ctx.context.session;
	if (!await validatePassword(ctx, {
		password,
		userId: session.user.id
	})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	return ctx.json({ status: true });
});
var socialSignInBodySchema = object({
	/**
	* Callback URL to redirect to after the user
	* has signed in.
	*/
	callbackURL: string().meta({ description: "Callback URL to redirect to after the user has signed in" }).optional(),
	/**
	* callback url to redirect if the user is newly registered.
	*
	* useful if you have different routes for existing users and new users
	*/
	newUserCallbackURL: string().optional(),
	/**
	* Callback url to redirect to if an error happens
	*
	* If it's initiated from the client sdk this defaults to
	* the current url.
	*/
	errorCallbackURL: string().meta({ description: "Callback URL to redirect to if an error happens" }).optional(),
	/**
	* OAuth2 provider to use`
	*/
	provider: SocialProviderListEnum,
	/**
	* Disable automatic redirection to the provider
	*
	* This is useful if you want to handle the redirection
	* yourself like in a popup or a different tab.
	*/
	disableRedirect: boolean().meta({ description: "Disable automatic redirection to the provider. Useful for handling the redirection yourself" }).optional(),
	/**
	* ID token from the provider
	*
	* This is used to sign in the user
	* if the user is already signed in with the
	* provider in the frontend.
	*
	* Only applicable if the provider supports
	* it. Currently only `apple` and `google` is
	* supported out of the box.
	*/
	idToken: optional(object({
		/**
		* ID token from the provider
		*/
		token: string().meta({ description: "ID token from the provider" }),
		/**
		* The nonce used to generate the token
		*/
		nonce: string().meta({ description: "Nonce used to generate the token" }).optional(),
		/**
		* Access token from the provider
		*/
		accessToken: string().meta({ description: "Access token from the provider" }).optional(),
		/**
		* Refresh token from the provider
		*/
		refreshToken: string().meta({ description: "Refresh token from the provider" }).optional(),
		/**
		* Expiry date of the token
		*/
		expiresAt: number().meta({ description: "Expiry date of the token" }).optional(),
		/**
		* The user object from the provider.
		* This is only available for some providers like Apple.
		*/
		user: object({
			name: object({
				firstName: string().optional(),
				lastName: string().optional()
			}).optional(),
			email: string().optional()
		}).meta({ description: "The user object from the provider. Only available for some providers like Apple." }).optional()
	})),
	scopes: array(string()).meta({ description: "Array of scopes to request from the provider. This will override the default scopes passed." }).optional(),
	/**
	* Explicitly request sign-up
	*
	* Should be used to allow sign up when
	* disableImplicitSignUp for this provider is
	* true
	*/
	requestSignUp: boolean().meta({ description: "Explicitly request sign-up. Useful when disableImplicitSignUp is true for this provider" }).optional(),
	/**
	* The login hint to use for the authorization code request
	*/
	loginHint: string().meta({ description: "The login hint to use for the authorization code request" }).optional(),
	/**
	* Additional data to be passed through the OAuth flow
	*/
	additionalData: record(string(), any()).optional().meta({ description: "Additional data to be passed through the OAuth flow" })
});
var signInSocial = () => createAuthEndpoint("/sign-in/social", {
	method: "POST",
	operationId: "socialSignIn",
	body: socialSignInBodySchema,
	metadata: {
		$Infer: {
			body: {},
			returned: {}
		},
		openapi: {
			description: "Sign in with a social provider",
			operationId: "socialSignIn",
			responses: { "200": {
				description: "Success - Returns session details (idToken branch) or an authorize URL (redirect branch)",
				content: { "application/json": { schema: {
					type: "object",
					description: "Returns session details when idToken is provided, or an authorize URL otherwise",
					properties: {
						token: { type: "string" },
						user: {
							type: "object",
							$ref: "#/components/schemas/User"
						},
						url: { type: "string" },
						redirect: { type: "boolean" }
					},
					required: ["redirect"]
				} } }
			} }
		}
	}
}, async (c) => {
	const provider = await getAwaitableValue(c.context.socialProviders, { value: c.body.provider });
	if (!provider) {
		c.context.logger.error("Provider not found. Make sure to add the provider in your auth config", { provider: c.body.provider });
		throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.PROVIDER_NOT_FOUND);
	}
	if (c.body.idToken) {
		if (!provider.verifyIdToken) {
			c.context.logger.error("Provider does not support id token verification", { provider: c.body.provider });
			throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.ID_TOKEN_NOT_SUPPORTED);
		}
		const { token, nonce } = c.body.idToken;
		if (!await provider.verifyIdToken(token, nonce, c)) {
			c.context.logger.warn("Invalid id token", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_TOKEN);
		}
		const userInfo = await provider.getUserInfo({
			idToken: token,
			accessToken: c.body.idToken.accessToken,
			refreshToken: c.body.idToken.refreshToken,
			user: c.body.idToken.user
		});
		if (!userInfo || !userInfo?.user) {
			c.context.logger.error("Failed to get user info", { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO);
		}
		if (!userInfo.user.email) {
			c.context.logger.error(missingEmailLogMessage(c.body.provider, { source: "id_token" }), { provider: c.body.provider });
			throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.USER_EMAIL_NOT_FOUND);
		}
		const data = await handleOAuthUserInfo(c, {
			userInfo: {
				...userInfo.user,
				email: userInfo.user.email,
				id: String(userInfo.user.id),
				name: userInfo.user.name || "",
				image: userInfo.user.image,
				emailVerified: userInfo.user.emailVerified || false
			},
			account: {
				providerId: provider.id,
				accountId: String(userInfo.user.id),
				accessToken: c.body.idToken.accessToken
			},
			callbackURL: c.body.callbackURL,
			disableSignUp: provider.disableImplicitSignUp && !c.body.requestSignUp || provider.disableSignUp
		});
		if (data.error) throw APIError.from("UNAUTHORIZED", {
			message: data.error,
			code: "OAUTH_LINK_ERROR"
		});
		await setSessionCookie(c, data.data);
		return c.json({
			redirect: false,
			token: data.data.session.token,
			url: void 0,
			user: parseUserOutput(c.context.options, data.data.user)
		});
	}
	const { codeVerifier, state } = await generateState(c, void 0, c.body.additionalData);
	const url = await provider.createAuthorizationURL({
		state,
		codeVerifier,
		redirectURI: `${c.context.baseURL}/callback/${provider.id}`,
		scopes: c.body.scopes,
		loginHint: c.body.loginHint
	});
	if (!c.body.disableRedirect) c.setHeader("Location", url.toString());
	return c.json({
		url: url.toString(),
		redirect: !c.body.disableRedirect
	});
});
var signInEmail = () => createAuthEndpoint("/sign-in/email", {
	method: "POST",
	operationId: "signInEmail",
	use: [formCsrfMiddleware],
	cloneRequest: true,
	body: object({
		/**
		* Email of the user
		*/
		email: string().meta({ description: "Email of the user" }),
		/**
		* Password of the user
		*/
		password: string().meta({ description: "Password of the user" }),
		/**
		* Callback URL to use as a redirect for email
		* verification and for possible redirects
		*/
		callbackURL: string().meta({ description: "Callback URL to use as a redirect for email verification" }).optional(),
		/**
		* If this is false, the session will not be remembered
		* @default true
		*/
		rememberMe: boolean().meta({ description: "If this is false, the session will not be remembered. Default is `true`." }).default(true).optional()
	}),
	metadata: {
		allowedMediaTypes: ["application/x-www-form-urlencoded", "application/json"],
		$Infer: {
			body: {},
			returned: {}
		},
		openapi: {
			operationId: "signInEmail",
			description: "Sign in with email and password",
			responses: { "200": {
				description: "Success - Returns either session details or redirect URL",
				content: { "application/json": { schema: {
					type: "object",
					description: "Session response when idToken is provided",
					properties: {
						redirect: {
							type: "boolean",
							enum: [false]
						},
						token: {
							type: "string",
							description: "Session token"
						},
						url: {
							type: "string",
							nullable: true
						},
						user: {
							type: "object",
							$ref: "#/components/schemas/User"
						}
					},
					required: [
						"redirect",
						"token",
						"user"
					]
				} } }
			} }
		}
	}
}, async (ctx) => {
	if (!ctx.context.options?.emailAndPassword?.enabled) {
		ctx.context.logger.error("Email and password is not enabled. Make sure to enable it in the options on you `auth.ts` file. Check `https://better-auth.com/docs/authentication/email-password` for more!");
		throw APIError.from("BAD_REQUEST", {
			code: "EMAIL_PASSWORD_DISABLED",
			message: "Email and password is not enabled"
		});
	}
	const { email: email$1, password } = ctx.body;
	if (!email().safeParse(email$1).success) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_EMAIL);
	const user = await ctx.context.internalAdapter.findUserByEmail(email$1, { includeAccounts: true });
	if (!user) {
		await ctx.context.password.hash(password);
		ctx.context.logger.warn("User not found");
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD);
	}
	const credentialAccount = user.accounts.find((a) => a.providerId === "credential");
	if (!credentialAccount) {
		await ctx.context.password.hash(password);
		ctx.context.logger.warn("Credential account not found");
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD);
	}
	const currentPassword = credentialAccount?.password;
	if (!currentPassword) {
		await ctx.context.password.hash(password);
		ctx.context.logger.warn("Password not found");
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD);
	}
	if (!await ctx.context.password.verify({
		hash: currentPassword,
		password
	})) {
		ctx.context.logger.warn("Invalid password");
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.INVALID_EMAIL_OR_PASSWORD);
	}
	if (ctx.context.options?.emailAndPassword?.requireEmailVerification && !user.user.emailVerified) {
		if (!ctx.context.options?.emailVerification?.sendVerificationEmail) throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.EMAIL_NOT_VERIFIED);
		if (ctx.context.options?.emailVerification?.sendOnSignIn) {
			const token = await createEmailVerificationToken(ctx.context.secret, user.user.email, void 0, ctx.context.options.emailVerification?.expiresIn);
			const callbackURL = ctx.body.callbackURL ? encodeURIComponent(ctx.body.callbackURL) : encodeURIComponent("/");
			const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
			await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
				user: user.user,
				url,
				token
			}, safeCloneRequest(ctx.request)));
		}
		throw APIError.from("FORBIDDEN", BASE_ERROR_CODES.EMAIL_NOT_VERIFIED);
	}
	const session = await ctx.context.internalAdapter.createSession(user.user.id, ctx.body.rememberMe === false);
	if (!session) {
		ctx.context.logger.error("Failed to create session");
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
	}
	await setSessionCookie(ctx, {
		session,
		user: user.user
	}, ctx.body.rememberMe === false);
	if (ctx.body.callbackURL) ctx.setHeader("Location", ctx.body.callbackURL);
	return ctx.json({
		redirect: !!ctx.body.callbackURL,
		token: session.token,
		url: ctx.body.callbackURL,
		user: parseUserOutput(ctx.context.options, user.user)
	});
});
var signOut = createAuthEndpoint("/sign-out", {
	method: "POST",
	operationId: "signOut",
	requireHeaders: true,
	metadata: { openapi: {
		operationId: "signOut",
		description: "Sign out the current user",
		responses: { "200": {
			description: "Success",
			content: { "application/json": { schema: {
				type: "object",
				properties: { success: { type: "boolean" } }
			} } }
		} }
	} }
}, async (ctx) => {
	const sessionCookieToken = await ctx.getSignedCookie(ctx.context.authCookies.sessionToken.name, ctx.context.secret);
	if (sessionCookieToken) try {
		await ctx.context.internalAdapter.deleteSession(sessionCookieToken);
	} catch (e) {
		ctx.context.logger.error("Failed to delete session from database", e);
	}
	deleteSessionCookie(ctx);
	return ctx.json({ success: true });
});
var signUpEmailBodySchema = object({
	name: string(),
	email: email(),
	password: string().nonempty(),
	image: string().optional(),
	callbackURL: string().optional(),
	rememberMe: boolean().optional()
}).and(record(string(), any()));
var signUpEmail = () => createAuthEndpoint("/sign-up/email", {
	method: "POST",
	operationId: "signUpWithEmailAndPassword",
	use: [formCsrfMiddleware],
	body: signUpEmailBodySchema,
	cloneRequest: true,
	metadata: {
		allowedMediaTypes: ["application/x-www-form-urlencoded", "application/json"],
		$Infer: {
			body: {},
			returned: {}
		},
		openapi: {
			operationId: "signUpWithEmailAndPassword",
			description: "Sign up a user using email and password",
			requestBody: { content: { "application/json": { schema: {
				type: "object",
				properties: {
					name: {
						type: "string",
						description: "The name of the user"
					},
					email: {
						type: "string",
						description: "The email of the user"
					},
					password: {
						type: "string",
						description: "The password of the user"
					},
					image: {
						type: "string",
						description: "The profile image URL of the user"
					},
					callbackURL: {
						type: "string",
						description: "The URL to use for email verification callback"
					},
					rememberMe: {
						type: "boolean",
						description: "If this is false, the session will not be remembered. Default is `true`."
					}
				},
				required: [
					"name",
					"email",
					"password"
				]
			} } } },
			responses: {
				"200": {
					description: "Successfully created user",
					content: { "application/json": { schema: {
						type: "object",
						properties: {
							token: {
								type: "string",
								nullable: true,
								description: "Authentication token for the session"
							},
							user: {
								type: "object",
								properties: {
									id: {
										type: "string",
										description: "The unique identifier of the user"
									},
									email: {
										type: "string",
										format: "email",
										description: "The email address of the user"
									},
									name: {
										type: "string",
										description: "The name of the user"
									},
									image: {
										type: "string",
										format: "uri",
										nullable: true,
										description: "The profile image URL of the user"
									},
									emailVerified: {
										type: "boolean",
										description: "Whether the email has been verified"
									},
									createdAt: {
										type: "string",
										format: "date-time",
										description: "When the user was created"
									},
									updatedAt: {
										type: "string",
										format: "date-time",
										description: "When the user was last updated"
									}
								},
								required: [
									"id",
									"email",
									"name",
									"emailVerified",
									"createdAt",
									"updatedAt"
								]
							}
						},
						required: ["user"]
					} } }
				},
				"422": {
					description: "Unprocessable Entity. User already exists or failed to create user.",
					content: { "application/json": { schema: {
						type: "object",
						properties: { message: { type: "string" } }
					} } }
				}
			}
		}
	}
}, async (ctx) => {
	return runWithTransaction(ctx.context.adapter, async () => {
		if (!ctx.context.options.emailAndPassword?.enabled || ctx.context.options.emailAndPassword?.disableSignUp) throw APIError.from("BAD_REQUEST", {
			message: "Email and password sign up is not enabled",
			code: "EMAIL_PASSWORD_SIGN_UP_DISABLED"
		});
		const body = ctx.body;
		const { name, email: email$2, password, image, callbackURL: _callbackURL, rememberMe, ...rest } = body;
		if (!email().safeParse(email$2).success) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_EMAIL);
		if (!password || typeof password !== "string") throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
		const minPasswordLength = ctx.context.password.config.minPasswordLength;
		if (password.length < minPasswordLength) {
			ctx.context.logger.warn("Password is too short");
			throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_SHORT);
		}
		const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
		if (password.length > maxPasswordLength) {
			ctx.context.logger.warn("Password is too long");
			throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_LONG);
		}
		const shouldReturnGenericDuplicateResponse = ctx.context.options.emailAndPassword.requireEmailVerification || ctx.context.options.emailAndPassword.autoSignIn === false;
		const shouldSkipAutoSignIn = ctx.context.options.emailAndPassword.autoSignIn === false || shouldReturnGenericDuplicateResponse;
		const additionalUserFields = parseUserInput(ctx.context.options, rest, "create");
		const normalizedEmail = email$2.toLowerCase();
		const dbUser = await ctx.context.internalAdapter.findUserByEmail(normalizedEmail);
		if (dbUser?.user) {
			ctx.context.logger.info(`Sign-up attempt for existing email: ${email$2}`);
			if (shouldReturnGenericDuplicateResponse) {
				/**
				* Hash the password to reduce timing differences
				* between existing and non-existing emails.
				*/
				await ctx.context.password.hash(password);
				if (ctx.context.options.emailAndPassword?.onExistingUserSignUp) await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailAndPassword.onExistingUserSignUp({ user: dbUser.user }, safeCloneRequest(ctx.request)));
				const now = /* @__PURE__ */ new Date();
				const generatedId = ctx.context.generateId({ model: "user" }) || generateId();
				const coreFields = {
					name,
					email: normalizedEmail,
					emailVerified: false,
					image: image ?? null,
					createdAt: now,
					updatedAt: now
				};
				const customSyntheticUser = ctx.context.options.emailAndPassword?.customSyntheticUser;
				let syntheticUser;
				if (customSyntheticUser) {
					const additionalFieldKeys = Object.keys(ctx.context.options.user?.additionalFields ?? {});
					const additionalFields = {};
					for (const key of additionalFieldKeys) if (key in additionalUserFields) additionalFields[key] = additionalUserFields[key];
					const customResult = customSyntheticUser({
						coreFields,
						additionalFields,
						id: generatedId
					});
					syntheticUser = buildSyntheticUserOutput(ctx.context.options, customResult);
				} else syntheticUser = buildSyntheticUserOutput(ctx.context.options, {
					...coreFields,
					...additionalUserFields,
					id: generatedId
				});
				return ctx.json({
					token: null,
					user: parseUserOutput(ctx.context.options, syntheticUser)
				});
			}
			throw APIError.from("UNPROCESSABLE_ENTITY", BASE_ERROR_CODES.USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL);
		}
		/**
		* Hash the password
		*
		* This is done prior to creating the user
		* to ensure that any plugin that
		* may break the hashing should break
		* before the user is created.
		*/
		const hash = await ctx.context.password.hash(password);
		let createdUser;
		try {
			createdUser = await ctx.context.internalAdapter.createUser({
				email: normalizedEmail,
				name,
				image,
				...additionalUserFields,
				emailVerified: false
			});
			if (!createdUser) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.FAILED_TO_CREATE_USER);
		} catch (e) {
			if (isDevelopment()) ctx.context.logger.error("Failed to create user", e);
			if (isAPIError(e)) throw e;
			ctx.context.logger?.error("Failed to create user", e);
			throw APIError.from("UNPROCESSABLE_ENTITY", BASE_ERROR_CODES.FAILED_TO_CREATE_USER);
		}
		if (!createdUser) throw APIError.from("UNPROCESSABLE_ENTITY", BASE_ERROR_CODES.FAILED_TO_CREATE_USER);
		await ctx.context.internalAdapter.linkAccount({
			userId: createdUser.id,
			providerId: "credential",
			accountId: createdUser.id,
			password: hash
		});
		if (ctx.context.options.emailVerification?.sendOnSignUp ?? ctx.context.options.emailAndPassword.requireEmailVerification) {
			const token = await createEmailVerificationToken(ctx.context.secret, createdUser.email, void 0, ctx.context.options.emailVerification?.expiresIn);
			const callbackURL = body.callbackURL ? encodeURIComponent(body.callbackURL) : encodeURIComponent("/");
			const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
			if (ctx.context.options.emailVerification?.sendVerificationEmail) await ctx.context.runInBackgroundOrAwait(ctx.context.options.emailVerification.sendVerificationEmail({
				user: createdUser,
				url,
				token
			}, safeCloneRequest(ctx.request)));
		}
		if (shouldSkipAutoSignIn) return ctx.json({
			token: null,
			user: parseUserOutput(ctx.context.options, createdUser)
		});
		const session = await ctx.context.internalAdapter.createSession(createdUser.id, rememberMe === false);
		if (!session) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.FAILED_TO_CREATE_SESSION);
		await setSessionCookie(ctx, {
			session,
			user: createdUser
		}, rememberMe === false);
		return ctx.json({
			token: session.token,
			user: parseUserOutput(ctx.context.options, createdUser)
		});
	});
});
var updateSessionBodySchema = record(string().meta({ description: "Field name must be a string" }), any());
var updateSession = () => createAuthEndpoint("/update-session", {
	method: "POST",
	operationId: "updateSession",
	body: updateSessionBodySchema,
	use: [sessionMiddleware],
	metadata: {
		$Infer: { body: {} },
		openapi: {
			operationId: "updateSession",
			description: "Update the current session",
			responses: { "200": {
				description: "Success",
				content: { "application/json": { schema: {
					type: "object",
					properties: { session: {
						type: "object",
						$ref: "#/components/schemas/Session"
					} }
				} } }
			} }
		}
	}
}, async (ctx) => {
	const body = ctx.body;
	if (typeof body !== "object" || Array.isArray(body)) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.BODY_MUST_BE_AN_OBJECT);
	const session = ctx.context.session;
	const additionalFields = parseSessionInput(ctx.context.options, body, "update");
	if (Object.keys(additionalFields).length === 0) throw APIError.fromStatus("BAD_REQUEST", { message: "No fields to update" });
	const updatedSession = await ctx.context.internalAdapter.updateSession(session.session.token, {
		...additionalFields,
		updatedAt: /* @__PURE__ */ new Date()
	});
	if (!updatedSession && isStateful(ctx)) {
		deleteSessionCookie(ctx);
		throw APIError.from("UNAUTHORIZED", BASE_ERROR_CODES.FAILED_TO_GET_SESSION);
	}
	const newSession = updatedSession ?? {
		...session.session,
		...additionalFields,
		updatedAt: /* @__PURE__ */ new Date()
	};
	await setSessionCookie(ctx, {
		session: newSession,
		user: session.user
	});
	return ctx.json({ session: parseSessionOutput(ctx.context.options, newSession) });
});
var updateUserBodySchema = record(string().meta({ description: "Field name must be a string" }), any());
var updateUser = () => createAuthEndpoint("/update-user", {
	method: "POST",
	operationId: "updateUser",
	body: updateUserBodySchema,
	use: [sessionMiddleware],
	metadata: {
		$Infer: { body: {} },
		openapi: {
			operationId: "updateUser",
			description: "Update the current user",
			requestBody: { content: { "application/json": { schema: {
				type: "object",
				properties: {
					name: {
						type: "string",
						description: "The name of the user"
					},
					image: {
						type: "string",
						description: "The image of the user",
						nullable: true
					}
				}
			} } } },
			responses: { "200": {
				description: "Success",
				content: { "application/json": { schema: {
					type: "object",
					properties: { user: {
						type: "object",
						$ref: "#/components/schemas/User"
					} }
				} } }
			} }
		}
	}
}, async (ctx) => {
	const body = ctx.body;
	if (typeof body !== "object" || Array.isArray(body)) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.BODY_MUST_BE_AN_OBJECT);
	if (body.email) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.EMAIL_CAN_NOT_BE_UPDATED);
	const { name, image, ...rest } = body;
	const session = ctx.context.session;
	const additionalFields = parseUserInput(ctx.context.options, rest, "update");
	if (image === void 0 && name === void 0 && Object.keys(additionalFields).length === 0) throw APIError.fromStatus("BAD_REQUEST", { message: "No fields to update" });
	const updatedUser = await ctx.context.internalAdapter.updateUser(session.user.id, {
		name,
		image,
		...additionalFields
	}) ?? {
		...session.user,
		...name !== void 0 && { name },
		...image !== void 0 && { image },
		...additionalFields
	};
	/**
	* Update the session cookie with the new user data
	*/
	await setSessionCookie(ctx, {
		session: session.session,
		user: updatedUser
	});
	return ctx.json({ status: true });
});
var changePassword = createAuthEndpoint("/change-password", {
	method: "POST",
	operationId: "changePassword",
	body: object({
		/**
		* The new password to set
		*/
		newPassword: string().meta({ description: "The new password to set" }),
		/**
		* The current password of the user
		*/
		currentPassword: string().meta({ description: "The current password is required" }),
		/**
		* revoke all sessions that are not the
		* current one logged in by the user
		*/
		revokeOtherSessions: boolean().meta({ description: "Must be a boolean value" }).optional()
	}),
	use: [sensitiveSessionMiddleware],
	metadata: { openapi: {
		operationId: "changePassword",
		description: "Change the password of the user",
		responses: { "200": {
			description: "Password successfully changed",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					token: {
						type: "string",
						nullable: true,
						description: "New session token if other sessions were revoked"
					},
					user: {
						type: "object",
						properties: {
							id: {
								type: "string",
								description: "The unique identifier of the user"
							},
							email: {
								type: "string",
								format: "email",
								description: "The email address of the user"
							},
							name: {
								type: "string",
								description: "The name of the user"
							},
							image: {
								type: "string",
								format: "uri",
								nullable: true,
								description: "The profile image URL of the user"
							},
							emailVerified: {
								type: "boolean",
								description: "Whether the email has been verified"
							},
							createdAt: {
								type: "string",
								format: "date-time",
								description: "When the user was created"
							},
							updatedAt: {
								type: "string",
								format: "date-time",
								description: "When the user was last updated"
							}
						},
						required: [
							"id",
							"email",
							"name",
							"emailVerified",
							"createdAt",
							"updatedAt"
						]
					}
				},
				required: ["user"]
			} } }
		} }
	} }
}, async (ctx) => {
	const { newPassword, currentPassword, revokeOtherSessions } = ctx.body;
	const session = ctx.context.session;
	const minPasswordLength = ctx.context.password.config.minPasswordLength;
	if (newPassword.length < minPasswordLength) {
		ctx.context.logger.warn("Password is too short");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_SHORT);
	}
	const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
	if (newPassword.length > maxPasswordLength) {
		ctx.context.logger.warn("Password is too long");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_LONG);
	}
	const account = (await ctx.context.internalAdapter.findAccounts(session.user.id)).find((account) => account.providerId === "credential" && account.password);
	if (!account || !account.password) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.CREDENTIAL_ACCOUNT_NOT_FOUND);
	const passwordHash = await ctx.context.password.hash(newPassword);
	if (!await ctx.context.password.verify({
		hash: account.password,
		password: currentPassword
	})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	await ctx.context.internalAdapter.updateAccount(account.id, { password: passwordHash });
	let token = null;
	if (revokeOtherSessions) {
		await ctx.context.internalAdapter.deleteUserSessions(session.user.id);
		const newSession = await ctx.context.internalAdapter.createSession(session.user.id);
		if (!newSession) throw APIError.from("INTERNAL_SERVER_ERROR", BASE_ERROR_CODES.FAILED_TO_GET_SESSION);
		await setSessionCookie(ctx, {
			session: newSession,
			user: session.user
		});
		token = newSession.token;
	}
	return ctx.json({
		token,
		user: parseUserOutput(ctx.context.options, session.user)
	});
});
var setPassword = createAuthEndpoint.serverOnly({
	method: "POST",
	body: object({ 
	/**
	* The new password to set
	*/
newPassword: string().meta({ description: "The new password to set is required" }) }),
	use: [sensitiveSessionMiddleware]
}, async (ctx) => {
	const { newPassword } = ctx.body;
	const session = ctx.context.session;
	const minPasswordLength = ctx.context.password.config.minPasswordLength;
	if (newPassword.length < minPasswordLength) {
		ctx.context.logger.warn("Password is too short");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_SHORT);
	}
	const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
	if (newPassword.length > maxPasswordLength) {
		ctx.context.logger.warn("Password is too long");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_TOO_LONG);
	}
	const account = (await ctx.context.internalAdapter.findAccounts(session.user.id)).find((account) => account.providerId === "credential" && account.password);
	const passwordHash = await ctx.context.password.hash(newPassword);
	if (!account) {
		await ctx.context.internalAdapter.linkAccount({
			userId: session.user.id,
			providerId: "credential",
			accountId: session.user.id,
			password: passwordHash
		});
		return ctx.json({ status: true });
	}
	throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.PASSWORD_ALREADY_SET);
});
var deleteUser = createAuthEndpoint("/delete-user", {
	method: "POST",
	use: [sensitiveSessionMiddleware],
	body: object({
		/**
		* The callback URL to redirect to after the user is deleted
		* this is only used on delete user callback
		*/
		callbackURL: string().meta({ description: "The callback URL to redirect to after the user is deleted" }).optional(),
		/**
		* The password of the user. If the password isn't provided, session freshness
		* will be checked.
		*/
		password: string().meta({ description: "The password of the user is required to delete the user" }).optional(),
		/**
		* The token to delete the user. If the token is provided, the user will be deleted
		*/
		token: string().meta({ description: "The token to delete the user is required" }).optional()
	}),
	metadata: { openapi: {
		operationId: "deleteUser",
		description: "Delete the user",
		requestBody: { content: { "application/json": { schema: {
			type: "object",
			properties: {
				callbackURL: {
					type: "string",
					description: "The callback URL to redirect to after the user is deleted"
				},
				password: {
					type: "string",
					description: "The user's password. Required if session is not fresh"
				},
				token: {
					type: "string",
					description: "The deletion verification token"
				}
			}
		} } } },
		responses: { "200": {
			description: "User deletion processed successfully",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					success: {
						type: "boolean",
						description: "Indicates if the operation was successful"
					},
					message: {
						type: "string",
						enum: ["User deleted", "Verification email sent"],
						description: "Status message of the deletion process"
					}
				},
				required: ["success", "message"]
			} } }
		} }
	} }
}, async (ctx) => {
	if (!ctx.context.options.user?.deleteUser?.enabled) {
		ctx.context.logger.error("Delete user is disabled. Enable it in the options");
		throw APIError.fromStatus("NOT_FOUND");
	}
	const session = ctx.context.session;
	if (ctx.body.password) {
		const account = (await ctx.context.internalAdapter.findAccounts(session.user.id)).find((account) => account.providerId === "credential" && account.password);
		if (!account || !account.password) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.CREDENTIAL_ACCOUNT_NOT_FOUND);
		if (!await ctx.context.password.verify({
			hash: account.password,
			password: ctx.body.password
		})) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.INVALID_PASSWORD);
	}
	if (ctx.body.token) {
		await deleteUserCallback({
			...ctx,
			query: { token: ctx.body.token }
		});
		return ctx.json({
			success: true,
			message: "User deleted"
		});
	}
	if (ctx.context.options.user.deleteUser?.sendDeleteAccountVerification) {
		const token = generateRandomString(32, "0-9", "a-z");
		await ctx.context.internalAdapter.createVerificationValue({
			value: session.user.id,
			identifier: `delete-account-${token}`,
			expiresAt: new Date(Date.now() + (ctx.context.options.user.deleteUser?.deleteTokenExpiresIn || 86400) * 1e3)
		});
		const url = `${ctx.context.baseURL}/delete-user/callback?token=${token}&callbackURL=${encodeURIComponent(ctx.body.callbackURL || "/")}`;
		await ctx.context.runInBackgroundOrAwait(ctx.context.options.user.deleteUser.sendDeleteAccountVerification({
			user: session.user,
			url,
			token
		}, ctx.request));
		return ctx.json({
			success: true,
			message: "Verification email sent"
		});
	}
	if (!ctx.body.password && ctx.context.sessionConfig.freshAge !== 0) {
		const createdAt = new Date(session.session.createdAt).getTime();
		const freshAge = ctx.context.sessionConfig.freshAge * 1e3;
		if (Date.now() - createdAt >= freshAge) throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.SESSION_EXPIRED);
	}
	const beforeDelete = ctx.context.options.user.deleteUser?.beforeDelete;
	if (beforeDelete) await beforeDelete(session.user, ctx.request);
	await ctx.context.internalAdapter.deleteUser(session.user.id);
	await ctx.context.internalAdapter.deleteUserSessions(session.user.id);
	deleteSessionCookie(ctx);
	const afterDelete = ctx.context.options.user.deleteUser?.afterDelete;
	if (afterDelete) await afterDelete(session.user, ctx.request);
	return ctx.json({
		success: true,
		message: "User deleted"
	});
});
var deleteUserCallback = createAuthEndpoint("/delete-user/callback", {
	method: "GET",
	query: object({
		token: string().meta({ description: "The token to verify the deletion request" }),
		callbackURL: string().meta({ description: "The URL to redirect to after deletion" }).optional()
	}),
	use: [originCheck((ctx) => ctx.query.callbackURL)],
	metadata: { openapi: {
		description: "Callback to complete user deletion with verification token",
		responses: { "200": {
			description: "User successfully deleted",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					success: {
						type: "boolean",
						description: "Indicates if the deletion was successful"
					},
					message: {
						type: "string",
						enum: ["User deleted"],
						description: "Confirmation message"
					}
				},
				required: ["success", "message"]
			} } }
		} }
	} }
}, async (ctx) => {
	if (!ctx.context.options.user?.deleteUser?.enabled) {
		ctx.context.logger.error("Delete user is disabled. Enable it in the options");
		throw APIError.from("NOT_FOUND", {
			message: "Not found",
			code: "NOT_FOUND"
		});
	}
	const session = await getSessionFromCtx(ctx, { disableCookieCache: isStateful(ctx) });
	if (!session) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.FAILED_TO_GET_USER_INFO);
	const token = await ctx.context.internalAdapter.consumeVerificationValue(`delete-account-${ctx.query.token}`);
	if (!token || token.value !== session.user.id) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.INVALID_TOKEN);
	const beforeDelete = ctx.context.options.user.deleteUser?.beforeDelete;
	if (beforeDelete) await beforeDelete(session.user, ctx.request);
	await ctx.context.internalAdapter.deleteUser(session.user.id);
	await ctx.context.internalAdapter.deleteUserSessions(session.user.id);
	await ctx.context.internalAdapter.deleteAccounts(session.user.id);
	deleteSessionCookie(ctx);
	const afterDelete = ctx.context.options.user.deleteUser?.afterDelete;
	if (afterDelete) await afterDelete(session.user, ctx.request);
	if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL || "/");
	return ctx.json({
		success: true,
		message: "User deleted"
	});
});
var changeEmail = createAuthEndpoint("/change-email", {
	method: "POST",
	body: object({
		newEmail: email().meta({ description: "The new email address to set must be a valid email address" }),
		callbackURL: string().meta({ description: "The URL to redirect to after email verification" }).optional()
	}),
	use: [sensitiveSessionMiddleware],
	metadata: { openapi: {
		operationId: "changeEmail",
		responses: { "200": {
			description: "Email change request processed successfully",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					user: {
						type: "object",
						$ref: "#/components/schemas/User"
					},
					status: {
						type: "boolean",
						description: "Indicates if the request was successful"
					},
					message: {
						type: "string",
						enum: ["Email updated", "Verification email sent"],
						description: "Status message of the email change process",
						nullable: true
					}
				},
				required: ["status"]
			} } }
		} }
	} }
}, async (ctx) => {
	if (!ctx.context.options.user?.changeEmail?.enabled) {
		ctx.context.logger.error("Change email is disabled.");
		throw APIError.from("BAD_REQUEST", BASE_ERROR_CODES.CHANGE_EMAIL_DISABLED);
	}
	const newEmail = ctx.body.newEmail.toLowerCase();
	if (newEmail === ctx.context.session.user.email) {
		ctx.context.logger.warn("Email is the same");
		throw APIError.fromStatus("BAD_REQUEST", { message: "Email is the same" });
	}
	/**
	* Early config check: ensure at least one email-change flow is
	* available for the current session state. Without this, an
	* existing-email lookup would return 200 while a non-existing
	* email would later throw 400, leaking email existence.
	*/
	const canUpdateWithoutVerification = ctx.context.session.user.emailVerified !== true && ctx.context.options.user.changeEmail.updateEmailWithoutVerification;
	const canSendVerification = ctx.context.options.emailVerification?.sendVerificationEmail;
	const canSendConfirmation = canSendVerification && ctx.context.session.user.emailVerified && ctx.context.options.user.changeEmail.sendChangeEmailConfirmation;
	if (!canUpdateWithoutVerification && !canSendConfirmation && !canSendVerification) {
		ctx.context.logger.error("Verification email isn't enabled.");
		throw APIError.fromStatus("BAD_REQUEST", { message: "Verification email isn't enabled" });
	}
	if (await ctx.context.internalAdapter.findUserByEmail(newEmail)) {
		await createEmailVerificationToken(ctx.context.secret, ctx.context.session.user.email, newEmail, ctx.context.options.emailVerification?.expiresIn);
		ctx.context.logger.info("Change email attempt for existing email");
		return ctx.json({ status: true });
	}
	/**
	* If the email is not verified, we can update the email if the option is enabled
	*/
	if (canUpdateWithoutVerification) {
		await ctx.context.internalAdapter.updateUserByEmail(ctx.context.session.user.email, { email: newEmail });
		await setSessionCookie(ctx, {
			session: ctx.context.session.session,
			user: {
				...ctx.context.session.user,
				email: newEmail
			}
		});
		if (canSendVerification) {
			const token = await createEmailVerificationToken(ctx.context.secret, newEmail, void 0, ctx.context.options.emailVerification?.expiresIn);
			const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${encodeURIComponent(ctx.body.callbackURL || "/")}`;
			await ctx.context.runInBackgroundOrAwait(canSendVerification({
				user: {
					...ctx.context.session.user,
					email: newEmail
				},
				url,
				token
			}, ctx.request));
		}
		return ctx.json({ status: true });
	}
	/**
	* If the email is verified, we need to send a verification email
	*/
	if (canSendConfirmation) {
		const token = await createEmailVerificationToken(ctx.context.secret, ctx.context.session.user.email, newEmail, ctx.context.options.emailVerification?.expiresIn, { requestType: "change-email-confirmation" });
		const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${encodeURIComponent(ctx.body.callbackURL || "/")}`;
		await ctx.context.runInBackgroundOrAwait(canSendConfirmation({
			user: ctx.context.session.user,
			newEmail,
			url,
			token
		}, ctx.request));
		return ctx.json({ status: true });
	}
	if (!canSendVerification) {
		ctx.context.logger.error("Verification email isn't enabled.");
		throw APIError.fromStatus("BAD_REQUEST", { message: "Verification email isn't enabled" });
	}
	const token = await createEmailVerificationToken(ctx.context.secret, ctx.context.session.user.email, newEmail, ctx.context.options.emailVerification?.expiresIn, { requestType: "change-email-verification" });
	const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${encodeURIComponent(ctx.body.callbackURL || "/")}`;
	await ctx.context.runInBackgroundOrAwait(canSendVerification({
		user: {
			...ctx.context.session.user,
			email: newEmail
		},
		url,
		token
	}, ctx.request));
	return ctx.json({ status: true });
});
var defuReplaceArrays = createDefu((obj, key, value) => {
	if (Array.isArray(obj[key]) && Array.isArray(value)) {
		obj[key] = value;
		return true;
	}
});
var hooksSourceWeakMap = /* @__PURE__ */ new WeakMap();
/**
* Resolves the operation id used for spans, preferring an explicit
* `operationId`, then the OpenAPI one, then the caller's `fallback` (the
* `auth.api.*` map key), and finally the route path.
*/
function getOperationId(endpoint, fallback) {
	const opts = endpoint.options;
	return opts?.operationId ?? opts?.metadata?.openapi?.operationId ?? fallback ?? endpoint.path ?? "/:virtual";
}
/**
* Merge a set of response headers onto the dispatch's accumulator, appending
* `set-cookie` (multiple cookies are legal) and replacing everything else.
*/
function mergeResponseHeaders(context, headers) {
	if (!headers) return;
	headers.forEach((value, key) => {
		if (!context.responseHeaders) context.responseHeaders = new Headers({ [key]: value });
		else if (key.toLowerCase() === "set-cookie") context.responseHeaders.append(key, value);
		else context.responseHeaders.set(key, value);
	});
}
/**
* Combine the two header sources an `APIError` can carry into one set:
* - `kAPIErrorHeaderSymbol`: `ctx.responseHeaders` accumulated via
*   `c.setCookie` / `c.setHeader` before the throw.
* - `e.headers`: explicit headers on the error (e.g. `location` from
*   `c.redirect`).
*
* `c.redirect()` reuses `ctx.responseHeaders` as `e.headers`, so when both
* point at the same object iterating each would duplicate every `set-cookie`;
* the identity check skips that copy. Explicit error headers override
* accumulated ones, while cookies from both accumulate.
*/
function mergeAPIErrorHeaders(error) {
	const ctxHeaders = error[kAPIErrorHeaderSymbol];
	const errHeaders = error.headers && error.headers !== ctxHeaders ? new Headers(error.headers) : null;
	if (!ctxHeaders && !errHeaders) return null;
	const headers = new Headers();
	ctxHeaders?.forEach((value, key) => {
		headers.append(key, value);
	});
	errHeaders?.forEach((value, key) => {
		if (key.toLowerCase() === "set-cookie") headers.append(key, value);
		else headers.set(key, value);
	});
	return headers;
}
async function runBeforeHooks(context, hooks, endpoint, operationId) {
	const withSpan = createWithSpan(context.context.options);
	let modifiedContext = {};
	for (const hook of hooks) {
		let matched = false;
		try {
			matched = hook.matcher(context);
		} catch (error) {
			const hookSource = hooksSourceWeakMap.get(hook.handler) ?? "unknown";
			context.context.logger.error(`An error occurred during ${hookSource} hook matcher execution:`, error);
			throw new APIError("INTERNAL_SERVER_ERROR", { message: "An error occurred during hook matcher execution. Check the logs for more details." });
		}
		if (!matched) continue;
		const hookSource = hooksSourceWeakMap.get(hook.handler) ?? "unknown";
		const route = endpoint.path ?? "/:virtual";
		const result = await withSpan(`hook before ${route} ${hookSource}`, {
			[ATTR_HOOK_TYPE]: "before",
			[import_src.ATTR_HTTP_ROUTE]: route,
			[ATTR_CONTEXT]: hookSource,
			[ATTR_OPERATION_ID]: operationId
		}, () => hook.handler({
			...context,
			returnHeaders: true
		})).catch((e) => {
			if (isAPIError(e) && shouldPublishLog(context.context.logger.level, "debug")) e.stack = e.errorStack;
			throw e;
		});
		mergeResponseHeaders(context.context, result?.headers);
		const hookReturn = result?.response;
		if (hookReturn && typeof hookReturn === "object") {
			if ("context" in hookReturn && typeof hookReturn.context === "object") {
				const { headers, ...rest } = hookReturn.context;
				if (headers instanceof Headers) if (modifiedContext.headers) headers.forEach((value, key) => {
					modifiedContext.headers?.set(key, value);
				});
				else modifiedContext.headers = headers;
				modifiedContext = defuReplaceArrays(rest, modifiedContext);
				continue;
			}
			return hookReturn;
		}
	}
	return { context: modifiedContext };
}
async function runAfterHooks(context, hooks, endpoint, operationId) {
	const withSpan = createWithSpan(context.context.options);
	for (const hook of hooks) {
		if (!hook.matcher(context)) continue;
		const hookSource = hooksSourceWeakMap.get(hook.handler) ?? "unknown";
		const route = endpoint.path ?? "/:virtual";
		const result = await withSpan(`hook after ${route} ${hookSource}`, {
			[ATTR_HOOK_TYPE]: "after",
			[import_src.ATTR_HTTP_ROUTE]: route,
			[ATTR_CONTEXT]: hookSource,
			[ATTR_OPERATION_ID]: operationId
		}, () => hook.handler(context)).catch((e) => {
			if (isAPIError(e)) {
				if (shouldPublishLog(context.context.logger.level, "debug")) e.stack = e.errorStack;
				return {
					response: e,
					headers: mergeAPIErrorHeaders(e)
				};
			}
			throw e;
		});
		mergeResponseHeaders(context.context, result.headers);
		if (result.response !== void 0) context.context.returned = result.response;
	}
	return {
		response: context.context.returned,
		headers: context.context.responseHeaders
	};
}
function getHooks(authContext) {
	const plugins = authContext.options.plugins || [];
	const beforeHooks = [];
	const afterHooks = [];
	const beforeHookHandler = authContext.options.hooks?.before;
	if (beforeHookHandler) {
		hooksSourceWeakMap.set(beforeHookHandler, "user");
		beforeHooks.push({
			matcher: () => true,
			handler: beforeHookHandler
		});
	}
	const afterHookHandler = authContext.options.hooks?.after;
	if (afterHookHandler) {
		hooksSourceWeakMap.set(afterHookHandler, "user");
		afterHooks.push({
			matcher: () => true,
			handler: afterHookHandler
		});
	}
	const pluginBeforeHooks = plugins.flatMap((plugin) => (plugin.hooks?.before ?? []).map((h) => {
		hooksSourceWeakMap.set(h.handler, `plugin:${plugin.id}`);
		return h;
	}));
	const pluginAfterHooks = plugins.flatMap((plugin) => (plugin.hooks?.after ?? []).map((h) => {
		hooksSourceWeakMap.set(h.handler, `plugin:${plugin.id}`);
		return h;
	}));
	if (pluginBeforeHooks.length) beforeHooks.push(...pluginBeforeHooks);
	if (pluginAfterHooks.length) afterHooks.push(...pluginAfterHooks);
	return {
		beforeHooks,
		afterHooks
	};
}
/**
* Run a single endpoint through the configured `hooks.before` / `hooks.after`
* pipeline, normalizing the response, headers, and `APIError`s the same way a
* router or `auth.api.*` dispatch does.
*
* This is the canonical hook runner. The HTTP router and `auth.api.*` reach it
* through {@link toAuthEndpoints}. Plugins call it directly when they need to
* re-enter the pipeline on purpose, such as resuming `/oauth2/authorize` after
* a fresh sign-in. Calling an endpoint as a plain function deliberately skips
* hooks; `dispatchAuthEndpoint` is the supported way to opt back in.
*
* @param endpoint The endpoint to dispatch.
* @param input Input context whose `context` is an already-resolved `AuthContext`.
*/
async function dispatchAuthEndpoint(endpoint, input) {
	const withSpan = createWithSpan(input.context.options);
	const operationId = input.operationId ?? getOperationId(endpoint);
	const route = endpoint.path ?? "/:virtual";
	const endpointMethod = endpoint.options?.method;
	const defaultMethod = Array.isArray(endpointMethod) ? endpointMethod[0] : endpointMethod;
	const methodName = input.method ?? input.request?.method ?? defaultMethod ?? "?";
	const shouldReturnResponse = input.asResponse ?? isRequestLike(input.request);
	let internalContext = {
		...input,
		context: {
			...input.context,
			returned: void 0,
			responseHeaders: void 0,
			session: input.context.session ?? null
		},
		path: endpoint.path,
		headers: input.headers ? new Headers(input.headers) : void 0
	};
	return withSpan(`${methodName} ${route}`, {
		[import_src.ATTR_HTTP_ROUTE]: route,
		[ATTR_OPERATION_ID]: operationId
	}, async () => runWithEndpointContext(internalContext, async () => {
		const { beforeHooks, afterHooks } = getHooks(internalContext.context);
		const before = await runBeforeHooks(internalContext, beforeHooks, endpoint, operationId);
		if ("context" in before && before.context && typeof before.context === "object") {
			const { headers, ...rest } = before.context;
			if (headers) {
				if (!internalContext.headers) internalContext.headers = new Headers();
				const requestHeaders = internalContext.headers;
				headers.forEach((value, key) => {
					requestHeaders.set(key, value);
				});
			}
			internalContext = defuReplaceArrays(rest, internalContext);
		} else if (before) {
			const responseHeaders = internalContext.context.responseHeaders;
			return shouldReturnResponse ? toResponse(before, { headers: responseHeaders }) : input.returnHeaders ? {
				headers: responseHeaders,
				response: before
			} : before;
		}
		internalContext.asResponse = false;
		internalContext.returnHeaders = true;
		internalContext.returnStatus = true;
		const result = await runWithEndpointContext(internalContext, () => withSpan(`handler ${route}`, {
			[import_src.ATTR_HTTP_ROUTE]: route,
			[ATTR_OPERATION_ID]: operationId
		}, () => endpoint(internalContext))).catch((e) => {
			if (isAPIError(e)) return {
				response: e,
				status: e.statusCode,
				headers: mergeAPIErrorHeaders(e)
			};
			throw e;
		});
		if (result instanceof Response) return result;
		internalContext.context.returned = result.response;
		internalContext.context.responseHeaders = result.headers ?? void 0;
		const after = await runAfterHooks(internalContext, afterHooks, endpoint, operationId);
		if (after.response !== void 0) result.response = after.response;
		result.headers = after.headers ?? result.headers;
		if (isAPIError(result.response) && shouldPublishLog(internalContext.context.logger.level, "debug")) result.response.stack = result.response.errorStack;
		if (isAPIError(result.response) && !shouldReturnResponse) {
			if (result.headers) Object.defineProperty(result.response, kAPIErrorHeaderSymbol, {
				enumerable: false,
				configurable: true,
				writable: false,
				value: result.headers
			});
			throw result.response;
		}
		return shouldReturnResponse ? toResponse(result.response, {
			headers: result.headers ?? void 0,
			status: result.status
		}) : input.returnHeaders ? input.returnStatus ? {
			headers: result.headers,
			response: result.response,
			status: result.status
		} : {
			headers: result.headers,
			response: result.response
		} : input.returnStatus ? {
			response: result.response,
			status: result.status
		} : result.response;
	}));
}
/**
* Resolves the per-call `AuthContext` for endpoints with a dynamic `baseURL`.
*
* - `rawCtx.baseURL` already set: HTTP handler rehydrated upstream; return as-is.
* - Direct `auth.api` call with a source or a configured `fallback`: resolve here.
* - Neither: throw `APIError` with a helpful message. Leaving `baseURL = ""`
*   would let plugins build `new URL("")` and crash cryptically downstream.
*/
async function resolveDynamicContext(rawCtx, input) {
	if (rawCtx.baseURL) return rawCtx;
	const source = pickSource(input);
	const config = rawCtx.options.baseURL;
	const hasFallback = isDynamicBaseURLConfig(config) && Boolean(config.fallback);
	if (source === void 0 && !hasFallback) throw new APIError("INTERNAL_SERVER_ERROR", { message: "Dynamic baseURL could not be resolved for this direct auth.api call. Pass `headers: request.headers` (or `request`) to the call, or add `fallback` to your baseURL config." });
	try {
		return await resolveRequestContext(rawCtx, source, resolveDynamicTrustedProxyHeaders(rawCtx.options));
	} catch (err) {
		if (err instanceof BetterAuthError) throw new APIError("INTERNAL_SERVER_ERROR", { message: err.message });
		throw err;
	}
}
/**
* Wraps each raw endpoint so a router or `auth.api.*` call runs it through the
* configured hook pipeline. Per-call work that is specific to this entry point
* (dynamic `baseURL` resolution, request-state initialization) happens here;
* the hook pipeline itself lives in {@link dispatchAuthEndpoint}.
*/
function toAuthEndpoints(endpoints, ctx) {
	const api = {};
	for (const [key, endpoint] of Object.entries(endpoints)) {
		api[key] = async (context) => {
			const operationId = getOperationId(endpoint, key);
			const run = async () => {
				const rawContext = await ctx;
				const authContext = isDynamicBaseURLConfig(rawContext.options.baseURL) ? await resolveDynamicContext(rawContext, context) : rawContext;
				return dispatchAuthEndpoint(endpoint, {
					...context,
					context: authContext,
					operationId,
					asResponse: context?.asResponse ?? isRequestLike(context?.request)
				});
			};
			if (await hasRequestState()) return run();
			return runWithRequestState(/* @__PURE__ */ new WeakMap(), run);
		};
		api[key].path = endpoint.path;
		api[key].options = endpoint.options;
	}
	return api;
}
function checkEndpointConflicts(options, logger) {
	const endpointRegistry = /* @__PURE__ */ new Map();
	options.plugins?.forEach((plugin) => {
		if (plugin.endpoints) {
			for (const [key, endpoint] of Object.entries(plugin.endpoints)) if (endpoint && "path" in endpoint && typeof endpoint.path === "string") {
				const path = endpoint.path;
				let methods = [];
				if (endpoint.options && "method" in endpoint.options) {
					if (Array.isArray(endpoint.options.method)) methods = endpoint.options.method;
					else if (typeof endpoint.options.method === "string") methods = [endpoint.options.method];
				}
				if (methods.length === 0) methods = ["*"];
				if (!endpointRegistry.has(path)) endpointRegistry.set(path, []);
				endpointRegistry.get(path).push({
					pluginId: plugin.id,
					endpointKey: key,
					methods
				});
			}
		}
	});
	const conflicts = [];
	for (const [path, entries] of endpointRegistry.entries()) if (entries.length > 1) {
		const methodMap = /* @__PURE__ */ new Map();
		let hasConflict = false;
		for (const entry of entries) for (const method of entry.methods) {
			if (!methodMap.has(method)) methodMap.set(method, []);
			methodMap.get(method).push(entry.pluginId);
			if (methodMap.get(method).length > 1) hasConflict = true;
			if (method === "*" && entries.length > 1) hasConflict = true;
			else if (method !== "*" && methodMap.has("*")) hasConflict = true;
		}
		if (hasConflict) {
			const uniquePlugins = [...new Set(entries.map((e) => e.pluginId))];
			const conflictingMethods = [];
			for (const [method, plugins] of methodMap.entries()) if (plugins.length > 1 || method === "*" && entries.length > 1 || method !== "*" && methodMap.has("*")) conflictingMethods.push(method);
			conflicts.push({
				path,
				plugins: uniquePlugins,
				conflictingMethods
			});
		}
	}
	if (conflicts.length > 0) {
		const conflictMessages = conflicts.map((conflict) => `  - "${conflict.path}" [${conflict.conflictingMethods.join(", ")}] used by plugins: ${conflict.plugins.join(", ")}`).join("\n");
		logger.error(`Endpoint path conflicts detected! Multiple plugins are trying to use the same endpoint paths with conflicting HTTP methods:
${conflictMessages}

To resolve this, you can:
	1. Use only one of the conflicting plugins
	2. Configure the plugins to use different paths (if supported)
	3. Ensure plugins use different HTTP methods for the same path
`);
	}
}
function getEndpoints(ctx, options) {
	const withSpan = createWithSpan(options);
	const pluginEndpoints = options.plugins?.reduce((acc, plugin) => {
		return {
			...acc,
			...plugin.endpoints
		};
	}, {}) ?? {};
	const middlewares = options.plugins?.map((plugin) => plugin.middlewares?.map((m) => {
		const middleware = (async (context) => {
			const authContext = await ctx;
			return withSpan(`middleware ${m.path} ${plugin.id}`, {
				["better_auth.hook.type"]: "middleware",
				[import_src.ATTR_HTTP_ROUTE]: m.path,
				["better_auth.context"]: `plugin:${plugin.id}`
			}, () => m.middleware({
				...context,
				context: {
					...authContext,
					...context.context
				}
			}));
		});
		middleware.options = m.middleware.options;
		return {
			path: m.path,
			middleware
		};
	})).filter((plugin) => plugin !== void 0).flat() || [];
	return {
		api: toAuthEndpoints({
			signInSocial: signInSocial(),
			callbackOAuth,
			getSession: getSession(),
			signOut,
			signUpEmail: signUpEmail(),
			signInEmail: signInEmail(),
			resetPassword,
			verifyPassword: verifyPassword$1,
			verifyEmail,
			sendVerificationEmail,
			changeEmail,
			changePassword,
			setPassword,
			updateSession: updateSession(),
			updateUser: updateUser(),
			deleteUser,
			requestPasswordReset,
			requestPasswordResetCallback,
			listSessions: listSessions(),
			revokeSession,
			revokeSessions,
			revokeOtherSessions,
			linkSocialAccount,
			listUserAccounts,
			deleteUserCallback,
			unlinkAccount,
			refreshToken,
			getAccessToken,
			accountInfo,
			...pluginEndpoints,
			ok,
			error
		}, ctx),
		middlewares
	};
}
var router = (ctx, options) => {
	const withSpan = createWithSpan(options);
	const { api, middlewares } = getEndpoints(ctx, options);
	const basePath = new URL(ctx.baseURL).pathname;
	return createRouter$1(api, {
		routerContext: ctx,
		openapi: { disabled: true },
		basePath,
		routerMiddleware: [{
			path: "/**",
			middleware: originCheckMiddleware
		}, ...middlewares],
		allowedMediaTypes: ["application/json"],
		skipTrailingSlashes: options.advanced?.skipTrailingSlashes ?? false,
		async onRequest(req) {
			const disabledPaths = ctx.options.disabledPaths || [];
			const normalizedPath = normalizePathname(req.url, basePath);
			if (disabledPaths.includes(normalizedPath)) return new Response("Not Found", { status: 404 });
			let currentRequest = req;
			const rateLimitResponse = await onRequestRateLimit(currentRequest, ctx);
			if (rateLimitResponse) return rateLimitResponse;
			for (const plugin of ctx.options.plugins || []) if (plugin.onRequest) {
				const response = await withSpan(`onRequest ${plugin.id}`, {
					[ATTR_HOOK_TYPE]: "onRequest",
					[ATTR_CONTEXT]: `plugin:${plugin.id}`
				}, () => plugin.onRequest(currentRequest, ctx));
				if (response && "response" in response) return response.response;
				if (response && "request" in response) currentRequest = response.request;
			}
			return currentRequest;
		},
		async onResponse(res, req) {
			for (const plugin of ctx.options.plugins || []) if (plugin.onResponse) {
				const response = await withSpan(`onResponse ${plugin.id}`, {
					[ATTR_HOOK_TYPE]: "onResponse",
					[ATTR_CONTEXT]: `plugin:${plugin.id}`,
					[import_src.ATTR_HTTP_RESPONSE_STATUS_CODE]: res.status
				}, () => plugin.onResponse(res, ctx));
				if (response) return response.response;
			}
			return res;
		},
		onError(e) {
			if (isAPIError(e) && e.status === "FOUND") return;
			if (options.onAPIError?.throw) throw e;
			if (options.onAPIError?.onError) {
				options.onAPIError.onError(e, ctx);
				return;
			}
			const optLogLevel = options.logger?.level;
			const log = optLogLevel === "error" || optLogLevel === "warn" || optLogLevel === "debug" ? logger : void 0;
			if (options.logger?.disabled !== true) {
				if (e && typeof e === "object" && "message" in e && typeof e.message === "string") {
					if (e.message.includes("no column") || e.message.includes("column") || e.message.includes("relation") || e.message.includes("table") || e.message.includes("does not exist")) {
						ctx.logger?.error(e.message);
						return;
					}
				}
				if (isAPIError(e)) {
					if (e.status === "INTERNAL_SERVER_ERROR") ctx.logger.error(e.status, e);
					log?.error(e.message);
				} else ctx.logger?.error(e && typeof e === "object" && "name" in e ? e.name : "", e);
			}
		}
	});
};
async function getBaseAdapter(options, handleDirectDatabase) {
	let adapter;
	if (!options.database) {
		const tables = getAuthTables(options);
		const memoryDB = Object.keys(tables).reduce((acc, key) => {
			acc[key] = [];
			return acc;
		}, {});
		const { memoryAdapter } = await import("../_libs/better-auth__memory-adapter.mjs").then((n) => n.t);
		adapter = memoryAdapter(memoryDB)(options);
	} else if (typeof options.database === "function") adapter = options.database(options);
	else adapter = await handleDirectDatabase(options);
	if (!adapter.transaction) {
		logger.warn("Adapter does not correctly implement transaction function, patching it automatically. Please update your adapter implementation.");
		adapter.transaction = async (cb) => {
			return cb(adapter);
		};
	}
	return adapter;
}
async function getAdapter(options) {
	return getBaseAdapter(options, async (opts) => {
		const { createKyselyAdapter } = await import("./kysely-adapter-Cj_QZw5p.mjs");
		const { kysely, databaseType, transaction } = await createKyselyAdapter(opts);
		if (!kysely) throw new BetterAuthError("Failed to initialize database adapter");
		const { kyselyAdapter } = await import("./kysely-adapter-Cj_QZw5p.mjs");
		return kyselyAdapter(kysely, {
			type: databaseType || "sqlite",
			debugLogs: opts.database && "debugLogs" in opts.database ? opts.database.debugLogs : false,
			transaction
		})(opts);
	});
}
function getSchema(config) {
	const tables = getAuthTables(config);
	const schema = {};
	for (const key in tables) {
		const table = tables[key];
		const fields = table.fields;
		const actualFields = {};
		Object.entries(fields).forEach(([key, field]) => {
			actualFields[field.fieldName || key] = field;
			if (field.references) {
				const refTable = tables[field.references.model];
				if (refTable) actualFields[field.fieldName || key].references = {
					...field.references,
					model: refTable.modelName,
					field: field.references.field
				};
			}
		});
		if (schema[table.modelName]) {
			schema[table.modelName].fields = {
				...schema[table.modelName].fields,
				...actualFields
			};
			if (table.disableMigrations) schema[table.modelName].disableMigrations = true;
			continue;
		}
		schema[table.modelName] = {
			fields: actualFields,
			order: table.order || Infinity,
			disableMigrations: table.disableMigrations
		};
	}
	return schema;
}
var map = {
	postgres: {
		string: [
			"character varying",
			"varchar",
			"text",
			"uuid"
		],
		number: [
			"int4",
			"integer",
			"bigint",
			"smallint",
			"numeric",
			"real",
			"double precision"
		],
		boolean: ["bool", "boolean"],
		date: [
			"timestamptz",
			"timestamp",
			"date"
		],
		json: ["json", "jsonb"]
	},
	mysql: {
		string: [
			"varchar",
			"text",
			"uuid"
		],
		number: [
			"integer",
			"int",
			"bigint",
			"smallint",
			"decimal",
			"float",
			"double"
		],
		boolean: ["boolean", "tinyint"],
		date: [
			"timestamp",
			"datetime",
			"date"
		],
		json: ["json"]
	},
	sqlite: {
		string: ["TEXT"],
		number: [
			"INTEGER",
			"REAL",
			"BIGINT"
		],
		boolean: ["INTEGER", "BOOLEAN"],
		date: ["DATE", "INTEGER"],
		json: ["TEXT"]
	},
	mssql: {
		string: [
			"varchar",
			"nvarchar",
			"uniqueidentifier"
		],
		number: [
			"int",
			"bigint",
			"smallint",
			"decimal",
			"float",
			"double"
		],
		boolean: ["bit", "smallint"],
		date: [
			"datetime2",
			"date",
			"datetime"
		],
		json: ["varchar", "nvarchar"]
	}
};
function matchType(columnDataType, fieldType, dbType) {
	function normalize(type) {
		return type.toLowerCase().split("(")[0].trim();
	}
	if (fieldType === "string[]" || fieldType === "number[]") return columnDataType.toLowerCase().includes("json");
	const types = map[dbType];
	return (Array.isArray(fieldType) ? types["string"].map((t) => t.toLowerCase()) : types[fieldType].map((t) => t.toLowerCase())).includes(normalize(columnDataType));
}
/**
* Get the current PostgreSQL schema (search_path) for the database connection
* Returns the first schema in the search_path, defaulting to 'public' if not found
*/
async function getPostgresSchema(db) {
	try {
		const result = await sql`SHOW search_path`.execute(db);
		const searchPath = result.rows[0]?.search_path ?? result.rows[0]?.searchPath;
		if (searchPath) return searchPath.split(",").map((s) => s.trim()).map((s) => s.replace(/^["']|["']$/g, "")).filter((s) => !s.startsWith("$") && !s.startsWith("\\$"))[0] || "public";
	} catch {}
	return "public";
}
async function getMigrations(config) {
	const betterAuthSchema = getSchema(config);
	const logger = createLogger(config.logger);
	let { kysely: db, databaseType: dbType } = await createKyselyAdapter(config);
	if (!dbType) {
		logger.warn("Could not determine database type, defaulting to sqlite. Please provide a type in the database options to avoid this.");
		dbType = "sqlite";
	}
	if (!db) {
		logger.error("Only kysely adapter is supported for migrations. You can use `generate` command to generate the schema, if you're using a different adapter.");
		process.exit(1);
	}
	let currentSchema = "public";
	if (dbType === "postgres") {
		currentSchema = await getPostgresSchema(db);
		logger.debug(`PostgreSQL migration: Using schema '${currentSchema}' (from search_path)`);
		try {
			const schemaCheck = await sql`
				SELECT schema_name
				FROM information_schema.schemata
				WHERE schema_name = ${currentSchema}
			`.execute(db);
			if (!(schemaCheck.rows[0]?.schema_name ?? schemaCheck.rows[0]?.schemaName)) logger.warn(`Schema '${currentSchema}' does not exist. Tables will be inspected from available schemas. Consider creating the schema first or checking your database configuration.`);
		} catch (error) {
			logger.debug(`Could not verify schema existence: ${error instanceof Error ? error.message : String(error)}`);
		}
	}
	const allTableMetadata = await db.introspection.getTables();
	let tableMetadata = allTableMetadata;
	if (dbType === "postgres") try {
		const tablesInSchema = await sql`
				SELECT table_name
				FROM information_schema.tables
				WHERE table_schema = ${currentSchema}
				AND table_type = 'BASE TABLE'
			`.execute(db);
		const tableNamesInSchema = new Set(tablesInSchema.rows.map((row) => row.table_name ?? row.tableName));
		tableMetadata = allTableMetadata.filter((table) => table.schema === currentSchema && tableNamesInSchema.has(table.name));
		logger.debug(`Found ${tableMetadata.length} table(s) in schema '${currentSchema}': ${tableMetadata.map((t) => t.name).join(", ") || "(none)"}`);
	} catch (error) {
		logger.warn(`Could not filter tables by schema. Using all discovered tables. Error: ${error instanceof Error ? error.message : String(error)}`);
	}
	const toBeCreated = [];
	const toBeAdded = [];
	for (const [key, value] of Object.entries(betterAuthSchema)) {
		if (value.disableMigrations) continue;
		const table = tableMetadata.find((t) => t.name === key);
		if (!table) {
			const tIndex = toBeCreated.findIndex((t) => t.table === key);
			const tableData = {
				table: key,
				fields: value.fields,
				order: value.order || Infinity
			};
			const insertIndex = toBeCreated.findIndex((t) => (t.order || Infinity) > tableData.order);
			if (insertIndex === -1) if (tIndex === -1) toBeCreated.push(tableData);
			else toBeCreated[tIndex].fields = {
				...toBeCreated[tIndex].fields,
				...value.fields
			};
			else toBeCreated.splice(insertIndex, 0, tableData);
			continue;
		}
		const toBeAddedFields = {};
		for (const [fieldName, field] of Object.entries(value.fields)) {
			const column = table.columns.find((c) => c.name === fieldName);
			if (!column) {
				toBeAddedFields[fieldName] = field;
				continue;
			}
			if (matchType(column.dataType, field.type, dbType)) continue;
			else logger.warn(`Field ${fieldName} in table ${key} has a different type in the database. Expected ${field.type} but got ${column.dataType}.`);
		}
		if (Object.keys(toBeAddedFields).length > 0) toBeAdded.push({
			table: key,
			fields: toBeAddedFields,
			order: value.order || Infinity
		});
	}
	const migrations = [];
	const useUUIDs = config.advanced?.database?.generateId === "uuid";
	const useNumberId = config.advanced?.database?.generateId === "serial";
	function getType(field, fieldName) {
		const type = field.type;
		const provider = dbType || "sqlite";
		const typeMap = {
			string: {
				sqlite: "text",
				postgres: "text",
				mysql: field.unique ? "varchar(255)" : field.references ? "varchar(36)" : field.sortable ? "varchar(255)" : field.index ? "varchar(255)" : "text",
				mssql: field.unique || field.sortable ? "varchar(255)" : field.references ? "varchar(36)" : "varchar(8000)"
			},
			boolean: {
				sqlite: "integer",
				postgres: "boolean",
				mysql: "boolean",
				mssql: "smallint"
			},
			number: {
				sqlite: field.bigint ? "bigint" : "integer",
				postgres: field.bigint ? "bigint" : "integer",
				mysql: field.bigint ? "bigint" : "integer",
				mssql: field.bigint ? "bigint" : "integer"
			},
			date: {
				sqlite: "date",
				postgres: "timestamptz",
				mysql: "timestamp(3)",
				mssql: sql`datetime2(3)`
			},
			json: {
				sqlite: "text",
				postgres: "jsonb",
				mysql: "json",
				mssql: "varchar(8000)"
			},
			id: {
				postgres: useNumberId ? sql`integer GENERATED BY DEFAULT AS IDENTITY` : useUUIDs ? "uuid" : "text",
				mysql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
				mssql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
				sqlite: useNumberId ? "integer" : "text"
			},
			foreignKeyId: {
				postgres: useNumberId ? "integer" : useUUIDs ? "uuid" : "text",
				mysql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
				mssql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
				sqlite: useNumberId ? "integer" : "text"
			},
			"string[]": {
				sqlite: "text",
				postgres: "jsonb",
				mysql: "json",
				mssql: "varchar(8000)"
			},
			"number[]": {
				sqlite: "text",
				postgres: "jsonb",
				mysql: "json",
				mssql: "varchar(8000)"
			}
		};
		if (fieldName === "id" || field.references?.field === "id") {
			if (fieldName === "id") return typeMap.id[provider];
			return typeMap.foreignKeyId[provider];
		}
		if (Array.isArray(type)) return "text";
		if (!(type in typeMap)) throw new Error(`Unsupported field type '${String(type)}' for field '${fieldName}'. Allowed types are: string, number, boolean, date, string[], number[]. If you need to store structured data, store it as a JSON string (type: "string") or split it into primitive fields. See https://better-auth.com/docs/advanced/schema#additional-fields`);
		return typeMap[type][provider];
	}
	const getModelName = initGetModelName({
		schema: getAuthTables(config),
		usePlural: false
	});
	const getFieldName = initGetFieldName({
		schema: getAuthTables(config),
		usePlural: false
	});
	function getReferencePath(model, field) {
		try {
			return `${getModelName(model)}.${getFieldName({
				model,
				field
			})}`;
		} catch {
			return `${model}.${field}`;
		}
	}
	const deferredIndexes = [];
	if (toBeAdded.length) for (const table of toBeAdded) for (const [fieldName, field] of Object.entries(table.fields)) {
		const type = getType(field, fieldName);
		const builder = db.schema.alterTable(table.table);
		if (field.index) {
			const indexName = `${table.table}_${fieldName}_${field.unique ? "uidx" : "idx"}`;
			const indexBuilder = db.schema.createIndex(indexName).on(table.table).columns([fieldName]);
			deferredIndexes.push(field.unique ? indexBuilder.unique() : indexBuilder);
		}
		const built = builder.addColumn(fieldName, type, (col) => {
			col = field.required !== false ? col.notNull() : col;
			if (field.references) col = col.references(getReferencePath(field.references.model, field.references.field)).onDelete(field.references.onDelete || "cascade");
			if (field.unique) col = col.unique();
			if (field.type === "date" && typeof field.defaultValue === "function" && (dbType === "postgres" || dbType === "mysql" || dbType === "mssql")) if (dbType === "mysql") col = col.defaultTo(sql`CURRENT_TIMESTAMP(3)`);
			else col = col.defaultTo(sql`CURRENT_TIMESTAMP`);
			return col;
		});
		migrations.push(built);
	}
	if (toBeCreated.length) for (const table of toBeCreated) {
		const idType = getType({ type: useNumberId ? "number" : "string" }, "id");
		let dbT = db.schema.createTable(table.table).addColumn("id", idType, (col) => {
			if (useNumberId) {
				if (dbType === "postgres") return col.primaryKey().notNull();
				else if (dbType === "sqlite") return col.primaryKey().notNull();
				else if (dbType === "mssql") return col.identity().primaryKey().notNull();
				return col.autoIncrement().primaryKey().notNull();
			}
			if (useUUIDs) {
				if (dbType === "postgres") return col.primaryKey().defaultTo(sql`pg_catalog.gen_random_uuid()`).notNull();
				return col.primaryKey().notNull();
			}
			return col.primaryKey().notNull();
		});
		for (const [fieldName, field] of Object.entries(table.fields)) {
			const type = getType(field, fieldName);
			dbT = dbT.addColumn(fieldName, type, (col) => {
				col = field.required !== false ? col.notNull() : col;
				if (field.references) col = col.references(getReferencePath(field.references.model, field.references.field)).onDelete(field.references.onDelete || "cascade");
				if (field.unique) col = col.unique();
				if (field.type === "date" && typeof field.defaultValue === "function" && (dbType === "postgres" || dbType === "mysql" || dbType === "mssql")) if (dbType === "mysql") col = col.defaultTo(sql`CURRENT_TIMESTAMP(3)`);
				else col = col.defaultTo(sql`CURRENT_TIMESTAMP`);
				return col;
			});
			if (field.index && !field.unique) {
				const builder = db.schema.createIndex(`${table.table}_${fieldName}_idx`).on(table.table).columns([fieldName]);
				deferredIndexes.push(builder);
			}
		}
		migrations.push(dbT);
	}
	for (const index of deferredIndexes) migrations.push(index);
	async function runMigrations() {
		for (const migration of migrations) await migration.execute();
	}
	async function compileMigrations() {
		return migrations.map((m) => m.compile().sql).join(";\n\n") + ";";
	}
	return {
		toBeCreated,
		toBeAdded,
		runMigrations,
		compileMigrations
	};
}
var DEFAULT_SECRET = "better-auth-secret-12345678901234567890";
/**
* Estimates the entropy of a string in bits.
* This is a simple approximation that helps detect low-entropy secrets.
*/
function estimateEntropy$1(str) {
	const unique = new Set(str).size;
	if (unique === 0) return 0;
	return Math.log2(Math.pow(unique, str.length));
}
function parseSecretsEnv(envValue) {
	if (!envValue) return null;
	return envValue.split(",").map((entry) => {
		entry = entry.trim();
		const colonIdx = entry.indexOf(":");
		if (colonIdx === -1) throw new BetterAuthError(`Invalid BETTER_AUTH_SECRETS entry: "${entry}". Expected format: "<version>:<secret>"`);
		const version = parseInt(entry.slice(0, colonIdx), 10);
		if (!Number.isInteger(version) || version < 0) throw new BetterAuthError(`Invalid version in BETTER_AUTH_SECRETS: "${entry.slice(0, colonIdx)}". Version must be a non-negative integer.`);
		const value = entry.slice(colonIdx + 1).trim();
		if (!value) throw new BetterAuthError(`Empty secret value for version ${version} in BETTER_AUTH_SECRETS.`);
		return {
			version,
			value
		};
	});
}
function validateSecretsArray(secrets, logger) {
	if (secrets.length === 0) throw new BetterAuthError("`secrets` array must contain at least one entry.");
	const seen = /* @__PURE__ */ new Set();
	for (const s of secrets) {
		const version = parseInt(String(s.version), 10);
		if (!Number.isInteger(version) || version < 0 || String(version) !== String(s.version).trim()) throw new BetterAuthError(`Invalid version ${s.version} in \`secrets\`. Version must be a non-negative integer.`);
		if (!s.value) throw new BetterAuthError(`Empty secret value for version ${version} in \`secrets\`.`);
		if (seen.has(version)) throw new BetterAuthError(`Duplicate version ${version} in \`secrets\`. Each version must be unique.`);
		seen.add(version);
	}
	const current = secrets[0];
	if (current.value.length < 32) logger.warn(`[better-auth] Warning: the current secret (version ${current.version}) should be at least 32 characters long for adequate security.`);
	if (estimateEntropy$1(current.value) < 120) logger.warn("[better-auth] Warning: the current secret appears low-entropy. Use a randomly generated secret for production.");
}
function buildSecretConfig(secrets, legacySecret) {
	const keys = /* @__PURE__ */ new Map();
	for (const s of secrets) keys.set(parseInt(String(s.version), 10), s.value);
	return {
		keys,
		currentVersion: parseInt(String(secrets[0].version), 10),
		legacySecret: legacySecret && legacySecret !== "better-auth-secret-12345678901234567890" ? legacySecret : void 0
	};
}
/**
* Estimates the entropy of a string in bits.
* This is a simple approximation that helps detect low-entropy secrets.
*/
function estimateEntropy(str) {
	const unique = new Set(str).size;
	if (unique === 0) return 0;
	return Math.log2(Math.pow(unique, str.length));
}
/**
* Validates that the secret meets minimum security requirements.
* Throws BetterAuthError if the secret is invalid.
* Skips validation for DEFAULT_SECRET in test environments only.
* Only throws for DEFAULT_SECRET in production environment.
*/
function validateSecret(secret, logger) {
	const isDefaultSecret = secret === DEFAULT_SECRET;
	if (isTest()) return;
	if (isDefaultSecret && isProduction) throw new BetterAuthError("You are using the default secret. Please set `BETTER_AUTH_SECRET` in your environment variables or pass `secret` in your auth config.");
	if (!secret) throw new BetterAuthError("BETTER_AUTH_SECRET is missing. Set it in your environment or pass `secret` to betterAuth({ secret }).");
	if (secret.length < 32) logger.warn(`[better-auth] Warning: your BETTER_AUTH_SECRET should be at least 32 characters long for adequate security. Generate one with \`npx auth secret\` or \`openssl rand -base64 32\`.`);
	if (estimateEntropy(secret) < 120) logger.warn("[better-auth] Warning: your BETTER_AUTH_SECRET appears low-entropy. Use a randomly generated secret for production.");
}
async function createAuthContext(adapter, options, getDatabaseType) {
	const isStateful = hasServerSessionStore(options);
	if (!isStateful) options = defu(options, { session: { cookieCache: {
		enabled: true,
		strategy: "jwe",
		refreshCache: true,
		maxAge: options.session?.expiresIn || 604800
	} } });
	if (!options.database) options = defu(options, { account: { storeAccountCookie: true } });
	const plugins = options.plugins || [];
	const internalPlugins = getInternalPlugins(options);
	const logger = createLogger(options.logger);
	const isDynamicConfig = isDynamicBaseURLConfig(options.baseURL);
	if (isDynamicBaseURLConfig(options.baseURL)) {
		const { allowedHosts } = options.baseURL;
		if (!allowedHosts || allowedHosts.length === 0) throw new BetterAuthError("baseURL.allowedHosts cannot be empty. Provide at least one allowed host pattern (e.g., [\"myapp.com\", \"*.vercel.app\"]).");
	}
	const baseURL = isDynamicConfig ? void 0 : getBaseURL(typeof options.baseURL === "string" ? options.baseURL : void 0, options.basePath);
	if (!baseURL && !isDynamicConfig) logger.warn(`[better-auth] Base URL is not set. Set the baseURL option or BETTER_AUTH_URL env, or use a dynamic baseURL with allowedHosts for multi-host setups. Without it the origin is derived from the incoming request, and callbacks and redirects may not work correctly.`);
	if (adapter.id === "memory" && options.advanced?.database?.generateId === false) logger.error(`[better-auth] Misconfiguration detected.
You are using the memory DB with generateId: false.
This will cause no id to be generated for any model.
Most of the features of Better Auth will not work correctly.`);
	const secretsArray = options.secrets ?? parseSecretsEnv(env.BETTER_AUTH_SECRETS);
	const legacySecret = options.secret || env.BETTER_AUTH_SECRET || env.AUTH_SECRET || "";
	let secret;
	let secretConfig;
	if (secretsArray) {
		validateSecretsArray(secretsArray, logger);
		secret = secretsArray[0].value;
		secretConfig = buildSecretConfig(secretsArray, legacySecret);
	} else {
		secret = legacySecret || "better-auth-secret-12345678901234567890";
		validateSecret(secret, logger);
		secretConfig = secret;
	}
	options = {
		...options,
		secret,
		baseURL: isDynamicConfig ? options.baseURL : baseURL ? new URL(baseURL).origin : "",
		basePath: options.basePath || "/api/auth",
		plugins: plugins.concat(internalPlugins)
	};
	checkEndpointConflicts(options, logger);
	const trustedProxies = options.advanced?.ipAddress?.trustedProxies;
	if (trustedProxies && trustedProxies.length > 0) {
		const invalid = findInvalidTrustedProxies(trustedProxies);
		if (invalid.length > 0) logger.warn(`Ignoring invalid \`advanced.ipAddress.trustedProxies\` entries: ${invalid.join(", ")}. Each entry must be an IP address or CIDR range.`);
	}
	const cookies = getCookies(options);
	const tables = getAuthTables(options);
	const providers = (await Promise.all(Object.entries(options.socialProviders || {}).map(async ([key, originalConfig]) => {
		const config = typeof originalConfig === "function" ? await originalConfig() : originalConfig;
		if (config == null) return null;
		if (config.enabled === false) return null;
		if (!config.clientId) logger.warn(`Social provider ${key} is missing clientId or clientSecret`);
		const provider = socialProviders[key](config);
		provider.disableImplicitSignUp = config.disableImplicitSignUp;
		return provider;
	}))).filter((x) => x !== null);
	const generateIdFunc = ({ model, size }) => {
		if (typeof options.advanced?.generateId === "function") return options.advanced.generateId({
			model,
			size
		});
		const dbGenerateId = options?.advanced?.database?.generateId;
		if (typeof dbGenerateId === "function") return dbGenerateId({
			model,
			size
		});
		if (dbGenerateId === "uuid") return crypto.randomUUID();
		if (dbGenerateId === "serial" || dbGenerateId === false) return false;
		return generateId(size);
	};
	const { publish } = await createTelemetry(options, {
		adapter: adapter.id,
		database: typeof options.database === "function" ? "adapter" : getDatabaseType(options.database)
	});
	const pluginIds = new Set(options.plugins.map((p) => p.id));
	const getPluginFn = (id) => options.plugins.find((p) => p.id === id) ?? null;
	const hasPluginFn = (id) => pluginIds.has(id);
	const trustedOrigins = await getTrustedOrigins(options);
	const trustedProviders = await getTrustedProviders(options);
	const ctx = {
		appName: options.appName || "Better Auth",
		baseURL: baseURL || "",
		version: getBetterAuthVersion(),
		socialProviders: providers,
		options,
		oauthConfig: {
			storeStateStrategy: options.account?.storeStateStrategy || (isStateful ? "database" : "cookie"),
			skipStateCookieCheck: !!options.account?.skipStateCookieCheck
		},
		tables,
		trustedOrigins,
		trustedProviders,
		isTrustedOrigin(url, settings) {
			return this.trustedOrigins.some((origin) => matchesOriginPattern(url, origin, settings));
		},
		sessionConfig: {
			updateAge: options.session?.updateAge !== void 0 ? options.session.updateAge : 86400,
			expiresIn: options.session?.expiresIn || 604800,
			freshAge: options.session?.freshAge === void 0 ? 86400 : options.session.freshAge,
			cookieRefreshCache: (() => {
				const refreshCache = options.session?.cookieCache?.refreshCache;
				const maxAge = options.session?.cookieCache?.maxAge || 300;
				if (isStateful && refreshCache) {
					logger.warn("[better-auth] `session.cookieCache.refreshCache` is enabled while `database` or `secondaryStorage` is configured. `refreshCache` is meant for stateless (DB-less) setups. Disabling `refreshCache` — remove it from your config to silence this warning.");
					return false;
				}
				if (refreshCache === false || refreshCache === void 0) return false;
				if (refreshCache === true) return {
					enabled: true,
					updateAge: Math.floor(maxAge * .2)
				};
				return {
					enabled: true,
					updateAge: refreshCache.updateAge !== void 0 ? refreshCache.updateAge : Math.floor(maxAge * .2)
				};
			})()
		},
		secret,
		secretConfig,
		rateLimit: {
			...options.rateLimit,
			enabled: options.rateLimit?.enabled ?? isProduction,
			window: options.rateLimit?.window || 10,
			max: options.rateLimit?.max || 100,
			storage: options.rateLimit?.storage || (options.secondaryStorage ? "secondary-storage" : "memory")
		},
		authCookies: cookies,
		logger,
		generateId: generateIdFunc,
		session: null,
		secondaryStorage: options.secondaryStorage,
		password: {
			hash: options.emailAndPassword?.password?.hash || hashPassword$1,
			verify: options.emailAndPassword?.password?.verify || verifyPassword$1$1,
			config: {
				minPasswordLength: options.emailAndPassword?.minPasswordLength || 8,
				maxPasswordLength: options.emailAndPassword?.maxPasswordLength || 128
			},
			checkPassword
		},
		setNewSession(session) {
			this.newSession = session;
		},
		newSession: null,
		adapter,
		internalAdapter: createInternalAdapter(adapter, {
			options,
			logger,
			hooks: options.databaseHooks ? [{
				source: "user",
				hooks: options.databaseHooks
			}] : [],
			generateId: generateIdFunc
		}),
		createAuthCookie: createCookieGetter(options),
		async runMigrations() {
			throw new BetterAuthError("runMigrations will be set by the specific init implementation");
		},
		publishTelemetry: publish,
		skipCSRFCheck: !!options.advanced?.disableCSRFCheck,
		skipOriginCheck: options.advanced?.disableOriginCheck !== void 0 ? options.advanced.disableOriginCheck : isTest() ? true : false,
		runInBackground: options.advanced?.backgroundTasks?.handler ?? ((p) => {
			p.catch(() => {});
		}),
		async runInBackgroundOrAwait(promise) {
			try {
				if (options.advanced?.backgroundTasks?.handler) {
					if (promise instanceof Promise) options.advanced.backgroundTasks.handler(promise.catch((e) => {
						logger.error("Failed to run background task:", e);
					}));
				} else await promise;
			} catch (e) {
				logger.error("Failed to run background task:", e);
			}
		},
		getPlugin: getPluginFn,
		hasPlugin: hasPluginFn
	};
	const initOrPromise = runPluginInit(ctx);
	if (isPromise(initOrPromise)) await initOrPromise;
	return ctx;
}
var init = async (options) => {
	const adapter = await getAdapter(options);
	const getDatabaseType = (database) => getKyselyDatabaseType(database) || "unknown";
	const ctx = await createAuthContext(adapter, options, getDatabaseType);
	ctx.runMigrations = async function() {
		if (!options.database || "updateMany" in options.database) throw new BetterAuthError("Database is not provided or it's an adapter. Migrations are only supported with a database instance.");
		const { runMigrations } = await getMigrations(options);
		await runMigrations();
	};
	return ctx;
};
var createBetterAuth = (options, initFn) => {
	const authContext = initFn(options);
	const { api } = getEndpoints(authContext, options);
	return {
		handler: async (request) => {
			const ctx = await authContext;
			const basePath = ctx.options.basePath || "/api/auth";
			let handlerCtx;
			if (isDynamicBaseURLConfig(options.baseURL)) handlerCtx = await resolveRequestContext(ctx, request, resolveDynamicTrustedProxyHeaders(ctx.options));
			else {
				handlerCtx = Object.create(Object.getPrototypeOf(ctx), Object.getOwnPropertyDescriptors(ctx));
				let trustOptions = ctx.options;
				if (!ctx.options.baseURL) {
					const baseURL = getBaseURL(void 0, basePath, request, void 0, ctx.options.advanced?.trustedProxyHeaders);
					if (!baseURL) throw new BetterAuthError("Could not get base URL from request. Please provide a valid base URL.");
					handlerCtx.baseURL = baseURL;
					handlerCtx.options = {
						...ctx.options,
						baseURL: getOrigin(baseURL) || void 0
					};
					trustOptions = handlerCtx.options;
				}
				handlerCtx.trustedOrigins = await getTrustedOrigins(trustOptions, request);
				handlerCtx.trustedProviders = await getTrustedProviders(trustOptions, request);
			}
			const { handler } = router(handlerCtx, options);
			return runWithAdapter(handlerCtx.adapter, () => handler(request));
		},
		api,
		options,
		$context: authContext,
		$ERROR_CODES: {
			...options.plugins?.reduce((acc, plugin) => {
				if (plugin.$ERROR_CODES) return {
					...acc,
					...plugin.$ERROR_CODES
				};
				return acc;
			}, {}),
			...BASE_ERROR_CODES
		}
	};
};
/**
* Better Auth initializer for full mode (with Kysely)
*
* @example
* ```ts
* import { betterAuth } from "better-auth";
*
* const auth = betterAuth({
* 	database: new PostgresDialect({ connection: process.env.DATABASE_URL }),
* });
* ```
*
* For minimal mode (without Kysely), import from `better-auth/minimal` instead
* @example
* ```ts
* import { betterAuth } from "better-auth/minimal";
*
* const auth = betterAuth({
*	  database: drizzleAdapter(db, { provider: "pg" }),
* });
*/
var betterAuth = (options) => {
	return createBetterAuth(options, init);
};
var BEARER_SCHEME = "bearer ";
function tryDecode(str) {
	try {
		return decodeURIComponent(str);
	} catch {
		return str;
	}
}
/**
* Converts bearer token to session cookie
*/
var bearer = (options) => {
	return {
		id: "bearer",
		version: PACKAGE_VERSION,
		hooks: {
			before: [{
				matcher(context) {
					return Boolean(context.request?.headers.get("authorization") || context.headers?.get("authorization"));
				},
				handler: createAuthMiddleware(async (c) => {
					const authHeader = c.request?.headers.get("authorization") || c.headers?.get("Authorization");
					if (!authHeader) return;
					if (authHeader.slice(0, 7).toLowerCase() !== BEARER_SCHEME) return;
					const token = authHeader.slice(7).trim();
					if (!token) return;
					let decodedToken;
					if (token.includes(".")) decodedToken = token.includes("%") ? tryDecode(token) : token;
					else {
						if (options?.requireSignature) return;
						decodedToken = tryDecode((await serializeSignedCookie("", token, c.context.secret)).replace("=", ""));
					}
					try {
						if (!await createHMAC("SHA-256", "base64urlnopad").verify(c.context.secret, decodedToken.split(".")[0], decodedToken.split(".")[1])) return;
					} catch {
						return;
					}
					const existingHeaders = c.request?.headers || c.headers;
					const headers = new Headers({ ...Object.fromEntries(existingHeaders?.entries()) });
					setRequestCookie(headers, c.context.authCookies.sessionToken.name, decodedToken);
					return { context: { headers } };
				})
			}],
			after: [{
				matcher(context) {
					return true;
				},
				handler: createAuthMiddleware(async (ctx) => {
					const setCookie = ctx.context.responseHeaders?.get("set-cookie");
					if (!setCookie) return;
					const parsedCookies = parseSetCookieHeader(setCookie);
					const cookieName = ctx.context.authCookies.sessionToken.name;
					const sessionCookie = parsedCookies.get(cookieName);
					if (!sessionCookie || !sessionCookie.value || sessionCookie["max-age"] === 0) return;
					const token = sessionCookie.value;
					const exposedHeaders = ctx.context.responseHeaders?.get("access-control-expose-headers") || "";
					const headersSet = new Set(exposedHeaders.split(",").map((header) => header.trim()).filter(Boolean));
					headersSet.add("set-auth-token");
					ctx.setHeader("set-auth-token", token);
					ctx.setHeader("Access-Control-Expose-Headers", Array.from(headersSet).join(", "));
				})
			}]
		},
		options
	};
};
function isNonEmptyOAuthId$1(id) {
	return id !== void 0 && id !== null && id !== "";
}
var signInWithOAuth2BodySchema = object({
	providerId: string().meta({ description: "The provider ID for the OAuth provider" }),
	callbackURL: string().meta({ description: "The URL to redirect to after sign in" }).optional(),
	errorCallbackURL: string().meta({ description: "The URL to redirect to if an error occurs" }).optional(),
	newUserCallbackURL: string().meta({ description: "The URL to redirect to after login if the user is new. Eg: \"/welcome\"" }).optional(),
	disableRedirect: boolean().meta({ description: "Disable redirect" }).optional(),
	scopes: array(string()).meta({ description: "Scopes to be passed to the provider authorization request." }).optional(),
	requestSignUp: boolean().meta({ description: "Explicitly request sign-up. Useful when disableImplicitSignUp is true for this provider. Eg: false" }).optional(),
	/**
	* Any additional data to pass through the oauth flow.
	*/
	additionalData: record(string(), any()).optional()
});
/**
* ### Endpoint
*
* POST `/sign-in/oauth2`
*
* ### API Methods
*
* **server:**
* `auth.api.signInWithOAuth2`
*
* **client:**
* `authClient.signIn.oauth2`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/sign-in#api-method-sign-in-oauth2)
*/
var signInWithOAuth2 = (options) => createAuthEndpoint("/sign-in/oauth2", {
	method: "POST",
	body: signInWithOAuth2BodySchema,
	metadata: { openapi: {
		description: "Sign in with OAuth2",
		responses: { 200: {
			description: "Sign in with OAuth2",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					url: { type: "string" },
					redirect: { type: "boolean" }
				}
			} } }
		} }
	} }
}, async (ctx) => {
	const { providerId } = ctx.body;
	const config = options.config.find((c) => c.providerId === providerId);
	if (!config) throw APIError.fromStatus("BAD_REQUEST", { message: `${GENERIC_OAUTH_ERROR_CODES.PROVIDER_CONFIG_NOT_FOUND} ${providerId}` });
	const { discoveryUrl, authorizationUrl, tokenUrl, clientId, clientSecret, scopes, redirectURI, responseType, pkce, prompt, accessType, authorizationUrlParams, responseMode } = config;
	let finalAuthUrl = authorizationUrl;
	let finalTokenUrl = tokenUrl;
	if (discoveryUrl) {
		const discovery = await betterFetch(discoveryUrl, {
			method: "GET",
			headers: config.discoveryHeaders,
			onError(context) {
				ctx.context.logger.error(context.error.message, context.error, { discoveryUrl });
			}
		});
		if (discovery.data) {
			finalAuthUrl = discovery.data.authorization_endpoint;
			finalTokenUrl = discovery.data.token_endpoint;
		}
	}
	if (!finalAuthUrl || !finalTokenUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIGURATION);
	if (authorizationUrlParams) {
		const withAdditionalParams = new URL(finalAuthUrl);
		for (const [paramName, paramValue] of Object.entries(authorizationUrlParams)) withAdditionalParams.searchParams.set(paramName, paramValue);
		finalAuthUrl = withAdditionalParams.toString();
	}
	const additionalParams = typeof authorizationUrlParams === "function" ? authorizationUrlParams(ctx) : authorizationUrlParams;
	const { state, codeVerifier } = await generateState(ctx, void 0, ctx.body.additionalData);
	const authUrl = await createAuthorizationURL({
		id: providerId,
		options: {
			clientId,
			clientSecret,
			redirectURI
		},
		authorizationEndpoint: finalAuthUrl,
		state,
		codeVerifier: pkce ? codeVerifier : void 0,
		scopes: ctx.body.scopes ? [...ctx.body.scopes, ...scopes || []] : scopes || [],
		redirectURI: `${ctx.context.baseURL}/oauth2/callback/${providerId}`,
		prompt,
		accessType,
		responseType,
		responseMode,
		additionalParams
	});
	return ctx.json({
		url: authUrl.toString(),
		redirect: !ctx.body.disableRedirect
	});
});
var OAuth2CallbackQuerySchema = object({
	code: string().meta({ description: "The OAuth2 code" }).optional(),
	error: string().meta({ description: "The error message, if any" }).optional(),
	error_description: string().meta({ description: "The error description, if any" }).optional(),
	state: string().meta({ description: "The state parameter from the OAuth2 request" }).optional(),
	iss: string().meta({ description: "The issuer identifier" }).optional()
});
var oAuth2Callback = (options) => createAuthEndpoint("/oauth2/callback/:providerId", {
	method: "GET",
	query: OAuth2CallbackQuerySchema,
	metadata: {
		...HIDE_METADATA,
		allowedMediaTypes: ["application/x-www-form-urlencoded", "application/json"],
		openapi: {
			description: "OAuth2 callback",
			responses: { 200: {
				description: "OAuth2 callback",
				content: { "application/json": { schema: {
					type: "object",
					properties: { url: { type: "string" } }
				} } }
			} }
		}
	}
}, async (ctx) => {
	const defaultErrorURL = ctx.context.options.onAPIError?.errorURL || `${ctx.context.baseURL}/error`;
	if (ctx.query.error || !ctx.query.code) redirectOnError(ctx, defaultErrorURL, ctx.query.error || "oAuth_code_missing", ctx.query.error_description || void 0);
	const providerId = ctx.params?.providerId;
	if (!providerId) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.PROVIDER_ID_REQUIRED);
	const providerConfig = options.config.find((p) => p.providerId === providerId);
	if (!providerConfig) throw APIError.fromStatus("BAD_REQUEST", { message: `${GENERIC_OAUTH_ERROR_CODES.PROVIDER_CONFIG_NOT_FOUND} ${providerId}` });
	let tokens = void 0;
	const { callbackURL, codeVerifier, errorURL, requestSignUp, newUserURL, link } = await parseState(ctx);
	const code = ctx.query.code;
	const resolvedErrorURL = errorURL || defaultErrorURL;
	let finalTokenUrl = providerConfig.tokenUrl;
	let finalUserInfoUrl = providerConfig.userInfoUrl;
	let expectedIssuer = providerConfig.issuer;
	if (providerConfig.discoveryUrl) {
		const discovery = await betterFetch(providerConfig.discoveryUrl, {
			method: "GET",
			headers: providerConfig.discoveryHeaders
		});
		if (discovery.data) {
			finalTokenUrl = discovery.data.token_endpoint;
			finalUserInfoUrl = discovery.data.userinfo_endpoint;
			if (!expectedIssuer && discovery.data.issuer) expectedIssuer = discovery.data.issuer;
		}
	}
	if (expectedIssuer) {
		if (ctx.query.iss) {
			if (ctx.query.iss !== expectedIssuer) {
				ctx.context.logger.error("OAuth issuer mismatch", {
					expected: expectedIssuer,
					received: ctx.query.iss
				});
				redirectOnError(ctx, resolvedErrorURL, "issuer_mismatch");
			}
		} else if (providerConfig.requireIssuerValidation) {
			ctx.context.logger.error("OAuth issuer parameter missing", { expected: expectedIssuer });
			redirectOnError(ctx, resolvedErrorURL, "issuer_missing");
		}
	}
	try {
		if (providerConfig.getToken) tokens = await providerConfig.getToken({
			code,
			redirectURI: `${ctx.context.baseURL}/oauth2/callback/${providerConfig.providerId}`,
			codeVerifier: providerConfig.pkce ? codeVerifier : void 0
		});
		else {
			if (!finalTokenUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIG);
			const additionalParams = typeof providerConfig.tokenUrlParams === "function" ? providerConfig.tokenUrlParams(ctx) : providerConfig.tokenUrlParams;
			tokens = await validateAuthorizationCode({
				headers: providerConfig.authorizationHeaders,
				code,
				codeVerifier: providerConfig.pkce ? codeVerifier : void 0,
				redirectURI: `${ctx.context.baseURL}/oauth2/callback/${providerConfig.providerId}`,
				options: {
					clientId: providerConfig.clientId,
					clientSecret: providerConfig.clientSecret,
					redirectURI: providerConfig.redirectURI
				},
				tokenEndpoint: finalTokenUrl,
				authentication: providerConfig.authentication,
				additionalParams
			});
		}
		tokens = applyDefaultAccessTokenExpiry(tokens, providerConfig.accessTokenExpiresIn);
	} catch (e) {
		ctx.context.logger.error(e && typeof e === "object" && "name" in e ? e.name : "", e);
		redirectOnError(ctx, resolvedErrorURL, "oauth_code_verification_failed");
	}
	if (!tokens) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIG);
	const userInfo = await (async function handleUserInfo() {
		const userInfo = providerConfig.getUserInfo ? await providerConfig.getUserInfo(tokens) : await getUserInfo(tokens, finalUserInfoUrl);
		if (!userInfo) redirectOnError(ctx, resolvedErrorURL, "user_info_is_missing");
		const mapUser = providerConfig.mapProfileToUser ? await providerConfig.mapProfileToUser(userInfo) : userInfo;
		const email = mapUser.email ? mapUser.email.toLowerCase() : userInfo.email?.toLowerCase();
		if (!email) {
			ctx.context.logger.error(missingEmailLogMessage(providerConfig.providerId, { source: "generic" }), userInfo);
			redirectOnError(ctx, resolvedErrorURL, "email_is_missing");
		}
		const rawId = isNonEmptyOAuthId$1(mapUser.id) ? mapUser.id : isNonEmptyOAuthId$1(userInfo.id) ? userInfo.id : isNonEmptyOAuthId$1(userInfo.sub) ? userInfo.sub : void 0;
		const id = rawId !== void 0 ? String(rawId) : "";
		if (!id) {
			ctx.context.logger.error("Provider did not return an account id (e.g. `sub`). Unable to sign in.", userInfo);
			redirectOnError(ctx, resolvedErrorURL, "id_is_missing");
		}
		const name = mapUser.name ? mapUser.name : userInfo.name;
		if (!name) {
			ctx.context.logger.error("Unable to get user info", userInfo);
			redirectOnError(ctx, resolvedErrorURL, "name_is_missing");
		}
		return {
			...userInfo,
			...mapUser,
			email,
			id,
			name
		};
	})();
	if (link) {
		if (ctx.context.options.account?.accountLinking?.allowDifferentEmails !== true && link.email.toLowerCase() !== userInfo.email.toLowerCase()) redirectOnError(ctx, resolvedErrorURL, "email_doesn't_match");
		const existingAccount = await ctx.context.internalAdapter.findAccountByProviderId(String(userInfo.id), providerConfig.providerId);
		if (existingAccount) {
			if (existingAccount.userId !== link.userId) redirectOnError(ctx, resolvedErrorURL, "account_already_linked_to_different_user");
			const updateData = Object.fromEntries(Object.entries({
				accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
				idToken: tokens.idToken,
				refreshToken: await setTokenUtil(tokens.refreshToken, ctx.context),
				accessTokenExpiresAt: tokens.accessTokenExpiresAt,
				refreshTokenExpiresAt: tokens.refreshTokenExpiresAt,
				scope: tokens.scopes?.join(",")
			}).filter(([_, value]) => value !== void 0));
			await ctx.context.internalAdapter.updateAccount(existingAccount.id, updateData);
		} else if (!await ctx.context.internalAdapter.createAccount({
			userId: link.userId,
			providerId: providerConfig.providerId,
			accountId: userInfo.id,
			accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
			accessTokenExpiresAt: tokens.accessTokenExpiresAt,
			refreshTokenExpiresAt: tokens.refreshTokenExpiresAt,
			scope: tokens.scopes?.join(","),
			refreshToken: await setTokenUtil(tokens.refreshToken, ctx.context),
			idToken: tokens.idToken
		})) redirectOnError(ctx, resolvedErrorURL, "unable_to_link_account");
		await applyUpdateUserInfoOnLink(ctx, link.userId, userInfo);
		let toRedirectTo;
		try {
			toRedirectTo = callbackURL.toString();
		} catch {
			toRedirectTo = callbackURL;
		}
		throw ctx.redirect(toRedirectTo);
	}
	let result;
	try {
		result = await handleOAuthUserInfo(ctx, {
			userInfo,
			account: {
				providerId: providerConfig.providerId,
				accountId: userInfo.id,
				...tokens,
				scope: tokens.scopes?.join(",")
			},
			callbackURL,
			disableSignUp: providerConfig.disableImplicitSignUp && !requestSignUp || providerConfig.disableSignUp,
			overrideUserInfo: providerConfig.overrideUserInfo
		});
	} catch (e) {
		if (isAPIError(e) && e.body?.code) redirectOnError(ctx, resolvedErrorURL, e.body.code, e.body.message);
		throw e;
	}
	if (result.error) redirectOnError(ctx, resolvedErrorURL, result.error.split(" ").join("_"));
	const { session, user } = result.data;
	await setSessionCookie(ctx, {
		session,
		user
	});
	let toRedirectTo;
	try {
		toRedirectTo = (result.isRegister ? newUserURL || callbackURL : callbackURL).toString();
	} catch {
		toRedirectTo = result.isRegister ? newUserURL || callbackURL : callbackURL;
	}
	throw ctx.redirect(toRedirectTo);
});
var OAuth2LinkAccountBodySchema = object({
	providerId: string(),
	/**
	* Callback URL to redirect to after the user has signed in.
	*/
	callbackURL: string(),
	/**
	* Additional scopes to request when linking the account.
	* This is useful for requesting additional permissions when
	* linking a social account compared to the initial authentication.
	*/
	scopes: array(string()).meta({ description: "Additional scopes to request when linking the account" }).optional(),
	/**
	* The URL to redirect to if there is an error during the link process.
	*/
	errorCallbackURL: string().meta({ description: "The URL to redirect to if there is an error during the link process" }).optional()
});
/**
* ### Endpoint
*
* POST `/oauth2/link`
*
* ### API Methods
*
* **server:**
* `auth.api.oAuth2LinkAccount`
*
* **client:**
* `authClient.oauth2.link`
*
* @see [Read our docs to learn more.](https://better-auth.com/docs/plugins/generic-oauth#api-method-oauth2-link)
*/
var oAuth2LinkAccount = (options) => createAuthEndpoint("/oauth2/link", {
	method: "POST",
	body: OAuth2LinkAccountBodySchema,
	use: [sessionMiddleware],
	metadata: { openapi: {
		description: "Link an OAuth2 account to the current user session",
		responses: { "200": {
			description: "Authorization URL generated successfully for linking an OAuth2 account",
			content: { "application/json": { schema: {
				type: "object",
				properties: {
					url: {
						type: "string",
						format: "uri",
						description: "The authorization URL to redirect the user to for linking the OAuth2 account"
					},
					redirect: {
						type: "boolean",
						description: "Indicates that the client should redirect to the provided URL",
						enum: [true]
					}
				},
				required: ["url", "redirect"]
			} } }
		} }
	} }
}, async (c) => {
	const session = c.context.session;
	if (!session) throw APIError.from("UNAUTHORIZED", GENERIC_OAUTH_ERROR_CODES.SESSION_REQUIRED);
	const provider = options.config.find((p) => p.providerId === c.body.providerId);
	if (!provider) throw APIError.from("NOT_FOUND", BASE_ERROR_CODES.PROVIDER_NOT_FOUND);
	const { providerId, clientId, clientSecret, redirectURI, authorizationUrl, discoveryUrl, pkce, scopes, prompt, accessType, authorizationUrlParams } = provider;
	let finalAuthUrl = authorizationUrl;
	if (!finalAuthUrl) {
		if (!discoveryUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIGURATION);
		const discovery = await betterFetch(discoveryUrl, {
			method: "GET",
			headers: provider.discoveryHeaders,
			onError(context) {
				c.context.logger.error(context.error.message, context.error, { discoveryUrl });
			}
		});
		if (discovery.data) finalAuthUrl = discovery.data.authorization_endpoint;
	}
	if (!finalAuthUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIGURATION);
	const state = await generateState(c, {
		userId: session.user.id,
		email: session.user.email
	}, void 0);
	const additionalParams = typeof authorizationUrlParams === "function" ? authorizationUrlParams(c) : authorizationUrlParams;
	const url = await createAuthorizationURL({
		id: providerId,
		options: {
			clientId,
			clientSecret,
			redirectURI: redirectURI || `${c.context.baseURL}/oauth2/callback/${providerId}`
		},
		authorizationEndpoint: finalAuthUrl,
		state: state.state,
		codeVerifier: pkce ? state.codeVerifier : void 0,
		scopes: c.body.scopes || scopes || [],
		redirectURI: redirectURI || `${c.context.baseURL}/oauth2/callback/${providerId}`,
		prompt,
		accessType,
		additionalParams
	});
	return c.json({
		url: url.toString(),
		redirect: true
	});
});
async function getUserInfo(tokens, finalUserInfoUrl) {
	if (tokens.idToken) {
		const decoded = decodeJwt(tokens.idToken);
		if (decoded) {
			if (decoded.sub && decoded.email) return {
				id: decoded.sub,
				emailVerified: decoded.email_verified,
				image: decoded.picture,
				...decoded
			};
		}
	}
	if (!finalUserInfoUrl) return null;
	const profile = (await betterFetch(finalUserInfoUrl, {
		method: "GET",
		headers: { Authorization: `Bearer ${tokens.accessToken}` }
	})).data;
	if (!profile) return null;
	const { id: profileId, ...profileFields } = profile;
	const subjectId = isNonEmptyOAuthId$1(profileId) ? profileId : isNonEmptyOAuthId$1(profile.sub) ? profile.sub : void 0;
	return {
		...profileFields,
		...subjectId !== void 0 ? { id: subjectId } : {},
		email: profile?.email,
		emailVerified: profile?.email_verified ?? false,
		image: profile?.picture,
		name: profile?.name
	};
}
function isNonEmptyOAuthId(id) {
	return id !== void 0 && id !== null && id !== "";
}
/**
* A generic OAuth plugin that can be used to add OAuth support to any provider
*/
var genericOAuth = (options) => {
	const seenIds = /* @__PURE__ */ new Set();
	const nonUniqueIds = /* @__PURE__ */ new Set();
	for (const config of options.config) {
		const id = config.providerId;
		if (seenIds.has(id)) nonUniqueIds.add(id);
		seenIds.add(id);
	}
	if (nonUniqueIds.size > 0) console.warn(`Duplicate provider IDs found: ${Array.from(nonUniqueIds).join(", ")}`);
	return {
		id: "generic-oauth",
		version: PACKAGE_VERSION,
		init: (ctx) => {
			return { context: { socialProviders: options.config.map((c) => {
				let finalUserInfoUrl = c.userInfoUrl;
				return {
					id: c.providerId,
					name: c.providerId,
					async createAuthorizationURL(data) {
						let finalAuthUrl = c.authorizationUrl;
						if (!finalAuthUrl && c.discoveryUrl) {
							const discovery = await betterFetch(c.discoveryUrl, {
								method: "GET",
								headers: c.discoveryHeaders
							});
							if (discovery.data) {
								finalAuthUrl = discovery.data.authorization_endpoint;
								finalUserInfoUrl = finalUserInfoUrl ?? discovery.data.userinfo_endpoint;
							}
						}
						if (!finalAuthUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.INVALID_OAUTH_CONFIGURATION);
						return createAuthorizationURL({
							id: c.providerId,
							options: {
								clientId: c.clientId,
								clientSecret: c.clientSecret,
								redirectURI: c.redirectURI
							},
							authorizationEndpoint: finalAuthUrl,
							state: data.state,
							codeVerifier: c.pkce ? data.codeVerifier : void 0,
							scopes: c.scopes || [],
							redirectURI: `${ctx.baseURL}/oauth2/callback/${c.providerId}`
						});
					},
					async validateAuthorizationCode(data) {
						if (c.getToken) return applyDefaultAccessTokenExpiry(await c.getToken(data), c.accessTokenExpiresIn);
						let finalTokenUrl = c.tokenUrl;
						if (c.discoveryUrl) {
							const discovery = await betterFetch(c.discoveryUrl, {
								method: "GET",
								headers: c.discoveryHeaders
							});
							if (discovery.data) {
								finalTokenUrl = discovery.data.token_endpoint;
								finalUserInfoUrl = discovery.data.userinfo_endpoint;
							}
						}
						if (!finalTokenUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.TOKEN_URL_NOT_FOUND);
						return applyDefaultAccessTokenExpiry(await validateAuthorizationCode({
							headers: c.authorizationHeaders,
							code: data.code,
							codeVerifier: data.codeVerifier,
							redirectURI: data.redirectURI,
							options: {
								clientId: c.clientId,
								clientSecret: c.clientSecret,
								redirectURI: c.redirectURI
							},
							tokenEndpoint: finalTokenUrl,
							authentication: c.authentication
						}), c.accessTokenExpiresIn);
					},
					async refreshAccessToken(refreshToken) {
						let finalTokenUrl = c.tokenUrl;
						if (c.discoveryUrl) {
							const discovery = await betterFetch(c.discoveryUrl, {
								method: "GET",
								headers: c.discoveryHeaders
							});
							if (discovery.data) finalTokenUrl = discovery.data.token_endpoint;
						}
						if (!finalTokenUrl) throw APIError.from("BAD_REQUEST", GENERIC_OAUTH_ERROR_CODES.TOKEN_URL_NOT_FOUND);
						return applyDefaultAccessTokenExpiry(await refreshAccessToken({
							refreshToken,
							options: {
								clientId: c.clientId,
								clientSecret: c.clientSecret
							},
							authentication: c.authentication,
							tokenEndpoint: finalTokenUrl
						}), c.accessTokenExpiresIn);
					},
					async getUserInfo(tokens) {
						const userInfo = c.getUserInfo ? await c.getUserInfo(tokens) : await getUserInfo(tokens, finalUserInfoUrl);
						if (!userInfo) return null;
						const userMap = await c.mapProfileToUser?.(userInfo);
						const rawId = isNonEmptyOAuthId(userMap?.id) ? userMap.id : isNonEmptyOAuthId(userInfo.id) ? userInfo.id : isNonEmptyOAuthId(userInfo.sub) ? userInfo.sub : void 0;
						if (rawId === void 0) return null;
						return {
							user: {
								email: userInfo?.email,
								emailVerified: userInfo?.emailVerified,
								image: userInfo?.image,
								name: userInfo?.name,
								...userMap,
								id: String(rawId)
							},
							data: userInfo
						};
					},
					options: { overrideUserInfoOnSignIn: c.overrideUserInfo }
				};
			}).concat(ctx.socialProviders) } };
		},
		endpoints: {
			signInWithOAuth2: signInWithOAuth2(options),
			oAuth2Callback: oAuth2Callback(options),
			oAuth2LinkAccount: oAuth2LinkAccount(options)
		},
		options,
		$ERROR_CODES: GENERIC_OAUTH_ERROR_CODES
	};
};
/**
* Warns when a cookie integration plugin is not effectively last.
*
* A plugin is considered misordered when there is at least one other plugin
* after it in the `plugins` array that declares `hooks.after`, since those
* hooks can set cookies that this integration will not see.
*/
function warnIfCookiePluginNotLast(ctx, pluginId) {
	const plugins = ctx.options.plugins || [];
	if (plugins.length === 0) return;
	const index = plugins.findIndex((p) => p.id === pluginId);
	if (index === -1) return;
	if (!plugins.slice(index + 1).some((p) => p.hooks && Array.isArray(p.hooks.after) && p.hooks.after.length > 0)) return;
	ctx.logger.warn(`[better-auth] Cookie integration plugin "${pluginId}" should be placed last in the plugins array. Plugins with \`hooks.after\` running after it may set cookies that are not forwarded to the framework cookie store. Move your cookie integration plugin to the end of the \`plugins\` array to avoid missing \`Set-Cookie\` headers.`);
}
/**
* TanStack Start cookie plugin for React.
*
* This plugin automatically handles cookie setting for TanStack Start with React.
* It uses `@tanstack/react-start-server` to set cookies.
*
* For Solid.js, use `better-auth/tanstack-start/solid` instead.
*
* @example
* ```ts
* import { tanstackStartCookies } from "better-auth/tanstack-start";
*
* const auth = betterAuth({
*   plugins: [tanstackStartCookies()],
* });
* ```
*/
var tanstackStartCookies = () => {
	let hasWarned = false;
	return {
		id: "tanstack-start-cookies",
		version: PACKAGE_VERSION,
		hooks: { after: [{
			matcher(ctx) {
				return true;
			},
			handler: createAuthMiddleware(async (ctx) => {
				if (!hasWarned) {
					warnIfCookiePluginNotLast(ctx.context, "tanstack-start-cookies");
					hasWarned = true;
				}
				const returned = ctx.context.responseHeaders;
				if ("_flag" in ctx && ctx._flag === "router") return;
				if (returned instanceof Headers) {
					const setCookies = returned?.get("set-cookie");
					if (!setCookies) return;
					const parsed = parseSetCookieHeader(setCookies);
					const { setCookie } = await import("./ssr.mjs").then((n) => n.r).then((n) => n.t);
					parsed.forEach((value, key) => {
						if (!key) return;
						try {
							setCookie(key, value.value, toCookieOptions(value));
						} catch {}
					});
					return;
				}
			})
		}] }
	};
};
var _0001_auth_default = "-- Better Auth schema (identity + sessions for \"Sign in with Grok\").\n--\n-- Generated by the Better Auth CLI for its Postgres adapter — DO NOT EDIT by\n-- hand. `@/lib/auth/server` runs Better Auth against these tables when\n-- DATABASE_URL is set. The columns are camelCase and MUST stay double-quoted so\n-- Postgres preserves the case Better Auth queries by.\n--\n-- Migrations in this folder are the single source of truth for your schema. They\n-- apply to Neon during the Vercel build (`npm run build`) and to the local\n-- PGLite fallback automatically on startup, so dev matches production. Applied\n-- files are recorded by name in `_migrations` and NEVER run again.\n--\n-- Put YOUR app's schema in NEW ordered files (0002_*.sql, 0003_*.sql, …), never\n-- in this one. For app tables, prefer snake_case and give per-user tables a\n-- `user_id TEXT NOT NULL` column (TEXT, not UUID — the preview dev user id is\n-- the string 'dev-user'), then scope every query to the authenticated user\n-- server-side (see the `neon` + `auth` skills and src/lib/auth/verify.server.ts).\n\ncreate table if not exists \"user\" (\n  \"id\" text not null primary key,\n  \"name\" text not null,\n  \"email\" text not null unique,\n  \"emailVerified\" boolean not null,\n  \"image\" text,\n  \"createdAt\" timestamptz default CURRENT_TIMESTAMP not null,\n  \"updatedAt\" timestamptz default CURRENT_TIMESTAMP not null\n);\n\ncreate table if not exists \"session\" (\n  \"id\" text not null primary key,\n  \"expiresAt\" timestamptz not null,\n  \"token\" text not null unique,\n  \"createdAt\" timestamptz default CURRENT_TIMESTAMP not null,\n  \"updatedAt\" timestamptz not null,\n  \"ipAddress\" text,\n  \"userAgent\" text,\n  \"userId\" text not null references \"user\" (\"id\") on delete cascade\n);\n\ncreate table if not exists \"account\" (\n  \"id\" text not null primary key,\n  \"accountId\" text not null,\n  \"providerId\" text not null,\n  \"userId\" text not null references \"user\" (\"id\") on delete cascade,\n  \"accessToken\" text,\n  \"refreshToken\" text,\n  \"idToken\" text,\n  \"accessTokenExpiresAt\" timestamptz,\n  \"refreshTokenExpiresAt\" timestamptz,\n  \"scope\" text,\n  \"password\" text,\n  \"createdAt\" timestamptz default CURRENT_TIMESTAMP not null,\n  \"updatedAt\" timestamptz not null\n);\n\ncreate table if not exists \"verification\" (\n  \"id\" text not null primary key,\n  \"identifier\" text not null,\n  \"value\" text not null,\n  \"expiresAt\" timestamptz not null,\n  \"createdAt\" timestamptz default CURRENT_TIMESTAMP not null,\n  \"updatedAt\" timestamptz default CURRENT_TIMESTAMP not null\n);\n\ncreate index if not exists \"session_userId_idx\" on \"session\" (\"userId\");\ncreate index if not exists \"account_userId_idx\" on \"account\" (\"userId\");\ncreate index if not exists \"verification_identifier_idx\" on \"verification\" (\"identifier\");\n";
/**
* Migration bookkeeping shared by the two appliers — `scripts/migrate.mjs`
* (deploy, `readdir`) and `src/lib/db.ts` (PGLite preview, `import.meta.glob`).
*
* Applied files are keyed by BASENAME, so the same file applies once no matter
* which directory it is globbed from. That is what makes the auth schema safe to
* copy from `migrations/auth/` into `migrations/` when an app turns sign-in on:
* a database that already has `0001_auth.sql` will not re-run it.
*
* Neither applier descends into subdirectories, so `migrations/auth/*.sql` is
* out of scope for both until it is copied up.
*/
/**
* The `_migrations` key for a migration path (or bare filename).
* @param {string} path
* @returns {string}
*/
function migrationName(path) {
	return path.split("/").pop() ?? path;
}
/**
* @param {string} path
* @returns {boolean}
*/
function isMigrationFile(path) {
	return path.endsWith(".sql");
}
/**
* Migrations in `paths` that are not yet in `applied`, in apply order.
* Non-`.sql` entries (a `readdir` also yields `migrations/auth/`) are dropped.
* @param {Iterable<string>} paths
* @param {Iterable<string>} applied
* @returns {Array<{ name: string, path: string }>}
*/
function pendingMigrations(paths, applied) {
	const done = new Set(applied);
	return [...paths].filter(isMigrationFile).map((path) => ({
		name: migrationName(path),
		path
	})).sort((a, b) => a.name.localeCompare(b.name)).filter(({ name }) => !done.has(name));
}
var rawDatabaseUrl = typeof process !== "undefined" ? process.env.DATABASE_URL : void 0;
var databaseUrl$1 = rawDatabaseUrl && rawDatabaseUrl.trim() ? rawDatabaseUrl : void 0;
/**
* Active backend: real **Neon** when `DATABASE_URL` is set (deployed / configured
* sandbox), otherwise a local embedded **PGLite** (Postgres compiled to WASM) so
* the app has a working database even with nothing configured — the live preview
* included. Swap in Neon later by just setting `DATABASE_URL`; no code changes.
*/
var dbSource = databaseUrl$1 ? "neon" : "pglite";
/**
* Init state lives on globalThis as promises: dev HMR creates new instances of
* this module, and two instances racing module-level state would open a second
* pool or run two concurrent PGLite migration passes (whose duplicate
* `_migrations` insert rejects — and would get memoized, poisoning every later
* `getSql()`). A failed init clears its slot so the next call retries.
*/
var globalRef = globalThis;
/**
* Result-type parity: Postgres sends every value as text plus a type OID — the
* JS value is the DRIVER's parsing choice, and pg and PGLite disagree (pg:
* int8 -> string, date -> local-midnight Date; PGLite: int8 -> BigInt, which
* JSON.stringify rejects, date -> UTC Date). Normalize both so preview and
* production return identical, JSON-safe shapes:
*   int8/bigint (incl. count(*)) -> number (past 2^53 loses precision — cast
*                                   `::text` if you ever need huge integers)
*   date                         -> 'YYYY-MM-DD' string
*   interval                     -> Postgres interval text
* numeric already comes back as a string on both (arbitrary precision).
*/
var OID_INT8 = 20;
var OID_DATE = 1082;
var OID_INTERVAL = 1186;
var identity = (v) => v;
/** Wrap a query runner in the tagged-template + `.query()` `Sql` surface. */
function toSql(run) {
	const sql = (async (strings, ...values) => {
		let text = strings[0];
		for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1]}`;
		return run(text, values);
	});
	sql.query = (text, params = []) => run(text, params);
	return sql;
}
function createNeonSql() {
	globalRef.__pgSqlPromise__ ??= (async () => {
		const { Pool, types } = await import("../_libs/pg.mjs").then((n) => n.n);
		types.setTypeParser(OID_INT8, Number);
		types.setTypeParser(OID_DATE, identity);
		types.setTypeParser(OID_INTERVAL, identity);
		const pool = new Pool({ connectionString: databaseUrl$1 });
		return toSql(async (text, params) => {
			return (await pool.query(text, params)).rows;
		});
	})().catch((err) => {
		globalRef.__pgSqlPromise__ = void 0;
		throw err;
	});
	return globalRef.__pgSqlPromise__;
}
async function createPgliteSql() {
	globalRef.__pgliteInstance__ ??= (async () => {
		const { PGlite } = await import("../_libs/electric-sql__pglite.mjs").then((n) => n.t);
		const pg = new PGlite({ parsers: {
			[OID_INT8]: Number,
			[OID_DATE]: identity,
			[OID_INTERVAL]: identity
		} });
		await pg.waitReady;
		await pg.exec("create table if not exists _migrations (name text primary key, applied_at timestamptz not null default now())");
		return pg;
	})().catch((err) => {
		globalRef.__pgliteInstance__ = void 0;
		throw err;
	});
	const pg = await globalRef.__pgliteInstance__;
	const migrate = async () => {
		const migrations = /* #__PURE__ */ Object.assign({ "/migrations/0001_auth.sql": _0001_auth_default });
		const done = (await pg.query("select name from _migrations")).rows.map((r) => r.name);
		for (const { name, path } of pendingMigrations(Object.keys(migrations), done)) await pg.transaction(async (tx) => {
			await tx.exec(migrations[path]);
			await tx.query("insert into _migrations (name) values ($1)", [name]);
		});
	};
	const pass = (globalRef.__pgliteMigrateChain__ ?? Promise.resolve()).catch(() => void 0).then(migrate);
	globalRef.__pgliteMigrateChain__ = pass;
	await pass;
	return toSql(async (text, params) => {
		return (await pg.query(text, params)).rows;
	});
}
var sqlPromise = null;
async function createSql() {
	if (typeof window !== "undefined") throw new Error("@/lib/db is server-only — call getSql() from a createServerFn handler or a server route loader, never from client code.");
	return dbSource === "neon" ? createNeonSql() : createPgliteSql();
}
/**
* Get the shared, **server-only** SQL client. Neon when `DATABASE_URL` is set,
* otherwise the local PGLite fallback. Memoized — safe to call per request.
*
* Schema comes from `migrations/*.sql`, auto-applied before the first query on
* both backends — define tables there, never inline in server functions.
*/
function getSql() {
	sqlPromise ??= createSql().catch((err) => {
		sqlPromise = null;
		throw err;
	});
	return sqlPromise;
}
/**
* The shared PGLite instance (preview only), with `migrations/*.sql` applied.
* Lets Better Auth persist to the SAME embedded DB as app data in preview (via a
* Kysely dialect). Throws when `DATABASE_URL` is set (that path uses Neon).
*/
async function getPglite() {
	if (dbSource !== "pglite") throw new Error("getPglite() is only available on the PGLite fallback (no DATABASE_URL)");
	await getSql();
	const pg = await globalRef.__pgliteInstance__;
	if (!pg) throw new Error("PGLite instance failed to initialize");
	return pg;
}
/**
* Finish DB bootstrap before the server handles traffic.
*
* - **PGLite** (preview / no `DATABASE_URL`): open the in-memory DB and apply
*   `migrations/*.sql`. Idempotent — concurrent callers share one promise.
* - **Neon**: no-op (pool is created lazily on first query).
*
* Vite `configureServer` awaits this at dev startup; production imports of this
* module kick it off immediately (see bottom of file).
*/
function ensureDbReady() {
	if (dbSource !== "pglite") return Promise.resolve();
	return getSql().then(() => void 0);
}
var globalBoot = globalThis;
if (typeof window === "undefined" && dbSource === "pglite") globalBoot.__pgBootstrapPromise__ ??= ensureDbReady().catch((err) => {
	globalBoot.__pgBootstrapPromise__ = void 0;
	console.error("[db] PGLite bootstrap failed:", err);
	throw err;
});
function env$2(key) {
	return process.env[key]?.trim() || void 0;
}
/**
* Workspace preview vs deployed app. The deployer writes GROK_PROJECT_ID on
* every publish; the sandbox preview never has it. Single source of truth for
* the split — gate audience, gate endpoints and connector-token semantics all
* key off this predicate.
*/
function isWorkspacePreview() {
	return !env$2("GROK_PROJECT_ID");
}
var GATE_IDENTITY_HEADER = "x-grok-identity";
var GATE_JWKS_PATH = "/__gate/identity-key";
var JWKS_CACHE_TTL_MS = 3e5;
var PREVIEW_AUDIENCE = "preview";
var PREVIEW_GATE_ORIGIN = "http://127.0.0.1:6014";
var FALLBACK_EMAIL_DOMAIN = "viewer.grok.invalid";
var FALLBACK_NAME = "Grok user";
function gateIdentityEnabled() {
	return env$2("VITE_AUTH_ENABLED") !== "false";
}
function gateTokenAudience() {
	if (isWorkspacePreview()) return PREVIEW_AUDIENCE;
	return `app:${env$2("GROK_PROJECT_ID")}`;
}
async function defaultJwksFetch(url) {
	try {
		const res = await fetch(url, {
			headers: { accept: "application/json" },
			redirect: "manual"
		});
		if (!res.ok) return null;
		const body = await res.json();
		return Array.isArray(body?.keys) ? body : null;
	} catch {
		return null;
	}
}
var jwksCache = /* @__PURE__ */ new Map();
function gateKeyResolver(url, jwksFetch = defaultJwksFetch) {
	return async (protectedHeader) => {
		const kid = typeof protectedHeader.kid === "string" ? protectedHeader.kid : void 0;
		const findKey = (jwks) => jwks.keys.find((k) => k.kty === "OKP" && k.crv === "Ed25519" && (!kid || k.kid === kid));
		let entry = jwksCache.get(url);
		if (!entry || Date.now() - entry.fetchedAt > JWKS_CACHE_TTL_MS) {
			const jwks = await jwksFetch(url);
			if (jwks) {
				entry = {
					jwks,
					fetchedAt: Date.now()
				};
				jwksCache.set(url, entry);
			}
		}
		let key = entry ? findKey(entry.jwks) : void 0;
		if (!key) {
			const jwks = await jwksFetch(url);
			if (jwks) {
				entry = {
					jwks,
					fetchedAt: Date.now()
				};
				jwksCache.set(url, entry);
				key = findKey(jwks);
			}
		}
		if (!key) throw new Error("no gate identity key matches the token kid");
		return importJWK(key, "EdDSA");
	};
}
async function verifyGateIdentityToken(token, options) {
	try {
		const { payload } = await jwtVerify(token, options.getKey, {
			algorithms: ["EdDSA"],
			issuer: options.issuer,
			audience: options.audience,
			requiredClaims: [
				"sub",
				"iat",
				"exp"
			],
			maxTokenAge: "10 minutes"
		});
		const sub = typeof payload.sub === "string" ? payload.sub.trim() : "";
		if (!sub) return null;
		return {
			sub,
			email: typeof payload.email === "string" ? payload.email : null,
			name: typeof payload.name === "string" ? payload.name : null,
			teamId: typeof payload.team_id === "string" ? payload.team_id : null
		};
	} catch {
		return null;
	}
}
function resolveGateEndpoints(headers) {
	const explicit = env$2("GROK_GATE_ORIGIN");
	if (explicit) {
		const origin = explicit.replace(/\/+$/, "");
		return {
			issuer: origin,
			jwksUrl: `${origin}${GATE_JWKS_PATH}`
		};
	}
	if (isWorkspacePreview()) return {
		issuer: PREVIEW_GATE_ORIGIN,
		jwksUrl: `${PREVIEW_GATE_ORIGIN}${GATE_JWKS_PATH}`
	};
	const host = (headers.get("x-forwarded-host")?.split(",")[0]?.trim() || headers.get("host") || "").split(":")[0]?.trim().toLowerCase();
	if (!host) return null;
	let issuer = null;
	if (host === "app-builder-testing.com" || host.endsWith(".app-builder-testing.com")) issuer = "https://gate.app-builder-testing.com";
	else if (host === "grok.me" || host.endsWith(".grok.me")) issuer = "https://gate.grok.me";
	if (!issuer) return null;
	return {
		issuer,
		jwksUrl: `${issuer}${GATE_JWKS_PATH}`
	};
}
function sessionBoundToGateIdentity(accounts, identitySub, gateProviderId) {
	return accounts.some((account) => account.providerId === gateProviderId && account.accountId === identitySub);
}
async function gateIdentityFromHeaders(headers, jwksFetch) {
	if (!gateIdentityEnabled()) return null;
	const token = headers.get(GATE_IDENTITY_HEADER)?.trim();
	if (!token) return null;
	const endpoints = resolveGateEndpoints(headers);
	if (!endpoints) return null;
	return verifyGateIdentityToken(token, {
		issuer: endpoints.issuer,
		audience: gateTokenAudience(),
		getKey: gateKeyResolver(endpoints.jwksUrl, jwksFetch)
	});
}
function gateIdentityUserInfo(identity) {
	return {
		id: identity.sub,
		email: (identity.email ?? `${identity.sub}@${FALLBACK_EMAIL_DOMAIN}`).toLowerCase(),
		emailVerified: Boolean(identity.email),
		name: identity.name ?? FALLBACK_NAME
	};
}
var GATE_PROVIDER_ID = "grok-gate";
var GATE_ACCOUNT_ISSUER = "https://grok.com";
var LOG = "[gate-identity]";
/**
* Emit the signed session cookie so the browser actually receives it.
*
* `setSessionCookie` writes into the Better Auth middleware header bag, but on
* TanStack Start that bag is not always copied onto the final HTTP response
* (the response can end up with no `Set-Cookie`). Sign the token ourselves and
* push it through TanStack's `setCookie` + `responseHeaders` so both the
* framework cookie store and any after-hooks see it.
*/
async function emitSessionCookie(ctx, sessionTokenName, sessionToken) {
	const attributes = ctx.context.authCookies.sessionToken.attributes;
	const maxAge = ctx.context.sessionConfig.expiresIn;
	const cookieOptions = {
		...attributes,
		maxAge
	};
	let signedCookie;
	try {
		signedCookie = await ctx.setSignedCookie(sessionTokenName, sessionToken, ctx.context.secret, cookieOptions);
	} catch (err) {
		console.error(`${LOG} setSignedCookie failed`, err);
		return null;
	}
	const sessionValue = parseSetCookieHeader(signedCookie).get(sessionTokenName)?.value;
	if (!sessionValue) {
		console.error(`${LOG} signed Set-Cookie missing session token value`, { cookiePreview: signedCookie.slice(0, 120) });
		return null;
	}
	try {
		const { setCookie } = await import("./ssr.mjs").then((n) => n.r).then((n) => n.t);
		setCookie(sessionTokenName, sessionValue, {
			path: cookieOptions.path ?? "/",
			httpOnly: cookieOptions.httpOnly ?? true,
			secure: cookieOptions.secure ?? true,
			sameSite: cookieOptions.sameSite ?? "lax",
			maxAge: typeof maxAge === "number" ? maxAge : void 0,
			domain: cookieOptions.domain
		});
	} catch (err) {
		console.error(`${LOG} TanStack setCookie failed`, err);
	}
	try {
		const responseHeaders = ctx.context.responseHeaders;
		if (responseHeaders) responseHeaders.append("set-cookie", signedCookie);
		else console.error(`${LOG} ctx.context.responseHeaders is missing`);
	} catch (err) {
		console.error(`${LOG} responseHeaders.append(set-cookie) failed`, err);
	}
	return sessionValue;
}
/**
* Expire the previous user's `session_data` cookie cache after an identity
* swap. The cache is signed against the old session and outlives it (5-min
* TTL), so without this `/get-session` keeps serving the replaced user.
* Mirrors `emitSessionCookie`'s dual-path delivery: TanStack's response
* cookie store plus Better Auth's `responseHeaders` bag.
*/
async function expireSessionDataCookie(ctx, cookie) {
	const path = cookie.attributes.path ?? "/";
	const secure = cookie.attributes.secure ?? true;
	try {
		const { setCookie } = await import("./ssr.mjs").then((n) => n.r).then((n) => n.t);
		setCookie(cookie.name, "", {
			path,
			httpOnly: true,
			secure,
			sameSite: "lax",
			maxAge: 0
		});
	} catch (err) {
		console.error(`${LOG} TanStack setCookie (expire session_data) failed`, err);
	}
	try {
		ctx.context.responseHeaders?.append("set-cookie", `${cookie.name}=; Path=${path}; HttpOnly; ${secure ? "Secure; " : ""}SameSite=Lax; Max-Age=0`);
	} catch (err) {
		console.error(`${LOG} responseHeaders.append (expire session_data) failed`, err);
	}
}
/**
* Write or clear the client-readable gate-session marker
* (`gate-session-marker.ts`), through the same dual-path delivery as
* `emitSessionCookie`. Not HttpOnly by design: `UserButton` reads it to hide
* sign-out for gate sessions (signing out would re-materialize instantly).
*/
async function writeGateMarkerCookie(ctx, clear) {
	const sessionMaxAge = ctx.context.sessionConfig.expiresIn;
	const maxAge = clear ? 0 : typeof sessionMaxAge === "number" ? sessionMaxAge : void 0;
	const value = clear ? "" : "1";
	try {
		const { setCookie } = await import("./ssr.mjs").then((n) => n.r).then((n) => n.t);
		setCookie(GATE_SESSION_MARKER_COOKIE, value, {
			path: "/",
			httpOnly: false,
			secure: true,
			sameSite: "lax",
			maxAge
		});
	} catch (err) {
		console.error(`${LOG} TanStack setCookie (gate marker) failed`, err);
	}
	try {
		ctx.context.responseHeaders?.append("set-cookie", `${GATE_SESSION_MARKER_COOKIE}=${value}; Path=/; Secure; SameSite=Lax` + (maxAge === void 0 ? "" : `; Max-Age=${maxAge}`));
	} catch (err) {
		console.error(`${LOG} responseHeaders.append (gate marker) failed`, err);
	}
}
/**
* Clear a stale marker when a `/get-session` arrives without `x-grok-identity`:
* the browser is no longer behind a gate viewer (returned anonymously, or the
* session is a broker one), so sign-out must not stay hidden. Emits the
* Max-Age=0 clear only when the marker is actually on the request.
*/
async function clearGateMarkerIfPresent(ctx, inbound) {
	if (!(inbound.get("cookie") ?? "").includes(`__Host-grok_gate_session=`)) return;
	await writeGateMarkerCookie(ctx, true);
}
/** Drop a cookie from the request `Cookie` header (inverse of `setRequestCookie`). */
function removeRequestCookie(headers, name) {
	const cookieHeader = headers.get("cookie");
	if (!cookieHeader) return;
	const kept = cookieHeader.split(";").map((pair) => pair.trim()).filter((pair) => pair && !pair.startsWith(`${name}=`));
	if (kept.length > 0) headers.set("cookie", kept.join("; "));
	else headers.delete("cookie");
}
function gateIdentitySessions() {
	return {
		id: "grok-gate-identity",
		hooks: { before: [{
			matcher: (ctx) => ctx.path === "/get-session",
			handler: createAuthMiddleware(async (ctx) => {
				if (!gateIdentityEnabled()) return;
				const inbound = ctx.request?.headers ?? ctx.headers;
				if (!inbound) {
					console.error(`${LOG} no request headers on /get-session`);
					return;
				}
				if (inbound.get("authorization")) return;
				if (!inbound.get("x-grok-identity")) {
					await clearGateMarkerIfPresent(ctx, inbound);
					return;
				}
				const identity = await gateIdentityFromHeaders(inbound);
				if (!identity) {
					console.error(`${LOG} ${GATE_IDENTITY_HEADER} present but verification failed`);
					return;
				}
				const sessionCookieName = ctx.context.authCookies.sessionToken.name;
				if ((inbound.get("cookie") ?? "").includes(`${sessionCookieName}=`)) {
					const existing = await getSessionFromCtx(ctx).catch((err) => {
						console.error(`${LOG} getSessionFromCtx failed`, err);
						return null;
					});
					if (existing?.session && existing.user) {
						const accounts = await ctx.context.internalAdapter.findAccounts(existing.user.id).catch((err) => {
							console.error(`${LOG} findAccounts failed`, err);
							return null;
						});
						if (!accounts) {
							console.error(`${LOG} could not load accounts for existing session user`, { userId: existing.user.id });
							return;
						}
						if (sessionBoundToGateIdentity(accounts, identity.sub, "grok-gate")) {
							await writeGateMarkerCookie(ctx, false);
							return;
						}
						await ctx.context.internalAdapter.deleteSession(existing.session.token).catch((err) => {
							console.error(`${LOG} deleteSession (stale non-gate session) failed`, err);
							return null;
						});
					}
				}
				try {
					const result = await handleOAuthUserInfo(ctx, {
						userInfo: gateIdentityUserInfo(identity),
						account: {
							providerId: GATE_PROVIDER_ID,
							issuer: GATE_ACCOUNT_ISSUER,
							accountId: identity.sub
						}
					});
					if (result.error || !result.data) {
						console.error(`${LOG} handleOAuthUserInfo failed`, {
							error: result.error,
							hasData: Boolean(result.data),
							sub: identity.sub
						});
						return;
					}
					await setSessionCookie(ctx, result.data);
					const sessionValue = await emitSessionCookie(ctx, sessionCookieName, result.data.session.token);
					if (!sessionValue) {
						console.error(`${LOG} session created in DB but cookie was not emitted`, { userId: result.data.user.id });
						return;
					}
					await writeGateMarkerCookie(ctx, false);
					const sessionDataCookie = ctx.context.authCookies.sessionData;
					await expireSessionDataCookie(ctx, sessionDataCookie);
					const headers = new Headers(Object.fromEntries(inbound.entries()));
					setRequestCookie(headers, sessionCookieName, sessionValue);
					removeRequestCookie(headers, sessionDataCookie.name);
					return { context: { headers } };
				} catch (err) {
					console.error(`${LOG} gate identity session hook threw`, err);
					return;
				}
			})
		}] }
	};
}
/** Factory used by `auth/server.ts`: `pgliteDialect(() => getPglite())`. */
function pgliteDialect(getClient) {
	return {
		createAdapter: () => new PostgresAdapter(),
		createDriver: () => new LazyPGliteDriver(getClient),
		createQueryCompiler: () => new PostgresQueryCompiler(),
		createIntrospector: (db) => new PostgresIntrospector(db)
	};
}
var LazyPGliteDriver = class {
	getClient;
	client;
	connection;
	queue = [];
	constructor(getClient) {
		this.getClient = getClient;
	}
	async init() {
		this.client = await this.getClient();
	}
	async acquireConnection() {
		if (this.client === void 0) this.client = await this.getClient();
		if (this.connection !== void 0) return new Promise((resolve) => {
			this.queue.push(resolve);
		});
		this.connection = new PGliteConnection(this.client);
		return this.connection;
	}
	async releaseConnection(connection) {
		if (connection !== this.connection) throw new Error("Invalid connection");
		const next = this.queue.shift();
		if (next === void 0) {
			this.connection = void 0;
			return;
		}
		next(this.connection);
	}
	async beginTransaction(conn, settings) {
		const c = conn;
		if (settings.isolationLevel) await c.executeQuery(CompiledQuery.raw(`start transaction isolation level ${settings.isolationLevel}`));
		else await c.executeQuery(CompiledQuery.raw("begin"));
	}
	async commitTransaction(conn) {
		await conn.executeQuery(CompiledQuery.raw("commit"));
	}
	async rollbackTransaction(conn) {
		await conn.executeQuery(CompiledQuery.raw("rollback"));
	}
	async destroy() {
		this.client = void 0;
		this.connection = void 0;
		this.queue = [];
	}
};
var PGliteConnection = class {
	client;
	constructor(client) {
		this.client = client;
	}
	async executeQuery(compiledQuery) {
		const result = await this.client.query(compiledQuery.sql, [...compiledQuery.parameters]);
		if (result.affectedRows) return {
			numAffectedRows: BigInt(result.affectedRows),
			rows: result.rows
		};
		return { rows: result.rows };
	}
	async *streamQuery(compiledQuery, chunkSize) {
		if (!Number.isInteger(chunkSize) || chunkSize <= 0) throw new Error("chunkSize must be a positive integer");
		const result = await this.client.query(compiledQuery.sql, [...compiledQuery.parameters]);
		for (let i = 0; i < result.rows.length; i += chunkSize) yield { rows: result.rows.slice(i, i + chunkSize) };
	}
};
/**
* Host patterns whose callbacks the preview client accepts. Better Auth derives
* the live preview's real origin from the request host and validates it against
* this list (wildcard-matched), so the OAuth `redirect_uri` becomes the concrete
* `https://<preview-host>/api/auth/oauth2/callback/...` the broker allows.
*/
var PREVIEW_ALLOWED_HOSTS = ["*.grok-sandbox.com"];
/**
* Self-hosted Better Auth for THIS app (server-only).
*
* Pre-wired for live preview + deploy — do not rewrite this file. To enable
* local email/password, flip the flag in `./email-password` only (see auth skill).
*
* The app runs its own Better Auth at `/api/auth/*`, so the session cookie stays
* on this app's own origin. Sign-in federates to the shared **Grok auth broker**
* (`GROK_AUTH_ISSUER`) via the `genericOAuth` plugin — the broker brokers the
* upstream sign-in methods (Google, X, …) and holds their shared secrets; this
* app only holds its own client id/secret and names the upstream it wants via
* each provider's `idp` hint.
*
* Tri-mode:
*   - Deployed: the deployer injects a per-app `GROK_AUTH_*` + `BETTER_AUTH_URL`
*     + `DATABASE_URL`, so real federated auth is persisted in Postgres.
*   - Sandbox live preview: no injection -> falls back to the shared **preview
*     client** (`./preview`) and derives the preview's `https://*.grok-sandbox.com`
*     origin from the request, so real sign-in works (no demo users). Sessions
*     and identities persist in the embedded PGLite DB (same DB as app data);
*     the process restart wipes both. Live-preview iframe clients use a bearer
*     token (partitioned cookies) — see `client.ts`.
*   - Off (`VITE_AUTH_ENABLED=false`, the shipped default): no providers;
*     `requireUserId` resolves a dev user with no database configured, and
*     throws fail-closed once `DATABASE_URL` is set (see `verify.server.ts`).
*
* NEVER import this from client code — it pulls in `pg` + the preview secret +
* server-only Better Auth internals. The client uses `@/lib/auth/client`;
* components read the user via `@/lib/auth/use-current-user`; server functions get
* a verified id via `@/lib/auth/middleware`.
*/
ensureDbReady();
/**
* Preview secret must outlive module reloads: PGLite (and its session rows) is
* stored on `globalThis`, so an HMR re-eval of this file must NOT mint a new
* signing secret or every existing session becomes invalid mid-dev. Process
* restart clears both the secret and PGLite together.
*/
var globalAuthRef = globalThis;
function previewAuthSecret() {
	globalAuthRef.__grokAuthPreviewSecret__ ??= randomBytes(32).toString("hex");
	return globalAuthRef.__grokAuthPreviewSecret__;
}
/** Read an env var, treating empty/whitespace as unset. */
var env$1 = (key) => {
	const value = process.env[key]?.trim();
	return value ? value : void 0;
};
var authDisabled = env$1("VITE_AUTH_ENABLED") === "false";
var grokIssuer = env$1("GROK_AUTH_ISSUER") ?? "https://auth.grok.me";
var grokClientId = env$1("GROK_AUTH_CLIENT_ID") ?? "grok_preview";
var grokClientSecret = env$1("GROK_AUTH_CLIENT_SECRET") ?? "8bcdb7fc5a33874ad933ca568918d5790388a0795e44c4d1dea691f801b17ec5";
/** True when federated sign-in is active (real auth is enforced). */
var authConfigured = !authDisabled && Boolean(grokClientId && grokClientSecret);
var explicitBaseURL = env$1("BETTER_AUTH_URL");
var previewAllowedHosts = [...PREVIEW_ALLOWED_HOSTS];
var LOCAL_DEV_ORIGINS = [
	"http://localhost:8080",
	"http://127.0.0.1:8080",
	"http://[::1]:8080"
];
var baseURL = explicitBaseURL ?? {
	allowedHosts: [
		...previewAllowedHosts,
		"localhost",
		"127.0.0.1",
		"[::1]"
	],
	protocol: "auto",
	fallback: "http://localhost:8080"
};
var trustedOrigins = explicitBaseURL ? [explicitBaseURL, ...LOCAL_DEV_ORIGINS] : [
	...previewAllowedHosts,
	...previewAllowedHosts.flatMap((host) => [`https://${host}`, `http://${host}`]),
	...LOCAL_DEV_ORIGINS
];
var databaseUrl = env$1("DATABASE_URL");
var issuerBase = grokIssuer.replace(/\/+$/, "");
var grokAuthorizationUrl = `${issuerBase}/api/auth/oauth2/authorize`;
var grokTokenUrl = `${issuerBase}/api/auth/oauth2/token`;
var grokUserInfoUrl = `${issuerBase}/api/auth/oauth2/userinfo`;
var database = databaseUrl ? new Pool({ connectionString: databaseUrl }) : {
	dialect: pgliteDialect(() => getPglite()),
	type: "postgres"
};
/** Session token cookie name — also read by the live-preview popup completion page. */
var SESSION_TOKEN_COOKIE = "__Host-grok-auth.session_token";
var grokOAuthPlugin = authConfigured ? genericOAuth({ config: GROK_PROVIDERS.map(({ providerId, idp }) => ({
	providerId,
	clientId: grokClientId,
	clientSecret: grokClientSecret,
	authorizationUrl: grokAuthorizationUrl,
	tokenUrl: grokTokenUrl,
	userInfoUrl: grokUserInfoUrl,
	scopes: [
		"openid",
		"profile",
		"email"
	],
	authorizationUrlParams: {
		idp,
		prompt: "login"
	}
})) }) : null;
var auth = betterAuth({
	baseURL,
	secret: env$1("BETTER_AUTH_SECRET") ?? previewAuthSecret(),
	database,
	trustedOrigins,
	account: {
		encryptOAuthTokens: true,
		accountLinking: {
			enabled: true,
			trustedProviders: [...GROK_PROVIDERS.map((p) => p.providerId), GATE_PROVIDER_ID],
			requireLocalEmailVerified: false
		}
	},
	session: { cookieCache: {
		enabled: true,
		maxAge: 300
	} },
	emailAndPassword: { enabled: true },
	advanced: {
		useSecureCookies: false,
		defaultCookieAttributes: {
			secure: true,
			sameSite: "lax",
			path: "/"
		},
		cookies: {
			session_token: { name: SESSION_TOKEN_COOKIE },
			session_data: { name: "__Host-grok-auth.session_data" },
			account_data: { name: "__Host-grok-auth.account_data" },
			dont_remember: { name: "__Host-grok-auth.dont_remember" }
		}
	},
	plugins: [
		gateIdentitySessions(),
		...grokOAuthPlugin ? [grokOAuthPlugin] : [],
		bearer(),
		tanstackStartCookies()
	]
});
var Route = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: ({ request }) => auth.handler(request),
	POST: ({ request }) => auth.handler(request)
} } });
var IndexRoute = Route$24.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$25
});
var AboutRoute = Route$23.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$25
});
var AdminRoute = Route$22.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$25
});
var ContactRoute = Route$21.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$25
});
var DeskRoute = Route$20.update({
	id: "/desk",
	path: "/desk",
	getParentRoute: () => Route$25
});
var ExpressRoute = Route$19.update({
	id: "/express",
	path: "/express",
	getParentRoute: () => Route$25
});
var FaqRoute = Route$18.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$25
});
var GuideRoute = Route$17.update({
	id: "/guide",
	path: "/guide",
	getParentRoute: () => Route$25
});
var IdentityRoute = Route$16.update({
	id: "/identity",
	path: "/identity",
	getParentRoute: () => Route$25
});
var JournalRoute = Route$15.update({
	id: "/journal",
	path: "/journal",
	getParentRoute: () => Route$25
});
var LegalRoute = Route$14.update({
	id: "/legal",
	path: "/legal",
	getParentRoute: () => Route$25
});
var LoginRoute = Route$13.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$25
});
var OrdersRoute = Route$12.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => Route$25
});
var PassesRoute = Route$11.update({
	id: "/passes",
	path: "/passes",
	getParentRoute: () => Route$25
});
var PaymentsRoute = Route$10.update({
	id: "/payments",
	path: "/payments",
	getParentRoute: () => Route$25
});
var PostRoute = Route$9.update({
	id: "/post",
	path: "/post",
	getParentRoute: () => Route$25
});
var PricingRoute = Route$8.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$25
});
var ProductRoute = Route$7.update({
	id: "/product",
	path: "/product",
	getParentRoute: () => Route$25
});
var ProfileRoute = Route$6.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => Route$25
});
var SecurityRoute = Route$5.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => Route$25
});
var ServicesRoute = Route$4.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$25
});
var WalletRoute = Route$3.update({
	id: "/wallet",
	path: "/wallet",
	getParentRoute: () => Route$25
});
var JournalSlugRoute = Route$2.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => JournalRoute
});
var OrderOrderIdRoute = Route$1.update({
	id: "/order/$orderId",
	path: "/order/$orderId",
	getParentRoute: () => Route$25
});
var ApiAuthSplatRoute = Route.update({
	id: "/api/auth/$",
	path: "/api/auth/$",
	getParentRoute: () => Route$25
});
var JournalRouteChildren = { JournalSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute,
	ContactRoute,
	DeskRoute,
	ExpressRoute,
	FaqRoute,
	GuideRoute,
	IdentityRoute,
	JournalRoute: JournalRoute._addFileChildren(JournalRouteChildren),
	LegalRoute,
	LoginRoute,
	OrdersRoute,
	PassesRoute,
	PaymentsRoute,
	PostRoute,
	PricingRoute,
	ProductRoute,
	ProfileRoute,
	SecurityRoute,
	ServicesRoute,
	WalletRoute,
	OrderOrderIdRoute,
	ApiAuthSplatRoute
};
var routeTree = Route$25._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { adPrice as A, useI18n as B, Field as C, Panel as D, Page as E, merchantLive as F, personName as I, roleOf as L, coinLabel as M, computeFees as N, RAILS as O, fieldClass as P, sortCoins as R, FIATS as S, NETWORKS as T, signIn as _, fiatSign as a, COUNTRIES as b, useEnter as c, passwordIssues as d, passwordReady as f, authClient as g, useCurrentUserState as h, fiatAmt as i, cn as j, TAX_KINDS as k, mailHint as l, useSite as m, Route$1 as n, num as o, phoneIssues as p, Route$2 as r, numFlex as s, router_exports as t, mailIssues as u, GROK_PROVIDERS as v, Modal as w, Empty as x, Button as y, useDesk as z };
