function setup() {
    createCanvas(400, 400);
  }
  
  function draw() { //face
    background(240, 234, 218);
  }
  
  function draw() { //face
    background(240, 234, 218);
  //body//
    
  fill(90);
    rect(160, 330, 80, 35,10); //right thigh
    rect(195, 290, 80, 55,10); //bottom
  fill(250);
  fill(123, 160, 171);
    push();
  translate(width / 2, height / 2);
  rotate(PI / 2.75);
  rect(5, -35, 100, 75,5);
    pop(); //higher body half
    push();
  translate(width / 2, height / 2);
  rotate(PI / 5);
  rect(90, -20, 20, 80,10);
    pop(); //left higher arm
    
   push();
  translate(width / 2, height / 2);
  rotate(PI / 5);
  rect(-10, 20, 20, 80,10);
    pop(); //right arm
    
    push();
  translate(width / 2, height / 2);
  rotate(PI / 1.4);
  rect(-25, -110, 20, 80,10);
    pop(); //left higher arm
    
    push();
  translate(width / 2, height / 2);
  rotate(PI / 1.7);
  rect(80, 30, 20, 80,10);
    pop(); //right arm
  fill(250);
  fill(90);
    push();
  translate(width / 2, height / 2);
  rotate(PI / 7);
  rect(100, 100, 30, 80,10);
    pop(); //left leg
    push();
  translate(width / 2, height / 2);
  rotate(PI / 1.2);
  rect(85, -180, 25, 80,10);
    pop(); //right leg
  fill(250);
  fill (240, 229, 199);
    rect(195, 170, 30, 55);
  fill (250); //neck
  fill (240, 229, 199);
    ellipse(75, 250, 25, 30); //right hand
    ellipse(250, 290, 25, 30); //left hand
  fill (250);
  //face down here
  fill (36, 25, 10, 240);
    triangle (270, 210, 260, 95, 135, 154);
    quad(280, 190, 240, 210, 300, 190, 170, 120);
    quad(190, 90, 120, 140, 175, 200, 250, 200);
    quad(150, 170, 95, 200, 175, 100, 170, 220);
  fill (250);
  fill (240, 229, 199);
    rect(160, 90, 100, 120, 80, 50, 50, 50);
  fill (250);
    ellipse(180, 140, 35, 15);
    ellipse(230, 140, 35, 15);
  fill (36, 25, 10);
    circle (180, 139, 10); //right eye 
    circle (230, 139, 10); //left eye
  fill (250);
  fill(143, 67, 67);
    ellipse(205, 170, 40, 5); //mouth
  fill(250);
    
  fill (36, 25, 10, 240);  
    triangle (280, 140, 170, 100, 210, 90);
    triangle (140, 150, 260, 95, 220, 90);
    quad(138, 131, 216, 90, 169, 163, 130, 176);
    quad(150, 190, 190, 90, 140, 120, 170, 120);
    quad(300, 170, 280, 190, 250, 180, 230, 90);
  fill (250);
    //triangle (160, 200, 180, 80, 86, 75);
  }