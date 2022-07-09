
let dimensions = 50;
let boxes = [];
let rules = [];
let colors;
let maskX = []
let maskY = []

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    maskX = [0,1,0 ,-1];
    maskY = [1 ,0,-1 ,0];
    colors = [createVector(255,0,0), createVector(0,255,0), createVector(0,0,255), createVector(255,165,0), createVector(255,255,0), createVector(181,0,181)];
    createRules();
    createGrid();
}

function draw() {
    for(let i = 0; i < boxes.length; i++){
        boxes[i].show();
    }
}

function createGrid() {
    allPosibilites = [0,1,2,3,4,5]
    for(let x = 0; x < windowWidth; x += dimensions){
        for(let y = 0; y < windowHeight; y += dimensions){
            randVec = random(colors);
            boxes.push(new Box(x,y,255,255,255, allPosibilites));

        }
    }
    console.table(boxes);
}

function createRules() 
{
    // r = 0
    // g = 1
    // b = 2
    // o = 3
    // y = 4
    // p = 5

    zero = [0,3,4,5]
    one = [1,2,3,4]
    two = [1,2,4]
    three = [0,1,3,4]
    four = [0,1,3,4]
    five = [0,2,3]
}

function getNeighbour(centerBox, boxesToUpdate) 
{
    var index = (centerBox.x/dimensions) * (floor(height/dimensions)+1) + (centerBox.y/dimensions)

    boxesToUpdate = []

    for(let i = 0;i < maskX.length; i++)
    {
        var xShift = (floor(height/dimensions)+1) * maskX[i]
        newIndex = index + maskY[i] + xShift
        if (newIndex > 0 && newIndex < boxes.length && !boxes[newIndex].collapsed){
            boxesToUpdate.push(boxes[newIndex]);
        }
    }
    return boxesToUpdate;
}

function queueAllUpdates(clickedBox) {
    
    boxesToUpdate = [];

    boxesToUpdate = getNeighbour(clickedBox, boxesToUpdate);

    maxDepth = 1000;

    while(maxDepth > 0 && boxesToUpdate.length > 0)
    {
        boxesToUpdate = boxesToUpdate.concat(getNeighbour(boxesToUpdate[0], boxesToUpdate));
        boxesToUpdate[0].randomColor();
        boxesToUpdate.shift();
        maxDepth -= 1;
    }
}


function mouseClicked() 
{
    if(mouseX < 0 || mouseY < 0)
        return;
    console.log(mouseX);

    var clickedBox;

    for(let i = 0; i < boxes.length;i++){
        if(boxes[i].clicked())
            clickedBox = boxes[i];
    }

    if(clickedBox != null){
        queueAllUpdates(clickedBox);
    }

}


