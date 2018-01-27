const Task = function(difficultyLevel, urgencyLevel, reward) {
  this.difficulty = difficultyLevel;
  this.urgency = urgencyLevel;
  this.reward = reward;
  this.complete = false;
};

Task.prototype.completeTask = function () {
  this.complete = true;
};

module.exports = Task;
