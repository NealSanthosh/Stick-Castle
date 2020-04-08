class Ground {
    constructor(x,y,width){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, 20, options);
        this.width = width;
        this.height = 20;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
    }
}