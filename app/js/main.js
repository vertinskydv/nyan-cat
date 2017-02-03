class Game {

  constructor () {
    var canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.drawCanvas();
    this.startAnimation();
  }

  drawCanvas() {
    this.ctx.fillStyle = "#104476";
    this.ctx.fillRect(0, 0, 960, 600);
  }

  startAnimation () {
    requestAnimationFrame(main);
  }



}

function bodyOnload() {
  let game = new Game();
}
