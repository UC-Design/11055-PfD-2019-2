// setup drawing canvas for p5.js
function setup() {
    createCanvas(360, 720);
}
// drawing items
function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);
    circle(180, 360, 340);
}
// creating variable for light colour
var light = 'red'
function mouseClicked(){
// switch case to rotate through light
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