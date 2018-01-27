const assert = require('assert');
const Villain = require('../villain');
const Hero = require('../hero');

describe('Villain', function() {
  let villain;
  let hero;

  beforeEach(function() {
    villain = new Villain('Frankenfurter', 'Theobold', 10);
    hero = new Hero('Theobold', 'Yoghurt', 'Invisibility');
  })

  it('villain has name', function() {
    assert.strictEqual(villain.name, 'Frankenfurter');
  })

  it('villain has enemy', function() {
    assert.strictEqual(villain.archEnemy, 'Theobold');
  })

  it('villain has attack power', function() {
    assert.strictEqual(villain.attack, 10);
  })



})
