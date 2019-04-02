function barrier() {
  //randomly flies in from right to left
  this.x = w + 100;
  this.y = (Math.random() * h);
  
  this.width = 50;
  this.height = 50;
  
  this.gravity = 0.9;
  this.velocity = 0;
  
  this.show = function() {
    fill(color('blue'));
    rect(this.x,this.y,this.width,this.height);
  }
  
  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9; //air resistance
    this.x -= this.velocity;
    
    //make barriers keep coming
    if (this.x < 0) {
      this.x = w + 100;
      this.y = (Math.random() * h);
    }
  }
  
  this.collide = function() {
    hitObstacle = collideRectCircle(this.x,this.y,this.height,this.height,jumper.x,jumper.y,50); //check if colliding
    if (hitObstacle) {
      window.alert("YOU LOSE!");
      noLoop();
    }
  }
}