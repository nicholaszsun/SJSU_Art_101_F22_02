let feelings = ["Sarrow", "Anger", "Annoyance", "Happiness", "Disgust", "Neutral"]

function setup(){
    createCanvas (600, 600);
    background(200);

   console.log("initial array is")
   console.log(feelings);

   feelings.splice(4, 1);
   console.log("array after splice");
   console.log(feelings);
}

function draw(){
    
}