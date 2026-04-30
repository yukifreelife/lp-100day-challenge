import React from "react";

const img = (name) => `/assets/images/${name}`;
const illust = (name) => `/assets/illustrations/${name}`;
const toWebp = (src) => (src.endsWith(".png") ? src.replace(/\.png$/, ".webp") : src);

function OptimizedImage({ src, alt, ...props }) {
  const webpSrc = toWebp(src);
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={webpSrc} alt={alt} {...props} />
    </picture>
  );
}

const plans = [
  {
    name: "家族プラン",
    badge: "おすすめ",
    price: "4,980",
    target: "2〜6人",
    cycle: "3ヶ月に1回お届け",
    image: "family-checking-kit.png",
    lead: "ご家族の人数や年齢に合わせて、必要な備蓄をバランスよくセット。",
  },
  {
    name: "ひとり暮らしプラン",
    price: "2,980",
    target: "1人用",
    cycle: "3ヶ月に1回お届け",
    image: "solo-apartment-kit.png",
    lead: "ひとり暮らしに必要な備蓄を、コンパクトにまとめてお届け。",
  },
  {
    name: "オフィスプラン",
    price: "9,800",
    target: "10名〜",
    cycle: "6ヶ月に1回お届け",
    image: "office-shelf-kit.png",
    lead: "人数やオフィス環境に合わせて、必要な備蓄をまとめてサポート。",
  },
];

const kitItems = [
  ["水", "3日分の飲料水", "item-water-bottles.png"],
  ["食品・保存食", "温めず食べられる主食と副菜", "item-food-pouches.png"],
  ["ライト・電源", "停電時の明かりと充電", "item-light-power.png"],
  ["救急・衛生", "けが、清潔、トイレ対策", "item-first-aid-hygiene.png"],
];

const articles = [
  ["水は何日分必要？人数別の備蓄量", "保存水の目安と置き場所を解説", "article-water-stock.png", "備蓄の基本"],
  ["子どもがいる家庭の備え", "年齢別に追加したいものリスト", "article-family-children.png", "家族防災"],
  ["賞味期限切れを防ぐ管理術", "ローリングストックの続け方", "article-expiration-management.png", "期限管理"],
  ["ペットのための防災セット", "フード・水・避難時の注意点", "article-pet-preparedness.png", "ペット"],
];

const dashboardItems = [
  ["保存水 500ml", "水", "12本", "2026.07.15", "余裕あり"],
  ["アルファ米 白飯", "食品", "6食", "2025.06.20", "余裕あり"],
  ["野菜たっぷりスープ", "食品", "10食", "2025.08.10", "交換が近い"],
  ["携帯トイレ", "トイレ", "10回分", "2026.01.10", "余裕あり"],
  ["救急セット", "救急用品", "1セット", "2025.07.01", "期限切れ"],
];

function PageShell({ children, tone = "white" }) {
  return (
    <div className={`min-h-screen text-[#1F2A2E] ${tone === "mint" ? "bg-[#F6FAF8]" : "bg-white"}`}>
      {children}
    </div>
  );
}

function PageHero({ icon = "□", title, lead, children }) {
  return (
    <section className="border-b border-[#DCE8E5] bg-gradient-to-b from-white to-[#F8FCFA] px-5 pb-10 pt-10 sm:px-8 lg:pb-14">
      <div className="mx-auto max-w-6xl text-center">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#DDF3EC] text-4xl font-black text-[#2F7F88]">
          {icon}
        </div>
        <h1 className="text-4xl font-black leading-tight tracking-normal sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-[1.9] text-[#526568] sm:text-lg">{lead}</p>
        {children}
      </div>
    </section>
  );
}

function Section({ title, lead, children, className = "" }) {
  return (
    <section className={`px-5 py-12 sm:px-8 lg:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {title && (
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-black tracking-normal sm:text-3xl">{title}</h2>
            {lead && <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-[1.8] text-[#66777A]">{lead}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function Button({ children, onClick, variant = "primary", className = "" }) {
  const base = "inline-flex items-center justify-center gap-3 rounded-[10px] px-6 py-3 text-sm font-black transition hover:-translate-y-0.5";
  const styles =
    variant === "outline"
      ? "border border-[#2F7F88] bg-white text-[#2F7F88] hover:bg-[#F0FAF7]"
      : "bg-[#2F7F88] text-white shadow-[0_14px_28px_rgba(47,127,136,0.22)] hover:bg-[#1F5F68]";
  return (
    <button type="button" onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
      <span className="text-xl leading-none">›</span>
    </button>
  );
}

function Badge({ children, color = "mint" }) {
  const map = {
    mint: "bg-[#E7F6F1] text-[#2F7F88]",
    yellow: "bg-[#FFF4D9] text-[#956A13]",
    red: "bg-[#FFE8E8] text-[#C94848]",
  };
  return <span className={`rounded-full px-3 py-1 text-xs font-black ${map[color]}`}>{children}</span>;
}

function Card({ children, className = "" }) {
  return <article className={`rounded-[14px] border border-[#DCE8E5] bg-white shadow-[0_12px_28px_rgba(31,42,46,0.05)] ${className}`}>{children}</article>;
}

function InfoStrip({ items }) {
  return (
    <div className="grid overflow-hidden rounded-[12px] border border-[#DCE8E5] bg-[#F6FAF8] sm:grid-cols-2 lg:grid-cols-4">
      {items.map(([icon, title, body]) => (
        <div key={title} className="flex items-center gap-4 border-[#DCE8E5] p-5 lg:border-r last:lg:border-r-0">
          <span className="text-3xl text-[#2F7F88]">{icon}</span>
          <p className="text-sm font-black text-[#2F7F88]">
            {title}
            <span className="block text-xs font-bold leading-relaxed text-[#66777A]">{body}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

function PlanCard({ plan, onNavigate }) {
  return (
    <Card className={`relative flex h-full flex-col p-6 ${plan.badge ? "border-[#2F7F88] ring-1 ring-[#2F7F88]" : ""}`}>
      {plan.badge && <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#2F7F88] px-6 py-1.5 text-xs font-black text-white">{plan.badge}</span>}
      <h3 className="text-center text-2xl font-black">{plan.name}</h3>
      <OptimizedImage src={img(plan.image)} alt={`${plan.name}の備蓄キット`} loading="lazy" decoding="async" className="mt-5 h-44 w-full rounded-[10px] object-cover" />
      <p className="mt-5 min-h-[56px] text-center text-sm font-medium leading-[1.8] text-[#526568]">{plan.lead}</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <Badge>{plan.target}</Badge>
        <Badge>{plan.cycle}</Badge>
        <Badge>送料無料</Badge>
      </div>
      <p className="mt-6 text-center text-sm font-black">
        月額 <span className="text-4xl text-[#1F2A2E]">{plan.price}</span>円〜（税込）
      </p>
      <Button onClick={() => onNavigate?.("diagnosis")} className="mt-5 w-full">このプランで診断する</Button>
      <button type="button" className="mt-4 text-sm font-black text-[#2F7F88]">プランの詳細を見る 〉</button>
    </Card>
  );
}

function CompareTable() {
  const rows = [
    ["こんな方におすすめ", "家族みんなの備えをしっかり準備したい方", "ひとり暮らしで無理なく備えたい方", "従業員や職場の備えを整えたい方"],
    ["人数目安", "2〜6人", "1人", "10人〜"],
    ["交換サイクル", "3ヶ月に1回", "3ヶ月に1回", "6ヶ月に1回"],
    ["月額料金（税込）", "4,980円〜", "2,980円〜", "9,800円〜"],
    ["送料", "無料", "無料", "無料"],
    ["診断・期限管理", "あり", "あり", "あり"],
  ];
  return (
    <div className="overflow-x-auto rounded-[12px] border border-[#DCE8E5]">
      <table className="w-full min-w-[760px] border-collapse text-sm">
        <thead className="bg-[#F6FAF8] text-[#2F7F88]">
          <tr>
            <th className="w-[25%] p-4 text-left">比較項目</th>
            {plans.map((plan) => <th key={plan.name} className="border-l border-[#DCE8E5] p-4">{plan.name}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-[#DCE8E5]">
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`} className={`p-4 ${index === 1 ? "bg-[#F0FAF7]" : ""} ${index > 0 ? "border-l border-[#DCE8E5] text-center font-bold" : "font-black text-[#526568]"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function KitGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {kitItems.map(([title, body, file]) => (
        <Card key={title} className="p-5 text-center">
          <OptimizedImage src={img(file)} alt={`${title}カテゴリの備蓄アイテム`} loading="lazy" decoding="async" className="mx-auto h-32 w-full object-contain" />
          <h3 className="mt-4 text-xl font-black">{title}</h3>
          <p className="mt-2 text-sm font-medium leading-[1.7] text-[#66777A]">{body}</p>
        </Card>
      ))}
    </div>
  );
}

function CtaBand({ onNavigate, title = "備えを、いつもの暮らしに。", route = "diagnosis" }) {
  return (
    <section className="px-5 pb-12 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-6 overflow-hidden rounded-[16px] border border-[#BBDCD8] bg-[#F6FAF8] p-6 sm:grid-cols-[0.8fr_1.2fr_0.8fr] lg:p-8">
        <OptimizedImage src={img("family-checking-kit.png")} alt="家族で備蓄キットを確認している様子" loading="lazy" decoding="async" className="hidden h-40 w-full rounded-[12px] object-cover sm:block" />
        <div className="text-center">
          <h2 className="text-2xl font-black sm:text-3xl">{title}</h2>
          <p className="mt-3 text-sm font-medium text-[#66777A]">まずはあなたに合う備蓄量とプランを見つけましょう。</p>
          <Button onClick={() => onNavigate?.(route)} className="mt-5 w-full max-w-md">無料で備蓄診断をはじめる</Button>
        </div>
        <OptimizedImage src={img("product-box-cutout.png")} alt="SONAE BOX の備蓄ボックス" loading="lazy" decoding="async" className="mx-auto h-36 object-contain" />
      </div>
    </section>
  );
}

function FaqList() {
  const faqs = ["支払い方法を教えてください", "途中でプラン変更はできますか？", "スキップや解約はいつでもできますか？", "法人で複数拠点に届けられますか？"];
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <button key={faq} type="button" aria-expanded="false" className="flex w-full items-center justify-between rounded-[10px] border border-[#DCE8E5] bg-white px-5 py-4 text-left text-sm font-black">
          <span><span className="mr-3 text-[#2F7F88]">Q</span>{faq}</span>
          <span className="text-[#66777A]">⌄</span>
        </button>
      ))}
    </div>
  );
}

export function DiagnosisPage({ onNavigate }) {
  return (
    <PageShell>
      <PageHero icon="▤" title="3分でできる備蓄診断" lead="ご家族や暮らしに合わせて、必要な備えとおすすめプランをご提案します。" />
      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.8fr]">
          <Card className="p-5 sm:p-7">
            <div className="grid grid-cols-5 items-start gap-2 border-b border-[#DCE8E5] pb-5 text-center text-xs font-black text-[#66777A]">
              {["家族構成", "住まい", "ペット", "在宅時間", "結果"].map((step, index) => (
                <div key={step} className="relative">
                  <span className={`mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full border ${index === 0 ? "border-[#2F7F88] bg-[#2F7F88] text-white" : "border-[#C7D8D5] bg-white"}`}>{index + 1}</span>
                  {step}
                </div>
              ))}
            </div>
            <div className="mt-7 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-black"><span className="mr-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#DDF3EC] text-[#2F7F88]">♁</span>家族構成を教えてください</h2>
              <Badge>あと2問</Badge>
            </div>
            <p className="mt-7 font-black">一緒に暮らしている人数は？</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-4">
              {["1人", "2人", "3〜4人", "5人以上"].map((value, index) => (
                <button key={value} type="button" className={`relative rounded-[10px] border p-6 text-center font-black ${index === 0 ? "border-[#2F7F88] bg-[#F7FCFA]" : "border-[#DCE8E5] bg-white"}`}>
                  <span className="block text-4xl text-[#1F2A2E]">♁</span>
                  <span className="mt-3 block">{value}</span>
                  {index === 0 && <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#2F7F88] text-white">✓</span>}
                </button>
              ))}
            </div>
            <p className="mt-7 font-black">小さなお子さまはいますか？</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {["はい（0〜12歳）", "いいえ"].map((value, index) => (
                <button key={value} type="button" className={`rounded-[10px] border px-5 py-4 font-black ${index === 0 ? "border-[#2F7F88] bg-[#F7FCFA]" : "border-[#DCE8E5] bg-white"}`}>{value}</button>
              ))}
            </div>
            <Button onClick={() => onNavigate?.("plans")} className="mx-auto mt-8 flex w-full max-w-md py-4 text-lg">次へ</Button>
          </Card>
          <Card className="bg-[#F6FAF8] p-5 sm:p-7">
            <h2 className="text-center text-2xl font-black text-[#2F7F88]">結果プレビュー</h2>
            <div className="mt-5 rounded-[12px] border border-[#DCE8E5] bg-white p-5 text-center">
              <p className="text-xl font-black">おすすめ：<span className="text-[#2F7F88]">家族プラン</span></p>
              <OptimizedImage src={img("diagnosis-result-card.png")} alt="備蓄診断の結果カード" loading="lazy" decoding="async" className="mx-auto mt-4 h-56 object-contain" />
              <p className="mt-4 text-sm font-medium leading-[1.8]">ご家族4人の3日分を想定した、バランスのよい備蓄セットをご提案します。</p>
            </div>
            <InfoStrip items={[["♨", "3日分の食料・水", ""], ["□", "期限を自動管理", ""], ["▣", "定期お届け", ""], ["☏", "いつでもサポート", ""]]} />
          </Card>
        </div>
      </Section>
    </PageShell>
  );
}

export function PlansPage({ onNavigate }) {
  return (
    <PageShell>
      <PageHero icon="▤" title="プラン詳細" lead="ご家族構成や利用シーンに合わせて、最適なプランをお選びいただけます。" />
      <Section>
        <div className="grid gap-5 lg:grid-cols-3">{plans.map((plan) => <PlanCard key={plan.name} plan={plan} onNavigate={onNavigate} />)}</div>
        <div className="mt-8"><InfoStrip items={[["▣", "送料・手数料", "ずっと無料"], ["□", "交換時期をお知らせ", "期限管理もおまかせ"], ["◇", "不要なものは", "スキップOK"], ["☏", "専任サポート", "安心"]]} /></div>
      </Section>
      <Section title="比較表"><CompareTable /></Section>
      <Section title="届く内容（例）"><KitGrid /></Section>
      <Section title="よくあるご質問"><div className="grid gap-6 lg:grid-cols-2"><FaqList /><Card className="flex items-center gap-5 bg-[#F6FAF8] p-6"><span className="text-6xl text-[#2F7F88]">♁</span><div><h3 className="text-xl font-black">迷ったら備蓄診断がおすすめ！</h3><p className="mt-2 text-sm text-[#66777A]">簡単な質問に答えるだけで、あなたにぴったりのプランをご提案します。</p><Button onClick={() => onNavigate?.("diagnosis")} className="mt-4">診断をはじめる</Button></div></Card></div></Section>
      <CtaBand onNavigate={onNavigate} />
    </PageShell>
  );
}

export function KitPage({ onNavigate }) {
  return (
    <PageShell>
      <PageHero icon="▦" title="キット内容" lead="水・食品・明かり・衛生用品まで、防災士監修の基本セットをまとめてお届けします。" />
      <Section title="基本カテゴリ"><KitGrid /></Section>
      <Section title="家族プランの一例" className="bg-[#F6FAF8]">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-6"><OptimizedImage src={img("product-box-kit.png")} alt="家族プランの備蓄キット一式" loading="lazy" decoding="async" className="h-80 w-full object-contain" /></Card>
          <div className="grid gap-4 sm:grid-cols-2">
            {["保存水 500ml 12本", "アルファ米 6食", "野菜スープ 10食", "携帯トイレ 10回分", "救急セット 1式", "防災ガイド・チェックリスト"].map((item) => (
              <Card key={item} className="p-5"><Badge>標準同梱</Badge><p className="mt-3 text-lg font-black">{item}</p><p className="mt-2 text-sm text-[#66777A]">人数や診断結果に応じて数量を調整します。</p></Card>
            ))}
          </div>
        </div>
      </Section>
      <Section title="入れ替えやすいパッケージ"><InfoStrip items={[["✓", "カテゴリ別に整理", "箱を開けた瞬間に把握"], ["□", "期限ラベル付き", "管理アプリにも登録"], ["◇", "必要分だけ補充", "使った分だけ追加"], ["☏", "困ったら相談", "チャットでサポート"]]} /></Section>
      <CtaBand onNavigate={onNavigate} />
    </PageShell>
  );
}

export function HowItWorksPage({ onNavigate }) {
  const steps = [
    ["1", "備蓄診断", "家族構成、住まい、在宅時間に合わせて必要量を算出します。", "checklist-dashboard-panel.png"],
    ["2", "セットをお届け", "必要な内容をまとめた箱をご自宅やオフィスへ配送します。", "product-box-cutout.png"],
    ["3", "期限を管理", "マイページで賞味期限や交換時期を自動リマインドします。", "mobile-app-screens.png"],
  ];
  return (
    <PageShell>
      <PageHero icon="→" title="使い方" lead="診断からお届け、期限管理、入れ替えまで。備えが自然に続く仕組みです。" />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map(([num, title, body, file]) => (
            <Card key={title} className="p-6 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#2F7F88] text-xl font-black text-white">{num}</span>
              <h3 className="mt-5 text-2xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-[1.8] text-[#66777A]">{body}</p>
              <OptimizedImage src={img(file)} alt={`${title}ステップのイメージ`} loading="lazy" decoding="async" className="mt-5 h-48 w-full object-contain" />
            </Card>
          ))}
        </div>
      </Section>
      <Section title="管理画面でできること" className="bg-[#F6FAF8]">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <OptimizedImage src={img("checklist-dashboard-panel.png")} alt="備蓄リストと期限管理のダッシュボード" loading="lazy" decoding="async" className="rounded-[14px] border border-[#DCE8E5] bg-white p-3 shadow-[0_12px_28px_rgba(31,42,46,0.06)]" />
          <div className="space-y-4">{["備蓄リストを家族で共有", "交換が近いものだけ通知", "お届けサイクルをいつでも変更", "足りないものを追加注文"].map((text) => <Card key={text} className="p-5 font-black"><span className="mr-3 text-[#2F7F88]">✓</span>{text}</Card>)}</div>
        </div>
      </Section>
      <CtaBand onNavigate={onNavigate} />
    </PageShell>
  );
}

export function BusinessPage({ onNavigate }) {
  return (
    <PageShell>
      <PageHero icon="▥" title="法人・オフィス向け" lead="従業員数や拠点ごとの課題に合わせて、備蓄の選定・納品・期限管理までまとめて支援します。" />
      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <OptimizedImage src={img("office-shelf-kit.png")} alt="オフィス棚に置かれた防災備蓄キット" loading="lazy" decoding="async" className="h-full min-h-[360px] rounded-[16px] object-cover" />
          <div className="grid gap-4 sm:grid-cols-2">
            {["人数別に必要量を算出", "拠点ごとに配送先管理", "請求書払いに対応", "期限切れ前に交換通知"].map((item) => <Card key={item} className="p-6"><Badge>法人対応</Badge><h3 className="mt-3 text-xl font-black">{item}</h3><p className="mt-2 text-sm leading-[1.7] text-[#66777A]">総務・管理部門の手間を減らし、抜け漏れを防ぎます。</p></Card>)}
          </div>
        </div>
      </Section>
      <Section title="導入までの流れ" className="bg-[#F6FAF8]"><InfoStrip items={[["1", "人数・拠点を確認", "必要量を見積もり"], ["2", "内容を調整", "アレルギー等も相談"], ["3", "一括納品", "部署別仕分け対応"], ["4", "期限管理", "担当者へ通知"]]} /></Section>
      <Section title="店舗・クリニックにも"><div className="grid gap-6 lg:grid-cols-2"><Card className="p-6"><OptimizedImage src={img("shop-clinic-kit.png")} alt="店舗やクリニック向けの備蓄キット" loading="lazy" decoding="async" className="h-64 w-full rounded-[10px] object-cover" /><h3 className="mt-5 text-2xl font-black">来客とスタッフの安心を両立</h3><p className="mt-3 text-sm leading-[1.8] text-[#66777A]">小規模店舗やクリニック向けに、限られた収納でも置きやすい内容をご提案します。</p></Card><FaqList /></div></Section>
      <CtaBand onNavigate={onNavigate} title="オフィスの備えを、今日から整える。" route="checkout" />
    </PageShell>
  );
}

export function QualityPage() {
  return (
    <PageShell>
      <PageHero icon="◇" title="監修・品質管理" lead="防災士の知見と定期的な品質確認により、安心して保管できる備蓄セットを設計しています。" />
      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <OptimizedImage src={illust("quality-supervision.png")} alt="品質管理と監修体制のイラスト" loading="lazy" decoding="async" className="mx-auto max-h-[420px] object-contain" />
          <div className="space-y-4">{["防災士と共同でカテゴリを設計", "保存期間・栄養・使いやすさを確認", "入荷時と出荷前にチェック", "期限リマインドで入れ替えを支援"].map((item) => <Card key={item} className="p-5"><h3 className="text-xl font-black text-[#2F7F88]">{item}</h3><p className="mt-2 text-sm leading-[1.8] text-[#66777A]">災害時に実際に使えることを重視し、家庭でもオフィスでも扱いやすい仕様に整えています。</p></Card>)}</div>
        </div>
      </Section>
      <Section title="品質管理フロー" className="bg-[#F6FAF8]"><InfoStrip items={[["□", "選定", "用途と保存性を確認"], ["✓", "検品", "破損や期限を確認"], ["▣", "梱包", "カテゴリ別に整理"], ["↻", "交換", "期限前に通知"]]} /></Section>
    </PageShell>
  );
}

export function CasesPage() {
  const cases = [
    ["4人家族", "子どもの成長に合わせて内容を見直せるので安心です。", "family-checking-kit.png"],
    ["ひとり暮らし", "何を買えばよいか悩まず、置き場所もコンパクトでした。", "solo-apartment-kit.png"],
    ["クリニック", "スタッフ分をまとめて管理でき、期限確認の手間が減りました。", "shop-clinic-kit.png"],
  ];
  return (
    <PageShell>
      <PageHero icon="♡" title="導入事例・利用者の声" lead="暮らし方や職場環境に合わせて、無理なく備えを続けている方の声をご紹介します。" />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">{cases.map(([name, quote, file]) => <Card key={name} className="overflow-hidden"><OptimizedImage src={img(file)} alt={`${name}でのSONAE BOX利用イメージ`} loading="lazy" decoding="async" className="h-56 w-full object-cover" /><div className="p-6"><Badge>{name}</Badge><p className="mt-4 text-lg font-black leading-[1.7]">「{quote}」</p><p className="mt-4 text-sm text-[#66777A]">SONAE BOX 利用者</p></div></Card>)}</div>
      </Section>
      <Section title="選ばれている理由" className="bg-[#F6FAF8]"><InfoStrip items={[["85%", "備蓄充足率を可視化", "足りないものが明確"], ["3件", "交換リマインド", "期限前に通知"], ["0円", "送料・手数料", "プラン内で対応"], ["24h", "マイページ管理", "いつでも確認"]]} /></Section>
    </PageShell>
  );
}

export function MagazinePage() {
  return (
    <PageShell>
      <PageHero icon="▤" title="防災マガジン" lead="備蓄量、期限管理、家族やペットの備えなど、今日から使える防災の知識をお届けします。" />
      <Section>
        <div className="mb-7 flex flex-wrap justify-center gap-2">{["すべて", "備蓄の基本", "家族防災", "期限管理", "ペット"].map((tag, index) => <Badge key={tag} color={index === 0 ? "mint" : "yellow"}>{tag}</Badge>)}</div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{articles.map(([title, body, file, tag]) => <Card key={title} className="overflow-hidden"><OptimizedImage src={img(file)} alt={`${title}の記事イメージ`} loading="lazy" decoding="async" className="h-44 w-full object-cover" /><div className="p-5"><Badge>{tag}</Badge><h3 className="mt-4 text-lg font-black leading-[1.5]">{title}</h3><p className="mt-2 text-sm leading-[1.7] text-[#66777A]">{body}</p></div></Card>)}</div>
      </Section>
      <Section title="人気の記事" className="bg-[#F6FAF8]"><div className="grid gap-4 lg:grid-cols-2">{articles.slice(0, 2).map(([title, body]) => <Card key={title} className="flex items-center justify-between p-5"><div><h3 className="font-black">{title}</h3><p className="mt-1 text-sm text-[#66777A]">{body}</p></div><span className="text-2xl text-[#2F7F88]">›</span></Card>)}</div></Section>
    </PageShell>
  );
}

export function DashboardPage({ onNavigate }) {
  return (
    <PageShell tone="mint">
      <section className="px-5 py-8 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div><h1 className="text-4xl font-black">マイページ</h1><p className="mt-2 font-medium text-[#66777A]">いつも備えを、きちんと。</p></div>
            <Button onClick={() => onNavigate?.("checkout")} variant="outline">プランを変更</Button>
          </div>
          <div className="grid gap-5 lg:grid-cols-4">
            <Card className="p-6"><p className="font-black">備蓄充足率</p><p className="mt-6 text-5xl font-black text-[#2F7F88]">85<span className="text-2xl">%</span></p><Badge>良好です！</Badge></Card>
            <Card className="p-6"><p className="font-black">期限リマインド</p><p className="mt-6 text-5xl font-black text-[#F28A19]">3<span className="text-2xl">件</span></p><p className="mt-3 text-sm text-[#66777A]">交換が近いアイテムがあります。</p></Card>
            <Card className="p-6"><p className="font-black">次回お届け</p><p className="mt-6 text-2xl font-black text-[#2F7F88]">2025年7月15日</p><Badge>あと12日</Badge></Card>
            <Card className="p-6"><p className="font-black">プラン</p><p className="mt-6 text-2xl font-black text-[#2F7F88]">家族プラン</p><p className="mt-2 text-sm text-[#66777A]">4人家族</p></Card>
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
            <Card className="overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#DCE8E5] p-5"><h2 className="text-xl font-black">備蓄リスト</h2><Button variant="outline" className="py-2">アイテムを追加</Button></div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-sm">
                  <thead className="bg-[#F8FCFA] text-left text-[#66777A]"><tr>{["アイテム", "カテゴリ", "数量", "賞味期限/使用期限", "ステータス", ""].map((h) => <th key={h} className="p-4">{h}</th>)}</tr></thead>
                  <tbody>{dashboardItems.map((row) => <tr key={row[0]} className="border-t border-[#DCE8E5]">{row.map((cell, index) => <td key={`${row[0]}-${index}`} className="p-4 font-bold">{index === 1 ? <Badge>{cell}</Badge> : index === 4 ? <Badge color={cell === "期限切れ" ? "red" : cell === "交換が近い" ? "yellow" : "mint"}>{cell}</Badge> : cell}</td>)}<td className="p-4 text-right text-[#2F7F88]">›</td></tr>)}</tbody>
                </table>
              </div>
              <button type="button" className="m-5 w-[calc(100%-2.5rem)] rounded-[8px] border border-[#2F7F88] py-3 text-sm font-black text-[#2F7F88]">すべてのアイテムを見る</button>
            </Card>
            <Card className="p-6">
              <h2 className="text-xl font-black">交換が近いもの（3件）</h2>
              <div className="mt-4 space-y-3">{["野菜たっぷりスープ", "ビスケット（保存用）", "エネルギーゼリー"].map((item, i) => <div key={item} className="flex items-center justify-between rounded-[10px] border border-[#DCE8E5] p-3"><span className="font-bold">{item}<span className="block text-xs text-[#66777A]">2025.08.{10 + i * 5}</span></span><Badge>あと{26 + i * 11}日</Badge></div>)}</div>
              <OptimizedImage src={img("mobile-app-screens.png")} alt="スマートフォンの備蓄管理画面" loading="lazy" decoding="async" className="mx-auto mt-5 h-72 object-contain" />
            </Card>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function CheckoutPage({ onNavigate }) {
  const inputClass = "w-full rounded-[8px] border border-[#CFE3DF] bg-white px-4 py-3 text-sm font-bold text-[#1F2A2E]";
  return (
    <PageShell>
      <PageHero icon="▣" title="申込・決済" lead="入力はかんたん。最短3分でお申し込みが完了します。" />
      <Section>
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-4">
            <Card className="p-5"><h2 className="mb-4 text-xl font-black"><Badge>1</Badge> ご契約プランの確認</h2><div className="grid gap-4 sm:grid-cols-[240px_1fr]"><OptimizedImage src={img("family-checking-kit.png")} alt="家族プランの備蓄キット" loading="lazy" decoding="async" className="h-40 w-full rounded-[10px] object-cover" /><div><h3 className="text-2xl font-black text-[#2F7F88]">家族プラン</h3><p className="mt-2 text-sm leading-[1.8] text-[#66777A]">ご家族の人数や年齢に合わせて、必要な備蓄をバランスよくセット。</p><div className="mt-3 flex gap-2"><Badge>2人用〜</Badge><Badge>送料無料</Badge></div></div></div></Card>
            <Card className="p-5"><h2 className="mb-4 text-xl font-black"><Badge>2</Badge> 配送先情報の入力</h2><div className="grid gap-4 sm:grid-cols-2"><input aria-label="お名前" className={inputClass} defaultValue="備え 太郎" /><input aria-label="フリガナ" className={inputClass} defaultValue="ビナエ タロウ" /><input aria-label="郵便番号" className={inputClass} defaultValue="123-4567" /><button type="button" className="rounded-[8px] bg-[#2F7F88] px-4 py-3 text-sm font-black text-white">住所を自動入力</button><input aria-label="住所" className={`${inputClass} sm:col-span-2`} defaultValue="東京都 渋谷区神宮前1-2-3" /><input aria-label="建物名・部屋番号" className={`${inputClass} sm:col-span-2`} defaultValue="SONAEマンション 101号室" /><input aria-label="電話番号" className={inputClass} defaultValue="090-1234-5678" /></div></Card>
            <Card className="p-5"><h2 className="mb-4 text-xl font-black"><Badge>3</Badge> お届けサイクルの選択</h2><div className="grid gap-4 sm:grid-cols-2"><button className="rounded-[10px] border border-[#2F7F88] bg-[#F7FCFA] p-5 text-left font-black">● 3ヶ月に1回お届け <Badge>おすすめ</Badge><span className="block text-sm font-medium text-[#66777A]">定期的に備蓄を見直せて安心です</span></button><button className="rounded-[10px] border border-[#DCE8E5] p-5 text-left font-black">○ 6ヶ月に1回お届け<span className="block text-sm font-medium text-[#66777A]">頻度を抑えてお届けします</span></button></div></Card>
            <Card className="p-5"><h2 className="mb-4 text-xl font-black"><Badge>4</Badge> お支払い方法の選択</h2><div className="grid gap-3 sm:grid-cols-4">{["クレジットカード", "口座振替", "コンビニ後払い", "銀行振込"].map((m, i) => <button key={m} className={`rounded-[10px] border p-4 text-sm font-black ${i === 0 ? "border-[#2F7F88] bg-[#F7FCFA]" : "border-[#DCE8E5]"}`}>{i === 0 ? "●" : "○"} {m}</button>)}</div></Card>
          </div>
          <Card className="h-fit bg-[#F8FCFA] p-6 lg:sticky lg:top-6">
            <h2 className="text-center text-2xl font-black">ご注文内容</h2>
            <div className="mt-5 rounded-[12px] border border-[#DCE8E5] bg-white p-5"><h3 className="text-xl font-black text-[#2F7F88]">家族プラン</h3><p className="mt-3 text-sm text-[#66777A]">4人家族の備蓄目安</p><div className="mt-4 flex justify-between border-t border-[#DCE8E5] pt-4"><span>月額</span><strong>4,980円（税込）</strong></div><div className="mt-2 flex justify-between"><span>送料</span><strong>無料</strong></div></div>
            <div className="mt-4 rounded-[10px] bg-[#E7F6F1] p-4 text-right"><span className="float-left text-sm font-black text-[#2F7F88]">初回お支払い金額</span><strong className="text-3xl text-[#2F7F88]">4,980円</strong></div>
            <Button onClick={() => onNavigate?.("dashboard")} className="mt-5 w-full py-4 text-lg">内容を確認して申し込む</Button>
          </Card>
        </div>
      </Section>
    </PageShell>
  );
}

export function SupportPage() {
  return (
    <PageShell>
      <PageHero icon="☏" title="FAQ・お問い合わせ" lead="プラン、配送、期限管理、法人利用についてよくある質問をまとめました。困ったときはサポートにご相談ください。" />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="bg-[#F6FAF8] p-6 text-center"><OptimizedImage src={illust("support-agent.png")} alt="SONAE BOX のサポート担当者イラスト" loading="lazy" decoding="async" className="mx-auto h-72 object-contain" /><h2 className="mt-4 text-2xl font-black">いつでもサポート</h2><p className="mt-3 text-sm leading-[1.8] text-[#66777A]">チャット・メール・電話で、備蓄の悩みやサービスの使い方をサポートします。</p></Card>
          <div><div className="mb-5 flex flex-wrap gap-2">{["すべて", "料金", "配送", "期限管理", "法人"].map((tag) => <Badge key={tag}>{tag}</Badge>)}</div><FaqList /></div>
        </div>
      </Section>
      <Section title="お問い合わせフォーム" className="bg-[#F6FAF8]">
        <Card className="mx-auto max-w-3xl p-6"><div className="grid gap-4 sm:grid-cols-2"><input aria-label="お名前" className="rounded-[8px] border border-[#CFE3DF] px-4 py-3" placeholder="お名前" /><input aria-label="メールアドレス" className="rounded-[8px] border border-[#CFE3DF] px-4 py-3" placeholder="メールアドレス" /><select aria-label="お問い合わせ種別" className="rounded-[8px] border border-[#CFE3DF] px-4 py-3 sm:col-span-2"><option>お問い合わせ種別を選択</option></select><textarea aria-label="お問い合わせ内容" className="min-h-36 rounded-[8px] border border-[#CFE3DF] px-4 py-3 sm:col-span-2" placeholder="お問い合わせ内容" /></div><Button className="mt-5 w-full">送信する</Button></Card>
      </Section>
    </PageShell>
  );
}

export function LegalPage() {
  const sections = ["特定商取引法に基づく表記", "利用規約", "プライバシーポリシー", "キャンセル・解約ポリシー"];
  return (
    <PageShell>
      <PageHero icon="§" title="法務・ポリシー" lead="SONAE BOX のご利用に関する各種規約・ポリシーを掲載しています。" />
      <Section>
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <Card className="h-fit p-4">{sections.map((s, i) => <a key={s} href={`#legal-${i}`} className={`block rounded-[8px] px-4 py-3 text-sm font-black ${i === 0 ? "bg-[#E7F6F1] text-[#2F7F88]" : "text-[#526568]"}`}>{s}</a>)}</Card>
          <div className="space-y-6">{sections.map((section, index) => <Card key={section} className="p-6" id={`legal-${index}`}><h2 className="text-2xl font-black">{section}</h2><div className="mt-5 overflow-hidden rounded-[10px] border border-[#DCE8E5]"><table className="w-full text-sm"><tbody>{["事業者名", "所在地", "お問い合わせ", "サービス内容", "料金・支払い", "返品・解約"].map((label) => <tr key={label} className="border-t first:border-t-0 border-[#DCE8E5]"><th className="w-40 bg-[#F6FAF8] p-4 text-left text-[#526568]">{label}</th><td className="p-4 leading-[1.8] text-[#1F2A2E]">SONAE BOX サンプル表記。実運用時には正式な内容に差し替えてください。</td></tr>)}</tbody></table></div></Card>)}</div>
        </div>
      </Section>
    </PageShell>
  );
}
