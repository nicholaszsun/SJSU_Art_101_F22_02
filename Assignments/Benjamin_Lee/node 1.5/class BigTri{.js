class BigTri{
  constructor(_xpos,_ypos,_rot,_size){
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.rot = _rot;
    this.size = _size; 
   }
display(){
  push();
  translate(this.xpos, this.ypos);
  scale (this.size);
  rotate(count*this.rot);
  translate(width*-.5,height*-.5);
  fill(225,100,100, 200);
  beginShape();
  vertex(width*.4,height*.2);
  vertex(width*.8,height*.7);
  vertex(width*.2,height*.8);
  vertex(width*.5,height*.5,10);
  endShape(CLOSE);
  pop();
}
  
  move(){
    if(this.ypos <= height*1.3){
    this.ypos = this.ypos + 3;
  } else{
    this.ypos = -height*.5;
  }
  
  }
}

