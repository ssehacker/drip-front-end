/**
 * Created by ssehacker on 16/7/23.
 */
import Tabs from '../Tabs';
let {TabPanel} = Tabs;
import ProfileDetail from './ProfileDetail';
import ProfileResume from './ProfileResume';

class Profile extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        let user = {
            name: 'zhouyong',
            nick: '周勇',
            domain: 'zhouyong.com',
            desc: '我是周勇',
            photo:'https://avatars1.githubusercontent.com/u/9441414?v=3&s=200'
        };
        return (
            <div>
                <Tabs defaultKey="tab1">
                    <TabPanel key="tab1" title="基本信息">
                        <ProfileDetail {...user}/>
                    </TabPanel>
                    <TabPanel key="tab2" title="个人档案">
                        <ProfileResume />
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default Profile;
