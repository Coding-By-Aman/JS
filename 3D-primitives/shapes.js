function Shapes(){
    this.sphere = function(){
        noFill();
        stroke(255);
        push();
        translate(-displayWidth/2.5, 0);
        rotateShape();
        sphere(50);
        pop();
    } 
    this.plane = function(){
        noStroke();
        fill(255);
        push();
        translate(-displayWidth/4, 0);
        rotateShape();

        plane(75, 75);
        pop();
    }   
    this.ellipsoid = function(){
        noFill();
        stroke(255);
        push();
        translate(-displayWidth/8, 0);
        rotateShape();
        ellipsoid(30, 40, 60);
        pop();
    }

    this.box = function(){
        noFill();
        stroke(255);
        push();
        translate(0, 0);
        rotateShape();
        box(80);
        pop();
    }
    this.cone = function(){
        noFill();
        stroke(255);
        push();
        translate(displayWidth/7, 0);
        rotateShape();
        cone(40, 70);
        pop();
    }
    this.cylinder = function(){
        noFill();
        stroke(255);
        push();
        translate(displayWidth/3.5, 0);
        rotateShape();
        cylinder(30, 80);
        pop();
    }

    this.torus = function(){
        noFill();
        stroke(255);
        push();
        translate(displayWidth/2.5, 0);
        rotateShape();
        torus(35, 18);
        pop();
    }
}
function rotateShape(){
    x = lerp(x, mouseX, 0.01);
    y = lerp(y, mouseY, 0.01);
    rotateX( x * 0.01);
    rotateY(y * 0.01);
}