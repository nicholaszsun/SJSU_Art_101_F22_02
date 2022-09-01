function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    
    let i = width/2;
    let j = height/2;
    
    background(220);
    fill(16,16,16);
    circle(140,300,80);
    circle(85,300,80);
    circle(260,310,80);
    circle(300,310,80);
    fill(0,80,128);
    rect(135,340,120,120,20);
    square(90,330,70,20,15,10,5);
    square(227,330,70,20,35,5,15);
    
    fill(243,189,158);
    rect(160,290,70,80,20);
    
    fill(243,189,158);
    ellipse(i,j, 270,270)
    
    fill(119,16,29);
    arc(200, 260, 80, 80, 0, PI + QUARTER_PI, CHORD);
    fill(243,189,158);
    arc(130, 170, 60, 50, PI, TWO_PI);
    arc(270, 170, 60, 50, PI, TWO_PI);
    
    arc(130, 130, 60, 20, PI, TWO_PI);
    arc(270, 130, 60, 20, PI, TWO_PI);
    fill(49,24,11);
    ellipse(130, 170, 40, 45);
    ellipse (270, 170, 40, 45);
    
      let a = width/3.2
      let b = height/2.5
      let c = width/1.5
      let d = height/2.5
      fill(255);
      ellipse(a,b, 20,20);
      ellipse(c,d, 20,20)
    
    fill(218,170,127);
    triangle(180, 215, 203, 180, 221, 215); 
    
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