function setup() {
  createCanvas(800, 600);
  noLoop();
}

function draw() {
  background(220);
  noFill();
  square(0, 200, 200);
  drawNetherWhatIDontKnow();
  drawCow();
  drawEnderMite();
  drawSlime();
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
  
  translate(0, -200);
  
}


function drawCow() {
  translate(600, 0);
  noStroke();
  fill(0, 0, 0);
  square(0,75, 25);
  
  fill(0, 0, 0);
  square(175, 75, 25);
  
  fill(255, 255, 255); 
  square(25, 75, 25)
  
  fill(255, 255, 255);
  square(150, 75, 25)
  
  fill(211, 211, 211); 
  square(0, 50, 25);
  
  fill(211, 211, 211); 
  square(25, 50, 25);
  
  fill(211, 211, 211); 
  square(150, 50, 25)
  
  fill(211, 211, 211); 
  square(175, 50, 25);
  
  fill(62, 38 ,45); 
  square(0, 100, 25)
  
   fill(62, 38 ,45); 
   square(0, 125, 25)
  
   fill(62, 38 ,45); 
   square(0, 150, 25)

   fill(62, 38 ,45); 
   square(0, 175, 25)

   fill(62, 38 ,45); 
   square(175, 100, 25)

   fill(62, 38 ,45); 
   square(175, 125, 25)

   fill(52, 42 ,32); 
   square(175, 150, 25)

   fill(62, 38 ,45); 
   square(175, 175, 25)
  
  translate(-600, 0);
}


function drawEnderMite() {
  translate(400, 400);

  noFill();
  strokeWeight(1);
  square(0, 0, 200);
  square(20, 20, 160)


  strokeWeight(0)
  fill(50, 0, 75)
  rect(50, 60, 100, 80)

  fill(100, 0, 0)
  rect(80, 70, 40, 20)

  translate(-400, -400)    
  }

function drawSlime() {
  translate(0, 0);
  
  noFill()
  strokeWeight(1);
  square(0, 0, 200);
  square(20, 20, 160)
  
  strokeWeight(0)
  fill(50, 200, 100)
  square(20, 20, 160)
  
  fill(50, 175, 75)
  square(40, 40, 120)
  square(20, 100, 20)
  square(160, 120, 20)
  square(80, 20, 20)
  square(80, 160, 20)
  
  fill(50, 100, 50)
  square(40, 60, 40)
  
  square(120, 60, 40)
  
  square(100, 120, 20)
  
  translate(0, 0);
}
