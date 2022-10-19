
let things = [{
  event: "Watch Scary Movie",
  condition: "at 12 am"
}, {
  event: "Order Food",
  condition: "that's not on the menu"
}, {
  event: "Shout Out",
  condition: " 'I am an idiot' in public"
}, {
  event: "Do Push Up",
  condition: "with one thinger"
}, {
  event: "House Cleaning",
  condition: "for a month"
}, {
  event: "Take out the trash",
  condition: "for two weeks"
}]



let randomIndex;
let animating = false;



function setup(){
	createCanvas(600, 600);
	background(200);
  textSize(32);

text("click here to accept your faith", 50, 50);

}


function draw(){

if (animating == true){
    fill(128, 0,0);
strokeWeight(1);
  ellipse(random(width),random(height), random(50,200));

}

}
function randomizer(){
  animating = false;
    if (things[0]){
    background(random(200,255));
      fill(7,7,7);
    randomIndex = int(random(things.length));
   text(`${things[randomIndex].event}
    ${things[randomIndex].condition}`, 50, 50);
    // text(things[randomIndex].event + "'s favortute condition is " + things[randomIndex].condition, 50, 50);
  things.splice(randomIndex, 1);
  }else{
    background(random(200,255));
    text("nothing left!", 50, 50);
  }
}
function mousePressed(){
animating = true;
setTimeout(randomizer,2000);

}
