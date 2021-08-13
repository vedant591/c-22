
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
	var option1={
		restitution:0.95   
		}
		

	ball = Bodies.circle(100,20,20,option1);
  World.add(world,ball);
  




	

	//Create the Bodies Here.
	
	
	var option={
		isStatic:true

	}

	ground=Bodies.rectangle(500,680,200,500,option)
	World.add(world,ground)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  rect(ground.position.x,ground.position.y,950,10)
 ellipse(ball.position.x,ball.position.y,20)
}



