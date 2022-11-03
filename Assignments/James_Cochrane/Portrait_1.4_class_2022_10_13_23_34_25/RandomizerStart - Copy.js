let dogs = [{name: "Blaze", color: "black and white"},
 {name: "Izzy", color: "black and brown"}, {name: "Cinderella",
  color: "black and brown"}, {name: "Buttercup", color: "tan"},
   {name: "Grizzly", color: "black"}];

let randomIndex;

function setup() {
    createCanvas(600,600);
    background(200);



}

function draw() {

}

function mousePressed() {
    background(random(200, 255));
    randomIndex = int(random(dogs.length));
text(dogs[randomIndex].name, 50, 50);
dogs.splice(randomIndex, 1);
}