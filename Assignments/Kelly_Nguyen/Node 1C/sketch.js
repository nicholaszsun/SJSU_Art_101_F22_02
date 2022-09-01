function setup() {
    createCanvas(400, 400);
     background(220);
    
    //body
    fill(255,255,255);
    strokeWeight(4);
    rect (width*.16,height*.3,width *.7,height*.5);
    
    //ear left
    rect(width*.5,height*.12,width*.16,height*.3)
    beginShape()
    vertex(width*.5,height*.12)
    vertex(width*.58,height*.01)
    vertex(width*.66,height*.12)
    endShape();
  
    
      //ear right
  rect(width*.58,height*.12,width*.16,height*.3)
    beginShape()
    vertex(width*.58,height*.12)
    vertex(width*.66,height*.01)
    vertex(width*.74,height*.12)
    endShape();
  
  
    //Left eye (giant)
    strokeWeight(4)
    circle(width*.6,width*.555,width*.2)
      fill(0,0,0)
    circle(width*.645,width*.635,width*.053)
    
    //right eye (small)
    strokeWeight(4)
    fill(255,255,255)
    circle (width*.78,width*.525,width*.125)
      fill(0,0,0)
    circle(width*.80,width*.515,width*.05);
    
    //nose
  fill (247,25,0)
    stroke(247,25,0)
    circle(width*.777,width*.666,width*.102)
    
    //legs right to left
    /strokeWeight(4)
    fill(255,255,255)
    stroke(0,0,0)
    //leg 1 (very right)
    rect(width*.8,height*.8,width*.06,height*.09)
    //leg 2(left to most right)
     rect(width*.635,height*.8,width*.06,height*.09)
      //leg 3(leg left of leg 2)
     rect(width*.50,height*.8,width*.06,height*.09)
    //leg 4 (leg right of most left leg)
    rect(width*.3,height*.8,width*.06,height*.09)
    //leg 5 (leg at end of left)
     rect(width*.16,height*.8,width*.06,height*.09)
    
    //tail
    rect(width*.076,height*.735,width*.0805,height*.065)
  }
  
  function draw() {
   
  }