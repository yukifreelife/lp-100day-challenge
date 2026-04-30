export const siteData = {
  metadata: {
    brand: "StockOps Atelier",
    title: "在庫と価格の迷いを、ひとりECでも毎朝10分で整える。",
    description:
      "StockOps Atelierは、小規模EC・個人ブランドの在庫、価格変動、チャネル別販売状況を一枚の運営台帳にまとめる在庫オペレーション支援サービスです。",
    url: "https://stockops-atelier.example.com",
    ogImage: "/assets/stockops-hero-dashboard.webp"
  },
  navItems: [
    { label: "課題", href: "#problem" },
    { label: "機能", href: "#features" },
    { label: "導入事例", href: "#cases" },
    { label: "料金", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "無料診断", href: "#contact" }
  ],
  kpis: [
    { label: "欠品予兆の検知", value: "72h前", note: "平均リードタイムから補充期限を自動通知" },
    { label: "棚卸し確認時間", value: "-43%", note: "チャネル別の在庫差異を一画面で確認" },
    { label: "価格改定の見落とし", value: "0件へ", note: "粗利率と競合価格の変動を日次で整理" },
    { label: "対応チャネル", value: "8種", note: "Shopify、BASE、楽天、Amazon、CSVに対応" }
  ],
  alerts: [
    {
      level: "critical",
      title: "SKU-042 リネンポーチが3日以内に欠品見込み",
      detail: "直近7日の販売速度が通常比128%。本日15時までの発注確認を推奨。"
    },
    {
      level: "warning",
      title: "ギフトセットAの粗利率が目標を下回りました",
      detail: "仕入れ単価改定により粗利率が31%から24%へ低下。価格表の見直し候補です。"
    },
    {
      level: "notice",
      title: "BASE連携の在庫同期が完了",
      detail: "182 SKUを更新。差異のある4件は確認キューに追加済み。"
    }
  ],
  features: [
    {
      title: "SKU台帳の自動整流",
      description:
        "商品名の揺れ、セット品、販売チャネルごとの管理番号を統合し、ひとつのSKU台帳として扱えます。",
      icon: "/assets/icons-transparent/icon-sku-table.png"
    },
    {
      title: "欠品・過剰在庫アラート",
      description:
        "販売速度、入荷予定、季節イベントをもとに、補充すべき商品と寝かせている在庫を優先度順に表示します。",
      icon: "/assets/icons-transparent/icon-alert.png"
    },
    {
      title: "価格と粗利の見える化",
      description:
        "原価、送料、手数料を含めた実粗利を更新し、値上げ・値下げの影響を小さなチームでも判断できます。",
      icon: "/assets/icons-transparent/icon-price-tag.png"
    },
    {
      title: "チャネル同期メモ",
      description:
        "Shopify、BASE、楽天、Amazon、自社EC、CSVの更新履歴を残し、どこを直したかを迷わず追えます。",
      icon: "/assets/icons-transparent/icon-sync.png"
    },
    {
      title: "出荷前チェック",
      description:
        "発送デスクで見るべき未処理注文、同梱注意、予約販売分を一列に並べ、出荷漏れを減らします。",
      icon: "/assets/icons-transparent/icon-truck.png"
    },
    {
      title: "月次ふりかえりレポート",
      description:
        "売れ筋、滞留、粗利、キャンセル理由をまとめ、次の仕入れ会議にそのまま使えるレポートにします。",
      icon: "/assets/icons-transparent/icon-chart.png"
    }
  ],
  pricingPlans: [
    {
      name: "Starter",
      price: "9,800円",
      unit: "月",
      description: "ひとり運営の定番商品を見失わない最小プラン。",
      includes: ["300 SKUまで", "CSV連携", "欠品アラート", "月次メールレポート"]
    },
    {
      name: "Studio",
      price: "24,000円",
      unit: "月",
      description: "複数チャネルで販売する小規模ブランド向け。",
      includes: ["2,000 SKUまで", "主要EC連携", "粗利シミュレーション", "週次オンライン相談"]
    },
    {
      name: "Atelier Plus",
      price: "48,000円",
      unit: "月",
      description: "仕入れ担当・出荷担当が分かれる成長期向け。",
      includes: ["10,000 SKUまで", "権限管理", "カスタム台帳設計", "Slack通知"]
    }
  ],
  faq: [
    {
      question: "Excelやスプレッドシートから移行できますか？",
      answer:
        "可能です。既存のSKU表、原価表、在庫表を確認し、列名の整理から初期インポートまで支援します。"
    },
    {
      question: "個人事業主でも契約できますか？",
      answer:
        "契約できます。法人化前のブランド、週末運営のEC、イベント販売中心の事業者にも対応しています。"
    },
    {
      question: "対応していないカートでも使えますか？",
      answer:
        "CSV入出力で運用できます。継続利用が多いチャネルは連携リクエストとして優先検討します。"
    },
    {
      question: "導入までどれくらいかかりますか？",
      answer:
        "Starterは最短3営業日、Studio以上は初期台帳の確認を含めて1から2週間が目安です。"
    }
  ],
  posts: [
    {
      title: "小規模ECが欠品を減らすための朝10分チェックリスト",
      category: "運営ノート",
      date: "2026-04-12",
      excerpt: "在庫数だけでなく販売速度、入荷予定、同梱注意まで確認する順番を解説。"
    },
    {
      title: "値上げ判断で見るべき実粗利の3項目",
      category: "価格設計",
      date: "2026-04-05",
      excerpt: "送料、モール手数料、梱包資材を含めた価格改定の考え方を整理。"
    },
    {
      title: "SKU名の揺れを止める命名ルール",
      category: "台帳整備",
      date: "2026-03-28",
      excerpt: "色、サイズ、販売単位、限定品の表記を揃えて検索性を高める方法。"
    }
  ],
  news: [
    {
      date: "2026-04-18",
      title: "BASE在庫CSVの差分インポートに対応しました",
      type: "機能追加"
    },
    {
      date: "2026-04-09",
      title: "ゴールデンウィーク期間中の導入相談枠を公開しました",
      type: "お知らせ"
    },
    {
      date: "2026-03-30",
      title: "アパレル小物向けサイズ別SKUテンプレートを追加しました",
      type: "テンプレート"
    }
  ],
  caseStudies: [
    {
      company: "Hibi Stationery",
      industry: "文具・紙もの",
      image: "/assets/photo-case-stationery-inventory.png",
      result: "欠品連絡を週6件から1件未満へ削減",
      quote: "イベント前の補充判断が前倒しでき、制作と発送に集中できました。"
    },
    {
      company: "North Dock Goods",
      industry: "生活雑貨",
      image: "/assets/photo-case-shipping-desk.png",
      result: "出荷前確認の時間を38%短縮",
      quote: "複数チャネルの注文と在庫差異を同じ画面で見られるのが助かります。"
    },
    {
      company: "Mellow Pantry",
      industry: "食品D2C",
      image: "/assets/photo-case-food-d2c-inventory.png",
      result: "賞味期限接近品の滞留を半減",
      quote: "小ロット生産でも、次の製造タイミングを数字で話せるようになりました。"
    },
    {
      company: "Frame & Thread",
      industry: "アパレル",
      image: "/assets/photo-case-apparel-inventory.png",
      result: "色サイズ別SKUの棚卸しを月1回に集約",
      quote: "売れているサイズだけでなく、止まっている色まで早く見つけられます。"
    },
    {
      company: "Aroma Loop",
      industry: "コスメ・香り",
      image: "/assets/photo-case-cosmetics-inventory.png",
      result: "限定セットの価格改定を即日反映",
      quote: "原価の変化を見落とさず、ブランド感を保ったまま価格を調整できました。"
    },
    {
      company: "Shelf Life Studio",
      industry: "セレクト雑貨",
      image: "/assets/photo-case-lifestyle-goods-shelf.png",
      result: "仕入れ候補の優先順位づけを標準化",
      quote: "感覚で選んでいた再入荷判断を、チームで共有できる形にできました。"
    }
  ]
};
