class Bob{
    constructor(x,y){
        var options={
          'isStatic':false,
          'restitution':1,
          'friction':0,
          'density':0.95
        }
        this.body=Matter.Bodies.circle(x,y,30,options);
        this.radius=30;
        
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(pos.x,pos.y,this.radius);
        
    }
  

    }
    