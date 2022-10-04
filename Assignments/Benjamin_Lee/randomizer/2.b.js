let cats = ["Lisa", "Kiki", "Donut", "Sprinkle", "Swiper", "Luna", "Titan", "Keyoh"]; 

let randomIndex


function setup(){
    createCanvas(600, 600);
    background(200);
  
  
}

function draw() {

}

function mousePressed() {
    background(random(200, 255));
    randomIndex = int(random(cats.length));
    text(cats[randomIndex].name, 50, 50);
    cats.splice(randomIndex, 1);
}