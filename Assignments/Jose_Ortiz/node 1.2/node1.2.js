var mic;

let count=0;
myMap = 0;
let x=268;


function setup() {
  let cnv = createCanvas(600, 600);
  cnv.mousePressed(userStartAudio);
  
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  
  
  
 

  angleMode(DEGREES)
  

}
function draw() {
  
   if  (count<360)
    (count++)
  else if (count== 360)(count=0)
  
  background(125)
 
  text('tap to start', width/2,20);
  
  
  rightWhee();
 
  leftWhee();
 
  outerWhee();

   board();
  
  rightF();

  head();

  rEye();
  
  leftF();
 
 mouth();
  
  pupil();
 
console.log('my mouseX is: ' + mouseX)
  
console.log('my mouseY is; ' + mouseY)
  
  myMap = map(mouseX, 0, width,50,48)
  
  console.log(myMap)
  
  
}

function rightWhee(){
   
  //Right Inner wheele
  push();
 
  fill(220);
  beginShape();
  circle(width*.32,height*.75,width*.09);
  endShape(CLOSE);
  pop();
  
//Right Outer Wheele
  
  push()
  translate(width*555)
  beginShape()
  fill(220);
  circle(width*.30,height*.75, width*.1);
  endShape(CLOSE)
  pop()
  
  
}

function leftWhee(){
 
  //left Inner Wheele
  
  push() 
  fill(220);
  beginShape()

  circle(width*.63, height*.75, width*.09);
  endShape(CLOSE)
  pop();
  
  //Left outer outer wheel
  
  push()
  fill(220);
  beginShape()
  
  circle(width*.30,height*.75, width*.08);
endShape(CLOSE)
  pop()
  
  //Left outer outer wheel
  
  push()
  fill(220);
  beginShape()
  
  circle(width*.30,height*.75, width*.08);
endShape(CLOSE)
  pop()
  
}
function outerWhee(){
 
  //Right Outer Wheel
  
  push()
  fill(220);
  beginShape()
  
  circle(width*.65, height*.75, width*.1);
  endShape(CLOSE)
  pop()
  
  
//Right Outer Outer Wheele
  
  push()
  fill(220);
  beginShape()
  
  circle(width*.65, height*.75, width*.08);
  endShape(CLOSE)
  pop()
  
}
function board(){
  //board
  
  push()
  fill(6, 248, 6);
  beginShape()
 
  ellipse(width*.46,height*.68,width*.5,height*.08)
endShape(CLOSE)
  pop ()
  
}

function rightF(){
  
  //right foot
 push()
  fill(220);
  beginShape()
  ellipse(width*.36, height*.63,width*.12,height*.09);
  endShape(CLOSE)
  pop()
  
 
   //right eye
  push()
  fill(22);
  beginShape()
  
  ellipse(width*.39,height*.39,width*.095,height*.18);
  endShape(CLOSE)
  pop()
 
}

function head(){
    //wik
  push()
 let p1 = { x: 500, y: 1 };
let p2 = { x: 350, y: 230 };
let p3 = { x: 150, y: 50 };
let p4 = { x: 285, y: 240 };
noFill();

stroke(255, 102, 30);
curve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x, p4.y);
 pop()
  
 
  //head
  push() 
  translate(width*.5,height*-.18)
  rotate(myMap)
  fill(246, 25, 25);
 beginShape()

  circle(width*.45,height*.45,width*.4);
endShape(CLOSE)
  pop()
}

function rEye (){
   
  //right eye
  push()
  fill(22);
  beginShape()
  
  ellipse(width*.39,height*.39,width*.095,height*.18);
  endShape(CLOSE)
  pop()
 
}

function leftF()
{ //left foot
  
  push() 
  fill(220);
  beginShape()

  ellipse(width*.57,height*.65, width*.138,height*.09);
  endShape(CLOSE)
  pop()
  
  //left eye
  
  push()
  fill(22);
  beginShape()
  
  ellipse(width*.54,height*.39,width*.095,height*.18);
endShape(CLOSE)
  pop()

}

function mouth(){
    //mouth
  
  push()
  fill(243, 87, 87);
  beginShape()

   square(width*.38,height*.478,height*.14,width*.2,width*.05,width*.03,width*.08,width*.6,);
  endShape(CLOSE)
  pop()


}

function pupil(){
 //right pupil
  
  fill(243,243,243)
  var vol = mic.getLevel();
  ellipse(width*.39,height*.4,vol*200,vol*400)
  console/log(vol)
  
  //left pupil
   
  fill(243,243,243)
  var vol = mic.getLevel();
  ellipse(width*.53,height*.4,vol*200,vol*300)
  console/log(vol)

 
 
}