# Day039 - 追加3点（Medium/Low）の WordPress 反映手順

## 使うファイル
- LP本文差し替え用（HTML正本）:
  `/Users/yuuki/Works/lp-100/day039/TOP_PAGE_CUSTOM_HTML_TEMPLATE_HIGH_PRIORITY_FIX.html`
- 追加CSS全文差し替え用:
  `/Users/yuuki/Works/lp-100/day039/WP_LAYOUT_SHIFT_FIX_HIGH_PRIORITY.css`

## 今回の反映内容
1. ファーストビューの予約CTA強調（文量・CTA視認性の調整）
2. 中間CTA周辺の余白最適化
3. PDF説明文の具体化（内容が想像できる補足文を追加）

## WordPress 側でやること
1. LP本体のHTMLブロックを開く
2. 本文全体を
   `/Users/yuuki/Works/lp-100/day039/TOP_PAGE_CUSTOM_HTML_TEMPLATE_HIGH_PRIORITY_FIX.html`
   の内容に差し替える
3. `外観 > カスタマイズ > 追加CSS` の内容を
   `/Users/yuuki/Works/lp-100/day039/WP_LAYOUT_SHIFT_FIX_HIGH_PRIORITY.css`
   に差し替える
4. 更新後、スマホで以下を確認する
   - ファーストビューで予約CTAが先に認識できるか
   - 中間CTA前後の余白が詰まりすぎず、過剰でもないか
   - PDF説明文で「何が得られるか」が一読で分かるか
5. 問題なければ公開URLをクライアントへ共有する

## 補足
- High優先修正と同じ正本ファイルを更新しているため、過去 `dayXXX` の原本は変更しない。
- 返信受領後は `/Users/yuuki/Works/lp-100/day039/CLIENT_FEEDBACK_TRACKER.md` に追記する。
