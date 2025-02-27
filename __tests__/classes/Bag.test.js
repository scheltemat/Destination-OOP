const {describe, test, expect} = require('@jest/globals');
const Bag = require('../../classes/Bag');

describe('Bag', () => {
    test('should create an instance of Bag', () => {
        const bag = new Bag(10, 1, 'John Doe');
        expect(bag).toBeInstanceOf(Bag);
    });
    test('should assign the correct weight', () => {
        const bag = new Bag(10, 1, 'John Doe');
        expect(bag.weight).toBe(10);
    });

    test('should assign the correct id', () => {
        const bag = new Bag(10, 1, 'John Doe');
        expect(bag.id).toBe(1);
    });
        
    test('should assign the correct owner', () => {
        const bag = new Bag(10, 1, 'John Doe');
        expect(bag.owner).toBe('John Doe');
    });
});
