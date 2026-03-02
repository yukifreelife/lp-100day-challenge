# Security Guide

This repository contains landing pages, delivery assets, and client-facing materials.
That mix makes accidental disclosure more likely than in a code-only project.

## Baseline Rules

1. Do not store live credentials in the repository.
2. Do not commit `.env` files, HAR files, private keys, or password notes.
3. Review screenshots, PDFs, JSON dumps, and exported HTML before sharing or committing.
4. Treat customer names, email addresses, phone numbers, reservation data, and tracking data as sensitive.
5. Rotate any secret that was ever committed, even if it was later removed.

## Files That Need Extra Care

- `*.har`
- `*.json` exported from browser or automation tools
- screenshots, PDFs, CSVs, and ZIPs created for delivery
- HTML snippets that contain third-party form endpoints
- docs or chat logs that mention password file paths or delivery steps

These files can contain tokens, cookies, personal data, or operational details even when they look harmless.

## Frontend Security Checklist

Before shipping or publishing a page, verify:

- external links opened with `target="_blank"` also use `rel="noopener noreferrer"` or `rel="noreferrer"`
- no untrusted data is written with `innerHTML`, `outerHTML`, or `insertAdjacentHTML`
- forms do not disable bot protection without a deliberate reason
- forms do not expose unnecessary hidden fields with personal data
- analytics and pixel scripts are only loaded when their IDs are intentionally configured
- static deploys set `Content-Security-Policy`, `Referrer-Policy`, and `X-Content-Type-Options`
- lead forms have rate limiting, CAPTCHA, or another anti-abuse control on the receiving side

## Secret Handling

- Use `.env.example`, `.env.sample`, or `.env.template` for placeholders only.
- Keep live values in a password manager or local-only environment file.
- Never place credentials in Markdown notes, chat logs, or delivery manifests.
- If a password must exist in a local text file for a short time, keep it outside Git and delete it after delivery.

## Pre-Commit Hook

This repository includes a local pre-commit hook at `.githooks/pre-commit`.

To enable it:

```sh
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit
```

What it blocks:

- staged `.env` files, HAR files, and common private key files
- staged content that looks like API keys, bearer tokens, or private keys
- staged FormSubmit markup with `_captcha=false`

The hook is intentionally conservative. If it blocks a valid case, review the file and adjust it instead of bypassing the check by default.

## Dependency Hygiene

- Run `npm audit` in `day030` when dependencies change.
- Update lockfiles intentionally, not incidentally.
- Prefer pinned, reviewed versions for build and deployment tooling.

## Incident Response

If sensitive data is committed:

1. Stop sharing the branch or archive.
2. Rotate the secret or invalidate the token.
3. Remove the data from the current tree and recent history if needed.
4. Check delivery artifacts, screenshots, and logs for the same data.
5. Record what was exposed and what was rotated.

## Reporting

If you find a security issue in this repository, treat it as private until the affected data, endpoint, or workflow has been reviewed and fixed.
