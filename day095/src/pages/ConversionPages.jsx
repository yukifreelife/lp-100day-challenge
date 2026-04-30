import { useMemo, useState } from "react";
import { Dashboard } from "../components/Dashboard";
import { Icon } from "../components/Icons";
import { Badge, Button, PageHero, PaperCard, SectionShell } from "../components/Shared";
import {
  CheckboxCardGroup,
  ConsentBox,
  FormField,
  FormTrustNote,
  NumberStepperField,
  RadioChipGroup,
  SelectField,
  TextAreaField
} from "../components/FormParts";
import { siteData } from "../data/siteData";
import diagnosisMock from "../../assets/generated/pages/page-free-diagnosis.png";
import demoMock from "../../assets/generated/pages/page-demo.png";
import pricingMock from "../../assets/generated/pages/page-pricing.png";
import contactMock from "../../assets/generated/pages/page-contact.png";
import fullLpMock from "../../assets/generated/stockops-full-lp-ui.png";

const iconPath = "/assets/icons-transparent";

const diagnosisSteps = [
  ["現状入力", "SKU数、販売チャネル、棚卸し頻度を入力します。", "document"],
  ["詰まりを判定", "欠品、価格差分、台帳の揺れを優先度順に整理します。", "search"],
  ["改善メモを返却", "翌朝から確認すべき台帳項目を短く提案します。", "check"]
];

const demoPanels = [
  ["欠品予兆", "3日以内の補充候補を販売速度から抽出", "alert"],
  ["価格差分", "粗利率と競合価格の変化を同じ行で確認", "priceTag"],
  ["同期履歴", "チャネル別の最終更新と差異を記録", "sync"]
];

const contactReasons = ["無料診断について", "デモ画面を見たい", "料金プランを相談したい", "自社チャネル連携を確認したい", "その他"];

const diagnosisChannels = [
  { label: "Shopify", value: "Shopify", iconSrc: `${iconPath}/icon-cart.png`, note: "自社ストア" },
  { label: "BASE", value: "BASE", iconSrc: `${iconPath}/icon-cart.png`, note: "小規模EC" },
  { label: "楽天", value: "楽天", icon: "priceTag", note: "モール販売" },
  { label: "Amazon", value: "Amazon", icon: "barcode", note: "FBA/自社出荷" },
  { label: "自社EC", value: "自社EC", iconSrc: `${iconPath}/icon-inventory-box.png`, note: "独自カート" },
  { label: "CSV", value: "CSV", iconSrc: `${iconPath}/icon-upload.png`, note: "表計算連携" }
];

const diagnosisIssues = [
  { label: "欠品", value: "欠品" },
  { label: "価格差分", value: "価格差分" },
  { label: "SKU名揺れ", value: "SKU名揺れ" },
  { label: "出荷前チェック", value: "出荷前チェック" },
  { label: "同期履歴", value: "同期履歴" }
];

function MockPreview({ src, alt, label }) {
  return (
    <PaperCard className="reveal overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-grid bg-[#f5f1e9]/75 px-4 py-3">
        <Badge tone="mint">{label}</Badge>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-slip">
          <span className="h-2 w-2 rounded-full bg-copper" />
          <span className="h-2 w-2 rounded-full bg-amber" />
          <span className="h-2 w-2 rounded-full bg-teal" />
        </span>
      </div>
      <img src={src} alt={alt} className="h-auto w-full object-cover" />
    </PaperCard>
  );
}

function FloatingIcon({ src, className = "" }) {
  return <img src={src} alt="" className={`label-float pointer-events-none absolute hidden object-contain opacity-90 lg:block ${className}`} />;
}

function Checklist({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-slip">
          <Icon name="check" className="mt-1 shrink-0 text-teal" size={17} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function MiniLedger({ rows }) {
  return (
    <div className="overflow-hidden rounded-md border border-grid bg-white/80">
      <div className="grid grid-cols-[1.1fr_0.7fr_0.8fr] bg-[#f5f1e9] px-4 py-3 text-xs font-semibold text-slip">
        <span>チェック項目</span>
        <span>状態</span>
        <span>次の対応</span>
      </div>
      {rows.map((row) => (
        <div key={row[0]} className="grid grid-cols-[1.1fr_0.7fr_0.8fr] border-t border-grid/70 px-4 py-3 text-sm text-ink">
          <span className="min-w-0 break-words">{row[0]}</span>
          <span className="min-w-0 break-words text-copper">{row[1]}</span>
          <span className="min-w-0 break-words text-slip">{row[2]}</span>
        </div>
      ))}
    </div>
  );
}

function DiagnosisForm() {
  const [channels, setChannels] = useState(["Shopify", "CSV"]);
  const [skuCount, setSkuCount] = useState("320");
  const [monthlyOrders, setMonthlyOrders] = useState("850");
  const [issue, setIssue] = useState("欠品");

  const previewRows = useMemo(() => {
    const channelText = channels.length ? channels.join(" / ") : "未選択";
    const skuNumber = Number(skuCount) || 0;
    const orderNumber = Number(monthlyOrders) || 0;
    const skuBand = skuNumber >= 2000 ? "大規模" : skuNumber >= 500 ? "要整理" : "軽量";
    const orderBand = orderNumber >= 1000 ? "高頻度" : orderNumber >= 300 ? "中頻度" : "低頻度";

    return [
      ["販売チャネル", channelText, channels.length >= 3 ? "同期履歴を優先確認" : "CSV差分から開始"],
      ["SKU台帳", `${skuCount || 0} SKU / ${skuBand}`, skuNumber >= 500 ? "列名とセット品を整理" : "命名ルールを確認"],
      ["月間注文", `${monthlyOrders || 0} 件 / ${orderBand}`, orderNumber >= 1000 ? "出荷前チェックを自動化" : "朝の確認列を追加"],
      ["最優先課題", issue, issue === "価格差分" ? "粗利率アラートを返却" : issue === "欠品" ? "補充期限を返却" : "台帳メモを返却"]
    ];
  }, [channels, issue, monthlyOrders, skuCount]);

  const toggleChannel = (value) => {
    setChannels((current) => (current.includes(value) ? current.filter((item) => item !== value) : [...current, value]));
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
      <PaperCard className="reveal">
        <div className="flex items-start gap-4">
          <img src={`${iconPath}/icon-search.png`} alt="" className="h-12 w-12 shrink-0 object-contain" />
          <div>
            <h2 className="text-2xl font-semibold text-ink">無料棚卸し診断フォーム</h2>
            <p className="mt-2 text-sm leading-6 text-slip">モール、SKU数、注文量、困りごとを選ぶと、右の朝の台帳プレビューが切り替わります。</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <FormField label="氏名" name="diagnosis-name" placeholder="山田 花子" required />
          <FormField label="メール" name="diagnosis-email" type="email" placeholder="hello@example.com" required />
          <div className="md:col-span-2">
            <FormField label="ストアURL" name="diagnosis-url" type="url" placeholder="https://example.com" />
          </div>
        </div>
        <div className="mt-6">
          <CheckboxCardGroup label="販売チャネル" options={diagnosisChannels} selected={channels} onToggle={toggleChannel} />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <NumberStepperField label="SKU数" name="diagnosis-sku" value={skuCount} onChange={setSkuCount} step={50} unit="SKU" helper="台帳に載っている商品単位" />
          <NumberStepperField label="月間注文数" name="diagnosis-orders" value={monthlyOrders} onChange={setMonthlyOrders} step={100} unit="件/月" helper="直近1か月の出荷・注文目安" />
        </div>
        <div className="mt-6">
          <RadioChipGroup label="困っていること" name="diagnosis-issue" options={diagnosisIssues} value={issue} onChange={setIssue} />
        </div>
        <div className="mt-5">
          <TextAreaField label="相談内容" name="diagnosis-message" placeholder="例: 楽天と自社ECの在庫差異を毎週手作業で直しています。" />
        </div>
        <div className="mt-4 space-y-4">
          <ConsentBox>個人情報の取り扱いに同意して、診断結果の連絡を受け取ります。</ConsentBox>
          <Button className="cta-pulse w-full" icon="search">診断内容を確認する</Button>
        </div>
      </PaperCard>

      <PaperCard className="reveal overflow-hidden p-0">
        <div className="border-b border-grid bg-teal px-5 py-4 text-white">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-white/70">診断プレビュー</p>
              <h2 className="mt-1 text-2xl font-semibold">朝の台帳に返る項目</h2>
            </div>
            <Icon name="document" size={34} />
          </div>
        </div>
        <div className="space-y-4 p-5">
          <div className="rounded-md border border-grid bg-[#fbfaf6] p-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="mint">優先課題: {issue}</Badge>
              <Badge tone="amber">{channels.length || 0}チャネル</Badge>
            </div>
            <p className="mt-4 text-sm leading-7 text-slip">
              入力内容をもとに、欠品予兆・価格差分・SKU名揺れのどこから整えるかを短い台帳メモで返す想定です。
            </p>
          </div>
          <MiniLedger rows={previewRows} />
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["欠品予兆", issue === "欠品" ? "高" : "中"],
              ["価格差分", issue === "価格差分" ? "高" : "低"],
              ["SKU整備", issue === "SKU名揺れ" ? "高" : "中"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-grid bg-white/80 p-3">
                <p className="text-xs font-semibold text-slip">{label}</p>
                <p className={`mt-2 text-2xl font-semibold ${value === "高" ? "text-copper" : value === "中" ? "text-teal" : "text-slip"}`}>{value}</p>
              </div>
            ))}
          </div>
          <FormTrustNote>このプレビューはローカル選択状態だけで切り替わる見た目です。送信や外部保存は行いません。</FormTrustNote>
        </div>
      </PaperCard>
    </div>
  );
}

function ContactForm() {
  return (
    <PaperCard className="reveal">
      <h2 className="text-2xl font-semibold text-ink">お問い合わせフォーム</h2>
      <p className="mt-2 text-sm leading-6 text-slip">導入相談、デモ、連携確認をまとめて受け付ける想定のフォームです。</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <FormField label="氏名" name="contact-name" placeholder="山田 花子" required />
        <FormField label="メール" name="contact-email" type="email" placeholder="hello@example.com" required />
        <FormField label="ストアURL" name="contact-url" type="url" placeholder="https://example.com" />
        <SelectField label="お問い合わせ種別" name="contact-reason" options={contactReasons} />
      </div>
      <div className="mt-4">
        <TextAreaField label="相談内容" name="contact-message" placeholder="現在のSKU数、利用チャネル、見たい画面などをご記入ください。" required />
      </div>
      <div className="mt-4 space-y-4">
        <ConsentBox>利用規約とプライバシーポリシーに同意して送信します。</ConsentBox>
        <Button className="w-full" icon="mail">相談内容を送信する</Button>
      </div>
    </PaperCard>
  );
}

export function DiagnosisPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Diagnosis"
        title="在庫・価格・SKUの詰まりを、無料で棚卸し。"
        description="小さなEC運営の現状を短い入力で整理し、毎朝見るべきアラートと台帳の改善ポイントを返します。"
      >
        <MockPreview src={diagnosisMock} alt="無料棚卸し診断ページのモック" label="無料診断ページ" />
      </PageHero>

      <SectionShell eyebrow="Flow" title="診断は、紙台帳をめくるように短く確認できます。">
        <div className="relative grid gap-4 lg:grid-cols-3">
          <FloatingIcon src={`${iconPath}/icon-document.png`} className="right-8 top-[-54px] h-20 w-20 rotate-6" />
          {diagnosisSteps.map(([title, text, icon], index) => (
            <PaperCard key={title} className="flow-card min-h-[210px]">
              <Badge tone="teal">STEP {index + 1}</Badge>
              <Icon name={icon} className="mt-5 text-teal" size={38} />
              <h2 className="mt-4 text-xl font-semibold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slip">{text}</p>
            </PaperCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="Check Sheet" title="診断で見る項目">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <PaperCard>
            <Checklist
              items={[
                "SKU名や販売単位の揺れがどこで起きているか",
                "欠品アラートを出すべき商品とタイミング",
                "価格改定や送料変更で粗利が崩れている箇所",
                "複数チャネルの在庫差異を戻す優先順位"
              ]}
            />
          </PaperCard>
          <MiniLedger
            rows={[
              ["SKU表の列名", "要整理", "命名ルール化"],
              ["欠品予兆", "高", "発注期限を通知"],
              ["粗利率", "注意", "価格表を更新"],
              ["同期履歴", "未記録", "朝の確認列を追加"]
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell id="diagnosis" eyebrow="Form" title="無料診断を申し込む">
        <DiagnosisForm />
      </SectionShell>
    </>
  );
}

export function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="デモ画面"
        title="毎朝の管制室を、そのままデモで確認。"
        description="欠品予兆、価格差分、チャネル同期を一画面にまとめた管理画面の操作イメージです。"
      >
        <MockPreview src={demoMock} alt="デモ画面ページのモック" label="デモ画面" />
      </PageHero>

      <SectionShell eyebrow="Dashboard" title="デモで確認できる画面">
        <div className="dashboard-reveal overflow-x-auto pb-3">
          <Dashboard />
        </div>
      </SectionShell>

      <SectionShell eyebrow="Highlights" title="確認したい変化だけが、台帳の上に浮かびます。">
        <div className="grid gap-4 md:grid-cols-3">
          {demoPanels.map(([title, text, icon]) => (
            <PaperCard key={title} className="reveal min-h-[190px]">
              <img src={`${iconPath}/icon-${icon === "priceTag" ? "price-tag" : icon}.png`} alt="" className="h-14 w-14 object-contain" />
              <h2 className="mt-4 text-xl font-semibold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slip">{text}</p>
            </PaperCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="全体像" title="運用全体の見え方">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <PaperCard>
            <Badge tone="amber">デモで見るポイント</Badge>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-ink">操作説明より先に、朝の判断順がわかる画面。</h2>
            <p className="mt-4 text-sm leading-7 text-slip">
              在庫アラート、SKU台帳、チャネル同期が同じ紙面に並びます。担当者が増えても「どこを見るか」を揃えやすい構成です。
            </p>
            <div className="mt-5">
              <Button href="#contact" icon="mail">デモ相談をする</Button>
            </div>
          </PaperCard>
          <MockPreview src={fullLpMock} alt="StockOps Atelier 全体LP UI" label="運用画面の全体像" />
        </div>
      </SectionShell>
    </>
  );
}

export function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="SKU数と相談頻度で選べる、静かな月額プラン。"
        description="StarterからAtelier Plusまで、ひとり運営から小さなチーム運営へ段階的に拡張できます。"
      >
        <MockPreview src={pricingMock} alt="料金プランページのモック" label="料金プラン" />
      </PageHero>

      <SectionShell id="pricing" eyebrow="Plans" title="料金プラン">
        <div className="grid gap-4 lg:grid-cols-3">
          {siteData.pricingPlans.map((plan, index) => (
            <PaperCard key={plan.name} className={`reveal flex min-h-[430px] flex-col ${index === 1 ? "border-teal shadow-lg shadow-teal/10" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Badge tone={index === 1 ? "teal" : "mint"}>{index === 1 ? "おすすめ" : plan.name}</Badge>
                  <h2 className="mt-5 text-2xl font-semibold text-ink">{plan.name}</h2>
                </div>
                <img src={`${iconPath}/${index === 0 ? "icon-inventory-box" : index === 1 ? "icon-chart" : "icon-settings-gear"}.png`} alt="" className="h-14 w-14 object-contain" />
              </div>
              <p className="mt-5 text-sm leading-7 text-slip">{plan.description}</p>
              <p className="mt-6 text-5xl font-semibold leading-none text-ink">
                {plan.price}
                <span className="ml-1 text-base font-medium text-slip">/{plan.unit}</span>
              </p>
              <div className="mt-6 flex-1">
                <Checklist items={plan.includes} />
              </div>
              <Button href={index === 0 ? "#diagnosis" : "#contact"} variant={index === 1 ? "primary" : "secondary"} className="mt-6 w-full" icon="priceTag">
                {index === 0 ? "無料診断から始める" : "相談して選ぶ"}
              </Button>
            </PaperCard>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="Compare" title="迷ったら、台帳の複雑さで選びます。">
        <MiniLedger
          rows={[
            ["1チャネル中心 / 300 SKUまで", "Starter", "CSVで整える"],
            ["複数モール / 2,000 SKUまで", "Studio", "週次相談つき"],
            ["担当分業 / 10,000 SKUまで", "Atelier Plus", "権限と通知を設計"]
          ]}
        />
      </SectionShell>
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="導入前のもやもやを、短い相談にまとめる。"
        description="ストアURL、利用チャネル、現在の困りごとを送るだけで、必要な確認画面と進め方を整理します。"
      >
        <MockPreview src={contactMock} alt="お問い合わせページのモック" label="お問い合わせ" />
      </PageHero>

      <SectionShell eyebrow="Contact Form" title="お問い合わせ">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <ContactForm />
          <div className="space-y-5">
            <PaperCard className="reveal">
              <Badge tone="mint">返信目安</Badge>
              <h2 className="mt-5 text-2xl font-semibold text-ink">1営業日以内に、確認ポイントを整理して返信します。</h2>
              <p className="mt-4 text-sm leading-7 text-slip">
                SKU表、在庫CSV、利用中のカートがある場合は、相談時に概要だけ記載してください。初回相談ではファイル添付は不要です。
              </p>
            </PaperCard>
            <FormTrustNote>送信内容は導入相談と連絡のためだけに利用します。価格表や在庫データの詳細は、必要になった段階で安全な共有方法をご案内します。</FormTrustNote>
            <PaperCard className="reveal">
              <h2 className="text-lg font-semibold text-ink">相談前に確認できること</h2>
              <div className="mt-4">
                <Checklist items={["現在のSKU数", "販売チャネル", "棚卸し頻度", "一番困っている在庫・価格の作業"]} />
              </div>
            </PaperCard>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
