var road1 = {speed = 80, sensor, lights};
var road2 = {speed = 60, sensor, lights};

var green = "green";
var amber = "amber";
var red = "red";

function trafficLights() {
    if (road1.sensor == true && road2.sensor == false) {
        road2.lights = amber;
        setTimeout(road1.speed*100);
        road2.lights = red;
        setTimeout(3000);
        road1.lights = green;
    } else {
        road1.lights = red;
        road2.lights = green;
    }

    if (road2.sensor == true && road1.sensor == false) {
        road1.lights = amber;
        setTimeout(road2.speed*100);
        road1.lights = red;
        setTimeout(3000);
        road2.lights = green;
    } else {
        road1.lights = green;
        road2.lights = red;
    }
}