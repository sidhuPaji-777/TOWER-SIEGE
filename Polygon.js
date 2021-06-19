class Polygon
{
    constructor(x,y,r)
    {
        var option = {
            'restitution' : 0,
            "isStatic": false,
            'friction': 1,
            'density':1.2
        }

        this.r = r;
        this.body=Bodies.circle(x,y,this.r,option);
        World.add(world,this.body);
        

        this.image = loadImage("polygon.png");
    }
    
    display()
    {
        var pos=this.body.position;
        push();
        fill(rgb(255, 204, 200));
        strokeWeight(1);
        stroke("Black")
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r);  
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 65, 65);
        pop() 
    }

}