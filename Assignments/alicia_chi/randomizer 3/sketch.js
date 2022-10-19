
let feelings = [{
    name: "Sarrow", 
    color: "blue"
}, {
    name:"Anger", 
    color: "red"
}, {
    name:"Annoyance", 
    color: "purple"
}, {
    name:"Happiness",
     color: "yellow"
}, {
    name: "Disgust", 
    color:"green"
}, {
    name:"Neutral", 
    color:"grey"
}];

let face=[];
let randomIndex;
let animating = false;
let imageCounter = 0;
let button;

function preload(){
    for (let i= 0; i<=15; i++){
        face[i] = loadImage(`images/face_${i}.JPG`);
    }
}

function setup(){
    createCanvas (600, 600);
    background(200);
    textSize(18);
    textFont('Courier new');
    textAlign(CENTER);
    textStyle(BOLD);
    imageMode(CENTER);
    text("click to randomize", 50, 50);

    frameRate(6);
    text("Click to Start the Randomizer", width/2, height/2);

    button = createButton("Click to Randomize");
    button.mousePressed(buttonPressed);
   
}

function draw(){
    clear();  if(animating==true){
        image(face[imageCounter], width/2,height/2);
        // triangle(random(600),random(600), random(600), random(600), random(600),random(600));
        clear();
        if(imageCounter < face.length - 1 ){
            imageCounter++;
        }else{
            imageCounter = 0;
        }
        

    }
   
}

function randomizer(){
    animating=false;

    if(feelings[0]){

    // background(random(255));
    clear();
    randomIndex = int(random(feelings.length));
    console.log(feelings[randomIndex].name);
    //text(feelings[randomIndex].name + "'s mociated color is " + feelings[randomIndex].color, 50,50);
    image(random(face), width/2,height/2);
    text(`The color ${feelings[randomIndex].name} associated is ${feelings[randomIndex].color}.`, width/2 ,height- 30);
    feelings.splice(randomIndex, 1);
   
}else{
    background(random(255));
    text("Nothing Left!", 50, 50);

}
}

function buttonPressed(){
animating = true;
setTimeout(randomizer, 2000);



}