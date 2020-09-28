var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){


  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  // createCanvas(600, 600);



  var survivalTime=0;

  //creating monkey
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
  // monkey.addImage(bananaImage)
   monkey.scale=0.1

  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)

  FoodGroup = new Group();
  obstaclesGroup = new Group();

  score = 0;


}


function draw() {


  background("#58CCED");


  if(ground.x<0) {
    ground.x=ground.width/2;
  }


    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
      
    monkey.collide(ground);   
    spawnFood();
    spawnObstacles();

  drawSprites();
  

    if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        


   

    }

  stroke("lime");
  textSize(20);
  fill("black");
  
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}



function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    

     
     //adding image of banana
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    
     //banana in food group
    FoodGroup.add(banana);

    
    // lifetimeof variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
   
   
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    

    //adding imageof obstacle 
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //adding each obstacle to the group
    obstaclesGroup.add(obstacle);

  }
}


//////////////// I DID NOT UNDERSTAND THE MEANING OF ""CEIL"" IN THE SURVIVAL TIME
// Line 90;
//please tell me in the feedback/queries chat box.
