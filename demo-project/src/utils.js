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