var sea,seaImg,ship,shipImage;

function preload(){
seaImg= loadImage("sea.png");
ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");
  //colocamos imagenes = createsprite 
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX=-5;
  sea.scale=0.3;

  ship = createSprite(130,200,30,30);
  shipImage.addAnimation("movingShip",shipImg1);
  ship.scale=0,25;
}

function draw() {
  background(0);
  sea.velocityX=-3;
  drawsprites;
}