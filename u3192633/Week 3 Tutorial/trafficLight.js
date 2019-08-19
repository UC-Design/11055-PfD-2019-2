var red = "red";
var amber = "amber";
var green = "green";
var road1Light = red;
var road2Light = red;
var pressurePlateRoad1 = false;
var pressurePlateRoad2 = false;

function trafficLight() {
  if (pressurePlateRoad1 == true) {
    road2Light = amber;
    setTimeout(5000);
    road2Light = red;
    setTimeout(5000);
    road1Light = green;
  } else if (pressurePlateRoad2 == true) {
    road1Light = amber;
    setTimeout(5000);
    road1Light = red;
    setTimeout(5000);
    road2Light = green;
  }

  /*while (pressurePlateRoad2 == false) {
    road1 = "green";
    setTimeout(120000);
  }

  while (pressurePlateRoad2 == true && pressurePlateRoad1 == false) {
    road1 = "orange";
    setTimeout(5000);
    road1 = "red";
  }

  while (pressurePlateRoad1 == true && pressurePlateRoad2 == false) {
    road2 = "orange";
    setTimeout(5000);
    road2 = "red";
  }*/
}
