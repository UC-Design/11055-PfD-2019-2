function setup() {
  createCanvas(400, 300);
  background(250, 250, 100);
  
}

function draw() {
  
  
//GREEN RECTANGLE, Animate Later
    rectMode(CENTER);
    fill(0, 255, 0);
    //stroke(0, 0, 255);
    noStroke();
    rect(200, 150, 150, 150);
    strokeWeight(10);
  
//RED CIRCLE, Animate Later
    ellipseMode(CENTER);
    fill(255, 200, 200);  
    //stroke(0, 0, 255);
    noStroke();
    ellipse(mouseX, mouseY, 100, 75);
    strokeWeight(10);
}
