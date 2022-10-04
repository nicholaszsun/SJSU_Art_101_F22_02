function setup() {
    createCanvas(530, 530);
    }
    
    function draw() {
    let i= width/2;
    let j= height/1.70;
    let a= width/1;
    background(205,106,116);
      
      face ();
      body();
      rightWing ();
      leftWing ();
      bodyDecoration ();
      
    function face(){
       //face
      fill(174,104,128);
    ellipse (a*0.5,j*0.48,70,70);
    } 
      
    function body (){
      ellipse (i,j,40,300);
      fill (0,0,0);
      //noStroke ();
    }
      
    function rightWing (){
      fill	(255,255,255);
    //right wing
    ellipse (a,j,500,300);
    // elipse (x,y,size)
    };
    
    function leftWing (){
      fill (255,255,255);
      //left wing
    ellipse (a*0,j*0.98,500,300);
    }
    
    
      
    function bodyDecoration (){
      
     fill(174,104,128); 
    //coloring
    ellipse (a*0.7,j*0.955,200,100);
    ellipse (a*0.3,j*0.955,200,100);
    ellipse (a*0.049,j*0.955,50,50);
    ellipse (a*0.951,j*0.955,50,50);
      //body of butterfly
    } 
    //ellipse (i,j,40,300)
    //noStroke ()
    }
    
    
    
    