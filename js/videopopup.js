class Videopopup {
    constructor(videopopupImage) {
      this.image = videopopupImage;
      this.x = width;
      this.y = (Math.random() * height) / 2;
      this.width = 50;
      this.height = 50;
      this.urls = ["https://youtu.be/F9YH0n0eI-k", "https://youtu.be/axs2amXT6FM", "https://youtu.be/18qpcSwdRk0", "https://youtu.be/8q7_aV8eLUE", "https://youtu.be/Gbv2BIi9i58", "https://youtu.be/4WPHbzNfzKA", "https://youtu.be/_RaO4y_obYc", "https://youtu.be/mFSwWesKM-w", "https://youtu.be/zt0bR5PWybc"]
    }
  
    collision(playerInfo) {
      let videopopupX = this.x + this.width / 2;
      let videopopupY = this.y + this.height / 2;
      let playerX = playerInfo.x + playerInfo.width / 2;
      let playerY = playerInfo.y + playerInfo.height / 2;
  
      if (dist(videopopupX, videopopupY, playerX, playerY) > 50) {
        return false;
      } else {
        game.score += 20;
        let randomIndex = Math.floor(Math.random() * this.urls.length-1);
        let url = this.urls[randomIndex];
        window.open(url);
        return true;
      }
    }
  
    drawVideopopup() {
      this.x--;
      image(this.image, this.x, this.y, this.width, this.height);
    }

  } //class end
  