let pic = [{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"}];

let randomIndex;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  
}

function mousePressed () {
  background (13,172,13);
  randomIndex = int(random(pic.length));
  text(pic[randomIndex].name,50,50)
  pic.splice(randomIndex,1);
}