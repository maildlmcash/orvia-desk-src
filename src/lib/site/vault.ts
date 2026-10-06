import { authClient } from "@/lib/auth/client";

/** Store an email password in the account vault as well as the local hash. */
export async function vaultEmailPassword(email: string, password: string) {
  const name = email.split("@")[0] || "ORVIA";
  const created = await authClient.signUp.email({ email, password, name });
  if (!created.error) return true;
  const signed = await authClient.signIn.email({ email, password });
  return !signed.error;
}
