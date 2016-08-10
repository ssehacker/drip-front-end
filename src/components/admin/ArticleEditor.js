/**
 * Created by ssehacker on 16/7/23.
 */

import MarkDownEditor from './MarkDownEditor';
import dialog from '../Dialog';
import Tag from '../TokenField';

class ArticleEditor extends React.Component {
    constructor(props){
        super(props);
        this.updatedArticle = window.__article;
        
        this.state = {
            title: this.updatedArticle && this.updatedArticle.title || ''
        };
    }

    componentDidMount(){
        this.handleSubmitClick();
    }

    handleTitleChange(e){
        this.setState({
            title: e.target.value
        });
    }

    handleSubmitClick(){
        dialog(<Tag />, {
            title: '标签',
            confirmTitle: '立即发表',
            abortTitle: '稍等,我再润色一下~'
        });
    }

    handleSubmit(){
        let content = this.refs.editor.getValue();
        let title = this.state.title;


        if(title && content){
            let art = this.updatedArticle;
            if(art){
                $.ajax({
                    url: '/api/article/'+ art._id,
                    method: 'PUT',
                    data: {
                        title,
                        content
                    },
                    success: (res)=>{
                        if(res.code ===0){
                            alert('更新成功');
                            window.__article = null;
                            delete window.__article;
                        }else{
                            alert(res.msg);
                        }
                    }
                });
            }else{
                $.ajax({
                    url: '/api/article',
                    method: 'POST',
                    data: {
                        content,
                        title
                    },
                    success: function(res){
                        if(res.code ===0){
                            //todo: use dialog
                            alert('发表成功');
                        }else{
                            alert('发表失败:'+res.msg);
                        }
                    }
                });
            }
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
                        <button className="drip-ui-button" onClick={me.handleSubmitClick.bind(me)}>{me.updatedArticle ? '更新': '发表'}</button>
                    </div>
                    <input onChange={me.handleTitleChange.bind(me)} defaultValue={this.updatedArticle && this.updatedArticle.title || ''} name="title"/>
                </div>
                <MarkDownEditor ref="editor" defaultValue={me.updatedArticle && me.updatedArticle.markdown || ''}/>
            </div>
        );
    }
}

export default ArticleEditor;
