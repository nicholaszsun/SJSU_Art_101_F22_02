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
let florals = [];
let imageCounter = 0;
let startRandomizerButton;
let addMoreButton;

let cnv;
let nameInputs = [];

function preload (){
    for (let i = 0; i <= 6; i++){
        florals[i] = loadImage('assets/floral_'+i+'.jpg')
    }
}
//let counter = 0;
function setup() {
    //let r = random(6);
    cnv = createCanvas(600, 600);
    cnv.parent("#canvasDiv");

    background(240, 245, 230);
    textSize(32);
    textFont('Courier new');
    //textAlign(CENTER);
    textStyle(BOLD);
    fill(200);
    imageMode(CENTER);
    frameRate(8);

    text("click to randomize", 50,50);
    console.log(florals);

    //button = createButton("click to randomize");
    startRandomizerButton = select('#randButton');
    startRandomizerButton.mousePressed(buttonPressed);

    addMoreButton = select('#addMoreButton');
    addMoreButton.mousePressed(addAnotherInput);
   

for (let i = 0; i < 3; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 
    1].parent("#inputFields");
}
}

function draw (){
    
    if(animating == true){
       clear();
       image(florals[imageCounter], width/2, height/2);
       
       if (imageCounter < florals.length - 1){
       imageCounter++;
       console.log(imageCounter);
       } else {
        imageCounter = 0;
       }
      // ellipse(random(width), random(height), 
       //random(50, 200));

    }
}

function addAnotherInput(){
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 
    1].parent("#inputFields");
}
function randomizer(){
    animating = false;

if (flowers[0]){
    //background(random(200, 255));
    clear();
    randomIndex = int(random(flowers.length));
    

     image(random(florals), width/2, height/2);
        text(`${flowers[randomIndex].name}'s color is 
     ${flowers[randomIndex].color}`, width/2, height/2);
    flowers.splice(randomIndex, 1);
} else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
}
}
function buttonPressed(){
    animating = true;
    setTimeout(randomizer, 3000);


}
