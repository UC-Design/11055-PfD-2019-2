var traffic = 1;

function setup (){
 createCanvas(1000, 1000);
}

function draw (){
    

    fill('black');
    rect(50, 50, 100, 300);
    
    switch (traffic){
        case 1:
            fill ('red');
            circle (100, 100, 80); 
            fill ('white'); 
            circle (100, 200, 80);
            circle (100, 300, 80);
            break;
        case 2:
            fill ('white');
            circle (100, 100, 80); 
            fill ('yellow'); 
            circle (100, 200, 80);
            fill ('white');
            circle (100, 300, 80);
            break;
        case 3:
            fill ('white');
            circle (100, 100, 80);  
            circle (100, 200, 80);
            fill ('green');
            circle (100, 300, 80);
            break;
    }
    
    
    
    }
    
    function mouseClicked () {
        traffic++;
        if (traffic>3){
            traffic = 1;
        }
     
    
}

