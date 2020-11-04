class Videopopup {
    constructor(videopopupImage) {
      this.image = videopopupImage;
      this.x = width;
      this.y = (Math.random() * height) / 2;
      this.width = 50;
      this.height = 50;
      this.counter = 0;
    }
  
   // collision function
    collision(playerInfo) {
      //console.log("this will be the collision", playerInfo);
      let videopopupX = this.x + this.width / 2;
      let videopopupY = this.y + this.height / 2;
      let playerX = playerInfo.x + playerInfo.width / 2;
      let playerY = playerInfo.y + playerInfo.height / 2;
  
      if (dist(videopopupX, videopopupY, playerX, playerY) > 50) {
        //console.log(game.player.score);
        return false;
      } else {
        game.score += 20;
        this.counter++; 
        return true;
      }
    }
  
    drawVideopopup() {
      this.x--;
      image(this.image, this.x, this.y, this.width, this.height);
      if (this.counter % 1 === 0) {
        rect(900, 20, 55, 55);
      }
    }

  } //class end
  