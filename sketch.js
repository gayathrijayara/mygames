const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground;
var redboxSprite,redSprite,boxSprite;
var backgroundImg;
var apple = [];
//var redapple = [];
//var greenapple = [];

function preload(){
  backgroundImg=loadImage("back ground.jpg")
}

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(600,673,1200,20);
  
  redboxSprite=createSprite(400,658,200,10);
  redboxSprite.shapeColor=("orange");

  redSprite=createSprite(495,608,10,100);
  redSprite.shapeColor=("orange");
   

  boxSprite=createSprite(305,608,10,100);
  boxSprite.shapeColor=("orange");
	
 
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  
  if(keyDown(RIGHT_ARROW)){
   redboxSprite.x=redboxSprite.x+10
  }
  
  if(keyDown(LEFT_ARROW)){
    redboxSprite.x=redboxSprite.x-10
   }

   if(keyDown(RIGHT_ARROW)){
    redSprite.x=redSprite.x+10
   }
   
   if(keyDown(LEFT_ARROW)){
     redSprite.x=redSprite.x-10
    }

    if(keyDown(RIGHT_ARROW)){
      boxSprite.x=boxSprite.x+10
     }
     
     if(keyDown(LEFT_ARROW)){
       boxSprite.x=boxSprite.x-10
      }
   
  if(frameCount%60==0){
    apple.push(new Apple(random(1,1100),30,30));
  }
  
  for(var j = 0; j <apple.length; j++){
    apple[j].display();
  
    ground.display();
    
  drawSprites();
}
}