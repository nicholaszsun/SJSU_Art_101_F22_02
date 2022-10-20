let randomIndex;
let counter = 0;
let animating = false;
let photodump = [];
let imageCounter = 0;
let button;

function preload(){
    for(let i =1; i <= 5; i++){
    photodump[i] = loadImage('assets/photodump_'+i+'.jpg') 
    }
}

function setup(){
createCanvas(600,600);
background(200);
textSize(32);
textFont('Coorier new');
textAlign(CENTER);
// FileList(255);
imageMode(CENTER);
frameRate(8);

text("click to randomize",width/2,height/2);
console.log(photodump);

button= select('#randButton');
button.mousePressed(buttonPressed);
button.class("randomizerButton");
setInterval(changeBackground,1000);
}
function draw(){
    if(animation == true){
        clear();
        image(photodump[imageCounter], width/2, height/2);

        if(imageCounter < photodump.lenght -1){
        imageCounter++;
    console.log (imageCounter);
    }else{
        imageCounter = 0;
    }
    }
}
function randomizer(){
    animating = false;
    if (photodump[0]){
        background(random(200,255));
        clear();
        randomIndex = int(random(photodump.lenght));
        text(photodump[randomIndex].name, width/2,height - 50);
        image(random(photodump),width/2,height/2);
        dogs.splice(randomIndex,1);
}
}

function changeBackground(){
if(counter<= 5){
    counter++;
    console.log(counter)
    background(random(500), random(255))
} 
}

function buttonPressed(){
    animating= true;
setTimeout(randomizer,2000); 
}

