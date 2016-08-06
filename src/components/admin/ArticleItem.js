/**
 * Created by ssehacker on 16/8/6.
 */
import util from '../Util';

class ArticleItem extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		let me = this;
		let config = util.loadConfig();
		let url = '//'+this.props.user.name+'.'+config.baseUrl+'/#article/'+this.props._id;
		return (
			<div className="drip-ui-article-item clearfix">
				<div className="detail">
					<h1><a target="_blank" href={url}>{me.props.title}</a></h1>
					<p className="tips">
						<span><i className="iconfont icon-view"></i>{440}</span>
						<span><i className="iconfont icon-pinglun"></i>{11}</span>
						<span><i className="iconfont icon-zan"></i>{4}</span>
					</p>
				</div>
				<div className="option">
					<p className="option-wrapper">
						<i className="iconfont icon-write"></i>
						<i className="iconfont icon-delete"></i>
					</p>
				</div>
			</div>
		);
	}
}

export default ArticleItem;