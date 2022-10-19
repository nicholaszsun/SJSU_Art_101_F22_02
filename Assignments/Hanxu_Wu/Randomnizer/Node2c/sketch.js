//My Bunnies

let Bunnies = [{
  name:"Spaghetti",
  color:"yellow"
},{
  name:"Chocolate",
  color:"brown"
},{
  name:"Pizza",
  color:"orange"
},{
  name:"Marshmallow",
  color:"white"
},{
  name:"Tiramisu",
  color:"beige"
},{
  name:"Bread",
  color:"sesame"
},];

let randomIndex;

function setup() {
    createCanvas(400, 400);
    background(255, 255, 183);

  }
  
  function draw() {
    
  }

function mousePressed(){
  background(random(200,255));
  randomIndex= int(random(Bunnies.Length));
  //console.log(Bunnies.Length);
  //console.log(Bunnies[int(random(Bunnies.length))].name);
  //console.log(Bunnies[randomIndex].name);
  text(Bunnies[randomIndex].name,50,50);
  Bunnies.splice(randomIndex,1);

}
  