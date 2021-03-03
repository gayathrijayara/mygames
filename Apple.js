class Apple{
   
  constructor(x,y,r){
      var options ={
          restitution:0.4
    }
      this.r=r;
      this.randomimage = new Array();
      this.randomimage[0]=loadImage("red apple.jpg");
      this.randomimage[1]=loadImage("green apple.jpg");
      this.randomimage[2]=loadImage("golden apple.png");
      
      //this.image=loadImage("golden apple.png");
      //this.image=loadImage("red apple.jpg");
      //this.image=loadImage("green apple.jpg");
      this.body=Bodies.circle(x,y,this.r,options);
      this.image=Matter.Common.choose(this.randomimage)
      //this.image=randomimage[random(0,2)];
      World.add(world,this.body);
    }
     display(){
         var pos=this.body.position;
         

         push();
         translate(pos.x,pos.y);
         noStroke();
         //fill(this.color);
         ellipseMode(RADIUS);

         image(this.image,70,70,this.r,this.r);
         pop();
    }
    }