class Popcorn {
    constructor(popcornImage) {
      this.image = popcornImage;
      this.x = width;
      this.y = (Math.random() * height) / 2;
      this.width = 50;
      this.height = 50;
      // define the images,size and x/y values in the constructor
    }
  
    //   define the collision function
    collision(playerInfo) {
      //console.log("this will be the popcorn collision", playerInfo);
      let popcornX = this.x + this.width / 2;
      let popcornY = this.y + this.height / 2;
      let playerX = playerInfo.x + playerInfo.width / 2;
      let playerY = playerInfo.y + playerInfo.height / 2;
  
      if (dist(popcornX, popcornY, playerX, playerY) > 50) {
        //console.log(game.player.score);
        return false;
      } else {
        game.score -= 10;
        return true;
      }
    }
  
    drawPopcorn() {
      this.x--;
     // this.collision(game.player);
      image(this.image, this.x, this.y, this.width, this.height);
    }
  }
  