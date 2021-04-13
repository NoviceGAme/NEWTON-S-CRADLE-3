
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bob1=new Bob(140,250)
   bob2=new Bob(150,250)
   bob3=new Bob(170,250)
   bob4=new Bob(180,250)
   bob5=new Bob(190,250)
   
    pole1=new ground(width/2,100,width/2,40)
   
   rope1=new rope (bob1.ball,pole1.body,-130,0);
    rope2=new rope (bob2.ball, pole1.body , -80 ,0)
   rope3=new rope (bob3.ball, pole1.body , -30 ,0 )
   rope4=new rope (bob4.ball, pole1.body , 20,0)
   rope5=new rope (bob5.ball, pole1.body , 70,0)

   ground1=new ground(385,650,900,20)
   wall1=new ground(15,350,20,900)
   wall2=new ground (785,350,20,900)
   Engine.run(engine);


   

   
  
}


function draw() {
  rectMode(CENTER);
  background(55);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  ground1.display();
   wall1.display();
   wall2.display();


 
  drawSprites();

  pole1.display();
rope1.display();
  rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}

function keyPressed(){
if (keyCode === UP_ARROW ){
  Matter.Body.applyForce(bob1.ball,bob1.ball.position , {x:-100, y:-100}) 
}

}


