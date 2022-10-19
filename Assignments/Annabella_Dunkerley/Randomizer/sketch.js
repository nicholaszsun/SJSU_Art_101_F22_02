//Things to to when stressed
let fontBold;
let activity =  ["Sleep", "Rest", "Drink Water", "Shower","Read"];
let randomIndex;
let counter =0;
let animating = false;
let button;

let div;


function setup() {
  createCanvas(400, 400);
  background(220);

  textAlign(CENTER, CENTER);

  fill(0);
  textSize(16);
  textFont('Georgia',20, 30)
  // text ("Click to randomize", 0, 62, width);

  
  
//shrink and grow

div = createDiv("Click to randomize for stress relief");
    div.position(0, 0);
  div.style("font-family", "Georgia");


  
//   style a button  
button = createButton("click me")
button.mousePressed(buttonPressed);
button.class("randomizerButton");
// button.position(50,50);
}


function draw() {
  if(animating == true){
  const rand = int(random(0, activity.length-1));
  fill(0);
  textSize(random(15, 70));
  text(activity[rand], random(width), random(height));
  }

  
  
  
  //text grow
  let sinVal = sin(frameCount * 0.05);
  let fontSize = map(sinVal, -10, 50, 10, 100);
  div.style("font-size", fontSize + "px");  
 
}

function changeBackground(){
  if (counter <= 500){
    counter++;
    console.log(counter)
  background(random(255), random(220), random(220));
setTimeout(changeBackground, 1000);
} else {

} 
}

function randomizer(){
 
  animating = false;
  
 background(random(255), random(220), random(220)); 
   randomIndex =  int(random(activity.length));

  
textSize(32);
fill(255, 255, 255);
text(activity[randomIndex], 0, 62, width); 

}


function buttonPressed() {
 
  animating = true;
  setTimeout(randomizer, 2000);
}

