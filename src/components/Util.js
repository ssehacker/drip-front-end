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

util.loadConfig = function(){
	let config;
	if(__config.env === 'dev'){
		config = require('../config/config.dev.js');
	}else {
		config = require('../config/config.prod.js');
	}
	return config;
};

export default util;