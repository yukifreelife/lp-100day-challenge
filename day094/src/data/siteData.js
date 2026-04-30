export const nav = [
  { id: "about", label: "SONAE BOXとは", page: "home", href: "#about" },
  { id: "plans", label: "プラン", page: "plans", href: "#plans" },
  { id: "kit", label: "お届け内容", page: "kit", href: "#kit" },
  { id: "how", label: "使い方", page: "how", href: "#how" },
  { id: "support", label: "よくあるご質問", page: "support", href: "#support" },
  { id: "magazine", label: "マガジン", page: "magazine", href: "#magazine" },
];

export const plans = [
  {
    id: "family",
    name: "家族プラン",
    subtitle: "家族の人数と年齢に合わせて備える",
    price: "4,980",
    priceNote: "月〜（税込）",
    image: "/assets/images/family-checking-kit.png",
    icon: "homeFamily",
    recommended: true,
    tags: ["2人用〜", "3ヶ月に1回お届け", "送料無料"],
    features: ["水・食料・衛生用品を家族人数分で調整", "子どもや高齢者の追加備蓄にも対応", "賞味期限前にリマインド"],
    cta: "詳細を見る",
  },
  {
    id: "solo",
    name: "ひとり暮らしプラン",
    subtitle: "ワンルームでも置きやすい省スペース備蓄",
    price: "2,980",
    priceNote: "月〜（税込）",
    image: "/assets/images/solo-apartment-kit.png",
    icon: "box",
    recommended: false,
    tags: ["1人用", "省スペース", "初回チェック付き"],
    features: ["ベッド下や棚に収まるサイズ", "最低限必要なアイテムを厳選", "はじめての防災備蓄に最適"],
    cta: "内容を見る",
  },
  {
    id: "office",
    name: "オフィスプラン",
    subtitle: "従業員と来訪者のための職場備蓄",
    price: "9,800",
    priceNote: "月〜（税込）",
    image: "/assets/images/office-shelf-kit.png",
    icon: "building",
    recommended: false,
    tags: ["10名〜", "6ヶ月に1回お届け", "送料無料"],
    features: ["人数・フロア単位で数量を設計", "BCP担当者向け管理リスト付き", "店舗・クリニックにも対応"],
    cta: "相談する",
  },
];

export const steps = [
  {
    id: "diagnose",
    number: "1",
    title: "備蓄をチェック",
    body: "家族構成やオフィスの状況に合わせて、必要な備蓄を診断します。",
    icon: "checklist",
    image: "/assets/images/diagnosis-result-card.png",
  },
  {
    id: "remind",
    number: "2",
    title: "期限を自動でお知らせ",
    body: "賞味期限・使用期限を登録すると、アプリやメールでお知らせします。",
    icon: "calendar",
    image: "/assets/images/checklist-dashboard-panel.png",
  },
  {
    id: "replace",
    number: "3",
    title: "定期でお届け・入れ替え",
    body: "必要なものを定期でお届け。無理なく備蓄をキープできます。",
    icon: "truck",
    image: "/assets/images/product-box-cutout.png",
  },
];

export const features = [
  {
    id: "check",
    title: "備蓄チェック",
    body: "水・食料・衛生用品などの不足を一目で確認できます。",
    icon: "checklist",
  },
  {
    id: "reminder",
    title: "期限リマインド",
    body: "期限が近いものを通知し、買い忘れや期限切れを防ぎます。",
    icon: "bell",
  },
  {
    id: "delivery",
    title: "定期お届け",
    body: "家庭や職場のペースに合わせて、必要な分だけ届きます。",
    icon: "truck",
  },
  {
    id: "supervision",
    title: "専門家と共同監修",
    body: "防災士・管理栄養士の視点で中身を見直しています。",
    icon: "shield",
  },
  {
    id: "sharing",
    title: "家族・メンバー共有",
    body: "備蓄状況を家族や担当者と共有して、属人化を防ぎます。",
    icon: "users",
  },
  {
    id: "support",
    title: "安心のサポート体制",
    body: "プラン選びや法人導入の相談を日本語で受け付けます。",
    icon: "search",
  },
];

export const kitCategories = [
  {
    id: "water",
    title: "水",
    lead: "飲料水と調理用水を、人数と日数に合わせて準備。",
    icon: "water",
    image: "/assets/images/item-water-bottles.png",
    items: ["保存水 500ml", "給水バッグ", "携帯浄水パック"],
  },
  {
    id: "food",
    title: "食料",
    lead: "食べ慣れた味を中心に、栄養バランスも考慮。",
    icon: "food",
    image: "/assets/images/item-food-pouches.png",
    items: ["アルファ米", "レトルト惣菜", "栄養補助バー"],
  },
  {
    id: "light",
    title: "明かり・電源",
    lead: "停電時も連絡と移動をしやすくする基本セット。",
    icon: "flashlight",
    image: "/assets/images/item-light-power.png",
    items: ["LEDライト", "乾電池", "モバイルバッテリー"],
  },
  {
    id: "firstAid",
    title: "救急・衛生",
    lead: "断水や避難時に必要な衛生用品をまとめて管理。",
    icon: "firstAid",
    image: "/assets/images/item-first-aid-hygiene.png",
    items: ["救急セット", "簡易トイレ", "除菌シート"],
  },
];

export const articles = [
  {
    id: "water-stock",
    title: "水は何日分必要？家族人数別の目安",
    category: "備蓄の基本",
    date: "2026.04.10",
    image: "/assets/images/article-water-stock.png",
    excerpt: "飲料水と生活用水を分けて考えると、必要量が見えやすくなります。",
  },
  {
    id: "family-children",
    title: "子どもがいる家庭の備えチェックリスト",
    category: "家族防災",
    date: "2026.04.03",
    image: "/assets/images/article-family-children.png",
    excerpt: "ミルク、常備薬、安心できる小物まで、年齢別に確認します。",
  },
  {
    id: "expiration",
    title: "賞味期限切れを防ぐローリングストック術",
    category: "管理術",
    date: "2026.03.28",
    image: "/assets/images/article-expiration-management.png",
    excerpt: "食べながら補充する仕組みを、アプリ管理と組み合わせて続けます。",
  },
  {
    id: "pet",
    title: "ペットと暮らす家のための防災準備",
    category: "暮らし",
    date: "2026.03.14",
    image: "/assets/images/article-pet-preparedness.png",
    excerpt: "フード、トイレ用品、避難先の確認を早めに整えておきます。",
  },
];

export const testimonials = [
  {
    id: "family-a",
    name: "東京都・4人家族",
    title: "期限切れに気づけるようになりました",
    body: "以前は押し入れに入れたままでしたが、通知が来るので入れ替えのタイミングを逃しません。",
    plan: "家族プラン",
  },
  {
    id: "office-b",
    name: "横浜市・クリニック",
    title: "スタッフ全員で状況を共有できます",
    body: "担当者が休みの日でも在庫がわかるので、監査前の確認がとても楽になりました。",
    plan: "オフィスプラン",
  },
  {
    id: "solo-c",
    name: "大阪府・ひとり暮らし",
    title: "何を買えばいいか迷わなくなりました",
    body: "部屋が狭くても置ける量から始められて、必要なものが見えるのが安心です。",
    plan: "ひとり暮らしプラン",
  },
];

export const faqItems = [
  {
    question: "診断だけでも利用できますか？",
    answer: "はい。登録不要・無料で診断でき、結果を見てからプランを選べます。",
  },
  {
    question: "配送頻度は変更できますか？",
    answer: "マイページから3ヶ月・6ヶ月などの配送間隔を変更できます。法人プランは担当者へ相談できます。",
  },
  {
    question: "期限が近い商品はどうすればよいですか？",
    answer: "食べて補充するローリングストックをおすすめしています。通知から交換候補も確認できます。",
  },
  {
    question: "法人の見積もりは可能ですか？",
    answer: "可能です。人数、拠点数、保管場所を確認し、必要数量と配送頻度をご提案します。",
  },
  {
    question: "解約や一時停止はできますか？",
    answer: "次回発送準備前であれば、マイページから一時停止・解約の手続きができます。",
  },
];

export const legalSections = [
  {
    id: "terms",
    title: "利用規約",
    body: "SONAE BOXの診断、定期配送、マイページ機能の利用条件を定めます。",
    items: ["サービス内容", "アカウント管理", "禁止事項", "契約の変更・終了"],
  },
  {
    id: "privacy",
    title: "プライバシーポリシー",
    body: "家族構成、配送先、備蓄情報などの個人情報を適切に取り扱います。",
    items: ["取得する情報", "利用目的", "第三者提供", "開示・訂正・削除"],
  },
  {
    id: "commerce",
    title: "特定商取引法に基づく表記",
    body: "販売価格、送料、支払い方法、返品条件、事業者情報を掲載します。",
    items: ["販売事業者", "料金と送料", "支払い時期", "返品・交換"],
  },
];

export const routeLabels = {
  home: "ホーム",
  diagnosis: "備蓄診断",
  plans: "プラン詳細",
  kit: "キット内容",
  how: "使い方",
  business: "法人・オフィス向け",
  quality: "監修・品質管理",
  cases: "導入事例",
  magazine: "防災マガジン",
  dashboard: "マイページ",
  checkout: "申込・決済",
  support: "FAQ・お問い合わせ",
  legal: "法務・ポリシー",
};
