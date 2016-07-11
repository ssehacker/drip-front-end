let { Router, Route, Link, hashHistory, IndexRoute} = ReactRouter;

class Menu extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        
        return (
          <div className="drip-ui-menu">
              <div className="drip-ui-menu-expand"><i className="iconfont icon-round-right"></i></div>
              <div className="drip-ui-menu-items">
                  <Link to="/article/new">
                      <i className="iconfont icon-tuxing"></i>
                  </Link>
                  <Link to="/article">
                      <i className="iconfont icon-article"></i>
                  </Link>
                  <Link to="/profile">
                      <i className="iconfont icon-profile"></i>
                  </Link>
              </div>
              <div className="drip-ui-menu-index">
                  <i className="iconfont icon-index"></i>
              </div>
          </div>
        );
    }
}

export default Menu;