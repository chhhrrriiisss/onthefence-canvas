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

			// if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
			//     document.write('<script src="http://jsconsole.com/remote.js?A59D6C66-CAC6-4451-AD9D-FA48E363EB20"></script>');    
			// }

			/*********************************************************************************/
			/* Canvas Initialization                                                         */
			/*********************************************************************************/
		
			var that = this;

			this.percent = document.getElementById('loadingPercent');
			this.wrapper = document.getElementById('canvasWrapper');				
			this.canvas = document.getElementById("mainCanvas");
			this.stage = new createjs.Stage(this.canvas);
			this.stage.autoClear = true;
			this.stage.enableDOMEvents(true);
			createjs.Touch.enable(this.stage);

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
				
			window.addEventListener("resize", this.setSize, false);

			//start preloader
			Preloader.enter(this.canvas, this.stage);		


			Preloader.loader.on("progress", function(event) {
				
				var perc = Math.round(event.loaded*100) + '%';
				// that.percent.innerHTML = perc;

				$('#loadingPercent').html(perc);

			});

			Preloader.loader.on("complete", function(assets) {

				

				$('#loadingPercent').addClass('hide');
				$('#canvasWrapper').addClass('show');

				// that.percent.className += " hide";
				// that.wrapper.className += " show";

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
			var w = $('#canvasWrapper').outerWidth();
			var h = Math.round(w * ratio);

			s.canvas.width = w;
			s.canvas.height = h;
			console.log('resizing: ' + s.canvas.width + ' ' + s.canvas.height);


			//Do Something
			s.clear();
			s.update();
		}

	}

	return App;
});


