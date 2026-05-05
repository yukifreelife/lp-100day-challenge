import { assetsV2, ctaLabel } from "../data/siteData";
import { Badge, ButtonLink, Card, FileTab, SmartImage } from "../components/UI";

const categories = [
  {
    label: "受付 01",
    title: "体験・単発・継続整理",
    icon: "▤",
    points: ["入口メニューと継続コースの役割を分ける", "時間・料金・対象者の見せ方をそろえる", "新しい3ヶ月コースを出す前の並びを作る"],
    output: "成果物：メニュー導線表",
    tone: "green",
  },
  {
    label: "受付 02",
    title: "初回LINE返信",
    icon: "▣",
    points: ["体験内容・空き日程・予約URLを分ける", "よく聞かれる質問を先回りする", "長文になりすぎない返信順を作る"],
    output: "成果物：返信テンプレ",
    tone: "plum",
  },
  {
    label: "受付 03",
    title: "予約導線",
    icon: "□",
    points: ["LINEから予約ページへの流れを確認", "STORES予約やカレンダーの案内を整理", "予約確定後に送る情報を分ける"],
    output: "成果物：受付導線図",
    tone: "plum",
  },
  {
    label: "受付 04",
    title: "当日案内",
    icon: "☑",
    points: ["場所・持ち物・遅刻時の連絡をまとめる", "キャンセル条件を正式情報と分ける", "来店前に渡すチェックを作る"],
    output: "成果物：当日案内チェック",
    tone: "lime",
  },
  {
    label: "受付 05",
    title: "継続コース案内",
    icon: "♧",
    points: ["体験後・単発後の分岐を作る", "押し売りに見えにくい言い方に整える", "必要な人だけに渡す案内文を用意する"],
    output: "成果物：継続案内メモ",
    tone: "lime",
  },
];

const deliverables = [
  ["受付導線図", "Instagram、LINE公式、予約ページ、当日案内、継続案内の順番を一枚にまとめます。"],
  ["初回LINE返信テンプレ", "体験枠の案内、空き日程、予約URL、持ち物を短く分けて送れる文面へ整えます。"],
  ["メニュー導線表", "体験・単発・継続コースの役割、料金、対象者を比較しやすくします。"],
  ["当日案内チェック", "場所、持ち物、キャンセル条件、遅刻時連絡を抜け漏れなく渡せます。"],
];

export default function Service() {
  return (
    <main className="paper-bg">
      <section className="site-container grid gap-10 py-12 md:grid-cols-[0.78fr_1.22fr] md:items-center lg:py-16">
        <div>
          <p className="mb-5 inline-flex border-b border-[#203D36] pb-2 text-sm font-bold text-[#203D36]">完全予約制サロン・教室向けサービス</p>
          <h1 className="text-balance font-serif text-[clamp(40px,6vw,68px)] font-bold leading-[1.12] text-[#203D36]">
            体験予約から継続案内まで、ひとりで回る形に分けて整える。
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#17231F]">
            LINE公式の初回返信、体験・単発・継続のメニュー表、STORES予約やカレンダー、当日案内。いま使っている道具を前提に、受付導線を整えます。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact">{ctaLabel}</ButtonLink>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[8px] border border-[#D3D9CC] bg-[#EDF2E6] p-5 shadow-[0_16px_48px_rgba(32,61,54,0.12)]">
          <FileTab tone="green">受付導線カルテ棚</FileTab>
          <SmartImage asset={assetsV2.receptionFileBox} alt="" className="mx-auto mt-4 max-h-[360px] w-full object-contain" loading="eager" />
        </div>
      </section>

      <section className="border-y border-[#D3D9CC] bg-white/78 py-14">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-5">
            {categories.map((item, index) => (
              <Card key={item.title} className="relative min-h-[330px] p-5 pt-8">
                <FileTab tone={item.tone} className="absolute left-5 top-[-1px]">{item.label}</FileTab>
                <div className="pt-4 text-center">
                  <h2 className="text-xl font-bold text-[#203D36]">{item.title}</h2>
                  <div className="mx-auto mt-5 grid h-16 w-16 place-items-center rounded-[8px] border border-[#D3D9CC] bg-[#F8FAF4] text-3xl text-[#6E4F68]" aria-hidden="true">
                    {item.icon}
                  </div>
                </div>
                <ul className="mt-6 grid gap-2 text-sm leading-7 text-[#5C6861]">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="font-bold text-[#203D36]" aria-hidden="true">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-[8px] border border-[#D3D9CC] bg-[#F8FAF4] px-3 py-2 text-center text-xs font-bold text-[#203D36]">{item.output}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container section-y">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr_1fr_1fr_1fr]">
          <div className="rounded-[8px] bg-[#203D36] p-5 text-white">
            <div className="text-3xl" aria-hidden="true">▱</div>
            <h2 className="mt-4 text-xl font-bold">サロン運営で見返す成果物</h2>
          </div>
          {deliverables.map(([title, body]) => (
            <Card key={title} className="p-5">
              <h3 className="border-l-2 border-[#6E4F68] pl-4 text-xl font-bold text-[#203D36]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#5C6861]">{body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="site-container pb-16">
        <div className="grid gap-6 rounded-[8px] border border-[#D3D9CC] bg-[#F4F8D9] p-6 shadow-[0_8px_24px_rgba(32,61,54,0.08)] md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Badge tone="lime">まずは今のLINEとメニュー表を拝見します</Badge>
            <ul className="mt-5 grid gap-3 text-sm font-bold leading-7 text-[#203D36]">
              {["体験予約までに何を渡しているか", "単発・継続の見せ方がどこで混ざるか", "どの文面から直すと返信が楽になるか"].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true">□</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-[#5C6861]">きれいな資料ではなく、実際に使っているLINE文面や予約ページを見ながら無料30分で確認します。</p>
          </div>
          <ButtonLink href="#contact">{ctaLabel}</ButtonLink>
        </div>
      </section>
    </main>
  );
}
