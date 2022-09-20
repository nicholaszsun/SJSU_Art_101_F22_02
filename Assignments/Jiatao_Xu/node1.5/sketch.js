//ART101 node1.5

//by Jiatao Xu
//Modified jitterbug


//made jitterbug into a class obj
//mic input volume correlate with the size of the worm

//added gravity
////Arrow key control direction of the gravitational force (UP DOWN LEFT RIGHT)
//////*No diagonal movement at the moment

let mic, micLevel,
    pings = [],
    pingsOrg = [],
    ct = 0,
    directionX,
    directionY,
    b_reset,
    deltaT = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  mic = new p5.AudioIn();
  mic.start();

  alert("press anywhere to begin mic input\nARROW keys to control gravity\nenjoy");


  ct = 50;
  for (let i = 0; i < ct; i++) {
    tempW = random(width);
    tempH = random(height);

    pings[i] = new Ping(tempW, tempH, random(20, 50), random(1.0, 2.0));
    pingsOrg[i] = createVector(tempW, tempH);
  }
}

function draw() {
  micLevel = mic.getLevel();

  if (deltaT > 500) {
    background("rgba(255,255,255,0.01)");
    deltaT = 0;
  }

  stroke(random(150), random(150), random(150));

  fill(random(100, constrain(micLevel * 10000, 101, 255)), 0, 0);
  for (let i = 0; i < ct; i++) {
    pings[i].micReact(micLevel * 20);
    pings[i].enableGravity(directionX, directionY);

    if (b_reset) {
      pings[i].reposition(pingsOrg[i].x, pingsOrg[i].y);
    }

    pings[i].move();
    pings[i].display();
  }

  deltaT++;
}

function touchStarted() {
    getAudioContext().resume();
  }

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    directionX = 2;
  } else if (keyCode === RIGHT_ARROW) {
    directionX = 1;
  } else {
    directionX = 0;
  }

  if (keyCode === UP_ARROW) {
    directionY = 2;
  } else if (keyCode === DOWN_ARROW) {
    directionY = 1;
  } else {
    directionY = 0;
  }

  if (keyCode === 32) {
    b_reset = true;
  } else {
    b_reset = false;
  }
}

class Ping {
  constructor(_xpos, _ypos, _size, _mM) {
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.size = _size;
    this.minimal = _size;
    this.micModifier = _mM;

    this.G = 5;
    this.dX = 0;
    this.dY = 0;
  }

  display() {
    ellipse(this.xpos, this.ypos, this.size);
  }

  move() {
    this.jitter = createVector(
      random(-this.speed, this.speed),
      random(-this.speed, this.speed)
    );
    this.xpos += this.jitter.x;
    this.ypos += this.jitter.y;

    //prevent out of bound
    this.xpos = constrain(this.xpos, 0, width);
    this.ypos = constrain(this.ypos, 0, height);
  }

  reposition(xOrg, yOrg) {
    this.xpos = xOrg;
    this.ypos = yOrg;
  }

  micReact(_micL) {
    this.micL = _micL * this.micModifier;
    this.size = constrain(this.micL * this.minimal, this.minimal, 5000);
    this.speed = this.micModifier;
  }

  enableGravity(directionX, directionY, reset) {
    if (directionY == 1) {
      this.dY += this.G;
      if (this.ypos + this.size / 2 < height) {
        this.ypos += this.dY;
      }
      if (this.ypos + this.size / 2 > height) {
        this.dY = -this.dY;
      }
    } else if (directionY == 2) {
      this.dY -= this.G;
      if (this.ypos - this.size / 2 > 0) {
        this.ypos += this.dY;
      }
      if (this.ypos - this.size / 2 < 0) {
        this.dY = -this.dY;
      }
    }
    
    
    if (directionX == 1) {
      this.dX += this.G;
      if (this.xpos < width) {
        this.xpos += this.dX;
      }
      if (this.xpos > width) {
        this.dX = -this.dX;
      }
    } else if (directionX == 2) {
      this.dX -= this.G;
      if (this.xpos > 0) {
        this.xpos += this.dX;
      }
      if (this.ypos < 0) {
        this.dX = -this.dX;
      }
    }
  }
}
