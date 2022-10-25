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
let cat = [];
let imageCountner = 0
let button;

function preload(){
  
  for (let i = 0; i <=1; i++){
    cat[i] = loadImage('assets/cat_'+i+'.jpg')
    
  }
  
}


function setup(){
    createCanvas(600, 600);
    background(200);
    textSize(32)

  textStyle(ITALIC);
  fill (255);
  imageMode(CENTER);
  frameRate(12);

    text("Let's rummage the fridge!", 50, 50);
  
  button = createButton("click to rummage");
  button.mousePressed(buttonPressed);
  
  
  
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
      clear();
      
    image(cat[imageCountner], width/2, height/2);
    
      if (imageCountner < cat.length - 1){
      imageCountner++;  
      } else { 
        imageCountner = 0;
      }
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

function buttonPressed() {
    animating = true;
    setTimeout(randomizer, 2500);


    
}