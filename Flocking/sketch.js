const flock = []

var alignForce = 1;
var alignForceMax = 5;
var alignStep = 0.1;

var cohesionForce = 1;
var cohesionForceMax = 5;
var cohesionStep = 0.1;

var seperationForce = 1;
var seperationForceMax = 5;
var seperationStep = 0.1;

var boidSize = 1;
var boidSizeMax = 10;
var boidSizeStep = 0.1;

var gui;

function setup(){
    createCanvas(windowWidth, windowHeight);
    for(let i = 0; i < 100; i++)
        flock.push(new Boid());

    gui = createGui('p5.gui');
    gui.addGlobals('alignForce', 'cohesionForce', 'seperationForce', 'boidSize');
    
}

function draw() {
    background(51);

    for(let boid of flock){
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}