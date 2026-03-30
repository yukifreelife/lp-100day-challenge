# Day 064 引き継ぎ

**Date**: 2026-03-29
**Status**: 次回開始予定

---

## 目的

LP全体をブロックだけで構築できるようにする。複数のセクションブロックを作成し、組み合わせてLPを構築する演習。

---

## 作成するブロック

| ブロック名 | 説明 | 優先度 |
|-----------|------|--------|
| CTA Section | Day063で作成済み | 完了 |
| **Testimonials** | お客様の声セクション | 高 |
| **Features** | 特徴・強みセクション | 高 |
| **Pricing** | 料金プランセクション | 中 |

---

## 次回の最初にやること

1. プラグイン構成を決める
   - A: 1つのプラグインで複数ブロックを提供（推奨）
   - B: 個別のプラグインとして作成

2. Testimonialsブロックの実装
   - アイコン/画像
   - お名前・会社名
   - テキスト
   - 評価（星）

3. Featuresブロックの実装
   - アイコン
   - タイトル
   - 説明文
   - 複数アイテム対応

---

## 関連ファイル

- Day063 CTAブロック: `day063/current/lp-cta-block/`
- インストールガイド: `day063/ops/BLOCK_INSTALLATION_GUIDE.md`
- 開発メモ: `day063/ops/GUTENBERG_BLOCK_DEVELOPMENT_NOTES.md`
- Local WPサイト: `lp-block-test`

---

## テスト環境

- Local WP サイト名: `lp-block-test`
- ドメイン: `lp-block-test.local`
- プラグインディレクトリ: `~/Local Sites/lp-block-test/app/public/wp-content/plugins/`

---

## 作業時間記録

- Day063: 約90分（環境構築 + CTAブロック実装 + 動作確認）
- Day064予想: 各ブロック30-45分 × 3 = 90-135分

---
