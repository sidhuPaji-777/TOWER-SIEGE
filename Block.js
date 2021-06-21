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

    this.Visibility=255;
  }

  display(rung){

    if((this.body.speed)<4)
    {
    var pos=this.body.position;
    var colour = rung;
    this.Visibility=this.Visibility-10;

    fill(colour);
    stroke("White");
    strokeWeight(0.5);
    rect(pos.x, pos.y, this.width, this.height);
    rectMode(CENTER);
    push();
    
    pop();

  }

  else{
    
    World.remove(world,this.body);
    console.log("done");
    // this.Visibility=this.Visibility-0;
    // tint(this.Visibility);
    tint(255, 126)
  }
    

  }

}
