let count = 0;

let triRot = 45;
let circleChange = false;

let tryOne;
let tryTwo;
let tryThree;
let tryFour;

function setup() {
   background(220);
  createCanvas(700, 380);
  let cnv = createCanvas(windowWidth, windowHeight);
    cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  angleMode(DEGREES)
  
  tryOne = new BigTri(random(width),random(height),.3,.4);
  tryTwo = new BigTri(random(width),random (height),.2,.7);
  tryThree = new BigTri(random(width),random (height),.3,.4);
  tryFour = new BigTri(random(width),random(height),.2,.7);
}



function draw() {
    background('rgba(200,200,230,0.2)');
    
  let n = width/2
  let j = height/2
    

 tryOne.display();
  tryTwo.display();
  tryOne.move();
  tryTwo.move();
  tryThree.display();
  tryThree.move();
  tryFour.display();
  tryFour.move();
  
leftarm();
  
head ();
 
  leg ();
  
  neck ();
  
  face();

  toe();
  
  torso();
  
  recolor();
  
   micLevel = mic.getLevel();
  let y = micLevel*400;
  
  valOne = random (width);
  valTwo = random (height);
  
  //console.log(y)
  
  mouth();
  
  rightarm();

  switches(); 
}

function mouth(){
  fill ('#000000')
 ellipse (height/2+90, width/2-132,20,mic.getLevel()*400);
  
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

function leftarm () {
  fill('#FFEB3B')
  rect(width/2-38, 190, 40, 70, 10);
}

function rightarm(){
  push();
  translate(windowWidth/1.64,windowHeight/2.61,)
  rotate(mouseY)
  fill('#FFEB3B')  
  rect(0,0, 40, 70, 10);
  pop();
}

function head () {
  fill('#FFEB3B')
  rect(width/2+27, 90, 25, 50, 6);
  rect(width/2, 100, 80, 80, 20);
}

function recolor() {
  if ((mouseX <= 50) && (mouseY <= 50)) {
    fill('#DB24B1')
rect(width/2+2, 250, 32, 80, 20);
rect(width/2+41, 250, 32, 80, 20);
  rect(width/2+3, 247, 70, 20, 20); 
    rect(width/2+41, 303, 33, 28);
  rect(width/2+1, 303, 33, 28);
    fill('#24DB4E')
rect(width/2+3, 190, 70, 70,8); 
    // Upper-left
  }
  else if ((mouseX <= 50) && (mouseY > 50)) {
       fill('rgb(0,0,255)')
rect(width/2+2, 250, 32, 80, 20);
rect(width/2+41, 250, 32, 80, 20);
  rect(width/2+3, 247, 70, 20, 20); 
        rect(width/2+41, 303, 33, 28);
  rect(width/2+1, 303, 33, 28);
    fill('#F44336')

rect(width/2+3, 190, 70, 70,8); 
  // Lower-left
  }
  else if ((mouseX > 50) && (mouseY <= 50)) {
   fill('#A76518')
rect(width/2+2, 250, 32, 80, 20);
rect(width/2+41, 250, 32, 80, 20);
  rect(width/2+3, 247, 70, 20, 20); 
        rect(width/2+41, 303, 33, 28);
  rect(width/2+1, 303, 33, 28);
    fill('#21DEE6')
rect(width/2+3, 190, 70, 70,8); 
  // Upper-right
  }
  else {
    fill('#B2A44D')
rect(width/2+2, 250, 32, 80, 20);
rect(width/2+41, 250, 32, 80, 20);
  rect(width/2+3, 247, 70, 20, 20); 
        rect(width/2+41, 303, 33, 28);
  rect(width/2+1, 303, 33, 28);
    fill('#7224DB')
rect(width/2+3, 190, 70, 70,8); 
  // Lower-right
  }
}

function switches(){
fill('#24DB4E')
  rect(0, 0, 50, 50);   // Upper-left
  fill('#F44336')
    rect(0, 50, 50, 50);  // Lower-left
  fill('#21DEE6')
    rect(50, 0, 50, 50);  // Upper-right
  fill('#7224DB')
    rect(50, 50, 50, 50); // Lower-right
}
