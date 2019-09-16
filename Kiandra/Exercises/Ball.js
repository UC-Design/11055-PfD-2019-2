var ballw = 20
var ballh = 20

function setup() {
    createCanvas (400, 400);
    background (141,159,138);
}

function draw() {
    
    if (mouseIsPressed) {
        fill (255);
        ellipse (mouseX, mouseY, ballw, ballh);
        ballw++;
        ballh++;
    }
   
}
