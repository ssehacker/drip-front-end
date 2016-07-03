import classnames from 'classnames';

class Box extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className={classnames({'drip-ui-box': true, [`${this.props.className}`]: !!this.props.className})}>
				{this.props.children}
			</div>
			);
	}
}

Box.defaultProps = {
	className: '',
}
Box.propTypes = {
	className: React.PropTypes.string,
}
export default Box;