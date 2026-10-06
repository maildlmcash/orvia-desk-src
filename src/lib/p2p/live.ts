import { LIVE_PAIRS } from "./catalog";
import { useDesk } from "./store";

const STREAM = `wss://data-stream.binance.vision/stream?streams=${LIVE_PAIRS.map((item) => `${item.pair.toLowerCase()}@miniTicker`).join("/")}`;
const REST = `https://data-api.binance.vision/api/v3/ticker/24hr?symbols=${encodeURIComponent(JSON.stringify(LIVE_PAIRS.map((item) => item.pair)))}`;

const pairSymbol = new Map(LIVE_PAIRS.map((item) => [item.pair, item.symbol]));

function readTicker(symbol: string, last: string, open: string) {
  if (!symbol) return null;
  const price = Number(last);
  const opened = Number(open);
  if (!(price > 0)) return null;
  const move = opened > 0 ? ((price - opened) / opened) * 100 : 0;
  return { symbol, price, move };
}

export function startLiveQuotes() {
  let alive = true;
  let socket: WebSocket | null = null;
  let retry = 800;
  let retryTimer = 0;
  let flushTimer = 0;
  const buffer: { symbol: string; price: number; move: number }[] = [];

  const flush = () => {
    flushTimer = 0;
    if (!buffer.length) return;
    const rows = buffer.splice(0, buffer.length);
    useDesk.getState().applyLive(rows);
  };

  const push = (row: { symbol: string; price: number; move: number } | null) => {
    if (!row) return;
    buffer.push(row);
    if (!flushTimer) flushTimer = window.setTimeout(flush, 50);
  };

  const snapshot = () => {
    void fetch(REST)
      .then((response) => (response.ok ? response.json() : null))
      .then((rows: { symbol?: string; lastPrice?: string; priceChangePercent?: string }[] | null) => {
        if (!alive || !Array.isArray(rows)) return;
        for (const row of rows) {
          const symbol = row.symbol ? pairSymbol.get(row.symbol) : undefined;
          if (!symbol || !row.lastPrice) continue;
          const price = Number(row.lastPrice);
          const move = Number(row.priceChangePercent);
          if (price > 0) buffer.push({ symbol, price, move: Number.isFinite(move) ? move : 0 });
        }
        flush();
      })
      .catch(() => undefined);
  };

  const open = () => {
    if (!alive) return;
    socket = new WebSocket(STREAM);
    socket.onopen = () => {
      retry = 800;
    };
    socket.onmessage = (event) => {
      try {
        const message = JSON.parse(String(event.data)) as { data?: { s?: string; c?: string; o?: string } };
        const data = message.data;
        if (!data?.s || !data.c) return;
        push(readTicker(pairSymbol.get(data.s) ?? "", data.c, data.o ?? ""));
      } catch {
        /* ignore a bad frame */
      }
    };
    socket.onclose = () => {
      if (!alive) return;
      retryTimer = window.setTimeout(open, retry);
      retry = Math.min(retry * 2, 8000);
    };
  };

  snapshot();
  open();
  const poll = window.setInterval(() => {
    if (socket?.readyState !== WebSocket.OPEN) snapshot();
  }, 3000);

  return () => {
    alive = false;
    window.clearTimeout(flushTimer);
    window.clearTimeout(retryTimer);
    window.clearInterval(poll);
    socket?.close();
  };
}
