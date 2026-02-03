# LP_CATALOG（LP100日チャレンジ：作品カタログ）

作成したLPを「業種 / 対象（B2B・B2C） / オファー種別 / テンプレ系統 / タグ」で素早く見つけるためのカタログです。  
新しいLPを作ったら、**最下部に1行追加**してください。

---

## 使い方（運用ルール）

- **1LP = 1行**で記録（Dayごと）
- タグはなるべく **語彙を固定**（表記ゆれを防ぐ）
- 検索は `Cmd+F` で `B2B` / `leadgen` / `purchase` / `recruit` などを叩く
- README冒頭にも、同じラベル（タグ）を貼るとさらに探しやすい  
  → 下にテンプレあり

---

## 一覧（Day001〜）

> 列の意味  
> - **対象**: B2B / B2C  
> - **獲得**: leadgen（リード獲得） / purchase（購入） / apply（応募）  
> - **オファー**: CVボタンの中身（無料体験/面談/購入など）  
> - **テンプレ**: day005（物販/単品）・day006（AI差分運用）など、運用上の系統  
> - **タグ**: 検索用キーワード（固定語彙推奨）

| Day | LP名（title） | 想定業種/案件 | 対象 | 獲得 | オファー（CV） | テンプレ系統 | タグ（例：5〜10個） | ひとことメモ |
|---:|---|---|---|---|---|---|---|---|
| 001 | 灯り書店｜あなたに合う1冊が見つかる街の本屋 | 書店/来店予約・選書相談 | B2C | leadgen | 来店予約 | 初期（自由） | `B2C` `local` `bookstore` `reservation` `consult` `store-visit` | 初期作。header/nav/CTAの基本形確認に便利 |
| 002 | COFFEE STAND｜朝の3分で、1日が変わる。 | コーヒースタンド/モバイル注文・クーポン | B2C | leadgen | 初回100円OFFクーポン | 初期（自由） | `B2C` `local` `food` `coupon` `mobile-order` `leadgen` | クーポン訴求の型（軽いCV） |
| 003 | ONLINE ENGLISH｜毎日15分で、英語が話せる。 | オンライン英会話/無料体験 | B2C | leadgen | 無料体験 | 初期（自由） | `B2C` `education` `trial` `subscription` `leadgen` `lesson` | 体験→継続の王道ファネル |
| 004 | 家計相談｜ムリなく整う、家計の見直し。 | FP/家計相談/無料面談 | B2C | leadgen | 無料面談予約 | 初期（自由） | `B2C` `finance` `consulting` `appointment` `leadgen` `service` | 面談リード獲得の型（信頼→相談） |
| 005 | Lumi Skin｜毎日の3滴で、肌のトーンが整う。 | D2Cコスメ/定期便・購入 | B2C | purchase | 初回50%OFFで購入 | day005（物販/単品〜定期） | `B2C` `d2c` `cosmetics` `purchase` `subscription` `discount` `refund` | 物販の訴求（価格/保証/配送FAQ） |
| 006 | ReportFlow｜週次レポート作成を、30分→3分へ。（デモ） | SaaS/広告運用・レポート自動化 | B2B | leadgen | 無料デモ予約（デモ） | day006（AI差分運用） | `B2B` `saas` `marketing` `demo` `leadgen` `automation` `productivity` | B2Bの「課題→デモ」型。差分運用と相性◎ |
| 007 | SLEEP BALANCE｜寝つきにくい夜を、やさしく整える。（デモ） | 睡眠サポートサプリ/購入（デモ） | B2C | purchase | 今すぐ購入（デモ） | day005寄り（物販） | `B2C` `supplement` `health` `purchase` `routine` `review` | 物販×健康系。薬機法っぽい表現に注意メモ推奨 |
| 008 | LUNA WEB STUDIO｜LPコーダー採用（デモ） | 採用LP/応募・カジュアル面談 | B2B | apply | カジュアル面談に応募（デモ） | day006（AI差分運用） | `B2B` `recruit` `apply` `interview` `leadgen` `studio` | 採用/応募導線。nav/FAQ補完など改善済み |

---

## README冒頭に貼る「ラベル」テンプレ（おすすめ）

各Dayの `README.md` 冒頭に、これを貼ると検索性が跳ね上がります。

例：
- **Labels:** `B2B / saas / demo / leadgen / automation / day006`

テンプレ：
- **Labels:** `（B2B or B2C） / （industry） / （offer） / （goal） / （template）`
- **Goal:** `leadgen | purchase | apply`
- **Offer:** `trial | coupon | consultation | demo | purchase | interview`
- **Template:** `day005 | day006 | free`

---

## タグ辞書（表記ゆれ防止用）

**対象**
- `B2B` / `B2C`

**獲得（Goal）**
- `leadgen`（予約/体験/面談/デモ）
- `purchase`（購入/定期便）
- `apply`（応募/採用）

**業種（industry）例**
- `local` `bookstore` `food` `education` `finance` `cosmetics` `supplement` `saas` `recruit`

**オファー（offer）例**
- `reservation` `coupon` `trial` `appointment` `demo` `purchase` `interview`

---

## 更新履歴
- 2026-02-xx: 初版作成（Day001〜Day008を登録）
