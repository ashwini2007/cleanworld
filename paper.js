class Paper{
    constructor(x,y,width,height){
       var options = {
            isStatic : false,
            restitution : 0.3,
            density : 1.2,
            fiction : 0.5


       }
       this.body = Bodies.rectangle(x,y,width,height, options);
       this.width = width;
       this.height = height;
       World.add(world,this.body);
    }
     display() {
      fill("white")
      rectMode(CENTER)
       rect(this.body.position.x,this.body.position.y,this.width,this.height); 
    }
}