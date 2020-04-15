var drawing; []
var firebase;
var mouseX,mouseY;
var X,Y;

function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(0);  
  drawSprites();

  if(mouseIsPressed){
var point = {
  x = mouseX,
  y = mouseY
}
drawing.push(point);
  }
  beginShape ();
  stroke(255);
  strokeWeight(4);
canvus.setAnimation("background.jpg");


  for (var i =0; i < drawing.length; i++){
vertex (drawing [i].x ,drawing [i].y )
  }
  endShape ();
  
}







