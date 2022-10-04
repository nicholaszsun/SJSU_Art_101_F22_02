function setup() {
    createCanvas(500, 500);
    
    background(224, 195, 199);
  }
  
  function draw() {
    
    noStroke()
    
    tufts()
    
    //left eye//
    fill(random(255),random(80),random(80));
    ellipse(width*.56,width*.35,width*.07);
    
    //head//
    fill(89, 67, 70);
    ellipse(width*.86,width*.5,width*.71);
    
    //chest//
    ellipse(width*.96,width*.85,width*1.15,)
    
    //right eye//
    fill(random(255),random(80),random(80));
    ellipse(width*.79,width*.37,width*.07);
  
    shine()
  
    //cheek//
    fill(110, 87, 87);
    ellipse(width*.9,width*.55,width*.28); 
    
    chest()
    
    beak()
    
    //nostril//
    noStroke()
    fill(89, 67, 70);
    ellipse(width*.56, width*.42,width*.04,width*.007);  
    
    fill(255)
    ellipse(mouseX,mouseY,width*.01)
  }
  
  function beak(){
    stroke(110, 87, 87);
    fill(31, 1, 5);
    triangle(width*.55,width*.4,width*.71,width*.45,width*.39,width*.43);
    triangle(width*.54,width*.48,width*.71,width*.45,width*.39,width*.43);
  }
  
  function body(posX,posY,size){
    ellipse(posX,posY,size)
  }
  
  function chest(){
    ellipse(width*.6,width*.85,width*.03,width*.14);
    ellipse(width*.5,width*.7,width*.03,width*.12);
    ellipse(width*.55,width*.65,width*.03,width*.12);
    ellipse(width*.65,width*.95,width*.03,width*.12);
  }
  
  function leftEye(){
    fill(random(255),random(80),random(80))
    frameRate(10);
    ellipse(width*.56,width*.35,width*.07);
  }
  
  function rightEye(){
    fill(random(255),random(80),random(80));
    ellipse(width*.79,width*.37,width*.07);
  }
  
  function shine(){
    fill(255, 255, 255);
    ellipse(width*.8,width*.36,width*.02, width*.02);
  }
  
  function tufts(){
    fill(89, 67, 70);
    ellipse(width*.85,width*.14,width*.03,width*.14);
    ellipse(width*.87,width*.16,width*.03,width*.14);
    ellipse(width*.83,width*.18,width*.03,width*.14);
  }
  
  