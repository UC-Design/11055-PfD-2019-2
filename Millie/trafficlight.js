//TRAFFIC LIGHT SEQUENCE

//Setting up variables for lights and sequence
var red_li = 'red';
var yellow_li = 'black';
var green_li = 'black';
var sequence = 0;
var count = 0;
var popup = "Traffic light ahead!";
var rd = "STOP!";
var yllw = "GET READY TO STOP";
var grn = "GO!";

//Pop up alert
//window.alert(popup);

//Setting up canvas parameters
function setup(){
    createCanvas(200, 400);
}

//Creating the traffic lights
function draw(){
    strokeWeight(0);
    background('pink');
    fill(80);
    rect(50, 50, 100, 300);
    fill(red_li);
    circle(100, 100, 80);
    fill(yellow_li);
    circle(100, 200, 80);
    fill(green_li);
    circle(100, 300, 80); 
}


//Changing traffic lights on mouse click
function mouseClicked(){
    if(mouseY <= 200){
        if(sequence == 0){
            sequence = 1;
            red_li = 'black';
            yellow_li = 'yellow';
        } else if (sequence == 1){
            sequence = 2;
            yellow_li = 'black';
            green_li = 'green';
        }else if (sequence == 2){
            sequence = 0;
            green_li = 'black';
            red_li = 'red';
        }
    }
}


//Traffic light commands appear on mouse click
/*function mouseClicked(){
        if(count == 0){
            document.write(rd);
        }else if (count == 1){
            document.write(yllw);
        }else if (count == 2){
            document.write(grn);
        }
    }*/