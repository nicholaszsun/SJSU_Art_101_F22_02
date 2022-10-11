

let mic;



let detailY;
// slide to see how detailY works
function setup() {
  createCanvas(600, 600);
  detailY = createSlider(30, 30, 10);
  detailY.position(10, height + 10);
  detailY.style('width', '100px');
  describe(
    'a white sphere with low detail on the y-axis, including a slider to adjust detailY'
  );
}

function setup() {
 let cnv = createCanvas(600, 600, WEBGL);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();

 setAttributes('antialias', true);
  fill(237, 34, 93);
  strokeWeight(3);
  
}


function draw() {
  background(205, 102, 94);
  text('tap to start', width/2, 20);
  rotateY(millis() / 1000);
  cone( 30, 65, 16, detailY.value());

}
function draw(){
  background( 305, 205, 200);
  rotateY(millis() / 1000);
 rotateX(millis() / 500);
  
  let r = color(175, 100, 220);
fill(r);
let blueValue = blue(r);
  
  
  ellipse(115, 75, 80, 60,mouseX, 0, mouseX, 100);
describe('pink ellipse with black outline in middle of a gray canvas');
  ellipse(144, 24, 60, 60,mouseX, 0, mouseX, 100);
describe('white ellipse with black outline in middle of a gray canvas');
  ellipse(255, 24, 60, 60,mouseX, 0, mouseX, 100);
describe('white ellipse with black outline in middle of a gray canvas');
  
  ellipse(255, 127, 60, 60,mouseX, 0, mouseX, 100);
describe('white ellipse with black outline in middle of a gray canvas');
  ellipse(200,0, 60, 80,mouseX, 0, mouseX, 100);
describe('white ellipse with black outline in middle of a gray canvas');
  ellipse(145,127, 60, 60,mouseX, 0, mouseX, 100);
describe('white ellipse with black outline in middle of a gray canvas');
  ellipse(200,155, 60, 80,mouseX, 0, mouseX, 100);
describe('white ellipse with black outline in middle of a gray canvas');
  ellipse(285, 75, 80, 60,mouseX, 0, mouseX, 100);
describe('white ellipse with black outline in middle of a gray canvas');
  
  ellipse(185, 65, 20, 20,mouseX, 0, mouseX, 100);
describe('white ellipse with black outline in middle of a gray canvas');
  
  ellipse(215, 65, 20, 20,mouseX, 0, mouseX, 100);
describe('white ellipse with black outline in middle of a gray canvas');
   
   arc(200, 88, 30, 50, 0,mouseX, 0, mouseX, 100, PI + QUARTER_PI, OPEN,mic.getLevel());
describe('white ellipse with black outline with top right missing');


  
 

  
}

