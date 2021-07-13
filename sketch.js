
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var leftBody, rightBody, baseBody 
var ground
var ball
  
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	leftBody =createSprite(580,610,10,100)
    leftBody.shapeColor = "white"
    rightBody =createSprite(780,610,10,100)
    rightBody.shapeColor = "white"
    baseBody =createSprite(680,660,200,10)
    baseBody.shapeColor = "white"
	
	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor= "purple"
	
	ball = new Paper(50,660);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();

  drawSprites();
 
}



