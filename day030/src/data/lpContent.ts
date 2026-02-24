import type { LpAccentTone, LpIconName } from '../types/lp';

type StatItem = {
  value: string;
  label: string;
  tone: LpAccentTone;
};

type IconCard = {
  icon: LpIconName;
  title: string;
  description: string;
};

type ReviewItem = {
  name: string;
  profile: string;
  body: string;
  avatar: string;
  stars: number;
};

type ProcessStep = {
  icon: LpIconName;
  title: string;
  description: string;
  tone: Exclude<LpAccentTone, 'text'>;
};

type FaqItem = {
  question: string;
  answer: string;
};

type FooterLinks = typeof import('./lpLinks').lpLinks.footer;
type FooterLinkId = keyof FooterLinks;

export const lpContent = {
  brand: {
    short: 'am',
    name: 'atelier moco',
    footerDescription: '手作りの温かみを大切に、\nひとつひとつ心を込めて\n制作しています。',
  },
  hero: {
    badge: 'ひとつひとつ手作業で制作',
    title: '手作りの温かみが\nあなたの毎日に\n特別な彩りを',
    description:
      'atelier mocoは、あなただけの一点もののキーホルダーをお届けします。名入れ対応で、大切な人へのギフトにも自分へのご褒美にも最適です。',
    primaryCtaLabel: '商品を見る',
    secondaryCtaLabel: 'ギフト用を探す',
    image: '/images/lp/hero-product.webp',
    imageAlt: '手作りキーホルダーのイメージ',
    floatingBadge: {
      icon: 'gift' as LpIconName,
      title: '名入れ対応',
      caption: 'ギフト包装無料',
    },
    stats: [
      { value: '3,200+', label: '販売実績', tone: 'pink' },
      { value: '4.8', label: '平均評価', tone: 'sage' },
      { value: '72%', label: 'リピート率', tone: 'pink' },
    ] as StatItem[],
  },
  empathy: {
    title: 'こんなお悩み、ありませんか？',
    description: '小物選びで感じる、よくあるお困りごと',
    cards: [
      {
        icon: 'sad',
        title: '量産品だと特別感がない',
        description: 'どこにでもあるデザインで、自分らしさが出せない…',
      },
      {
        icon: 'search',
        title: 'ちょうどいいギフトが見つからない',
        description: '贈りたい気持ちはあるけど、予算や相手の好みに合うものが見つからない…',
      },
      {
        icon: 'gift',
        title: 'オリジナル感が欲しい',
        description: '名前やメッセージを入れて、世界に一つだけのアイテムを贈りたい…',
      },
    ] as IconCard[],
  },
  solution: {
    label: 'Solution',
    title: 'atelier mocoなら\nすべて解決できます',
    description:
      '私たちは、ひとつひとつのキーホルダーを心を込めて制作しています。お客様の「特別」を大切にしながら、カスタマイズの自由度にこだわりました。',
    points: [
      '一点ずつ丁寧な手作業で、温かみのある仕上がり',
      '豊富なカラー・デザインバリエーションから選べる',
      '名入れ・メッセージ刻印で世界にひとつだけに',
      'ギフト包装無料で、そのまま贈り物に',
    ],
    ctaLabel: '制作への想いを見る',
    images: [
      {
        src: '/images/lp/craft-1.webp',
        alt: '制作風景イメージ',
      },
      {
        src: '/images/lp/craft-2.webp',
        alt: '素材イメージ',
      },
    ],
  },
  features: {
    label: 'Features',
    title: 'atelier mocoの特徴',
    description: 'お客様に喜ばれる、こだわりのポイント',
    cards: [
      {
        icon: 'type',
        title: '名入れ対応',
        description: 'お名前やメッセージを刻印。世界にひとつだけのアイテムに。',
      },
      {
        icon: 'palette',
        title: '選べるカラー',
        description: '30種類以上のカラーバリエーション。お好みの色をお選びいただけます。',
      },
      {
        icon: 'feather',
        title: '軽量で使いやすい',
        description: '持ち運びに便利な軽量設計。バッグや鍵につけても負担になりません。',
      },
      {
        icon: 'hand',
        title: 'ひとつずつ手作業',
        description: '熟練の技で丁寧に制作。温かみのある仕上がりをお届けします。',
      },
      {
        icon: 'gift',
        title: 'ギフト包装無料',
        description: '可愛いラッピングで無料包装。メッセージカードもお付けします。',
      },
      {
        icon: 'shield',
        title: '安心の品質保証',
        description: '万が一の不具合には無償対応。安心してお使いいただけます。',
      },
    ] as IconCard[],
  },
  reviews: {
    label: 'Reviews',
    title: 'お客様の声',
    description: 'たくさんの喜びの声をいただいています',
    stats: [
      { value: '3,200+個', label: '販売実績', tone: 'pink' },
      { value: '4.8/5.0', label: '平均評価', tone: 'pink' },
      { value: '72%', label: 'リピート率', tone: 'pink' },
      { value: '96%', label: '満足度', tone: 'pink' },
    ] as StatItem[],
    list: [
      {
        name: '田中 美咲さん',
        profile: '28歳 / 会社員',
        body: '友人の誕生日プレゼントに名入れキーホルダーを購入しました。ラッピングも可愛くて、渡したときにすごく喜んでもらえました！手作りの温かみが伝わる素敵な商品です。',
        avatar: '/images/lp/review-avatar-1.webp',
        stars: 5,
      },
      {
        name: '佐藤 香織さん',
        profile: '35歳 / 主婦',
        body: '推しの名前を入れて自分用に購入。色も豊富で選ぶのが楽しかったです。バッグにつけて毎日愛用しています。軽くて邪魔にならないのも嬉しいポイント！',
        avatar: '/images/lp/review-avatar-2.webp',
        stars: 5,
      },
      {
        name: '鈴木 由美さん',
        profile: '42歳 / デザイナー',
        body: '職場の仲間とお揃いで購入しました。一つひとつ丁寧に作られているのが分かる品質で、大満足です。リピート買い確定です！',
        avatar: '/images/lp/review-avatar-3.webp',
        stars: 5,
      },
    ] as ReviewItem[],
  },
  process: {
    label: 'Process',
    title: 'ご利用の流れ',
    description: 'かんたん5ステップで、あなただけのキーホルダーが届きます',
    note: '※ 名入れオプションをご選択の場合、制作に3〜5営業日いただきます',
    ctaLabel: '今すぐ注文する',
    steps: [
      {
        icon: 'bag',
        title: '商品を選ぶ',
        description: '豊富なデザインとカラーからお好みのキーホルダーを選択',
        tone: 'pink',
      },
      {
        icon: 'pen',
        title: 'オプション入力',
        description: '名入れやカラーのカスタマイズを指定',
        tone: 'sage',
      },
      {
        icon: 'box',
        title: '注文確定',
        description: 'お支払い方法を選択してご注文完了',
        tone: 'pink',
      },
      {
        icon: 'pin',
        title: '丁寧に制作',
        description: '職人がひとつずつ心を込めて手作り（3〜5営業日）',
        tone: 'sage',
      },
      {
        icon: 'truck',
        title: '発送・お届け',
        description: '可愛い包装でお手元へお届け',
        tone: 'pink',
      },
    ] as ProcessStep[],
  },
  faq: {
    label: 'FAQ',
    title: 'よくあるご質問',
    description: 'お客様からよく寄せられるご質問にお答えします',
    contactDescription: 'その他のご質問がございましたら、お気軽にお問い合わせください',
    contactLabel: 'お問い合わせフォーム',
    items: [
      {
        question: '名入れはどのくらいの文字数まで可能ですか？',
        answer:
          'ひらがな・カタカナ・漢字・アルファベットで最大10文字まで対応可能です。記号や絵文字は一部対応していない場合がございますので、ご注文前にお問い合わせください。',
      },
      {
        question: '納期はどのくらいかかりますか？',
        answer:
          '通常はご注文確定後3〜5営業日で制作し、発送いたします。繁忙期は前後する場合がございます。',
      },
      {
        question: '送料はいくらですか？',
        answer: '5,000円以上のお買い上げで送料無料です。5,000円未満の場合は全国一律550円です。',
      },
      {
        question: 'ギフト包装は無料ですか？',
        answer: 'はい、無料で対応しています。ご希望の方にはメッセージカードも同梱いたします。',
      },
      {
        question: '返品・交換は可能ですか？',
        answer:
          '初期不良の場合は到着後7日以内にご連絡ください。オーダーメイド商品のため、お客様都合での返品は原則お受けしておりません。',
      },
    ] as FaqItem[],
  },
  finalCta: {
    title: 'あなただけの特別なキーホルダーを今すぐ手に入れよう',
    description:
      '手作りの温かみと、世界にひとつだけのオリジナリティを。大切な人へのギフトにも、自分へのご褒美にも。',
    primaryLabel: '今すぐお気に入りを見つける',
    secondaryLabel: 'ギフト用を探す',
    bullets: ['送料無料（5,000円以上）', 'ギフト包装無料', '安心の品質保証'],
  },
  footer: {
    sections: [
      {
        title: 'ショップ',
        items: [
          { id: 'shopAll' as FooterLinkId, label: '商品一覧' },
          { id: 'shopNew' as FooterLinkId, label: '新作アイテム' },
          { id: 'shopRanking' as FooterLinkId, label: '人気ランキング' },
          { id: 'shopGiftSet' as FooterLinkId, label: 'ギフトセット' },
        ],
      },
      {
        title: 'サポート',
        items: [
          { id: 'supportFaq' as FooterLinkId, label: 'よくある質問' },
          { id: 'supportContact' as FooterLinkId, label: 'お問い合わせ' },
          { id: 'supportShipping' as FooterLinkId, label: '配送について' },
          { id: 'supportReturn' as FooterLinkId, label: '返品・交換' },
        ],
      },
      {
        title: '会社情報',
        items: [
          { id: 'companyAbout' as FooterLinkId, label: 'atelier mocoについて' },
          { id: 'companyStory' as FooterLinkId, label: '制作へのこだわり' },
          { id: 'companyPolicy' as FooterLinkId, label: 'プライバシーポリシー' },
          { id: 'companyLegal' as FooterLinkId, label: '特定商取引法' },
        ],
      },
    ],
    copyright: '© 2024 atelier moco. All rights reserved.',
  },
} as const;
