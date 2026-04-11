# Day076 → Day077 引き継ぎ資料

**Date:** 2026-04-12
**Status:** 次回改善タスクの引き継ぎ

---

## Day076 完了内容

### 実装済み
- ✅ スプリットヒーロー（Before/After同時表示）
- ✅ インタラクティブ比較スライダー
- ✅ ミントグリーンカラーシステム
- ✅ Problemカードのアイコン統一（SVG化）
- ✅ カード高さの統一（align-items: stretch）
- ✅ 画像lazy loading実装
- ✅ レスポンシブ対応

### 評価完了
- ✅ Technical Implementation Eval (7.5/10)
- ✅ Visual Design Eval (7.5/10)
- ✅ **メタ評価** (テンプレート感: C, 属人性: C)
- ✅ **コピーライティング評価** (B+ 82/100)

---

## Day077で取り組むべき改善タスク

### 優先度1: コンバージョン率向上 🔴

#### 1.1 CTAボタンの改善
```diff
<!-- 現状 -->
<button class="cta-button">無料相談を予約する</button>

<!-- 改善案 -->
<button class="cta-button">3分であなたの片付け診断（無料）</button>
```

**ファイル:** `day076/index.html`
**該当箇所:**
- ヒーローセクション CTA (line 85-86)
- サービスカードのCTAボタン

#### 1.2 緊急性の付与
**追加要素:**
```html
<div class="urgency-banner">
  先月は平均3日で予約が埋まりました
</div>
```

**挿入位置:** ヒーローセクション上部

#### 1.3 フォーム簡素化
```diff
<form id="contact-form">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
- <input type="date" name="date" required>
+ <input type="date" name="date">
</form>
```

**ファイル:** `day076/index.html` (line 447-476)

---

### 優先度2: ターゲット明確化 🟡

#### 2.1 ターゲットセクションの追加
```html
<section class="target-section">
  <h2>こんなあなたに</h2>
  <div class="target-grid">
    <div class="target-item">
      <span class="target-icon">👔</span>
      <p>共働きで朝の服選びに10分かかる人</p>
    </div>
    <div class="target-item">
      <span class="target-icon">📦</span>
      <p>引っ越し後、荷物が片付かない人</p>
    </div>
    <div class="target-item">
      <span class="target-icon">🔄</span>
      <p>過去に片けてもまた散らかった人</p>
    </div>
  </div>
</section>
```

**挿入位置:** Problemセクションの後、Solutionセクションの前

---

### 優先度3: 属人性強化 🟢

#### 3.1 プロフィールのストーリー化
```diff
<!-- 現状 (line 318-325) -->
<p class="profile-motto">
  「片付いていない部屋も、そこには住む人の生活がある」をモットーに
</p>

<!-- 改善案 -->
<div class="profile-story">
  <p>自身もシングルマザーとして仕事と子育てに追われ、
  散らかった部屋に悩みました。</p>
  <p>その経験から「無理なく続く仕組み」を開発し、
  現在は347件以上のお客様にサポートしています。</p>
</div>
```

**ファイル:** `day076/index.html`

---

## テンプレート感脱却のための独自性要素

### 独自メソッドの命名とロゴ化
```
「Simple Space Method™️」
- 5ステップの片付けプロセス
- 「自分に合う片付け方」を見つけるメソッド
```

### Before/Afterのプロセス開示
```html
<div class="process-explanation">
  <h4>この変化のプロセス</h4>
  <ol>
    <li>ライフスタイル診断（30分）</li>
    <li>不要品の選別基準作成</li>
    <li>収納場所の最適化</li>
    <li>維持する仕組みづくり</li>
  </ol>
</div>
```

---

## 評価ファイルの場所

```
day076/evaluations/
├── meta-evaluation.md           # テンプレート感、独自性、属人性評価
├── copywriting-evaluation.md    # コピーライティング詳細評価
├── visual-design.md             # デザイン評価
├── technical-implementation.md  # 技術実装評価
├── visual-issues-report.md      # 視覚的問題レポート
└── visual-fixes-summary.md      # 修正完了サマリー
```

---

## 次回の作業手順

1. 評価ファイル `meta-evaluation.md` を読む
2. 優先度1から順に実装
3. 変更ごとにスクリーンショットを撮影
4. 完了後に評価を更新

---

## 参考スコア

| 観点 | 現状スコア | 目標スコア |
|------|-----------|-----------|
| LPの役割・目的 | B+ | A |
| マーケティング視点 | C | B+ |
| オリジナリティ | C | B |
| 属人性 | C | B+ |
| コピーライティング | B+ (82) | A (90+) |
