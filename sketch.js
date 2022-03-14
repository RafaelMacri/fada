var starImg,bgImg;
var star, starBody;
var fada, imgfada
var voz

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    voz = loadSound("joyMusic.mp3")
    starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
    imgfada = loadAnimation("fairyImage1.png","fairyImage2.png")
}

function setup() {
    createCanvas(800, 750);

    fada = createSprite(200,500)
    fada.addAnimation("fada",imgfada)
    fada.scale = 0.2
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){
background(bgImg)
drawSprites()
fada.x=mouseX
if(star.y >470 && starBody.position.y>470){
Matter.Body.setStatic(starBody,true)



}

}