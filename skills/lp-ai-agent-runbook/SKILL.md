---
name: lp-ai-agent-runbook
description: Build and deliver daily LP challenge outputs end-to-end with AI agents only. Use when starting a new day directory from the previous day, preparing client-role completion/payment messages, generating WordPress Gutenberg-ready HTML, and updating README/chat handoff files.
---

# LP AI Agent Runbook

Follow this workflow for `dayXXX` LP production.

## Workflow

1. Read previous day context:
   - `<prev_day>/README.md`
   - `<prev_day>/chats/chat_resume.md`
2. Bootstrap the new day directory:
   - `./skills/lp-ai-agent-runbook/scripts/bootstrap_day.sh <prev_day> <new_day>`
3. Build the new LP:
   - Edit `<new_day>/index.html` and `<new_day>/styles.css`
   - Keep responsive behavior for desktop and mobile
4. Generate WordPress delivery files:
   - `cd <new_day> && ./scripts/build-wp-custom-html.sh <WP_BASE_URL>`
5. Generate client-role ops log:
   - `./skills/lp-ai-agent-runbook/scripts/write_client_ops.sh <new_day> "<lp_title>" "<preview_url>" "<reward_amount>"`
6. Update documentation:
   - `<new_day>/README.md`
   - `<new_day>/chats/chat_resume.md`
7. Run a placeholder sanity check:
   - `rg -n "TODO|TBD|PLACEHOLDER" <new_day>`

## Required Outputs

- `<new_day>/index.html`
- `<new_day>/styles.css`
- `<new_day>/wp-custom-html-gutenberg-code-editor.html`
- `<new_day>/chats/client_ops.md`
- `<new_day>/README.md`
- `<new_day>/chats/chat_resume.md`

## References

- `references/client-message-templates.md`
- `references/done-criteria.md`
