//What will you be eating today?
let comments =[{
name: "Exellent Pick!",

 },{
name:"YUM!",

}, {
name:"Mhhhmmmm", 

}, {
 name:"Nice Choice!",

},{
 name: "Nice!",

 },{
  name: "Sounds Good!",

 },{
  name: "Glad You Picked This One!",

 },{
  name: "Yummy!",

}];

let randomIndex;
let animating = false;
let food = [];
let imageCounter =0;
let imageLoad;
let button;


function preload(){

  for (let i = 0; i <= 7; i++){
food[i] = loadImage(`Foods/food_${i}.JPG`)
  }
}

function setup() {
  createCanvas(1450, 600);
  background(220, 60,89);
textSize(60)
textFont('Ariel');
textStyle(BOLD);
fill(40,150)
imageMode(CENTER);
frameRate(8);

text("Don't Know What to Eat?", 380, 300);
text("Food Option Generator", 400, 400);


button = createButton("Click to choose your food")
button.mousePressed(buttonPressed);

}

function draw() {

if (animating == true){
  clear();
  image(food[imageCounter], width, height);
  if (imageCounter < food.name - 1) {}
  imageCounter++;
  console.log(imageCounter);
} else{
  imageCounter =0;
}
}



function randomizer(){
  animating = false;

  if (comments[0]){

    background(random(50,200));
  clear();

    randomIndex= int(random(food.length));
   text(comments[randomIndex].name, 200, 100);
  image(random(food), width/2, height/2);

   food.splice(randomIndex,1);
  } else { 
  
  }
}
function buttonPressed(){ 
animating = true;
  setTimeout(randomizer, 1000)



}
