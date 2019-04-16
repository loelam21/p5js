function Barrier(randWidth,randHeight) {
  //randomly flies in from right to left
  this.x = w + 150; //spawns 100 to 500 pixels offscreen
  this.y = (Math.random() * (h + 10)); //don't spawn on top or in the ground //100

  this.width = randWidth; //100
  this.height = randHeight; //100
  this.radius = 60;
  
  this.gravity = 1.5;
  this.velocity = 0;
  
  this.show = function() {
    /*fill(color('blue'));
    ellipse(this.x,this.y,this.radius,this.radius);*/
    push();
    imageMode(CENTER);
    image(obstacleImg,this.x,this.y,this.width,this.height); //astronaut looks right
    pop();
  }
  
  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9; //air resistance
    this.x -= this.velocity;
    
    //make barriers keep coming
    if (this.x < (0 - this.width)) { //if barrier goes offscreen...
      this.x = w + 150; //spawns 100 to 500 pixels offscreen
      this.y = (Math.random() * (h + 10)); //don't spawn on top or in the ground
      randWidth = random(30,75);
      randHeight = random(30,75);

      this.velocity = 0; //reset velocity
      
      score++;
      document.getElementById("scoreid").innerHTML = "Score: " + score;
    }
    
    //increase speed of barriers every 50 barriers until 300
    if (score == 50) {
      this.gravity = 1.7;
      speedText();
    }
    else if (score == 100) {
      this.gravity = 1.9;
      speedText();
    }
    else if (score == 150) {
      this.gravity = 2.1;
      speedText();
    }
    else if (score == 200) {
      this.gravity = 2.3;
      speedText();
    }
    else if (score == 250) {
      this.gravity = 2.5;
      speedText();
    }
    else if (score == 300) { //max speed
      this.gravity = 2.7;
      speedText();
      document.getElementById('speedID').innerHTML = "Max speed!";
    }
  }
  
  this.collide = function() {
    hitObstacle = collideRectCircle(jumper.x,jumper.y,jumper.width,jumper.height,this.x,this.y,this.radius); //check if colliding //collideRectRect(this.x,this.y,this.height,this.height,jumper.x,jumper.y,jumper.width,jumper.height);
    if (hitObstacle) {
      /*clear();
      image(playerImgLeft,jumper.x,jumper.y,jumper.width,jumper.height); //replace astronaut with dead one
      setTimeout(function() {
        image(playerImgRight,jumper.x,jumper.y,jumper.width,jumper.height); //replace astronaut with dead one
      }, 300);*/
      noLoop();
      music.stop();
      deathSound.play();

      /*highestScore = localStorage.getItem("highestScore"); //see what the highest was
      if (score > highestScore) { //if score is larger that the highest...
        localStorage.setItem("highestScore",score); //save new highest to LS
        
        console.log(score);
        newHighest = createP("New High Score!");
        newHighest.position(w/2,h/2);
        newHighest.id("newHighest");
      }*/

      lose = createDiv("YOU DIED!");
      lose.id("lose"); //for style

      retry = createButton("Play Again");
      retry.position(w * 0.3,h * 0.7);
      retry.id("retry");
      retry.mousePressed(replay); //refresh page

      mainMenu = createButton("Main Menu");
      mainMenu.position(w * 0.64,h * 0.7)
      mainMenu.id("mainMenu");
      mainMenu.mousePressed(homePage); //goes to home page
    }
  }
}