//canvas size andcolour set up so that it can flash colours.
    function setup() {
        createCanvas(550, 550);
        backgroundColor = color(100, 50, 150);
        
      }
      
      function draw() {
        backgroundColor.setGreen(128 + 128 * sin(millis() / 1000));
        background(backgroundColor);
        fill('rgba(100%,0%,100%,0.5)');
        strokeWeight(0)
        //I made the stroke weight 0 to get rid of the ugly black lines
        ellipse(230, 260, 330, 330);
        
//I placed the fill colour above the shape i wanted to fill.
        fill('#fae');
        ellipse(120, 120, 80, 80);

        fill('rgba(0,255,0, 0.25)');
        rect(100, 100, 100, 200, 20, 15, 10, 5);

        fill(color(0, 0, 255));
        rect(200, 265, 55, 55, 20);

        fill('#fae');
        ellipse(350, 120, 80, 80);

        fill('rgba(100%,0%,100%,0.5)');
        arc(230, 350, 80, 80, 0, PI + QUARTER_PI, PIE);
        fill(51);
        arc(300, 240, 60, 60, 5, PI + QUARTER_PI);

//each shape is put in order ontop of eachother to make a face.
      }


    
      