let mic;
// let value = 205;
// let detailX;
let z = 0;
var jit;
var bug = [];
var one;



function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);

  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
    for (let i = 0; i <= 50; i++) {
    bug[i] = new JitterBug(
      random(windowWidth),
      random(windowHeight),
      random(50)
    );
  }
}

function draw() {
    fill(100);
  stroke(random(255), random(255), random(255));

  if (mouseIsPressed === true) {
    bug[z] = new JitterBug(mouseX, mouseY, mic.getLevel() * 700);
    z++;
  }

  for (let i = 0; i < bug.length; i++) {
    bug[i].move();
    bug[i].display();
  }

  frameRate(50);
  micLevel = mic.getLevel();
  let y = micLevel * 100;
  valOne = width;
  valTwo = height;
  background(200, 100, 50);
  for (let i = 0; i < bug.length; i++) {
    bug[i].move();
    bug[i].display();
  }
  valOne = random(width);
  valTwo = random(height);
  mouse();
  face();
  eyes(mouseX, mouseY);
  mouth();
  mouse();
}

function face(xPos, yPos) {
  stroke(100);
  fill(255, 204, 204);
  beginShape();
  vertex(width / 1.1, height / 6);
  vertex(width / 2, height / 6);
  vertex(width / 4, height / 2);
  vertex(width / 2, height / 2);
  vertex(width / 2, height / 1.2);
  vertex(width / 1.75, height / 1.1);
  vertex(width / 1.1, height / 1.1);
  endShape(CLOSE);

  micLevel = mic.getLevel();
  let y = height - (micLevel / 0.5) * height;

  stroke(100);
  fill("#E91E63");
  beginShape();
  // vertex(width/2, height/6);
  // vertex(width/1.1, height/3);
  // vertex(width/1.1, height/6);
  triangle(
    width / 1.8 + mic.getLevel() * 200,
    height / 6,
    width / 1.1,
    height / 3,
    width / 1.1,
    height / 10
  );
  endShape(CLOSE);
}

function eyes(xPos, yPos) {
  //left eye
  fill(300);
  let x2 = map(mouseX, windowHeight / 3, width, width / 1.8, width * 0.7, true);
  ellipse(x2, windowHeight / 3, windowWidth / 7, 25);
  // left pupil
  fill(random((102, 255, 255)), random(100), random(200));
  let x1 = map(mouseX, width / 3, width, width / 2, width * 0.75, true);
  ellipse(x1, windowHeight / 3, 25, 25);

  //otherlefteye
  fill(300);
  let x3 = map(
    mouseX,
    windowHeight / 3,
    width,
    width * 0.35,
    width * 0.4,
    true
  );
  ellipse(x3, windowHeight / 3, windowWidth / 7, 25);
  fill(random((102, 255, 255)), random(100), random(200));
  let x4 = map(mouseX, width / 3, width, width * 0.3, width * 0.45, true);
  ellipse(x4, windowHeight / 3, 25, 25);
}

function mouth() {
  fill(random((102, 255, 255)), random(100), random(200));
  micLevel = mic.getLevel();
  let y = height - (micLevel / 0.5) * height;
  ellipse(width / 1.7, height / 1.4, width / 5, 1 + mic.getLevel() * 500);
}
function mouse(posX, posY) {
  micLevel = mic.getLevel();
  let y = height - (micLevel / 0.5) * height;
  circle(mouseX, mouseY, mic.getLevel() * 200);
}
function windowResized() {
  resizeCanvas(windowWidth, windowWidth);

}
function JitterBug(tempX, tempY, tempDiameter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 5.5;

  this.move = function () {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function () {
    ellipse(
      this.x,
      this.y,
      this.diameter * mic.getLevel() * 10,
      this.diameter * mic.getLevel() * 10
    );
  };
}