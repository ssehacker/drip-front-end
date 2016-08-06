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

//获取光标位置函数
util.getCursortPosition = function(ctrl) {
	var CaretPos = 0;    // IE Support
	if (document.selection) {
		ctrl.focus ();
		var Sel = document.selection.createRange ();
		Sel.moveStart ('character', -ctrl.value.length);
		CaretPos = Sel.text.length;
	}
	// Firefox support
	else if (ctrl.selectionStart || ctrl.selectionStart == '0')
		CaretPos = ctrl.selectionStart;
	return (CaretPos);
};

//设置光标位置函数
util.setCaretPosition = function(ctrl, pos){
	if(ctrl.setSelectionRange)
	{
		ctrl.focus();
		ctrl.setSelectionRange(pos,pos);
	}
	else if (ctrl.createTextRange) {
		var range = ctrl.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
};


export default util;