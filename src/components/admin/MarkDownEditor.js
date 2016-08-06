/**
 * Created by ssehacker on 16/7/9.
 */
import util from '../Util';
import classnames from 'classnames';

var md = window.markdownit({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) {}
        }

        return ''; // use external default escaping
    },
    breaks: true
});


class MarkDownEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.defaultValue,
            isFullScreen: false
        };
    }
    
    componentDidMount(){
        let me = this;
        me.makeEditorFocus();
        $('input[name=img]').change(function(){
            /* var file = this.files[0];
             var name = file.name;
             var size = file.size;
             var type = file.type;
             console.log(name);
             console.log(size);
             console.log(type);*/

            me.handleUpload();
        });



    }

    handleUpload(){
        let me =this;
        var formData = new FormData(ReactDOM.findDOMNode(this.refs.form));
        console.log(ReactDOM.findDOMNode(this.refs.form));
        $.ajax({
            url: '/api/upload/image',  //Server script to process data
            type: 'POST',
            xhr: function() {  // Custom XMLHttpRequest
                var myXhr = $.ajaxSettings.xhr();
                return myXhr;
            },
            //Ajax events
            // beforeSend: beforeSendHandler,
            success: (res)=>{
                if(res.code ===0){
                    let val = me.state.value;
                    let imgUrl = res.data;
                    let img = '![图片]('+imgUrl+')';
                    val = val.slice(0, me.cursorPos) + img+val.slice(me.cursorPos, val.length);
                    me.setState({
                        value: val
                    });
                }else{
                    alert(res.msg);
                }

            },
            // error: errorHandler,
            // Form data
            data: formData,
            //Options to tell jQuery not to process data or worry about content-type.
            cache: false,
            contentType: false,
            processData: false
        });
    }

    _renderMarkdown(){
        return md.render(this.state.value);
    }

    handleContentChange(e){
        this.setState({
            value: e.target.value
        });
    }

    getValue(){
        return this.state.value;
    }

    uploadImage(){
        this.keepCursorPositionInEditor();

        $('input[name=img]').trigger('click');
    }

    keepCursorPositionInEditor(){
        let editor = ReactDOM.findDOMNode(this.refs.editor);
        this.cursorPos = util.getCursortPosition(editor);
        return this.cursorPos;
    }

    makeEditorFocus(){
        ReactDOM.findDOMNode(this.refs.editor).focus();
    }

    boldFont(e){
        e.preventDefault();
        let selectedText = window.getSelection().toString();
        if (!selectedText) {
            return;
        }

        let cursorPos = this.keepCursorPositionInEditor();
        let newText = '';
        if( /^\*\*.*\*\*$/.test(selectedText) ){
            newText = selectedText.substring(2, selectedText.length-2);
        }else {
            newText = '**'+selectedText+'**';
        }

        let val = this.state.value;
        val = val.substr(0, cursorPos) +newText+ val.substr(cursorPos+selectedText.length);
        this.setState({
            value: val
        });
        this.makeEditorFocus();
    }

    addLink(e){
        e.preventDefault();
        let cursorPos = this.keepCursorPositionInEditor();
        let linkText = '[超链接](http://example.com)';
        let val = this.state.value;
        val = val.substr(0, cursorPos) +linkText+ val.substr(cursorPos);
        this.setState({
            value: val
        });
        this.makeEditorFocus();
    }

    switchFullScreen(){
        this.setState({
            isFullScreen: !this.state.isFullScreen
        });
    }

    render(){
        let me = this;
        return (
            <div className="clearfix drip-ui-markdown">
                <div className={classnames({'drip-ui-markdown-editor-wrap': true, 'full-screen': me.state.isFullScreen})}>
                    <div className="drip-ui-md-header clearfix">
                        <div className="tips">
                            <span>Markdown</span>
                            <i title="全屏"
                               onClick={me.switchFullScreen.bind(me)}
                               className={classnames({
                                    'iconfont': true,
                                    'icon-quanping': !me.state.isFullScreen,
                                    'icon-tuichuquanping': me.state.isFullScreen})}>
                            </i>
                        </div>
                        <div className="tools">
                            <i className="iconfont icon-cuti" onMouseDown={me.boldFont.bind(me)}></i>
                            <i className="iconfont icon-chaolianjie1" onMouseDown={me.addLink.bind(me)}></i>
                            <i className="iconfont icon-image" onClick={me.uploadImage.bind(me)}></i>
                            <form className="hidden" ref="form" encType="multipart/form-data">
                                <input type="file" name="img"/>
                            </form>
                        </div>
                    </div>
                    <textarea ref="editor" className="drip-ui-markdown-editor" value={me.state.value} onChange={ me.handleContentChange.bind(me)}></textarea>
                </div>
                <div className="drip-ui-markdown-preview-wrap">
                    <div className="drip-ui-md-header clearfix">
                        <div className="tips">
                            <span>Preview</span>
                        </div>
                    </div>
                    <div className="markdown-body drip-ui-markdown-preview" dangerouslySetInnerHTML={{__html: me._renderMarkdown() }}></div>
                </div>
            </div>
        );
    }
}

React.defaultProps = {
    defaultValue: ''
};

React.propTypes = {
    defaultValue: React.PropTypes.string
};

export default MarkDownEditor;