let owls =[{
    name: "dillon", 
    color: "owl treat color"
  },{
    name: "Ziggy", 
    color: "chartrese"
  },{
    name: "mercedes", 
    color: "poop"
  },{
    name: "petunia",
    color: "rose gold"   
  },{
    name: "kloot",
    color: "coffee grind bero"   
  },{
    name: "nala",
    color: "stardust"   
  }];
  
  let randomIndex;
  let animating = false;
  let animals = [];
  
  function preload() {

    for (let i = 0; i <= 15; i++){
      animals[i] = loadImage(`Assets/animal_${i}.jpg`)
    }
  }

  function setup() {
    createCanvas(600, 600);
    background(200);
    textSize(32);
    imageMode(CENTER);
   
    text("click to randomize", 50, 50)
    console.log(animals);
  }
  
  function draw() {
    
    if (animating == true){
      image(animals[0], width/2, height/2);

    }
  }

  function randomizer() {
    animating = false;

    if (owls[0]) {
        // this displays random name and splices it out of array
    background(random(200, 255));
    randomIndex = int(random(owls.length));
    text(`${owls[randomIndex].name}'s favorite color inspect ${owls[randomIndex].color}`, 50, 50);
    // text(owls[randomIndex].name + "'s favorite color is" + owls[randomIndex].color, 50, 50);
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