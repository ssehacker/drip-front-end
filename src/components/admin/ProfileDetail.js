/**
 * Created by ssehacker on 16/7/24.
 */
import classnames from 'classnames';
import util from '../Util';

class ProfileDetail extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            mode: 0, //0 表示preview状态, 1 表示编辑
            name: this.props.name || '',
            nick: this.props.nick || '',
            domain: this.props.domain || '',
            desc: this.props.desc || '',
            photo: this.props.photo || ''
        };
    }

    componentWillReceiveProps(nextProps){
        let me = this;
        this.setState({
            name: nextProps.name,
            nick: nextProps.nick,
            domain: nextProps.domain,
            desc: nextProps.desc,
            photo: nextProps.photo
        });

        //file uploading validation
        $('input[name=photo]').change(function(){
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

    switchMode(){
        if(this.state.mode === 1){
            //todo 如果没有变化,就别提交
            //保存
            $.ajax({
                url: '/api/user',
                method: 'PUT',
                data: this.state,
                success: (res)=>{
                    if(res.code ===0){
                        alert('保存成功!');
                        this.setState({
                            mode: (this.state.mode+1)%2
                        });
                    }else{
                        alert(res.msg);
                    }
                }
            });
            return;
        }
        this.setState({
            mode: (this.state.mode+1)%2
        });

    }

    onChange(type, e){
        this.setState({
            [`${type}`]: e.target.value
        });

    }

    handleUpload(){
        let me =this;
        var formData = new FormData(ReactDOM.findDOMNode(this.refs.form));
        console.log(ReactDOM.findDOMNode(this.refs.form));
        $.ajax({
            url: '/api/upload/photo',  //Server script to process data
            type: 'POST',
            xhr: function() {  // Custom XMLHttpRequest
                var myXhr = $.ajaxSettings.xhr();
                return myXhr;
            },
            //Ajax events
            // beforeSend: beforeSendHandler,
            success: (res)=>{
                console.log(res);
                if(res.code ===0){
                    me.setState({
                        photo: res.data
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

    handleImgClick(){
        $('input[name=photo]').trigger('click');
    }
    
    render(){
        //暂时包括: 头像,昵称, 简介(一句话介绍自己),个性域名
        let me = this;
        let config = util.loadConfig();
        return (
            <div className="drip-ui-profile-detail">
                <div className="photo">
                    <div className="img-wrap">
                        <img src={me.state.photo}/>
                        <div className="img-cover" onClick={me.handleImgClick.bind(me)}>
                            <span>上传头像</span>
                        </div>
                        <form ref="form" encType="multipart/form-data">
                            <input type="file" name="photo"/>
                        </form>
                    </div>
                    <button className="btn-1" onClick={me.switchMode.bind(me)}>{me.state.mode===0? '编辑' : '保存'}</button>
                </div>
                <div className={classnames({'detail-view': true, 'hidden': me.state.mode===1})}>
                    <p><label>用&ensp;户&ensp;名:</label><span>{me.state.name}</span></p>
                    <p><label>昵&emsp;&emsp;称:</label><span>{me.state.nick}</span></p>
                    <p><label>个性域名:</label><span>{me.state.domain+'.'+config.baseUrl}</span></p>
                    <div><label>简&emsp;&emsp;介:</label><span>{me.state.desc}</span></div>
                </div>
                <div className={classnames({'detail-edit': true, 'hidden': me.state.mode===0})}>
                    <p><label>用&ensp;户&ensp;名:</label><input disabled="disabled" type="text" value={me.state.name} onChange={me.onChange.bind(me, 'name')}/></p>
                    <p><label>昵&emsp;&emsp;称:</label><input type="text" value={me.state.nick} onChange={me.onChange.bind(me, 'nick')}/></p>
                    <p><label>个性域名:</label><input disabled="disabled" type="text" value={me.state.domain+'.'+config.baseUrl} onChange={me.onChange.bind(me, 'domain')}/></p>
                    <div><label>简&emsp;&emsp;介:</label><textarea value={me.state.desc} onChange={me.onChange.bind(me, 'desc')}/></div>
                </div>
            </div>
        );
    }
}

export default ProfileDetail;