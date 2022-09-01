function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(220, 227, 223);
    
    // ears
     fill(185, 122, 109);
    noStroke();
    ellipse(width*.30, width*.25, width*.20, width*.20);
    ellipse(width*.70, width*.25, width*.20, width*.20);
   
    
    // ear deets
     fill(224, 148, 125);
    noStroke();
    ellipse(width*.30, width*.25, width*.15, width*.15);
    ellipse(width*.70, width*.25, width*.15, width*.15);
    
    // head 
    noStroke();
    fill(185, 122, 109);
    circle(width*.50,width*.40,width*.50);
    
    // muzzley
     fill(224, 148, 125);
    noStroke();
      ellipse(width*.50, width*.55, width*.18, width*.15);
    
    // connection
     fill(0)
    noStroke();
      rect(width*.49, width*.5, width*.02, width*.02);
    
    
    // mouth
    fill(0)
    noStroke();
    ///// left
    push();
    rotate(radians(28));
    rect(width*.686, width*.219, width*.05, width*.02, width*.025);
    pop();
    ///// right
    push();
    rotate(radians(-28));
    rect(width*.148, width*.69, width*.05, width*.02, width*.025);
    pop();
   
    
    //nosey
    noStroke();
    fill(82, 43, 35);
    ellipse(width*.50, width*.49, width*.05, width*.03);
    
    // ojitos
    noStroke();
    fill(0, 0, 0)  
    rect(width*.35, width*.40, width*.075, width*.115, width*.025);
    rect(width*.58, width*.40, width*.075, width*.115, width*.025);
    
    // ojito deets
    noStroke();
    fill(255, 255, 255);
    rect(width*.355, width*.40, width*.065, width*.065, width*.025);
    rect(width*.585, width*.40, width*.065, width*.065, width*.025);
    
    // eyebrows
    noStroke();
    fill(82, 43, 35);
    // left
    push();
    rotate(radians(5));
    rect(width*.40, width*.315, width*.1, width*.04, width*.025);
    pop();
    // right
    push();
    rotate(radians(-5));
     rect(width*.50, width*.40, width*.10, width*.04, width*.025);
    pop();
   
     // petals 1
    noStroke();
    fill(255);
    ellipse(width*.62, width*.249, width*.05, width*.05);
    ellipse(width*.64, width*.235, width*.05, width*.05);
    ellipse(width*.632, width*.215, width*.05, width*.05);
    ellipse(width*.61, width*.215, width*.05, width*.05);
    ellipse(width*.60, width*.235, width*.05, width*.05);
    
    // daisy 1
    noStroke();
    fill(250, 203, 101);
    ellipse(width*.62, width*.23, width*.030, width*.030);
  
    
    // petals 2
    noStroke();
    fill(255);
    ellipse(width*.70, width*.299, width*.035, width*.035);
    ellipse(width*.72, width*.285, width*.035, width*.035);
    ellipse(width*.713, width*.265, width*.035, width*.035);
    ellipse(width*.69, width*.265, width*.035, width*.035);
    ellipse(width*.68, width*.285, width*.035, width*.035);
    
    // daisy 2
    noStroke();
    fill(250, 203, 101);
    ellipse(width*.70, width*.28, width*.025, width*.025);
    
    
    
  }