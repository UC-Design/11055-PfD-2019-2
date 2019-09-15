function setup() {
    // Create the canvas
    createCanvas(720, 400);
    background(37, 53, 105);
    fill(40, 60, 104);


    // Set colors
    stroke(13, 89, 132);

}

function draw() {

    // Right leg
    rect(350, 260, 30, 120);

    // left leg
    rect(300, 260, 30, 120);

    // Torso
    ellipse(340, 220, 90, 160)

    // Shoulders
    ellipse(340, 160, 130, 80)

    // Left Arm
    ellipse(280, 220, 30, 150)

    // Right Arm
    ellipse(400, 220, 30, 150)

    // Head
    ellipse(340, 110, 90, 60)

    // Mouth
    ellipse(340, 130, 20, 5)

    // Left Eye
    ellipse(320, 100, 20, 20)

    // Left Eye ball
    ellipse(320, 100, 10, 10)

    // Right Eye
    ellipse(360, 100, 20, 20)

    // Right Eye ball
    ellipse(360, 100, 10, 10)


}
