define('Preloader', [	
	'jquery',
	'create'
], function($){
	var Preloader;

	var assetManifest = [
		{id: "clouds", src:"img/clouds_loop.png"},
		{id: "hills_med", src:"img/hill_med.png"},
		{id: "hills_far", src:"img/hill_far.png"},
		{id: "hay", src:"img/hay_blank.jpg"}
	];

	Preloader = {
		enter : function(canvas, stage){
			var that = this;

			this.stage = stage;
			this.canvas = canvas;

			this.assets = {};

			this.totalAssets = assetManifest.length;
			this.loadedAssets = 0;

			//call preload, and install soundjs as plugin
			this.loader = new createjs.LoadQueue();

			this.loader.on("fileload", this.handleFileLoad, this);
 			this.loader.on("complete", this.handleComplete, this);

			//adding our files to the queue
			this.loader.loadManifest(assetManifest);
						
		}, 

		handleFileLoad : function(loadedFile) {
			this.assets[loadedFile.item.id] = loadedFile.result;
		},

		handleComplete : function() {
			return true;
		}
	}

	return Preloader;

});