let flowers = [
{name:"myosotis", 
color: "baby blue"}, 

{name:"rosemary", 
color: "toad green"},

{name:"lavender", 
color: "light violet"},

{name: "marigold", 
color: "bright yellow"},

{name: "snowdrop", 
color: "snowy white"},

{name: "peony",
color: "quartz pink"},

{name: "rose",
color: "ruby red"}];


let randomIndex;
let animating = false;
//let counter = 0;
function setup() {
    //let r = random(6);
    createCanvas(600, 600);
    background(200);
    textSize(32);

    text("click to randomize", 50,50);
}

function draw (){

    if(animating == true){
        ellipse(random(width), random(height), random(50, 200));
    }
}

    
function randomizer(){
    animating = false;

if (flowers[0]){
    background(random(200, 255));
    randomIndex = int(random(flowers.length));
    text(`${flowers[randomIndex].name}'s color is 
     ${flowers[randomIndex].color}`, 50, 50);
    flowers.splice(randomIndex, 1);
} else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
}
}
function mousePressed(){
    animating = true;
    setTimeout(randomizer, 2000);


}
