const Food = function(name, replenishmentValue) {
 this.name = name;
 this.replenishment = replenishmentValue;
 this.poisonous = false;
};

Food.prototype.getPoisoned = function () {
  this.poisonous = true;
};

module.exports = Food;
