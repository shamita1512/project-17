var ball,img,paddle,ball_image,paddle_image,edges;
function preload() {
  
  ball_image = loadImage("ball.png");
  paddle_image = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(50,200,10,10);
  paddle = createSprite(360,200,10,40);
  ball.velocityX = 9;
  ball.addImage("ball.png",ball_image);
  paddle.addImage("paddle.png",paddle_image);

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(paddle);
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  
  ball.velocityY = random(2,10);
  
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.bounceOff(edges);
  
  if(keyDown(UP_ARROW))
  {
     paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 20;
  }
  drawSprites();
  
}



