import Box from './Box';
import Button from './Button';

class ArticlePreviewItem extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		let coverStyle = {
			background: 'url('+this.props.preImg+')', 
			backgroundRepeat: 'no-repeat',
		};
		return (
			<Box className='drip-ui-article-item'>
				<h4>{this.props.title}</h4>
				<div className='cover'>
					<img src={this.props.preImg}/>
					<a href='#' className='drip-ui-article-item-link'>
						<Button>查看详情</Button>
					</a>
				</div>

				
			</Box>
			);
	}

}

ArticlePreviewItem.defaultProps = {
	id: '1',
	preImg: 'http://girlatlas.b0.upaiyun.com/7538/20160614/06514527lswxr4phpfak.jpg!mid',
	title: '我的第一篇博客'
}

ArticlePreviewItem.propTypes = {
	id: React.PropTypes.string,
	preImg: React.PropTypes.string,
	title: React.PropTypes.string
}

export default ArticlePreviewItem;