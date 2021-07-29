const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground,wall1,wall2,bridge,joinPoint1,joinPoint2,link,stones;

function setup() {
  rectMode(CENTER);
  ellipseMode(CENTER);

  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(width/2,height,width,20);
  wall1 = new Base(0,height/2,20,height);
  wall2 = new Base(width,height/2,20,height);
  bridge = new Bridge(20,{x: width-25, y: height-200});

  //Matter.Composite.add(bridge.body,joinPoint1);
  joinPoint1 = new Base(25,height-200,200,200);
  joinPoint2 = new Base(width-25,height-200,200,200);
  link = new Link(bridge,joinPoint1);

  stones = [];
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display();
  wall1.display();
  wall2.display();
  bridge.show();
  joinPoint1.display();
  joinPoint2.display();

  for (var i = 0; i < 8; i++){
    var x = random(width/2 - 200, width/2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x,y,80,80);
    stones.push(stone);
  }

  for (var k = 0; k < stones.length; k++){
    stones[k].display();
  }
}
