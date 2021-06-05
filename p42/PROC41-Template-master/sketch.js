const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops;
var tb1,tb2,tb3,tb4;
var bruceimg,batimg;
var bruce1;
var bat;
var str,strimg;
function preload(){
 tb1 = loadImage("images/thunderbolt/1.png");
 tb2 = loadImage("images/thunderbolt/2.png");
 tb3 = loadImage("images/thunderbolt/3.png");
 tb4 = loadImage("images/thunderbolt/4.png");
 bruceimg = loadAnimation("images/WalkingFrame/walking_8.png","images/WalkingFrame/walking_7.png","images/WalkingFrame/walking_6.png",
                          "images/WalkingFrame/walking_5.png","images/WalkingFrame/walking_4.png","images/WalkingFrame/walking_3.png",
                          "images/WalkingFrame/walking_2.png","images/WalkingFrame/walking_1.png")
batimg = loadImage("images/Picture1.png");
strimg = loadImage("images/Picture2.png");
                     }

function setup(){
  createCanvas(400,820);
  engine = Engine.create();
  world = engine.world;
  maxDrops = 200;
  for (var j =0; j<maxDrops; j = j+1){
    drops.push(new Drop(random(0,400),random(-100,400),2));
  }
  bat = createSprite(width+1000,550);
  bat.addImage(batimg);
  bat.scale = 0.3;
  bat.velocityX = -10;
  str = createSprite(width,750);
  str.addImage("img",strimg);
  str.scale = 0.25;
  str.velocityX = -7;
  bruce = new Umbrella(200,700,100);
  }
function draw(){
  background(20);
  Engine.update(engine);
  var rand = Math.round(random(1,4));
  for (var i=0;i<drops.length;i++){
    drops[i].display();
    drops[i].update();
    if(frameCount%60===0){
    switch(rand){
    case 1:drops[i].createthunderbolt1();
           break;
    case 2:drops[i].createthunderbolt2();
           break;
    case 3:drops[i].createthunderbolt3();
           break;
    case 4:drops[i].createthunderbolt4();
           break;
    default:
            break;
   }}
}
drawSprites();
}