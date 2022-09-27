darkTri.js
class DarkTri {
  constructor(_xpos,_ypos,_rot,_size, _speed,_fill){
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.rot = _rot;
    this.size = _size;
    this.speed = _speed;
    this.fill = _fill
    }

   display(){
  push();
     
  translate(this.xpos, this.ypos);
  rotate(count-this.rot);
  translate(width*-.5,height*-.5);;
  scale(this.size);
  noStroke();
  fill(255, 0, 255);
  beginShape();
  vertex(width*.4, height*.2);
  vertex(width*.8, height*.7);
  vertex(width*.2, height*.8);
    ellipse(width*.5,height*.5,10)
  endShape(CLOSE);
    pop();
  }
  
  move(){
    // this.rot = this.rot +.01;
    // if(this.rot >= count*1.3){
    //    this.rot = this.ypos +.1;
    //    } else{
    //      this.rot = -count * .9;
    //    }
    if(this.ypos <= height*1.5){
      this.ypos += this.speed;
       this.ypos = this.ypos + .1;
        } else {
          this.ypos = -height * .9;
        }
    this.ypos = this.ypos + 8;
  }

 }