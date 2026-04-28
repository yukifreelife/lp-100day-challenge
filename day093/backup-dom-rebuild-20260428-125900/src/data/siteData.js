export const brand = {
  name: "NemuNote",
  kana: "ネムノート",
  tagline: "眠りの記録から、明日の調子を整える。",
  description:
    "NemuNoteは睡眠時間、寝つき、夜中の目覚め、朝の気分をやさしく記録し、週ごとの変化を見える化する睡眠アプリです。",
};

export const navItems = [
  { id: "home", label: "ホーム", shortLabel: "Home" },
  { id: "features", label: "機能", shortLabel: "Features" },
  { id: "report", label: "レポート", shortLabel: "Report" },
  { id: "pricing", label: "料金", shortLabel: "Pricing" },
  { id: "voices", label: "利用者の声", shortLabel: "Voices" },
  { id: "guide", label: "使い方", shortLabel: "Guide" },
  { id: "faq", label: "FAQ", shortLabel: "FAQ" },
  { id: "download", label: "ダウンロード", shortLabel: "Download" },
  { id: "privacy", label: "安全性", shortLabel: "Privacy" },
];

const commonCta = {
  primary: { label: "無料で始める", target: "download" },
  secondary: { label: "睡眠レポートを見る", target: "report" },
};

export const pages = [
  {
    id: "home",
    label: "ホーム",
    eyebrow: "Sleep journaling app",
    hero: {
      title: "眠りをメモして、朝をもっと軽く。",
      lead:
        "就寝前の気分、夜中の目覚め、起床時のコンディションを30秒で記録。NemuNoteがあなたの睡眠リズムをやさしく読み解きます。",
      ctas: [commonCta.primary, commonCta.secondary],
      badges: ["広告なしで記録", "週次レポート", "iOS / Android対応"],
    },
    reportMetrics: [
      { label: "今週の睡眠スコア", value: "86", unit: "点", trend: "+7" },
      { label: "平均睡眠時間", value: "7.2", unit: "h", trend: "+0.4h" },
      { label: "寝つきまで", value: "18", unit: "分", trend: "-6分" },
    ],
    appTabs: [
      { label: "記録", title: "おやすみメモ", body: "今日の疲れ、カフェイン、入浴、気分をタップで残せます。" },
      { label: "分析", title: "眠りの傾向", body: "曜日別の睡眠時間と朝の気分を重ねて表示します。" },
      { label: "習慣", title: "夜のルーティン", body: "無理なく続く就寝前チェックリストを作れます。" },
    ],
    features: [
      { title: "30秒で睡眠記録", body: "時刻入力と気分タグだけで、毎日の眠りを負担なく残せます。" },
      { title: "週次レポート", body: "睡眠スコア、安定度、朝の調子をカードで確認できます。" },
      { title: "やさしい提案", body: "生活ログの変化から、今夜試しやすい小さな改善を提案します。" },
    ],
  },
  {
    id: "features",
    label: "機能",
    eyebrow: "Features",
    hero: {
      title: "眠りの変化を、見逃さない機能。",
      lead:
        "記録、可視化、ふりかえり、習慣化まで。睡眠改善に必要な要素を、静かな画面にまとめました。",
      ctas: [
        { label: "レポート機能を見る", target: "report" },
        { label: "使い方を見る", target: "guide" },
      ],
    },
    features: [
      { icon: "moon", title: "睡眠ログ", body: "就寝・起床時刻、寝つき、途中覚醒、朝の気分をまとめて記録。" },
      { icon: "sparkle", title: "気分メモ", body: "一言メモとタグで、眠りに影響した出来事を残せます。" },
      { icon: "chart", title: "睡眠スコア", body: "時間、安定度、主観評価をもとに毎朝スコアを表示。" },
      { icon: "bell", title: "リマインダー", body: "就寝準備、記録忘れ、週次ふりかえりを静かに通知。" },
      { icon: "leaf", title: "ルーティン管理", body: "入浴、照明、ストレッチなど夜の習慣をチェックリスト化。" },
      { icon: "lock", title: "プライベート設計", body: "睡眠メモは本人の確認に使う前提で、余計な共有導線を置きません。" },
    ],
    soundTiles: [
      { title: "雨音", subtitle: "小さな雨粒", duration: "20 min" },
      { title: "焚き火", subtitle: "低く穏やかな音", duration: "30 min" },
      { title: "波音", subtitle: "ゆっくり寄せる海", duration: "45 min" },
      { title: "白色ノイズ", subtitle: "集中しやすい一定音", duration: "60 min" },
    ],
  },
  {
    id: "report",
    label: "レポート",
    eyebrow: "Sleep report",
    hero: {
      title: "睡眠スコアで、整った夜を増やす。",
      lead:
        "眠れた日と眠りにくかった日の違いを、数字とメモで一緒に確認。改善のきっかけを週ごとに掴めます。",
      ctas: [
        { label: "料金を見る", target: "pricing" },
        { label: "使い方を見る", target: "guide" },
      ],
    },
    reportMetrics: [
      { label: "睡眠スコア", value: "86", unit: "点", trend: "良好" },
      { label: "安定度", value: "92", unit: "%", trend: "+12%" },
      { label: "深い眠り", value: "2.1", unit: "h", trend: "+0.3h" },
      { label: "朝の気分", value: "4.4", unit: "/5", trend: "+0.5" },
    ],
    weeklyBars: [
      { day: "月", score: 72 },
      { day: "火", score: 78 },
      { day: "水", score: 83 },
      { day: "木", score: 80 },
      { day: "金", score: 86 },
      { day: "土", score: 91 },
      { day: "日", score: 88 },
    ],
    insights: [
      "入浴から就寝まで60分前後の日は、寝つきが平均8分短くなっています。",
      "23:30までにベッドへ入った日は、翌朝の気分スコアが高めです。",
      "カフェイン記録がある日は、途中覚醒のメモが増える傾向があります。",
    ],
  },
  {
    id: "pricing",
    label: "料金",
    eyebrow: "Pricing",
    hero: {
      title: "まずは無料で、眠りの傾向を知る。",
      lead:
        "基本の睡眠記録は無料。より詳しい分析や長期レポートが必要になったら、プレミアムへ切り替えられます。",
      ctas: [commonCta.primary],
    },
    pricingPlans: [
      {
        name: "Free",
        label: "無料プラン",
        price: "¥0",
        cycle: "ずっと無料",
        description: "毎日の記録と直近7日間のふりかえりを始めたい方向け。",
        features: ["睡眠ログ", "気分メモ", "7日間レポート", "基本リマインダー"],
        cta: { label: "無料で始める", target: "download" },
      },
      {
        name: "Premium",
        label: "プレミアム",
        price: "¥480",
        cycle: "月額",
        description: "睡眠の傾向を詳しく見て、改善を継続したい方向け。",
        features: ["無制限レポート", "月次比較", "詳細インサイト", "サウンド全開放", "PDF書き出し"],
        highlight: "人気",
        cta: { label: "7日間無料で試す", target: "download" },
      },
      {
        name: "Family",
        label: "ファミリー",
        price: "¥780",
        cycle: "月額",
        description: "家族の睡眠習慣をそれぞれ個別に整えたい方向け。",
        features: ["最大4プロフィール", "個別レポート", "共有なしの個人メモ", "家族向け通知"],
        cta: { label: "詳しく見る", target: "faq" },
      },
    ],
  },
  {
    id: "voices",
    label: "利用者の声",
    eyebrow: "User voices",
    hero: {
      title: "眠りを整えたい人の、静かな習慣に。",
      lead:
        "仕事、育児、学習。生活リズムが違っても、NemuNoteはそれぞれの夜に合わせて記録を支えます。",
      ctas: [
        { label: "使い方を見る", target: "guide" },
        commonCta.primary,
      ],
    },
    reviews: [
      {
        name: "Aki",
        role: "デザイナー / 30代",
        rating: 5,
        quote: "寝る前に何をしていたかが残るので、眠れない日の理由を責めずに振り返れるようになりました。",
      },
      {
        name: "Mina",
        role: "育児中 / 20代",
        rating: 5,
        quote: "短いメモだけで続くのが助かります。週末にレポートを見ると、休めた日がちゃんと分かります。",
      },
      {
        name: "Toru",
        role: "エンジニア / 40代",
        rating: 4,
        quote: "数字が細かすぎず、改善ポイントが読みやすいです。通知の圧が少ないところも気に入っています。",
      },
    ],
    stats: [
      { value: "92%", label: "記録が続けやすいと回答" },
      { value: "4.7", label: "ストア平均評価" },
      { value: "30秒", label: "1回の平均記録時間" },
    ],
  },
  {
    id: "guide",
    label: "使い方",
    eyebrow: "Guide",
    hero: {
      title: "今夜から、3ステップで記録開始。",
      lead:
        "難しい設定は必要ありません。寝る前と起きた後に少しだけ記録して、週末に傾向を確認します。",
      ctas: [
        { label: "アプリを入手", target: "download" },
        { label: "FAQを見る", target: "faq" },
      ],
    },
    steps: [
      { number: "01", title: "就寝前にチェック", body: "今日の気分、カフェイン、運動、入浴などをタップで記録します。" },
      { number: "02", title: "起床後にメモ", body: "起きた時間、眠気、夢、夜中の目覚めを短く残します。" },
      { number: "03", title: "週末にふりかえる", body: "スコアとメモを見比べて、来週試す小さな習慣を選びます。" },
    ],
    articles: [
      { title: "寝つきを整える夜の照明", category: "環境", readTime: "3分" },
      { title: "週末の寝だめと平日のリズム", category: "習慣", readTime: "4分" },
      { title: "朝の気分メモを続けるコツ", category: "記録", readTime: "2分" },
    ],
  },
  {
    id: "faq",
    label: "FAQ",
    eyebrow: "FAQ",
    hero: {
      title: "よくある質問",
      lead:
        "利用前に気になる記録方法、料金、データの扱いについてまとめました。",
      ctas: [commonCta.primary],
    },
    faqItems: [
      {
        question: "睡眠計測デバイスがなくても使えますか？",
        answer: "はい。NemuNoteは手入力の記録だけで使えます。スマートウォッチ連携は任意です。",
      },
      {
        question: "無料プランでできることは？",
        answer: "睡眠ログ、気分メモ、直近7日間のレポート、基本リマインダーを利用できます。",
      },
      {
        question: "プレミアムはいつでも解約できますか？",
        answer: "はい。App StoreまたはGoogle Playのサブスクリプション管理からいつでも変更できます。",
      },
      {
        question: "記録したメモは他の人に共有されますか？",
        answer: "いいえ。睡眠メモは本人のふりかえりのためのデータで、公開プロフィール機能はありません。",
      },
      {
        question: "データの削除はできますか？",
        answer: "アプリ内の設定から、記録データの削除やアカウント削除を申請できます。",
      },
    ],
  },
  {
    id: "download",
    label: "ダウンロード",
    eyebrow: "Download",
    hero: {
      title: "NemuNoteを、今夜のベッドサイドに。",
      lead:
        "iPhoneでもAndroidでも、数分でセットアップ完了。最初の7日間で、自分の眠りの輪郭が見えてきます。",
      ctas: [
        { label: "App Store", target: "download", store: "ios" },
        { label: "Google Play", target: "download", store: "android" },
      ],
    },
    downloadCards: [
      { platform: "iOS", label: "App Storeから入手", note: "iOS 16以降に対応" },
      { platform: "Android", label: "Google Playで手に入れる", note: "Android 10以降に対応" },
    ],
    appTabs: [
      { label: "1日目", title: "まずは寝た時間を記録", body: "完璧な入力より、続けられる量から始めます。" },
      { label: "3日目", title: "朝の気分を比較", body: "起床時の眠気とメモの関係を見ていきます。" },
      { label: "7日目", title: "週次レポートを確認", body: "来週試すルーティンをひとつだけ選びます。" },
    ],
  },
  {
    id: "privacy",
    label: "安全性",
    eyebrow: "Privacy & security",
    hero: {
      title: "睡眠データを、静かに守る。",
      lead:
        "NemuNoteは、眠りや気分のメモを安心して残せるよう、必要最小限のデータ利用と明確な管理機能を大切にしています。",
      ctas: [
        { label: "FAQを見る", target: "faq" },
        commonCta.primary,
      ],
    },
    privacyPoints: [
      { title: "本人のための記録", body: "睡眠メモは公開されず、本人のふりかえりとアプリ内分析に使われます。" },
      { title: "削除しやすい設計", body: "不要になった記録やアカウントは、設定画面から削除手続きを行えます。" },
      { title: "通知は控えめ", body: "睡眠を邪魔しない時間帯と頻度を優先し、通知設定はいつでも変更できます。" },
      { title: "安全な通信", body: "アプリとサーバー間の通信は暗号化し、認証情報を適切に保護します。" },
    ],
    policyLinks: [
      { label: "プライバシーポリシー", target: "privacy" },
      { label: "利用規約", target: "faq" },
      { label: "お問い合わせ", target: "faq" },
    ],
  },
];

export const pageMap = Object.fromEntries(pages.map((page) => [page.id, page]));

export const homePage = pageMap.home;
export const featureCards = pageMap.features.features;
export const pricingPlans = pageMap.pricing.pricingPlans;
export const reviews = pageMap.voices.reviews;
export const guideArticles = pageMap.guide.articles;
export const faqItems = pageMap.faq.faqItems;
