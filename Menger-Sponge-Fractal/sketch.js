let a = 0;
let b;
let sponge = []

function setup() {
    createCanvas(400,400, WEBGL);
    b = new Box(0,0,0,200, random(0,255), random(0,255), random(0,255));
    sponge.push(b);
}

function draw() {
    background(51);
    stroke(255);


    rotateX(a);
    rotateY(a * 0.5);
    rotateZ(a * 0.01);

    for(const box of sponge){
        box.show();
    }


    a+= 0.01;
}

function mousePressed(){

    let nextGen = []

    for(const box of sponge){
        let newBoxes = box.generate();
        nextGen.push(...newBoxes);
        console.log(nextGen.length);
    }



    sponge = nextGen;
}