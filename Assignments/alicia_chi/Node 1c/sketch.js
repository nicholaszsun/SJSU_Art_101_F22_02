function setup() {
  createCanvas(1000, 1000);
}


function draw() {
  background(233, 230, 252);
  
let i= width/2;
let j= height/2;
let t= color(114, 91, 143);
let t1= color (76, 50, 89);
let h= color(255, 206, 122);
let e= color(57, 57, 66);
noStroke();
  
  
  //Halo
  fill(h);
  ellipse(i, 100, 500,150);
  fill(233, 230, 252);
  ellipse(i, 100, 450, 100);
   
  
  //Base
  fill(t1)
  ellipse(i+100, j+300, 200, 230);
   ellipse(i-100, j+300, 200, 230);
  fill(t);
  ellipse(i,j, 600, 600) ;
  rect(i,j, -300, 300 );
  rect(i,j, 300, 300);
  ellipse(i+200,j-200, 300,80);
  ellipse(i-200,j-200, 300,80);
  fill(t);
  ellipse(i+200, j+300, 200, 300);
  ellipse(i, j+300, 200, 300);
  ellipse(i-200, j+300, 200, 300);


  
  //Mouth
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
    

  
  ///Eyes
  fill(e)
  rect(i-240,j+50, 150,40);
  rect(i+90,j+50, 150,40);
  
  //Blush
  fill(255, 143, 165);
  ellipse(i+180, j+140, 150, 50);
  ellipse(i-180, j+140, 150, 50);
  
}
  