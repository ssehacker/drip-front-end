/**
 * Created by ssehacker on 16/7/24.
 */
import MarkDownEditor from './MarkDownEditor';

class ProfileContact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            defaultValue: this.props.value || ''
        };
    }

    componentDidMount(){
        //Ajax get data...
        this.setState({
            defaultValue: 'defaultValue...'
        });
    }

    handleSubmit(){
        let value = this.refs.editor.getValue();
        console.log(value);
        $.ajax({
            url: '/api/user',
            method: 'PATCH',
            data: {
                fieldName: 'contactMD',
                fieldValue: value
            },
            success: (res)=> {
                if(res.code === 0){
                    alert('保存成功!');
                }else{
                    alert(res.msg);
                }
            }
        })
    }

    render(){
        let me = this;
        return (
            <div className="drip-ui-profile-contact">
                <div className="tips-info">
                    <span>Tips:以下信息将在你博客中的&quot;联系我&quot;页面中展示.</span>
                    <button className="btn-1" onClick={me.handleSubmit.bind(me)}>保存</button>
                </div>
                <MarkDownEditor ref="editor" defaultValue={me.state.defaultValue}/>

            </div>
        );
    }
}

export default ProfileContact;