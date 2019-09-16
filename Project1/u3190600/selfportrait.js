let value = "#ff4d88";

function setup() {
    createCanvas(640,480);
    background("#66a3ff");
}

function draw() {
   
    /*Hair
    Draw an arc to form the block of hair in the middle
    behind where the face will be positioned
    Fill with a dark brown */
    noStroke()
    fill("#4d2600");
    arc(320, 340, 280, 500, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);

    /*Face
    Draw an ellipse to form the face in the center horizontally
    Fill with a skin colour tone*/
    noStroke()
    fill("#ffc34d");
    ellipse(320, 250, 200, 260);

    /*Ears
    Draw the ears equally on the left and right side of the face
    Fill with the same colour as the face*/
    noStroke()
    fill("#ffc34d");
    arc(220, 265, 40, 60, 0, PI + HALF_PI + HALF_PI); //left
    arc(420, 265, 40, 60, 0, PI + HALF_PI + HALF_PI); //right

    /*Left Earring
    Draw the left earring in front of the block of hair on the left ear
    Draw the circle stud on the ear lobe*/
    noStroke ();
    fill ("#d6d6c2");
    ellipse (220, 285, 10, 10);
    
    //Draw the dangling part connected to the circle stud
    stroke("#d6d6c2"); 
    noFill();
    strokeWeight(4);
    bezier(220, 287, 220, 310, 220, 320, 220, 330);

    /*Right Earring
    Draw the right earring in front of the block of hair on the right ear
    Draw the circle stud on the ear lobe*/
    noStroke ();
    fill ("#d6d6c2");
    ellipse (420, 285, 10, 10);

    //Draw the dangling part connected to the circle stud
    stroke("#d6d6c2"); 
    noFill();
    strokeWeight(4);
    bezier(420, 287, 420, 310, 420, 320, 420, 330);
    
    //Hair
    //Draw blocks of hair covering the top of the face to create the hair on top of the head.
    noStroke()
    fill ("#4d2600") 
    quad(260, 120, 350, 120, 269, 163, 230, 176);  //left top part of hair
    quad(215, 185, 320, 110, 265, 183, 220, 235);  //left bottom part of hair
    quad(380, 140, 430, 200, 280, 150, 330, 110);  //right top part of hair
    quad(430, 210, 420, 230, 330, 160, 410, 180);  //right bottom part of hair
    
    //Nose
    //Draw nose in the middle of the face
    fill("#ffb31a")
    triangle (320, 270, 330, 300, 310, 300); 
    
    //Mouth
    //Draw mouth in the middle underneath the nose
    fill("#ff5050");
    arc(320, 325, 49, 35, 0, PI);

    /*Eyeshadow
    Draw eyeshadow behind where the eyes will be positioned 
    slightly higher and to the side of the nose. 
    Need to draw the eyeshadow first so that it sits behind the eye not in front*/
    stroke(249, 67, 6, 130);
    strokeWeight(6);
    arc(270, 255, 45, 15, PI, TWO_PI, OPEN); //left
    arc(370, 255, 45, 15, PI, TWO_PI, OPEN); //right
    arc(270, 257, 40, 30, HALF_PI, PI); //left
    arc(370, 257, 40, 30, 0, HALF_PI); //right

    //Eyebrows
    //Draw the eyebrows above the eyeshadow in a small arch shape
    stroke(21, 19, 19);
    strokeWeight(3);
    noFill();
    arc(270, 235, 45, 15, PI, TWO_PI, OPEN); //left
    arc(370, 235, 45, 15, PI, TWO_PI, OPEN); //right

    //Eyes
    //Draw the eyes over the eyeshadow
    strokeWeight(1)
    fill(32, 19, 19);
    ellipse(270, 260, 28, 25); //left
    ellipse(370, 260, 28, 25); //right
    
    /*Eyeballs
    Draw the eyeballs inside the eye circles.
    Draw offcenter and near the top of the eye*/
    noStroke()
    fill(255)
    ellipse(267, 252, 8, 8); //left
    ellipse(366, 252, 8, 8); //right

    //Shirt
    //Draw the shirt with a rectangle 
    fill(value);
    rect(230, 400, 180, 150, 20);

    /*Neck
    Draw the neck with a rounded corner rectangle 
    This will create the neckline of the shirt
    Match the colour with the face and ears*/
    fill("#ffc34d");
    rect(295, 360, 50, 55, 20);
      
    //Hair
    //Draw the hair detailing - highlights
    //Light brown streaks of hair falling in front of left ear
    stroke("#b35900"); 
    noFill();
    strokeWeight(2);
    bezier(335, 123, 250, 150, 230, 265, 230, 430, 270, 450);
    bezier(330, 124, 245, 161, 215, 266, 225, 440, 265, 455);
    bezier(325, 125, 240, 162, 210, 267, 220, 430, 260, 460);

    //Dark streaks of hair falling in front of left ear
    stroke ("#663300"); 
    noFill();
    strokeWeight(2);
    bezier(337, 113, 252, 160, 222, 245, 222, 460, 272, 400);
    bezier(332, 114, 247, 161, 217, 246, 217, 461, 265, 401);
    bezier(327, 115, 242, 162, 212, 247, 212, 462, 260, 402);

    //Light brown streaks of hair on top of head to the left
    stroke("#b35900"); 
    noFill();
    strokeWeight(2);
    bezier(315, 95, 230, 115, 185, 185, 190, 420, 190, 400);
    bezier(325, 105, 255, 130, 235, 185, 230, 220, 230, 220);
    bezier(325, 100, 255, 125, 235, 180, 220, 233, 220, 233);
    bezier(315, 100, 245, 125, 225, 180, 210, 238, 210, 238);
    bezier(335, 110, 275, 125, 245, 180, 240, 218, 240, 218);

    //Dark brown streaks of hair on top of head to the left
    stroke("#663300"); 
    noFill();
    strokeWeight(2);
    bezier(330, 95, 235, 115, 180, 185, 195, 420, 195, 400);
    bezier(310, 105, 240, 130, 220, 185, 215, 220, 215, 220);
    bezier(310, 100, 240, 125, 220, 180, 205, 233, 205, 233);
    bezier(300, 100, 230, 125, 210, 180, 195, 238, 195, 238);
    bezier(330, 100, 260, 125, 230, 180, 225, 218, 225, 218);

    //Light brown streaks of hair on top of head to the right 
    stroke("#b35900"); 
    noFill();
    strokeWeight(2);
    bezier(325, 95, 395, 105, 415, 185, 430, 200, 430, 200);
    bezier(325, 100, 395, 115, 415, 195, 435, 215, 435, 215);
    bezier(325, 105, 395, 125, 418, 205, 435, 220, 432, 220);
    bezier(335, 115, 395, 135, 418, 215, 438, 235, 438, 235);
    bezier(335, 125, 395, 145, 418, 230, 438, 240, 438, 240);
    bezier(315, 130, 355, 145, 418, 215, 438, 235, 438, 235);
    bezier(305, 140, 355, 150, 418, 220, 438, 240, 438, 240);
    bezier(295, 150, 355, 165, 418, 235, 438, 240, 438, 240);

    //Dark brown streaks of hair on top of head to the right
    stroke("#663300"); 
    noFill();
    strokeWeight(2);
    bezier(325, 100, 395, 110, 415, 190, 430, 205, 430, 205);
    bezier(325, 105, 395, 120, 415, 200, 435, 220, 435, 220);
    bezier(325, 110, 395, 130, 418, 210, 435, 225, 432, 225);
    bezier(335, 120, 395, 140, 418, 220, 438, 240, 438, 240);
    bezier(335, 130, 395, 150, 418, 235, 438, 245, 438, 245);
    bezier(325, 130, 385, 150, 418, 235, 438, 245, 438, 245);
    bezier(315, 135, 355, 150, 418, 220, 438, 240, 438, 240);
    bezier(305, 145, 355, 155, 418, 225, 438, 245, 438, 245);

    //Light brown streaks of hair behind shoulders on the left
    stroke("#b35900"); 
    noFill();
    strokeWeight(2);
    bezier(206, 289, 200, 350, 202, 400, 200, 450, 200, 450);
    bezier(201, 282, 195, 350, 197, 400, 195, 440, 195, 440);
    bezier(214, 294, 208, 350, 210, 400, 208, 450, 208, 450);
    bezier(236, 325, 238, 360, 238, 365, 240, 402, 240, 402);
    bezier(246, 341, 248, 360, 248, 365, 250, 399, 250, 399);
    bezier(256, 351, 258, 360, 258, 365, 260, 399, 260, 399);
    bezier(266, 360, 270, 370, 268, 375, 270, 399, 270, 399);
    bezier(276, 368, 278, 374, 278, 375, 280, 399, 280, 399);
    bezier(286, 374, 290, 382, 288, 385, 290, 399, 290, 399);

    //Dark brown streaks of hair behind shoulders on the left
    stroke("#663300"); 
    noFill();
    strokeWeight(2);
    bezier(205, 292, 195, 350, 197, 400, 195, 450, 195, 450);
    bezier(200, 288, 190, 350, 192, 400, 190, 440, 190, 440);
    bezier(213, 295, 203, 350, 205, 400, 203, 450, 203, 450);
    bezier(235, 330, 235, 360, 233, 365, 235, 402, 235, 402);
    bezier(245, 345, 245, 360, 243, 365, 245, 399, 245, 399);
    bezier(255, 355, 255, 360, 253, 365, 255, 399, 255, 399);
    bezier(265, 364, 265, 370, 263, 375, 265, 399, 265, 399);
    bezier(275, 370, 275, 370, 273, 375, 275, 399, 275, 399);
    bezier(285, 375, 285, 382, 283, 385, 285, 399, 285, 399);

    //Light brown streaks of hair behind shoulders on the right
    stroke("#b35900"); 
    noFill();
    strokeWeight(2);
    bezier(410, 152, 460, 250, 452, 400, 440, 450, 440, 450);
    bezier(432, 290, 425, 350, 437, 400, 435, 455, 435, 455);
    bezier(415, 296, 408, 350, 410, 400, 415, 450, 415, 450);
    bezier(400, 330, 398, 360, 398, 365, 400, 402, 400, 402);
    bezier(390, 345, 388, 360, 388, 365, 390, 399, 390, 399);
    bezier(380, 355, 378, 360, 378, 365, 380, 399, 380, 399);
    bezier(370, 364, 370, 370, 368, 375, 370, 399, 370, 399);
    bezier(360, 370, 360, 370, 358, 375, 360, 399, 360, 399);
    bezier(350, 375, 350, 382, 348, 385, 350, 399, 350, 399);
    bezier(442, 270, 435, 350, 457, 400, 445, 455, 445, 455);
    bezier(425, 296, 418, 350, 430, 400, 425, 450, 425, 450);

    //Dark brown streaks of hair behind shoulders on the right
    stroke("#663300"); 
    noFill();
    strokeWeight(2);
    bezier(410, 152, 465, 250, 457, 400, 445, 450, 445, 450);
    bezier(432, 290, 430, 350, 442, 400, 440, 455, 440, 455);
    bezier(437, 290, 435, 350, 447, 400, 445, 455, 445, 455);
    bezier(415, 296, 413, 350, 415, 400, 420, 450, 420, 450);
    bezier(400, 330, 403, 360, 403, 365, 405, 402, 405, 402);
    bezier(390, 345, 393, 360, 393, 365, 395, 399, 395, 399);
    bezier(380, 355, 383, 360, 383, 365, 385, 399, 385, 399);
    bezier(370, 364, 375, 370, 373, 375, 375, 399, 375, 399);
    bezier(360, 370, 365, 370, 363, 375, 365, 399, 365, 399);
    bezier(350, 375, 355, 382, 353, 385, 355, 399, 355, 399);
}

 /* Shirt
 Changing the colour
 Click within the image to change the value (colour)
of the shirt after the mouse has been clicked */
function mouseClicked() {
    if (value == "#ff4d88") {
        value = "#ffff00";
    } else {
        value = "#ff4d88";
    }
}