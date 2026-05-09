# Portfolio Image Sources

`portfolio/assets/works/day093.png`〜`day100.png` は、実装済みページのBrowser Use/QAスクリーンショット由来に限定する。HTML/CSSの実態を伴わないモックアップ単体画像は、dayXXXのFVとして使用しない。

## Sources

| Image | Source | Note |
|---|---|---|
| `day093.png` | `day093/screenshots/final-review/127.0.0.1_4095_.png` の上端クロップ | 実装済みページの最終確認スクリーンショット |
| `day094.png` | `day094/qa-screenshots/home-desktop.png` | 実装済みページのQAスクリーンショット |
| `day095.png` | Browser Useで一時Vite環境 `http://127.0.0.1:5196/` を撮影 | 実装済みReactページのFVスクリーンショット |
| `day096.png` | `day096/qa-screenshots/final-postfix-desktop-home.png` | 実装済みページのQAスクリーンショット |
| `day097.png` | `day097/qa-screenshots/home-desktop-full-final.png` | 実装済みページのQAスクリーンショット |
| `day098.png` | `day098/qa-screenshots/browser-use-final-top.png` | 実装済みページのBrowser Useスクリーンショット |
| `day099.png` | `day099/qa-screenshots/browser-use-home-final.png` | 実装済みページのBrowser Useスクリーンショット |
| `day100.png` | `day100/qa-screenshots/browser-use-home-full.png` | 実装済みページのBrowser Useスクリーンショット |

## Verification

- `portfolio/script.js` の画像パスはクエリなしの相対パスに統一する。静的ホスティングやローカルサーバー差異による画像404を避けるため、キャッシュ更新が必要な場合はファイル名側で管理する。
- 画像カードはCSSで `object-position: top;` を指定し、縦長スクリーンショットでもFV上端を優先して見せる。
