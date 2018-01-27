const assert = require('assert');
const Villain = require('../villain');
const Hero = require('../hero');

describe('Villain', function() {
  let villain;
  let hero;
  let hero2;

  beforeEach(function() {
    villain = new Villain('Frankenfurter', 'Theobold', 10);
    hero = new Hero('Theobold', 'Yoghurt', 'Invisibility');
    hero2 = new Hero('Gertrudian', 'Irn Bru', 'Fireballs');
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

  it('villain has health', function() {
    assert.strictEqual(villain.health, 80);
  })

  it('villain can fight', function() {
    villain.fight(hero2);
    assert.strictEqual(hero2.health, 90);
  })

  it('villain can fight arch enemy', function() {
    villain.fight(hero);
    assert.strictEqual(hero.health, 89);
  })



})
