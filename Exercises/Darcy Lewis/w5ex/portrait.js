function setup () {
    createCanvas (500, 590);
    background('rgba(15,82,185, 0.50)');
}

function draw () {

//background polka dot
    fill (238, 138, 31);
    noStroke ()
    ellipse (50,50,100,100);   
    ellipse (150,150,100,100);   
    ellipse (250,50,100, 100); 
    ellipse (450,50,100, 100); 
    ellipse (350,150,100, 100); 
    ellipse (50,250,100, 100); 
    ellipse (450,250,100, 100);
    ellipse (150,350,100, 100);  
    ellipse (350,350,100, 100); 
    ellipse (50,450,100, 100); 
    ellipse (250,50,100, 100); 
    ellipse (450,450,100, 100); 

//make the hair
    noStroke ()
        fill(222,184,135); 
    arc(260,260,250,250,PI,TWO_PI);
    rect (125,260,270,260);
   
 //make the face
    noStroke ()
        fill (255,238,222);
    ellipse (260,300, 250, 250);


//make the neck
        fill(255, 238, 222)
    rect(220, 380, 80, 80, 20);

 //Mouth
        fill('white');
    stroke (231, 80, 128);
    strokeWeight(3);
    arc(260, 360, 65, 60, 0, PI);
        fill (231, 80, 128 );
    rect (230, 360, 60, 0.5);
        fill (231, 80, 128);
    noStroke ()
    ellipse (245,360,40,10);
    ellipse (275,360,40,10);
        fill (231, 80, 128);
    rect (241,360, 40, 5);

//make the shirt
    noStroke ()
        fill('black');
    arc(260,590,360,280,PI,TWO_PI);
        fill (255, 238, 222);
    ellipse (260, 450, 80, 90);

//make the ears
        fill (255, 238, 222);
    ellipse (150, 280, 60, 60);
    ellipse (370, 280, 60, 60);
    
//make the earings
        fill ('black');
    ellipse (135, 300, 5, 5);
    ellipse (385, 300, 5, 5);
    fill (212,209,205);
    ellipse (137, 280, 3, 3);
    ellipse (390, 265, 4, 4);

//Eyeshadow
        fill ('purple');
    ellipse (210, 255, 55, 45);
    ellipse (310, 255, 55, 45);

 //eyeliner
        fill ('black');
    ellipse (210, 261, 55, 45);
    ellipse (310, 261, 55, 45);
    fill ('black');
 
 //Eyes
        fill('white');
    ellipse(210, 260, 55, 45);
    ellipse(310, 260, 55, 45);
        fill (72, 159, 241);
    stroke ('black');
    strokeWeight(1);
    ellipse (210, 260, 30, 30);
    ellipse (310, 260, 30, 30);
        fill ('black');
    ellipse (210, 260, 10, 10);
    ellipse (310, 260, 10, 10);

//eyelashes right (from left to right)
        fill ('black');
    rect (291,236, 0.1, 7);
    rect (294,233, 0.1, 8);
    rect (297,231, 0.1, 9);
    rect (300,229, 0.1, 9);
    rect (303,228, 0.1, 9);
    rect (306,227, 0.1, 9);
    rect (309,227, 0.1, 9);
    rect (312,227, 0.1, 9);
    rect (315,227, 0.1, 9);
    rect (318,228, 0.1, 9);
    rect (321,229, 0.1, 9);
    rect (324,230, 0.1, 9);
    rect (327,233, 0.1, 8);
    rect (330,236, 0.1, 7);

//eyelashes left (from left to right)
        fill ('black');
    rect (190,236, 0.1, 7);
    rect (193,233, 0.1, 8);
    rect (196,231, 0.1, 9);
    rect (199,229, 0.1, 9);
    rect (202,228, 0.1, 9);
    rect (205,227, 0.1, 9);
    rect (208,227, 0.1, 9);
    rect (212,227, 0.1, 9);
    rect (215,227, 0.1, 9);
    rect (218,228, 0.1, 9);
    rect (221,229, 0.1, 9);
    rect (224,230, 0.1, 9);
    rect (227,233, 0.1, 8);
    rect (230,236, 0.1, 7);

//hair part
        fill (163,129, 92);
    noStroke ()
    rect (260,135,1,40);

//Nose
        fill (245,228,203);
    noStroke ()
    ellipse (260, 300, 20, 50);
    ellipse (260, 320, 30, 30);
    ellipse (270, 325, 20, 20);
    ellipse (250, 325, 20, 20); 
   
//nostril
        fill (240, 219, 190);
    ellipse (270, 330, 15, 10); 
    ellipse (250, 330, 15, 10); 

//freckles
        fill (163,129,92);
    ellipse (240,309, 2,2);
    ellipse (243,305, 2,2);
    ellipse (248,300, 2,2);
    ellipse (251,300, 2,2);
    ellipse (253,310, 2,2);
    ellipse (263,315, 2,2);
    ellipse (266,304, 2,2);
    ellipse (269,305, 2,2);
    ellipse (272,290, 2,2);
    ellipse (275,310, 2,2);
    ellipse (278,304, 2,2);
    ellipse (281,305, 2,2);
    ellipse (284,294, 2,2);
    ellipse (287,308, 2,2);
    ellipse (268,304, 2,2);
    ellipse (257,305, 2,2);

//eyebrows
    stroke(113, 72, 32);
    strokeWeight(3);
    noFill();
    arc(210, 225, 50, 25, PI, TWO_PI, OPEN);
    arc(310, 225, 50, 25, PI, TWO_PI, OPEN);  
    
}

  
