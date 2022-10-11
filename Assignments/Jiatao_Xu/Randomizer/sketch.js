let sentences = [
    {
      sentence: "Are you suggesting coconuts migrate?",
      fcolor: "red",
    }, 
    {
      sentence: "First shalt thou take out the Holy Pin. Then shalt thou count to three, no more no less. Three shalt be the number thou shalt count, and the number of the counting shalt be three. Four shalt thou not count, neither count thou two, excepting that thou then proceed to three. Five is right out. Once the number three, being the third number, be reached, then lobbest thou thy Holy Hand Grenade of Antioch towards thou foe, who being naughty in my sight, shall snuff it.",
      fcolor: "yellow",
    },
    {
      sentence: "Come and see the violence inherent in the system!  HELP, HELP, I'M BEING REPRESSED!",
      fcolor: "orange",
    }
    
    
    
    
  ]
  
  
  function setup() {
    createCanvas(800, 800);
    
    let temp = int(random(sentences.length));
    
    
    
    background(sentences[temp].fcolor);
    textSize(15);
    textWrap(WORD);
    
    let textPos = createVector(int(random(width)),int(random(height)))
    text(sentences[temp].sentence,textPos.x,textPos.y, width-textPos.x,height-textPos.y);
    
    
  }
  
  