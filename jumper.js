function Jumper() {
  this.x = 100;
  this.y = 400;

  this.width = 80;
  this.height = 80;
  
  this.gravity = 0.5; //the force of gravity
  this.lift = -10; //opposing force
  this.velocity = 0; //speed of gravity
  
  this.show = function() {
    /*fill(color('red'));
    rect(this.x,this.y,this.width,this.height);
    imageMode(CORNER);*/
    if (leftRight == "right") {
      image(playerImgRight,this.x,this.y,this.width,this.height); //astronaut looks right
    }
    else if (leftRight == "left") {
      image(playerImgLeft,this.x,this.y,this.width,this.height); //astronaut looks left
    }
  }
  this.up = function() {
    this.velocity += this.lift;
  }
  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity *= 0.9; //air resistance
    
    //Prevent jumper from leaving the screen
    if (this.y > floorBounce) { //stop on floor
      this.y = floorBounce;
      this.velocity = -10; //-10 to bounce on floor
    }
    if (this.y < 0) { //stop on ceiling
      this.y = 0;
      this.velocity = 0;
    }
    
    if ((keyIsDown(65)) && (this.x > 25)) { //a key
      this.x -= 10; //move jumper left
      leftRight = "left"; //astronaut looks left
    }
    if (keyIsDown(68) && (this.x < w - 25)) { //d key
      this.x += 10; //move jumper right
      leftRight = "right"; //astronaut looks right
    }
  }

}