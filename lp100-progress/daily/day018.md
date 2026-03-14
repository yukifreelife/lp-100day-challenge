# Day018 - 税務・節税相談LP（仮案件 / クラウドワークス想定）

## ラベル（検索用）
**Labels:** `B2B` `B2C` `tax` `consulting` `lp` `wordpress` `design` `image-optimization` `webp` `performance` `ai-generated` `codex` `staging` `password-protected`

lp:audience=会社員/個人事業主  
lp:goal=問い合わせ（資料請求・初回相談）  
lp:industry=税務/節税/コンサルティング  
lp:objective=表示速度改善＋本番運用整備  
lp:offer=節税・減価償却の整理サポート（仮）  
lp:template=ai-first  
lp:status=mock-project  
lp:env=staging-on-wordpress  

---

## 今日の成果
- imagesフォルダ内のファイル名をWordPress運用前提で整理（英小文字・kebab-case統一）
- 不要なhero画像（wide / square）を削除し、使用素材を明確化
- 使用画像をWebPへ統一
- ローカル正本（day018）でWebP参照に完全切り替え
- WordPressメディアへ5枚のWebP画像をアップロード
- 固定ページ内の画像URLをWPのメディアURLへ差し替え
- DevToolsでNetwork確認（WebPは200 OK）
- SVGアイコン4点が404であることを特定（原因分析まで完了）

---

## 作業時間（合計目標: 120分）
| 作業 | 分 |
|---|---:|
| day018作業準備（PMChatGPT立ち上げ、前提・昨日までの作業共有） | 25 |
| 画像整理・命名統一 | 55 |
| Photoshopで画像変換（40WebP変換） | 35 |
| ローカルの画像をWebPへ変換/WordPressアップロード・URL反映/DevTools検証・原因特定 | 108 |
| README作成 | 20 |

---

## 詰まり（1つ）
- WordPressがSVGアップロードを拒否（セキュリティ制限）  
  → PNG変換対応 or SVG許可設定の選択が必要

---

## 学び（1行）
- 画像最適化は“変換”よりも“参照管理”が本質。

---

## 良かったこと（1つ）
- DevToolsで404を即座に特定でき、原因切り分けができた。

---

## 今日特に印象に残ったこと（思考メモ）
- ローカルとWordPressで参照戦略を分ける設計の重要性
- WebPは形式変更より「運用統一」が重要
- SVGは便利だが、WP環境では扱いに注意が必要
- 本番運用を想定すると、画像管理設計は早期に固めるべき

---

## 今日整理できた「AI×LP制作×画像最適化」フロー（Day018版）
1. **ChatGPT**
   - 作業フロー整理
   - Codex用プロンプト設計
   - 運用判断の整理
2. **Codex**
   - 画像参照URL差し替え
   - 命名統一
3. **WordPress**
   - メディアアップロード
   - 検証環境での確認
4. **DevTools**
   - 404検知
   - WebP読込確認
5. **人間**
   - 不要素材削除判断
   - SVG対応方針決定

---

## パフォーマンス改善ポイント（Day018まとめ）
- WebPへ統一済み
- 不要画像削除で軽量化
- 画像参照の一本化
- 404検出によるエラー排除プロセス確立

---

## 次回やること（Day019）
- SVGアイコン対応方針決定
  - A：PNGへ変換してWP参照
  - B：SVG許可設定
- 404完全解消
- 最終表示チェック
- クライアント共有準備

---

## 公開・法務メモ（最低限）
- 本LPは **架空案件（デモ）**
- 実在の企業・商品・人物とは無関係
- フォームはダミー
- WordPress検証環境はパスワード保護

---

## 素材出典 / 生成AI利用
- AI利用：
  - ChatGPT：設計整理・作業フロー設計
  - Codex：HTML差分修正
  - Adobe Firefly：画像生成（Day017）
- 画像：
  - Firefly生成素材をWebP化
- 最終判断・構成・運用整理は人間が実施

---

## AIチャット運用ルール
- day017構造は維持（構成変更禁止）
- ローカル正本主義
- 画像はWebP統一
- 参照は必ずDevTools確認
- 毎日chat_resume.mdで前提共有
