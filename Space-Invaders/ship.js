function Ship() {
    this.x = width/2;
    this.y = height-20;
    this.xDir = 0;

    this.show = function() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, height-20, 20,20);
    }

    this.setDir = function (dir) {
        this.xDir = dir;
    }

    this.move = function () {
        this.x += this.xDir*5;
    }
}