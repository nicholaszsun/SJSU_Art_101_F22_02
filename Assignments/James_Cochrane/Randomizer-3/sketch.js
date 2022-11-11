let dogs = [{name: "Blaze", color: "black and white"},
 {name: "Izzy", color: "black and brown"}, {name: "Cinderella",
  color: "black and brown"}, {name: "Buttercup", color: "tan"},
   {name: "Grizzly", color: "black"}];

let randomIndex;
let animating = false;

function setup() {
    createCanvas(1800, 937);
    background(200);
    textSize(32);

    text("click to randomize", 50, 50);
}

function draw() {

    if(animating == true){
        ellipse(random(width), random(height), random(50, 200));

    }
}

function randomizer(){
    animating = false;

    if (dogs[0]){ 
    // this displays random name and splices it out of array
        background(random(200, 255));
        randomIndex = int(random(dogs.length));
        // text(dogs[randomIndex].name + "'s fur is " +
        // dogs[randomIndex].color, 50, 50);
        text(`${dogs[randomIndex].name}'s fur is ${dogs[randomIndex].color}.`, 50, 50);
        dogs.splice(randomIndex, 1);
    } else {
        background(random(200, 255));
        text("nothing left!", 50, 50);

}
}

function mousePressed() {
    animating = true;
        setTimeout(randomizer, 1000);

}