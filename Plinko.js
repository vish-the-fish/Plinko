class Plinko{
    constructor(x,y){
       var options = {
           restitution:0.4
       }
       
       this.body = Bodies.circle(x, y, 10,options);
       this.color = color(random(0,255),random(0,255),random(0,255));
       this.r = 10;
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
