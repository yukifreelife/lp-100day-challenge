import { ProductCard } from "../components/Product";
import { Button, NeonPanel, OptimizedImage, SectionHeader } from "../components/UI";
import { howToSections, products, starterKitDetail } from "../data/siteData";

const maintenance = [
  ["チョークバッグの中は乾いているか", "湿気が残ると粉が固まり、においの原因になります。"],
  ["ブラシの毛先は寝ていないか", "広がりや抜けがある場合は、清掃力が落ちます。"],
  ["テープの粘着は十分か", "粘着が弱いと、トライ中にはがれやすくなります。"],
  ["液体チョークの残量はあるか", "少ない時は、バッグ側の予備位置を決めておきます。"],
  ["ギアはきれいに収納されているか", "粉や汚れを落としてから保管すると長く使えます。"],
];

const cautions = [
  "身体に違和感や痛みがある場合は、無理をせず休息を取ってください。",
  "ホールドの状態やジムのルールを守り、安全にクライミングを楽しみましょう。",
  "ギアの劣化は事故につながる可能性があります。定期的に状態を確認してください。",
];

export default function HowTo() {
  const recommended = products.slice(1, 6);

  return (
    <div className="pb-28">
      <section className="relative overflow-hidden border-b border-cyan-300/30 bg-black">
        <div className="section-container grid min-h-[520px] items-center gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 reveal">
            <p className="eyebrow inline-flex border border-cyan-300/70 bg-cyan-300/10 px-4 py-2">
              使い方・メンテナンス
            </p>
            <h1 className="mt-6 max-w-xl text-4xl font-black leading-tight text-white md:text-6xl">
              登る前の準備を、3分で完了。
            </h1>
            <p className="mt-5 max-w-2xl text-base font-bold leading-8 text-slate-300">
              手順を決めておくと、登り始めるまでの迷いが減ります。初心者でも続けやすい、シンプルな流れを紹介します。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#starter-kit">スターターセットを購入する</Button>
              <Button href="#products" variant="secondary">
                必要な道具を見る
              </Button>
            </div>
          </div>
          <NeonPanel className="relative z-0 p-3" accent="cyan">
            <OptimizedImage
              src={starterKitDetail.image}
              alt="ボルダリング用スターターギア"
              className="aspect-[16/10] w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </NeonPanel>
        </div>
      </section>

      <section className="graphite-section">
        <div className="section-container">
          <SectionHeader eyebrow="使い方ステップ" title="使い方ステップ" lead="所要時間の目安は約3分。登る直前の流れを毎回同じにしましょう。" />
          <div className="grid gap-4 lg:grid-cols-5">
            {[
              { title: "チョークをなじませる", text: howToSections[0].steps.join("。") },
              { title: "テープで指を守る", text: "痛みやすい指の関節や側面をテープで保護します。" },
              { title: "ホールドをブラッシング", text: howToSections[1].steps.join("。") },
              { title: "チョークバッグを整える", text: howToSections[2].steps.join("。") },
              { title: "登り終えたらケアまで", text: "手や道具の汚れを落とし、乾かしてから収納します。" },
            ].map((step, index) => (
              <article key={step.title} className="carbon-panel p-5">
                <p className="font-tech text-sm font-black text-lime-200">手順 {String(index + 1).padStart(2, "0")}</p>
                <div className="my-4 h-px bg-gradient-to-r from-cyan-300 to-transparent" />
                <h3 className="text-xl font-black leading-snug text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{step.text}。</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-14">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <NeonPanel accent="cyan">
            <h2 className="text-2xl font-black text-white">メンテナンスチェック</h2>
            <div className="mt-5 divide-y divide-slate-700/80">
              {maintenance.map(([title, text]) => (
                <div key={title} className="grid grid-cols-[1fr_auto] gap-4 py-4">
                  <div>
                    <p className="font-bold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                  <span className="grid h-7 w-7 place-items-center border border-cyan-300 text-cyan-200">✓</span>
                </div>
              ))}
            </div>
          </NeonPanel>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
            {howToSections.map((section) => (
              <article key={section.title} className="grid overflow-hidden border border-slate-700 bg-slate-950/80 md:grid-cols-[180px_1fr]">
                <OptimizedImage src={section.image} alt={section.title} className="h-full min-h-36 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-black text-cyan-200">{section.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                    {section.steps.map((step) => (
                      <li key={step}>・{step}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container pb-14">
        <NeonPanel accent="magenta" className="bg-black/70">
          <h2 className="text-2xl font-black text-white">注意事項</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
            {cautions.map((item) => (
              <li key={item} className="border-l-2 border-fuchsia-400 pl-4">{item}</li>
            ))}
          </ul>
        </NeonPanel>
      </section>

      <section className="section-container pb-14">
        <SectionHeader eyebrow="おすすめギア" title="この手順で使うおすすめギア" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {recommended.map((product) => (
            <ProductCard key={product.id} product={product} cta="詳しく見る" />
          ))}
        </div>
      </section>

      <section className="section-container pb-16">
        <NeonPanel accent="cyan" className="grid items-center gap-6 p-6 md:grid-cols-[0.85fr_1.15fr]">
          <OptimizedImage src={starterKitDetail.image} alt="スターターセット" className="aspect-[16/8] w-full object-cover" />
          <div>
            <p className="eyebrow">スターターセット</p>
            <h2 className="mt-2 text-3xl font-black text-white">必要な道具をそろえて、登りに集中する。</h2>
            <p className="mt-3 leading-7 text-slate-300">登る前、登った後、道具の手入れまで。初心者でも使いやすい基本セットで、次の一手に集中しましょう。</p>
            <Button href="#starter-kit" className="mt-5">スターターセットを購入する</Button>
          </div>
        </NeonPanel>
      </section>
    </div>
  );
}
