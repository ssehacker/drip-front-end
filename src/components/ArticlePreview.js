import TimeLine from './TimeLine';
import ArticlePreviewItem from './ArticlePreviewItem';
import CalendarDecorator from './CalendarDecorator';
import util from './Util';

class ArticlePreview extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		//<span className='drip-ui-timeline-date'>23</span>
		return (
			<div className='drip-ui-article-preview'>
				<TimeLine/>
				{
					this.props.articles.map((article,index)=> {
						let datetime = util.formatDate(article.createDate);
						console.log( datetime );
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
}

export default ArticlePreview;