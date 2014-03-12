define('Scene',[
	'Clouds',
	'Hills',
	'Bale',
	'Parallax',
	'Hammer'
], function(Clouds, Hills, Bale, Parallax, Hammer) {
	var Scene;

	Scene = {

		ready: false,
		assets: {},

		enter: function(title) {


			switch(title)
			{
				case "explore":
				this.explore();
				break;
			}

		},

		explore: function() {

			if (!this.ready) {
				console.log('Scene properties not set!');			
			}

			var that = this;

			canvas = this.properties['canvas'];
			stage = this.properties['stage'];
			this.stage = stage;
			this.canvas = canvas;
			assets = this.assets;

			//set FPS and start listening to game ticks
        	createjs.Ticker.on("tick", this.tick, this);
			createjs.Ticker.setFPS(60);

			var hillsFarImage = this.assets['hillsFar'];
			var hillsMedImage = this.assets['hillsMed'];
			var baleImage = this.assets['bale'];
			var cloudImage = this.assets['clouds'];
			window.disableScroll = false;

			var rawData = this.assets['data'];
			var data = [];

			for (var key in rawData) {
				var item = rawData[key];
				data.push(item);			
			}

			this.bales = new Object();
			this.bales.graphics = new createjs.Container();

			for (var i = 0; i<data.length; i++) {

				var cX = -4000 + Math.random() * 8000;
				var cY = 550 + Math.random()*100;
				bale = new Bale(cX,cY, baleImage, data[i].category);
				bale.x = cX;
				bale.y = cY;

				this.bales.graphics.addChild(bale.graphics);
			}


			//console.log(data.category[0]);
			this.parallaxLayers = [];

			// that.parallaxLayers['hay'] = new Parallax(0, 600, this.assets['hay'], 1, 10); // x, y, image, offset, easing
			that.parallaxLayers['hillMed'] = new Parallax(this, 0, parseInt(stage.canvas.height - hillsMedImage.height), hillsMedImage, 1, 10, true); // x, y, image, offset, easing, loop\
			that.parallaxLayers['hillFar'] = new Parallax(this, -2000, parseInt(stage.canvas.height - hillsFarImage.height) - 25, hillsFarImage, .5, 10, true); // x, y, image, offset, easing, loop\

			this.cloudLayer = new Clouds(cloudImage);
			// this.baleLayer = new Bale(0,0, baleImage);
		
			that.parallaxLayers['bales'] = new Parallax(this, 1000, 600, this.bales, 1, 10); // x, y, image, offset, easing, loop
			that.parallaxLayers['clouds'] = new Parallax(this, 0, 0, this.cloudLayer, .5, 10); // x, y, image, offset, easing, loop

			
			stage.addChild(
				// this.cloudLayer.graphics,
				this.parallaxLayers['clouds'].graphics,
				this.parallaxLayers['hillFar'].graphics,
				this.parallaxLayers['hillMed'].graphics,
				that.parallaxLayers['bales'].child.graphics
			
	
			);

			this.addHooks();
  
		},

		// sets default app values
		initialize: function(content) {


			this.properties = content;
			this.ready = true;
		},

		// goes to target scene
		goto: function(targetScene) {

		},

		// sets a 'global' app value
		set: function(tag, content) {

			this.properties[tag] = content;
		},

		// gets a 'global' app value
		get: function(tag) {
			
			return this.properties[tag];

		},

		update: function() {

			var targetX = this.properties['target-x'];

			var currentX = this.properties["viewport-x"];

			if (targetX != currentX) {
				var difX = this.properties['target-x'] - this.properties["viewport-x"];
				var easing = this.properties['easing']
				this.newX = Math.round( difX / easing );
			} else {
				this.newX = '';
			}

			if (this.newX != '') {
				this.properties['viewport-x'] += this.newX;

			}

	
		},

		addHooks: function () {



			Hammer(document).on("swipeleft", function(event) {			
				Scene.viewport.nudge(-1000);
				
			});

			Hammer(document).on("swiperight", function(event) {
					Scene.viewport.nudge(1000);				
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

            $('#mainCanvas').on("mousewheel", function(e) {

	

				var delta = e.originalEvent.wheelDelta;

				if (delta > 0) {
					Scene.viewport.nudge(-400);
				} else if (delta < 0) {
					Scene.viewport.nudge(400);					
				}

            });

		},

		tick : function(event){

			Scene.update();
			//this.cloudLayer.update();

			// this.cloudLayer.update();
			// this.cloudLayer.render();

			this.cloudLayer.tick();

			for(var i in this.parallaxLayers){
				this.parallaxLayers[i].tick();
			}	


			// 		stage = this.properties['stage'];
			// stage.update();

			this.stage.update(event);

		},

		// viewing window specific properties
		viewport: {

			x: function() {

				return Scene.properties['viewport-x'];
			},

			y: function() {

				return Scene.properties['viewport-y'];
			},

			width: function() {

				return Scene.properties['width'];
			},

			targetX: function() {

				return Scene.properties['target-x'];
			},

			targetY: function() {

				return Scene.properties['target-y'];
			},

			// moves the viewport slightly (with easing)
			nudge: function(x, y) {
				
		
				if (!window.disableScroll) {

					if (x) {
						Scene.properties['target-x'] += x;
					}

					if (y) {
						Scene.properties['target-y'] += y;
					}

				}

			}

		}

		

	
	};

	return Scene;
})