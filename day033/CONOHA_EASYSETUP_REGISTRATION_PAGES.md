# ConoHa WING: 実サイト同一フローのみ（連番スクショ）

作成日: 2026-02-27  
方針: この資料は「実サイトで同一セッション内に連続遷移した画面」のみを掲載しています。

## 1. ConoHa WINGトップで「お申し込み」
URL: [https://www.conoha.jp/wing/](https://www.conoha.jp/wing/)

![flow-01](/Users/yuuki/Works/lp-100/day033/screenshots/51-realflow-01-wing-home-apply.png)

## 2. WING作成ウィザード（プラン選択）
URL: [https://cp.conoha.jp/WING/Wizard/Create](https://cp.conoha.jp/WING/Wizard/Create)

![flow-02](/Users/yuuki/Works/lp-100/day033/screenshots/52-realflow-02-wizard-create-top.png)

## 3. 必須項目を選択して「次へ」
- `AIブログ生成ツール`: `利用しない`
- `WordPressテーマ`: `利用しない`

![flow-03](/Users/yuuki/Works/lp-100/day033/screenshots/53-realflow-03-create-select-and-next.png)

## 4. 情報入力（アカウント情報・お客様情報）
URL: [https://cp.conoha.jp/WING/Wizard/AccountInfo](https://cp.conoha.jp/WING/Wizard/AccountInfo)

![flow-04](/Users/yuuki/Works/lp-100/day033/screenshots/54-realflow-04-accountinfo.png)

## 5. 入力後に「次へ」
![flow-05](/Users/yuuki/Works/lp-100/day033/screenshots/55-realflow-05-accountinfo-filled-next.png)

## 6. 電話/SMS認証（同一フロー到達点）
URL: [https://cp.conoha.jp/WING/Wizard/Auth?new=true](https://cp.conoha.jp/WING/Wizard/Auth?new=true)

![flow-06](/Users/yuuki/Works/lp-100/day033/screenshots/56-realflow-06-auth-sms.png)

## 補足
- 上記6枚は、同一セッションで連続取得した実画面です。
- ここから先（支払い方法選択、確認画面、WordPressかんたんセットアップ）は、SMS/電話認証コードの入力完了後に進むフローです。
