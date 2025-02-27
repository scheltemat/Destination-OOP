const {describe, test, expect} = require('@jest/globals');
const Bag = require('../../classes/Bag');

describe('Bag', () => {
    test('should create an instance of Bag', () => {
        const bag = new Bag(10, 1, 'John Doe');
        expect(bag).toBeInstanceOf(Bag);
    });
});
