const { TestScheduler } = require('jest')
const randomNumber = require('../lib/random.js')

test('gets a random number between 1 + 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});