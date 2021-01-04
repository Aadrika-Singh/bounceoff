
var fixrect, movrect,r1,r2,r3,r4, ob1,ob2, r5, r6;
function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 30, 30);
  movrect=createSprite(150,200,30,30);
  r1=createSprite(100,200,30,30);
  r2=createSprite(200,200,30,30);
  r3=createSprite(300,200,30,30);
  r4=createSprite(500,200,30,30);
  r5=createSprite(250,10,30,30);
  r6=createSprite(250,300,30,30);
  fixrect.shapeColor = "red";
  movrect.shapeColor = "red";
  r1.shapeColor = "red";
  r2.shapeColor = "red";
  r3.shapeColor = "red";
  r4.shapeColor = "red";
  r5.shapeColor = "blue";
  r6.shapeColor = "yellow";
  r5.velocityY=4;
  r6.velocityY=-4;
}

function draw() {
  background(100,25,55);  
  movrect.x = World.mouseX;
  movrect.y = World.mouseY;  
  console.log(movrect.width/2+fixrect.width/2);
  isTouching(movrect, fixrect);
  isTouching(movrect,r1);
  isTouching(movrect,r2);
  isTouching(movrect,r3);
  isTouching(movrect,r4);
  bounceOff(r5,r6);
  drawSprites();
}
