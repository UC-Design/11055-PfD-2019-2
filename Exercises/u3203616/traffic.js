let a = 1;

function setup(){
            createCanvas(640,480);
            stroke(0);
}

function draw(){
    fill(0);
    rect(30, 30, 100, 320);
    stroke(255);
    
if (a == 1){
        fill ('red');
    }else{
        fill('grey');
        
    }
    ellipse(80, 90, 80, 80);
    
if (a == 2){
        fill ('yellow');
    }else{
        fill ('grey');
    }
     ellipse(80, 190, 80, 80);
    
if (a == 3){
    fill ('green');
}else{
    fill ('grey');
}
ellipse(80, 290, 80, 80);
}

function mouseClicked() {
    switch (a) {
        case 1:
            a = 2;
            break;
        case 2:
            a = 3;
            break;
        case 3:
            a = 1;
            break;
    }
}

var rectx = 30;
var recty = 30;
    
    clear();
    rectx = mouseX;
    recty = mousey;
        