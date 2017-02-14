export default class Droplet {

  /*
    @params
      width  {number} = window width
      height {number} = window height
  */
  constructor(width, height) {
    this.firstFall = true; // determines if drops have hit bottom yet
    this.height = height; // height of screen
    this.width = width; // width of screen
    this.color = this._random(20, 80); // random color to start with
    this.lightness = 80; // default lightness setting
    this.lightnessDirection = 20; // amount of lightness change per color rotation
    // this.startingPosition = this._random(0, 10) > 5 ? true : false; // start at bottom or top
    this.x = this._random(0, this.width); // width on screen that drop starts at
    // this.y = this.startingPosition
    //   ? this._random(-350, -50)
    //   : this._random(this.height + 50, this.height + 250); // height drop starts at
    this.y = this._random(-350, -200);
    this.z = this._random(0, 20); // how far or away a droplet is from screen
    this.len = this._mapConvert(this.z, 0, 20, 10, 20); // determines length of droplet
    this.yspeed = this._mapConvert(this.z, 0, 20, 4, 10); // speed at which drop falls
    this.thickness = this._mapConvert(this.z, 0, 20, 1, 3); // determines thickness of 
  }

  // calculates the fall speed and resets droplet
  fall() {

    // adds updated position to speed.
    // this.y += this.startingPosition
    //   ? this.yspeed
    //   : this.yspeed * (-1);
    this.y += this.yspeed;

    // add grav for more variation in speed when droplets are falling
    let grav = this._mapConvert(this.z, 0, 20, 0, 0.1);
    this.yspeed += grav;

    // for droplets coming from top to bottom
    if (this.y > this.height + 40) {
      this.y = this._random(-250, -50);
      this.x = this._random(0, this.width);
      this.thickness = this._mapConvert(this.z, 0, 20, 1, 3);
      this.yspeed = this._mapConvert(this.z, 0, 20, 4, 10);
    }

    // for droplets coming from bottom to top
    // if (0 > this.y && !this.startingPosition) {
    //   this.y = this._random(this.height + 50, this.height + 250); // height drop starts at
    //   this.x = this._random(0, this.width);
    //   this.thickness = this._mapConvert(this.z, 0, 20, 1, 3);
    //   this.yspeed = this._mapConvert(this.z, 0, 20, 4, 10);
    // }
  }

  /*
    Creates an object for stroke and color values of the canvas
    @return {Object} = {
      x:        {number} = x position of droplet
      y:        {number} = y position of droplet
      len:      {number} = length of droplet
      thickness {number} = creates a parallax effect on droplet
      color     {number} = cor hsl stroke color
      lightness {number} = for hsl stroke lightness;
    }
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
      lightness: this.lightness
    };
  }

  /*
    Creates a random number between the given min and max
    @params
      min   {number} = minimum value of random number
      max   {number} = maximum value of random number

    @return {number}   random number between the two param numbers
  */
  _random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /*
    normalizes a given value to a new set of min/max.
    convert processing map to javascript
    http://stackoverflow.com/questions/20910091/recreating-the-processing-map-function-in-javascript

    @params:
      value   {number} = initial number to be normalized
      start1  {number} = initial min param size of value given
      stop2   {number} = initial max param size of value given
      start2  {number} = min size for normalized value
      stop2   {number} = max size for normalized value
    @retun {number}      normalized number
    @example this._mapConvert(this.z, 0, 20, 1, 3); --> number between 1 and 3
  */
  _mapConvert(value, start1, stop1, start2, stop2) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
  }
}
