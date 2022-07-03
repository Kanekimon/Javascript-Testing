class Box{
    constructor(x, y, z, r_, cr,cg,cb){
        this.position = createVector(x,y,z);
        this.r = r_;
        this.color = createVector(cr,cg,cb);
    }

    show(){
        push();
        translate(this.position.x, this.position.y, this.position.z);
        strokeWeight(4);
        fill(this.color.x, this.color.y, this.color.z);
        box(this.r);
        pop();
    }

    generate(){
        var boxes = [];
        for(let x = -1; x < 2; x++){
            for(let y = -1; y < 2;y++){
                for(let z = -1; z < 2; z++){

                    let sum = abs(x) + abs(y) + abs(z);

                    if(sum > 1){

                    let newR = this.r/3;
                    let b = new Box(this.position.x + x*newR,this.position.y + y*newR,this.position.z + z*newR, newR, random(255), random(255), random(255));
                    boxes.push(b);
                    }
                }
            }
        }
        return boxes;
    }
}