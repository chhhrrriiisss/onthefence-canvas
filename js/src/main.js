requirejs.config({
	baseUrl : './js',
	shim : {		
		'App' : { 
			//make sure these modules are loaded before starting the app
			deps : ['jquery', 'create', 'Preloader', 'Hammer', 'domReady']			
		} 	
	},
	paths : {
        // Libraries
		'create' : 'lib/createjs.min', 
		'jquery' : 'lib/jquery-2.1.0.min',
		'Hammer' : 'lib/hammer.min',

        // States
		'Preloader' : 'states/src/preloader',
		'Play' : 'states/src/play',

        // Entities\
        'Scene' : 'entities/src/scene',
    	'Parallax' : 'entities/src/parallax',
		'Clouds' : 'entities/src/clouds',
		'Hills' : 'entities/src/hills',

		'domReady' : 'utils/domReady.min',

		'App' : 'src/app'
	},
	urlArgs : "bust="+(new Date()).getTime()
});

require(['App'], function(App) {


	App.initialize();	

});
