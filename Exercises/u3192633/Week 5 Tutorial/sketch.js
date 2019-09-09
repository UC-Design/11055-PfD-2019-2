/*function setup() {}

function draw() {
  ellipse(50, 50, 80, 80);
}*/

var stop = "red";
var amber = "grey";
var go = "grey";
var counter = 0;

function setup() {
  createCanvas(200, 320);
}

function draw() {
  background("grey");
  fill("black");
  rect(25, 20, 150, 280);
  fill(stop);
  ellipse(100, 80, 60, 60);
  fill(amber);
  ellipse(100, 160, 60, 60);
  fill(go);
  ellipse(100, 240, 60, 60);
}

function mouseClicked() {
  if (mouseY <= 320 && mouseX <= 200) {
    if (counter == 0) {
      counter = 1;
      stop = "grey";
      amber = "yellow";
    } else if (counter == 1) {
      counter = 2;
      amber = "grey";
      go = "green";
    } else if (counter == 2) {
      counter = 0;
      go = "grey";
      stop = "red";
    }
  }
}
