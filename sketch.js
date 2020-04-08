const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,800/2,800);
  
  Tower1 = new Box(60,200,80,300);
  Tower2 = new Box(740,200,80,300);

  wall1 = new Box(200,200,200,200);
  wall2 = new Box(600,200,200,200);

  entrancewall = new Box(400,200,200,250);

}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  ground.display();
  Tower1.display();
  Tower2.display();

  wall1.display();
  wall2.display();

  entrancewall.display();

}