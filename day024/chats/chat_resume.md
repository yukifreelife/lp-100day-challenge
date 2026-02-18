# day024 → day025 引き継ぎ（chat_resume.md）

## 0. 引き継ぎの前提（最重要）
- Day024は「画像なしUI/UXブラッシュアップ + スクショ再生成」まで完了
- 画像制作（Firefly実作業）は未着手で、Day025へ繰り越し
- 最重要KPIは「入会数」、公開1か月目標は12名

---

## 1. Day024で完了したこと
- LPの戦略前提を確定
  - 目的：無料カウンセリング予約増→最終的に入会増
  - ターゲット：看護師の30代半ば女性（腰・肩の負担）
  - 価値：勤務中にラクになる体の使い方まで提案
- ブランドを確定
  - `KARADA SHIFT STUDIO`
- UI/UX改善を実装
  - モバイルメニュー、比較セクション、トラストストリップ、予約チップ入力、トップ復帰など
- スクショ欠け問題を修正
  - `?capture=1` で遅延表示を無効化する撮影モードを追加
  - PC/SP/FVの4枚を再生成
- Firefly向け画像生成プロンプトを整備

---

## 2. 現在の正本ファイル（必ずここを使う）
- LP実装
  - `/Users/yuuki/Works/lp-100/day024/index.html`
  - `/Users/yuuki/Works/lp-100/day024/styles.css`
  - `/Users/yuuki/Works/lp-100/day024/script.js`
- スクリーンショット（再生成済み）
  - `/Users/yuuki/Works/lp-100/day024/day024PC.png`
  - `/Users/yuuki/Works/lp-100/day024/day024PCFV.png`
  - `/Users/yuuki/Works/lp-100/day024/day024SP.png`
  - `/Users/yuuki/Works/lp-100/day024/day024SPFV.png`
- 画像生成指示書
  - `/Users/yuuki/Works/lp-100/day024/prompts/firefly.md`

---

## 3. Day025でやること
1. Fireflyで8アセットを生成（人物は日本人に統一）
2. 生成画像を `/Users/yuuki/Works/lp-100/day024/images/raw` に保存
3. 画像をWebP最適化して `/Users/yuuki/Works/lp-100/day024/images` に配置
4. LPへ画像実装後、PC/SP/FVスクショを再取得

---

## 4. 注意点
- 医療的断定・誇大表現は継続して禁止
- `?capture=1` はスクショ用。通常閲覧はクエリなしで確認する
- 実績/体験談未掲載のため、信頼訴求は「設計の透明性」を維持する
