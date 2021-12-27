var backimg;
var paraimg;
var obs1;
var obs2;
function preload(){
backimg = loadImage("assets/bg.png")
paraimg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
obs1 = loadImage("assets/obsBottom2.png")
obs2 = loadImage("assets/obsbottom1.png")
}

function setup(){
createCanvas(900,500)
para = createSprite(110,220)
para.addAnimation("moving",paraimg)
para.scale = 0.4
}

function draw() {
  background(backimg)
text(mouseX+","+mouseY,mouseX,mouseY)
obstacle();
bulding();
 drawSprites();  
 
}
function obstacle(){
  if(frameCount%170===0 ){

  
 obstacle1 = createSprite(825,325)
 obstacle1.addImage("light",obs1)
 obstacle1.scale = 0.1
 obstacle1.velocityX = -3
}}
function bulding(){
  if (frameCount%100===0){
    obstacle2 = createSprite(871,325)
    obstacle2.addImage("building",obs2)
    obstacle2.scale = 0.1
    obstacle2.velocityX = -3
  }
}