//Create variables here
var dog ,dogimg , dogimg1
var foodStock,foods
var database

function preload()
{
  dogimg = loadImage("images/dogImg.png")
  dogimg1 = loadImage("images/dogimg1.png")
}

function setup() {
	createCanvas(500, 500);
  database= firebase.database()

  dog = createSprite(250,400,50,50)
  dog.addImage(dogimg) 
  dog.scale = 0.25

  foodStock = database.ref('food')
  foodStock.on("value",readStock)
  
}


function draw() {  
background(46, 139, 87)


fill("black")
text("FoodRemaining"+foods,100,70)

if (keyWentDown(UP_ARROW)){
  foods = foods-1
  writeStock(foods)
  dog.addImage(dogimg1)
}

  drawSprites();
  //add styles here

}

function readStock(data){
foods = data.val()
console.log(foods)
}

function writeStock(x){
  database.ref('/').update({
    'food':x
  })  
}



