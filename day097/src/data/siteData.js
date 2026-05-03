const asset = (path) => `/assets/${path}`;
const icon = (name) => asset(`icons/${name}.png`);

export const siteData = {
  siteUrl: "https://tanomeru-hishoshitsu.example.com",
  brand: {
    name: "たのめる秘書室",
    tagline: "ちょっと頼める、オンライン秘書サービス",
    description:
      "個人事業主や小規模チームの事務・日程調整・メール返信・資料整理を、必要な分だけ頼めるオンライン秘書サービスです。",
    logoMark: icon("chat"),
  },
  navigation: [
    { label: "ホーム", href: "/" },
    { label: "頼めること", href: "/service" },
    { label: "料金", href: "/pricing" },
    { label: "相談する", href: "/contact" },
  ],
  assets: {
    hero: {
      remoteAssistant: asset("remote-assistant-hero.png"),
      deskWorkflow: asset("desk-workflow-hero.png"),
      assistantTransparent: asset("assistant-illustration-transparent.png"),
    },
    icons: {
      mail: icon("mail"),
      calendar: icon("calendar"),
      folder: icon("folder"),
      booking: icon("booking"),
      search: icon("search"),
      calculator: icon("calculator"),
      checklist: icon("checklist"),
      chat: icon("chat"),
      headset: icon("headset"),
      clock: icon("clock"),
      yen: icon("yen"),
      lock: icon("lock"),
    },
  },
  cta: {
    primary: { label: "まずは15分だけ相談する", href: "/contact", icon: icon("calendar") },
    secondary: { label: "頼める内容を見る", href: "/service", icon: icon("checklist") },
  },
  shared: {
    taskChips: ["メール返信", "日程調整", "資料整理", "予約手配", "リサーチ", "請求まわり"],
    trustChips: ["1件だけOK", "今週だけOK", "チャットで依頼", "秘密保持に配慮"],
    services: [
      { title: "メール・チャット返信", text: "問い合わせ一次返信、定型文の整備、返信漏れ確認まで。", icon: icon("mail") },
      { title: "日程調整", text: "候補日の整理、参加者への連絡、カレンダー登録を代行。", icon: icon("calendar") },
      { title: "資料整理", text: "議事メモ、PDF整理、共有フォルダの命名ルールづくり。", icon: icon("folder") },
      { title: "予約・手配", text: "会議室、移動、会食、オンラインツール予約をまとめて対応。", icon: icon("booking") },
      { title: "リサーチ", text: "比較表、候補リスト、問い合わせ前の下調べを作成。", icon: icon("search") },
      { title: "請求まわり", text: "請求書作成前の情報整理、入金確認メモ、月次一覧づくり。", icon: icon("calculator") },
    ],
    faqs: [
      { q: "1件だけでも頼めますか？", a: "はい。初回は小さな作業から試せるよう、スポット相談を用意しています。" },
      { q: "急ぎの依頼はできますか？", a: "内容と空き状況により対応します。まずは希望納期を添えてご相談ください。" },
      { q: "どのツールで依頼できますか？", a: "メール、Slack、Chatwork、Google Workspace など、普段の環境に合わせます。" },
      { q: "個人情報や取引先情報が心配です。", a: "必要な範囲だけ共有いただき、取り扱いルールを確認してから進めます。" },
    ],
  },
  pages: {
    home: {
      metaTitle: "たのめる秘書室 | オンライン秘書サービス",
      metaDescription:
        "たのめる秘書室は、個人事業主や小規模チームのメール返信・日程調整・資料整理を、必要な分だけ頼めるオンライン秘書サービスです。",
      hero: {
        title: "その事務作業、今日からひとりで抱えなくて大丈夫。",
        titleLines: ["その事務作業、", "今日からひとりで", "抱えなくて大丈夫。"],
        lead: "ちょっと頼めるオンライン秘書が、メール返信、日程調整、資料整理を必要な分だけ手伝います。",
        image: asset("remote-assistant-hero.png"),
        chips: ["今日中に返信したい", "候補日をまとめたい", "資料を整えたい"],
        ctas: ["primary", "secondary"],
      },
      sections: {
        pains: [
          { title: "返信だけで朝が終わる", text: "急ぎではないけれど放置できない連絡を整えます。", icon: icon("mail") },
          { title: "調整の往復が多い", text: "候補日確認からカレンダー登録まで任せられます。", icon: icon("calendar") },
          { title: "細かい作業が積もる", text: "請求、予約、リサーチなどを小さく切り出せます。", icon: icon("checklist") },
        ],
        flow: [
          { step: "01", title: "15分だけ相談", text: "困っている作業と希望納期を一緒に整理します。" },
          { step: "02", title: "依頼内容を確定", text: "作業範囲、共有物、確認タイミングを決めます。" },
          { step: "03", title: "進捗を見ながら完了", text: "チャットで確認しながら、完了報告まで対応します。" },
        ],
        testimonials: [
          { quote: "返信漏れの不安が減って、提案づくりに集中できました。", name: "フリーランスデザイナー" },
          { quote: "採用するほどではない事務を、必要な週だけ頼めるのが助かります。", name: "小規模スクール運営" },
        ],
      },
    },
    service: {
      metaTitle: "頼めること | たのめる秘書室",
      metaDescription:
        "メール返信、日程調整、資料整理、予約手配、リサーチ、請求補助など、オンライン秘書に気軽に頼める作業内容を紹介します。",
      hero: {
        title: "頼めること、ぜんぶ見える化しました",
        titleLines: ["頼めること、", "ぜんぶ見える化しました"],
        lead: "毎日の小さな事務から、週次で回したいバックオフィス作業まで。依頼しやすい単位に分けています。",
        image: asset("desk-workflow-hero.png"),
        ctas: ["primary"],
      },
      categories: ["連絡対応", "スケジュール", "資料・ファイル", "予約手配", "調査", "請求補助"],
      serviceCards: [
        ...[
          ["問い合わせ一次返信", "返信文案、確認事項の整理、対応履歴メモ。", "mail"],
          ["予定調整", "候補日集約、相手先連絡、カレンダー登録。", "calendar"],
          ["資料整備", "議事録清書、ファイル名整理、共有リンク整備。", "folder"],
          ["予約代行", "会議室、飲食店、移動手段、オンラインURL発行。", "booking"],
          ["比較リサーチ", "候補リスト、料金比較、問い合わせ前の下調べ。", "search"],
          ["請求補助", "請求情報の取りまとめ、未入金確認メモ。", "calculator"],
          ["タスク棚卸し", "抜け漏れ確認、優先順位づけ、週次チェックリスト化。", "checklist"],
          ["顧客連絡サポート", "丁寧さを保ったリマインドやフォロー連絡。", "chat"],
        ].map(([title, text, iconName]) => ({ title, text, icon: icon(iconName) })),
      ],
      examples: ["セミナー前日の参加者案内を送りたい", "今月の請求対象を一覧にしたい", "候補店舗を5件に絞ってほしい"],
      requestPolicy: {
        can: ["定型的な事務作業", "公開情報の調査", "日程・予約の連絡補助", "資料やファイルの整理"],
        cannot: ["専門資格が必要な判断", "本人確認が必要な契約行為", "医療・法律・税務の最終判断", "緊急性が高い当日常駐対応"],
      },
    },
    pricing: {
      metaTitle: "料金 | たのめる秘書室",
      metaDescription:
        "たのめる秘書室の料金プラン。スポット3,300円から、月5時間のライト、月12時間のスタンダードまで作業量に合わせて選べます。",
      hero: {
        title: "まずは1件から、気軽に頼めます",
        titleLines: ["まずは1件から、", "気軽に頼めます"],
        lead: "続ける前提の契約でなくても大丈夫。作業量に合わせて、無理なく始められる料金です。",
        image: asset("desk-workflow-hero.png"),
        ctas: ["primary"],
      },
      plans: [
        {
          name: "スポット",
          price: "3,300円〜",
          unit: "1件",
          recommended: false,
          description: "まず試したい方向け。小さな事務や単発リサーチに。",
          features: ["作業前の簡易相談", "1タスク単位で依頼", "完了報告つき"],
          icon: icon("yen"),
        },
        {
          name: "ライト",
          price: "22,000円",
          unit: "月5時間",
          recommended: true,
          description: "毎週少しずつ頼みたい方向け。連絡対応や調整作業に。",
          features: ["月5時間まで", "チャット相談", "週次の作業メモ"],
          icon: icon("clock"),
        },
        {
          name: "スタンダード",
          price: "44,000円",
          unit: "月12時間",
          recommended: false,
          description: "小規模チームの定常事務をまとめたい方向け。",
          features: ["月12時間まで", "定例タスク設計", "優先対応枠"],
          icon: icon("headset"),
        },
      ],
      included: ["初回ヒアリング", "依頼テンプレート作成", "作業ログ共有", "秘密保持への配慮"],
      faqs: [
        { q: "月の途中から始められますか？", a: "はい。開始日と作業量に合わせて進め方を調整します。" },
        { q: "時間を超えた場合は？", a: "事前に確認し、追加作業として進めるか翌月に回すかを相談します。" },
        { q: "解約は難しくありませんか？", a: "継続前提で縛るサービスではありません。翌月分から停止できます。" },
      ],
    },
    contact: {
      metaTitle: "相談する | たのめる秘書室",
      metaDescription:
        "オンライン秘書への無料相談フォーム。依頼内容が決まっていなくても、15分の相談で作業の切り出し方から一緒に整理します。",
      hero: {
        title: "まずは15分だけ、気軽に相談しませんか？",
        titleLines: ["まずは15分だけ、", "気軽に相談しませんか？"],
        lead: "依頼するか決まっていなくても大丈夫。今抱えている作業を一緒に棚卸ししましょう。",
        image: asset("desk-workflow-hero.png"),
        ctas: [],
      },
      form: {
        title: "無料相談フォーム",
        helper: "相談だけでも大丈夫です。返信は原則1営業日以内にお送りします。",
        fields: [
          { name: "name", label: "お名前", type: "text", placeholder: "例：山田 花子", required: true },
          { name: "email", label: "メールアドレス", type: "email", placeholder: "example@example.com", required: true },
          { name: "business", label: "お仕事・事業内容", type: "text", placeholder: "例：オンライン講座運営", required: false },
          {
            name: "requestType",
            label: "相談したい内容",
            type: "select",
            options: ["メール・連絡対応", "日程調整", "資料整理", "予約・手配", "請求まわり", "まだ決まっていない"],
            required: true,
          },
          { name: "message", label: "今困っていること", type: "textarea", placeholder: "例：問い合わせ返信と日程調整が追いつかず困っています。", required: true },
        ],
        submitLabel: "相談内容を送る",
      },
      sidePanel: {
        title: "相談後の流れ",
        steps: ["内容を確認", "15分ヒアリング", "頼める作業を整理", "必要なら見積もり"],
        privacyNote: "共有いただいた内容は相談対応のためだけに使用します。",
        icon: icon("lock"),
      },
    },
  },
};
