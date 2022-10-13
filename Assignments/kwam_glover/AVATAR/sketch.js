let x, y;

function setup() {
  createCanvas(4200, 1000);
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  background(1, 700, 400);
  
  // Draw a circle
  stroke(5000);
  fill(100,50,90);
  ellipse(350, y, 100, 34);
     ellipse(340, y, 15, 20);
       ellipse(340, y, 15, 20);
    ellipse(380, y, 15, 20);
    ellipse(340, y, 25, 4);
      ellipse(340, y, 25, 4);
    ellipse(380, y, 25, 4);




  
  // Jiggling randomly on the horizontal axis
  x = x + random(0.0009, 0);
  // Moving up at a constant speed
  y = y - 11.7;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}