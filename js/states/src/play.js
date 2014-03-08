define('Play',[

	'Clouds',
	'Hills',
	'Parallax',
	//'Feed',
	//'Review',
	'create'
], function(Clouds, Hills, Parallax) {
	var Play;

	Play = {
		enter : function(canvas, stage, assets){
			var that = this;
			this.canvas = canvas;
			this.stage = stage;
			this.assets = assets;
			this.gameOver = false;

			//set FPS and start listening to game ticks
        	createjs.Ticker.on("tick", this.tick, this);
			createjs.Ticker.setFPS(60);

			this.setup('explore', this.stage);

			// //initialize parallax layer
			// this.parallax = new Parallax();

			// that.parallaxLayer['hay'] = new ParallaxLayer({
			// 	bitmap: assets['hay'], 
			// 	x: 0, y: 0, 
			// 	width: stage.canvas.width,
			// 	height: 100, 
			// 	velocity: {x: -0.5, y: 0},
			// 	acceleration : -0.005
			// });
		

			// //add the display elements to the stage
			// this.stage.addChild(
			// 	this.parallaxLayer['hay'].graphics			
			// );



		},
		setup: function(scene, stage) {

			switch(scene) {

				case "explore":
				//
				this.initHills(stage);
				console.log('explore scene');
				break;

				case "feed":
				//
				this.initHills(stage);
				break;

				case "review":
				//
				break;

				default:					

			}

			this.initClouds(stage);	

		},

		initHills: function(stage) {

			// create the cloud layer			
			this.hillsLayerMed = new Hills(this.assets['hills_med'], stage);

			// this.hillsLayerClose = new Hills(this.assets['hills_close'], stage);

			// this.hillsLayerFar = new Hills(this.assets['hills_far'], stage);
			
			// add the cloud layer to stage
			stage.addChild(this.hillsLayerMed.graphics);

			// animate the cloud layer 
			// this.hillsLayerMed.animate(stage.canvas.width);	

		},

		initClouds: function(stage) {

			// create the cloud layer			
			this.cloudLayer = new Clouds(this.assets['clouds'], stage);
			
			// add the cloud layer to stage
			stage.addChild(this.cloudLayer.graphics);

			// animate the cloud layer 
			this.cloudLayer.animate(stage.canvas.width);	

		},

		exit : function(){
			console.log('Game ended');
		},
		tick : function(event){

			this.stage.update(event);
		}
	}

	return Play;
});