let snake;
let scl = 20;
let food;
let score = 0;

function setup() {
    createCanvas(600,600);
    snake = new Snake();
    food = new Food();
    frameRate(10);
}

function draw() {
    background(51);
    if(snake.eat(food)){
        food = new Food();
        score++;
    }
    if(snake.death()){
        snake = new Snake();
        score = 0;
    }

    snake.update();
    snake.show();
    food.show();

    fill(255);    
    textSize(32);
    text('Score: ' +  score, width/2, 0+32);
}

function keyPressed(){
    if(keyCode == UP_ARROW && snake.ySpeed != 1){
        snake.dir(0,-1);
    } else if(keyCode == DOWN_ARROW && snake.ySpeed != -1){
        snake.dir(0,1);
    }
    else if(keyCode == RIGHT_ARROW && snake.xSpeed != -1){
        snake.dir(1, 0);
    }
    else if(keyCode == LEFT_ARROW && snake.xSpeed != 1){
        snake.dir(-1,0);
    }
}