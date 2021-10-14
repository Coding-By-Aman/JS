let x = 0;
let y = 0;
var nam;
var shape;
let font;

function preload() {
    font = loadFont('assets/OpenSans-Bold.ttf');
}

function setup() {
    createCanvas(displayWidth, 600, WEBGL);
    nam = new Names();
    shape = new Shapes();
}

function draw() {
    background(0);
    nam.show();
    shape.plane();
    shape.sphere();
    shape.ellipsoid();
    shape.box();
    shape.cylinder();
    shape.cone();
    shape.torus();
}