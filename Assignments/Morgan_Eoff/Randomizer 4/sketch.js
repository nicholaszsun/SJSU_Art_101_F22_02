//my favorite people ever
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
let imageLoad;
let button;


function preload(){

  for (let i = 0; i <= 3; i++){
peeps[i] = loadImage(`Assets/peeps_${i}.JPG`)
  }
}

function setup() {
  createCanvas(1450, 800);
  background(220, 70, 60);
textSize(60)
imageMode(CENTER);



text("click view some of my favorite people", 200, 400);


button = createButton("Click to randomize")
button.mousePressed(buttonPressed);

}

function draw() {

if (animating == true){
  clear();
  image(peeps[imageCounter], width/2, height/2);
  if (imageCounter < peeps.name - 1) {}
  imageCounter++;
  console.log(imageCounter);
} else{
  imageCounter =0;
}
}



function randomizer(){
  animating = false;

  if (people[0]){

    background(random(200, 270, 360));
    clear();

    randomIndex= int(random(people.length));
   text(people[randomIndex].name, 500, 400);
  image(random(peeps), width/2, height/2);

   people.splice(randomIndex,1);
  } else { 
    background(random(220, 70, 60));
    text("and many more!<3",500, 400);
  }
}
function buttonPressed(){ 
animating = true;
  setTimeout(randomizer, 1000)



}
