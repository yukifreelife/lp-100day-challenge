# continuation_request

## 目的
- 納品完了後の継続案件相談を、初回制作フェーズのやり取りと分けて管理する。
- Day062 の「継続依頼見送りフェーズ」で作成した受信文面案と返信案の置き場とする。

## 構成
- `client_messages/`: クライアントから開発者へ送る継続依頼文面
- `client/`: 継続依頼に対する開発者側の返信案

## 運用ルール
- 元案件の受信履歴は `../client_messages/` に残し、この配下には混在させない。
- 継続相談の文面は `client_messages/CLIENT_MESSAGE_XXX_*.md` 形式で連番管理する。
- 継続相談への返信案は `client/CLIENT_REPLY_XXX_*.md` 形式で管理する。
- 一覧管理は `client_messages/CLIENT_MESSAGE_INDEX.md` を更新する。
