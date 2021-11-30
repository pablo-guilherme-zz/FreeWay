//Imagens do jogo
let imgRoad;
let imgActor;
let imgCar1;
let imgCar2;
let imgCar3;
//Sons do jogo
let soundTrack;
let soundHit;
let soundPoint;

function preload(){
  imgRoad = loadImage("src/img/estrada.png");
  imgActor = loadImage("src/img/ator-1.png");
  imgCar1 = loadImage("src/img/carro-1.png");
  imgCar2 = loadImage("src/img/carro-2.png");
  imgCar3 = loadImage("src/img/carro-3.png");
  imgCars = [imgCar1,imgCar2,imgCar3,imgCar1,imgCar2,imgCar3];
  soundTrack = loadSound("src/sound/trilha.mp3");
  soundHit = loadSound("src/sound/colidiu.mp3");
  soundPoint = loadSound("src/sound/pontos.wav");
}
