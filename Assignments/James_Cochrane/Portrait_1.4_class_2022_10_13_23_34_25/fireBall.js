class fireBall {
  constructor(_xpos, _ypos, _size){
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.size = _size
  }
    
  display(){
  push();
  strokeWeight(0);
  fill(random(200,230), random(50, 150), random(0, 0))
  translate(this.xpos, this.ypos)
  scale(this.size);
  circle(width*.01, height*.01, this.size)
  pop();
  }
  
  move(){
    if(this.ypos <= height){
      
  
    this.ypos = this.ypos + 5; this.xpos = this.xpos + 1;
  } else {
    this.ypos = -height*.1; this.xpos = random(-200, 400)
  }
  
  
}
};


  
