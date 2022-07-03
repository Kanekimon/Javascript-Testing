class Snake{
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.total = 0;
        this.tail = [];
    }

    update(){
        if(this.total == this.tail.length){
            for(let i = 0; i < this.tail.length-1; i++){
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total-1] = createVector(this.x, this.y);

        this.x = this.x + this.xSpeed * scl;
        this.y = this.y + this.ySpeed * scl;

        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
    }

    show(){
        fill(255);

        for(let i = 0; i < this.total;i++){
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }

        rect(this.x, this.y, scl,scl);
    }

    eat(food){
        if(food.x == this.x && food.y == this.y){
            this.total += 1;
            return true;
        }
        return false;
    }

    dir(xDir, yDir){
        this.xSpeed = xDir;
        this.ySpeed = yDir;
    }

    death(){
        for(let i = 0; i < this.tail.length; i++){
            if(this.tail[i].x == this.x && this.tail[i].y == this.y){
                this.total = 0;
                this.tail = [];
                return true;
            }
        }
        return false;
    }
}