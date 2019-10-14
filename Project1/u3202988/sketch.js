
///////////////////////////////////////////////////

//Interactivity in this webpage
    // Move mouse left or right to control eye pupil and if dragged along X axis to the right it will eventually from black to blue
    // Click to make the portrait poke out his tounge

//////////////////////////////////////////////////

function setup (){
    
    //Create canvas, 1000 pixels wide and high, also make the background grey
    createCanvas(1000, 1000); 
    background(120);

    //Create a line in middle of page to split the canvas in two
    line(500, 0, 500, 1000);
}

function draw () {

//FACE STARTS HERE
    noStroke();

    //RIGHT SIDE (The side in colour)
        //Create a background colour
        fill(232, 104, 104);
        rect(500, 0, 500, 1000);

        //HEAD 
            // Create a Head (Rectangle Base), this starts about mid picture with rounded corners it also has a skin colour
            fill(255, 176, 120);
            rect(500, 100, 250, 500, 0, 40, 0, 0); 

            // Create a Chin (Trapeziod shape), in same colour as before
            noStroke();
            fill(255, 176, 120);
            quad(750, 600, 500, 600, 500, 700, 634, 700); 

            // Create a Neck (Rectangle shape), darker skin tone to before
            fill(209, 151, 107);
            rect(500, 700, 100, 100);


        //EAR
            //Create an Ear (Semicircular shape), using same skin tone as head
            fill(255, 176, 120);
            arc(750, 300, 100, 100, PI + HALF_PI, HALF_PI, CHORD);
            
            //Create the Ear hole, (Same semicircular shape as above), but black in colour
            fill(60);
            arc(750, 300, 30, 30, PI + HALF_PI, HALF_PI, CHORD);

        //HAIR
            //Create the Hair (Triangular shape), using brown colour
            fill("brown");
            triangle(500, 10, 710, 100, 500, 100);

            // Create the Hair Details (Multiple shapes and lines), stroke black in colour, while the shapes use the same brown as the hair
            stroke("Black");
            strokeWeight(1);
            fill("brown");
            beginShape();
            vertex(534, 64);
            vertex(617, 73);
            vertex(617, 140);
            vertex(573, 100)
            endShape();

            beginShape();
            vertex(558, 41);
            vertex(653, 24);
            vertex(700, 18);
            vertex(720, 38);
            vertex(654, 86);
            endShape();

        //T-SHIRT
            // Create a TShirt (rectangular in shape), using a green colour
            noStroke();
            fill(27, 128, 11);
            rect(500, 800, 350, 300);

            //Create a Shoulder on Tshirt (Triangluar in shape), using a dark green stroke and same fill colour as before
            stroke(9, 84, 13);
            strokeWeight(1);
            triangle(850, 800, 1000, 1000, 770, 1000);

            // Create TShirt details underneath buttons (Rectangular in shape), using a dark green colour
            noStroke();
            fill(28, 79, 20)
            rect(500, 800, 40, 300);

            //Create a Collar on T shirt (rectangular in shape), using a darker tone colour of the T shirt
            fill(0, 56, 28);
            quad(500, 800, 630, 750, 716, 800, 580, 840); 


        //EYE    
            //Create an Eyeball (using semicircular in shape), using a white fill colour
            noStroke();
            fill(255, 255, 255);
            ellipse(600, 250, 110, 70);
            

            //Create a pupil (using a circular shape), make this pupil black in colour but change this colour with varying levels of blue depending on the x-axis of the mouse
            // Make the pupil move along the x-axis following the mouse, within the constrains of the eyeball drawn above
            let leftEyeballConstra = 582;
            let rightEyeballConstra = 620;
            let rightEyeballColour = map(mouseX, 500, width, 0, 175)

            fill(0, 0, rightEyeballColour);
            let rightPupil = constrain(mouseX, leftEyeballConstra, rightEyeballConstra);
            ellipse(rightPupil, 250, 65,);

        //NOSE    
            //Create a Nose (using a line and a square), using a black stroke colour that is semi opaque
            stroke(0, 0, 0, 90);
            line(520, 370, 520, 450); 
            noStroke();
            fill(0, 0, 0, 60);
            rect(500, 450, 40, 30); 

        //MOUTH    
            //Create a Mouth (using a vertex points on a curved line), using a black stroke colour
            stroke("black");
            strokeWeight(3);
            
            noFill();
            beginShape(); 
            curveVertex(500, 560);
            curveVertex(500, 560);
            curveVertex(550, 554);
            curveVertex(600, 540);
            curveVertex(630, 520);
            curveVertex(630, 520);
            endShape();
    

    // LEFT SIDE (Black and white)
        noStroke();

        //HEAD    
            // Create a Head (Rectangle Base), it has rounded corners and is using a grey colour
            fill(200);
            rect(250, 100, 250, 500, 40, 0, 0, 0); 
        
            // Create a Chin (trapezoid shape), using the same grey colour as before
            noStroke();
            fill(200);
            quad(250, 600, 500, 600, 500, 700, 334, 700); 
            
            //Create a Neck (Rectangular shape), using a darker grey than before
            fill(170);
            rect(400, 700, 100, 100);

        //EAR
            //Create an Ear (Semicircular shape), using same grey colour as head
            fill(200);
            arc(250, 300, 100, 100, HALF_PI,PI + HALF_PI, CHORD);

            //Create the Ear hole, (Same semicircular shape as above), but black in colour
            fill(60);
            arc(250, 300, 30, 30, HALF_PI,PI + HALF_PI, CHORD);

        //HAIR
            // Create the Hair (Triangular shape), using a darker grey than the skin grey
            fill(180);
            triangle(500, 10, 290, 100, 500, 100);

            //Create the Hair Details (mMltiple shapes and lines), stroke black in colour, while the shapes use the same grey colour used as hair on left side
            stroke(100);
            strokeWeight(1)
            beginShape();
            vertex(458, 41);
            vertex(315, 67);
            vertex(292, 77);
            vertex(273, 100);
            vertex(350, 100);
            endShape();

            beginShape();
            vertex(395, 86);
            vertex(332, 94);
            vertex(300, 114);
            vertex(300, 153);
            vertex(318, 153);
            vertex(407, 100);
            endShape();

            line(487, 55, 420, 70);


        //TOP
            // Create a TShirt (rectangular in shape), using a grey colour
            noStroke();
            fill(200);
            rect(150, 800, 350, 300);

            //Create a Shoulder on Tshirt (Triangluar in shape), using a dark grey stroke and same fill colour as before
            stroke(150);
            strokeWeight(1);
            triangle(150, 800, 0, 1000, 230, 1000);

            // Create TShirt details underneath buttons (Rectangular in shape), using a dark grey colour
            noStroke();
            fill(150)
            rect(460, 800, 40, 300);

            //Create Buttons (circular in shape), using a white fill colour
            noStroke();
            fill(255);
            circle(500, 850, 20);
            circle(500, 950, 20);

            //Create a Collar on T shirt (rectangular in shape), using a darker tone grey than the T shirt
            fill(100)
            quad(500, 800, 350, 750, 280, 800, 420, 840); 

        //EYE
            //Create an Eyeball (using semicircular in shape), using a light grey fill colour
            noStroke();
            fill(230);
            ellipse(400, 250, 110, 70); 

            //Create a pupil (using a circular shape), using an almost black grey colour
            fill(50);
            ellipse(400, 250, 65,); 

        //NOSE
            // Create a Nose (using a line and a square), using a black stroke colour that is semi opaque
            stroke(0, 0, 0, 90);
            line(480, 370, 480, 450); 
            noStroke();
            fill(0, 0, 0, 60);
            rect(460, 450, 40, 30); 
        
        //MOUTH
            //Create a Mouth (using a vertex points on a curved line), using an almost black grey colour
            stroke(50);
            strokeWeight(3);

            noFill();
            beginShape();
            curveVertex(500, 560);
            curveVertex(500, 560);
            curveVertex(450, 554);
            curveVertex(400, 540);
            curveVertex(370, 520);
            curveVertex(370, 520);
            endShape();

//EXTRA

    // If the user clicks then 
    //Create a Tounge (Semicircular in shape), using an almost black stroke colour and a dark grey fill colour.
    if(mouseIsPressed == true) {
        stroke(50);
        strokeWeight(3);

        fill(100);
        beginShape();
        curveVertex(411, 545);
        curveVertex(411, 545);
        curveVertex(406, 582);
        curveVertex(423, 598);
        curveVertex(439, 595);
        curveVertex(454, 556);
        curveVertex(454, 556);
        endShape();
        line(431, 550, 426, 571);
    } else {
        //Do nothing
    }

    /*    
    //Tool I used  to get the X and Y coordinates of the page
        strokeWeight(1);
        fill("black");
        textStyle(NORMAL);
        frameRate(fr);
        textAlign(LEFT)
        text("X: "+ mouseX, 0, mouseX, 100);
        text("Y: "+ mouseY, 40, mouseY, 100);
    
    */

}