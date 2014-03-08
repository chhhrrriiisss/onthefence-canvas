requirejs.config({
	baseUrl : './js',
	shim : {		
		'App' : { 
			//make sure these modules are loaded before starting the app
			deps : ['jquery', 'create', 'Preloader']			
		} 	
	},
	paths : {
        // Libraries
		'create' : 'lib/createjs.min', 
		'jquery' : 'lib/jquery-2.1.0.min',

        // States
		'Preloader' : 'states/src/preloader',
		'Play' : 'states/src/play',

        // Entities
    	'Parallax' : 'entities/src/parallax',
		'Clouds' : 'entities/src/clouds',
		'Hills' : 'entities/src/hills',

		'App' : 'app.min'
	},
	urlArgs : "bust="+(new Date()).getTime()
});

require(['App'], function(App){	
	App.initialize();		
});