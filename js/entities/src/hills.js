define('Hills',[	
	'create'
], function(){
	var Hills;

	Hills = function(image, stage){
		// INITIALIZE PROPERTIES		

		this.x = 0;
		this.y = 0;

		this.graphics = new createjs.Container();		
		
        var hill = new createjs.Bitmap(image);
        hill.x = 0;
        hill.y = stage.canvas.height- (image.height);	

		this.graphics.addChild(hill);	
		
		//this.animate();
	};

	Hills.prototype = {

		animate : function(w) {

			// this.x = 0;
			// this.y = 0;

			// createjs.Tween.get(this.graphics, {loop:true}).to({x:w}, 30000);

		},		
		update : function(){
			
		},
		render : function(){
			this.graphics.x = this.x;
			this.graphics.y = this.y;			
		}
	}	

	return Hills;
})