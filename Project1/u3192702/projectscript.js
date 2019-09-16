//PROJECT 1: SELF PORTRAIT

/* PROJECT SUMMARY: Create a self portrait using the P5 library in Javascript.*/

// VARIABLES FOR PORTRAIT COLOURS
var hair = '#694b34';
var hair_light = '#846047';
var hair_dark = '#493425';
var hair_back = '#30231b';
var light_skin_clr = '#fdefe4';
var med_skin_clr = '#fbe2cd';
var dark_skin_clr = '#e0c8b8';
var eyes = '#0f79b5';
var eye_white = '#ffffff';
var cheeks ='#f9b2c8';
var cheek_hghlht = '#ffd7e5';
var lips_top = '#ff56a2';
var lips_bottom ='#f91e8c'
var dark = '#000000';
var light = '#aaaaaa';
var collar = '#3d3d3d';
var cllr_drk = '#232323';
var cllr_lht = '#5b5b5b';
var cllr_hghlht1 = '#8c8c8c';
var cllr_hghlht2 = '#515150';
var shrt_print = '#00c5e5';
var shrt_prt_light = '#6eeeff';
var shrt_prt_dark = '#03818e';
var shrt_detail = '#134e56';


//VARIABLES FOR PET DOGS IN PORTRAIT
//FINN IS dog 1
var dog1_clr ='#2b2b2b';
var dog1_dark = '#161616';
var dog1_light = '#474747';

//PEGGY IS dog 2
var dog2_clr ='#c69d4b';
var dog2_dark = '#ad843b';
var dog2_dark2 = '#84622c';
var dog2_light = '#e0b05a';

// Set to 0 for colour transition
var dog1_eyeclr = 0;
var dog2_eyeclr = 0;

// Move eye pupils with mouse
var eye1;
var eye2;

// SETTING CANVAS SIZE AND BACKGROUND
function setup(){
createCanvas(500, 600);
    
// Set dog eye colour to random for transition
dog1_eyeclr = random(255);
dog2_eyeclr = random(255);
    
//Moving eyes
eye1 = new Eye (300, 250, 50);
eye2 = new Eye (200, 250, 50);
    
//SETTING COLOUR FOR BACKGROUND
background('#fdf473');

//CREATING GEOMETRIC PATTERN FOR BACKGROUND
/* e.g. IF pattern1 is less than or equal to the width, then add 20 to   pattern 1. */ 
for (var pattern1 = 0; pattern1 <= width; pattern1 = pattern1 + 20 ){
for (var pattern2 = 0; pattern2 <= height; pattern2 = 20 + pattern2){
      noStroke ();
/* Add the colours for the patterns and set what areas the pattern will   
   cover. */ 
      fill('#f6b1c4');
      ellipse(pattern1,pattern2,15,15);
      fill('#c4baff');
      rect(pattern2,pattern1,10,10);
      fill('#36fc9d');
      circle(pattern2,pattern1,10,10); 
};
};  
 
//LARGER BACKGROUND SHAPES
fill ('pink')
rect (60, 270, 500, 100);
fill ('#03e4ba');
circle (85, 95, 60);
fill ('#f04feb');
circle (80, 90, 60);
fill ('#f6af48')
circle (490, 360, 200);
fill ('#59c8ff');
circle (500, 350, 200);
fill ('#9c4fff')
triangle(455, 34, 355, 41, 405, 105);
fill ('#bba1e2')
triangle(450, 30, 350, 36, 400, 100);
fill ('#a14af9')
rect (370, 450, 40, 40);
fill ('#ff7f7a')
rect (30, 150, 180, 60);

//DATE TEXT
textSize(16);
fill('#a14af9');
text('2019.', 450, 8, 30);
};

//BEGINNING THE PORTRAIT

function draw(){
    
noStroke();
    
//CLOTHING
//T-shirt & jacket
fill (cllr_drk);
circle (305, 398, 80);
circle (200, 398, 80);
fill (dark);
rect (151, 450, 203, 401);
circle (305, 460, 100);
circle (200, 460, 100);
fill (collar);
circle (330, 420, 80);
circle (170, 420, 80);
fill (cllr_lht);
circle (330, 450, 60);
circle (170, 450, 60);
    
//T-shirt print : Skull   
fill (shrt_print);
ellipse (251, 530, 55, 60); 
ellipse (251, 500, 80, 70);
fill (shrt_prt_light);    
ellipse (251, 495, 70, 50);
fill (shrt_prt_dark);
circle (230, 505, 30);
circle (272, 505, 30);
ellipse (250, 525, 10, 10);
fill (shrt_detail);
circle (230, 505, 20);
circle (272, 505, 20);
fill (shrt_prt_light);
ellipse (235, 542, 5, 20);
ellipse (245, 542, 5, 20);
ellipse (255, 542, 5, 20);
ellipse (265, 542, 5, 20);
    
//FACE/HEAD/HAIR
//Back of hair
fill (hair_dark);
arc(250, 350, 300, 500, PI, TWO_PI);
fill (hair_back);
arc(250, 350, 255, 350, PI, TWO_PI);
    
//details in the back of the hair 
fill ('pink');
triangle (330, 320, 342, 360, 320, 360);
triangle (355, 318, 350, 360, 380, 360);
triangle(165, 320, 151, 360, 175, 360);
triangle(130, 330, 151, 360, 130, 360);
    
//Neck
fill (med_skin_clr);
rect (215, 350, 70, 75);
ellipse (250, 427, 70, 50);
fill (dark_skin_clr);
ellipse (250, 265, 120, 250);
 
//Shape of the head
fill(med_skin_clr);
ellipse (250, 250, 185, 250);

//FACE
//Eyes
fill (eye_white);
circle (300, 250, 50);
circle (200, 250, 50);
    
//Set coordinates for eyes to move with the cursor
eye1.update(mouseX, mouseY);
eye2.update(mouseX, mouseY);
eye1.display();
eye2.display();
    
//Draw Nose
fill (dark_skin_clr);
ellipse (250, 317, 40, 10)
fill(hair_light);
ellipse (237, 315, 10, 5);
ellipse (262, 315, 10, 5);
    
//Draw Cheeks/blush
fill (cheeks);
ellipse (188, 292, 25, 15);
ellipse (313, 292, 25, 15);
    
//Draw Lips
fill (lips_top);
arc(235, 340, 27, 20, PI, TWO_PI); 
arc(263, 340, 27, 20, PI, TWO_PI);
fill (lips_bottom);
arc(249, 340, 55, 30, TWO_PI, PI); 

//Draw Front of hair/bangs/fringe
fill (hair);
arc(250, 220, 240, 250, PI, TWO_PI);
triangle(270, 100, 350, 90, 250, 150);
triangle(300, 75, 250, 200, 130, 200);

//HIGHLIGHTS & SHADING
//Adding highlights to the eyes
fill (eye_white);
circle (187, 245, 12);
circle (288, 245, 12);
ellipse (235, 347, 12, 5);
ellipse (235, 335, 10, 5);
    
//Cheeks
fill (cheek_hghlht);
circle (183, 292, 6);
circle (318, 292, 6);
fill(dark_skin_clr);
    
//Lips
ellipse (265, 270, 5, 60);
ellipse (235, 290, 5, 40);
    
//Hair
fill(hair_light);
ellipse (185, 170, 20, 70);
ellipse (160, 180, 15, 50);
fill (hair_dark);
ellipse (340, 200, 30, 20);
    
//Clothes
fill (cllr_drk);
rect (160, 485, 30, 80);
rect (315, 485, 30, 80);
fill (cllr_hghlht2);
rect (160, 485, 10, 60);
rect (335, 486, 10, 60);
    
//Adding tones to Jacket collar/fur
fill (cllr_hghlht1);
ellipse (160, 400, 20, 20);
ellipse (185, 410, 10, 10);
ellipse (155, 450, 15, 15);
ellipse (340, 400, 20, 20);
ellipse (320, 410, 10, 10);
ellipse (347, 450, 15, 15);
    
//DRAW PETS: FINN & PEGGY
//Finn
fill (dog1_dark);
ellipse (35, 480, 18, 18);
ellipse (104, 480, 18, 18);
fill (dog1_light);
ellipse (30, 485, 10, 25);
ellipse (110, 485, 10, 25);
fill (dog1_dark);
ellipse (70, 555, 85, 150);
fill (eye_white);
ellipse (70, 585, 60, 60);
fill (light);
ellipse (70, 590, 60, 40);
fill (dog1_clr);
circle (70, 500, 75);
circle (70, 525, 55);
fill (dog1_light);
circle (65, 495, 50);
fill (eye_white);
circle (52, 500, 25);
circle (88, 500, 25);
fill (dog1_eyeclr);
circle (52, 500, 19);
circle (88, 500, 19);
fill (dark);
circle (52, 500, 10);
circle (88, 500, 10);
ellipse (70, 540, 20, 10);
fill (eye_white);
circle (45, 495, 5);
circle (81, 495, 5);
  
//Peggy
fill (dog2_dark);
ellipse (407, 520, 18, 18);
ellipse (453, 520, 18, 18);
fill (dog2_light);
ellipse (400, 525, 10, 25);
ellipse (459, 525, 10, 25);
fill (dog2_dark);
circle (442, 530, 18);
ellipse (430, 580, 50, 100);
fill (dog2_dark2);
ellipse (430, 580, 30, 50);
fill (dog2_clr);
ellipse (430, 530, 50, 50);
circle (430, 545, 40);
fill (dog2_light);
ellipse (425, 525, 30, 30);
fill (eye_white);
circle (419, 530, 18);
circle (442, 530, 18);
fill (dog2_eyeclr);
circle (419, 530, 14);
circle (442, 530, 14);
fill (dark);
circle (419, 530, 7);
circle (442, 530, 7);
circle (430, 550, 7);
fill (eye_white);
circle (415, 528, 5);
circle (438, 528, 5);
    
//INTERACTIVITY/ANIMATION: 
//Interactivity 1: Change colour of dogs eyes
if (mouseIsPressed){
dog1_eyeclr = color (random(255), random(255), random(255));
dog2_eyeclr = color (random(255), random(255), random(255));
}else {dog1_eyeclr = '#684b09'; dog2_eyeclr = '#7c5c1c';};    
};

//Interactivity 2: Move eyes with cursor
//Create a function to move pupils to these positions & angles
function Eye(tx, ty, ts){
   this.x = tx;
   this.y = ty;
   this.size = ts;
   this.update = function(mx, my) {
   this.angle = atan2(my - this.y, mx - this.x);
   };

//Use push() & pop() to contain the eyes in specified area. Set parameters for eye boundary, the colour & scale.
    
this.display = function(){
   push();
   translate(this.x, this.y);
   ellipse(0, 0, this.size, this.size);
   rotate(this.angle);
   fill(eyes);
   ellipse(this.size / 8, 0, this.size / 1.3, this.size / 1.3);
   pop();
  };
  };

//Melina Seserko (3192702). Programming for design, 2019.