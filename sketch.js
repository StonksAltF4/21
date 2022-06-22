
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var g
var l1
var l2



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ballop ={

    isStatic : false,
    restitution : 0.3,
    friction : 0,
    density : 1.2
	}
	var op ={
    isStatic : true
	}
 ball=Bodies.circle(20,680,30,ballop)
 World.add(world,ball)
g = Bodies.rectangle(400,700,800,30,op)
World.add(world,g)
l1= Bodies.rectangle(750,680,30,150,op)
World.add(world,l1)
l2=Bodies.rectangle(650,680,30,150,op)
World.add(world,l2)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,10)
rect(g.position.x,g.position.y,800,30)
rect(l1.position.x,l1.position.y,30,150)
rect(l2.position.x,l2.position.y,30,150)
}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0 , y:0},{x: 15 , y : -15})
}

}


