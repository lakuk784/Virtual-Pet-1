//Create variables here
var dog,dogimg,happydog;
var foodS,foodstock,milk;
var database;

function preload()
{
  dogimg = loadImage ("dogImg.png")
  happydog = loadImage ("hdog.png")
}

function setup() {
  createCanvas(500, 600);

  //connect database
  database = firebase.database()
 
  //dog
  dog = createSprite(250,300,10,10)
  dog.scale = 0.2
  dog . addImage(dogimg)
  
   //fecthing data
   foodstock = database.ref ('foods')
   foodstock.on ("value",readstock)
}

function draw() {  
  background (46, 139, 87)

  
  //checks if up arrow is pressed
  if (keyWentDown(UP_ARROW)){
    writestock (foodS)
    dog.addImage(happydog)
  }
  if (keyWentUp(UP_ARROW)){
    
    dog.addImage (dogimg)
  }

  drawSprites();

  //add styles here
  fill("white")
  textSize (20)
  text ("PRESS UP ARROW KEY TO FEED YOUR DOG",50,50)
  textSize (25)
  text ("FOOD : "+foodS,150,150)
  

}

function readstock (data)
{
  foodS = data.val();
  
}

function writestock (x)
{
  
  if (x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref ('/').update({
    foods:x
  })
  
}

