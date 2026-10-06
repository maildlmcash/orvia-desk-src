/** Slice #2 strings (funnel, express, appeals, timers, maker-checker). Paper only. hi/ur override en labels. */
type Tree = { [key: string]: string | Tree };

function merge(base: Tree, over: Tree): Tree {
  const out: Tree = { ...base };
  for (const [key, value] of Object.entries(over)) {
    const prev = out[key];
    out[key] = typeof value === "object" && typeof prev === "object" ? merge(prev, value) : value;
  }
  return out;
}

const en: Tree = {
  market: {
    funnel: {
      title: "Advanced filters",
      active: "{n} active",
      reset: "Reset",
      minCompletion: "Min completion",
      minTrades: "Min orders",
      maxPayMin: "Max pay window",
      priceMode: "Price type",
      fixed: "Fixed",
      float: "Floating",
      minAvailable: "Min available (coin)",
      noExtraId: "No extra ID",
      eligibleOnly: "I meet min completion",
      note: "Paper funnel · uses only real ad/advertiser fields (no invented metrics)",
    },
    express: {
      intro: "Express · paper shell — routes you to the best live paper ad for your amount",
      iPay: "I want to pay",
      iReceive: "I will receive",
      iSell: "I want to sell",
      bestPrice: "Best paper price",
      estReceive: "Est. receive",
      estSell: "Est. sell",
      fee: "Desk fee (settings)",
      matches: "Matching ads",
      none: "No paper ad matches this amount yet",
      missing: "MISSING · Express liquidity engine / guaranteed quote — paper book only, LIVE_MONEY=false",
    },
  },
  admin: {
    tab: { appeals: "Appeals", makerChecker: "Maker-checker" },
    appeal: {
      intro: "Disputed paper orders. Resolve with force release / cancel (paper escrow). Note is required.",
      view: { disputed: "Disputed", timers: "Order timers" },
      empty: "No disputed orders",
      reason: { not_released: "Not released", wrong_name: "Wrong name", no_reply: "No reply", amount: "Amount mismatch" },
      chat: "Order chat",
      system: "System",
      notes: "Admin notes",
      noNotes: "No notes yet",
      notePh: "Reason / note (required)",
      addNote: "Add note",
      release: "Resolve · release to buyer",
      cancel: "Resolve · cancel order",
      reasonRequired: "Reason required",
    },
    timer: {
      intro: "Live countdown from each order's pay window. Expired created orders auto-cancel (existing paper rule).",
      empty: "No running order timers",
      extended: "+{n} min extended",
      extend: "Extend +15 min",
      missing: "STUB · timer pause / per-ad SLA policy not modelled",
    },
    mc: {
      title: "Maker-checker queue",
      intro:
        "Sensitive actions (practice wallet credit, ban, unban, merchant license revoke, pass revoke) are filed by a maker and executed only after a checker approves.",
      subRole: "Acting sub-role (policy label)",
      role: { support: "Support", compliance: "Compliance", finance: "Finance", super: "SuperAdmin" },
      roleNote:
        "Paper: sub-roles are labels on the single admin seat. Checker must be another seat or another sub-role label — not real dual control.",
      file: "File request (maker)",
      kind: "Action",
      target: "Target",
      reason: "Reason",
      reasonPh: "Why? (required)",
      effect: {
        wallet_credit: "On approve: +100 practice coin to the seat (paper).",
        ban: "On approve: freeze seat + hold sends; marked banned (paper).",
        unban: "On approve: unfreeze seat + release send hold.",
        license_revoke: "On approve: merchant license suspended.",
        pass_revoke: "On approve: buyer pass revoked.",
      },
      submit: "Submit for approval",
      filter: { pending: "Pending", all: "All" },
      empty: "No requests",
      maker: "Maker",
      checker: "Checker",
      sameSeat: "same seat, different label (paper)",
      status: { pending: "Pending", approved: "Approved", rejected: "Rejected" },
      approve: "Approve & execute",
      reject: "Reject",
      missing: "MISSING · real second principal (separate admin auth) — tracked in docs/ADMIN_MODEL.md",
      k: {
        wallet_credit: "Wallet credit",
        ban: "Ban seat",
        unban: "Unban seat",
        license_revoke: "Revoke merchant license",
        pass_revoke: "Revoke buyer pass",
      },
    },
    stub: {
      appeal: "Appeal / dispute desk",
      appealBody: "Admin → Appeals: disputed orders, chat, notes, resolve via force release/cancel. Paper only.",
      timer: "Order timer",
      timerBody: "Admin → Appeals → Order timers: live countdown + extend +15 min (paper).",
      makerChecker: "Maker-checker",
      makerCheckerBody: "Admin → Maker-checker: wallet / ban / revoke need a second approver (seat or sub-role label).",
      express: "Express",
      expressBody: "Market → Express: paper shell routing to best live ad. No Express engine.",
      funnel: "Advanced funnel filters",
      funnelBody: "Market → Filters: completion / orders / pay window / price type / available / extra-ID / eligibility.",
      dualAuth: "Dual-principal admin auth",
      dualAuthBody: "Separate admin accounts per sub-role are not modelled; maker-checker is paper-only.",
    },
    auditMcFile: "Maker-checker request filed · {detail}",
    auditMcApprove: "Maker-checker approved · {detail}",
    auditMcReject: "Maker-checker rejected · {detail}",
    auditAppealNote: "Appeal note · {detail}",
    auditTimer: "Order timer extended · {detail}",
  },
  err: {
    mcRole: "This sub-role cannot file that action",
    mcReason: "A reason is required",
    makerChecker: "Checker must differ from maker (seat or sub-role)",
  },
};

const hi = merge(en, {
  market: {
    funnel: {
      title: "एडवांस्ड फ़िल्टर",
      active: "{n} सक्रिय",
      reset: "रीसेट",
      minCompletion: "न्यूनतम पूर्णता",
      minTrades: "न्यूनतम ऑर्डर",
      maxPayMin: "अधिकतम भुगतान समय",
      priceMode: "मूल्य प्रकार",
      fixed: "फ़िक्स्ड",
      float: "फ़्लोटिंग",
      minAvailable: "न्यूनतम उपलब्ध (कॉइन)",
      noExtraId: "अतिरिक्त ID नहीं",
      eligibleOnly: "मैं न्यूनतम पूर्णता पूरी करता हूँ",
    },
    express: {
      iPay: "मैं भुगतान करूँगा",
      iReceive: "मुझे मिलेगा",
      iSell: "मैं बेचूँगा",
      bestPrice: "सबसे अच्छा पेपर मूल्य",
      matches: "मिलते विज्ञापन",
      none: "इस राशि के लिए कोई पेपर विज्ञापन नहीं",
    },
  },
  admin: {
    tab: { appeals: "अपील", makerChecker: "मेकर-चेकर" },
    appeal: { empty: "कोई विवादित ऑर्डर नहीं", addNote: "नोट जोड़ें", view: { disputed: "विवादित", timers: "ऑर्डर टाइमर" } },
    timer: { extend: "+15 मिनट बढ़ाएँ", empty: "कोई चालू टाइमर नहीं" },
    mc: { title: "मेकर-चेकर कतार", approve: "मंज़ूर करें", reject: "अस्वीकार", submit: "मंज़ूरी के लिए भेजें", empty: "कोई अनुरोध नहीं" },
  },
  err: { mcReason: "कारण ज़रूरी है", makerChecker: "चेकर मेकर से अलग होना चाहिए" },
});

const ur = merge(en, {
  market: {
    funnel: {
      title: "ایڈوانسڈ فلٹرز",
      active: "{n} فعال",
      reset: "ری سیٹ",
      minCompletion: "کم از کم تکمیل",
      minTrades: "کم از کم آرڈر",
      maxPayMin: "زیادہ سے زیادہ ادائیگی وقت",
      priceMode: "قیمت کی قسم",
      fixed: "فکسڈ",
      float: "فلوٹنگ",
      minAvailable: "کم از کم دستیاب (کوائن)",
      noExtraId: "اضافی ID نہیں",
      eligibleOnly: "میں کم از کم تکمیل پوری کرتا ہوں",
    },
    express: {
      iPay: "میں ادا کروں گا",
      iReceive: "مجھے ملے گا",
      iSell: "میں بیچوں گا",
      bestPrice: "بہترین پیپر قیمت",
      matches: "ملتے اشتہار",
      none: "اس رقم کے لیے کوئی پیپر اشتہار نہیں",
    },
  },
  admin: {
    tab: { appeals: "اپیلیں", makerChecker: "میکر-چیکر" },
    appeal: { empty: "کوئی متنازع آرڈر نہیں", addNote: "نوٹ شامل کریں", view: { disputed: "متنازع", timers: "آرڈر ٹائمر" } },
    timer: { extend: "+15 منٹ بڑھائیں", empty: "کوئی جاری ٹائمر نہیں" },
    mc: { title: "میکر-چیکر قطار", approve: "منظور کریں", reject: "مسترد", submit: "منظوری کے لیے بھیجیں", empty: "کوئی درخواست نہیں" },
  },
  err: { mcReason: "وجہ ضروری ہے", makerChecker: "چیکر میکر سے مختلف ہونا چاہیے" },
});

export const copySlice2: Record<"en" | "hi" | "ur", Tree> = { en, hi, ur };
