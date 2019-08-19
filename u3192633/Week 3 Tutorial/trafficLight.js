/*var red = "red";
var amber = "amber";
var green = "green";
var road1 = {speed = 80, sensor, light};
var road2 = {speed = 60, sensor, light};

function trafficLights() {
  if (road1.sensor == true && road2.sensor == false) {
    road2.light = amber;
    setTimeout(road1.speed*100);
    road2.light = red;
    setTimeout(3000);
    road1.light = green;
  } else {
    road1.light = red;
    road2.light = green;
  }

  if (road2.sensor == true && road1.sensor == false) {
    road1.light = amber;
    setTimeout(road2.speed*100);
    road1.light = red;
    setTimeout(3000);
    road2.light = green;
  } else {
    road2.light = red;
    road1.light = green;
  }
}*/

function sirTrafficLights() {
  var r1_light = 3;
  var r2_light = 3;
  var red = "red";
  var amber = "amber";
  var green = "green";
  var question = "<br>";

  for (var t = 1; t < 5; t++) {
    switch (r1_light) {
      case 1:
        text = "Road 1 light " + green;
        r2_light = 3;
        r1_light = 1;
        break;
      case 2:
        text = "Read 1 light " + amber;
        r2_light = 2;
        r1_light = 2;
        break;
      case 3:
        text = "Road 1 light " + red;
        r2_light = 1;
        r1_light = 3;
        break;
    }
    document.write(text + question);
    switch (r2_light) {
      case 1:
        text = "Road 2 light " + green;
        r1_light = 3;
        r2_light = 1;
        break;
      case 2:
        text = "Read 2 light " + amber;
        r1_light = 2;
        r2_light = 2;
        break;
      case 3:
        text = "Road 2 light " + red;
        r1_light = 1;
        r2_light = 3;
        break;
    }
    document.write(text + quesion);
  }
}
