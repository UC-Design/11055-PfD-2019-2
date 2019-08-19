var road1 = "red";
var road2 = "red";
var pressurePadRoad1;
var pressurePadRoad2;

do {
  road1 = "green";
  setTimeout(120000);
} while (pressurePadRoad1 == false);

if (pressurePadRoad2 == true && pressurePadRoad1 == false) {
  road1 = "amber";
  setTimeout(5000);
  road1 = "red";
}

if (pressurePadRoad1 == true && pressurePadRoad2 == false) {
  road2 = "amber";
  setTimeout(5000);
  road2 = "red";
}
