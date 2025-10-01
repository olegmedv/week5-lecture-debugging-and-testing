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