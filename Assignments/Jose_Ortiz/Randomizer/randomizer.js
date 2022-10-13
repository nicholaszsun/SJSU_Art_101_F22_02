let names = [{name:"Alice", color:"blue"},{name:"Sylph",color:"green"}Sora","Quez"];

function setup() {
  createCanvas(400, 400);
  background(220);

  randomIndex = int(random(names.length));
  Text(names[randomIndex].name,50,50);
  dogs.splice(random.index,1);  
}

function draw() {
}

function mousePressed({

  if(names[0]) {
    background(random(200,225))
    randomIndex = int(random(names.length));
    Text(names[randomIndex].name,50,50);
    names.splice(random.index,1); 
} else{
    background(random(200,255));
    Text("nothing left!,50,50");
}
}