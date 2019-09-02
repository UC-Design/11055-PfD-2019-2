// setup drawing canvas for p5.js
function setup() {
    createCanvas(720, 480);
}
// drawing items
function draw() {
    ellipse(50, 50, 80, 80);
    line(1, 1, 100, 100);
    
// create if statement for mouse press
    if (mouseIsPressed) {
        rect(1, 1, 100, 100);
        stroke('black');
        strokeWeight(10);
    } else {
// makes all strokes red from the beginning
        stroke('red');
    }
    rect(mouseX, mouseY, 120, 200);
}