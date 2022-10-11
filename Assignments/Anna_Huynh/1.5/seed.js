class SeedPod {
    constructor(_xpos,_ypos,_rot){
      this.xpos = _xpos;
      this.ypos = _ypos;
      this.rot = _rot;
      
    }
    
    display(){
      push();
      translate(this.xpos, this.ypos);
      rotate(count/10*this.rot);
      fill(133, 122, 86);
      ellipse(100, 100, width*.04, width*.12);
      fill(48, 43, 35);
      ellipse(100, 100, width*.03, width*.12);
      fill(133, 122, 86);
      ellipse(100, 100, width*.01, width*.12);
      pop();
    }
    
    move(){
      if (this.ypos <= height*1.1){
        this.ypos = this.ypos+4;
      } else {
        this.ypos = -height
      }
    }
  };
  
  
  
  