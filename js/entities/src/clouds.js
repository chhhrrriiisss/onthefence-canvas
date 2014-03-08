define('Clouds',[	
	'create'
], function(){
	var Clouds;

	Clouds = function(image, stage){
		// INITIALIZE PROPERTIES		

		this.x = 0;
		this.y = 0;	

		this.graphics = new createjs.Container();		
		
        var cloud = new createjs.Bitmap(image);
        var cloud2 = cloud.clone();

        cloud2.x = -(stage.canvas.width);
        cloud2.y = 0;

		this.graphics.addChild(cloud, cloud2);	
		
		//this.animate();
	};

	Clouds.prototype = {

		animate : function(w) {

			this.x = 0;
			this.y = 0;

			createjs.Tween.get(this.graphics, {loop:true}).to({x:w}, 30000);

		},		
		update : function(){
			
		},
		render : function(){
			this.graphics.x = this.x;
			this.graphics.y = this.y;			
		}
	}	

	return Clouds;
})