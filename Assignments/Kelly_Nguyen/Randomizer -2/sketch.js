
let randomIndex;
let counter = 0;
let cheddar = false;
let button;
let j;

let cats = [];

function preload(){
    for (let i =0; i <= 15; i++){
        cats[i] = loadImage('assets/cat_'+i+'.jpg')
    }
}

function setup (){
    createCanvas(windowWidth,windowHeight);
    background(200);
// text("ClickClack", 50,50);
// setInterval(changeBackground, 1000);
//set time out is expecting a function (change background is the function in this
//case)
    button = createButton('click me');
    button.position(50,50);
    button.mousePressed(buttonPressed);
    console.log(cats);
}

function draw(){
    if(cheddar== true){
        let k = int(random(14))
        image(cats[k],0,0);
    }

}


function changeBackground(){
    if (counter <=5){
        counter++;
        background(random(255),random(255),random(255));
        } else {
    }
}


function loading(){
    if(cats[14]){
    //background(random(255));
    randomIndex = int(random(cats.length));
    // text(things[randomIndex].name,50,50);
    cats.splice(randomIndex, 1);
    } else{
        background(255)
        text("STOP CLICKING FAST",50,50)
    }
}

function buttonPressed(){
    cheddar = true;
    j = int(random(15));
    setTimeout(loading,10);
    console.log(j);
}

//myclass into array -> my array dot one as an element of array n call as random