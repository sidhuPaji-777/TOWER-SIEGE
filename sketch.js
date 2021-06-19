const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var stand1, stand2, ground;
var bolck1, bolck2, bolck3, bolck4, bolck5, bolck6, bolck7, bolck8, bolck9, bolck10, bolck11, bolck12, bolck13, bolck14, bolck15, bolck16, bolck17, bolck18, bolck19, bolck20, bolck21, bolck22, bolck23, bolck24, bolck25;
var polygon;


function preload()
{
	
}



function setup()
{
    createCanvas(1365, 650);

    engine = Engine.create();
	world = engine.world;

    // Creating Stands
    stand1 = new Ground(width/2-90, height/2+200, 250, 15);
    stand2 = new Ground(1100, 360, 210, 15);

    // Creating ground
    ground = new Ground(width/2, height/2+310, 1400, 15);

    // Creating Polygon
    polygon = new Polygon(160, 290, 40);

    // Creating Rope
	rope = new Rope(polygon.body, {x:160,y:290});


    // Creating blocks
    bolck1 = new Blocks(510, 489, 40, 55);
    bolck2 = new Blocks(551, 489, 40, 55);
    bolck3 = new Blocks(592, 489, 40, 55);
    bolck4 = new Blocks(633, 489, 40, 55);
    bolck5 = new Blocks(674, 489, 40, 55);

    bolck6 = new Blocks(530, 432, 40, 57);
    bolck7 = new Blocks(571, 432, 40, 57);
    bolck8 = new Blocks(612, 432, 40, 57);
    bolck9 = new Blocks(653, 432, 40, 57);

    bolck10 = new Blocks(550, 373, 40, 59);
    bolck11 = new Blocks(591, 373, 40, 59);
    bolck12 = new Blocks(632, 373, 40, 59);

    bolck13 = new Blocks(570, 312, 40, 60);
    bolck14 = new Blocks(611, 312, 40, 60);

    bolck15 = new Blocks(592, 251, 40, 61);
    
    //Neew one
    bolck16 = new Blocks(1030, 320, 40, 60);
    bolck17 = new Blocks(1071, 320, 40, 60);
    bolck18 = new Blocks(1112, 320, 40, 60);
    bolck19 = new Blocks(1153, 320, 40, 60);
    
    bolck20 = new Blocks(1050, 260, 40, 60);
    bolck21 = new Blocks(1091, 260, 40, 60);
    bolck22 = new Blocks(1132, 260, 40, 60);
    
    bolck23 = new Blocks(1070, 200, 40, 60);
    bolck24 = new Blocks(1111, 200, 40, 60);

    bolck25 = new Blocks(1090, 140, 40, 60);



    Engine.run(engine);
}


function draw()
{
    background(153, 255, 255);
    textSize(30);
    fill("black");
    text("Press Space to get a Second Chance", 100, 45);

    stand1.display();
    stand2.display();
    ground.display();
    polygon.display();
    rope.display();

    bolck1.display(1, 1, 1);
    bolck2.display(1, 1, 1);
    bolck3.display(1, 1, 1);
    bolck4.display(1, 1, 1);
    bolck5.display(1, 1, 1);

    bolck6.display(rgb(255, 0, 0));
    bolck7.display(rgb(255, 0, 0));
    bolck8.display(rgb(255, 0, 0));
    bolck9.display(rgb(255, 0, 0));

    bolck10.display(rgb(0, 230, 0));
    bolck11.display(rgb(0, 230, 0));
    bolck12.display(rgb(0, 230, 0));

    bolck13.display(rgb(26, 26, 255));
    bolck14.display(rgb(26, 26, 255));

    bolck15.display(255);

    // New one
    bolck16.display(rgb(153, 160, 225));
    bolck17.display(rgb(153, 160, 225));
    bolck18.display(rgb(153, 160, 225));
    bolck19.display(rgb(153, 160, 225));

    
    bolck20.display(rgb(51, 51, 51));
    bolck21.display(rgb(51, 51, 51));
    bolck22.display(rgb(51, 51, 51));

    bolck23.display(rgb(255, 204, 20));
    bolck24.display(rgb(255, 204, 20));

    bolck25.display(rgb(210, 121, 255));

    drawSprites(); 
}




function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

function keyPressed()
{


if(keyCode===32)
  {
	Matter.Body.setPosition(polygon.body, {x:105,y:535});
    rope.attach(polygon.body);
  }

//   else if(keyCode===83)
//   {
//       stand1.setStatic(false)
//   }
}