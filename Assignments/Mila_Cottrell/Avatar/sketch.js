let mic;

function setup() { 
  createCanvas(400, 400);
  
  mic = new p5.AudioIn();
  mic.start(); 
}

function draw() {
  background('#D470E5');
  
  valOne = 180
  valTwo = 215
  valThree = 203
  valFour = 180
  valFive = 221
  valSix = 215
  
  littlehair();
  shirt();
  neck();
  head();
  mouth();
  eyelids();
  eyebrows();
  eyes();
  highlights();
  nose(valOne,valTwo,valThree,valFour,valFive,valSix);
  hair();
}

  function littlehair(){
    // little hair
    fill(16,16,16);
    circle(140,300,80);
    circle(85,300,80);
    circle(260,310,80);
    circle(300,310,80);
  }
  
  function shirt(){
    // shirt
    fill(random(255),random(255),random(255));
  rect(135,340,120,120,20);
  square(90,330,70,20,15, 5);
  square(227,330,70,20,35,15);
  }
  
  function neck(){
    // neck
    fill(243,189,158);
  rect(160,290,70,80,20);
  }
  
  function head(){
    // head
  fill(243,189,158);
  ellipse(width/2,height/2, 270,270)
  }
  
  function mouth(){
    // mouth
  fill(119,16,29);
  arc(200, 260, 80, 80, 0, PI + QUARTER_PI, CHORD);
  }
  
  function eyelids(){
    // eyelids
  fill(243,189,158);
  arc(130, 170, 60, 50, PI, TWO_PI);
  arc(270, 170, 60, 50, PI, TWO_PI);
  }
  
  function eyebrows(){
    // eyebrows
  fill(243,189,158);
  arc(130, 130, 60, 20, PI, TWO_PI);
  arc(270, 130, 60, 20, PI, TWO_PI);
  }
  
  function eyes(){
    // eyes
    fill(49,24,11);
    ellipse(130, 170, 40, 45);
    ellipse (270, 170, 40, 45);
  }
  
  function highlights(){
    // highlights
    fill(255);
    ellipse(width/3.2,height/2.5, mic.getLevel()*400);
    ellipse(width/1.5,height/2.5, mic.getLevel()*400)
  }
  
  function nose(xPos,yPos,x2Pos,y2Pos,x3Pos,y3Pos){
    // nose
  fill(218,170,127);
  triangle(xPos, yPos, x2Pos, y2Pos, x3Pos, y3Pos); 
  }
  
  function hair(){
    // hair
  fill(16,16,16);
  circle(90,100,80);
  circle(320,100,80);
  circle(130,80,80);
  circle(170,60,80);
  circle(220,50,80);
  circle(270,70,80);
  circle(50,150,80);
  circle(50,220,80);
  circle(60,280,80);
  circle(340,170,80);
  circle(340,235,80);
  circle(325,290,80);
  }