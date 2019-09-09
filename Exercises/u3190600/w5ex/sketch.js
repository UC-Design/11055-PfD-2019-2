function setup() {
    createCanvas(640,480);
    background(255, 204, 0);

}

function draw() {
    if (mouseIsPressed) {
        fill('#66ff99');
    } else {
        fill('#99e6ff');

    }
    
    ellipse(mouseX,mouseY,80,80);
}