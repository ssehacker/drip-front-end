/**
 * Created by ssehacker on 16/8/7.
 */
import classnames from 'classnames';

class SimplePage extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		
	}

	getInnerHtml(){
		return {
			__html: '# SimplePage'
		};
	}

	render(){
		let me = this;
		return (
			<div className={classnames({'drip-ui-simple-page': true, [`${me.props.className}`]: true})}>
				<div className="markdown-body" dangerouslySetInnerHTML={me.getInnerHtml()}></div>
			</div>
		);
	}
}

export default SimplePage;
