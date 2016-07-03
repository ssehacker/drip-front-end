import classnames from 'classnames';
import util from './Util';

class Menu extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isHidden: false
		};
	}

	componentDidMount(){
		let lastScrollTop = 0;
		let me = this;
		window.addEventListener('scroll', util.throttle(function (e){
			var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
			if (st > lastScrollTop){
			   	// downscroll
			   	me.setState({
			   		isHidden: true
			   	});
			} else {
				// up
			  	me.setState({
			   		isHidden: false
			   	});
			}
			lastScrollTop = st;
		}, 100), false);
	}

	render(){
		var children = this.props.option.map((item, index)=>{
			let clsname = classnames('iconfont', item.iconClass);
			return (<li key={'menu-item'+index}><a className={clsname} href={item.url}>{item.title}</a></li>);
		});

		return (
			<div className={classnames({'drip-ui-menu': true, 'hidden': this.state.isHidden})}>
				<ul>
					{children}
				</ul>
			</div>
			);
	}
}

module.exports = Menu;