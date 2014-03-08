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

			that.parallaxLayers['hay'] = new Parallax({
				bitmap: this.assets['hay'], 
				x: 0, 
				y: 0,
				offset: 1,
			});

			// cont = new createjs.Container();



			// image = new createjs.Bitmap(this.assets['hay'])

			// cont.addChild(image);

			// this.stage.addChild(cont);
			// // // }

			this.stage.addChild(
				this.parallaxLayers['hay'].graphics
			);

			document.onkeypress = function(e) {
				that.handleKey(e);
			};


			// //add the display elements to the stage
			// this.stage.addChild(
			// 	this.parallaxLayer['hay'].graphics			
			// );



		},

		handleKey: function(e) {
			console.log('handling');
			switch (e.which || e.keyCode){
				case 39: // right arrow key
					this.viewport.x += 10;
					console.log(window.viewport.x);
				break;
				case 37: // left arrow key
					this.viewport.x -= 10;
					console.log(window.viewport.x);
				break;
			}

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

			for(var i in this.parallaxLayers){
				this.parallaxLayers[i].update();
				this.parallaxLayers[i].render();
			}	

			this.viewport.x += 1;


			this.stage.update(event);
		}
	}

	return Play;
});