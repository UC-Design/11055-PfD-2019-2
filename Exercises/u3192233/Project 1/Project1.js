// setup variables

// setup drawing canvas for p5.js
function setup() {
    createCanvas(720, 720);
}
// drawing items
function draw() {
    background(230);
// draw smile
    stroke('black');
    fill('white');
    strokeWeight(2);
    arc(340, 340, 80, 80, 0, PI + QUARTER_PI, CHORD);
// draw eyes
    stroke('white');
    ellipse(300, 270, 80, 60);
    ellipse(420, 270, 80, 60);
    stroke('black');
    strokeWeight(30);
    point(300, 270);
    point(420, 270);
// draw eyebrows
    stroke('black');
    strokeWeight(6);
    noFill();
    arc(295, 240, 100, 80, PI + QUARTER_PI, TWO_PI);
    arc(420, 240, 100, 80, PI, TWO_PI - QUARTER_PI);
// artistic outline of head
    stroke('red');
    strokeWeight(6);
    line(0, 0, 40, 720);
    line(0, 0, 80, 720);
    line(0, 0, 120, 720);
    line(0, 0, 160, 720);
    line(0, 0, 200, 720);
    line(0, 0, 240, 720);
    line(0, 0, 280, 720);
    line(0, 0, 320, 720);
    line(0, 0, 360, 720);
    line(0, 0, 400, 720);
    line(0, 0, 200, 330);
    line(0, 0, 190, 280);
    line(0, 0, 190, 240);
    line(0, 0, 190, 200);
    line(0, 0, 200, 180);
    line(0, 0, 220, 160);
    line(0, 0, 240, 140);
    line(0, 0, 260, 135);
    line(0, 0, 280, 130);
    line(0, 0, 300, 130);
    line(0, 0, 340, 130);
    line(0, 0, 380, 130);
    line(0, 0, 420, 130);
    line(0, 0, 720, 180);
    line(0, 0, 720, 140);
    line(0, 0, 720, 100);
    line(0, 0, 720, 60);
    line(0, 0, 720, 20);
    line(720, 0, 640, 720);
    line(720, 0, 600, 720);
    line(720, 0, 560, 720);
    line(720, 0, 520, 720);
    line(720, 0, 480, 720);
    line(720, 0, 440, 720);
    line(720, 0, 400, 720);
    line(720, 0, 360, 720);
    line(720, 0, 320, 720);
    line(720, 0, 520, 330);
    line(720, 0, 530, 280);
    line(720, 0, 530, 240);
    line(720, 0, 530, 200);
    line(720, 0, 520, 180);
    line(720, 0, 500, 160);
    line(720, 0, 480, 140);
    line(720, 0, 460, 135);
    line(720, 0, 440, 130);
    line(720, 0, 420, 130);
    line(720, 0, 380, 130);
    line(720, 0, 340, 130);
    line(720, 0, 0, 180);
    line(720, 0, 0, 140);
    line(720, 0, 0, 100);
    line(720, 0, 0, 60);
    line(720, 0, 0, 20);
// draw body with a see through shirt
    stroke('white');
    let c = color(0, 126, 255, 200);
    fill(c);
    rect(100, 480, 500, 360, 30);
}