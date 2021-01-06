class circles{
    constructor(x,y,radius){
     this.body = Bodies.circle(x,y,radius,{density:0.0001,restitution:0.2});
     this.radius = radius;
     World.add(world,this.body)
    }
    display(){
        var body1 = this.body.position
        ellipseMode(RADIUS);
        ellipse(body1.x,body1.y,this.radius)
    }
}