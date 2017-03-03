import { _random, _mapConvert } from "./helpers";

export default class Walker {
  /**
   * @param  {number} width - width of window
   * @param  {number} height - height of window
   */
  constructor(width, height) {
    this.height = height; // height of screen
    this.width = width; // width of screen
    this.color = _random(20, 80); // random color to start with

    this.x = _random(0, this.width); // width on screen that drop starts at
    this.y = _random(0, 200);
    this.len = _random(20, 50); // determines length of droplet
    this.yspeed = _random(1, 2);
    this.direction = _random(0, 4);

    this.position = 0;
  }

  /**
   * update direction of walker
   */
  walk() {
    if (this.x % 60 === 0 || this.y % 60 === 0) {
      this.direction = _random(0, 4);
      this.position += 1;
    }

    switch (this.direction) {
      case 0:
        this.y -= this.yspeed;
        break;
      case 1:
        this.x += this.yspeed;
        break;
      case 2:
        this.y += this.yspeed;
        break;
      case 3:
        this.x -= this.yspeed;
        break;
      default:
        this.y += this.yspeed;
    }
  }

  /**
   * returns an object with coordinates of walker
   */
  show() {
    return {
      x: this.x,
      y: this.y,
      len: this.y + this.len,
    };
  }
}
