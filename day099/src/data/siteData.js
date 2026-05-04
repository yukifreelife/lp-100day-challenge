const productAsset = (name) => `/assets/products/${name.replace(/\.png$/, ".webp")}`;
const iconSprite = "/assets/icons/icon-sprite.png";

export const siteMeta = {
  name: "ボルダリングギア通販",
  tagline: "登る前の準備を、迷わず整える。",
  description:
  "初級者から中級者まで扱いやすい、ジム通いの基本ギアをまとめて選べるボルダリング用品サイト。",
  iconSprite,
};

export const routes = [
  { id: "home", label: "トップ", href: "#home" },
  { id: "products", label: "商品", href: "#products" },
  { id: "product-liquid-chalk", label: "液体チョーク", href: "#product-liquid-chalk" },
  { id: "starter-kit", label: "スターターセット", href: "#starter-kit" },
  { id: "howto", label: "使い方", href: "#howto" },
  { id: "guide", label: "比較", href: "#guide" },
  { id: "faq", label: "質問", href: "#faq" },
  { id: "cart", label: "カート", href: "#cart" },
  { id: "checkout", label: "購入手続き", href: "#checkout" },
  { id: "legal", label: "法務", href: "#legal" },
];

export const hero = {
  eyebrow: "基本ギアシステム",
  title: "登る前の準備を、迷わず整える。",
  lead:
    "液体チョーク、ブラシ、バッグ、テープを、ジム通いで使いやすい一式に。登る直前の迷いを減らし、グリップと携帯性を両立します。",
  image: productAsset("hero-starter-kit.png"),
  primaryCta: { label: "スターターセットを購入する", href: "#starter-kit" },
  secondaryCta: { label: "商品ラインナップを見る", href: "#products" },
  stats: [
    { label: "準備時間", value: "60秒", note: "ウォームアップ前に完了" },
    { label: "携帯点数", value: "6点", note: "ジムバッグに収まる構成" },
    { label: "初心者適性", value: "高", note: "最初にそろえやすい基本セット" },
  ],
};

export const productCategories = [
  "チョーク",
  "収納",
  "メンテナンス",
  "保護",
  "トレーニング",
];

export const products = [
  {
    id: "starter-kit",
    name: "スターターギアセット",
    category: "セット",
    price: "¥8,900",
    image: productAsset("hero-starter-kit.png"),
    badge: "初回推奨",
    href: "#starter-kit",
    summary: "液体チョーク、バッグ、ブラシ、テープ、グリップバームをひとつにした基本セット。",
    specs: [
      ["内容", "6点セット"],
      ["用途", "初めてのジム通い"],
      ["携帯性", "バッグ内で整理しやすい構成"],
    ],
  },
  {
    id: "liquid-chalk",
    name: "液体チョーク",
    category: "チョーク",
    price: "¥1,480",
    image: productAsset("liquid-chalk.png"),
    badge: "定番",
    href: "#product-liquid-chalk",
    summary: "手汗を抑え、粉飛びを減らしながら指先の摩擦感を整える液体チョーク。",
    specs: [
      ["容量", "150ml"],
      ["乾燥感", "速乾"],
      ["使用目安", "約40回"],
    ],
  },
  {
    id: "chalk-bag",
    name: "チョークバッグ",
    category: "収納",
    price: "¥2,400",
    image: productAsset("chalk-bag.png"),
    href: "#product-chalk-bag",
    summary: "広口で手を入れやすく、ブラシとテープをまとめて持ち運べる軽量バッグ。",
    specs: [
      ["開口", "ワイド"],
      ["素材", "高密度ナイロン"],
      ["収納", "外ポケット付き"],
    ],
  },
  {
    id: "brush",
    name: "ホールドブラシ",
    category: "メンテナンス",
    price: "¥980",
    image: productAsset("brush.png"),
    href: "#product-brush",
    summary: "細かい凹凸に残ったチョークを落とし、次の一手の摩擦を戻すブラシ。",
    specs: [
      ["毛先", "硬め"],
      ["用途", "ホールド清掃"],
      ["携帯", "バッグ装着対応"],
    ],
  },
  {
    id: "finger-tape",
    name: "フィンガーテープ",
    category: "保護",
    price: "¥760",
    image: productAsset("finger-tape.png"),
    href: "#product-finger-tape",
    summary: "皮膚の消耗が気になる指先を保護し、長時間の練習を支えます。",
    specs: [
      ["幅", "13mm"],
      ["伸縮", "低伸縮"],
      ["用途", "指皮保護"],
    ],
  },
  {
    id: "grip-balm",
    name: "グリップバーム",
    category: "保護",
    price: "¥1,260",
    image: productAsset("grip-balm.png"),
    href: "#product-grip-balm",
    summary: "登った後の乾燥した手肌を整え、翌日のコンディション維持に使えるケア用品。",
    specs: [
      ["質感", "さらっと保湿"],
      ["用途", "練習後ケア"],
      ["携帯", "小型ケース"],
    ],
  },
  {
    id: "mini-holds",
    name: "ミニホールド",
    category: "トレーニング",
    price: "¥3,600",
    image: productAsset("mini-holds.png"),
    href: "#product-mini-holds",
    summary: "指先の置き方を確認できる小型ホールド。自宅でのフォーム練習に。",
    specs: [
      ["個数", "4個"],
      ["用途", "フォーム練習"],
      ["質感", "粗め"],
    ],
  },
];

export const liquidChalkDetail = {
  productId: "liquid-chalk",
  title: "液体チョーク詳細",
  lead:
    "乾きやすさ、粉飛びの少なさ、持ち運びやすさを重視した一本。初めて液体チョークを選ぶ人でも扱いやすい仕様です。",
  gallery: [productAsset("liquid-chalk.png"), productAsset("hands-chalk.png")],
  purchase: { label: "液体チョークをカートに入れる", href: "#cart", price: "¥1,480" },
  highlights: [
    "手汗を抑えてホールドへの接地感を安定",
    "粉チョーク前のベースとしても使用可能",
    "ジムバッグに収まりやすいコンパクトボトル",
  ],
  specs: [
    ["容量", "150ml"],
    ["質感", "速乾・さらさら"],
    ["おすすめ", "初級者から中級者"],
    ["使用場面", "ジム練習・短時間セッション"],
  ],
};

export const starterKitDetail = {
  title: "スターターギアセット",
  lead:
    "ジム通いを始める人が最初にそろえたい基本ギアを、使う順番まで考えてまとめました。",
  image: productAsset("hero-starter-kit.png"),
  purchase: { label: "セットをカートに入れる", href: "#cart", price: "¥8,900" },
  includedIds: ["liquid-chalk", "chalk-bag", "brush", "finger-tape", "grip-balm"],
  benefits: [
    { title: "選ぶ時間を短縮", text: "最初に必要な道具だけをまとめ、余計な買い足しを減らします。" },
    { title: "練習前後まで対応", text: "登る前のチョーク、登った後のケア、ホールド清掃まで一式で管理できます。" },
    { title: "持ち歩きやすいまとまり", text: "バッグ内で散らばりにくく、ジムでも自宅でも使いやすい構成です。" },
  ],
};

export const howToSections = [
  {
    title: "液体チョークの使い方",
    image: productAsset("hands-chalk.png"),
    steps: ["手の水分を軽く拭く", "少量を手のひらに伸ばす", "完全に乾いてから登る"],
  },
  {
    title: "ブラシのメンテナンス",
    image: productAsset("brush-hold.png"),
    steps: ["ホールドの目に沿って払う", "強く押し込みすぎない", "使用後は毛先の粉を落とす"],
  },
  {
    title: "バッグ内の整理",
    image: productAsset("chalk-bag.png"),
    steps: ["チョークは縦に収納", "テープは外ポケットへ", "ブラシは取り出しやすい位置に固定"],
  },
];

export const comparisonGuide = {
  title: "比較・選び方ガイド",
  lead: "目的に合わせて、最初に買うギアを絞り込めます。",
  rows: [
    ["手汗が気になる", "液体チョーク", "粉飛びを抑えつつ摩擦感を作りやすい"],
    ["道具が散らばる", "チョークバッグ", "テープやブラシもまとめて持てる"],
    ["ホールドが滑る", "ホールドブラシ", "チョーク残りを払って接地感を戻す"],
    ["指皮を守りたい", "フィンガーテープ", "練習量が増えた時の消耗対策に使える"],
    ["まとめてそろえたい", "スターターギアセット", "初回購入で迷いにくい構成"],
  ],
};

export const faqs = [
  {
    question: "初めてなら何から買うべきですか？",
    answer: "液体チョーク、チョークバッグ、ブラシを優先すると、ジムでの準備と片付けが安定します。",
  },
  {
    question: "商品に目立つブランド表記はありますか？",
    answer: "商品本体は、ジムでも自宅でも使いやすいシンプルな見た目にしています。",
  },
  {
    question: "液体チョークは毎回使いますか？",
    answer: "手汗が気になる時や粉チョーク前のベースとして使うと、摩擦感を整えやすくなります。",
  },
  {
    question: "セット内容を変更できますか？",
    answer: "スターターセットは基本構成で用意しています。個別商品はラインナップページから選べます。",
  },
  {
    question: "返品や配送の条件はどこで確認できますか？",
    answer: "カートページと法務ページで、配送・返品・個人情報の取り扱いを確認できます。",
  },
];

export const cart = {
  title: "カート",
  items: [
    { productId: "starter-kit", quantity: 1 },
    { productId: "liquid-chalk", quantity: 1 },
  ],
  summaryRows: [
    ["小計", "¥10,380"],
    ["送料", "¥0"],
    ["合計", "¥10,380"],
  ],
  checkoutCta: "購入手続きへ進む",
  notes: ["購入内容を確認してから手続きに進めます。", "配送目安は注文から2〜4営業日です。"],
};

export const legal = {
  title: "特定商取引法に基づく表記・プライバシーポリシー",
  businessRows: [
    ["販売事業者", "ボルダリングギア通販運営事務局"],
    ["運営責任者", "山田 進"],
    ["所在地", "東京都千代田区神田錦町1-1-1"],
    ["電話番号", "03-0000-0000"],
    ["メールアドレス", "support@example.com"],
    ["受付時間", "平日10:00〜17:00（土日祝を除く）"],
    ["販売価格", "各商品ページに税込価格を表示"],
    ["商品代金以外", "送料、支払い手数料、インターネット接続に必要な通信料"],
    ["支払い方法", "クレジットカード、コンビニ払い、銀行振込、あと払い"],
    ["支払い時期", "クレジットカードは注文時、その他の決済は各決済方法の案内に従います"],
    ["商品の引き渡し時期", "注文確定後、通常2〜4営業日以内に発送します"],
    ["返品・交換", "未使用・未開封の商品に限り、到着後7日以内にお問い合わせください"],
    ["販売数量", "各商品ページに表示。在庫状況により購入数を制限する場合があります"],
  ],
  privacyRows: [
    ["利用目的", "注文確認、配送連絡、問い合わせ対応"],
    ["第三者提供", "法令に基づく場合を除き行いません"],
    ["安全管理", "アクセス制限と適切な保管を行います"],
    ["開示・訂正", "本人確認後に合理的な範囲で対応します"],
    ["Cookie・アクセス解析", "閲覧状況の把握とサイト改善のため、Cookieとアクセス解析を利用する場合があります"],
    ["保存期間", "利用目的の達成に必要な期間、または法令で定められた期間保管します"],
    ["お問い合わせ窓口", "support@example.com"],
    ["改定", "内容を変更する場合は、本ページで告知します"],
  ],
};

export const footerLinks = [
  { label: "商品ラインナップ", href: "#products" },
  { label: "使い方", href: "#howto" },
  { label: "よくある質問", href: "#faq" },
  { label: "特商法・プライバシー", href: "#legal" },
];

export const getProductById = (id) => products.find((product) => product.id === id);
