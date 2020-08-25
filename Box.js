class  Box extends BaseClass {
  constructor(x, y,width,height){
    super(x,y,width,height);
    this.visibility = 255;
    this.image= loadImage("box.png");
  }

  score(){
    if(this.visibility<0 && this.visibility >=-1005){
      score++;
   }
  }

 display(){
   console.log(this.body.speed);
   if(this.body.speed < 10){
    super.display();
   }
   else{
     World.remove(world, this.body);
     this.visibility = this.visibility - 5;
     tint(255,this.visibility);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
   }
  }
    
   
 }
