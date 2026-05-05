import { legalDisclosureRows } from "../data/siteData";
import { Badge, ButtonLink, Card, FileTab, SectionHeader } from "../components/UI";

const confirmationNotes = [
  "事業者情報・所在地・電話番号は要入力のまま保持",
  "支払い方法とキャンセル条件は公開前に要確定",
  "料金ページの表示と正式申込時の条件を照合",
];

export default function Legal() {
  return (
    <main className="paper-bg">
      <section className="site-container py-12 md:py-16">
        <Badge tone="lime">公開前確認が必要</Badge>
        <div className="mt-5 max-w-4xl">
          <h1 className="text-balance font-serif text-[clamp(40px,6vw,72px)] font-bold leading-[1.08] text-[#203D36]">
            特定商取引法に基づく表記
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#17231F]">
            受付導線の中でお客さまへ渡す料金・支払い・キャンセル条件を、正式情報と混ぜずに確認するためのページです。
            事業者情報や住所、電話番号は捏造せず、公開前に実情報を入力してください。
          </p>
        </div>
      </section>

      <section className="site-container grid gap-6 pb-section-sm md:grid-cols-[1fr_0.48fr] md:pb-section">
        <Card className="overflow-hidden">
          <div className="border-b border-[#D3D9CC] bg-[#EDF2E6] px-5 py-4">
            <FileTab tone="plum">要確認カルテ</FileTab>
          </div>
          <dl className="divide-y divide-[#D3D9CC]">
            {legalDisclosureRows.map(([term, detail]) => (
              <div key={term} className="grid gap-3 p-5 md:grid-cols-[220px_1fr] md:p-6">
                <dt className="font-bold text-[#203D36]">{term}</dt>
                <dd className="text-sm leading-7 text-[#5C6861]">{detail}</dd>
              </div>
            ))}
          </dl>
        </Card>
        <aside className="grid gap-6 content-start">
          <Card className="p-6">
            <SectionHeader eyebrow="公開前チェック" title="未確定情報を混ぜない" />
            <ul className="mt-6 grid gap-3">
              {confirmationNotes.map((note) => (
                <li key={note} className="flex gap-3 rounded-[8px] border border-[#D3D9CC] bg-[#F8FAF4] p-4 text-sm font-bold leading-7 text-[#203D36]">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#B7C957]">✓</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <FileTab tone="paper">注意</FileTab>
            <p className="mt-5 text-sm leading-7 text-[#5C6861]">
              このページは公開前確認用であり、法的助言ではありません。実際の販売条件・役務提供条件と照合してください。
            </p>
          </Card>
        </aside>
      </section>

      <section className="border-y border-[#D3D9CC] bg-white/78 section-y">
        <div className="site-container">
          <SectionHeader
            eyebrow="受付導線での扱い"
            title="料金・キャンセル条件は正式確認後に案内します"
            description="初回LINEや当日案内へ入れる条件は、要確認のまま公開しない前提で整理します。"
            align="center"
          />
        </div>
      </section>

      <section className="site-container pb-section-sm pt-10 md:pb-section">
        <div className="grid gap-6 rounded-[8px] border border-[#D3D9CC] bg-[#F4F8D9] p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-bold text-[#203D36]">相談前に確認したい方へ</h2>
            <p className="mt-3 text-sm leading-7 text-[#5C6861]">
              正式情報が未確定の項目は、体験予約から当日案内までの受付導線の中で要確認として分けて扱います。
            </p>
          </div>
          <ButtonLink href="#contact" className="w-full md:w-auto" trackingParams={{ cta_position: "legal" }}>
            相談予約へ進む
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
