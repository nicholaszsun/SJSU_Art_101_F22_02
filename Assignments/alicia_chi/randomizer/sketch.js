
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

let randomIndex;
let animating = false;

function setup(){
    createCanvas (600, 600);
    background(200);
    textSize(18);
    text("click to randomize", 50, 50);
   
   
}

function draw(){
    
    if(animating==true){
        triangle(random(600),random(600), random(600), random(600), random(600),random(600));
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