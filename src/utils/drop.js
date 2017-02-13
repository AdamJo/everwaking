import Vector from './vectors2D';

export default class Drop {
  constructor(width, height) {
    // console.log(width)
    this.x = this.random(0, width);
    this.y = this.random(-50, -100);
    this.yspeed = 1;
  }

  fall() {
    this.y += this.yspeed;
  }

  show() {
    // console.log(this.x);
    return [this.x, this.y, this.y+10]
  }

  random(min, max) {
    return Math.random() * (max - min) + min;
  }
}