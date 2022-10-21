let sentences = [
  {
    sentence: "Are you suggesting coconuts migrate?",
    fcolor: "red",
  },
  {
    sentence:
      "First shalt thou take out the Holy Pin. Then shalt thou count to three, no more no less. Three shalt be the number thou shalt count, and the number of the counting shalt be three. Four shalt thou not count, neither count thou two, excepting that thou then proceed to three. Five is right out. Once the number three, being the third number, be reached, then lobbest thou thy Holy Hand Grenade of Antioch towards thou foe, who being naughty in my sight, shall snuff it.",
    fcolor: "yellow",
  },
  {
    sentence:
      "Come and see the violence inherent in the system!  HELP, HELP, I'M BEING REPRESSED!",
    fcolor: "rgb(255,145,0)",
  },
  {
    sentence: "Ah don' wanna talk to you no more, you empty-headed animal food-trough wiper!  Ah fart in your general direction!  Your mother was a hamster, and your father smelt of elderberries!",
    fcolor: "rgb(99,99,189)",
  },
  {
    sentence: "There are some who call me... 'Tim'?",
    fcolor: "rgb(72,96,79)",
  }
];

let ani_transition = false,
  ani_endScreen = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  background("white");
  textSize(50);
  
  let textPos = createVector(
      int(random(width / 3, width - width / 3)),
      int(random(height / 3, height - height / 3))
    );
  
  text(
    "click to start",
    textPos.x,
    textPos.y,
    width-textPos.x,
    height-textPos.y
  );
}



//randomizer start when mouse is pressed.
//willnot start if end screen is reached.
function mousePressed() {
  if (!ani_endScreen) {
    ani_transition = true;
    setTimeout(randomizer, 1000);
  }
}




let randomIndex;
//main function for outputting random quote
function randomizer() {
  ani_transition = false;
  randomIndex = int(random(sentences.length));

  if (sentences.length > 0) {
    noStroke();
    fill("black");
    background(sentences[randomIndex].fcolor);
    textSize(int(random(15,50)));
    textWrap(WORD);
    let textPos = createVector(
      int(random(width / 10, width - width / 10)),
      int(random(height / 10, height - height / 10))
    );
    text(
      sentences[randomIndex].sentence,
      textPos.x,
      textPos.y,
      width - textPos.x,
      height - textPos.y
    );
    sentences.splice(randomIndex,1);
  } else {
    noStroke();
    fill("black");
    textAlign(CENTER);
    textWrap(WORD);
    background("white");
    textSize(20);
    text(
      `                          THE END
 
 
   Slushy organ music starts and the houselights in the cinema come on ...
   organ music continues as the audience leave.

Refresh to start again
      `,
      width / 2 - width / 5,
      height / 2 - height / 5,
      (width / 5) * 2,
      (height / 5) * 2
    );

    ani_endScreen = true;
  }



}

//end screen animation


let deltaT = 0;
function curtainFall() {
    if (deltaT < width / 4) {
      fill("red");
      stroke("black");
      rect(0 + deltaT, 0, width / 20, height);
      rect(width - width / 20 - deltaT, 0, width / 20, height);

      deltaT += width / 20;
    } else {
      deltaT = 0;
    }
  
  }

function draw() {
  if (ani_transition == true) {
    stroke(random(256), random(256), random(256));
    fill(random(256),random(91),random(91));
    ellipse(random(width), random(height), random(width / 4, width / 3));
  }

  if (ani_endScreen == true) {
    setInterval(curtainFall, 1000);
  }
}
