function Ground() { 
  this.x = 0;
  this.y = h * 0.95;
  
  this.width = w;
  this.height = 90;
  
  this.show = function() {
    fill(color('green'));
    rect(this.x,this.y,this.width,this.height);
  }

  this.collide = function() {
    onGround = collideRectRect(this.x,this.y,this.width,this.height,jumper.x,jumper.y,jumper.width,jumper.height); //check if on the ground
    if (onGround) {
      jumper.velocity = -10; //-10 to bounce on floor
    }
  }
}