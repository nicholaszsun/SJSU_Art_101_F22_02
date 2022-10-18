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

  function setup() {
    createCanvas(600, 600);
    background(200);
   
  }
  
  function draw(){
    
  }

  function mousePressed() {
    background(random(200, 255));
    randomIndex = int(random(owls.length));
    text(owls[randomIndex].name, 50, 50);
    owls.splice(randomIndex, 1);
  }