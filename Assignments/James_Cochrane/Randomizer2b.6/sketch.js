let dogs = [{name: "Blaze", color: "black and white"},
 {name: "Izzy", color: "black and brown"}, {name: "Cinderella",
  color: "black and brown"}, {name: "Buttercup", color: "tan"},
   {name: "Grizzly", color: "black"}];

let randomIndex;
let counter = 0;

function setup() {
    createCanvas(600,600);
    background(200);
    textSize(32);

    text("click to randomize", 50, 50);

    setTimeout(changeBackground, 1000);
}

function draw() {

}
    function changeBackground(){
        if (counter <= 5){
            counter++;
            console.log(counter)
        background(random(255), random(255), random (255));
        setTimeout(changeBackground, 1000);
        } else {
            
        }
    }


function mousePressed() {

    if (dogs[0]){
        // this displays random name and splices it out of array
    background(random(200, 255));
    randomIndex = int(random(dogs.length));
text(dogs[randomIndex].name, 50, 50);
dogs.splice(randomIndex, 1);
} else {
    background(random(200, 255));
    text("nothing left!", 50, 50);

}
}