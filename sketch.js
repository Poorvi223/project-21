var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 10, 100);
 bullet.velocityX = speed;
  bullet.shapeColor = "white"
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "blue";
}

function draw() {
  background("black");  
  
  if(hasCollided(bullet,wall))
   {
     bullet.velocityX=0;
     var damage=0.5 * weight * speed*speed/(thickness * thickness * thickness);
     
     if(damage>10)
     {
       wall.shapeColor = "red"
     }

     if(damage<10)
     {
       wall.shapeColor = "yellow"
     }
   }
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
   bulletrightEdge = lbullet.x+lbullet.width;
   wallleftEdge=lwall.x;
   if(bulletrightEdge>wallleftEdge)
   {
     return true;
   }
   else{
     return false;
   }
   

   

}