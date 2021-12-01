let canvas;

function setup() {
  canvas = createCanvas(600, 400);
  canvas.parent('canvas');
  soundTrack.loop();
}

function draw() {
  background(imgRoad);
  mkActor();
  mkCar();
  moveCar();
  moveActor();
  carInitial();
  actorHit();
  showPoint();
  markPoint();
}
