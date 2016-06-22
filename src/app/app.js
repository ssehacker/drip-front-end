
//common js or css
require('./less/iconfont.less');
require('./less/common.less');
require('./less/main.less');


let menuOption =[
	{
		title:'文章',
		url: '/',
		iconClass: 'icon-article1'
	},
	{
		title: '关于',
		url: '/about',
		iconClass: 'icon-about1'
	},
	{
		title: '联系我',
		url: '/contact',
		iconClass: 'icon-contact'
	}
];

let Menu = require('../components/Menu.js');
ReactDOM.render(<Menu option = {menuOption}/>, document.body);