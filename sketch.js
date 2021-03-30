var groundbody,ballbody;
var paperimage,dustbinimage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	binimg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(600, 600);

 var groundsprite= createSprite(300,580,600,20);
 groundsprite.shapeColor=color("yellow");
 var dustbinsp = createSprite(450,440,280,280);
 dustbinsp.addImage(binimg);
 dustbinsp.scale=0.8;
 
	engine = Engine.create();
	world = engine.world;

	b1=new dustbin(400,520,20,100);
	b2=new dustbin(460,560,120,20);
	b3=new dustbin(530,520,20,100);
	
	//Create the Bodies Here.
	
groundbody=Bodies.rectangle(300,550,600,20,{isStatic:true});
World.add(world,groundbody);

ballbody= new ball(80,260,70);
attach = new launcher(ballbody.body,{x:80,y:260});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  b1.display();
  b2.display();
  b3.display();
  
  ballbody.display();
  
  drawSprites();
 
}



function mouseDragged(){
    Matter.Body.setPosition(ballbody.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    attach.fly();
}