//Randomizer Project

//Array Setup
let response = [
  {name: "Just Do It",color: "red", img: "1"},
  {name: "Cry.",color: "blue"},
  {name: "Why?", color: "black"},
  {name: "OOF!", color: "red"},
  {name: "Just Don't?", color: "black"},
  {name: "Wah Wah Wah", color: "white"},
  {name: "Just Git Good", color: "black"},
  {name: "There's No Hope", color: "black"},
  {name: "Will You Get Any Better", color: "black"},
 ]
let animating = false;
let counter = 0
let img;
 //Random Array Integer
let randomIndex;



function setup() {
  createCanvas(windowWidth, windowHeight);

//Load Images
  loadImage('assets/puppydog.jpeg'),

  //Main Type Config.
  textSize(35);
  fill(0, 102, 153);
text("Click to Get Random", width/6, height/4);

setTimeout(changeBackground, 2000);

}

function draw() {
if (animating == true){
  ellipse(random(width), random(height), random(50,200))
}
fill(0, 102, 153);
 text("So... You Suck at Coding", width/6, height/3.5);

}


function randomizer(){
  animating = false;
  
    if(response[0]){
      background(random(200,255),random(200,255),random(200,255));
      randomIndex = int(random(response.length));
      fill(response[randomIndex].color);
      text(response[randomIndex].name, width/6, height/3);
      response.splice(randomIndex, 1);
      }
    
      else {
        background(0);
        fill(255);
        text("You've Hit the End of the Road", width/6, height/3);
      }
}
function changeBackground(){
    if (counter <=5){
    counter++;

    background(random(200,255),random(200,255),random(200,255));
    setTimeout(changeBackground, 2000);
  }
  else{

} 
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}