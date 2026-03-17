# Claude Code Configuration

## Project Overview
LP Portfolio 100 - LP制作100件チャレンジ（LP案件獲得向けポートフォリオサイトの再構築）

### Project Phases
- **day001〜day040**: LP制作学習・実験フェーズ（架空案件主体）
- **day041〜day045**: 実案件（個人LP）のクライアントワーク
- **day046〜day050**: 実案件（製造業向け採用支援）の標準化されたクライアントワーク

### Directory Structure Evolution
- **Early phase (day001〜day040)**: Simple structure with index.html, styles.css, images/
- **Late phase (day046〜)**: Standard clientwork structure with CLIENT_ROLE_PROMPT.md, logs/, client/, client_messages/, ops/, analysis/, current/

## Local Development
```bash
# Start local server
python3 -m http.server 8080
```
Then open `http://localhost:8080` in browser.

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript
- Python http.server (for local dev)

## Core Files
- `index.html` - Portfolio layout (FV reel / Featured Cases / All Works / Contact)
- `styles.css` - Design, animation, responsive
- `script.js` - Works data management, reel generation, case rendering, filter search
- `README.md` - Project documentation

## Adding New Works
1. Add entry to `worksData` in `script.js`
2. Set: `day`, `title`, `category`, `industry`, `focus`, `summary`, `metric`, `tech`, `url`
3. Categories auto-update to filters
4. FV reel, Featured Cases, All Works render from same data

## Protected Paths (Read AGENTS.md)
- `day046+/CLIENT_ROLE_PROMPT.md` (Standard structure for clientwork days)
- `day046+/logs/` (Handoff / restart brief for clientwork days)
- `lp100-progress/daily/` (All daily progress logs: day001.md〜)
- `template/clientwork-checklists/`
- `template/project-starter/`

**Note**: Standard clientwork structure was introduced from day046. Earlier days use a simpler structure for LP learning/exploration.

## Protection Rules
- Do not delete protected files/directories
- Do not overwrite protected files with templates
- Read current contents before editing protected files
- Confirm with user before high-risk operations
- Use `day046+/logs/HANDOFF_LOG.md` for decisions, risks, changes (clientwork days)

## Progress Logging
- Daily progress logs are centralized in `lp100-progress/daily/`
- Format evolved from simple LP learning logs (day001〜day040) to detailed clientwork logs (day041〜day050)
- README.md in day directories is for project-specific context and handoff, not for daily progress logging
