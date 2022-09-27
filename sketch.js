function setup() {
  createCanvas(800, 600);
  noLoop();
}

function draw() {
  background(220);
  noFill();
  square(0, 200, 200);
  drawNetherWhatIDontKnow();
}

function drawNetherWhatIDontKnow() {
  translate(0, 200);
  noStroke();
  
  // Grey
  fill(100, 50, 50);
  square(20, 30, 10);
  
  // Black
  fill(0, 0, 0);
  rect(25, 100, 50,25);
  rect(125, 100, 50, 25);
  rect(50, 150, 100, 25);
  

  
}
