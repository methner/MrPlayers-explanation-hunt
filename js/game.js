class Game {
    constructor() {}
    preloadGame() {
      //console.log("this is the game preload");
      this.backgroundImages = [
        { src: loadImage("../assets/background/turkis-1.png"), x: 0, speed: 0 },
        { src: loadImage("../assets/background/plx-2.png"), x: 0, speed: 1 },
        { src: loadImage("../assets/background/plx-3.png"), x: 0, speed: 2 },
        { src: loadImage("../assets/background/plx-4.png"), x: 0, speed: 3 },
        { src: loadImage("../assets/background/plx-5.png"), x: 0, speed: 4 },
      ];
      this.playerImage = loadImage("../assets/player/mr-player-fly.png");
      this.playbuttonImage = loadImage("../assets/playbutton/playbutton.png");
      this.popcornImage = loadImage("../assets/player/mr-player-fly.png");
      console.log("Here is the popcorn:", this.popcornImage);
    }
    setupGame() {
      //console.log("this is the game setup");
      //  initialize background + player here
      // NB: we DON'T initialize the coins here because we create them dynamically in the draw
      this.background = new Background(this.backgroundImages);
      this.player = new Player(this.playerImage);
      this.playbuttons = [];
      this.popcorns = [];
      this.testPopcorn = new Popcorn(this.popcornImage);
      console.log(this.testPopcorn);
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
      // if (frameCount % 360 === 0) {
      //   //console.log("this will be the popcorn push event");
      //   this.popcorns.push(new Popcorn(this.popcornImage));
      //   //console.log(this.popcorns);
      // }
  
      this.playbuttons.forEach(function (playbutton) {
        playbutton.drawPlaybutton();
      });
      //  call the draw functions for the player + the background
      this.playbuttons = this.playbuttons.filter((playbutton) => {
        if (playbutton.collision(this.player)) {
          return false;
        } else {
          return true;
        }
      });
      // define the obstacle drawing logic + add a new obstacle to  the array in the constructor with the image passed into it
      
      this.popcorns.forEach(function (popcorn) {
        popcorn.drawPopocorn();
      });
      //  call the draw functions for the player + the background
      this.popcorns = this.popcorns.filter((popcorn) => {
        if (popcorn.collision(this.player)) {
          return false;
        } else {
          return true;
        }
      });
    
    }
  }
  //|| playbutton.x < 0