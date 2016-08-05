
class Footer extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<footer className='drip-ui-footer'>
				<p>&copy;<a href="//1xue.me">drip blog system</a> {new Date().getFullYear()}</p>
			</footer>
			);
	}
}

export default Footer;