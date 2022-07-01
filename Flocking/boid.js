class Boid
{
    constructor(){
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2, 4));
        this.acceleration = createVector();
        this.maxForce = 0.2;
        this.maxSpeed = 4;
        this.perception = 50;
    }

    edges(){
        if(this.position.x > width){
            this.position.x = 0;
        } else if(this.position < 0){
            this.position.x = width;
        }

        if(this.position.y > height){
            this.position.y = 0;
        } else if(this.position < 0){
            this.position.y = height;
        }
    }

    align(boids){
        let steering = createVector();
        let total = 0;
        for(let other of boids){
            let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if( other != this && d < this.perception){
                steering.add(other.velocity);
                total++;
            }

        }

        if(total > 0){
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    cohesion(boids){
        let steering = createVector();
        let total = 0;
        for(let other of boids){
            let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if( other != this && d < this.perception){
                steering.add(other.position);
                total++;
            }

        }
        
        steering.add(createVector(mouseX, mouseY));
        total++;

        if(total > 0){
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    seperation(boids){
        let steering = createVector();
        let total = 0;
        for(let other of boids){
            let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if( other != this && d < this.perception){
                let diff = p5.Vector.sub(this.position, other.position);
                diff.div(d);
                steering.add(diff);
                total++;
            }

        }

        if(total > 0){
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }


    flock(boids){
        let aligment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let seperation = this.seperation(boids);
    

        aligment.mult(alignForce);
        cohesion.mult(cohesionForce);
        seperation.mult(seperationForce);


        
        this.acceleration.add(seperation);
        this.acceleration.add(aligment);
        this.acceleration.add(cohesion);
    }

    update(){
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);

    }

    angle(cx, cy, ex, ey) 
    {
        var dy = ey - cy;
        var dx = ex - cx;
        var theta = Math.atan2(dy, dx); // range (-PI, PI]
        theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
        //if (theta < 0) theta = 360 + theta; // range [0, 360)
        return theta;
    }


    show(){
        
        strokeWeight(8);
        stroke(255);
        let topPoint = createVector(this.position.x, this.position.y - boidSize);
        let rightPoint = createVector(this.position.x + boidSize/2, this.position.y + boidSize);
        let leftPoint = createVector(this.position.x - boidSize/2, this.position.y + boidSize);
        triangle(rightPoint.x, rightPoint.y, leftPoint.x, leftPoint.y,topPoint.x, topPoint.y);
        this.acceleration.set(0,0);
    }


}