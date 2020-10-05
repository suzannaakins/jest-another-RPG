const { TestScheduler } = require('jest');
const Potion = require('../lib/Potion.js');

//ensure that new potion object has a name and a value
test('creates a health potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

//test to check that if Potion() constructor is called w/out any arguments,it will create a NEW potion w/ a random type+value
test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});