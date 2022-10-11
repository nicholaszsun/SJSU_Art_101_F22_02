function setup() {
   background(220);
  createCanvas(700, 380);
  let cnv = createCanvas(windowWidth, windowHeight);
    cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
}



function draw() {
    background('rgba(200,200,230,0.2)');
    
  let n = width/2
  let j = height/2
    
 leftEye(random(height), random(width)); 
  
  arm();
  
head ();
 
  leg ();
  
  neck ();
  
  face();

  toe();
  
  torso();

    micLevel = mic.getLevel();
  let y = micLevel*400;
  
  valOne = random (width);
  valTwo = random (height);
  
  //console.log(y)
  
  mouth();
}

function mouth(){
  fill ('#000000')
 ellipse (height/2+124, width/2-165,20,mic.getLevel()*400);
  
  }

function windowResize(){
  resizeCanvas(windowWidth, windowHeight);
}

function face(){
    fill('rgb(0,0,0)');
  rect(width/2+15, 135, 8, 20, 20);
  rect(width/2+54, 135, 8, 20, 20);
rect(width/2+10, 134, 15, 1, 20);
  rect(width/2+50, 134, 15, 1, 20)
}

function toe(){
  fill('#F44336')
  rect(width/2+41, 303, 33, 28);
  rect(width/2+1, 303, 33, 28);
}

function torso(){
  fill('rgb(0,0,255)')
rect(width/2+3, 190, 70, 70,8);
}

function neck() {
    fill('#FFEB3B')
rect(width/2+14, 180, 50, 9, 2);
}

function leg () {
   fill('#F44336')
rect(width/2+2, 250, 32, 80, 20);
rect(width/2+41, 250, 32, 80, 20);
  rect(width/2+3, 247, 70, 20, 20);
}

function arm () {
  fill('rgb(0,0,255)')
  rect(width/2+60, 190, 40, 70, 10);
  rect(width/2-25, 190, 40, 70, 10);

}

function head () {
  fill('#FFEB3B')
  rect(width/2+27, 90, 25, 50, 6);
  rect(width/2, 100, 80, 80, 20);
}

function leftEye(xpos,ypos){
  fill ('#747474')
  ellipse (xpos, ypos, 20,20)
}