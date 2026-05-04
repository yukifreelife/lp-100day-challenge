import { Button, NeonPanel, OptimizedImage, SectionHeader, SpecRows } from "../components/UI";
import { legal, starterKitDetail } from "../data/siteData";

const privacyCards = [
  ["個人情報の利用目的", "ご注文の確認・発送、決済処理、問い合わせ対応、サービス改善のために必要な範囲で利用します。"],
  ["第三者提供", "法令に基づく場合を除き、お客様の同意なく個人情報を第三者へ提供することはありません。"],
  ["安全管理", "不正アクセス、漏えい、紛失、改ざんを防止するため、適切な安全管理措置を実施します。"],
  ["お問い合わせ窓口", "個人情報の取り扱いに関するご質問は、support@example.comまでお問い合わせください。"],
];

export default function Legal() {
  return (
    <div className="pb-24">
      <section className="section-container grid items-center gap-8 py-14 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm font-bold text-slate-400">ホーム ＞ 特定商取引法に基づく表記 / プライバシーポリシー</p>
          <h1 className="mt-8 text-3xl font-black leading-tight text-white md:text-5xl">
            特定商取引法に基づく表記
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            当店の運営に関する情報と、ご購入前に確認いただきたい条件を以下にまとめています。
          </p>
          <p className="mt-4 text-sm font-bold text-slate-500">最終更新日：2026年5月4日</p>
        </div>
        <NeonPanel accent="cyan" className="p-3">
          <OptimizedImage src={starterKitDetail.image} alt="ボルダリングギア一式" className="aspect-[16/9] w-full object-cover opacity-90" loading="eager" fetchPriority="high" />
        </NeonPanel>
      </section>

      <section className="section-container pb-12">
        <div className="mb-6 flex flex-wrap justify-end gap-2">
          <a href="#legal-commerce" className="inline-flex min-h-11 items-center border border-cyan-300 bg-cyan-300/10 px-5 py-3 text-sm font-black text-cyan-100">
            特定商取引法に基づく表記
          </a>
          <a href="#legal-privacy" className="inline-flex min-h-11 items-center border border-slate-700 bg-slate-950/70 px-5 py-3 text-sm font-black text-slate-200">
            プライバシーポリシー
          </a>
        </div>
        <NeonPanel id="legal-commerce" accent="cyan" className="p-0 scroll-mt-28">
          <div className="overflow-x-auto">
            <table className="min-w-[760px] w-full border-collapse text-left">
              <tbody>
                {legal.businessRows.map(([label, value]) => (
                  <tr key={label}>
                    <th className="w-52 border border-slate-700 bg-slate-950/70 p-5 align-top text-cyan-200">{label}</th>
                    <td className="border border-slate-700 p-5 leading-8 text-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </NeonPanel>
        <p className="mt-4 text-sm leading-7 text-slate-500">ご注文前に、販売価格、送料、返品条件をご確認ください。</p>
      </section>

      <section id="legal-privacy" className="section-container scroll-mt-28 border-t border-slate-800 py-12">
        <SectionHeader eyebrow="個人情報保護" title="プライバシーポリシー" lead="個人情報の取り扱い" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {privacyCards.map(([title, text], index) => (
            <NeonPanel key={title} accent={index % 2 === 0 ? "cyan" : "magenta"}>
              <h3 className="text-lg font-black text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
            </NeonPanel>
          ))}
        </div>
        <div className="mt-8">
          <SpecRows rows={legal.privacyRows} />
        </div>
      </section>

      <section className="section-container grid gap-5 pb-14 md:grid-cols-[0.8fr_1fr_1fr]">
        <OptimizedImage src={starterKitDetail.image} alt="スターターギア" className="h-full min-h-56 w-full border border-slate-800 object-cover" />
        <NeonPanel accent="cyan">
          <h2 className="text-2xl font-black text-white">商品ラインナップへ戻る</h2>
          <p className="mt-3 leading-7 text-slate-300">すべてのギアを一覧で見る</p>
          <Button href="#products" variant="secondary" className="mt-5" tracking="cta_click" trackingPosition="legal_back_to_products">商品ラインナップを見る</Button>
        </NeonPanel>
        <NeonPanel accent="orange">
          <h2 className="text-2xl font-black text-white">スターターセットを見る</h2>
          <p className="mt-3 leading-7 text-slate-300">必要なギアをまとめてチェック</p>
          <Button href="#starter-kit" className="mt-5" tracking="cta_click" trackingPosition="legal_starter_panel">スターターセットを見る</Button>
        </NeonPanel>
      </section>

      <footer className="section-container border-t border-slate-800 py-8">
        <nav className="flex flex-wrap justify-center gap-5 text-sm font-bold text-slate-400">
          <a href="#legal-commerce" className="text-cyan-200">特定商取引法に基づく表記</a>
          <a href="#legal-privacy">プライバシーポリシー</a>
          <a href="#faq">よくある質問</a>
          <a href="#products">商品ラインナップ</a>
        </nav>
        <p className="mt-6 text-center text-xs text-slate-500">ボルダリングギア通販運営事務局 無断転載を禁じます。</p>
      </footer>
    </div>
  );
}
