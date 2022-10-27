let owls =[{
  name: "Anne"
},{
  name: "Molly"
},{
  name: "Willow"
},{
  name: "Hooty"   
},{
  name: "Tulip"   
},{
  name: "Belle"   
}];

let randomIndex;
let animating = false;
let animals = [];
let imageCounter = 0;
let button;

function preload() {

  for (let i = 0; i <= 8; i++){
    animals[i] = loadImage('assets/animal_'+i+'.jpg');
  }
}

function setup() {
  createCanvas(800, 800);
  background(100, 214, 99);
  textSize(36);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  fill(0);
  imageMode(CENTER);
  frameRate(12);
 
  text("click to randomize", width/2, height/2);

  button = createButton("click to randomize");
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");
}

function draw() {
  
  if (animating == true){ 
    clear();
    image(animals[imageCounter], width/2, height/2);

    if (imageCounter < animals.length -1){
    imageCounter++;
    console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
    
  }
}

function randomizer() {
  animating = false;

  if (owls[0]) {
      // this displays random name and splices it out of array
  // background(random(200, 255));
  clear();
  randomIndex = int(random(owls.length));
  
  image(random(animals), width/2, height/2);
  text(owls[randomIndex].name, width/2, height - 100);
  // text(owls[randomIndex].name + "'s favorite color is" + owls[randomIndex].color, 50, 50);
  owls.splice(randomIndex, 1);
  } else {
  background(random(200, 255));
  
  text("You have your owl family!", 300, 100);
}
}

function buttonPressed() {
    animating = true;
    setTimeout(randomizer, 2000);
}