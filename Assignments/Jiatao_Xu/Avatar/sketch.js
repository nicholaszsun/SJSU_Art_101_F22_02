//ART101 Avatar
//By Jiatao Xu

//https://editor.p5js.org/jiatao.xu/sketches/0jJFYPSUg



//------------------------------------------------------------------------------------------------------------
// Basic behavoir explaination
//
// The snail started outside its shell. Its head will follow mouse movement. Both eyes will blink at given time interval.
// When outside of the shell, stress will generate. After around 20 second of outside, the snail will go insane.
// Press space to go back into the shell. The snail is happier when back inside.
// Whenever you are ready, you can press space again anytime to come out again.
//---------------------------------------------------------------------------------------------------------------







//feature list:
//  1.0 graphic
//  1.2 mouth reflect surrouding noise
//  1.3 head follow mouse movement
//  1.4 eyeshut at certain random time interval range

//Further Changes:
//1
//A randomized line generator for background

//2
//A shell where I can hide in and out(spacebar)
//Sneak peaking from my shell

//3
//going insane if outside for too long (around 20sec)
//text prompt to go inside



//=================================================================================================



//var for main snail construction
let mic,
  e_dX = 0,
  e_dY = 0,
  deltaT = 0,
  openValue = 1.0,
  eyeShutIntv = 200,
  insanity = 0;

//var for background line thing
let b_xpos,
  b_ypos,
  b_xxpos = 0,
  b_yypos = 0,
  b_dX,
  b_dY;

//color pal.
let body = "#f5dfa4",
  horn = "#946B85",
  eye = "#FFFFFF",
  horn_acc = "#70FF13",
  shell = "#9C8957";

//bool related in shell-hiding
let hideInShell = false,
    eyeBool = false;

//Background elements (noiseLine)
let noises = [],
  lineCount = 4;





function setup() {
  //always square canvas
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  } else {
    createCanvas(windowWidth, windowWidth);
  }

  //get p5 audio, used for manip mouth
  mic = new p5.AudioIn();
  mic.start();

  //random point to intitate the chaos line
  b_xpos = random(width);
  b_ypos = random(height);

  background(135, 135, 135);
  angleMode(DEGREES);
  noFill();
  stroke(0);
  
  //intiate background lines
  for (let i = 0; i < lineCount; i++) {
    noises[i] = new NoiseLine(random(width), random(height / 2));
  }
  
  eyeShutIntv = round(random(200, 300));
}





function draw() {
  //this need to be in the draw loop, so the character position will be updated when the canvas changes
  gridX = width / 10;
  gridY = height / 10;

  micLevel = mic.getLevel();

  strokeWeight(1);

  if (!hideInShell) {
    //background element
    timedBackground();
    for (let i = 0; i < lineCount; i++) {
      tempX = random(-100, 100);
      temoY = random(-100, 100);
      strokeWeight(i);
      noises[i].startDraw(tempX, temoY);
    }
  } else {
    background("rgba(135,135,135,0.4)");

    if (deltaT == eyeShutIntv) {
      eyeBool = !eyeBool;
    }
  }

  //main chara construction
  strokeWeight(8);
  push();
  scale(0.8);
  translate(width / 7, height / 7);
  drawShell(shell);

  if (!hideInShell) {
    drawLegBack(body);
    drawHornLeft(horn);
    drawHornRight(horn);
    drawHornAccL(horn_acc);
    drawHornAccR(horn_acc);
    drawBody(body, horn);
    drawLegFront(body);
    drawFaceAndFollow();
    eyeShut();
  } 
  //sneak peak when in shell
  else {
    if (eyeBool) {
      fill(eye);
    } else {
      fill(0);
    }
    
    ellipseMode(CENTER);
      ellipse(4.4 * gridX, 7.31 * gridY, 0.6 * gridX, 0.4 * gridY);
      ellipse(5.4 * gridX, 7.31 * gridY, 0.6 * gridX, 0.4 * gridY);
  }

  pop();


  
  
  
  
  //for time interval based processes (eyeshut, background fade)
  deltaT++;
  if (deltaT > eyeShutIntv) {
    deltaT = 0;
    eyeShutIntv = round(random(200, 300));   
  }


  //around 20 sec of staying outside the shell, snail will go insane
  if(hideInShell ==false && insanity < 1500){
    insanity++;
  } else if(hideInShell) {
    
    insanity = 0;
    horn = "#946B85";
    eye = "#FFFFFF";
    horn_acc = "#70FF13";
  }
  if (insanity >= 1500){
    horn = "#"+Math.floor(Math.random()*16777215).toString(16);
    eye = "#"+Math.floor(Math.random()*16777215).toString(16)
    horn_acc = "#"+Math.floor(Math.random()*16777215).toString(16)
    
    fill(random(255),random(255),random(255));
    textAlign(CENTER);
    textSize(gridX/4);
    text("PRESS SPACE TO HEAD INSIDE",width/2,height-gridY);
    
    
  }
  

  
}

function touchStarted(){
    getAudioContext().resume();
}


function keyPressed() {
  if (keyCode == 32) {
    hideInShell = !hideInShell;
  }
}

function timedBackground() {
  // this thing is dependent on eyeshut function. Since eyeshut have some randomness in its interval, that randomness will happen here as well
  //
  if (deltaT % 200 == 0) {
    background("rgba(135,135,135,0.2)");
  }
}

//background noiseline class
class NoiseLine {
  constructor(_xpos, _ypos) {
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.xxpos = 0;
    this.yypos = 0;

    this.dX = 0;
    this.dY = 0;
  }

  startDraw(_dY, _dX) {
    this.dX = _dY;
    this.dY = _dX;

    this.xxpos = constrain(this.xpos + this.dX, 0, width);
    this.yypos = constrain(this.ypos + this.dY, 0, height);

    line(this.xpos, this.ypos, this.xxpos, this.yypos);

    this.xpos = this.xxpos;
    this.ypos = this.yypos;
  }
}

//1.3 Update
//afterthought: there's better way of doing this using constrains()
function drawFaceAndFollow() {
  push();
  if (mouseX / gridX > 2.35) {
    if (e_dX < 0.25 * gridX) {
      e_dX += 0.03 * gridX;
    }
  } else if (mouseX / gridX < 2.35) {
    if (e_dX > -0.15 * gridX) {
      e_dX -= 0.03 * gridX;
    }
  }

  if (mouseY / gridY > 4.23) {
    if (e_dY < 0.25 * gridY) {
      e_dY += 0.03 * gridY;
    }
  } else if (mouseY / gridY < 4.23) {
    if (e_dY > -0.25 * gridY) {
      e_dY -= 0.03 * gridY;
    }
  }
  translate(e_dX, e_dY);
  drawEye(eye, openValue);
  drawMouth(micLevel*1.5);
  drawMole();
  pop();
}

//1.4 Update
function eyeShut() {
  //eyeShut at time interval

  if (deltaT == eyeShutIntv - 10 ) {
    openValue = 0;
  }
  if (deltaT == eyeShutIntv) {
    openValue = 1;
  }
}

function drawEye(color, openVal) {
  fill(color);
  //push and pop to clear transformation, if not the rotation and translation would contamintate the next transformation
  //left eye
  push();
  translate(1.5 * gridX, 4.2 * gridY);
  rotate(-15);
  ellipse(0, 0, 0.8 * gridX, openVal * 0.35 * gridY);
  pop();

  //right eye
  push();
  translate(3.3 * gridX, 4.2 * gridY);
  rotate(15);
  ellipse(0, 0, 0.8 * gridX, openVal * 0.35 * gridY);
  pop();
}

function drawMouth(micLevel) {
  //mouth
  ellipseMode(CENTER);
  ellipse(2.35 * gridX, 4.23 * gridY, 0.75 * gridX, micLevel * gridY);
}

function drawMole() {
  //mole_right
  beginShape(POINTS);
  vertex(3.6769 * gridX, 4.6 * gridY);
  vertex(3.8462 * gridX, 4.3846 * gridY);
  vertex(3.9077 * gridX, 4.5538 * gridY);
  endShape();
  //mole_left
  beginShape(POINTS);
  vertex(1.1538 * gridX, 4.5692 * gridY);
  vertex(0.9385 * gridX, 4.4 * gridY);
  vertex(0.9385 * gridX, 4.5538 * gridY);
  endShape();
}

function drawLegBack(color) {
  fill(color);
  //Leg(back)
  beginShape();
  curveVertex(2.3077 * gridX, 7.2308 * gridY);
  curveVertex(2.3077 * gridX, 7.6923 * gridY);
  curveVertex(2.2 * gridX, 7.9538 * gridY);
  curveVertex(2.1077 * gridX, 8.2308 * gridY);
  curveVertex(1.8615 * gridX, 8.1385 * gridY);
  curveVertex(1.6154 * gridX, 8.2 * gridY);

  curveVertex(1.4769 * gridX, 8.3385 * gridY);
  curveVertex(1.5692 * gridX, 8.4308 * gridY);
  curveVertex(1.8308 * gridX, 8.5077 * gridY);

  curveVertex(1.9231 * gridX, 8.5846 * gridY);
  curveVertex(2.1692 * gridX, 8.6 * gridY);

  curveVertex(2.5077 * gridX, 8.5231 * gridY);
  curveVertex(2.8308 * gridX, 8.6 * gridY);
  curveVertex(3.0769 * gridX, 8.4923 * gridY);
  curveVertex(3.2462 * gridX, 8.2769 * gridY);
  curveVertex(3.3538 * gridX, 7.2769 * gridY);
  endShape();
}

function drawShell(color) {
  fill(color);
  //SHELL
  ellipse(6.5 * gridX, 5 * gridY, 5.5 * gridX, 6 * gridY);

  //SHELL GROOVE
  noFill();
  beginShape();
  curveVertex(8.0462 * gridX, 5.0 * gridY);
  curveVertex(8.2462 * gridX, 5.0769 * gridY);
  curveVertex(8.2462 * gridX, 4.7538 * gridY);
  curveVertex(7.9692 * gridX, 4.8462 * gridY);
  curveVertex(7.8615 * gridX, 5.1846 * gridY);
  curveVertex(8.0 * gridX, 5.4154 * gridY);
  curveVertex(8.3231 * gridX, 5.3385 * gridY);
  curveVertex(8.5846 * gridX, 4.8308 * gridY);
  curveVertex(8.4769 * gridX, 4.1231 * gridY);
  curveVertex(8.0462 * gridX, 3.8 * gridY);
  curveVertex(7.4923 * gridX, 3.9692 * gridY);
  curveVertex(7.1385 * gridX, 4.6154 * gridY);
  curveVertex(7.2769 * gridX, 5.7538 * gridY);
  curveVertex(7.9385 * gridX, 6.4 * gridY);
  curveVertex(8.8462 * gridX, 5.8769 * gridY);
  curveVertex(9.0 * gridX, 4.6615 * gridY);
  curveVertex(8.3538 * gridX, 3.0 * gridY);
  curveVertex(7.0462 * gridX, 2.6308 * gridY);
  curveVertex(5.9538 * gridX, 3.6 * gridY);
  curveVertex(5.6462 * gridX, 5.1538 * gridY);
  curveVertex(6.5385 * gridX, 7.2154 * gridY);
  curveVertex(8.0 * gridX, 7.4923 * gridY);
  endShape();

  //SHELL MOUTH
  fill(color);
  ellipseMode(CENTER);
  ellipse(5.3 * gridX, 7.19 * gridY, 3 * gridX, 1.5 * gridY);
  fill("black");
  ellipse(5.2 * gridX, 7.25 * gridY, 2.5 * gridX, gridY);
}

function drawHornLeft(color) {
  fill(color);
  //HORN LEFT
  beginShape();
  //right
  curveVertex(2.3077 * gridX, 3.6 * gridY);
  curveVertex(2.0 * gridX, 3.3385 * gridY);
  curveVertex(1.5846 * gridX, 3.0 * gridY);
  curveVertex(1.4615 * gridX, 2.6154 * gridY);
  curveVertex(1.5538 * gridX, 2.2615 * gridY);
  curveVertex(1.8308 * gridX, 1.6769 * gridY);
  curveVertex(1.8769 * gridX, 1.3231 * gridY);
  curveVertex(1.7692 * gridX, 1.0923 * gridY);

  //vertex(tip)
  curveVertex(1.4154 * gridX, 0.9385 * gridY);

  //left
  curveVertex(1.5385 * gridX, 1.2 * gridY);
  curveVertex(1.5385 * gridX, 1.4154 * gridY);
  curveVertex(1.4 * gridX, 1.6769 * gridY);
  curveVertex(1.0615 * gridX, 1.9077 * gridY);
  curveVertex(0.6 * gridX, 2.2462 * gridY);
  curveVertex(0.2615 * gridX, 2.6769 * gridY);
  curveVertex(0.1231 * gridX, 3.0923 * gridY);
  curveVertex(0.1692 * gridX, 3.5846 * gridY);
  curveVertex(0.3385 * gridX, 4.0 * gridY);
  curveVertex(0.6769 * gridX, 4.3692 * gridY);
  curveVertex(1.4769 * gridX, 4.6769 * gridY);
  endShape(CLOSE);
}

function drawHornRight(color, posX, posY) {
  fill(color);
  //HORN RIGHT
  beginShape();
  //right
  curveVertex(3.5385 * gridX, 4.3231 * gridY);
  curveVertex(4.2308 * gridX, 4.0308 * gridY);
  curveVertex(4.6615 * gridX, 3.7385 * gridY);
  curveVertex(4.8923 * gridX, 3.2615 * gridY);
  curveVertex(4.9385 * gridX, 2.8154 * gridY);
  curveVertex(4.8308 * gridX, 2.4154 * gridY);
  curveVertex(4.4462 * gridX, 1.9692 * gridY);
  curveVertex(3.8923 * gridX, 1.6615 * gridY);
  curveVertex(3.4462 * gridX, 1.4769 * gridY);
  curveVertex(3.2 * gridX, 1.3231 * gridY);
  curveVertex(3.0923 * gridX, 1.0615 * gridY);

  //vertex
  curveVertex(3.1538 * gridX, 0.8462 * gridY);

  //left
  curveVertex(2.8462 * gridX, 1.0462 * gridY);
  curveVertex(2.7846 * gridX, 1.3231 * gridY);
  curveVertex(2.8769 * gridX, 1.5538 * gridY);
  curveVertex(3.2154 * gridX, 1.7846 * gridY);
  curveVertex(3.4769 * gridX, 1.9692 * gridY);
  curveVertex(3.6462 * gridX, 2.3385 * gridY);
  curveVertex(3.5692 * gridX, 2.6923 * gridY);
  curveVertex(3.3385 * gridX, 2.9846 * gridY);
  curveVertex(2.8769 * gridX, 3.3385 * gridY);
  curveVertex(2.4 * gridX, 3.7077 * gridY);
  endShape(CLOSE);
}

function drawHornAccL(color) {
  fill(color);
  //HORN LEFT INTERIOR
  //1
  beginShape();
  curveVertex(1.5385 * gridX, 2.9692 * gridY);
  curveVertex(1.5538 * gridX, 2.9692 * gridY);
  curveVertex(1.3077 * gridX, 2.9846 * gridY);
  curveVertex(1.1231 * gridX, 3.1692 * gridY);
  curveVertex(0.9231 * gridX, 3.5385 * gridY);
  curveVertex(0.8462 * gridX, 4.0615 * gridY);
  curveVertex(1.2308 * gridX, 4.6923 * gridY);
  curveVertex(2.2769 * gridX, 3.5846 * gridY);
  curveVertex(2.0462 * gridX, 3.3692 * gridY);
  curveVertex(1.8308 * gridX, 3.2308 * gridY);
  endShape(CLOSE);
  //2
  beginShape();
  curveVertex(0.1692 * gridX, 3.5846 * gridY);
  curveVertex(0.1385 * gridX, 3.2 * gridY);
  curveVertex(0.2462 * gridX, 2.8615 * gridY);
  curveVertex(0.5077 * gridX, 2.5385 * gridY);
  //turn
  curveVertex(0.9385 * gridX, 2.4154 * gridY);
  curveVertex(0.9538 * gridX, 2.4154 * gridY);
  curveVertex(0.9538 * gridX, 2.4154 * gridY);

  curveVertex(1.0615 * gridX, 2.2308 * gridY);
  curveVertex(1.1846 * gridX, 2.1077 * gridY);

  //turn
  curveVertex(1.3846 * gridX, 1.9692 * gridY);
  curveVertex(1.3692 * gridX, 1.9692 * gridY);
  curveVertex(1.3692 * gridX, 1.9385 * gridY);

  curveVertex(0.9385 * gridX, 1.9692 * gridY);
  curveVertex(0.5538 * gridX, 2.2154 * gridY);
  curveVertex(0.2154 * gridX, 2.6615 * gridY);
  curveVertex(0.1077 * gridX, 3.1846 * gridY);
  endShape(CLOSE);
  //3
  beginShape();
  curveVertex(1.4308 * gridX, 0.9692 * gridY);
  curveVertex(1.5692 * gridX, 1.3077 * gridY);
  curveVertex(1.5231 * gridX, 1.4154 * gridY);
  curveVertex(1.6615 * gridX, 1.4923 * gridY);
  curveVertex(1.8 * gridX, 1.7077 * gridY);
  curveVertex(1.7538 * gridX, 1.4154 * gridY);
  curveVertex(1.6923 * gridX, 1.1846 * gridY);
  curveVertex(1.5538 * gridX, 1.0154 * gridY);
  endShape(CLOSE);
}

function drawHornAccR(color) {
  fill(color);
  //HORN RIGHT INTERIOR
  //1
  beginShape();
  curveVertex(3.3538 * gridX, 2.9846 * gridY);
  curveVertex(3.1846 * gridX, 3.1231 * gridY);
  curveVertex(2.8923 * gridX, 3.3385 * gridY);
  curveVertex(2.6769 * gridX, 3.4462 * gridY);
  curveVertex(2.7538 * gridX, 3.8 * gridY);
  curveVertex(3.4923 * gridX, 4.2615 * gridY);
  curveVertex(3.7385 * gridX, 4.1077 * gridY);
  curveVertex(3.8462 * gridX, 3.7538 * gridY);
  curveVertex(3.8308 * gridX, 3.4308 * gridY);
  curveVertex(3.6769 * gridX, 3.1846 * gridY);
  endShape(CLOSE);
  //2
  beginShape();
  curveVertex(4.0462 * gridX, 2.5231 * gridY);
  curveVertex(4.3846 * gridX, 2.6308 * gridY);
  curveVertex(4.6462 * gridX, 2.8462 * gridY);
  curveVertex(4.7538 * gridX, 3.2 * gridY);
  curveVertex(4.7538 * gridX, 3.6154 * gridY);
  curveVertex(4.9231 * gridX, 3.1231 * gridY);
  curveVertex(4.8462 * gridX, 2.4154 * gridY);
  curveVertex(4.4769 * gridX, 1.9692 * gridY);
  curveVertex(4.0769 * gridX, 1.7692 * gridY);
  curveVertex(3.8462 * gridX, 1.8462 * gridY);
  curveVertex(3.8462 * gridX, 1.8615 * gridY);
  curveVertex(4.0308 * gridX, 2.0769 * gridY);
  curveVertex(4.0923 * gridX, 2.3077 * gridY);
  endShape(CLOSE);
  //3
  beginShape();
  curveVertex(3.1538 * gridX, 0.8308 * gridY);
  curveVertex(3.1538 * gridX, 1.2308 * gridY);
  curveVertex(3.2462 * gridX, 1.3538 * gridY);
  curveVertex(3.061 * gridX, 1.385 * gridY);
  curveVertex(2.9462 * gridX, 1.5154 * gridY);
  curveVertex(2.9231 * gridX, 1.2462 * gridY);
  curveVertex(3.0308 * gridX, 0.8769 * gridY);

  endShape(CLOSE);
}

function drawBody(mainColor, accentColor) {
  fill(mainColor);
  //MAIN BODY
  //fill('#66a1ff');
  beginShape();
  curveVertex(2.8923 * gridX, 3.3538 * gridY);
  curveVertex(3.4308 * gridX, 3.4769 * gridY);
  curveVertex(4.0769 * gridX, 3.8615 * gridY);
  curveVertex(4.4308 * gridX, 4.2308 * gridY);
  curveVertex(4.8462 * gridX, 4.9846 * gridY);
  curveVertex(5.2308 * gridX, 6.0923 * gridY);
  curveVertex(5.9077 * gridX, 6.8154 * gridY);
  curveVertex(7.2923 * gridX, 7.4 * gridY);
  curveVertex(8.4308 * gridX, 7.6 * gridY);
  curveVertex(9.0308 * gridX, 7.8923 * gridY);
  curveVertex(9.7385 * gridX, 8.2923 * gridY);
  curveVertex(9.0462 * gridX, 8.6462 * gridY);
  curveVertex(4.3077 * gridX, 8.5077 * gridY);
  curveVertex(2.7692 * gridX, 8.0462 * gridY);
  curveVertex(1.7692 * gridX, 7.2769 * gridY);
  curveVertex(1.1538 * gridX, 6.4923 * gridY);
  curveVertex(0.8 * gridX, 5.6769 * gridY);
  curveVertex(0.6923 * gridX, 4.9538 * gridY);
  curveVertex(0.8154 * gridX, 4.0923 * gridY);
  curveVertex(1.2308 * gridX, 3.6 * gridY);
  curveVertex(1.9385 * gridX, 3.3231 * gridY);
  endShape(CLOSE);

  //BODY STRIPE
  fill(accentColor);
  //1
  beginShape();
  curveVertex(8.3385 * gridX, 7.5846 * gridY);
  curveVertex(8.3231 * gridX, 7.7538 * gridY);
  curveVertex(8.2462 * gridX, 7.8923 * gridY);
  curveVertex(8.1077 * gridX, 8.1538 * gridY);
  curveVertex(8.6308 * gridX, 7.9692 * gridY);
  curveVertex(8.7385 * gridX, 7.7231 * gridY);
  endShape(CLOSE);
  //2
  beginShape();
  curveVertex(8.9846 * gridX, 7.8462 * gridY);
  curveVertex(9.2615 * gridX, 8.0 * gridY);
  curveVertex(8.8769 * gridX, 8.2462 * gridY);
  curveVertex(8.9385 * gridX, 8.0154 * gridY);
  endShape(CLOSE);
}

function drawLegFront(color) {
  fill(color);
  //Legs(front)
  beginShape();
  curveVertex(5.4154 * gridX, 6.7385 * gridY);
  curveVertex(5.6154 * gridX, 7.4 * gridY);
  curveVertex(5.2154 * gridX, 7.9231 * gridY);

  curveVertex(4.9077 * gridX, 8.2462 * gridY);
  curveVertex(4.7231 * gridX, 8.3231 * gridY);
  curveVertex(4.5538 * gridX, 8.3692 * gridY);
  curveVertex(4.4615 * gridX, 8.4769 * gridY);

  curveVertex(4.4923 * gridX, 8.5846 * gridY);
  curveVertex(4.6615 * gridX, 8.6154 * gridY);

  curveVertex(4.8923 * gridX, 8.6308 * gridY);
  curveVertex(4.8769 * gridX, 8.8308 * gridY);
  curveVertex(5.0615 * gridX, 8.8462 * gridY);
  curveVertex(5.2615 * gridX, 8.8154 * gridY);

  curveVertex(5.4615 * gridX, 8.6923 * gridY);
  curveVertex(5.6154 * gridX, 8.8462 * gridY);
  curveVertex(5.7846 * gridX, 8.8308 * gridY);
  curveVertex(5.8923 * gridX, 8.7077 * gridY);
  curveVertex(6.0154 * gridX, 8.5385 * gridY);

  curveVertex(6.2615 * gridX, 8.2462 * gridY);
  curveVertex(6.4154 * gridX, 8.0 * gridY);
  curveVertex(6.4615 * gridX, 7.8154 * gridY);
  curveVertex(6.3538 * gridX, 7.6 * gridY);
  curveVertex(5.8154 * gridX, 7.0462 * gridY);
  endShape();
}

function windowResized() {
  if (windowWidth > windowHeight) {
    resizeCanvas(windowHeight, windowHeight);
  } else {
    resizeCanvas(windowWidth, windowWidth);
  }
}
