import { ProductCard } from "../components/Product";
import { Button, NeonPanel, OptimizedImage, SectionHeader } from "../components/UI";
import { comparisonGuide, products, starterKitDetail } from "../data/siteData";

const diagnosis = [
  ["持ち運び重視", "荷物を軽く、コンパクトにジムへ向かいたい人に。"],
  ["グリップ重視", "手汗をおさえ、滑りやすいときにグリップ力を上げたい人に。"],
  ["メンテナンス重視", "ホールドを磨く習慣をつけ、長く快適に登りたい人に。"],
];

const chalkRows = [
  ["特徴", "手にしっかり密着し、汗に強い", "定番のさらさらタイプ", "粉が飛びにくく、扱いやすい"],
  ["グリップ力", "★★★★★", "★★★★☆", "★★★★★"],
  ["持ち運びやすさ", "★★★★★", "★★☆☆☆", "★★★★☆"],
  ["粉の飛びにくさ", "★★★★★", "★☆☆☆☆", "★★★★☆"],
  ["乾きやすさ", "★★★★☆", "★★★★★", "★★★☆☆"],
  ["コスパ", "★★★☆☆", "★★★★★", "★★★★☆"],
  ["おすすめシーン", "汗をかきやすい人、長時間のセッション", "コスパ重視、室内ジムで粉チョークを使いたい人", "ジム移動が多く粉を抑えたい環境"],
];

const checklist = [
  "クライミングシューズは用意した",
  "チョークで手汗対策がしたい",
  "ホールドをブラシで整えたい",
  "指を保護するテープが欲しい",
  "荷物はできるだけコンパクトにしたい",
];

const goalSets = [
  ["持ち運び重視セット", ["チョークバッグ", "液体チョーク", "ブラシ"], "必要最小限で身軽に通う。", "cyan"],
  ["グリップ重視セット", ["液体チョーク", "フィンガーテープ", "グリップバーム"], "手汗対策と指先ケアを重視する。", "magenta"],
  ["メンテナンス重視セット", ["チョークバッグ", "ブラシ", "テープ"], "ホールド清掃と道具管理を習慣にする。", "lime"],
];

export default function Guide() {
  const ranking = [products[2], products[1], products[3], products[4], products[6]].filter(Boolean);

  return (
    <div className="pb-28">
      <section className="section-container grid min-h-[520px] items-center gap-8 py-14 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="reveal">
          <p className="eyebrow inline-flex border border-fuchsia-400/70 bg-fuchsia-400/10 px-4 py-2">
            比較・選び方
          </p>
          <h1 className="mt-6 max-w-xl text-4xl font-black leading-tight text-white md:text-6xl">
            初心者に必要なギアの選び方
          </h1>
          <p className="mt-5 max-w-2xl text-base font-bold leading-8 text-slate-300">
            目的に合わせて、自分にぴったりのギアを選びましょう。迷ったら、まずは基本の3アイテムから。
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["しっかり効く", "軽量・コンパクト", "使いやすさ重視"].map((item) => (
              <div key={item} className="border border-cyan-300/50 bg-cyan-300/5 px-4 py-3 text-sm font-bold text-cyan-100">
                {item}
              </div>
            ))}
          </div>
        </div>
        <NeonPanel className="p-3" accent="magenta">
          <OptimizedImage src={starterKitDetail.image} alt="選び方の基本道具" className="aspect-[16/10] w-full object-cover" loading="eager" fetchPriority="high" />
        </NeonPanel>
      </section>

      <section className="graphite-section">
        <div className="section-container grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeader eyebrow="ギア診断" title="あなたに必要なギアを診断" />
            <div className="grid gap-4 md:grid-cols-3">
              {diagnosis.map(([title, text], index) => (
                <NeonPanel key={title} accent={index === 1 ? "magenta" : "cyan"} className="min-h-44">
                  <p className="font-tech text-sm font-black text-cyan-200">TYPE {index + 1}</p>
                  <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
                </NeonPanel>
              ))}
            </div>
            <Button href="#starter-kit" variant="secondary" className="mt-6 w-full md:w-auto">
              あなたに合うセットを見る
            </Button>
          </div>
          <NeonPanel accent="magenta">
            <h2 className="text-xl font-black text-white">まずそろえるならこの3つ</h2>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[products[2], products[1], products[3]].map((product) => (
                <a key={product.id} href={product.href} className="border border-slate-700 bg-black/40 p-3 text-center">
                  <OptimizedImage src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
                  <p className="mt-3 text-sm font-bold text-white">{product.name}</p>
                </a>
              ))}
            </div>
            <Button href="#starter-kit" className="mt-5 w-full">初心者向けスターターセットを見る</Button>
          </NeonPanel>
        </div>
      </section>

      <section className="section-container py-14">
        <SectionHeader eyebrow="比較表" title="チョークを比較" />
        <div className="overflow-x-auto border border-slate-700 bg-black/40">
          <table className="min-w-[820px] w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-700 p-4 text-left text-slate-300">項目</th>
                {["液体チョーク", "粉チョーク", "チョークボール"].map((name, index) => (
                  <th key={name} className={`border p-4 text-center font-black ${index === 0 ? "border-cyan-300 text-cyan-200" : index === 1 ? "border-fuchsia-400 text-fuchsia-200" : "border-lime-300 text-lime-200"}`}>
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {chalkRows.map(([label, ...values]) => (
                <tr key={label}>
                  <th className="border border-slate-700 p-4 text-left font-bold text-slate-300">{label}</th>
                  {values.map((value, index) => (
                    <td key={`${label}-${index}-${value}`} className={`border p-4 text-center font-bold ${index === 0 ? "border-cyan-300/50 text-cyan-100" : index === 1 ? "border-fuchsia-400/50 text-fuchsia-100" : "border-lime-300/50 text-lime-100"}`}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-container grid gap-6 pb-14 lg:grid-cols-[0.78fr_1.22fr]">
        <NeonPanel accent="cyan">
          <h2 className="text-2xl font-black text-white">初心者チェックリスト</h2>
          <ul className="mt-5 space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-bold text-slate-200">
                <span className="grid h-6 w-6 shrink-0 place-items-center border border-cyan-300 text-cyan-200">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Button href="#starter-kit" className="mt-6 w-full">必要なものをセットで見る</Button>
        </NeonPanel>
        <div>
          <h2 className="mb-5 text-2xl font-black text-white">目的別おすすめ組み合わせ</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {goalSets.map(([title, tags, text, accent]) => (
              <NeonPanel key={title} accent={accent}>
                <h3 className="text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="border border-slate-600 px-2 py-1 text-xs font-bold text-slate-200">{tag}</span>
                  ))}
                </div>
                <Button href="#products" variant="secondary" className="mt-5 w-full px-3 py-2 text-xs">このセットを見る</Button>
              </NeonPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container pb-14">
        <SectionHeader eyebrow="人気順" title="人気ランキング" />
        <div className="grid gap-4 md:grid-cols-5">
          {ranking.map((product, index) => (
            <article key={product.id} className="border border-slate-700 bg-slate-950/80 p-3">
              <p className="mb-2 inline-grid h-8 w-8 place-items-center border border-orange-400 text-sm font-black text-orange-200">{index + 1}</p>
              <OptimizedImage src={product.image} alt={product.name} className="aspect-[4/3] w-full object-cover" />
              <h3 className="mt-3 font-black text-white">{product.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{product.summary}</p>
              <a href={product.href} className="mt-3 inline-block text-sm font-bold text-cyan-200">詳細を見る →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container pb-16">
        <NeonPanel accent="cyan" className="grid items-center gap-6 md:grid-cols-[0.8fr_1fr]">
          <OptimizedImage src="/assets/products/brush-hold.webp" alt="ホールドとブラシ" className="aspect-[16/8] w-full object-cover" />
          <div>
            <h2 className="text-3xl font-black text-white">迷ったら、スターターセットで間違いなし。</h2>
            <p className="mt-3 leading-7 text-slate-300">{comparisonGuide.lead} 必要なギアをまとめて、登る前の迷いを減らせます。</p>
            <Button href="#starter-kit" className="mt-5">スターターセットを購入する</Button>
          </div>
        </NeonPanel>
      </section>
    </div>
  );
}
