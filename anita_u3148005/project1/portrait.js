
function setup() {
    createCanvas(600, 400);
    ellipseMode(CENTER);
    rectMode(CENTER)
}

function draw() {
    background(200);
    if (mouseIsPressed) {
        drawPortrait();
    } else {
        showInstructions();
    }
}

function showInstructions() {
    textSize(30);
    fill(20);
    text("click to show the portrait...", 100, 253);
}

function drawPortrait() {
    noStroke();
    drawHair();
    drawFace();
    drawEars();
    drawEyes();
    drawNose();
    drawLips();
    drawEyebrows();
    drawNeck();
}

function drawHair() {
    fill(87, 60, 15);
    arc(300, 130, 120, 120, PI, TWO_PI);
    rect(300, 180, 120, 100);
}

function drawFace() {
    fill(255, 238, 222);
    arc(300, 150, 80, 100, 0, PI);
    rect(300, 140, 70, 20);
}

function drawEars() {
    ellipse(340, 150, 20, 20);
    ellipse(260, 150, 20, 20);
}
function drawEyes(){
    fill(87,60,15);
    ellipse(280,150,14,20);
    ellipse(320,150,14,20);
    fill(255);
    ellipse(280,155,8,10);
    ellipse(320,155,8,10);
}
function drawNose(){
    fill(181,101,29);
    ellipse(299,162,15,15);

}
function drawLips(){
    fill(255,0,0); 
    arc(300,186, 20, 20, PI, TWO_PI);
    }
function drawEyebrows(){
    stroke(87,60,15);
    strokeWeight(1);
    noFill();
    arc(280, 142, 20, 10, PI, TWO_PI, OPEN);
    arc(320, 142, 20, 10, PI, TWO_PI, OPEN);
    }
function drawNeck(){
    fill(255, 238, 222);
    noStroke();
    rect(300,200,25,20,5);
}
