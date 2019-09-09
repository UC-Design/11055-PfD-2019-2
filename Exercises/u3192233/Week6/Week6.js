// setup drawing canvas for p5.js
function setup() {
    createCanvas(360, 720);
}
// drawing items
function draw() {
//black background
    background(0);
    stroke(255);
    strokeWeight(4);
    circle(180, 360, 340);
// create if statement for mouse press
//    if (mouseIsPressed) {
//        fill('yellow');
//    } else {
//        fill('red');
//    }
}
var light = 'red'
function mouseClicked(){
    switch(light){
        case 'red':
            fill('green');
            light = 'green';
            break;
        case 'yellow':
            fill('red');
            light = 'red';
            break;
        case 'green':
            fill('yellow');
            light = 'yellow';
            break;
    }
}