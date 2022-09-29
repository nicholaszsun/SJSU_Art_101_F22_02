
class Ovals{
  constructor(_xpos,_ypos,_rot,_size, _speed){
    this.xpos = _xpos
    this.ypos = _ypos
    this.size = _size
    this.speed = _speed;
  }
 
  display(){
    push();
  translate(this.xpos, this.ypos);
  translate(width*-.5,height*-.5);
  scale(this.size);
  strokeWeight(3);
  stroke(255);
    //blue
  fill(150, 200, 255);
  ellipse(width/6, height/6, width/18, height/18);
    //white
  fill(255);
  ellipse(width/6, random(), 3, height/10);
    pop();
  }

 
  move(){
    if(this.ypos <= height*1.1){
      this.ypos += this.speed;
       this.ypos = this.ypos + .1;
        } else {
          this.ypos = -height * .9;
        }
    this.ypos = this.ypos + .1;
  
  }
  
}