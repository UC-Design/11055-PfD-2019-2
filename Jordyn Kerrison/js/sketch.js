var c = document.getElementById("mycanvas");
var ctx = c.getContext ("2d");
    

//face
ctx.beginPath();
ctx.arc(390,200,100,0, 2 * Math.PI);
ctx.stroke();




//eyes
ctx.beginPath();
ctx.arc(355,175,10,0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(425,175,10,0, 2 * Math.PI);
ctx.stroke();


//nose

ctx.beginPath();
ctx.fillRect(200,300,50,50);
ctx.stroke();





//mouth
ctx.beginPath();
ctx.arc(390,205,60,0, 1 * Math.PI);
ctx.stroke();

