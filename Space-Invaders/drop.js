function Drop(x,y){
    this.x = x;
    this.y = y;
    this.r = 5;
    this.toDelete = false;

    this.show = function () {
        noStroke();
        fill(150,0,200);
        ellipse(this.x, this.y, this.r*2,this.r*2);
    }

    this.move = function () {
        this.y = this.y - 1;
    }
    
    this.hits = function (flower) {
        var d = dist(this.x, this.y, flower.x, flower.y);
        if(d < this.r + flower.r){
            return true;
        }
        return false;
    }

    this.evaporate = function () {
        this.toDelete = true;
    }
}
