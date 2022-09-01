//ART101 Avatar
//By Jiatao Xu


//Canvas Size (change x, y value below to scale)
canvasSize = {x: 650, y: 650}

//color pal.
let body = "#f5dfa4";
//let horn = "#3A2F15";
let horn = "#946B85";
let eye = "#FFFFFF";
let horn_acc = "#70FF13";
let shell = "#9C8957";







// //photo reference for initate construction
// let img;
// function preload(){
  
//   //reference img
//   img = loadImage('ART101AVA.png');
  
// }



function setup() {
  angleMode(DEGREES);
  createCanvas(canvasSize.x, canvasSize.y);
  gridX = width/10;
  gridY = height/10;
  

  
  
  //image(img,0,0);
  background(255);
  
  
  
  
  noFill();
  stroke(0);
  strokeWeight(5);
  
  
  
  
  fill(body);
  //Leg(back)
  beginShape();
	curveVertex(2.3077*gridX,7.2308*gridY);
	curveVertex(2.3077*gridX,7.6923*gridY);
	curveVertex(2.2*gridX,7.9538*gridY);
	curveVertex(2.1077*gridX,8.2308*gridY);
	curveVertex(1.8615*gridX,8.1385*gridY);
	curveVertex(1.6154*gridX,8.2*gridY);
  
  
	curveVertex(1.4769*gridX,8.3385*gridY);
	curveVertex(1.5692*gridX,8.4308*gridY);
	curveVertex(1.8308*gridX,8.5077*gridY);
  
	curveVertex(1.9231*gridX,8.5846*gridY);
	curveVertex(2.1692*gridX,8.6*gridY);
  
  
	curveVertex(2.5077*gridX,8.5231*gridY);
	curveVertex(2.8308*gridX,8.6*gridY);
	curveVertex(3.0769*gridX,8.4923*gridY);
	curveVertex(3.2462*gridX,8.2769*gridY);
	curveVertex(3.3538*gridX,7.2769*gridY);
  endShape();
  
  
  fill(shell);
  //SHELL
  ellipse(6.5*gridX, 5*gridY,5.5*gridX,6*gridY);
  //SHELL GROOVE
  noFill();
  beginShape();
	curveVertex(8.0462*gridX,5.0*gridY);
	curveVertex(8.2462*gridX,5.0769*gridY);
	curveVertex(8.2462*gridX,4.7538*gridY);
	curveVertex(7.9692*gridX,4.8462*gridY);
	curveVertex(7.8615*gridX,5.1846*gridY);
	curveVertex(8.0*gridX,5.4154*gridY);
	curveVertex(8.3231*gridX,5.3385*gridY);
	curveVertex(8.5846*gridX,4.8308*gridY);
	curveVertex(8.4769*gridX,4.1231*gridY);
	curveVertex(8.0462*gridX,3.8*gridY);
	curveVertex(7.4923*gridX,3.9692*gridY);
	curveVertex(7.1385*gridX,4.6154*gridY);
	curveVertex(7.2769*gridX,5.7538*gridY);
	curveVertex(7.9385*gridX,6.4*gridY);
	curveVertex(8.8462*gridX,5.8769*gridY);
	curveVertex(9.0*gridX,4.6615*gridY);
	curveVertex(8.3538*gridX,3.0*gridY);
	curveVertex(7.0462*gridX,2.6308*gridY);
	curveVertex(5.9538*gridX,3.6*gridY);
	curveVertex(5.6462*gridX,5.1538*gridY);
	curveVertex(6.5385*gridX,7.2154*gridY);
	curveVertex(8.0*gridX,7.4923*gridY);
  endShape();
  
  
  fill(horn);
  //HORN LEFT
  beginShape();
    //right
	curveVertex(2.3077*gridX,3.6*gridY);
	curveVertex(2.0*gridX,3.3385*gridY);
	curveVertex(1.5846*gridX,3.0*gridY);
	curveVertex(1.4615*gridX,2.6154*gridY);
	curveVertex(1.5538*gridX,2.2615*gridY);
	curveVertex(1.8308*gridX,1.6769*gridY);
	curveVertex(1.8769*gridX,1.3231*gridY);
	curveVertex(1.7692*gridX,1.0923*gridY);
  
    //vertex(tip)
	curveVertex(1.4154*gridX,0.9385*gridY);
  
    //left
	curveVertex(1.5385*gridX,1.2*gridY);
	curveVertex(1.5385*gridX,1.4154*gridY);
	curveVertex(1.4*gridX,1.6769*gridY);
	curveVertex(1.0615*gridX,1.9077*gridY);
	curveVertex(0.6*gridX,2.2462*gridY);
	curveVertex(0.2615*gridX,2.6769*gridY);
	curveVertex(0.1231*gridX,3.0923*gridY);
	curveVertex(0.1692*gridX,3.5846*gridY);
	curveVertex(0.3385*gridX,4.0*gridY);
	curveVertex(0.6769*gridX,4.3692*gridY);
	curveVertex(1.4769*gridX,4.6769*gridY);
  endShape(CLOSE);  
  
  
  //HORN RIGHT
  beginShape();
    //right
	curveVertex(3.5385*gridX,4.3231*gridY);
	curveVertex(4.2308*gridX,4.0308*gridY);
	curveVertex(4.6615*gridX,3.7385*gridY);
	curveVertex(4.8923*gridX,3.2615*gridY);
	curveVertex(4.9385*gridX,2.8154*gridY);
	curveVertex(4.8308*gridX,2.4154*gridY);
	curveVertex(4.4462*gridX,1.9692*gridY);
	curveVertex(3.8923*gridX,1.6615*gridY);
	curveVertex(3.4462*gridX,1.4769*gridY);
	curveVertex(3.2*gridX,1.3231*gridY);
	curveVertex(3.0923*gridX,1.0615*gridY);
  
    //vertex
	curveVertex(3.1538*gridX,0.8462*gridY);
  
    //left
	curveVertex(2.8462*gridX,1.0462*gridY);
	curveVertex(2.7846*gridX,1.3231*gridY);
	curveVertex(2.8769*gridX,1.5538*gridY);
	curveVertex(3.2154*gridX,1.7846*gridY);
	curveVertex(3.4769*gridX,1.9692*gridY);
	curveVertex(3.6462*gridX,2.3385*gridY);
	curveVertex(3.5692*gridX,2.6923*gridY);
	curveVertex(3.3385*gridX,2.9846*gridY);
	curveVertex(2.8769*gridX,3.3385*gridY);
	curveVertex(2.4*gridX,3.7077*gridY);
  endShape(CLOSE);
  
  fill(horn_acc);
  //HORN LEFT INTERIOR
  //1
  beginShape();
	curveVertex(1.5385*gridX,2.9692*gridY);
	curveVertex(1.5538*gridX,2.9692*gridY);
	curveVertex(1.3077*gridX,2.9846*gridY);
	curveVertex(1.1231*gridX,3.1692*gridY);
	curveVertex(0.9231*gridX,3.5385*gridY);
	curveVertex(0.8462*gridX,4.0615*gridY);
	curveVertex(1.2308*gridX,4.6923*gridY);
	curveVertex(2.2769*gridX,3.5846*gridY);
	curveVertex(2.0462*gridX,3.3692*gridY);
	curveVertex(1.8308*gridX,3.2308*gridY);
  endShape(CLOSE);
  //2
  beginShape();
	curveVertex(0.1692*gridX,3.5846*gridY);
	curveVertex(0.1385*gridX,3.2*gridY);
	curveVertex(0.2462*gridX,2.8615*gridY);
	curveVertex(0.5077*gridX,2.5385*gridY);
    //turn
	curveVertex(0.9385*gridX,2.4154*gridY);
	curveVertex(0.9538*gridX,2.4154*gridY);
	curveVertex(0.9538*gridX,2.4154*gridY);
  
	curveVertex(1.0615*gridX,2.2308*gridY);
	curveVertex(1.1846*gridX,2.1077*gridY);
  
    //turn
	curveVertex(1.3846*gridX,1.9692*gridY);
	curveVertex(1.3692*gridX,1.9692*gridY);
	curveVertex(1.3692*gridX,1.9385*gridY);
  
    
	curveVertex(0.9385*gridX,1.9692*gridY);
	curveVertex(0.5538*gridX,2.2154*gridY);
	curveVertex(0.2154*gridX,2.6615*gridY);
	curveVertex(0.1077*gridX,3.1846*gridY);
  endShape(CLOSE);
  //3
  beginShape();
	curveVertex(1.4308*gridX,0.9692*gridY);
	curveVertex(1.5692*gridX,1.3077*gridY);
	curveVertex(1.5231*gridX,1.4154*gridY);
	curveVertex(1.6615*gridX,1.4923*gridY);
	curveVertex(1.8*gridX,1.7077*gridY);
	curveVertex(1.7538*gridX,1.4154*gridY);
	curveVertex(1.6923*gridX,1.1846*gridY);
	curveVertex(1.5538*gridX,1.0154*gridY);
  endShape(CLOSE);
  
  
  //HORN RIGHT INTERIOR
  //1
  beginShape();
	curveVertex(3.3538*gridX,2.9846*gridY);
	curveVertex(3.1846*gridX,3.1231*gridY);
	curveVertex(2.8923*gridX,3.3385*gridY);
	curveVertex(2.6769*gridX,3.4462*gridY);
	curveVertex(2.7538*gridX,3.8*gridY);
	curveVertex(3.4923*gridX,4.2615*gridY);
	curveVertex(3.7385*gridX,4.1077*gridY);
	curveVertex(3.8462*gridX,3.7538*gridY);
	curveVertex(3.8308*gridX,3.4308*gridY);
	curveVertex(3.6769*gridX,3.1846*gridY);
  endShape(CLOSE);
  //2
  beginShape();
	curveVertex(4.0462*gridX,2.5231*gridY);
	curveVertex(4.3846*gridX,2.6308*gridY);
	curveVertex(4.6462*gridX,2.8462*gridY);
	curveVertex(4.7538*gridX,3.2*gridY);
	curveVertex(4.7538*gridX,3.6154*gridY);
	curveVertex(4.9231*gridX,3.1231*gridY);
	curveVertex(4.8462*gridX,2.4154*gridY);
	curveVertex(4.4769*gridX,1.9692*gridY);
	curveVertex(4.0769*gridX,1.7692*gridY);
	curveVertex(3.8462*gridX,1.8462*gridY);
	curveVertex(3.8462*gridX,1.8615*gridY);
	curveVertex(4.0308*gridX,2.0769*gridY);
	curveVertex(4.0923*gridX,2.3077*gridY);
  endShape(CLOSE);
  //3
  beginShape();
	curveVertex(3.1538*gridX,0.8308*gridY);
	curveVertex(3.1538*gridX,1.2308*gridY);
	curveVertex(3.2462*gridX,1.3538*gridY);
    curveVertex(3.061*gridX,1.385*gridY);
	curveVertex(2.9462*gridX,1.5154*gridY);
	curveVertex(2.9231*gridX,1.2462*gridY);
	curveVertex(3.0308*gridX,0.8769*gridY);
    
  endShape(CLOSE);
  
  fill(body);
  //MAIN BODY
  //fill('#66a1ff');
  beginShape();
	curveVertex(2.8923*gridX,3.3538*gridY);
	curveVertex(3.4308*gridX,3.4769*gridY);
	curveVertex(4.0769*gridX,3.8615*gridY);
	curveVertex(4.4308*gridX,4.2308*gridY);
	curveVertex(4.8462*gridX,4.9846*gridY);
	curveVertex(5.2308*gridX,6.0923*gridY);
	curveVertex(5.9077*gridX,6.8154*gridY);
	curveVertex(7.2923*gridX,7.4*gridY);
	curveVertex(8.4308*gridX,7.6*gridY);
	curveVertex(9.0308*gridX,7.8923*gridY);
	curveVertex(9.7385*gridX,8.2923*gridY);
	curveVertex(9.0462*gridX,8.6462*gridY);
	curveVertex(4.3077*gridX,8.5077*gridY);
	curveVertex(2.7692*gridX,8.0462*gridY);
	curveVertex(1.7692*gridX,7.2769*gridY);
	curveVertex(1.1538*gridX,6.4923*gridY);
	curveVertex(0.8*gridX,5.6769*gridY);
	curveVertex(0.6923*gridX,4.9538*gridY);
	curveVertex(0.8154*gridX,4.0923*gridY);
	curveVertex(1.2308*gridX,3.6*gridY);
	curveVertex(1.9385*gridX,3.3231*gridY);
  endShape(CLOSE);
  
  //BODY STRIPE
  fill(horn);
  //1
  beginShape();
	curveVertex(8.3385*gridX,7.5846*gridY);
	curveVertex(8.3231*gridX,7.7538*gridY);
	curveVertex(8.2462*gridX,7.8923*gridY);
	curveVertex(8.1077*gridX,8.1538*gridY);
	curveVertex(8.6308*gridX,7.9692*gridY);
	curveVertex(8.7385*gridX,7.7231*gridY);
  endShape(CLOSE);
  //2
  beginShape();
	curveVertex(8.9846*gridX,7.8462*gridY);
	curveVertex(9.2615*gridX,8.0*gridY);
	curveVertex(8.8769*gridX,8.2462*gridY);
	curveVertex(8.9385*gridX,8.0154*gridY);
  endShape(CLOSE)

  
  fill(body);
  //Legs(front)
  beginShape();
	curveVertex(5.4154*gridX,6.7385*gridY);
	curveVertex(5.6154*gridX,7.4*gridY);
	curveVertex(5.2154*gridX,7.9231*gridY);
  
	curveVertex(4.9077*gridX,8.2462*gridY);
	curveVertex(4.7231*gridX,8.3231*gridY);
	curveVertex(4.5538*gridX,8.3692*gridY);
	curveVertex(4.4615*gridX,8.4769*gridY);
  
	curveVertex(4.4923*gridX,8.5846*gridY);
	curveVertex(4.6615*gridX,8.6154*gridY);
  
	curveVertex(4.8923*gridX,8.6308*gridY);
	curveVertex(4.8769*gridX,8.8308*gridY);
	curveVertex(5.0615*gridX,8.8462*gridY);
	curveVertex(5.2615*gridX,8.8154*gridY);
    
  
	curveVertex(5.4615*gridX,8.6923*gridY);
	curveVertex(5.6154*gridX,8.8462*gridY);
	curveVertex(5.7846*gridX,8.8308*gridY);
	curveVertex(5.8923*gridX,8.7077*gridY);
	curveVertex(6.0154*gridX,8.5385*gridY);
  
  
	curveVertex(6.2615*gridX,8.2462*gridY);
	curveVertex(6.4154*gridX,8.0*gridY);
	curveVertex(6.4615*gridX,7.8154*gridY);
	curveVertex(6.3538*gridX,7.6*gridY);
	curveVertex(5.8154*gridX,7.0462*gridY);
  endShape();
  
  
  
  
  

  
  
}

function draw() {
  
  gridX = width/10;
  gridY = height/10;
  
  //FACIAL EXP.
  
  fill(eye);
  //push and pop to clear transformation, if not the rotation and translation would contamintate the next transformation
  //left eye
  push();
  translate(1.5*gridX,4.2*gridY);
  rotate(-15);
  ellipse(0,0,0.8*gridX,0.35*gridY);
  pop();
  
  //right eye
  push();
  translate(3.3*gridX,4.2*gridY);
  rotate(15)
  ellipse(0,0,0.8*gridX,0.35*gridY);
  pop();
  
  //mouth
  line(2.1*gridX,4.23*gridY,2.5*gridX,4.2*gridY);
  
//mole_right
  beginShape(POINTS);
	vertex(3.6769*gridX,4.6*gridY);
	vertex(3.8462*gridX,4.3846*gridY);
	vertex(3.9077*gridX,4.5538*gridY);
  endShape();
  //mole_left
  beginShape(POINTS);
	vertex(1.1538*gridX,4.5692*gridY);
	vertex(0.9385*gridX,4.4*gridY);
	vertex(0.9385*gridX,4.5538*gridY);
  endShape();
  
}

//log mouse location



function mouseClicked(){
  console.log(mouseX, mouseY);
}


//------------------------------------------------------------------------------------------
//(Note for future self)
//The construction of the avatar was based on the 10x10 grid system. The resolution is therefore divided by 10 to get the lenght of one grid. The grid that is use as a unit to measure where thing should be. With this system, when the resolution of the canvas changes, the image would also scale with the changes.

//The coversion work as such:
//since the canvas is first set to 650x650, each grid of the 10x10 would have a lenght of 65px. All the coordinates are plotted at this resoultion. By dividing all the pixel coordinates by 65px, the resulting number would convert to x-amount of grid.

//    For example, a xy-coordinate of (650px, 650px) would be at (10 grid, 10 grid)



//The more complex shapes (most of the custom shapes) are plotted with hardcoded coordinates. I ran everything through a custom Python script that would convert the pixel coordinates to the grid system. Script is attached:

//https://replit.com/@blackstarsjx/Lazy-Converter#main.py


//------------------------------------------------------------------------------------------
