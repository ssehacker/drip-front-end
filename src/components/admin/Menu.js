let { Router, Route, Link, hashHistory, IndexRoute} = ReactRouter;
import classnames from 'classnames';

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isExpand: false
        };
    }

    handleExpand(){

        //this.state.isExpand 不会立即生效
        let isExpand = this.state.isExpand;

        this.setState({
            isExpand: !isExpand
        });

        this.props.handleExpand( !isExpand );
    }

    logout(){
        $.ajax({
            url: '/api/logout',
            method: 'POST',
            data: {},
            success: function (data) {
                if(data.code ===0){
                    location.href='/';
                }else{
                    alert(data.msg);
                }
            }
        });
    }

    render(){
        let me = this;
        let expandClass = classnames({
            'iconfont': true ,
            'icon-round-right': !me.state.isExpand,
            'icon-jiankuohaoyuanzuo': me.state.isExpand
        });
        return (
          <div className={classnames({"drip-ui-menu":true, "drip-ui-show": me.state.isExpand})} style={this.props.style}>
              <div className="drip-ui-menu-expand" onClick={ me.handleExpand.bind(me) }><i className={expandClass}></i></div>
              <div className="drip-ui-menu-items">
                  <Link to="/article/new" title="写文章">
                      <i className="iconfont icon-tuxing"></i>
                      <span>写文章</span>
                  </Link>
                  <Link to="/article" title="文章列表">
                      <i className="iconfont icon-article"></i>
                      <span>文章列表</span>
                  </Link>
                  <Link to="/profile" title="设置">
                      <i className="iconfont icon-profile"></i>
                      <span>设置</span>
                  </Link>
              </div>
              <div className="drip-ui-menu-index">
                  <a onClick={()=>{location.href='/'}}>
                      <i className="iconfont icon-index"></i>
                      <span>官网逛逛</span>
                  </a>
                  <a onClick={me.logout.bind(me)}>
                      <i className="iconfont icon-quit"></i>
                      <span>退出</span>
                  </a>
              </div>
          </div>
        );
    }
}

export default Menu;