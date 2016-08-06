/**
 * Created by ssehacker on 16/8/6.
 */
import util from '../Util';
import confirm from '../Confirm';

class ArticleItem extends React.Component{
	constructor(props){
		super(props);
	}

	handleDelete(){
		confirm(<p>删除以后数据不能恢复,确定要删除吗?</p>, {
			confirm: ()=>{
				$.ajax({
					url: '/api/article/'+this.props._id,
					method: 'DELETE',
					success: (res)=>{
						if(res.code ===0){
							this.props.deleteArticle(this.props._id);
						}else{
							alert(res.msg);
						}
					}
				});
			}
		});


	}

	handleUpdate(){
		window.__article = $.extend({}, this.props);
		util.toPage('/article/new');
	}

	render(){
		let me = this;
		let config = util.loadConfig();
		let url = '//'+this.props.user.name+'.'+config.baseUrl+'/#article/'+this.props._id;

		let date = new Date(me.props.createDate);
		return (
			<div className="drip-ui-article-item clearfix">
				<div className="detail">
					<h1><a target="_blank" href={url}>{me.props.title}</a></h1>
					<p className="tips">
						<span><i className="iconfont icon-calendar"></i>{date.toLocaleDateString()}</span>
						<span><i className="iconfont icon-view"></i>{440}</span>
						<span><i className="iconfont icon-pinglun"></i>{11}</span>
						<span><i className="iconfont icon-zan"></i>{4}</span>
					</p>
				</div>
				<div className="option">
					<p className="option-wrapper">
						<i className="iconfont icon-write" onClick={me.handleUpdate.bind(me)}></i>
						<i className="iconfont icon-delete" onClick={me.handleDelete.bind(me)}></i>
					</p>
				</div>
			</div>
		);
	}
}

export default ArticleItem;