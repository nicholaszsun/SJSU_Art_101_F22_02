let count = 0;
let mic;

let seedOne;
let seedTwo;
let seedThree;
let seedFour;
let seedFive;
let seedSix;
let seedSeven;
let seedEight;
let seedNine;
let seedTen;

function setup() {
  createCanvas(1000,1000);
  
  mic = new p5.AudioIn()
  mic.start()
  
  seedOne = new SeedPod(50,-50,.02);
  seedTwo = new SeedPod(100,-50,.05);
  seedThree = new SeedPod(150,-50,.08);
  seedFour = new SeedPod(200,-50,.1);
  seedFive = new SeedPod(250,-50,.05);
  seedSix = new SeedPod(300,-50,.02);
  seedSeven = new SeedPod(350,-50,.08);
  seedEight = new SeedPod(400,-50,.1);
  seedNine = new SeedPod(450,-50,.05);
  seedTen = new SeedPod(0,-50,.02);
}

function draw() {
  count++;
  
  if (count>550){
    count = 0
  }
  
  if (frameCount>20){
    frameCount=0
  }
  
  //console.log('count = '+count)
  //console.log('framecount ='+ frameCount)
  // console.log('my mouseX is: '+ mouseX)
  // console.log('my mouseY is: '+ mouseY)
  
  background(224, 195, 199);
  
  seedOne.display();
  seedTwo.display();
  seedThree.display();
  seedFour.display();
  seedFive.display();
  seedSix.display();
  seedSeven.display();
  seedEight.display();
  seedNine.display();
  seedTen.display();
  
  seedOne.move();
  seedTwo.move();
  seedThree.move();
  seedFour.move();
  seedFive.move();
  seedSix.move();
  seedSeven.move();
  seedEight.move();
  seedNine.move();
  seedTen.move();
  
  micLevel = mic.getLevel()*400;
  let y = micLevel
  
  noStroke()
  
  tufts()
  
  leftEye()
  
  //head//
  fill(89, 67, 70);
  ellipse(width*.86,width*.5,width*.71);
  
  body(width*.96,width*.85,width*1.1+y)
  
  rightEye()
  
  pupil()
  
  shine()

  cheek()
  
  chest()
  
  inside()
  
  beak()
  
  nostril()
  
  lowerBeak()
  
  leg()

}

function inside(){
  fill(224, 195, 199)
  beginShape()
  //left
  vertex(width*.51,width*.44)
  //top
  vertex(width*.52,width*.42)
  //right
  vertex(width*.68,width*.45)
  //bottom
  vertex(width*.5,width*.46)
  endShape(CLOSE)
}

function beak(){
  stroke(110, 87, 87);
  fill(31, 1, 5);
  triangle(width*.55,width*.4,width*.71,width*.45,width*.39,width*.43);
}

function lowerBeak() {
  push()
  if (frameCount<10){
    
  }else if (frameCount>10){
    translate(-width/25, width/13)
    rotate(-PI/30)
  }
  stroke(110, 87, 87);
  fill(31, 1, 5);
  triangle(width*.54,width*.48,width*.71,width*.45,width*.39,width*.43);
  pop()
}

function nostril(){
  noStroke()
  fill(89, 67, 70);
  ellipse(width*.56, width*.42,width*.04,width*.007);  
}

function body(posX,posY,size){
  ellipse(posX,posY,size)
}

function cheek(){ 
  if (mouseX > 200){
    fill(153, 73, 57);
  } else if (mouseX < 200){
    fill(110, 87, 87);
  }
  
  ellipse(width*.9,width*.55,width*.28); 
}

function chest(){
  fill(110, 87, 87);
  ellipse(width*.6,width*.85,width*.03,width*.14);
  ellipse(width*.5,width*.7,width*.03,width*.12);
  ellipse(width*.55,width*.65,width*.03,width*.12);
  ellipse(width*.65,width*.95,width*.03,width*.12);
}

function leftEye(){
  //fill(random(255),random(80),random(80));
  fill(255,80,80)
  ellipse(width*.56,width*.35,width*.08);
}

function rightEye(){
  //fill(random(255),random(80),random(80));
  fill(255,80,80)
  ellipse(width*.79,width*.37,width*.07);
}

function shine(xpos, ypos){
  fill(255);
  ellipse(width*.81,width*.36,width*.02,width*.02);
}

function pupil(){
  push()
  
  let x1 = map(-mouseX/5, -1, 1.1, 1, 0.2);
  let y1 = map(mouseY/5, -1, 1.1, -0.1, 0.2)
  
  translate(x1/4, 0)
  translate(0, y1/4)
  
  fill(0)
  ellipse(width*.77,width*.37,width*.02,width*.03);
  pop()
}

function tufts(){
  fill(89, 67, 70);
  ellipse(width*.85,width*.14,width*.03,width*.14);
  ellipse(width*.87,width*.16,width*.03,width*.14);
  ellipse(width*.83,width*.18,width*.03,width*.14);
}

function leg(){
  fill(235, 161, 70)
  rect(mouseX+5, mouseY+5, width/50, windowHeight)
  beginShape()
  vertex(mouseX+5, mouseY+5)
  vertex(mouseX-5, mouseY-50)
  vertex(mouseX+10, mouseY-5)
  vertex(mouseX+15, mouseY-50)
  vertex(mouseX+20, mouseY-5)
  vertex(mouseX+30, mouseY-50)
  vertex(mouseX+23, mouseY+5)
  endShape(CLOSE)
}



