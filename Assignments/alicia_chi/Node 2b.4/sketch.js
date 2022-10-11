let feelings = [{
    name: "Sarrow", 
    color: "blue"
}, {
    name:"Anger", 
    color: "red"
}, {
    name:"Annoyance", color: "purple"
}, {
    name:"Happiness", color: "yellow"
}, {
    name: "Disgust", color:"green"
}, {
    name:"Neutral", color:"grey"
}];

function setup(){
    createCanvas (600, 600);
    background(200);
}

function draw(){
    
   
}

function mousePressed(){
    background(random(255));
randomIndex = int(random(feelings.length));

   console.log(feelings[randomIndex].name);
   text(feelings[randomIndex].name, 100,100);

   feelings.splice(randomIndex, 1);
   console.log(feelings);
}