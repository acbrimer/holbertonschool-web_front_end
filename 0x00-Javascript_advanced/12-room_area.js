// 12-room_area

class roomDimensions {
  width = 50;
  length = 100;

  constructor() {
    this.boundGetArea = this.getArea.bind(this);
  }

  getArea = () => this.width * this.length;
}
