/**
 * Created by ssehacker on 16/7/24.
 */
import MarkDownEditor from './MarkDownEditor';

class ProfileResume extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            defaultValue: ''
        };
    }

    componentDidMount(){
        //Ajax get data...
        this.setState({
            defaultValue: 'defaultValue...'
        });
    }

    handleSubmit(){
        console.log(this.refs.editor.getValue());

    }

    render(){
        let me = this;
        return (
            <div className="drip-ui-profile-resume">
                <div className="tips">
                    <span>Tips:以下信息将在你博客中的&quot;关于我&quot;页面中展示.</span>
                    <button className="btn-1" onClick={me.handleSubmit.bind(me)}>保存</button>
                </div>
                <MarkDownEditor ref="editor" defaultValue=""/>

            </div>
        );
    }
}

export default ProfileResume;