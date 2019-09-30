var stage=1;

function setup() {
    createCanvas(640,480);
    background("blue");
    
    fill("black")
    rect(255, 100, 130, 280, 20);
    fill("black")
    rect(300, 360, 40, 140, 20);

}

function draw() {
    
    if (mouseIsPressed) {

        stage+=1;
        if (stage>30)
        { 
            stage=1;
        }

    if (stage>20){
        fill('#ff0000');
        ellipse (320, 155, 80, 80)
        fill (255, 255, 255)
        ellipse (320, 240, 80, 80)
        fill (255, 255, 255)
        ellipse (320, 325, 80, 80)
    }

    if (stage>10 && stage<20){
        fill(255, 255, 255);
        ellipse (320, 155, 80, 80)
        fill ('#ffff00')
        ellipse (320, 240, 80, 80)
        fill (255, 255, 255)
        ellipse (320, 325, 80, 80)
    }

    if (stage<10){
        fill(255, 255, 255);
        ellipse (320, 155, 80, 80)
        fill (255,255,255)
        ellipse (320, 240, 80, 80)
        fill ('#00ff00')
        ellipse (320, 325, 80, 80)
        }

}else{

    if (stage>20){
        fill('#ff0000');
        ellipse (320, 155, 80, 80)
        fill (255, 255, 255)
        ellipse (320, 240, 80, 80)
        fill (255, 255, 255)
        ellipse (320, 325, 80, 80)
    }

    if (stage>10 && stage<20){
        fill(255, 255, 255);
        ellipse (320, 155, 80, 80)
        fill ('#ffff00')
        ellipse (320, 240, 80, 80)
        fill (255, 255, 255)
        ellipse (320, 325, 80, 80)
    }

    if (stage<10){
        fill(255, 255, 255);
        ellipse (320, 155, 80, 80)
        fill (255,255,255)
        ellipse (320, 240, 80, 80)
        fill ('#00ff00')
        ellipse (320, 325, 80, 80)
        }
}
}