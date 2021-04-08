var h1,h2,h3,h4,h5,m1,m2,m3;
var gameState = 0;
function preload() {
  


}
function setup() {
  createCanvas(800,500);
 
  h1 = createSprite(40, 50, 30, 50);
  h1.shapeColor = "blue";
  
  h2 = createSprite(40, 150, 30, 50);
  h2.shapeColor = "blue";
  
  h3 = createSprite(40, 250, 30, 50);
  h3.shapeColor = "red";

  h4 = createSprite(40, 350, 30, 50);
  h4.shapeColor = "blue";

  h5 = createSprite(40, 450, 30, 50);
  h5.shapeColor = "blue";

  m1 = createSprite(500, 200, 50, 80);
  m1.shapeColor = "green";

  m2 = createSprite(600, 200, 50, 80);
  m2.shapeColor = "green";

  m3 = createSprite(700, 200, 50, 80);
  m3.shapeColor = "green";



}

function draw() {
  background(0);  
   
  if(gameState === 0){
    if(frameCount >=10 && frameCount<=60){
      textFont('Georgia');
      fill("white")
      textSize(45)
      text("3",360,200);
    }
    if(frameCount >=70 && frameCount<=120){
      textFont('Georgia');
      fill("white")
      textSize(45)
      text("2",360,200);
    }
    if(frameCount >=130 && frameCount<=180){
      textFont('Georgia');
      fill("white")
      textSize(45)
      text("1",360,200);
    }

    if(frameCount >=190 && frameCount<=240){
      textFont('Georgia');
      fill("white")
      textSize(45)
      text("Go!",360,200);
    }
    if(frameCount >=250){
      gameState = 1;
    }
  }

  if(gameState === 1){

    textFont('Georgia');
    fill("white")
    textSize(45)
    text("Move with arrow keys",160,50);

   if(keyDown("up_arrow")){
     h3.y = h3.y - 2;
   }

   if(keyDown("down_arrow")){
    h3.y = h3.y + 2;
  }

  if(keyDown("left_arrow")){
    h3.x = h3.x - 2;
  }

  if(keyDown("right_arrow")){
    h3.x = h3.x + 2;
  }
 
  //m1 AI
  if(h1.x < m1.x){
    m1.velocityX = -1
  }

  if(h1.x > m1.x){
    m1.velocityX = 1
  }

  if(h1.y < m1.y){
    m1.velocityY = -1
  }

  if(h1.y > m1.y){
    m1.velocityY = 1
  }

  //h1 AI
  if(m2.x < h1.x){
    h1.velocityX = -1
  }

  if(m2.x > h1.x){
    h1.velocityX = 1
  }

  if(m2.y < h1.y){
    h1.velocityY = -1
  }

  if(m2.y > h1.y){
    h1.velocityY = 1
  }
  
  //m2 AI
  if(h2.x < m2.x){
    m2.velocityX = -1
  }

  if(h2.x > m2.x){
    m2.velocityX = 1
  }

  if(h2.y < m2.y){
    m2.velocityY = -1
  }

  if(h2.y > m2.y){
    m2.velocityY = 1
  }

  h1.collide(m1)
  h1.collide(m2)
  h1.collide(m3)
  h1.collide(m4)
  h1.collide(m5)
  h1.collide(h2)
  h1.collide(h3)
  h1.collide(h4)

  drawSprites();
  }
  
  
  
}