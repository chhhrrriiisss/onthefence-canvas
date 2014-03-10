define('Clouds',[	
	'create'
], function(){
	var Clouds;

	Clouds = function(image){
		// INITIALIZE PROPERTIES	

		var that = this;	

		this.x = 0;
		this.y = 0;	
		this.speed = .15;

		this.width = image.width;
		this.height = image.height;

		this.graphics = new createjs.Container();		
		
        this.bitmapA = new createjs.Bitmap(image);
        this.bitmapA.cache(0,0, this.width, this.height);
        this.bitmapB = new createjs.Bitmap(image);
        this.bitmapB.cache(0,0, this.width, this.height);

        this.bitmapB.x = -(image.width);
        this.bitmapA.x = 0;

		this.graphics.addChild(this.bitmapB, this.bitmapA);	
		
		//this.animate();
	};

	Clouds.prototype = {

		tick: function() {


			this.bitmapA.x += this.speed;
			this.bitmapB.x += this.speed;


			if (this.bitmapA.x > this.width) {
				this.bitmapA.x = 0;
			}

			if (this.bitmapB.x > this.width) {
				this.bitmapB.x = 0;
			}

		}
	}	

	return Clouds;
})