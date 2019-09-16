// Setting variables for colours of things

var skinlight = ('#fad8c0');
var skinmedium = ('#fad2b6');
var skindark = ('#f0bc97')
var hair = ('#9eff3d');
var hairmedium = ('#97f538');
var hairdark = ('#8de635');
var shirt=('#3b3b3b');
var jacketdark = ('#a16e40');
var jacket = ('#b58962');

// variable for the hair colour switch
var haircolour = 1;

function setup (){
    createCanvas (500, 500);
}




function draw (){
   
// setting different cases for different hair colours. 
//Case 1 is green, case 2 is red, case 3 is blue
    switch (haircolour){
        case 1:
            hair = ('#9eff3d');
            hairmedium = ('#97f538');
            hairdark = ('#8de635');
            break;
        case 2:
            hair = ('#f70c0c');
            hairmedium = ('#e60b0b');
            hairdark = ('#cc0a0a');
            break; 
        case 3:
            hair = ('#0000ff');
            hairmedium = ('#0000e3');
            hairdark = ('#0202bf');
            break;
    }
   
   
   
   
   
    background ('grey');

    // making the illustration lineless, no stroke on any of the shapes
    noStroke();

    // creating the base long hair
    fill(hairmedium);
    arc(250, 185, 220, 200, PI, TWO_PI);

    rect (140, 178, 220, 250);

    fill (hairdark);
    ellipse (250, 250, 180, 300);


    // creating torso with jacket and shirt and hood on jacket
    fill (jacket);
    ellipse (250, 370, 200, 60);

    fill (jacketdark);
    ellipse (250, 370, 160, 50);

    fill (shirt);
    rect (150, 370, 200, 200);

    //jacket
    fill (jacket);
    ellipse (150, 520, 90, 300);

    ellipse (350, 520, 90, 300);

    rect (150, 370, 60, 200);

    rect (290, 370, 60, 200);

    
    // jacket shading
    fill (jacketdark);

    ellipse (180, 475, 60, 100);

    ellipse (320, 475, 60, 100);

    triangle (195, 415, 195, 370, 150, 370);

    triangle (305, 415, 305, 370, 350, 370);

    rect (195, 370, 15, 30);

    rect (290, 370, 20, 30);

    
    //jacket
    fill (jacket);

    rect (180, 480, 30, 90);

    rect (290, 480, 30, 90);

    ellipse (180, 460, 50, 120);

    ellipse (320, 460, 50, 120);

    // jacket shading, where the jacket folds and becomes the hood
    triangle (195, 405, 195, 370, 150, 370);

    triangle (305, 405, 305, 370, 350, 370);

    fill (jacketdark);
    triangle (195, 395, 195, 370, 170, 370);

    triangle (300, 400, 300, 370, 330, 370);

    triangle (290, 500, 290, 400, 320, 400);

    triangle (210, 500, 210, 400, 180, 400);

    fill (jacket);
    triangle (290, 500, 290, 395, 315, 395);

    triangle (210, 500, 210, 395, 185, 395);

    fill (jacketdark);
    triangle (290, 500, 290, 390, 310, 390);

    triangle (210, 500, 210, 390, 190, 390);
    
    // neck
    fill (skinmedium);
    rect(210, 300, 80, 80);

    ellipse (250, 380, 80, 60);

    //neck shadow
    fill (skindark);
    ellipse (250, 322, 88, 60);

    //head
    fill(skinlight);
    ellipse(250, 220, 200, 250);

    //eyes
    fill ('white');
    ellipse (200, 230, 40, 40);

    arc (200, 225, 40, 45, TWO_PI, PI);

    ellipse (300, 230, 40, 40);

    arc (300, 225, 40, 45, TWO_PI, PI);

    fill ('#ada755');
    ellipse (200, 235, 20, 30);

    ellipse (300, 235, 20, 30);

    //pupils
    fill (shirt);
    ellipse (200, 234, 10, 20);

    ellipse (300, 234, 10, 20);

    //eyelids
    fill (skindark);
    arc (200, 225, 40, 30, PI, TWO_PI);
    arc (300, 225, 40, 30, PI, TWO_PI);

    //nose
    triangle (250, 240, 250, 280, 260, 280);

    //lips
    fill ('#f0ac97');
    triangle (250, 305, 245, 300, 227, 305);
    triangle (250, 305, 255, 300, 274, 305);

    arc (250, 305, 45, 25, TWO_PI, PI);

    fill (skindark);
    arc (250, 307, 43, 22, TWO_PI, PI);
    
    fill (skinlight);
    rect (230, 291, 40, 10);

    //eyebrows
    fill (jacket);

    triangle (330, 210, 315, 200, 310, 205);
    rect (275, 200 , 40, 5);

    triangle (170, 210, 185, 200, 190, 205);
    rect (185, 200 , 40, 5);

    // creating the fringe
    fill (hair);
    arc (250, 190, 200, 200, PI, TWO_PI);

    //creating fringe gaps
    fill (skinmedium);

    triangle (240, 125, 215, 190, 225, 190);

    triangle (265, 125, 275, 190, 285, 190);

    triangle (295, 135, 310, 190, 320, 190);

    triangle (205, 135, 190, 190, 180, 190);

    //fringe gap hair shadows
    fill (hairmedium);

    triangle (240, 125, 210, 190, 215, 190);

    triangle (265, 125, 285, 190, 290, 190);

    triangle (295, 135, 320, 190, 325, 190);

    triangle (205, 135, 180, 190, 175, 190);
    
}


// make it so that when the mouse is clicked, it changes the hair colour value,
// in order to switch the hair colour to a different colour. 
// And checks the current value, so that when clicked again, it switches the colour.
    function mouseClicked () {
       haircolour++;
       if (haircolour>3) {
           haircolour = 1;
       }
    
    }



    


