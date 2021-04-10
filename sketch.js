function preload(){
 
 santa1=loadAnimation("santa1.gif","santa2.gif","santa3.gif","santa4.gif");
 kid1=loadAnimation("kid1.gif","kid2.gif","kid3.gif","kid4.gif");
 bg1 = loadImage('snow1.jpg')
}









function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var bg = createSprite(400,200)
  bg.addImage(bg1)
  var santa = createSprite(100,350,10,10)
  var kid = createSprite(400,350,10,10)
  santa.addAnimation("walk",santa1)
kid.addAnimation("walking",kid1)
santa.scale = 0.2
kid.scale= 0.2
bg.scale=2

}

function draw() {
  background(255,255,255);  
  drawSprites();
}