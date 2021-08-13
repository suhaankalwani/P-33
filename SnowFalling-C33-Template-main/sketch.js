var bg 
var fall



function preload () {
  var bg = snow2.jpg
  var fall = snow4.webp

  
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  bg = snow2.jpg
  fall = snow4.webp


  
  drawSprites();
  

}
