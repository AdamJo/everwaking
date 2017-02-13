import Drop from './drop.js'
// import Vector from './vectors2D'

export default class Sketch {
  constructor() {
    this.drops = [];
    this.drop;
  }

  setup(width, height) {
    this.canvas = document.getElementById('background')
    this.ctx = this.canvas.getContext('2d');
    this.canvas.style.background = "hsl(0, 0%, 50%)";
    this.width = width;
    this.height = height;
    for (var i = 0; i < 50; i++) {
      this.drops[i] = new Drop(width, height);
    }
  }

  draw(width=800, height=800) {
    // if (this.width !== width || this.height !== height) {
    //   this.reset(width, height);
    // }

    let x, y, len;
    this.ctx.clearRect(0, 0, this.width, this.height); // clear canvas
    this.drops.forEach(drop => {
      drop.fall();
      let { x, y, len, thickness } = drop.show()
      this.ctx.beginPath();
      this.ctx.lineWidth = thickness; // move to drop.js
      this.ctx.strokeStyle = 'hsl(51, 100%, 40%)'; // move to drop.js
      this.ctx.moveTo(x, y)
      this.ctx.lineTo(x, len)
      this.ctx.stroke();
    })

    this.requestId = window.requestAnimationFrame(this.draw.bind(this));
  }

  reset() {
    if (this.requestId) {
       window.cancelAnimationFrame(this.requestId);
       this.requestId = undefined;
    }
  }
}
