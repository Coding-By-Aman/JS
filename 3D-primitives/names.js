function Names(){    
    this.show = function(){
        fill(250)
        textFont(font);
        textSize(14);
        text('SPHERE', - displayWidth/2.3, 250);
        text('PLANE', - displayWidth/3.6, 250);
        text('ELLIPSOID', -displayWidth/6.5, 250);
        text('BOX', -20, 250);
        text('CONE', displayWidth/8, 250);
        text('CYLINDER', displayWidth/4, 250);
        text('TORUS', displayWidth/2.6, 250);
    }
}