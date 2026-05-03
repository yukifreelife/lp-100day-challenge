---
name: security-audit
description: This skill should be used when the user asks to "check security", "security audit", "find vulnerabilities", "scan for secrets", "check dependencies", "security review", or mentions security concerns like XSS, SQL injection, authentication issues, API security, or wants to identify and fix security risks in code or dependencies.
version: 1.0.0
---

# Security Audit

Comprehensive security analysis for code, dependencies, and configurations.

## Overview

This skill provides systematic security auditing including:
- Dependency vulnerability scanning (npm, yarn, pnpm, pip, cargo)
- Secret detection (API keys, tokens, credentials)
- Code security analysis (XSS, SQL injection, command injection)
- Configuration security checks
- OWASP Top 10 coverage

## Dependency Security

### npm/Node.js Projects

```bash
# Check for vulnerabilities
npm audit

# Fix automatically
npm audit fix

# Fix with force (use with caution)
npm audit fix --force

# Check specific severity levels
npm audit --audit-level=moderate
npm audit --audit-level=high
```

### Python Projects

```bash
# Install safety checker
pip install safety

# Scan for vulnerabilities
safety check

# Use pip-audit
pip install pip-audit
pip-audit
```

### Rust Projects

```bash
# Check cargo dependencies
cargo audit
```

### Other Package Managers

| Manager | Command |
|---------|---------|
| Yarn | `yarn audit` |
| pnpm | `pnpm audit` |
| Composer | `composer audit` |
| Bundler (Ruby) | `bundle audit check` |
| Go | `go list -json -m all | nancy sleuth` |

## Secret Detection

### Common Secret Patterns

```
# API Keys
api[_-]?key|apikey|key
secret[_-]?key|secretkey

# Tokens
auth[_-]?token|access[_-]?token|refresh[_-]?token|bearer[_-]?token
jwt|json[_-]?web[_-]?token

# Credentials
password|passwd|pwd
username|user|userid

# Private Keys
private[_-]?key|ssh[_-]?key|rsa[_-]?key

# Database
database[_-]?url|db[_-]?url|connection[_-]?string
mongodb|postgres|mysql|redis

# Cloud Services
aws[_-]?access|aws[_-]?secret|azure[_-]?key
gcp[_-]?key|service[_-]?account

# Payment
stripe[_-]?secret|sk_live_|pk_live_
paypal[_-]?client|braintree
```

### Scan Commands

```bash
# Search for secrets in code
grep -r -i -E "api[_-]?key|secret|password|token" --include="*.js" --include="*.ts" --include="*.py" --include="*.env*" .

# Check for common secret files
find . -name ".env*" -o -name "*secret*" -o -name "*credentials*" -o -name "*.key" -o -name "*.pem"

# Check git history for secrets
git log --all --full-history --source -- "*.env" "*.key" "*.pem"
git log -p -S "api_key" -S "secret" -S "password"
```

### Tools for Secret Detection

```bash
# truffleHog - searches git history
pip install truffleHog
trufflehog --regex --entropy=False /path/to/repo

# gitleaks - secret scanner
brew install gitleaks
gitleaks detect

# git-secrets - prevents secrets from being committed
git secrets --install
git secrets --register-aws
```

## Code Security Analysis

### Common Vulnerabilities

#### 1. Cross-Site Scripting (XSS)

**Vulnerable Patterns:**
```javascript
// BAD: Unescaped user input
element.innerHTML = userInput;
document.write(userInput);

// GOOD: Use textContent or sanitize
element.textContent = userInput;
// or use DOMPurify
element.innerHTML = DOMPurify.sanitize(userInput);
```

#### 2. SQL Injection

**Vulnerable Patterns:**
```javascript
// BAD: String concatenation
query = "SELECT * FROM users WHERE id = " + userId;

// GOOD: Parameterized queries
query = "SELECT * FROM users WHERE id = ?";
db.query(query, [userId]);
```

#### 3. Command Injection

**Vulnerable Patterns:**
```javascript
// BAD: Unsanitized input in exec
exec("ls " + userDir);

// GOOD: Use argument arrays
exec("ls", [userDir]);
```

#### 4. Path Traversal

**Vulnerable Patterns:**
```javascript
// BAD: No validation on file paths
fs.readFile("/app/" + userPath);

// GOOD: Validate and sanitize
const safePath = path.normalize(userPath).replace(/^(\.\.(\/|\\|$))+/, '');
if (!safePath.startsWith("/app/public/")) {
  throw new Error("Invalid path");
}
```

#### 5. Insecure Deserialization

**Vulnerable Patterns:**
```javascript
// BAD: Unvalidated deserialization
const data = JSON.parse(userInput);

// GOOD: Validate schema
const data = JSON.parse(userInput);
validateSchema(data);
```

## Configuration Security

### Checklist

- [ ] `.env` files in `.gitignore`
- [ ] No hardcoded credentials in code
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] Security headers set (CSP, X-Frame-Options, etc.)
- [ ] HTTPS only in production
- [ ] Input validation on all endpoints
- [ ] Authentication/authorization implemented
- [ ] Secrets properly stored (environment variables, vault)
- [ ] Database connections use SSL/TLS

### Security Headers

```
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: no-referrer
Permissions-Policy: geolocation=(), microphone=(), camera=()
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## OWASP Top 10 Coverage

| Risk | Check |
|------|-------|
| A01 Broken Access Control | Verify auth/authorization on all routes |
| A02 Cryptographic Failures | Check for hardcoded secrets, weak encryption |
| A03 Injection | Scan for SQL/NoSQL/command injection patterns |
| A04 Insecure Design | Review authentication flows, permission models |
| A05 Security Misconfiguration | Check default credentials, verbose errors |
| A06 Vulnerable Components | Run dependency audits |
| A07 Auth Failures | Review session management, password policies |
| A08 Data Integrity Failures | Verify signed APIs, update mechanisms |
| A09 Security Logging | Ensure audit logs for sensitive actions |
| A10 SSRF | Validate URLs, restrict outbound requests |

## Audit Workflow

### 1. Dependency Scan
```bash
cd /path/to/project
npm audit  # or equivalent for other package managers
```

### 2. Secret Scan
```bash
# Check current files
grep -r -i -E "api[_-]?key|secret|password|token" \
  --include="*.js" --include="*.ts" --include="*.py" \
  --include="*.json" --include="*.yml" --include="*.yaml" .

# Check git history
git log -p --all -S "api_key" -S "secret"
```

### 3. Code Review
- Search for dangerous functions: `eval`, `exec`, `innerHTML`, `document.write`
- Check user input handling
- Review database queries
- Verify file access patterns

### 4. Configuration Review
- Check `.env` files
- Review security headers
- Verify CORS settings
- Check authentication implementation

### 5. Report Findings

For each vulnerability found:
1. **Severity**: Critical / High / Medium / Low
2. **Location**: File and line number
3. **Description**: What the vulnerability is
4. **Impact**: What could happen
5. **Remediation**: How to fix it
6. **References**: Links to documentation

## Automated Security Tools

### Recommended Tools

| Tool | Purpose | Install |
|------|---------|---------|
| `npm audit` | Dependency vulnerabilities | Built into npm |
| `safety` | Python dependency security | `pip install safety` |
| `trufflehog` | Secret detection in git | `pip install truffleHog` |
| `gitleaks` | Secret detection | `brew install gitleaks` |
| `semgrep` | Static analysis | `npm install -g semgrep` |
| `eslint-plugin-security` | JS security linting | `npm install eslint-plugin-security` |

### ESLint Security Plugin

```bash
npm install --save-dev eslint-plugin-security
```

```json
{
  "extends": ["plugin:security/recommended"]
}
```

## Best Practices

1. **Run audits regularly**: Before releases, after dependency updates
2. **Automate in CI**: Add security scans to your pipeline
3. **Fix promptly**: Address high/critical vulnerabilities immediately
4. **Keep updated**: Regularly update dependencies
5. **Use .env files**: Never commit secrets
6. **Enable security headers**: Add CSP, HSTS, etc.
7. **Implement rate limiting**: Prevent brute force attacks
8. **Log security events**: Track authentication failures, suspicious activity

## When to Use This Skill

Activate this skill when:
- Starting a new project security review
- Before deploying to production
- After adding third-party dependencies
- When handling user input/authentication
- After security incidents
- Regular security maintenance
- Compliance requirements (PCI-DSS, SOC2, etc.)
