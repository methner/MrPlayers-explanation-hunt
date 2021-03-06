class Player {
    constructor(playerImage) {
      this.image = playerImage;
      this.height = 140;
      this.width = 100;
      this.x = 0;
      this.y = height - this.height;
      this.gravity = 0.12;
      this.velocity = 1;
      //this.score = 0;
    }

    drawPlayer() {
      this.velocity += this.gravity;
      this.y += this.velocity;
      if (this.y >= height - this.height) {
        this.y = height - this.height;
      }
      image(this.image, this.x, this.y, 150, 150);
    }
    
    // jump function
    jump() {
      if (this.y === height - this.height) {
        this.velocity = -11;
        //console.log("this will be the jump");
      }
    } 
  } // end class player
  