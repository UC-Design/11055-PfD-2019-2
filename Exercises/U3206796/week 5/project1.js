//project one 
/* Pseudocode
DO

Webpage_open
Selfportrait_unchanged

IF	Mousepressed1=true

THEN	change_mouth

ELSE	stay_unchanged

IF	Mousepressed2=true

THEN	move_mouth

ELSE	stay_change1

IF	Mousepressed3=true

THEN	move_mouth

ELSE	stay_change2

IF	Mousepressed4=true

THEN	move_mouth

ELSE	stay_change3

IF	Mousepressed5=true

THEN	revert_to_unchanged_portrait

ELSE	stay_change4

LOOP
*/ 

var flow = 1; /* setting the variable as flow so later on the drawing can change*/

function setup(){
    createCanvas(1000,1000);
    
} /* this sets up a canvas to draw in and use functions etc.*/
function draw(){
    clear();
    strokeWeight(10);
    stroke(2);
    rect(425,600,100,5);
    rect(640,600,100,5); 
    triangle(400, 750, 580, 450, 760, 750);
    circle(580, 435, 150);
    rect(530,750,5,100);
    rect(630,750,5,100);
    rect(555,425,5,3);
    rect(600,425,5,3); 
    /*above is the portrait drawn as it is opened and unchanged*/
    switch(flow){
        case 1:
            rect(550,460,60,3);
        break;
        case 2:
            stroke('red');
            strokeWeight(4);   
            square(580,460,3);
        break;
        case 3:
            stroke('red');
            strokeWeight(5); 
            square(615,430,5);
        break;
        case 4:
            stroke('red');
            strokeWeight(6); 
            square(660,400,5);
        break;    
        case 5:
            stroke('red');
            strokeWeight(6); 
            square(680,350,8);
        break;
    }
} /*The portrait will move so these are the 5 changing cases of the portrait*/

function mouseClicked() {
    switch(flow){
        case 1:
            flow=2;
            break;
        case 2:
            flow=3;
            break;
        case 3:
            flow=4;
            break;
        case 4:
            flow=5;
            break;
        case 5:
            flow=1;
            break;
    
    }
} /*In order for the portrait to change a switch statement is needed, 
this is includes the variable 'flow' that we set at the start of the script*/
