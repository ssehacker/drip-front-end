class Article extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			article: {}
		};
	}

	componentDidMount(){
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
					}else{
						alert(res.msg);
					}
				}.bind(this)
			})
		}
	}

	renderTags(){
		let tags = this.state.article && this.state.article.tags;
		return tags && tags.map((tag)=>{
			return (<span className="tag" key={'tag'+tag}><i className="iconfont icon-tag"></i><a>{tag}</a></span>);
		});
	}

	render(){
		let me = this;
		return (
			<article className='drip-ui-article'>
				<h1 title={this.state.article.title} className='drip-ui-article-title'>{this.state.article.title}</h1>
				<p className='drip-ui-article-date'>
					<span><i className="iconfont icon-calendar"></i>{new Date(parseInt(this.state.article.createDate)).toLocaleDateString()}</span>
					<span><i className="iconfont icon-view"></i>{this.state.article.viewCount}</span>
					{ me.renderTags() }
				</p>
				<section dangerouslySetInnerHTML = {{__html : this.state.article.content}} className='drip-ui-article-content markdown-body'>

				</section>
			</article>
			);
	}
}

export default Article;