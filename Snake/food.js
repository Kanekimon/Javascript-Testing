class Food{
    constructor(){
        this.x = constrain(scl*int(random(width/scl)), 0, width);
        this.y = constrain(scl*int(random(height/scl)), 0, height);
    }

    show(){
        push();
        fill(255,0,0);
        rect(this.x, this.y, scl,scl);
        pop();
    }
}