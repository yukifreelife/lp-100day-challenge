import { useState } from "react";
import { Badge, Button, PageHero, PaperCard, SectionShell } from "../components/Shared";
import { Icon } from "../components/Icons";
import { siteData } from "../data/siteData";

const supportTopics = [
  {
    title: "初期設定",
    description: "CSV取り込み、チャネル接続、SKU台帳の列合わせを順番に確認します。",
    icon: "settings",
    count: "12件"
  },
  {
    title: "日次チェック",
    description: "欠品予兆、価格差分、出荷前メモの読み方を運用シーン別に整理します。",
    icon: "check",
    count: "9件"
  },
  {
    title: "データ連携",
    description: "Shopify、BASE、楽天、Amazon、CSV同期の更新履歴と注意点をまとめます。",
    icon: "sync",
    count: "15件"
  },
  {
    title: "請求・契約",
    description: "プラン変更、請求書、契約名義、解約手続きのよくある確認項目です。",
    icon: "document",
    count: "7件"
  }
];

const helpArticles = [
  ["CSVからSKU台帳を初回作成する", "初期設定", "約8分"],
  ["欠品予兆アラートの優先度を読む", "日次運用", "約5分"],
  ["BASE在庫CSVの差分だけを取り込む", "連携", "約6分"],
  ["粗利率が下がった商品の確認手順", "価格", "約7分"]
];

const faqGroups = [
  { label: "導入前", items: siteData.faq },
  {
    label: "運用",
    items: [
      {
        question: "アラートは毎日確認が必要ですか？",
        answer: "重要度の高い変化だけを先に表示するため、朝の確認は5分から10分を目安にできます。メール通知だけで追う運用も可能です。"
      },
      {
        question: "スタッフごとに見られる範囲を変えられますか？",
        answer: "Atelier Plusでは権限管理に対応しています。出荷担当、仕入れ担当、管理者で表示項目を分けられます。"
      },
      {
        question: "イベント販売の在庫も管理できますか？",
        answer: "できます。イベント持ち出し分を一時在庫として登録し、終了後に実在庫へ戻す運用テンプレートを用意しています。"
      }
    ]
  },
  {
    label: "契約",
    items: [
      {
        question: "プランは途中で変更できますか？",
        answer: "月単位で変更できます。SKU数や連携チャネルが増えたタイミングで上位プランへ移行できます。"
      },
      {
        question: "請求書払いに対応していますか？",
        answer: "Studio以上で請求書払いに対応しています。Starterはクレジットカード払いが基本です。"
      }
    ]
  }
];

const legalSections = [
  {
    title: "利用規約",
    badge: "Terms",
    items: ["サービス利用範囲", "アカウント管理", "禁止事項", "免責と停止条件"]
  },
  {
    title: "プライバシーポリシー",
    badge: "Privacy",
    items: ["取得する情報", "利用目的", "第三者提供", "開示・削除請求"]
  },
  {
    title: "特定商取引法に基づく表記",
    badge: "Commerce",
    items: ["販売事業者", "料金と支払方法", "キャンセル", "問い合わせ窓口"]
  },
  {
    title: "セキュリティ方針",
    badge: "Security",
    items: ["アクセス権限", "同期ログ", "データ保管", "外部連携の管理"]
  }
];

const operations = [
  ["朝の10分点検", "欠品予兆、価格差分、同期エラーを上から順に確認し、今日動くSKUだけを抽出します。", "calendar"],
  ["週次の補充会議", "販売速度と入荷予定を同じ表で見ながら、追加発注と販売停止の候補を決めます。", "inventory"],
  ["月次の粗利見直し", "送料、手数料、原価の変化を反映し、値上げ候補と据え置き商品を分けます。", "priceTag"]
];

export function HelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Help Center"
        title="迷った時に、運用台帳へ戻れるヘルプセンター。"
        description="初期設定から毎朝の確認まで、StockOps Atelierの使い方を紙台帳の見出しのように探せます。"
      >
        <HeroLedger type="help" />
      </PageHero>
      <SectionShell eyebrow="Search" title="まずは困っている作業を選ぶ">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {supportTopics.map((topic) => (
            <PaperCard key={topic.title} className="reveal min-h-[220px]">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-grid bg-white/75 text-teal">
                  <Icon name={topic.icon} size={25} />
                </span>
                <Badge tone="mint">{topic.count}</Badge>
              </div>
              <h2 className="mt-5 text-xl font-semibold leading-7 text-ink">{topic.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slip">{topic.description}</p>
            </PaperCard>
          ))}
        </div>
      </SectionShell>
      <SectionShell eyebrow="Popular" title="よく読まれている運用ドキュメント">
        <ArticleTable rows={helpArticles} />
      </SectionShell>
      <SupportCta />
    </>
  );
}

export function FaqPage() {
  const [openItems, setOpenItems] = useState(() => new Set(["導入前-0"]));

  const toggleItem = (id) => {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="導入前の疑問を、ひとつずつ消していく。"
        description="契約、移行、連携、毎日の運用について、個人事業主や小規模ECから多い質問をまとめました。"
      >
        <HeroLedger type="faq" />
      </PageHero>
      {faqGroups.map((group) => (
        <SectionShell key={group.label} eyebrow={group.label} title={`${group.label}に関する質問`}>
          <div className="grid gap-4 lg:grid-cols-2">
            {group.items.map((item, index) => {
              const id = `${group.label}-${index}`;
              const panelId = `faq-panel-${group.label}-${index}`;
              const isOpen = openItems.has(id);

              return (
              <PaperCard key={item.question} className="faq-card reveal min-h-[132px]">
                <button
                  type="button"
                  className="flex w-full items-start gap-3 text-left focus:outline-none focus:ring-2 focus:ring-teal/30 focus:ring-offset-2"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(id)}
                >
                  <Badge tone="teal" className="shrink-0">Q</Badge>
                  <span className="min-w-0 grow text-lg font-semibold leading-8 text-ink">{item.question}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-grid bg-white/80 text-xl font-semibold leading-none text-teal">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <p id={panelId} className="mt-4 border-t border-grid/70 pt-4 text-sm leading-7 text-slip">
                    {item.answer}
                  </p>
                ) : null}
              </PaperCard>
              );
            })}
          </div>
        </SectionShell>
      ))}
      <SupportCta />
    </>
  );
}

export function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="連携状況と運用案内を、時系列で確認する。"
        description="機能追加、テンプレート更新、相談枠の案内など、日々の運用に関わる変更を掲載しています。"
      >
        <HeroLedger type="news" />
      </PageHero>
      <SectionShell eyebrow="Latest" title="最新のお知らせ">
        <div className="grid gap-4">
          {siteData.news.map((item, index) => (
            <PaperCard key={`${item.date}-${item.title}`} className="reveal">
              <div className="grid gap-4 md:grid-cols-[140px_160px_1fr_auto] md:items-center">
                <time className="text-sm font-semibold text-steel">{item.date}</time>
                <Badge tone={index === 0 ? "copper" : "teal"}>{item.type}</Badge>
                <h2 className="text-lg font-semibold leading-7 text-ink">{item.title}</h2>
                <Icon name="document" className="hidden text-teal md:block" size={24} />
              </div>
            </PaperCard>
          ))}
        </div>
      </SectionShell>
      <SectionShell eyebrow="Release Note" title="運用担当者向けの補足">
        <div className="grid gap-4 md:grid-cols-3">
          {["差分インポート後は同期履歴を確認", "連休前は補充期限を前倒し設定", "テンプレート更新は複製して検証"].map((note, index) => (
            <PaperCard key={note} className="label-float min-h-[150px]">
              <Badge tone="amber">MEMO 0{index + 1}</Badge>
              <p className="mt-5 text-lg font-semibold leading-8 text-ink">{note}</p>
            </PaperCard>
          ))}
        </div>
      </SectionShell>
    </>
  );
}

export function ColumnPage() {
  return (
    <>
      <PageHero
        eyebrow="Column"
        title="小さなECの在庫判断を、明日の手順に変える。"
        description="欠品、価格、SKU整備の悩みを、実務で使えるチェックリストと台帳の見方に落とし込みます。"
      >
        <HeroLedger type="column" />
      </PageHero>
      <SectionShell eyebrow="Articles" title="活用方法コラム">
        <div className="grid gap-4 lg:grid-cols-3">
          {siteData.posts.map((post) => (
            <PaperCard key={post.title} className="reveal flex min-h-[280px] flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="mint">{post.category}</Badge>
                <time className="text-xs font-semibold text-steel">{post.date}</time>
              </div>
              <h2 className="mt-5 text-xl font-semibold leading-8 text-ink">{post.title}</h2>
              <p className="mt-4 grow text-sm leading-7 text-slip">{post.excerpt}</p>
              <Button href="#column" variant="secondary" className="mt-6 w-full sm:w-auto" icon="document">
                詳細を読む
              </Button>
            </PaperCard>
          ))}
        </div>
      </SectionShell>
      <SectionShell eyebrow="Playbook" title="運用に落とし込む3つの型">
        <div className="grid gap-4 md:grid-cols-3">
          {operations.map(([title, text, icon], index) => (
            <PaperCard key={title} className="reveal min-h-[230px]" style={{ animationDelay: `${index * 90}ms` }}>
              <Icon name={icon} className="text-teal" size={34} />
              <h2 className="mt-5 text-xl font-semibold text-ink">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slip">{text}</p>
            </PaperCard>
          ))}
        </div>
      </SectionShell>
    </>
  );
}

export function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal / Policy"
        title="安心して運用を預けるための法務・ポリシー。"
        description="利用規約、プライバシー、特商法表記、セキュリティ方針を、確認しやすい台帳形式で整理しています。"
      >
        <HeroLedger type="legal" />
      </PageHero>
      <SectionShell eyebrow="Documents" title="確認できる文書">
        <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
          <PaperCard className="label-float h-fit">
            <p className="text-xs font-semibold text-steel">ポリシー一覧</p>
            <div className="mt-5 space-y-2">
              {legalSections.map((section) => (
                <button
                  key={section.title}
                  type="button"
                  className="flex items-center justify-between rounded-md border border-grid bg-white/70 px-3 py-3 text-left text-sm font-semibold text-ink transition hover:border-teal/50 hover:text-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
                  onClick={() => document.getElementById(section.badge.toLowerCase())?.scrollIntoView({ behavior: "smooth", block: "start" })}
                >
                  {section.title}
                  <Icon name="document" size={17} />
                </button>
              ))}
            </div>
          </PaperCard>
          <div className="grid gap-4 md:grid-cols-2">
            {legalSections.map((section) => (
              <PaperCard key={section.title} id={section.badge.toLowerCase()} className="reveal min-h-[230px]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h2 className="text-xl font-semibold leading-8 text-ink">{section.title}</h2>
                  <Badge tone="ink">{section.badge}</Badge>
                </div>
                <ul className="mt-5 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slip">
                      <Icon name="check" className="mt-1 shrink-0 text-teal" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </PaperCard>
            ))}
          </div>
        </div>
      </SectionShell>
      <SectionShell eyebrow="Contact" title="規約・個人情報に関するお問い合わせ">
        <PaperCard className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Badge tone="teal">窓口</Badge>
            <p className="mt-4 text-sm leading-7 text-slip">
              文書の最新版、データ削除、開示請求、契約条件の確認はサポート窓口で受け付けています。
            </p>
          </div>
          <Button href="#contact" className="cta-pulse" icon="mail">問い合わせる</Button>
        </PaperCard>
      </SectionShell>
    </>
  );
}

function HeroLedger({ type }) {
  const rows = {
    help: [["SETUP", "初期設定", "確認中"], ["DAILY", "朝の点検", "推奨"], ["SYNC", "連携ログ", "更新あり"]],
    faq: [["Q-01", "移行", "回答済"], ["Q-02", "契約", "回答済"], ["Q-03", "運用", "更新中"]],
    news: [["04/18", "機能追加", "New"], ["04/09", "相談枠", "Open"], ["03/30", "テンプレート", "Added"]],
    column: [["NOTE", "欠品対策", "8 min"], ["PRICE", "粗利確認", "6 min"], ["SKU", "命名ルール", "5 min"]],
    legal: [["TERMS", "利用規約", "有効"], ["PRIVACY", "個人情報", "管理中"], ["SECURITY", "権限", "監査中"]]
  }[type];

  return (
    <PaperCard className="reveal overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b border-grid/70 pb-4">
        <div>
          <p className="text-xs font-semibold text-steel">運用ドキュメント</p>
          <p className="mt-1 text-lg font-semibold text-ink">運用デスク</p>
        </div>
        <span className="label-float rounded-md border border-copper/30 bg-copper/10 px-3 py-2 text-xs font-semibold text-copper">
          確認済み
        </span>
      </div>
      <div className="mt-5 grid gap-3">
        {rows.map(([code, label, status]) => (
          <div key={code} className="grid grid-cols-[72px_1fr_auto] items-center gap-3 rounded-md border border-grid bg-white/70 px-3 py-3 text-sm">
            <span className="font-semibold text-teal">{code}</span>
            <span className="min-w-0 truncate font-semibold text-ink">{label}</span>
            <span className="rounded-full bg-mint/15 px-2 py-1 text-xs font-semibold text-teal">{status}</span>
          </div>
        ))}
      </div>
    </PaperCard>
  );
}

function ArticleTable({ rows }) {
  return (
    <PaperCard className="overflow-hidden p-0">
      <div className="grid gap-0">
        {rows.map(([title, category, time]) => (
          <div key={title} className="grid gap-3 border-b border-grid/70 p-4 last:border-b-0 md:grid-cols-[1fr_140px_100px] md:items-center">
            <p className="min-w-0 text-base font-semibold leading-7 text-ink">{title}</p>
            <Badge tone="mint" className="w-fit">{category}</Badge>
            <span className="text-sm font-semibold text-steel">{time}</span>
          </div>
        ))}
      </div>
    </PaperCard>
  );
}

function SupportCta() {
  return (
    <section className="border-t border-grid/70 bg-[#f1eee6] px-5 py-10 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <Badge tone="teal">サポート</Badge>
          <p className="mt-3 text-2xl font-semibold leading-8 text-ink">台帳を見ても迷う時は、運用相談へ。</p>
          <p className="mt-2 text-sm leading-7 text-slip">CSV、連携、価格判断の詰まりをサポート担当が一緒に確認します。</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Button href="#contact" className="cta-pulse" icon="mail">相談する</Button>
          <Button href="#diagnosis" variant="secondary" icon="search">無料診断へ</Button>
        </div>
      </div>
    </section>
  );
}
