import Vector from './vectors2D';

export default class Drop {
  constructor(width, height) {
    this.firstFall = true; // determines if drops have hit bottom yet
    this.height = height; // height of screen
    this.width = width; // width of screen
    this.x = this.random(0, this.width); // width on screen that drop starts at
    this.y = this.random(-300, -50); // height drop starts at
    this.z = this.random(0, 20);
    this.len = this.mapConvert(this.z, 0, 20, 10, 20); 
    this.yspeed = this.mapConvert(this.z, 0, 20, 3, 10); // speed at which drop falls
    // this.len = this.random(5, 15); // random lengh for drop
    // this.yspeed = this.random(4, 10); // speed at which drop falls
  }

  // calculates the fall speed and variance of dropplet
  fall() {
    let grav = this.mapConvert(this.z, 0, 20, 0, 0.2);
    this.y += this.yspeed + grav;

    if ( this.y > this.height) {
      // this.yspeed = this.mapConvert(this.z, 0, 20, 4, 10);
      this.yspeed *= -1;
      this.firstFall = false;
    }
    if (this.y < 0 && !this.firstFall) {
      this.yspeed *= -1;
    }
  }

  // returns values creation on canvas
  // x position of dropplet
  // y position of dropplet
  // len of position on canvas
  // thickness of droplett - creates a parallax effect that something farther than it seems
  show() {
    let thickness = this.mapConvert(this.z, 0, 20, 1, 3);
    // strokeWeight(thickness);
    return  {
      x: this.x,
      y: this.y,
      len: this.y+this.len,
      thickness
    }
  }

  // creates a random value between the min and max given
  random(min, max) {
    return Math.random() * (max - min) + min;
  }

  // http://stackoverflow.com/questions/20910091/recreating-the-processing-map-function-in-javascript
  mapConvert(value, start1, stop1, start2, stop2) {
      return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
  }
}
