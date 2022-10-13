let input, button, greeting;

function setup() {
  // create canvas
 createCanvas(400, 400);
	

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(50, 5);

  textAlign(CENTER);
  textSize(100);
}
function draw(){
  //greet()
 // background (random(255), random(244), random(244));
  
}
function greet() {
  const name = input.value();

  greeting.html('hello ' + name + '!');

  input.value('');

  for (let i = 0; i < 20; i++) {
    push();
    fill(random(255), random(244), random(244));
    translate(random(width),(height));
    rotate(random(2* PI));
    text(name, 100, 0);
    pop();
  }
}
