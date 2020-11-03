class Playbutton {
    constructor(playbuttonImage) {
      this.image = playbuttonImage;
      this.x = width;
      this.y = (Math.random() * height) / 2;
      this.width = 50;
      this.height = 50;
      // define the images,size and x/y values in the constructor
    }
  
    //   define the collision function
    collision(playerInfo) {
      console.log("this will be the collision", playerInfo);
      let playbuttonX = this.x + this.width / 2;
      let playbuttonY = this.y + this.height / 2;
      let playerX = playerInfo.x + playerInfo.width / 2;
      let playerY = playerInfo.y + playerInfo.height / 2;
  
      if (dist(playbuttonX, playbuttonY, playerX, playerY) > 50) {
        console.log(game.player.score);
        return false;
      } else {
        game.player.score += 10;
        
        return true;
      }
    }
  
    drawPlaybutton() {
      this.x--;
     // this.collision(game.player);
      image(this.image, this.x, this.y, this.width, this.height);
    }
  }
  