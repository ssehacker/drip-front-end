/**
 * Created by ssehacker on 16/8/6.
 */
import classnames from 'classnames';

class Confirm extends React.Component{
	constructor(props){
		super(props);
	}

	abort(e){
		e.preventDefault();
		this.props.abort && this.props.abort.call(this);
	}

	confirm(e){
		e.preventDefault();
		this.props.confirm && this.props.confirm.call(this);

	}

	componentDidMount() {

	}

	render(){
		let t = this;
		return (
			<div className={classnames('drip-ui-confirm', t.props.className )}>
				<div className="drip-ui-confirm-content">
					{t.props.children}
				</div>
				<div className="drip-ui-confirm-btn">
					<a onClick={t.confirm.bind(t)}>{t.props.confirmTitle}</a>
					<a onClick={t.abort.bind(t)}>{t.props.abortTitle}</a>
				</div>
			</div>
		);
	}
}

Confirm.defaultProps = {
	confirm: function(){},
	abort: function(){},
	confirmTitle: '确定',
	abortTitle: '取消',
	className: ''
};

Confirm.propTypes = {
	confirm: React.PropTypes.func,
	abort: React.PropTypes.func,
	confirmTitle: React.PropTypes.string,
	abortTitle: React.PropTypes.string,
	className: React.PropTypes.string
};


function confirm(element, props){

	let wrapper = document.createElement('div');
	wrapper.className = 'drip-ui-confirm-wrap';
	let screenWidth = $(window).width();
	let screenHeight = $(window).height();
	
	wrapper.style.height = screenHeight+'px';
	wrapper.style.width = screenWidth+'px';

	wrapper = document.body.appendChild( wrapper );



	let cleanup = function (){
		ReactDOM.unmountComponentAtNode(wrapper);
		setTimeout(()=>{
			wrapper.remove();
		}, 0);
	};
	let abort = props.abort;
	props.abort = ()=>{
		abort && abort();
		cleanup();
	};
	let confirm = props.confirm;
	props.confirm = ()=>{
		confirm && confirm();
		cleanup();
	};

	let confirmNode = <Confirm {...props}>{element}</Confirm>;

	ReactDOM.render(confirmNode, wrapper);
}

export default confirm;