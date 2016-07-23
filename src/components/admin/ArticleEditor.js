/**
 * Created by ssehacker on 16/7/23.
 */

import MarkDownEditor from './MarkDownEditor';

class ArticleEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        };
    }

    handleTitleChange(e){
        this.setState({
            title: e.target.value
        });
    }

    handleSubmit(){
        let content = this.refs.editor.getValue();
        let title = this.state.title;


        if(title && content){
            $.ajax({
                url: '/api/article',
                method: 'POST',
                data: {
                    content,
                    title
                },
                success: function(data){
                    if(data.code ===0){
                        //todo: use dialog
                        alert('发表成功');
                    }else{
                        alert('发表失败:'+data.msg);
                    }
                }
            });
        }else{
            alert('标题或者内容不能为空啊亲~');
        }

    }


    render(){
        let me = this;
        return (
            <div>
                <div className="drip-ui-article-title">
                    <div className="drip-ui-article-title-label clearfix">
                        <h3>文章标题</h3>
                        <button className="drip-ui-button" onClick={me.handleSubmit.bind(me)}>提交</button>
                    </div>
                    <input onChange={me.handleTitleChange.bind(me)} name="title"/>
                </div>
                <MarkDownEditor ref="editor"/>
            </div>
        );
    }
}

export default ArticleEditor;
