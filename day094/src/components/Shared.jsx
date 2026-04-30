import { ArrowIcon } from "./Icons.jsx";

const iconMap = {
  arrow: ArrowIcon,
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  as: Component = "button",
  ...props
}) {
  const Icon = typeof icon === "function" ? icon : iconMap[icon];
  const variants = {
    primary: "bg-[#2F7F88] text-white shadow-[0_16px_30px_rgba(47,127,136,0.24)] hover:bg-[#1F5F68]",
    secondary: "border border-[#BFDCD8] bg-white text-[#1F5F68] hover:bg-[#F6FAF8]",
    ghost: "text-[#1F5F68] hover:bg-[#DDF3EC]",
    dark: "bg-[#1F2A2E] text-white hover:bg-[#2F3B40]",
  };
  const sizes = {
    sm: "min-h-10 px-4 text-sm",
    md: "min-h-12 px-6 text-base",
    lg: "min-h-16 px-8 text-lg",
  };

  return (
    <Component
      className={cx(
        "inline-flex items-center justify-center gap-3 rounded-xl font-bold transition duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2F7F88]/25 disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {Icon ? <Icon className="h-5 w-5 shrink-0" /> : null}
    </Component>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "center", className = "" }) {
  return (
    <div className={cx("mx-auto max-w-3xl", align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-[#BFDCD8] bg-[#DDF3EC]/70 px-4 py-1 text-sm font-bold text-[#1F5F68]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black leading-tight text-[#1F2A2E] md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-[#66777A]">{description}</p> : null}
    </div>
  );
}

export function StatBadge({ value, label, icon: Icon, className = "" }) {
  return (
    <div
      className={cx(
        "inline-flex items-center gap-3 rounded-2xl border border-[#DCE8E5] bg-white/90 px-5 py-3 text-[#1F5F68] shadow-[0_10px_28px_rgba(31,42,46,0.08)]",
        className,
      )}
    >
      {Icon ? <Icon className="h-6 w-6" /> : null}
      <div>
        <p className="text-2xl font-black leading-none">{value}</p>
        <p className="mt-1 text-xs font-bold text-[#66777A]">{label}</p>
      </div>
    </div>
  );
}

export function FeatureCard({ title, body, icon: Icon, className = "" }) {
  return (
    <article
      className={cx(
        "group rounded-xl border border-[#DCE8E5] bg-white p-6 shadow-[0_10px_28px_rgba(31,42,46,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(31,95,104,0.12)]",
        className,
      )}
    >
      {Icon ? (
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#DDF3EC] text-[#2F7F88]">
          <Icon className="h-8 w-8" />
        </div>
      ) : null}
      <h3 className="text-xl font-black text-[#1F2A2E]">{title}</h3>
      <p className="mt-3 leading-7 text-[#66777A]">{body}</p>
    </article>
  );
}

export function PlanCard({ plan, icon: Icon, onSelect, className = "" }) {
  return (
    <article
      className={cx(
        "relative overflow-hidden rounded-2xl border bg-white p-4 shadow-[0_10px_28px_rgba(31,42,46,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(31,95,104,0.12)]",
        plan.recommended ? "border-[#F4B84A]" : "border-[#DCE8E5]",
        className,
      )}
    >
      {plan.recommended ? (
        <span className="absolute right-4 top-4 rounded-full bg-[#F4B84A] px-3 py-1 text-xs font-black text-[#1F2A2E]">
          人気
        </span>
      ) : null}
      <img className="h-56 w-full rounded-xl object-cover" src={plan.image} alt={`${plan.name}の備蓄キット`} loading="lazy" />
      <div className="p-4">
        <div className="flex items-center gap-3">
          {Icon ? <Icon className="h-10 w-10 text-[#2F7F88]" /> : null}
          <div>
            <h3 className="text-2xl font-black text-[#1F2A2E]">{plan.name}</h3>
            <p className="mt-1 text-sm font-medium text-[#66777A]">{plan.subtitle}</p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {plan.tags?.map((tag) => (
            <span key={tag} className="rounded-md bg-[#DDF3EC] px-3 py-1 text-xs font-bold text-[#1F5F68]">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm font-bold text-[#66777A]">
          月額 <span className="text-3xl font-black text-[#1F2A2E]">{plan.price}</span>円〜（税込）
        </p>
        <Button className="mt-5 w-full" icon="arrow" onClick={() => onSelect?.(plan)} aria-label={`${plan.name}の詳細を見る`}>
          {plan.cta ?? "詳細を見る"}
        </Button>
      </div>
    </article>
  );
}

export function ProgressRing({ value = 0, label = "備蓄レベル", size = 112, className = "" }) {
  const clamped = Math.max(0, Math.min(100, value));
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <div className={cx("inline-flex items-center gap-4", className)} role="img" aria-label={`${label} ${clamped}%`}>
      <svg width={size} height={size} viewBox="0 0 112 112" aria-hidden="true">
        <circle cx="56" cy="56" r={radius} stroke="#DCE8E5" strokeWidth="10" fill="none" />
        <circle
          cx="56"
          cy="56"
          r={radius}
          stroke="#2F7F88"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 56 56)"
        />
        <text x="56" y="52" textAnchor="middle" className="fill-[#1F2A2E] text-2xl font-black">
          {clamped}
        </text>
        <text x="56" y="74" textAnchor="middle" className="fill-[#66777A] text-xs font-bold">
          %
        </text>
      </svg>
      <span className="text-sm font-bold text-[#66777A]">{label}</span>
    </div>
  );
}

export function ImageCard({ src, alt, caption, className = "", imageClassName = "" }) {
  return (
    <figure className={cx("overflow-hidden rounded-2xl border border-[#DCE8E5] bg-white shadow-[0_10px_28px_rgba(31,42,46,0.08)]", className)}>
      <img className={cx("h-full w-full object-cover", imageClassName)} src={src} alt={alt} loading="lazy" />
      {caption ? <figcaption className="px-4 py-3 text-sm font-bold text-[#66777A]">{caption}</figcaption> : null}
    </figure>
  );
}

export function ArticleCard({ article, className = "" }) {
  return (
    <article className={cx("overflow-hidden rounded-2xl border border-[#DCE8E5] bg-white shadow-[0_10px_28px_rgba(31,42,46,0.08)]", className)}>
      <img className="h-48 w-full object-cover" src={article.image} alt="" loading="lazy" />
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs font-bold text-[#1F5F68]">
          <span className="rounded-full bg-[#DDF3EC] px-3 py-1">{article.category}</span>
          <time dateTime={article.date?.replaceAll(".", "-")}>{article.date}</time>
        </div>
        <h3 className="mt-4 text-xl font-black leading-snug text-[#1F2A2E]">{article.title}</h3>
        <p className="mt-3 leading-7 text-[#66777A]">{article.excerpt}</p>
      </div>
    </article>
  );
}

export function StatusPill({ children, tone = "mint", icon: Icon, className = "" }) {
  const tones = {
    mint: "border-[#BFDCD8] bg-[#DDF3EC] text-[#1F5F68]",
    yellow: "border-[#F4B84A]/40 bg-[#FFF4D8] text-[#7A5612]",
    peach: "border-[#FFE4D2] bg-[#FFF4EC] text-[#9A4D2E]",
    neutral: "border-[#DCE8E5] bg-white text-[#66777A]",
  };

  return (
    <span className={cx("inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-bold", tones[tone], className)}>
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </span>
  );
}
