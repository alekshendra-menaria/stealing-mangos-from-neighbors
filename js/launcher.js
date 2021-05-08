class Launcher{
    constructor(bodyA,pointB){
      var option = {
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.004,
        length:1   
      }
      this.pointB=pointB;
      this.sling=Constraint.create(option);
      World.add(world,this.sling);
     
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(body){
        this.sling.bodyA=body
    }
    display(){
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}
