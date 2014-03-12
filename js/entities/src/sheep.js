define('Sheep', function(fnc){
	var Sheep;

	Sheep = function(x, y, face, body, legs){
		
		// Defaults & Settings
		var that = this;	
		this.x = x || 0;
		this.y = y || 0;

		this.width = body.width;
		this.height = body.height;

		this.centerX = this.width/2;
		this.centerY = this.height/2;

		this.steadiness = 10;
		this.direction = 1;

		this.scaleX = this.scaleY = this.scale = 0.5;
		
		// Face
        this.face = new createjs.Bitmap(face);
		this.face.x = this.centerX - (face.width/2);
  		this.face.y = 20;

        // Body
  		this.body = new createjs.Bitmap(body);

  		// lEGS
  		this.legs = new createjs.Bitmap(legs);
  		this.legs.x = this.centerX - (legs.width/2);
  		this.legs.y = this.centerY;

  		this.group = new createjs.Container();
  		this.group.addChild(this.legs, this.body, this.face);
  		this.group.regX = this.centerX;
  		this.group.regY = this.height;





   //      this.body = new createjs.Shape();
  	// 	drawBody(this.body.graphics);

  	// 	function drawBody(ctx) {

			// ctx.moveTo(75.6,84.6);ctx.bezierCurveTo(83.8,105.1,74,128.3,53.6,136.5);ctx.bezierCurveTo(33.1,144.8,12.8,159.9,1.7,114.5);ctx.bezierCurveTo(-3.5,93.1,3.3,70.8,23.7,62.6);ctx.bezierCurveTo(44.1,54.4,67.4,64.2,75.6,84.6);ctx.beginFill="rgb(232, 227, 220)";ctx.fill();ctx.moveTo(73.8,57.1);ctx.bezierCurveTo(74.2,74.6,60.4,89.2,42.9,89.6);ctx.bezierCurveTo(25.4,90,-6.4,97.5,4.5,62.5);ctx.bezierCurveTo(12.9,35.7,23.3,34.2,41.3,26.2);ctx.bezierCurveTo(57.3,19.1,73.3,39.6,73.8,57.1);ctx.fill();ctx.moveTo(214.5,186.9);ctx.bezierCurveTo(211.1,200.2,200.2,208.9,190.3,206.4);ctx.bezierCurveTo(180.4,203.8,175.1,190.9,178.5,177.6);ctx.bezierCurveTo(182,164.3,192.8,155.6,202.8,158.1);ctx.bezierCurveTo(212.7,160.7,218,173.6,214.5,186.9);ctx.fill();ctx.moveTo(89.2,186.2);ctx.bezierCurveTo(89.6,202.3,76.9,215.8,60.7,216.2);ctx.bezierCurveTo(44.6,216.6,31.2,203.8,30.8,187.7);ctx.bezierCurveTo(30.4,171.6,43.1,158.2,59.3,157.7);ctx.bezierCurveTo(75.4,157.3,88.8,170.1,89.2,186.2);ctx.fill();ctx.moveTo(222.6,52.9);ctx.bezierCurveTo(223,67.2,210.7,64.3,196.4,64.7);ctx.bezierCurveTo(182.1,65.1,170.2,53.8,169.8,39.4);ctx.bezierCurveTo(169.5,25.1,170.9,4.7,195.1,12.9);ctx.bezierCurveTo(213.7,19.2,222.3,38.6,222.6,52.9);ctx.fill();ctx.moveTo(101.2,208.3);ctx.bezierCurveTo(95.4,220,98.9,229.6,86.9,235.2);ctx.bezierCurveTo(74.9,240.8,67.4,237.5,57.6,228.6);ctx.bezierCurveTo(19.7,194.2,57.2,202.2,69.2,196.6);ctx.bezierCurveTo(81.2,191,107,196.4,101.2,208.3);ctx.fill();ctx.moveTo(181.8,225.5);ctx.bezierCurveTo(175.3,235.5,161.9,238.4,151.8,231.9);ctx.bezierCurveTo(141.8,225.3,147,213.7,145.5,201.8);ctx.bezierCurveTo(141.9,174.4,163.9,192.3,175.5,195.5);ctx.bezierCurveTo(217.4,206.9,188.4,215.5,181.8,225.5);ctx.fill();ctx.moveTo(226.6,116);ctx.bezierCurveTo(228.2,175.5,181.6,225,122.6,226.5);ctx.bezierCurveTo(63.7,228,14.6,181,13.1,121.4);ctx.bezierCurveTo(11.6,61.9,58.2,12.4,117.1,10.9);ctx.bezierCurveTo(176.1,9.4,225.1,56.5,226.6,116);ctx.fill();ctx.moveTo(235.5,80.4);ctx.bezierCurveTo(238.7,102.2,231.2,123.8,209.4,126.9);ctx.bezierCurveTo(187.7,130.1,167.4,115,164.2,93.3);ctx.bezierCurveTo(161.1,71.5,176.1,51.2,197.9,48.1);ctx.bezierCurveTo(219.7,44.9,232.3,58.6,235.5,80.4);ctx.fill();ctx.moveTo(107.2,36.9);ctx.bezierCurveTo(93,48.3,93.3,70.3,75,70.8);ctx.bezierCurveTo(56.7,71.3,41.5,56.9,41.1,38.6);ctx.bezierCurveTo(40.6,20.3,55,4.6,73.3,4.7);ctx.bezierCurveTo(154,5.1,128.7,19.7,107.2,36.9);ctx.fill();ctx.moveTo(187.7,24.2);ctx.bezierCurveTo(194,39.9,179.3,48.6,158.9,56.8);ctx.bezierCurveTo(138.5,65.1,116.8,59.1,110.5,43.5);ctx.bezierCurveTo(104.2,27.8,106.9,-3,136,.2);ctx.bezierCurveTo(157.9,2.7,181.4,8.6,187.7,24.2);ctx.fill();ctx.moveTo(78.2,145.6);ctx.bezierCurveTo(83.7,166.4,74.4,186.9,57.4,191.4);ctx.bezierCurveTo(40.5,195.8,22.3,182.5,16.8,161.7);ctx.bezierCurveTo(11.4,140.9,20.7,120.4,37.6,115.9);ctx.bezierCurveTo(54.6,111.5,72.7,124.8,78.2,145.6);ctx.fill();ctx.moveTo(33.4,189.8);ctx.bezierCurveTo(33.4,189.8,35,198.6,36.6,201.1);ctx.bezierCurveTo(38.4,203.7,44.7,206.3,46.8,208.7);ctx.bezierCurveTo(49.2,211.5,51.5,218.7,53.9,221.4);ctx.bezierCurveTo(55.2,222.8,60,225.8,60,225.8);ctx.bezierCurveTo(60,225.8,55.9,220.8,54.8,218.9);ctx.bezierCurveTo(52.8,215.5,51.5,207.2,48.7,204.3);ctx.bezierCurveTo(46.8,202.2,40.4,201.3,38.4,199.3);ctx.bezierCurveTo(36.4,197.4,33.4,189.8,33.4,189.8);ctx.fillStyle="rgb(195, 193, 129)";ctx.fill();ctx.moveTo(213.5,178.9);ctx.bezierCurveTo(213.5,178.9,210.6,191,208.1,194.2);ctx.bezierCurveTo(205.3,197.7,196.4,200.9,193.3,204);ctx.bezierCurveTo(189.7,207.6,185.8,217.5,182.2,221);ctx.bezierCurveTo(180.4,222.9,173.5,226.6,173.5,226.6);ctx.bezierCurveTo(173.5,226.6,179.6,220,181.2,217.5);ctx.bezierCurveTo(184.2,212.9,186.9,201.5,190.9,197.7);ctx.bezierCurveTo(193.9,195,202.8,194.2,205.8,191.6);ctx.bezierCurveTo(208.6,189.2,213.5,178.9,213.5,178.9);ctx.fill();ctx.moveTo(111,182.9);ctx.bezierCurveTo(111,182.9,120.6,189.6,119.5,194.3);ctx.bezierCurveTo(118.7,197.2,110.2,203.1,110.2,203.1);ctx.bezierCurveTo(110.2,203.1,113.3,209,112,211.4);ctx.bezierCurveTo(110.6,214.3,101.9,217.9,101.9,217.9);ctx.bezierCurveTo(101.9,217.9,108,212.8,108.7,210.5);ctx.bezierCurveTo(109.3,208.2,105.8,203.7,105.8,203.7);ctx.bezierCurveTo(105.8,203.7,113.9,196.6,114.8,193.6);ctx.bezierCurveTo(115.8,190.1,111,182.9,111,182.9);ctx.fill();ctx.moveTo(101.6,221.6);ctx.bezierCurveTo(101.6,221.6,121.4,219.1,128,218.4);ctx.bezierCurveTo(135.3,217.6,156.7,216.3,156.7,216.3);ctx.bezierCurveTo(156.7,216.3,139.5,222.6,128.8,223.3);ctx.bezierCurveTo(117,224.1,101.6,221.6,101.6,221.6);ctx.fill()

  	// 	}
   
        // Image Container
		this.graphics = new createjs.Container();	
		this.graphics.addChild(this.group);	
		this.graphics.x = this.x;
		this.graphics.y = this.y;

		this.sway();
	};	

	Sheep.prototype = {


		tick: function() {			
			
		},

		sway: function() {
			// swayLeft.chain(swayRight);
			// swayRight.chain(swayLeft);
		}



	}

	return Sheep;
})