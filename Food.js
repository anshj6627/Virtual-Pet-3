var milkBottle=loadImage("images/Milk.png")

class Food{
    constructor(){
var foodStock;
var lastFed;
    }
    display(){
        var x=80,y=100;
    ImageMode(CENTER);
    Image(this.image,720,220,70,70);
    if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
            if(i%10==0){
                x=80;
                y=y+50;
            }
            image(this.image,x,y,50,50);
            x=x+30;
        }
    }
      }
      bedroom(){
background(bedroom,550,500);
      }
      garden(){
background(garden,550,500);
      }
      washroom(){
washroom(washroom,550,500);
      }
}