let count = 0;

function setup() {
 let cnv =  createCanvas(windowWidth, windowHeight);
  background(233, 230, 252);
//   cnv.mousePressed(userStartAudio);
//   mic = new p5.AudioIn();
//   mic.start();
    
//   micLevel=mic.getLevel();
//   let y=mic.getLevel*100
}


function draw() {
 
  halo();
  base();
  ears();
  tent();
  mouth();
  eyes();
  blush();
  

}

function halo(){
    let i= width/2;
    let j= height/2;
    let t= color(114, 91, 143);
    let t1= color (76, 50, 89);
    let h= color(255, 206, 122);
    let e= color(57, 57, 66);
    noStroke();
    //Halo
  push();
  fill(h);
  ellipse(i, 100, 500,150);
  fill(233, 230, 252);
  ellipse(i, 100, 450, 100);
  pop();
}

function base(){
    let i= width/2;
    let j= height/2;
    let t= color(114, 91, 143);
    let t1= color (76, 50, 89);
    let h= color(255, 206, 122);
    let e= color(57, 57, 66);
    noStroke();
  
  //Base
  push();
  fill(t1);
  ellipse(i+100, j+300, 200, 230);
  ellipse(i-100, j+300, 200, 230);
  
}
  function ears(){
    let i= width/2;
    let j= height/2;
    let t= color(114, 91, 143);
    let t1= color (76, 50, 89);
    let h= color(255, 206, 122);
    let e= color(57, 57, 66);
    noStroke();
  
  //Ears
  fill(t);
  ellipse(i,j, 600, 600) ;
  rect(i,j, -300, 300 );
  rect(i,j, 300, 300);
  ellipse(i+200,j-200, 300,80);
  ellipse(i-200,j-200, 300,80);
  }

  function tent(){
  let i= width/2;
  let j= height/2;
  let t= color(114, 91, 143);
  let t1= color (76, 50, 89);
  let h= color(255, 206, 122);
  let e= color(57, 57, 66);
noStroke();
  
  //Tentecles
  fill(t);
  ellipse(i+200, j+300, 200, 300);
  ellipse(i, j+300, 200, 300);
  ellipse(i-200, j+300, 200, 300);
  pop();
  }

function mouth(){
    let i= width/2;
  let j= height/2;
  let t= color(114, 91, 143);
  let t1= color (76, 50, 89);
  let h= color(255, 206, 122);
  let e= color(57, 57, 66);
  noStroke();
    
  //Mouth
  push();
  fill(227, 91, 120);
  rect(i-60,j+80, 120,40);
  arc(i, j+120, 120, 120, 0, PI);
  fill(900);
  triangle(i+12,j+60,i+45,j+120,i+60,j+85);
  fill(e);
  ellipse(i+60, j+80, 120, 70);
  ellipse(i-60, j+80, 120, 70);
  fill(t);
  ellipse(i+60, j+70, 120, 60);
  ellipse(i-60, j+70, 120, 60);
  rect(i-180,j+80, 120,40);
  rect(i+60,j+80, 120,40);
  pop();
}

function blush(){
  let i= width/2;
  let j= height/2;
  let t= color(114, 91, 143);
  let t1= color (76, 50, 89);
  let h= color(255, 206, 122);
  let e= color(57, 57, 66);
  noStroke();
  //Blush
  push();
  fill(255, 143, 165);
  ellipse(i+180, j+140, 150, 50);
  ellipse(i-180, j+140, 150, 50);
  pop();
}

function eyes(){
  let i= width/2;
  let j= height/2;
  let t= color(114, 91, 143);
  let t1= color (76, 50, 89);
  let h= color(255, 206, 122);
  let e= color(57, 57, 66);
  noStroke();
  
  ///Eyes
  push();
  fill(e)
  rect(i-240,j+50, 150,30);
  rect(i+90,j+50, 150,30);
  pop();
  
}

function canvas_size(){
  canvasResize(windowWidth, windowHeight);
}
  
  

  