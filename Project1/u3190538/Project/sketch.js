// Sets scenery colour variables
var skyColour = "#001933";
var starColour = "#ffffff";
var skylineColour = "#001121";
var groundColour = "#000810";
var lightPoleColour = "#000000";

// Sets body colour variables
var hairColour = "#562618";
var skinColour = "#ffc2af";
var neckColour = "#dea491";
var hoodieColour = "#0066ff";
var stringColour = "#ffffff";
var shirtColour = "#ffffff";
var laptopColour = "#b1b1b1";
var pantsColour = "#2a2a2a";
var sockColour = "#7b7b7b";
var shoeColour = "#4e4e4e";
var laceColour = "#c4c4c4";

// The following function initialises the canvas, sets a background colour and disables outlines on shapes
function setup() {
  createCanvas(600, 720);
  background(skyColour);
  noStroke();
}

// The following function draws the components of the image
function draw() {
  // The following code changes the colours to daytime when a key is pressed
  if (keyIsPressed === true) {
    fill("#7CD1FF");
    rect(0, 0, 600, 720);
    starColour = "#7CD1FF";
    skylineColour = "#4A7D99";
    lightPoleColour = "#0F0F1C";
    groundColour = "#071523";
  }

  // Draws stars and sets colour
  fill(starColour);
  rect(456, 40, 8, 8);
  rect(560, 104, 8, 8);
  rect(88, 64, 8, 8);
  rect(160, 144, 8, 8);
  rect(440, 168, 8, 8);
  rect(48, 216, 8, 8);
  rect(536, 232, 8, 8);

  // Draws skyline and sets colour
  fill(skylineColour);
  rect(0, 248, 8, 56);
  rect(8, 272, 8, 32);
  rect(16, 288, 16, 16);
  rect(32, 264, 8, 40);
  rect(40, 256, 8, 48);
  rect(48, 280, 24, 24);
  rect(72, 296, 8, 8);
  rect(104, 296, 16, 8);
  rect(120, 280, 40, 24);
  rect(136, 272, 8, 8);
  rect(144, 264, 8, 16);
  rect(160, 296, 8, 8);
  rect(176, 288, 24, 16);
  rect(304, 280, 24, 24);
  rect(312, 264, 8, 16);
  rect(392, 296, 8, 8);
  rect(400, 280, 16, 24);
  rect(408, 264, 8, 16);
  rect(432, 296, 80, 8);
  rect(448, 280, 32, 16);
  rect(456, 256, 8, 24);
  rect(528, 288, 16, 16);
  rect(552, 272, 16, 32);
  rect(568, 296, 8, 8);
  rect(576, 280, 16, 48);
  rect(592, 248, 8, 56);
  rect(0, 304, 600, 256);

  // Draws ground and sets colour
  fill(groundColour);
  rect(0, 560, 600, 168);

  // Draws light pole and sets colour
  fill(lightPoleColour);
  rect(328, 544, 88, 16);
  rect(344, 272, 56, 272);
  rect(352, 80, 40, 192);
  rect(360, 56, 24, 24);
  rect(352, 40, 32, 16);
  rect(224, 32, 144, 16);
  rect(224, 48, 64, 8);

  // Draws shoes and sets colour
  fill(shoeColour);
  rect(216, 552, 104, 8);
  rect(216, 536, 88, 16);

  // Draws laces and sets colour
  fill(laceColour);
  rect(240, 536, 24, 8);
  rect(256, 544, 16, 8);
  rect(288, 536, 24, 8);
  rect(304, 544, 16, 8);

  // Draws socks and sets colour
  fill(sockColour);
  rect(216, 528, 40, 8);
  rect(264, 528, 40, 8);

  // Draws pants and sets colour
  fill(pantsColour);
  rect(216, 440, 40, 88);
  rect(264, 440, 40, 88);
  rect(216, 392, 88, 48);

  // Draws shirt and sets colour
  fill(shirtColour);
  rect(240, 296, 40, 96);

  // Draws neck and sets colour
  fill(neckColour);
  rect(224, 264, 56, 32);

  // Draws face and sets colour
  fill(skinColour);
  rect(216, 216, 80, 40);
  rect(224, 256, 72, 8);
  rect(232, 264, 64, 8);
  rect(240, 272, 48, 8);

  // Draws hair and sets colour
  fill(hairColour);
  rect(216, 200, 16, 40);
  rect(224, 240, 8, 8);
  rect(224, 240, 8, 8);
  rect(224, 192, 16, 32);
  rect(232, 184, 64, 32);
  rect(296, 192, 8, 24);

  // Draws hoodie and sets colour
  fill(hoodieColour);
  rect(200, 272, 24, 8);
  rect(192, 280, 40, 8);
  rect(200, 288, 40, 48);
  rect(192, 296, 8, 8);
  rect(184, 304, 16, 32);
  rect(280, 280, 24, 120);
  rect(304, 304, 24, 104);
  rect(304, 288, 8, 16);
  rect(312, 296, 8, 8);

  // Draws strings and sets colour
  fill(stringColour);
  rect(224, 288, 8, 56);
  rect(288, 288, 8, 56);

  // Draws and rotates laptop and sets colour
  push();
  fill(laptopColour);
  rotate(PI / 3);
  rect(400, -60, 70, 100);
  pop();

  // Draws arm and sets colour
  fill(hoodieColour);
  rect(184, 328, 40, 32);
  rect(192, 360, 40, 16);
  rect(200, 368, 40, 16);
  rect(208, 384, 32, 8);

  // Draws hands and sets colour
  fill(skinColour);
  rect(240, 360, 16, 32);
  rect(256, 368, 8, 24);
  rect(296, 408, 32, 16);
  rect(304, 424, 24, 8);
}

// This function draws a star at the mouse position when the mouse is clicked
function mouseClicked() {
  fill(starColour);
  rect(mouseX, mouseY, 8, 8);
}
