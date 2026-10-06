import { useDesk } from "@/lib/p2p/store";
import type { Lang } from "@/lib/p2p/types";

export type SiteCopy = {
  company: string;
  nav: {
    home: string;
    product: string;
    services: string;
    pricing: string;
    security: string;
    about: string;
    journal: string;
    faq: string;
    contact: string;
    legal: string;
    enter: string;
    desk: string;
    phoneOut: string;
    more: string;
    buy: string;
    sell: string;
    merchant: string;
    help: string;
    fees: string;
  };
  liveNote: string;
  home: {
    kicker: string;
    title: string;
    lede: string;
    open: string;
    enter: string;
    pillarsTitle: string;
    pillars: { t: string; d: string }[];
    rolesTitle: string;
    roles: { t: string; d: string }[];
    journalTitle: string;
    read: string;
  };
  product: { title: string; lede: string; points: { t: string; d: string }[] };
  services: {
    title: string;
    lede: string;
    items: { t: string; d: string }[];
    padTitle: string;
    padNote: string;
    name: string;
    coin: string;
    side: string;
    buy: string;
    sell: string;
    max: string;
    note: string;
    save: string;
    saved: string;
    empty: string;
    remove: string;
    toPost: string;
  };
  pricing: {
    title: string;
    lede: string;
    heads: [string, string, string, string];
    rows: { name: string; cells: [string, string, string] }[];
    note: string;
  };
  security: { title: string; lede: string; points: { t: string; d: string }[] };
  about: { title: string; lede: string; points: string[] };
  journal: { title: string; lede: string; missing: string; back: string };
  posts: { slug: string; title: string; dek: string; body: string[] }[];
  faq: { title: string; items: { q: string; a: string }[] };
  contact: {
    title: string;
    lede: string;
    name: string;
    email: string;
    topic: string;
    topics: string[];
    message: string;
    send: string;
    sent: string;
    invalid: string;
  };
  legal: { title: string; body: string[] };
  enter: {
    title: string;
    lede: string;
    google: string;
    x: string;
    email: string;
    mobile: string;
    signIn: string;
    signUp: string;
    emailLabel: string;
    password: string;
    again: string;
    submitIn: string;
    submitUp: string;
    working: string;
    fail: string;
    mismatch: string;
    later: string;
    laterBody: string;
    codeShow: string;
    codeHint: string;
    codeLabel: string;
    confirm: string;
    skip: string;
    makeNow: string;
    made: string;
    passWay: string;
    passIn: string;
    noPass: string;
    locked: string;
    expired: string;
    wrong: string;
    missing: string;
    country: string;
    national: string;
    inside: string;
    toDesk: string;
    mailHint: string;
    googleUse: string;
    xUse: string;
    direct: string;
    passAsk: string;
    noMailPass: string;
    checks: {
      at: string;
      space: string;
      dots: string;
      domain: string;
      known: string;
      custom: string;
      digits: string;
      trunk: string;
      len: string;
      plen: string;
      letter: string;
      pdigit: string;
    };
  };
  account: {
    title: string;
    guest: string;
    member: string;
    phone: string;
    email: string;
    none: string;
    set: string;
    change: string;
    current: string;
    next: string;
    save: string;
    saved: string;
    bad: string;
    leave: string;
    deskRole: string;
  };
  guides: {
    buy: { title: string; lede: string; steps: string[]; cta: string };
    sell: { title: string; lede: string; steps: string[]; cta: string };
    merchant: { title: string; lede: string; steps: string[]; cta: string };
    help: { title: string; lede: string; blocks: { t: string; d: string }[] };
    fees: { title: string; lede: string; rows: { t: string; d: string }[]; note: string };
  };
};

const hi: SiteCopy = {
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
    more: "और",
    buy: "खरीदें",
    sell: "बेचें",
    merchant: "व्यापारी",
    help: "सहायता",
    fees: "शुल्क",
  },
  liveNote: "हरी बिंदी वाले सिक्के की दर अभी चल रही है। कर्सर या उंगली रोकती है।",
  home: {
    kicker: "ओर्विया",
    title: "पाँच पी२पी मेज़ों का काम, एक डेस्क।",
    lede: "पुस्तक, त्वरित खिड़की, व्यापारी, एस्क्रो और अपील, शुल्क और भुगतान रेल — बड़ी सहकर्मी मेज़ें इन्हीं कामों पर चलती हैं। ओर्विया पर वही क्रम है, अपनी भाषा में।",
    open: "डेस्क खोलें",
    enter: "प्रवेश",
    pillarsTitle: "मेनू, एक जगह",
    pillars: [
      { t: "खरीद पुस्तक", d: "सिक्का, राशि और भुगतान रेल छानकर विज्ञापन लीजिए। रुपया व्यापारी के बाहर जाता है।" },
      { t: "बिक्री विज्ञापन", d: "दाम, सीमा और रेल आप रखते हैं। बिक्री व्यापारी अनुज्ञप्ति के बाद।" },
      { t: "त्वरित खिड़की", d: "राशि लिखिए, उपयुक्त विज्ञापन खुलता है। लंबी सूची खोले बिना।" },
      { t: "व्यापारी और पास", d: "पूर्णता, ऑनलाइन स्थिति, अनुज्ञप्ति और खरीदार का पास। स्तर खरीदे नहीं जाते।" },
      { t: "एस्क्रो और अपील", d: "सिक्का छोड़ने तक रुकता है। घड़ी कटे या भुगतान अटके तो अपील।" },
    ],
    rolesTitle: "भूमिका",
    roles: [
      { t: "अतिथि", d: "मुख, लेख और पुस्तक पढ़ सकते हैं।" },
      { t: "सदस्य", d: "ईमेल का कोड, Google, X, या मोबाइल। पासवर्ड जरूरी नहीं — अभी या खाते में बाद में।" },
      { t: "व्यापारी", d: "पहचान के बाद अनुज्ञप्ति। खरीदने वाले को पास व्यापारी देता है।" },
      { t: "प्रशासन", d: "स्वयं नहीं खुलता। शुल्क और अंतरण डेस्क की प्रशासन भूमिका से।" },
    ],
    journalTitle: "लेख",
    read: "पढ़ें",
  },
  product: {
    title: "उत्पाद",
    lede: "ओर्विया डीएलएम कैश लैब्स का डेस्क है। बाज़ार की पाँच बॉट परंपराएँ — नियम, जाल, औसत, स्मार्ट आदेश, और जोखिम — यहाँ अलग-अलग लोगो नहीं, एक क्रम हैं।",
    points: [
      { t: "सहकर्मी पुस्तक", d: "खरीद और बिक्री के विज्ञापन, भुगतान रेल, और सौदे की अवस्था।" },
      { t: "त्वरित", d: "राशि से विज्ञापन चुनना, बिना लंबी सूची खोले।" },
      { t: "अनुज्ञप्ति", d: "व्यापारी पहचान के बाद लाइसेंस। पहला खरीद पास माँगता है।" },
      { t: "बटुआ", d: "डेस्क पर शेष, आरक्षण, और प्रशासन से अंतरण।" },
      { t: "पट्टी", d: "जीवित डॉलर भाव। रुपया विज्ञापन अपना भाव रखता है — पट्टी उसे नहीं मिटाती।" },
    ],
  },
  services: {
    title: "सेवाएँ",
    lede: "जो काम अलग-अलग बॉट साइटें बाँट कर बेचती हैं, वह यहाँ पाँच सेवाओं में है। कोई नक़ल किया हुआ वाक्य नहीं। जो बटन है, वह डेस्क पर खुलता है।",
    items: [
      { t: "नियम मेज़", d: "यदि-तो की जगह एक नामित योजना: सिक्का, खरीद या बिक्री, अधिकतम राशि, टिप्पणी।" },
      { t: "जाल और औसत", d: "एक ही दिशा में कई स्तर और औसत दाम की रूपरेखा लेख में है। ऑर्डर डेस्क पर स्वयं जाता है।" },
      { t: "स्मार्ट खिड़की", d: "त्वरित मार्ग और भुगतान की मिनट-घड़ी। व्यापारी छोड़ता है, खरीदार भुगतान चिह्नित करता है।" },
      { t: "बहु-बाज़ार पट्टी", d: "दस जीवित डॉलर जोड़े सार्वजनिक धारा से। बाकी सिक्के डेस्क के अपने हैं, बिना हरी बिंदी।" },
      { t: "जोखिम विराम", d: "न्यूनतम पूर्णता, पहचान, पास रद्द, और प्रशासन द्वारा डेस्क बंद।" },
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
    toPost: "डेस्क पर विज्ञापन दें",
  },
  pricing: {
    title: "योजना",
    lede: "यहाँ चेकआउट नहीं है। शुल्क प्रशासन डेस्क पर तय करता है। भूमिकाएँ क्षमता बाँटती हैं, दाम की तालिका नहीं।",
    heads: ["क्षमता", "अतिथि", "सदस्य", "व्यापारी"],
    rows: [
      { name: "लेख और मुख", cells: ["हाँ", "हाँ", "हाँ"] },
      { name: "पुस्तक देखना", cells: ["हाँ", "हाँ", "हाँ"] },
      { name: "विज्ञापन और बटुआ", cells: ["डेस्क भूमिका", "डेस्क भूमिका", "हाँ"] },
      { name: "अनुज्ञप्ति और पास", cells: ["नहीं", "नहीं", "हाँ"] },
      { name: "प्रशासन शुल्क", cells: ["नहीं", "नहीं", "नहीं"] },
    ],
    note: "प्रशासन कोई खरीद योजना नहीं। सदस्यता Google, X, ईमेल या मोबाइल कोड से बनती है।",
  },
  security: {
    title: "सुरक्षा",
    lede: "पासवर्ड सादा नहीं रखा जाता। मोबाइल कोड संदेश नहीं है। पहचान के पूरे कागज़ यहाँ नहीं माँगे जाते।",
    points: [
      { t: "ईमेल खाता", d: "ईमेल और पासवर्ड इसी डेस्क के खाता-कोष में हैंश होकर रहते हैं। Google और X अलग प्रवेश हैं — उनके लिए पासवर्ड नहीं चाहिए।" },
      { t: "मोबाइल", d: "देश का कोड और उतने अंक जितने उस देश में होते हैं। छह अंकों का कोड केवल इसी स्क्रीन पर दिखता है, पाँच मिनट, पाँच कोशिश। पासवर्ड अभी या बाद में खाते में।" },
      { t: "वैकल्पिक पासवर्ड", d: "मोबाइल प्रवेश कोड से पूरा होता है। पासवर्ड बनाना आपकी इच्छा है। बाद में खाता पृष्ठ पर भी बन सकता है। वह भी एक-तरफ़ा हैश है।" },
      { t: "पहचान", d: "व्यापारी लाइसेंस के लिए अंतिम चार अंक और संलग्न चिह्न। पूरा दस्तावेज़ यहाँ संग्रह नहीं होता।" },
      { t: "प्रशासन", d: "साइन-अप से प्रशासन नहीं बनता।" },
    ],
  },
  about: {
    title: "परिचय",
    lede: "ओर्विया डीएलएम कैश लैब्स प्राइवेट लिमिटेड का डेस्क है। कंपनी का काम सहकर्मी सौदा, व्यापारी अनुज्ञप्ति, और बाज़ार की जीवित पट्टी को एक जगह रखना है।",
    points: [
      "पाँच बॉट परंपराओं के मेनू — नियम, जाल, औसत, स्मार्ट आदेश, जोखिम — एक मूल क्रम में लिखे गए हैं।",
      "जीवित दर सार्वजनिक डॉलर धारा से आती है। रुपया विज्ञापन अपना दाम अलग रखता है।",
      "कोई नकली लाइसेंस संख्या यहाँ नहीं लिखी गई। कंपनी का नाम ही पहचान है।",
    ],
  },
  journal: { title: "लेख", lede: "डेस्क के पाँच काम, छोटे लेखों में।", missing: "यह लेख नहीं मिला।", back: "सभी लेख" },
  posts: [
    {
      slug: "niyam-mez",
      title: "नियम मेज़ क्या करती है",
      dek: "शर्त लिखना और सौदा करना एक ही बटन नहीं है।",
      body: [
        "बॉट साइटें अक्सर ‘यदि यह हो तो वह करो’ बेचती हैं। ओर्विया पर नियम मेज़ एक नाम, सिक्का, दिशा और अधिकतम राशि सहेजती है।",
        "योजना अपने आप ऑर्डर नहीं भेजती। जब आप तैयार हों, विज्ञापन या त्वरित खिड़की से सौदा स्वयं दीजिए। सीमा पार हो तो योजना याद दिलाती है, छुप कर व्यापार नहीं करती।",
      ],
    },
    {
      slug: "jaal-ausat",
      title: "जाल और औसत",
      dek: "कई स्तर और औसत दाम की रूपरेखा, बिना नक़ली बॉट चालू किए।",
      body: [
        "जाल एक सीमा को टुकड़ों में बाँटता है। औसत प्रवेश गिरते दाम पर मात्रा जोड़ने का विचार है। दोनों रूपरेखाएँ हैं, जादू की ट्रेड नहीं।",
        "डेस्क पर दाम विज्ञापन का है। डॉलर पट्टी उस विज्ञापन की कीमत को बदल नहीं देती। जाल की गणित आप लेख और नियम मेज़ पर रखते हैं, निष्पादन पुस्तक पर।",
      ],
    },
    {
      slug: "jeevit-patti",
      title: "जीवित पट्टी और रुपया पुस्तक",
      dek: "हरी बिंदी का मतलब live डॉलर दर है।",
      body: [
        "पट्टी कतार में चलती है। उस पर रुकने के लिए कर्सर या उंगली काफी है। बॉक्स की दीवार नहीं है।",
        "हरी बिंदी उन्हीं सिक्कों पर है जिनकी दर सार्वजनिक धारा से आ रही है। बाकी सिक्के धूसर बिंदी रखते हैं। रुपया विज्ञापन अपना भाव अलग रखता है।",
      ],
    },
    {
      slug: "vyapari-anugyapti",
      title: "व्यापारी अनुज्ञप्ति और पास",
      dek: "पहचान, लाइसेंस, और खरीदने वाले का पास।",
      body: [
        "बिक्री का विज्ञापन व्यापारी लाइसेंस माँगता है। लाइसेंस पहचान के बाद आता है। रखे जाते हैं अंतिम चार अंक।",
        "किसी व्यापारी से पहली खरीद पर उसी के पास का अनुरोध होता है। पास उसके चार अंक और चार यादृच्छिक अंक से बनता है। वह रद्द कर सकता है। दोबारा देने का अधिकार भी उसी का है।",
      ],
    },
    {
      slug: "jokhim-viram",
      title: "जोखिम और विराम",
      dek: "सीमा, पूर्णता, और बंद डेस्क।",
      body: [
        "विज्ञापन न्यूनतम पूर्णता और पहचान माँग सकता है। भुगतान की घड़ी कटते ही खुला सौदा रुकता है।",
        "प्रशासन डेस्क बंद कर सकता है। बंद होने पर नई किताब नहीं चलती। यह विराम खरीदा नहीं जाता — वह भूमिका डेस्क पर पहले से नियुक्त है।",
      ],
    },
  ],
  faq: {
    title: "प्रश्न",
    items: [
      { q: "पासवर्ड क्या साइन-अप पर ज़रूरी है?", a: "नहीं। पहले एक बार का कोड। उसके बाद पूछा जाता है — अभी बनाएँ या नहीं। नहीं चुनें तो खाते में कभी भी बना सकते हैं। Google और X पर पासवर्ड होता ही नहीं।" },
      { q: "कोड संदेश में आएगा?", a: "नहीं। छह अंक इसी स्क्रीन पर एक बार दिखते हैं। कोई वाहक संदेश नहीं भेजा जाता।" },
      { q: "किसी भी देश का नंबर?", a: "सूची में देश और उसका कोड है। अंक उतने ही जितने उस देश के राष्ट्रीय नंबर में होते हैं। शुरुआत का 0 नहीं।" },
      { q: "केवल जीमेल?", a: "नहीं। एक @, साफ डोमेन, और दो अक्षर का अंत। जीमेल केवल एक ज्ञात उदाहरण है, शर्त नहीं।" },
      { q: "मैं प्रशासन कैसे बनूँ?", a: "साइन-अप से नहीं। प्रशासन डेस्क की अलग भूमिका है।" },
      { q: "पट्टी रुकती क्यों है?", a: "कर्सर या उंगली पट्टी पर हो तो कतार रुकती है। हटते ही फिर चलती है।" },
      { q: "योजना अपने आप व्यापार करेगी?", a: "नहीं। नियम मेज़ याद रखती है। सौदा आप डेस्क पर देते हैं।" },
      { q: "शुल्क कहाँ है?", a: "इस पृष्ठ पर चेकआउट नहीं। खरीदार और विक्रेता शुल्क प्रशासन डेस्क पर रखता है।" },
    ],
  },
  contact: {
    title: "संपर्क",
    lede: "डीएलएम कैश लैब्स प्राइवेट लिमिटेड। यह फ़ॉर्म संदेश को मेलबॉक्स में नहीं भेजता — भेजने पर वह यहीं दर्ज दिखता है।",
    name: "नाम",
    email: "ईमेल",
    topic: "विषय",
    topics: ["सौदा अटका", "भुगतान नहीं मिला", "व्यापारी आवेदन", "सुरक्षा", "अन्य"],
    message: "संदेश",
    send: "दर्ज करें",
    sent: "दर्ज हो गया। कोई मेल नहीं गया।",
    invalid: "नाम, सही ईमेल, और संदेश चाहिए।",
  },
  legal: {
    title: "शर्तें",
    body: [
      "ओर्विया डीएलएम कैश लैब्स प्राइवेट लिमिटेड का डेस्क है। इस पृष्ठ पर कोई लाइसेंस संख्या नहीं लिखी गई है।",
      "ईमेल खाता पासवर्ड के साथ हैश होता है। Google और X उसी प्रवेश द्वार से आते हैं जो इस ऐप में जुड़ा है। मोबाइल कोड केवल स्क्रीन पर है।",
      "पहचान पर अंतिम चार अंक। पूरा कागज़ संग्रह नहीं होता। श्रृंखला पर प्रसारण इस डेस्क से नहीं होता।",
      "नियम मेज़ की योजना आपके ब्राउज़र में रहती है और अपने आप आदेश नहीं भेजती।",
    ],
  },
  enter: {
    title: "प्रवेश",
    lede: "ईमेल लिखिए। उसी पते से Google या X खुलता है। सीधा प्रवेश एक बार के कोड से होता है। पासवर्ड जरूरी नहीं।",
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
    laterBody: "पासवर्ड वैकल्पिक है। कोड के बाद अभी बनाएँ, या खाते में कभी भी। सहेजते ही वह एक-तरफ़ा हैश होता है।",
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
    mailHint: "यह कोड केवल इसी स्क्रीन पर है। कोई मेल नहीं भेजा गया। पाँच मिनट।",
    googleUse: "इस पते से Google",
    xUse: "इस पते से X",
    direct: "सीधा प्रवेश — एक बार का कोड",
    passAsk: "कोड मिल गया। पासवर्ड बनाना आपकी मर्ज़ी है। अभी बनाएँ, या खाते में कभी भी। वह एक-तरफ़ा हैश होता है।",
    noMailPass: "इस ईमेल पर पासवर्ड नहीं है। कोड से प्रवेश कीजिए।",
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
      pdigit: "एक अंक",
    },
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
    deskRole: "डेस्क भूमिका अलग है — ऊपर वाली सीट। प्रशासन साइन-अप से नहीं बनता।",
  },
  guides: {
    buy: {
      title: "खरीदें",
      lede: "सिक्का और राशि चुनिए, भुगतान रेल मिलाइए, विज्ञापन लीजिए। रुपया व्यापारी को बाहर जाता है। सिक्का छोड़ने तक डेस्क पर रहता है।",
      steps: ["सिक्का और राशि चुनें।", "यूपीआई, आईएमपीएस या बैंक जैसी रेल मिलाएँ।", "विज्ञापन लें और समय के अंदर भुगतान करें।", "व्यापारी सिक्का छोड़े, या अटकाव पर अपील करें।"],
      cta: "पुस्तक खोलें",
    },
    sell: {
      title: "बेचें",
      lede: "बिक्री का विज्ञापन व्यापारी अनुज्ञप्ति के बाद। दाम, सीमा, सूची और रेल आप रखते हैं। खरीदार के भुगतान के बाद आप छोड़ते हैं।",
      steps: ["पहचान के अंतिम चार अंक और अनुज्ञप्ति।", "दाम, न्यूनतम, अधिकतम और रेल लिखें।", "खरीदार समय के अंदर भुगतान करे।", "सिक्का छोड़ें, या कारण के साथ अपील।"],
      cta: "विज्ञापन दें",
    },
    merchant: {
      title: "व्यापारी",
      lede: "बड़ी मेज़ों पर व्यापारी के स्तर होते हैं। यहाँ क्रम सीधा है — सदस्य, पहचान, अनुज्ञप्ति, पास। स्तर का नाम नहीं बिकता।",
      steps: ["प्रवेश से सदस्य।", "पहचान में केवल अंतिम चार अंक।", "अनुज्ञप्ति के बाद बिक्री विज्ञापन।", "खरीदार का पास आप देते या रोकते हैं।", "पूर्णता और ऑनलाइन स्थिति पुस्तक पर दिखती है।"],
      cta: "पहचान खोलें",
    },
    help: {
      title: "सहायता",
      lede: "सौदा, भुगतान, एस्क्रो, अपील और पट्टी — वही प्रश्न जो हर सहकर्मी मेज़ पर आते हैं।",
      blocks: [
        { t: "एस्क्रो", d: "सिक्का व्यापारी के छोड़ने तक रुका रहता है। छोड़ने से पहले खरीदार को शेष नहीं मिलता।" },
        { t: "भुगतान", d: "रुपया चुनी हुई रेल पर, डेस्क के बाहर जाता है। नाम वही रखें जो साधन पर है।" },
        { t: "घड़ी", d: "भुगतान का समय कटते ही खुला सौदा रुक जाता है।" },
        { t: "अपील", d: "भुगतान हो चुका हो और सिक्का न छूटे, या उलटा विवाद हो, तो खुले सौदे पर कारण चुनिए।" },
        { t: "पास", d: "किसी व्यापारी से पहली खरीद पर उसी का पास चाहिए। बाद की खरीद पर नहीं, जब तक वह पास रोक न दे।" },
        { t: "पट्टी", d: "डॉलर की कतार विज्ञापन का रुपया दाम नहीं बदलती। हरी बिंदी जीवित दर है। डिब्बा नहीं।" },
      ],
    },
    fees: {
      title: "शुल्क",
      lede: "खरीदार और विक्रेता का शुल्क प्रशासन रखता है — प्रतिशत, स्थिर सिक्का, या दोनों। इस पृष्ठ पर चेकआउट नहीं।",
      rows: [
        { t: "खरीदार", d: "सौदा लेते समय प्रशासन का तय प्रतिशत या स्थिर भाग।" },
        { t: "विक्रेता", d: "विज्ञापन वाले व्यापारी पर अलग शुल्क, उसी तरह प्रतिशत या स्थिर।" },
        { t: "बाहर अंतरण", d: "एक सीमा के नीचे प्रशासन स्वचालित या स्वयं चुन सकता है। सीमा डेस्क पर बदलती है।" },
      ],
      note: "शुल्क बदलना प्रशासन की भूमिका है। साइन-अप से वह भूमिका नहीं मिलती।",
    },
  },
};

const en: SiteCopy = {
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
    more: "More",
    buy: "Buy",
    sell: "Sell",
    merchant: "Merchant",
    help: "Help",
    fees: "Fees",
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
      { t: "Rule table", d: "Name a condition: coin, side, limit. The plan stays in this browser. You place the trade on the desk." },
      { t: "Grid and average", d: "A sketch of steps inside a band, and of adding as price falls. Execution is the ad and the express window." },
      { t: "Smart window", d: "Express, a pay clock, and the merchant release. When the clock ends, the deal stops." },
      { t: "Live tape", d: "Dollar rates from the public market. Green means live. The queue runs without boxes." },
      { t: "Risk halt", d: "Completion, limits, passes, and an admin halt. Past a limit, the desk does not continue." },
    ],
    rolesTitle: "Roles",
    roles: [
      { t: "Guest", d: "Read the home, the journal, and the book." },
      { t: "Member", d: "An account after email, Google, X, or a mobile code. A mobile password is optional." },
      { t: "Merchant", d: "A license after identity. The merchant grants the buyer pass." },
      { t: "Admin", d: "Not self-serve. Fees and transfers use the desk admin role." },
    ],
    journalTitle: "Journal",
    read: "Read",
  },
  product: {
    title: "Product",
    lede: "ORVIA is the desk of DLM CASH LABS. Five bot traditions — rules, grid, average, smart orders, and risk — are one sequence, not five logos.",
    points: [
      { t: "Peer book", d: "Buy and sell ads, payment rails, and the state of a deal." },
      { t: "Express", d: "Pick an ad from an amount without walking the whole list." },
      { t: "License", d: "A merchant license follows identity. The first buy asks for a pass." },
      { t: "Wallet", d: "Balances, reserves, and transfers released by admin." },
      { t: "Tape", d: "Live dollar quotes. An INR ad keeps its own price — the tape does not overwrite it." },
    ],
  },
  services: {
    title: "Services",
    lede: "What other bot sites split into products is five services here. No copied sentences. A button opens the desk.",
    items: [
      { t: "Rule table", d: "Instead of a hidden if-then bot: a named plan with coin, side, maximum, and a note." },
      { t: "Grid and average", d: "Several levels in one direction, and an average price, described in the journal. The order is yours on the desk." },
      { t: "Smart window", d: "Express, and a pay clock in minutes. The merchant releases. The buyer marks paid." },
      { t: "Multi-market tape", d: "Ten live dollar pairs from a public stream. Other coins are the desk’s own, without the green mark." },
      { t: "Risk halt", d: "Minimum completion, identity, a revoked pass, and an admin close." },
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
    toPost: "Post an ad on the desk",
  },
  pricing: {
    title: "Plans",
    lede: "There is no checkout on this page. Admin sets fees on the desk. Roles split capability, not a price list.",
    heads: ["Capability", "Guest", "Member", "Merchant"],
    rows: [
      { name: "Home and journal", cells: ["Yes", "Yes", "Yes"] },
      { name: "Read the book", cells: ["Yes", "Yes", "Yes"] },
      { name: "Ads and wallet", cells: ["Desk role", "Desk role", "Yes"] },
      { name: "License and passes", cells: ["No", "No", "Yes"] },
      { name: "Admin fees", cells: ["No", "No", "No"] },
    ],
    note: "Admin is not a plan you buy. A member joins with Google, X, email, or a mobile code.",
  },
  security: {
    title: "Security",
    lede: "Passwords are not stored in the clear. The mobile code is not a message. Full identity papers are not collected here.",
    points: [
      { t: "Email account", d: "Email and password are hashed in this desk’s account store. Google and X are separate doors — they need no password." },
      { t: "Mobile", d: "A country code, and as many digits as that country uses. The six digits appear once on this screen, for five minutes, five tries. Set a password now or later in the account." },
      { t: "Optional password", d: "Mobile entry is the code. A password is your choice, including later on the account page. That too is a one-way hash." },
      { t: "Identity", d: "A merchant license keeps the last four digits and an attached mark. The full document is not stored." },
      { t: "Admin", d: "Sign-up does not create an admin." },
    ],
  },
  about: {
    title: "About",
    lede: "ORVIA is the desk of DLM CASH LABS PRIVATE LIMITED. The company keeps the peer book, merchant licenses, and the live tape in one place.",
    points: [
      "The menus of five bot traditions — rules, grid, average, smart orders, risk — are written as one original sequence.",
      "Live rates come from a public dollar stream. An INR ad keeps its own price.",
      "No license number is invented on this site. The company name is the mark.",
    ],
  },
  journal: { title: "Journal", lede: "Five jobs of the desk, in short essays.", missing: "That essay is not here.", back: "All essays" },
  posts: [
    {
      slug: "niyam-mez",
      title: "What the rule table does",
      dek: "Writing a condition and placing a trade are not the same button.",
      body: [
        "Bot sites often sell “if this, then that.” On ORVIA the rule table saves a name, a coin, a side, and a maximum.",
        "The plan does not send an order by itself. When you are ready, you trade from an ad or the express window. It can remind you of a limit. It does not trade in secret.",
      ],
    },
    {
      slug: "jaal-ausat",
      title: "Grid and average",
      dek: "A sketch of levels and of an average price, without a pretend bot running.",
      body: [
        "A grid cuts one band into steps. Averaging is the idea of adding as price falls. Both are sketches, not a magic trade.",
        "On the desk the price is the ad’s price. The dollar tape does not replace it. Keep the arithmetic on the rule table. Execute on the book.",
      ],
    },
    {
      slug: "jeevit-patti",
      title: "The live tape and the rupee book",
      dek: "A green mark means a live dollar rate.",
      body: [
        "The tape runs as a queue. A cursor or a finger pauses it. There is no box wall.",
        "Green is only on coins whose rate comes from the public stream. The others keep a gray mark. A rupee ad keeps its own price.",
      ],
    },
    {
      slug: "vyapari-anugyapti",
      title: "Merchant license and passes",
      dek: "Identity, a license, and the buyer’s pass.",
      body: [
        "A sell ad needs a merchant license. The license follows identity. What is kept is the last four digits.",
        "The first buy from a merchant asks for a pass with that merchant. The pass is their four digits plus four random digits. They can revoke it, and they can grant it again.",
      ],
    },
    {
      slug: "jokhim-viram",
      title: "Risk and the halt",
      dek: "Limits, completion, and a closed desk.",
      body: [
        "An ad can require a minimum completion and identity. When the pay clock ends, an open deal stops.",
        "Admin can close the desk. While it is closed, the book does not take a new deal. That halt is not for sale — the role is already appointed on the desk.",
      ],
    },
  ],
  faq: {
    title: "Questions",
    items: [
      { q: "Is a password required at sign-up?", a: "No. A one-time code comes first. Then you choose to create a password or not. If not, create it anytime in the account. Google and X never ask for one." },
      { q: "Does the code arrive as a message?", a: "No. The six digits appear once on this screen. No carrier message is sent." },
      { q: "A number from any country?", a: "The list shows the country and its code. The count matches that country’s national number. Drop the leading 0." },
      { q: "Gmail only?", a: "No. One @, a clean domain, and an ending of at least two letters. Gmail is a known example, not a rule." },
      { q: "How do I become admin?", a: "Not from sign-up. Admin is a separate desk role." },
      { q: "Why does the tape stop?", a: "A cursor or finger on the tape pauses the queue. It runs again when you leave." },
      { q: "Will a plan trade by itself?", a: "No. The rule table remembers. You place the deal on the desk." },
      { q: "Where are the fees?", a: "No checkout on this page. Admin sets buyer and seller fees on the desk." },
    ],
  },
  contact: {
    title: "Contact",
    lede: "DLM CASH LABS PRIVATE LIMITED. This form does not send mail. After you submit, the note stays on this page.",
    name: "Name",
    email: "Email",
    topic: "Topic",
    topics: ["Deal stuck", "Payment missing", "Merchant application", "Security", "Other"],
    message: "Message",
    send: "Record",
    sent: "Recorded. No mail was sent.",
    invalid: "A name, a valid email, and a message are required.",
  },
  legal: {
    title: "Terms",
    body: [
      "ORVIA is the desk of DLM CASH LABS PRIVATE LIMITED. This page does not print a license number.",
      "An email account is stored as a hash with its password. Google and X use the sign-in already wired into this app. The mobile code exists only on the screen.",
      "Identity keeps the last four digits. Full papers are not collected. This desk does not broadcast to a chain.",
      "A rule-table plan stays in your browser and does not send orders by itself.",
    ],
  },
  enter: {
    title: "Enter",
    lede: "Type an email. That address can continue with Google or X. Direct entry is a one-time code. A password is not required.",
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
    laterBody: "A password is optional. After the code, create one now or anytime in the account. It is stored as a one-way hash.",
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
    mailHint: "This code is only on this screen. No mail was sent. Five minutes.",
    googleUse: "This address with Google",
    xUse: "This address with X",
    direct: "Direct entry — one-time code",
    passAsk: "The code matched. A password is your choice. Create it now, or anytime in the account. It is stored as a one-way hash.",
    noMailPass: "This email has no password yet. Enter with the code.",
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
      pdigit: "One digit",
    },
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
    deskRole: "The desk role is separate — the seat above. Sign-up does not make you admin.",
  },
  guides: {
    buy: {
      title: "Buy",
      lede: "Choose the coin and amount, match a payment rail, and take an ad. Fiat moves outside. Coin stays until the merchant releases it.",
      steps: ["Choose coin and amount.", "Match a rail such as UPI, IMPS, or bank.", "Take the ad and pay inside the window.", "The merchant releases, or you appeal if it sticks."],
      cta: "Open the book",
    },
    sell: {
      title: "Sell",
      lede: "A sell ad needs a merchant license. You set price, limits, inventory, and rails. You release after the buyer pays.",
      steps: ["Identity keeps the last four digits, then a license.", "Set price, minimum, maximum, and rails.", "The buyer pays inside the window.", "Release the coin, or appeal with a reason."],
      cta: "Post an ad",
    },
    merchant: {
      title: "Merchant",
      lede: "Large desks sell merchant tiers. Here the order is plain: member, identity, license, pass. A tier name is not for sale.",
      steps: ["Entry makes a member.", "Identity stores the last four digits.", "A license allows sell ads.", "You grant or revoke a buyer pass.", "Completion and online status show on the book."],
      cta: "Open identity",
    },
    help: {
      title: "Help",
      lede: "Deals, payment, escrow, appeals, and the tape — the questions every peer desk is asked.",
      blocks: [
        { t: "Escrow", d: "Coin waits until the merchant releases it. The buyer does not receive it before that." },
        { t: "Payment", d: "Fiat moves on the chosen rail, outside the desk. Use the name on that method." },
        { t: "Clock", d: "When the pay window ends, an open deal stops." },
        { t: "Appeal", d: "If payment is in and coin is not released, or the reverse, pick a reason on the open deal." },
        { t: "Pass", d: "The first buy from a merchant needs that merchant's pass. Later buys skip it unless they revoke it." },
        { t: "Tape", d: "The dollar queue does not change an ad's rupee price. A green mark is a live rate. There is no box." },
      ],
    },
    fees: {
      title: "Fees",
      lede: "Admin sets the buyer fee and the seller fee — a percent, a fixed amount of coin, or both. There is no checkout on this page.",
      rows: [
        { t: "Buyer", d: "The percent or fixed part admin set, when a deal is taken." },
        { t: "Seller", d: "A separate fee on the merchant who posted, percent or fixed the same way." },
        { t: "Transfer out", d: "Under a limit, admin can choose automatic or manual. The limit is changed on the desk." },
      ],
      note: "Changing fees is the admin role. Sign-up does not grant it.",
    },
  },
};

const ur: SiteCopy = {
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
    more: "مزید",
    buy: "خرید",
    sell: "فروخت",
    merchant: "تاجر",
    help: "مدد",
    fees: "محصول",
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
      { t: "اصول میز", d: "شرط لکھیں — سکہ، سمت، حد۔ منصوبہ اسی براؤزر میں رہتا ہے۔ سودا آپ ڈیسک پر دیتے ہیں۔" },
      { t: "جال اور اوسط", d: "ایک حد کے اندر کئی قدم اور اوسط داخلے کا خاکہ۔ عمل اشتہار اور فوری کھڑکی سے ہوتا ہے۔" },
      { t: "سمارٹ کھڑکی", d: "فوری سودا، ادائیگی کی گھڑی، اور تاجر کا چھوڑنا۔ گھڑی کٹتے ہی سودا رک جاتا ہے۔" },
      { t: "زندہ پٹی", d: "ڈالر ریٹ عوامی بازار سے۔ ہری نقطہ زندہ ہے۔ پٹی ڈبوں میں نہیں، قطار میں چلتی ہے۔" },
      { t: "خطرے کا وقفہ", d: "تکمیل، حد، اجازت نامہ، اور انتظام کا وقفہ۔ حد ٹوٹے تو ڈیسک آگے نہیں بڑھتا۔" },
    ],
    rolesTitle: "کردار",
    roles: [
      { t: "مہمان", d: "گھر، مضامین اور کتاب پڑھ سکتے ہیں۔" },
      { t: "رکن", d: "ای میل، Google، X، یا موبائل کوڈ کے بعد کھاتہ۔ موبائل پر پاس ورڈ اختیاری ہے۔" },
      { t: "تاجر", d: "شناخت کے بعد اجازت نامہ۔ خریدار کا پاس تاجر دیتا ہے۔" },
      { t: "انتظام", d: "خود نہیں کھلتا۔ محصول اور منتقلی ڈیسک کے انتظامی کردار سے۔" },
    ],
    journalTitle: "مضامین",
    read: "پڑھیں",
  },
  product: {
    title: "مصنوع",
    lede: "اورویا ڈی ایل ایم کیش لیبز کا ڈیسک ہے۔ پانچ بوٹ روایتیں — اصول، جال، اوسط، سمارٹ حکم، خطرہ — ایک ترتیب ہیں، پانچ نشانات نہیں۔",
    points: [
      { t: "ہمسر کتاب", d: "خرید و فروخت کے اشتہار، ادائیگی، اور سودے کی حالت۔" },
      { t: "فوری", d: "رقم سے اشتہار چننا، پوری فہرست کے بغیر۔" },
      { t: "اجازت نامہ", d: "تاجر کی شناخت کے بعد لائسنس۔ پہلی خرید پاس مانگتی ہے۔" },
      { t: "بٹوا", d: "بقایا، محفوظ رقم، اور انتظام سے منتقلی۔" },
      { t: "پٹی", d: "زندہ ڈالر بھاؤ۔ روپیہ اشتہار اپنا دام رکھتا ہے — پٹی اسے نہیں مٹاتی۔" },
    ],
  },
  services: {
    title: "خدمات",
    lede: "جو کام الگ بوٹ سائٹیں بانٹ کر بیچتی ہیں، وہ یہاں پانچ خدمات میں ہے۔ کوئی نقل شدہ جملہ نہیں۔ بٹن ڈیسک کھولتا ہے۔",
    items: [
      { t: "اصول میز", d: "اگر-تو کی جگہ ایک نام والا منصوبہ: سکہ، خرید یا فروخت، زیادہ سے زیادہ رقم، نوٹ۔" },
      { t: "جال اور اوسط", d: "ایک سمت میں کئی درجے اور اوسط دام کا خاکہ مضمون میں ہے۔ حکم ڈیسک پر آپ خود دیتے ہیں۔" },
      { t: "سمارٹ کھڑکی", d: "فوری راستہ اور ادائیگی کی منٹ گھڑی۔ تاجر چھوڑتا ہے، خریدار ادائیگی نشان زد کرتا ہے۔" },
      { t: "کئی بازار کی پٹی", d: "دس زندہ ڈالر جوڑے عوامی دھار سے۔ باقی سکے ڈیسک کے اپنے ہیں، بغیر ہری نقطہ۔" },
      { t: "خطرے کا وقفہ", d: "کم سے کم تکمیل، شناخت، پاس منسوخ، اور انتظام سے ڈیسک بند۔" },
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
    toPost: "ڈیسک پر اشتہار دیں",
  },
  pricing: {
    title: "منصوبے",
    lede: "اس صفحے پر چیک آؤٹ نہیں۔ محصول انتظام ڈیسک پر طے کرتا ہے۔ کردار صلاحیت بانٹتے ہیں، دام کی فہرست نہیں۔",
    heads: ["صلاحیت", "مہمان", "رکن", "تاجر"],
    rows: [
      { name: "گھر اور مضامین", cells: ["ہاں", "ہاں", "ہاں"] },
      { name: "کتاب دیکھنا", cells: ["ہاں", "ہاں", "ہاں"] },
      { name: "اشتہار اور بٹوا", cells: ["ڈیسک کردار", "ڈیسک کردار", "ہاں"] },
      { name: "اجازت اور پاس", cells: ["نہیں", "نہیں", "ہاں"] },
      { name: "انتظامی محصول", cells: ["نہیں", "نہیں", "نہیں"] },
    ],
    note: "انتظام کوئی خریدی جانے والی اسکیم نہیں۔ رکنیت Google، X، ای میل یا موبائل کوڈ سے بنتی ہے۔",
  },
  security: {
    title: "حفاظت",
    lede: "پاس ورڈ کھلا نہیں رکھا جاتا۔ موبائل کوڈ پیغام نہیں۔ شناخت کے پورے کاغذات یہاں نہیں مانگے جاتے۔",
    points: [
      { t: "ای میل کھاتہ", d: "ای میل اور پاس ورڈ اسی ڈیسک کے خزانے میں ہیش ہو کر رہتے ہیں۔ Google اور X الگ داخلے ہیں — ان کے لیے پاس ورڈ نہیں۔" },
      { t: "موبائل", d: "ملک کا کوڈ اور اتنے ہندسے جتنے اس ملک میں ہوتے ہیں۔ چھ ہندسے صرف اسی سکرین پر، پانچ منٹ، پانچ کوشش۔ پاس ورڈ اب یا بعد میں کھاتے میں۔" },
      { t: "اختیاری پاس ورڈ", d: "موبائل داخلہ کوڈ سے پورا ہوتا ہے۔ پاس ورڈ آپ کی مرضی ہے۔ بعد میں کھاتے کے صفحے پر بھی بن سکتا ہے۔ وہ بھی یک طرفہ ہیش ہے۔" },
      { t: "شناخت", d: "تاجر لائسنس کے لیے آخری چار ہندسے اور منسلک نشان۔ پورا دستاویز یہاں جمع نہیں ہوتا۔" },
      { t: "انتظام", d: "سائن اپ سے انتظام نہیں بنتا۔" },
    ],
  },
  about: {
    title: "تعارف",
    lede: "اورویا ڈی ایل ایم کیش لیبز پرائیویٹ لمیٹڈ کا ڈیسک ہے۔ کمپنی ہمسر سودا، تاجر اجازت نامہ، اور بازار کی زندہ پٹی ایک جگہ رکھتی ہے۔",
    points: [
      "پانچ بوٹ روایتوں کے مینو — اصول، جال، اوسط، سمارٹ حکم، خطرہ — ایک اصل ترتیب میں لکھے گئے ہیں۔",
      "زندہ ریٹ عوامی ڈالر دھار سے آتا ہے۔ روپیہ اشتہار اپنا دام الگ رکھتا ہے۔",
      "کوئی بناوٹی لائسنس نمبر یہاں نہیں لکھا گیا۔ کمپنی کا نام ہی شناخت ہے۔",
    ],
  },
  journal: { title: "مضامین", lede: "ڈیسک کے پانچ کام، مختصر مضامین میں۔", missing: "یہ مضمون نہیں ملا۔", back: "تمام مضامین" },
  posts: [
    {
      slug: "niyam-mez",
      title: "اصول میز کیا کرتی ہے",
      dek: "شرط لکھنا اور سودا کرنا ایک بٹن نہیں۔",
      body: [
        "بوٹ سائٹیں اکثر ‘اگر یہ ہو تو وہ کرو’ بیچتی ہیں۔ اورویا پر اصول میز ایک نام، سکہ، سمت اور زیادہ سے زیادہ رقم محفوظ کرتی ہے۔",
        "منصوبہ خود آرڈر نہیں بھیجتا۔ جب آپ تیار ہوں، اشتہار یا فوری کھڑکی سے سودا خود دیجیے۔ حد پار ہو تو منصوبہ یاد دلاتا ہے، چھپ کر تجارت نہیں کرتا۔",
      ],
    },
    {
      slug: "jaal-ausat",
      title: "جال اور اوسط",
      dek: "کئی درجے اور اوسط دام کا خاکہ، بغیر بناوٹی بوٹ چلائے۔",
      body: [
        "جال ایک حد کو ٹکڑوں میں بانٹتا ہے۔ اوسط داخلہ گرتے دام پر مقدار بڑھانے کا خیال ہے۔ دونوں خاکے ہیں، جادو کی ٹریڈ نہیں۔",
        "ڈیسک پر دام اشتہار کا ہے۔ ڈالر پٹی اس دام کو نہیں بدلتی۔ حساب اصول میز پر رکھیں، عمل کتاب پر۔",
      ],
    },
    {
      slug: "jeevit-patti",
      title: "زندہ پٹی اور روپیہ کتاب",
      dek: "ہری نقطہ کا مطلب زندہ ڈالر ریٹ ہے۔",
      body: [
        "پٹی قطار میں چلتی ہے۔ رکنے کے لیے کرسر یا انگلی کافی ہے۔ ڈبے کی دیوار نہیں۔",
        "ہری نقطہ صرف ان سکوں پر ہے جن کی ریٹ عوامی دھار سے آ رہی ہے۔ باقی سکے سرمئی نقطہ رکھتے ہیں۔ روپیہ اشتہار اپنا دام الگ رکھتا ہے۔",
      ],
    },
    {
      slug: "vyapari-anugyapti",
      title: "تاجر اجازت نامہ اور پاس",
      dek: "شناخت، لائسنس، اور خریدار کا پاس۔",
      body: [
        "فروخت کا اشتہار تاجر لائسنس مانگتا ہے۔ لائسنس شناخت کے بعد آتا ہے۔ رکھے جاتے ہیں آخری چار ہندسے۔",
        "کسی تاجر سے پہلی خرید پر اسی کا پاس مانگا جاتا ہے۔ پاس اس کے چار ہندسوں اور چار بے ترتیب ہندسوں سے بنتا ہے۔ وہ منسوخ کر سکتا ہے، اور دوبارہ دے بھی سکتا ہے۔",
      ],
    },
    {
      slug: "jokhim-viram",
      title: "خطرہ اور وقفہ",
      dek: "حد، تکمیل، اور بند ڈیسک۔",
      body: [
        "اشتہار کم سے کم تکمیل اور شناخت مانگ سکتا ہے۔ ادائیگی کی گھڑی کٹتے ہی کھلا سودا رک جاتا ہے۔",
        "انتظام ڈیسک بند کر سکتا ہے۔ بند ہونے پر نئی کتاب نہیں چلتی۔ یہ وقفہ خریدا نہیں جاتا — وہ کردار ڈیسک پر پہلے سے مقرر ہے۔",
      ],
    },
  ],
  faq: {
    title: "سوال",
    items: [
      { q: "کیا پاس ورڈ سائن اپ پر لازمی ہے؟", a: "نہیں۔ پہلے ایک بار کا کوڈ۔ پھر پوچھا جاتا ہے — اب بنائیں یا نہیں۔ نہیں تو کھاتے میں کبھی بھی بنا سکتے ہیں۔ Google اور X پر پاس ورڈ ہوتا ہی نہیں۔" },
      { q: "کیا کوڈ پیغام میں آئے گا؟", a: "نہیں۔ چھ ہندسے اسی سکرین پر ایک بار دکھتے ہیں۔ کوئی کیریئر پیغام نہیں بھیجا جاتا۔" },
      { q: "کسی بھی ملک کا نمبر؟", a: "فہرست میں ملک اور اس کا کوڈ ہے۔ ہندسے اتنے ہی جتنے اس ملک کے قومی نمبر میں ہوتے ہیں۔ شروع کا 0 نہیں۔" },
      { q: "صرف جی میل؟", a: "نہیں۔ ایک @، صاف ڈومین، اور دو حروف کا اختتام۔ جی میل صرف ایک جانی پہچانی مثال ہے، شرط نہیں۔" },
      { q: "میں انتظام کیسے بنوں؟", a: "سائن اپ سے نہیں۔ انتظام ڈیسک کا الگ کردار ہے۔" },
      { q: "پٹی رکتی کیوں ہے؟", a: "کرسر یا انگلی پٹی پر ہو تو قطار رکتی ہے۔ ہٹتے ہی پھر چلتی ہے۔" },
      { q: "کیا منصوبہ خود تجارت کرے گا؟", a: "نہیں۔ اصول میز یاد رکھتی ہے۔ سودا آپ ڈیسک پر دیتے ہیں۔" },
      { q: "محصول کہاں ہے؟", a: "اس صفحے پر چیک آؤٹ نہیں۔ خریدار اور فروخت کنندہ کا محصول انتظام ڈیسک پر رکھتا ہے۔" },
    ],
  },
  contact: {
    title: "رابطہ",
    lede: "ڈی ایل ایم کیش لیبز پرائیویٹ لمیٹڈ۔ یہ فارم پیغام میل باکس میں نہیں بھیجتا — بھیجنے پر وہ یہیں درج دکھتا ہے۔",
    name: "نام",
    email: "ای میل",
    topic: "موضوع",
    topics: ["سودا اٹکا", "ادائیگی نہیں ملی", "تاجر درخواست", "حفاظت", "دیگر"],
    message: "پیغام",
    send: "درج کریں",
    sent: "درج ہو گیا۔ کوئی میل نہیں گئی۔",
    invalid: "نام، درست ای میل، اور پیغام چاہیے۔",
  },
  legal: {
    title: "شرائط",
    body: [
      "اورویا ڈی ایل ایم کیش لیبز پرائیویٹ لمیٹڈ کا ڈیسک ہے۔ اس صفحے پر کوئی لائسنس نمبر نہیں لکھا گیا۔",
      "ای میل کھاتہ پاس ورڈ کے ساتھ ہیش ہوتا ہے۔ Google اور X اسی داخلے سے آتے ہیں جو اس ایپ میں جڑا ہے۔ موبائل کوڈ صرف سکرین پر ہے۔",
      "شناخت پر آخری چار ہندسے۔ پورا کاغذ جمع نہیں ہوتا۔ زنجیر پر نشر اس ڈیسک سے نہیں ہوتا۔",
      "اصول میز کا منصوبہ آپ کے براؤزر میں رہتا ہے اور خود حکم نہیں بھیجتا۔",
    ],
  },
  enter: {
    title: "داخلہ",
    lede: "ای میل لکھیں۔ اسی پتے سے Google یا X کھلتا ہے۔ براہ راست داخلہ ایک بار کے کوڈ سے ہوتا ہے۔ پاس ورڈ ضروری نہیں۔",
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
    laterBody: "پاس ورڈ اختیاری ہے۔ کوڈ کے بعد ابھی بنائیں، یا کھاتے میں کبھی بھی۔ محفوظ ہوتے ہی یک طرفہ ہیش ہوتا ہے۔",
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
    mailHint: "یہ کوڈ صرف اسی سکرین پر ہے۔ کوئی میل نہیں بھیجی گئی۔ پانچ منٹ۔",
    googleUse: "اس پتے سے Google",
    xUse: "اس پتے سے X",
    direct: "براہ راست داخلہ — ایک بار کا کوڈ",
    passAsk: "کوڈ مل گیا۔ پاس ورڈ آپ کی مرضی ہے۔ ابھی بنائیں، یا کھاتے میں کبھی بھی۔ وہ یک طرفہ ہیش ہوتا ہے۔",
    noMailPass: "اس ای میل پر پاس ورڈ نہیں۔ کوڈ سے داخل ہوں۔",
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
      pdigit: "ایک ہندسہ",
    },
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
    deskRole: "ڈیسک کا کردار الگ ہے — اوپر والی نشست۔ سائن اپ سے انتظام نہیں بنتا۔",
  },
  guides: {
    buy: {
      title: "خرید",
      lede: "سکہ اور رقم چنیں، ادائیگی کی پٹری ملائیں، اشتہار لیں۔ روپیہ باہر جاتا ہے۔ سکہ چھوڑنے تک ڈیسک پر رہتا ہے۔",
      steps: ["سکہ اور رقم چنیں۔", "یو پی آئی، آئی ایم پی ایس یا بینک جیسی پٹری ملائیں۔", "اشتہار لیں اور وقت میں ادائیگی کریں۔", "تاجر سکہ چھوڑے، یا اٹکاوٹ پر اپیل۔"],
      cta: "کتاب کھولیں",
    },
    sell: {
      title: "فروخت",
      lede: "فروخت کا اشتہار تاجر اجازت نامے کے بعد۔ دام، حد اور پٹری آپ رکھتے ہیں۔ خریدار کی ادائیگی کے بعد آپ چھوڑتے ہیں۔",
      steps: ["شناخت کے آخری چار ہندسے اور اجازت نامہ۔", "دام، کم از کم، زیادہ سے زیادہ اور پٹری لکھیں۔", "خریدار وقت میں ادائیگی کرے۔", "سکہ چھوڑیں، یا وجہ کے ساتھ اپیل۔"],
      cta: "اشتہار دیں",
    },
    merchant: {
      title: "تاجر",
      lede: "بڑی میزوں پر تاجر کے درجے ہوتے ہیں۔ یہاں ترتیب سیدھی ہے — رکن، شناخت، اجازت نامہ، پاس۔ درجے کا نام نہیں بکتا۔",
      steps: ["داخلے سے رکن۔", "شناخت میں صرف آخری چار ہندسے۔", "اجازت نامے کے بعد فروخت کا اشتہار۔", "خریدار کا پاس آپ دیتے یا روکتے ہیں۔", "تکمیل اور آن لائن حالت کتاب پر دکھتی ہے۔"],
      cta: "شناخت کھولیں",
    },
    help: {
      title: "مدد",
      lede: "سودا، ادائیگی، ایسکرو، اپیل اور پٹی — وہی سوال جو ہر ہمسر میز پر آتے ہیں۔",
      blocks: [
        { t: "ایسکرو", d: "سکہ تاجر کے چھوڑنے تک رکا رہتا ہے۔ اس سے پہلے خریدار کو باقی نہیں ملتا।" },
        { t: "ادائیگی", d: "روپیہ چنی ہوئی پٹری پر، ڈیسک کے باہر جاتا ہے۔ نام وہی رکھیں جو ذریعے پر ہے۔" },
        { t: "گھڑی", d: "ادائیگی کا وقت کٹتے ہی کھلا سودا رک جاتا ہے۔" },
        { t: "اپیل", d: "ادائیگی ہو چکی ہو اور سکہ نہ چھوٹے، تو کھلے سودے پر وجہ چنیں۔" },
        { t: "پاس", d: "کسی تاجر سے پہلی خرید پر اسی کا پاس چاہیے۔ بعد کی خرید پر نہیں، جب تک وہ پاس نہ روک دے۔" },
        { t: "پٹی", d: "ڈالر کی قطار اشتہار کا روپیہ دام نہیں بدلتی۔ ہری نقطہ زندہ ریٹ ہے۔ ڈبہ نہیں۔" },
      ],
    },
    fees: {
      title: "محصول",
      lede: "خریدار اور فروخت کنندہ کا محصول انتظام رکھتا ہے — فیصد، مستقل سکہ، یا دونوں۔ اس صفحے پر چیک آؤٹ نہیں۔",
      rows: [
        { t: "خریدار", d: "سودا لیتے وقت انتظام کا طے شدہ فیصد یا مستقل حصہ۔" },
        { t: "فروخت کنندہ", d: "اشتہار والے تاجر پر الگ محصول، اسی طرح فیصد یا مستقل۔" },
        { t: "باہر منتقلی", d: "ایک حد کے نیچے انتظام خودکار یا خود چن سکتا ہے۔ حد ڈیسک پر بدلتی ہے۔" },
      ],
      note: "محصول بدلنا انتظام کا کردار ہے۔ سائن اپ سے وہ کردار نہیں ملتا۔",
    },
  },
};

const packs: Record<Lang, SiteCopy> = { hi, en, ur };

export function useSite() {
  const lang = useDesk((state) => state.lang);
  return { lang, s: packs[lang] };
}
