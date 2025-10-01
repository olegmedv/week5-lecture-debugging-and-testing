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