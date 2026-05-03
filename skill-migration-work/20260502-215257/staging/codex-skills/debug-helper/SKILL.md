---
name: "debug-helper"
description: "This skill should be used when the user asks to \"debug this\", \"fix this error\", \"investigate issue\", \"troubleshoot\", \"find the bug\", or encounters errors, exceptions, unexpected behavior, crashes, or needs help diagnosing and fixing problems in code."
---

## Source Metadata

The source skill included additional metadata. It is preserved here for migration traceability.

```yaml
version: 1.0.0
```

# Debug Helper

Systematic debugging methodology for identifying, diagnosing, and fixing issues.

## Debugging Process

### 1. Understand the Problem
- What is the expected behavior?
- What is the actual behavior?
- What error message is shown?
- When does the issue occur?
- Can you reproduce it consistently?

### 2. Gather Information
- Error messages and stack traces
- Console output
- Network requests/responses
- Application state at failure
- Recent code changes

### 3. Form Hypotheses
- What could cause this behavior?
- Which components are involved?
- What changed recently?

### 4. Test Hypotheses
- Add logging/profiling
- Use debugger breakpoints
- Create minimal reproduction
- Test potential fixes

### 5. Implement Fix
- Make targeted changes
- Test the fix
- Verify no regressions

## Common Error Patterns

### JavaScript/TypeScript Errors

#### TypeError: Cannot read property 'X' of undefined
```javascript
// Problem: Trying to access property of undefined/null
const user = getUser();
console.log(user.name); // Error if user is null

// Fix: Optional chaining or null check
console.log(user?.name);
// or
if (user) {
  console.log(user.name);
}
```

#### ReferenceError: X is not defined
```javascript
// Problem: Variable or function not in scope
console.log(myVariable);

// Fix: Declare the variable
const myVariable = 'value';
console.log(myVariable);
```

#### SyntaxError: Unexpected token
```javascript
// Problem: Invalid syntax
const obj = { name: 'John', };

// Fix: Remove trailing comma or check syntax
const obj = { name: 'John' };
```

#### Promise rejection unhandled
```javascript
// Problem: Not handling promise rejection
fetch('/api/data').then(data => console.log(data));

// Fix: Add error handling
fetch('/api/data')
  .then(data => console.log(data))
  .catch(error => console.error('Fetch failed:', error));

// or with async/await
try {
  const data = await fetch('/api/data');
} catch (error) {
  console.error('Fetch failed:', error);
}
```

### Python Errors

#### AttributeError: 'NoneType' object has no attribute 'X'
```python
# Problem: Calling method on None
user = get_user()
print(user.name)  # Error if user is None

# Fix: Check for None
user = get_user()
if user:
    print(user.name)
# or use walrus operator
if user := get_user():
    print(user.name)
```

#### KeyError: 'X'
```python
# Problem: Accessing non-existent dictionary key
user = {'name': 'John'}
print(user['email'])  # Error

# Fix: Use .get() with default
print(user.get('email', 'not provided'))
# or check first
if 'email' in user:
    print(user['email'])
```

#### IndentationError
```python
# Problem: Inconsistent indentation
def my_function():
print('hello')  # Error

# Fix: Proper indentation
def my_function():
    print('hello')
```

### Network Errors

#### CORS Error
```
Access to fetch at 'X' from origin 'Y' has been blocked by CORS policy
```

**Fixes:**
1. Configure server to allow your origin
2. Use proxy in development
3. Ensure credentials are included if needed

```javascript
// Server-side (Express)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

// Client-side: Use proxy in development
// vite.config.js
export default {
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};
```

#### Timeout Errors
```
Error: Request timeout after 30000ms
```

**Fixes:**
1. Increase timeout
2. Check server performance
3. Optimize the request/response
4. Implement retry logic

```javascript
// Increase timeout
fetch(url, { signal: AbortSignal.timeout(60000) });

// Retry logic
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fetch(url);
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
}
```

## Debugging Techniques

### 1. Console Logging

```javascript
// Strategic logging
console.log('Starting function');
console.log('Input:', data);
console.log('After processing:', result);
console.log('Final output:', output);

// Better: Use labels
console.log('Before transform:', { data });
const transformed = transform(data);
console.log('After transform:', { transformed });

// Table for objects
console.table(users);

// Group related logs
console.group('User processing');
console.log('User ID:', user.id);
console.log('Permissions:', user.permissions);
console.groupEnd();

// Conditional logging
const DEBUG = true;
if (DEBUG) console.log('Debug info:', data);

// Count executions
console.count('Function calls');

// Time operations
console.time('Operation');
// ... do work
console.timeEnd('Operation');
```

### 2. Debugging Statements

```python
# Python debugging
import logging

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

logger.debug('Variable value: %s', variable)
logger.info('Processing started')
logger.warning('Unexpected value: %s', value)
logger.error('Error occurred: %s', error)

# Debug with breakpoint (Python 3.7+)
breakpoint()  # Drops into debugger

# Or use pdb
import pdb; pdb.set_trace()
```

### 3. Source Maps

For compiled/minified code:
- Ensure source maps are generated
- Use them in browser DevTools
- Enable in production only when debugging

```javascript
// webpack.config.js
devtool: 'source-map'  // or 'eval-source-map' for dev
```

### 4. Browser DevTools

**Sources Panel:**
- Set breakpoints (click line number)
- Conditional breakpoints (right-click → Add conditional breakpoint)
- Step through code (F10/F11)
- Inspect variables (hover over them)
- Watch expressions
- Call stack

**Network Panel:**
- See all requests
- Inspect headers
- View responses
- Check timing
- Filter by type

**Console:**
- Execute code in context
- Access global variables
- Test snippets
- Clear with `console.clear()`

### 5. Node.js Debugging

```bash
# Debug with Chrome DevTools
node --inspect script.js

# Debug with built-in debugger
node debug script.js

# Or use VS Code debugger (launch.json)
{
  "type": "node",
  "request": "launch",
  "name": "Launch Program",
  "program": "${workspaceFolder}/script.js"
}
```

## Debugging Checklist

### Before Starting Debugging
- [ ] Reproduce the issue consistently
- [ ] Identify exact error message
- [ ] Note steps to reproduce
- [ ] Check browser console for errors
- [ ] Check server logs
- [ ] Review recent changes

### During Debugging
- [ ] Use binary search (comment out half, test, repeat)
- [ ] Add strategic logging
- [ ] Verify assumptions about data types
- [ ] Check for async timing issues
- [ ] Verify data flow through the system

### After Finding Bug
- [ ] Understand root cause
- [ ] Write test that reproduces bug
- [ ] Implement minimal fix
- [ ] Verify fix works
- [ ] Check for similar issues
- [ ] Update documentation

## Common Issues by Category

### Async/Await Issues

```javascript
// Problem: Not awaiting
async function fetchAll() {
  const user = fetchUser();  // Missing await
  const posts = fetchPosts();
  return { user, posts };
}

// Fix: Await the promises
async function fetchAll() {
  const user = await fetchUser();
  const posts = await fetchPosts();
  return { user, posts };
}

// Or run in parallel
async function fetchAll() {
  const [user, posts] = await Promise.all([
    fetchUser(),
    fetchPosts()
  ]);
  return { user, posts };
}
```

### Race Conditions

```javascript
// Problem: Dependent async operations
let data;
fetchData().then(result => { data = result; });
console.log(data);  // undefined - hasn't loaded yet

// Fix: Wait for data
async function main() {
  const data = await fetchData();
  console.log(data);
}
```

### State Management Issues

```javascript
// Problem: Stale closure
function createCounter() {
  let count = 0;
  return () => {
    setTimeout(() => {
      console.log(count);  // Always shows initial value
    }, 1000);
  };
}

// Fix: Capture current value
function createCounter() {
  let count = 0;
  return () => {
    const currentCount = count;
    setTimeout(() => {
      console.log(currentCount);
    }, 1000);
  };
}
```

### Memory Leaks

```javascript
// Common causes:
1. Event listeners not removed
2. Timers not cleared
3. References in closures
4. DOM nodes retained

// Fix: Cleanup properly
useEffect(() => {
  const handler = () => console.log('event');
  element.addEventListener('click', handler);

  // Cleanup
  return () => {
    element.removeEventListener('click', handler);
  };
}, []);
```

## Error Message Analysis

### Stack Trace Reading

```
Error: Cannot read property 'name' of undefined
    at getUserInfo (/app/src/user.js:25:10)
    at processUser (/app/src/processor.js:42:5)
    at main (/app/src/index.js:10:3)
```

**Analysis:**
1. Error occurred in `getUserInfo` at line 25 of `user.js`
2. Called by `processUser` at line 42 of `processor.js`
3. Which was called by `main` at line 10 of `index.js`

**Action:** Check `user.js:25` - what is undefined there?

### Creating Useful Error Messages

```javascript
// BAD: Generic error
throw new Error('Failed');

// GOOD: Specific error with context
throw new Error(`Failed to fetch user ${userId}: ${response.statusText}`);

// BETTER: Error with details and suggestions
class UserFetchError extends Error {
  constructor(userId, statusCode) {
    super(`Failed to fetch user ${userId} (HTTP ${statusCode})`);
    this.name = 'UserFetchError';
    this.userId = userId;
    this.statusCode = statusCode;
    this.suggestion = statusCode === 404
      ? 'User may not exist. Check the ID.'
      : 'Server error. Try again later.';
  }
}
```

## Remote Debugging

### Server-Side Issues

```bash
# SSH into server
ssh user@server

# Check logs
tail -f /var/log/app/error.log

# Monitor resources
htop

# Check running processes
ps aux | grep node

# Network debugging
netstat -tulpn

# For Docker logs
docker logs -f container-name
```

### Client-Side Issues

- Use browser DevTools (even on mobile via remote debugging)
- Check console on physical devices
- Verify device/network compatibility
- Test on different browsers/versions

## Prevention Strategies

1. **Type Safety:** Use TypeScript to catch errors at compile time
2. **Input Validation:** Always validate external input
3. **Error Boundaries:** Catch errors gracefully in UI
4. **Logging:** Log errors with context for debugging
5. **Monitoring:** Use error tracking (Sentry, etc.)
6. **Testing:** Write tests that catch common bugs

## When to Use This Skill

Activate this skill when:
- Encountering errors or exceptions
- Unexpected behavior occurs
- Performance issues arise
- Features aren't working as expected
- Crashes or hangs happen
- Need to diagnose production issues
- Investigating bug reports
