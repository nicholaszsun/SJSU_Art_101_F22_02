
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

let faces=[];
let randomIndex;
let animating = false;
let imageCounter = 0;

function preload(){
    for (let i= 0; i<=15; i++){
        faces[i] = loadImage(`images/faces_#{i}.png`);
    }
}

function setup(){
    createCanvas (600, 600);
    background(200);
    textSize(18);
    text("click to randomize", 50, 50);
    ImageBitmapRenderingContext(CENTER);
    frameRate(12);
   
   
}

function draw(){
    clear();  if(animating==true){
        image(faces[]imageCounter, width/2,height/2);
        // triangle(random(600),random(600), random(600), random(600), random(600),random(600));
        clear();
        if(imageCounter < faces.length - 1 ){
            imageCounter++;
        }else{
            imageCounter = 0;
        }
        

    }
   
}

function randomizer(){
    animating=false;

    if(feelings[0]){

    background(random(255));
    randomIndex = int(random(feelings.length));
    console.log(feelings[randomIndex].name);
    text(`The color ${feelings[randomIndex].name} associated is ${feelings[randomIndex].color}.`, 50,50);
    //text(feelings[randomIndex].name + "'s associated color is " + feelings[randomIndex].color, 50,50);
    feelings.splice(randomIndex, 1);
   
}else{
    background(random(255));
    text("Nothing Left!", 50, 50);

}
}

function mousePressed(){
animating = true;
setTimeout(randomizer, 2000);



}