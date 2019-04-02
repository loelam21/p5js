function platform() {
  this.x = w/2;
  this.y = h/2;
  
  this.width = 150;
  this.height = 90;
  
  this.show = function() {
    fill(color('green'));
    rect(this.x,this.y,this.width,this.height);
  }
}