requirejs.config({
	baseUrl : './js',
	shim : {
		'App' : { 
			//make sure these modules are loaded before starting the app
			deps : ['jquery', 'create', 'Preloader', 'Scene']			
		} 	
	},
	paths : {
        // Libraries
		'create' : 'lib/createjs.min', 
		'jquery' : ["http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min","lib/jquery-2.1.0.min"],
		'Hammer' : 'lib/hammer.min',

        // States
		'Preloader' : 'states/src/preloader',

        // Entities
        'Scene' : 'entities/src/scene',
    	'Parallax' : 'entities/src/parallax',
		'Clouds' : 'entities/src/clouds',
		'Hills' : 'entities/src/hills',
		'Bale' : 'entities/src/bale',

		'domReady' : 'utils/domReady.min',

		'App' : 'src/app'
	},
	urlArgs : "bust="+(new Date()).getTime(),
	waitSeconds: 400
});


require(['Preloader'], function(Preloader) {

	console.log('Preloader initializing...');
	// App.initialize();	

});

require(['App'], function(App) {

	console.log('App initializing...');
	App.initialize();	

});


requirejs.onError = function (err) {
    if (err.requireType === 'timeout') {
        alert("error: "+err);
    } 
    else {
        throw err;
    }   
};