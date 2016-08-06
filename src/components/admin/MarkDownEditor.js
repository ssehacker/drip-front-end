/**
 * Created by ssehacker on 16/7/9.
 */

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
            value: this.props.defaultValue
        };
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

    render(){
        let me = this;
        return (
            <div className="clearfix drip-ui-markdown">
                <div className="drip-ui-markdown-editor-wrap">
                    <div className="drip-ui-md-header clearfix">
                        <div className="tips">
                            <span>Markdown</span>
                            <i title="全屏" className="iconfont icon-quanping"></i>
                        </div>
                        <div className="tools">
                            <span>图片</span>
                        </div>
                    </div>
                    <textarea className="drip-ui-markdown-editor" value={me.state.value} onChange={ me.handleContentChange.bind(me)}></textarea>
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