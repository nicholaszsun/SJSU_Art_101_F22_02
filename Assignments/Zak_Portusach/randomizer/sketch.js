let drinks = [{name: " Coffee ", cup: " mug "},
              {name: " Soda ", cup:" can "}, 
              {name: " Water ", cup: " bottle "},
              {name: " Milk ", cup: " glass "},
              {name: " Kombucha ", cup: " growler "},
              {name: " Peepee ", cup: " bladder "}];

let randomIndex;

function setup() {
  createCanvas(400, 400);
  background(220);
  text("you gotta click on the screen!", 50, 50);
   textSize(32);
    text("What should I drink?", 100,200);
  
}

function draw() {

}

function mousePressed(){
  
  if (drinks[0]){
    //displays random name, then splices it out
  background(random(200, 255));
  randomIndex = int(random(drinks.length));
    textSize(50);
  text(drinks[randomIndex].name, 50, 50);
    textSize(20);
    text("in a " + drinks[randomIndex].cup, 100, 100);
  drinks.splice(randomIndex, 1);
  } else { 
    background(random(200,255));
      text("That's all I got, kid..", 100, 200);
  
  }
  
}