function setup() {
  createCanvas(600, 400);
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
