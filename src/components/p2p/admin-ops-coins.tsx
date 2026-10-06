import { useState } from "react";
import { numFlex } from "@/lib/p2p/format";
import { coinLabel, useI18n } from "@/lib/p2p/i18n";
import { useDesk } from "@/lib/p2p/store";
import { Button, fieldClass, Field, Panel } from "./ui";

export function Coins() {
  const { t } = useI18n();
  const coins = useDesk((state) => state.coins);
  const addCoin = useDesk((state) => state.addCoin);
  const [symbol, setSymbol] = useState("");
  const [label, setLabel] = useState("");
  const [price, setPrice] = useState("1");
  const [minWithdraw, setMinWithdraw] = useState("1");
  const [deposits, setDeposits] = useState(true);
  const [withdrawals, setWithdrawals] = useState(true);
  return (
    <div className="grid gap-3">
      <form
        className="grid gap-3 rounded-md border border-line bg-surface p-4"
        onSubmit={(event) => {
          event.preventDefault();
          const ok = addCoin({
            symbol,
            label,
            price: Number(price),
            minWithdraw: Number(minWithdraw),
            deposits,
            withdrawals,
          });
          if (ok) {
            setSymbol("");
            setLabel("");
          }
        }}
      >
        <h2 className="font-semibold">{t("admin.coinForm")}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label={t("admin.symbol")}>
            <input className={fieldClass} maxLength={5} value={symbol} onChange={(event) => setSymbol(event.target.value.toUpperCase())} />
          </Field>
          <Field label={t("admin.coinName")}>
            <input className={fieldClass} value={label} onChange={(event) => setLabel(event.target.value)} />
          </Field>
          <Field label={t("admin.refPrice")}>
            <input className={fieldClass} inputMode="decimal" value={price} onChange={(event) => setPrice(event.target.value)} />
          </Field>
          <Field label={t("admin.minOut")}>
            <input className={fieldClass} inputMode="decimal" value={minWithdraw} onChange={(event) => setMinWithdraw(event.target.value)} />
          </Field>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant={deposits ? "primary" : "line"} onClick={() => setDeposits((value) => !value)}>
            {t("admin.deposits")}: {deposits ? t("admin.on") : t("admin.off")}
          </Button>
          <Button type="button" variant={withdrawals ? "primary" : "line"} onClick={() => setWithdrawals((value) => !value)}>
            {t("admin.withdrawalsOn")}: {withdrawals ? t("admin.on") : t("admin.off")}
          </Button>
        </div>
        <Button type="submit">{t("admin.saveCoin")}</Button>
      </form>
      {coins.map((coin) => (
        <CoinRow key={coin.symbol} symbol={coin.symbol} />
      ))}
    </div>
  );
}

function CoinRow({ symbol }: { symbol: string }) {
  const { lang, t } = useI18n();
  const coin = useDesk((state) => state.coins.find((item) => item.symbol === symbol));
  const quotes = useDesk((state) => state.quotes);
  const updateCoin = useDesk((state) => state.updateCoin);
  const [price, setPrice] = useState(coin ? String(coin.price) : "");
  const [minWithdraw, setMinWithdraw] = useState(coin?.minWithdraw != null ? String(coin.minWithdraw) : "0");
  if (!coin) return null;
  return (
    <Panel className="grid gap-3 p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="font-mono font-semibold">{coin.symbol}</p>
          <p className="text-sm text-muted">
            {coin.label || coinLabel(coin.symbol, lang) || t("admin.newCoin")} · {numFlex(quotes[coin.symbol] ?? coin.price, lang)}
          </p>
        </div>
        <Button variant="line" onClick={() => updateCoin(coin.symbol, { listed: !coin.listed })}>
          {coin.listed ? t("admin.unlist") : t("admin.list")}
        </Button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label={t("admin.refPrice")}>
          <input className={fieldClass} inputMode="decimal" value={price} onChange={(event) => setPrice(event.target.value)} />
        </Field>
        <Field label={t("admin.minOut")}>
          <input className={fieldClass} inputMode="decimal" value={minWithdraw} onChange={(event) => setMinWithdraw(event.target.value)} />
        </Field>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button variant="line" onClick={() => updateCoin(coin.symbol, { deposits: coin.deposits === false })}>
          {t("admin.deposits")}: {coin.deposits === false ? t("admin.off") : t("admin.on")}
        </Button>
        <Button variant="line" onClick={() => updateCoin(coin.symbol, { withdrawals: coin.withdrawals === false })}>
          {t("admin.withdrawalsOn")}: {coin.withdrawals === false ? t("admin.off") : t("admin.on")}
        </Button>
        <Button
          onClick={() =>
            updateCoin(coin.symbol, {
              price: Number(price),
              minWithdraw: Number(minWithdraw),
            })
          }
        >
          {t("admin.saveCoin")}
        </Button>
      </div>
    </Panel>
  );
}
