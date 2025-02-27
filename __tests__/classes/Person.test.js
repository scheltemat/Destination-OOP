const Person = require('./Person');

describe('Person', () => {
  let personInstance;

  beforeEach(() => {
    personInstance = new Person('Briana', 'Houston');
  });

  test('create instance of Person class', () => {
    expect(personInstance).toBeInstanceOf(Person);
  });

  it('should assign name and destination correctly', () => {
    const newName = 'Briana';
    const newDestination = 'Houston';
    const person = new Person(newName, newDestination);

    expect(person.name).toBe(newName);
    expect(person.destination).toBe(newDestination);
  });

  it('should add a bag to the bags array', () => {
    const newBag = { id: 1, name: 'Gucci' };
    personInstance.addBag(newBag);

    expect(personInstance.getBags()).toContain(newBag);
  });
});