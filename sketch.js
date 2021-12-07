//=========================== ZOMBIE GAME ===========================\\


//declaring varibles,

//background variable and image
var bg , bgImg;

//player variable and 2 images for the player
var player, playerImg, player_ShootingImg;

var heart1, heart1_img;

var heart2, heart2_img;

var heart3, heart3_img;

var zombie, zombieImg, zombieGroup; 

//============ PRELOAD FUNCTION ============\\
function preload(){
  //loading all the images;
  bgImg = loadImage("assets/bg1.png");
  playerImg = loadImage("assets/shooter_2.png");
  player_ShootingImg = loadImage("assets/shooter_3.png");
  zombieImg = loadImage("assets/zombie.jpg");
}

//============ SETUP FUNCTION ============\\
function setup(){
  // making all sprites
  var canvas = createCanvas(1300,600);

  bg = createSprite(width/2, height/2.5, 20, 20);
  bg.addImage(bgImg);
  bg.scale = 1.5;

  player = createSprite(200, 500);
  player.addImage(playerImg);
  player.scale = 0.4;
  player.debug = true;
  player.setCollider("rectangle", 0, 0, 300, 500);

  zombieGroup = new Group();
}

//============ DRAW FUNCTION ============\\
function draw(){
  // adding background
  background(9);

  // Moving player
  if(keyDown("UP_ARROW") || touches.length > 0){
    player.position.y = player.position.y - 20;  
  }

  if(keyDown("DOWN_ARROW")  || touches.length > 0){
    player.position.y = player.position.y + 20;
    //console.log(player.position.x);
  }

  if(keyDown("RIGHT_ARROW")){
    player.position.x += 20; 
  }
  
  if(keyDown("LEFT_ARROW")){
    player.position.x -= 20;
  }
  // If space Bar is down the player image changes to shooting image
  if(keyWentDown("space")){
    player.addImage(player_ShootingImg);
    //player.changeImage("playerShooting");
    //player.setCollider("rectangle", -10, 0, 430, 500);
  }
  // else changes to normal image
  else if(keyWentUp("space")){
    player.addImage(playerImg);
    //player.changeImage("playerStanding");
    //player.setCollider("rectangle", 0, 0, 300, 500);
  }

  enemy();

  // Drawing all the sprites
  drawSprites();
}

function enemy(){
  if(frameCount % 300 === 0){
    zombie = createSprite(random(1200, 1500), random(200, 550), 50, 50);
    zombie.addImage(zombieImg);
    zombie.velocityX = -5;
    zombie.scale = 0.2;

    zombie.lifetime = 400;

    zombieGroup.add(zombie);

    console.log(zombie.position.x);
  }
}