const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin, ball, ground;
var world;

function setup(){
	createCanvas(1600,500);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbin = new Dustbin(1200,450);
	ball = new Paper(200,250,40);
	ground = new Ground(width/2,470,width,20);
	//Create a Ground

	Engine.run(engine);
}

function draw(){

	rectMode(CENTER);
	background(0);

	dustbin.display();
	ball.display();
	ground.display();

}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
		
	}
	

}