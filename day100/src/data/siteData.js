export const ctaLabel = "無料30分 受付導線診断を予約する";

export const assetsV2 = {
  receptionFlowBoard: {
    src: "/assets/v2/reception-flow-board.webp",
    avifSrc: "/assets/v2/reception-flow-board.avif",
    fallbackSrc: "/assets/v2/reception-flow-board.png",
    avifSrcSet: "/assets/v2/reception-flow-board.avif 1536w",
    srcSet: "/assets/v2/reception-flow-board.webp 1536w",
    width: 1536,
    height: 1024,
    sizes: "(min-width: 1024px) 560px, (min-width: 640px) 72vw, 100vw",
  },
  receptionFileBox: {
    src: "/assets/v2/reception-file-box.webp",
    avifSrc: "/assets/v2/reception-file-box.avif",
    fallbackSrc: "/assets/v2/reception-file-box.png",
    avifSrcSet: "/assets/v2/reception-file-box.avif 1536w",
    srcSet: "/assets/v2/reception-file-box.webp 1536w",
    width: 1536,
    height: 1024,
    sizes: "(min-width: 1024px) 420px, (min-width: 640px) 60vw, 92vw",
  },
  contactDeskFiles: {
    src: "/assets/v2/contact-desk-files.webp",
    avifSrc: "/assets/v2/contact-desk-files.avif",
    fallbackSrc: "/assets/v2/contact-desk-files.png",
    avifSrcSet: "/assets/v2/contact-desk-files.avif 1536w",
    srcSet: "/assets/v2/contact-desk-files.webp 1536w",
    width: 1536,
    height: 1024,
    sizes: "(min-width: 1024px) 440px, (min-width: 640px) 62vw, 92vw",
  },
};

export const assetsLegacy = {
  businessMapBoard: {
    src: "/assets/generated/business-map-board.webp",
    fallbackSrc: "/assets/generated/business-map-board.png",
    srcSet: "/assets/generated/business-map-board-sm.webp 640w, /assets/generated/business-map-board.webp 1586w",
    width: 1586,
    height: 992,
    sizes: "(min-width: 1024px) 520px, (min-width: 640px) 72vw, 100vw",
  },
  compass: {
    src: "/assets/generated/compass.webp",
    fallbackSrc: "/assets/generated/compass.png",
    srcSet: "/assets/generated/compass-sm.webp 640w, /assets/generated/compass.webp 1254w",
    width: 1254,
    height: 1254,
    sizes: "(min-width: 768px) 96px, 64px",
  },
  consultant: {
    src: "/assets/generated/consultant.webp",
    fallbackSrc: "/assets/generated/consultant.png",
    srcSet: "/assets/generated/consultant-sm.webp 640w, /assets/generated/consultant.webp 1536w",
    width: 1536,
    height: 1024,
    sizes: "(min-width: 768px) 240px, 70vw",
  },
  routePins: {
    src: "/assets/generated/route-pins.webp",
    fallbackSrc: "/assets/generated/route-pins.png",
    srcSet: "/assets/generated/route-pins-sm.webp 640w, /assets/generated/route-pins.webp 1774w",
    width: 1774,
    height: 887,
    sizes: "(min-width: 768px) 56px, 48px",
  },
  stickyNotes: {
    src: "/assets/generated/sticky-notes.webp",
    fallbackSrc: "/assets/generated/sticky-notes.png",
    srcSet: "/assets/generated/sticky-notes-sm.webp 640w, /assets/generated/sticky-notes.webp 1254w",
    width: 1254,
    height: 1254,
    sizes: "(min-width: 768px) 176px, 128px",
  },
};

export const assets = {
  ...assetsLegacy,
  ...assetsV2,
  businessMapBoard: assetsV2.receptionFlowBoard,
  compass: assetsV2.receptionFileBox,
  consultant: assetsV2.contactDeskFiles,
  routePins: assetsV2.receptionFileBox,
  stickyNotes: assetsV2.contactDeskFiles,
};

export const navItems = [
  { href: "#home", label: "ホーム" },
  { href: "#service", label: "サービス内容" },
  { href: "#flow", label: "進め方" },
  { href: "#pricing", label: "料金" },
  { href: "#faq", label: "よくある質問" },
  { href: "#contact", label: "無料相談" },
];

export const utilityNavItems = [
  { href: "#cases", label: "整理サンプル" },
  { href: "#legal", label: "特定商取引法に基づく表記" },
  { href: "#privacy", label: "プライバシーポリシー" },
];

export const routeLabels = {
  home: "ホーム",
  service: "サービス内容",
  flow: "進め方",
  cases: "整理サンプル",
  pricing: "料金",
  contact: "無料相談",
  faq: "よくある質問",
};

export const hero = {
  eyebrow: "受付導線のカルテ棚",
  title: "予約は入るのに、案内が毎回つぎはぎになっていませんか。",
  lead: "Instagram、LINE公式、体験メニュー、予約ページ、当日案内、継続案内。ひとりで抱えている案内の散らばりを、初めての人にも迷わず渡せる流れに整理します。",
  primaryCta: ctaLabel,
  secondaryCta: "予約前後の詰まりを見る",
  asset: assetsV2.receptionFlowBoard,
  boardLabels: ["初回LINE", "体験メニュー", "予約導線", "当日案内", "継続案内"],
};

export const trustChips = [
  "完全予約制サロン・教室向け",
  "メモのまま相談OK",
  "無料30分診断",
  "売り込みより受け皿整理",
];

export const pains = [
  {
    label: "カルテ 01",
    title: "初回LINEが毎回長くなる",
    body: "体験内容、空き日程、注意事項をその場で書き足し、返信だけで疲れてしまう。",
  },
  {
    label: "カルテ 02",
    title: "体験・単発・継続がつながらない",
    body: "体験、単発、3ヶ月コースの違いが伝わらず、初めての人がどれを選べばよいか迷う。",
  },
  {
    label: "カルテ 03",
    title: "当日案内や持ち物が別々にある",
    body: "キャンセル条件、場所、持ち物、事前準備が散らばり、抜け漏れが起きやすい。",
  },
  {
    label: "カルテ 04",
    title: "継続案内が押し売りに見えそう",
    body: "次の選択肢を出したいのに、温度感を壊すのが怖くて案内を後回しにしている。",
  },
];

export const problemNotes = pains;

export const routeSteps = [
  {
    step: "受付 01",
    title: "散らばった材料を棚に出す",
    body: "初回LINE、体験メニュー表、STORES予約URL、当日案内、手書きメモをきれいに整える前の状態で共有します。",
    badge: "メモのまま",
  },
  {
    step: "導線 02",
    title: "Instagramから体験予約まで並べる",
    body: "どの順番で何を渡すと迷いが減るか、初回LINEから予約確定までの流れを見える化します。",
    badge: "予約前",
  },
  {
    step: "案内 03",
    title: "当日までに必要な案内をまとめる",
    body: "持ち物、場所、キャンセル条件、事前準備を、抜け漏れなく渡せるチェックに整えます。",
    badge: "来店前",
  },
  {
    step: "継続 04",
    title: "自然な次の選択肢を用意する",
    body: "体験後、単発後、3ヶ月コース前の分岐を分け、強い売り込みではない案内文へ落とします。",
    badge: "次回案内",
  },
];

export const processSteps = routeSteps;

export const outputs = [
  "受付導線カルテ",
  "初回LINE返信テンプレート",
  "体験・単発・継続の見せ方メモ",
  "予約前/当日案内チェックリスト",
  "継続案内の自然な分岐メモ",
];

export const outputCards = outputs.map((title, index) => ({
  id: `output-${index + 1}`,
  label: `成果物 0${index + 1}`,
  title,
  body: [
    "相談後に見返せる、予約前後の実務に使うための整理メモです。",
    "初めての人に渡す言葉と、運営側で確認する項目を分けます。",
    "公開前に確認する条件や未確定情報も、混ぜずに残します。",
    "ひとり運営でも同じ順番で案内できるようにします。",
    "押し売りではなく、必要な人に次の選択肢を渡す前提です。",
  ][index],
}));

export const serviceCategories = [
  {
    id: "line",
    label: "受付 01",
    title: "初回LINE・体験案内",
    summary: "問い合わせ直後に渡す情報を短くし、予約へ進むための返信順を整えます。",
    points: ["初回返信文", "よくある質問の先回り", "予約URLへのつなぎ方"],
  },
  {
    id: "menu",
    label: "受付 02",
    title: "体験・単発・継続整理",
    summary: "体験、単発、継続の違いを、初めての人が選びやすい見せ方にします。",
    points: ["入口メニューの整理", "3ヶ月コースの位置づけ", "対象者の言語化"],
  },
  {
    id: "booking",
    label: "受付 03",
    title: "予約導線・当日案内",
    summary: "STORES予約などの予約ページ、カレンダー、持ち物、場所、キャンセル条件を一連の案内にまとめます。",
    points: ["予約前チェック", "当日案内文", "抜け漏れ防止"],
  },
  {
    id: "repeat",
    label: "受付 04",
    title: "継続案内・次回提案",
    summary: "強い売り込みではなく、必要な人に自然な選択肢を渡す案内を整えます。",
    points: ["継続の分岐", "提案文の温度調整", "案内タイミング"],
  },
];

export const serviceItems = serviceCategories;

export const cases = [
  {
    id: "line",
    label: "LINE",
    before: "初回返信にメニュー説明、日程、注意事項が混ざり、毎回長文になっていた。",
    after: "最初に渡す内容、予約前に渡す内容、当日案内を分け、返信の順番を固定。",
  },
  {
    id: "menu",
    label: "メニュー",
    before: "体験、単発、継続の位置づけが曖昧で、問い合わせごとに説明が変わっていた。",
    after: "入口メニューと次の選択肢を分け、初めての人が選びやすい表示へ整理。",
  },
  {
    id: "guide",
    label: "当日案内",
    before: "場所、持ち物、キャンセル条件が別々のメモにあり、直前連絡で抜け漏れがあった。",
    after: "予約確定後に渡す案内を一枚にまとめ、当日までの確認をチェック化。",
  },
];

export const caseTabs = cases;

export const pricingPlans = [
  {
    name: "無料30分 受付導線診断",
    price: "無料",
    unit: "30分",
    description: "初回LINE、体験メニュー、予約ページの散らばりを確認し、最初に整える場所を一緒に見つけます。",
    features: ["オンライン相談", "事前資料なしで相談可", "次に直すLINE文面の簡易メモ"],
    cta: ctaLabel,
    featured: true,
  },
  {
    name: "受付導線ミニ整理",
    price: "18,000円",
    unit: "1回",
    description: "初回LINE、体験/単発/継続メニュー、当日案内など、ひとつの詰まりに絞って整えます。",
    features: ["90分セッション", "受付導線カルテ納品", "7日間の文面確認サポート"],
    cta: "内容を相談する",
  },
  {
    name: "予約前後の導線整理パック",
    price: "48,000円",
    unit: "3週間",
    description: "InstagramからLINE、体験予約、当日案内、継続案内まで、予約まわり全体を短期で整える伴走です。",
    features: ["週1回の整理ミーティング", "返信文・案内文の整理", "受付フロー資料化"],
    cta: "進め方を聞く",
  },
];

export const faqItems = [
  {
    question: "まだ整理できていないメモの状態でも相談できますか？",
    answer: "できます。LINE文面、体験メニュー表、STORES予約URL、手書きメモ、スクリーンショットなど、今ある材料をそのまま出すところから始めます。",
  },
  {
    question: "初回LINEだけ、メニュー表だけの相談でも大丈夫ですか？",
    answer: "大丈夫です。いま一番詰まっている場所に絞り、体験予約前後の流れから見てどこまで整えるとよいか確認します。",
  },
  {
    question: "強い売り込みの文章にされませんか？",
    answer: "強い煽りや売上訴求を前提にしません。体験後や単発後に、必要な人へ自然な選択肢を渡すための案内文として整えます。",
  },
  {
    question: "継続案内を出すタイミングも相談できますか？",
    answer: "相談できます。体験後、単発後、3ヶ月コース前などの分岐を分け、押し売りに見えにくいタイミングと言葉を一緒に確認します。",
  },
  {
    question: "料金やキャンセル条件が未確定でも進められますか？",
    answer: "未確定のまま公開はしません。決まっていること、確認が必要なこと、公開前に必ず確定することを分け、初回LINEや当日案内へ混ぜないように整理します。",
  },
  {
    question: "相談後には何が残りますか？",
    answer: "受付導線カルテ、初回LINEのたたき台、体験メニュー整理メモ、当日案内チェックなど、次に直す場所がわかる形で残します。",
  },
];

export const trustMaterials = [
  {
    title: "相談後に残るもの",
    body: "受付導線カルテ、初回返信文、当日案内チェックなど、ひとり運営で見返せる形に整理します。",
  },
  {
    title: "準備不要で始める理由",
    body: "きれいな資料より、今つまずいている実際のLINE文面、体験メニュー、予約ページのメモを重視します。",
  },
  {
    title: "整理範囲を限定できます",
    body: "初回LINEだけ、体験メニューだけ、当日案内だけなど、今いちばん困っている場所に絞れます。",
  },
];

export const suitabilityNotes = {
  goodFit: [
    "完全予約制の個人サロン、教室、整体、レッスン業をひとりで運営している",
    "初回LINE、体験メニュー、予約ページ、当日案内が散らばっている",
    "継続案内を押し売りではなく自然な選択肢として出したい",
  ],
  notFit: [
    "実績数や口コミを増やす代行を求めている",
    "強い煽りコピーや短期売上訴求で売りたい",
    "正式な事業者情報や料金条件を未確認のまま公開したい",
  ],
};

export const fitNotes = suitabilityNotes.goodFit;
export const notFitNotes = suitabilityNotes.notFit;

export const legalDisclosureRows = [
  ["販売事業者/屋号", "要入力（公開前に正式な販売事業者名または屋号を入力してください）"],
  ["運営責任者", "要入力（公開前に正式な運営責任者名を入力してください）"],
  ["所在地", "要入力（公開前に事業者の所在地を入力してください）"],
  ["電話番号", "要入力（公開前に問い合わせ対応可能な電話番号を入力してください）"],
  ["メールアドレス", "要入力（公開前に問い合わせ対応可能なメールアドレスを入力してください）"],
  ["販売価格", "料金ページをご参照ください。表示価格は税込表記です。"],
  ["支払い方法", "要確定（銀行振込、オンライン決済など、利用する支払い方法を公開前に確定してください）"],
  ["役務提供時期/納品形式", "初回診断は予約確定後の相談日時にオンラインで実施します。有料整理メニューの正式な納品形式、納期、提供条件は公開前に要確定です。"],
  ["キャンセル/返金/日程変更", "要確定（キャンセル期限、返金可否、日程変更の条件を公開前に明記してください）"],
];

export const privacyPolicySections = [
  {
    title: "取得項目",
    body: "相談予約フォームやお問い合わせ時に、お名前、メールアドレス、現在のサロン・教室・サービス、相談内容、希望する相談方法などを取得する場合があります。",
  },
  {
    title: "利用目的",
    body: "取得した情報は、相談予約への対応、本人確認、日程調整、サービス提供、問い合わせへの回答、必要な連絡、サービス改善のために利用します。",
  },
  {
    title: "第三者提供",
    body: "取得した個人情報は、本人の同意がある場合または法令に基づく場合を除き、第三者に提供しません。",
  },
  {
    title: "外部送信/アクセス解析",
    body: "アクセス解析や外部送信を行うツールは、測定IDなどの設定が有効な場合のみ利用します。測定IDが未設定の場合、アクセス解析イベントは外部へ送信されません。",
  },
  {
    title: "開示/訂正/削除問い合わせ",
    body: "本人から個人情報の開示、訂正、利用停止、削除などの申し出があった場合は、本人確認のうえ、法令に従って対応します。",
  },
  {
    title: "問い合わせ窓口",
    body: "要入力（公開前に個人情報に関する問い合わせ窓口のメールアドレス、電話番号、またはフォームURLを入力してください）",
  },
];
