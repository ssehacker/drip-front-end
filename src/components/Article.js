import util from './Util';

class Article extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			article: {}
		};

		this.initDiscus();
	}

	initDiscus(){

		let articleId = location.hash.match(/^#\/article\/(.+)\?/);
		this.articleId = articleId && articleId[1];
		console.log(this.articleId);
	}

	componentDidMount(){
		let me = this;
		let rexRes = location.hash.match(/#\/article\/(\w+)\??/);
		if(rexRes && rexRes.length ===2){
			let articleId = rexRes[1];
			$.ajax({
				url: '/api/article/'+articleId,
				method: 'GET',
				success :function (res) {
					if(res.code ===0){
						this.setState({
							article: res.article
						});

						me.loadChangYan();

					}else{
						alert(res.msg);
					}
				}.bind(this)
			});
		}

	}

	loadChangYan(){
		let comment = ReactDOM.findDOMNode(this.refs.comment);
		$(comment).html('<div id="SOHUCS" sid='+this.state.article._id+'></div>');

		util.loadScript('//changyan.sohu.com/upload/changyan.js', {charset: 'utf-8'}, ()=> {
			window.changyan.api.config({
				appid: 'cyszO9nGq',
				conf: 'prod_1a7335ccb50ddcf155051e3ea9fc1361'
			});
		});
		util.loadScript('//assets.changyan.sohu.com/upload/plugins/plugins.count.js', {charset: 'utf-8'});
	}

	componentWillUnmount(){
		window.changyan = undefined;
		window.cyan = undefined;
		$('iframe').remove();
	}

	renderTags(){
		let tags = this.state.article && this.state.article.tags;
		return tags && tags.map((tag)=>{
			return (<span className="tag" key={'tag'+tag}><i className="iconfont icon-tag"></i><a>{tag}</a></span>);
		});
	}

	render(){
		let me = this;
		window.aa = this.state.article;
		return (
			<article className='drip-ui-article'>
				<h1 title={this.state.article.title} className='drip-ui-article-title'>{this.state.article.title}</h1>
				<p className='drip-ui-article-date'>
					<span><i className="iconfont icon-calendar"/>{new Date(parseInt(this.state.article.createDate)).toLocaleDateString()}</span>
					<span><i className="iconfont icon-view"/>{this.state.article.viewCount}</span>
					<span>
						<i className="iconfont icon-pinglun"/>
						<a href="#SOHUCS" id="changyan_count_unit"/>
					</span>
					{ me.renderTags() }
				</p>
				<section dangerouslySetInnerHTML = {{__html : this.state.article.content}} className='drip-ui-article-content markdown-body'>
				</section>
				<div className="drip-changyan" ref="comment"></div>
			</article>
			);
	}
}

export default Article;