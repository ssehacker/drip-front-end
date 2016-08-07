window.__config = {
	env: 'dev'
};


import ArticlePreview from '../components/ArticlePreview';
import Page from '../components/Page';
import Article from '../components/Article';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage'

//common js or css
// require('../app/less/iconfont.less');
require('../app/less/common.less');
require('../app/less/main.less');

let { Router, Route, Link, hashHistory, IndexRoute} = ReactRouter;


class ArticlePreviewPage extends React.Component {
	constructor(props){
		super(props);
		this.state= {
			articles: []
		};
	}

	componentDidMount(){

		$.ajax({
			url: '/api/article',
			method: 'GET',
			data: {currentPage: 1, pageSize: 10},
			success: function(res){
				this.setState({
					articles: res.articles
				});
			}.bind(this)
		});
	}

	render(){

		return (
			<ArticlePreview articles={this.state.articles}/>
			);
	}
}

class ArticlePage extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (<Article />);
	}
}

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Page}>
			<IndexRoute component={ArticlePreviewPage}/>
			<Route path="about" component={AboutPage}/>
			<Route path="contact" component={ContactPage}/>
			<Route path="article" component={ArticlePreviewPage}/>
			<Route path="article/:id" component={ArticlePage}/>
		</Route>
		
	</Router>
) , document.getElementById('app'));

