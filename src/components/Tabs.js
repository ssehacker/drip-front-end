/**
 * Created by ssehacker on 16/7/23.
 */
import classnames from 'classnames';

class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeKey: this.props.defaultKey
        };

    }

    switchPanel(key){
        this.setState({
            activeKey: key
        });
    }

    renderHeader(){
        let headers = [], me = this;
        me.props.children.forEach((child)=>{
            headers.push(
                <a className={classnames({'title': true, 'active': child.key === this.state.activeKey})}
                   key={child.key}
                   onClick={me.switchPanel.bind(me, child.key)}>
                    {child.props.title}
                </a>);
        });
        return headers;
    }

    getActivePanel(){
        let child;
        for(let i=0; i<this.props.children.length; i++){
            child = this.props.children[i];
            if(child.key === this.state.activeKey){
                return child;
            }
        }
    }

    render(){
        let me = this;
        return (
            <div className="drip-ui-tabs">
                <div className="drip-ui-tabs-title">
                    {me.renderHeader()}
                </div>
                <div className="drip-ui-tabs-panel">
                    {me.getActivePanel()}
                </div>
            </div>
        );
    }

}

class TabPanel extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="drip-ui-tab-panel">{this.props.children}</div>
        );
    }
}

Tabs.TabPanel = TabPanel;
export default Tabs;