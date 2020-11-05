class Popcorn {
    constructor(popcornImage) {
      this.image = popcornImage;
      this.x = width;
      this.y = (Math.random() * height) / 2;
      this.width = 50;
      this.height = 50;
    }
  
  
    collision(playerInfo) {
      //console.log("this will be the popcorn collision", playerInfo);
      let popcornX = this.x + this.width / 2;
      let popcornY = this.y + this.height / 2;
      let playerX = playerInfo.x + playerInfo.width / 2;
      let playerY = playerInfo.y + playerInfo.height / 2;
  
      if (dist(popcornX, popcornY, playerX, playerY) > 50) {
        return false;
      } else {
        game.score -= 10;
        return true;
      }
    }
  
    drawPopcorn() {
      this.x--;
      image(this.image, this.x, this.y, this.width, this.height);
    }
  }
  
