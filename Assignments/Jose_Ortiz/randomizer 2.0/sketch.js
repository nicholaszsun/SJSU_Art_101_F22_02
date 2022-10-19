
let assets = [];
let numAssets = 7;

function preload (){
 
  let asset1 = loadImage('a_fake.jpg');
  let asset2 = loadImage ('lobster.jpg');
  let asset3 = loadImage ('lonelyWitch.jpg');
  let asset4 = loadImage('mannequin.jpg');
  let asset5 = loadImage ('shadow pumpkin.jpg');
  let asset6 = loadImage('steak.jpg');
  let asset7 = loadImage('this_is_gonna_be_real.jpg');
  

  assets = (asset1,asset2,asset3,asset4,asset5,asset6,asset7)
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  noLoop();
}

function draw() {
  background (13,172,13);
  
imageMode(CENTER)

let randoImg = random(assets)

image(randoImg,windowWidth, windowHeight);

}

