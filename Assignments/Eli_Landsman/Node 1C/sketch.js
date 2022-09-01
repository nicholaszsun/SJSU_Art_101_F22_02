function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    
    let i = width/2
    let j = height/2
    let t = ('rgba(164,229,164,100)')
    let g = width/2.666666666
    background(255);
    
    //shadow
    fill(133);
    noStroke();
    ellipse(width/2.2, height/1.15, width/1.333,height/13.33);
    
    stroke(0);
    //body
    fill(t);
    rect(width/2.6666, height/1.6, width/12.1212,height/4);
    
    //legs
    strokeWeight(4)
    rect(width/1.8475, height/1.6, width/12.1212,height/4);
    rect(g, g, width/4,height/3.07);
    
    //bodyshadow
    fill('rgba(142,204,142,100)');
    noStroke();
    rect(width/2.63, height/1.415, width/30.76,height/8.8888);
    rect(width/1.826, height/1.415, width/30.76,height/8.8888);
    
    //rfoot
    stroke(1);
    triangle(width/1.843, height/1.14, width/1.843, height/1.23, width/1.48, height/1.14);
    //lfoot
    triangle(g, height/1.14, g, height/1.23, i, height/1.14);
   
    //head
    fill(t);
    rect(width/3.04, height/20, width/2.75, height/3.07);
    
    //mouth
    fill(0);
    rect(width/2.2+5, height/4, width/12.1212, height/30.76);
    
    //tongue
    fill('rgba(255, 0, 50, 1)');
    noStroke();
    ellipse(i, height/3.63, width/14.33,height/30.769);
    
    //teeth
    fill(255);
    rect(width/2.01, height/4.08, width/30.7, height/80);
    
    //faceshadow
    noStroke()
    fill('rgba(142,204,142,100)')
    triangle(width/3.007, height/2.85, width/3.007, height/17.39, width/2.35, height/4.333);
    
    //eyes
    stroke(4);
    fill(0)
    ellipse(width/2.4242, height/5.33, width/17.39, height/17.39);
    ellipse(width/1.63, height/5.33, width/17.39, height/17.39);
    
    
    
    //highlights
    noStroke();
    fill(255)
    ellipse(width/2.312, height/5.882, width/30.76,height/30.76);
    ellipse(width/1.58, height/5.882, width/30.76,height/30.76);
    
    //bodyshadow
     fill('rgba(142,204,142,100)');
    rect(width/2.63, height/2.63, width/30.76,height/3.2);
    
    
    //shoulders
    stroke(1);
    fill(t);
    ellipse(width/2.89, height/2.222, width/13.33, height/4.444);
    ellipse(width/1.538, height/2.22, width/13.33, height/4.44);
   
    
    //shadow
    noStroke();
    fill('rgba(142,204,142,100)');
    ellipse(width/2.96, height/2.22, width/20, height/5.714);
    
    //hands
    stroke(1);
    fill(t);
    ellipse(width/1.538, height/1.739, width/13.33, height/13.33);
    ellipse(width/2.95, height/1.739, width/13.33, height/13.33);
    
    //chin
    stroke(1);
    noFill();
    arc(width/2, height/3.1, width/5.7, height/10, 0, HALF_PI, PI);
  
  }
  