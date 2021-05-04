var fixedRect, movingRect;
var laptop, phone, tab, earphones;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  laptop = createSprite(100,100,50,50);
  laptop.shapeColor = "grey";
  phone = createSprite(100,200,50,50)
  phone.shapeColor = "blue";
  tab = createSprite(100,300,50,50);
  tab.shapeColor = "aqua";
  earphones = createSprite(100,400,50,50);
  earphones.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,laptop)){
    movingRect.shapeColor = "red";
  laptop.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    laptop.shapeColor = "grey";
  }
  if(isTouching(movingRect,phone)){
    movingRect.shapeColor = "red";
  phone.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    phone.shapeColor = "blue";
  }
  if(isTouching(movingRect,tab)){
    movingRect.shapeColor = "red";
  tab.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    tab.shapeColor = "aqua";
  }
  if(isTouching(movingRect,earphones)){
    movingRect.shapeColor = "red";
  earphones.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    earphones.shapeColor = "yellow";
  }
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}
