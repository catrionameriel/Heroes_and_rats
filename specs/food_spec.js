const assert = require('assert');
const Food = require('../food');

describe('Food', function() {

  let food;

  beforeEach(function() {
    food = new Food('Yoghurt', 20);
  })

  it('food has name', function() {
    assert.strictEqual(food.name, 'Yoghurt');
  })

  it('food has replenishment value', function() {
    assert.strictEqual(food.replenishment, 20);
  })

  it('food starts not poisonous', function() {
    assert.strictEqual(food.poisonous, false);
  })



})
