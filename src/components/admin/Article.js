/**
 * Created by ssehacker on 16/7/23.
 */
import ArticleItem from './ArticleItem';

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

    renderArticles(){
        return this.state.articles.map((article, i)=> {
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
            </div>
        );
    }
}

export default Article;
