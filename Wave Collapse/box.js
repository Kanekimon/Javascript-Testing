class Box{
    constructor(pX, pY, pR, pG, pB, allPos){
        this.possibilites = allPos;
        this.x = pX;
        this.y = pY;
        this.r = pR;
        this.g = pG;
        this.b = pB;
        this.collapsed = false;
    }

    update()
    {
        
    }

    show()
    {
        textSize(8);
    
        let out = this.possibilitiesToString();
    

        fill(this.r, this.g, this.b);
        rect(this.x,this.y, dimensions, dimensions);
        fill(50)
        text(out, this.x, this.y, dimensions/2);
    }

    possibilitiesToString(){
        var output = "";
        for(let p in this.possibilites){
            output += ""+p +",";
        }
        output = output.substring(0, output.length-1);
        return output;
    }

    distance(x1, y1, x2,y2){
        var a = x1-x2;
        var b = y1-y2;
        return Math.sqrt(a*a + b*b);
    }

    reColor(){
        if(this.possibilites.length > 0){
            var randIndex = random(this.possibilites);
            var color = colors[randIndex];
            this.r = color.x;
            this.g = color.y;
            this.b = color.z;
            this.possibilites = [];
        }
    }

    clicked(){
        var dist = this.distance(mouseX, mouseY, this.x + dimensions/2, this.y + dimensions/2);
        if(dist < dimensions/2){
            return true;
        }
        return false;
    }

    triggered(x, y){
        var dist = this.distance(x, y, this.x + dimensions/2, this.y + dimensions/2);
        if(dist < dimensions/2){
            return true;
        }
        return false;
    }

    randomColor(){
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
        this.collapsed = true;
    }

}