const Villain = function(name, archEnemy, attack) {
  this.name = name;
  this.archEnemy = archEnemy;
  this.attack = attack;
  this.health = 80;
}

Villain.prototype.checkArchEnemy = function (hero) {
  if (hero.name === this.archEnemy) {
      this.attack += (this.attack * 0.1)
  }
};

Villain.prototype.fight = function (hero) {
  this.checkArchEnemy(hero);
  hero.health -= this.attack;
};

module.exports = Villain;
