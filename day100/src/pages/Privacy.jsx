import { privacyPolicySections } from "../data/siteData";
import { Badge, ButtonLink, Card, FileTab } from "../components/UI";

export default function Privacy() {
  return (
    <main className="paper-bg">
      <section className="site-container py-12 md:py-16">
        <Badge tone="blue">プライバシーポリシー</Badge>
        <div className="mt-5 max-w-4xl">
          <h1 className="text-balance font-serif text-[clamp(40px,6vw,72px)] font-bold leading-[1.08] text-[#203D36]">
            プライバシーポリシー
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#17231F]">
            受付導線診断のお申し込みやお問い合わせで取得する情報の取り扱い方針です。本内容は公開前確認用であり、
            問い合わせ窓口などの実情報は公開前に入力してください。
          </p>
          <p className="mt-5 text-sm font-bold text-[#5C6861]">最終更新日 2026-05-05</p>
        </div>
      </section>

      <section className="site-container grid gap-5 pb-section-sm md:pb-section">
        {privacyPolicySections.map((section, index) => (
          <Card key={section.title} className="grid gap-4 p-5 md:grid-cols-[120px_1fr] md:p-6">
            <div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-[#D3D9CC] bg-[#EDF2E6] text-sm font-bold text-[#6E4F68]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div>
              <FileTab tone={index % 2 === 0 ? "paper" : "lime"}>{section.title}</FileTab>
              <p className="mt-4 text-sm leading-7 text-[#5C6861]">{section.body}</p>
            </div>
          </Card>
        ))}
      </section>

      <section className="site-container pb-section-sm md:pb-section">
        <div className="grid gap-6 rounded-[8px] border border-[#203D36] bg-white p-6 shadow-[0_8px_24px_rgba(32,61,54,0.08)] md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-bold text-[#203D36]">個人情報の取り扱いを確認する</h2>
            <p className="mt-3 text-sm leading-7 text-[#5C6861]">
              相談予約フォームの送信先やアクセス解析の測定IDを設定する場合は、このページの記載もあわせて更新してください。
            </p>
          </div>
          <ButtonLink href="#contact" className="w-full md:w-auto" trackingParams={{ cta_position: "privacy" }}>
            相談予約へ進む
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
