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
		
		this.bitmapA =  new createjs.Bitmap(image);	
		this.bitmapA.cache(0,0,this.width, this.height);
		this.graphics.addChild(this.bitmapA);


		this.graphics.x = this.x;
		this.graphics.y = this.y;		
	};

	Parallax.prototype = {

		update : function(){

			//keep accelerating the x velocity

			
			if (this.loop) {
				//this.targetX = window.viewport.x % this.width;\
				this.targetX = Scene.get('viewport-x') * this.offset;
			} else {
				this.targetX = Scene.get('viewport-x') * this.offset;
			}

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


			// }
			
			//this.deltaX = (this.targetX - this.bitmapA.x) / this.easing;
			this.bitmapA.x = Math.round(this.targetX);
		

			// if (this.loop) {

			// 	this.bitmapB.x += Math.round(this.deltaX);
			// }

			//console.log(this.graphics.x);
		}
	}	

	return Parallax;
})