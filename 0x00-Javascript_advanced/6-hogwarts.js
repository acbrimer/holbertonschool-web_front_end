// 6-hogwarts

function studentHogwarts() {
  this.privateScore = 0;
  this.name = null;

  changeScoreBy = (points) => (this.privateScore = this.privateScore + points);

  return {
    setName: (newName) => (this.name = newName),
    rewardStudent: () => this.changeScoreBy(1),
    penalizeStudent: () => this.changeScoreBy(-1),
    getScore: () => `${this.name}: ${this.privateScore}`,
  };
}

let harry = studentHogwarts();
harry.setName('Harry');
[...Array(4).keys()].forEach(() => harry.rewardStudent());
console.log(harry.getScore());

let draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
[...Array(3).keys()].forEach(() => harry.penalizeStudent());
console.log(draco.getScore());
