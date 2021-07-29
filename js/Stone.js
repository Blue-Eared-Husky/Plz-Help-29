class Stone{
    constructor(x,y,w,h){
        this.body = Bodies.circle(x,y,w,h);
        World.add(world,this.body);
        this.w = w;
        this.h = h;
    }

    display(){
        push();
        fill("white");
        ellipse(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
    }
}