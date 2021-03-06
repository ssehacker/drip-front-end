import TimeLine from './Timeline';
import ArticlePreviewItem from './ArticlePreviewItem';
import CalendarDecorator from './CalendarDecorator';

class ArticlePreview extends React.Component{
	constructor(props){
		super(props);
	}

	renderContent(){
		return this.props.articles.map((article,index)=> {
			let datetime = new Date(parseInt(article.createDate));
			return (
				<div key={'article.id'+index} className='drip-ui-article-item-wrapper'>
					<CalendarDecorator datetime={datetime}/>
					<ArticlePreviewItem {...article} />
				</div>
			);
		});
	}

	renderLoadMore(){
		if(this.props.hasMoreData){
			return (
				<div className="drip-ui-load-more">
					正在加载...
				</div>
			);
		}
	}
	
	render(){
		let me = this;
		return (
			<div>
				<div className='drip-ui-article-preview'>
					<TimeLine/>
					{ me.renderContent() }
				</div>
				{me.renderLoadMore() }
			</div>
			);
	}
}

ArticlePreview.defaultProps = {
	articles :[]
};

ArticlePreview.propTypes = {
	articles: React.PropTypes.array
};

export default ArticlePreview;