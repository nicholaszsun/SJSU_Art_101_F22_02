let tasks = [];



  let walls = [];
  let timeTables = [];
  let textPos = [];
  let fontSize = 20;
  let mood;
  let chaos = [],
    order = [];


  let b_avgW, b_bd, b_avgWd;

  let run_flag = false;
  
  function setup() {
    frameRate(60);
    createCanvas(800, 800);
    background(220);
    mood = createVector(0,0);


    makeButtons();
  
    textSize(fontSize);
  
    rectMode(CENTER);
    textAlign(CENTER);


    text("↓↓↓HOW SHOULD I PROGRESS MY DAY↓↓↓",width/2,height/2);
  


    
    
  
    
  }


 
  let pt;
  function draw() {

    if(run_flag){

   
      clear();
      walls = [];
      background(checkMoodForBG());
      
      
      drawTable();
      moveNoise();
      updateMap();
    }
   

    
  }

  function softReset(wkt,slt){
      
    tasks = randomOrder(tasks);
    genTimeTable(wkt, slt, tasks); 
    calcTextPos();
    calcStress(); 
    run_flag = true;
}


  function calcTextPos(){
    textPos = [];
    for (let i in tasks) {
      let offset = createVector(
        height / (tasks.length + 2),
        width / (tasks.length + 2)
      );
      let temp = int(random(3));
  
      textPos.push(
        createVector(
          width / 4 + offset.x + temp * offset.x,
          offset.y + i * offset.y
        )
      );
    }
  }

  function checkMoodForBG(){
    if(mood.x > mood.y){
      return random(100,180);
    } else {
      return "rgb(144, 188, 222)";
    }
  }

  function calcStress(){
    mood.x = 0;
    mood.y = 0;
    stress = false;
    chaos = [];
    order = [];

    for (let i in tasks) {
      if (tasks[i].m < 0){
        mood.x += tasks[i].m;
      } else {
        mood.y += tasks[i].m;
      }
    }

    mood.x = abs(mood.x);
  
  
    for (let i = 0; i < mood.x; i ++) {
      chaos.push(new Ray(random(width), random(height)));
    }

    for (let i =0; i < int(ceil(mood.y/10)); i++){
      order.push(new Sun(random(width), random(height)));
    }

      
      
    }
    
  
  function moveNoise(){
    for (let i in chaos){
      chaos[i].pos.x = constrain(chaos[i].pos.x + int(random(-mood.x/5,mood.x/5)), 0 , width);
      chaos[i].pos.y = constrain(chaos[i].pos.y + int(random(-mood.x/5,mood.x/5)), 0 , height);
    }    

    for (let i in order){
      order[i].pos.x = constrain(order[i].pos.x + int(random(-mood.y/20,mood.y/20)), 0 , width);
      order[i].pos.y = constrain(order[i].pos.y + int(random(-mood.y/20,mood.y/20)), 0 , height);
    } 

   

    for (let i in textPos) {
        textPos[i].x = constrain(textPos[i].x + int(random(-mood/10,mood/10)), 0 , width);
        textPos[i].y = constrain(textPos[i].y + int(random(-mood/10,mood/10)), 0 , height);
    }
  }





  function drawTable() {
    //drawline between each task
    
    for (let i = 0; i < textPos.length; i++) 
    {
      strokeWeight(5);
      stroke("red");
      if (textPos[i + 1] != undefined) {
        line(textPos[i].x, textPos[i].y, textPos[i + 1].x, textPos[i + 1].y);
      }
      
      strokeWeight(2);
      stroke(0);
  
      fill(255);
      rect(
        textPos[i].x,
        textPos[i].y - ptPxConv(fontSize) / 5,
        ((tasks[i].c.length + timeTables[i].length) * ptPxConv(fontSize)) / 2,
        ptPxConv(fontSize)
      );
  
      rect_c(
        textPos[i].x,
        textPos[i].y - ptPxConv(fontSize) / 5,
        ((tasks[i].c.length + timeTables[i].length) * ptPxConv(fontSize)) / 2,
        ptPxConv(fontSize)
      );
  
      fill(0);
      noStroke();
      text(timeTables[i] + "    " + tasks[i].c, textPos[i].x, textPos[i].y);
    }
  }
  
  function updateMap() {
   
    let checkDup = [];
    let checkstat;
    stroke(0);
    strokeWeight(1);
    noFill();
    for (let i in chaos){
      ellipse(chaos[i].pos.x, chaos[i].pos.y, 10)
      ellipse(chaos[i].pos.x, chaos[i].pos.y, 20)
    }
    
    for (let i in chaos) {
    checkstat = false;
      for (let j in chaos) {
          
        checkDup.push([i,j]);
    
        
        for (let check in checkDup){
          if(checkDup[check].includes(i) && checkDup[check].includes(j)){
            checkstat = true;
            break;
          }
      }
          
          

        let intersect = false;
        for (let wall in walls) {
          if (chaos[i].cast(walls[wall], chaos[j].pos.x, chaos[j].pos.y)) {
            intersect = true;
            break;
          }
        }

          if (!intersect) {
          stroke(random(100,120));
          line(chaos[i].pos.x, chaos[i].pos.y, chaos[j].pos.x, chaos[j].pos.y);
          }
        }
      }



      rect_c(width/2,height/2,width,height);
      for (let i in order){
          order[i].look(walls);
          order[i].show();
      }
    } 
  
  
 

  function genTimeTable(wakeUp, sleep, _tasks) {
    timeTables = [];
    let timeNow = wakeUp;
    for (let i in _tasks) {

        timeNow += _tasks[i].t;

      if (i != _tasks.length- 1 && timeNow < sleep) {
        
        timeTables.push(`${timeConv(timeNow-_tasks[i].t)} to ${timeConv(timeNow)}`);
      } else if (i == _tasks.length- 1 && timeNow < sleep){

        timeTables.push(`${timeConv(timeNow-_tasks[i].t)} til next day`);
      }
      
      
      else {
        timeTables.push(
          `${timeConv(timeNow-_tasks[i].t)} to ${timeConv(timeNow)} (OVERTIME!!!)`
        );
      }
    }
  }
  

  function timeConv(time){
    let temp = str(time).split("");

    if(int(temp[2]) >= 6){
      temp.splice(1,1,str(int(temp[1])+1));
      temp.splice(2,1,str(int(temp[2]-6)));
    }
  return int(temp.join(""));

  }



  function ptPxConv(pt) {
    return ceil((pt / 72) * 96);
  }
  
  function randomOrder(arr) {
    let temp = arr;
    let output = [];
  
    while (temp.length > 2) {
      let index = int(random(1,temp.length-1));

  
      output.push(temp[index]);
  
      temp.splice(index, 1);
    }

    output.unshift(arr[0]);
    output.push(arr[arr.length-1]);
  
    return output;
  }
  
  //make rect out of boundary class from raycast.js
  //this will help to determine the connection of dots.
  function rect_c(x, y, w, h) {
    //x y will be at the center of the rect, since using rectMode CENTER
  
    //a --- b
    //|     |
    //c --- d
  
    //ab
    walls.push(new Boundary(x - w / 2, y - h / 2, x + w / 2, y - h / 2));
    //cd
    walls.push(new Boundary(x - w / 2, y + h / 2, x + w / 2, y + h / 2));
    //ac
    walls.push(new Boundary(x - w / 2, y - h / 2, x - w / 2, y + h / 2));
    //bd
    walls.push(new Boundary(x + w / 2, y - h / 2, x + w / 2, y + h / 2));
  }
  