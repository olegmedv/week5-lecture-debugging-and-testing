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

# JavaScript Debugging & Testing Demo

## Project Structure
```
demo-project/
├── package.json
├── src/
│   ├── userManager.js
│   ├── shoppingCart.js
│   └── utils.js
└── tests/
    ├── userManager.test.js
    ├── shoppingCart.test.js
    └── utils.test.js
```

## Setup Instructions

```bash
# Create project directory
mkdir js-debugging-demo
cd js-debugging-demo

# Initialize NPM
npm init -y

# Install Jest
npm install --save-dev jest

# Install nodemon for development (optional)
npm install --save-dev nodemon
```

## package.json
```json
{
  "name": "js-debugging-demo",
  "version": "1.0.0",
  "description": "JavaScript Debugging and Testing Demo",
  "main": "src/index.js",
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  },
  "keywords": ["debugging", "testing", "jest"],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^29.7.0"
  }
}
```

---

## src/utils.js
```javascript
/**
 * Utility functions for the demo
 * CONTAINS INTENTIONAL BUGS FOR DEMONSTRATION
 */

/**
 * Calculate percentage - HAS A BUG!
 * @param {number} value - The value
 * @param {number} total - The total
 * @returns {number} Percentage
 */
function calculatePercentage(value, total) {
    // BUG: No division by zero check
    return (value / total) * 100;
}

/**
 * Format currency - HAS A BUG!
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency
 */
function formatCurrency(amount) {
    // BUG: Doesn't handle negative numbers well
    return '$' + amount.toFixed(2);
}

/**
 * Validate email - WORKS CORRECTLY
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Get discount amount - HAS A BUG!
 * @param {number} price - Original price
 * @param {number} discountPercent - Discount percentage
 * @returns {number} Discounted price
 */
function getDiscountPrice(price, discountPercent) {
    // BUG: Logic error - returns discount amount instead of final price
    const discount = price * (discountPercent / 100);
    return discount;
}

/**
 * Capitalize first letter - WORKS CORRECTLY
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
function capitalizeFirst(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
    calculatePercentage,
    formatCurrency,
    validateEmail,
    getDiscountPrice,
    capitalizeFirst
};
```

---

## src/shoppingCart.js
```javascript
/**
 * Shopping Cart implementation
 * CONTAINS INTENTIONAL BUGS FOR DEMONSTRATION
 */

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    /**
     * Add item to cart - HAS A BUG!
     */
    addItem(item) {
        // BUG: Doesn't validate item structure
        this.items.push(item);
        console.log(`Added ${item.name} to cart`);
    }

    /**
     * Remove item from cart - HAS A BUG!
     */
    removeItem(itemId) {
        // BUG: Doesn't check if item exists
        const index = this.items.findIndex(item => item.id === itemId);
        this.items.splice(index, 1);
    }

    /**
     * Calculate total - HAS A BUG!
     */
    calculateTotal() {
        // BUG: Doesn't handle quantity properly
        return this.items.reduce((total, item) => {
            return total + item.price; // Should multiply by quantity!
        }, 0);
    }

    /**
     * Get item count - WORKS CORRECTLY
     */
    getItemCount() {
        return this.items.length;
    }

    /**
     * Clear cart - WORKS CORRECTLY
     */
    clearCart() {
        this.items = [];
    }

    /**
     * Find item by ID - HAS A BUG!
     */
    findItem(itemId) {
        // BUG: Returns undefined without helpful error
        return this.items.find(item => item.id === itemId);
    }
}

module.exports = ShoppingCart;
```

---

## src/userManager.js
```javascript
/**
 * User Management functions
 * CONTAINS INTENTIONAL BUGS FOR DEMONSTRATION
 */

const users = [];

/**
 * Add new user - HAS BUGS!
 */
function addUser(user) {
    // BUG: No validation for required fields
    // BUG: Allows duplicate emails
    users.push(user);
    console.log('User added:', user);
    return user;
}

/**
 * Find user by email - WORKS CORRECTLY
 */
function findUserByEmail(email) {
    return users.find(user => user.email === email);
}

/**
 * Update user - HAS A BUG!
 */
function updateUser(email, updates) {
    const user = findUserByEmail(email);
    // BUG: Doesn't check if user exists
    Object.assign(user, updates);
    return user;
}

/**
 * Delete user - HAS A BUG!
 */
function deleteUser(email) {
    const index = users.findIndex(user => user.email === email);
    // BUG: Doesn't check if user was found (index could be -1)
    users.splice(index, 1);
    return true;
}

/**
 * Get all users - WORKS CORRECTLY
 */
function getAllUsers() {
    return [...users];
}

/**
 * Clear all users - for testing
 */
function clearUsers() {
    users.length = 0;
}

module.exports = {
    addUser,
    findUserByEmail,
    updateUser,
    deleteUser,
    getAllUsers,
    clearUsers
};
```

---

## tests/utils.test.js
```javascript
const {
    calculatePercentage,
    formatCurrency,
    validateEmail,
    getDiscountPrice,
    capitalizeFirst
} = require('../src/utils');

describe('Utils Functions', () => {
    
    describe('calculatePercentage', () => {
        test('calculates percentage correctly', () => {
            expect(calculatePercentage(25, 100)).toBe(25);
            expect(calculatePercentage(1, 4)).toBe(25);
        });

        test('handles division by zero', () => {
            // This will FAIL - demonstrates the bug
            expect(() => calculatePercentage(10, 0)).toThrow();
        });
    });

    describe('formatCurrency', () => {
        test('formats positive amounts correctly', () => {
            expect(formatCurrency(10)).toBe('$10.00');
            expect(formatCurrency(99.99)).toBe('$99.99');
        });

        test('formats negative amounts correctly', () => {
            // This might FAIL - demonstrates the bug
            expect(formatCurrency(-10)).toBe('-$10.00');
        });
    });

    describe('validateEmail', () => {
        test('validates correct email addresses', () => {
            expect(validateEmail('test@example.com')).toBe(true);
            expect(validateEmail('user.name@domain.co.uk')).toBe(true);
        });

        test('rejects invalid email addresses', () => {
            expect(validateEmail('invalid')).toBe(false);
            expect(validateEmail('no@domain')).toBe(false);
            expect(validateEmail('')).toBe(false);
        });
    });

    describe('getDiscountPrice', () => {
        test('calculates discount price correctly', () => {
            // This will FAIL - demonstrates the bug
            expect(getDiscountPrice(100, 10)).toBe(90);
            expect(getDiscountPrice(50, 20)).toBe(40);
        });
    });

    describe('capitalizeFirst', () => {
        test('capitalizes first letter', () => {
            expect(capitalizeFirst('hello')).toBe('Hello');
            expect(capitalizeFirst('world')).toBe('World');
        });

        test('handles empty string', () => {
            expect(capitalizeFirst('')).toBe('');
        });
    });
});
```

---

## tests/shoppingCart.test.js
```javascript
const ShoppingCart = require('../src/shoppingCart');

describe('ShoppingCart', () => {
    let cart;

    beforeEach(() => {
        cart = new ShoppingCart();
    });

    describe('addItem', () => {
        test('adds item to cart', () => {
            const item = { id: 1, name: 'Laptop', price: 999, quantity: 1 };
            cart.addItem(item);
            expect(cart.getItemCount()).toBe(1);
        });

        test('handles invalid item gracefully', () => {
            // This will FAIL - demonstrates the bug
            expect(() => cart.addItem({})).toThrow();
        });
    });

    describe('removeItem', () => {
        test('removes existing item', () => {
            const item = { id: 1, name: 'Laptop', price: 999, quantity: 1 };
            cart.addItem(item);
            cart.removeItem(1);
            expect(cart.getItemCount()).toBe(0);
        });

        test('handles non-existent item', () => {
            // This will FAIL - demonstrates the bug
            expect(() => cart.removeItem(999)).not.toThrow();
        });
    });

    describe('calculateTotal', () => {
        test('calculates total with single item', () => {
            const item = { id: 1, name: 'Laptop', price: 999, quantity: 1 };
            cart.addItem(item);
            expect(cart.calculateTotal()).toBe(999);
        });

        test('calculates total with multiple quantities', () => {
            // This will FAIL - demonstrates the bug
            const item = { id: 1, name: 'Laptop', price: 100, quantity: 3 };
            cart.addItem(item);
            expect(cart.calculateTotal()).toBe(300);
        });

        test('returns 0 for empty cart', () => {
            expect(cart.calculateTotal()).toBe(0);
        });
    });

    describe('findItem', () => {
        test('finds existing item', () => {
            const item = { id: 1, name: 'Laptop', price: 999, quantity: 1 };
            cart.addItem(item);
            expect(cart.findItem(1)).toEqual(item);
        });

        test('returns undefined for non-existent item', () => {
            expect(cart.findItem(999)).toBeUndefined();
        });
    });
});
```

---

## tests/userManager.test.js
```javascript
const {
    addUser,
    findUserByEmail,
    updateUser,
    deleteUser,
    getAllUsers,
    clearUsers
} = require('../src/userManager');

describe('User Manager', () => {
    
    beforeEach(() => {
        clearUsers();
    });

    describe('addUser', () => {
        test('adds a valid user', () => {
            const user = {
                name: 'John Doe',
                email: 'john@example.com',
                age: 30
            };
            addUser(user);
            expect(findUserByEmail('john@example.com')).toEqual(user);
        });

        test('rejects user with missing email', () => {
            // This will FAIL - demonstrates the bug
            const user = { name: 'John Doe', age: 30 };
            expect(() => addUser(user)).toThrow();
        });

        test('prevents duplicate emails', () => {
            // This will FAIL - demonstrates the bug
            const user1 = { name: 'John', email: 'test@example.com' };
            const user2 = { name: 'Jane', email: 'test@example.com' };
            addUser(user1);
            expect(() => addUser(user2)).toThrow();
        });
    });

    describe('updateUser', () => {
        test('updates existing user', () => {
            const user = { name: 'John', email: 'john@example.com', age: 30 };
            addUser(user);
            updateUser('john@example.com', { age: 31 });
            expect(findUserByEmail('john@example.com').age).toBe(31);
        });

        test('throws error for non-existent user', () => {
            // This will FAIL - demonstrates the bug
            expect(() => updateUser('nonexistent@example.com', { age: 25 }))
                .toThrow();
        });
    });

    describe('deleteUser', () => {
        test('deletes existing user', () => {
            const user = { name: 'John', email: 'john@example.com' };
            addUser(user);
            deleteUser('john@example.com');
            expect(findUserByEmail('john@example.com')).toBeUndefined();
        });

        test('handles deleting non-existent user', () => {
            // This will FAIL - demonstrates the bug
            expect(() => deleteUser('nonexistent@example.com')).not.toThrow();
        });
    });

    describe('getAllUsers', () => {
        test('returns all users', () => {
            addUser({ name: 'John', email: 'john@example.com' });
            addUser({ name: 'Jane', email: 'jane@example.com' });
            expect(getAllUsers()).toHaveLength(2);
        });

        test('returns empty array when no users', () => {
            expect(getAllUsers()).toEqual([]);
        });
    });
});
```

---

## Running the Demo

### 1. Install dependencies
```bash
npm install
```

### 2. Run all tests (will show failures)
```bash
npm test
```

### 3. Run tests in watch mode
```bash
npm run test:watch
```

### 4. Generate coverage report
```bash
npm run test:coverage
```

---

## Key Points

- Tests help catch bugs early
- Descriptive test names are documentation
- Each test should test one thing
- Setup/teardown keeps tests isolated
- Edge cases are important
- Good error messages help debugging

---

## Resources

- Jest Documentation: https://jestjs.io/
- MDN JavaScript Debugging Guide
- Chrome DevTools Documentation
- Node.js Debugging Guide

## Questions?
