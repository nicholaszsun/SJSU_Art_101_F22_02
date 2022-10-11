let mic; 
var on = false;


function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
 
}


function draw() {
  if (on) {
    background(183,161,109);
  } else{
  background(202,143,150);
  }
  head();
  body();
  eye();
  flower();
  
  // redflower();
 
}

 

function mousePressed(){
   if(on){
     on = false;
   } else {
     on = true;
   }
    
  }



  function body(){
    
    noStroke();
   fill(255,255,255)
    
    //right body
  arc(width*.5,width*.675,width*.5, width*.5, radians(270), radians (360) )
    //left body
  circle(width*.45,width*.55,width*.25);
  ellipse(width*.6,width*.675,width*.3,width*.1375);
    //top leg
  rect(width*.2625,width*.575,width*.2,width*.075,width*.125);
    //bottom leg
  rect(width*.3375,width*.65,width*.2,width*.075,width*.125);
    //tail
    circle(width*.775, width*.65, width*.075);
    var vol= mic.getLevel(); 
    ellipse(width*.775,width*.65,vol*600,vol*600);
    console.log(vol);
  
}
  


  function head(){
    
  noStroke();
  fill(255,255,255)
  
    //head
  circle(width*.45,width*.425,width*.225);
    //top ear
  ellipse(width*.55,width*.3375,width*.25,width*.075);
    //bottom ear
  ellipse(width*.6,width*.4,width*.25,width*.075);
  
  } 


  function eye(){
    //eye
  fill(203,62,62);
  circle(width*.4125,width*.425,width*.0375);
    
  }


  function flower(){
    
  //bigflower
    push();
    beginShape();
  fill(203,62,62);
  circle(90, 70, 45);
  circle(60, 100, 45);
  circle(120, 100, 45);
  circle(90, 130, 45);
  fill(255);
  circle(90, 100, 30);
  endShape();
    pop();
    
  //smallflower
    beginShape();
  fill(203,62,62);
  circle(330, 285, 20);
  circle(315, 300, 20);
  circle(345, 300, 20);
  circle(330, 315, 20);
  fill(255);
  circle(330, 300, 20);
  endShape();

 }

  

//   function redflower(){
   
//     beginShape();
//     vertex(width*.3,height*.2);
//     vertex(width*.35,height*.3);
//     vertex(width*.25,height*.3);
//     endShape(CLOSE);

    
//     beginShape();
//     vertex(width*.3,height*.2);
//     vertex(width*.2,height*.15);
//     vertex(width*.2,height*.25);
//     endShape(CLOSE);
    
//      beginShape();
//     vertex(width*.35,height*.1);
//     vertex(width*.25,height*.1);
//     vertex(width*.3,height*.2);
//     endShape(CLOSE);
    
//     beginShape();
//     vertex(width*.3,height*.2);
//     vertex(width*.4,height*.15);
//     vertex(width*.4,height*.25);
//     endShape(CLOSE);
    
//     beginShape();
//     fill(255);
//     circle(width*.3,width*.2,width*.05);
//     endShape(CLOSE);
    
    
//   }
  