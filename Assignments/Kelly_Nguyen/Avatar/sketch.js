let blinkLeft = true;
let mic;
let count= 0 ;
let myMap= 0;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(userStartAudio);
   background(220);
    
textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  
  angleMode(DEGREES)
frameRate(30)
   
}

function draw() {
  background(220);
    micLevel = mic.getLevel();
  let y = micLevel*250;
  
  console.log(y)
  
  console.log(frameCount)
  if (frameCount % 20 ===0){
    blinkLeft = !blinkLeft;
  }
  
  body();
 leftEar ();
rightEar();
  
  leftEye(1.7,2.15);
  leftPupil()
  rightEye(1.28,2.25);
  rightPupil();
  
  legOne();
  legTwo();
  legThree();
  legFour();
  legFive();
  tail(y);

  
  if(blinkLeft){
    drawLight()
  }

  
  
}
function body (){
    //body
  stroke(0);
  fill(255,255,255);
  strokeWeight(4);
  rect (width*.16,height*.3,width *.7,height*.5);
}
function leftEar (){
    //ear left
  stroke(0);
  rect(width*.5,height*.12,width*.16,height*.3)
  beginShape()
  vertex(width*.5,height*.12)
  vertex(width*.58,height*.01)
  vertex(width*.66,height*.12)
  endShape();
  
}
function rightEar(){
      //ear right
  stroke(0);
rect(width*.58,height*.12,width*.16,height*.3)
  beginShape()
  vertex(width*.58,height*.12)
  vertex(width*.66,height*.01)
  vertex(width*.74,height*.12)
  endShape();
}
function leftEye(posX,posY){
    //Left eye (giant)
  push();
  strokeWeight(4)
  stroke(0);
  circle(width/posX,width/posY,width*.2)
  pop();
   
}
function leftPupil(){
  push();
    fill(0,0,0)
  translate(windowWidth/1.6,windowHeight/1.5);
  rotate(count)
  circle(10,10,width*.053)
  pop();
count = count + 1
}

function rightEye(posX,posY){
    //right eye (small)
  stroke(0);
  strokeWeight(4)
  fill(255,255,255)
  circle (width/posX,width/posY,width*.125)
}
function rightPupil (){
   fill(0,0,0)
  push();
  translate(windowWidth/1.25,windowHeight/1.8);
  
  rotate(mouseX)
  ellipse(10,10,width*.05);
  pop();
  
  
}



function legOne (){
  strokeWeight(4)
  fill(255,255,255)
  stroke(0,0,0)
  //leg 1 (very right)
  rect(width*.8,height*.8,width*.06,height*.09)
}
function legTwo(){
    //leg 2(left to most right)
   rect(width*.635,height*.8,width*.06,height*.09)
}
function legThree(){
      //leg 3(leg left of leg 2)
   rect(width*.50,height*.8,width*.06,height*.09)

}
function legFour (){
    //leg 4 (leg right of most left leg)
  rect(width*.3,height*.8,width*.06,height*.09)

}
function legFive(){
    //leg 5 (leg at end of left)
   rect(width*.16,height*.8,width*.06,height*.09)
  
}
function tail(tailHeight){
    //tail
  rect(width*.076,tailHeight+420,width*.0805,height*.065)
}

  function drawLight(posX,posY){
    for(let i= 0;i<10;i++) {
    let dia = map(i,0,9,200,30)
    let alpha = map(i,0,9,20,255)
    fill(255,0,0)
    noStroke();
    circle(width*.757,height*.725,width*.102)
    }
}
  function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
}