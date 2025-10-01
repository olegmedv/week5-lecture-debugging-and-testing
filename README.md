# JavaScript Debugging & Testing with NPM

## Lecture Overview
- Introduction to Debugging
- Debugging Techniques & Tools
- Introduction to Testing
- Testing with Jest
- Hands-on Demo

---

## Part 1: Debugging Fundamentals

### What is Debugging?
Debugging is the process of identifying, analyzing, and removing errors (bugs) from your code.

**Common Types of Bugs:**
- Syntax Errors - Code that doesn't follow JavaScript grammar
- Runtime Errors - Errors that occur during execution
- Logical Errors - Code runs but produces incorrect results

---

## Debugging Techniques

### 1. Console Methods
Beyond `console.log()`, JavaScript provides several useful console methods:

```javascript
// Basic logging
console.log('Simple message');

// Warnings and errors
console.warn('This is a warning');
console.error('This is an error');

// Grouped logs
console.group('User Details');
console.log('Name: John');
console.log('Age: 30');
console.groupEnd();

// Table format
console.table([{name: 'Alice', age: 25}, {name: 'Bob', age: 30}]);

// Timing code execution
console.time('myTimer');
// ... code to measure
console.timeEnd('myTimer');
```

---

### 2. Debugger Statement
The `debugger` keyword creates a breakpoint in your code:

```javascript
function calculateTotal(price, tax) {
    debugger; // Execution pauses here when DevTools is open
    const total = price + (price * tax);
    return total;
}
```

**When to use:**
- Investigating complex logic
- Examining variable states at specific points
- Step-through code execution

---

### 3. Browser DevTools
Modern browsers provide powerful debugging tools:

**Key Features:**
- **Sources Tab** - Set breakpoints, step through code
- **Console Tab** - Execute code, view logs
- **Network Tab** - Monitor API calls
- **Performance Tab** - Identify bottlenecks

**Breakpoint Types:**
- Line breakpoints
- Conditional breakpoints
- Event listener breakpoints

---

### 4. Error Handling
Proper error handling makes debugging easier:

```javascript
try {
    // Code that might throw an error
    const data = JSON.parse(userInput);
    processData(data);
} catch (error) {
    console.error('Error occurred:', error.message);
    console.error('Stack trace:', error.stack);
} finally {
    // Cleanup code (always runs)
    console.log('Operation completed');
}
```

---

## Part 2: Introduction to Testing

### Why Test Your Code?
- **Catch bugs early** - Before they reach production
- **Confidence in changes** - Refactor without fear
- **Documentation** - Tests show how code should work
- **Better design** - Testable code is often better structured

---

### Types of Testing

**Unit Testing**
- Tests individual functions/components in isolation
- Fast and focused
- Example: Testing a single calculation function

**Integration Testing**
- Tests how multiple parts work together
- Example: Testing API calls with database

**End-to-End Testing**
- Tests complete user workflows
- Example: Testing entire checkout process

**Today's Focus: Unit Testing with Jest**

---

## Part 3: Testing with Jest

### What is Jest?
Jest is a popular JavaScript testing framework developed by Facebook.

**Features:**
- Zero configuration for most projects
- Fast parallel test execution
- Built-in code coverage
- Excellent error messages
- Mocking capabilities

---

### Setting Up Jest

**Installation:**
```bash
npm init -y
npm install --save-dev jest
```

**Configure package.json:**
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

---

### Writing Your First Test

**File Structure:**
```
project/
  ├── src/
  │   └── calculator.js
  └── tests/
      └── calculator.test.js
```

**calculator.js:**
```javascript
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };
```

---

**calculator.test.js:**
```javascript
const { add, subtract } = require('../src/calculator');

describe('Calculator Functions', () => {
    test('adds 2 + 3 to equal 5', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('subtracts 5 - 3 to equal 2', () => {
        expect(subtract(5, 3)).toBe(2);
    });
});
```

**Running Tests:**
```bash
npm test
```

---

### Jest Matchers

Common matchers for assertions:

```javascript
// Equality
expect(value).toBe(4);                    // Strict equality (===)
expect(value).toEqual({a: 1});            // Deep equality

// Truthiness
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();

// Numbers
expect(value).toBeGreaterThan(3);
expect(value).toBeLessThanOrEqual(5);
expect(value).toBeCloseTo(0.3);          // Floating point

// Strings
expect(string).toMatch(/pattern/);
expect(string).toContain('substring');

// Arrays
expect(array).toContain('item');
expect(array).toHaveLength(3);
```

---

### Test Organization

**describe blocks** - Group related tests:
```javascript
describe('User Authentication', () => {
    test('should login valid user', () => { /* ... */ });
    test('should reject invalid credentials', () => { /* ... */ });
});
```

**beforeEach/afterEach** - Setup and teardown:
```javascript
describe('Database Tests', () => {
    beforeEach(() => {
        // Runs before each test
        database.connect();
    });

    afterEach(() => {
        // Runs after each test
        database.disconnect();
    });

    test('should insert data', () => { /* ... */ });
});
```

---

### Testing Async Code

**Async/Await:**
```javascript
test('fetches user data', async () => {
    const data = await fetchUser(1);
    expect(data.name).toBe('John');
});
```

**Promises:**
```javascript
test('fetches user data', () => {
    return fetchUser(1).then(data => {
        expect(data.name).toBe('John');
    });
});
```

---

### Mocking

Mock external dependencies to isolate tests:

```javascript
// Mock a function
const mockFn = jest.fn();
mockFn.mockReturnValue(42);

// Mock a module
jest.mock('../api');
const api = require('../api');
api.fetchData.mockResolvedValue({ data: 'test' });
```

---

## Best Practices

### Debugging
- Use descriptive variable names
- Add comments for complex logic
- Use version control to track changes
- Write defensive code with error handling
- Use linters (ESLint) to catch issues early

### Testing
- Write tests before fixing bugs (TDD)
- Test edge cases and error conditions
- Keep tests simple and focused
- Aim for high code coverage (80%+)
- Run tests before committing code

---

## NPM Scripts for Development Workflow

```json
{
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src/**/*.js",
    "debug": "node --inspect-brk src/index.js"
  }
}
```

---

## Demo Time!

We'll build a simple application with:
1. Multiple functions with intentional bugs
2. Debug using various techniques
3. Write comprehensive tests
4. Fix bugs and verify with tests

**Live coding demonstration follows...**

---

## Resources

- Jest Documentation: https://jestjs.io/
- MDN JavaScript Debugging Guide
- Chrome DevTools Documentation
- Node.js Debugging Guide

## Questions?
