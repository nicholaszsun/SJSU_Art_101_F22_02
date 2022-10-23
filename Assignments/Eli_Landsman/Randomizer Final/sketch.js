//Eli Landsman's Randomizer Project

  let cnv;
  let randomIndex;
  let animating = false;
  let j;
  let i;
  let counter = 0
  let imageCounter = 0
  let img;
  let pics = [];
  let startRandomizerbutton;
let response = [
  "Keep on Keepin On",
   "Why?",
   "Is there any hope?",
   "Just Do It",
   "Don't",
   "OOF",
   "GIT GUD",
   "How bout you just cry about it"
];

function preload(){
  for (let i = 0; i <= 7; i++){
  pics[i] = loadImage('assets/response_'+i+'.jpg');
  img = loadImage('assets/end.jpg');
  }
}
 

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("#canvasDiv")
  background(50, 100, 200);
  textSize(36);
  textFont('Avenir');
  textAlign(screenLeft );
  textStyle(BOLD);
  fill(255);
  frameRate(8);
  text("Click the Button to Get Random", 300, windowHeight/4.5);
  setTimeout(changeBackground, 1000);

  startRandomizerbutton = select('#randButton')
  startRandomizerbutton.mousePressed(buttonPressed);
}

function draw(){
  text("So... You Suck at Coding", 300, windowHeight/3.5);
 if (animating == true){
  clear();
  image(pics[imageCounter], windowWidth/3.5, windowHeight/2.5);

  if (imageCounter < pics.length - 1){
    imageCounter++;
  }
  else{
    imageCounter = 0;
  }
}
 }


function randomizer(){
  animating = false;
    if(response[0]){
      // background(random(200,255),random(200,255),random(200,255));
      clear();
      randomIndex = int(random(response.length));
      text(response[randomIndex], 300, windowHeight/2.65);
      image(pics[randomIndex], windowWidth/3.5, windowHeight/2.5);
      response.splice(randomIndex, 1);
    }
      else {
        background(0);
        fill(255);
        image(img, windowWidth/3.5, windowHeight/2.5);
        text("You've Hit the End of the Road", width/2, height/2.8 );
   }
}

function changeBackground(){
    if (counter <=4){
    counter++;
    background(random(200,255),random(200,255),random(200,255));
    setTimeout(changeBackground, 300);
  }
  else{

  } 
}

function buttonPressed(){
animating = true;
setTimeout(randomizer, 2000);
}

