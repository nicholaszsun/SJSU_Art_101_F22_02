function makeButtons (){
    //buttons
    b_avgWd = createButton("Average Weekday");
    b_avgWd.mousePressed(()=> 
    {
        tasks = AvgWkday.slice(0); 
        softReset(1000,2300);
    });
    
    b_bd = createButton("Work Rush!");
    b_bd.mousePressed(()=> 
    {
        tasks = busyD.slice(0); 
        softReset(1200,2300);
    });

    b_avgW = createButton("Average Weekend");
    b_avgW.mousePressed(()=> 
    {
        tasks = AvgWkd.slice(0); 
        softReset(1300,2400);
    });
   
}