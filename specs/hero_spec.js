const assert = require('assert');
const Hero = require('../hero');
const Food = require('../food');
const Task = require('../task');

describe ('Hero', function() {

  let hero;
  let food1;
  let food2;
  let task1;

  beforeEach(function() {
    hero = new Hero('Theobold', 'Yoghurt');
    food1 = new Food('Bread', 10);
    food2 = new Food('Yoghurt', 20);
    task1 = new Task('Hard', 'Urgent', 'Gold');
  })

  it('hero has name', function() {
    assert.strictEqual(hero.name, 'Theobold');
  })

  it('hero health starts at 100', function() {
    assert.strictEqual(hero.health, 100);
  })

  it('hero has favourite food', function() {
    assert.strictEqual(hero.favouriteFood, 'Yoghurt');
  })

  it('hero can say name', function() {
    assert.strictEqual(hero.talk(), 'My name is Theobold and I am very strong!')
  })

  it('heroes tasks start at 0', function() {
    assert.strictEqual(hero.tasks.length, 0);
  })

  it('hero gains health when eats', function() {
    hero.eat(food1);
    assert.strictEqual(hero.health, 110);
  })

  it('hero gains more health when eats favourite food', function() {
    hero.eat(food2);
    assert.strictEqual(hero.health, 130);
  })





})
