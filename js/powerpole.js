class Powerpole {
    constructor(powerpoleImage) {
      this.image = powerpoleImage;
      this.x = width;
      this.y = (Math.random() * height) / 2;
      this.width = 50;
      this.height = 100;

    }
  
   
    collision(playerInfo) {
      let powerpoleX = this.x + this.width / 2;
      let powerpoleY = this.y + this.height / 2;
      let playerX = playerInfo.x + playerInfo.width / 2;
      let playerY = playerInfo.y + playerInfo.height / 2;
  
      if (dist(powerpoleX, powerpoleY, playerX, playerY) > 50) {
        //console.log(game.player.score);
        return false;
      } else {
        game.losePlayer();
        return true;
      }
    }
  
    drawPowerpole() {
      this.x--;
      image(this.image, this.x, this.y, this.width, this.height);
    }
  }
  