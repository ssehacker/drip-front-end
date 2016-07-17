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
                    Dialog(<div className="login">
                            <div className="dialog-line">
                                <span>用户名:</span>
                                <input name="username" type="text"/></div>
                            <div className="dialog-line"><span>密&emsp;码:</span><input name="password" type="password"/></div>
                        </div>, {
                        confirm: function(){
                            let dialog = ReactDOM.findDOMNode(this);

                            let username = dialog.querySelector('input[name=username]').value;
                            let password = dialog.querySelector('input[name=password]').value;

                            $.ajax({
                                url: '/api/login',
                                method: 'POST',
                                data: {username, password},
                                success: function(data){
                                    if(data.code===0){
                                        //login success.
                                        location.href = '/admin';
                                    }else{
                                        alert(data.msg);
                                    }
                                }
                            })
                            

                        },
                        abort: ()=>{console.log('取消')},
                        confirmTitle: '登录',
                        abortTitle: '取消',
                        title: '用户登录'
                    });
                }

            },
            {
                title: '注册',
                onClick: function(){
                    Dialog(<div className="login">
                        <div className="dialog-line">
                            <span>用&ensp;户&ensp;名:</span>
                            <input name="username" type="text"/></div>
                        <div className="dialog-line"><span>密&emsp;&emsp;码:</span><input name="password" type="password"/></div>
                        <div className="dialog-line"><span>确认密码:</span><input name="password2" type="password"/></div>
                    </div>, {
                        confirm: function(){
                            let dialog = ReactDOM.findDOMNode(this);

                            let username = dialog.querySelector('input[name=username]').value;
                            let password = dialog.querySelector('input[name=password]').value;
                            let password2 = dialog.querySelector('input[name=password2]').value;

                            if(password !==password2){
                                alert("两次密码输入不同,请重新输入~");
                                return;
                            }

                            $.ajax({
                                url: '/api/user',
                                method: 'POST',
                                data: {username, password},
                                success: function(data){
                                    if(data.code === 0){
                                        location.href = '/admin';
                                    }else{
                                        alert(data.msg);
                                    }
                                }
                            });


                        },
                        abort: ()=>{console.log('取消')},
                        confirmTitle: '注册',
                        abortTitle: '取消',
                        title: '新用户注册'
                    });
                }
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