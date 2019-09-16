// setup variables
// background variable
let bgvalue = 230;
// name array
let myName = ['Morgan', 'MORGAN', 'MoRgAn', 'Nagrom'];
// integer for name array
let i = 0;

// setup drawing canvas for p5.js
function setup() {
    createCanvas(720, 720);
}

// drawing items
function draw() {
    background(bgvalue);
    // mouse controlled yellow circle used to highlight
    noStroke();
    fill('gold');
    strokeWeight(6);
    circle(mouseX, mouseY, 400);
    // invisible text
    noStroke();
    fill(230);
    textSize(50);
    text(myName[i], 250, 80);
    // draw invisible head
    stroke(230);
    circle(360, 270, 300);
    // draw smile
    stroke('black');
    fill('white');
    strokeWeight(2);
    arc(340, 340, 80, 80, 0, PI + QUARTER_PI, CHORD);
    // draw eyes
    stroke('white');
    ellipse(300, 270, 80, 60);
    ellipse(420, 270, 80, 60);
    stroke('green');
    strokeWeight(30);
    point(300, 270);
    point(420, 270);
    // draw eyebrows
    stroke('maroon');
    strokeWeight(6);
    noFill();
    arc(295, 240, 100, 80, PI + QUARTER_PI, TWO_PI);
    arc(420, 240, 100, 80, PI, TWO_PI - QUARTER_PI);
    // draw body with a see through shirt
    stroke('white');
    let c = color(0, 126, 255, 200);
    fill(c);
    rect(100, 480, 500, 360, 30);
}

// mouse click function
function mouseClicked(){
    // changing background value between 0 and 230
    if (bgvalue === 230){
        bgvalue = 0;
        // iterating name integer to change or reset for entirity of array
        if (i < myName.length - 1){
            i++;
        } else{
            i = 0;
        }
    } else{
        bgvalue = 230;
    }
        
}