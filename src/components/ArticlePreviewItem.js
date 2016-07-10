import Box from './Box';
import Button from './Button';
let {Link} = ReactRouter;

class ArticlePreviewItem extends React.Component{
	constructor(props){
		super(props);
	}

	parseCoding(){
		return $("<div/>").html((this.props.preImg)).text();
	}

	render(){
		let coverStyle = {
			background: 'url('+this.props.preImg+')', 
			backgroundRepeat: 'no-repeat'
		};
		return (
			<Box className='drip-ui-article-item'>
				<h4><Link to={'/article/'+this.props._id}>{this.props.title}</Link></h4>
				<div className='cover'>
					<img src={this.parseCoding(this.props.preImg)}/>
					<Link to={'/article/'+this.props._id} className='drip-ui-article-item-link'>
						<Button>查看详情</Button>
					</Link>
				</div>
			</Box>
			);
	}

}

ArticlePreviewItem.defaultProps = {
	_id: '1',
	preImg: 'http://girlatlas.b0.upaiyun.com/7538/20160614/06514527lswxr4phpfak.jpg!mid',
	title: '我的第一篇博客'
};

ArticlePreviewItem.propTypes = {
	_id: React.PropTypes.string,
	preImg: React.PropTypes.string,
	title: React.PropTypes.string
};

export default ArticlePreviewItem;