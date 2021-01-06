const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world
 function preload(){

 }
 
 function setup(){
     canvas = createCanvas(900, 700)
  engine = Engine.create()
  world = engine.world
  shape = new polygon(200, 400, 40, 40);
  constraint1 = new constraint(shape.body,{x:100,y:380})
  log1 = new object(350,430,200, 10);
  log2 = new object(600,350,150, 10);
  log3 = new object2(600,330,130,10);
  log4 = new object2(600,310,100,10)
  log5 = new object2(600,290,70,10)
  log6 = new object2(600,270,40,10)

  ground = new object(450,700,900,200);
  
  circle1 = new circles(335,425,20);
  circle2 = new circles(340,425,20);
  circle3 = new circles(345,425,20);
  circle4 = new circles(330,425,20);
  circle5 = new circles(350,425,20)
  circle6 = new circles(335,415,20);
  circle7 = new circles(340,415,20);
  circle8 = new circles(345,415,20);
  circle9 = new circles(340,405,20);
  
  rect1 = new object2(600,340,20,20);
  rect2 = new object2(630,340,20,20)
  rect3 = new object2(570,340, 20, 20);
  rect4 = new object2(540,340,20,20)
  rect5 = new object2(660,340,20,20)
  rect6 = new object2(555,320,20,20)
  rect7 = new object2(585,320,20,20)
  rect8 = new object2(615,320,20,20)
  rect9 = new object2(645,320,20,20)
  rect10 = new object2(570,300,20,20)
  rect11 = new object2(600,300,20,20)
  rect12 = new object2(630,300,20,20)
  rect13 = new object2(585,280,20,20);
  rect14 = new object2(615,280,20,20)
  rect15 = new object2(600,260,20,20)
 }
 function draw(){
  background("white")
  Engine.update(engine)
  shape.display();
  constraint1.display();
  strokeWeight(0)
  fill("black")
  log1.display();
  log2.display()
  fill("brown")
  ground.display();
  fill("teal")
  circle1.display();
  circle2.display()
  circle3.display();
  circle4.display();
  circle5.display();
  fill("pink")
  circle6.display()
  circle7.display();
  circle8.display();
  fill("skyblue")
  circle9.display();
  fill("purple")
  rect1.display();
  rect2.display();
  rect3.display()
  rect4.display()
  rect5.display()
  fill("lightgreen")
  log3.display()
  log4.display();
  log5.display()
  log6.display()
  fill("orange")
  rect6.display();
  rect7.display()
  rect8.display();
  rect9.display()
  fill("yellow")
  rect10.display()
  rect11.display()
  rect12.display()
  fill("grey")
  rect13.display()
  rect14.display()
  fill("darkblue")
  rect15.display()
  Space();
 drawSprites();
 }
 function mouseDragged(){
     Matter.Body.setPosition(shape.body,{x:mouseX,y:mouseY})
 }
 function mouseReleased(){
     constraint1.detach();
 }
 function Space(){
     if(keyDown("space")){
         constraint1.attach(shape.body)
     }
 }