var fixed_rect,moving_rect;
var gameobj1,gameobj2,gameobj3,gameobj4

function setup() {
  createCanvas(800,400);
  fixed_rect = createSprite(200, 200, 50, 50);
  fixed_rect.shapeColor = "violet"

  moving_rect = createSprite(300,300,50,50);


  gameobj1 = createSprite(100,200,50,50);
  gameobj1.shapeColor = "lightgreen";

  gameobj2 = createSprite(350,200,50,50);
  gameobj2.shapeColor = "lightgreen";

  gameobj3 = createSprite(450,200,50,50);
  gameobj3.shapeColor = "lightgreen";

  gameobj4 = createSprite(550,200,50,50);
  gameobj4.shapeColor = "lightgreen";

}

function draw() {
  background("pink");
  
  moving_rect.x = mouseX;
  moving_rect.y = mouseY;

 if (isTouching(moving_rect,gameobj4)){
     gameobj4.shapeColor = "red";
     moving_rect.shapeColor = "red";

 }
else{
  gameobj4.shapeColor = "lightgreen";
  moving_rect.shapeColor = "green";

}

  drawSprites();
}
