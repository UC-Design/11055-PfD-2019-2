//Variable called  dots for background shapes position using an arrayx
var dot = {
    x: 110,
    y: 50,
}

//Variable for colours of shapes using an array
var col = {
    r: 255,
    g: 0,
    b: 0
}

function setup() {
    createCanvas(800, 800);
    background(140, 140, 140);
}

function draw() {
    //Selects random colours for the ellipses
    col.r = random(75, 255);
    col.g = random(0, 255);
    col.b = random(100, 150);
    //Draw multiple ellipses and fills background
    dot.x = random(0, width);
    dot.y = random(0, height);
    fill(col.r, col.g, col.b, 100);
    ellipse(dot.x, dot.y, 24, 24);

    //Draw Face using rect
    fill(255, 229, 204);
    strokeWeight(2);
    rect(252, 175, 295, 400);

    //Draw Beard using the strokeJoin Function to connect points
    fill(32, 32, 32);
    strokeWeight(2);
    strokeJoin(BEVEL);
    beginShape();
    vertex(250, 285);
    vertex(225, 500);
    vertex(275, 700);
    vertex(525, 700);
    vertex(575, 500);
    vertex(550, 285);
    vertex(525, 475);
    vertex(450, 450);
    vertex(400, 465);
    vertex(350, 450);
    vertex(275, 475);
    vertex(250, 285);
    endShape();

    //Draw mouth using a ellipse
    fill(255, 255, 255);
    strokeWeight(2);
    ellipse(400, 525, 125, 30);

    //Drawing left and right eyebrow with ellipse
    fill(64, 64, 64);
    strokeWeight(2);
    ellipse(325, 250, 100, 40);
    ellipse(480, 245, 100, 40);

    //Drawing Nose using quad Function
    fill(255, 229, 204);
    strokeWeight(2);
    quad(380, 300, 360, 425, 435, 425, 425, 290);

    //Draw Glasses using strokeJoin Function to connect from points
    fill(255, 255, 0);
    strokeWeight(2);
    strokeJoin(BEVEL);
    beginShape();
    vertex(250, 250);
    vertex(550, 235);
    vertex(555, 265);
    vertex(545, 270);
    vertex(530, 350);
    vertex(445, 360);
    vertex(415, 295);
    vertex(380, 300);
    vertex(360, 370);
    vertex(280, 370);
    vertex(260, 280);
    vertex(250, 280);
    vertex(250, 250);
    endShape();

    //Drawing Top of Hat using arc Function
    fill(32, 32, 32);
    strokeWeight(2);
    arc(400, 150, 300, 275, PI, TWO_PI);

    //Drawing rim of hat using quadraticVertex
    fill(32, 32, 32);
    strokeWeight(2);
    beginShape();
    vertex(200, 150);
    quadraticVertex(400, 50, 595, 150);
    line(595, 150, 555, 200);
    vertex(555, 200);
    quadraticVertex(400, 180, 240, 200);
    line(240, 200, 200, 150);
    endShape();



}
