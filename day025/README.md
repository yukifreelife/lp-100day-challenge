# Day025 - CV重視インタラクティブLP（FRACTURE LAB）

## ラベル（検索用）
**Labels:** `lp` `portfolio` `cv` `interactive` `motion` `canvas` `ux` `telemetry` `screenshot` `day025`

lp:audience=LP制作を検討する事業者/マーケ担当  
lp:goal=無料ブリーフ送信（3ステップCV）  
lp:industry=Web制作/マーケ支援  
lp:objective=非定型インタラクションでもCV導線を説明可能なLPを構築  
lp:offer=体験設計＋モーション制御＋段階入力導線  
lp:template=ai-first  
lp:status=prototype-ready  
lp:env=static-html-css-js

---

## 今日の成果
- Day025の目的：
  - 既存LPテンプレをなぞらず、動きの多い体験型LPをCV観点で成立させる
- 実施内容：
  - 体験導線を再設計
    - `PHASE TRACKER` / `ORBIT PRIORITY` / `COMPARE` / `AXIS SHIFT` / `MISSION CONSOLE`を連結
    - Hero内にノード配置ゲーム（3イベント）を実装し、操作による価値理解を追加
  - モーションと可読性の両立を実装
    - `MOTION: CALM / DYNAMIC` 切替を導入し、状態を`localStorage(day025-mode)`へ保存
    - `CONSOLE`表示中は `mode-convert-focus` で背景ノイズを抑制し、送信導線を強調
  - CV説明可能性を強化
    - `window.lpCvTelemetry` を追加し、スクロール/操作/フォーム送信のイベントを記録可能化
    - `CV_ARCHITECTURE.md` を追加し、HTML/CSS/JSをCV根拠付きで文書化
  - UX細部の改善
    - `COMPARE`領域を `grab / grabbing` カーソルに変更
    - 最終送信ボタンの磁力挙動を無効化し、誤操作リスクを低減
  - スクリーンショット取得
    - `?capture=1` + 要素待機 + 待機時間を入れて、描画遅延を回避した4枚を生成
- 検証結果：
  - `script.js` の構文チェックは通過
  - `day025PC/SP/FV` の4枚スクリーンショットを保存完了

---

## 作業時間（合計目標: 120分）
| 作業 | 分 |
|---|---:|
| 体験導線の設計と主要UI実装（PHASE/ORBIT/COMPARE/AXIS/CONSOLE、Heroゲーム） | 128 |
| CVフォーカス制御・Telemetry・文言整理・操作性改善（`mode-convert-focus` / grabカーソル等） | 51 |
| スクリーンショット再取得（`?capture=1`安定化）・README更新 | 24 |

※作業時間はチャット時刻を直接取得できないため、`day025`関連コミット最古時刻（2026-02-19 04:25）〜成果物最新更新時刻（2026-02-19 07:48）から自動算出（203分）。
手元タイマーでトータル２３４分
---

## 主要成果物
- LP本体
  - `/Users/yuuki/Works/lp-100/day025/index.html`
  - `/Users/yuuki/Works/lp-100/day025/styles.css`
  - `/Users/yuuki/Works/lp-100/day025/script.js`
- 設計ドキュメント
  - `/Users/yuuki/Works/lp-100/day025/CV_ARCHITECTURE.md`
- スクリーンショット（captureモードで再生成）
  - `/Users/yuuki/Works/lp-100/day025/day025PC.png`
  - `/Users/yuuki/Works/lp-100/day025/day025PCFV.png`
  - `/Users/yuuki/Works/lp-100/day025/day025SP.png`
  - `/Users/yuuki/Works/lp-100/day025/day025SPFV.png`

---

## 注意点
- 本LPはポートフォリオ用途のデモ。成果値を保証するものではない。
- 撮影時は `index.html?capture=1` を使用（リビール遅延/モーション差異の回避用）。
- `MOTION: DYNAMIC` は演出が強いため、CV直前は `mode-convert-focus` で自動抑制する設計。
- Telemetryはクライアント内メモリ記録のみ（永続保存や送信は未実装）。

---

## 次回やること（Day026）
1. Telemetryの出力形式を整備（JSONエクスポート/比較用サマリ）
2. `CONSOLE`到達率と送信率を前提に、CTA文言・順序のA/B案を追加
3. `CV_ARCHITECTURE.md` に実測ログ反映セクションを追加
4. 追加撮影（必要なら `MOTION: CALM / DYNAMIC` 比較用）

---

## 公開・法務メモ（最低限）
- 本LPは **架空案件（デモ）**
- 実在の企業・商品・人物とは無関係
- 効果には個人差があり、特定結果を保証しない
