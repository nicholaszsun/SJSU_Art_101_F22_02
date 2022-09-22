// Eli Landsman's Avatar

// Canvas
let p;
let i;
let count = 35;
toggle = true;
let back = []
let speed;
function setup() {
  
  cnv = createCanvas(870, 835);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  let myMap = 0;
  frameRate(60);
  
  //(_xpos,_ypos,_rot,_size, _speed){
  for(let i = 0; i <= 20; i++){
  back[i] = new Ovals(random(1,1000), random(1,100), random(360), random(1,5), random(5,20));

  }
}

// Draw Functions
function draw() {
  micLevel = mic.getLevel();
  let m = micLevel*900;
  let p = micLevel*50
  let j = height/2
  let t = ('rgba(164,229,164,100)')
  let g = width/2.666666666
  background(201, 228, 243);
  fill(255);


  for(let i = 0; i <= 20; i++){
  back[i].display();
  back[i].move();
    fill(250, 245, 225)
  ellipse(width/2, height*.95, width*2, height/3);

  }
  


  myMap = map(mouseX, width/3.04, mouseY, 0, height/9);

  
                              //Background
  shadow(3, 1, 25, 300);

                              //BODY_PARTS
//BigShadow
  shadow(2.2, 1.15, 1.333, 13.33);
  
                              //LEGS
//leftleg
  leftleg(2.6666, 1.6, 12.1212,4);    
//rightleg
  legs(1.8475,1.6,12.1212,4);
//leftLegshadow
  legshadow(2.63,1.415,30.76,8.8888);
//rightLegshadow
  legshadow(1.826, 1.415, 30.76,8.8888)
//Right Foot
  rfoot(1.843, 1.14, 1.48, 1.23, 1.48, 1.14)
//Left Foot
  lfoot(2.68, 1.14, 2.68, 1.23, 2, 1.14)
  
                             //BODY
  body(g, 2.66, 4,3.07);
  
                             //HEAD
  head(3.04, 20, 2.75, 3.07);
  
                             //Chin
  chin(2, 3.1, 5.7, 10, 0, HALF_PI, PI);
  
                            //Mouth
  mouth(2.15, 4, 12.1212, 30.76);
  
                            //Tongue  
  tongue(2.15, 3.9, 14.33,30.769);
  
                            //Teefs
  teef(2.01, 4.08, 30.7, 80);
  
                          //FaceShadow
  faceshadow(3.007, 2.85, 3.007, 17.39, 2.35, 4.333);
  
                          //Base Eyes
  eyes(2.4242, 5.33, 13.5, 13.5);
  eyes(1.63, 5.33, 13.5, 13.5);
  
                          //BodyShadow
  bodyshadow(2.63, 2.63, 30.76,3.2);
  
             
   
  
                       //BugEyes
  miceyes(2.4242,5.33, m*2); 
  miceyes(1.63,5.33, m*2); 
  
      
                          //Highlights
  highlights(2.312, 5.882, 30);
  highlights(1.58, 5.882, 30);
  
                            //Arms
  shoulders(2.89, .05 * count, 13.33, 4.444);
  shoulders(1.538, .05 * count, 13.33, 4.44);
  armshadow(2.96, .05 * count, 20, 5.714);
                            //Hands
  hands(1.538, .04 * count, 13.33, 13.33);
  hands(2.9, .04 * count, 13.33, 13.33);
  
                        //Shoulder Timer
  if(count == 60 || count == 40){
    toggle = !toggle;
  }


  if (toggle == true){
    count = count + 1
  }else if(toggle == false){
    count = count - 1
  }
  
  if (toggle == true && count == 40){
    count = count + 1
  }
    if(toggle == true && count <= 50){
    count = count + 1
  }
  else if(toggle == false && count >=50){
    count = count - 1
  }
  
  // //Frame Animation
  // if (count >= 46){
  //   frameRate(20)
  // } else if(frameRate(60))
// console.log(count);
  
 
  
 strokeWeight(4) 
                          //FUNCTIONS
  
function shadow(xpos, ypos, wpos, hpos){
  //shadow
  fill(133);
  noStroke();
  ellipse(width/xpos, height/ypos, width/wpos,height/hpos);
}

function body(xpos, ypos, wpos, hpos){
  stroke(0);
  //body
  fill(t);
  rect(g, height/ypos, width/wpos,height/hpos);
}
  
 function leftleg(xpos, ypos, wpos, hpos){ 
   fill(t);
    stroke(0);
  rect(width/xpos, height/ypos, width/wpos,height/hpos);
  }
  
function legs(xpos, ypos, wpos, hpos){
  //legs
  fill(t);
  stroke(0);
  rect(width/xpos, height/ypos, width/wpos,height/hpos);
  // rect(g, g, width/4,height/3.07);
}
  
function legshadow(xpos, ypos, wpos, hpos){
  //legshadow
  fill('rgba(142,204,142,100)');
  noStroke();
  rect(width/xpos, height/ypos, width/wpos,height/hpos);
}
  
function rfoot(xpos, ypos, wpos, hpos,ypos2){
  //rfoot
  fill(t);
  stroke(1);
  triangle(width/xpos, height/ypos, width/xpos, height/hpos, width/wpos, height/ypos);
}
  
function lfoot(xpos1, ypos1, wpos2, hpos2,wpos3,hpos3){
  //lfoot
  fill(t);
  stroke(1);
  triangle(width/xpos1, height/ypos1, width/wpos2, height/hpos2, width/wpos3, height/hpos3);
}
  
function head(xpos,ypos,wpos,hpos){
  //head
  fill(t);
  stroke(1);
  rect(width/xpos, height/ypos, width/wpos, height/hpos);
}

function mouth(xpos,ypos,wpos,hpos){
  //mouth
  stroke(1);
  fill(0);
  rect(width/xpos, height/ypos, width/wpos, height*.25*p);
}
  
function tongue(xpos,ypos,wpos,hpos){
  push();
  //tongue
  stroke(1);
  fill('rgba(255, 0, 0, 1)');
  noStroke();
  ellipseMode(CORNER);
  ellipse(width/xpos, height/ypos, width/wpos,height*.25*p);
  pop();
} 
  
function teef(xpos, ypos, wpos, hpos){
  //teeth
  push();
  ellipseMode(CENTER);
   noStroke();
  fill(255);
  rect(width/xpos, height/ypos, width/wpos, height/hpos);
   pop();
}
 
function faceshadow(xpos, ypos, wpos, hpos,xpos1,xpos2){
  noStroke()
  fill('rgba(142,204,142,100)')
  triangle(width/xpos, height/ypos, width/wpos, height/hpos, width/xpos1, height/xpos2);
}
 
function miceyes(posx, posy, size){
  push();
  fill(0);
    if(mouseX > width/3.04 && 
      mouseX < width/1.43  &&
      mouseY > height/20 &&
      mouseY < height/3.07 && mouseIsPressed){
       fill('rgba(255,0,0,100)')
   }else if (mouseX < width/3.04 &&
             mouseX > width/1.43 &&
             mouseY < height/20 &&
             mouseY > height/3.07);
  ellipseMode(CENTER);
ellipse (width/posx, height/posy, m);
  pop();
  
}
  
function eyes(posx, posy, wpos,hpos){
    push()
  //eyes
  // stroke(4);

     fill(0);
  
   if(mouseX > width/3.04 && 
      mouseX < width/1.43  &&
      mouseY > height/20 &&
      mouseY < height/3.07 && mouseIsPressed){
       fill('rgba(255,0,0,100)')
         console.log("mouse!");
   }else if (mouseX < width/3.04 &&
             mouseX > width/1.43 &&
             mouseY < height/20 &&
             mouseY > height/3.07);
    ellipseMode(CENTER);
  ellipse(width/posx, height/posy, width/wpos, height/hpos);
    pop();
  }
  
function highlights(posx, posy, size){
  push();
  //highlights
  noStroke();
  fill(255)
  ellipseMode(CENTER);
  ellipse(width/posx, height/posy, width/size);
pop();
}

function bodyshadow(posx,posy, posw, posh){
  //bodyshadow
  push();
  noStroke();
   fill('rgba(142,204,142,100)');
  rect(width/2.63, height/2.63, width/30.76,height/3.2);
  pop();
}
  
function shoulders(posx,posy,posw,posh){
  //shoulders
  
  push();
  stroke(1);
  fill(t);
  ellipse(width/posx, height/posy, width/posw, height/posh);
  pop();
}
 
function armshadow(posx,posy,posw,posh){
  //shadow
  ellipseMode(CENTER);
  push();
  noStroke();
  fill('rgba(142,204,142,100)');
  ellipse(width/posx, height/posy, width/posw, height/posh);
  pop();
}
  
function hands(posx,posy,posw,posh){
  //hands
  ellipseMode(CENTER);
  push();
  stroke(1);
  fill(t);
  ellipse(width/posx, height/posy, width/posw, height/posh);
  pop();
}
function chin(posx,posy,posw,posh){  
  //chin
  ellipseMode(CENTER);
  push();
  stroke(1);
  noFill(t);
  arc(width/posx, height/posy, width/posw, height/posh, 0, HALF_PI, PI);
  pop();
}
  
  if (mouseIsPressed === true){
    console.log(+mouseX, +mouseY)
  }
     
     
     

  
  
}