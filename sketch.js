const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bgImg.png");
}

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    //the ground and other platforms
    ground = new Ground(600, height,1200, 5);
    platform1 = new Ground(350, 365, 225, 20);
    platform2 = new Ground(700, 245, 225, 20);

    //the boxes
    box1 = new Box(280,255,30,40);
    box2 = new Box(310,255,30,40);
    box3 = new Box(340,255,30,40);
    box4 = new Box(370,255,30,40);
    box5 = new Box(400,255,30,40);

    box6 = new Box(280,245,30,40);
    box7 = new Box(310,245,30,40);
    box8 = new Box(340,245,30,40);
    box9 = new Box(370,245,30,40);
    box10 = new Box(400,245,30,40);
    
    box11 = new Box(280,235,30,40);
    box12 = new Box(310,235,30,40);
    box13 = new Box(370,235,30,40);
    box14 = new Box(400,235,30,40);
    
    box15 = new Box(280,225,30,40);
    box16 = new Box(400,225,30,40);

    box17 = new Box(630, 200, 30, 40);
    box18 = new Box(660, 200, 30, 40);
    box19 = new Box(690, 200, 30, 40);
    box20 = new Box(720, 200, 30, 40);
    box21 = new Box(750, 200, 30, 40);

    box22 = new Box(660, 190, 30, 40);
    box23 = new Box(690, 190, 30, 40);
    box24 = new Box(720, 190, 30, 40);

    box25 = new Box(690, 180, 30, 40);

    shooter = new Shooter(100, 200, 10, 10);

    var pointBloc = {
        x:100,
        y:200
    }
    sling1 = new SlingShot(shooter.body, pointBloc)
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    
    textSize(50);
    fill(221, 57, 24);
    text("Siege the Towers!", 300, 45);

    ground.display();

    platform1.display();
    platform2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    box11.display();
    box12.display();
    box13.display();
    box14.display();

    box15.display();
    box16.display();    
    
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display();

    box25.display();

    shooter.display();
    sling1.display();

}

function mouseDragged(){
    Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}