let randomIndex;
let animating = false;
let imageCounter =0;
let cats = [];
let button;

function preload(){
    for (let i =0; i <= 15; i++){
        cats[i] = loadImage('assets/cat_'+i+'.jpg');
    }
}

function setup (){
    createCanvas(windowWidth,windowHeight);
    background(200);
    button = createButton("click to mew mew");
    button.position(50,50);
    button.mousePressed(buttonPressed);
    imageMode(CENTER);

    frameRate(12);

}


function draw(){
if (animating == true) {
    clear();
    image(cats[imageCounter],width/2,height/2);

    if(imageCounter < cats.length -1) {
    imageCounter++;
    } else {
    imageCounter = 0;
        }
    }
}




function randomizer (){
    animating = false;
  if (cats[0]){
   clear();
    randomIndex =int(random(cats.length));
    image(random(cats),width/2,height/2);
    cats.splice(randomIndex,1);
    } else {
   clear();
    text("STOP CLICKING SO FAST",50,500);
    }
}

function buttonPressed (){
    animating = true;
    setTimeout (randomizer,2000);
  
}