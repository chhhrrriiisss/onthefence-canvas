define('Bale', [
	'fnc'

], function(fnc){
	var Bale;

	Bale = function(x, y, image, string){
		
		// Defaults & Settings
		var that = this;	
		this.x = x || 0;
		this.y = y || 0;
		this.string = string || "";
		this.defaultX = x;
		this.defaultY = y;	
		this.startY = -300;
		this.width = image.width;
		this.height = image.height;




		
		// Hay Bitmap
        this.bitmapA = new createjs.Bitmap(image);
        this.bitmapA.width = image.width;
        this.bitmapA.height = image.height;
      	
      	this.bitmapA.scaleX = this.bitmapA.scaleY =  this.bitmapA.scale = 1;
      	
      	this.bitmapA.x = 0;
      	this.bitmapA.y = 0;

        this.bitmapA.regX = (this.width/2);
        this.bitmapA.regY = (this.height/2);

   
        // Text Label
        this.string = fnc.splitLine(this.string, 11);
        this.label = new createjs.Text(this.string, "21px Otari", "#9A5628");  
        this.label.lineHeight = 0;
        this.label.textAlign = "center";
        this.label.textBaseline = "top";
        this.label.shadow = new createjs.Shadow("rgba(0,0,0,.3)", -1, -1, 0);
        bounds = this.label.getBounds();
        this.label.y = -(bounds.height/2);

        // Image Container
		this.graphics = new createjs.Container();	

		// // Group the image+label
  //       this.bitmap = new createjs.Container();	

  //       this.bitmap.addChild(this.bitmapA, this.label);	

		this.graphics.addChild(this.bitmapA, this.label);	
		this.graphics.rotation = 5 - Math.random()*10;
		this.graphics.cursor = "pointer";

		this.graphics.x = this.x;
		this.graphics.y = this.y;
		

	// using "on" binds the listener to the scope of the currentTarget by default
		// in this case that means it executes in the scope of the button.


		this.graphics.on("pressup", function(evt) {			
			

			createjs.Tween.get(this).to({y: this.defaultY + ( -5 + Math.random() * 10 )}, 500, createjs.Ease.bounceOut);

			window.disableScroll = false;
	
		});

		this.graphics.on("mousedown", function(evt) {

			window.disableScroll = true;

			this.parent.addChild(this);
			this.offset = {x:this.x-evt.stageX, y:this.y-evt.stageY};
		});
		
		// the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
		this.graphics.on("pressmove", function(evt) {

			window.disableScroll = true;

			this.x = evt.stageX+ this.offset.x;
			this.y = evt.stageY+ this.offset.y;
			// indicate that the stage should be updated on the next tick:
			update = true;
		});

		this.graphics.on("rollover", function(evt) {

			window.disableScroll = true;

			this.defaultY = this.y;
			createjs.Tween.get(this).to({y: this.y -20, rotation: Math.random() * 2}, 100, createjs.Ease.Linear);

		});
		
		this.graphics.on("rollout", function(evt) {	
			
		
			createjs.Tween.get(this).to({y: this.defaultY, rotation: Math.random() * 5}, 200, createjs.Ease.bounceOut);

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