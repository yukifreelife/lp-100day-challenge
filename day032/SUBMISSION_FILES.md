# Day032 初稿提出ファイル一覧

## 最新提出ZIP（Day033引き継ぎ時点）
- 正本: `day032_client_submission_rev3_1_20260226.zip`
- 旧版（参照用）:
  - `day032_client_submission_rev1_20260226.zip`
  - `day032_client_submission_rev2_20260226.zip`
  - `day032_client_submission_rev3_20260226.zip`

## クライアント提出対象（必須）
- `index.html`
- `styles.css`
- `script.js`
- `CLIENT_README.txt`
- `privacy.html`
- `tokushoho.html`
- `downloads/food-checklist.pdf`
- `images/`（配下すべて）

## 仕様メモ（必要に応じて同梱）
- `CLIENT_REQUESTS_AND_COMMITMENTS.md`
- `REQUIREMENTS_CONFIRMED.md`
- `TIMEREX_REMINDER_SETUP.md`
- `README.md`
- `chats/chat_resume.md`

## 内部編集用（提出対象外）
- `downloads/draft/food-checklist-draft.html`
- `downloads/draft/food-checklist-draft.css`
- `downloads/draft/README.txt`
- `scripts/export_food_checklist_pdf.sh`

## 提出対象外（削除済み）
- `download.pdf`（見た目不良の旧PDF）

## ローカル確認
```bash
cd /Users/yuuki/Works/lp-100/day032
python3 -m http.server 8032
```

確認URL:
- `http://localhost:8032/index.html`
- `http://localhost:8032/privacy.html`
- `http://localhost:8032/tokushoho.html`
- `http://localhost:8032/downloads/food-checklist.pdf`
