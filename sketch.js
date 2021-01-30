var gun, bullets, man;
var gunImg, bulletImg, manImg;
var score;
var gameState=0;


function preload(){
  gunImg=loadImage("gun.png");
  bulletImg=loadImage("bullet.png")
  manImg=loadImage("man.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
score=0;
 gun = createSprite(100,windowHeight/2,80,80);
 gun.addImage(gunImg);
 gun.scale=0.25;
 gun.velocityY=10;
 man = createSprite(windowWidth-100,windowHeight/2,80,80);
 man.addImage(manImg);
 man.scale=0.4;
}

function draw() {
  background("blue"); 
if(gameState==0){
  textSize(50);
  fill("red");
  text("DODGING BULLETS",windowWidth/2-180,windowHeight/2-190);
textSize(25);
  text("PRESS SPACE TO PLAY THE GAME",windowWidth/2-500,windowHeight/2);
  text("Rule: Press up and down arrow key to control the man",windowWidth/2-500,windowHeight/2-50);
  if(keyDown("space")){
    gameState=1;
  }
}
if(gameState==1){
  if(keyDown(UP_ARROW)){
    man.y=man.y-5;
  }
  if(keyDown(DOWN_ARROW)){
    man.y=man.y+5;
  }
 
  spawnBullets();

  
 score=score+Math.round(frameRate()/30);
 textSize(20);
 fill("black");
 text("score:"+score,200,50);
  
  edges=createEdgeSprites();
  gun.bounceOff(edges);
  man.collide(edges);

  drawSprites();
}
}

function spawnBullets(){
  if(frameCount%40==0){
    bullets = createSprite(150,gun.y,40,40);
    bullets.addImage(bulletImg);
    bullets.scale=0.25;
    bullets.velocityX=10;
    bullets.lifetime=150;
  }
}