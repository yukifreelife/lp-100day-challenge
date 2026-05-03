---
name: test-generation
description: This skill should be used when the user asks to "write tests", "generate tests", "create unit tests", "add test coverage", "test this code", "write test cases", or needs comprehensive test suites for functions, components, APIs, or modules. Also use when setting up testing frameworks or improving existing tests.
version: 1.0.0
---

# Test Generation

Comprehensive test creation for unit tests, integration tests, and end-to-end tests.

## Testing Philosophy

### The Testing Pyramid

```
        E2E Tests (Few)
       /              \
    Integration Tests (Some)
   /                      \
Unit Tests (Many)
```

- **Unit Tests**: Test individual functions/components in isolation
- **Integration Tests**: Test how modules work together
- **E2E Tests**: Test complete user workflows

### Principles

1. **FAST**: Tests should run quickly
2. **ISOLATED**: Each test should be independent
3. **REPEATABLE**: Same results every time
4. **SELF-VALIDATING**: Clear pass/fail outcome
5. **TIMELY**: Write tests alongside code

## Test Framework Setup

### JavaScript/TypeScript

```bash
# Jest (popular, all-in-one)
npm install --save-dev jest @types/jest ts-jest

# Vitest (faster, Vite native)
npm install --save-dev vitest @vitest/ui

# Testing Library (React)
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

**Jest Config (jest.config.js):**
```javascript
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/__tests__/**/*.test.ts', '**/?(*.)+(spec|test).ts'],
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
};
```

### Python

```bash
# pytest (recommended)
pip install pytest pytest-cov pytest-asyncio pytest-mock

# Coverage
pip install coverage
```

**pytest.ini:**
```ini
[pytest]
testpaths = tests
python_files = test_*.py
python_classes = Test*
python_functions = test_*
addopts = --cov=src --cov-report=html --cov-report=term
```

## Unit Testing Patterns

### Test Structure: AAA Pattern

```javascript
describe('functionName', () => {
  it('should do something when condition is met', () => {
    // Arrange - Set up test data
    const input = { value: 42 };
    const expected = 84;

    // Act - Execute the function
    const result = doubleValue(input.value);

    // Assert - Verify the result
    expect(result).toBe(expected);
  });
});
```

### Test Categories

#### 1. Happy Path (Expected Behavior)
```javascript
it('should calculate total with valid items', () => {
  const items = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 1 }
  ];
  const result = calculateTotal(items);
  expect(result).toBe(25);
});
```

#### 2. Edge Cases
```javascript
it('should handle empty array', () => {
  const result = calculateTotal([]);
  expect(result).toBe(0);
});

it('should handle null input', () => {
  const result = calculateTotal(null);
  expect(result).toBe(0);
});

it('should handle negative quantities', () => {
  const items = [{ price: 10, quantity: -1 }];
  expect(() => calculateTotal(items)).toThrow();
});
```

#### 3. Error Cases
```javascript
it('should throw when items is undefined', () => {
  expect(() => calculateTotal(undefined)).toThrow('Invalid input');
});

it('should reject invalid price', () => {
  const items = [{ price: 'invalid', quantity: 1 }];
  expect(() => calculateTotal(items)).toThrow();
});
```

## Common Testing Scenarios

### Testing Async Code

```javascript
// Callbacks
it('should fetch data with callback', (done) => {
  fetchData((data) => {
    expect(data).toBeDefined();
    done();
  });
});

// Promises
it('should fetch data successfully', async () => {
  const result = await fetchData();
  expect(result).toEqual({ id: 1, name: 'Test' });
});

// Error handling
it('should handle fetch errors', async () => {
  await expect(fetchData(null)).rejects.toThrow('Invalid ID');
});
```

### Testing React Components

```javascript
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

describe('UserForm', () => {
  it('should render form fields', () => {
    render(<UserForm />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('should submit form with valid data', async () => {
    const onSubmit = jest.fn();
    render(<UserForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'John Doe' }
    });
    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({ name: 'John Doe' });
    });
  });

  it('should show validation errors', () => {
    render(<UserForm />);
    fireEvent.click(screen.getByText('Submit'));

    expect(screen.getByText('Name is required')).toBeInTheDocument();
  });
});
```

### Testing API Endpoints

```javascript
import request from 'supertest';
import app from '../app';

describe('POST /api/users', () => {
  it('should create user with valid data', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'John', email: 'john@example.com' })
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('John');
  });

  it('should reject invalid email', async () => {
    await request(app)
      .post('/api/users')
      .send({ name: 'John', email: 'invalid' })
      .expect(400);
  });

  it('should reject duplicate email', async () => {
    await request(app)
      .post('/api/users')
      .send({ name: 'Jane', email: 'john@example.com' })
      .expect(409);
  });
});
```

### Testing with Mocks

```javascript
import { userService } from '../services';

// Mock external dependency
jest.mock('../services', () => ({
  userService: {
    getUser: jest.fn(),
  }
}));

describe('UserProfile', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display user data', async () => {
    userService.getUser.mockResolvedValue({
      id: 1, name: 'John', email: 'john@example.com'
    });

    const result = await fetchUserProfile(1);
    expect(result.name).toBe('John');
    expect(userService.getUser).toHaveBeenCalledWith(1);
  });

  it('should handle user not found', async () => {
    userService.getUser.mockResolvedValue(null);
    await expect(fetchUserProfile(999)).rejects.toThrow('User not found');
  });
});
```

## Python Testing Examples

### Using Pytest

```python
import pytest
from module import calculate_total, Order

# Fixtures for reusable test data
@pytest.fixture
def sample_items():
    return [
        {'price': 10, 'quantity': 2},
        {'price': 5, 'quantity': 1}
    ]

@pytest.fixture
def sample_order(sample_items):
    return Order(items=sample_items)

# Tests
class TestCalculateTotal:
    def test_valid_items(self, sample_items):
        assert calculate_total(sample_items) == 25

    def test_empty_list(self):
        assert calculate_total([]) == 0

    def test_negative_quantity_raises_error(self):
        items = [{'price': 10, 'quantity': -1}]
        with pytest.raises(ValueError):
            calculate_total(items)

# Async tests
@pytest.mark.asyncio
async def test_fetch_user():
    user = await fetch_user(1)
    assert user.id == 1
    assert user.name == 'John'

# Mocking
from unittest.mock import patch, AsyncMock

@patch('module.external_api_call', new_callable=AsyncMock)
async def test_external_service(mock_api):
    mock_api.return_value = {'status': 'success'}
    result = await call_external_service()
    assert result['status'] == 'success'
    mock_api.assert_called_once()
```

## Coverage Goals

| Type | Minimum Coverage | Recommended |
|------|------------------|-------------|
| Critical Path | 100% | 100% |
| Business Logic | 90% | 95% |
| Utility Functions | 80% | 90% |
| UI Components | 70% | 80% |
| Overall | 70% | 80% |

## Test Naming Conventions

### Good Names
- `should return 0 for empty array`
- `should throw ValidationError when email is invalid`
- `should calculate discount for orders over $100`
- `should update cache after fetching data`

### Bad Names
- `test1`
- `testItWorks`
- `testFunction`

## Testing Best Practices

### DO ✅
- Test one thing per test
- Use descriptive test names
- Follow AAA pattern
- Test edge cases
- Mock external dependencies
- Keep tests fast
- Make tests independent

### DON'T ❌
- Test multiple scenarios in one test
- Use vague test names
- Test implementation details
- Skip edge cases
- Call real external APIs
- Make slow tests
- Create test dependencies

## Integration Testing

```javascript
describe('User Registration Flow', () => {
  it('should complete full registration', async () => {
    // 1. Create user
    const user = await createUser({
      email: 'test@example.com',
      password: 'SecurePass123!'
    });
    expect(user).toHaveProperty('id');

    // 2. Verify email sent
    const email = await getLastEmail();
    expect(email.to).toBe('test@example.com');
    expect(email.subject).toContain('Verify');

    // 3. Click verification link
    await verifyEmail(email.verificationToken);
    const verifiedUser = await getUser(user.id);
    expect(verifiedUser.verified).toBe(true);

    // 4. Login
    const session = await login('test@example.com', 'SecurePass123!');
    expect(session).toHaveProperty('token');
  });
});
```

## Test Generation Checklist

For each function/component to test:

- [ ] Happy path (normal operation)
- [ ] Empty/null/undefined inputs
- [ ] Boundary values (0, -1, max, min)
- [ ] Invalid inputs (wrong types, malformed data)
- [ ] Error conditions (network errors, timeouts)
- [ ] Concurrent operations (race conditions)
- [ ] Edge cases specific to the domain

## When to Use This Skill

Activate this skill when:
- Writing new code that needs tests
- Increasing test coverage
- Debugging test failures
- Setting up testing infrastructure
- Reviewing test quality
- Refactoring with safety net
- Before deploying to production
