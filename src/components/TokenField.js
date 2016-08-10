/**
 * Created by ssehacker on 16/8/8.
 */
class TokenField extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tokenFieldWidth: 0,
			labels: ['苹果', '香蕉'],
			tokenValue: ''
		};
	}

	componentDidMount(){
		this.calculateInputWidth();
	}

	componentDidUpdate(){
		this.calculateInputWidth();
	}

	getTokens(){
		return this.state.labels;
	}

	calculateInputWidth(){
		let wrapper = ReactDOM.findDOMNode(this.refs.tokenfield);
		window.wrapper = wrapper;
		let wrapperWidth = wrapper.offsetWidth;
		let labelsWidth = 12+12+2;
		wrapper.querySelectorAll('.token-label').forEach((node)=>{

			labelsWidth += node.offsetWidth +4;
			if(labelsWidth> wrapperWidth){
				labelsWidth = 12+12+2 + node.offsetWidth +4;
			}
		});

		console.log('wrapperWidth===', wrapperWidth);
		if(wrapperWidth-labelsWidth !== this.state.tokenFieldWidth){
			this.setState({
				tokenFieldWidth: wrapperWidth-labelsWidth
			});
		}

	}

	renderLabel(){
		let me = this;
		return me.state.labels && me.state.labels.map((val)=> {
			return (
				<div key={val} className="token-label">
					<span>{val}</span>
					<a onClick={me.handleRemoveToken.bind(me, val)}>x</a>
				</div>
			);
		});
	}

	handleRemoveToken(val){
		let labels = this.state.labels;
		let deletedIndex = labels.indexOf(val);
		if(deletedIndex > -1){
			labels.splice(deletedIndex, 1)	;
		}
		this.setState({
			labels: labels
		});
	}

	handleChange(e){
		let val = e.target.value;
		if(val && val[val.length-1]===' '){
			val = val.replace(/\s+/g, '');
			if(val){
				let temp = this.state.labels;
				if( temp.indexOf(val)===-1 ){
					temp.push(val);
					this.setState({
						labels: temp,
						tokenValue: ''
					});
				}else{
					this.setState({
						tokenValue: ''
					});
				}

			}
		}else{
			this.setState({
				tokenValue: val
			});
		}

	}

	render(){
		let me = this;
		return (
			<div className="drip-ui-token-field-wrapper">
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
				<div className="drip-ui-token-field" ref="tokenfield">
					{me.renderLabel()}
					<input style={{width: me.state.tokenFieldWidth+'px'}}
						   name="token-input"
						   className="token-input"
						   value={me.state.tokenValue}
						   onChange={me.handleChange.bind(me)}/>
				</div>
			</div>
		);
	}
}

export default TokenField;
