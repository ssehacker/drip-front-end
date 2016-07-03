import classnames from 'classnames';

class FlipCard extends React.Component{
	constructor(props){
		super(props);

	}

	render(){

		return (
			<div className={classnames({'flip-container': true, [`${this.props.className}`] : !!this.props.className})}>
				<div className="flipper">
					{this.props.children}
				</div>
			</div>
			);
	}
}

FlipCard.defaultProps = {
	className: '',
};

FlipCard.propTypes = {
	className: React.PropTypes.string,
}

class Front extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="front">
				{this.props.children}
			</div>
			);
	}
}

class Back extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="back">
				{this.props.children}
			</div>
			);
	}
}

FlipCard.Front = Front;
FlipCard.Back = Back;

export {Front, Back};
export default FlipCard;