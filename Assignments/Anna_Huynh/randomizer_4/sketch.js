let flowers = [
      {
          name: "This outfit is cute!",
    }, {
          name: "I think this is meh...",
    }, {
          name: "I like the shoes!",
    }, {
          name: "I like the top!",
    }, {
          name: "I like the shoes!",
  }];
  
  let counter;
  let randomIndex;
  let randomButton;
  let overButton;
//   let plants = [];
  let clothes = [];
  let imageCounter = 0;
  animating = false;
  
  function preload(){
      //   for (let i = 0; i <= flowers.length - 1; i++){
      //         plants[i] = loadImage('images/plants_'+i+'.jpeg');
      //   };

        for (let i = 0; i <= 3 - 1; i++){
            clothes[i] = loadImage('images/new_images/clothes_'+i+'.png');
      };

        //bouquet = loadImage('images/bouquet.jpeg')

        base = loadImage('images/new_images/base.png')
  }
  
  function setup() {
        createCanvas(windowWidth, windowHeight);
        background(150, 198, 172);
  
        textSize(24);
        textAlign(CENTER);
  
        imageMode(CENTER);
        frameRate(8);
  
        text("I'm super indecisive! Help me pick an outfit!", width/2, height/10);

        image(base, width/2, height/2);
  
        setTimeout(changeBackground, 1000);

        randomButton = createButton("Randomize!");
        randomButton.mousePressed(buttonPressed);
        randomButton.class("randomizerButton");

      //   overButton = createButton("Start Over!");
      //   overButton.mousePressed(overPressed);
      //   overButton.class("startoverButton")
  }
  
  function draw(){

        if (animating == true){
              //ellipse(random(width), random(height), random(50, 200))
  
              clear();

              background(150, 198, 172);
  
                    if (imageCounter < clothes.length - 1){
                          imageCounter++;
                    } else {
                          imageCounter = 0;
                    }     
              //random flashing images//
              image(clothes[imageCounter], width/2, height/2);            
        }
  };
  
  function randomizer(){
        animating = false;
        if (flowers[0]) {
              
              clear();
              randomIndex = int(random(flowers.length));

              background(150, 198, 172);

              text(`${flowers[randomIndex].name}`, width/2, height/8);
  
              //shows image//
              
              image(random(clothes), width/2, height/2);
  
              flowers.splice(randomIndex, 1);

              //plants.splice(randomIndex, 1);
              
              console.log(randomIndex);
        } else {
              clear();
              //image(bouquet, width*.5, height*.5);
              background(150, 198, 172)
              image(random(clothes), width/2, height/2);
              text("Mmm... I'll go with this! Thanks!", width/2, height/8);
              randomButton.remove();
      }
  }
  
  function changeBackground(){
        counter++;
              if (counter <= flowers.length - 1) {
              background(150)
              setTimeout(changeBackground, 1000);
        } else {
              
        };
        }
  
  function buttonPressed(){
        animating = true;
        setTimeout(randomizer, 1000);

        if (flowers <= 0) {
            setTimeout(randomizer, 100)
            animating = false;
        } else {
            animating = true;
        }
        }

  function overPressed(){
      //   clear();

      //   image(base, width/2, height/2);
      //   text("Click Button to Generate Outfits", width/2, height/10);
      //   imageCounter = 0;
      //   flowers = 0;
      //   i = 0;

      //   randomButton = createButton("Randomize!");
      //   randomButton.mousePressed(buttonPressed);
      //   randomButton.class("randomizerButton");
  }