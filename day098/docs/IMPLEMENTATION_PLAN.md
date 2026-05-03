# day098 Implementation Plan

## Scope

React + Tailwind CSSで、YouTubeチャンネル「しろとはちのひなた時間」のLP全体を実装する。参照モック画像はそのまま背景として使わず、DOM/CSSと再利用可能な画像素材に分解して再構成する。

## Reference Mockups

| Page | Path | Size | Role |
|---|---|---:|---|
| Top LP | `day098/mockups/home-lp.png` | 864 x 1821 | 主実装対象。FV、プロフィール、動画カード、ギャラリー、CTAの構成を抽出する。 |
| Character | `day098/mockups/pages/character-profile.png` | 862 x 1824 | プロフィールカード、関係性カード、下層導線の詳細参考。 |
| Video List | `day098/mockups/pages/video-list.png` | 906 x 1735 | 動画カード、フィルター、再生アイコン、CTAの参考。 |
| Gallery | `day098/mockups/pages/gallery.png` | 862 x 1824 | ギャラリーグリッド、ベストショット、写真カード表現の参考。 |

## DOM/CSS vs Image Asset Strategy

| Visual Element | Recreate With DOM/CSS | Use/Generate as Image Asset | Reason |
|---|---|---|---|
| Header layout, navigation, buttons | Yes | No | テキストと状態をHTMLで管理する。 |
| Logo text | Yes | No | 日本語テキストの正確性を優先する。 |
| Small cat-face logo marks | Mostly CSS/SVG | No | 丸い猫顔・耳・目は軽量なCSS/SVGで近似可能。 |
| Hero title, subtitle, CTA | Yes | No | 文字は必ずDOM化し、レスポンシブ制御する。 |
| Large two-cat hero illustration | No | Yes: `public/assets/illustrations/hero-cats.png` | モックの手描き感を忠実に再現するため、参照モックから抽出した透過PNGを使う。 |
| Secondary page hero visuals | Yes | Yes: `public/assets/illustrations/intro-cats.png`, `video-hero-cats.png`, `gallery-hero-cats.png` | 下層ページモックの冒頭セクションをLP内にも再構成する。 |
| Fur-line background texture | Yes | No | repeating-linear-gradientと疑似要素で軽量に再現する。 |
| Whisker divider lines | Yes | No | CSS border/疑似要素で十分再現可能。 |
| Odd-eye blue/yellow dots | Yes | No | CSS円形アクセントで再現する。 |
| Hachiware black patches | Yes | No | border-radius付き疑似要素・SVG形状で再現する。 |
| Profile cards | Yes | Yes: `profile-shiro.png`, `profile-hachi.png` | テキスト・タグ・枠線はDOM、猫イラストは透過PNG。 |
| Profile detail rows | Yes | Yes: `profile-detail-*.png` | `好きなこと`、`性格`、`チャームポイント`の密度をモックに近づける。 |
| Video thumbnail scenes | Yes | Yes: `public/assets/thumbnails/*.png` | モックに近い動画サムネイルは矩形ラスタ素材として使用し、テキストはDOMで管理する。 |
| Relationship cards | Yes | Yes: `public/assets/relationship/*.png` | Character mockupにある「ふたりの距離感」をLPへ補充する。 |
| Featured video | Yes | Yes: `public/assets/featured/weekly-playtime.png` | Video mockupの「今週のおすすめ」をLP中盤の強い導線として再現する。 |
| Gallery cards | Yes | Yes: `public/assets/gallery/*.png` | ギャラリー画像はモックから切り出したラスタ素材を使う。 |
| Best shot / wallpaper cards | Yes | Yes: `public/assets/featured/best-shot.png`, `public/assets/wallpapers/*.png` | Gallery mockupの詳細セクションをLPへ補充する。 |
| Play icon / paw icon | CSS/SVG | No | SVGコンポーネントで明瞭に作る。 |
| Final CTA frame | Yes | No | 点線枠、ひげ線、アクセントはCSS。 |

## Section Structure

1. Header: cat-face logo, site title, navigation, paw icon.
2. Hero: large title, subtitle, primary/secondary CTA, two-cat hero visual.
3. Character Intro: two profile cards for `しろ` and `はち`.
4. Character Details: `好きなこと`、`性格`、`チャームポイント` for each cat.
5. Relationship: three cards from the character-profile mockup.
6. Character CTA: link from character content to video content.
7. Video Intro: secondary-page hero from the video-list mockup.
8. Video Mood: four thumbnail cards matching top mockup.
9. Featured Video: weekly recommendation from the video-list mockup.
10. Video Library: filters and six video cards from the video-list mockup.
11. Video CTA: channel registration panel.
12. Gallery Intro: secondary-page hero from the gallery mockup.
13. Gallery Moments: eight cards in a soft grid.
14. Best Shot: large monthly best-shot panel from the gallery mockup.
15. Gallery Library: filters and eight detailed gallery cards from the gallery mockup.
16. Wallpaper Picks: three wide image cards from the gallery mockup.
17. Gallery CTA and Final CTA: dotted cream panels, odd-eye accents, red subscribe button.

## Design Tokens

| Token | Value | Usage |
|---|---:|---|
| `--color-base` | `#FBFAF6` | Page background |
| `--color-surface` | `#FFF7E7` | Soft card backgrounds |
| `--color-fur` | `#E8E1D6` | Hairline texture, borders |
| `--color-ink` | `#252321` | Headings, hachiware patches |
| `--color-body` | `#4B4843` | Body text |
| `--color-blue` | `#4AA8FF` | Odd-eye blue accent |
| `--color-yellow` | `#FFD84D` | Odd-eye yellow accent |
| `--color-paw` | `#F4A8B7` | Paw accents |
| `--color-red` | `#F2483D` | YouTube-style CTA only |
| Container | `min(1280px, calc(100% - 64px))` | Desktop layout |
| Card radius | `8px - 18px` | Modest rounding |
| Main shadow | `0 18px 40px rgba(37, 35, 33, .08)` | Cards |
| Font | `"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif` | Japanese UI |

## Component Split

| Component | Responsibility |
|---|---|
| `App.jsx` | LP composition and data wiring |
| `components/Icons.jsx` | Play, paw, eye dots, whisker divider |
| `components/SectionHeading.jsx` | Consistent heading with whisker lines |
| `components/Cards.jsx` | Profile, video, and gallery card components |
| `data/siteData.js` | Navigation, cat profiles, video cards, gallery items |
| `index.css` | Tokens, Tailwind layers, responsive custom CSS |

## Assets

| Asset | Path | Source |
|---|---|---|
| Mockup copies for reference | `public/assets/mockups/*.png` | Existing generated images |
| Transparent cat illustrations | `public/assets/illustrations/*.png`, `public/assets/logos/*.png` | Extracted from mockups with alpha masks |
| Runtime thumbnails/gallery | `public/assets/thumbnails/*.png`, `public/assets/gallery/*.png` | Extracted from mockups |
| Supplemental section assets | `public/assets/featured/*.png`, `public/assets/relationship/*.png`, `public/assets/wallpapers/*.png` | Extracted from secondary page mockups |
| Detail and hero assets | `public/assets/illustrations/video-hero-cats.png`, `gallery-hero-cats.png`, `profile-detail-*.png` | Extracted from secondary page mockups |
| Runtime icons | Inline SVG/CSS components | Authored in React |

## Responsive Strategy

- Desktop 1440px: match mockup with wide hero, two-column visual/text, 4-column video/gallery grids.
- Tablet: stack hero while preserving large cat visual.
- Mobile 390px: compact header, single-column cards, CTA buttons full width, no text overlap.
- Prevent text overflow by avoiding fixed text containers and using `clamp()` for headings.

## Motion Strategy

- Static fidelity first.
- After stable layout, add subtle entrance/hover motion only.
- Respect `prefers-reduced-motion`.

## Visual QA

1. Start Vite dev server in `day098`.
2. Browser Use desktop viewport: 1440px width, inspect first screen and full-page flow.
3. Browser Use mobile viewport: 390px width, inspect header, hero, grids, CTA.
4. Confirm CTA hover/click targets and no console errors.
5. Save screenshots under `day098/qa-screenshots/`.
6. Record result in `day098/docs/EVALUATION_REPORT.md`.

## Implementation Notes

- Do not use a full mockup image as a background.
- Use extracted raster illustration assets for cats instead of SVG approximations.
- Do not place visible English UI copy.
- Do not use extra cats beyond `しろ` and `はち`.
- Keep the palette white/cream with blue, yellow, hachiware black, paw pink, and red CTA accents.
