import { Badge, Button, LabelSticker, PaperCard, SectionShell } from "../components/Shared";
import { Icon } from "../components/Icons";
import { siteData } from "../data/siteData";

const problemCards = [
  {
    title: "在庫切れ・機会損失",
    icon: "/assets/icons-transparent/icon-alert.png",
    points: ["気づいた時には売り切れ", "欠品で広告費が無駄に", "販売機会を逃し続けている"]
  },
  {
    title: "価格の取りこぼし",
    icon: "/assets/icons-transparent/icon-price-tag.png",
    points: ["値上げ時の小さなズレ", "セール価格改定の反映漏れ", "利益を削ってしまう"]
  },
  {
    title: "SKU管理の複雑さ",
    icon: "/assets/icons-transparent/icon-sku-table.png",
    points: ["SKUが増えて棚卸し限界", "表計算の更新が追いつかない", "正確な在庫が把握できない"]
  },
  {
    title: "日次チェックの負担",
    icon: "/assets/icons-transparent/icon-document.png",
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

const operationPanels = [
  {
    label: "欠品予兆と価格差分",
    src: "/assets/crops/dashboard-kpi-row.png",
    alt: "欠品予兆、価格差分、最終同期、SKU台帳のKPIカード"
  },
  {
    label: "アラート一覧",
    src: "/assets/crops/dashboard-alert-table.png",
    alt: "在庫と価格のアラート一覧テーブル"
  },
  {
    label: "チャネル状態",
    src: "/assets/crops/dashboard-channel-status.png",
    alt: "自社EC、楽天市場、Amazon、Yahoo!ショッピングの連携状態"
  }
];

const ledgerArtifacts = [
  ["/assets/crops/shipping-label-stock.png", "在庫確認ラベル"],
  ["/assets/crops/shipping-label-shipment.png", "出荷確認ラベル"],
  ["/assets/crops/shipping-label-arrival.png", "入荷確認ラベル"],
  ["/assets/crops/badge-shortage-forecast.png", "欠品予兆バッジ"],
  ["/assets/crops/badge-price-up.png", "価格上昇バッジ"],
  ["/assets/crops/badge-normal.png", "正常バッジ"]
];

const sectionSlices = [
  ["/assets/stockops-full-lp-ui.webp", "ランディングページ全体のモックアップ"],
  ["/assets/stockops-supplemental-crop-contact-sheet.webp", "補助UIコンポーネントのコンタクトシート"],
  ["/assets/crops/section-hero-full.png", "ファーストビュー全体のモックアップ断片"],
  ["/assets/crops/section-pricing-faq-final-cta.png", "料金、FAQ、最終CTAのモックアップ断片"]
];

const featureCardAssets = [
  ["/assets/crops/feature-card-inventory-monitoring.png", "在庫モニタリング機能カード"],
  ["/assets/crops/feature-card-price-tracking.png", "価格モニタリング機能カード"],
  ["/assets/crops/feature-card-sku-ledger-management.png", "SKU台帳機能カード"],
  ["/assets/crops/feature-card-auto-sync.png", "自動同期機能カード"]
];

const dashboardParts = [
  ["/assets/crops/dashboard-sidebar.png", "ダッシュボードサイドバー"],
  ["/assets/crops/kpi-card-inventory.png", "在庫KPIカード"],
  ["/assets/crops/kpi-card-price-delta.png", "価格差分KPIカード"],
  ["/assets/crops/kpi-card-sku-ledger.png", "SKU台帳KPIカード"],
  ["/assets/crops/cta-free-diagnosis.png", "無料診断CTA"]
];

const iconCrops = [
  ["/assets/crops/icon-inventory.png", "在庫アイコン"],
  ["/assets/crops/icon-barcode.png", "バーコードアイコン"],
  ["/assets/crops/icon-price-tag.png", "価格タグアイコン"],
  ["/assets/crops/icon-sync.png", "同期アイコン"],
  ["/assets/crops/icon-alert.png", "アラートアイコン"],
  ["/assets/crops/icon-sku-ledger.png", "SKU台帳アイコン"],
  ["/assets/crops/icon-chart.png", "チャートアイコン"],
  ["/assets/crops/icon-mail-notification.png", "通知アイコン"],
  ["/assets/crops/icon-check.png", "チェックアイコン"],
  ["/assets/crops/icon-settings.png", "設定アイコン"]
];

const transparentIconAssets = [
  ["/assets/icons-transparent/icon-alert.png", "透明アラートアイコン"],
  ["/assets/icons-transparent/icon-barcode.png", "透明バーコードアイコン"],
  ["/assets/icons-transparent/icon-calendar.png", "透明カレンダーアイコン"],
  ["/assets/icons-transparent/icon-cart.png", "透明カートアイコン"],
  ["/assets/icons-transparent/icon-chart.png", "透明チャートアイコン"],
  ["/assets/icons-transparent/icon-check-circle.png", "透明チェックアイコン"],
  ["/assets/icons-transparent/icon-customer.png", "透明顧客アイコン"],
  ["/assets/icons-transparent/icon-document.png", "透明ドキュメントアイコン"],
  ["/assets/icons-transparent/icon-download.png", "透明ダウンロードアイコン"],
  ["/assets/icons-transparent/icon-help-book.png", "透明ヘルプブックアイコン"],
  ["/assets/icons-transparent/icon-inventory-box.png", "透明在庫箱アイコン"],
  ["/assets/icons-transparent/icon-lock.png", "透明ロックアイコン"],
  ["/assets/icons-transparent/icon-mail-alert.png", "透明メール通知アイコン"],
  ["/assets/icons-transparent/icon-price-tag.png", "透明価格タグアイコン"],
  ["/assets/icons-transparent/icon-search.png", "透明検索アイコン"],
  ["/assets/icons-transparent/icon-settings-gear.png", "透明設定アイコン"],
  ["/assets/icons-transparent/icon-sku-table.png", "透明SKU台帳アイコン"],
  ["/assets/icons-transparent/icon-sync.png", "透明同期アイコン"],
  ["/assets/icons-transparent/icon-truck.png", "透明配送アイコン"],
  ["/assets/icons-transparent/icon-upload.png", "透明アップロードアイコン"]
];

const paperStatusParts = [
  ["/assets/crops/badge-low-stock.png", "在庫少バッジ"],
  ["/assets/crops/badge-price-down.png", "価格下落バッジ"],
  ["/assets/crops/label-last-sync.png", "最終同期ラベル"],
  ["/assets/crops/label-price-delta.png", "価格差分ラベル"],
  ["/assets/crops/label-shortage-forecast.png", "欠品予兆ラベル"],
  ["/assets/crops/tag-inventory.png", "在庫タグ"],
  ["/assets/crops/tag-last-sync.png", "最終同期タグ"],
  ["/assets/crops/tag-price.png", "価格タグ"],
  ["/assets/crops/tag-sku-ledger.png", "SKU台帳タグ"],
  ["/assets/crops/round-stamp-stockops.png", "StockOps丸印"],
  ["/assets/crops/shipping-label-warning.png", "注意ラベル"],
  ["/assets/crops/stamp-checked.png", "確認済みスタンプ"],
  ["/assets/crops/tape-checked-stockops.png", "確認済みテープ"],
  ["/assets/crops/dot-grid-tile.png", "ドットグリッド紙面"],
  ["/assets/crops/paper-grid-tile.png", "紙面グリッド"]
];

export function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <OperationViewSection />
      <FeaturesSection />
      <ComparisonSection />
      <LedgerArtifactSection />
      <VisualAssetSystemSection />
      <DiagnosisStrip />
      <FaqPreview />
      <FinalPrompt />
    </>
  );
}

function Hero() {
  return (
    <section className="home-hero paper-bg relative overflow-hidden border-b border-grid/70 px-5 py-12 md:px-8 md:py-14">
      <DecorImage src="/assets/decor/round-stamp-stockops.png" className="right-[4%] top-24 hidden w-28 opacity-80 lg:block" />
      <DecorImage src="/assets/decor/shipping-label-warning.png" className="bottom-8 left-[2%] hidden w-36 rotate-[-3deg] opacity-70 xl:block" />
      <div className="mx-auto grid max-w-[1340px] items-center gap-10 lg:grid-cols-[560px_minmax(0,1fr)]">
        <div className="relative z-10 min-w-0">
          <LabelSticker>StockOps Atelier</LabelSticker>
          <h1 className="hero-title mt-6 max-w-[580px] text-4xl font-semibold leading-tight text-ink md:text-[48px] xl:text-[52px]">
            <span className="block md:whitespace-nowrap">小さなEC運営を、</span>
            <span className="block md:whitespace-nowrap">静かな管制室に変える。</span>
          </h1>
          <div className="mt-5 h-1 w-40 rounded-full bg-teal" />
          <p className="mt-6 max-w-lg text-xl font-semibold leading-9 text-ink">
            在庫・価格・SKUを、毎朝見える状態へ。
          </p>
          <p className="mt-3 max-w-lg text-base leading-8 text-slip">
            小規模ECのための在庫・価格モニタリング自動化。判断に必要な変化だけを朝の台帳にまとめます。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#diagnosis" className="cta-pulse w-full px-5 sm:w-auto sm:px-7" icon="search">
              <span className="hidden sm:inline">無料で棚卸し診断を受ける</span>
              <span className="sm:hidden">無料診断を受ける</span>
            </Button>
            <Button href="#demo" variant="secondary" className="w-full px-5 sm:w-auto sm:px-7" icon="chart">
              <span className="hidden sm:inline">デモ画面を見る</span>
              <span className="sm:hidden">デモを見る</span>
            </Button>
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
        <HeroDashboard />
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="hero-dashboard-frame relative z-10 min-w-0">
      <div className="hero-dashboard-scroll">
        <img
          src="/assets/stockops-hero-dashboard.webp"
          alt="StockOps Atelier の在庫、価格、SKUを確認する管理画面"
          className="hero-dashboard-image"
          loading="eager"
        />
      </div>
      <div className="hero-sync-card label-float hidden rounded-md border border-grid bg-[#fbfaf6]/95 p-4 shadow-lg lg:block">
        <p className="text-xs font-semibold text-steel">最終同期</p>
        <p className="mt-1 text-3xl font-semibold text-ink">07:20</p>
        <Badge tone="mint" className="mt-2">正常</Badge>
      </div>
    </div>
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
              <img src={card.icon} alt="" className="h-11 w-11 object-contain" loading="lazy" />
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

function OperationViewSection() {
  return (
    <SectionShell eyebrow="Operation View" title="朝の確認順を、一枚の台帳に固定する。">
      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <PaperCard className="overflow-hidden p-0">
          <div className="border-b border-grid bg-[#f5f1e9]/85 px-5 py-4">
            <Badge tone="teal">07:20 同期済み</Badge>
            <h3 className="mt-3 text-2xl font-semibold text-ink">欠品、価格、SKUの変化を上から順に確認。</h3>
            <p className="mt-2 text-sm leading-7 text-slip">
              重要なKPI、アラート一覧、チャネル状態を同じ台帳にまとめ、判断の順番を毎朝そろえます。
            </p>
          </div>
          <div className="grid gap-4 p-5">
            {operationPanels.map((panel) => (
              <figure key={panel.label} className="operation-panel overflow-hidden rounded-md border border-grid bg-white/80">
                <img src={panel.src} alt={panel.alt} className="w-full object-cover object-left-top" loading="eager" />
                <figcaption className="border-t border-grid/70 px-4 py-3 text-sm font-semibold text-ink">{panel.label}</figcaption>
              </figure>
            ))}
          </div>
        </PaperCard>
        <PaperCard className="relative overflow-hidden p-0">
          <img
            src="/assets/crops/section-problem-solution.png"
            alt="よくある問題と解決の流れを示す台帳レイアウト"
            className="h-full min-h-[620px] w-full object-cover object-top"
            loading="eager"
          />
        </PaperCard>
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

function LedgerArtifactSection() {
  return (
    <SectionShell eyebrow="Ledger Kit" title="在庫と出荷の小さなサインも、同じ台帳の中へ。">
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <PaperCard className="overflow-hidden p-0">
          <img
            src="/assets/crops/section-features-before-after.png"
            alt="主な機能と導入前後の違い"
            className="h-full min-h-[520px] w-full object-cover object-top"
            loading="eager"
          />
        </PaperCard>
        <div className="grid gap-4 sm:grid-cols-2">
          {ledgerArtifacts.map(([src, alt], index) => (
            <PaperCard key={src} className="label-float flex min-h-[150px] items-center justify-center p-4" style={{ animationDelay: `${index * 80}ms` }}>
              <img src={src} alt={alt} className="max-h-28 w-full object-contain" loading="eager" />
            </PaperCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function VisualAssetSystemSection() {
  return (
    <SectionShell eyebrow="Visual System" title="紙片、カード、スタンプまで、同じ運用言語でそろえる。">
      <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
        <div className="grid gap-4">
          {sectionSlices.map(([src, alt]) => (
            <PaperCard key={src} className="overflow-hidden p-0">
              <img src={src} alt={alt} className="h-full max-h-[340px] w-full object-cover object-top" loading="eager" />
            </PaperCard>
          ))}
        </div>
        <div className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            {featureCardAssets.map(([src, alt]) => (
              <AssetPaper key={src} src={src} alt={alt} className="min-h-[140px]" />
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-3">
              {dashboardParts.map(([src, alt]) => (
                <AssetPaper key={src} src={src} alt={alt} className="min-h-[92px]" imageClassName="max-h-28 object-contain p-2" />
              ))}
            </div>
            <PaperCard className="p-4">
              <div className="grid grid-cols-5 gap-2">
                {iconCrops.map(([src, alt]) => (
                  <img key={src} src={src} alt={alt} className="aspect-square rounded-md border border-grid bg-white/70 object-contain p-2" loading="eager" />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-5 gap-2">
                {transparentIconAssets.map(([src, alt]) => (
                  <img key={src} src={src} alt={alt} className="aspect-square rounded-md border border-teal/10 bg-white object-contain p-2" loading="eager" />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {paperStatusParts.map(([src, alt]) => (
                  <img key={src} src={src} alt={alt} className="h-16 w-full rounded-md border border-grid bg-[#fbfaf6] object-contain p-1.5" loading="eager" />
                ))}
              </div>
            </PaperCard>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function AssetPaper({ src, alt, className = "", imageClassName = "" }) {
  return (
    <PaperCard className={`flex items-center justify-center overflow-hidden p-2 ${className}`}>
      <img src={src} alt={alt} className={`h-full w-full object-cover object-top ${imageClassName}`} loading="eager" />
    </PaperCard>
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
