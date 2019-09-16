function setup() {
    // Create the canvas
    createCanvas(720, 400);
    background(35, 53, 105);

    // Set colors
    fill(40, 60, 104);


    stroke(13, 89, 132);
}

function draw() {

    // Right leg
    rect
        (350, 260, 30, 120, 120, 120, 120);

    // left leg
    rect
        (300, 260, 30, 120, 120, 120, 120);

    // Torso
    ellipse
        (340, 220, 90, 160)

    // Shoulders
    ellipse
        (340, 160, 130, 80)

    // Left Arm
    ellipse
        (280, 220, 30, 150)

    // Right Arm
    ellipse
        (400, 220, 30, 150)

    // Head
    ellipse
        (340, 110, 90, 60)

    // Mouth
    ellipse
        (340, 130, 20, 5)

    // Left Eye
    ellipse
        (320, 100, 20, 20)

    // Left Eye ball
    ellipse
        (320, 100, 10, 10)

    // Right Eye
    ellipse(360, 100, 20, 20)

    // Right Eye ball
    ellipse(360, 100, 10, 10)


}


// Note: I had it planned to have a moon at the top left of the portrait which would play the sound of keyboard typing when clicked, however I was unable to add this in successfully to the JS code. Errors kept on appearing and I could work out why.

// class Button {
// constructor(x_, y_, r_) {
// Location and size
//this.x = 0_;
//this.y = 0_;
//this.r = 300;
// }
// Is a point inside the button?
//contains(mx, my) {
//return dist(mx, my, this.x, this.y) < this.r;
//}

// Button
//display(mx, my) {
//if (this.contains(mx, my)) {
//fill(130);
//} else {
//fill(255,255,255);
//}
//stroke(255,255,260);
//strokeWeight(4);
//ellipse(this.x, this.y, this.r, this.r);
//}
//}

// A sound file object
//let keyboard;

// Keyboard object (trigger the sound)
//let button;

//function setup() {
//createCanvas(x, y);

// Sound file.

//soundFormats('mp3', 'ogg');
//keyboard = loadSound('assets/doorbell.mp3');

// new key
//button = new Button(width / 2, height / 2, 64);
//}

//function draw() {
//background(255);
// Show the bvutton
//button.display(mouseX, mouseY);
//}

//function mousePressed() {
// Sound plays if pressed.
//if (button.contains(mouseX, mouseY)) {
//keyboard.play();
//}
//}
