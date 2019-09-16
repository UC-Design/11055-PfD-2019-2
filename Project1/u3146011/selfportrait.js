function setup() {
//create canvas
    createCanvas(500, 590);
//create background colour
    var bg = color('#fff');
    background(bg);
    noStroke();
//create radial gradient background
    for (i = 1000; i > 0; i -= 100) {
    fill(bg);
    bg = lerpColor(bg, color('#AF81E4'), .2);
    ellipse(260, 260, i);
    }
    }
  
function draw () {

//create the hair
    noStroke ()
    fill(90, 56, 37); 
    arc(260,260,250,250,PI,TWO_PI);
    rect (125,260,270,260);

// create the waves for hair
    fill (90, 56, 37);
    ellipse (230,220,140,150);
    ellipse (215,220,140,150);
    ellipse (210,210,140,150);
    ellipse (200,250,180,150);
    ellipse (190,300,180,150);
    ellipse (190,350,180,150);
    ellipse (190,400,180,150);
    ellipse (190,450,180,150);
    ellipse (270,195,140,140);
    
    ellipse (329,220,140,150);
    ellipse (320,250,180,150);
    ellipse (320,300,180,150);
    ellipse (320,350,180,150);
    ellipse (320,400,180,150);
    ellipse (320,450,180,150);
    
//create the face
    noStroke ()
    fill (235, 204, 171);
    ellipse (260,300, 200, 240);

//create the neck
    fill(235, 204, 171);
    rect(220, 380, 80, 80, 20);

 // create the mouth
    fill('white');
    stroke ('#c98276');
    strokeWeight(3);
    arc(260, 360, 65, 60, 0, PI);
    fill ('#c98276');
    rect (230, 360, 60, 0.5);
    fill ('#c98276');
    noStroke ()
    ellipse (245,360,40,10);
    ellipse (275,360,40,10);
    fill ('#c98276');
    rect (241,360, 40, 5);

//create the shirt
    noStroke ()
    fill(183, 123, 130);
    arc(260,590,360,280,PI,TWO_PI);
    fill (235, 204, 171);
    ellipse (260, 450, 80, 90);
   
//create the statment earrings
    fill ('#F4A8CF') ;
    ellipse (150, 330, 40, 50);
    ellipse (370, 330, 40, 50);

// create the ears
    fill (235, 204, 171);
    ellipse (150, 280, 40, 60);
    ellipse (370, 280, 40, 60);
       
//create the statment earrings
    fill ('#AAE5FC');
    ellipse (150, 300, 20, 20);
    ellipse (370, 300, 20, 20);

//create the base eyeshadow
    fill ('#A0685D');
    ellipse (210, 250, 60, 45);
    ellipse (310, 250, 60, 45);

//create the lid eyeshadow colour
    fill (156, 135, 71);
    ellipse (210, 255, 55, 45);
    ellipse (310, 255, 55, 45);
  
 //create the eyes
    fill('white');
    ellipse(210, 260, 60, 35);
    ellipse(310, 260, 60, 35);
    fill (78,44,27);
    stroke ('black');
    strokeWeight(1);
    ellipse (210, 260, 30, 30);
    ellipse (310, 260, 30, 30);
    fill ('black');
    ellipse (210, 260, 10, 10);
    ellipse (310, 260, 10, 10);

//create top eyelashes for right eye 
// from left to right
    fill ('black');
    rect (282.5, 248, 0.3, 4);
    rect (286, 242, 0.3, 7);
    rect (290, 239, 0.3, 8);
    rect (294, 236, 0.3, 9);
    rect (298, 234, 0.3, 9);
    rect (302, 233, 0.3, 9);
    rect (306, 232, 0.3, 9);
    rect (310, 232, 0.3, 9);
    rect (314, 232, 0.3, 9);
    rect (318, 233, 0.3, 9);
    rect (322, 234, 0.3, 9);
    rect (326, 236, 0.3, 9);
    rect (330, 238, 0.1, 8);
    rect (334, 242, 0.1, 6);
    rect (337, 247, 0.1, 4);
    
//create top eyelashes for left eye 
//from left to right
    fill ('black');
    rect (182.5, 248, 0.3, 4);
    rect (186, 242, 0.3, 7);
    rect (190, 239, 0.3, 8);
    rect (194, 236, 0.3, 9);
    rect (198, 234, 0.3, 9);
    rect (202, 233, 0.3, 9);
    rect (206, 232, 0.3, 9);
    rect (210, 232, 0.3, 9);
    rect (214, 232, 0.3, 9);
    rect (218, 233, 0.3, 9);
    rect (222, 234, 0.3, 9);
    rect (226, 236, 0.3, 9);
    rect (230, 238, 0.1, 8);
    rect (234, 242, 0.1, 6);
    rect (237, 247, 0.1, 4);

//create the hair part
    fill (52,28,16);
    noStroke ()
    rect (260,135,1,45);

//create the nose
    fill (230, 196, 161);
    noStroke ()
    ellipse (260, 300, 20, 50);
    ellipse (260, 320, 30, 30);
    ellipse (270, 325, 20, 20);
    ellipse (250, 325, 20, 20); 
   
//create the eyebrows
    stroke(78,44,27);
    strokeWeight(4);
    noFill();
//left eyebrow
    arc(212, 232, 62, 25, PI, TWO_PI, OPEN);
//right eyebrow
    arc(308, 232, 62, 25, PI, TWO_PI, OPEN);

//create the dress
    noStroke ()
    fill ('white');
    rect (150,477,5,140);
    rect (370,477,5,140);
    rect (145,500,15,25);
    rect (365,500,15,25);
    rect (155,550,216,50);   
}
