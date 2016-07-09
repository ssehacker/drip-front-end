/**
 * Created by ssehacker on 16/7/9.
 */
import Menu from '../components/admin/Menu';
import MarkDownEditor from '../components/admin/MarkDownEditor';

let { Router, Route, Link, hashHistory, IndexRoute} = ReactRouter;

class AdminPage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Menu />
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

class ArticleEditor extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div>标题: <input onChange={()=>{}} name="title" value="文章标题"/></div>
                <MarkDownEditor />
            </div>
        );
    }
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={AdminPage}>
            <IndexRoute component={ArticleEditor}/>
            <Route path="article/new" component={ArticleEditor} />
        </Route>

    </Router>
) , document.getElementById('app-admin'));