bigCirc.js
class BigCirc {
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
  translate(width*-.005,height*-.005);
  scale(this.size);
  noStroke();
  fill(255);
  ellipse(random(255), random(255), width/8, height/8);
  pop();
  }
  
  move(){
    this.rot = this.rot +.01;
    if(this.rot >= count*1.3){
       this.rot = this.ypos +.1;
       } else{
         this.rot = -count * .9;
       }
    if(this.ypos <= height*1.3){
      this.ypos += this.speed;
       this.ypos = this.ypos + .1;
        } else {
          this.ypos = -height * 3.5;
        }
    this.ypos = this.ypos + 8;
  }

 }