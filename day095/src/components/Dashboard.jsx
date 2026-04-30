import { siteData } from "../data/siteData";
import { Icon } from "./Icons";
import { Badge } from "./Shared";

const rows = [
  ["在庫少", "AT-1001", "アトリエ シャンプー 500ml", "3", "+580円", "Amazon", "在庫少", "05/20 07:18"],
  ["価格上昇", "AT-1002", "アトリエ トリートメント 500g", "25", "+320円", "楽天市場", "価格上昇", "05/20 07:17"],
  ["在庫少", "AT-1003", "アトリエ ボディソープ 400ml", "5", "±0円", "自社EC", "在庫少", "05/20 07:16"],
  ["価格上昇", "AT-1004", "アトリエ ハンドクリーム 50g", "42", "+150円", "Yahoo!ショッピング", "価格上昇", "05/20 07:15"],
  ["価格下落", "AT-1005", "アトリエ フェイスタオル ホワイト", "18", "-320円", "Amazon", "価格下落", "05/20 07:14"]
];

const channels = [
  { name: "自社EC", icon: "cart", time: "07:20" },
  { name: "楽天市場", mark: "R", time: "07:18" },
  { name: "Amazon", mark: "a", time: "07:17" },
  { name: "Yahoo!ショッピング", mark: "Y!", time: "07:16" }
];

const sideNav = [
  ["ダッシュボード", "inventory", "home"],
  ["在庫", "cart", "features"],
  ["価格", "priceTag", "pricing"],
  ["SKU台帳", "skuTable", "features"],
  ["アラート", "alert", "help"],
  ["連携", "sync", "channels"],
  ["レポート", "chart", "column"],
  ["設定", "settings", "security"]
];

function Sparkline({ tone = "teal", bars = false }) {
  if (bars) {
    return (
      <div className="mt-5 flex h-10 items-end gap-1.5">
        {[10, 16, 20, 26, 18, 12, 20, 15, 22, 18, 25, 29, 24, 21, 18, 26, 40].map((height, index) => (
          <span key={index} className="w-2 rounded-t bg-amber/45" style={{ height }} />
        ))}
      </div>
    );
  }

  const color = tone === "copper" ? "text-copper" : "text-teal";
  return (
    <svg className={`mt-6 h-10 w-full ${color}`} viewBox="0 0 180 44" fill="none" aria-hidden="true">
      <path
        className="line-draw"
        d="M2 34 12 28 22 31 32 24 42 29 52 21 62 33 72 30 82 36 92 27 102 23 112 26 122 14 132 20 142 29 152 27 162 17 172 20 178 12"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MiniKpi({ label, value, unit, icon, tone, bars }) {
  return (
    <div className="rounded-lg border border-grid bg-white/[0.84] p-4">
      <div className="flex items-center gap-3">
        <Icon name={icon} className={tone === "copper" ? "text-copper" : tone === "amber" ? "text-amber" : "text-teal"} size={28} />
        <span className="text-sm font-semibold text-ink">{label}</span>
      </div>
      <div className="mt-5 flex items-end gap-2">
        <span className="text-5xl font-semibold leading-none text-ink">{value}</span>
        {unit ? <span className="mb-1 text-base text-ink">{unit}</span> : null}
      </div>
      <Sparkline tone={tone} bars={bars} />
    </div>
  );
}

function StatusPill({ children }) {
  const isDown = children === "価格下落";
  const isPrice = children === "価格上昇";
  return <Badge tone={isDown ? "mint" : isPrice ? "amber" : "mint"}>{children}</Badge>;
}

export function Dashboard({ compact = false }) {
  return (
    <div className={`dashboard-shell max-w-full overflow-hidden rounded-md border border-grid bg-[#fbfaf6] shadow-2xl shadow-ink/[0.14] ${compact ? "text-[13px]" : ""}`}>
      <div className="grid lg:grid-cols-[220px_1fr]">
        <aside className="dashboard-sidebar bg-teal p-5 text-white">
          <div className="mb-8 flex items-center gap-3">
            <Icon name="inventory" size={42} />
            <p className="text-xl font-semibold leading-tight">StockOps<br />Atelier</p>
          </div>
          <nav className="space-y-2">
            {sideNav.map(([label, icon, route], index) => (
              <a key={label} href={`#${route}`} className={`flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${index === 0 ? "bg-white/[0.16]" : "hover:bg-white/10"}`}>
                <Icon name={icon} size={21} />
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-10 border-t border-white/[0.18] pt-6">
            <p className="text-xs font-semibold text-white/75">最終同期</p>
            <p className="mt-2 text-3xl font-semibold">07:20</p>
            <p className="mt-1 text-xs text-white/75">2025/05/20 07:20</p>
            <button type="button" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/65 px-3 py-3 text-sm font-semibold transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
              <Icon name="sync" size={18} />
              同期を実行
            </button>
          </div>
        </aside>

        <div className="p-4 md:p-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <MiniKpi label="欠品予兆" value="12" unit="SKU" icon="alert" />
            <MiniKpi label="価格差分" value="28" unit="SKU" icon="priceTag" tone="copper" />
            <MiniKpi label="最終同期" value="07:20" icon="sync" />
            <MiniKpi label="SKU台帳" value="1,246" icon="calendar" tone="amber" bars />
          </div>

          <section className="mt-5 overflow-hidden rounded-lg border border-grid bg-white/[0.82]">
            <div className="flex items-center justify-between border-b border-grid px-4 py-3">
              <h2 className="text-base font-semibold text-ink">アラート一覧</h2>
              <a href="#help" className="flex items-center gap-2 rounded-md text-sm text-ink transition hover:text-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 focus-visible:ring-offset-2">
                すべて見る <Icon name="search" size={16} />
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[860px] w-full text-left text-sm">
                <thead className="bg-[#f5f1e9] text-xs text-ink">
                  <tr>
                    {["種別", "SKU", "商品名", "在庫数", "価格差分", "主要チャネル", "ステータス", "検出時刻"].map((head) => (
                      <th key={head} className="px-4 py-3 font-semibold">{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row[1]} className="border-t border-grid/75">
                      <td className="px-4 py-3"><StatusPill>{row[0]}</StatusPill></td>
                      <td className="px-4 py-3 text-ink">{row[1]}</td>
                      <td className="px-4 py-3 text-ink">{row[2]}</td>
                      <td className={`px-4 py-3 ${Number(row[3]) < 10 ? "text-copper" : "text-ink"}`}>{row[3]}</td>
                      <td className={`px-4 py-3 ${row[4].startsWith("+") ? "text-copper" : row[4].startsWith("-") ? "text-teal" : "text-slip"}`}>{row[4]}</td>
                      <td className="px-4 py-3 text-ink">{row[5]}</td>
                      <td className="px-4 py-3"><StatusPill>{row[6]}</StatusPill></td>
                      <td className="px-4 py-3 text-ink">{row[7]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-5 rounded-lg border border-grid bg-white/[0.82] p-4">
            <h2 className="text-base font-semibold text-ink">チャネル連携状況</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {channels.map((channel) => (
                <div key={channel.name} className="rounded-md border border-grid bg-white/75 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {channel.icon ? <Icon name={channel.icon} className="text-steel" size={30} /> : <span className="text-3xl font-bold text-copper">{channel.mark}</span>}
                      <span className="font-semibold text-ink">{channel.name}</span>
                    </div>
                    <Badge tone="mint">正常</Badge>
                  </div>
                  <div className="mt-4 flex items-end justify-between gap-3">
                    <p className="text-xs text-slip">最終同期　{channel.time}</p>
                    <Sparkline />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {compact ? (
            <p className="mt-4 text-xs text-slip">{siteData.alerts[0].detail}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
