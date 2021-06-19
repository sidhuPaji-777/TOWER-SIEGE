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
  }

  display(rung){
    var pos=this.body.position;
    var colour = rung;
    fill(colour);
    stroke("White");
    strokeWeight(0.5);
    rect(pos.x, pos.y, this.width, this.height);
    rectMode(CENTER);
    // push();
    // translate(this.body.position.x, this.body.position.y);
    // pop();
  }

}
// }