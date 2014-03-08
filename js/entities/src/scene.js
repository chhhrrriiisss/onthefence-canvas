define('Scene',[	
	'jquery',
	'create'
], function($){
	var Scene;

	Scene = {

		// sets default app values
		initialize: function(content) {

			this.properties = content;
		},

		// goes to target scene
		goto: function(targetScene) {


		},

		// sets a 'global' app value
		set: function(tag, content) {

			this.properties[tag] = content;
		},

		// gets a 'global' app value
		get: function(tag) {

			
			return this.properties[tag];

		},

		update: function() {

			var targetX = this.properties['target-x'];
			var currentX = this.properties["viewport-x"];

			if (targetX != currentX) {
				var difX = this.properties['target-x'] - this.properties["viewport-x"];
				var easing = this.properties['easing']
				this.newX = Math.round( difX / easing );
			} else {
				this.newX = '';
			}

	
		},

		render: function() {
			if (this.newX != '') {
				this.properties['viewport-x'] += this.newX;
			}
		},

		// viewing window specific properties
		viewport: {

			x: function() {

				return Scene.properties['viewport-x'];
			},

			y: function() {

				return Scene.properties['viewport-y'];
			},

			targetX: function() {

				return Scene.properties['target-x'];
			},

			targetY: function() {

				return Scene.properties['target-y'];
			},

			// moves the viewport slightly (with easing)
			nudge: function(x, y) {
				
				if (x) {
					Scene.properties['target-x'] += x;
				}

				if (y) {
					Scene.properties['target-y'] += y;
				}

			}

		}

	
	};

	return Scene;
})