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
			});
		}


		let me = this;
		if(!window.disqus_config){
			window.disqus_config = function () {
				this.page.url = 'http://zhouyong.1xue.me:8000/#disqus_thread';  // Replace PAGE_URL with your page's canonical URL variable
				this.page.identifier = me.articleId; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
			};
		}
		(function() { // DON'T EDIT BELOW THIS LINE
			if(typeof DISQUS !== 'undefined'){ //AJAX load
				let config = util.loadConfig();
				DISQUS.reset({
					reload: true,
					config: function(){
						this.page.identifier = me.articleId;
						this.page.url = config.cdn + '/#!newthread';
					}
				});
				console.log('It\'s not first loading...');
				setTimeout(function(){
					console.log('call setTimeout...');
					DISQUSWIDGETS.getCount();
				}, 500);
				let commentCount = window._data[me.articleId] || 0;
				$('.disqus-comment-count').html( commentCount || 0);

			}else{	//first load
				console.log('first loading...');
				util.loadScript('//drip-blog-system.disqus.com/embed.js', {
					'data-timestamp': Date.now()
				}, function(){
					try{
						window._data = window._data || {};

						DISQUSWIDGETS.displayCount = function(obj){
							console.log(JSON.stringify(obj) );
							let comment = obj.counts && obj.counts[0] && obj.counts[0];
							if(comment){
								window._data[comment.id] = comment.comments;
							}
							$('.disqus-comment-count').html( comment && comment.comments || 0);
						};
						console.log('get count...');
						console.log('DISQUSWIDGETS.getCount===', JSON.stringify(DISQUSWIDGETS));
						DISQUSWIDGETS.getCount();
					}catch(e){
						console.log(e);
					}
				});

			}


		})();



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
					<span>
						<i className="iconfont icon-pinglun"></i>
						<span className="disqus-comment-count" data-disqus-identifier={me.articleId} ></span>
					</span>
					{ me.renderTags() }
				</p>
				<section dangerouslySetInnerHTML = {{__html : this.state.article.content}} className='drip-ui-article-content markdown-body'>
				</section>
				<div id="disqus_thread"></div>
			</article>
			);
	}
}

export default Article;