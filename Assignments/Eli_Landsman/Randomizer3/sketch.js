//Randomizer Project

  //Random Array Integer
  let randomIndex;
  let animating = false;
  let counter = 0
  let img;
  let pics = [];
  let i;
  let back = []
  
//Array Setup
let response = [
  {name: "Just Do It",color: "red", img: "1"},
  {name: "Cry.",color: "blue"},
  {name: "Why?", color: "black"},
  {name: "OOF", color: "red"},
  {name: "Just Don't?", color: "black"},
  {name: "Wah Wah Wah", color: "white"},
  {name: "Just Git Good", color: "black"},
  {name: "There's No Hope", color: "black"},
  {name: "Will You Get Any Better", color: "black"},
  {name: "Keep on Keepin On", color: "blue"},
 ]

// //Load Images
// function preload() {
//   for (let i = 0; i <= 7; i++){
// pics[i] = loadImage("assets/response_" + i + ".JPG")
//   }
// }
//Checking pics array
// console.log(pics[i])


function setup() {
  createCanvas(windowWidth, windowHeight);

  //Main Type Config.
  textSize(35);
  fill(0, 102, 153);

  //Title
text("Click to Get Random", width/6, height/4.5);

//Time before Title will disappear
setTimeout(changeBackground, 3500);

for(let i = 0; i <= 20; i++){
    back[i] = new Ovals(random(1,1000), random(1,100), random(360), random(1,5), random(5,20));
  }
}

function draw() {
  fill(0, 102, 153);
 text("So... You Suck at Coding", width/6, height/3.5);


  if (animating == true){
        back[i].display();
        back[i].move();
          // basic animation shown on video
    // ellipse(random(width), random(height), random(50,200))
     setTimeout(changeBackground, 2500);
  }
}
          // fill(250, 245, 225)

  
  //   }
  // }




function randomizer(){
  animating = false;
  
    if(response[0]){
      background(random(200,255),random(200,255),random(200,255));
      randomIndex = int(random(response.length));
      fill(response[randomIndex].color);
      text(response[randomIndex].name, width/6, height/3);
      response.splice(randomIndex, 1);
    }
    
      else {
        background(0);
        fill(255);
        text("You've Hit the End of the Road", width/6, height/3);
   }
}
function changeBackground(){
    if (counter <=5){
    counter++;

    background(random(200,255),random(200,255),random(200,255));
    setTimeout(changeBackground, 1500);
  }
  else{

  } 
}

function mousePressed(){
  animating = true;
  setTimeout(randomizer, 1500);
}
