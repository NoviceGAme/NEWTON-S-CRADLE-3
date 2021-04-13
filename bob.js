class Bob {

constructor (x,y){

 var option ={
    restitution :1,
    friction:0,
    density :2
 }

  this.ball = Bodies.circle(x,y,25,option)
   World.add (world,this.ball)   

}
display(){
    fill("red")
    
    ellipseMode(CENTER)
ellipse(this.ball.position.x,this.ball.position.y,50,50)
   
}
}

