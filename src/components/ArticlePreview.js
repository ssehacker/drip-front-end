import TimeLine from './TimeLine';
import ArticlePreviewItem from './ArticlePreviewItem';
import CalendarDecorator from './CalendarDecorator';

class ArticlePreview extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className='drip-ui-article-preview'>
				<TimeLine/>
				{
					this.props.articles.map((article,index)=> {
						let datetime = new Date(parseInt(article.createDate));
						return (
							<div key={'article.id'+index} className='drip-ui-article-item-wrapper'>
								
								<CalendarDecorator datetime={datetime}/>
								<ArticlePreviewItem  {...article} />
							</div>
							);
					})
				}
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