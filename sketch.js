

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper;
var dustbin1,dustbin2,dustbin3;
var ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world;
  
  var paper = new Paper(200,450,40);
  var dustbin1 = new Dustbin(1000,height-22,200,20);
  var dustbin2 = new Dustbin(900,height-70,20,100);
  var dustbin3 = new Dustbin(1000,height-70,20,100);
  ground=new Ground(600,height,1200,20);

	//Create the Bodies Here.s


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}

}

