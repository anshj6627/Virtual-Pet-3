var dog, happyDog;
var database
var foodS,foodStock;
var inputButton,inputButton1;
var fedTime,lastFed;
var foodObjl;
var feedDog,addFoods;
var changinggameState, readinggameState;
var bedroom,garden,washroom;
function preload()
{
dog1=loadImage("images/dogimg.png");
happyDog1=loadImage("images/dogimg1.png");
bedroom=loadImage("image/Bed Room.png");
garden=loadImage("image/Garden.png");
washroom=loadImage("image/Wash Room.png");
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
addFood=createButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods);
readinggameState=database.ref('gameState');
readinggameState.on("value",function(data){
gameState=data.val();
});
}


function draw() {  
  background(46, 139, 87);

fedTime=database.red('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
});

  text("Food remaining: ",foodStock,400,350);
  textSize(20);
  fill("red");
  stroke(5);
  if(gameState!="Hungry"){
feed.hide();
addFood.hide();
dog.remove();
  }else{
feed.show();
addFood.show();
dog.addImage("sadDog")
}
  currentTime=hour();
  if(currentTime==(lastFed+1)){
    update("Playing");
    foodObj.garden();
  }else if(currentTime==(lastFed+2)){
update("Sleeping");
foodObj.bedroom();
  }else if(currentTime>=(lastFed+2)&& currentTime<=(lastFed+4)){
update("Bathing");
foodObj.washroom();
  }else{
update("Hungry");
foodObj.display();
  }
  drawSprites();

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
 
}

function add(){
if(addFood.mousePressed){
  foodStock.update(1);
}

}
function update(state){
  database.ref('/').update({
    gameState:state
  });
}