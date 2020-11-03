const game = new Game();

function preload() {
  game.preloadGame();
}
function setup() {
  createCanvas(1000, 600);
  game.setupGame();
}
function draw() {
  clear();
  game.drawGame();
}

function keyPressed() {
  if (keyCode === 38) {
    game.player.jump();
  }
  //if (keyCode === 40) {
  //    game.player.jump(); //edit to opposite of jump
  //}
}
