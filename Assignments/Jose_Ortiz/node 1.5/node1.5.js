class AlTri{
    contructor(_xpos,_ypos_rot){
      this.xpos = _xpos;
      this.ypos = _ypos;
      this.rot = _rot;
      
    }
    display(){
      
     push();
      translate(width/this.xpos,height/this.ypos)
      rotate(count*this.rot)
      translate(width*-.5,height*-.5)
    fill(237,151,46);
    beginShape();
    vertex(width*.9,height*.3);
    vertex(width*.9,height*.2);
    vertex(width*.8,height*.1);
    ellipse(width*.5,height*.5,10);
    endShape(CLOSE);
    pop();
  }
    
  } ;