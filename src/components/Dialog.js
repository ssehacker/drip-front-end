/**
 * Created by ssehacker on 16/7/13.
 */

import classnames from 'classnames';

class Dialog extends React.Component{
    constructor(props){
        super(props);
    }

    abort(){
        console.log('cancel');
        this.props.abort && this.props.abort.call(this);
    }

    confirm(){
        console.log('ok');
        this.props.confirm && this.props.confirm.call(this);

    }

    componentDidMount() {

    }

    render(){
        let t = this;
        return (
            <div ref="dialog" className={classnames('drip-ui-dialog', t.props.className )}>
                <h3>{t.props.title}</h3>
                <div className="drip-ui-dialog-content">
                    {t.props.children}
                </div>
                <div className="drip-ui-dialog-btn">
                    <a onClick={t.confirm.bind(t)} href="#">{t.props.confirmTitle}</a>
                    <a onClick={t.abort.bind(t)} href="#">{t.props.abortTitle}</a>
                </div>
            </div>
        );
    }
}

Dialog.defaultProps = {
    title: 'Dialog title',
    confirm: function(){},
    abort: function(){},
    confirmTitle: '确定',
    abortTitle: '退出',
    className: ''
};

Dialog.propTypes = {
    title: React.PropTypes.string,
    confirm: React.PropTypes.func,
    abort: React.PropTypes.func,
    confirmTitle: React.PropTypes.string,
    abortTitle: React.PropTypes.string,
    className: React.PropTypes.string
};


function dialog(element, props){

    let wrapper = document.createElement('div');
    wrapper.className = 'drip-ui-dialog-wrap';
    let screenWidth = $(window).width();
    let screenHeight = $(window).height();
    
    wrapper.style.height = screenHeight+'px';
    wrapper.style.width = screenWidth+'px';
    
    wrapper = document.body.appendChild( wrapper );



    let cleanup = function (){
        ReactDOM.unmountComponentAtNode(wrapper);
        setTimeout(()=>{
            wrapper.remove();
        }, 0);
    };
    let abort = props.abort;
    props.abort = function(){
        abort && abort.call(this);
        cleanup();
    };

    let confirm = props.confirm;
    props.confirm = function(){
        confirm && confirm.call(this);
        cleanup();
    };

    let dialog = <Dialog {...props}>{element}</Dialog>;

    ReactDOM.render(dialog, wrapper);
}

export default dialog;