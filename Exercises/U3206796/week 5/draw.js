//project one 
var flow = 1;

function setup(){
    createCanvas(2000,2000);
    
} 
function draw(){
    fill(235,200,178);
        ellipse(600,400,340,460);
    fill(173,216,270)
        circle(545, 300, 40);
        circle(655, 300, 40);

/*hair*/
noFill();
beginShape();
curveVertex(600,150);
curveVertex(550,250);
curveVertex(400,400)
endShape();
        
    switch(flow){
        case 1:
            fill('pink');
            rect(525,500,150,20);
        break;
        case 2:
            fill('red');
            square(590,480,30);
        break;
        case 3:
            fill('red');
            square(575,480,55);
        break;
        case 4:
            fill('pink');
            rect(525,500,150,20);
        break;
    
    }
}

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
                flow=1;
                break;
    }
} 
