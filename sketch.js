var gameState = "start"
var homeObj;
var singlePlrHome;
var level1Obj;
var bgImg;
var multiplayerBgImg;
var singleBgImg;
var multiHomeObj


function preload(){
bgImg = loadImage("Images/bgImg.jpg")
multiplayerBgImg = loadImage("Images/multiBgImg.jpg")
singleBgImg = loadImage("Images/singleImg.jpg")
}

function setup(){
    createCanvas(displayWidth - 0, displayHeight - 100)
    homeObj = new Home();
    homeObj.display();
    //singlePlrHome = new SinglePlayerHome();
    level1Obj = new Level1();
}

function draw(){
    if (gameState === "playLevel1") {
        background("orange")
        level1Obj.display()    
    }
    drawSprites();                   
}
