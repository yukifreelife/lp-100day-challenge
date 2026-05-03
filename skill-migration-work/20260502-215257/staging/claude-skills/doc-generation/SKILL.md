---
name: doc-generation
description: This skill should be used when the user asks to "generate documentation", "write README", "create API docs", "document this code", "add comments", "generate JSDoc", "create changelog", or needs comprehensive documentation for projects, APIs, components, or modules. Also use when improving existing documentation.
version: 1.0.0
---

# Documentation Generation

Comprehensive documentation creation for code, APIs, and projects.

## Documentation Types

### 1. Project Documentation
- README.md
- CONTRIBUTING.md
- CHANGELOG.md
- LICENSE
- CODE_OF_CONDUCT.md

### 2. Code Documentation
- Inline comments
- Function documentation (JSDoc, TSDoc, docstrings)
- Type definitions
- Architecture documentation

### 3. API Documentation
- Endpoint descriptions
- Request/response schemas
- Authentication methods
- Error codes
- Usage examples

### 4. User Documentation
- Getting started guides
- Tutorials
- Configuration guides
- FAQ
- Troubleshooting

## README.md Structure

### Essential Sections

```markdown
# Project Name

<!-- Badges: build status, version, license -->

## Description
Brief overview of what the project does and why it exists.

## Features
- Feature 1
- Feature 2
- Feature 3

## Installation
\`\`\`bash
npm install my-project
\`\`\`

## Usage
Basic example of how to use the project.

## Configuration
Environment variables and config options.

## API Reference
Link to detailed API docs.

## Examples
More detailed usage examples.

## Contributing
Guidelines for contributors.

## License
License information.
```

### Complete Template

```markdown
# [Project Name]

[![Build Status](https://img.shields.io/github/actions/workflow/status/user/repo/build.svg)](https://github.com/user/repo/actions)
[![NPM Version](https://img.shields.io/npm/v/package.svg)](https://www.npmjs.com/package/package)
[![License](https://img.shields.io/npm/l/package.svg)](LICENSE)

> A brief, compelling description of your project.

## 🚀 Features

- **Feature 1**: Description of key feature
- **Feature 2**: Description of key feature
- **Feature 3**: Description of key feature

## 📦 Installation

\`\`\`bash
# Using npm
npm install package-name

# Using yarn
yarn add package-name

# Using pnpm
pnpm add package-name
\`\`\`

## 📖 Quick Start

\`\`\`javascript
const package = require('package-name');

// Initialize
const app = new Package();

// Use it
app.doSomething();
\`\`\`

## ⚙️ Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `apiKey` | `string` | `undefined` | Your API key |
| `timeout` | `number` | `5000` | Request timeout in ms |
| `debug` | `boolean` | `false` | Enable debug mode |

### Environment Variables

\`\`\`bash
API_KEY=your_api_key_here
TIMEOUT=10000
DEBUG=true
\`\`\`

## 📚 API Reference

### `Package.methodName(input)`

Description of what the method does.

**Parameters:**
- `input` (`string`): Description of parameter

**Returns:** `Promise<Result>`

**Example:**
\`\`\`javascript
const result = await Package.methodName('input');
console.log(result);
\`\`\`

## 🌐 Examples

See the [examples](./examples) directory for more usage examples.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Library A
- Library B
- Contributors

## 📧 Contact

- Author: Your Name
- Email: your.email@example.com
- Twitter: @yourhandle

## 🗺️ Roadmap

- [x] Version 1.0
- [ ] Version 2.0
  - [ ] Feature A
  - [ ] Feature B
\`\`\`

## 📄 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.
```

## Code Documentation

### JavaScript/TypeScript (JSDoc/TSDoc)

```javascript
/**
 * Calculates the total price of items in a cart.
 *
 * @example
 * ```ts
 * const total = calculateCartTotal([
 *   { price: 10, quantity: 2 },
 *   { price: 5, quantity: 1 }
 * ]);
 * console.log(total); // 25
 * ```
 *
 * @param {Array<CartItem>} items - Array of cart items
 * @param {DiscountOptions} [options] - Optional discount configuration
 * @returns {number} The total price after discounts
 * @throws {ValidationError} When items array is empty
 *
 * @remarks
 * This function applies bulk discounts for orders over $100.
 * Tax is calculated based on the customer's location.
 *
 * @category Cart
 * @since 1.0.0
 */
function calculateCartTotal(
  items,
  options = { includeTax: true, discountCode: null }
) {
  // Implementation
}

/**
 * @typedef {Object} CartItem
 * @property {number} price - Item unit price
 * @property {number} quantity - Number of items
 * @property {string} [name] - Optional item name
 */

/**
 * @typedef {Object} DiscountOptions
 * @property {boolean} [includeTax=true] - Whether to include tax
 * @property {string|null} [discountCode] - Optional discount code
 */
```

### Python (Docstrings)

```python
def calculate_cart_total(items: List[CartItem], options: DiscountOptions | None = None) -> float:
    """
    Calculate the total price of items in a cart.

    This function processes a list of cart items, applies any applicable
    discounts, and returns the final total including tax if requested.

    Args:
        items: A list of CartItem objects containing price and quantity.
        options: Optional DiscountOptions for configuring tax and discounts.
            Defaults to None, which uses default settings (tax included, no discount).

    Returns:
        The total price as a float.

    Raises:
        ValidationError: If the items list is empty.
        ValueError: If any item has a negative price or quantity.

    Examples:
        >>> items = [CartItem(price=10, quantity=2)]
        >>> calculate_cart_total(items)
        22.0

        >>> calculate_cart_total(items, DiscountOptions(include_tax=False))
        20.0

    Note:
        Bulk discounts are automatically applied for orders over $100.
        The tax rate is determined by the customer's location.

    See Also:
        apply_discount: Function that handles discount application.
        calculate_tax: Function that computes tax based on location.

    Todo:
        - Add support for multiple currency formats
        - Implement tiered discount structure

    .. versionadded:: 1.0.0
    .. versionchanged:: 1.2.0
        Added support for discount codes
    """
```

## API Documentation

### OpenAPI/Swagger Format

```yaml
openapi: 3.0.0
info:
  title: My API
  version: 1.0.0
  description: API description here

paths:
  /users:
    get:
      summary: List all users
      tags:
        - Users
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
        - name: limit
          in: query
          schema:
            type: integer
            default: 10
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/User'
                  pagination:
                    $ref: '#/components/schemas/Pagination'
        '400':
          $ref: '#/components/responses/BadRequest'
        '401':
          $ref: '#/components/responses/Unauthorized'

components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
          example: 1
        name:
          type: string
          example: John Doe
        email:
          type: string
          format: email
          example: john@example.com
      required:
        - id
        - name
        - email

    Pagination:
      type: object
      properties:
        page:
          type: integer
        limit:
          type: integer
        total:
          type: integer

  responses:
    BadRequest:
      description: Bad request
      content:
        application/json:
          schema:
            type: object
            properties:
              error:
                type: string
              message:
                type: string
    Unauthorized:
      description: Unauthorized
      content:
        application/json:
          schema:
            type: object
            properties:
              error:
                type: string
                example: Unauthorized
```

## Architecture Documentation

### ADR (Architecture Decision Records)

```markdown
# ADR-001: Adopt TypeScript for Type Safety

## Status
Accepted

## Context
We need to improve code reliability and developer experience.
JavaScript's dynamic typing leads to runtime errors that could be caught earlier.

## Decision
Adopt TypeScript for all new projects and gradually migrate existing codebase.

## Consequences
**Positive:**
- Catch type errors at compile time
- Better IDE support with autocomplete
- Self-documenting code through types

**Negative:**
- Learning curve for team
- Additional build step
- More verbose code for simple cases

**Neutral:**
- Need to maintain type definitions
- Compilation step adds to build time

## Alternatives Considered
1. JSDoc with type checking
2. Flow type checker
3. Stay with JavaScript

## Related
- ADR-002: ESLint Configuration
- ADR-003: Code Style Guide
```

## CHANGELOG.md Format

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- New feature A
- New feature B

### Changed
- Updated dependency X to version 2.0

### Deprecated
- Function `oldFunction()` - use `newFunction()` instead

### Removed
- Removed deprecated module

### Fixed
- Fixed bug where Y would crash
- Fixed incorrect calculation in Z

### Security
- Fixed security vulnerability in dependency

## [1.2.0] - 2024-01-15

### Added
- Added support for custom themes
- Added export to PDF feature

### Changed
- Improved performance of data loading
- Updated UI design

## [1.1.0] - 2024-01-01

### Added
- Initial release of core features

[Unreleased]: https://github.com/user/repo/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/user/repo/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/user/repo/releases/tag/v1.1.0
```

## Inline Commenting Guidelines

### When to Add Comments

1. **EXPLAIN WHY, NOT WHAT**
```javascript
// BAD: Comments that repeat the code
// Increment counter by 1
count++;

// GOOD: Explain the reasoning
// Counter starts at 0, but we want to display 1-indexed
const displayCount = count + 1;
```

2. **COMPLEX ALGORITHMS**
```javascript
// Using Dijkstra's algorithm to find shortest path
// Time complexity: O((V + E) log V)
function findShortestPath(graph, start, end) {
  // ...
}
```

3. **WORKAROUNDS**
```javascript
// TODO: Remove this hack when library updates to v2.0
// See: https://github.com/library/repo/issues/123
const temp = JSON.parse(JSON.stringify(data));
```

4. **NON-OBVIOUS BEHAVIOR**
```javascript
// This returns undefined instead of throwing
// to maintain backward compatibility
function getConfig(key) {
  return config[key]; // No error for missing keys
}
```

### When NOT to Add Comments

```javascript
// BAD: Commenting obvious code
// Set x to 5
let x = 5;

// BAD: Redundant type info
// Create a user object
const user: User = { ... };

// GOOD: Let code speak for itself
const isActive = status === 'active';
const totalDays = weeks * 7;
```

## Documentation Tools

| Tool | Purpose | Language |
|------|---------|----------|
| JSDoc/TSDoc | Code documentation | JS/TS |
| Sphinx | Documentation generation | Python |
| Swagger/OpenAPI | API docs | All |
| Docusaurus | Static sites | All |
| MkDocs | Static sites | Python |
| TypeDoc | TypeScript docs | TypeScript |

## Best Practices

1. **Keep docs in sync with code**: Update docs when code changes
2. **Be concise**: More words ≠ better documentation
3. **Use examples**: Show, don't just tell
4. **Include diagrams**: Architecture diagrams clarify complex systems
5. **Document edge cases**: What happens when things go wrong?
6. **Maintain changelog**: Track all changes
7. **Review docs**: Treat docs like code - review and improve

## When to Use This Skill

Activate this skill when:
- Starting a new project
- Adding new features or APIs
- Onboarding new team members
- Preparing for open source release
- Creating internal knowledge base
- Writing technical specifications
- Improving code maintainability
