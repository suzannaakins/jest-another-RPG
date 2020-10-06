const Enemy = require('../lib/Enemy');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion')

//check for proper enemy object creation
test('creates an enemy object', () => {
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.name).toBe('goblin');
    expect(enemy.weapon).toBe('sword');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
});

//test to get info about enemy health
test("gets enemy's health value", () => {
    const enemy = new Enemy('goblin', 'sword');
    
    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
})

test('checks if enemy is alive or not', () => {
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0;

    expect(enemy.isAlive()).toBeFalsy();
});

//test to see if correct amt of health is being reduced from the enemy health property
test("subtracts from enemy's health", () => {
    const enemy = new Enemy('goblin', 'sword');
    const oldHealth = enemy.health;

    enemy.reduceHealth(5);

    expect(enemy.health).toBe(oldHealth - 5);

    //call with ridiculously high number to make sure health does not go negative
    enemy.reduceHealth(99999);

    expect(enemy.health).toBe(0);
});

//verify that a enemy's attack value is within range
test("gets enemy's attack value", () => {
    const enemy = new Enemy('goblin', 'sword');
    enemy.strength = 10;

    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

//check for enemy's description
test('gets a description of the enemy', () => {
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
});