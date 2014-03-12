define('Preloader', [	
	'jquery',
	'create'
], function($){
	var Preloader;

	var assetManifest = [
		{id: "clouds", src:"img/clouds_loop.png"},
		{id: "hillsMed", src:"img/hill_med.png"},
		{id: "hillsFar", src:"img/hill_far.png"},
		{id: "bale", src:"img/bale.jpg"},
		{id: "sheep_face", src:"img/sheep_face.png"},
		{id: "sheep_body", src:"img/sheep_body.png"},
		{id: "sheep_legs", src:"img/sheep_legs.png"},
		{id: "data", src:"js/data.json"}
	];

	Preloader = {
		initialize : function(canvas, stage){
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