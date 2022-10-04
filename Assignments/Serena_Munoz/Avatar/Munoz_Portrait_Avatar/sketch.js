let mic;
let y = 0;
let x=0;
let count = 0;
let myMap=0;
let hight=0;

function setup() {
 background(0);
 let cnv = createCanvas(400, 400);
cnv.mousePressed(userStartAudio);
mic = new p5.AudioIn();
  mic.start();
}
function draw() {
 background(0);
 light();
 hair();
 face();
 eyes();
 eyebrows();
 lips();
  

}
function hair(){
  push();
  //Hair 
  fill(144, 82, 163);
    ellipse(36,386, 110, 155);
      ellipse(86,150, 110, 155);
      ellipse(50,260, 110, 155);
    ellipse(216,106, 200, 155);
    ellipse(286,170, 200, 155);
    ellipse(340,286, 110, 155);

rect(20, 70, 350, 590, 200);
  pop();
  
}
function face(){
  fill(216, 145, 108);

rect(50,100, 290, 370, 300);
}
function eyes(){
  //eye1
        fill(213, 137, 11);
   ellipse(130,270,56,40);

 //eye2
      
   fill(213, 137, 11 );
  ellipse(275,259,56,40);
 
    }
function eyebrows(){
    // eyebrow
    beginShape();
    fill(179, 50, 74 );
  translate(width/1.5,height/1.8);
  vertex(-70,0);
  bezierVertex(-mouseX,-30,20,-mouseX,80,0);
  bezierVertex(-30,-50,-30,-100,-80,0)
     bezierVertex(30,50,30,100,80,0)

  endShape();
  // eyebrow
  beginShape();
     translate(width/-2.9,height/25);

  vertex(-70,0);
   bezierVertex(-mouseX,-30,20,-mouseX,80,0);
  bezierVertex(-30,-50,-30,-100,-80,0)
   bezierVertex(30,50,30,100,80,0)
  
  endShape();  
}
function lips(){
  translate(10,0);

arc(90, 130, 70, 80, 0.2, PI * QUARTER_PI, PIE);
   
}
function light(){

    fill(random(0, 255),(0, 0), (0, 255) );
  micLevel = mic.getLevel();
  let  = height - micLevel * height;
  let x = hight + micLevel * height;
   noStroke();
   ellipse(100,260/width, x, 200);
   ellipse(260,260/width, x, 700);
   ellipse(360,260/width, x, 700);
     ellipse(180,260/width, x, 700);

   ellipse(5,260/width, x, 500);

}