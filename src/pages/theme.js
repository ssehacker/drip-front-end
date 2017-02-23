import ArticlePreview from '../components/ArticlePreview';
import Page from '../components/Page';
import util from '../components/Util';
import Article from '../components/Article';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage'
import CommonNode from '../components/basic/CommonNode';

require('../app/less/common.less');
require('../app/less/main.less');

let { Router, Route, Link, hashHistory, IndexRoute} = ReactRouter;


class ArticlePreviewPage extends CommonNode {
	constructor(props){
		super(props);
		this.state= {
			articles: [],
			hasMoreData: true
		};
		this.currentPage = 1;
		this.pageSize = 5;
	}

	componentDidMount(){
		let me = this;
		me.fetchData(me.currentPage);

		let lastScrollTop = 0;
		me.handleFetchData = util.throttle(function (e){
			var st = window.pageYOffset || document.documentElement.scrollTop;

			//鼠标滚轮向下滑动 且 到达底部
			if (st > lastScrollTop
				&& me.state.hasMoreData
				&& $(window).scrollTop() + $(window).height() > $('.drip-ui-footer').offset().top) {

				me.fetchData( ++me.currentPage );
			}
			lastScrollTop = st;

		}, 100);

		window.addEventListener('scroll',me.handleFetchData , false);
	}

	componentWillUnmount(){
		ReactDOM.findDOMNode(this).removeEventListener('scroll', this.handleFetchData, false);
	}

	fetchData(currentPage){
		let me = this;
		$.ajax({
			url: '/api/article',
			method: 'GET',
			data: {
        currentPage: currentPage,
        pageSize: me.pageSize,
        username: xusername,
      },
			success: function(res){
				if(res.articles && res.articles.length){
					me.loading.stop();
					me.setState({
						articles: me.state.articles.concat(res.articles),
						hasMoreData: res.currentPage < res.pageCount
					});
				}
			}
		});
	}

	render(){

		return (
			<ArticlePreview articles={this.state.articles} hasMoreData={this.state.hasMoreData}/>
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

