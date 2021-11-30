//Actor
let yActor = 369;
let xActor = 100

let hit = false;
let point = 0;

function mkActor(){
  image(imgActor,xActor,yActor,26,26);
}

function moveActor(){
  if(keyIsDown(UP_ARROW)){
    yActor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(checkMove()){
      yActor += 3;
    }
  }
}
function actorHit(){
  for(let i=0; i < imgCars.length; i++){
    hit =collideRectCircle(xCars[i],yCars[i],60,40,xActor,yActor,15);
    if(hit){
      actorReset();
      soundHit.play();
      if(checkPoint()){
        point -=1;
      }
    }
  }
}
function actorReset(){
  yActor = 369
}
function showPoint(){
  fill(color('#EBED06'))
  textSize(25);
  text(point,width/3,30);
}
function markPoint(){
  if(yActor < 15){
    point +=1;
    soundPoint.play();
    actorReset();
  }
}
//Functions Check
function checkPoint(){
  return point >0;
}
function checkMove(){
  return yActor < 369;
}