class Drop{
	constructor(x,y)
	{
		var options={
		   // isStatic:true,
			restitution :0.3,
            friction :0,
			density : 1
			}
	//	this.x=x;
	//	this.y=y;
		this.r=10;
	//	this.image=loadImage("paper.png")
		this.body=Bodies.circle(x, y,this.r, options);

		World.add(world,this.body);
	}

	display()
	{
		var pos=this.body.position;	
		var angle=this.body.angle;
		push()
		translate(pos.x, pos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		noStroke();
		fill("blue");
		ellipseMode(RADIUS);
		
        ellipse(0,0,this.r,this.r);
		Pop();

		
 }
}