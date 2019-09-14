
var c = document.getElementById("mycanvas");
var ctx = c.getContext ("2d");
    
//rectangles
rect(0,0,150,75, "green");
rect(50,50,150,75, "red");
rect(100,100,150,75, "yellow");
    
    function rect (x,y,width,height, color){
    ctx.fillstyle = color;
    ctx.fillRect(x,y,width,height, color);
    }
    
//circle
ctx.beginPath();
ctx.arc(390,200,100, 0.4 * Math.PI, 1.5 * Math.PI);
ctx.stroke();
