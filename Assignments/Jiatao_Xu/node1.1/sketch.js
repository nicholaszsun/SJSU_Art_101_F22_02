//ART101 Node1.1
//By Jiatao Xu


//trying something new for my avatar
//Move the slider to change the amount of segments

let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  //slider setup
  slider = createSlider(5, 100, 100);
  slider.position(width/2, height/2+0.2*height);
  slider.style('width', '80px');
 
  
  


}

function draw() {
  
  //background('rgba(255,255,255,0.01)');
  background(255);
  
  rectMode(RADIUS);
  fill(0);
  rect(width/2+0.04*width, height/2+0.21*height,50,20);
  
  segAmt = slider.value();
  
  
  posX = width/2;
  posY = height/2;

  
  
  fill('#7d613e');
  drawStick(windowWidth/1000,windowHeight/1000,posX,posY,-PI/6);
  
  fill(255);
  let count = 0;
  for (let i = 0; i <= 2*PI-QUARTER_PI; i += PI/segAmt*2){
    
    if(segAmt <= 50){
      fill('#DBB88D');
    } 
    else if(segAmt >= 50 && segAmt <= 80){
      fill('#EB2D75');
    }
    else if(segAmt > 80){
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