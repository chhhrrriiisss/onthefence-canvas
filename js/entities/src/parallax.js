define('Parallax',[	
	'Scene',
	'create'
], function(Scene){
	var Parallax;

	Parallax = function(x, y, image, offset, easing, loop){
		this.x = x || 0;
		this.y = y || 0;
		this.offset = offset || 1.2;
		this.easing = easing || 3;
		this.targetX = 0;
		this.deltaX = 0;
		this.loop = loop || false;

		this.width = image.width;
		this.height = image.height;
		this.outside = -this.width;		



		this.graphics = new createjs.Container();
		

		if (this.loop) {
			this.bitmapA =  new createjs.Bitmap(image);	
			this.bitmapB =  new createjs.Bitmap(image);	

			this.bitmapA.x = this.x;
			this.bitmapB.x = this.x-this.width;

			this.graphics.addChild(this.bitmapA, this.bitmapB);
		}

		else {
			this.bitmapA =  new createjs.Bitmap(image);	
			this.graphics.addChild(this.bitmapA);
		}



		//this.bitmapA.cache(0,0,this.width, this.height);

		

		this.graphics.x = this.x;
		this.graphics.y = this.y;
		
		

	};

	Parallax.prototype = {

		update : function(){

			//keep accelerating the x velocity	
			var vX = Scene.viewport.x();
			this.targetX = vX * this.offset;
			//console.log(Play.viewport.x);

		},
		render : function(){
			// //if shapeA has moved completely off the left screen
			// if((window.viewport.x % this.width) > 1 && this.loop){
			// 	//console.log('LOOPING!!');
		 //        //move it to the back of shapeB
			// 	var temp = this.bitmapA;
			// 	temp.x = this.bitmapB.x+this.width;
		 //        //switch shapeA to shapeB and shapeB to shapeA
			// 	this.bitmapA = this.bitmapB;
			// 	this.bitmapB = temp;


	

			// this.x = Math.round(this.targetX);
			this.deltaX = this.targetX - this.x;
			this.x = this.targetX;

			if (this.loop) {

				this.bitmapA.x += this.deltaX;
				this.bitmapB.x += this.deltaX;

				if ( this.bitmapA.x < 0) {
				// left
					this.bitmapB.x = this.bitmapA.x + this.width;
				} 

				if ( this.bitmapB.x < 0) {
				// left
					this.bitmapA.x = this.bitmapB.x + this.width;
				} 

				if ( this.bitmapB.x > 0) {
				// left
					this.bitmapA.x = this.bitmapB.x - this.width;
				} 

				if ( this.bitmapA.x > 0) {
				// left
					this.bitmapB.x = this.bitmapA.x - this.width;
				} 

				//console.log(this.bitmapA.x + this.width);
			}
			else {
				this.bitmapA.x = this.targetX;
			}	

			var vX = Scene.viewport.x();
			var vW = Scene.viewport.width();


			
			// console.log(vX - this.bitmapA.x);

			// if (  this.bitmapA.x > ( vX + vW ) ) {
				
			// 	this.bitmapA.x = this.x-this.width;
				
			// } // SEND BEHIND BITMAP B
	

			// if (this.loop) {

			// 	this.bitmapB.x += Math.round(this.deltaX);
			// }

			//console.log(this.graphics.x);
		}
	}	

	return Parallax;
})