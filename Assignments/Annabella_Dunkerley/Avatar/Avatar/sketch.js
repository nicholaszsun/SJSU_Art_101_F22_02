let x = 50;
let circleColor = 0

let yPos = 0;

let detailOne;

function setup() {
 let cnv = createCanvas(400, 400);
  cnv.mousePressed(userStartAudio)
  mic = new p5.AudioIn();
  mic.start();
  background(220);
  
frameRate (30);
  
  detailOne = new detail(56, 46, 55, 55);
  
  
  
}

function draw() {

yPos = yPos -1;
if (yPos < 0) {
  yPos = height;
}
square(0, yPos, width, yPos);    
  
  
skull(200, 150, 250);  
  
eyes(97, 110, 85, 35);
  
features(150, 280, 20, 40);  

pupils(248, 170, 30); 
    
pupils2(155, 170, 30);
  
glasses(115, 150, 150);
  
// detail(56, 46, 55, 55); 
  
detailOne.display(); 
  
detailOne.move();  
  
}

function features(x,y,diameter){
stroke(0);
fill(0);
rect(x-1,y,20,40);
rect(x+40,y,20,40); 
rect(x+80,y,20,40); 
  
// rect(190, 146, 20, 6);
  
triangle(173, 213, 201, 163, 229, 215);  
  
}

function glasses(x,y,diameter){

strokeWeight(4);
stroke(51);
noFill();
circle(x, y, diameter);
circle(x+170, y, diameter);  

fill(51);  
rect(190, 146, 20, 6);  
}

function pupils(x,y){
if (x > 48) {
  x -= 2;
} else if (x < 48) {
  x += 2;
}
x += floor(movedX /4);
  
if (y > 48) {
  y -= 2;
} else if (y < 48) {
  y += 2;
}
y += floor(movedY /3);
  
//color change   
// if (frameCount % 60 == 0) {
//   bgColor = color(random (225), random(225), random(225));
//   circleColor =
// color(random(225), random(225), random(225))
// }
// fill(circleColor)

fill(400)
noStroke()
circle(x, y, 30)
  
// if (x > 48) {
//   x -= 2;
// } else if (x < 48) {
//   x += 2;
// }
// x += floor(movedX /4);  
// circle(155, 170, 30)
}

function pupils2(x,y){
    
if (x > 48) {
  x -= 2;
} else if (x < 48) {
  x += 2;
}
x += floor(movedX /4);  
  
if (y > 48) {
  y -=2;
}  else if (y < 48) {
  y += 2;
}
y += floor(movedY / 3); 


//color change
  
// if (frameCount % 60 == 0) {
//   bgColor = color(random (225), random(225), random(225));
//   circleColor =
// color(random(225), random(225), random(225))
// }
// fill(circleColor)  
circle(x, y, 30)
}

function eyes(x,y,diameter){

  
stroke(0);
fill(2, 0, 3);
circle(260,150, 80)
circle(140,150,80)

//eybrows over the eyes rect  


let vol = mic.getLevel(7);   

fill(400);
noStroke(10);
let h = map(vol, 0,11, height,0);
rect(93, h - 300, 200, 35, 1000, 85, 80, 10);
rect(216, h - 300, 90, 35,20,30,10,5); 
  
}

function skull(x,y,diameter){
stroke(255);
fill(255);
circle(x, y, 254);
square(150, 220, 100); 

  
  
}

