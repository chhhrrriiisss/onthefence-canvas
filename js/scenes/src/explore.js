define('Explore',[
	'Clouds',
	//'Feed',
	//'Review',
	'create'
], function(Clouds) {
	var Explore;

	Explore = function(stage, assets) {
		
			this.contents = new createjs.Container();

			// CLOUDS

			// create the cloud layer			
			this.cloudLayer = new Clouds(assets['clouds'], stage);

			// animate the cloud layer 
			this.cloudLayer.animate(stage.canvas.width);	

			this.contents.addChild(this.cloudLayer.graphics);
	};

	Explore.prototype = {

		animate : function() {
	

		},		
		update : function(){
			
		},
		render : function(){
			// this.contents.x = this.x;
			// this.contents.y = this.y;			
		}
	}	

	return Explore;
});