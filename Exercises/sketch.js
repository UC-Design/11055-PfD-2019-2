var ShapeType = 1;

function setup() {
    createCanvas(1000,1000);
}
    
function draw() {
    if(mouseIsPressed){
        fill('blue');
        ShapeType++;
    }else{
        fill('orange');
    }
    strokeWeight (5);
    if (ShapeType < 100) {
        ellipse(mouseX, mouseY, 80, 80);
    } else {
        rect(mouseX, mouseY, 80, 80);
    }
}