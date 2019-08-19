var road1 = "red";
var road2 = "red";
var pressurePlateRoad1 = false;
var pressurePlateRoad2 = false;

function trafficLight() {
  while (pressurePlateRoad2 == false) {
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
  }
}
