define('Parallax',[
	'create'
], function(Scene){
	var Parallax;

	Parallax = function(scene, x, y, child, offset, easing, loop){

		this.scene = scene;
		this.x = x || 0;
		this.y = y || 0;
		this.offset = offset || 1.2;
		this.easing = easing || 3;
		this.targetX = 0;
		this.deltaX = 0;
		this.loop = loop || false;
		this.child = child;	

		isImg = true;

		try {

			isImg = (child.nodeName.toLowerCase() === 'img');

		}
		catch (error) {
			isImg = false;


		}

		this.graphics = new createjs.Container();

		if (!isImg) { //its an object

			this.bitmapA = child.graphics; 
			this.width = child.graphics.width;
			this.height = child.graphics.height;

			
			// if (typeof image.prototype.tick == 'function') { 

			//console.log(image.tick());


			if (this.loop) {

				this.bitmapA = child.graphics;
				this.bitmapB = child.graphics;	
			}

		} else if (isImg)  {

			this.bitmapA = new createjs.Bitmap(child);
			this.width = child.width;
			this.height = child.height;

			if (this.loop) {

				this.bitmapA = new createjs.Bitmap(child);
				this.bitmapB = new createjs.Bitmap(child);
			}

		} // its an  image, create a bitmap


		// positioning + offset
		if (this.loop) {

			this.bitmapA.x = this.x;
			this.bitmapB.x = this.x-this.width;
			
			this.graphics.addChild(this.bitmapA, this.bitmapB);
			this.graphics.x = child.x;
			this.graphics.y = child.y;
		}

		else {				
			this.graphics.addChild(this.bitmapA);
			this.graphics.x = child.x;
			this.graphics.y = child.y;
		}

		//this.bitmapA.cache(0,0,this.width, this.height);

		

		this.graphics.x = this.x;
		this.graphics.y = this.y;
		
		

	};

	Parallax.prototype = {

		tick: function() {

			//keep accelerating the x velocity	
			var vX = this.scene.viewport.x();

			this.targetX = vX * this.offset;

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

		}
		
	}	

	return Parallax;
})