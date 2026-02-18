# Day024 - 看護師向けパーソナルジムLP（戦略設計〜UI/UXブラッシュアップ）

## ラベル（検索用）
**Labels:** `B2C` `fitness` `personal-gym` `nurse` `lp` `portfolio` `cv` `reservation` `ux` `motion` `screenshot` `firefly-prep`

lp:audience=看護師（30代半ば女性）  
lp:goal=無料カウンセリング予約→入会  
lp:industry=フィットネス/パーソナルジム  
lp:objective=案件受注向けポートフォリオLPの初版構築  
lp:offer=見た目改善＋仕事中にラクになる体の使い方の設計  
lp:template=ai-first  
lp:status=prototype-ready  
lp:env=static-html-css-js

---

## 今日の成果
- Day024の目的：
  - day023以前を参照せず、受注獲得を目的にしたLPをゼロベースで設計・実装する
- 実施内容：
  - 戦略前提を確定
    - 主目的：案件受注
    - 商材：パーソナルジムLP制作
    - ターゲット：看護師の30代半ば女性（腰・肩の負担）
    - 最重要KPI：入会数（公開1か月目標12名）
  - LPの訴求軸を定義
    - 提供価値：見た目改善に加え「勤務中にラクになる体の使い方」まで設計
    - 証拠方針：実績・体験談ではなく、評価設計/運動理論/段階負荷で信頼を作る
    - ブランド名：`KARADA SHIFT STUDIO`
  - UI/UXを全面ブラッシュアップ（画像なしで成立する設計）
    - モバイルメニュー、スキップリンク、比較セクション、トラストストリップを追加
    - 予約フォームにクイック選択チップを追加
    - スクロール進捗バー、トップ復帰ボタン、アニメーション制御を実装
  - スクリーンショットを再生成
    - 初回撮影で遅延表示欠けが出たため、`?capture=1` 専用モードを追加して再撮影
  - 画像制作準備
    - Adobe Firefly用プロンプトシートを作成
    - 画像生成作業はDay025へ繰り越し
- 検証結果：
  - `script.js` の構文チェックは通過
  - `day024PC/SP/FV` の4枚スクリーンショットを保存完了

---

## 作業時間（合計目標: 120分）
| 作業 | 分 |
|---|---:|
| 目的同期・KPI/ターゲット定義・訴求方針の整理 | 176 |
| LP本文方針の精査（法務配慮、CTA/FAQ、表現リスク確認）/UI/UXブラッシュアップ実装（`index.html`/`styles.css`/`script.js`） | 129 |
| スクリーンショット取得、表示欠け調査、`?capture=1` 対策実装、再撮影/README・引き継ぎログ作成（`chat_resume.md`） | 25 |

---

## 主要成果物
- LP本体
  - `/Users/yuuki/Works/lp-100/day024/index.html`
  - `/Users/yuuki/Works/lp-100/day024/styles.css`
  - `/Users/yuuki/Works/lp-100/day024/script.js`
- 画像生成準備
  - `/Users/yuuki/Works/lp-100/day024/prompts/firefly.md`
- スクリーンショット（再生成済み）
  - `/Users/yuuki/Works/lp-100/day024/day024PC.png`
  - `/Users/yuuki/Works/lp-100/day024/day024PCFV.png`
  - `/Users/yuuki/Works/lp-100/day024/day024SP.png`
  - `/Users/yuuki/Works/lp-100/day024/day024SPFV.png`

---

## 注意点
- 本LPはポートフォリオ用途のデモ。実績値・体験談は未掲載。
- 医療的断定・誇大表現・治療想起表現を避ける方針で文言設計している。
- 撮影時の表示欠け対策として、`index.html?capture=1` で遅延表示を無効化する実装を追加済み。
- 画像アセットは未生成（`/Users/yuuki/Works/lp-100/day024/images` は今後追加予定）。

---

## 次回やること（Day025）
1. Adobe Fireflyで8点の画像を生成（人物は日本人前提）
2. 生成画像を `images/raw` に配置し、Web用に最適化（WebP化）
3. LPへ画像組み込み（Hero/課題/メソッド/プログラム/フロー/キャラクター）
4. 組み込み後のPC/SPスクリーンショットを再取得

---

## 公開・法務メモ（最低限）
- 本LPは **架空案件（デモ）**
- 実在の企業・商品・人物とは無関係
- 効果には個人差があり、特定結果を保証しない
