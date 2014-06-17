define('Sheep', [
	'fnc'
	], function(fnc){
	var Sheep;

	Sheep = function(x, y, face, body, legs){

		// Defaults & Settings
		var that = this;	
		this.x = x || 0;
		this.y = y || 0;

		this.width = 265; // from ai
		this.height = 300; // from ai

		this.centerX = this.width/2;
		this.centerY = this.height/2;

		this.steadiness = 10;
		this.direction = 1;

		// Face
  		this.face = new createjs.Shape(fnc.generateVector(face.code));

        // Body
  		this.body =  new createjs.Shape(fnc.generateVector(body.code));

  		// Legs
  		this.legs =  new createjs.Shape(fnc.generateVector(legs.code));

  		// Group all the parts
  		this.group = new createjs.Container();
  		this.group.addChild(this.legs, this.body, this.face);
  		this.group.regX = this.centerX;
  		this.group.regY = this.height;
  		this.group.scaleX = this.group.scaleY = this.group.scale = .5;

        // Overall Image Container
		this.graphics = new createjs.Container();	
		this.graphics.addChild(this.group);	
		this.graphics.x = this.x;
		this.graphics.y = this.y;

		// Trigger this
		//animation.sway();
	};	

	Sheep.prototype = {


		tick: function() {			
			
		},

		sway: function() {
			
		}



	}

	return Sheep;
})