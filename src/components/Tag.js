/**
 * Created by ssehacker on 16/8/8.
 */
class Tag extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		let wrapper = ReactDOM.findDOMNode(this);
		console.log('wrapper.offsetWidth==',wrapper.offsetWidth);
	}

	render(){
		return (
			<div className="drip-ui-tag">
				<div className="tag-comm">
					<p>常用:</p>
					<ul className="clearfix">
						<li>标签1</li>
						<li>标签2</li>
						<li>标签3</li>
						<li>标签4</li>
						<li>标签5</li>
					</ul>
				</div>
				<input name="tags" />
			</div>
		);
	}
}

export default Tag;
