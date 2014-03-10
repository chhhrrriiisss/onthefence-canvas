define('App', [
	'jquery',	
	'Preloader',
	'Scene',
	'Play',
	'create'
], function($, Preloader, Scene, Play){
	var App;

	App = {
		initialize : function(){		
			/*********************************************************************************/
			/* Debug                                                                         */
			/*********************************************************************************/

			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
			    document.write('<script src="http://jsconsole.com/remote.js?A59D6C66-CAC6-4451-AD9D-FA48E363EB20"></script>');    
			}

			/*********************************************************************************/
			/* Canvas Initialization                                                         */
			/*********************************************************************************/
		
			var that = this;

			that.percent = document.getElementById('loadingPercent');
			that.wrapper = document.getElementById('canvasWrapper');				
			that.canvas = document.getElementById("mainCanvas");
			this.stage = new createjs.Stage(this.canvas);
			this.stage.autoClear = true;
			this.stage.canvas.width = 1360;
			this.stage.canvas.height = 720;
		
			this.properties = {
				"canvas" : this.canvas,
				"stage" : this.stage,
				"aspect-ratio" : 0.52,
				"viewport-x" : 0,
				"viewport-y" : 0,
				"target-x" : 0,
				"target-y" : 0,
				"left-boundary" : -2000,
				"right-boundary" : 20000,
				"easing" : 10
			}

			Scene.initialize(this.properties);

			this.setSize();	

			createjs.Touch.enable(this.stage);

			window.addEventListener("resize", this.setSize, false);

			//start preloader
			Preloader.enter(this.canvas, this.stage);		


			Preloader.loader.on("progress", function(event) {
				
				var perc = Math.round(event.loaded*100) + '%';
				that.percent.innerHTML = perc;

			});

			Preloader.loader.on("complete", function(assets) {

				that.percent.className += " hide";
				that.wrapper.className += " show";

				that.assets = Preloader.assets;	
	
					
				that.start();       	
	        
			});

		},
		start : function(){

			var that = this;
			//start Play state
			Play.enter(this.canvas, this.stage, this.assets, this.viewport);	

			//Scene.goto("explore");

		},
		setSize : function() {

			var s = Scene.get('stage');
			var ratio = Scene.get('aspect-ratio');
			var w = s.canvas.width = this.wrapper.offsetWidth;
			var h = s.canvas.height = Math.round(s.canvas.width * ratio);

			Scene.set('width', w);
			Scene.set('height', h);

			console.log('resizing: ' + w + ' ' + h);


			//Do Something
			s.clear();
			s.update();
		}

	}

	return App;
});


