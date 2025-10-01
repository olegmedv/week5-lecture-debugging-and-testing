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