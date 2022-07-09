function Flower(x,y, radius){
    this.x = x;
    this.y = y;
    this.r = radius;
    this.hitPoints = 5;
    this.toDelete = false;

    this.show = function () {
        fill(255,0,200);
        ellipse(this.x, this.y, this.r*2,this.r*2);
    }

    this.grow = function () {
        this.r = this.r*1.25;
    }

    this.hit = function(damage) {
        this.hitPoints -= damage;
        console.log("Hitpoints: " + this.hitPoints);

        if(this.hitPoints <= 0){
            this.toDelete = true;
        }
    }

    this.move = function () {
        this.x = this.x + xDir;
        this.y = this.y + yDir;
    }
}
