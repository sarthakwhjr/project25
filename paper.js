class paper {
    constructor(x, y, r) {
      var options = {


         isStatic:false,
         restitution:0.8,
         friction:0.1,
         density:0.8
      }
      this.image=loadImage("paper.png")
      this.body = Bodies.circle(x, y, r, options);
      this.radius= r;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      
     
      imageMode(CENTER)
      
      fill("red");
      image(this.image,pos.x,pos.y,this.radius,this.radius);
     
    }
 

}
  
