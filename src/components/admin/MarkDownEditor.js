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
    }
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
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        });
    }

    render(){
        let me = this;
        return (
            <div>
                <textarea onChange={ me.handleContentChange.bind(me)}></textarea>
                <div className="markdown-body" dangerouslySetInnerHTML={{__html: me._renderMarkdown() }}></div>
            </div>
        );
    }
}

export default MarkDownEditor;