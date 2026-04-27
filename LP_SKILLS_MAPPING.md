# LPスキル使用マッピング

**Purpose**: lp-100プロジェクトでのLP作成・評価・改善時に必ず使用するスキルのマッピング

**最終更新**: 2026-04-27（12個のスキルを網羅）

---

## 全12個のLP関連スキル一覧

| # | スキル | タイプ | 目的 |
|---|--------|--------|------|
| 1 | `lp-automation-v2` | オーケストレーター | LP自動作成（11ステップ完全自動化） |
| 2 | `auto-improve` | 改善 | 評価スコアに基づく自動改善 |
| 3 | `image-license` | 画像 | 画像ライセンス確認・アトリビューション |
| 4 | `lp-category-settings` | 設定 | カテゴリー別デザイン仕様 |
| 5 | `lp-legal` | 法務 | プライバシーポリシー・特商法表記 |
| 6 | `lp-seo.md` | SEO | Metaタグ・OGP・JSON-LD |
| 7 | `lp-performance` | パフォーマンス | Core Web Vitals・Lazy Loading |
| 8 | `lp-mobile.md` | モバイル | タッチターゲット・レスポンシブ |
| 9 | `lp-content.md` | コンテンツ | 見出し階層・alt属性 |
| 10 | `lp-ux` | UX | Toast通知・Loading状態 |
| 11 | `lp-code-check.md` | コード | 重複ID・consoleエラー |
| 12 | `lp-analytics` | 解析 | GA4トラッキング・CVイベント |

---

## スキルの場所

```
/Users/yuuki/.claude/skills/
├── lp-automation-v2/    # オーケストレーター型
│   ├── SKILL.md
│   ├── README.md
│   ├── CHECKLIST.md
│   └── CODE_EXAMPLES.md
├── auto-improve/        # 改善型
│   └── SKILL.md
├── image-license/       # 画像確認型
│   └── SKILL.md
├── lp-analytics/
├── lp-performance/
├── lp-ux/
├── lp-legal/
├── lp-category-settings/
├── lp-seo.md
├── lp-content.md
├── lp-mobile.md
└── lp-code-check.md
```

---

## 作業タイプ別スキル使用マッピング

### A. 完全自動LP作成（推奨）

**使用スキル**: `lp-automation-v2`

ユーザーが「LPを作成」「新規LP」「/lp-create」と言った場合、このスキル1つで11ステップが自動実行されます：

```
1. ブレインストーミング
2. デザイン仕様策定 (lp-category-settings)
3. コーディング
4. 画像取得 (image-license)
5. 評価
6. プロフェッショナル化レビュー
7. 改善 (auto-improve)
8. アナリティクス実装 (lp-analytics)
9. 法務ページ生成 (lp-legal)
10. パフォーマンス最適化 (lp-performance)
11. UX強化 (lp-ux)
```

### B. ステップバイステップLP作成

| 作業ステップ | 使用スキル | 目的 |
|-------------|-----------|------|
| 1. テーマ決定 | `lp-category-settings` | カテゴリー設定・業種マッピング |
| 2. 画像選定 | `image-license` | 画像ライセンス確認・商用利用可否 |
| 3. 法的ページ作成 | `lp-legal` | プライバシーポリシー・特定商取引法表記 |
| 4. SEO基本設定 | `lp-seo.md` | Metaタグ・OGP・JSON-LD |
| 5. アクセス解析準備 | `lp-analytics` | GA4設定・CVイベント計測 |
| 6. パフォーマンス最適化 | `lp-performance` | Lazy Loading・Core Web Vitals |
| 7. モバイル対応 | `lp-mobile.md` | タッチターゲット・レスポンシブ |
| 8. UX改善 | `lp-ux` | Toast通知・Loading状態 |

### C. LP評価フェーズ（包括的評価）

| 評価観点 | 使用スキル | チェック項目 |
|---------|-----------|------------|
| SEO | `lp-seo.md` | Metaタグ・構造化データ・見出し構造 |
| パフォーマンス | `lp-performance` | Core Web Vitals・Lazy Loading・画像最適化 |
| モバイル | `lp-mobile.md` | タッチターゲット・レスポンシブ・ナビゲーション |
| コンテンツ | `lp-content.md` | 見出し階層・alt属性・内容の一貫性 |
| UX | `lp-ux` | Toast通知・Loading状態・エラーハンドリング |
| コード品質 | `lp-code-check.md` | 重複ID・consoleエラー・未使用コード |
| 法的コンプライアンス | `lp-legal` | 必要ページ・連絡先プレースホルダー |

### D. LP改善フェーズ

| 改善目的 | 使用スキル | 対応内容 |
|---------|-----------|---------|
| **自動改善** | `auto-improve` | 評価スコアに基づきSEO・アクセシビリティ・セキュリティを自動改善 |
| SEO改善 | `lp-seo.md` | 構造化データ追加・OGP設定・見出し最適化 |
| 表示速度改善 | `lp-performance` | Lazy Loading実装・画像最適化・CSS/JS圧縮 |
| モバイル改善 | `lp-mobile.md` | タッチターゲット拡大・ハンバーガーメニュー |
| UX改善 | `lp-ux` | ローディング表示・エラー通知・成功メッセージ |

---

## スキル詳細

### lp-automation-v2（LP自動作成オーケストレーター）

**説明**: LP制作プロセスを11ステップで完全自動化

**トリガー**:
- 「LPを作成」「新規LP」「LP生成」「ランディングページ作成」
- 「/lp-create」コマンド

**パラメータ**:
```markdown
theme: LPのテーマ（例: カフェ、歯科医院、SaaS）
category: カテゴリー（例: 飲食店、医療、B2B）
brand: ブランド名/サービス名
target: ターゲットユーザー
enable_analytics: GA4実装（デフォルト: false）
enable_legal: 法務ページ生成（デフォルト: false）
enable_performance: パフォーマンス最適化（デフォルト: true）
enable_ux: UX強化（デフォルト: true）
tracking_id: GA4測定ID
```

### auto-improve（LP自動改善）

**説明**: LP評価スコアに基づき自動改善を実行

**起動条件**:
- LP評価スコアが閾値未満（総合80点、SEO/アクセシビリティ70点、セキュリティ60点）
- ユーザーが「改善して」「auto-improve」と言った場合

**改善内容**:
- アクセシビリティ: ARIA属性、altテキスト、見出し階層、コントラスト比
- セキュリティ: CSP metaタグ、プライバシーポリシー、HTTPS確認
- SEO: メタタグ強化、OGP、構造化データ、canonical URL

### image-license（画像ライセンス確認）

**説明**: 画像の商用利用可否とライセンス確認

**トリガー**:
- 「この画像は使える？」「画像ライセンス」「画像著作権」
- 「Creative Commons」「画像アトリビューション」

**対応ライセンス**:
- CC0（Public Domain）- 帰属不要
- Unsplash License - 商用無料、帰属任意
- Pexels License - 商用無料、帰属任意
- CC BY 4.0 - 帰属必須
- CC BY-NC - 非商用のみ

---

## 新規LP作成チェックリスト

### 【推奨】完全自動モード
1. [ ] `lp-automation-v2` を呼び出し
2. [ ] パラメータを入力（theme, category, brand等）
3. [ ] 自動生成を待つ
4. [ ] ローカルサーバーで確認

### 【手動】ステップバイステップモード
1. [ ] `lp-category-settings` - カテゴリー設定
2. [ ] `image-license` - 画像ライセンス確認
3. [ ] `lp-legal` - 法的ページ作成
4. [ ] `lp-seo.md` - SEO基本設定
5. [ ] `lp-analytics` - アクセス解析準備
6. [ ] `lp-performance` - パフォーマンス最適化
7. [ ] `lp-mobile.md` - モバイル対応チェック
8. [ ] `lp-content.md` - コンテンツ品質チェック
9. [ ] `lp-ux` - UX改善
10. [ ] `lp-code-check.md` - コード品質最終チェック

---

## スキル呼び出しルール

### Superpowersスキル呼び出し
Claude CodeでLP作業を行う場合、必ず`Skill`ツールを使用して該当スキルを呼び出します：

```markdown
例: SEO評価を行う場合
→ Skill toolで "lp-seo" を呼び出し、内容に従って評価

例: 完全自動LP作成
→ Skill toolで "lp-automation" を呼び出し、パラメータを指定

例: 改善を実行
→ Skill toolで "auto-improve" を呼び出し、自動改善を実行
```

### 優先順位
1. **オーケストレーター優先**: `lp-automation-v2` で一括処理を検討
2. **プロセススキル先**: 評価・診断系スキル（lp-code-check等）を先に実行
3. **実装スキル後**: 具体的な改善実装系スキル（lp-performance等）を実施

---

## 注意事項

- スキルは**ユーザーレベル**（`/Users/yuuki/.claude/skills/`）に配置されています
- プロジェクトディレクトリ内にはスキルはありません
- 新しいLP作業を開始する際は、必ずこのマッピングを参照して適切なスキルを呼び出してください
- 「スキルを使うか迷ったら使う」を原則とします（1%でも可能性があれば呼び出し）

---

*最終更新: 2026-04-27*
*更新内容: lp-automation-v2, auto-improve, image-license を追加*
