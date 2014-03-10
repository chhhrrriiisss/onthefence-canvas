define('Play',[
	'Clouds',
	'Hills',
	'Bale',
	'Parallax',
	'Hammer',
	'Scene',
	'create'
], function(Clouds, Hills, Bale, Parallax, Hammer, Scene) {
	var Play;

	Play = {

		enter : function(canvas, stage, assets, viewport){
			var that = this;
			this.canvas = canvas;
			this.stage = stage;
			this.assets = assets;
			this.viewport = viewport;
			this.gameOver = false;	

			//set FPS and start listening to game ticks
        	createjs.Ticker.on("tick", this.tick, this);
			createjs.Ticker.setFPS(60);

			this.parallaxLayers = [];

			// for (var i = 0; i < 10; i++) {

			// 	name = 'hay_' + i;

			// stage.canvas.height - 

			var hillsFarImage = Scene.assets['hillsFar'];
			var hillsMedImage = Scene.assets['hillsMed'];
			var baleImage = Scene.assets['bale'];
			var cloudImage = Scene.assets['clouds'];
			window.disableScroll = false;
			var s = Scene.get('stage');

			// that.parallaxLayers['hay'] = new Parallax(0, 600, this.assets['hay'], 1, 10); // x, y, image, offset, easing
			that.parallaxLayers['hillMed'] = new Parallax(0, parseInt(s.canvas.height - hillsMedImage.height), hillsMedImage, 1, 10, true); // x, y, image, offset, easing, loop\
			that.parallaxLayers['hillFar'] = new Parallax(-2000, parseInt(s.canvas.height - hillsFarImage.height) - 25, hillsFarImage, .5, 10, true); // x, y, image, offset, easing, loop\

			this.cloudLayer = new Clouds(cloudImage);

			this.baleLayer = new Bale(700,600, baleImage);

			that.parallaxLayers['bale'] = new Parallax(0, 0, this.baleLayer, 1, 10); // x, y, image, offset, easing, loop


			that.parallaxLayers['clouds'] = new Parallax(0, 0, this.cloudLayer, .5, 10); // x, y, image, offset, easing, loop

			
			// cont = new createjs.Container();

			
			
			stage.addChild(
				// this.cloudLayer.graphics,
				this.parallaxLayers['clouds'].graphics,
				this.parallaxLayers['hillFar'].graphics,
				this.parallaxLayers['hillMed'].graphics,
				this.baleLayer.graphics
				
			);

			this.addHooks();
  

		},

		addHooks: function () {

			Hammer(document).on("swipeleft", function(event) {
				if (!window.disableScroll) {
					Scene.viewport.nudge(-1000);
				} else {
					event.preventDefault();
				}
			});

			Hammer(document).on("swiperight", function(event) {

				if (!window.disableScroll) {
					Scene.viewport.nudge(1000);		
				}
				else {
					event.preventDefault();
				}
			});

			  // using "on" binds the listener to the scope of the currentTarget by default
            // in this case that means it executes in the scope of the button.
            $(document).on("keydown", function(e) {

				switch (e.which || e.keyCode) {
					case 39: // right arrow key
						Scene.viewport.nudge(-10);
						//console.log(window.viewport.x);
					break;

					case 37: // left arrow key
						Scene.viewport.nudge(10);
						//console.log(window.viewport.x);
					break;
				}

            });

		},

		exit : function(){
			console.log('Game ended');
		},
		tick : function(event){

			Scene.update(event);
			Scene.render();

			//this.cloudLayer.update();

			// this.cloudLayer.update();
			// this.cloudLayer.render();

			this.cloudLayer.tick();

			for(var i in this.parallaxLayers){
				this.parallaxLayers[i].tick();
			}	
			
			this.stage.update(event);
		}
	}

	return Play;
});