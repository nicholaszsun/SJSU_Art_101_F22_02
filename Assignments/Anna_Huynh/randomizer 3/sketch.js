let flowers = [
    {
        name: "roses",
        color: "red"
  }, {
        name: "daisies",
        color: "white"
  }, {
        name: "dandelions",
        color: "yellow"
  }, {
        name: "hyacinths",
        color: "purple"
  }, {
        name: "lilies",
        color: "orange"
}, {
        name: "carnations",
        color: "pink"
}];

let counter;
let randomIndex;
let plants = [];
let imageCounter = 0;
animating = false;

function preload(){
      for (let i = 0; i <= 5; i++){
            plants[i] = loadImage(`images/plants_${i}.JPEG`);
      };
}

function setup() {
      createCanvas(windowWidth, windowHeight);
      background(200);

      textSize(24);
      textAlign(CENTER);

      imageMode(CENTER);
      frameRate(8);

      text("Click to Generate Flowers", width*.5, height*.5);

      setTimeout(changeBackground, 1000);
}

function draw(){
      if (animating == true){
            //ellipse(random(width), random(height), random(50, 200))

            clear();

                  if (imageCounter < plants.length - 1){
                        imageCounter++;
                  } else {
                        imageCounter = 0;
                  }     

            image(plants[imageCounter], width/2, height/2);            
      }
};

function randomizer(){
      animating = false;
      if (flowers[0]) {
            //background(random(255), random(255), random(255));

            clear();
            randomIndex = int(random(flowers.length));

            text(`${flowers[randomIndex].name} are ${flowers[randomIndex].color}`, width/2, height/8);

            image(random(plants), width/2, height/2);

            flowers.splice(randomIndex, 1);
            plants.splice(randomIndex, 1);
            
            console.log(flowers);
      } else {
            background(random(200, 255));
            text("Congrats! You made a bouquet!", width*.5, height*.5);
      }
}

function changeBackground(){
      counter++;
            if (counter <= 5) {
            background(random(255), random(255), random(255))
            setTimeout(changeBackground, 1000);
      } else {
            
      };
      }

function mousePressed(){
      animating = true;
      setTimeout(randomizer, 2000);
      }