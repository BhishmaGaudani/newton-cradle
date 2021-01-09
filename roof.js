class roof{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:trr});
        this.width = width ;
        this.height = height ;
        World.add(world,this,this.body);

    }
    display(){
        push();
        rectMODE(CENTER);
        fill(128,128,128);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();

    }
}