import { siteMeta } from "../data/siteData";

const join = (...classes) => classes.filter(Boolean).join(" ");
const getNodeText = (node) => {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getNodeText).join(" ");
  return "";
};

const imageDimensions = {
  "brush-hold": [1536, 1024],
  brush: [1536, 1024],
  "chalk-bag": [1254, 1254],
  "finger-tape": [1536, 1024],
  "grip-balm": [1536, 1024],
  "hands-chalk": [1536, 1024],
  "hero-starter-kit": [1536, 1024],
  "liquid-chalk": [1024, 1536],
  "mini-holds": [1402, 1122],
};

function getImageDimensions(src = "") {
  const filename = src.split("/").pop()?.replace(/\.(png|webp|jpg|jpeg)$/i, "");
  return imageDimensions[filename] || [];
}

export function IconSprite({ index = 0, size = 28, label = "", className = "" }) {
  const columns = 4;
  const row = Math.floor(index / columns);
  const column = index % columns;
  const backgroundSize = `${columns * 100}% ${columns * 100}%`;
  const backgroundPosition = `${column * 33.333}% ${row * 33.333}%`;

  return (
    <span
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      className={join("inline-block shrink-0 bg-no-repeat", className)}
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${siteMeta.iconSprite})`,
        backgroundSize,
        backgroundPosition,
      }}
    />
  );
}

export function Button({ href, children, variant = "primary", className = "", tracking, trackingPosition, trackingType, ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 border px-5 py-3 text-sm font-bold tracking-normal transition focus:outline-none focus:ring-2 focus:ring-cyan-300";
  const variants = {
    primary:
      "border-orange-500 bg-orange-600 text-white shadow-[0_0_26px_rgba(255,90,31,0.35)] hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.35)]",
    secondary:
      "border-cyan-300/80 bg-black/30 text-cyan-100 shadow-[0_0_18px_rgba(0,229,255,0.16)] hover:bg-cyan-300/10",
    ghost: "border-slate-700 bg-slate-950/40 text-slate-200 hover:border-fuchsia-400 hover:text-white",
  };
  const Component = href ? "a" : "button";
  const buttonText = getNodeText(children);
  const inferredTracking =
    tracking ||
    (href
      ? href === "#cart" || buttonText.includes("カートに入れる")
        ? "add_to_cart"
        : buttonText.includes("購入手続き")
          ? "begin_checkout"
          : "cta_click"
      : undefined);
  const trackingProps = inferredTracking
    ? {
        "data-tracking": inferredTracking,
        "data-position": trackingPosition || "button",
        "data-type": trackingType || (href ? "link" : "button"),
      }
    : {};

  return (
    <Component href={href} className={join(base, variants[variant], className)} {...trackingProps} {...props}>
      {children}
    </Component>
  );
}

export function NeonPanel({ children, accent = "cyan", className = "", ...props }) {
  const accents = {
    cyan: "border-cyan-300/50 shadow-[0_0_32px_rgba(0,229,255,0.12)]",
    magenta: "border-fuchsia-400/45 shadow-[0_0_32px_rgba(255,43,214,0.12)]",
    lime: "border-lime-300/45 shadow-[0_0_28px_rgba(182,255,59,0.11)]",
    orange: "border-orange-500/50 shadow-[0_0_28px_rgba(255,90,31,0.12)]",
  };

  return (
    <div
      {...props}
      className={join(
        "relative border bg-slate-950/76 p-5 backdrop-blur before:absolute before:left-0 before:top-0 before:h-px before:w-full before:bg-gradient-to-r before:from-transparent before:via-cyan-300/70 before:to-transparent",
        accents[accent],
        className,
      )}
    >
      {children}
    </div>
  );
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  ...props
}) {
  const [width, height] = getImageDimensions(src);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      width={width}
      height={height}
      onError={(event) => {
        event.currentTarget.dataset.error = "true";
      }}
      {...props}
    />
  );
}

export function SectionHeader({ eyebrow, title, lead, align = "left", className = "" }) {
  return (
    <div className={join("mb-8", align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow && <p className="mb-2 text-xs font-bold uppercase text-cyan-300">{eyebrow}</p>}
      <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">{title}</h2>
      {lead && <p className="mt-4 text-base leading-8 text-slate-300">{lead}</p>}
    </div>
  );
}

export function SpecRows({ rows = [], className = "" }) {
  return (
    <dl className={join("divide-y divide-slate-700/70 border border-slate-700/80 bg-black/20", className)}>
      {rows.map(([label, value], index) => (
        <div key={`${label}-${index}`} className="grid grid-cols-[7rem_1fr] gap-3 px-4 py-3 text-sm">
          <dt className="font-bold text-slate-400">{label}</dt>
          <dd className="font-semibold text-white">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function FaqRow({ question, answer, defaultOpen = false }) {
  return (
    <details className="group border border-slate-700 bg-slate-950/70 p-5" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-bold text-white">
        <span>{question}</span>
        <span className="grid h-7 w-7 place-items-center border border-cyan-300 text-cyan-200 group-open:border-fuchsia-400 group-open:text-fuchsia-200">
          +
        </span>
      </summary>
      <p className="mt-4 leading-7 text-slate-300">{answer}</p>
    </details>
  );
}

export function MetricBadge({ label, value, note, className = "" }) {
  return (
    <div className={join("border border-lime-300/40 bg-lime-300/5 px-4 py-3", className)}>
      <p className="text-xs font-bold text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-black text-lime-200">{value}</p>
      {note && <p className="mt-1 text-xs text-slate-400">{note}</p>}
    </div>
  );
}

export function StickyPurchaseBar({ title, price, cta = "カートに入れる", href = "#cart", className = "", onAction }) {
  return (
    <div className={join("fixed inset-x-0 bottom-0 z-40 border-t border-cyan-300/50 bg-black/90 p-3 backdrop-blur md:hidden", className)}>
      <div className="mx-auto flex max-w-xl items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-white">{title}</p>
          <p className="text-lg font-black text-orange-300">{price}</p>
        </div>
        <Button
          href={onAction ? undefined : href}
          className="shrink-0 px-4 py-3 text-xs"
          tracking={cta.includes("カート") || cta.includes("購入") ? "add_to_cart" : "cta_click"}
          trackingPosition="sticky_purchase"
          type={onAction ? "button" : undefined}
          onClick={onAction}
        >
          {cta}
        </Button>
      </div>
    </div>
  );
}
