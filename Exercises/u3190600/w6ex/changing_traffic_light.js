function setup() {
    createCanvas(640,480);
    background("blue");

}

function draw() {
    if (mouseIsPressed) {
        textSize (20);
        text (('X='+mouseX+" Y="+mouseY),mouseX, mouseY);
        fill(255,0,255);