class Button extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let {title, ...other} = this.props;
		return (
			<span {...other}  className='drip-ui-button'>{this.props.children || title}</span>
			);
	}
}
Button.defaultProps = {
	title: '按钮',
	onClick: function(){}
};

Button.propTypes = {
	title: React.PropTypes.string,
	onClick: React.PropTypes.func
};

export default Button;