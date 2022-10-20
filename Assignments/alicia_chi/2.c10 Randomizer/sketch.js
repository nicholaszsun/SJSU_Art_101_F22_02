
let feelings = [{
    name: "Sarrow", 
    color: "blue"
}, {
    name:"Anger", 
    color: "red"
}, {
    name:"Annoyance", 
    color: "purple"
}, {
    name:"Happiness",
     color: "yellow"
}, {
    name: "Disgust", 
    color:"green"
}, {
    name:"Neutral", 
    color:"grey"
}];

//--- Drawing
let drawdraw = true;
let second_hand;
let  minute_hand;
let  hour_hand;
let  am_or_pm;
let  clockRadius = 175;
let  secondLength = clockRadius - 20;
let  minuteLength = clockRadius - 60;
let  hourLength = clockRadius - 100;
let  secondWidth = 2;
let  minuteWidth = 5;
let  hourWidth = 10;
let  centerX;
let  centerY;

let face=[];
let faces;
let randomIndex;
let animating = false;
let imageCounter = 0;
let button;

function preload(){
    for (let i= 0; i<=15; i++){
        face[i] = loadImage(`images/face_${i}.jpg`);
        console.log(faces);
    }
}

function setup(){
    createCanvas (1500, 1000);
    background(200);

    centerX = 1250;
    centerY = 230;
  

    frameRate(6);
    text("Click Button to Start the Randomizer", width/2, height/2);

    button = createButton("Click to Randomize");
    button.mousePressed(buttonPressed);
   
}

function draw(){

    background('#F34343');
    stroke(2);

    if (drawdraw ==true){
        //------------------- Background -------------------\\
  translate(-680,-430); 
  painting_rect_verticle();
  translate(+680,+430);
  
  // Clock
  
  clockSurface();
  
  // Second Hand
  let  sec = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  strokeWeight(secondWidth)
  line( centerX, centerY, centerX + secondLength * cos(sec), centerY + secondLength * sin(sec) );
  
  // Minute Hand
  let  min = map(minute(), 0, 60, 0, TWO_PI) - HALF_PI;
  strokeWeight(minuteWidth)
  line(centerX, centerY, centerX + minuteLength * cos(min), centerY + minuteLength * sin(min));
  
  
  // Hour Hand
  let  hr = map(hour(), 0, 12, 0, TWO_PI) - HALF_PI;
  strokeWeight(hourWidth)
  line(centerX, centerY, centerX + hourLength * cos(hr), centerY + hourLength * sin(hr));
    
    //------------------- Person-------------------\\ 
  torso_base();
  neck();
  fill('#175FD9');
  ellipse(width/2, 450, 80, 50);
  rect(725, 450, 8, 40);
  rect(775, 450, 4, 90);
  fill('#DDC3C3') ;
  ellipse(width/2, 450, 20, 10);
  head_base();
      
    fill('#fff');
    rect(width/2 -90, height/2 -250, 180, 230)
    hair_front();
  
    //------------------- Foreground -------------------\\
  table();
  plate();
  lid();
  arm_L();
  arm_R(); 

    }

    if(animating==true){
        image(face[imageCounter], width/2 - 90 ,height/2- 250 );
      
        // clear();
        if(imageCounter < face.length + 1 ){
            imageCounter++;
        }else{
            imageCounter = 0;
        }
        

    }
   
}

function randomizer(){
    animating=false;

    if(feelings[0]){
    // background(random(255));
    randomIndex = int(random(feelings.length));
    console.log(feelings[randomIndex].name);
    //text(feelings[randomIndex].name + "'s mociated color is " + feelings[randomIndex].color, 50,50);
    image(random(face), width/2 - 90, height/2 -250);
    text(`The color ${feelings[randomIndex].name} associated is ${feelings[randomIndex].color}.`, width/2 - 90 ,height/2- 250);
    feelings.splice(randomIndex, 1);
   
}else{
    text("Nothing Left!", 50, 50);

}
}

function buttonPressed(){
animating = true;
setTimeout(randomizer, 2000);



}

function arm_R(){
    fill('#E18F34');
    beginShape();
    vertex(width/2 -400, 720);
    vertex(width/2 - 280, 720);
    vertex(width/2 -190, 905);
    vertex(width/2 - 580, 935);
    endShape();
    
    }
    
    function arm_L(){
      fill('#E18F34');
    beginShape();
    vertex(width/2 +400, 720);
    vertex(width/2 + 280, 720);
    vertex(width/2 +190, 905);
    vertex(width/2 + 580, 935);
    endShape();
    }
    
    function neck(){
      
    fill('#91405A'); 
    rect(width/2 - 40, 450, 80, 50);
    ellipse(width/2, 500, 80, 50);
    }
    
    function head_base(){
    fill('#F7A374') ;
    ellipse(width/2 , 308, 270, 330);
    ellipse(width/2 - 148, 355, 70,80);
    ellipse(width/2 + 148, 355, 70,80);
    fill('#000');
    ellipse(width/2 -180, height/2 - 300, 150, 120);
    ellipse(width/2 +180, height/2 - 300, 150, 120);
    }
    
    function torso_base(){
    strokeWeight(0);
    fill('#E3752C') ;
    rect(width/2 - 200, 520, 400, 500);
    fill('#E3752C');
    rect(width/2 - 200, 500, 400, 100);
    
    
    triangle(300, 810, 550, 500, width/2, 800);
    triangle(700, 810, 950, 500, width/2 + 400, 800);
    
    
      //Shape shoulders
    fill('#F34343');
    ellipse(550, 450, 300, 160);
    ellipse(950, 450, 300, 160);
      
    }
    
    function hair_front(){
    
    noStroke();
    fill('#000');
    rect(width/2 -60, height/2 - 240, 120, 40);
    arc(width/2 - 130, height/2 -290, 150, 250, 0, HALF_PI);
    arc(width/2 + 130, height/2 -290, 150, 250, HALF_PI, PI);
    arc(width/2, height/2 - 240, 280, 260, PI , TWO_PI);
    rect(width/2 +100, height/2 - 240, 40, 280);
    rect(width/2 -140, height/2 - 240, 40, 280);
    
    }
    
    function painting_rect_verticle(){
    strokeWeight(0);
    fill('#FAA923')
    rect(width/2, height/2, 300, 400,20);
    rect(width/2 + 110,height/2 -15,75,75);
    
    fill('#426B82')
    rect(width/2 + 15, height/2 + 15, 270, 370,10);
    
      fill('#FAA923');
    ellipse(width/2 +20 ,height/2 +20 , 25 , 25);
    ellipse(width/2 +20 ,height/2 +380 , 25 , 25);
    ellipse(width/2 +280 ,height/2 +380 , 25 , 25);
    ellipse(width/2 +280 ,height/2 +20 , 25 , 25);
    
    fill('#F34343');
    ellipse(width/2 ,height/2 , 35 , 35);
    ellipse(width/2, height/2 + 400, 35, 35);
    ellipse(width/2 + 300,height/2 + 400,35, 35);
      ellipse(width/2 + 300,height/2,35, 35);
    
      
    fill('#FAA923')
    rect(width/2 + 110,height/2 -15,75, 45);
    
    }
    
    function text_bg(){
        
    fill('#2E333A');
    rect(width/2 -450 , 50, 900, 100);
    }
    
    function table(){
      
    noStroke();
    fill('#2A2739');
    beginShape();
      vertex(0,900);
      vertex(0,1000);
      vertex(1500,1000);
      vertex(1500,900);
    endShape();
    
    }
    
    function lid(){
    fill('#2E333A');
    rect(480, 860, 540, 15, 15);
    arc(width/2, 870, 500, 500, PI , TWO_PI);
    ellipse(width/2, 620,40,20);
    ellipse(width/2, 600,20,20);
      
    }
    
    function plate(){
      fill('#fff');
    ellipse(width/2, 900, 300,25);
    fill('#fff');
    ellipse(width/2, 880, 600,35);
    }
    
    function mousePressed() {
      shape1.pressed();
      
    }
    
    function mouseReleased() {
      shape1.released();
     
    }
    
    function clockSurface() {
      fill('#E9D2D6');
      strokeWeight(2); 
      ellipse(centerX, centerY, clockRadius * 2, clockRadius * 2);
    
    }  
    
    
    function realSecond() {
      second_hand = second(); 
      second_hand = nf(second_hand, 2);
    }
    
    //Getting the real minute
    function realMinute() {
      minute_hand = minute();
      minute_hand = nf(minute_hand, 2);
    }
    
    //Getting the real hour
    function realHour() {
      hour_hand = hour();
    
      if (hour_hand >= 12) {
        am_or_pm = 'PM';
      } else {
        am_or_pm = 'AM';
      }
    
      // Creating 12 hour clock
      if (hour_hand > 12) {
        hour_hand = hour_hand - 12;
      }
    
      hour_hand = nf(hour_hand, 2);
    }
    
