---
name: code-review
description: This skill should be used when the user asks to "review code", "check code quality", "analyze this code", "find bugs", "refactor this", "code inspection", or wants feedback on code structure, patterns, maintainability, performance, or best practices. Also use when reviewing pull requests or evaluating implementation approaches.
version: 1.0.0
---

# Code Review

Comprehensive code analysis for quality, bugs, performance, and best practices.

## Review Dimensions

### 1. Correctness
- Does the code do what it's supposed to do?
- Edge cases handled properly?
- Error handling in place?
- Input validation present?

### 2. Readability
- Clear variable/function names?
- Proper code organization?
- Helpful comments where needed?
- Consistent formatting?

### 3. Maintainability
- Easy to modify?
- Proper separation of concerns?
- DRY principle followed?
- Testable structure?

### 4. Performance
- Efficient algorithms?
- No unnecessary computations?
- Proper data structures used?
- Memory considerations addressed?

### 5. Security
- Input sanitization?
- No sensitive data exposure?
- Proper authentication/authorization?
- Safe error messages?

## Common Issues to Check

### Code Smells

| Smell | Description | Fix |
|-------|-------------|-----|
| Long Method | Function too long | Extract smaller functions |
| Large Class | Class doing too much | Split responsibilities |
| Duplicate Code | Repeated logic | Extract to function/constant |
| Magic Numbers | Unexplained numbers | Use named constants |
| Dead Code | Unused code | Remove |
| Comments | Over-commented | Let code self-document |

### Bug Patterns

```javascript
// 1. Null/Undefined dereference
const user = getUser();
console.log(user.name);  // CRASH if user is null

// GOOD: Check first
const user = getUser();
console.log(user?.name);

// 2. Async/await errors
async function fetchData() {
  const data = await fetch(url);
  return data.json();  // Not awaited!
}

// GOOD: Await the promise
async function fetchData() {
  const data = await fetch(url);
  return await data.json();
}

// 3. Loop with async
for (const item of items) {
  process(item);  // Not awaited
}

// GOOD: Use for...of with await
for (const item of items) {
  await process(item);
}

// 4. Mutable default parameters
function appendTo(arr = []) {
  arr.push(1);
  return arr;
}
// BAD: Same array reused across calls

// GOOD: Create new array
function appendTo(arr = []) {
  return [...arr, 1];
}

// 5. Equality coercion
if (value == "0")  // Coerces types

// GOOD: Strict equality
if (value === "0")

// 6. Missing return
function calculateTotal(items) {
  items.forEach(item => total += item.price);
  // No return!
}

// GOOD: Return value
function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price, 0);
}
```

## Review Checklist

### Function Level
- [ ] Single responsibility?
- [ ] Clear name describing purpose?
- [ ] Appropriate length (< 50 lines)?
- [ ] Parameters reasonable count (< 4)?
- [ ] Returns consistent type?
- [ ] Error handling present?

### File/Module Level
- [ ] Clear purpose?
- [ ] Exports well-defined API?
- [ ] Internal logic encapsulated?
- [ ] Dependencies minimal?
- [ ] No circular dependencies?

### Architecture
- [ ] Separation of concerns?
- [ ] Layers properly organized?
- [ ] Interfaces defined?
- [ ] Dependency direction correct?
- [ ] No tight coupling?

### Testing
- [ ] Tests exist for critical paths?
- [ ] Edge cases covered?
- [ ] Error cases tested?
- [ ] Tests are readable?

## Performance Considerations

### Common Performance Issues

```javascript
// 1. Unnecessary re-renders (React)
function Component({ items }) {
  return <div>{items.map(renderItem)}</div>;
}
// On every parent render, items.map creates new array

// GOOD: Memoize
const memoizedItems = useMemo(() => items.map(renderItem), [items]);

// 2. Large bundle imports
import _ from 'lodash';  // Entire library

// GOOD: Import specific functions
import { debounce } from 'lodash';

// 3. Inefficient loops
// BAD: O(n²) nested loop
for (let i = 0; i < items.length; i++) {
  for (let j = 0; j < otherItems.length; j++) {
    if (items[i].id === otherItems[j].id) { ... }
  }
}

// GOOD: Use Map for O(n) lookup
const otherMap = new Map(otherItems.map(item => [item.id, item]));
for (const item of items) {
  const match = otherMap.get(item.id);
  if (match) { ... }
}

// 4. Unintentional object creation
function render() {
  const style = { color: 'red', fontSize: '14px' };  // New object each call
  return <div style={style}>...</div>;
}

// GOOD: Move outside function
const STYLE = { color: 'red', fontSize: '14px' };
function render() {
  return <div style={STYLE}>...</div>;
}

// 5. Missing debouncing/throttling
window.addEventListener('resize', handleResize);

// GOOD: Debounce expensive handlers
window.addEventListener('resize', debounce(handleResize, 100));
```

## Refactoring Patterns

### Extract Function

```javascript
// BEFORE
function processOrder(order) {
  // Validation
  if (!order.id || !order.items || order.items.length === 0) {
    throw new Error('Invalid order');
  }
  // Processing
  const total = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = total * 0.1;
  const grandTotal = total + tax;
  // Notification
  emailService.send(order.customerEmail, `Order total: ${grandTotal}`);
  return grandTotal;
}

// AFTER
function processOrder(order) {
  validateOrder(order);
  const total = calculateTotal(order);
  notifyCustomer(order.customerEmail, total);
  return total;
}

function validateOrder(order) {
  if (!order.id || !order.items || order.items.length === 0) {
    throw new Error('Invalid order');
  }
}

function calculateTotal(order) {
  const subtotal = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return subtotal * 1.1; // Including tax
}

function notifyCustomer(email, total) {
  emailService.send(email, `Order total: ${total}`);
}
```

### Replace Magic Numbers

```javascript
// BEFORE
if (status === 1) { ... }
setTimeout(callback, 5000);

// AFTER
const STATUS_PENDING = 1;
const POLL_INTERVAL_MS = 5000;

if (status === STATUS_PENDING) { ... }
setTimeout(callback, POLL_INTERVAL_MS);
```

### Early Return Pattern

```javascript
// BEFORE
function processUser(user) {
  let result;
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        result = process(user);
      } else {
        result = null;
      }
    } else {
      result = null;
    }
  } else {
    result = null;
  }
  return result;
}

// AFTER
function processUser(user) {
  if (!user) return null;
  if (!user.isActive) return null;
  if (!user.hasPermission) return null;
  return process(user);
}
```

## Language-Specific Patterns

### JavaScript/TypeScript

- Use `const` by default, `let` when reassignment needed
- Prefer `===` over `==`
- Use optional chaining `?.` and nullish coalescing `??`
- Leverage async/await over promise chains
- Use JSDoc/TSDoc for function documentation
- Type annotations for public APIs

### Python

- Follow PEP 8 style guide
- Use type hints for function signatures
- Leverage context managers (`with` statements)
- Prefer list comprehensions over map/filter
- Use f-strings for formatting
- Docstrings for modules, classes, functions

### Rust

- Handle Results properly, don't `.unwrap()` in production
- Use `?` operator for error propagation
- Leverage borrow checker, avoid unnecessary clones
- Prefer iterators over loops
- Use meaningful error types

## Review Response Format

### Positive Feedback First
Start with what's working well:
- Good pattern usage
- Clear code structure
- Proper error handling
- Good naming

### Issues by Priority

**Critical:** Must fix before merge
- Bugs that break functionality
- Security vulnerabilities
- Performance regressions
- Breaking changes

**Important:** Should fix soon
- Code smells
- Missing error handling
- Unclear code that needs comments
- Minor performance improvements

**Nice to Have:** Consider for later
- Style inconsistencies
- Minor refactoring opportunities
- Additional test coverage
- Documentation improvements

### Actionable Suggestions

For each issue, provide:
1. **Problem**: What's wrong
2. **Why it matters**: Impact
3. **Solution**: How to fix (with example)
4. **Priority**: Critical/Important/Nice to have

## Example Review

### Before
```javascript
function d(u) {
  var x = u.map(e => e.p * e.q).reduce((a, b) => a + b, 0);
  return x > 100 ? x * 0.9 : x;
}
```

### Feedback

**Issues:**
1. **Naming**: `d`, `u`, `x`, `e`, `p`, `q` are unclear
2. **Magic number**: `100` and `0.9` need context
3. **Missing validation**: No check for null/undefined input

### After
```javascript
/**
 * Calculate order total with bulk discount
 * @param {Array<{price: number, quantity: number}>} items
 * @returns {number} Total after discount if applicable
 */
function calculateOrderTotal(items) {
  if (!items?.length) return 0;

  const BULK_DISCOUNT_THRESHOLD = 100;
  const BULK_DISCOUNT_PERCENTAGE = 0.9;

  const subtotal = items.reduce((sum, item) =>
    sum + (item.price * item.quantity), 0
  );

  return subtotal > BULK_DISCOUNT_THRESHOLD
    ? subtotal * BULK_DISCOUNT_PERCENTAGE
    : subtotal;
}
```

## Best Practices

1. **Be constructive**: Focus on improvement, not criticism
2. **Explain why**: Don't just say what to fix, explain the reasoning
3. **Provide examples**: Show before/after code
4. **Consider context**: Is this prototype code or production?
5. **Acknowledge trade-offs**: Sometimes good enough is fine
6. **Ask questions**: Clarify intent before suggesting changes
7. **Praise good patterns**: Reinforce positive practices

## When to Use This Skill

Activate this skill when:
- Reviewing pull requests
- Before merging code
- Refactoring existing code
- Evaluating code quality
- Learning code patterns
- Onboarding to new codebase
- Pair programming
- Debugging complex issues
