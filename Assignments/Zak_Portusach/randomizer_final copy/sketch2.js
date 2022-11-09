// let drinks = [{name: " Coffee ", cup: " mug "},
//               {name: " Soda ", cup:" can "}, 
//               {name: " Water ", cup: " bottle "},
//               {name: " Milk ", cup: " glass "},
//               {name: " Kombucha ", cup: " growler "},
//               {name: " Peepee ", cup: " bladder "}];

let randomIndex;
let animating = false;
let img = [];
let imageCounter = 0;
let button;
let cnv;

function preload() {
  for (let i = 0; i <= 10; i++) {
    img[i] = loadImage("img_" + i + ".jpeg")
  }
}

function setup() {

  cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("#canvasDiv");

  // background(200);
  textSize(24);
  imageMode(CENTER);
  frameRate(12);

  button = select("#randButton");
  button.mousePressed(buttonPressed);
  button.class("randButton");

  text("Pick a Card, Any Card...", windowWidth/2, windowHeight/2);


}

function draw() {


  if (animating == true) {

    clear();
    image(img[imageCounter], width / 2, height / 2);

    if (imageCounter < img.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }

  }


}




// function randomizer(){
//   animating=false;
//   if(drinks[0]) {
//     background(random(200,255));
//     randomIndex = int(random(drinks.length));
//     text(dogs[randomIndex].name, 50,50)
//   }
// }

function randomizer() {
  animating = false;
  if (img[0]) {
    //displays random name, then splices it out
    // background(random(200, 255));
    clear();
    // randomIndex = int(random(drinks.length));
    //   textSize(50);
    // text(drinks[randomIndex].name, 50, 50);
    //   textSize(20);
    //   text("in a " + drinks[randomIndex].cup, 100, 100);
    // drinks.splice(randomIndex, 1);
    image(random(img), width / 2, height / 2)
  } else {
    background(random(200, 255));
    text("That's all I got, kid..", 100, 200);

  }

}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 1500);



}