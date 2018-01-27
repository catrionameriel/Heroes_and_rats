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

// Hero.prototype.sortTasks = function (whatToSortBy) {
//   this.tasks.sort() {
//   //   if (task1.whatToSortBy < task2.whatToSortBy) {
//   //     return -1;
//   //   }
//   //   if (task2.whatToSortBy > task2.whatToSortBy) {
//   //     return 1;
//   //   }
//   //   else return 0;
//   // })
//   return task1 - task2;
//   }
// };

Hero.prototype.getTasksByCompletion = function (completionType) {
  if (completionType === 'Incomplete') {
    completionType = false;
  }
  else completionType = true;

  return this.tasks.filter(function (task) {
      return completionType === task.complete
  });
};

module.exports = Hero;
