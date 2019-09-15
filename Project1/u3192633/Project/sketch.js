//Setting Colours for the Stars in the Window
var star1 = "white";
var star2 = "white";
var star3 = "white";

//Colour and position of the code on the monitor
var codeColour1 = "purple";
var codeColour2 = "purple";
var codeColour3 = "purple";
var pos1 = 180;
var pos2 = 200;
var pos3 = 220;

//Colour for the Building and the Sky through the window
var buildingColour = "black";
var skyColour = "#000a32";

//Counter to keep track of day and night in the window
var counter = 0;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background("#f0f0f0");
  //Window to Animate
  fill("grey");
  rect(270, 90, 220, 160);
  fill(buildingColour);
  rect(280, 100, 200, 140);
  fill(skyColour);
  rect(280, 100, 40, 80);
  rect(320, 100, 60, 20);
  rect(380, 100, 30, 60);
  rect(410, 100, 40, 140);
  rect(450, 100, 30, 30);
  //Window Stars
  fill(star1);
  rect(420, 120, 10, 10);
  fill(star2);
  rect(400, 100, 10, 10);
  fill(star3);
  rect(300, 110, 10, 10);
  //Ikea Plant
  strokeWeight(0);
  fill("darkgrey");
  //Row One
  rect(80, 170, 10, 10);
  rect(90, 170, 10, 10);
  rect(100, 170, 10, 10);
  //Row Two
  rect(85, 180, 10, 10);
  rect(95, 180, 10, 10);
  //Leaves
  fill("green");
  rect(80, 160, 10, 10);
  rect(90, 160, 10, 10);
  rect(70, 150, 10, 10);
  rect(90, 150, 10, 10);
  rect(100, 140, 10, 10);
  //Desk
  fill("#262626");
  rect(25, 300, 450, 20);
  rect(25, 320, 15, 100);
  rect(460, 320, 15, 100);
  //Desktop Tower
  fill("#696969");
  rect(70, 190, 50, 110);
  //Monitor Chin
  rect(150, 250, 210, 10);
  //Monitor Screen
  fill("#1e1e1e");
  rect(150, 170, 210, 80);
  //Monitor Code Lines
  fill(codeColour1);
  rect(170, pos1, 120, 10);
  fill(codeColour2);
  rect(170, pos2, 30, 10);
  fill(codeColour3);
  rect(170, pos3, 60, 10);

  //Chair with Person
  //Person
  fill("#FFDBAC"); //Skin Colour
  rect(240, 240, 10, 10);
  rect(250, 240, 10, 10);
  rect(260, 240, 10, 10);
  rect(240, 230, 10, 10);
  fill("#FF5733"); // Hair Colour
  rect(250, 230, 10, 10);
  fill("#FFDBAC"); //Skin Colour
  rect(260, 230, 10, 10);
  fill("#FF5733"); // Hair Colour
  rect(240, 220, 10, 10);
  rect(250, 220, 10, 10);
  rect(260, 220, 10, 10);
  rect(240, 210, 10, 10);
  rect(250, 210, 10, 10);
  rect(260, 210, 10, 10);
  rect(240, 200, 10, 10);
  rect(250, 200, 10, 10);
  rect(260, 200, 10, 10);
  rect(230, 200, 10, 10);
  rect(270, 200, 10, 10);
  rect(230, 210, 10, 10);
  rect(270, 210, 10, 10);
  rect(230, 190, 10, 10);
  rect(240, 190, 10, 10);
  rect(250, 190, 10, 10);
  rect(260, 190, 10, 10);
  rect(270, 190, 10, 10);
  rect(240, 180, 10, 10);
  rect(250, 180, 10, 10);
  rect(260, 180, 10, 10);
  //Chair
  fill("black");
  //Row 1
  rect(230, 250, 10, 10);
  rect(240, 250, 10, 10);
  rect(250, 250, 10, 10);
  rect(260, 250, 10, 10);
  rect(270, 250, 10, 10);
  //Row 2
  rect(220, 260, 10, 10);
  rect(230, 260, 10, 10);
  rect(240, 260, 10, 10);
  rect(250, 260, 10, 10);
  rect(260, 260, 10, 10);
  rect(270, 260, 10, 10);
  rect(280, 260, 10, 10);
  //Row 3
  rect(220, 270, 10, 10);
  rect(230, 270, 10, 10);
  rect(240, 270, 10, 10);
  rect(250, 270, 10, 10);
  rect(260, 270, 10, 10);
  rect(270, 270, 10, 10);
  rect(280, 270, 10, 10);
  //row 4
  rect(220, 280, 10, 10);
  rect(230, 280, 10, 10);
  rect(240, 280, 10, 10);
  rect(250, 280, 10, 10);
  rect(260, 280, 10, 10);
  rect(270, 280, 10, 10);
  rect(280, 280, 10, 10);
  //row 5
  rect(220, 290, 10, 10);
  rect(230, 290, 10, 10);
  rect(240, 290, 10, 10);
  rect(250, 290, 10, 10);
  rect(260, 290, 10, 10);
  rect(270, 290, 10, 10);
  rect(280, 290, 10, 10);
  //row 6
  rect(220, 300, 10, 10);
  rect(230, 300, 10, 10);
  rect(240, 300, 10, 10);
  rect(250, 300, 10, 10);
  rect(260, 300, 10, 10);
  rect(270, 300, 10, 10);
  rect(280, 300, 10, 10);
  //row 7
  rect(220, 310, 10, 10);
  rect(230, 310, 10, 10);
  rect(240, 310, 10, 10);
  rect(250, 310, 10, 10);
  rect(260, 310, 10, 10);
  rect(270, 310, 10, 10);
  rect(280, 310, 10, 10);
  //row 8
  rect(220, 320, 10, 10);
  rect(230, 320, 10, 10);
  rect(240, 320, 10, 10);
  rect(250, 320, 10, 10);
  rect(260, 320, 10, 10);
  rect(270, 320, 10, 10);
  rect(280, 320, 10, 10);
  //row 9
  rect(220, 330, 10, 10);
  rect(230, 330, 10, 10);
  rect(240, 330, 10, 10);
  rect(250, 330, 10, 10);
  rect(260, 330, 10, 10);
  rect(270, 330, 10, 10);
  rect(280, 330, 10, 10);
  //row 10
  rect(220, 340, 10, 10);
  rect(230, 340, 10, 10);
  rect(240, 340, 10, 10);
  rect(250, 340, 10, 10);
  rect(260, 340, 10, 10);
  rect(270, 340, 10, 10);
  rect(280, 340, 10, 10);
  //row 11
  rect(220, 350, 10, 10);
  rect(230, 350, 10, 10);
  rect(240, 350, 10, 10);
  rect(250, 350, 10, 10);
  rect(260, 350, 10, 10);
  rect(270, 350, 10, 10);
  rect(280, 350, 10, 10);
  //row 12
  rect(210, 360, 10, 10);
  rect(220, 360, 10, 10);
  rect(230, 360, 10, 10);
  rect(240, 360, 10, 10);
  rect(250, 360, 10, 10);
  rect(260, 360, 10, 10);
  rect(270, 360, 10, 10);
  rect(280, 360, 10, 10);
  rect(290, 360, 10, 10);
  //row 13
  rect(210, 370, 10, 10);
  rect(220, 370, 10, 10);
  rect(230, 370, 10, 10);
  rect(240, 370, 10, 10);
  rect(250, 370, 10, 10);
  rect(260, 370, 10, 10);
  rect(270, 370, 10, 10);
  rect(280, 370, 10, 10);
  rect(290, 370, 10, 10);
  //row 14
  rect(250, 380, 10, 10);
  rect(250, 390, 10, 10);
}

//Code Scrolling on the Montitor
function mouseWheel(event) {
  print(event.delta);

  //Add scroll wheel position to code position
  //Divided scoll wheel by 10 to make smaller adjustments with clicky mouse wheels
  pos1 += event.delta / 10;
  pos2 += event.delta / 10;
  pos3 += event.delta / 10;

  if (pos1 < 170) {
    pos1 = 240;
  } else if (pos2 < 170) {
    pos2 = 240;
  } else if (pos3 < 170) {
    pos3 = 240;
  } else if (pos1 > 240) {
    pos1 = 170;
  } else if (pos2 > 240) {
    pos2 = 170;
  } else if (pos3 > 240) {
    pos3 = 170;
  }
}

//Function to change window time of day from night and day
function mouseClicked() {
  if (counter == 0) {
    counter = 1;
    skyColour = "lightblue";
    buildingColour = "grey";
  } else if (counter == 1) {
    counter = 0;
    skyColour = "#000a32";
    buildingColour = "black";
  }
}
