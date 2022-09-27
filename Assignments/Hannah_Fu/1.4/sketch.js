//1.4 - Variables increment to create time-based movement (i.e. something falls on its own) 
let count = 0;
let myMap = 0;

let circleChange = false;
let triRot = 45
var smallOvals = [];
//r smallQuad

function setup() {
  createCanvas(windowWidth,     
               windowHeight);
  
  angleMode(DEGREES);
  frameRate(2);

}
function draw (){
  if (count<360){
    count++
  }else if (count==360){count=0}
  
  background(201, 225, 242);
  if(circleChange == true){
   circle(width/4, height/6,40)
  }
  
  smallTri(2,2, 0.3);
  smallQuad(5,5,0.2);
  fadeTri();
  fadeQuad(1,3,0.1);
 for (var i = 0; i <smallOvals.length; i++) {
   //smallOvals[i].move();
   smallOvals[i].display();
 }
  
  if(smallOvals.length > 1){
    smallOvals.splice(0,2);
  }
 // myMap = map(mouseX, 0, width, 0, 20);
    
  
}

function mousePressed(){
    //allQuad.push(new smallQuad());
  if(mouseX > width * 0.4 &&
           mouseX < width * 0.8 &&
           mouseY > height * 0.05 &&
           mouseY < height * 0.35){
            console.log("mouse!");
          triRot = -triRot;
  } 
  else if(mouseX<width *0.2 ||
          mouseX>width *0.8){
          circleChange = !circleChange;
  }
  smallOvals.push(new smallOval(mouseX, mouseY));
   
  //ellipse(mouseX, mouseY, 16, 16)

 

}
function mouseClicked(){
    
   ellipse(mouseX, mouseY, 16, 16)
   // return false;
  }

function keyPressed(){
  smallOvals.splice(0,1);
}
function smallTri(xpos, ypos, rot){
   push();
  stroke(random(255), random(255), random(255))
  fill(244, 240, 247, 150)
   beginShape();
  vertex(width*0.68, height*0.32);
  vertex(width*0.7, height*0.49);
  vertex(width*0.55, height*0.25);
  endShape(CLOSE);
  pop();
}
function smallQuad(){
  push();
  translate(width/2, height/2);
  rotate(triRot);
  translate(width*-0.5, height*-0.5);
  stroke(random(255), random(255), random(255))
  fill(236, 255, 235, 150)
  beginShape();
  vertex(width*0.6, height*0.2);
  vertex(width*0.85, height*0.1);
  vertex(width*0.85, height*0.2);
  vertex(width*0.7, height*0.25);
  endShape(CLOSE);
  pop();
}
function fadeTri(xpos, ypos, rot){
  push();
  stroke(0)
  fill(random(100,255), random(100, 255), random(100,255), random(0,50));
  beginShape();
  vertex(width*0.2, height*0.5);
  vertex(width*0.7, height*0.8);
  vertex(width*0.3, height*0.2);
  endShape(CLOSE);
  pop();
}
function fadeQuad(){
  push();
  fill(random(0,255), random(0, 255), random(0,255), random(0,50));
  beginShape();
  vertex(width*0.35, height*0.25);
  vertex(width*0.85, height*0.2);
  vertex(width*0.8, height*0.4);
  vertex(width*0.6, height*0.4);
  endShape(CLOSE);
  pop();
}
function smallOval(x, y){
  this.x = x;
  this.y = y;
  
  this.display = function(){
    
    fill(255,0,100,50)
    ellipse(this.x, this.y, 24,24);
  }
}

