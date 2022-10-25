let things = [{
  adjective: "Big",
  color: "Red"
}, {
  adjective: "Big",
  color: "Orange"
},{
  adjective: "Big",
  color: "Yellow"
},{
  adjective: "Big",
  color: "Green"
},{
  adjective: "Big",
  color: "Blue"
},{
  adjective: "Big",
  color: "Indigo"
},{
  adjective: "Big",
  color: "Violet"
},{
  adjective: "Fast",
  color: "Red"
}, {
  adjective: "Fast",
  color: "Orange"
},{
  adjective: "Fast",
  color: "Yellow"
},{
  adjective: "Fast",
  color: "Green"
},{
  adjective: "Fast",
  color: "Blue"
},{
  adjective: "Fast",
  color: "Indigo"
},{
  adjective: "Fast",
  color: "Violet"
},  {adjective: "Tiny",
  color: "Red"
}, {
  adjective: "Tiny",
  color: "Orange"
},{
  adjective: "Tiny",
  color: "Yellow"
},{
  adjective: "Tiny",
  color: "Green"
},{
  adjective: "Tiny",
  color: "Blue"
},{
  adjective: "Tiny",
  color: "Indigo"
},{
  adjective: "Tiny",
  color: "Violet"
},{  adjective: "Muscular",
  color: "Red"
}, {
  adjective: "Muscular",
  color: "Orange"
},{
  adjective: "Muscular",
  color: "Yellow"
},{
  adjective: "Muscular",
  color: "Green"
},{
  adjective: "Muscular",
  color: "Blue"
},{
  adjective: "Muscular",
  color: "Indigo"
},{
  adjective: "Muscular",
  color: "Violet"
},];



let randomIndex;
let animating = false;
let animal = [];
let imageCounter = 0;
let button;

function preload() {
  for (let i = 0; i <= 5; i++) {
    animal[i] = loadImage(`Assets/animal${i}.jpg`)
  }
}

function setup() {
  createCanvas(1000, 1000);
  background(200);
  textSize(24);
  textAlign(CENTER);
  imageMode(CENTER);
  frameRate(12);

  text("What should I create?", 300,280);


button = createButton("click to randomize");
button.mousePressed(buttonPressed);
}


function draw() {

  if (animating == true) {
    clear();
    image(animal[imageCounter], width / 2, height / 2);

    if (imageCounter < animal.length-1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }

}

function randomizer() {
  animating = false;
  if (things[0]) {
    // background(random(200, 255));
    clear();
    randomIndex = int(random(things.length));
    image(random(animal), width / 2, height / 2);
      text(`${things[randomIndex].adjective}
    ${things[randomIndex].color}`, width/2, height - 60);
    // text(things[randomIndex].adjective + "'s favortute color is " + things[randomIndex]color, 50, 50);
    things.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
