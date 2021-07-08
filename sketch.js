var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var db,position;
function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

var balloonPosition=database.ref('balloon/height')
balloonPosition.on("value",readPosition, showError);

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
    changePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
    changePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
    changePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    changePosition(0,+1);
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function UpdateHeight(x,y){
  database.ref('balloon/height').set({
    'x': height.x,
    'y': height.y,
  })
}
function showError(){
  console.log("Error in writting to the database")
}
  
update ()
  if(keydown(UP_ARROW)){
    UpdateHeight(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage2)
    balloon.scale=balloon.scale -0.01;
  }
  /*else{
    if(keydown(DOWN)){
      UpdateHeight(0,10);
      balloon.addAnimation("hotAirBalloon",balloonImage2)
      balloon.scale=balloon.scale 0.01 ;
    }
  }*/ 
