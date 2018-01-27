const assert = require('assert');
const Task = require('../task');

describe('Task', function() {

  let task1;

  beforeEach(function() {
    task1 = new Task('Hard', 'Urgent', 'Gold');
  })

  it('task has a difficulty level', function() {
    assert.strictEqual(task1.difficulty, 'Hard');
  })

  it('task has an urgency level', function() {
    assert.strictEqual(task1.urgency, 'Urgent');
  })

  it('task has a reward', function() {
    assert.strictEqual(task1.reward, 'Gold');
  })

  it('task starts not complete', function() {
    assert.strictEqual(task1.complete, false);
  })

  it('can complete task', function() {
    task1.completeTask();
    assert.strictEqual(task1.complete, true);
  })




})
