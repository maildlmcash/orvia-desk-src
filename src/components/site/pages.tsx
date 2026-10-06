import { Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { fieldClass } from "@/components/p2p/ui";
import { useDesk } from "@/lib/p2p/store";
import { useSite } from "@/lib/site/copy";
import { mailIssues } from "@/lib/site/secret";

function Wrap({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-3xl px-4 py-12">{children}</div>;
}

export function HomePage() {
  const { s } = useSite();
  return (
    <Wrap>
      <p className="text-xs font-semibold tracking-[0.22em] text-primary">{s.company}</p>
      <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{s.home.title}</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted">{s.home.lede}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/desk" className="inline-flex min-h-11 items-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-fg">
          {s.home.open}
        </Link>
        <Link to="/buy" className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-semibold">
          {s.nav.buy}
        </Link>
        <Link to="/sell" className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-semibold">
          {s.nav.sell}
        </Link>
        <Link to="/login" className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-semibold">
          {s.home.enter}
        </Link>
      </div>
      <p className="mt-4 text-sm text-muted">{s.liveNote}</p>
      <h2 className="mt-14 text-xl font-semibold">{s.home.pillarsTitle}</h2>
      <ol className="mt-4 divide-y divide-line border-y border-line">
        {s.home.pillars.map((item, index) => (
          <li key={item.t} className="grid gap-1 py-4 sm:grid-cols-[4rem_1fr]">
            <span className="font-mono text-sm text-primary">0{index + 1}</span>
            <div>
              <p className="font-semibold">{item.t}</p>
              <p className="mt-1 text-sm leading-6 text-muted">{item.d}</p>
            </div>
          </li>
        ))}
      </ol>
      <h2 className="mt-14 text-xl font-semibold">{s.home.rolesTitle}</h2>
      <dl className="mt-4 grid gap-4 sm:grid-cols-2">
        {s.home.roles.map((item) => (
          <div key={item.t} className="border-s-2 border-primary ps-3">
            <dt className="font-semibold">{item.t}</dt>
            <dd className="mt-1 text-sm leading-6 text-muted">{item.d}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-14 flex items-baseline justify-between gap-3">
        <h2 className="text-xl font-semibold">{s.home.journalTitle}</h2>
        <Link to="/journal" className="text-sm font-semibold text-primary">
          {s.journal.title}
        </Link>
      </div>
      <ul className="mt-4 grid gap-4">
        {s.posts.map((post) => (
          <li key={post.slug}>
            <Link to="/journal/$slug" params={{ slug: post.slug }} className="group block">
              <p className="font-semibold group-hover:text-primary">{post.title}</p>
              <p className="mt-1 text-sm text-muted">{post.dek}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Wrap>
  );
}

export function ProductPage() {
  const { s } = useSite();
  return (
    <Wrap>
      <h1 className="text-4xl font-semibold">{s.product.title}</h1>
      <p className="mt-4 text-base leading-7 text-muted">{s.product.lede}</p>
      <ol className="mt-8 divide-y divide-line border-y border-line">
        {s.product.points.map((item, index) => (
          <li key={item.t} className="grid gap-1 py-4 sm:grid-cols-[4rem_1fr]">
            <span className="font-mono text-sm text-primary">0{index + 1}</span>
            <div>
              <p className="font-semibold">{item.t}</p>
              <p className="mt-1 text-sm leading-6 text-muted">{item.d}</p>
            </div>
          </li>
        ))}
      </ol>
      <Link to="/desk" className="mt-8 inline-flex min-h-11 items-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-fg">
        {s.nav.desk}
      </Link>
    </Wrap>
  );
}

type Plan = { id: string; name: string; symbol: string; side: "buy" | "sell"; max: string; note: string };

export function ServicesPage() {
  const { s } = useSite();
  const coins = useDesk((state) => state.coins);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("USDT");
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [max, setMax] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("orvia-rules-v1");
      if (raw) setPlans(JSON.parse(raw) as Plan[]);
    } catch {
      /* ignore a bad local plan */
    }
  }, []);

  function save(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || !max.trim() || Number(max) <= 0) return;
    const next = [{ id: crypto.randomUUID(), name: name.trim(), symbol, side, max: max.trim(), note: note.trim() }, ...plans].slice(0, 20);
    setPlans(next);
    localStorage.setItem("orvia-rules-v1", JSON.stringify(next));
    setName("");
    setMax("");
    setNote("");
  }

  function remove(id: string) {
    const next = plans.filter((plan) => plan.id !== id);
    setPlans(next);
    localStorage.setItem("orvia-rules-v1", JSON.stringify(next));
  }

  return (
    <Wrap>
      <h1 className="text-4xl font-semibold">{s.services.title}</h1>
      <p className="mt-4 text-base leading-7 text-muted">{s.services.lede}</p>
      <ol className="mt-8 divide-y divide-line border-y border-line">
        {s.services.items.map((item, index) => (
          <li key={item.t} className="grid gap-1 py-4 sm:grid-cols-[4rem_1fr]">
            <span className="font-mono text-sm text-primary">0{index + 1}</span>
            <div>
              <p className="font-semibold">{item.t}</p>
              <p className="mt-1 text-sm leading-6 text-muted">{item.d}</p>
            </div>
          </li>
        ))}
      </ol>
      <form className="mt-10 grid gap-3 border-t border-line pt-8" onSubmit={save}>
        <h2 className="text-xl font-semibold">{s.services.padTitle}</h2>
        <p className="text-sm text-muted">{s.services.padNote}</p>
        <label className="grid gap-1 text-sm">
          <span className="text-muted">{s.services.name}</span>
          <input className={fieldClass} value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1 text-sm">
            <span className="text-muted">{s.services.coin}</span>
            <select className={fieldClass} value={symbol} onChange={(event) => setSymbol(event.target.value)}>
              {coins
                .filter((coin) => coin.listed)
                .map((coin) => (
                  <option key={coin.symbol} value={coin.symbol}>
                    {coin.symbol}
                  </option>
                ))}
            </select>
          </label>
          <label className="grid gap-1 text-sm">
            <span className="text-muted">{s.services.side}</span>
            <select className={fieldClass} value={side} onChange={(event) => setSide(event.target.value as "buy" | "sell")}>
              <option value="buy">{s.services.buy}</option>
              <option value="sell">{s.services.sell}</option>
            </select>
          </label>
        </div>
        <label className="grid gap-1 text-sm">
          <span className="text-muted">{s.services.max}</span>
          <input className={fieldClass} inputMode="decimal" value={max} onChange={(event) => setMax(event.target.value)} />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-muted">{s.services.note}</span>
          <textarea className={`${fieldClass} h-24 py-2`} value={note} onChange={(event) => setNote(event.target.value)} />
        </label>
        <button type="submit" className="min-h-11 rounded-md bg-primary text-sm font-semibold text-primary-fg">
          {s.services.save}
        </button>
      </form>
      <h3 className="mt-8 font-semibold">{s.services.saved}</h3>
      {plans.length === 0 ? <p className="mt-2 text-sm text-muted">{s.services.empty}</p> : null}
      <ul className="mt-3 grid gap-2">
        {plans.map((plan) => (
          <li key={plan.id} className="flex items-start justify-between gap-3 border-b border-line py-3">
            <div>
              <p className="font-semibold">{plan.name}</p>
              <p className="text-sm text-muted">
                {plan.symbol} · {plan.side === "buy" ? s.services.buy : s.services.sell} · {plan.max}
              </p>
              {plan.note ? <p className="mt-1 text-sm">{plan.note}</p> : null}
            </div>
            <button type="button" className="min-h-11 shrink-0 text-sm font-semibold text-sell" onClick={() => remove(plan.id)}>
              {s.services.remove}
            </button>
          </li>
        ))}
      </ul>
      <Link to="/post" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-primary">
        {s.services.toPost}
      </Link>
    </Wrap>
  );
}

export function PricingPage() {
  const { s } = useSite();
  return (
    <Wrap>
      <h1 className="text-4xl font-semibold">{s.pricing.title}</h1>
      <p className="mt-4 text-base leading-7 text-muted">{s.pricing.lede}</p>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-line text-start">
              {s.pricing.heads.map((head) => (
                <th key={head} className="px-2 py-3 font-semibold">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {s.pricing.rows.map((row) => (
              <tr key={row.name} className="border-b border-line">
                <th className="px-2 py-3 text-start font-medium">{row.name}</th>
                {row.cells.map((cell, index) => (
                  <td key={`${row.name}-${index}`} className="px-2 py-3 text-muted">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-muted">{s.pricing.note}</p>
    </Wrap>
  );
}

export function SecurityPage() {
  const { s } = useSite();
  return (
    <Wrap>
      <h1 className="text-4xl font-semibold">{s.security.title}</h1>
      <p className="mt-4 text-base leading-7 text-muted">{s.security.lede}</p>
      <ul className="mt-8 grid gap-5">
        {s.security.points.map((item) => (
          <li key={item.t}>
            <p className="font-semibold">{item.t}</p>
            <p className="mt-1 text-sm leading-6 text-muted">{item.d}</p>
          </li>
        ))}
      </ul>
    </Wrap>
  );
}

export function AboutPage() {
  const { s } = useSite();
  return (
    <Wrap>
      <p className="text-xs font-semibold tracking-[0.22em] text-primary">{s.company}</p>
      <h1 className="mt-3 text-4xl font-semibold">{s.about.title}</h1>
      <p className="mt-4 text-base leading-7 text-muted">{s.about.lede}</p>
      <ul className="mt-8 grid gap-4">
        {s.about.points.map((point) => (
          <li key={point} className="border-s-2 border-primary ps-3 text-sm leading-6">
            {point}
          </li>
        ))}
      </ul>
    </Wrap>
  );
}

export function JournalPage() {
  const { s } = useSite();
  return (
    <Wrap>
      <h1 className="text-4xl font-semibold">{s.journal.title}</h1>
      <p className="mt-3 text-muted">{s.journal.lede}</p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {s.posts.map((post) => (
          <li key={post.slug} className="py-4">
            <Link to="/journal/$slug" params={{ slug: post.slug }}>
              <p className="text-lg font-semibold">{post.title}</p>
              <p className="mt-1 text-sm text-muted">{post.dek}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Wrap>
  );
}

export function JournalPost({ slug }: { slug: string }) {
  const { s } = useSite();
  const post = s.posts.find((item) => item.slug === slug);
  if (!post) {
    return (
      <Wrap>
        <p>{s.journal.missing}</p>
        <Link to="/journal" className="mt-4 inline-flex min-h-11 items-center font-semibold text-primary">
          {s.journal.back}
        </Link>
      </Wrap>
    );
  }
  return (
    <Wrap>
      <Link to="/journal" className="text-sm font-semibold text-primary">
        {s.journal.back}
      </Link>
      <h1 className="mt-3 text-4xl font-semibold">{post.title}</h1>
      <p className="mt-3 text-muted">{post.dek}</p>
      <div className="mt-6 grid gap-4">
        {post.body.map((paragraph) => (
          <p key={paragraph} className="leading-7">
            {paragraph}
          </p>
        ))}
      </div>
    </Wrap>
  );
}

export function FaqPage() {
  const { s } = useSite();
  const [open, setOpen] = useState(0);
  return (
    <Wrap>
      <h1 className="text-4xl font-semibold">{s.faq.title}</h1>
      <div className="mt-6 divide-y divide-line border-y border-line">
        {s.faq.items.map((item, index) => (
          <div key={item.q}>
            <button
              type="button"
              className="flex min-h-11 w-full items-center justify-between gap-3 py-3 text-start font-semibold"
              aria-expanded={open === index}
              onClick={() => setOpen(open === index ? -1 : index)}
            >
              {item.q}
            </button>
            {open === index ? <p className="pb-4 text-sm leading-6 text-muted">{item.a}</p> : null}
          </div>
        ))}
      </div>
    </Wrap>
  );
}

export function ContactPage() {
  const { s } = useSite();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(s.contact.topics[0] ?? "");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [bad, setBad] = useState(false);

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!name.trim() || mailIssues(email).length || !message.trim()) {
      setBad(true);
      setSent(false);
      return;
    }
    setBad(false);
    setSent(true);
  }

  return (
    <Wrap>
      <h1 className="text-4xl font-semibold">{s.contact.title}</h1>
      <p className="mt-4 text-sm leading-6 text-muted">{s.contact.lede}</p>
      <form className="mt-6 grid gap-3" onSubmit={submit}>
        <label className="grid gap-1 text-sm">
          <span className="text-muted">{s.contact.name}</span>
          <input className={fieldClass} value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-muted">{s.contact.email}</span>
          <input className={fieldClass} inputMode="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-muted">{s.contact.topic}</span>
          <select className={fieldClass} value={topic} onChange={(event) => setTopic(event.target.value)}>
            {s.contact.topics.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-muted">{s.contact.message}</span>
          <textarea className={`${fieldClass} h-28 py-2`} value={message} onChange={(event) => setMessage(event.target.value)} />
        </label>
        <button type="submit" className="min-h-11 rounded-md bg-primary text-sm font-semibold text-primary-fg">
          {s.contact.send}
        </button>
        {bad ? <p className="text-sm text-sell">{s.contact.invalid}</p> : null}
        {sent ? <p className="text-sm text-buy">{s.contact.sent}</p> : null}
      </form>
    </Wrap>
  );
}

export function LegalPage() {
  const { s } = useSite();
  return (
    <Wrap>
      <h1 className="text-4xl font-semibold">{s.legal.title}</h1>
      <div className="mt-6 grid gap-4">
        {s.legal.body.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-7 text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </Wrap>
  );
}

export function BuyPage() {
  const { s } = useSite();
  const page = s.guides.buy;
  return (
    <Wrap>
      <h1 className="text-4xl font-semibold">{page.title}</h1>
      <p className="mt-4 text-base leading-7 text-muted">{page.lede}</p>
      <ol className="mt-8 grid gap-3">
        {page.steps.map((step, index) => (
          <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-2 text-sm leading-6">
            <span className="font-mono text-primary">0{index + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <Link to="/desk" className="mt-8 inline-flex min-h-11 items-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-fg">
        {page.cta}
      </Link>
    </Wrap>
  );
}

export function SellPage() {
  const { s } = useSite();
  const page = s.guides.sell;
  return (
    <Wrap>
      <h1 className="text-4xl font-semibold">{page.title}</h1>
      <p className="mt-4 text-base leading-7 text-muted">{page.lede}</p>
      <ol className="mt-8 grid gap-3">
        {page.steps.map((step, index) => (
          <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-2 text-sm leading-6">
            <span className="font-mono text-primary">0{index + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <Link to="/post" className="mt-8 inline-flex min-h-11 items-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-fg">
        {page.cta}
      </Link>
    </Wrap>
  );
}

export function MerchantPage() {
  const { s } = useSite();
  const page = s.guides.merchant;
  return (
    <Wrap>
      <h1 className="text-4xl font-semibold">{page.title}</h1>
      <p className="mt-4 text-base leading-7 text-muted">{page.lede}</p>
      <ol className="mt-8 grid gap-3">
        {page.steps.map((step, index) => (
          <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-2 text-sm leading-6">
            <span className="font-mono text-primary">0{index + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/identity" className="inline-flex min-h-11 items-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-fg">
          {page.cta}
        </Link>
        <Link to="/passes" className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-semibold">
          {s.nav.merchant}
        </Link>
      </div>
    </Wrap>
  );
}

export function HelpPage() {
  const { s } = useSite();
  const page = s.guides.help;
  return (
    <Wrap>
      <h1 className="text-4xl font-semibold">{page.title}</h1>
      <p className="mt-4 text-base leading-7 text-muted">{page.lede}</p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {page.blocks.map((block) => (
          <li key={block.t} className="py-4">
            <p className="font-semibold">{block.t}</p>
            <p className="mt-1 text-sm leading-6 text-muted">{block.d}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
        <Link to="/orders" className="text-primary">
          {s.nav.help}
        </Link>
        <Link to="/faq" className="text-primary">
          {s.nav.faq}
        </Link>
        <Link to="/contact" className="text-primary">
          {s.nav.contact}
        </Link>
      </div>
    </Wrap>
  );
}

export function FeesPage() {
  const { s } = useSite();
  const page = s.guides.fees;
  return (
    <Wrap>
      <h1 className="text-4xl font-semibold">{page.title}</h1>
      <p className="mt-4 text-base leading-7 text-muted">{page.lede}</p>
      <ul className="mt-8 grid gap-4">
        {page.rows.map((row) => (
          <li key={row.t} className="border-s-2 border-primary ps-3">
            <p className="font-semibold">{row.t}</p>
            <p className="mt-1 text-sm leading-6 text-muted">{row.d}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted">{page.note}</p>
      <Link to="/admin" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-primary">
        {s.nav.fees}
      </Link>
    </Wrap>
  );
}
