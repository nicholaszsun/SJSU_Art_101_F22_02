let adjectives = [{adjective: "incredible"}, {adjective: "exciting"}, {adjective: "boring"},             
     {adjective: "ordinary"}, {adjective: "unrelenting"}, {adjective: "cheap"}, {adjective: "precious"},
     {adjective: "so much fun"}, {adjective: "confusing"}, {adjective: "indescribable"}, {adjective: "unfair"},
     {adjective: "pointless"}, {adjective: "beautiful"}, {adjective: "disapointing"}, {adjective: "grueling"},
     {adjective: "unexplainable"}, {adjective: "unpredictable"}, {adjective: "full of love"}, {adjective: "a test"},
     {adjective: "uneventful"}, {adjective: "painful"}, {adjective: "simple"}, {adjective: "overwhelming"},
     {adjective: "scary"}, {adjective: "unclean"}, {adjective: "strange"}, {adjective: "odd"}, {adjective: "hell"}, 
     {adjective: "a gift"}, {adjective: "uncertain"}, {adjective: "all about money"}, {adjective: "hard"}, 
     {adjective: "fragile"}, {adjective: "uncomfortable"}, {adjective: "wet"}, {adjective: "cringe"}, 
     {adjective: "whimsical"}, {adjective: "joyous"}, {adjective: "sad"}, {adjective: "fleeting"}, 
     {adjective: "ugly"}, {adjective: "unforgiving"}, {adjective: "plain"}, {adjective: "a whirlwind"}, 
     {adjective: "tragic"}, {adjective: "ever changing"}, {adjective: "taken for granted"}, {adjective: "fluid"}, 
     {adjective: "complicated"}, {adjective: "untintentionally funny"}, {adjective: "rigged"}, 
     {adjective: "nerve-racking"}, {adjective: "lonely"}, {adjective: "unpromised"}, {adjective: "a slog"}, 
     {adjective: "a marathon"}, {adjective: "nothing special"}, {adjective: "impetuous"}, {adjective: "a joke"}, 
     {adjective: "like a box of chocolates"}, {adjective: "mind-boggling"}, {adjective: "irreplaceable"}, {adjective: "based"}];

let randomIndex;
let animating = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    textSize(32);
    frameRate(144);
    fill(random(255),random(255),random(255));
    text("Click to begin your sentient life!", 30, 50);
}

function draw() {

    if(animating == true){
        ellipse(random(width), random(height), random(255));
        fill(random(255),random(255),random(255));
    }
}

function randomizer(){
    animating = false;

    if (adjectives[0]){ 
    // this displays random adjective and splices it out of array
        background(random(255), random(255), random(255));
        randomIndex = int(random(adjectives.length));
        fill(255);
        text(`Life is ${adjectives[randomIndex].adjective}.`, 30, 50);
        adjectives.splice(randomIndex, 1);
    } else {
        fill(255);
        background(0);
        text("Now you're dead!", 50, 50);
        text("The end.", 50, 85);
    }
}

function mousePressed() {
    if (adjectives)
    animating = true;
        setTimeout(randomizer, 2000);
}