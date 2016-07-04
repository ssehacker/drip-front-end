class CalendarDecorator extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let month = this.props.datetime.getMonth()+1;
		let day = this.props.datetime.getDate();

		return (
			<div className='drip-ui-calendar-decorator'>
				<span>{month}月</span>
				<p>{day}</p>
			</div>
			);
	}
}

CalendarDecorator.defaultProps = {
	datetime: new Date(),
}
CalendarDecorator.propTypes = {
	datetime: React.PropTypes.instanceOf(Date),
}
export default CalendarDecorator;