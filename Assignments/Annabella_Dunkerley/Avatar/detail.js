class detail {
  constructor(_xpos,_ypos,_rot){
    this.xpos = _xpos
    this.ypos = _ypos
    this.rot = _rot
  }
  
  display(){
        if (frameCount % 90 == 0) {
      // bgColor = color(random (225), random(225), random(225));
      circleColor =
    color(random(225), random(225), random(225))
    }
    fill(circleColor)  
    noStroke()  
  
    ellipse(100,185, 10, 10);
    ellipse(120,203, 15, 15);
    ellipse(150,203, 10, 10);

    ellipse(249,203, 10, 10);
    ellipse(280,203, 15, 15);
    ellipse(300,185, 10, 10);

     translate(this.xpos,this.ypos);
  translate(width*-.140,height*-.110); 
    
    ellipse(300,100, 10, 10);  
    ellipse(280,90, 15, 15);  
    ellipse(249,100, 10, 10);

    ellipse(100,100, 10, 10);
    ellipse(120,90, 15, 15);
    ellipse(150,100, 10, 10); 

    
    
    
    
  //   translate(this.xpos,this.ypos);
  // translate(width*-.140,height*-.110); 
    ellipse(200,75, 20, 50)
    rotate(PI / 3.0);  
    ellipse(185,-140, 20, 50)

    rotate(PI / 3.0);  
    ellipse(-13,-205, 20, 45) 
    
  }  
  
  move(){
    if(this.ypos <= height *.12){
       this.ypos = this.ypos + .30;
       } else { 
         this.ypos = height*.10;
       }
  }
}
