let flowers = [
    {
        name: "rose",
        color: "red"
  }, {
        name: "daisy",
        color: "white"
  }, {
        name: "dandelion",
        color: "yellow"
  }, {
        name: "lily",
        color: "pink"
    }];

let randomIndex;

function setup() {
      createCanvas(600, 600);
      background(200);

      randomIndex = int(random(flowers.length));

      console.log(flowers[randomIndex].name);
      text(flowers[randomIndex].name, 50, 50);
      
      flowers.splice(randomIndex, 1)
      console.log(flowers)
}

function draw(){

};

function mousePressed(){
      background(random(200, 255));

      randomIndex = int(random(flowers.length));

      console.log(flowers[randomIndex].name);
      text(flowers[randomIndex].name, 50, 50);
      
      flowers.splice(randomIndex, 1)
      console.log(flowers)
      }