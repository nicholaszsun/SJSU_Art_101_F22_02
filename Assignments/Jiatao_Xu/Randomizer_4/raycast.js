//https://www.youtube.com/watch?v=TOEi6T2mtHo
//145 2d raycast 
//by the coding train

//https://editor.p5js.org/jiatao.xu/sketches/WN5znpaSs




///////////////////////////////////



class Boundary {
    constructor(x1,y1,x2,y2){
      
      
      this.a = createVector(x1,y1);
      this.b = createVector(x2,y2);
    }
    
    show(){
      stroke(0);
      line(this.a.x,this.a.y,this.b.x,this.b.y);
    }
    
    
  }
  
  
  ////////////////////////////////////////////
  //ray class from coding train
  //this will be the sun rays

  class Ray_s{
    
    constructor(x,y,angle){
      this.pos = createVector(x,y);
      this.dir = p5.Vector.fromAngle(angle)
    }
    
    
    cast(wall) {
      
      //line segment of wall
      const x1 =wall.a.x;
      const y1 =wall.a.y;
      const x2 =wall.b.x;
      const y2 =wall.b.y;
      
      //line segment(-ish) of ray
      const x3 = this.pos.x;
      const y3 = this.pos.y;
      const x4 = this.pos.x + this.dir.x
      const y4 = this.pos.y + this.dir.y
      
      
      //https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
      // the following formulas and if statement are to check if the ray intersect with the given wall.
      
      const den = (x1-x2)*(y3-y4)-(y1-y2)*(x3-x4);
        if(den ==0){
          return;
        }
      
      const t = ((x1-x3)*(y3-y4)-(y1-y3)*(x3-x4))/den;
      const u = -((x1-x2)*(y1-y3)-(y1-y2)*(x1-x3))/den;
      
       if(t > 0 && t < 1 && u>0){

        const pt = createVector();
        pt.x = x1+t *(x2 - x1);
        pt.y = y1+t * (y2 -y1);

         
        
        return pt;
      } else {
        return;
      }
      
      
    }
    
     
    
    
    
  }




  ////////////////////////////////////////////
  //modified for noise gen
  //this is for the noise ray trianglation.
  
  class Ray{
    
    constructor(x,y){
      this.pos = createVector(x,y);
      
      
      
    }
    
    
    cast(wall,_x4,_y4) {
      
      //line segment of wall
      const x1 =wall.a.x;
      const y1 =wall.a.y;
      const x2 =wall.b.x;
      const y2 =wall.b.y;
      
      //line segment(-ish) of ray
      const x3 = this.pos.x;
      const y3 = this.pos.y;
      const x4 = _x4;
      const y4 = _y4;
      
      
      //https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
      // the following formulas and if statement are to check if the ray intersect with the given wall.
      
      const den = (x1-x2)*(y3-y4)-(y1-y2)*(x3-x4);
        if(den ==0){
          return;
        }
      
      const t = ((x1-x3)*(y3-y4)-(y1-y3)*(x3-x4))/den;
      const u = -((x1-x2)*(y1-y3)-(y1-y2)*(x1-x3))/den;
      
       if(t > 0 && t < 1 && u>0 && u <1){
         
        //for debug only, this show the point of intersection
        // const pt = createVector();
        // pt.x = x1+t *(x2 - x1);
        // pt.y = y1+t * (y2 -y1);
        // ellipse(pt.x,pt.y,10);
         
        
        return true;
      } else {
        return false;
      }
      
      
    }
    
     
    
    
    
  }

 

  class Sun {
    constructor(x,y) {
      this.pos = createVector(x,y);
      this.rays = [];
      let rays = 90;
      for (let a = 0; a < 359.9; a += 360 / rays) {
        this.rays.push(new Ray_s(this.pos.x, this.pos.y, radians(a)))
      }
    }
    
    look(walls) {
      for (let ray of this.rays) {
        let closest = null;
        let record = Infinity;
        
        for (let wall of walls) {
          let pt = ray.cast(wall);
          if (pt) {
            const d = p5.Vector.dist(this.pos, pt);
            if (d < record) {
              closest = pt;
              record = d;
            }
          }
        }
        
        if (closest) {
          stroke("rgba(255,255,0,0.20)");
          strokeWeight(5);
          line(this.pos.x, this.pos.y, closest.x, closest.y);
        }
      }
    }
    
    show() {
      noStroke();
      fill("yellow");
      ellipse(this.pos.x, this.pos.y, 16);

      noFill();
      stroke("yellow");
      strokeWeight(1);
      for (let i = 0; i < 5; i++){
        ellipse(this.pos.x, this.pos.y, 30*i+50);
      }
    }
  }