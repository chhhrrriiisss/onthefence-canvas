define('Bale', function(){
	var Bale;

	Bale = function(x, y, image){
		// INITIALIZE PROPERTIES	

		var that = this;	

		this.x = x || 0;
		this.y = y || 0;



		this.defaultX = x;
		this.defaultY = y;	

		this.startY = -300;

		this.width = image.width;
		this.height = image.height;

		this.graphics = new createjs.Container();		
		
        this.bitmapA = new createjs.Bitmap(image);
        this.bitmapA.width = image.width;
        this.bitmapA.height = image.height;
      	
      	this.bitmapA.scaleX = this.bitmapA.scaleY =  this.bitmapA.scale = 1;
      	
      	this.bitmapA.x = 0;
      	this.bitmapA.y = 0;

        this.bitmapA.regX = (this.width/2);
        this.bitmapA.regY = (this.height/2);

        this.bitmapA.rotation = 5 - Math.random()*10;

        // this.graphics.width = this.width;
        // this.graphics.height = this.height;

        // this.graphics.x = this.x;
        // this.graphics.y = this.startY;       

		this.graphics.addChild(this.bitmapA);	

		this.bitmapA.cursor = "pointer";
		

	// using "on" binds the listener to the scope of the currentTarget by default
		// in this case that means it executes in the scope of the button.


		this.bitmapA.on("pressup", function(evt) {			

			createjs.Tween.get(this).to({y: this.defaultY + ( -5 + Math.random() * 10 )}, 500, createjs.Ease.bounceOut);

			window.disableScroll = false;
	
		});

		this.bitmapA.on("mousedown", function(evt) {

			window.disableScroll = true;

			this.parent.addChild(this);
			this.offset = {x:this.x-evt.stageX, y:this.y-evt.stageY};
		});
		
		// the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
		this.bitmapA.on("pressmove", function(evt) {

			window.disableScroll = true;

			this.x = evt.stageX+ this.offset.x;
			this.y = evt.stageY+ this.offset.y;
			// indicate that the stage should be updated on the next tick:
			update = true;
		});

		this.bitmapA.on("rollover", function(evt) {

			window.disableScroll = true;

			this.defaultY = this.y;
			createjs.Tween.get(this).to({y: this.y -20, rotation: Math.random() * 2}, 100, createjs.Ease.Linear);



			//this.scaleX = this.scaleY = this.scale*1.2;
		});
		
		this.bitmapA.on("rollout", function(evt) {	
			
		
			createjs.Tween.get(this).to({y: this.defaultY, rotation: Math.random() * 5}, 200, createjs.Ease.bounceOut);

			//this.scaleX = this.scaleY = this.scale;
			window.disableScroll = false;
		});

		this.init();
		
		//this.animate();
	};	

	Bale.prototype = {

		init: function() {


			createjs.Tween.get(this.graphics).to({y:this.y}, 400, createjs.Ease.elasticOut);


		}
	}

	return Bale;
})