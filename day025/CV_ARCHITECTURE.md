# DAY025 LP CV Architecture

このドキュメントは、`/Users/yuuki/Works/lp-100/day025` のLPを
「なぜこの実装にしたか」をCV（コンバージョン）起点で説明するための仕様書です。

## 1. CV定義と設計方針

このLPのCVは `CONSOLE` セクションでの送信完了です。
設計は次の4段階に分解しています。

1. 注意獲得: 冒頭で離脱を防ぎ、次スクロールを起こす
2. 理解形成: 問題整理と価値理解を短時間で完了させる
3. 納得形成: 受け身閲覧ではなく、操作で価値を確信させる
4. 行動完了: 入力負荷と心理負荷を分割し、送信完了まで導く

## 2. 説明のために今回追加した修正

説明に無理が出る要素を、CV観点で補強しています。

1. モード切替の意味を明確化
- `OVERDRIVE` 表記を `MOTION: CALM / DYNAMIC` に変更
- 目的を「派手さ」ではなく「モーション強度の自己選択」に定義

2. CV直前で自動的にノイズを下げる
- `CONSOLE` が視界中心に入ると `mode-convert-focus` を付与
- 背景演出、タイトル歪み、スパーク演出を抑制
- 送信UI（progress/submit）だけ視覚強調

3. 最終送信ボタンの不要動作を削除
- submitボタンから `data-magnetic` を削除
- クリック直前にボタンが動くリスクを除去

4. 検証可能性を追加
- `window.lpCvTelemetry` を実装
- 各演出がCVに効いているかをイベントで観測可能にした

## 3. HTML構造のCV意図

### 3.1 全体フロー
- `hero`: 注意獲得と第一CTA
- `fracture`: 読み進行とフェーズ把握
- `orbit`: KPI優先順位の自己選択
- `cards`: 反応UIの価値提示
- `compare`: 標準導線との差分明確化
- `axis-switch`: 認知リズムの再起動
- `console`: 送信完了（CV）

### 3.2 CTA設計
- 上部CTA: 早期行動に対応
- 浮遊CTA: 読み途中の行動機会を維持
- 最終submit: フォーム完了専用CTA（非磁力）

### 3.3 ゲーム型要素（hero-machine）
- 3ノード配置を「価値の操作体験」として設計
- `d`（距離）で達成までの残りを定量化
- 「触ると価値が返る」体験を、文言ではなく挙動で提示

## 4. カラー設計のCV意図

### 4.1 トークン設計
- `--cyan`, `--electric`: 行動誘導色（主要CTA/進捗）
- `--text`, `--text-soft`: 情報階層を作る可読色
- `--line`, `--line-strong`: 境界認識を補助し、視線迷子を防ぐ
- `--ok`, `--danger`: フォーム状態の即時理解

### 4.2 状態色
- `mode-calm`: 通常閲覧向けの低刺激
- `mode-overdrive`: 高反応デモ向け
- `mode-endgame`: 終盤の到達感を色相で表現
- `mode-convert-focus`: CV直前でノイズを引き算

## 5. タイポグラフィ設計

### 5.1 見出しフォント
- `--font-display`（Oswald系）
- 意図: 一瞬で判別できる骨格、強いセクション切替

### 5.2 本文フォント
- `--font-body`（IBM Plex Sans JP系）
- 意図: 日英混在時の可読性と情報密度の安定化

### 5.3 字間と行間
- 見出しは短行で圧縮、本文は行間を広めに設定
- 意図: 「強調」と「読解」の認知モードを分離

## 6. モーション設計

### 6.1 原則
- 動きは「意味がある場所」に限定
- 低速: 読解補助
- 中速: フィードバック
- 高速: アテンション喚起（`DYNAMIC`のみ）

### 6.2 CV直前の抑制
- `mode-convert-focus` で背景演出と歪みを削減
- 意図: 送信時の認知負荷を下げ、操作ミスを防ぐ

## 7. JavaScript実装とCV仮説

### 7.1 グローバル状態
- スクロール比率、endgame判定、進捗線更新
- 仮説: 現在地の可視化は離脱率を下げる

### 7.2 コンバージョンフォーカス
- `#console` が中心域に入ると `mode-convert-focus` をON
- 仮説: 送信直前の視覚ノイズ削減で完了率向上

### 7.3 Motionモード
- `MOTION: CALM / DYNAMIC` をlocalStorage保存
- 仮説: ユーザーが刺激強度を選べると疲労離脱を抑制

### 7.4 Phase Tracker
- viewport基準でアクティブフェーズ切替
- 仮説: 現在地認知が読了を促進

### 7.5 Hero Machine
- ノード配置イベントと距離メトリクス
- 仮説: 能動操作で提案価値の納得速度が上がる

### 7.6 Orbit Selector
- KPI選択で中心文言を切替
- 仮説: 目的先行の文脈提示で訴求の受容性が上がる

### 7.7 Compare Slider
- 比較位置をユーザー操作で調整
- 仮説: 自分で差分を発見すると記憶定着しやすい

### 7.8 Console Form
- 3ステップ分割 + 要約表示 + 逐次バリデーション
- 仮説: 1画面完結より完了率が高い

### 7.9 装飾系制御
- tilt/magnetic/spark は `DYNAMIC` 時のみ
- さらに `mode-convert-focus` 時は停止
- 仮説: 興味喚起は維持しつつ、CV直前のノイズは排除

## 8. Telemetry（検証可能性）

`window.lpCvTelemetry` で次を記録します。

1. 初期環境
- `page_init`

2. 導線進行
- `scroll_milestone`（25/50/75/90）
- `phase_change`
- `phase_detail_open`
- `jump_scroll_click`

3. 体験要素の関与
- `machine_event_select`
- `machine_event_locked`
- `machine_all_events_locked`
- `orbit_priority_change`
- `module_detail_open`
- `compare_interaction_start`

4. CV到達関連
- `conversion_focus_enter/exit`
- `console_step_view`
- `console_chip_select`
- `console_validation_error`
- `console_submit_start`
- `console_submit_success`

5. 補助
- `motion_mode_init`
- `motion_mode_change`
- `back_to_top_click`
- `endgame_enter/exit`

`window.lpCvTelemetry.summary()` でイベント集計を確認できます。

## 9. 画面遷移・状態遷移の説明

### 9.1 読み遷移
- `INTRO -> PHASE -> ORBIT -> MODULES -> COMPARE -> AXIS -> CONSOLE`
- リズムが単調にならないよう、AXISで一次的に認知軸を変える

### 9.2 状態遷移
- `mode-calm`（標準）
- `mode-overdrive`（強反応）
- `mode-endgame`（終盤到達）
- `mode-convert-focus`（CV集中）

これらは排他的ではなく重ね合わせます。
例: `mode-overdrive + mode-endgame + mode-convert-focus`

## 10. 「なぜこのコードか」の判断基準

各実装は次のどれかに該当しない限り採用しない方針です。

1. 注意を獲得する
2. 理解を短縮する
3. 納得を高める
4. 入力摩擦を下げる
5. 効果測定を可能にする

今回の修正は 4 と 5 を強化しています。

## 11. CSS実装インベントリ（コード単位）

以下は「そのセレクタがCVにどう効くか」の対応表です。

1. `:root` トークン
- 色・線・影・角丸・フォントを一元管理
- A/B時に値だけ差し替えて挙動比較しやすい

2. `body.mode-overdrive`
- 高演出モード
- 初見訴求を強くしたい時の選択肢を提供

3. `body.mode-endgame`
- ページ終盤の到達感を視覚化
- 「いま終盤」という文脈を色で補助

4. `body.mode-convert-focus`
- CV直前のノイズ低減
- 背景演出を抑え、送信UIを強調

5. `.world*` 系
- 背景の奥行き感を保持し、没入を維持
- ただし `mode-convert-focus` で抑制

6. `.progress-line`
- 全体進行の可視化
- 読了見込みが立つことで途中離脱を抑える

7. `.topbar*`, `.jump-nav`, `.topbar-cta`
- 迷った時の復帰導線
- 任意地点から `CONSOLE` に復帰可能

8. `.distort-title*`
- 高演出モード時のみアテンション強化
- calm/focus時は無効化して可読性優先

9. `.hero*`
- 最初の意思決定（スクロール継続 or CTAクリック）を作る

10. `.hero-machine*`
- 価値説明を「読む」から「触って確かめる」へ変換

11. `.signal-strip`, `.signal-track`, `.signal-group`
- 訴求軸を短語で反復
- エンドレス表示で認知を補強

12. `.fracture*`, `.phase-*`
- 現在地と残距離の可視化
- 読みの継続率を上げる

13. `.orbit*`
- KPI優先の意思決定UI
- 演出の目的を先に定義

14. `.cards*`
- 反応UIの具体例をカード化
- 価値理解をモジュール単位に分解

15. `.compare*`
- 標準LPとの差分を操作で理解
- 比較の納得感を高める

16. `.axis-*`
- 認知リズムを意図的に再起動
- 単調スクロールによる読み疲れを回避

17. `.console*`, `.chip*`, `.summary`, `.submit-btn`
- CV完了の中核
- 入力負荷分割 + 状態フィードバック

18. `.floating-cta`, `.reading-hud`, `.back-top`
- 行動補助UI
- 読み途中の離脱を「戻りやすさ」で抑える

19. `@keyframes *`
- 演出の意味は各要素に紐付け
- `prefers-reduced-motion` で全面停止可能

20. `@media` / `.axis-fallback`
- SPと低モーション環境で破綻しない導線に切替
- 可読性と操作性を優先

## 12. JavaScript実装インベントリ（コード単位）

1. 初期化
- JS有効時クラス付与、capture/reduced-motion判定
- 環境差で体験を壊さない

2. `createTelemetry`
- イベント収集/要約
- 効果検証を実装レベルで担保

3. `updateGlobalState`
- 進捗線、endgame、topbar、back-top、convert-focus制御
- スクロール状態をCV導線へ反映

4. `setConversionFocus`
- `CONSOLE` 中心表示時に `mode-convert-focus` 切替
- 送信前の集中環境を自動生成

5. スムーススクロール群
- 次行動までの距離を短縮
- 明示導線の摩擦を低減

6. パララックス
- 背景の奥行き変化
- 視線維持を狙うが、低モーション時は停止

7. AXIS制御 (`updateAxisMetrics`, `updateAxisScroll`)
- 縦操作のまま横展開を実現
- 操作学習コストを増やさず文脈変化を提供

8. Motionモード (`applyMode`)
- 演出強度をユーザー選択化
- 疲労離脱を自己制御できる

9. Distortion制御
- dynamic時のみ適用、focus時は強制無効
- アテンションと可読性を状態で切替

10. Canvas背景
- 没入補助の環境演出
- visibility/reduced-motion対応で負荷制御

11. Phase管理 (`setActivePhase`, detail toggle)
- フェーズ更新と詳細展開
- 読解を段階化し、過負荷を回避

12. Machineゲーム
- イベント選択、ノード操作、距離算出、クリア判定
- 能動操作で価値理解を促進

13. Orbit管理 (`setOrbitState`)
- KPI選択に応じた戦略文脈切替
- 目的先行の訴求に統一

14. Tilt/Magnetic
- dynamic時のみ反応性を強化
- convert-focus時は停止して誤操作抑制

15. Compare制御
- スライダー/ドラッグで比較位置を更新
- 体験差を自己発見型にする

16. Reading HUD
- 現在章と章内進捗を表示
- 長尺LPの読了率補助

17. Consoleフォーム
- ステップ制御、バリデーション、送信状態管理
- エラー時の復帰先を自動選択

18. Pointer Spark
- dynamic時の触覚的反応
- convert-focus時は停止

## 13. 実運用時の確認手順

1. 体験確認
- `MOTION: CALM` と `MOTION: DYNAMIC` を切替
- `CONSOLE` 到達時に背景演出が抑制されるか確認

2. 導線確認
- `PHASE` 点ボタン、`COMPARE` スライダー、`ORBIT` ノードを操作
- 最後に `CONSOLE` で送信まで到達できるか確認

3. 観測確認
- DevToolsで `window.lpCvTelemetry.summary()` 実行
- 主要イベントが記録されるか確認
