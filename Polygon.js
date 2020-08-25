class Polygon {
    constructor(x,y,radius) {
      var options = {
          restitution:0.4,
          density:1.0
      }
      this.radius=radius;
      this.body = Bodies.circle(x,y,radius,options);
      this.image=loadImage("images.png");
      World.add(world,this.body);
    }
    display(){ 
     var pos=this.body.position;
     var angle=this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     fill("yellow");
     imageMode(CENTER);
     image(this.image, 0, 0, 40, 40);
      pop();
    }
  }
  