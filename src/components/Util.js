let util = {};
util.throttle = function(fn, delay){
	var timer = null;
	return function(){
		var context = this, args = arguments;
		clearTimeout(timer);
		timer = setTimeout(function(){
			fn.apply(context, args);
		}, delay);
	};
};

util.formatDate = function(datetime){
	return new (Date.bind.apply(Date, datetime.match(/(\d+)/g)));
};

export default util;