const assert = require('assert');
const Hero = require('../hero');

describe ('Hero', function() {

  let hero;

  beforeEach(function() {
    hero = new Hero('Theobold', 'Yoghurt');
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





})
