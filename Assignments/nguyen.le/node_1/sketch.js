function setup() {
  createCanvas(400, 500);
  background(204,229,255);
  
}

function draw() {
  
  face(200,150,200,200);
  eyes();
  eyes2();
  nose();
  mouth();
  ears();
  earss();
  blush();
  body();
  foot();
  hair();
  tail();
  
}

function face(x,y,diameter){
  fill(150);
  strokeWeight(3);
  stroke(51)
  ellipse(x,y,diameter,diameter)
}

function eyes(){
  fill(250);
  strokeWeight(3);
  stroke(51);
  ellipse(215,140,30,30);
  ellipse(290,140,30,30);
}

function eyes2(){
  ellipse (215,130,5,5);
  ellipse (290,149,5,5);

}

function nose(){
  line(255, 170, 255, 160);
}

function mouth(){
  beginShape(TRIANGLE_STRIP);
  vertex(220, 190);
  vertex(280, 190);
  vertex(255, 210);
  endShape();
}

function ears(){
  fill(150)
  triangle(170,55,125,82,130,20);
  triangle(240,58,280,90,300,27);
  
}

function earss(){
  fill('white')
  triangle(158,60,138,73,140,50);
  triangle(250,63,270,80,276,57);
}

function blush(){
  fill(228,20,76);
  ellipse(200,175,30,9);
  ellipse(300,175,30,9);
}

function body(){
  fill(150);
  ellipse(200,310,200,200);
}

function foot(){
  ellipse(140,400,50,40);
  ellipse(260,400,50,40);
  
}

function hair(){
  line(170,145,120,130);
  line(170,160,110,160);
  line(170,175,120,190);
}

function tail(){
  ellipse(200,420,30,100)
}