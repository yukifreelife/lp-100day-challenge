export const routeMeta = {
  home: {
    title: "ボルダリングギア通販 | 初めての一式を迷わずそろえる",
    description:
      "初めてのジム通いに必要な液体チョーク、バッグ、ブラシ、テープ、グリップバームをまとめて選べるボルダリングギア通販。準備を整えて次の一手に集中できます。",
  },
  products: {
    title: "商品ラインナップ | ボルダリングギア通販",
    description:
      "液体チョーク、チョークバッグ、ブラシ、テープなど、登る前にそろえたい基本ギアを目的別に選べます。",
  },
  "product-liquid-chalk": {
    title: "液体チョーク | 粉飛びを抑えるボルダリングギア",
    description:
      "速乾で扱いやすい液体チョーク。粉飛びを抑えながら、手汗が気になるセッション前の指先を整えます。",
  },
  "product-chalk-bag": {
    title: "チョークバッグ | 持ち運びやすい収納ギア",
    description:
      "チョーク、ブラシ、テープをまとめて持ち運びやすいチョークバッグ。ジム到着後の準備を短くできます。",
  },
  "product-brush": {
    title: "ホールドブラシ | 接地感を整えるメンテナンスギア",
    description:
      "ホールド表面に残ったチョークを落とし、次の一手の接地感を整えるホールドブラシです。",
  },
  "product-finger-tape": {
    title: "フィンガーテープ | 指先を守るボルダリング用品",
    description:
      "指先の消耗が気になる練習日に使いやすいフィンガーテープ。皮膚の負担を抑えて練習を支えます。",
  },
  "product-grip-balm": {
    title: "グリップバーム | 練習後の手肌ケア",
    description:
      "登った後の乾燥した手肌を整え、翌日の練習に向けたコンディション維持を助けるケア用品です。",
  },
  "product-mini-holds": {
    title: "ミニホールド | 自宅でフォーム確認",
    description:
      "指先の置き方や体の向きを確認しやすい小型ホールド。自宅でのフォーム練習に使えます。",
  },
  "starter-kit": {
    title: "スターターギアセット | 初めてのジム通いに必要な一式",
    description:
      "液体チョーク、バッグ、ブラシ、テープ、グリップバームをまとめたスターターギアセット。最初の買い物で迷いにくい構成です。",
  },
  howto: {
    title: "使い方・メンテナンス | ボルダリングギア通販",
    description:
      "液体チョーク、ブラシ、テープ、チョークバッグの使い方とメンテナンス手順を初心者にも分かりやすく紹介します。",
  },
  guide: {
    title: "比較・選び方 | 初心者向けボルダリングギアガイド",
    description:
      "手汗対策、持ち運び、メンテナンスなど目的別に、最初にそろえるボルダリングギアを比較できます。",
  },
  faq: {
    title: "よくある質問 | ボルダリングギア通販",
    description:
      "配送、返品、支払い方法、ジムでの使用、チョークの使用目安など、購入前に気になる質問を確認できます。",
  },
  cart: {
    title: "カート | ご注文内容の確認",
    description:
      "スターターギアセットと関連アイテムの注文内容、送料、返品条件を確認して購入手続きへ進めます。",
  },
  checkout: {
    title: "購入手続き | 商品・配送先・支払い方法の確認",
    description:
      "選択したボルダリングギアの画像、個数、金額、配送先、支払い方法を確認できます。",
  },
  legal: {
    title: "特定商取引法に基づく表記・プライバシーポリシー",
    description:
      "販売条件、送料、返品、個人情報の取り扱いなど、ボルダリングギア通販のご利用前に確認いただきたい情報です。",
  },
  "support-chat": {
    title: "チャット相談 | ボルダリングギア通販",
    description:
      "商品選びや使い方など、短時間で確認したい内容をチャット相談フォームから送れます。",
  },
  "support-email": {
    title: "メール相談 | ボルダリングギア通販",
    description:
      "商品比較、配送、返品など、詳しく残したい相談内容をメール相談フォームから送れます。",
  },
  "support-contact": {
    title: "お問い合わせフォーム | ボルダリングギア通販",
    description:
      "注文、配送、返品・交換、商品についての問い合わせ内容を専用フォームから送れます。",
  },
};

export function applyRouteMeta(route) {
  const meta = routeMeta[route] || routeMeta.home;
  const pageUrl = `${window.location.origin}${window.location.pathname}#${route}`;
  document.title = meta.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", meta.description);
  }

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute("href", pageUrl);
  }

  const metaUpdates = [
    ['meta[property="og:url"]', pageUrl],
    ['meta[property="og:title"]', meta.title],
    ['meta[property="og:description"]', meta.description],
    ['meta[name="twitter:title"]', meta.title],
    ['meta[name="twitter:description"]', meta.description],
  ];

  metaUpdates.forEach(([selector, content]) => {
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute("content", content);
    }
  });

  return meta;
}
