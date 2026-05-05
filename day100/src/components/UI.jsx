import { useId, useState } from "react";
import { trackEvent } from "../lib/analytics";

const toneClasses = {
  primary: "ticket-button ticket-button-primary",
  secondary: "ticket-button ticket-button-secondary",
  ghost: "ticket-button ticket-button-ghost",
};

export function ButtonLink({
  href = "#contact",
  children,
  variant = "primary",
  className = "",
  trackingName = "cta_click",
  trackingParams = {},
  onClick,
  ...props
}) {
  const variantClass = toneClasses[variant] || toneClasses.primary;
  const visibleChildren = children === "無料30分相談を予約する" || children === "無料30分相談"
    ? "無料30分 受付導線診断を予約する"
    : children;

  const handleClick = (event) => {
    if (trackingName) {
      trackEvent(trackingName, {
        event_category: "engagement",
        cta_href: href,
        cta_variant: variant,
        ...trackingParams,
      });
    }

    onClick?.(event);
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[8px] border px-5 py-3 text-sm font-bold transition ${variantClass} ${className}`}
      onClick={handleClick}
      {...props}
    >
      <span>{visibleChildren}</span>
      <span aria-hidden="true" className="ticket-arrow text-base leading-none">→</span>
    </a>
  );
}

export function SectionHeader({ eyebrow, title, description, align = "left", className = "" }) {
  const aligned = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${aligned} ${className}`}>
      {eyebrow ? <p className="section-stamp mb-3 text-sm font-bold text-[#6E4F68]">{eyebrow}</p> : null}
      <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-bold leading-[1.18] text-[#203D36]">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-[#5C6861]">{description}</p> : null}
    </div>
  );
}

export function Card({ children, className = "", as: Component = "div" }) {
  return (
    <Component className={`reception-card rounded-[8px] border border-[#D3D9CC] bg-white shadow-[0_8px_24px_rgba(32,61,54,0.08)] ${className}`}>
      {children}
    </Component>
  );
}

export function Badge({ children, tone = "green", className = "" }) {
  const classes = {
    green: "border-[#D3D9CC] bg-[#EDF2E6] text-[#203D36]",
    gold: "border-[#D3D9CC] bg-[#F4F8D9] text-[#203D36]",
    blue: "border-[#D3D9CC] bg-[#F4EEF3] text-[#6E4F68]",
    terracotta: "border-[#E9B8A6] bg-[#FFF1EC] text-[#D86642]",
    lime: "border-[#B7C957] bg-[#F4F8D9] text-[#203D36]",
  };

  return (
    <span className={`reception-stamp inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${classes[tone]} ${className}`}>
      {children}
    </span>
  );
}

export function SmartImage({
  asset,
  alt = "",
  className = "",
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  sizes,
  width,
  height,
  srcSet,
  onError,
  ...props
}) {
  const [failed, setFailed] = useState(false);
  const normalizedAsset = typeof asset === "string" ? { src: asset } : asset || {};
  const fallbackSrc = normalizedAsset.fallbackSrc;
  const resolvedSrc = failed && fallbackSrc ? fallbackSrc : normalizedAsset.src || fallbackSrc;
  const resolvedSrcSet = failed ? undefined : srcSet || normalizedAsset.srcSet;
  const resolvedAvifSrcSet = failed ? undefined : normalizedAsset.avifSrcSet || normalizedAsset.avifSrc;
  const resolvedSizes = sizes || normalizedAsset.sizes;

  if (!resolvedSrc) return null;

  const image = (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      width={width || normalizedAsset.width}
      height={height || normalizedAsset.height}
      srcSet={resolvedSrcSet}
      sizes={resolvedSizes}
      onError={(event) => {
        if (!failed && fallbackSrc) {
          setFailed(true);
          return;
        }

        event.currentTarget.hidden = true;
        onError?.(event);
      }}
      {...props}
    />
  );

  if (!resolvedAvifSrcSet && !resolvedSrcSet) return image;

  return (
    <picture>
      {resolvedAvifSrcSet ? <source type="image/avif" srcSet={resolvedAvifSrcSet} sizes={resolvedSizes} /> : null}
      {resolvedSrcSet ? <source type="image/webp" srcSet={resolvedSrcSet} sizes={resolvedSizes} /> : null}
      {image}
    </picture>
  );
}

export function RouteLine({ items = [], className = "" }) {
  return (
    <ol className={`relative grid gap-4 md:grid-cols-4 ${className}`}>
      {items.map((item, index) => (
        <li key={item.step || item.title} className="route-slip relative rounded-[8px] border border-[#D6DED8] bg-white p-5">
          {index < items.length - 1 ? (
            <span aria-hidden="true" className="absolute left-10 top-full hidden h-4 w-px bg-[#6E4F68] md:left-full md:top-1/2 md:block md:h-px md:w-4" />
          ) : null}
          <p className="text-xs font-bold text-[#6E4F68]">{item.step}</p>
          <h3 className="mt-2 text-lg font-bold text-[#203D36]">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-[#53635E]">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function FileTab({ children, tone = "green", className = "" }) {
  const toneClass = {
    green: "bg-[#203D36] text-white",
    plum: "bg-[#6E4F68] text-white",
    lime: "bg-[#B7C957] text-[#203D36]",
    paper: "bg-[#EDF2E6] text-[#203D36] border border-[#D3D9CC]",
  }[tone] || "bg-[#203D36] text-white";

  return (
    <span className={`file-tab inline-flex min-h-[30px] items-center rounded-t-[8px] px-3 py-1 text-xs font-bold ${toneClass} ${className}`}>
      {children}
    </span>
  );
}

export function FileCard({ label, title, summary, points = [], children, className = "" }) {
  return (
    <article className={`reception-card relative rounded-[8px] border border-[#D3D9CC] bg-white p-5 pt-7 shadow-[0_8px_24px_rgba(32,61,54,0.08)] ${className}`}>
      {label ? <FileTab className="absolute left-4 top-[-1px]">{label}</FileTab> : null}
      <h3 className="text-xl font-bold text-[#203D36]">{title}</h3>
      {summary ? <p className="mt-3 text-sm leading-7 text-[#5C6861]">{summary}</p> : null}
      {points.length ? (
        <ul className="mt-4 grid gap-2">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm font-bold leading-6 text-[#203D36]">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#B7C957]" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {children}
    </article>
  );
}

export function RouteBadge({ children, className = "" }) {
  return (
    <span className={`inline-flex min-h-[30px] items-center gap-2 rounded-full border border-[#D3D9CC] bg-[#EDF2E6] px-3 py-1 text-xs font-bold text-[#6E4F68] ${className}`}>
      <span className="h-2 w-2 rounded-full bg-[#B7C957]" aria-hidden="true" />
      {children}
    </span>
  );
}

export function ReceptionBoard({ asset, items = [], className = "" }) {
  return (
    <div className={`reception-stage p-5 shadow-[0_16px_48px_rgba(32,61,54,0.12)] ${className}`}>
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <FileTab tone="plum">受付導線カルテ</FileTab>
          <RouteBadge>LINE → 予約 → 当日 → 継続</RouteBadge>
        </div>
        <SmartImage asset={asset} alt="" className="asset-cutout mx-auto mt-5 max-h-[320px] w-full object-contain" loading="eager" fetchPriority="high" />
        {items.length ? (
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {items.slice(0, 6).map((item) => (
              <div key={item} className="rounded-[8px] border border-[#D3D9CC] bg-white/88 p-3 shadow-[0_8px_18px_rgba(32,61,54,0.06)] backdrop-blur-sm">
                <p className="text-sm font-bold text-[#203D36]">{item}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function OutputCard({ label, title, body, className = "" }) {
  return (
    <article className={`reception-card rounded-[8px] border border-[#D3D9CC] bg-white p-5 shadow-[0_8px_24px_rgba(32,61,54,0.08)] ${className}`}>
      <RouteBadge>{label}</RouteBadge>
      <h3 className="mt-4 text-lg font-bold text-[#203D36]">{title}</h3>
      {body ? <p className="mt-3 text-sm leading-7 text-[#5C6861]">{body}</p> : null}
    </article>
  );
}

export function Accordion({ items = [], className = "" }) {
  const [openIndex, setOpenIndex] = useState(0);
  const accordionId = useId();

  return (
    <div className={`accordion-file divide-y divide-[#D6DED8] rounded-[8px] border border-[#D6DED8] bg-white ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${accordionId}-button-${index}`;
        const panelId = `${accordionId}-panel-${index}`;

        return (
          <div key={item.question}>
            <button
              id={buttonId}
              type="button"
          className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-[#203D36]"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <span className="accordion-mark grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#D3D9CC] text-[#6E4F68]" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 text-sm leading-7 text-[#5C6861]"
              >
                <p>{item.answer}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export function ContactFormShell({ className = "" }) {
  const nameId = useId();
  const emailId = useId();
  const businessId = useId();
  const issueId = useId();
  const methodId = useId();
  const statusId = useId();
  const [values, setValues] = useState({
    name: "",
    email: "",
    business: "",
    issue: "",
    method: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [notice, setNotice] = useState("");
  const fieldBase = "mt-2 w-full rounded-[8px] border bg-white px-4 py-3 text-sm text-[#17231F] outline-none transition placeholder:text-[#8A9893] focus:border-[#6E4F68] focus:ring-2 focus:ring-[#6E4F68]/20";
  const fieldClass = (fieldName) => `${fieldBase} ${errors[fieldName] ? "border-[#B6423A] bg-[#FFF8F4]" : "border-[#D3D9CC]"}`;
  const errorId = (fieldName) => `${fieldName}-${nameId}-error`;
  const requiredMark = <span className="ml-1 text-xs text-[#B6423A]">必須</span>;

  const updateValue = (fieldName) => (event) => {
    setValues((current) => ({ ...current, [fieldName]: event.target.value }));
    setErrors((current) => {
      if (!current[fieldName]) return current;
      const next = { ...current };
      delete next[fieldName];
      return next;
    });
  };

  const validate = () => {
    const nextErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "お名前を入力してください。";
    }

    if (!values.email.trim()) {
      nextErrors.email = "メールアドレスを入力してください。";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "メールアドレスの形式を確認してください。";
    }

    if (!values.business.trim()) {
      nextErrors.business = "現在のサロン・教室・サービスを入力してください。";
    }

    if (!values.method) {
      nextErrors.method = "希望する相談方法を選択してください。";
    }

    setErrors(nextErrors);
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setIsComplete(false);
      setNotice("未入力の必須項目があります。内容をご確認ください。");
      return;
    }

    setIsSubmitting(true);
    setNotice("入力内容を確認しています。");

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
      setNotice("初回LINEと予約導線診断の入力内容を受け付けました。外部送信は行っていません。");
      trackEvent("contact_form_complete", {
        event_category: "conversion",
        consultation_method: values.method,
        form_id: "contact_form",
        value: 1,
      });
    }, 450);
  };

  const renderError = (fieldName) => (
    errors[fieldName] ? (
      <p id={errorId(fieldName)} className="mt-2 text-xs font-bold leading-5 text-[#B6423A]">
        {errors[fieldName]}
      </p>
    ) : null
  );

  return (
    <form
      className={`consultation-form rounded-[8px] border border-[#D3D9CC] bg-white p-5 shadow-[0_16px_48px_rgba(32,61,54,0.12)] ${className}`}
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
      noValidate
    >
      <div id={statusId} className="sr-only" aria-live="polite" aria-atomic="true">
        {notice}
      </div>
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3 border-b border-dashed border-[#D3D9CC] pb-4">
        <FileTab tone="plum">診断受付票</FileTab>
        <span className="rounded-full border border-[#D3D9CC] bg-[#F8FAF4] px-3 py-1 text-xs font-bold text-[#6E4F68]">受付 No. SALON-30</span>
      </div>
      {notice ? (
        <div className="mb-5 flex items-start justify-between gap-4 rounded-[8px] border border-[#D3D9CC] bg-[#EDF2E6] px-4 py-3 text-sm leading-7 text-[#203D36]" role="status" aria-live="polite">
          <p>{notice}</p>
          <button
            type="button"
            className="shrink-0 rounded-full px-2 text-lg leading-7 text-[#6E4F68] hover:bg-white"
            aria-label="通知を閉じる"
            onClick={() => setNotice("")}
          >
            ×
          </button>
        </div>
      ) : null}
      {isComplete ? (
        <div className="mb-5 rounded-[8px] border border-[#D3D9CC] bg-[#EDF2E6] p-4">
          <p className="text-sm font-bold text-[#203D36]">診断予約の送信準備が完了しました</p>
          <p className="mt-2 text-sm leading-7 text-[#5C6861]">
            現在は外部フォーム送信先が未設定のため、入力内容は第三者へ送信していません。正式な送信先が決まり次第、初回LINEと予約ページの確認へ接続できます。
          </p>
        </div>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-bold text-[#203D36]" htmlFor={nameId}>
          お名前{requiredMark}
          <input
            id={nameId}
            name="name"
            className={fieldClass("name")}
            type="text"
            value={values.name}
            placeholder="山田 花子"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? errorId("name") : undefined}
            onChange={updateValue("name")}
            required
          />
          {renderError("name")}
        </label>
        <label className="text-sm font-bold text-[#203D36]" htmlFor={emailId}>
          メールアドレス{requiredMark}
          <input
            id={emailId}
            name="email"
            className={fieldClass("email")}
            type="email"
            value={values.email}
            placeholder="mail@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? errorId("email") : undefined}
            onChange={updateValue("email")}
            required
          />
          {renderError("email")}
        </label>
      </div>
      <label className="mt-4 block text-sm font-bold text-[#203D36]" htmlFor={businessId}>
        現在のサロン・教室・サービス{requiredMark}
        <input
          id={businessId}
          name="business"
          className={fieldClass("business")}
          type="text"
          value={values.business}
          placeholder="例：完全予約制の個人サロン、自宅教室、整体、パーソナルレッスン"
          aria-invalid={Boolean(errors.business)}
          aria-describedby={errors.business ? errorId("business") : undefined}
          onChange={updateValue("business")}
          required
        />
        {renderError("business")}
      </label>
      <label className="mt-4 block text-sm font-bold text-[#203D36]" htmlFor={issueId}>
        体験予約前後でいちばん散らばっていること
        <textarea
          id={issueId}
          name="issue"
          className={`${fieldClass("issue")} min-h-32 resize-y`}
          value={values.issue}
          placeholder="初回LINE、体験/単発/継続メニュー、STORES予約、当日案内、3ヶ月コースの案内など。まだ整理できていないままで大丈夫です。"
          onChange={updateValue("issue")}
        />
      </label>
      <label className="mt-4 block text-sm font-bold text-[#203D36]" htmlFor={methodId}>
        希望する相談方法{requiredMark}
        <select
          id={methodId}
          name="method"
          className={fieldClass("method")}
          value={values.method}
          aria-invalid={Boolean(errors.method)}
          aria-describedby={errors.method ? errorId("method") : undefined}
          onChange={updateValue("method")}
          required
        >
          <option value="" disabled>選択してください</option>
          <option value="zoom">ZoomでLINEや予約ページを見ながら相談したい</option>
          <option value="chat">チャットで文面中心に相談したい</option>
          <option value="email">まずはメールでメニュー表を確認したい</option>
        </select>
        {renderError("method")}
      </label>
      <button
        type="submit"
        className="ticket-button ticket-button-primary mt-6 inline-flex min-h-[52px] w-full items-center justify-center rounded-[8px] border px-5 py-3 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isSubmitting}
        aria-describedby={statusId}
      >
        {isSubmitting ? "送信準備中..." : "無料30分 初回LINE・受付導線診断を送信する"}
      </button>
      <p className="mt-3 text-xs leading-6 text-[#5C6861]">送信後、通常2営業日以内に相談候補日と、確認したいLINE文面・予約ページの範囲をご連絡します。</p>
    </form>
  );
}
