let mic;
function setup() {
  createCanvas(400, 400);
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw() { //face
  background(240, 234, 218);
}

function draw() { //face
  background(240, 234, 218);
  backhair();
  body();
  headneck();
  sclera();
  eyes();
  mouth();
  fronthair();
  

function body(){
  fill(90);
  rect(160, 330, 80, 35,10); //right thigh
  rect(195, 290, 80, 55,10); //bottom
fill(250);
fill(123, 160, 171);
  push();
translate(width / 2, height / 2);
rotate(PI / 2.75);
rect(5, -35, 100, 75,5);
  pop(); //higher body half
  push();
translate(width / 2, height / 2);
rotate(PI / 5);
rect(90, -20, 20, 80,10);
  pop(); //left higher arm
  
 push();
translate(width / 2, height / 2);
rotate(PI / 5);
rect(-10, 20, 20, 80,10);
  pop(); //right arm
  
  push();
translate(width / 2, height / 2);
rotate(PI / 1.4);
rect(-25, -110, 20, 80,10);
  pop(); //left higher arm
  
  push();
translate(width / 2, height / 2);
rotate(PI / 1.7);
rect(80, 30, 20, 80,10);
  pop(); //right arm
fill(250);
fill(90);
  push();
translate(width / 2, height / 2);
rotate(PI / 7);
rect(100, 100, 30, 80,10);
  pop(); //left leg
  push();
translate(width / 2, height / 2);
rotate(PI / 1.2);
rect(85, -180, 25, 80,10);
  pop(); //right leg
fill(250);
fill (240, 229, 199);
  ellipse(75, 250, 25, 30); //right hand
  ellipse(250, 290, 25, 30); //left hand
fill (250);
}
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
}

function mouth(){
  fill(143, 67, 67);
  ellipse(205, 170, 40, 5); //mouth
  ellipse(height/1.95,width/2.33,50,mic.getLevel()*400);
  fill(250);
}

function fronthair(){
  fill(46, 31, 12, 100);
  
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
  
}

function backhair(){
  fill(46, 31, 12, 150);
  ellipse(208, 145, 115, 130);
  
beginShape();
vertex(width*0.45, height*0.30);
vertex(width*0.60, height*0.30);
curveVertex(width*0.70, height*0.45);
vertex(width*0.35, height*0.45);
endShape(CLOSE);

}

function headneck(){
  fill (240, 229, 199);
  rect(195, 170, 30, 55);
  fill (250); //neck
  fill (240, 229, 199);
  rect(160, 90, 100, 120, 80, 50, 50, 50);
}


