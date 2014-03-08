define('Play',[
	'Clouds',
	'Hills',
	'Parallax',
	'Hammer',
	'Scene',
	'create'
], function(Clouds, Hills, Parallax, Hammer, Scene) {
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

			this.setup('explore', this.stage);


			this.parallaxLayers = [];



			// for (var i = 0; i < 10; i++) {

			// 	name = 'hay_' + i;

			// stage.canvas.height - 

			var hills_far = this.assets['hills_far'];
			var hills_med = this.assets['hills_med'];
			var hay = this.assets['hay'];
		
			that.parallaxLayers['hay'] = new Parallax(0, 600, this.assets['hay'], 1, 10); // x, y, image, offset, easing
			that.parallaxLayers['hill_med'] = new Parallax(0, parseInt(this.stage.canvas.height - hills_med.height), hills_med, 1, 10, true); // x, y, image, offset, easing, loop\
			that.parallaxLayers['hill_far'] = new Parallax(-2000, parseInt(this.stage.canvas.height - hills_far.height) - 25, hills_far, .5, 10, true); // x, y, image, offset, easing, loop\
			// cont = new createjs.Container();

			this.cloudLayer = new Clouds(this.assets['clouds']);
			
			stage.addChild(
				this.cloudLayer.graphics,
				this.parallaxLayers['hill_far'].graphics,
				this.parallaxLayers['hill_med'].graphics,
				this.parallaxLayers['hay'].graphics
				
			);

			this.addHooks();
  

		},

		addHooks: function () {

			Hammer(document).on("swipeleft", function(event) {
				Scene.move(-1000);
			});

			Hammer(document).on("swiperight", function(event) {
				Scene.move(1000);		
			});

			  // using "on" binds the listener to the scope of the currentTarget by default
            // in this case that means it executes in the scope of the button.
            $(document).on("keydown", function(e) {

				switch (e.which || e.keyCode) {
					case 39: // right arrow key
						Scene.move(-10);
						//console.log(window.viewport.x);
					break;

					case 37: // left arrow key
						Scene.move(10);
						//console.log(window.viewport.x);
					break;
				}

            });

		},

		setup: function(scene, stage) {

			switch(scene) {

				case "explore":
				//
				//this.initHills(stage);
				
				break;

				case "feed":
				//
				//this.initHills(stage);
				break;

				case "review":
				//
				break;

				default:					

			}

			//this.initClouds(stage);	

		},

		exit : function(){
			console.log('Game ended');
		},
		tick : function(event){

			var newX = Scene.get('viewport-x');

			var difX = Scene.get('target-x') - newX;
			var easing = 10;

			newX += difX / easing;

			Scene.set('viewport-x', Math.round(newX));

			this.cloudLayer.update();
			this.cloudLayer.render();

			for(var i in this.parallaxLayers){
				this.parallaxLayers[i].update();
				this.parallaxLayers[i].render();
			}	

			//this.viewport.x += 1;


			this.stage.update(event);
		}
	}

	return Play;
});