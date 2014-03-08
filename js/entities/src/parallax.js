define('Parallax',[	
	'Play',
	'create'
], function(Play){
	var Parallax;

	Parallax = function(){
		this.x = 0;
		this.y = 0;
		this.targetX = 0;
		this.deltaX = 0;
		this.bitmap = null;
		this.offset = 0;
		this.easing = 3;

		this.outside = -this.width;

		this.graphics = new createjs.Container();
		bitmap =  new createjs.Bitmap(this.bitmap);

		this.graphics.addChild(bitmap);	

		this.graphics.x = this.x;
		this.graphics.y = this.y;		
	};

	Parallax.prototype = {

		update : function(){
			//keep accelerating the x velocity

			//this.targetX = App.viewport.x * this.offset;

			//console.log(Play.viewport.x);




		},
		render : function(){

			// //if shapeA has moved completely off the left screen
			// if(this.shapeA.x < this.outside){
		 //        //move it to the back of shapeB
			// 	var temp = this.shapeA;
			// 	temp.x = this.shapeB.x+this.width;
		 //        //switch shapeA to shapeB and shapeB to shapeA
			// 	this.shapeA = this.shapeB;
			// 	this.shapeB = temp;
			// }
			this.deltaX = (this.targetX - this.graphics.x) / this.easing;
			this.graphics.x += this.deltaX;

			//console.log(this.graphics.x);
		}
	}	

	return Parallax;
})