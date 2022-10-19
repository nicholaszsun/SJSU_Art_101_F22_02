let randomIndex;
let cheddar = false;
let button;
let j;
let imageCounter =0;
let cats = [];

function preload(){
    for (let i =0; i <= 15; i++){
        cats[i] = loadImage('assets/cat_'+i+'.jpg')
    }
}

function setup (){
    createCanvas(windowWidth,windowHeight);
    background(200);

    button = createButton('click me');
    button.position(50,50);
    button.mousePressed(buttonPressed);
    console.log(cats);
    imageMode(CENTER);
    frameRate(7);
}

function draw(){

    if(cheddar== true){
        clear();
        // let k = int(random(14))
        image(cats[imageCounter],width/2,height/2);

        if(imageCounter < cats.length -1){
        imageCounter++;
        }else {
            imageCounter = 0;
        }
        console.log(imageCounter)
    }
//
}





function loading(){
    cheddar = false
if (cats[0]){
    clear ();
    randomIndex= int(random(cats.length));
    image(random(cats),width/2,height/2);
    cats.splice(randomIndex,1);
    } else{
        // image(random(cats,width/2,height/2))
        background(255,255,255)
        text("STOP CLICKING FAST",50,500)

    }
}

function buttonPressed(){
    cheddar = true;
    j = int(random(15));
    setTimeout(loading,10);
    console.log(j);
}