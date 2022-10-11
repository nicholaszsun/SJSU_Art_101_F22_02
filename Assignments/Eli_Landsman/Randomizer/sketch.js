//Randomizer Project

//Array Setup
let response = [
  {name: "Just Do It",color: "red"},
  {name: "Cry.",color: "blue"},
  {name: "Why?", color: "black"},
  {name: "OOF!", color: "red"},
  {name: "Just Don't?", color: "black"},
  {name: "Wah Wah Wah", color: "white"},
 ]


 //Random Array Integer
let randomIndex;

let img;



function setup() {
  createCanvas(windowWidth, windowHeight);


  //Load Images
  img = loadImage('assets/puppydog.jpeg');

  //Main Type Config.
  textSize(35);
  fill(0, 102, 153);
}

function draw() {

fill(0, 102, 153);
 text("Don't Like Coding?", width/6, height/2.5);

//   Displays the image at its actual size at point (0,0)
// image(img, 0, 0);
// Displays the image at point (0, height/2) at half size
image(img, 0, height / 2, img.width / 2, img.height / 2);
}

function mousePressed() {
  background(random(200,255),random(200,255),random(200,255));
  randomIndex = int(random(response.length));
  //  console.log(response[randomIndex]. name);
  // console.log(response[randomIndex]. color);
    fill(response[randomIndex].color);
  text(response[randomIndex].name, width/6, height/2.2);


}