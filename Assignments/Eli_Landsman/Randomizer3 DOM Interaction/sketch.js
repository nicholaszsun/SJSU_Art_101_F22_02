//Eli Landsman's Randomizer Project

  let randomIndex;
  let animating = false;
  let j;
  let i;
  let counter = 0
  let imageCounter = 0
  let img;
  let pics = [];
  let button;
let response = [
  {name: "Keep on Keepin' On", color: "blue"},
  {name: "Will You Get Any Better", color: "black"},
  {name: "There's No Hope", color: "black"},
  {name: "Do It",color: "red"},
  {name: "Why?", color: "black"},
  {name: "Just Don't?", color: "black"},
  {name: "Cry.",color: "blue"},
  {name: "OOF", color: "red"},
  {name: "Wah Wah Wah", color: "white"},
  {name: "Just Git Good", color: "black"},
 
 ]

 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50, 100, 200);
  textSize(36);
  textFont('Avenir');
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);
  frameRate(8);
  text("Click the Button to Get Random", windowWidth/2, windowHeight/4.5);
  setTimeout(changeBackground, 2000);
  button = createButton("Click to Get Random");
  button.mousePressed(buttonPressed);
  button.style("padding", "20px");
  button.style("background-color", "#86c4cc");

}

function preload(){
  for (let i = 0; i <= 7; i++){
  pics[i] = loadImage('assets/response_'+i+'.jpg');
  }
}

function draw(){
  text("So... You Suck at Coding", windowWidth/2, windowHeight/3.5);



 if (animating == true){
  clear();
  image(pics[imageCounter], windowWidth/3.5, windowHeight/2.5);

  if (imageCounter < pics.length - 1){
    imageCounter++;
  }
  else{
    imageCounter = 0;
  }
  console.log(imageCounter);
}
 }



function randomizer(){

  animating = false;
    if(response[0]){
      // background(random(200,255),random(200,255),random(200,255));
      clear();
      randomIndex = int(random(response.length));
      fill(response[randomIndex].color);
      text(response[randomIndex].name, windowWidth/2, windowHeight/2.65);
      image(pics[randomIndex], windowWidth/3.5, windowHeight/2.5);
      response.splice(randomIndex, 1);
    }
      else {
        background(0);
        fill(255);
        text("You've Hit the End of the Road", width/2, height/3);
   }
}

function changeBackground(){
    if (counter <=4){
    counter++;
    background(random(200,255),random(200,255),random(200,255));
    setTimeout(changeBackground, 1000);
  }
  else{

  } 
}

function buttonPressed(){
  animating = true;
  setTimeout(randomizer, 1000);
}


