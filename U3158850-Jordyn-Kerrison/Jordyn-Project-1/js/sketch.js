//This is not the code used in the selfportrait.html file. This was me making it hard for myself

var c = document.getElementById("mycanvas");
var ctx = c.getContext ("2d");
    

//face
ctx.beginPath();
ctx.ellipse(390,200,87,100,0,0, 2 * Math.PI);
ctx.stroke();

//neck
roundedRect(ctx, 365, 280, 50, 60, 10);

//shoulders

roundedRect(ctx, 300, 320, 180, 80, 25);

    // A utility function to draw a rectangle with rounded corners.

    function roundedRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.lineTo(x, y + height - radius);
        ctx.arcTo(x, y + height, x + radius, y + height, radius);
        ctx.lineTo(x + width - radius, y + height);
        ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
        ctx.lineTo(x + width, y + radius);
        ctx.arcTo(x + width, y, x + width - radius, y, radius);
        ctx.lineTo(x + radius, y);
        ctx.arcTo(x, y, x, y + radius, radius);
        ctx.stroke();
    }


//eyes
//left
ctx.beginPath();
ctx.ellipse(357,180,13,8,0,0, 2 * Math.PI);
ctx.stroke();
//right
ctx.beginPath();
ctx.ellipse(423,180,13,8,0,0, 2 * Math.PI);
ctx.stroke();


//nose

ctx.beginPath();
ctx.moveTo(390, 205);
ctx.lineTo(385, 220);
ctx.lineTo(395, 220);
ctx.closePath();
ctx.stroke();



//mouth
ctx.beginPath();
ctx.arc(390,205,60,0.6, 0.8 * Math.PI);
ctx.stroke();

//hair
//left fringe
ctx.beginPath();
ctx.ellipse(340,145,70,25,2.3,0, 2 * Math.PI);
ctx.stroke();
//right fringe
ctx.beginPath();
ctx.4,0, 2 * Math.PI);
ctx.stroke();
//actual hair
ctx.beginPath();
ctx.ellipse(390,205,120,140,0,0, 2 * Math.PI);
ctx.stroke();



