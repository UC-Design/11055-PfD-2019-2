//START PROGRAM


// Set up the drawing canvas  
function setup() {
    createCanvas(1600, 900);
    background("#CACACA");
}


// Start the drawing loop
function draw() {
     
   
    //Draw the basic head and not moving parts of the portrait; hair, head, hairline, neck, ears shoulders, neckline and nose with draw_head function defined below
    draw_head();
    
    //Draw earings that change according to the day of the week with draw_earrings function defined below
    draw_earrings();
    
    //Draw eyes that blink when the mouse is pressed with draw_eyes function defined below
    draw_eyes();
    
    //Draw eyebrows that raise and lower according to the Y coordinate of the mouse on the screen with draw_eyebrows function defined below
    draw_eyebrows();
    
    //Draw mouth that smiles and frowns according to the X coordinate of the mouse on the screen with draw_mouth function defined below
    draw_mouth();
    
    
   
    //Defining functions
    //Draw hair, head, hairline, neck, ears, shoulders, neckline and nose with draw_head function defined below
    function draw_head() {
        noStroke();
        
        //Hair
        //Draw a custom curve shape as hair in a colour brown  
        fill("#2A1107");
        beginShape();
        curveVertex(600, 735);
        curveVertex(660, 735);
        curveVertex(686, 627);
        curveVertex(645, 450);
        curveVertex(430, 460);
        curveVertex(410, 725);
        endShape(CLOSE);

        //Head
        //Draw a rectangle with rounded corners in front of the hair in the colour #FFDED2 
        fill("#FFDED2");
        rect(460, 450, 160, 230, 65, 65, 130, 130);

        //Hairline
        //Draw a rectangle and triangle on the top of the head in a colour brown
        fill("#2A1107");
        rect(470, 450, 160, 10);
        triangle(470, 450, 600, 450, 540, 470);

        //Neck
        //Draw a rectangle below the head in the colour #FFDED2
        fill("#FFDED2");
        rect(503, 650, 70, 50);

        //Ears
        //Draw 2 ellipses in the colour #FFDED2 either side of the head
        ellipse(620, 545, 25, 40);
        ellipse(460, 545, 25, 40);

        //Shoulders
        //Draw a rectangle with top corners rounded, below the neck in a colour green
        fill("#334035");
        rect(325, 700, 420, 150, 130, 130, 0, 0);

        //Neckline
        //Draw a triangle below the neck in the colour #FFDED2 
        fill("#FFDED2");
        triangle(503, 700, 573, 700, 538, 740);
        
        //Nose
        //Draw a rounded rectangle and ellipse in the colour #FFDED2 in the middle of the head
        fill("#FBCDCA");
        rect(533, 558, 15, 23, 33);
        ellipse(540, 578, 28, 18);
    }
    
    //Draw earings that change according to the day of the week with draw_earrings function defined below
    function draw_earrings() {
        
        //Earrings 
        noStroke();
        //Define variables needed for switch statement
        //Record the day of the week from the browser, inside the drawing loop.
        var date = new Date();
        var day_of_week = date.getDay();

        //Swtich statement for each day of week
        switch (day_of_week) {
        case 0:
            //IF day_of_week = Sunday THEN Draw one blue triangle at the bottom of each ear
            fill("#5288DB");
            triangle(453, 560, 458, 575, 448, 575);
            triangle(627, 560, 632, 575, 622, 575);
            break;
        case 1:
            //IF day_of_week = Monday THEN Draw one silver circle at the bottom of each ear
            fill("#8B8B8B");
            ellipse(453, 560, 15);
            ellipse(627, 560, 15);
            break;
        case 2:
            //IF day_of_week = Tuesday THEN Draw one red triangle at the bottom of each ear 
            fill("#AB1818");
            triangle(453, 560, 458, 565, 448, 565);
            triangle(627, 560, 632, 565, 622, 565);
            break;
        case 3:
            //IF day_of_week = Wednesday THEN Draw one green ellipse at the bottom of each ear
            fill("#43E7B3");
            ellipse(453, 570, 25, 30);
            ellipse(627, 570, 25, 30);
            break;
        case 4:
            //IF day_of_week = Thursday THEN Draw one pink square at the bottom of each ear
            fill("#F0BCD2");
            rect(448, 558, 10, 10);
            rect(622, 558, 10, 10);
            break;
        case 5:
            //IF day_of_week = Friday THEN Draw one white rectangle at the bottom of each ear
            fill("#FFFFFF");
            rect(448, 558, 8, 18);
            rect(622, 558, 8, 18);
            break;
        case 6:
            //IF day_of_week = Saturday THEN Draw one gold circle at the bottom of each ear
            fill("#CEAB3A");
            ellipse(453, 560, 15);
            ellipse(627, 560, 15);
            break;       
        }
    }
    
    //Draw eyes that blink when the mouse is pressed with draw_eyes function defined below
    function draw_eyes() {
        
        //Eyes
        //Draw two eyes, one either side of nose
        if (mouseIsPressed) {
            //IF mouse_is_pressed = True THEN Draw eyes closed 
            //Draw ellipse for lids in #FBCDCA and curves for lashes in black
            //Lids
            noStroke();
            fill("#FBCDCA");
            ellipse(495, 545, 28, 18);
            ellipse(585, 545, 28, 18);
            //Lashes
            strokeWeight(3);
            stroke('black');
            curve(460, 525, 480, 551, 508, 551, 558, 525);
            curve(550, 525, 570, 551, 598, 551, 620, 525);
        } else {
            //ELSE IF mouse_is_pressed = FLASE THEN Draw eyes open, 
            //Draw white ellipse for eyes, circle for iris in the colour #5C736A and circle for pupil and lashes/edges in black 
            //Whites
            fill('white');
            noStroke();
            ellipse(495, 545, 28, 18);
            ellipse(585, 545, 28, 18);
            //Iris
            fill("#5C736A");
            ellipse(496, 545, 18);
            ellipse(584, 545, 18);
            //Pupil
            fill('black');
            ellipse(496, 545, 8);
            ellipse(584, 545, 8);
            //Lashes
            stroke('black');
            strokeWeight(3);
            noFill();
            curve(460, 568, 480, 540, 508, 540, 558, 568);
            curve(550, 568, 570, 540, 598, 540, 620, 568);
        }

    }
    
    //Draw eyebrows that raise and lower according to the Y coordinate of the mouse on the screen with draw_eyesbrows function defined below
    function draw_eyebrows() {
        
        //Eyebrows
        //Draw thick curve for eyebrows above eyes, in the colour brown
        strokeWeight(6);
        stroke("#2A1107");
        noFill();

        //If else statements were used as you can't use <> in a switch statement
        if (mouseY < 450) {
            //If y coordinates for mouse position on screen is above the head
            //IF mouse_position_y_axis < 450 THEN Draw eyebrows raised 
            curve(450, 565, 475, 515, 510, 505, 585, 545);
            curve(450, 565, 570, 505, 605, 515, 585, 545);
        } else {
            if (mouseY > 700) {
                //If y coordinates for mouse position on screen is below the head
                //IF mouse_position_y_axis > 700 THEN Draw eyebrows frowning 
                curve(450, 565, 475, 515, 510, 530, 630, 545);
                curve(450, 565, 570, 530, 605, 515, 630, 545);
            } else {
                //If y coordinates for mouse position on screen is in the middle
                //ELSE Draw eyebrows neutral
                curve(450, 565, 475, 525, 510, 520, 630, 545);
                curve(450, 565, 570, 520, 605, 525, 630, 545);
            }
        }
    }
    
    //Draw mouth that smiles and frowns according to the X coordinate of the mouse on the screen with draw_mouth function defined below
    function draw_mouth() {
        
        //Mouth
        //Draw ellipse for the lips in the colour #DF8495 and a curve for the mouth in black
        //Lips
        noStroke();
        fill("#DF8495");
        ellipse(540, 620, 25, 15);
        //Mouth curve
        stroke('black');
        strokeWeight(2);
        noFill();

        if (mouseX < 420) {
            //If x coordinates for mouse position on screen is left of the head then
            //IF mouse_position_x_axis < 420 THEN Draw mouth in a smile  
            curve(460, 540, 510, 612, 568, 612, 620, 540);
        } else {
            if (mouseX > 660) {
                //If x coordinates for mouse position on screen is right of the head then
                //IF mouse_position_x_axis > 660 THEN Draw mouth frowning 
                curve(460, 690, 510, 627, 568, 627, 620, 690);
            } else {
                //If x coordinates for mouse position on screen is in the middle
                //ELSE Draw mouth neutral
                curve(460, 615, 514, 620, 564, 620, 620, 615);
            }
        }
    
    }

}
//End of drawing. This is a loop

//END PROGRAM