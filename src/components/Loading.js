/**
 * Created by ssehacker on 16/8/7.
 */
import util from '../components/Util';

const cdn = util.loadConfig().cdn;
console.log(cdn);
class Loading extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="drip-ui-loading">
				<img src={`${cdn}/public/loading.svg`} />
				<p>正在加载</p>
			</div>
		);
	}
}

let loading = {};

loading.start = function (){

	let loadWrapper = document.createElement('div');
	loadWrapper.className = 'drip-ui-loading-wrapper';

	let screenWidth = $(window).width();
	let screenHeight = $(window).height();

	loadWrapper.style.height = screenHeight+'px';
	loadWrapper.style.width = screenWidth+'px';

	this.loadWrapper = document.body.appendChild( loadWrapper );

	ReactDOM.render(<Loading type='spokes' color='#e3e3e3' />, loadWrapper);

};

loading.stop = function () {
	ReactDOM.unmountComponentAtNode(this.loadWrapper);
	setTimeout(()=>{
		this.loadWrapper.remove();
	}, 0);
};

export default loading;