import Walker from "./walker.js";
/**
 * create initial setup for randomWalker
 * @constructor
 */
export default class RandomWalker {
  constructor() {
    this.walker;
    this.width;
    this.height;
    this.canvas;
    this.ctx;
    this.requestId;
  }

  /**
   * create initial conavas element
   * @param {number} width - width of window
   * @param {number} height - height of window
   */
  setup(width, height) {
    this.canvas = document.getElementById("background");
    this.canvas.style.backgroundColor = "red";
    this.ctx = this.canvas.getContext("2d");
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
    this.walker = new Walker(this.width, this.height);
  }

  // loop through drops and create animation
  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height); // clear canvas
    this.walker.walk();
    let { x, y, len } = this.walker.show();
    this.ctx.beginPath();
    this.ctx.strokeStyle = `black`;
    this.ctx.rect(x, y, 20, 20);
    this.ctx.rect(x + 25, y + 25, 20, 20);
    this.ctx.stroke();
    this.requestId = window.requestAnimationFrame(this.draw.bind(this));
  }

  // cancels animation
  stopAnimation() {
    if (this.requestId) {
      window.cancelAnimationFrame(this.requestId);
      this.requestId = undefined;
    }
  }
}
