import Drop from './drop.js'
// import Vector from './vectors2D'

export default class Sketch {
  constructor() {
    this.drops = [];
    this.drop;
  }

  setup(width, height) {
    this.ctx = document.getElementById('background').getContext('2d');
    this.width = width;
    this.height = height;
    for (var i = 0; i < 100; i++) {
      this.drops[i] = new Drop(width, height);
    }
  }

  draw(width=800, height=800) {
    // if (this.width !== width || this.height !== height) {
    //   this.reset(width, height);
    // }

    let x, y, len;
    this.ctx.clearRect(0, 0, width, height); // clear canvas
    this.drops.forEach(drop => {
      drop.fall();
      [x, y, len] = drop.show()
      this.ctx.beginPath();
      this.ctx.lineWidth = 5; // move to drop.js
      this.ctx.strokeStyle = '#325FA2'; // move to drop.js
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
