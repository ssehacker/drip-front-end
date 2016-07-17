/**
 * Created by ssehacker on 16/7/9.
 */
import Menu from '../components/admin/Menu';
import Button from '../components/Button';

import MarkDownEditor from '../components/admin/MarkDownEditor';

let { Router, Route, Link, hashHistory, IndexRoute} = ReactRouter;

//admin css
// require('../app/less/iconfont.less');
require('../app/less/common.less');
require('../app/less/main.less');
require('../app/less/admin.less');


class AdminPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isExpand: false
        };
    }

    handleExpand(isExpand){
        this.setState({
            isExpand: isExpand
        });
    }

    render(){
        let me = this;
        let minWidth = '46px';
        let maxWidth = '150px';

        let containerStyle = {
            paddingLeft: this.state.isExpand? maxWidth: minWidth
        };
        let menuStyle = {
            width:   this.state.isExpand? maxWidth: minWidth
        };
        return (
            <div className="drip-ui-admin clearfix">
                <Menu style={menuStyle} handleExpand={me.handleExpand.bind(me)}/>
                <div className="drip-ui-container" style={containerStyle}>{this.props.children}</div>
            </div>
        );
    }
}

class ArticleEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        };
    }

    handleTitleChange(e){
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        });
    }

    handleSubmit(){
        let content = this.refs.editor.getValue();
        let title = this.state.title;


        console.log(title);
        console.log(content);
        $.ajax({
            url: '/api/article',
            method: 'POST',
            data: {
                content,
                title
            },
            success: function(data){
                console.log(data);
            }
        });
    }


    render(){
        let me = this;
        return (
            <div>
                <div className="drip-ui-article-title">
                    <div className="drip-ui-article-title-label clearfix">
                        <h3>文章标题</h3>
                        <button className="drip-ui-button" onClick={me.handleSubmit.bind(me)}>提交</button>
                    </div>
                    <input onChange={me.handleTitleChange.bind(me)} name="title"/>
                </div>
                <MarkDownEditor ref="editor"/>
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