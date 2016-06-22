let classnames = require('classnames');

class Menu extends React.Component{
	constructor(props){
		super(props);

	}

	render(){
		var children = this.props.option.map((item)=>{
			let clsname = classnames('iconfont', item.iconClass);
			return (<li><a className={clsname} href={item.url}>{item.title}</a></li>);
		});

		return (
			<div className='drip-ui-menu'>
				<ul>
					{children}
				</ul>
			</div>
			);
	}
}

module.exports = Menu;