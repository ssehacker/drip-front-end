import FlipCard from './FlipCard';
const {Front, Back} =  FlipCard;

class Banner extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			bgIndex: 0
		};
		let config;
		if(__config.env === 'dev'){
			config = require('../config/config.dev.js');
		}else {
			config = require('../config/config.prod.js');
		}
		this.host = config.cdn;

		this.colors = [ '#1fbda5', '#8c6954', '#542733'];
	}


	switchBackground(){
		this.setState({
			bgIndex: (this.state.bgIndex+1)%this.colors.length
		});
	}

	componentDidMount(){
		this.trigger = setInterval(()=>{
			this.switchBackground();
		}, 60*1000);
	}

	componentWillUnMount(){
		clearInterval(this.trigger);
	}


	render(){
		let t = this;
		return (
			<div className='drip-ui-banner' style={{background:t.colors[t.state.bgIndex]}}>
				<FlipCard className='drip-ui-photo'>
					<Front><img src={ t.host + this.props.photo}/></Front>
					<Back>
						<div className='drip-ui-photo-title'>
							<h4>醒醒</h4>
							<p>国家有任务交给你啦</p>
						</div>
					</Back>
				</FlipCard>
				<h1 className='css44c9c1f15647b'>{this.props.title}</h1>
			</div>
			)
	}
}

Banner.defaultProps = {
	photo: 'default-photo.jpeg',
	title: '我的博客'
};

Banner.propTypes = {
	photo: React.PropTypes.string,
	title: React.PropTypes.string
};

module.exports = Banner;