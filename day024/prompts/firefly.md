# Firefly Execution Sheet (day024)

## 0. Goal
- Tool: Adobe Firefly (Web)
- Target: `/Users/yuuki/Works/lp-100/day024/index.html`
- Output dir (download): `/Users/yuuki/Works/lp-100/day024/images/raw`
- Final web assets: `/Users/yuuki/Works/lp-100/day024/images`

## 1. Firefly generation settings
- Module: Text to image
- Aspect ratio:
  - Hero/Issue/Method/Program/Flow: `16:9`
  - Trainer character: `2:3`
  - Cat mascot: `1:1`
- Prompt style: Photorealistic for scene images, Illustration for character assets
- Keep this enabled as needed:
  - Style reference: ON (use hero result as style anchor)
  - Structure reference: ON for triptych/flow layout
- Keep this disabled:
  - Text in image / logos

## 2. Asset list
1. `kss-hero-key-01`
2. `kss-issue-transfer`
3. `kss-issue-record`
4. `kss-method-triptych`
5. `kss-program-board`
6. `kss-flow-steps`
7. `kss-character-trainer`
8. `kss-character-cat`

## 3. Copy-paste prompts

### 1) kss-hero-key-01 (16:9)
```
Japanese female nurse in her mid-30s after shift, relief expression, modern wellness studio entrance, clean navy-teal-coral visual direction, soft natural daylight, high detail, subject placed on right, generous negative space on left for headline, no text, no logos
```

### 2) kss-issue-transfer (16:9)
```
Nurse practicing transfer-assist body mechanics in training context, focus on lower-back load awareness, educational and calm atmosphere, clean non-hospital background, realistic anatomy, no medical treatment scene, no text
```

### 3) kss-issue-record (16:9)
```
Nurse leaning forward during desk charting, shoulder and neck tension implied by posture, minimal workspace, muted navy and gray palette with small coral accent, soft side daylight, realistic editorial photo look, no text
```

### 4) kss-method-triptych (16:9)
```
Three-panel composition showing assessment, guided exercise, reassessment; same female trainer and same client in all panels; clear step progression; modern Japanese wellness brand mood in navy teal coral; clean composition, no text overlays
```

### 5) kss-program-board (16:9)
```
Abstract evidence dashboard visual for posture mobility stability, clean cards and charts, premium minimal interface style, navy-teal dominant with coral highlights, bright neutral background, no brand names, no text
```

### 6) kss-flow-steps (16:9)
```
Three-step booking journey visual: smartphone form input, schedule confirmation, in-person counseling; friendly and frictionless UX story; bright trustworthy mood; clean composition for website section background; no text
```

### 7) kss-character-trainer (2:3)
```
Full-body female trainer character, Japanese, age 32-36, approachable smile, navy activewear with teal line and small coral accessory, standing pose with tablet, clean simple background, modern soft illustration, web character sheet style
```

### 8) kss-character-cat (1:1)
```
Mascot cat for wellness brand, silver-gray short hair, coral bandana, smart and friendly expression, simple icon-friendly silhouette, clean background, high edge clarity, modern mascot illustration
```

## 4. Negative prompt (apply to all)
```
blurry, lowres, watermark, logo, typo text, extra fingers, deformed hands, bad anatomy, blood, syringe, surgery, emergency room, over-sexualized, cluttered background
```

## 5. Export rule
- Download best 1 per asset first
- If quality is low, regenerate max 2 times per asset
- File naming:
  - `kss-hero-key-01.png`
  - `kss-issue-transfer.png`
  - `kss-issue-record.png`
  - `kss-method-triptych.png`
  - `kss-program-board.png`
  - `kss-flow-steps.png`
  - `kss-character-trainer.png`
  - `kss-character-cat.png`

## 6. Next step after download
- Place all downloaded files in:
  - `/Users/yuuki/Works/lp-100/day024/images/raw`
- Then ask Codex:
  - "raw画像をwebp最適化してLPへ組み込んで"
