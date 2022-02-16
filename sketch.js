var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg


function preload(){
bgImg = loadImage("assets/bg.png")

kiteImg = loadImage("assets/kite2.png");



obsTop1 = loadImage("assets/obsTop1.png")
obsTop2 = loadImage("assets/obsTop2.png")

obsBottom1 = loadImage("assets/obsBottom1.png")
obsBottom2 = loadImage("assets/obsBottom2.png")
obsBottom3 = loadImage("assets/obsBottom3.png")

}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating kite     
kite= createSprite(100,200,20,50);
kite.addImage(kiteImg);
kite.scale = 0.2;

topObstaclesGroup=new Group();
bottomObstaclesGroup=new Group();
barsGroup=new Group();
}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            kite.velocityY = -6 ;
            
          }

          //adding gravity
           kite.velocityY = kite.velocityY + 2;

           Bar();
           spawnObstaclesTop()
           spawnObstaclesBottom()
   
        drawSprites();
        
}

function spawnObstaclesTop(){
  if (World.frameCount % 60 ===0){
    obstacleTop= createSprite(400,50,40,50)
    
    //random y positions for top obstacles
    obstacleTop.y = Math.round(random(10,100));

    //generate random top obstacles
    var rand = Math.round(random(1,2));

  if(rand===1){
    obstacleTop.addImage(obsTop1)
  }
  else if(rand===2){
    obstacleTop.addImage(obsTop2)
  }
  obstacleTop.scale=0.1;
  obstacleTop.velocityX= -4
  obstacleTop.lifeTime=100;
  kite.depth=kite.depth+1;
  topObstaclesGroup.add(obstacleTop);
  }
}

function spawnObstaclesBottom(){
  if (World.frameCount % 60 ===0){
    obstacleBottom= createSprite(400,350,40,50)

    //generate random top obstacles
    var rand = Math.round(random(1,3));

  if(rand===1){
    obstacleBottom.addImage(obsBottom1)
  }
  else if(rand===2){
    obstacleBottom.addImage(obsBottom2)
  }
  else if(rand===3){
    obstacleBottom.addImage(obsBottom3)
  }


  obstacleBottom.scale=0.08;
  obstacleBottom.velocityX= -4
  obstacleBottom.lifeTime= 100;
  kite.depth=kite.depth+1;
  bottomObstaclesGroup.add(obstacleBottom);
  }
}


  function Bar() 
  {
          if(World.frameCount % 60 === 0)
          {
            var bar = createSprite(400,200,10,800);
           bar.velocityX = -6
           bar.depth = kite.depth;
           bar.lifetime = 70;
           bar.visible = false;
           barsGroup.add(bar);
          }
 }