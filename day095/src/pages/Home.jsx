import { Dashboard } from "../components/Dashboard";
import { Badge, Button, LabelSticker, PaperCard, SectionShell } from "../components/Shared";
import { Icon } from "../components/Icons";
import { siteData } from "../data/siteData";

const problemCards = [
  {
    title: "在庫切れ・機会損失",
    icon: "alert",
    points: ["気づいた時には売り切れ", "欠品で広告費が無駄に", "販売機会を逃し続けている"]
  },
  {
    title: "価格の取りこぼし",
    icon: "priceTag",
    points: ["値上げ時の小さなズレ", "セール価格改定の反映漏れ", "利益を削ってしまう"]
  },
  {
    title: "SKU管理の複雑さ",
    icon: "skuTable",
    points: ["SKUが増えて棚卸し限界", "表計算の更新が追いつかない", "正確な在庫が把握できない"]
  },
  {
    title: "日次チェックの負担",
    icon: "document",
    points: ["毎朝の確認に時間がかかる", "複数モールの確認が大変", "本来の業務に集中できない"]
  }
];

const flowSteps = [
  ["データをつなぐ", "ECモールやカート、在庫システムを連携。", "sync"],
  ["自動で収集・整形", "在庫・価格・SKUを毎朝同じ形へ整えます。", "skuTable"],
  ["異常を検知", "欠品予兆や価格差分を自動で検知。", "alert"],
  ["アラートで通知", "重要な変化をメール・画面で通知。", "mail"],
  ["対策して改善", "補充や価格調整を素早く実行。", "check"]
];

const beforeRows = [
  ["在庫切れに気づくのが遅い", "欠品予兆を事前に検知"],
  ["価格差分の把握ができていない", "価格差分を自動で可視化"],
  ["SKUが増えて管理が複雑", "SKUを一元管理で正確に把握"],
  ["毎朝のチェックに時間がかかる", "アラートで素早く対応"],
  ["データがバラバラで分析できない", "データが整い、改善が回る"]
];

const guarantees = [
  ["初期費用 0円", "月額のみで始められる", "shield"],
  ["最短即日で開始", "シンプルな初期設定", "sync"],
  ["サポート充実", "日本語で安心サポート", "help"]
];

export function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ComparisonSection />
      <DiagnosisStrip />
      <FaqPreview />
      <FinalPrompt />
    </>
  );
}

function Hero() {
  return (
    <section className="home-hero paper-bg relative overflow-hidden border-b border-grid/70 px-5 py-12 md:px-8 md:py-16">
      <DecorImage src="/assets/decor/round-stamp-stockops.png" className="right-[4%] top-24 hidden w-28 opacity-80 lg:block" />
      <DecorImage src="/assets/decor/shipping-label-warning.png" className="bottom-8 left-[2%] hidden w-36 rotate-[-3deg] opacity-70 xl:block" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="relative z-10">
          <LabelSticker>StockOps Atelier</LabelSticker>
          <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-tight text-ink md:text-6xl">
            小さなEC運営を、静かな管制室に変える。
          </h1>
          <div className="mt-5 h-1 w-40 rounded-full bg-teal" />
          <p className="mt-6 max-w-lg text-xl font-semibold leading-9 text-ink">
            在庫・価格・SKUを、毎朝見える状態へ。
          </p>
          <p className="mt-3 max-w-lg text-base leading-8 text-slip">
            小規模ECのための在庫・価格モニタリング自動化。判断に必要な変化だけを朝の台帳にまとめます。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#diagnosis" className="cta-pulse px-7" icon="search">無料で棚卸し診断を受ける</Button>
            <Button href="#demo" variant="secondary" className="px-7" icon="chart">デモ画面を見る</Button>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {guarantees.map(([title, note, icon]) => (
              <div key={title} className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-grid bg-white/70 text-teal">
                  <Icon name={icon} size={21} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{title}</span>
                  <span className="block text-xs leading-5 text-slip">{note}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="dashboard-reveal relative z-10 lg:-mr-10">
          <Dashboard />
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <SectionShell id="problem" eyebrow="Problem" title="よくある問題">
      <div className="relative">
        <DecorImage src="/assets/decor/shipping-label-warning.png" className="right-0 top-[-36px] hidden w-32 opacity-80 lg:block" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problemCards.map((card) => (
            <PaperCard key={card.title} className="min-h-[230px]">
              <Icon name={card.icon} className="text-teal" size={34} />
              <h3 className="mt-5 text-xl font-semibold text-ink">{card.title}</h3>
              <ul className="mt-5 space-y-3">
                {card.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-6 text-slip">
                    <Icon name="check" className="mt-1 shrink-0 text-teal" size={16} />
                    {point}
                  </li>
                ))}
              </ul>
            </PaperCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function SolutionSection() {
  return (
    <SectionShell eyebrow="Solution" title="StockOps Atelier が、毎朝の「見える化」を自動で。">
      <div className="grid gap-4 lg:grid-cols-5">
        {flowSteps.map(([title, text, icon], index) => (
          <PaperCard key={title} className="flow-card min-h-[210px]" style={{ animationDelay: `${index * 90}ms` }}>
            <Badge tone="teal">{index + 1}</Badge>
            <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slip">{text}</p>
            <Icon name={icon} className="mt-6 text-teal" size={42} />
          </PaperCard>
        ))}
      </div>
    </SectionShell>
  );
}

function FeaturesSection() {
  return (
    <SectionShell id="features" eyebrow="Features" title="主な機能">
      <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <DecorImage src="/assets/decor/tape-checked-stockops.png" className="right-[-10px] top-[-48px] hidden w-40 rotate-6 opacity-85 xl:block" />
        {siteData.features.map((feature) => (
          <PaperCard key={feature.title} className="feature-card flex min-h-[150px] gap-4">
            <img src={feature.icon} alt="" className="h-12 w-12 shrink-0 object-contain" />
            <div>
              <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slip">{feature.description}</p>
            </div>
          </PaperCard>
        ))}
      </div>
    </SectionShell>
  );
}

function ComparisonSection() {
  return (
    <SectionShell eyebrow="Before / After" title="導入前と導入後の違い">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
        <ComparisonPanel title="導入前" tone="before" items={beforeRows.map(([before]) => before)} />
        <div className="hidden items-center justify-center text-teal lg:flex">
          <Icon name="sync" size={46} />
        </div>
        <ComparisonPanel title="導入後" tone="after" items={beforeRows.map(([, after]) => after)} />
      </div>
    </SectionShell>
  );
}

function ComparisonPanel({ title, tone, items }) {
  const isAfter = tone === "after";
  return (
    <PaperCard className="overflow-hidden p-0">
      <div className={`px-5 py-4 text-white ${isAfter ? "bg-teal" : "bg-slip"}`}>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="grid gap-5 p-5 md:grid-cols-[1fr_220px]">
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
              <Icon name={isAfter ? "check" : "alert"} className={`mt-1 shrink-0 ${isAfter ? "text-teal" : "text-slip"}`} size={17} />
              {item}
            </li>
          ))}
        </ul>
        <div className="rounded-md border border-grid bg-white/70 p-3">
          <table className="w-full text-left text-xs text-ink">
            <thead className="text-slip">
              <tr><th>SKU</th><th>在庫</th><th>更新</th></tr>
            </thead>
            <tbody>
              {["AT-001", "AT-002", "AT-003", "AT-004"].map((sku, index) => (
                <tr key={sku} className="border-t border-grid/70">
                  <td className="py-2">{sku}</td>
                  <td className={isAfter && index < 2 ? "text-copper" : ""}>{[0, 24, 1, 8][index]}</td>
                  <td>{isAfter ? "07:20" : "5/15"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PaperCard>
  );
}

function DiagnosisStrip() {
  return (
    <SectionShell id="pricing" eyebrow="Price / Diagnosis" title="まずは、棚卸し診断から始めませんか？">
      <div className="diagnosis-strip grid gap-4 rounded-lg border border-grid bg-white/80 p-5 shadow-sm lg:grid-cols-[1.1fr_1fr_0.8fr]">
        <div>
          <Badge tone="mint">診断は無料</Badge>
          <p className="mt-4 text-sm leading-7 text-slip">
            あなたのストアの在庫・価格・SKU管理状況を確認し、改善ポイントを短時間で整理します。
          </p>
        </div>
        <div className="rounded-md border border-grid bg-[#fbfaf6] p-5">
          <p className="text-sm font-semibold text-ink">最短5分で完了</p>
          <Button href="#diagnosis" className="mt-4 w-full" icon="search">無料で棚卸し診断を受ける</Button>
          <p className="mt-3 text-xs leading-5 text-slip">診断後、そのまま無料でアカウント作成できます。</p>
        </div>
        <div className="rounded-md border border-grid bg-[#fbfaf6] p-5">
          <p className="text-sm font-semibold text-slip">シンプルな月額料金</p>
          <p className="mt-4 text-5xl font-semibold text-ink">9,800<span className="text-base">円〜</span></p>
          <p className="mt-2 text-xs text-slip">月額・税別 / SKU数に応じて選択</p>
        </div>
      </div>
    </SectionShell>
  );
}

function FaqPreview() {
  return (
    <SectionShell id="faq" eyebrow="FAQ" title="よくある質問">
      <div className="grid gap-4 md:grid-cols-2">
        {siteData.faq.slice(0, 4).map((item) => (
          <PaperCard key={item.question} className="faq-card">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-semibold leading-7 text-ink">Q. {item.question}</h3>
              <span className="text-2xl leading-none text-teal">+</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slip">{item.answer}</p>
          </PaperCard>
        ))}
      </div>
    </SectionShell>
  );
}

function FinalPrompt() {
  return (
    <section className="border-t border-grid/70 bg-[#f1eee6] px-5 py-9 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <LabelSticker>Next Step</LabelSticker>
          <p className="mt-3 text-2xl font-semibold text-ink">今朝の在庫チェックを、明日から短く。</p>
        </div>
        <Button href="#demo" variant="secondary" icon="chart">デモ画面を見る</Button>
      </div>
    </section>
  );
}

function DecorImage({ src, className }) {
  return <img src={src} alt="" className={`label-float pointer-events-none absolute z-0 select-none ${className}`} />;
}
