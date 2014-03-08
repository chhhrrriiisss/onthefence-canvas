define('App', [
	'jquery',	
	'Preloader',
	'Play',
	'create'
], function($, Preloader, Play){
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
			/* CSS Framework                                                                 */
			/*********************************************************************************/

			// var _settings = {

			// 	// skelJS
			// 	skelJS: {
			// 		prefix: 'css/screen',
			// 		resetCSS: true,
			// 		boxModel: 'border',
			// 		containers: 1200,
			// 		useOrientation: true,
			// 		breakpoints: {
			// 		'widest': { range: '*', containers: 1360, grid: { gutters: 50 }, hasStyleSheet: false },
			// 		'wide': { range: '-1680', containers: 1200, grid: { gutters: 40 } },
			// 		'normal': { range: '-1280', containers: 960, grid: { gutters: 30 }, lockViewport: true },
			// 		'narrow': { range: '-1000', containers: '100%', grid: { gutters: 25, collapse: true }, lockViewport: true },
			// 		'mobile': { range: '-640', containers: '100%', grid: { gutters: 10, collapse: true }, lockViewport: true }
			// 		}
			// 	}

			// };

			// // skelJS
			// skel.init(_settings.skelJS);  


			/*********************************************************************************/
			/* Canvas Initialization                                                         */
			/*********************************************************************************/

			var that = this;

			this.canvas = document.getElementById("mainCanvas");
        	this.stage = new createjs.Stage(this.canvas);
        	this.stage.autoClear = true;

			createjs.Touch.enable(this.stage);

			//start preloader
			Preloader.enter(this.canvas, this.stage);		

			Preloader.loader.on("complete", function(assets) {

				that.assets = Preloader.assets;			
				that.gotoPlay();
			});

		},
		gotoPlay : function(){
			var that = this;
			//start Play state
			Play.enter(this.canvas, this.stage, this.assets);		
		}

	}

	return App;
});


