let dogs = ["Holly", "Polly", "Molly", "Abby", "Gabby", "Jabby"];

function setup() {
    createCanvas(600, 600);
    background(200);
    //dogs[0] = "Holly Healer";
    //dogs[1] = "Polly Popper";

    console.log("initial array is")
    console.log(dogs);

    dogs.splice(4,1);
    console.log("array after splice")
    console.log(dogs);
 

}

function draw (){

}