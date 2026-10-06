import type { Lang } from "@/lib/p2p/types";

export type Country = {
  iso: string;
  dial: string;
  min: number;
  max: number;
  hi: string;
  en: string;
  ur: string;
};

export const COUNTRIES: readonly Country[] = [
  { iso: "IN", dial: "91", min: 10, max: 10, hi: "भारत", en: "India", ur: "بھارت" },
  { iso: "PK", dial: "92", min: 10, max: 10, hi: "पाकिस्तान", en: "Pakistan", ur: "پاکستان" },
  { iso: "BD", dial: "880", min: 10, max: 10, hi: "बांग्लादेश", en: "Bangladesh", ur: "بنگلہ دیش" },
  { iso: "NP", dial: "977", min: 10, max: 10, hi: "नेपाल", en: "Nepal", ur: "نیپال" },
  { iso: "LK", dial: "94", min: 9, max: 9, hi: "श्रीलंका", en: "Sri Lanka", ur: "سری لنکا" },
  { iso: "AE", dial: "971", min: 9, max: 9, hi: "संयुक्त अरब अमीरात", en: "United Arab Emirates", ur: "متحدہ عرب امارات" },
  { iso: "SA", dial: "966", min: 9, max: 9, hi: "सऊदी अरब", en: "Saudi Arabia", ur: "سعودی عرب" },
  { iso: "QA", dial: "974", min: 8, max: 8, hi: "क़तर", en: "Qatar", ur: "قطر" },
  { iso: "KW", dial: "965", min: 8, max: 8, hi: "कुवैत", en: "Kuwait", ur: "کویت" },
  { iso: "OM", dial: "968", min: 8, max: 8, hi: "ओमान", en: "Oman", ur: "عمان" },
  { iso: "BH", dial: "973", min: 8, max: 8, hi: "बहरीन", en: "Bahrain", ur: "بحرین" },
  { iso: "US", dial: "1", min: 10, max: 10, hi: "संयुक्त राज्य", en: "United States", ur: "ریاستہائے متحدہ" },
  { iso: "CA", dial: "1", min: 10, max: 10, hi: "कनाडा", en: "Canada", ur: "کینیڈا" },
  { iso: "GB", dial: "44", min: 10, max: 10, hi: "ब्रिटेन", en: "United Kingdom", ur: "برطانیہ" },
  { iso: "DE", dial: "49", min: 10, max: 11, hi: "जर्मनी", en: "Germany", ur: "جرمنی" },
  { iso: "FR", dial: "33", min: 9, max: 9, hi: "फ़्रांस", en: "France", ur: "فرانس" },
  { iso: "NG", dial: "234", min: 10, max: 10, hi: "नाइजीरिया", en: "Nigeria", ur: "نائجیریا" },
  { iso: "KE", dial: "254", min: 9, max: 9, hi: "केन्या", en: "Kenya", ur: "کینیا" },
  { iso: "ZA", dial: "27", min: 9, max: 9, hi: "दक्षिण अफ़्रीका", en: "South Africa", ur: "جنوبی افریقہ" },
  { iso: "AU", dial: "61", min: 9, max: 9, hi: "ऑस्ट्रेलिया", en: "Australia", ur: "آسٹریلیا" },
  { iso: "SG", dial: "65", min: 8, max: 8, hi: "सिंगापुर", en: "Singapore", ur: "سنگاپور" },
  { iso: "MY", dial: "60", min: 9, max: 10, hi: "मलेशिया", en: "Malaysia", ur: "ملائیشیا" },
  { iso: "ID", dial: "62", min: 10, max: 12, hi: "इंडोनेशिया", en: "Indonesia", ur: "انڈونیشیا" },
  { iso: "PH", dial: "63", min: 10, max: 10, hi: "फ़िलीपींस", en: "Philippines", ur: "فلپائن" },
  { iso: "TH", dial: "66", min: 9, max: 9, hi: "थाईलैंड", en: "Thailand", ur: "تھائی لینڈ" },
  { iso: "VN", dial: "84", min: 9, max: 9, hi: "वियतनाम", en: "Vietnam", ur: "ویتنام" },
  { iso: "JP", dial: "81", min: 10, max: 10, hi: "जापान", en: "Japan", ur: "جاپان" },
  { iso: "KR", dial: "82", min: 9, max: 10, hi: "दक्षिण कोरिया", en: "South Korea", ur: "جنوبی کوریا" },
  { iso: "CN", dial: "86", min: 11, max: 11, hi: "चीन", en: "China", ur: "چین" },
  { iso: "BR", dial: "55", min: 11, max: 11, hi: "ब्राज़ील", en: "Brazil", ur: "برازیل" },
  { iso: "MX", dial: "52", min: 10, max: 10, hi: "मेक्सिको", en: "Mexico", ur: "میکسیکو" },
  { iso: "TR", dial: "90", min: 10, max: 10, hi: "तुर्की", en: "Turkey", ur: "ترکی" },
  { iso: "RU", dial: "7", min: 10, max: 10, hi: "रूस", en: "Russia", ur: "روس" },
  { iso: "UA", dial: "380", min: 9, max: 9, hi: "यूक्रेन", en: "Ukraine", ur: "یوکرین" },
  { iso: "EG", dial: "20", min: 10, max: 10, hi: "मिस्र", en: "Egypt", ur: "مصر" },
  { iso: "HK", dial: "852", min: 8, max: 8, hi: "हांगकांग", en: "Hong Kong", ur: "ہانگ کانگ" },
  { iso: "TW", dial: "886", min: 9, max: 9, hi: "ताइवान", en: "Taiwan", ur: "تائیوان" },
  { iso: "NZ", dial: "64", min: 8, max: 10, hi: "न्यूज़ीलैंड", en: "New Zealand", ur: "نیوزی لینڈ" },
  { iso: "IE", dial: "353", min: 9, max: 9, hi: "आयरलैंड", en: "Ireland", ur: "آئرلینڈ" },
  { iso: "ES", dial: "34", min: 9, max: 9, hi: "स्पेन", en: "Spain", ur: "سپین" },
  { iso: "IT", dial: "39", min: 9, max: 10, hi: "इटली", en: "Italy", ur: "اٹلی" },
];

export function countryName(country: Country, lang: Lang) {
  return country[lang];
}

export function lengthLabel(country: Country) {
  return country.min === country.max ? String(country.min) : `${country.min}–${country.max}`;
}
