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