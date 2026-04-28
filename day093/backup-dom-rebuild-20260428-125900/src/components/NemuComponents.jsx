import { useId, useMemo, useState } from "react";

const iconSheet = "/assets/generated/nemunote-icons.png";
const tileSheet = "/assets/generated/nemunote-article-tiles.png";

const toneClasses = {
  mint: "bg-nemu-mint/20 text-nemu-teal ring-nemu-mint/45",
  peach: "bg-nemu-peach/20 text-[#b9614e] ring-nemu-peach/45",
  lilac: "bg-nemu-lilac/28 text-[#6c5ba6] ring-nemu-lilac/55",
  white: "bg-white text-nemu-teal ring-nemu-line",
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function safeList(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function Logo({ compact = false, className = "" }) {
  return (
    <div className={cx("flex items-center gap-3 text-nemu-ink", className)} aria-label="NemuNote">
      <span className="relative grid size-11 shrink-0 place-items-center rounded-[14px] bg-nemu-mint/25 shadow-nemu-soft ring-1 ring-nemu-mint/40">
        <span className="absolute left-3 top-2 size-5 rounded-full bg-nemu-teal" />
        <span className="absolute left-5 top-1.5 size-5 rounded-full bg-nemu-mint" />
        <span className="absolute bottom-2.5 right-2 size-1.5 rounded-full bg-nemu-peach animate-nemu-twinkle" />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-[1.35rem] font-bold tracking-normal">NemuNote</span>
          <span className="mt-1 block text-xs font-semibold text-nemu-muted">sleep journal app</span>
        </span>
      )}
    </div>
  );
}

export function Decorations({ density = "normal", className = "" }) {
  const items = density === "light" ? ["moon", "star", "cloud"] : ["moon", "star", "cloud", "dot", "tile"];

  return (
    <div className={cx("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {items.map((item, index) => (
        <span
          key={item}
          className={cx(
            "absolute rounded-full opacity-70 blur-0 animate-nemu-float",
            index % 2 === 0 ? "animate-nemu-float-slow" : "animate-nemu-float-reverse",
          )}
          style={{
            left: `${8 + index * 19}%`,
            top: `${10 + (index % 3) * 24}%`,
            width: `${item === "tile" ? 86 : 18 + index * 6}px`,
            height: `${item === "cloud" ? 18 : item === "tile" ? 86 : 18 + index * 6}px`,
            background:
              item === "tile"
                ? `url(${iconSheet}) center / cover no-repeat`
                : item === "moon"
                  ? "linear-gradient(135deg, rgba(143,216,196,.65), rgba(216,205,246,.44))"
                  : item === "star"
                    ? "rgba(247,184,166,.72)"
                    : item === "cloud"
                      ? "rgba(255,255,255,.86)"
                      : "rgba(143,216,196,.42)",
            borderRadius: item === "cloud" ? "999px 999px 999px 24px" : "999px",
          }}
        />
      ))}
    </div>
  );
}

export function IconBubble({ label, icon, index = 0, tone = "mint", className = "" }) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-[14px] px-3 py-2 text-sm font-bold ring-1 transition duration-300 hover:-translate-y-0.5 hover:shadow-nemu-soft animate-nemu-pop",
        toneClasses[tone] ?? toneClasses.mint,
        className,
      )}
    >
      <span className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-white/75">
        {icon ? (
          <span aria-hidden="true" className="text-base">{icon}</span>
        ) : (
          <span
            aria-hidden="true"
            className="size-8"
            style={{
              background: `url(${iconSheet}) ${(index % 4) * 33}% ${Math.floor(index / 4) * 33}% / 220% no-repeat`,
            }}
          />
        )}
      </span>
      {label && <span>{label}</span>}
    </span>
  );
}

export function ScoreRing({ score = 86, label = "睡眠スコア", detail = "良好", size = "lg", className = "" }) {
  const id = useId();
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const normalized = Math.max(0, Math.min(100, Number(score) || 0));
  const dashOffset = circumference - (normalized / 100) * circumference;
  const dimension = size === "sm" ? "size-32" : "size-44";

  return (
    <div className={cx("relative grid place-items-center", dimension, className)}>
      <svg viewBox="0 0 128 128" className="size-full -rotate-90 animate-nemu-ring-draw" role="img" aria-labelledby={id}>
        <title id={id}>{label}: {normalized}</title>
        <circle cx="64" cy="64" r={radius} fill="none" stroke="#e8eeec" strokeWidth="12" />
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          stroke="url(#score-gradient)"
          strokeLinecap="round"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
        <defs>
          <linearGradient id="score-gradient" x1="16" x2="112" y1="16" y2="112">
            <stop stopColor="#8fd8c4" />
            <stop offset="1" stopColor="#2f8f83" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <p className="text-xs font-bold text-nemu-muted">{label}</p>
        <p className="text-4xl font-black leading-none text-nemu-teal">{normalized}</p>
        <p className="mt-1 text-xs font-bold text-nemu-ink">{detail}</p>
      </div>
    </div>
  );
}

export function PhoneMock({ score = 86, stats = [], entries = [], className = "" }) {
  const statItems = safeList(stats).slice(0, 3);
  const entryItems = safeList(entries).slice(0, 3);

  return (
    <div className={cx("relative mx-auto w-full max-w-[320px] rounded-[34px] bg-nemu-ink p-3 shadow-nemu animate-nemu-phone-lift", className)}>
      <div className="rounded-[26px] bg-gradient-to-b from-white to-nemu-paper px-5 py-6">
        <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-nemu-line" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-nemu-muted">昨夜の記録</p>
            <h3 className="text-xl font-black text-nemu-ink">おやすみレポート</h3>
          </div>
          <IconBubble icon="☾" tone="lilac" className="px-2 py-2" />
        </div>
        <ScoreRing score={score} size="sm" className="mx-auto my-5" />
        <div className="grid grid-cols-3 gap-2">
          {statItems.map((stat, index) => (
            <div key={stat.label ?? index} className="rounded-[12px] bg-white p-3 text-center shadow-sm ring-1 ring-nemu-line/80 animate-nemu-card-in">
              <p className="text-[11px] font-bold text-nemu-muted">{stat.label}</p>
              <p className="mt-1 text-sm font-black text-nemu-teal">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 space-y-2">
          {(entryItems.length ? entryItems : ["寝つきが穏やか", "深い睡眠が長め", "朝の気分が安定"]).map((entry, index) => (
            <div key={typeof entry === "string" ? entry : entry.label ?? index} className="flex items-center gap-2 rounded-[12px] bg-nemu-mint/12 px-3 py-2 text-sm font-bold text-nemu-ink">
              <span className="size-2 rounded-full bg-nemu-mint" />
              <span>{typeof entry === "string" ? entry : entry.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StatCard({ label, value, caption, tone = "mint", className = "" }) {
  return (
    <article className={cx("rounded-[16px] bg-white p-5 shadow-nemu-soft ring-1 ring-nemu-line transition duration-300 hover:-translate-y-1 animate-nemu-card-in", className)}>
      <IconBubble label={label} tone={tone} className="mb-4" />
      <p className="text-3xl font-black text-nemu-ink">{value}</p>
      {caption && <p className="mt-2 text-sm leading-6 text-nemu-muted">{caption}</p>}
    </article>
  );
}

export function FeatureCard({ title, description, icon, bullets = [], tone = "mint", index = 0, className = "" }) {
  return (
    <article className={cx("group rounded-[16px] bg-white p-6 shadow-nemu-soft ring-1 ring-nemu-line transition duration-300 hover:-translate-y-1 hover:shadow-nemu animate-nemu-card-in", className)}>
      <IconBubble icon={icon} index={index} tone={tone} className="mb-5" />
      <h3 className="text-xl font-black leading-snug text-nemu-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-nemu-muted">{description}</p>
      {safeList(bullets).length > 0 && (
        <ul className="mt-5 space-y-2">
          {safeList(bullets).map((bullet) => (
            <li key={bullet} className="flex gap-2 text-sm font-bold text-nemu-ink">
              <span className="mt-2 size-1.5 rounded-full bg-nemu-mint" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function PricingCard({ name, price, period, description, features = [], cta = "始める", highlighted = false, className = "" }) {
  return (
    <article className={cx("relative rounded-[16px] bg-white p-7 shadow-nemu-soft ring-1 transition duration-300 hover:-translate-y-1 animate-nemu-card-in", highlighted ? "ring-2 ring-nemu-mint shadow-nemu" : "ring-nemu-line", className)}>
      {highlighted && <span className="absolute right-5 top-5 rounded-full bg-nemu-peach/25 px-3 py-1 text-xs font-black text-[#b9614e]">おすすめ</span>}
      <h3 className="text-2xl font-black text-nemu-ink">{name}</h3>
      {description && <p className="mt-2 text-sm leading-6 text-nemu-muted">{description}</p>}
      <div className="mt-6 flex items-end gap-1">
        <span className="text-4xl font-black text-nemu-teal">{price}</span>
        {period && <span className="pb-1 text-sm font-bold text-nemu-muted">/{period}</span>}
      </div>
      <ul className="mt-6 space-y-3">
        {safeList(features).map((feature) => (
          <li key={feature} className="flex gap-3 text-sm font-bold text-nemu-ink">
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-nemu-mint/25 text-xs text-nemu-teal">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button type="button" className={cx("mt-7 w-full rounded-[14px] px-5 py-3 text-sm font-black transition duration-300 animate-nemu-cta-pulse", highlighted ? "bg-nemu-teal text-white shadow-nemu-soft" : "bg-nemu-mint/25 text-nemu-teal ring-1 ring-nemu-mint/45")}>
        {cta}
      </button>
    </article>
  );
}

export function ReviewCard({ name, role, quote, score, avatarIndex = 0, className = "" }) {
  return (
    <article className={cx("rounded-[16px] bg-white p-6 shadow-nemu-soft ring-1 ring-nemu-line animate-nemu-card-in", className)}>
      <div className="flex items-center gap-4">
        <span className="size-12 rounded-full bg-nemu-lilac/35 ring-1 ring-nemu-lilac/70" style={{ backgroundImage: `url(${iconSheet})`, backgroundSize: "220%", backgroundPosition: `${avatarIndex * 25}% 50%` }} />
        <span>
          <strong className="block text-nemu-ink">{name}</strong>
          {role && <span className="text-sm font-bold text-nemu-muted">{role}</span>}
        </span>
      </div>
      <p className="mt-5 text-base leading-8 text-nemu-ink">“{quote}”</p>
      {score && <p className="mt-4 text-sm font-black text-nemu-teal">睡眠満足度 {score}</p>}
    </article>
  );
}

export function ArticleCard({ title, category, excerpt, imageIndex = 0, readTime, className = "" }) {
  return (
    <article className={cx("overflow-hidden rounded-[16px] bg-white shadow-nemu-soft ring-1 ring-nemu-line transition duration-300 hover:-translate-y-1 animate-nemu-card-in", className)}>
      <div className="h-36 bg-nemu-mint/15" style={{ backgroundImage: `url(${tileSheet})`, backgroundSize: "220%", backgroundPosition: `${(imageIndex % 3) * 50}% ${Math.floor(imageIndex / 3) * 50}%` }} />
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          {category && <span className="rounded-full bg-nemu-lilac/35 px-3 py-1 text-xs font-black text-[#6c5ba6]">{category}</span>}
          {readTime && <span className="text-xs font-bold text-nemu-muted">{readTime}</span>}
        </div>
        <h3 className="mt-4 text-lg font-black leading-snug text-nemu-ink">{title}</h3>
        {excerpt && <p className="mt-3 text-sm leading-6 text-nemu-muted">{excerpt}</p>}
      </div>
    </article>
  );
}

export function FAQList({ items = [], className = "" }) {
  const [openIndex, setOpenIndex] = useState(0);
  const faqItems = useMemo(() => safeList(items), [items]);

  return (
    <div className={cx("space-y-3", className)}>
      {faqItems.map((item, index) => {
        const open = index === openIndex;
        return (
          <article key={item.question ?? index} className="rounded-[16px] bg-white shadow-nemu-soft ring-1 ring-nemu-line">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span className="text-base font-black text-nemu-ink">{item.question}</span>
              <span className={cx("grid size-8 shrink-0 place-items-center rounded-full bg-nemu-mint/20 text-xl font-black text-nemu-teal transition duration-300", open && "rotate-45")}>+</span>
            </button>
            <div className={cx("grid transition-all duration-300 animate-nemu-accordion", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-7 text-nemu-muted">{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function SectionShell({ eyebrow, title, description, children, aside, className = "", contentClassName = "" }) {
  return (
    <section className={cx("relative overflow-hidden px-5 py-16 sm:px-8 lg:px-10", className)}>
      <Decorations density="light" className="opacity-55" />
      <div className={cx("relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center", contentClassName)}>
        <div>
          {eyebrow && <p className="text-sm font-black uppercase tracking-normal text-nemu-teal">{eyebrow}</p>}
          {title && <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-nemu-ink sm:text-4xl">{title}</h2>}
          {description && <p className="mt-5 max-w-2xl text-base leading-8 text-nemu-muted">{description}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
        {aside && <div className="relative">{aside}</div>}
      </div>
    </section>
  );
}
