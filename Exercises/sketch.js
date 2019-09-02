var ShapeType = 1;

function setup() {
    createCanvas(1000,1000);
}
    
function draw() {
    if(mouseIsPressed){
        fill('red');
        ShapeType++;
    }else{
        fill('green');
    }
    if (ShapeType < 100) {
        ellipse(mouseX, mouseY, 80, 80);
    } else {
        rect(mouseX, mouseY, 80, 80);
    }
    if (ShapeType > 200) {
        ellipse(mouseX, mouseY, 80, 80);
    } else {
        rect(mouseX, mouseY, 100, 200, 80, 150);
    }
}