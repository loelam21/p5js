function Rocket() {
    this.x = 100;//jumper.x;
    this.y = 280; //jumper.y;

    this.width = 165;
    this.height = 220;

    this.show = function() {
        image(rocketImg,this.x,this.y,this.width,this.height);
    }

    this.move = function() {
        this.y -= 10; //move up offscreen
    }
}