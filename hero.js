const Hero = function (name, favFood, superpower) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favFood;
  this.tasks = [];
  this.superpower = superpower;
};

Hero.prototype.talk = function () {
    return `My name is ${this.name} and I am very strong!`
};

Hero.prototype.eat = function (food) {
  if (!food.poisonous){
    if (food.name === this.favouriteFood) {
      this.health += (food.replenishment * 1.5);
    }
    else this.health += food.replenishment;
  }
  else this.health -= food.replenishment;
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};

 Hero.prototype.sortTasks = function (sortType) {
      return this.tasks.sort(function(first, second) {
          if(first[sortType] < second[sortType]) {
            return -1;
          }
          if (first[sortType] > second[sortType]) {
            return 1;
          }
          else return 0;
        });
  };

Hero.prototype.getBooleanCompletionTypeFromStringInput = function (str) {
  if (str === 'Incomplete') {
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
