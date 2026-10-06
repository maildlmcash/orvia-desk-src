const ITERATIONS = 600_000;
const LEGACY_ITERATIONS = 210_000;

function toHex(bytes: Uint8Array) {
  return [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function fromHex(hex: string) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i += 1) bytes[i] = Number.parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  return bytes;
}

export async function hashSecret(secret: string, saltHex?: string, iterations = ITERATIONS) {
  const salt = saltHex ? fromHex(saltHex) : crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations, hash: "SHA-256" }, key, 256);
  return { salt: toHex(salt), hash: toHex(new Uint8Array(bits)), iterations };
}

export async function verifySecret(secret: string, salt: string, hash: string, iterations = LEGACY_ITERATIONS) {
  const next = await hashSecret(secret, salt, iterations);
  if (next.hash.length !== hash.length) return false;
  let diff = 0;
  for (let i = 0; i < hash.length; i += 1) diff |= next.hash.charCodeAt(i) ^ hash.charCodeAt(i);
  return diff === 0;
}

export function randomCode() {
  const n = crypto.getRandomValues(new Uint32Array(1))[0] % 1_000_000;
  return String(n).padStart(6, "0");
}

export type MailIssue = "empty" | "space" | "at" | "dots" | "domain" | "tld";

const KNOWN = new Set(["gmail.com", "outlook.com", "hotmail.com", "yahoo.com", "icloud.com", "proton.me", "protonmail.com", "live.com"]);

export function mailIssues(raw: string): MailIssue[] {
  const value = raw.trim();
  const issues: MailIssue[] = [];
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
  if (labels.length < 2 || labels.some((label) => !label || !/^[a-z0-9-]+$/i.test(label) || label.startsWith("-") || label.endsWith("-"))) {
    issues.push("domain");
  }
  const tld = labels[labels.length - 1] ?? "";
  if (tld.length < 2) issues.push("tld");
  return issues;
}

export function mailHint(raw: string) {
  const domain = raw.trim().split("@")[1]?.toLowerCase();
  if (!domain || mailIssues(raw).length) return null;
  return KNOWN.has(domain) ? "known" : "custom";
}

export function isGoogleMail(raw: string) {
  const domain = raw.trim().split("@")[1]?.toLowerCase();
  return domain === "gmail.com" || domain === "googlemail.com";
}

export function passwordIssues(raw: string) {
  return {
    len: raw.length >= 10,
    letter: /[A-Za-z\u0900-\u097F\u0600-\u06FF]/.test(raw),
    digit: /\d/.test(raw),
  };
}

export function passwordReady(raw: string) {
  const issues = passwordIssues(raw);
  return issues.len && issues.letter && issues.digit;
}

export type PhoneIssue = "empty" | "chars" | "trunk" | "short" | "long";

export function phoneIssues(national: string, min: number, max: number): PhoneIssue[] {
  if (!national) return ["empty"];
  if (/\D/.test(national)) return ["chars"];
  const issues: PhoneIssue[] = [];
  if (national.startsWith("0")) issues.push("trunk");
  if (national.length < min) issues.push("short");
  if (national.length > max) issues.push("long");
  return issues;
}
