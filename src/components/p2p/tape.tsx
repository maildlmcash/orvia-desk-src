import { sortCoins, LIVE_SYMBOLS } from "@/lib/p2p/catalog";
import { num } from "@/lib/p2p/format";
import type { Coin, Lang } from "@/lib/p2p/types";

function spot(n: number, lang: Lang) {
  return `$${num(n, lang, n >= 100 ? 2 : 4)}`;
}

export function Tape({
  coins,
  quotes,
  moves,
  lang,
  label,
}: {
  coins: Coin[];
  quotes: Record<string, number>;
  moves: Record<string, number> | undefined;
  lang: Lang;
  label: string;
}) {
  const rows = sortCoins(coins.filter((coin) => coin.listed));
  const loop = [rows, rows];
  return (
    <div
      className="orvia-tape-row"
      dir="ltr"
      role="region"
      aria-label={label}
      onPointerEnter={(event) => event.currentTarget.classList.add("is-held")}
      onPointerLeave={(event) => event.currentTarget.classList.remove("is-held")}
    >
      <div className="orvia-tape">
        <div className="orvia-tape-track">
          {loop.map((group, groupIndex) => (
            <div key={groupIndex} className="flex" aria-hidden={groupIndex === 1}>
              {group.map((coin) => {
                const quote = quotes[coin.symbol] ?? coin.price;
                const live = LIVE_SYMBOLS.has(coin.symbol);
                const move = moves?.[coin.symbol];
                const pct = live && move != null ? move : coin.price > 0 ? ((quote - coin.price) / coin.price) * 100 : 0;
                const up = pct >= 0;
                return (
                  <span key={coin.symbol} className="orvia-quote">
                    <span className={live ? "orvia-pip orvia-pip-live" : "orvia-pip"} />
                    <span className="font-sans text-xs font-semibold tracking-wide">{coin.symbol}</span>
                    <span>{spot(quote, lang)}</span>
                    <span className={up ? "text-buy" : "text-sell"}>
                      {up ? "+" : ""}
                      {num(pct, lang, Math.abs(pct) > 0 && Math.abs(pct) < 0.1 ? 3 : 2)}%
                    </span>
                    <span className="text-muted" aria-hidden="true">
                      ·
                    </span>
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
