let theImages;
let theImages2;
let preBuffer;
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
 // background (random(255),random(244));


}
function display_random_image() 
{  

     let theImages = [{
      // palm
        src: "https://munozartcenter.weebly.com/uploads/1/4/0/3/140308339/serena-light-jpg-0125_orig.jpg",
        width: "1000",
        height: "1000"
    }, { //ball
        src: "https://munozartcenter.weebly.com/uploads/1/4/0/3/140308339/dsc-0187_orig.jpg",
        width: "1000",
        height: "1000"
    },{ //car
      src: "https://munozartcenter.weebly.com/uploads/1/4/0/3/140308339/themission-jpeg-0083_orig.jpg",
      width: "1000",
      height: "1000"
  }, { //mom
        src: "https://munozartcenter.weebly.com/uploads/1/4/0/3/140308339/themission-jpeg-0071_orig.jpg",
        width: "1000",
        height: "1000"
    }];
    
    let preBuffer = [];
    for (let i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
let newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
let images = document.getElementsByTagName('img');
let l = images.height;
for (let p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
//display the image  
document.body.appendChild(newImage);
}function display_random_image2(){
  let theImages2 = [{
    //palm
     src: "https://munozartcenter.weebly.com/uploads/1/4/0/3/140308339/dsc-0121_orig.jpg",
     width:"1000",
    height:"1000"
 }, { // Ball
     src: "https://munozartcenter.weebly.com/uploads/1/4/0/3/140308339/texture-serena-3_orig.jpg",
     width: "1000",
     height: "1000"
 },{ // car
   src: "https://munozartcenter.weebly.com/uploads/1/4/0/3/140308339/dsc-0083_orig.jpg",
   width: "1000",
   height: "1000"
}, { //
     src: "https://munozartcenter.weebly.com/uploads/1/4/0/3/140308339/dsc-0071_orig.jpg",
     width: "1000",
     height: "1000"
 }];
 
 let preBuffer = [];
 for (let i = 0, j = theImages2.length; i < j; i++) {
     preBuffer[i] = new Image();
     preBuffer[i].src = theImages2[i].src;
     preBuffer[i].width = theImages2[i].width;
     preBuffer[i].height = theImages2[i].height;
 }

// create random image number
function getRandomInt(min,max) 
 {
   //  return Math.floor(Math.random() * (max - min + 1)) + min;
 
imn = Math.floor(Math.random() * (max - min + 1)) + min;
 return preBuffer[imn];
 }  

// 0 is first image,   preBuffer.length - 1) is  last image

let newImage = getRandomInt(0, preBuffer.length - 1);

// remove the previous images
let images = document.getElementsByTagName('img');
let l = images.length;
for (let p = 0; p < l; p++) {
 images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);

}