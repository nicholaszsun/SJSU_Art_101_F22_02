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
let peeps = [];
let imageCounter =0;


function preload(){

  for (let i = 0; i <= 3; i++){
peeps(urs)[i] = loadImage(`Assets/peeps` +i+`.JPG`)
  }
}
function setup() {
  createCanvas(600, 600);
  background(220);
textSize(40)
imageMode(CENTER);


text("click to randomize", 50, 50);
console.log(peeps);


}

function draw() {

if (animating == true){
  clear();
  image(peeps[imageCounter], width/2, height/2);
  if (imageCounter < peeps.length - 1) {}
  imageCounter++;
  console.log(imageCounter);
} else{
  imageCounter =0;
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
