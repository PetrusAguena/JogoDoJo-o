
var joão , carro1
function setup(){
  createCanvas(500,500)
  joão = createSprite (10,220,20,20);
  carro1 = createSprite (200,200,20,20);
  

}







function draw(){
  if (keyIsDown(RIGHT_ARROW)) {
    joão.position.x +=3
  
  }
  if (keyIsDown(LEFT_ARROW)) {
    joão.position.x -=3
  
  }if (keyIsDown(UP_ARROW)) {
    joão.position.y -=3
  
  }
  if (keyIsDown(DOWN_ARROW)) {
    joão.position.y +=3
  
  }

  background(0);
  var boundary1 = createSprite(200,0,600,10);
  boundary1.shapeColor = "blue";
  var boundary2 = createSprite(200,500,600,10);
  boundary2.shapeColor = "blue";
  var boundary3 = createSprite(0,200,10,600);
  boundary3.shapeColor = "blue";
  var boundary4 = createSprite(500,200,10,600);
  boundary4.shapeColor = "blue";
  if (keyIsDown("space")) {
    start();
  } 
  





  carro1.collide(boundary1);
  carro1.collide(boundary2);
  carro1.collide(boundary3);
  carro1.collide(boundary4); 
  joão.collide(boundary1);
  joão.collide(boundary2);
  joão.collide(boundary3);
  joão.collide(boundary4);
  
  
  if (carro1.collide(boundary2)){
    carro1.position.y -=10

  }
  if (carro1.collide(boundary1)){
    carro1.position.y +=10

  }
drawSprites();


}
function start() {

  carro1.velocityY +=5;

}

