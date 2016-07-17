import classnames from 'classnames';
import util from './Util';
import Button from './Button';
let {Link } = ReactRouter;
class Header extends React.Component{
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

	renderMenu(){
		return this.props.items.map((item, index)=>{
			let clsname = classnames('iconfont', item.iconClass);
			return (<li key={'header-item'+index}><Link className={clsname} to={item.url}>{item.title}</Link></li>);
		});
	}

	renderLinks(){
		return this.props.links && this.props.links.map((item,index)=> {
			return (<Button key={"header-link-"+index} title={item.title} onClick={item.onClick}/>);
		});
	}

	render(){
		let t = this;

		return (
			<div className={classnames({'drip-ui-header': true, 'hidden': this.state.isHidden})}>
				<ul>
					{ t.renderMenu() }
				</ul>
				<div className="drip-ui-header-links">
					{ t.renderLinks() }
				</div>
			</div>
			);
	}
}

module.exports = Header;