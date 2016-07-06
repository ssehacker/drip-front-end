
class Article extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<article className='drip-ui-article'>
				<h4 className='drip-ui-article-title'>为什么周星驰的喜剧百看不厌？</h4>
				<p className='drip-ui-article-date'>2016-7-3</p>
				<section className='drip-ui-article-content'>
					<p>这里是正文....</p>
					<p>这里是正文....</p>
					<p>这里是正文....</p>
				</section>
			</article>
			);
	}
}

export default Article;