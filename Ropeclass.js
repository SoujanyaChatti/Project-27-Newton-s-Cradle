class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            PointB:{x:this.offsetX,y:this.offsetY},
           
        }
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        strokeWeight(4);
        stroke("red");
        var c=pointB.x+this.offsetX;
        var d=pointB.y+this.offsetY;
        line(pointA.x,pointA.y-(this.offsetY*2.5),c,d);
    }
}