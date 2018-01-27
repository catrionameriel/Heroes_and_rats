const assert = require('assert');
const Hero = require('../hero');
const Food = require('../food');
const Task = require('../task');
const Rat = require('../rat');

describe ('Hero', function() {

  let hero;
  let food1;
  let food2;
  let task1;
  let task2;
  let task3;
  let rat;

  beforeEach(function() {
    hero = new Hero('Theobold', 'Yoghurt');
    food1 = new Food('Bread', 10);
    food2 = new Food('Yoghurt', 20);
    task1 = new Task('Hard', 'Urgent', 'Sword');
    task2 = new Task('Easy', 'Can Wait', 'Coin');
    task3 = new Task('Easy', 'Urgent', 'Apple');
    rat = new Rat();
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

  it('hero can add tasks to docket', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    assert.strictEqual(hero.tasks.length, 2)
  })

  it('can sort tasks by difficulty', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortTasks('difficulty')
    assert.deepEqual(hero.tasks, [task2, task3, task1]);
  })

  it('can sort tasks by urgency', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortTasks('urgency');
    assert.deepEqual(hero.tasks,[task2, task1, task3]);
  })

  it('can sort tasks by reward', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortTasks('reward');
    assert.deepEqual(hero.tasks, [task3, task2, task1]);
  })

   it('can get tasks by incomplete', function() {
     hero.addTask(task1);
     hero.addTask(task2);
     hero.addTask(task3)
     task1.completeTask();
     assert.deepEqual(hero.getTasksByCompletion('Incomplete'), [task2, task3]);
  })

  it('can get tasks by complete', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3)
    task1.completeTask();
    assert.deepEqual(hero.getTasksByCompletion('Complete'), [task1]);
 })

 it('hero loses health when eats poisonous food', function() {
   rat.touch(food2);
   hero.eat(food2);
   assert.strictEqual(hero.health, 80);
 })





})
