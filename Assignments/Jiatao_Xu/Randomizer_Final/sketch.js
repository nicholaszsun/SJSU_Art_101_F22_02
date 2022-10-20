let tasks = [
    {
        c: "wake up",
        m: 0,
        t: 30,
    },
    {
        c: "Do Homework",
        m: 0,
        t: 100,
    },
  
    {
        c: "Eat Lunch",
        m: 10,
        t: 45,
    },
  
    {
        c: "Play Video game",
        m: 0,
        t: 45,
    },
  
    {
        c: "Watch Youtube",
        m: 0,
        t: 125,
    },
  
    {
        c: "Do Chores",
        m: 0,
        t: 127,
    },

    {
        c: "sleep",
        m: 0,
        t: 30,
    }
  ];

  let walls = [];
  let timeTables = [];
  let textPos = [];
  let fontSize = 20;
  let mood = 0,
    stressed = false;
  let chaos = [],
    order = [];
  
  function setup() {
    frameRate(60);
    createCanvas(800, 800);
    background(220);
  
    textSize(fontSize);
  
    genTimeTable(1000, 2200, tasks);
  
    rectMode(CENTER);
    textAlign(CENTER);
  
    tasks = randomOrder(tasks);
  
    //draw out tasks and related time
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
  
  
    //calc stress
    for (let i in tasks) {
      mood += tasks[i].m;
    }
  
    if (mood < 0) {
      stressed = true;
      mood = abs(mood);
    } else if (mood > 0) {
      stressed = false;
    }
  
    for (let i = 0; i < mood; i++) {
      if (stressed) {
        chaos.push(new Ray(random(width), random(height)));
      } else {
        order.push(new Sun(random(width), random(height)));
      }
    }
  
    
  }
  
  let pt;
  function draw() {
    clear();
    walls = [];
    background(220);
    
    
    drawTable();
    moveNoise();
    updateMap();

    
  }
  
  function moveNoise(){
    if(stressed){
        for (let i in chaos){
            chaos[i].pos.x = constrain(chaos[i].pos.x + int(random(-mood/5,mood/5)), 0 , width);
            chaos[i].pos.y = constrain(chaos[i].pos.y + int(random(-mood/5,mood/5)), 0 , height);
        }    
    } else {
        for (let i in order){
            order[i].pos.x = constrain(order[i].pos.x + int(random(-mood/5,mood/5)), 0 , width);
            order[i].pos.y = constrain(order[i].pos.y + int(random(-mood/5,mood/5)), 0 , height);
        } 
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
    if(stressed){
        let checkDup = [];
        let checkstat;
        stroke(0);
        strokeWeight(1);
        
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
            line(chaos[i].pos.x, chaos[i].pos.y, chaos[j].pos.x, chaos[j].pos.y);
            }
        }
        }
    }

    else{
        rect_c(width/2,height/2,width,height);
        for (let i in order){
            order[i].look(walls);
            order[i].show();
        }
    } 
  }
  
 

  function genTimeTable(wakeUp, sleep, _tasks) {
    timeTables = [];
    let timeNow = wakeUp;
    for (let i in _tasks) {

        timeNow += _tasks[i].t;

      if (timeNow < sleep) {
        
        timeTables.push(`${timeConv(timeNow-_tasks[i].t)} to ${timeConv(timeNow)}`);
      } else {
        timeTables.push(
          `${timeConv(timeNow-_tasks[i].t)} to ${timeConv(timeNow)} (${
            timeConv(timeNow) - sleep
          } hr OVERTIME!)`
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
  