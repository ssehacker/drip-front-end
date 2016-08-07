/**
 * Created by ssehacker on 16/7/23.
 */
import ArticleItem from './ArticleItem';
import _ from 'underscore';
import classnames from 'classnames';
import CommonNode from '../basic/CommonNode';

class Article extends CommonNode{
    constructor(props){
        super(props);
        this.pageSize = 5;
        this.currentPage = 1;
        this.state = {
            articles: []
        };

    }
    
    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        $.ajax({
            url: '/api/article?pageSize='+this.pageSize+'&currentPage='+this.currentPage,
            method: 'GET',
            success: (res)=> {
                if(res.code ===0){
                    this.loading.stop();
                    
                    this.pageCount = res.pageCount;
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

    handlePageClick(inc){
        if(this.currentPage+inc<1 || this.currentPage+inc>this.pageCount){
            return;
        }
        this.currentPage += inc;
        this.fetchData();
    }

    renderArticles(){
        return this.state.articles.map((article, i)=> {
            article.deleteArticle = this.deleteArticle.bind(this);
            
            return <ArticleItem key={article._id} {...article}/>;
        });
    }
    render(){
        let me = this;

        // console.log(me.currentPage+','+me.pageCount);
        return (
            <div className="drip-ui-article-list">
                <div className="title">我的文章</div>
                <div className="list">
                    {me.renderArticles()}
                </div>
                <div className="page">
                    <a className={classnames({disable: me.currentPage===1})} onClick={me.handlePageClick.bind(me, -1)}>上一页</a>
                    <a className={classnames({disable: me.currentPage===me.pageCount})} onClick={me.handlePageClick.bind(me, 1)}>下一页</a>
                </div>
            </div>
        );
    }
}

export default Article;
