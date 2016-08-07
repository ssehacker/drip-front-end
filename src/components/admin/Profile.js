/**
 * Created by ssehacker on 16/7/23.
 */
import Tabs from '../Tabs';
let {TabPanel} = Tabs;
import ProfileDetail from './ProfileDetail';
import ProfileResume from './ProfileResume';
import ProfileContact from './ProfileContact';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: {}
        };
    }

    componentDidMount(){
        let me = this;
        $.ajax({
            url: '/api/user',
            method: 'GET',
            success: function (res) {
                if(res.code === 0){
                    me.setState({
                        user: res.data
                    });
                }

            }
        });
    }

    render(){
        let me = this;
        let {resumeMD, contactMD, ...other} = me.state.user;
        return (
            <div>
                <Tabs defaultKey="tab1">
                    <TabPanel key="tab1" title="基本信息">
                        <ProfileDetail {...other}/>
                    </TabPanel>
                    <TabPanel key="tab2" title="个人档案">
                        <ProfileResume value={resumeMD}/>
                    </TabPanel>
                    <TabPanel key="tab3" title="联系方式">
                        <ProfileContact value={contactMD}/>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default Profile;
