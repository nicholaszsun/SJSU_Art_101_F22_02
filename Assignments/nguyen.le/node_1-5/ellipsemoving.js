class Ellipsemoving{
  constructor (_xPos,_yPos, _goLeft){
    this.x = _xPos;
    this.y = _yPos;
    this.goLeft = _goLeft
  }

display(){
 line(this.x-60,this.y+5,this.x+30,this.y-7);
  fill('green');
  stroke(20);
  ellipse(this.x,this.y,60,60);
  fill('white');
  ellipse (this.x+30,this.y-5,60,60);
  fill('pink');
  ellipse (this.x+60,this.y-10,60,60);
  fill('green');
  ellipse(this.x+90,this.y-15,60,60);
  fill('white');
  ellipse (this.x+120,this.y-20,60,60);
  fill('pink');
  ellipse(this.x+150,this.y-25,60,60);
  }  
  move(){
 if (this.goLeft == false){
   this.x = this.x + random(-1, 1.5);
  this.y = this.y - 2;
   }
  if (this.y < 0) {
    this.y = height;
    }
  }
}
  