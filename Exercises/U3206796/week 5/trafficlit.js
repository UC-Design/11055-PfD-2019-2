var flow = 1;

function setup(){
    createCanvas(1200,900);
    
} 
function draw(){
    fill('black');
    rect(120,120,200,500); 
    
        switch(flow){
            case 1:
                    fill('red');
                    circle(220, 200, 100);
                    fill('white');
                    circle(220, 350, 100);
                    fill('white');
                    circle(220, 500, 100);
                break;
            case 2:
                    fill('white');
                    circle(220, 200, 100);
                    fill('yellow');
                    circle(220, 350, 100);
                    fill('white');
                    circle(220, 500, 100);
                break;
            case 3:
                    fill('white');
                    circle(220, 200, 100);
                    fill('white');
                    circle(220, 350, 100);
                    fill('green');
                    circle(220, 500, 100);
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
                    flow=1;
                    break;
        }
     } 
         