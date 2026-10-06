import { X } from "lucide-react";
import { useEffect, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useI18n } from "@/lib/p2p/i18n";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="8" className="fill-primary" />
      <path
        d="M7 22.5h18M9 18.5l4.2-7 3.3 5.2 2.2-3.2L22 18.5"
        fill="none"
        className="stroke-primary-fg"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const buttonStyles = {
  primary: "bg-primary text-primary-fg",
  buy: "bg-buy text-buy-fg",
  sell: "bg-sell text-sell-fg",
  line: "border border-line bg-surface text-fg",
  ghost: "bg-transparent text-fg",
  soft: "bg-surface-2 text-fg",
} as const;

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: keyof typeof buttonStyles }) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold transition-opacity disabled:opacity-50",
        buttonStyles[variant],
        className,
      )}
      {...props}
    />
  );
}

export const fieldClass =
  "h-11 w-full rounded-md border border-line bg-bg px-3 text-sm text-fg outline-none";

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium text-muted">{label}</span>
      {children}
    </label>
  );
}

export function Panel({ className, children }: { className?: string; children: ReactNode }) {
  return <section className={cn("rounded-md border border-line bg-surface", className)}>{children}</section>;
}

export function Page({ title, sub, children }: { title: string; sub?: string; children: ReactNode }) {
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-4">
      <header className="grid gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {sub ? <p className="max-w-3xl text-sm leading-relaxed text-muted">{sub}</p> : null}
      </header>
      {children}
    </div>
  );
}

export function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  const { t } = useI18n();
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
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
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-fg/40 sm:items-center sm:p-4" role="presentation">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="max-h-[92vh] w-full overflow-y-auto rounded-t-md border border-line bg-surface p-4 sm:max-w-lg sm:rounded-md"
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button type="button" className="grid size-11 place-items-center rounded-md" aria-label={t("common.close")} onClick={onClose}>
            <X className="size-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function Empty({ children }: { children: ReactNode }) {
  return <p className="rounded-md border border-dashed border-line px-4 py-8 text-center text-sm text-muted">{children}</p>;
}
