
var ship;
var flowers = [];
var drops = [];

var xDir = 1;
var yDir = 0;

var flowerRadius = 15;

function setup() {
    createCanvas(600,400);
    ship = new Ship();

    var maximum = floor(width/((flowerRadius*2)*3));

    for(var i = 0; i < maximum; i++){
        console.log(i);
        flowers[i] = new Flower(i*80+80,60, flowerRadius);
    }
    
}

function draw() {
    background(51);
    ship.show();
    ship.move();

    moveDrops();
    edgeCheck();
    deleteDrops();
    deleteFlowers();
}

function edgeCheck() {
        var edge = false;
    for(var i = 0; i < flowers.length; i++){
        flowers[i].show();
        flowers[i].move();
        if(flowers[i].x + flowers[i].r > width){
            edge = true;
        }
        else if(flowers[i].x - flowers[i].r < 0){
            edge = true;
        }
    }

    if(edge){
        yDir = 10;
        xDir *= -1;
    }
    else{
        yDir = 0;
    }
}

function moveDrops() {
        for(var i = 0; i < drops.length; i++){
        drops[i].show();
        drops[i].move();
        hitCheck(drops[i]);
    }
}

function hitCheck(drop){
        for(var j = 0; j < flowers.length; j++){
            if(drop.hits(flowers[j])){
               flowers[j].hit(1);
               drop.evaporate();
            }
        }
}


function deleteDrops() {
        for(var i = drops.length-1; i >= 0;i--){
        if(drops[i].toDelete){
            drops.splice(i,1);
        }
    }
}

function deleteFlowers() {
        for(var i = flowers.length-1; i >= 0;i--){
        if(flowers[i].toDelete){
            flowers.splice(i,1);
        }
    }
}


function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        ship.setDir(1);
    }   
    else if(keyCode === LEFT_ARROW){
        ship.setDir(-1);
    }
    
    if(keyCode == 32){
        var drop = new Drop(ship.x, ship.y-10);
        drops.push(drop);
    }
}

function keyReleased() {
    if(keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW){
        ship.setDir(0);
    }
}