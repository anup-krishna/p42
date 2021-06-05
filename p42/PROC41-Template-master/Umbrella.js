class Umbrella {
    constructor(x, y,r) {
      var options = {
      isStatic:true
      }
      this.body = Bodies.circle(x, y,r,options);
      this.r = r;
      World.add(world, this.body);
      bruce1 = createSprite(this.body.position.x,this.body.position.y);
      bruce1.addAnimation("anime",bruceimg);
      bruce1.scale = 0.32;     
    }
  }
  