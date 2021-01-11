
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 paper1= new paper  (200,650,20)
dustbin1= new dustbin (600,655,100,10)
dustbin2= new dustbin (546,605,10,100)
dustbin3= new dustbin (646,605,10,100)
ground1= new ground (400,670,800,20)
	Engine.run(engine);
 

}


function draw() {
  rectMode(CENTER);
  background("white");
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode ===UP_ARROW) {
	  
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-30});
	   
	 }
   }


