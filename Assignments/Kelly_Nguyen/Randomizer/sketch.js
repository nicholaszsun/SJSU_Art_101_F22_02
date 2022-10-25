let things = [{
    name:"3ae",
    color: "3ac"
}, {
    name:"xanh",
    color:"3xa"
}, {
    name: "mi",
    color:"3mi"
}, {
    name:"hom",
    color:"3hom"
}, {
    name:"che",
    color:"3che"
}, {
    name:"bot",
    color:"3bot"
}];

let randomIndex;
let counter = 0;
let cheddar = false;

function setup (){
    createCanvas(windowWidth,windowHeight);
    background(200);

    
text("Click to see how you feel today", 50,50);
// setInterval(changeBackground, 1000);
//set time out is expecting a function (change background is the function in this
//case)
}

function draw(){

    if(cheddar== true){
        ellipse(random(width),random(height),random(50,100))
    }

}
function changeBackground(){
    if (counter <=5){
        counter++;
    
    background(random(255),random(255),random(255));
 } else {

 }
}
function loading(){
    if(things[0]){
    background(random(255));
    randomIndex = int(random(things.length));
    text(things[randomIndex].name,50,50);
    things.splice(randomIndex, 1);
} else{
    background(255)
    text("STOP CLICKING FAST",50,50)
}
}
function mousePressed(){
    cheddar = true;
    setTimeout(loading,2000);


   
}