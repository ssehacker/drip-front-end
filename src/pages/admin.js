/**
 * Created by ssehacker on 16/7/9.
 */
import Menu from '../components/admin/Menu';

let { Router, Route, Link, hashHistory, IndexRoute} = ReactRouter;

//admin css
// require('../app/less/iconfont.less');
require('../app/less/common.less');
require('../app/less/main.less');
require('../app/less/admin.less');

import ArticleEditor from '../components/admin/ArticleEditor';

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



ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={AdminPage}>
            <IndexRoute component={ArticleEditor}/>
            <Route path="article/new" component={ArticleEditor} />
        </Route>

    </Router>
) , document.getElementById('app-admin'));