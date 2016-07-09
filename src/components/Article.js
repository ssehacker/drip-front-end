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
					console.log(res);
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

	render(){
		return (
			<article className='drip-ui-article'>
				<h4 className='drip-ui-article-title'>{this.state.article.title}</h4>
				<p className='drip-ui-article-date'>{new Date(parseInt(this.state.article.createDate)).toLocaleDateString()}</p>
				<section dangerouslySetInnerHTML = {{__html : this.state.article.content}} className='drip-ui-article-content markdown-body'>

				</section>
			</article>
			);
	}
}

export default Article;