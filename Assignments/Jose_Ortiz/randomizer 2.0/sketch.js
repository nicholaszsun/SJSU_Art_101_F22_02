let bubbles = [];
let assets = [];

function preload() {
 
  for (let i = 0; i < 7 ; i++){  
  assets[i]= loadImage('assets/asset'+i+'.jpg');
  } 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    let x = random(windowWidth);
    let y = random (windowHeight);
    let r = random (250,150);
   // let okay = random (assets);
    let b = new Bubble (x,y,r);
    bubbles.push(b);
  }  
}

function mousePressed () {
  
  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].clicked( mouseX, mouseY);   
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();
  }
}
  class Bubble {
    constructor (x,y,r,img){
      this.x = x;
      this.y = y;
      this.r = r;
      this.asset = random(assets);
      
    }
    clicked(px,py){
     // let d = dist (px,py,this.x,this.y)
      //if (d < this.r){
      if 
        (px > this.x &&
         px < this.x + this.r &&
         py > this.y &&
         py < this.y + this.r) {
        this.asset = random (assets);
            
      }
    }
    move() {
      this.x = this.x + random (-2,2);
      this.y = this.y + random (-2,2);
    }
    show () {
      image(this.asset,this.x,this.y,this.r,this.r);
    }
  }