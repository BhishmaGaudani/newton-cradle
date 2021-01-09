var roof,rope1,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
		createCanvas(800,700);

		engine = Engine.create();
		world = engine.world;

		roof = new Roof(350,100,300,30);
		world.add(world,roof);

		bobObject1 = new bob(250,300);
		bobObject2 = new bob(300,300);
		bobObject3 = new bob(350,300);
		bobObject4 = new bob(400,300);
		bobObject4 = new bob(450,300)

		rope1 = new Rope(bobObject1.body,roof.body,-100,0)
		world.add(world,rope1)

		rope2 = new Rope(bobObject2.body,roof.body,-100,0)
		world.add(world,rope2)

		rope3 = new Rope(bobObject3.body,roof.body,-100,0)
		world.add(world,rope3)

		rope4 = new Rope(bobObject4.body,roof.body,-100,0)
		world.add(world,rope4)

		rope4 = new Rope(bobObject5.body,roof.body,-100,0)
		world.add(world,rope5)






	
		
		

		
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===32){
		matter.body.applyForce(  bobObject1.body,  bobObject1.body.position,{x:-730,y:0})
	}
}



