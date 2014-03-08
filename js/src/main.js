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
		'Preloader' : 'states/preloader.min',
		'Play' : 'states/play.min',

        // Entities
		'Clouds' : 'entities/clouds.min',
		'Hills' : 'entities/hills.min',
	
		'App' : 'app.min'
	},
	urlArgs : "bust="+(new Date()).getTime()
});

require(['App'], function(App){	
	App.initialize();		
});