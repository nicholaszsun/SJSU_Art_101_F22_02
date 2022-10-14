//Things to to when stressed
let fontBold;

let activity =  ["sleep", "rest", "drink water", "shower","read"];

let randomIndex;
let counter =0;
let animating = false;


function setup() {
  createCanvas(400, 400);
  background(220);

  
  fill(0);
  textSize(12);
  textFont('Georgia',20, 30)
  text ("Click to randomize",50, 50);
  
  // setTimeout(changeBackground, 2000);

}

function draw() {
 
  if(animating == true){
    ellipse(random(width), random(height), random(50, 200));
  }
  
  
}

function changeBackground(){
  if (counter <= 5){
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
  
  
// console.log(activity[randomIndex]);
text(activity[randomIndex], 150,50); 
  
// activity.splice(randomIndex, 1); 
}

function mousePressed() {
 
  animating = true;
  setTimeout(randomizer, 2000);
  
  
  
  
//  background(random(255)); 
//    randomIndex =  int(random(activity.length));
  
  
// // console.log(activity[randomIndex]);
// text(activity[randomIndex], 150,50); 
  
// // activity.splice(randomIndex, 1);
  
}
