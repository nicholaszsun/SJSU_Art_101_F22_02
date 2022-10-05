let x, y;

function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  background(1, 700, 400);
  
  // Draw a circle
  stroke(500);
  fill(100,50,90);
  ellipse(x, y, 90, 24);
   ellipse(x, y, 80, 84);
     ellipse(340, y, 15, 20);
       ellipse(340, y, 15, 20);
    ellipse(380, y, 15, 20);
    ellipse(340, y, 25, 4);
      ellipse(340, y, 25, 4);
    ellipse(380, y, 25, 4);
