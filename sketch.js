const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;
var stand1,box1;
var ground;
var backgroundImg;

var bg = "bg3.png";
var score = 0;

function preload() {
  setbackground();
}




function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  

stand1 = new Stand(390,300,200,10)
//ground = new Stand(400,height,600,5)
  box1 = new Box(320,275,20,20);
  box2 = new Box(340,275,20,20);
  box3 = new Box(360,275,20,20);
  box4 = new Box(380,275,20,20);
  box5 = new Box(400,275,20,20);
  box6 = new Box(420,275,20,20);
  box7 = new Box(440,275,20,20);
  box8 = new Box(330,255,20,20);
  box9 = new Box(350,255,20,20);
  box10 = new Box(370,255,20,20);
  box11 = new Box(390,255,20,20);
  box12 = new Box(410,255,20,20);
  box13 = new Box(430,255,20,20);
  box14 = new Box(340,235,20,20);
  box15 = new Box(360,235,20,20);
  box16 = new Box(380,235,20,20);
  box17 = new Box(400,235,20,20);
  box18 = new Box(420,235,20,20);
  box19 = new Box(350,215,20,20);
  box20 = new Box(370,215,20,20);
  box21 = new Box(390,215,20,20);
  box22 = new Box(410,215,20,20);
  box23 = new Box(360,195,20,20);
  box24 = new Box(380,195,20,20);
  box25 = new Box(400,195,20,20);
  box26 = new Box(370,175,20,20);
  box27 = new Box(390,175,20,20);
  box28 = new Box(380,155,20,20);
  polygon= new Polygon(100,200,20);
  slingshot = new SlingShot(polygon.body,{x:100, y:200});
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
}
noStroke();
text("SCORE :"+score,720,40);
  Engine.update(engine);
  
  stand1.display();
 // ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box22.display();
  box21.display();
  box28.display();
  polygon.display();
  slingshot.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();

}
  function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
  }
async function setbackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsejson = await response.json();
  console.log(responsejson);
  var datetime = responsejson.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=6 && hour<=19){
      bg = "bg3.png";
  }
  else{
      bg = "bg.png";
  }
  backgroundImg=loadImage(bg);
}
