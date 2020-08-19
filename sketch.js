var  ball;
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bowl1,bowl2,bowl3;
function preload()
{
	
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	bowl1=createSprite(600,655,150,10);
	bowl2=createSprite(525,635,10,50);
	bowl3=createSprite(675,635,10,50);
	bowl1.shapeColor="red";
	bowl2.shapeColor="red";
	bowl3.shapeColor="red";

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;


	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  // ellipseMode();
   ball = ellipse(100,630);
   
   }


function draw() {
  rectMode(CENTER);
  background(1,1,1,1,1,1,2,2,2,2,2,);

    drawSprites();
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{y:85,x:85});
	
}
}