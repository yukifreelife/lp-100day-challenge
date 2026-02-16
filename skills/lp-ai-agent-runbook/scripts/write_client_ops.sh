#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 4 ]]; then
  echo "Usage: $0 <day_dir> <lp_title> <preview_url> <reward_amount>" >&2
  exit 1
fi

DAY_DIR="$1"
LP_TITLE="$2"
PREVIEW_URL="$3"
REWARD_AMOUNT="$4"
DATE_LOCAL="$(date +%Y-%m-%d)"
OUT_FILE="$DAY_DIR/chats/client_ops.md"

if [[ ! -d "$DAY_DIR/chats" ]]; then
  echo "Error: chats directory not found: $DAY_DIR/chats" >&2
  exit 1
fi

cat > "$OUT_FILE" <<EOF
# クライアント連絡ログ（${DATE_LOCAL}）

## ステータス
- [x] 納品完了の連絡を送信
- [x] 検収依頼を送信
- [x] 報酬受取完了を連絡

## 案件情報
- ディレクトリ: \`${DAY_DIR}\`
- LPタイトル: \`${LP_TITLE}\`
- プレビューURL: ${PREVIEW_URL}
- 報酬金額: ${REWARD_AMOUNT}

## 送信文1: 納品完了連絡
件名: 【納品完了】${LP_TITLE}

お世話になっております。  
\`${LP_TITLE}\` の作業が完了しましたのでご連絡します。  
プレビューURL: ${PREVIEW_URL}

ご確認のうえ、修正希望があればお知らせください。  
問題なければ検収へ進行いただけますと幸いです。

## 送信文2: 検収進行・報酬依頼
件名: 【ご確認ありがとうございます】検収と報酬処理のお願い

ご確認ありがとうございます。  
修正反映済みのため、この内容で検収をお願いいたします。  
検収完了後、報酬処理へ進行いただけますと助かります。

## 送信文3: 報酬受取完了連絡
件名: 【受領報告】報酬受取完了

報酬 \`${REWARD_AMOUNT}\` の受取を確認しました。  
このたびはありがとうございました。  
本件はこれでクローズとさせていただきます。
EOF

echo "Generated: $OUT_FILE"
