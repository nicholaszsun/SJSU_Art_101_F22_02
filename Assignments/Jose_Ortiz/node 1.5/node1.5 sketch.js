let count = 0;
let myMap = 0;


let tryOne;
let trytwo;

function setup() {
 
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  tryOne = new AlTri (2,2,.3);
  tryTwo = new AlTri (5,5,.2);
  
}

function draw() {
 
   if (count<360) {
       count++
     } else if (count==360){count=0};
  
  
  background(220);
  
  

  
 tryOne.display();
  tryTwo.display();

  
 }