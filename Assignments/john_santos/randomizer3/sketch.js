//dogs

let words = [{
    name: "Count on it"
}, {
    name: "No doubt!!!"
}, {
    name: "Ask again"
}, {
  name: "Most Likely"
}, {
  name: "That's a NO"
}, {
  name: "MAAAYBE!"
}, {
  name: "NOT NOW!"
}, {
  name: "It will pass"
}]

let randomIndex;
let animating = false;
let balls = [];
let imageCounter = 0;

function preload(){

for (let i = 0; i <= 8; i++){
  balls[i] = loadImage(`assets/8ball_${i}.jpeg`)

}

}




function setup() {
    createCanvas(400, 400);
    //background(220);
    textSize (16);
    imageMode (CENTER);
    frameRate(12);

    
    fill (0, 0, 0);
    text("Yes or No Questions Only", 105 , 200);
    text("Click to get answers", 125 , 215);
   

    // randomIndex = int(random(dogs.length));

    // console.log(random(3));
    // console.log(dogs[randomIndex].name);
    // text(dogs[randomIndex].name, 75, 75);

    // dogs.splice(randomIndex, 1);
    // console.log(dogs);
    
    //console.log(dogs[2].name);
    
    // console.log("initial array is ")
    // console.log(dogs);

    // dogs.splice(4, 1);
    // console.log("array after splice")
    // console.log(dogs);

    // dogs.unshift("puppy");
    // console.log("array after unshift")
    // console.log(dogs);


  }
  
  function draw() {
    
    
    if(animating == true){
      clear ();
      image(balls[imageCounter], random(400), random(400));

      if (imageCounter < balls.length - 1){
        imageCounter++;
        console.log(imageCounter);
      } else {
        imageCounter = 0;
      }
      // fill(random(225),random(255),random(225));
      // ellipse(random(width), random(height), random(50, 75));

    }
       
  }

  function randomizer(){
    animating = false;

     if (words [0]){

    // background(random(220, 255));
    clear();
    randomIndex = int(random(words.length));
    
    image(balls[0], width/2, height/2);
    fill (250, 250, 250);
    text(words[randomIndex].name, 163.5, 200);

    words.splice(randomIndex, 1);

    } else {
        //background(random(220, 255)); 
        fill (0, 0, 0);   
        text("You are out of questions!", 50,50)
        
    }
  }

  function mousePressed(){
    animating = true;
    setTimeout(randomizer, 2000);

    
  }