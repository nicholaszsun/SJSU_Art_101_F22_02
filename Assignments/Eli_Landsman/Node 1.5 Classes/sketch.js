let count = 0;
let myMap = 0;

let triRot = 45
let circleChange = false

let tri = []
let cry = []
let circ = []


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
   for(let i = 0; i <= 8; i++){
  circ[i] = new         BigCirc(random(height),random(width),0,random(10/10),random(1,5)/10);
   }
  
  for(let i = 0; i <= 20; i++){
  tri[i] = new         BigTri(random(height),random(width),random(360),random(5/10),random(1,20)/10);
 }
  
  for(let i = 0; i <= 15; i++){
  cry[i] = new DarkTri(random(height),random(width),random(360),random(5, 10/10),random(1,20)/10);
 }

  //(_xpos,_ypos,_rot,_size, _speed)
// tri[0] = new BigTri(width*.2,height*.2,count+.5,.7,random(10))
// tri[1] = new BigTri(width * .5, height * .35, count, 1.75, .5)
// tri[2] = new BigTri(width * .8, height * 1.3, count, 1.75,.5)
// tri[3] = new BigTri(width * .6, height * .8, count, 1.75, .5)
  
}

function draw(){
  if (count<360)(
    count++)
  else if (count=360)(count=0);
   background(220);
  
  //sets up i to count up to 3 over and over
  //for(let i = 0; i <= 20; i++)
  
   for(let i = 0; i <= 15; i++){
  cry[i].display();
  cry[i].move();
  }
  for(let i = 0; i <= 20; i++){
  tri[i].display();
  tri[i].move();
  }
   for(let i = 0; i <= 8; i++){
  circ[i].display();
  circ[i].move();
  }


   }