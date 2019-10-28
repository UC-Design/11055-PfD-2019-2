function setup() {
    //setup the size of the drawing area
    createCanvas(410, 440); 
    
}
function draw(){
   
    background(115, 205, 231); //set the color of the background. Can be written in rgb or literally such as 'red'.
    drawBody(); //calls the drawBody function.
    drawHead(); //calls the drawHead function.
    drawHair(); //calls the drawHair function.
    drawEyes(); //calls the drawEyes function.
    drawSmile(); //calls the drawSmile function.
    drawNose(); //calls the drawNose function.
}
 
function drawBody(){
    // Body
    noStroke(); //use no stroke to hide the outline of an object.
    fill(0, 81, 116); //fills the object.
    rect(50, 270, 300, 200); //draws a rectangle at locataion 50 - 270 and at a size of 300 x 200.
    //cut out the shape for shoulders
    fill(115, 205, 231); //use background colour to block out shape.
    triangle(50, 270, 120, 270, 50, 320); //left shoulder triangle.
    triangle(350, 270, 280, 270, 350, 320); //right shoulder triangle.
    
    /*add some details to body.
    */
    //buttons.
    fill(0); //black.
    ellipse(200, 360, 20,20); //draws the top black button.
    ellipse(200, 410, 20, 20); //draws the bottom black button.
    //collar.
    fill(255); //white.
    triangle(120, 270, 160, 270, 200, 330); //creates the left side collar.
    triangle(280, 270, 240, 270, 200, 330); //creates the right side collar.
    //shading.
    stroke(18,24, 102); //use stroke function to color a stroke not fill.
    line(100, 340, 150, 350); //draws top blue line on body.
    line(105, 345, 155, 355); //draws middle blue line on body.
    line(110, 350, 160, 360); //draws second bottom blue line on body.
    line(115, 355, 165, 365); //draws bottom blue line on body.
    stroke(0); //change stroke to black.
    noFill(); //turns off the fill.
    arc(250, 370, 90, 10, 0, 90, OPEN); //draws the pocket.
    arc(120, 440, 50, 150, 20, 30, OPEN); //draws the right arm.
}

function drawHead(){
    //Head
    noStroke(); //turns off the stroke for the head.
    fill(237, 217, 162); //colors in the head.
    rect(110, 140, 180, 100); //draws a rectangle for the head shape.
    triangle(110, 240, 290, 240, 200, 320); //draws jaw.
    fill(0, 81, 116);
    rect(150,300, 90, 30);
    fill(255);
    triangle(160, 300, 240, 300, 200, 330); //draws lowest part of the collar to cover the pointy chin.

    //draw cheeks
    noStroke(); //removes outline.
    fill('pink'); //set fill to 'pink'.
    ellipse(155, 215, 20, 20); //adds left cheek blush.
    ellipse(245, 215, 20, 20); //adds right cheek blush.
    //shade down the side of the jaw.
    fill(237, 204, 149);
    //darker side.
    quad(290, 220, 290, 240, 222, 300, 260, 250); //draw a quad on the right side of the jaw for shading.
    fill(240, 223,177);
    //lighter side.
    quad(110, 220, 110, 240, 178,300, 140, 250); //draw a quad on the left side of the jaw for highlighting.
    strokeWeight(3); //sets the stroke weight.
    fill(0); //removes the fill.
    arc(205, 260, 25, 10, 0, 90, OPEN); //draws a small arc under the mouth.
    ellipse(183,258,3,3); //adds a small mole to the right of the mouth.
}

    function drawHair(){
    //hair
    noStroke(); //removes the stroke.
    fill(110, 82, 7); //changes the fill color.
    //arc gives the overall shape of the hair. 
    arc(200, 150, 200, 200, PI, TWO_PI); //draws the top of the head.
    //sideburns.
    triangle(100, 150, 110, 200, 130, 150); //left side.
    triangle(300, 150, 290, 200, 270, 150); //right side.
    //fringe details.
    //use triangles to break up the fringe. use same colour as face.
    fill(237, 217, 162); //face color.
    triangle(240, 120, 230, 160, 250, 170); //right wedge in fringe.
    triangle(140, 140, 150, 140, 150, 170); //middle wedge in fringe.
    triangle(170, 170, 180, 130, 150, 190); //left wedge in fringe.
    //shading and highlights and fringe detail.
    strokeWeight(2); //set stroke weight for hair details
    stroke(219, 209, 61); //highlights.
    line(150, 80, 130, 103); //top highlight.
    line(150, 86, 130, 109); //middle highlight.
    line(150, 92, 130, 115); //bottom highlight.
    stroke(161, 100, 10); //shading.
    line(260, 120, 270, 140); //left shading.
    line(265, 124, 275, 144); //middle shading.
    line(270, 128, 280, 148); //right shading.
    line(180, 149, 189, 120); //left fringe line detail.
    line(184,149,193, 120); //middle fringe line detail.
    line(188,149, 197,120); //right fringe line detail.
      
    //eyebrows. Place last to avoid losing under the fringe triangles.
    stroke(110, 82, 7); //color same as hair.
    strokeWeight(3); //stroke weight.
    line(150, 163, 176, 158); //left eyebrow.
    line(250,163, 224, 158); //right eyebrow.
}
    
    function drawEyes(){
    //eyes
    fill(255); //create 2 white ovals.
    noStroke();
    ellipse(230, 180, 35, 25); //right side.
    ellipse(170, 180, 35, 25); //left side.
    /* keep the size dimensions the same for both eyes.
    center of face is 200 so set left eye at 170 and right eye at 230.
    */
    fill(0);
    /*create 2 smaller black circles for the pupils.
    set them at the same x and y as the white ovals but
    change the color to black and make the ellipses circles.
    set the sizes to be smaller.
    */
    ellipse(230, 180, 10, 10);
    ellipse(170, 180, 10, 10);
    fill(255);
    /*create 2 more circles and off-set to give the eyes some realism.
    make these circles much smaller.
    */
    ellipse(227, 180,3,3);
    ellipse(167 ,180, 3, 3);
}
    
    function drawSmile(){
    //smile. Set the stroke color and line weight.
    stroke(0);
    strokeWeight(4);
    noFill();
    /*don't fill in the arc!
    set dimensions of x y axis and arc height and angle. Keep arc opon for a mouth*/
    arc(195, 250, 50, 10, 0, 90, OPEN);
}

    function drawNose(){
    //nose. Set the stroke line weight.
    strokeWeight(3);
    /*don't fill in the arc.
    set dimensions for the the nose. 
    */
    arc(203, 220, 30, 30, 70, 130, OPEN);
}
    


