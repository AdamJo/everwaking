import { _random, _mapConvert } from "./helpers";

export default class Droplet {
  /**
   * @param  {number} width  - window width
   * @param  {number} height - window height
   */
  constructor(width, height) {
    this.firstFall = true; // determines if drops have hit bottom yet
    this.height = height; // height of screen
    this.width = width; // width of screen
    this.color = _random(20, 80); // random color to start with
    this.lightness = 80; // default lightness setting
    this.lightnessDirection = 20; // amount of lightness change per color rotation
    this.x = _random(0, this.width); // width on screen that drop starts at
    this.y = _random(-350, -200); // height drop starts at
    this.z = _random(0, 20); // how far or away a droplet is from screen
    this.len = _mapConvert(this.z, 0, 20, 10, 20); // determines length of droplet
    this.yspeed = _mapConvert(this.z, 0, 20, 4, 10); // speed at which drop falls
    this.thickness = _mapConvert(this.z, 0, 20, 1, 3); // determines thickness of
  }

  fall() {
    // adds updated position to speed.
    this.y += this.yspeed;

    // add grav for more variation in speed when droplets are falling
    let grav = _mapConvert(this.z, 0, 20, 0, 0.1);
    this.yspeed += grav;

    // for droplets coming from top to bottom
    if (this.y > this.height + 40) {
      this.y = _random(-250, -50);
      this.x = _random(0, this.width);
      this.thickness = _mapConvert(this.z, 0, 20, 1, 3);
      this.yspeed = _mapConvert(this.z, 0, 20, 4, 10);
    }
  }

  /**
   *  Creates an object for stroke and color values of the canvas
   * @return {Object} = {
   *   x:        {number} = x position of droplet
   *   y:        {number} = y position of droplet
   *   len:      {number} = length of droplet
   *   thickness {number} = creates a parallax effect on droplet
   *   color     {number} = cor hsl stroke color
   *   lightness {number} = for hsl stroke lightness;
   * }
   */
  show() {
    // when color reaches the end of the color scheme
    // reset color and modify lightness
    if (this.color > 360) {
      this.color = 0;
      if (this.lightness >= 100) {
        this.lightnessDirection = -20;
      } else if (this.lightness <= 0) {
        this.lightnessDirection = 20;
      }
      this.lightness += this.lightnessDirection;
    }
    this.color += 1;

    return {
      x: this.x,
      y: this.y,
      len: this.y + this.len,
      thickness: this.thickness,
      color: this.color,
      lightness: this.lightness,
    };
  }
}
