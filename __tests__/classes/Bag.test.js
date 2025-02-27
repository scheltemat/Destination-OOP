const {describe, test, expect} = require('@jest/globals');
const Bag = require('../../classes/Bag');

describe('Bag', () => {
    const bag = new Bag(10, 1);
    test('should create an instance of Bag', () => {
        expect(bag).toBeInstanceOf(Bag);
    });
    test('should assign the correct weight', () => {
        expect(bag.weight).toBe(10);
    });

    test('should assign the correct id', () => {
        expect(bag.id).toBe(1);
    });
        
    test('should initialize owner with a value of null', () => {
        expect(bag.getOwner()).toBeNull();
    });
    
    test('should get the correct owner using getOwner', () => {
        bag.assignOwner('John Doe');
        expect(bag.getOwner()).toBe('John Doe');
    });
    
    test('should update owner using assignOwner', () => {
        bag.assignOwner('Jane Doe');
        expect(bag.getOwner()).toBe('Jane Doe');
    });
});
