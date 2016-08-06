/**
 * Created by ssehacker on 16/7/23.
 */
import ArticleItem from './ArticleItem';
import _ from 'underscore';

class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles: []
        };

    }
    
    componentDidMount(){
        $.ajax({
            url: '/api/article',
            method: 'GET',
            success: (res)=> {
                if(res.code ===0){
                    console.log(res);
                    this.setState({
                        articles: res.articles
                    });
                }else{
                    alert(res.msg);
                }
            }
        });
        
    }

    deleteArticle(id){
        let articles = this.state.articles;
        articles = _.filter(articles, (article)=> {
            return article._id !== id; 
        });
        this.setState({
            articles
        });
    }

    handlePageClick(add){
        
    }

    renderArticles(){
        return this.state.articles.map((article, i)=> {
            article.deleteArticle = this.deleteArticle.bind(this);
            
            return <ArticleItem key={article._id} {...article}/>;
        });
    }
    render(){
        let me = this;

        return (
            <div className="drip-ui-article-list">
                <div className="title">我的文章</div>
                <div className="list">
                    {me.renderArticles()}
                </div>
                <div className="page">
                    <a onClick={me.handlePageClick.bind(me, -1)}>上一页</a>
                    <a>下一页</a>
                </div>
            </div>
        );
    }
}

export default Article;
