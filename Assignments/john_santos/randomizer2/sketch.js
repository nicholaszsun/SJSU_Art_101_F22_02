//dogs

let words = [{
    name: "Thats a NO!" 
}, {
    name: "It will Pass"
}, {
    name: "Maaaybe!"
}]

let randomIndex;
let animating = false;

function setup() {
    createCanvas(400, 400);
    background(220);
    textSize (32);
    

    text("click me!", 60, 60);

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
      fill(random(225),random(255),random(225));
      ellipse(random(width), random(height), random(50, 75));

    }
       
  }

  function randomizer(){
    animating = false;

     if (words [0]){

    background(random(220, 255));
    randomIndex = int(random(words.length));
    text(words[randomIndex].name, 75, 75);
    words.splice(randomIndex, 1);

    } else {
        background(random(220, 255));    
        text("nothing left!", 50,50)
    }
  }

  function mousePressed(){
    animating = true;
    setTimeout(randomizer, 2000);

    
  }