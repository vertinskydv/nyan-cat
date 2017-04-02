class Game {

  constructor () {
    var canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.drawCanvas();
    this.getSprites();

  }

  drawCanvas() {
    this.ctx.fillStyle = "#104476"; //game field background color
    this.ctx.fillRect(0, 0, 960, 600);
  }

  getSprites() {
    var Cat = new Image();
    var c = this.ctx;
    Cat.width = 34;
    Cat.height = 21;
    Cat.onload = function() {
      c.drawImage(Cat, 10, 10);
    };
    Cat.src = './img/nyan-svg/nyan1.svg';




  }

}

function bodyOnload() {
  let game = new Game();
}
