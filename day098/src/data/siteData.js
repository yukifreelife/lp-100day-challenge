export const nav = [
  { id: "top", label: "トップ", href: "#top" },
  { id: "characters", label: "2匹の紹介", href: "#characters" },
  { id: "videos", label: "動画", href: "#videos" },
  { id: "gallery", label: "ギャラリー", href: "#gallery" },
];

export const catProfiles = [
  {
    id: "shiro",
    name: "しろ",
    subtitle: "オッドアイの白猫",
    gender: "男の子",
    age: "3歳",
    personality: "おっとり甘えん坊",
    catchphrase: "青と黄色の目で、今日も静かに見守ります。",
    description:
      "まっしろな毛並みと、青と黄色のオッドアイがチャームポイント。のんびり屋さんで、ひなたの真ん中を見つけるのが得意です。",
    color: "blue",
    image: "/assets/illustrations/profile-shiro.png",
    tags: ["ひなた好き", "ゆっくり歩く", "小さな声でお返事"],
    details: [
      {
        title: "好きなこと",
        text: "日向ぼっこ、ふわふわのクッション、ひとりの時間。",
        image: "/assets/illustrations/profile-detail-shiro-likes.png",
      },
      {
        title: "性格",
        text: "おっとりマイペースで甘えん坊。慎重だけど、心を開くとことん甘えます。",
        image: "/assets/illustrations/profile-detail-shiro-personality.png",
      },
      {
        title: "チャームポイント",
        text: "青と黄色のオッドアイと、まっしろなふわふわの毛並み。",
        image: "/assets/illustrations/profile-detail-shiro-charm.png",
      },
    ],
  },
  {
    id: "hachi",
    name: "はち",
    subtitle: "白黒ハチワレ",
    gender: "女の子",
    age: "2歳",
    personality: "好奇心旺盛",
    catchphrase: "気になる音には、いちばんに駆けつけます。",
    description:
      "黒いハチワレ模様と、くるくる動く目が目印。しろのことが大好きで、遊びもおやつも全力で楽しむ元気な女の子です。",
    color: "yellow",
    image: "/assets/illustrations/profile-hachi.png",
    tags: ["箱チェック係", "おやつ待ち名人", "しろのとなり担当"],
    details: [
      {
        title: "好きなこと",
        text: "おもちゃ遊び、みんなのそば、おやつの時間。",
        image: "/assets/illustrations/profile-detail-hachi-likes.png",
      },
      {
        title: "性格",
        text: "元気いっぱいで好奇心旺盛。甘えたい時は自分からすり寄ってきます。",
        image: "/assets/illustrations/profile-detail-hachi-personality.png",
      },
      {
        title: "チャームポイント",
        text: "きれいなハチワレ模様と、くりっとしたまんまるおめめ。",
        image: "/assets/illustrations/profile-detail-hachi-charm.png",
      },
    ],
  },
];

export const pageIntros = {
  characters: {
    eyebrow: "Character",
    title: "2匹の紹介",
    lead: "まっしろなしろと、ハチワレのはち。性格の違うふたりの日常です。",
    image: "/assets/illustrations/intro-cats.png",
  },
  videos: {
    eyebrow: "Video",
    title: "動画",
    lead: "のんびり、ちょっとにぎやか。2匹の日常をまとめました。",
    image: "/assets/illustrations/video-hero-cats.png",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "ギャラリー",
    lead: "ふたりのかわいい瞬間を、そっと集めました。",
    image: "/assets/illustrations/gallery-hero-cats.png",
  },
};

export const videoCards = [
  {
    id: "morning-stretch",
    title: "朝ののび",
    label: "今日のひなた",
    description: "カーテンが開いたら、しろのゆっくりストレッチから一日が始まります。",
    scene: "stretch",
    image: "/assets/thumbnails/morning-stretch.png",
    cats: ["しろ"],
  },
  {
    id: "snack-time",
    title: "おやつ待ち",
    label: "2匹の合図",
    description: "器の前にそろって集合。はちの視線と、しろの静かな圧をどうぞ。",
    scene: "snack",
    image: "/assets/thumbnails/snack-time.png",
    cats: ["しろ", "はち"],
  },
  {
    id: "window-watch",
    title: "窓辺の見張り",
    label: "外の気配",
    description: "並んだ背中で、鳥の声や風の動きをじっと観察しています。",
    scene: "window",
    image: "/assets/thumbnails/window-watch.png",
    cats: ["しろ", "はち"],
  },
  {
    id: "weekend-games",
    title: "週末の大運動会",
    label: "小さな事件",
    description: "お気に入りのおもちゃを追いかけて、部屋中を軽やかに走ります。",
    scene: "play",
    image: "/assets/thumbnails/weekend-games.png",
    cats: ["しろ", "はち"],
  },
];

export const relationshipItems = [
  {
    id: "morning-greeting",
    title: "朝のあいさつ",
    caption: "朝はそっと近づいて、くんくんごあいさつからスタート。",
    image: "/assets/relationship/morning-greeting.png",
  },
  {
    id: "snack-meeting",
    title: "おやつ会議",
    caption: "おやつの時間は真剣モード。じーっと相談して決めます。",
    image: "/assets/relationship/snack-meeting.png",
  },
  {
    id: "window-watch",
    title: "窓辺の見張り",
    caption: "外の景色をふたりでチェック。今日も平和かニャ?",
    image: "/assets/relationship/window-watch.png",
  },
];

export const featuredVideo = {
  eyebrow: "今週のおすすめ",
  title: "週末の大運動会",
  description: "ふたりの全力がさく裂。おもちゃを追いかけ、走って飛んで、楽しいがいっぱいの週末です。",
  duration: "8:42",
  date: "2024.05.19",
  tag: "#遊び",
  image: "/assets/featured/weekly-playtime.png",
};

export const videoFilters = ["すべて", "朝の時間", "おやつ", "窓辺", "遊び"];

export const videoLibrary = [
  {
    id: "library-morning-stretch",
    title: "朝ののび",
    description: "気持ちよくのびーっと! 1日のはじまりです。",
    duration: "3:15",
    date: "2024.05.17",
    tag: "#朝の時間",
    image: "/assets/thumbnails/library-morning-stretch.png",
  },
  {
    id: "library-snack-time",
    title: "おやつ待ち",
    description: "おやつの時間は真剣勝負。しろとはちの視線に注目。",
    duration: "2:08",
    date: "2024.05.15",
    tag: "#おやつ",
    image: "/assets/thumbnails/library-snack-time.png",
  },
  {
    id: "library-window-watch",
    title: "窓辺の見張り",
    description: "外の世界を観察中。今日も平和を守ります。",
    duration: "4:21",
    date: "2024.05.12",
    tag: "#窓辺",
    image: "/assets/thumbnails/library-window-watch.png",
  },
  {
    id: "library-fur-grooming",
    title: "ふわふわ毛づくろい",
    description: "やさしくぺろぺろ。仲良しのひととき。",
    duration: "3:02",
    date: "2024.05.10",
    tag: "#なかよし",
    image: "/assets/thumbnails/library-fur-grooming.png",
  },
  {
    id: "library-box-hideout",
    title: "箱の中の秘密基地",
    description: "見つかっちゃった...? お気に入りの隠れ家です。",
    duration: "2:45",
    date: "2024.05.08",
    tag: "#遊び",
    image: "/assets/thumbnails/library-box-hideout.png",
  },
  {
    id: "library-night-rest",
    title: "夜のまったり時間",
    description: "1日が終わって、ふたりでごろん。おやすみなさい。",
    duration: "5:33",
    date: "2024.05.05",
    tag: "#夜の時間",
    image: "/assets/thumbnails/library-night-rest.png",
  },
];

export const galleryItems = [
  { id: "nap-together", title: "まるいお昼寝", caption: "同じベッドで、少しだけくっついて。", image: "/assets/gallery/nap-together.png", cats: ["しろ", "はち"] },
  { id: "box-hideout", title: "箱のひみつ基地", caption: "先に入ったのはしろ、のぞくのははち。", image: "/assets/gallery/box-hideout.png", cats: ["しろ", "はち"] },
  { id: "window-pair", title: "窓辺の背中", caption: "外を眺める時間は、ふたりの静かな日課。", image: "/assets/gallery/window-pair.png", cats: ["しろ", "はち"] },
  { id: "music-room", title: "ごきげん時間", caption: "はちが座って、しろはうとうと。", image: "/assets/gallery/music-room.png", cats: ["しろ", "はち"] },
  { id: "soft-bed", title: "ふわふわ同盟", caption: "眠い日は、境目がなくなるほど近くに。", image: "/assets/gallery/soft-bed.png", cats: ["しろ", "はち"] },
  { id: "face-to-face", title: "ないしょ話", caption: "鼻先を近づけて、今日の予定を相談中。", image: "/assets/gallery/face-to-face.png", cats: ["しろ", "はち"] },
  { id: "round-sleep", title: "丸まる午後", caption: "白と黒の模様が、やさしい円になります。", image: "/assets/gallery/round-sleep.png", cats: ["しろ", "はち"] },
  { id: "sunny-room", title: "ひなたの定位置", caption: "光が差したら、いつもの場所へ集合。", image: "/assets/gallery/sunny-room.png", cats: ["しろ", "はち"] },
];

export const galleryFilters = ["すべて", "しろ", "はち", "なかよし", "お昼寝"];

export const bestShot = {
  title: "今月のベストショット",
  caption: "まぶしい窓辺で並んだ、しろとはちのまっすぐな表情。",
  image: "/assets/featured/best-shot.png",
};

export const galleryPageItems = [
  { id: "sun-stretch", title: "ひなたぼっこ", image: "/assets/gallery/page-sun-stretch.png", cats: ["しろ"] },
  { id: "round-eyes", title: "まんまるおめめ", image: "/assets/gallery/page-round-eyes.png", cats: ["はち"] },
  { id: "snack-sign", title: "おやつの予感", image: "/assets/gallery/page-snack-sign.png", cats: ["しろ"] },
  { id: "window-back", title: "窓辺の背中", image: "/assets/gallery/page-window-back.png", cats: ["しろ", "はち"] },
  { id: "sleep-together", title: "ふたりでお昼寝", image: "/assets/gallery/page-sleep-together.png", cats: ["しろ", "はち"] },
  { id: "tiny-paws", title: "小さな肉球", image: "/assets/gallery/page-tiny-paws.png", cats: ["しろ", "はち"] },
  { id: "box-shiro", title: "箱入りしろ", image: "/assets/gallery/page-box-shiro.png", cats: ["しろ"] },
  { id: "yarn-hachi", title: "毛糸とはち", image: "/assets/gallery/page-yarn-hachi.png", cats: ["はち"] },
];

export const wallpaperItems = [
  { id: "sunny-shiro", title: "午後のひなた", image: "/assets/wallpapers/sunny-shiro.png" },
  { id: "blue-sky-pair", title: "青空とふたり", image: "/assets/wallpapers/blue-sky-pair.png" },
  { id: "rolling-hachi", title: "ころんとはち", image: "/assets/wallpapers/rolling-hachi.png" },
];

export const cta = {
  eyebrow: "週末更新の猫日常チャンネル",
  title: "しろとはちの毎日を、これからも一緒に。",
  description: "ふわっとやさしい日常と、たまに起きる小さな事件をお届けします。",
  primaryLabel: "チャンネル登録",
  secondaryLabel: "最新動画を見る",
  href: "https://www.youtube.com/",
  subscribeHref: "https://www.youtube.com/",
};

export const sectionCtas = {
  characters: {
    title: "2匹の日常を動画で見る",
    description: "しろとはちの距離感は、動画だともっとふわっと伝わります。",
    label: "最新動画を見る",
    href: "#videos",
  },
  videos: {
    title: "次の更新も、いっしょに待ちませんか",
    description: "週末に届く小さな事件を、チャンネル登録で見逃さずに。",
    label: "チャンネル登録",
    href: "https://www.youtube.com/",
  },
  gallery: {
    title: "お気に入りの瞬間を、動画でも。",
    description: "写真で気になった表情の続きは、最新動画でのんびりどうぞ。",
    label: "最新動画を見る",
    href: "#videos",
  },
};

export const hero = {
  title: "しろとはちのひなた時間",
  lead: "2匹の猫と過ごす、ふわっとやさしい日常チャンネル",
  primaryLabel: "チャンネル登録",
  secondaryLabel: "最新動画を見る",
  image: "/assets/illustrations/hero-cats.png",
};

export const siteData = {
  title: "しろとはちのひなた時間",
  brand: {
    name: "しろとはちのひなた時間",
    description: "白猫しろとハチワレ猫はちの日常を届けるYouTubeチャンネル",
  },
  nav,
  hero,
  pageIntros,
  catProfiles,
  videoCards,
  relationshipItems,
  featuredVideo,
  videoFilters,
  videoLibrary,
  galleryItems,
  galleryFilters,
  bestShot,
  galleryPageItems,
  wallpaperItems,
  cta,
  sectionCtas,
};

export default siteData;
