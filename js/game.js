class Game {
    constructor() {}
    preloadGame() {
      //console.log("this is the game preload");
      this.backgroundImages = [
        { src: loadImage("../assets/background/mountain-0.png"), x: 0, speed: 0 },
        { src: loadImage("../assets/background/mountain-1.png"), x: 0, speed: 1 },
        { src: loadImage("../assets/background/mountain-2.png"), x: 0, speed: 2 },
        { src: loadImage("../assets/background/mountain-3.png"), x: 0, speed: 3 },
        { src: loadImage("../assets/background/mountain-5.png"), x: 0, speed: 4 },
      ];
      this.playerImage = loadImage("../assets/player/mr-player-fly.png");
      this.playbuttonImage = loadImage("../assets/playbutton/playbutton.png");
      this.videopopupImage = loadImage("../assets/playbutton/videopopup.png");
      this.popcornImage = loadImage("../assets/popcorn/popcorn.png");
      this.powerpoleImage = loadImage("../assets/powerpole/powerpole.png");
      this.score = 0;
     
    }
    setupGame() {
      //console.log("this is the game setup");
      this.background = new Background(this.backgroundImages);
      this.player = new Player(this.playerImage);
      this.playbuttons = [];
      this.videopopups = [];
      this.popcorns = [];
      this.powerpoles = [];
    }
  
    drawGame() {
      // console.log("this is the game draw");
      this.background.drawBackground();
      this.player.drawPlayer();
      if (frameCount % 270 === 0) {
        //console.log("this will be the push event");
        this.playbuttons.push(new Playbutton(this.playbuttonImage));
        //console.log(this.playbuttons);
      }

      if (frameCount % 600 === 0) {
        this.videopopups.push(new Videopopup(this.videopopupImage));
      }

      if (frameCount % 450 === 0) {
        this.popcorns.push(new Popcorn(this.popcornImage));
      }

      if (frameCount % 2700 === 0) {
        this.powerpoles.push(new Powerpole(this.powerpoleImage));
      }

      //score
      fill(255, 255, 255, 100);
        textSize(24);
        text(`Your score is ${this.score} points`, 50, 40);


  
      this.playbuttons.forEach(function (playbutton) {
        playbutton.drawPlaybutton();
      });
      //  collision with playbuttons
      this.playbuttons = this.playbuttons.filter((playbutton) => {
        if (playbutton.collision(this.player)) {
          return false;
        } else {
          return true;
        }
      });
      
      this.videopopups.forEach(function (videopopup) {
        videopopup.drawVideopopup();
      });
   
      this.videopopups = this.videopopups.filter((videopopup) => {
        if (videopopup.collision(this.player)) {
          return false;
        } else {
          return true;
        }
      });
      

      
      this.popcorns.forEach(function (popcorn) {
        popcorn.drawPopcorn();
      });
  
      this.popcorns = this.popcorns.filter((popcorn) => {
        if (popcorn.collision(this.player)) {
          return false;
        } else {
          return true;
        }
      });

      this.powerpoles.forEach(function (powerpole) {
        powerpole.drawPowerpole();
      });

      this.powerpoles = this.powerpoles.filter((powerpole) => {
        if (powerpole.collision(this.player)) {
          return false;
        } else {
          return true;
        }
      });
      



    } //end draw

    winPlayer() {
      frameRate(0);       
      this.winRectangle();
      text(`You win! 
      Reload page to beat your score`, width/2, height/2);
      

      // game.setupGame();
  }

    losePlayer() {
      frameRate(0);       
      this.winRectangle();
      text(`Game Over! 
      Press Space to try again`, width/2, height/2);
      game.preloadGame();
      game.setupGame();

      // game.setupGame();
  }

    winRectangle (){
      fill(0,0,0);
      rect(width/3, height/3, 333, 267, 20, 20, 20, 20);
      fill(255, 255, 255, 100);
      textSize(48);
      textAlign(CENTER,CENTER)
  }

    loseRectangle (){
      fill(1,2,3);
      rect(width/2, height/2, 55, 55, 20);
      fill('orange');
      textSize(48);
      textAlign(CENTER,CENTER)
}

  } // end class
  //|| playbutton.x < 0