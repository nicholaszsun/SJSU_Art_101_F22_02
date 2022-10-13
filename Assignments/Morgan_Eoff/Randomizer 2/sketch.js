//my favorite people
let people =[{
  name: "kyle",
  color:"dark red color"
 },{
 name:"des",
 color:"bright red color"
}, {
 name:"miranda", 
 color:"dark green color"
}, {
 name:"madison",
color:"hot pink color"
}];

let randomIndex;
let animating = false;


function setup() {
  createCanvas(600, 600);
  background(220);
textSize(40)

text("click to randomize", 50, 50);



}

function draw() {

if (animating == true){
  ellipse(random(width), random(height), random(50, 200));

}

}

function randomizer(){
  animating = false;

  if (people[0]){

    background(random(120, 409));
    randomIndex= int(random(people.length));
   text(people[randomIndex].name, 50, 50);
  
   people.splice(randomIndex, 1);
  } else { 
    background(random(120, 409));
    text("nothing left!",50, 50);
  }
}
function mousePressed(){ 
animating = true;
  setTimeout(randomizer, 2000)



}
