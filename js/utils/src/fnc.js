define('fnc', function(){
	var fnc;

	fnc = {

		splitLine: function(st,n) {
			var b = ''; 
			var s = st;

			while (s.length > n) {
				var c = s.substring(0,n);
				var d = c.lastIndexOf(' ');
				var e =c.lastIndexOf('\n');
				if (e != -1) d = e; 
				if (d == -1) d = n; 
				b += c.substring(0,d) + '\n';
				s = s.substring(d+1);
			}
 
			return b+s;
		}	

	};	


	return fnc;
})