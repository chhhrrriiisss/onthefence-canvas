define('Scene',[	
	'jquery',
	'create'
], function($){
	var Scene;

	Scene = {

		properties: function(content) {

			this.properties = content;
		},

		set:function(tag, content) {

			this.properties[tag] = content;
		},

		get: function(tag) {

			
			return this.properties[tag];

		},

		move: function(x) {

			this.properties['target-x'] += x;

		}

	
	};

	return Scene;
})