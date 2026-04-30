import { Dashboard } from "../components/Dashboard";
import { Badge, Button, PageHero, PaperCard, SectionShell } from "../components/Shared";
import { Icon } from "../components/Icons";
import { siteData } from "../data/siteData";

const iconMap = {
  "/assets/icons-transparent/icon-sku-table.png": "skuTable",
  "/assets/icons-transparent/icon-alert.png": "alert",
  "/assets/icons-transparent/icon-price-tag.png": "priceTag",
  "/assets/icons-transparent/icon-sync.png": "sync",
  "/assets/icons-transparent/icon-truck.png": "truck",
  "/assets/icons-transparent/icon-chart.png": "chart"
};

const channels = [
  { name: "Shopify", type: "API連携", status: "自動同期", icon: "cart", items: ["在庫数", "注文", "商品マスタ"] },
  { name: "BASE", type: "CSV/API", status: "差分取込", icon: "inventory", items: ["商品CSV", "注文CSV", "在庫更新"] },
  { name: "楽天市場", type: "CSV連携", status: "確認キュー", mark: "R", items: ["SKU", "価格", "出荷予定"] },
  { name: "Amazon", type: "レポート取込", status: "日次監視", mark: "a", items: ["FBA在庫", "価格差分", "手数料"] },
  { name: "Yahoo!ショッピング", type: "CSV連携", status: "朝同期", mark: "Y!", items: ["注文", "商品", "在庫"] },
  { name: "自社EC / その他", type: "汎用CSV", status: "テンプレート対応", icon: "document", items: ["独自列", "セット品", "メモ"] }
];

const securityItems = [
  { title: "権限ごとの閲覧範囲", icon: "lock", text: "仕入れ、出荷、価格確認など担当に合わせて見える台帳を分けられます。" },
  { title: "同期履歴の保存", icon: "calendar", text: "誰が、いつ、どのチャネルを更新したかを履歴として残します。" },
  { title: "CSVの扱いを固定", icon: "document", text: "初期設定時に列名と用途を確認し、不要な個人情報を取り込まない運用にします。" },
  { title: "通知先の管理", icon: "mail", text: "欠品や価格差分の通知先を担当別に整理し、見落としを減らします。" }
];

const securityIconRow = [
  { label: "権限", icon: "lock", note: "役割別に表示範囲を制御" },
  { label: "同期ログ", icon: "sync", note: "CSV/API更新を履歴化" },
  { label: "通知先", icon: "mail", note: "担当ごとにアラート配信" },
  { label: "CSV列管理", icon: "skuTable", note: "取り込む列だけを固定" },
  { label: "監査ログ", icon: "document", note: "操作内容を確認可能" }
];

const dataFlowSteps = [
  { title: "CSV / ECチャネル", icon: "cart", items: ["Shopify", "BASE", "楽天・Amazon", "汎用CSV"] },
  { title: "安全な取込", icon: "lock", items: ["列名チェック", "権限確認", "取込ログ"] },
  { title: "StockOps台帳", icon: "inventory", items: ["在庫統合", "価格差分", "SKU整流"] },
  { title: "担当者通知", icon: "mail", items: ["欠品予兆", "価格確認", "出荷注意"] }
];

const permissionMatrix = [
  { role: "オーナー", inventory: "編集", price: "編集", logs: "閲覧", settings: "設定" },
  { role: "仕入れ担当", inventory: "編集", price: "閲覧", logs: "閲覧", settings: "-" },
  { role: "出荷担当", inventory: "閲覧", price: "-", logs: "閲覧", settings: "-" },
  { role: "閲覧のみ", inventory: "閲覧", price: "閲覧", logs: "閲覧", settings: "-" }
];

const ledgerRows = [
  ["SKU-042", "リネンポーチ S", "3", "欠品予兆", "本日発注"],
  ["SKU-118", "ギフトセット A", "18", "価格確認", "粗利24%"],
  ["SKU-207", "季節限定キャンドル", "42", "正常", "次回5/24"],
  ["SKU-330", "紙ものスターター", "7", "要確認", "イベント前"]
];

function MockImageFrame({ src, alt, label }) {
  return (
    <PaperCard className="reveal overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-grid bg-[#f5f1e9]/80 px-4 py-3">
        <Badge tone="ink">{label}</Badge>
        <span className="text-xs font-semibold text-slip">画面イメージ</span>
      </div>
      <img className="h-full max-h-[440px] w-full object-cover object-top" src={src} alt={alt} loading="lazy" />
    </PaperCard>
  );
}

function LedgerPreview() {
  return (
    <PaperCard className="reveal overflow-hidden p-0">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-grid bg-[#f5f1e9] px-4 py-3">
        <div className="flex items-center gap-3">
          <Icon name="skuTable" className="text-teal" size={24} />
          <p className="font-semibold text-ink">朝のSKU台帳</p>
        </div>
        <Badge tone="mint">07:20 同期済み</Badge>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] text-left text-sm">
          <thead className="text-xs text-steel">
            <tr>
              {["SKU", "商品", "在庫", "状態", "次のアクション"].map((head) => (
                <th key={head} className="border-b border-grid px-4 py-3 font-semibold">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ledgerRows.map((row) => (
              <tr key={row[0]} className="border-b border-grid/70">
                {row.map((cell, index) => (
                  <td key={cell} className={`px-4 py-3 ${index === 3 && cell !== "正常" ? "font-semibold text-copper" : "text-ink"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PaperCard>
  );
}

function FeatureCard({ feature, index }) {
  const iconName = iconMap[feature.icon] ?? "inventory";
  return (
    <PaperCard className="feature-card reveal min-h-[230px] overflow-hidden" style={{ animationDelay: `${index * 70}ms` }}>
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <img className="h-14 w-14 shrink-0 object-contain" src={feature.icon} alt="" loading="lazy" />
          <Icon name={iconName} className="text-teal" size={28} />
        </div>
        <h3 className="mt-5 text-xl font-semibold leading-snug text-ink">{feature.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slip">{feature.description}</p>
      </div>
    </PaperCard>
  );
}

function SecurityHeroCard() {
  return (
    <PaperCard className="reveal overflow-hidden">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Badge tone="mint">安全な台帳</Badge>
          <p className="mt-4 text-3xl font-semibold text-ink">データ管理ボード</p>
          <p className="mt-2 text-sm leading-6 text-slip">取得する情報、保存する情報、保存しない情報を分けて見える化。</p>
        </div>
        <img className="label-float h-20 w-20 object-contain" src="/assets/icons-transparent/icon-lock.png" alt="" loading="lazy" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {["取得データ", "保存データ", "保存しない情報", "監査ログ"].map((item, index) => (
          <div key={item} className="rounded-md border border-grid bg-white/70 p-3">
            <div className="flex items-center gap-2">
              <Icon name={index === 2 ? "alert" : "check"} className={index === 2 ? "text-copper" : "text-teal"} size={17} />
              <span className="text-sm font-semibold text-ink">{item}</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-slip">
              {index === 0 ? "在庫・注文・SKU・価格の必要項目だけを取得。" : index === 1 ? "取込履歴と設定情報を台帳に保存。" : index === 2 ? "カード情報や不要な個人情報は保存しません。" : "誰が何を行ったかを時系列で確認。"}
            </p>
          </div>
        ))}
      </div>
    </PaperCard>
  );
}

function SecurityIconStrip() {
  return (
    <PaperCard className="reveal p-0">
      <div className="grid divide-y divide-grid/80 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
        {securityIconRow.map((item) => (
          <div key={item.label} className="min-h-[150px] p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-grid bg-white">
                <Icon name={item.icon} className="text-teal" size={28} />
              </div>
              <h3 className="text-base font-semibold text-ink">{item.label}</h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-slip">{item.note}</p>
          </div>
        ))}
      </div>
    </PaperCard>
  );
}

function DataFlowDiagram() {
  return (
    <PaperCard className="reveal overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-grid pb-4">
        <div>
          <Badge tone="teal">データ連携</Badge>
          <h3 className="mt-3 text-2xl font-semibold text-ink">データの流れ</h3>
        </div>
        <span className="text-xs font-semibold text-steel">CSV / API / アラート</span>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {dataFlowSteps.map((step, index) => (
          <div key={step.title} className="relative">
            <div className={`h-full rounded-lg border border-grid bg-white/75 p-4 ${index === 2 ? "shadow-sm ring-2 ring-teal/10" : ""}`}>
              <div className="flex items-center gap-3">
                <div className={`grid h-12 w-12 place-items-center rounded-lg ${index === 2 ? "bg-teal text-white" : "border border-grid bg-[#f5f1e9] text-teal"}`}>
                  <Icon name={step.icon} size={26} />
                </div>
                <h4 className="text-base font-semibold text-ink">{step.title}</h4>
              </div>
              <div className="mt-4 grid gap-2">
                {step.items.map((item) => (
                  <div key={item} className="rounded-md border border-grid/70 bg-white/65 px-3 py-2 text-sm text-ink">{item}</div>
                ))}
              </div>
            </div>
            {index < dataFlowSteps.length - 1 ? (
              <div className="hidden lg:block absolute -right-3 top-1/2 z-10 h-px w-6 bg-teal/45" />
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-5 flex items-center gap-2 text-sm text-slip">
        <Icon name="shield" className="text-teal" size={18} />
        データは必要な列だけを取り込み、台帳内で分析・通知・レポートへ利用します。
      </p>
    </PaperCard>
  );
}

function PermissionMatrix() {
  const columns = [
    ["inventory", "在庫"],
    ["price", "価格"],
    ["logs", "同期履歴"],
    ["settings", "権限設定"]
  ];

  return (
    <PaperCard className="reveal overflow-hidden p-0">
      <div className="border-b border-grid bg-[#f5f1e9]/85 px-4 py-4">
        <Badge tone="ink">権限一覧</Badge>
        <h3 className="mt-3 text-2xl font-semibold text-ink">権限マトリクス</h3>
        <p className="mt-2 text-sm leading-6 text-slip">オーナー、仕入れ、出荷、閲覧のみで操作できる範囲を分けます。</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead className="text-xs text-steel">
            <tr>
              <th className="border-b border-grid px-4 py-3 font-semibold">役割</th>
              {columns.map(([, label]) => (
                <th key={label} className="border-b border-grid px-4 py-3 font-semibold">{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {permissionMatrix.map((row) => (
              <tr key={row.role} className="border-b border-grid/70">
                <td className="px-4 py-3 font-semibold text-ink">{row.role}</td>
                {columns.map(([key]) => (
                  <td key={key} className="px-4 py-3">
                    <PermissionBadge value={row[key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PaperCard>
  );
}

function PermissionBadge({ value }) {
  if (value === "-") {
    return <span className="text-slip">-</span>;
  }

  const tone = value === "設定" || value === "編集" ? "teal" : "mint";
  return <Badge tone={tone}>{value}</Badge>;
}

export function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="在庫、価格、SKUを一枚の運営台帳にまとめる。"
        description="小さなEC運営で散らばりやすい確認作業を、朝10分で判断できる粒度に整えます。"
      >
        <LedgerPreview />
      </PageHero>
      <SectionShell eyebrow="Feature Grid" title="毎朝見るべき変化を、機能ごとに整理。">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.features.map((feature, index) => <FeatureCard key={feature.title} feature={feature} index={index} />)}
        </div>
      </SectionShell>
      <SectionShell eyebrow="Dashboard" title="判断に必要な断片だけを、管理画面へ集約。">
        <Dashboard compact />
      </SectionShell>
    </>
  );
}

export function ChannelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Channels"
        title="販売チャネルごとのズレを、カードで追える。"
        description="Shopify、BASE、楽天、Amazon、自社EC、CSVを同じ台帳へ寄せ、更新履歴と確認キューを残します。"
      >
        <MockImageFrame src="/assets/stockops-full-lp-ui.webp" alt="StockOps Atelier の管理画面モック" label="連携状況ボード" />
      </PageHero>
      <SectionShell eyebrow="Cards" title="連携状態が、担当者に伝わるカード設計。">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, index) => (
            <PaperCard key={channel.name} className="reveal min-h-[240px]" style={{ animationDelay: `${index * 60}ms` }}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-lg border border-grid bg-white">
                    {channel.icon ? <Icon name={channel.icon} className="text-teal" size={28} /> : <span className="text-2xl font-bold text-copper">{channel.mark}</span>}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{channel.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-steel">{channel.type}</p>
                  </div>
                </div>
                <Badge tone="mint">{channel.status}</Badge>
              </div>
              <div className="mt-6 grid gap-2">
                {channel.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-md border border-grid/70 bg-white/65 px-3 py-2 text-sm text-ink">
                    <Icon name="check" className="shrink-0 text-teal" size={16} />
                    <span className="min-w-0">{item}</span>
                  </div>
                ))}
              </div>
            </PaperCard>
          ))}
        </div>
      </SectionShell>
    </>
  );
}

export function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="小規模ECの現場で、判断の順番を変える。"
        description="文具、雑貨、食品D2C、アパレル、コスメまで、紙台帳と管理画面の間にある悩みを減らした事例です。"
      >
        <MockImageFrame src="/assets/stockops-case-study-photo-thumbnails.webp" alt="導入事例の写真サムネイル" label="導入事例の写真" />
      </PageHero>
      <SectionShell eyebrow="Stories" title="在庫アラートから出荷前チェックまで、現場別に活用。">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteData.caseStudies.map((item, index) => (
            <PaperCard key={item.company} className="reveal overflow-hidden p-0" style={{ animationDelay: `${index * 70}ms` }}>
              <img className="h-48 w-full object-cover" src={item.image} alt={`${item.company} の在庫運用イメージ`} loading="lazy" />
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="teal">{item.industry}</Badge>
                  <Badge tone="amber">{item.result}</Badge>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{item.company}</h3>
                <p className="mt-3 text-sm leading-7 text-slip">「{item.quote}」</p>
              </div>
            </PaperCard>
          ))}
        </div>
      </SectionShell>
    </>
  );
}

export function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security"
        title="ひとり運営でも、データの扱いを曖昧にしない。"
        description="在庫表、原価表、注文CSVを安全に扱うため、権限・履歴・通知先を最初から見える形にします。"
      >
        <SecurityHeroCard />
      </PageHero>
      <SectionShell eyebrow="Security Controls" title="権限、同期ログ、通知先、CSV列管理をひと目で確認。">
        <SecurityIconStrip />
      </SectionShell>
      <SectionShell eyebrow="Data Flow" title="CSVやECチャネルから、担当者通知までの流れ。">
        <DataFlowDiagram />
      </SectionShell>
      <SectionShell eyebrow="Permission" title="役割ごとのアクセス範囲を、台帳の前提として固定。">
        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <PermissionMatrix />
          <PaperCard className="reveal">
            <Badge tone="copper">監査ログ</Badge>
            <h3 className="mt-4 text-2xl font-semibold text-ink">監査ログ</h3>
            <div className="mt-5 grid gap-3">
              {["07:20 CSV取込 / 佐藤", "07:23 価格アラート確認 / 山田", "07:31 権限設定更新 / オーナー"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-grid bg-white/70 px-3 py-3 text-sm text-ink">
                  <Icon name="calendar" className="shrink-0 text-teal" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-slip">誰が何を行ったかを残すことで、属人的な台帳更新や口頭確認を減らします。</p>
          </PaperCard>
        </div>
      </SectionShell>
      <SectionShell eyebrow="Policy" title="運営台帳を守るための基本設計。">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {securityItems.map((item, index) => (
            <PaperCard key={item.title} className="reveal min-h-[220px]" style={{ animationDelay: `${index * 70}ms` }}>
              <Icon name={item.icon} className="text-teal" size={34} />
              <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slip">{item.text}</p>
            </PaperCard>
          ))}
        </div>
      </SectionShell>
      <SectionShell eyebrow="Next Step" title="安全な初期設定から、無料診断で確認できます。">
        <PaperCard className="diagnosis-strip flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <Badge tone="copper">15分</Badge>
            <p className="mt-4 text-2xl font-semibold text-ink">今の台帳で、どこまで共有してよいかを整理します。</p>
          </div>
          <Button href="#diagnosis" className="cta-pulse shrink-0" icon="search">無料で棚卸し診断を受ける</Button>
        </PaperCard>
      </SectionShell>
    </>
  );
}
