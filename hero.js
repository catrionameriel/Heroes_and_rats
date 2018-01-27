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
  if (food.name !== this.favouriteFood) {
    this.health += food.replenishment;
  }
  else this.health += (food.replenishment * 1.5);
};

module.exports = Hero;
