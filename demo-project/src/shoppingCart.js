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