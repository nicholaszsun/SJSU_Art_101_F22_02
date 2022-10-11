//Things to to when stressed

let activity =  ["sleep", "rest", "drink water", "shower","read"];

let randomIndex;


function setup() {
  createCanvas(400, 400);
  background(220);

  
  
//  randomIndex =  int(random(activity.length));
  
  
// // console.log(activity[randomIndex]);
// text(activity[randomIndex], 150,50); 
  
// activity.splice(randomIndex, 1);

  
}

function draw() {
 
}

function mousePressed() {
 background(random(255)); 
   randomIndex =  int(random(activity.length));
  
  
// console.log(activity[randomIndex]);
text(activity[randomIndex], 150,50); 
  
// activity.splice(randomIndex, 1);
  
}

