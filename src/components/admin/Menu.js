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

    render(){
        let me = this;
        let expandClass = classnames({
            'iconfont': true ,
            'icon-round-right': !me.state.isExpand,
            'icon-jiankuohaoyuanzuo': me.state.isExpand
        });
        return (
          <div className="drip-ui-menu" style={this.props.style}>
              <div className="drip-ui-menu-expand" onClick={ me.handleExpand.bind(me) }><i className={expandClass}></i></div>
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