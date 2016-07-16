/**
 * Created by ssehacker on 16/7/12.
 */

let { Router, Route, Link, hashHistory, IndexRoute} = ReactRouter;

require('../app/less/common.less');
require('../app/less/main.less');
require('../app/less/home.less');

import Dialog from '../components/Dialog';
import Header from '../components/Header';

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div>index page</div>
        );
    }
}

class ThemePage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>theme page</div>
        );
    }
}

class TemplatePage extends React.Component{
    constructor(props){
        super(props);
    }

    initHeaderOption(){
        let items = [
            {
                title:'首页',
                url: '/',
                iconClass: 'icon-article1'
            },
            {
                title: '主题',
                url: '/theme',
                iconClass: 'icon-about1'
            },
            {
                title: '反馈',
                url: '/feedback',
                iconClass: 'icon-contact'
            }
        ];

        let links=[
            {
                title: '登录',
                onClick: function(){
                    Dialog(<div>这里是内容</div>, {
                        confirm: function(){console.log(this)},
                        abort: ()=>{console.log('取消')},
                        confirmTitle: '登录',
                        abortTitle: '取消',
                        title: '用户注册'
                    });
                }

            },
            {
                title: '注册',
            }
        ];
        return {items, links};
    }

    render(){
        let me = this;
        let headerOps = me.initHeaderOption();

        return (
            <div>
                <Header {...headerOps}/>
                {this.props.children}
                <div>footer</div>
            </div>
        );
    }
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={TemplatePage}>
            <IndexRoute component={HomePage}/>
            <Route path="theme" component={ThemePage}/>
        </Route>

    </Router>
) , document.getElementById('app'));