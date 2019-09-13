function setup(){
    createCanvas(640,480);
}
function draw(){
    if (mouseIsPressed) {
        fill(0);
        strokeWeight(4);
    }else{
        fill(326);
        strokeWeight(0);
    }
    ellipse(mouseX, mouseY,80, 80);

    //stroke(350)
}