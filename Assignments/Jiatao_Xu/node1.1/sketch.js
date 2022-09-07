let mic;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  
  


}

function draw() {
  
  //background('rgba(255,255,255,0.01)');
  background(255);
  
  micLevel = mic.getLevel();
  hairAmount= round(micLevel*50)+3;
  
  
  posX = width/2;
  posY = height/2;

  
  
  fill('#7d613e');
  drawStick(windowWidth/1000,windowHeight/1000,posX,posY,-PI/6);
  
  fill(255);
  let count = 0;
  for (let i = 0; i <= 2*PI-QUARTER_PI; i += PI/hairAmount){
    
    if(micLevel <= 0.1){
      fill('#DBB88D');
    } 
    else if(micLevel >= 0.11 && micLevel <= 0.25){
      fill('#EB2D75');
    }
    else if(micLevel > 0.25){
      fill(random(255),random(255),random(255));
    }
    
    drawHairPiece(windowWidth/1000*i,windowHeight/1000*i,posX,posY,i);
  
    
    
    
  }
  fill('rgb(59,26,26)');
  drawEye(posX,posY);
  drawEye(posX+0.1*posX,posY-0.05*posY);
  drawMouth(posX,posY,-PI/6);
  

  
  
}


function drawEye(posX,posY){
  push();
  translate(posX,posY);
  ellipse(0.1*posX,0,50,50);
  pop();
}

function drawMouth(posX,posY,deg){
  push();
  translate(posX,posY);
  rotate(deg);
  arc(0.15*posX,0.1*posY,50,50,0,PI);
  pop();
}
function drawStick(sizeX,sizeY,posX,posY,deg){
  push();
  rectMode(RADIUS);
  translate(posX,posY);
  scale(sizeX,sizeY);
  rotate(deg);
  rect(0,0,1000,30);
  pop();
}

function drawHairPiece(sizeX,sizeY,posX,posY,deg){
  push();
  translate(posX,posY);
  scale(sizeX,sizeY);
  rotate(deg);
  triangle(0,0,0,50,30,0);
  
  
  
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}