let mic;
//define mic

let count = 0;
//define counting

let fireOne;
let fireTwo;
let fireThree;
let fireFour;
let fireFive;
let fireSix;
let fireSeven;
let fireEight;
let fireNine;
let fireTen;
let fireEleven;
let fireTwelve;
let fireThirteen;
let fireFourteen;
let fireFifteen;
// define various fireballs

function setup() {
  createCanvas(400, 400);
  // create canvas
  
  mic = new p5.AudioIn();
  mic.start();
  // activate mic
  
  fireOne = new fireBall(-width*.1, height*.01, random(5, 6));
  fireTwo = new fireBall(-width*.4, height*.25, random(5, 6));
  fireThree = new fireBall(.2, height*1, random(5, 6));
  fireFour = new fireBall(.3, height*.42, random(5, 6));
  fireFive = new fireBall(-width*.2, height*.75, random(5, 6));
  fireSix = new fireBall(-width*.5, height*.28, random(5, 6));
  fireSeven = new fireBall(-width*.7, height*.89, random(5, 6));
  fireEight = new fireBall(-width*.1, height*.58, random(5, 6));
  fireNine = new fireBall(-width*.2, height*.33, random(5, 6));
  fireTen = new fireBall(-width*.6, height*.7, random(5, 6));
  fireEleven = new fireBall(-width*.9, height*.35, random(5, 6));
  fireTwelve = new fireBall(-width*.4, height*.17, random(5, 6));
  fireThirteen = new fireBall(-width*.7, height*.91, random(5, 6));
  fireFourteen = new fireBall(-width*.3, height*.49, random(5, 6));
  fireFifteen = new fireBall(-width*.9, height*.61, random(5, 6));
}
// make computer understand what I want when I call a fire(number)

function draw() { 
// draw
  
   if (count<500){
     count++
   } else if (count==500){count=0}
  // count to 500, reset
  
  micLevel = mic.getLevel();
  let y = micLevel*2000;
  // mic level *2000
  
  let bulgingEyes = constrain(y, 15, 25);
  // bulging eyes
  
  let h = hour();
  // define hour
  
  if (h>=2 && h<10){
  background(0);
  }
  else 
  background(255);
  // if between hours of 2 a.m. and 10 a.m., lights off
  
  fireOne.display();
  fireOne.move();
  fireTwo.display();
  fireTwo.move();
  fireThree.display();
  fireThree.move();
  fireFour.display();
  fireFour.move();
  fireFive.display();
  fireFive.move();
  fireSix.display();
  fireSix.move();
  fireSeven.display();
  fireSeven.move();
  fireEight.display();
  fireEight.move();
  fireNine.display();
  fireNine.move();
  fireTen.display();
  fireTen.move();
  fireEleven.display();
  fireEleven.move();
  fireTwelve.display();
  fireTwelve.move();
  fireThirteen.display();
  fireThirteen.move();
  fireFourteen.display();
  fireFourteen.move();
  fireFifteen.display();
  fireFifteen.move();
  // display and move fireballs
  
  push();
  blueneck();
  pop();
  //blue neck
  
  push();
  bluehead();
  pop();
  //blue head
  
  push();
  greenneck();
  pop();
  //green neck
  
  push();
  greenhead();
  pop();
  //green head
  
  push();
  if (count > 200 && count < 210 || h >= 2 && h < 10){
    eyes(width*.17,width*.35, 0)
  }
  else if (count<200 || count>210) {eyes(width*.17,height*.35,bulgingEyes)}
  pop();
  // blink first, close eyes between 2 and 10 a.m.
  
  push();
  if (count>210 && count<220 || h >= 2 && h < 10){
    eyes(width*.25,width*.35, 0)
  }
  else if (count<210 || count>220) {eyes(width*.25,height*.35,bulgingEyes)}
  pop();
  // blink second, close eyes between 2 and 10 a.m.
  
  push();
  if (count>220 && count<230 || h >= 2 && h < 10){
    eyes(width*.33,width*.35,0)
  }
  else if (count<220 || count>230) {eyes(width*.33,height*.35,bulgingEyes)}
  pop();
  // blink third, close eyes between 2 and 10 a.m.
  
  push();
  if (count>230 && count<240 || h >= 2 && h < 10){
    eyes(width*.41,width*.35,0)
  }
  else if (count<230 || count>240) {eyes(width*.41,height*.35,bulgingEyes)}
  pop();
  // blink fourth, close eyes between 2 and 10 a.m.
  
  push();
  if (count>240 && count<250 || h >= 2 && h < 10){
    eyes(width*.60,height*.35,0)
  }
  else if (count<240 || count>250) {eyes(width*.60,height*.35,bulgingEyes)}
  pop();
  // blink fifth, close eyes between 2 and 10 a.m.
  
  push();
  if (count>250 && count<260 || h >= 2 && h < 10){
    eyes(width*.68,height*.35,0)
  }
  else if (count<250 || count>260) {eyes(width*.68,height*.35,bulgingEyes)}
  pop();
  // blink sixth, close eyes between 2 and 10 a.m.
  
  push();
  if (count>260 && count<270 || h >= 2 && h < 10){
    eyes(width*.76,height*.35,0)
  }
  else if (count<260 || count>270) {eyes(width*.76,height*.35,bulgingEyes)}
  pop();
  // blink seventh, close eyes between 2 and 10 a.m.
  
  push();
  if (count>270 && count<280 || h >= 2 && h < 10){
    eyes(width*.84,height*.35,0)
  }
  else if (count<270 || count>280) {eyes(width*.84,height*.35,bulgingEyes)}
  pop();
  // blink last, close eyes between 2 and 10 a.m.
  
  push();
  mouth();
  pop();
  // mouth 
  
  push();
  if (h>=10 && h<=12){
     frown(width*.28, height*.52, 80, 80, 4.2, 5.1, PI + QUARTER_PI); 
  }
  else {frown(width*.28, height*.52, 80, 80, 0, 0, PI + QUARTER_PI);}
  pop();
  // between hours of 10 a.m. and noon, frown
  
  push();
  torso();
  pop();
  // torso
  
  push();
  legs();
  pop();
  // legs
  
  push();
  feet();
  pop();
  // feet
  
  if (mouseIsPressed === true) {
    push();
    fill(150, 0, 150);
    strokeWeight(0);
    rotate(PI* 1.85)
    translate(-110, 106)
    arc(width*.73, height*.45, 20, 20, .5, PI + QUARTER_PI, CHORD);
    pop();
  } else {
    }
  // while mouse is being clicked, stick toungue out
  
}

function eyes(eyePos1,eyePos2,eyeSize){
  // eye 1
  strokeWeight(0);
  fill(0);
  circle(eyePos1,eyePos2,eyeSize);
}
function mouth (){
  // mouth
  strokeWeight(5);
  noFill();
  arc(width*.75, height*.33, 80, 80, 1, 2, PI + QUARTER_PI);
}
function frown (xpos, ypos, a, b, c, d){
    //frown
    strokeWeight(5);
    noFill();
    arc(xpos, ypos, a, b, c, d, PI + QUARTER_PI);
}
function blueneck (){
  // blue neck
  strokeWeight(0)
  fill(20, 100, 170);
  rotate(PI / -30);
  rect(width*.28,height*.46,width*.07,height*.20);
}
function bluehead (){
   // blue head
  strokeWeight(0);
  fill(20, 100, 170);
  circle(width*.29, height*.36, width*.25)
}
function greenneck (){
  //green neck
  strokeWeight(0)
  fill(50, 150, 0);
  rotate(PI /30);
  rect(width*.67, height*.35,width*.07,height*.20);
}
function greenhead (){
   // green head
  strokeWeight(0);
  fill(50, 150, 0);
  circle(width*.72, height*.36, width*.25);
}
function torso (){
   //upper torso
  strokeWeight(0)
  fill(0, 170, 170);
  rect(width*.34, height*.60, width*.34, height*.07);
  
  
  //lower torso
  fill(0,170,170);
  rect(width*.34, height*.64, width*.34, height*.13);
}
function legs (){
   //leg 1
  strokeWeight(0);
  fill(0, 170, 170);
  rect(width*.34, height*.75, width*.07, height*.19);
  
  
  //leg 2
  fill(0, 170, 170);
  rect(width*.43, height*.75, width*.07, height*.19);
  
  
  //leg 3
  fill(0, 170, 170);
  rect(width*.52, height*.75, width*.07, height*.19);
  
  
  //leg 4
  fill(0, 170, 170);
  rect(width*.61, height*.75, width*.07, height*.19);
}
function feet (){
    //far left foot
  strokeWeight(0);
  fill(0, 170, 170);
  rect(width*.26, height*.9, width*.15, height*.07);
  
  
  //far right foot
  fill(0, 170, 170);
  rect(width*.61, height*.9, width*.15, height*.07);
  
  
  // middle left foot
  fill(0, 170, 170);
  rect(width*.42, height*.9, width*.09, height*.07);
  
  
  //middle right foot
  fill(0, 170, 170);
  rect(width*.51, height*.9, width*.09, height*.07);
}