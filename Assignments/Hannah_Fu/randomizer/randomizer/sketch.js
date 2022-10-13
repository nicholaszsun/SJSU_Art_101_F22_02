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

function setup() {
    //let r = random(6);
    createCanvas(600, 600);
    background(200);
    textSize(32);

    text("click to randomize", 50,50);
}

function draw (){

}

function mousePressed(){
if (flowers[0]){
    background(random(200, 255));
    randomIndex = int(random(flowers.length));
    text(flowers[randomIndex].name, 50, 50);
    flowers.splice(randomIndex, 1);
} else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
}
}
