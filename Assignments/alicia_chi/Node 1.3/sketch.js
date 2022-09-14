//WAH!
function setup() {
  createCanvas(1000, 1000);
  background(233, 230, 252);
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(233, 230, 252);
  let i= width/2;
  let j= height/2;
  let t= color(114, 91, 143);
  let t1= color (76, 50, 89);
  let h= color(255, 206, 122);
  let e= color(57, 57, 66);
  let b= color(255, 143, 165);
  let vol = mic.getLevel()*2;
  let vol1 = mic.getLevel();
  let vol_mouth = mic.getLevel()*-.9;
  
  fill(127);
  stroke(0); 
  
  halo();
  base();
  earR();
  earL();
  tent();
 
  
//ADD EAR ROTATION BASED ON MOUSE TOUCH
  
  let brow = map(vol, 0, 1, height/2, 30);
  fill(e);
  rect(i+80, brow, 150, 20);
  rect(i-230, brow, 150, 20);
  
  let mouth_action_open = map(vol_mouth, 0, 1, -25+ height/2, 30);
  fill(227, 91, 120);
  rect(i-60,-20 + mouth_action_open, 120,150);
  arc(i, 130 + mouth_action_open, 120, 120, 0, PI);
  fill(900);
  triangle(i+12,j+60,i+45,j+120,i+65,j+90);

  //mouth cropping
  mouth();
  
  //Details
  eyes();

 if (mouseIsPressed == true) {
  fill(b);

   } else{
     fill(t)
   }
  ellipse(i+180, j+140, 150, 50);
  ellipse(i-180, j+140, 150, 50);


//Functions
function browL(){

    rect(i+80, brow, 150, 20);
  
}

function browR(){

    rect(i-230, brow, 150, 20);
  
}

function halo(){
  noStroke();
  push();
  fill(h);
  ellipse(i, 100, 500,150);
  fill(233, 230, 252);
  ellipse(i, 100, 450, 100);
  pop();
}

function base(){
  push();
  fill(t1);
  ellipse(i+100, j+300, 200, 230);
  ellipse(i-100, j+300, 200, 230);
  fill(t);
  ellipse(i,j, 600, 600) ;
  rect(i,j, -300, 300 );
  rect(i,j, 300, 300);
  
}

function earR(){
  fill(t);
  ellipse(i-200,j-200, 300,80);
  }

function earL(){
  push();
  rotate(-.22*PI/3.0);
  fill(t);
  translate(-70, 150)
  ellipse(i+200,j-200, 300,80);
  pop();
  }

function tent(){
  fill(t);
  ellipse(i+200, j+300, 200, 300);
  ellipse(i, j+300, 200, 300);
  ellipse(i-200, j+300, 200, 300);
  pop();
  }

function mouth_open(){
  push();
  fill(227, 91, 120);
  rect(i-60,j+80, 120,40);
  arc(i, j+120, 120, 120, 0, PI);
  fill(900);
  triangle(i+12,j+60,i+45,j+120,i+65,j+90);
  fill(e);
  ellipse(i+60, j+80, 120, 70);
  ellipse(i-60, j+80, 120, 70);
  fill(t);
  rect(i-60,j+80, 120,120);
  ellipse(i+60, j+75, 120, 60);
  ellipse(i-60, j+75, 120, 60);
  rect(i-180,j+70, 120,80);
  rect(i+60,j+75, 120,40);
  pop();
}

function mouth(){
  push();
  fill(e);
  ellipse(i+60, j+80, 120, 70);
  ellipse(i-60, j+80, 120, 70);
  fill(t);
  ellipse(i+60, j+70, 120, 60);
  ellipse(i-60, j+70, 120, 60);
  rect(i-180,j+70, 120,80);
  rect(i+60,j+75, 120,40);
   rect(i-60,j-140, 120,220);
  pop();
}

function blush(){

  push();
  fill(b);
  ellipse(i+180, j+140, 150, 50);
  ellipse(i-180, j+140, 150, 50);
  pop();
}

function eyes(){

  push();
  fill(e)
  ellipse(i-160,j+50, 150,10);
  ellipse(i+160,j+50, 150,10);
  ellipse(i-160,j+55, 150,15);
  ellipse(i+160,j+55, 150,15);
  pop();
  
}

function eyes_open(){

  push();
  noStroke();
  stroke(e);
  strokeWeight(5);
  fill(999)
  ellipse(i-160,j+50, 150,30);
  ellipse(i+160,j+50, 150,30);
  fill(e);
  ellipse(i-160,j+50, 60,30);
  ellipse(i+160,j+50, 60,30);
  noStroke();
  fill(b);
  ellipse(i+180, j+140, 150, 50);
  ellipse(i-180, j+140, 150, 50);
  pop();
}

}




