var tower1;
var tower2;

var wall1;
var wall2;

var mainwall;

var dome1;
var dome2;
var maindome;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  
  ground = rect(0,380,800,20);
  
  dome1 = ellipse(60,80,80,80);
  dome2 = ellipse(740,80,80,80);
  
  Tower1 = rect(20,80,80,300);
  Tower2 = rect(700,80,80,300);

  wall1 = rect(100,180,200,200);
  wall2 = rect(500,180,200,200);
  
  maindome = ellipse(400,130,200,200);
  
  mainwall = rect(300,130,200,250);

}
