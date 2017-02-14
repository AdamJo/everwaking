import Droplet from './droplet.js'

export default class Rain {
  constructor() {
    this.drops = [];
    this.width;
    this.height;
    this.canvas;
    this.ctx;
    this.requestId
    this.numberOfDroplets
  }

  // create initial conavas element
  setup(width, height) {
    this.canvas = document.getElementById('background')
    this.ctx = this.canvas.getContext('2d');
    this.canvas.style.background = "hsl(0, 0%, 10%)";
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
    this.numberOfDroplets = width < 700 ? 100 : 500; // if mobile, lower amount of drops

    for (var i = 0; i < this.numberOfDroplets; i++) {
      this.drops[i] = new Droplet(this.width, this.height);
    }
  }

  // loop through drops and create animation
  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height); // clear canvas
    this.drops.forEach(drop => {
      drop.fall();
      let { x, y, len, thickness, color, lightness } = drop.show()
      this.ctx.beginPath();
      this.ctx.lineWidth = thickness; // move to drop.js
      this.ctx.strokeStyle = `hsl(${color}, 100%, ${lightness}%)`; // move to drop.js
      this.ctx.moveTo(x, y)
      this.ctx.lineTo(x, len)
      this.ctx.stroke();
    })

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
