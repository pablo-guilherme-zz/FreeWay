//Car

let xCars = [670,670,670,670,670,670];
let yCars = [40,95,150,205,260,315];
let speedCars = [2,2.5,3.2,5,3,2.1]

function mkCar(){
  for(let i=0; i < imgCars.length; i++){
  image(imgCars[i],xCars[i],yCars[i],60,40);
  }
}
function moveCar(){
  for(let i=0; i< imgCars.length; i++){
    xCars[i] -= speedCars[i];
  }
}
function carInitial(){
  for(let i=0; i< imgCars.length; i++){
    if(checkPass(xCars[i])){
    xCars[i] = 670;
    }
  }
}
function checkPass(xCars){
  return xCars < -70;
}