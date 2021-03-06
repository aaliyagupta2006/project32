class Box{
    constructor(x,y,width,height){
        var options = {
            'restitiution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.Visibility = 255;
    }
    display(){
        //var pos = this.body.position;
        //rectMode(CENTER);
        //rect(pos.x,pos.y,this.width,this.height);
        //fill("white");

        if((this.body.speed)<3) {
            var angle = this.body.angle;
            var pos= this.body.position;
            push();
            translate (pos.x,pos.y);
            rotate (angle);
            rectMode(CENTER);
            rect (0,0,this.width,this.height);
            pop ();
        }
        else 
        {
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5;
        tint(225,this.Visibility)
        rect (999,999,this.width,this.height);
        pop();
    }
  }
}