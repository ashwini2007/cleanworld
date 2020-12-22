
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin,binImg;
var ground;
var garbage;
var dustbin;
var part1,part2,part3;
function preload()
{
	binImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
	world = engine.world;

	bin = createSprite(790,380,100,60);
	bin.addImage(binImg);
	bin.scale = 0.2;

	ground = new Ground(500,480,1000,20);
	garbage = new Paper(300,450,30,30);
	part1 = new Dustbin(900,410,20,100);
	part2 = new Dustbin(790,450,200,20);
	part3 = new Dustbin(700,410,20,100);

	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
  ground.display();
  garbage.display();
  keypressed();
  drawSprites();
}

function keypressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(Paper.paper.body,Paper.paper.Body.position , {x:85,y:85})
	}
}

