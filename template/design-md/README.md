# DESIGN.md Template

## 目的

`DESIGN.md` を今後のLP制作で再利用しやすくするためのテンプレートです。Google Stitch系の現在主流になりつつある形式に合わせ、1ファイルの中に次の2層を持たせます。

- YAML front matter: AIエージェントが読めるデザイントークン
- Markdown本文: 人間とAIエージェントが読めるデザイン意図・運用ルール

## 配置ルール

新しいdayでは、dayディレクトリ直下に置きます。

```text
dayXXX/
├── DESIGN.md
├── design/
│   └── tone-and-manner.md
├── src/
└── public/
```

`DESIGN.md` を正本にし、`design/` 配下の資料は背景情報や生成プロンプトの保管場所として扱います。

## 使い方

1. `template/design-md/DESIGN.md.template` を `dayXXX/DESIGN.md` としてコピーする。
2. `{{PLACEHOLDER}}` をすべて埋める。
3. YAML front matterのtoken値と、実装側のTailwind/CSS tokenを同期する。
4. UI実装前に、各画面要素を `Colors`, `Typography`, `Layout`, `Components` のどれに従うか分類する。
5. UI変更後は、`DESIGN.md` と実装の差分がないか確認する。

## 必須セクション

Markdown本文は次の順序を保ちます。

1. `## Overview`
2. `## Colors`
3. `## Typography`
4. `## Layout`
5. `## Elevation & Depth`
6. `## Shapes`
7. `## Components`
8. `## Do's and Don'ts`

## YAML tokenの基本形

最低限、次のキーを持たせます。

```yaml
version: "0.1.0"
name: "Project Name"
description: "One sentence description."
colors: {}
typography: {}
spacing: {}
rounded: {}
elevation: {}
components: {}
```

component tokenから色や角丸を参照する場合は、`{colors.primary}` のような参照形式を使います。

## day099での実例

day099では、実プロジェクト用の `DESIGN.md` を次の場所に作成済みです。

```text
day099/DESIGN.md
```

day099では、黒基調サイバーパンクECという固有要件に合わせて、次の内容を追記しています。

- starter setを5点に固定するルール
- CTA orangeを購入導線専用にするルール
- カート数量0とレイアウト安定性のルール
- FAQカテゴリーフィルターのルール
- ロゴ・メーカー名・読み取れるラベルを禁止する画像ルール

## 確認コマンド

YAML front matterが壊れていないかだけ確認する軽量チェックです。

```bash
ruby -ryaml -e 'text = File.read("dayXXX/DESIGN.md"); front = text.split(/^---\s*$/, 3)[1]; data = YAML.safe_load(front, aliases: false); abort("missing tokens") unless data["colors"] && data["typography"] && data["components"]; puts "DESIGN.md front matter OK: #{data["name"]}"'
```

公式CLIを利用できる環境では、次も候補にします。

```bash
npx @google/design.md lint DESIGN.md
```

## 運用メモ

- 仕様はAlpha段階なので、公式仕様が変わった場合はこのテンプレートを更新します。
- `DESIGN.md` はAI実装用の正本、`README.md` は実装成果物の説明、`AGENTS.md` は作業ルールとして役割を分けます。
- LPごとの個別トンマナ資料がある場合も、最終的に再利用したいルールは `DESIGN.md` に集約します。
