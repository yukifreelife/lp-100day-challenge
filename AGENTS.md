# AGENTS.md

## Purpose
- Keep operational rules for this workspace in one place.
- Reduce accidental deletion, overwrite, or template replacement of important project files.

## Protected Paths
- `day*/CLIENT_ROLE_PROMPT.md`
- `day*/logs/`
- `lp100-progress/daily/`
- `template/clientwork-checklists/`
- `template/project-starter/`

## Protection Rules
- Do not delete protected files or directories.
- Do not overwrite protected files with template placeholders or abbreviated versions.
- Do not replace protected files by copying from another day or template unless the user explicitly asks for that exact action.
- Before editing a protected file, read the current contents first and preserve project-specific details.
- If a protected file appears to have been replaced, truncated, or templated accidentally, stop and verify with the user before proceeding, unless the user explicitly asked for restoration.

## High-Risk Operations
- Before any action that could remove or replace data in protected paths, explicitly confirm with the user.
- Treat these actions as high risk:
  - deleting files or directories
  - moving files out of protected paths
  - copying template files over existing protected files
  - bulk renames affecting protected paths

## Client Role File Rule
- `day*/CLIENT_ROLE_PROMPT.md` is a protected source file for client-role settings.
- If a day directory already has a detailed `CLIENT_ROLE_PROMPT.md`, do not simplify it to a template outline.
- If a new day directory is created from a starter template, preserve or restore the detailed client-role file when one already exists for that active project.

## Progress Log Rule
- `lp100-progress/daily/` is a protected log archive.
- Update existing daily files carefully and keep the established format.
- Do not delete or reset prior daily logs.

## Handoff Rule
- Use `day*/logs/HANDOFF_LOG.md` for decisions, risks, changes, and next actions.
- When work is paused and will resume in a later day directory, create or update a restart brief in the relevant `logs/` directory.
