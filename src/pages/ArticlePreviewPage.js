import ArticlePreview from '../components/ArticlePreview';
import Page from '../components/Page';


//common js or css
require('../app/less/iconfont.less');
require('../app/less/common.less');
require('../app/less/main.less');

class ArticlePreviewPage extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let articles = [
		{
			id: '1',
			preImg: 'http://girlatlas.b0.upaiyun.com/7864/20160611/1009od9d6dhp68j2h0zq.jpg!mid',
			title: '星爷不愧是喜剧之王',
			createDate: '2016-6-20 18:23:44'
		},
		{
			id: '2',
			preImg: 'http://girlatlas.b0.upaiyun.com/7538/20160614/06514527lswxr4phpfak.jpg!mid',
			title: '星爷不愧是喜剧之王',
			createDate: '2016-6-28 18:23:44'
		}
		]
		return (
			<Page>
				<ArticlePreview articles={articles}/>
			</Page>
			);
	}
}

ReactDOM.render(<ArticlePreviewPage /> , document.getElementById('app'));

