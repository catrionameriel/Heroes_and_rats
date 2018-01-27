const Hero = function (name, favFood) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = favFood;
  this.talk = function() {
    return `My name is ${this.name} and I am very strong!`
  }
  this.tasks = [];
};

module.exports = Hero;
