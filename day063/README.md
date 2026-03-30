# Day 063 - WordPressカスタムブロック演習

**Date**: 2026-03-29
**Status**: **Complete**

---

## 目的

WordPressのカスタムブロック（Gutenberg）を実装し、LPの特定セクションだけクライアントが編集できる機能を学習する。

---

## 背景

- Day046-062でWordPressテーマ化を学習（仮案件）
- 実案件で「特定のセクションだけ編集したい」という要望は頻出すると想定
- テーマ化 + カスタムブロックで、「更新しやすいLP」を提供できるようになる

---

## 学習内容

1. Gutenbergブロックの基礎
2. カスタムブロックの開発環境
3. 静的ブロックの実装
4. 動的ブロックの実装
5. インナーブロックの活用
6. LPへの統合

---

## 環境

- Node.js
- @wordpress/create-block
- WordPressローカル環境（Local WP または docker-compose）

---

## ステータス

- [x] 環境構築
- [x] 基礎ブロック作成
- [x] LP用カスタムブロック実装
- [x] WordPress環境での動作確認

---

## 成果物

### CTAセクションブロック (`current/lp-cta-block/`)

**機能:**
- 見出し編集
- 説明文編集
- ボタンテキスト・リンク先編集
- 背景色・文字色の設定
- 配置設定（左/中央/右）

**ドキュメント:**
- `ops/BLOCK_INSTALLATION_GUIDE.md` - インストール手順
- `ops/GUTENBERG_BLOCK_DEVELOPMENT_NOTES.md` - 開発メモ

---

## 作業時間

- 合計: 90分

---

## Day064への引き継ぎ

次回は**LP全体のブロック化**に取り組みます。

追加で作成するブロック:
1. Testimonials（お客様の声セクション）
2. Features（特徴・強みセクション）
3. Pricing（料金プランセクション）

詳細: `day064/RESTART_BRIEF.md`

---
