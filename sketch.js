var bgm
var bgImg

var balloon
var balloonI

var bottomg
var topg


function preload(){
bgImg = loadImage("assets/bg.png")
balloonI = loadAnimation("assets/balloon1.png","assets/balloon2.png", "assets/balloon3.png")
}


function setup(){

bgm = createSprite(165,485,1,1)
bgm.addImage(bgImg)
bgm.scale = 1.3

balloon = createSprite(100,200,20,50)
balloon.addAnimation("B",balloonI)
balloon.scale = 0.2

bottomg = createSprite(200,390,800,20)
bottomg.visible = false

topg = createSprite(200,10,800,20)
topg.visible = false

}





function  draw(){
background("black")

if(keyDown("space")){

balloon.velocityY = -6

}
balloon.velocityY = balloon.velocityY+2 


drawSprites()

}

