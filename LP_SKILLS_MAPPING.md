# LPスキル使用マッピング

**Purpose**: lp-100プロジェクトでのLP作成・評価・改善時に必ず使用するスキルのマッピング

---

## スキルの場所

すべてのLP関連スキルは `/Users/yuuki/.claude/skills/` に配置されています：

```
/Users/yuuki/.claude/skills/
├── lp-analytics/        # ディレクトリ型スキル
├── lp-performance/      # ディレクトリ型スキル
├── lp-ux/              # ディレクトリ型スキル
├── lp-legal/           # ディレクトリ型スキル
├── lp-category-settings/ # ディレクトリ型スキル
├── lp-seo.md           # ファイル型スキル
├── lp-content.md       # ファイル型スキル
├── lp-mobile.md        # ファイル型スキル
└── lp-code-check.md    # ファイル型スキル
```

---

## 作業タイプ別スキル使用マッピング

### 1. LP新規作成フェーズ

| 作業ステップ | 使用スキル | 目的 |
|-------------|-----------|------|
| テーマ決定 | `lp-category-settings` | カテゴリー設定・業種マッピング |
| 法的ページ作成 | `lp-legal` | プライバシーポリシー・特定商取引法表記 |
| SEO基本設定 | `lp-seo.md` | Metaタグ・OGP・JSON-LD |
| アクセス解析準備 | `lp-analytics` | GA4設定・CVイベント計測 |

### 2. LP評価フェーズ（包括的評価）

| 評価観点 | 使用スキル | チェック項目 |
|---------|-----------|------------|
| SEO | `lp-seo.md` | Metaタグ・構造化データ・見出し構造 |
| パフォーマンス | `lp-performance` | Core Web Vitals・Lazy Loading・画像最適化 |
| モバイル | `lp-mobile.md` | タッチターゲット・レスポンシブ・ナビゲーション |
| コンテンツ | `lp-content.md` | 見出し階層・alt属性・内容の一貫性 |
| UX | `lp-ux` | Toast通知・Loading状態・エラーハンドリング |
| コード品質 | `lp-code-check.md` | 重複ID・consoleエラー・未使用コード |
| 法的コンプライアンス | `lp-legal` | 必要ページ・連絡先プレースホルダー |

### 3. LP改善フェーズ

| 改善目的 | 使用スキル | 対応内容 |
|---------|-----------|---------|
| SEO改善 | `lp-seo.md` | 構造化データ追加・OGP設定・見出し最適化 |
| 表示速度改善 | `lp-performance` | Lazy Loading実装・画像最適化・CSS/JS圧縮 |
| モバイル改善 | `lp-mobile.md` | タッチターゲット拡大・ハンバーガーメニュー |
| UX改善 | `lp-ux` | ローディング表示・エラー通知・成功メッセージ |

---

## スキル呼び出しルール（Claude Code用）

### Superpowersスキル呼び出し
Claude CodeでLP作業を行う場合、必ず`Skill`ツールを使用して該当スキルを呼び出します：

```
例: SEO評価を行う場合
→ Skill toolで "lp-seo" を呼び出し、内容に従って評価
```

### 優先順位
1. **プロセススキル先**: 評価・診断系スキル（lp-code-check等）を先に実行
2. **実装スキル後**: 具体的な改善実装系スキル（lp-performance等）を実施

---

## 新規LP作成チェックリスト

新しいLP（dayXXX）を作成する際は、以下の順序でスキルを使用してください：

1. [ ] `lp-category-settings` - カテゴリー設定
2. [ ] `lp-legal` - 法的ページ作成
3. [ ] `lp-seo.md` - SEO基本設定
4. [ ] `lp-analytics` - アクセス解析準備
5. [ ] `lp-performance` - パフォーマンス最適化
6. [ ] `lp-mobile.md` - モバイル対応チェック
7. [ ] `lp-content.md` - コンテンツ品質チェック
8. [ ] `lp-ux` - UX改善
9. [ ] `lp-code-check.md` - コード品質最終チェック

---

## 注意事項

- スキルは**ユーザーレベル**（`/Users/yuuki/.claude/skills/`）に配置されています
- プロジェクトディレクトリ内にはスキルはありません
- 新しいLP作業を開始する際は、必ずこのマッピングを参照して適切なスキルを呼び出してください
- 「スキルを使うか迷ったら使う」を原則とします（1%でも可能性があれば呼び出し）

---

*最終更新: 2026-04-27*
