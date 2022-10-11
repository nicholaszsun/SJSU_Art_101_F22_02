let dogs = ["Holly", "Polly", "Molly", "Abby", "Gabby", "Jabby"];

function setup() {
    createCanvas(600, 600);
    background(200);

    dogs[0] = "Holly Healer";
    dogs[1] = "Polly Popper";
    dogs[2] = "Molly Maris";
    dogs[3] = "Abby Apple";
    dogs[4] = "Gabby Gatsby"
    dogs[5] = "Jabby Jolly";
    //console.log(dogs);

    console.log("initial array is ");
    console.log(dogs);

    dogs.pop();
    console.log("array after pop");
    console.log(dogs);

    dogs.push("Abby")
    console.log("array after push");
    console.log(dogs);
}

function draw (){

}