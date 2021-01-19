const Engine=Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var engine,world;
var o1;
var ball;
 
 function setup(){
  var canvas=createCanvas(400,400);
  engine=Engine.create()
  world=engine.world;
var options={
  isStatic:true
}
  o1=Bodies.rectangle(200,390,200,20,options)
  World.add(world,o1)
  var ball_options={
    restitution:1.5
  }
  ball=Bodies.rectangle(200,100,20,20,ball_options)
  World.add(world,ball)

}
function draw()
{
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
    rect(o1.position.x,o1.position.y,400,20);
    rect(ball.position.x,ball.position.y,20,20);
}

