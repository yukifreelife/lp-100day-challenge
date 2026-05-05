import { assets } from "../data/siteData";
import { Badge, Card, ReceptionBoard, SmartImage } from "./UI";

export function CompassImage({ className = "" }) {
  return <SmartImage asset={assets.compass} alt="" className={`object-contain ${className}`} />;
}

export function StickyNotesCluster({ notes = [], className = "" }) {
  const fallback = ["メニューが増えた", "返信が毎回ちがう", "価格を説明しづらい"];
  const items = notes.length ? notes : fallback;

  return (
    <div className={`relative grid gap-3 sm:grid-cols-3 ${className}`}>
      {items.slice(0, 3).map((note, index) => (
        <div
          key={typeof note === "string" ? note : note.title}
          className={`min-h-28 rounded-[4px] border border-[#B7C957] bg-[#F4F8D9] p-4 shadow-[0_8px_24px_rgba(32,61,54,0.08)] ${index === 1 ? "sm:translate-y-5" : ""}`}
        >
          <p className="text-xs font-bold text-[#6E4F68]">{typeof note === "string" ? `メモ 0${index + 1}` : note.label}</p>
          <p className="mt-2 text-sm font-bold leading-6 text-[#203D36]">{typeof note === "string" ? note : note.title}</p>
        </div>
      ))}
      <SmartImage asset={assets.stickyNotes} alt="" className="pointer-events-none absolute -right-5 -top-8 hidden h-24 w-24 object-contain opacity-80 md:block" />
    </div>
  );
}

export function BusinessMapBoard({ className = "" }) {
  return <ReceptionBoard asset={assets.receptionFlowBoard || assets.businessMapBoard} items={["初回LINE", "体験メニュー", "予約ページ", "当日案内", "継続案内"]} className={className} />;
}

export function OutputPreview({ outputs = [], className = "" }) {
  return (
    <Card className={`p-5 ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <Badge tone="gold">お渡しするもの</Badge>
          <h3 className="mt-3 text-xl font-bold text-[#203D36]">相談後に残る受付導線メモ</h3>
        </div>
        <SmartImage asset={assets.routePins} alt="" className="h-14 w-14 object-contain" />
      </div>
      <ul className="mt-5 grid gap-3">
        {outputs.map((output, index) => (
          <li key={output} className="flex items-start gap-3 rounded-[8px] border border-[#D3D9CC] bg-[#F8FAF4] p-3">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#6E4F68] text-xs font-bold text-white">{index + 1}</span>
            <span className="text-sm font-bold leading-7 text-[#203D36]">{output}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function BeforeAfterMap({ before, after, className = "" }) {
  return (
    <div className={`grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch ${className}`}>
      <Card className="p-5">
        <Badge tone="terracotta">整理前</Badge>
        <h3 className="mt-4 text-lg font-bold text-[#203D36]">散らばった状態</h3>
        <p className="mt-3 text-sm leading-7 text-[#5C6861]">{before}</p>
        <StickyNotesCluster className="mt-5 sm:grid-cols-1" notes={["返信が長い", "流れが不明", "案内が別々"]} />
      </Card>
      <div className="grid place-items-center text-[#6E4F68] md:w-12" aria-hidden="true">
        <span className="text-3xl">→</span>
      </div>
      <Card className="p-5">
        <Badge tone="blue">整理後</Badge>
        <h3 className="mt-4 text-lg font-bold text-[#203D36]">ひとりでも回る受付導線</h3>
        <p className="mt-3 text-sm leading-7 text-[#5C6861]">{after}</p>
        <div className="mt-5 rounded-[8px] border border-[#D3D9CC] bg-[#EDF2E6] p-4">
          <div className="flex items-center gap-3">
            <SmartImage asset={assets.routePins} alt="" className="h-10 w-10 object-contain" />
            <div>
              <p className="text-xs font-bold text-[#6E4F68]">次の案内順</p>
              <p className="text-sm font-bold text-[#203D36]">次に整える場所が見える</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
