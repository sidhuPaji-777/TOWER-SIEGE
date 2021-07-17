class Blocks
{
constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        isStatic : false
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

    this.visibility=255;
  }

  display(rung){
    var pos=this.body.position;
    var colour = rung;
    var angle = this.body.angle;

    var BgC = rgb(153, 255, 255);

    if((this.body.speed)<4)
    {
    // this.visibility=this.visibility-10;
    push();

    translate(0, 0);
    rotate(angle);
    fill(colour);
    stroke("White");
    strokeWeight(0.5);
    rect(pos.x, pos.y, this.width, this.height);
    rectMode(CENTER);
    
    pop();
  }

  else{
    
    World.remove(world,this.body);
    push();
    tint(255,this.visibility);
    this.visibility=this.visibility-3;
    pop();
  }
    // if(this.body.speed>3)

  }

}
