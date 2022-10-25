  let randomIndex;
  let animating = false;
  let animals = [];
  let imageCounter = 0;
  
  function preload() {

    for (let i = 0; i <= 15; i++){
      animals[i] = loadImage('Assets/animal_'+i+'.jpg')
    }
  }

  function setup() {
    createCanvas(600, 600);
    background(200);
    textSize(32);
    imageMode(CENTER);
    frameRate(12);
   
    text("click to randomize", 50, 50)
    console.log(animals);
  }
  
  function draw() {
    
    if (animating == true){ 
      clear();
      image(animals[imageCounter], width/2, height/2);

      if (imageCounter < animals.length){
      imageCounter++;
      } else {
        imageCounter = 0;
      }
      
    }
  }

  function randomizer() {
    animating = false;

    if (owls[0]) {
    // background(random(200, 255));
    clear();
    randomIndex = int(random(owls.length));
    
    image(random(animals), width/2, height/2);
    text(owls[randomIndex].name, width/2, height - 100);
    owls.splice(randomIndex, 1);
    } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
  }

  function mousePressed() {
      animating = true;
      setTimeout(randomizer, 2000);
  
  }