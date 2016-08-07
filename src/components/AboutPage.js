/**
 * Created by ssehacker on 16/8/7.
 */

class AboutPage extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		
	}

	getInnerHtml(){
		return {
			__html: this.props.user.resume
		};
	}

	render(){
		let me = this;
		return (
			<div className="drip-ui-about-page">
				<div className="markdown-body" dangerouslySetInnerHTML={me.getInnerHtml()}></div>
			</div>
		);
	}
}

export default AboutPage;
