let mic;






function setup() {
  let cnv = createCanvas(400, 500);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  
}

function draw() {
  background(220)
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
  //collar
  push();
  fill(0);
  bezier(138,245,145,220,265,220,262,245);
  pop();
  
  //collarball
  fill(255,255,0);
  ellipse(207,235,15,20);
  
  
  
 
  
  
  micLevel = mic.getLevel();
  
 
  
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
  ellipse(215,140,35,15);
  ellipse(290,140,35,15);
}

function eyes2(){
  push();
  fill(139,69,42);
  ellipse (215,140, 10, 10), 
  ellipse (290,140,10,10);
  pop();

}

function nose(){
  line(255, 170, 255, 160);
}

function mouth(){
  ellipse(height/2,width/2,30,mic.getLevel()*250)
  
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
  ellipse(200,325,200,200);
}

function foot(){
  ellipse(140,410,50,40);
  ellipse(260,410,50,40);
  
}

function hair(){
  line(170,145,120,130);
  line(170,160,110,160);
  line(170,175,120,190);
}

function tail(){
  ellipse(200,445,30,100)
}