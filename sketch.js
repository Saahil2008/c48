var track,trackImg
var car,carImg
var gamestate = "start"
var ob,obImg,obGrp

function preload()
{
    trackImg = loadImage("track1.png")
    carImg = loadImage("car.png.png")
    obImg = loadImage("barricade2.png")

}

function setup()
{
    createCanvas(400,600)
    track = createSprite(350,200)
    track.addImage("track",trackImg)
    track.scale = 2.7

    car = createSprite(60,550)
    car.addImage("car",carImg)
    car.scale = 0.2

    obGrp = new Group()

}

function draw()
{
    background("green")
    if (gamestate==="start")
    {
        background("black")
        fill("white")
        textSize(25)
        text("CAR RACING GAME",80,300)
        textSize(20)
        text("PRESS SPACE TO START",50,350)
        if(keyDown("space"))
        {
            gamestate = "play"
        }
    }
    
if (gamestate === "play")
{
    track.velocityY = 5
    if(keyDown("left"))
    {
        car.x-=15
    }
    if (keyDown("right"))
    {
        car.x+=15
    }
    if (track.y > 380)
    {
        track.y = height/2
    }
    if(obGrp.isTouching(car))
    {
        track.velocityY = 0
        car.x = 130
        car.y = 550
        obGrp.destroyEach()
        obGrp.setVelocityYEach(0)
        gamestate = "end"
    }
    spawnObstacle()
    drawSprites()
}
if(gamestate==="end")
{
    background("red")
    fill ("white")
    textSize(30)
    text("GAMEOVER",150,300)
}








    
}
function spawnObstacle()
{
    if (frameCount%90===0)
    {
        ob = createSprite(Math.round(random(100,280),-20,10,10))
        ob.velocityY = 3
        ob.addImage(obImg)
        ob.scale = 0.3
        ob.lifetime = 200
        obGrp.add(ob)
    }
}