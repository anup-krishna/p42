class Drop{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            friction:0.000000000000000000000001,
            frictionAir:0.0001
        }
        this.r=r;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(0,0,255);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

    createthunderbolt1(){
            image(tb1,-100,-50,500,300);
    }
    createthunderbolt2(){
            image(tb2,0,-50,500,300);
    }
    createthunderbolt3(){
            image(tb3,0,-50,500,300);
    }
    createthunderbolt4(){
            image(tb4,-80,-50,500,300);
    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body, {x:random(0,400),y:random(-200,10)});
            Matter.Body.setStatic(this.body,true);
            Matter.Body.setStatic(this.body,false);
        }
    }

}
