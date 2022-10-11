let things = [{
    name:"3ae",
    color: "3ac"
}, {
    name:"xanh",
    color:"3xa"
}, {
    name: "mi",
    color:"3mi"
}, {
    name:"hom",
    color:"3hom"
}, {
    name:"che",
    color:"3che"
}, {
    name:"bot",
    color:"3bot"
}];

let randomIndex;

function setup (){
    createCanvas(windowWidth,windowHeight);
    background(200);


    randomIndex = int(random(things.length));
    // console.log(things.length);
    
    console.log(things[randomIndex].name);



    // console.log("initially array is")
    // console.log(things);
// console.log(things[int(random(things.length))].name)
// }

//write classes in root directory of project under .js
//console.log(dogs[int(random(things.length))].name)
//
}

function draw(){

}