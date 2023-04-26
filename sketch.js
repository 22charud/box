var ball;
var edges 


function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,100,100);
  ball.velocityX=5
  edges = createEdgeSprites() 

  
}

function draw() 
{
  background(51);
  ball.bounceOff(edges[1])
  ball.bounceOff(edges[0])
  drawSprites();

}

