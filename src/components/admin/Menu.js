let { Router, Route, Link, hashHistory, IndexRoute} = ReactRouter;

class Menu extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div><Link to="/article/new">写文章</Link></div>
        );
    }
}

export default Menu;