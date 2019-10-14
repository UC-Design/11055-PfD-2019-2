
//variables
let x = 1;
let y = 1;
let z = 1;
let S = 1;

//MAKE background_canvas = 1500x1000
function setup() {
            cnv = createCanvas(1500,1000);
            cnv .mousePressed(0)
}
// face drawing
function draw() {
   //background colour 
    background('#00BFA4');

//background 
    //Make square patterned background
    //Make the squares green and outline blue
    //Make light green rectangle in every third square, rotating across 
    //Set rectangle height variable to s
    strokeWeight(5);
    stroke('#399EAE');
    line(0, 0, 0, 1000);
    line(100, 0, 100, 1000);
    line(200, 0, 200, 1000);
    line(300, 0, 300, 1000);
    line(400, 0, 400, 1000);
    line(500, 0, 500, 1000);
    line(600, 0, 600, 1000);
    line(700, 0, 700, 1000);
    line(800, 0, 800, 1000);
    line(900, 0, 900, 1000);
    line(1000, 0, 1000, 1000);
    line(1100, 0, 1100, 1000);
    line(1200, 0, 1200, 1000);
    line(1300, 0, 1300, 1000);
    line(1400, 0, 1400, 1000);
    line(1500, 0, 1500, 1000);
    line(0, 100, 1500, 100);
    line(0, 200, 1500, 200);
    line(0, 300, 1500, 300);
    line(0, 400, 1500, 400);
    line(0, 500, 1500, 500);
    line(0, 600, 1500, 600);
    line(0, 700, 1500, 700);
    line(0, 800, 1500, 800);
    line(0, 900, 1500, 900);
    line(0, 1000, 1500, 1000);
    line(0, 0, 1500, 0);
    
    //Make light green rectangle in every third square, rotating across 
    //Set rectangle height variable to s
    stroke('#00D3B5');
    fill('#00D3B5');
    strokeWeight(10);
    rect(45, 50, 10, S);
    rect(145, 150, 10, S);
    rect(245, 250, 10, S);
    rect(345, 350, 10, S);
    rect(845, 850, 10, S);
    rect(945, 950, 10, S);
    rect(45, 350, 10, S);
    rect(145, 450, 10, S);
    rect(245, 550, 10, S);
    rect(345, 650, 10, S);
    rect(445, 750, 10, S);
    rect(545, 850, 10, S);
    rect(645, 950, 10, S);
    rect(45, 650, 10, S);
    rect(145, 750, 10, S);
    rect(245, 850, 10, S);
    rect(345, 950, 10, S);
    rect(45, 950, 10, S);

    rect(245, -50, 10, S);
    rect(345, 50, 10, S);
    rect(445, 150, 10, S);
    rect(545, 250, 10, S);
    rect(645, 350, 10, S);
    rect(745, 450, 10, S);
    rect(845, 550, 10, S);
    rect(945, 650, 10, S);
    rect(1045, 750, 10, S);
    rect(1145, 850, 10, S);
    rect(1245, 950, 10, S);

    rect(545, -50, 10, S);
    rect(645, 50, 10, S);
    rect(1045, 450, 10, S);
    rect(1145, 550, 10, S);
    rect(1245, 650, 10, S);
    rect(1345, 750, 10, S);
    rect(1445, 850, 10, S);

    rect(845, -50, 10, S);
    rect(945, 50, 10, S);
    rect(1045, 150, 10, S);
    rect(1145, 250, 10, S);
    rect(1245, 350, 10, S);
    rect(1345, 450, 10, S);
    rect(1445, 550, 10, S);

    rect(1145, -50, 10, S);
    rect(1245, 50, 10, S);
    rect(1345, 150, 10, S);
    rect(1445, 250, 10, S);
    rect(1445, -50, 10, S);
    

//faceshape
    //Make tan ellipse, centred on background, height is > than width.
    fill('#FFD6B5');
    strokeWeight(0);
    ellipse(750,500,475,750);

//Eye shape
    //make 2 white oval shapes with black outline. Set left eye height variable to x 
    //make 2 blue circles centred in white oval. Set left eye height variable to y
    //make 2 smaller black circles centred in blue circles. Set left eye height variable to z
    //Align eyes right on face shape
//white of eye   
    fill(240);
    strokeWeight(1);
    stroke(100);
    ellipse(787,380,75,x);
    ellipse(937,380,75,35)
//inside colour of eyes
    fill('#399EAE');
    ellipse(790,380,34,y);
    ellipse(940,380,34,34);
//pupil
    fill(10);
    ellipse(790,380,17,z);
    ellipse(940,380,17,17);

//hair
    //Make blond hair on top of face shape and down the left side of face.
    //Make darker blond rectangles in hair
 // top hair chunk 
    fill('#EFDF60');
    strokeWeight(0);
    arc(675,275,575,325,PI,TWO_PI);
//large left hair - blond
    fill('#EFDF60');
    rect(388, 262, 255, 655);
//hair high light
    fill('#F1CF54')
   rect(600, 125, 45, 150);
   rect(800, 175, 45, 100);
   rect(700, 135, 10, 100);
   rect(415, 250, 10, 100);
   rect(415, 675, 20, 100);
   rect(515, 665, 50, 240);
   rect(570, 375, 75, 250);
   rect(615, 725, 10, 110);
   rect(450, 800, 30, 115);
   rect(400, 475, 20, 100);
   rect(480, 157, 20, 50);
   rect(450, 300, 45, 200);
   rect(525, 350, 10, 100);
   rect(475, 600, 10, 100);

//nose
    //Make a darker tan nose centred and below eyes.
   strokeWeight(5);
   stroke('#C4A58B')
   line(875, 460, 940, 550);
   line(940, 550, 875, 550);

//mouth
    //Make a mouth with pink lipstick and white teeth
    //Place below nose and under left eye and left angled up
   stroke('#AB2567')
   strokeWeight(15);
   fill('#F5F5F5')
   arc(815, 650, 100, 100, 0, PI + QUARTER_PI, CHORD);

//neck
    //Make tan rectangle neck under face shape
    fill('#FFD6B5');
    strokeWeight(0);
    rect(640, 830, 100, 170);

//shirt
    //Make pink ellipse under neck
    stroke(0)
    fill('#AB2567')
    ellipse(675, 1020, 450, 200) 
   
}

// make a function for mouse click
function mouseClicked(){
    if (x === 1){
        x = 35;
        y = 34;
        z = 17;
    } else {
        x = 1;
        y = 1;
        z = 1;
    }
      if (S === 1){
        S = 100;
    } else {
        S = 1;
    }
  }
   