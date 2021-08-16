var police, robber, trashcan, fence;
var backgroundImg, fenceImg, trashcanImg;
var robberImg1;
var obstaclesGroup;
var ground;
var trashcanGroup;
var fenceGroup;

var score = 0;

function preload(){
    backgroundImg = loadImage("suburban.jpg");
    fenceImg = loadImage("fence.png");
    trashcanImg = loadImage("trash.jpg");
    robberImg1 = loadImage("robber1.png");

}

function setup(){
    createCanvas(1900,800);

    ground = createSprite(400,100,300,20);
    ground.addImage("ground",backgroundImg);
    ground.x = width /2;
    ground.y = height/2;
    ground.velocityX = -2
    ground.scale = 0.3;


    trashcanGroup = new Group();
    fenceGroup = new Group();

}

function draw(){
    background(0);

    if (ground.x < 0){
        ground.x = width/2;
    }
    

    trashcan();
    createfence();
    
    drawSprites();
}



function trashcan(){
    //write code here to spawn the clouds
  if (frameCount % 160 === 0) {
    var trashcan = createSprite(750,620,20,20);
  
    trashcan.addImage(trashcanImg);
    trashcan.scale = 0.05;
    trashcan.velocityX = -4;
    
     //assign lifetime to the variable
    trashcan.lifetime = 300;
    
    //add each cloud to the group
    trashcanGroup.add(trashcan);
  }
}

function createfence(){
    if (frameCount % 280 === 0) {
        var fence = createSprite(600,600,40,10);
    
        fence.addImage(fenceImg);
        fence.scale = 0.5;
        fence.velocityX = -4;
        
         //assign lifetime to the variable
        fence.lifetime = 300;
        
        //add each cloud to the group
        fenceGroup.add(fence);
      }
}