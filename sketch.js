var title, titleImage;
var multiplayer, multiplayerImage;
var singleButton, singleButtonImage;
var multiButton, multiButtonImage;
var portal, portalImage;
var bg, backgroundImage;
var START = 0;
var SINGLE = 1;
var gameState = START;
var character1Image, character1;
var character2Image, character1;
var selectionTitle, selectionTitleImage;
var player;
var stoneGroup, stoneImage;
var count = 0;
var boyCopy ; 
var girlCopy;

function preload(){

  //Preloading Images
  titleImage = loadImage("Images/TitleImage.png");
  multiplayerImage = loadImage("Images/MultiplayerImage.png");
  singleButtonImage = loadImage("Images/SinglePlayerButton.png");
  multiButtonImage = loadImage("Images/MultiPlayerButton.png");
  portalImage = loadImage("Images/PortalImage.png");
  backgroundImage = loadImage("Images/PortalBackground.jpg");
  boyImage = loadImage("Images/maleCharacter.png");
  girlImage = loadImage("Images/femaleCharacter.png");
  selectionTitleImage = loadImage("Images/selectionTitle.png");
  stoneImage = loadImage("Images/StoneImage.png");

}


function setup() {
  createCanvas(1000,600);
  singleButton = createSprite(500, 350, 50, 50);
  singleButton.addImage("singler", singleButtonImage);
  singleButton.scale = 0.8;

  multiButton = createSprite(500, 395, 50, 50);
  multiButton.addImage("multi", multiButtonImage);
  multiButton.scale = 0.8;

  girlSprite = createSprite(700, 400, 50, 50);
  girlSprite.addImage( "girl",girlImage);
  girlSprite.scale= 1.2;
  girlSprite.visible = false ;

  boySprite = createSprite(350, 400, 50, 50);
  boySprite.addImage( "girl",boyImage);
  boySprite.visible = false ;

  boyCopy = createSprite(350, 400, 50, 50);
  boyCopy.addImage( "girl",boyImage);
  boyCopy.visible = false ;

  girlCopy = createSprite(700, 400, 50, 50);
  girlCopy.addImage( "girl",girlImage);
  girlCopy.scale= 1.2;
  girlCopy.visible = false ;

  bg= createSprite(0, 0);
  
  bg.addImage("mybg", backgroundImage);
  bg.scale =2.5;



  
 }

function draw() {
  background(0);  
  bg.velocityX = -4;
  bg.depth = -1;
  if(bg. x < 0) {
    bg.x = bg.width/2;

  }



  
  if(mousePressedOver(singleButton)) {
    multiButton.visible= false;
    singleButton.visible= false;
    girlSprite.visible = true;
    boySprite.visible =true;
      
  
  
   }
   else if(mousePressedOver(multiButton)) {
    singleButton.visible= false;
    
   }
  
   if(mousePressedOver(girlSprite)) {
    boySprite.destroy();
    boySprite.depth = -3;
    girlSprite.visible = true;
    girlSprite.depth = 2;
   
   
  }
 
   else if(mousePressedOver(boySprite)) {
    boyCopy.visible =true;
    
    girlSprite.destroy();
    girlSprite.depth= -4;
  }


  drawSprites();

    

  }

  

  









