import { Icon } from "./Icons";

const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:ring-offset-2 hover:-translate-y-0.5 active:translate-y-0";

export function Button({ children, href, variant = "primary", className = "", icon, ...props }) {
  const styles = {
    primary: "bg-teal text-white shadow-[0_14px_28px_rgba(13,92,99,0.18)] hover:bg-[#094a50]",
    secondary: "border border-teal/70 bg-white/80 text-teal hover:bg-teal/5",
    ghost: "text-ink hover:bg-teal/10",
    dark: "bg-ink text-white hover:bg-teal"
  };
  const Comp = href ? "a" : "button";

  return (
    <Comp className={`${buttonBase} ${styles[variant] ?? styles.primary} ${className}`} href={href} type={href ? undefined : props.type ?? "button"} {...props}>
      {children}
      {icon ? <Icon name={icon} size={18} /> : null}
    </Comp>
  );
}

export function SectionShell({ eyebrow, title, children, className = "", id }) {
  return (
    <section id={id} className={`section-shell border-t border-grid/70 py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {(eyebrow || title) && (
          <div className="mb-8 grid gap-3 md:grid-cols-[180px_1fr] md:items-end">
            {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel">{eyebrow}</p> : null}
            {title ? <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-ink md:text-4xl">{title}</h2> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PaperCard({ children, className = "" }) {
  return <div className={`paper-card rounded-md border border-grid/80 bg-white/[0.82] p-5 shadow-sm transition-shadow hover:shadow-md ${className}`}>{children}</div>;
}

export function Badge({ children, tone = "teal", className = "" }) {
  const tones = {
    teal: "border-teal/20 bg-teal/10 text-teal",
    mint: "border-mint/30 bg-mint/10 text-teal",
    copper: "border-copper/25 bg-copper/10 text-copper",
    amber: "border-amber/35 bg-amber/10 text-[#8a620c]",
    ink: "border-ink/15 bg-ink/5 text-ink"
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone] ?? tones.teal} ${className}`}>
      {children}
    </span>
  );
}

export function KpiCard({ label, value, note, icon = "chart", tone = "teal" }) {
  return (
    <PaperCard className="reveal min-h-[150px]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-ink">{label}</p>
          <p className={`mt-5 text-4xl font-semibold ${tone === "copper" ? "text-copper" : tone === "amber" ? "text-[#a97511]" : "text-teal"}`}>
            {value}
          </p>
        </div>
        <Icon name={icon} className={tone === "copper" ? "text-copper" : tone === "amber" ? "text-amber" : "text-teal"} size={30} />
      </div>
      {note ? <p className="mt-3 text-sm leading-6 text-slip">{note}</p> : null}
    </PaperCard>
  );
}

export function LabelSticker({ children, className = "" }) {
  return (
    <span className={`label-float inline-flex border border-grid bg-[#f4efe4] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-steel shadow-sm ${className}`}>
      {children}
    </span>
  );
}

export function BottomCta() {
  return (
    <section className="bg-teal px-5 py-10 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-lg border border-white/35">
            <Icon name="inventory" size={34} />
          </div>
          <div>
            <p className="text-2xl font-semibold">小さなEC運営を、静かな管制室に変える。</p>
            <p className="mt-1 text-sm text-white/75">在庫・価格・SKUを、毎朝見える状態へ。</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#diagnosis" variant="secondary" className="cta-pulse bg-white text-teal">
            無料で棚卸し診断を受ける
          </Button>
          <Button href="#demo" variant="ghost" className="text-white hover:bg-white/10" icon="search">
            デモ画面を見る
          </Button>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="paper-bg border-b border-grid/70 px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_420px] md:items-center">
        <div>
          {eyebrow ? <LabelSticker>{eyebrow}</LabelSticker> : null}
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-ink md:text-6xl">{title}</h1>
          {description ? <p className="mt-5 max-w-2xl text-base leading-8 text-slip md:text-lg">{description}</p> : null}
        </div>
        {children ? <div>{children}</div> : null}
      </div>
    </section>
  );
}
