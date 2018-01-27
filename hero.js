const Hero = function (name, favFood) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favFood;
  this.talk = function() {
    return `My name is ${this.name} and I am very strong!`
  }
  this.tasks = [];
};

Hero.prototype.eat = function (food) {
  if (food.name === this.favouriteFood) {
    this.health += (food.replenishment * 1.5);
  }
  else this.health += food.replenishment;
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};

Hero.prototype.sortTasksByUrgency = function () {
      return this.tasks.sort(function(first, second) {
          if(first.urgency < second.urgency) {
            return -1;
          }
          if (first.urgency > second.urgency) {
            return 1;
          }
          else return 0;
        });
  };

Hero.prototype.sortTasksByDifficulty = function () {
      return this.tasks.sort(function(first, second) {
          if(first.difficulty < second.difficulty) {
            return -1;
          }
          if (first.difficulty > second.difficulty) {
            return 1;
          }
          else return 0;
        });
  };

Hero.prototype.sortTasksByReward = function () {
      return this.tasks.sort(function(first, second) {
          if(first.reward < second.reward) {
            return -1;
          }
          if (first.reward > second.reward) {
            return 1;
          }
          else return 0;
        });
  };

Hero.prototype.getBooleanCompletionTypeFromStringInput = function (string) {
  if (string === 'Incomplete') {
    return false;
  }
  else return true;
};

Hero.prototype.getTasksByCompletion = function (completionTypeString) {
  let completionType = this.getBooleanCompletionTypeFromStringInput(completionTypeString);
  return this.tasks.filter(function (task) {
      return completionType === task.complete
  });
};

module.exports = Hero;
