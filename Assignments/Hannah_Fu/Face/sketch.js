let mic;
var angle = 0;
let i = 1;
function setup() {
  createCanvas(400, 400);
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw() { //face
  background(240, 234, 218);
  angleMode(DEGREES);
}

function draw() { 
  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;  // Inverse X
  let iy = height - mouseY; // Inverse Y
  background(240, 234, 218);
   //fill(255, 249, 240, 100);
  //ellipse(x, height/2, y, y);
  //fill(201, 193, 177, 100);
  //ellipse(ix, height/2, iy, iy);

  backhair();
  rightLeg();
  leftLeg();
  bottom();
  torso();
  leftArm();
  headneck();
  sclera();
  eyes();
  //eyelids();
  eyebrows();
  mouth();
  fronthair();
  upperRightArm();
  rightArm();
  

  
  console.log(i);
  
  if(i<3600){
    i = i+ 1;
     }else{
       i = 0;
     }


}
function leftArm (){
  fill(123, 160, 171);
  push();
translate(width / 2, height / 2);
rotate(PI / 5);
rect(90, -20, 20, 80,10);
  pop(); //left higher arm
  fill(250);
  fill (240, 229, 199);
  ellipse(250, 290, 25, 30); //left hand
fill (250);
}

function upperRightArm (){
  push();
  //translate(170,220);
  //rotate(mic.getLevel()*40)
  fill(123, 160, 171);
  rect(167, 220, 20, 80,10);
  pop(); //right higher arm
  
}
function torso (){
    fill(123, 160, 171);
  push();
translate(width / 2, height / 2);
rotate(PI / 2.75);
rect(5, -35, 100, 75,5);
  pop(); //higher body half
    fill(250);
}

function bottom (){
  rect(195, 290, 80, 55,10); //bottom
}

function leftLeg (){
  push();
  fill (123, 160, 171);
translate(width / 2, height / 2);
rotate(PI / 1.4);
rect(-25, -110, 20, 80,10);
  pop(); //left higher arm

  
fill(250);
fill(90);
  push();
translate(width / 2, height / 2);
rotate(PI / 7);
rect(100, 100, 30, 80,10);
  pop(); //left leg

}

function rightLeg (){
    fill(90);
  rect(160, 330, 80, 35,10); //right thigh
  push();
translate(width / 2, height / 2);
rotate(PI / 1.2);
rect(85, -180, 25, 80,10);
  pop(); //right leg
fill(250);
}

function rightArm(){
  //Right ARM
  translate(170,220);
  rotate(mic.getLevel()*40)
  push();
  rotate(angle);
  fill (240, 229, 199);
  ellipse(5, 150, 25, 30); //right hand

  fill(123, 160, 171);
  rect(0, 70, 20, 80,10);

  //rect(0, 0, 20, 80,10);
  pop(); //right higher arm
  
}

function eyes(){
 fill (36, 25, 10);
  circle (180, 139, 10); //right eye 
  circle (230, 139, 10); //left eye
fill (250);
  
}

function sclera(){
  fill (250);
  ellipse(180, 140, 35, 15);
  ellipse(230, 140, 35, 15);
  fill (250);
  if(mouseIsPressed) {
    fill(0);
    ellipse(180,140,35,15);
  }

}

function mouth(){
  fill(143, 67, 67);
  ellipse(205, 170, 40, 5); //mouth
  ellipse(height/1.95,width/2.33,50,mic.getLevel()*400);
  fill(250);
}

function fronthair(){
  fill(46, 31, 12, 170);
  
  push();
  translate(width / 2, height / 2);
  rotate(PI / 1.7);
  arc(-70, 15, 90, 90, 2000, PI + QUARTER_PI, OPEN);
  pop();
  
  beginShape();
  vertex(width*0.48, height*0.32);
  vertex(width*0.31, height*0.4);
  vertex(width*0.55, height*0.2);
  endShape(CLOSE);
  
   beginShape();
  vertex(width*0.4, height*0.5);
  vertex(width*0.4, height*0.42);
  vertex(width*0.47, height*0.24);
  endShape(CLOSE);
  
  beginShape();
  vertex(width*0.40, height*0.26);
  vertex(width*0.55, height*0.22);
  vertex(width*0.45, height*0.3);
  vertex(width*0.38, height*0.45);
  endShape(CLOSE);
  
  beginShape();
  vertex(width*0.57, height*0.3);
  vertex(width*0.68, height*0.3);
  vertex(width*0.5, height*0.21);
  endShape(CLOSE);
  
  beginShape();
  vertex(width*0.63, height*0.3);
  vertex(width*0.66, height*0.5);
  vertex(width*0.55, height*0.23);
  endShape(CLOSE);
  
  beginShape();
  vertex(width*0.66, height*0.3);
  vertex(width*0.64, height*0.49);
  vertex(width*0.55, height*0.23);
  endShape(CLOSE);
}

function backhair(){
  fill(46, 31, 12, 200);
  ellipse(208, 145, 115, 130);
  
  
  beginShape();
vertex(width*0.45, height*0.22);
vertex(width*0.63, height*0.24);
vertex(width*0.70, height*0.45);
endShape(CLOSE);
  
beginShape();
vertex(width*0.4, height*0.22);
vertex(width*0.53, height*0.19);
vertex(width*0.3, height*0.45);
endShape(CLOSE);
  
//start of ponytail down here
   beginShape(); 
  vertex(width*0.4, height*0.3);
  vertex(width*0.39, height*0.5);
  vertex(width*0.5, height*0.67);
  endShape(CLOSE);
  
     beginShape();
  vertex(width*0.44, height*0.3);
  vertex(width*0.5, height*0.4);
  vertex(width*0.35, height*0.55);
  endShape(CLOSE);
  
  beginShape();
  vertex(width*0.44, height*0.3);
  vertex(width*0.5, height*0.4);
  vertex(width*0.38, height*0.55);
  endShape(CLOSE);
  
  
}

function headneck(){
  fill (240, 229, 199);
  rect(195, 170, 30, 55);
  fill (250); //neck
  fill (240, 229, 199);
  rect(160, 90, 100, 120, 80, 50, 50, 50);
  fill(250);
  fill(123, 160, 171);
    beginShape();
  vertex(width*0.59, height*0.51);
  vertex(width*0.58, height*0.58);
  vertex(width*0.52, height*0.57);
  endShape(CLOSE);
  
   beginShape();
  vertex(width*0.47, height*0.52);
  vertex(width*0.48, height*0.58);
  vertex(width*0.52, height*0.57);
  endShape(CLOSE);
}

function eyelids(){
  fill(46, 31, 12, 200);
  ellipse(width/2.23, height/3,30,5)
  ellipse(width/1.75, height/3,30,5)

}

function eyebrows(){
  fill(46, 31, 12, 200);
  ellipse(width/2.23, height/3.2,30,5)
  ellipse(width/1.75, height/3.2,30,5)
}
