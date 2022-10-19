// cats I know 
let food = [{name: "hotdogs in the far back"},
            {name: "stale bread"}, 
            {name: "smelly tuna"}, 
            {name: "moldy cheese"}, 
            {name: "spoiled milk"}, 
            {name: "month old rice"}, 
            {name: "rotten apple"}]; 


let randomIndex
let animating = false;


function setup(){
    createCanvas(600, 600);
    background(200);
    textSize(32)

    text("Click to rummage fridge!", 50, 50);
  rect(90, 80, 200, 350)
  rect(90, 80, 200, 140)
  rect(270, 90, 10, 120)
  rect(270, 240, 10, 180)
  
  fill(217,33, 33);
  circle(230, 150, 20);
  
  fill(0, 0, 255);
circle(130, 110, 20);
  
  fill(65, 169, 76);
circle(170, 300, 20);
    
}

function draw() {

 let r = random(255);
  let g = random(100,200);
  let b = random(100); 
  let a = random(200,255);

    if(animating == true){
      fill(r,g, b,a);
        ellipse(random(width), random(height), random(50, 200));
      
      triangle(random(width), random(height), random(width), random(height), random(width), random (height));

      rect (random (width), random (height), random(50,200));


    }
}

function randomizer(){
    animating = false;

if (food[0]){

    background(random(200, 255));
    randomIndex = int(random(food.length));
    text(food[randomIndex].name, 50, 50);
    food.splice(randomIndex, 1);

} else {
    background(random(200, 255));
    fill (27, 27, 27)
    text ("MOM! THERE'S", 50, 50);
    text ("NOTHING IN THE FRIDGE!", 50,100);
    text ("CAN WE ORDER PIZZA?!", 50,450);
  
  fill(229, 194, 152);
  circle(200, 250, 200);
  fill (127, 0, 0)
  arc(200, 270, 70, 60, 0, PI + HALF_PI,  CHORD);
  translate(width / 2, height / 2);
rotate(PI / 3.0);
  fill (16,16,16)
rect(-100, 10, 52, 10);
rect(-150, 70, 10, 52);
}
}

function mousePressed() {
    animating = true;
    setTimeout(randomizer, 2000);


    
}