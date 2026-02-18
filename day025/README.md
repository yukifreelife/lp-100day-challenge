# Day025 - Fracture LP Experiment

## 方向性
「業務的LP」の構造を壊し、以下を軸に再設計。

- 非線形の体験導線（PHASE追従UI）
- 感情トーンを切り替える `OVERDRIVE` モード
- KPI選択を可視化する `ORBIT SELECTOR`
- セクション単位で縦横が切り替わる `AXIS SHIFT SECTION`
- `Canvas`でリアルタイム生成される背景演出
- ポインタ/スクロールで歪むインタラクティブ見出しタイポ
- コンソール型3ステップCV導線
- 読書を補助する `READING GUIDE` HUD とカード開閉UI
- `PHASE`カードの「30字要約 / 詳細」切替

## 主要ファイル
- `/Users/yuuki/Works/lp-100/day025/index.html`
- `/Users/yuuki/Works/lp-100/day025/index.before-axis-switch.html`
- `/Users/yuuki/Works/lp-100/day025/styles.css`
- `/Users/yuuki/Works/lp-100/day025/script.js`

## 壊したポイント
1. 一般的な「縦積み説明LP」から、フェーズ追従の物語構造へ変更
2. 画面全体の空気感を切り替えるモードスイッチを導入
3. 操作しないと価値が見えないUI（orbit / magnetic / tilt）を採用
4. 縦スクロール中に横展開へ切り替わる `AXIS` セクションを導入
5. CVフォームを「説明後に送信」ではなく「体験中に進行」へ変更

## 実装メモ
- `?capture=1` でリビール系演出を無効化
- `prefers-reduced-motion` でモーション抑制
- `OVERDRIVE` 状態は `localStorage(day025-mode)` で保持
- `AXIS` セクションは通常時: sticky + 横移動、`capture/reduced-motion` 時: 縦積み表示
- `Canvas` 背景は通常時: リアルタイム描画、`capture/reduced-motion` 時: 静止描画
- `data-distort` 見出しは通常時: 変形、`capture/reduced-motion` 時: 静止表示
- 見出し歪みとポインタスパークは `OVERDRIVE` 時のみ強く有効化
- `PHASE`カードはデフォルトで要約のみ表示し、必要時のみ詳細展開
- SPの `LIVE PHASE TRACKER` はモバイルコントロール表示を廃止
- SPでは `READING GUIDE`（ミニマップ）を非表示
- SPヘッダーは可読性改善のため約2/3サイズへ縮小

## 構文チェック
- `node --check /Users/yuuki/Works/lp-100/day025/script.js`
