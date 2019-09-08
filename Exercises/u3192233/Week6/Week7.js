// setup drawing canvas for p5.js
function setup() {
}
// drawing items
function draw() {
// create if statement for mouse press
    if (mouseIsPressed) {
//        strokeWeight(10);
    } else {
// makes all strokes red from the beginning
        stroke('red');
    }
    line(mouseX, mouseY, 120, 200);
}