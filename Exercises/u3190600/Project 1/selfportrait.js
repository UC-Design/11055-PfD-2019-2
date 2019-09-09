function setup() {
    createCanvas(640,480);
    background("blue");

}

function draw() {
    if (mouseIsPressed) {
        textSize (20);
        text (('X='+mouseX+" Y="+mouseY),mouseX, mouseY);
        fill(255,0,255);

    } else {
    
      //Hair
      noStroke()
      fill("#4d2600");
      arc(320, 340, 280, 500, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);

      //Face 
      noStroke()
      fill("#ffc34d");
      ellipse(320, 250, 200, 260);

      //Ears
      arc(220, 265, 40, 60, 0, PI + HALF_PI + HALF_PI);
      arc(420, 265, 40, 60, 0, PI + HALF_PI + HALF_PI);

      //Front Hair
      noStroke()
      fill ("#4d2600")    
      
      //Nose
      fill("#ffb31a")
      triangle (320, 270, 330, 300, 310, 300); 
      
      //Mouth
      fill(255, 102, 102);
      arc(320, 325, 49, 35, 0, PI);
  
      //Eyeshadow
      stroke(249, 67, 6, 130);
      strokeWeight(6);
      arc(270, 255, 45, 15, PI, TWO_PI, OPEN);
      arc(370, 255, 45, 15, PI, TWO_PI, OPEN);
      arc(270, 257, 40, 30, HALF_PI, PI);
      arc(370, 257, 40, 30, 0, HALF_PI);

      //Eyebrows
      stroke(21, 19, 19);
      strokeWeight(3);
      noFill();
      arc(270, 235, 45, 15, PI, TWO_PI, OPEN);
      arc(370, 235, 45, 15, PI, TWO_PI, OPEN);

      //Eyes
      strokeWeight(1)
      fill(32, 19, 19);
      ellipse(270, 260, 28, 25);
      ellipse(370, 260, 28, 25);
      
      //Eyeballs
      noStroke()
      fill(255)
      ellipse(267, 252, 8, 8);
      ellipse(366, 252, 8, 8);

      //Hoodie
      fill("#3399ff")
      rect(230, 400, 180, 150, 20);

      //Neck
      fill("#ffc34d")
      rect(295, 360, 50, 55, 20);
      
      //Hair Details
      noFill();
      stroke(0)
      bezier(335, 123, 250, 160, 220, 245, 220, 360, 220, 400);
      bezier(336, 124, 251, 161, 221, 246, 221, 361, 221, 401);
      bezier(337, 125, 252, 162, 222, 247, 222, 362, 222, 402);

    }
}