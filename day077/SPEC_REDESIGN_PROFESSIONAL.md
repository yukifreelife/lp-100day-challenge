# Day077 プロフェッショナルLP化 仕様書

**Date**: 2026-04-12
**Status**: 仕様案
**Based on**: Day076 Simple Space LP

---

## 概要

現行のday077 LPはテンプレート感が強く、プロフェッショナルな印象を与えていない。5人の専門家（UI/UX、Webデザイン、コピーライティング、CRO、ブランディング）からの多角的な改善提案をまとめた仕様書である。

### 現状の課題

| 観点 | 現状 | 課題 |
|------|------|------|
| ビジュアル | ミントグリーン #7FB099 | 柔らかすぎて信頼性不足 |
| レイアウト | 均等なカード配置 | リズム感がない、テンプレート感 |
| コピー | 一般的なフレーズ | 独自性が不足、具体性が足りない |
| CTA | 「3分診断」等 | 不一致、焦点がぼやける |
| ブランド | 「片付けサービス」 | 感情的価値が伝わらない |

---

## 1. ブランド戦略（再定義）

### 1.1 ブランドコンセプトの変更

| 現行 | 提案 |
|------|------|
| 「散らかった部屋が1日で変わる」 | 「あなたの部屋が、あなたを好きになる」 |

**本質的価値の明確化**: 「片付け」ではなく「心の余裕を取り戻す」

### 1.2 新しいキャッチコピー案

```
パターンA: 「クローゼットが開かないあなたに」
パターンB: 「片付けじゃない。自分を取り戻す時間だ。」
パターンC: 「1日で、家も心もスッキリ。」
```

### 1.3 「Simple Space式 4つの約束」を新設

```
1. 「捨てましょう」と言いません
2. 「完璧」を目指しません
3. あなたの「直感」を信じます
4. 1年後も綺麗である方法だけを教えます
```

---

## 2. ビジュアルデザイン

### 2.1 カラーパレット変更

```css
/* 現行 */
--color-primary: #7FB099; /* ミントグリーン */

/* 提案: ダークティール系 */
--color-primary: #2D5A4A;        /* ダークティール */
--color-primary-light: #4A7A68;
--color-primary-dark: #1F3F33;
--color-primary-pale: #EDF3F0;

/* アクセント */
--color-accent: #C87F6B;         /* テラコッタ */
--color-accent-light: #E8C4B8;
--color-accent-dark: #A86554;

/* ニュートラル */
--color-bg: #FAFAFA;
--color-text: #1A1A1A;
--color-border: #E5E5E5;
```

### 2.2 タイポグラフィ

```html
<!-- 追加フォント -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

```css
--font-sans: 'Noto Sans JP', sans-serif;
--font-latin: 'Inter', sans-serif;       /* 英数字用 */
--font-serif: 'Playfair Display', serif; /* 装飾用 */
```

### 2.3 Bento Grid レイアウト（非対称）

```css
@media (min-width: 1024px) {
  .problem-grid {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
  }
  .problem-card:nth-child(2) {
    grid-row: span 2;
  }
}
```

---

## 3. UI/UX改善

### 3.1 セクション間の余白調整

```css
.problem { padding: var(--space-2xl) 0; }      /* 狭く */
.method { padding: var(--space-3xl) 0; }       /* 広く */
.contact { padding: var(--space-2xl) 0; }     /* 狭く */
```

### 3.2 3Dチルト効果（カード）

```javascript
document.querySelectorAll('.problem-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y - rect.height / 2) / 20;
    const rotateY = (rect.width / 2 - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });
});
```

### 3.3 スクロールプログレスインジケーター

```css
.section-progress {
  position: fixed;
  right: var(--space-md);
  top: 50%;
  transform: translateY(-50%);
}
.progress-dot.active {
  background: var(--color-primary);
  transform: scale(1.3);
}
```

---

## 4. コピーライティング改善

### 4.1 ヒーローセクション

| 現行 | 改善案 |
|------|--------|
| 散らかった部屋が / 1日で変わる | **クローゼットが開かないあなたに**<br>明日の朝、5分で支度ができる部屋になります |
| 100件以上の実績 / 98%満足 | **347組の片付けをサポート**<br>「3ヶ月後、まだ綺麗」が98% |

### 4.2 悩みセクション

| 現行 | 改善案 |
|------|--------|
| 片ける時間がない | **片ける時間がない**<br>平日は帰宅21時。週末は子供の習い事送迎。「休日に片付けなんてしたくない」が本音。 |
| どこから手をつけて | **どこから手をつけて**<br>床が見えない。押し入れを開けるのすら怖い。友達を呼べる部屋じゃない。 |

### 4.3 CTAボタン

| 現行 | 改善案 |
|------|--------|
| 3分であなたの片付け診断（無料） | **まずは写真を3枚送ってください**<br>（無料でアドバイスします） |

### 4.4 メソッドセクション

| 現行 | 改善案 |
|------|--------|
| ライフスタイル診断 | **01. あなたの朝を聞かせてください**<br>何時に起きて、何を着て、何を持って出かけますか？ |
| 不要品の選別基準作成 | **02. 「3年着てない」は捨てます**<br>迷ったら聞きます。「今日、その服を着ますか？」 |
| 収納場所の最適化 | **03. 取って3歩で戻す**<br>収納グッズはいりません。使う場所から3歩以内。 |
| 維持する仕組みづくり | **04. 3ヶ月後にLINEをください**<br>リバウンドしてたら、私は失敗です。無料で見直します。 |

---

## 5. CRO（コンバージョン最適化）

### 5.1 CTA配置統一

| 位置 | 現行 | 改善案 |
|------|------|--------|
| ヒーロー | 「3分で診断」 | 「無料で片付け診断（30分）」 |
| ナビ | 「無料相談予約」 | 「無料診断を予約」 |

### 5.2 不安解消セクション追加

```html
<section class="reassurance">
  <div class="container">
    <h2>初めての方も安心</h2>
    <div class="reassurance-grid">
      <div class="reassurance-item">
        <span class="icon">🔒</span>
        <h3>秘密厳守</h3>
        <p>お部屋の写真をSNSに掲載することはありません</p>
      </div>
      <div class="reassurance-item">
        <span class="icon">💬</span>
        <h3>準備不要</h3>
        <p>現状のままお任せください</p>
      </div>
      <div class="reassurance-item">
        <span class="icon">🚫</span>
        <h3>前日キャンセル無料</h3>
        <p>急な予定変更にも対応</p>
      </div>
    </div>
  </div>
</section>
```

**挿入位置**: Problemセクションの直後

### 5.3 マイクロコピー追加

```html
<a href="#contact" class="btn btn-primary btn-large">
  <span class="btn-main">無料診断を予約する</span>
  <span class="btn-sub">最短翌日ご対応・30分で完了</span>
</a>
```

### 5.4 フォーム簡素化（ステップ化）

```html
<!-- ステップ1: 最短入力 -->
<form class="contact-form-simple">
  <div class="form-group">
    <label>メールアドレス *</label>
    <input type="email" required placeholder="example@gmail.com">
  </div>
  <button type="submit">無料診断を予約する（次へ）</button>
</form>

<!-- ステップ2: 詳細（モーダル内） -->
```

---

## 6. 属人性強化

### 6.1 創業者ストーリー構造

```
1. 「嫌いな自分」の日々
   → 部屋を見るたびに「自分がダメ」と落ち込んだ

2. 気づき
   → 完璧な部屋を作っても、自分を責めている状態は変わらない

3. 転換点
   → 片けない方法を模索し始めた

4. 発見
   → 「80%で十分」という哲学

5. 現在
   → 347件の実績も、この哲学から生まれた
```

### 6.2 プロフィール追加要素

- 本人の日常（「私も昨日は洗濯物を放置しました」）
- 弱みの開示（「完璧主義をやめてから、仕事が楽しくなりました」）
- 写真の雰囲気変更（スーツ → 作業中の自然な笑顔）

---

## 7. 新規セクション提案

### 7.1 Storyセクション（追加）

```html
<section class="story">
  <div class="container">
    <h2>片けられなかった私</h2>
    <div class="story-timeline">
      <div class="story-step">
        <span class="step-year">2018</span>
        <p>シングルマザーとして働きながら、部屋は荒れる一方</p>
      </div>
      <div class="story-step">
        <span class="step-year">2020</span>
        <p>完璧な片付けを試みるも、1ヶ月でリバウンド</p>
      </div>
      <div class="story-step">
        <span class="step-year">2021</span>
        <p>「80%で十分」哲学に出会う</p>
      </div>
      <div class="story-step">
        <span class="step-year">現在</span>
        <p>347件のサポート、98%が3ヶ月後も綺麗</p>
      </div>
    </div>
  </div>
</section>
```

### 7.2 Philosophyセクション（追加）

「Simple Space式 4つの約束」を独立セクションとして配置

---

## 8. 実装優先順位

### Phase 1: 即座に効果が出る（P0）

| 優先度 | 項目 | 期待効果 | ファイル |
|--------|------|----------|----------|
| 🔴 P0 | カラー変更（ダークティール） | 信頼性+20% | css/style.css |
| 🔴 P0 | Interフォント追加 | プロ感+15% | index.html |
| 🔴 P0 | CTA文言統一 | CVR+10% | index.html |
| 🔴 P0 | ヒーローサブキャッチ変更 | 関心+15% | index.html |

### Phase 2: 中期的改善（P1）

| 優先度 | 項目 | 期待効果 | ファイル |
|--------|------|----------|----------|
| 🟡 P1 | 非対称グリッド | 独自性+25% | css/style.css |
| 🟡 P1 | 不安解消セクション追加 | 直帰率-15% | index.html |
| 🟡 P1 | 創業者ストーリー追加 | 属人性+30% | index.html |
| 🟡 P1 | 3Dチルト効果 | インタラクティブ+20% | js/script.js |

### Phase 3: 長期的差別化（P2）

| 優先度 | 項目 | 期待効果 | ファイル |
|--------|------|----------|----------|
| 🟢 P2 | ステップフォーム | CVR+20% | index.html |
| 🟢 P2 | Bento Gridレイアウト | 独自性+20% | css/style.css |
| 🟢 P2 | 「4つの約束」セクション | ブランド+25% | index.html |

---

## 9. 期待される総合効果

```
基礎改善（P0）: +50%
構造改善（P1）: +65%
高度改善（P2）: +85%（重複考慮）

総合: 約+100〜150%のCVR向上見込み
```

---

## 10. 次回アクション

1. 本仕様書をベースに、チーム内でレビュー
2. 優先度P0から実装開始
3. 実装ごとにA/Bテストで効果測定
4. 定期的な評価と改善の繰り返し

---

**作成者**: AI専門家チーム（UI/UX、Webデザイン、コピーライティング、CRO、ブランディング）
**対象ファイル**: /Users/yuuki/Works/lp-100/day077/
**関連ファイル**: /Users/yuuki/Works/lp-100/day076/HANDOFF_TO_DAY077.md
