var car,wall,speed,weight
var deformation

function setup() {
  createCanvas(1500,400);
car= createSprite(50,200,80,30)
  wall = createSprite(1400,200,30,130)
  car.shapeColor="blue"
  wall.shapeColor="brown"

  speed= random(50,95)
  weight = random(400,1500)

  car.velocityX= speed
}

function draw() {
  background(0);  





deformation= (0.5 * speed * speed * weight)/22500






if(car.x - wall.x <= car.width/2 + wall.width/2
  && wall.x - car.x <= car.width/2 + wall.width/2
   ){
car.velocityX=0
 if(deformation<100){
   car.shapeColor="green"
 }else if(deformation >100 && deformation < 180){
  car.shapeColor="yellow"
 }else if(deformation > 180){
  car.shapeColor="red"
 }
}else{

  car.shapeColor="blue"
  wall.shapeColor="brown"
}

  
  drawSprites();
}