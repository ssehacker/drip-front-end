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
            value: ''
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
                <textarea className="drip-ui-markdown-editor" onChange={ me.handleContentChange.bind(me)}></textarea>
                <div className="markdown-body drip-ui-markdown-preview" dangerouslySetInnerHTML={{__html: me._renderMarkdown() }}></div>
            </div>
        );
    }
}

export default MarkDownEditor;