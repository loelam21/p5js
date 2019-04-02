function jumper() {
  this.x = 100;
  this.y = 0;
  
  this.gravity = 0.5; //the force of gravity
  this.lift = -10; //opposing force
  this.velocity = 0; //speed of gravity
  
  this.show = function() {
    fill(color('red'));
    ellipse(this.x,this.y,50,50);
  }
  this.up = function() {
    this.velocity += this.lift;
  }
  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity *= 0.9; //air resistance
    
    //Prevent jumper from leaving the screen
    if (this.y > h) { //stop on floor
      this.y = h;
      this.velocity = -10; //-10 to bounce on floor
    }
    if (this.y < 0) { //stop on ceiling
      this.y = 0;
      this.velocity = 0;
    }
    
    if ((keyIsDown(65)) && (this.x > 25)) { //a key
      this.x -= 10; //move jumper left
    }
    if (keyIsDown(68) && (this.x < w - 25)) { //d key
      this.x += 10; //move jumper right
    }
  }
  
  this.collide = function() {
    onPlatform = collideRectCircle(platform.x,platform.y,platform.width,platform.height,this.x,this.y,50); //check if on the platform
    if (onPlatform) {
      this.velocity = -10; //-10 to bounce on floor
    }
  }
}